// Server voor "Lezen met Kaia".
// Geen dependencies: alleen de standaardmodules van Node.
//
// Naast de statische bestanden is er een klein API:
//   POST /api/log      de app stuurt hier de antwoorden heen (zie logboek.js)
//   GET  /api/log      de ouderpagina haalt de antwoorden op (alleen van de
//                      eigen kinderen; de beheerder ziet alles)
//   POST /api/login    inloggen op de ouderpagina
//   POST /api/koppel   een tablet koppelen aan een gezin met de koppelcode
//   GET/POST /api/beheer  gezinnen en kinderen beheren (alleen de beheerder)
//
// Alles staat in DATA_DIR: logboek.jsonl (de antwoorden), gezinnen.json (de
// gezinnen, kinderen en wachtwoorden als scrypt-hash) en geheim.txt (de sleutel
// waarmee inlogtokens worden ondertekend). Op Railway hoort daar een volume te
// zitten, anders is alles na elke nieuwe deploy weer weg.
//
// De beheerder logt in met gebruikersnaam "beheer" en OUDER_CODE als wachtwoord.

const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const DATA_DIR = process.env.DATA_DIR || process.env.RAILWAY_VOLUME_MOUNT_PATH || path.join(ROOT, 'data');
const LOGBOEK = path.join(DATA_DIR, 'logboek.jsonl');
const GEZINNEN = path.join(DATA_DIR, 'gezinnen.json');
const GEHEIM_BESTAND = path.join(DATA_DIR, 'geheim.txt');
const OUDER_CODE = process.env.OUDER_CODE || '';
const BEHEER = 'beheer';

const MAX_BODY = 256 * 1024;
const MAX_LOGBOEK = 50 * 1024 * 1024;
const TOKEN_DAGEN = 30;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.mp3': 'audio/mpeg',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

fs.mkdirSync(DATA_DIR, { recursive: true });

/* ---------- Hulpjes ---------- */

function stuurJson(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify(data));
}

function leesBody(req) {
  return new Promise((klaar, mis) => {
    let body = '';
    req.on('data', (stuk) => {
      body += stuk;
      if (body.length > MAX_BODY) { mis(new Error('te groot')); req.destroy(); }
    });
    req.on('end', () => {
      try { klaar(JSON.parse(body || 'null')); } catch (e) { mis(new Error('geen json')); }
    });
    req.on('error', mis);
  });
}

function schrijfVeilig(bestand, inhoud) {
  const tijdelijk = `${bestand}.${process.pid}.tmp`;
  fs.writeFileSync(tijdelijk, inhoud);
  fs.renameSync(tijdelijk, bestand);
}

const hash = (t) => crypto.createHash('sha256').update(String(t)).digest();
function gelijk(a, b) { return crypto.timingSafeEqual(hash(a), hash(b)); }
const nieuwId = () => crypto.randomBytes(4).toString('hex');

// Koppelcodes en wachtwoorden zonder letters die op elkaar lijken (0/o, 1/l/i).
const LETTERS = 'abcdefghjkmnpqrstuvwxyz23456789';
function willekeurig(lengte) {
  let s = '';
  for (let i = 0; i < lengte; i++) s += LETTERS[crypto.randomInt(LETTERS.length)];
  return s;
}
const nieuweCode = () => `${willekeurig(4)}-${willekeurig(4)}`.toUpperCase();
const nieuwWachtwoord = () => `${willekeurig(4)}-${willekeurig(4)}-${willekeurig(4)}`;
const normaalCode = (c) => String(c || '').toUpperCase().replace(/[^A-Z0-9]/g, '');

function wachtwoordHash(wachtwoord, zout = crypto.randomBytes(16).toString('hex')) {
  return { zout, hash: crypto.scryptSync(String(wachtwoord), zout, 32).toString('hex') };
}
function wachtwoordKlopt(wachtwoord, opgeslagen) {
  const { hash: h } = wachtwoordHash(wachtwoord, opgeslagen.zout);
  return crypto.timingSafeEqual(Buffer.from(h, 'hex'), Buffer.from(opgeslagen.hash, 'hex'));
}

/* ---------- Rem per IP-adres ---------- */
// Zo kan niemand wachtwoorden of koppelcodes raden door heel vaak te
// proberen, of het logboek volspammen.

const MAX_FOUTEN = 10;             // foute pogingen per kwartier
const MAX_POSTS = 60;              // antwoorden insturen, per minuut
const pogingen = new Map();        // sleutel -> tijdstippen

// Railway zet het echte adres in X-Real-IP. Bij X-Forwarded-For is het
// laatste adres dat van de proxy zelf; het eerste kan een bezoeker verzinnen.
function ipVan(req) {
  const echt = String(req.headers['x-real-ip'] || '').trim();
  const doorgestuurd = String(req.headers['x-forwarded-for'] || '').split(',').map((s) => s.trim()).filter(Boolean);
  return echt || doorgestuurd[doorgestuurd.length - 1] || req.socket.remoteAddress || '?';
}
function teVaak(sleutel, max, ms, tellen) {
  const nu = Date.now();
  const lijst = (pogingen.get(sleutel) || []).filter((t) => nu - t < ms);
  if (tellen) lijst.push(nu);
  if (lijst.length) pogingen.set(sleutel, lijst); else pogingen.delete(sleutel);
  return lijst.length > max;
}
const geblokkeerd = (ip) => teVaak(`fout:${ip}`, MAX_FOUTEN, 15 * 60000, false);
const telFout = (ip) => teVaak(`fout:${ip}`, MAX_FOUTEN, 15 * 60000, true);
setInterval(() => {
  const nu = Date.now();
  for (const [k, lijst] of pogingen) if (lijst.every((t) => nu - t > 15 * 60000)) pogingen.delete(k);
}, 5 * 60000).unref();

/* ---------- Gezinnen ---------- */
// { gezinnen: [{ id, naam, gebruikersnaam, wachtwoord: { zout, hash },
//                code, kinderen: [{ id, naam }] }],
//   toewijzingen: { "apparaat|wie": kindId } }   antwoorden van vóór het koppelen

let opslag = { gezinnen: [], toewijzingen: {} };
try { opslag = { ...opslag, ...JSON.parse(fs.readFileSync(GEZINNEN, 'utf8')) }; } catch (e) { /* nog leeg */ }
const bewaarGezinnen = () => schrijfVeilig(GEZINNEN, JSON.stringify(opslag, null, 2));

const gezinVan = (id) => opslag.gezinnen.find((g) => g.id === id);
const gezinMetCode = (code) => opslag.gezinnen.find((g) => normaalCode(g.code) === normaalCode(code) && normaalCode(code));
function kindVan(kindId) {
  for (const g of opslag.gezinnen) {
    const k = g.kinderen.find((x) => x.id === kindId);
    if (k) return { gezin: g, kind: k };
  }
  return null;
}

/* ---------- Inlogtokens ---------- */
// token = base64url(rol:gezin:verloopt:versie).handtekening
// De versie hangt af van het wachtwoord: een nieuw wachtwoord maakt oude
// tokens ongeldig.

let geheim;
try { geheim = fs.readFileSync(GEHEIM_BESTAND, 'utf8').trim(); } catch (e) { /* nog niet */ }
if (!geheim) { geheim = crypto.randomBytes(32).toString('hex'); schrijfVeilig(GEHEIM_BESTAND, geheim); }

function versieVan(rol, gezin) {
  const bron = rol === BEHEER ? OUDER_CODE : gezin ? gezin.wachtwoord.hash : '';
  return hash(bron).toString('hex').slice(0, 10);
}
function maakToken(rol, gezin) {
  const verloopt = Date.now() + TOKEN_DAGEN * 86400000;
  const inhoud = Buffer.from(`${rol}:${gezin ? gezin.id : '-'}:${verloopt}:${versieVan(rol, gezin)}`).toString('base64url');
  const handtekening = crypto.createHmac('sha256', geheim).update(inhoud).digest('base64url');
  return `${inhoud}.${handtekening}`;
}
function leesToken(req) {
  const m = String(req.headers.authorization || '').match(/^Bearer\s+([\w-]+)\.([\w-]+)$/);
  if (!m) return null;
  const verwacht = crypto.createHmac('sha256', geheim).update(m[1]).digest('base64url');
  if (!gelijk(verwacht, m[2])) return null;
  const [rol, gezinId, verloopt, versie] = Buffer.from(m[1], 'base64url').toString().split(':');
  if (Number(verloopt) < Date.now()) return null;
  if (rol === BEHEER) return OUDER_CODE && versie === versieVan(BEHEER) ? { rol } : null;
  const gezin = gezinVan(gezinId);
  if (!gezin || versie !== versieVan('ouder', gezin)) return null;
  return { rol: 'ouder', gezin };
}

/* ---------- Logboek ---------- */

// Alleen deze velden worden bewaard; alles wordt ingekort.
const TEKSTVELDEN = ['id', 't', 'apparaat', 'sessie', 'soort', 'wie', 'kind', 'onderdeel', 'titel', 'vraag', 'antwoord', 'juist', 'resultaat', 'niveau', 'rk'];
const GETALVELDEN = ['nr', 'punten', 'score', 'totaal', 'dag'];

function schoon(g) {
  if (!g || typeof g !== 'object') return null;
  const uit = {};
  for (const veld of TEKSTVELDEN) {
    if (g[veld] !== undefined && g[veld] !== null) uit[veld] = String(g[veld]).slice(0, 600);
  }
  for (const veld of GETALVELDEN) {
    const n = Number(g[veld]);
    if (g[veld] !== undefined && Number.isFinite(n)) uit[veld] = n;
  }
  if (!uit.id || !uit.t || !uit.soort) return null;
  return uit;
}

const bekend = new Set();
function leesLogboek() {
  if (!fs.existsSync(LOGBOEK)) return [];
  return fs.readFileSync(LOGBOEK, 'utf8').split('\n').filter(Boolean).map((r) => {
    try { return JSON.parse(r); } catch (e) { return null; }
  }).filter(Boolean);
}
leesLogboek().forEach((g) => bekend.add(g.id));

// Bij welk kind hoort een antwoord? Eerst het kind dat de app meestuurde,
// anders een toewijzing van de beheerder (voor antwoorden van vóór het koppelen).
const kindBij = (g) => g.kind || opslag.toewijzingen[`${g.apparaat}|${g.wie}`] || null;

async function logInsturen(req, res, ip) {
  if (teVaak(`post:${ip}`, MAX_POSTS, 60000, true)) return stuurJson(res, 429, { fout: 'te veel verzoeken' });
  const lijst = await leesBody(req);
  if (!Array.isArray(lijst)) return stuurJson(res, 400, { fout: 'verwacht een lijst' });
  let grootte = 0;
  try { grootte = fs.statSync(LOGBOEK).size; } catch (e) { /* nog geen logboek */ }
  if (grootte > MAX_LOGBOEK) return stuurJson(res, 507, { fout: 'logboek is vol' });

  // Een kind telt alleen mee als het bij de koppelcode van het apparaat hoort.
  const gezin = gezinMetCode(req.headers['x-gezin-code']);
  const nieuw = lijst.map(schoon).filter((g) => g && !bekend.has(g.id));
  nieuw.forEach((g) => {
    if (g.kind && !(gezin && gezin.kinderen.some((k) => k.id === g.kind))) delete g.kind;
    bekend.add(g.id);
  });
  if (nieuw.length) fs.appendFileSync(LOGBOEK, nieuw.map((g) => JSON.stringify(g)).join('\n') + '\n');
  stuurJson(res, 200, { ok: true, opgeslagen: nieuw.length });
}

function logOphalen(req, res) {
  const wie = leesToken(req);
  if (!wie) return stuurJson(res, 401, { fout: 'Log opnieuw in.' });
  const alles = leesLogboek().map((g) => ({ ...g, kind: kindBij(g) }));
  if (wie.rol === BEHEER) {
    const kinderen = opslag.gezinnen.flatMap((g) => g.kinderen.map((k) => ({ id: k.id, naam: `${k.naam} (${g.naam})` })));
    return stuurJson(res, 200, { rol: BEHEER, naam: 'Beheer', kinderen, gebeurtenissen: alles });
  }
  const ids = new Set(wie.gezin.kinderen.map((k) => k.id));
  stuurJson(res, 200, {
    rol: 'ouder',
    naam: wie.gezin.naam,
    code: wie.gezin.code,
    kinderen: wie.gezin.kinderen.map((k) => ({ id: k.id, naam: k.naam })),
    gebeurtenissen: alles.filter((g) => ids.has(g.kind))
  });
}

/* ---------- Inloggen en koppelen ---------- */

async function inloggen(req, res, ip) {
  if (geblokkeerd(ip)) return stuurJson(res, 429, { fout: 'Te vaak geprobeerd. Probeer het over een kwartier opnieuw.' });
  const { gebruikersnaam, wachtwoord } = (await leesBody(req)) || {};
  const naam = String(gebruikersnaam || '').trim().toLowerCase();
  if (naam === BEHEER) {
    if (OUDER_CODE && gelijk(String(wachtwoord || ''), OUDER_CODE)) return stuurJson(res, 200, { token: maakToken(BEHEER) });
  } else {
    const gezin = opslag.gezinnen.find((g) => g.gebruikersnaam === naam);
    if (gezin && wachtwoordKlopt(String(wachtwoord || ''), gezin.wachtwoord)) return stuurJson(res, 200, { token: maakToken('ouder', gezin) });
  }
  telFout(ip);
  stuurJson(res, 401, { fout: 'Gebruikersnaam of wachtwoord klopt niet.' });
}

async function koppelen(req, res, ip) {
  if (geblokkeerd(ip)) return stuurJson(res, 429, { fout: 'Te vaak geprobeerd. Probeer het over een kwartier opnieuw.' });
  const { code } = (await leesBody(req)) || {};
  const gezin = gezinMetCode(code);
  if (!gezin) { telFout(ip); return stuurJson(res, 404, { fout: 'Die koppelcode kennen we niet.' }); }
  stuurJson(res, 200, { gezin: gezin.naam, kinderen: gezin.kinderen.map((k) => ({ id: k.id, naam: k.naam })) });
}

/* ---------- Beheer ---------- */

function overzicht() {
  // Antwoorden zonder kind, per apparaat en figuur: die kan de beheerder toewijzen.
  const los = new Map();
  for (const g of leesLogboek()) {
    if (g.kind) continue;
    const sleutel = `${g.apparaat}|${g.wie}`;
    const r = los.get(sleutel) || { apparaat: g.apparaat, wie: g.wie, aantal: 0, eerste: g.t, laatste: g.t };
    if (g.soort === 'antwoord') r.aantal++;
    if (g.t < r.eerste) r.eerste = g.t;
    if (g.t > r.laatste) r.laatste = g.t;
    los.set(sleutel, r);
  }
  return {
    gezinnen: opslag.gezinnen.map((g) => ({ id: g.id, naam: g.naam, gebruikersnaam: g.gebruikersnaam, code: g.code, kinderen: g.kinderen })),
    los: [...los.values()].map((r) => ({ ...r, kind: opslag.toewijzingen[`${r.apparaat}|${r.wie}`] || null }))
  };
}

const tekst = (t, max = 60) => String(t || '').trim().slice(0, max);

async function beheer(req, res) {
  const wie = leesToken(req);
  if (!wie || wie.rol !== BEHEER) return stuurJson(res, 403, { fout: 'Alleen voor de beheerder.' });
  if (req.method === 'GET') return stuurJson(res, 200, overzicht());

  const v = (await leesBody(req)) || {};
  const gezin = gezinVan(v.gezin);
  let extra = {};
  switch (v.actie) {
    case 'gezin-nieuw': {
      const naam = tekst(v.naam);
      const gebruikersnaam = tekst(v.gebruikersnaam, 40).toLowerCase();
      if (!naam || !/^[a-z0-9._-]{3,40}$/.test(gebruikersnaam)) return stuurJson(res, 400, { fout: 'Geef een naam en een gebruikersnaam (minstens 3 tekens: letters, cijfers, punt, streepje).' });
      if (gebruikersnaam === BEHEER || opslag.gezinnen.some((g) => g.gebruikersnaam === gebruikersnaam)) return stuurJson(res, 400, { fout: 'Die gebruikersnaam bestaat al.' });
      const wachtwoord = nieuwWachtwoord();
      const nieuw = {
        id: nieuwId(), naam, gebruikersnaam, wachtwoord: wachtwoordHash(wachtwoord), code: nieuweCode(),
        kinderen: (Array.isArray(v.kinderen) ? v.kinderen : []).map((k) => tekst(k, 30)).filter(Boolean).slice(0, 10).map((k) => ({ id: nieuwId(), naam: k }))
      };
      opslag.gezinnen.push(nieuw);
      extra = { wachtwoord, code: nieuw.code, gezin: nieuw.id };
      break;
    }
    case 'kind-nieuw': {
      const naam = tekst(v.naam, 30);
      if (!gezin || !naam) return stuurJson(res, 400, { fout: 'Geef een naam.' });
      gezin.kinderen.push({ id: nieuwId(), naam });
      break;
    }
    case 'kind-weg': {
      if (!gezin) return stuurJson(res, 400, { fout: 'Onbekend gezin.' });
      gezin.kinderen = gezin.kinderen.filter((k) => k.id !== v.kind);
      break;
    }
    case 'wachtwoord-nieuw': {
      if (!gezin) return stuurJson(res, 400, { fout: 'Onbekend gezin.' });
      const wachtwoord = nieuwWachtwoord();
      gezin.wachtwoord = wachtwoordHash(wachtwoord);
      extra = { wachtwoord };
      break;
    }
    case 'code-nieuw': {
      if (!gezin) return stuurJson(res, 400, { fout: 'Onbekend gezin.' });
      gezin.code = nieuweCode();
      extra = { code: gezin.code };
      break;
    }
    case 'gezin-weg': {
      if (!gezin) return stuurJson(res, 400, { fout: 'Onbekend gezin.' });
      opslag.gezinnen = opslag.gezinnen.filter((g) => g !== gezin);
      break;
    }
    case 'toewijzen': {
      const sleutel = `${tekst(v.apparaat, 40)}|${tekst(v.wie, 20)}`;
      if (v.kind && !kindVan(v.kind)) return stuurJson(res, 400, { fout: 'Onbekend kind.' });
      if (v.kind) opslag.toewijzingen[sleutel] = v.kind; else delete opslag.toewijzingen[sleutel];
      break;
    }
    default:
      return stuurJson(res, 400, { fout: 'Onbekende actie.' });
  }
  bewaarGezinnen();
  stuurJson(res, 200, { ...overzicht(), ...extra });
}

/* ---------- Router ---------- */

const ROUTES = {
  'POST /api/log': logInsturen,
  'GET /api/log': logOphalen,
  'POST /api/login': inloggen,
  'POST /api/koppel': koppelen,
  'GET /api/beheer': beheer,
  'POST /api/beheer': beheer
};

async function api(req, res, urlPath) {
  const route = ROUTES[`${req.method} ${urlPath}`];
  if (!route) { res.writeHead(405); res.end(); return; }
  try {
    await route(req, res, ipVan(req));
  } catch (e) {
    if (!res.headersSent) stuurJson(res, 400, { fout: e.message === 'te groot' || e.message === 'geen json' ? e.message : 'Er ging iets mis.' });
    if (e.message !== 'te groot' && e.message !== 'geen json') console.error(e);
  }
}

/* ---------- Statische bestanden ---------- */

const server = http.createServer((req, res) => {
  let urlPath;
  try { urlPath = decodeURIComponent(req.url.split('?')[0]); } catch (e) { urlPath = '/'; }

  if (urlPath.startsWith('/api/')) { api(req, res, urlPath); return; }
  if (urlPath === '/ouders' || urlPath === '/ouders/') urlPath = '/ouders.html';
  if (urlPath.endsWith('/')) urlPath += 'index.html';

  // Voorkom dat er buiten de projectmap gelezen wordt, en houd verborgen
  // bestanden (.env!) en de datamap buiten bereik.
  const filePath = path.join(ROOT, path.normalize(urlPath));
  const binnen = path.relative(ROOT, filePath);
  if (!filePath.startsWith(ROOT) || binnen.split(path.sep).some((deel) => deel.startsWith('.'))
      || filePath === DATA_DIR || filePath.startsWith(DATA_DIR + path.sep) || binnen.startsWith('node_modules')) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>404 — pagina niet gevonden</h1>');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Lezen met Kaia draait op http://localhost:${PORT}`);
  console.log(`Data: ${DATA_DIR}${OUDER_CODE ? '' : ' (zet OUDER_CODE om als beheerder in te loggen)'}`);
});

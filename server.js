// Server voor "Lezen met Kaia".
// Geen dependencies: alleen de standaardmodules van Node.
//
// Naast de statische bestanden is er één klein API'tje:
//   POST /api/log  — de app stuurt hier de antwoorden heen (zie logboek.js)
//   GET  /api/log  — de ouderpagina haalt ze op, met de oudercode als header
// De antwoorden komen in DATA_DIR/logboek.jsonl. Op Railway hoort daar een
// volume te zitten, anders is het logboek na elke nieuwe deploy weer leeg.

const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const DATA_DIR = process.env.DATA_DIR || process.env.RAILWAY_VOLUME_MOUNT_PATH || path.join(ROOT, 'data');
const LOGBOEK = path.join(DATA_DIR, 'logboek.jsonl');
const OUDER_CODE = process.env.OUDER_CODE || '';

const MAX_BODY = 256 * 1024;
const MAX_LOGBOEK = 50 * 1024 * 1024;

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

/* ---------- Logboek ---------- */

// Alleen deze velden worden bewaard; alles wordt ingekort.
const TEKSTVELDEN = ['id', 't', 'apparaat', 'sessie', 'soort', 'wie', 'onderdeel', 'titel', 'vraag', 'antwoord', 'juist', 'resultaat'];
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

fs.mkdirSync(DATA_DIR, { recursive: true });
const bekend = new Set();
function leesLogboek() {
  if (!fs.existsSync(LOGBOEK)) return [];
  return fs.readFileSync(LOGBOEK, 'utf8').split('\n').filter(Boolean).map((r) => {
    try { return JSON.parse(r); } catch (e) { return null; }
  }).filter(Boolean);
}
leesLogboek().forEach((g) => bekend.add(g.id));

function stuurJson(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify(data));
}

function codeKlopt(gegeven) {
  if (!OUDER_CODE || typeof gegeven !== 'string') return false;
  const a = crypto.createHash('sha256').update(gegeven).digest();
  const b = crypto.createHash('sha256').update(OUDER_CODE).digest();
  return crypto.timingSafeEqual(a, b);
}

function api(req, res) {
  if (req.method === 'POST') {
    let body = '';
    let teGroot = false;
    req.on('data', (stuk) => {
      body += stuk;
      if (body.length > MAX_BODY) { teGroot = true; req.destroy(); }
    });
    req.on('end', () => {
      if (teGroot) return;
      let lijst;
      try { lijst = JSON.parse(body); } catch (e) { return stuurJson(res, 400, { fout: 'geen json' }); }
      if (!Array.isArray(lijst)) return stuurJson(res, 400, { fout: 'verwacht een lijst' });
      let grootte = 0;
      try { grootte = fs.statSync(LOGBOEK).size; } catch (e) { /* nog geen logboek */ }
      if (grootte > MAX_LOGBOEK) return stuurJson(res, 507, { fout: 'logboek is vol' });

      const nieuw = lijst.map(schoon).filter((g) => g && !bekend.has(g.id));
      nieuw.forEach((g) => bekend.add(g.id));
      if (nieuw.length) fs.appendFileSync(LOGBOEK, nieuw.map((g) => JSON.stringify(g)).join('\n') + '\n');
      stuurJson(res, 200, { ok: true, opgeslagen: nieuw.length });
    });
    return;
  }

  if (req.method === 'GET') {
    if (!OUDER_CODE) return stuurJson(res, 503, { fout: 'Er is nog geen OUDER_CODE ingesteld op de server.' });
    if (!codeKlopt(req.headers['x-ouder-code'])) return stuurJson(res, 401, { fout: 'Die code klopt niet.' });
    return stuurJson(res, 200, { gebeurtenissen: leesLogboek() });
  }

  res.writeHead(405);
  res.end();
}

/* ---------- Statische bestanden ---------- */

const server = http.createServer((req, res) => {
  let urlPath;
  try { urlPath = decodeURIComponent(req.url.split('?')[0]); } catch (e) { urlPath = '/'; }

  if (urlPath === '/api/log') { api(req, res); return; }
  if (urlPath === '/ouders' || urlPath === '/ouders/') urlPath = '/ouders.html';
  if (urlPath.endsWith('/')) urlPath += 'index.html';

  // Voorkom dat er buiten de projectmap gelezen wordt, en houd verborgen
  // bestanden (.env!) en het logboek zelf buiten bereik.
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
  console.log(`Logboek: ${LOGBOEK}${OUDER_CODE ? '' : ' (zet OUDER_CODE om de ouderpagina te gebruiken)'}`);
});

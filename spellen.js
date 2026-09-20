/*
 * Groep 5 — de spellingspelletjes met het konijn.
 *
 * Vier spellen die allemaal op dezelfde woordpakketten uit groep5.js draaien:
 *   klank    Wortelkeuze   kies het stukje dat in het gat hoort
 *   bouw     Woordbouwer   bouw het woord met blokjes (één blokje te veel)
 *   flits    Flitswoord    het woord is even te zien, daarna natypen
 *   luister  Luisterwoord  dictee: luisteren en typen
 *
 * Daarnaast zijn er twee echte dictees (woorden en zinnen), door elkaar uit
 * alle pakketten en zonder tussendoor nakijken; zie "Dictee" verderop.
 *
 * Een ronde is acht woorden. Per woord is er 1 punt (goed), een half punt
 * (goed in de tweede poging, of na nog een keer kijken) of 0. Elk woord dat
 * goed gaat levert een wortel op; de sterren gaan per spel + pakket.
 *
 * De gedeelde hulpjes (schermen wisselen, opslag, audio) komen uit app.js via
 * window.KaiaApp. De voortgang staat los van die van groep 8, zodat de een
 * nooit de sterren van de ander wist.
 */

(() => {
  'use strict';

  const { $, kies, laad, bewaar, escapeHtml, toonScherm, spreek, speelOpname, stopSpreken } = window.KaiaApp;

  const NAAM = GROEP5.konijn;
  const OPSLAG = 'lezen-met-kaia:groep5:v1';
  const WOORDEN_PER_RONDE = 8;

  // Klanken die bij Woordbouwer samen op één blokje horen, langste eerst.
  const KLANKEN = ['eeuw', 'ieuw', 'sch', 'aai', 'ooi', 'oei', 'ij', 'ei', 'au', 'ou', 'ui', 'eu',
    'oe', 'ie', 'aa', 'ee', 'oo', 'uu', 'ch', 'ng', 'nk'];

  const GOED = ['Ja! Een wortel voor mij!', 'Knap hoor!', 'Helemaal goed!', 'Hup, goed zo!', 'Mmm, lekker, een wortel!'];
  const BIJNA = 'Goed! Volgende keer lukt het vast in één keer.';

  let voortgang = laad(OPSLAG, null) || { wortels: 0, scores: {} };
  let spel = null;        // het gekozen spel (uit GROEP5.spellen)
  let pakket = null;      // het gekozen woordpakket
  let ronde = null;       // { woorden, nr, uitslag }
  let dictee = null;      // { d, items, nr, antwoorden } tijdens een dictee, anders null
  let timers = [];

  /* ------------------------------------------------------------------ */
  /*  Hulpjes                                                            */
  /* ------------------------------------------------------------------ */

  // 'tr[ei]n' → { woord: 'trein', voor: 'tr', deel: 'ei', na: 'n', ... }
  function ontleed(item) {
    const m = /^(.*)\[(.+)\](.*)$/.exec(item.w);
    if (!m) return { ...item, woord: item.w, voor: item.w, deel: '', na: '' };
    return { ...item, woord: m[1] + m[2] + m[3], voor: m[1], deel: m[2], na: m[3] };
  }

  // De keuzes voor het lastige stukje. Zonder `opties` is het een
  // enkel/dubbel-pakket: 'k' of 'kk'.
  function optiesVoor(w) {
    if (pakket.opties) return pakket.opties;
    const letter = w.deel[0];
    return [letter, letter + letter];
  }

  function blokjes(stuk) {
    const uit = [];
    let rest = stuk;
    while (rest) {
      const klank = KLANKEN.find((k) => rest.startsWith(k));
      const blok = klank || rest[0];
      uit.push(blok);
      rest = rest.slice(blok.length);
    }
    return uit;
  }

  function schud(lijst) {
    const kopie = lijst.slice();
    for (let i = kopie.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [kopie[i], kopie[j]] = [kopie[j], kopie[i]];
    }
    return kopie;
  }

  function straks(fn, ms) { timers.push(setTimeout(fn, ms)); }
  function wisTimers() { timers.forEach(clearTimeout); timers = []; }

  function konijn(sel, stemming) { Konijn.render($(sel), stemming, NAAM); }
  function zeg(tekst) { $('#g5-praatje').textContent = tekst; }
  function zegWoord(w) { speelOpname(`woord:${w.woord}`, `${w.woord}. ${w.zin}`); }

  function woordMetDeel(w) {
    return `${escapeHtml(w.voor)}<span class="deel">${escapeHtml(w.deel)}</span>${escapeHtml(w.na)}`;
  }

  function sterrenVoor(percentage) {
    if (percentage >= 85) return 3;
    if (percentage >= 60) return 2;
    if (percentage >= 35) return 1;
    return 0;
  }

  function sterrenTekst(n) { return '⭐'.repeat(n) + '☆'.repeat(3 - n); }
  function scoreVan(spelId, pakketId) { return voortgang.scores[`${spelId}:${pakketId}`]; }

  /* ------------------------------------------------------------------ */
  /*  Spel kiezen                                                        */
  /* ------------------------------------------------------------------ */

  function toonStart(praatje) {
    wisTimers();
    stopSpreken();
    dictee = null;
    konijn('#konijn-start', 'zwaai');
    $('#g5-welkom').textContent = (praatje || kies(GROEP5.welkom)).replace('{naam}', NAAM);

    const houder = $('#g5-spellen');
    houder.innerHTML = '';
    GROEP5.spellen.forEach((s) => {
      const sterren = GROEP5.pakketten.reduce((n, p) => n + ((scoreVan(s.id, p.id) || {}).sterren || 0), 0);
      const knop = document.createElement('button');
      knop.className = 'kaart';
      knop.type = 'button';
      knop.innerHTML = `
        <span class="kaart-emoji">${s.emoji}</span>
        <span class="kaart-titel">${escapeHtml(s.titel)}</span>
        <span class="kaart-meta"><span class="label">${escapeHtml(s.soort)}</span></span>
        <span class="kaart-score ${sterren ? '' : 'leeg'}">${
          sterren ? `⭐ ${sterren} van de ${GROEP5.pakketten.length * 3} sterren` : 'Nog niet gespeeld'
        }</span>`;
      knop.addEventListener('click', () => toonPakketten(s));
      houder.appendChild(knop);
    });

    const dictees = $('#g5-dictees');
    dictees.innerHTML = '';
    GROEP5.dictees.forEach((d) => {
      const score = scoreVan('dictee', d.id);
      const knop = document.createElement('button');
      knop.className = 'kaart';
      knop.type = 'button';
      knop.innerHTML = `
        <span class="kaart-emoji">${d.emoji}</span>
        <span class="kaart-titel">${escapeHtml(d.titel)}</span>
        <span class="kaart-meta"><span class="label">${escapeHtml(d.soort)}</span></span>
        <span class="kaart-score ${score ? '' : 'leeg'}">${
          score ? `${sterrenTekst(score.sterren)} &nbsp;beste: ${score.beste}%` : 'Nog niet gedaan'
        }</span>`;
      knop.addEventListener('click', () => startDictee(d));
      dictees.appendChild(knop);
    });

    $('#g5-totaal').textContent = voortgang.wortels
      ? `${NAAM} heeft al ${voortgang.wortels} ${voortgang.wortels === 1 ? 'wortel' : 'wortels'} van jou gekregen. 🥕`
      : `${NAAM} heeft nog geen wortels. Voor elk goed woord krijgt ${NAAM} er één!`;
    toonScherm('scherm-g5-start');
  }

  /* ------------------------------------------------------------------ */
  /*  Woordpakket kiezen                                                 */
  /* ------------------------------------------------------------------ */

  function toonPakketten(s) {
    wisTimers();
    stopSpreken();
    dictee = null;
    spel = s;
    konijn('#konijn-pakket', 'blij');
    $('#g5-spel-soort').textContent = s.soort;
    $('#g5-spel-titel').textContent = `${s.emoji} ${s.titel}`;
    $('#g5-spel-uitleg').textContent = s.uitleg;

    const houder = $('#g5-pakketten');
    houder.innerHTML = '';
    GROEP5.pakketten.forEach((p) => {
      const score = scoreVan(s.id, p.id);
      const knop = document.createElement('button');
      knop.className = 'kaart';
      knop.type = 'button';
      knop.innerHTML = `
        <span class="kaart-emoji">${p.emoji}</span>
        <span class="kaart-titel">${escapeHtml(p.titel)}</span>
        <span class="kaart-meta">
          <span class="label">${escapeHtml(p.soort)}</span>
          <span class="kaart-meta-vragen">${p.woorden.length} woorden</span>
        </span>
        <span class="kaart-score ${score ? '' : 'leeg'}">${score ? sterrenTekst(score.sterren) : 'Nog niet gespeeld'}</span>`;
      knop.addEventListener('click', () => startRonde(p));
      houder.appendChild(knop);
    });

    toonScherm('scherm-g5-pakket');
    spreek(s.uitleg, `g5:spel:${s.id}`);
  }

  /* ------------------------------------------------------------------ */
  /*  Een ronde                                                          */
  /* ------------------------------------------------------------------ */

  function startRonde(p) {
    pakket = p;
    ronde = {
      woorden: schud(p.woorden.map(ontleed)).slice(0, WOORDEN_PER_RONDE),
      nr: 0,
      uitslag: []
    };
    toonScherm('scherm-g5-spel');
    volgendeWoord();
  }

  function tekenWortels() {
    $('#g5-wortels').innerHTML = ronde.woorden.map((_, i) => {
      const u = ronde.uitslag[i];
      if (u) return `<span class="wortel ${u.punten >= 1 ? 'vol' : u.punten > 0 ? 'half' : 'mis'}">${u.punten > 0 ? '🥕' : '·'}</span>`;
      return `<span class="wortel ${i === ronde.nr ? 'nu' : 'leeg'}">🥕</span>`;
    }).join('');
  }

  function volgendeWoord() {
    wisTimers();
    stopSpreken();
    if (ronde.nr >= ronde.woorden.length) { toonKlaar(); return; }

    const klaarKnop = $('#g5-knop-klaar');
    klaarKnop.hidden = true;
    klaarKnop.disabled = true;
    klaarKnop.onclick = null;
    klaarKnop.textContent = 'Klaar!';
    $('#g5-knop-verder').hidden = true;

    tekenWortels();
    konijn('#konijn-spel', spel.id === 'flits' ? 'kijk' : spel.id === 'luister' ? 'luister' : 'blij');
    zeg(spel.opdracht);
    TEKEN[spel.id](ronde.woorden[ronde.nr]);
  }

  // Elk spel roept dit precies één keer per woord aan.
  function rondAf(w, punten, gegeven) {
    ronde.uitslag[ronde.nr] = { w, punten, gegeven };
    if (punten > 0) {
      voortgang.wortels += 1;
      bewaar(OPSLAG, voortgang);
    }
    tekenWortels();

    if (punten > 0) {
      konijn('#konijn-spel', 'juich');
      zeg(punten >= 1 ? kies(GOED) : BIJNA);
      straks(verder, punten >= 1 ? 1400 : 1900);
      return;
    }

    konijn('#konijn-spel', 'troost');
    const uitleg = w.lang
      ? `Het is ${w.woord}. Maak het langer: ${w.lang}. Dan hoor je de ${w.deel}.`
      : `Het is ${w.woord}. ${pakket.tip}`;
    zeg(uitleg);
    spreek(uitleg, w.lang ? `lang:${w.woord}` : `g5:pakket:${pakket.id}`);
    // Pas even later de focus geven: de Enter waarmee het kind net zijn antwoord
    // gaf, zou anders meteen ook op "Verder" drukken en de uitleg wegklikken.
    const knop = $('#g5-knop-verder');
    knop.hidden = false;
    straks(() => knop.focus(), 600);
  }

  function verder() {
    ronde.nr += 1;
    volgendeWoord();
  }

  /* ------------------------------------------------------------------ */
  /*  De vier spellen                                                    */
  /* ------------------------------------------------------------------ */

  function kop(w, metLuisterknop) {
    return `
      ${w.emoji ? `<div class="spel-plaatje" aria-hidden="true">${w.emoji}</div>` : ''}
      ${metLuisterknop ? '<button type="button" class="luisterknop" id="g5-luister">🔊 Luister nog een keer</button>' : ''}`;
  }

  function sluitLuisterknopAan(w) {
    const knop = $('#g5-luister');
    if (knop) knop.addEventListener('click', () => zegWoord(w));
  }

  const TEKEN = {
    /* ---- Wortelkeuze: kies het stukje dat in het gat hoort ---- */
    klank(w) {
      const veld = $('#g5-veld');
      veld.innerHTML = `
        ${kop(w, true)}
        <p class="spel-woord">${escapeHtml(w.voor)}<span class="gat" id="g5-gat">&nbsp;</span>${escapeHtml(w.na)}</p>
        <div class="wortel-opties" id="g5-opties"></div>`;
      sluitLuisterknopAan(w);

      const opties = $('#g5-opties');
      optiesVoor(w).forEach((optie) => {
        const knop = document.createElement('button');
        knop.type = 'button';
        knop.className = 'wortel-knop';
        knop.innerHTML = `<span class="wortel-loof" aria-hidden="true">🌿</span><span class="wortel-tekst">${escapeHtml(optie)}</span>`;
        knop.addEventListener('click', () => {
          const goed = optie === w.deel;
          const gat = $('#g5-gat');
          gat.textContent = optie;
          gat.classList.add(goed ? 'is-goed' : 'is-fout');
          opties.querySelectorAll('button').forEach((k) => { k.disabled = true; });
          knop.classList.add(goed ? 'is-goed' : 'is-fout');
          if (!goed) {
            straks(() => {
              gat.textContent = w.deel;
              gat.className = 'gat is-goed';
              opties.querySelectorAll('button').forEach((k) => {
                if (k.querySelector('.wortel-tekst').textContent === w.deel) k.classList.add('is-goed');
              });
            }, 900);
          }
          rondAf(w, goed ? 1 : 0, w.voor + optie + w.na);
        });
        opties.appendChild(knop);
      });

      zegWoord(w);
    },

    /* ---- Woordbouwer: blokjes in de goede volgorde, één blokje te veel ---- */
    bouw(w) {
      const juist = [...blokjes(w.voor), w.deel, ...blokjes(w.na)];
      const afleiders = optiesVoor(w).filter((o) => o !== w.deel);
      const tegels = schud([...juist, ...afleiders]).map((tekst, id) => ({ tekst, id }));
      let vakjes = new Array(juist.length).fill(null);   // per vakje een tegel of null
      let pogingen = 0;
      let opSlot = false;

      const veld = $('#g5-veld');
      veld.innerHTML = `
        ${kop(w, true)}
        <div class="bouw-vakjes" id="g5-vakjes"></div>
        <div class="bouw-tegels" id="g5-tegels"></div>`;
      sluitLuisterknopAan(w);

      function teken(klasse) {
        const vakjesEl = $('#g5-vakjes');
        vakjesEl.className = `bouw-vakjes ${klasse || ''}`;
        vakjesEl.innerHTML = '';
        vakjes.forEach((tegel, i) => {
          const knop = document.createElement('button');
          knop.type = 'button';
          knop.className = `bouw-vakje ${tegel ? 'gevuld' : ''}`;
          knop.textContent = tegel ? tegel.tekst : '';
          knop.setAttribute('aria-label', tegel ? `Blokje ${tegel.tekst} terugleggen` : `Leeg vakje ${i + 1}`);
          knop.disabled = opSlot || !tegel;
          knop.addEventListener('click', () => { vakjes[i] = null; teken(); });
          vakjesEl.appendChild(knop);
        });

        const tegelsEl = $('#g5-tegels');
        tegelsEl.innerHTML = '';
        tegels.forEach((tegel) => {
          const gebruikt = vakjes.includes(tegel);
          const knop = document.createElement('button');
          knop.type = 'button';
          knop.className = `bouw-tegel ${gebruikt ? 'weg' : ''}`;
          knop.textContent = tegel.tekst;
          knop.disabled = opSlot || gebruikt;
          knop.addEventListener('click', () => {
            const plek = vakjes.indexOf(null);
            if (plek < 0) return;
            vakjes[plek] = tegel;
            teken();
            if (!vakjes.includes(null)) { opSlot = true; teken(); straks(kijkNa, 350); }
          });
          tegelsEl.appendChild(knop);
        });
      }

      function kijkNa() {
        const gebouwd = vakjes.map((t) => t.tekst).join('');
        if (gebouwd === w.woord) {
          teken('is-goed');
          rondAf(w, pogingen === 0 ? 1 : 0.5, gebouwd);
          return;
        }
        pogingen += 1;
        teken('is-fout');
        if (pogingen < 2) {
          konijn('#konijn-spel', 'denk');
          zeg('Bijna! Kijk nog eens goed naar de blokjes en probeer het opnieuw.');
          straks(() => {
            vakjes = new Array(juist.length).fill(null);
            opSlot = false;
            teken();
          }, 1100);
          return;
        }
        // Tweede keer mis: laat zien hoe het wél moet.
        straks(() => {
          vakjes = juist.map((tekst) => ({ tekst }));
          teken('is-goed');
          $('#g5-tegels').classList.add('klaar');
        }, 1000);
        rondAf(w, 0, gebouwd);
      }

      teken();
      zegWoord(w);
    },

    flits(w) { tekenTypen(w, true); },
    luister(w) { tekenTypen(w, false); }
  };

  /* ---- Flitswoord en Luisterwoord: het woord typen ---- */
  function tekenTypen(w, flits) {
    let gekeken = false;
    let klaar = false;

    const veld = $('#g5-veld');
    veld.innerHTML = `
      ${kop(w, !flits)}
      ${flits ? '<div class="flits-vak" id="g5-flits"></div>' : ''}
      <input type="text" class="spel-invoer" id="g5-invoer" ${flits ? 'hidden' : ''}
             autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false"
             aria-label="Typ het woord" style="width:${Math.max(7, w.woord.length + 3)}ch">
      ${flits ? '<p><button type="button" class="tekstknop" id="g5-kijk" hidden>👀 Nog één keer kijken</button></p>' : ''}
      <p class="spel-nakijk" id="g5-nakijk" hidden></p>`;
    sluitLuisterknopAan(w);

    const invoer = $('#g5-invoer');
    const klaarKnop = $('#g5-knop-klaar');

    function toonInvoer() {
      invoer.hidden = false;
      invoer.focus();
      klaarKnop.hidden = false;
      klaarKnop.disabled = !invoer.value.trim();
    }

    function flitsWoord() {
      const vak = $('#g5-flits');
      vak.textContent = w.woord;
      vak.className = 'flits-vak zichtbaar';
      invoer.hidden = true;
      klaarKnop.hidden = true;
      $('#g5-kijk').hidden = true;
      konijn('#konijn-spel', 'kijk');
      straks(() => {
        vak.textContent = '?';
        vak.className = 'flits-vak';
        konijn('#konijn-spel', 'denk');
        zeg('Weg is het woord! Typ het precies zo na.');
        toonInvoer();
        $('#g5-kijk').hidden = gekeken;
      }, 1000 + 350 * w.woord.length);
    }

    function kijkNa() {
      if (klaar || !invoer.value.trim()) return;
      klaar = true;
      wisTimers();
      const gegeven = invoer.value.trim().toLowerCase();
      const goed = gegeven === w.woord;
      invoer.disabled = true;
      invoer.classList.add(goed ? 'is-goed' : 'is-fout');
      klaarKnop.hidden = true;
      if (flits) {
        $('#g5-kijk').hidden = true;
        $('#g5-flits').textContent = w.woord;
        $('#g5-flits').className = `flits-vak zichtbaar ${goed ? 'is-goed' : ''}`;
      }
      if (!goed) {
        const nakijk = $('#g5-nakijk');
        nakijk.innerHTML = `Zo schrijf je het: <b>${woordMetDeel(w)}</b>`;
        nakijk.hidden = false;
      }
      rondAf(w, goed ? (gekeken ? 0.5 : 1) : 0, gegeven);
    }

    invoer.addEventListener('input', () => { klaarKnop.disabled = !invoer.value.trim(); });
    invoer.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return;
      e.preventDefault();
      if (!e.repeat) kijkNa();
    });
    klaarKnop.onclick = kijkNa;

    if (flits) {
      $('#g5-kijk').addEventListener('click', () => {
        gekeken = true;
        zeg('Goed kijken! Dit is de laatste keer.');
        flitsWoord();
      });
      flitsWoord();
    } else {
      toonInvoer();
      zegWoord(w);
    }
  }

  /* ------------------------------------------------------------------ */
  /*  Klaar                                                              */
  /* ------------------------------------------------------------------ */

  function toonKlaar() {
    wisTimers();
    const totaal = ronde.uitslag.length;
    const punten = ronde.uitslag.reduce((n, u) => n + u.punten, 0);
    const goedAantal = ronde.uitslag.filter((u) => u.punten > 0).length;
    const percentage = Math.round((punten / totaal) * 100);
    const sterren = sterrenVoor(percentage);

    const sleutel = `${spel.id}:${pakket.id}`;
    const eerder = voortgang.scores[sleutel];
    voortgang.scores[sleutel] = {
      sterren: Math.max(sterren, eerder ? eerder.sterren : 0),
      beste: Math.max(percentage, eerder ? eerder.beste : 0),
      keer: (eerder ? eerder.keer : 0) + 1
    };
    bewaar(OPSLAG, voortgang);

    konijn('#konijn-klaar', sterren >= 2 ? 'juich' : 'blij');
    const tekst = GROEP5.einde.spel[sterren];
    $('#g5-klaar-tekst').textContent = tekst;

    $('#g5-sterren').innerHTML = [0, 1, 2].map((i) =>
      i < sterren
        ? `<span class="ster-aan" style="animation-delay:${i * 0.18}s">⭐</span>`
        : '<span class="ster-uit">☆</span>').join('');
    $('#g5-score').textContent = `${goedAantal} van de ${totaal} woorden goed · 🥕 ${NAAM} heeft nu ${voortgang.wortels} wortels`;

    $('#g5-advies').hidden = true;
    $('#g5-overzicht-kop').textContent = 'Deze woorden heb je geoefend';
    $('#g5-overzicht').innerHTML = ronde.uitslag.map((u) => {
      const goed = u.punten > 0;
      const extra = [];
      if (!goed && u.gegeven && u.gegeven !== u.w.woord) extra.push(`Jij: ${escapeHtml(u.gegeven)}`);
      if (goed && u.punten < 1) extra.push('Goed, maar niet in één keer');
      if (!goed && u.w.lang) extra.push(`Langer maken: ${escapeHtml(u.w.lang)}`);
      return `
        <li class="${goed ? 'goed' : 'fout'}">
          <span class="overzicht-icoon">${goed ? '🥕' : '✗'}</span>
          <div>
            <p class="overzicht-vraag overzicht-woord">${u.w.emoji ? `${u.w.emoji} ` : ''}${woordMetDeel(u.w)}</p>
            ${extra.length ? `<p class="overzicht-uitleg">${extra.join(' · ')}</p>` : ''}
          </div>
        </li>`;
    }).join('');

    toonScherm('scherm-g5-klaar');
    spreek(tekst, `g5:einde:spel:${sterren}`);
  }

  /* ------------------------------------------------------------------ */
  /*  Dictee                                                             */
  /* ------------------------------------------------------------------ */

  // Een dictee gaat zoals op school: woorden (of zinnen) uit alle pakketten
  // door elkaar, en er wordt pas aan het eind nagekeken. Tussendoor zegt het
  // konijn dus niets over goed of fout.

  // Kies `aantal` woorden, zo eerlijk mogelijk verdeeld over de pakketten.
  function spreid(kandidaten, aantal) {
    const perPakket = new Map();
    schud(kandidaten).forEach((w) => {
      if (!perPakket.has(w.pakket.id)) perPakket.set(w.pakket.id, []);
      perPakket.get(w.pakket.id).push(w);
    });
    const stapels = schud([...perPakket.values()]);
    const uit = [];
    while (uit.length < aantal && stapels.some((s) => s.length)) {
      stapels.forEach((s) => { if (s.length && uit.length < aantal) uit.push(s.pop()); });
    }
    return schud(uit);
  }

  function startDictee(d) {
    wisTimers();
    stopSpreken();
    spel = null;
    pakket = null;
    const alle = [];
    GROEP5.pakketten.forEach((p) => p.woorden.forEach((item) => alle.push({ ...ontleed(item), pakket: p })));
    const kandidaten = d.id === 'zinnen' ? alle.filter((w) => w.zinDictee !== false) : alle;
    dictee = { d, items: spreid(kandidaten, d.aantal), nr: 0, antwoorden: [] };
    toonScherm('scherm-g5-spel');
    dicteeVraag(true);
  }

  function dicteeVraag(eerste) {
    wisTimers();
    stopSpreken();
    const { d, items, nr } = dictee;
    const w = items[nr];
    const zinnen = d.id === 'zinnen';
    const laatste = nr === items.length - 1;

    $('#g5-wortels').innerHTML = items.map((_, i) =>
      `<span class="wortel ${i < nr ? 'gedaan' : i === nr ? 'nu' : 'leeg'}">${i < nr ? '✏️' : '🥕'}</span>`).join('');
    $('#g5-knop-verder').hidden = true;
    konijn('#konijn-spel', 'luister');
    zeg(eerste ? d.uitleg : d.opdracht);

    $('#g5-veld').innerHTML = `
      <p class="dictee-teller">${zinnen ? 'Zin' : 'Woord'} ${nr + 1} van ${items.length}</p>
      <button type="button" class="luisterknop" id="g5-luister">🔊 Luister nog een keer</button>
      <p><input type="text" class="spel-invoer ${zinnen ? 'dictee-zin-invoer' : ''}" id="g5-invoer"
             autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false"
             aria-label="${zinnen ? 'Typ de zin' : 'Typ het woord'}"
             style="width:${Math.max(9, w.woord.length + 4)}ch"></p>`;

    const luister = () => (zinnen ? speelOpname(`zin:${w.woord}`, w.zin) : zegWoord(w));
    $('#g5-luister').addEventListener('click', () => { luister(); $('#g5-invoer').focus(); });

    const invoer = $('#g5-invoer');
    const knop = $('#g5-knop-klaar');
    knop.textContent = laatste ? 'Klaar, nakijken! →' : 'Volgende →';
    knop.hidden = false;
    knop.disabled = true;

    function volgende() {
      const gegeven = invoer.value.trim();
      if (!gegeven) return;
      dictee.antwoorden[nr] = gegeven;
      dictee.nr += 1;
      if (dictee.nr >= items.length) dicteeKlaar();
      else dicteeVraag(false);
    }
    knop.onclick = volgende;
    invoer.addEventListener('input', () => { knop.disabled = !invoer.value.trim(); });
    invoer.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return;
      e.preventDefault();
      if (!e.repeat) volgende();
    });

    invoer.focus();
    luister();
  }

  // Een zin nakijken: eerst de woorden, en dan nog de hoofdletter en de punt.
  function kijkZinNa(zin, gegeven) {
    const woorden = (t) => t.toLowerCase().replace(/[.,!?;:]/g, ' ').split(/\s+/).filter(Boolean);
    const goed = woorden(zin);
    const jij = woorden(gegeven);
    const evenLang = goed.length === jij.length;
    const fout = goed.map((_, i) => i).filter((i) => (evenLang ? jij[i] !== goed[i] : !jij.includes(goed[i])));
    const woordenGoed = evenLang && fout.length === 0;
    const hoofdletter = /^[A-ZÀ-Ý]/.test(gegeven);
    const punt = /[.!?]$/.test(gegeven);
    return { fout, woordenGoed, hoofdletter, punt, punten: woordenGoed ? (hoofdletter && punt ? 1 : 0.5) : 0 };
  }

  function dicteeKlaar() {
    wisTimers();
    stopSpreken();
    const { d, items, antwoorden } = dictee;
    const zinnen = d.id === 'zinnen';

    const uitslag = items.map((w, i) => {
      const gegeven = antwoorden[i] || '';
      if (zinnen) return { w, gegeven, ...kijkZinNa(w.zin, gegeven) };
      return { w, gegeven, punten: gegeven.toLowerCase() === w.woord ? 1 : 0 };
    });

    const totaal = uitslag.length;
    const punten = uitslag.reduce((n, u) => n + u.punten, 0);
    const goedAantal = uitslag.filter((u) => u.punten > 0).length;
    const percentage = Math.round((punten / totaal) * 100);
    const sterren = sterrenVoor(percentage);

    voortgang.wortels += goedAantal;
    const sleutel = `dictee:${d.id}`;
    const eerder = voortgang.scores[sleutel];
    voortgang.scores[sleutel] = {
      sterren: Math.max(sterren, eerder ? eerder.sterren : 0),
      beste: Math.max(percentage, eerder ? eerder.beste : 0),
      keer: (eerder ? eerder.keer : 0) + 1
    };
    bewaar(OPSLAG, voortgang);

    const wat = zinnen ? 'zinnen' : 'woorden';
    konijn('#konijn-klaar', sterren >= 2 ? 'juich' : 'blij');
    const tekst = GROEP5.einde.dictee[sterren];
    $('#g5-klaar-tekst').textContent = tekst;
    $('#g5-sterren').innerHTML = [0, 1, 2].map((i) =>
      i < sterren
        ? `<span class="ster-aan" style="animation-delay:${i * 0.18}s">⭐</span>`
        : '<span class="ster-uit">☆</span>').join('');
    $('#g5-score').textContent = `${goedAantal} van de ${totaal} ${wat} goed · 🥕 ${NAAM} heeft nu ${voortgang.wortels} wortels`;

    // Advies: welke pakketten nog oefenen, of denk aan hoofdletter en punt.
    const advies = [];
    const pakketten = [...new Set(uitslag.filter((u) => (zinnen ? !u.woordenGoed : u.punten === 0)).map((u) => u.w.pakket.titel))];
    if (!zinnen && pakketten.length) advies.push(`Oefen deze nog eens met een spelletje: ${pakketten.join(' · ')}`);
    if (zinnen && uitslag.some((u) => !u.hoofdletter)) advies.push('Denk aan de hoofdletter aan het begin van de zin.');
    if (zinnen && uitslag.some((u) => !u.punt)) advies.push('Denk aan de punt aan het eind van de zin.');
    $('#g5-advies').textContent = advies.join(' ');
    $('#g5-advies').hidden = advies.length === 0;

    $('#g5-overzicht-kop').textContent = 'Zo ging je dictee';
    $('#g5-overzicht').innerHTML = uitslag.map((u) => {
      const goed = u.punten > 0;
      const extra = [];
      let juist;
      if (zinnen) {
        juist = u.w.zin.split(' ').map((woord, i) =>
          (u.fout.includes(i) ? `<span class="fout-woord">${escapeHtml(woord)}</span>` : escapeHtml(woord))).join(' ');
        if (!u.woordenGoed) extra.push(`Jij: ${escapeHtml(u.gegeven)}`);
        if (!u.hoofdletter) extra.push('hoofdletter vergeten');
        if (!u.punt) extra.push('punt vergeten');
      } else {
        juist = woordMetDeel(u.w);
        if (!goed) extra.push(`Jij: ${escapeHtml(u.gegeven)}`);
        if (!goed) extra.push(escapeHtml(u.w.pakket.titel));
        if (!goed && u.w.lang) extra.push(`langer maken: ${escapeHtml(u.w.lang)}`);
      }
      return `
        <li class="${u.punten >= 1 ? 'goed' : goed ? '' : 'fout'}">
          <span class="overzicht-icoon">${goed ? '🥕' : '✗'}</span>
          <div>
            <p class="overzicht-vraag overzicht-woord ${zinnen ? 'overzicht-zin' : ''}">${juist}</p>
            ${extra.length ? `<p class="overzicht-uitleg">${extra.join(' · ')}</p>` : ''}
          </div>
        </li>`;
    }).join('');

    toonScherm('scherm-g5-klaar');
    spreek(tekst, `g5:einde:dictee:${sterren}`);
  }

  /* ------------------------------------------------------------------ */
  /*  Knoppen aansluiten                                                 */
  /* ------------------------------------------------------------------ */

  $('#g5-knop-verder').addEventListener('click', verder);
  $('#g5-opnieuw').addEventListener('click', () => (dictee ? startDictee(dictee.d) : startRonde(pakket)));
  $('#g5-ander').addEventListener('click', () => (dictee ? toonStart('Wat wil je nu doen?') : toonPakketten(spel)));
  document.querySelectorAll('[data-g5-start]').forEach((k) =>
    k.addEventListener('click', () => toonStart('Welk spel wil je nu doen?')));
  document.querySelectorAll('[data-g5-pakket]').forEach((k) =>
    k.addEventListener('click', () => (dictee ? toonStart('Wat wil je nu doen?') : toonPakketten(spel))));

  $('#g5-reset').addEventListener('click', () => {
    if (!confirm(`Weet je het zeker? Alle wortels en sterren van ${NAAM} verdwijnen dan.`)) return;
    voortgang = { wortels: 0, scores: {} };
    bewaar(OPSLAG, voortgang);
    toonStart();
  });

  // Als iemand via de bovenbalk naar het begin gaat, mag er niets blijven doortikken.
  $('#knop-home').addEventListener('click', wisTimers);
  document.querySelectorAll('[data-naar-groepen]').forEach((k) => k.addEventListener('click', wisTimers));

  window.Groep5 = { toonStart };
})();

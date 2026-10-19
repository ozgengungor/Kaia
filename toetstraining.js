/*
 * Mochi — de toetstraining: een dagplan van twee weken.
 *
 * Drie schermen: alle dagen, één dag met zijn zeven onderdelen, en het
 * oefenscherm. Op het oefenscherm draait één van drie soorten:
 *   woordrij   een minuut lang woorden hardop lezen; daarna tik je aan
 *              tot waar je kwam
 *   hardop     de tekst van de dag hardop lezen met een stopwatch
 *   vragen     meerkeuze, invullen of een getal typen; elke vraag wordt
 *              meteen nagekeken, met uitleg
 * Wat er per dag geoefend wordt, staat in mochi.js; de stof in mochi-lezen.js,
 * mochi-spelling.js en rekensommen.js.
 *
 * Er zijn geen opnames voor Mochi: bij begrijpend lezen en technisch lezen
 * hoort het kind zelf te lezen.
 *
 * De gedeelde hulpjes komen uit app.js via window.KaiaApp. De voortgang staat
 * los van die van de andere groepen.
 */

(() => {
  'use strict';

  const { $, kies, laad, bewaar, escapeHtml, toonScherm, stopSpreken } = window.KaiaApp;

  const NAAM = MOCHI.coach;
  const OPSLAG = 'lezen-met-kaia:mochi:v1';
  const LETTERS = ['A', 'B', 'C', 'D'];
  const WOORDEN_PER_BAND = 20;
  const WOORDRIJ_SECONDEN = 60;

  let voortgang = laad(OPSLAG, null) || { dagen: {} };
  let dagNr = 0;            // de dag die open is (0 = 20 oktober)
  let onderdeel = null;     // het onderdeel dat open is
  let soort = null;         // 'woordrij' | 'hardop' | 'vragen'
  let vragen = [];
  let vraagNr = 0;
  let keuze = null;
  let nagekeken = false;
  let antwoorden = [];      // per vraag: { goed, gegeven }
  let klok = null;          // { start, interval, ... } van de woordrij of de stopwatch
  let meting = null;        // wat de woordrij of het hardop lezen opleverde

  /* ------------------------------------------------------------------ */
  /*  Hulpjes                                                            */
  /* ------------------------------------------------------------------ */

  function panda(sel, stemming) { Panda.render($(sel), stemming, NAAM); }
  function zeg(tekst) { $('#m-praatje').textContent = tekst; }
  function vul(tekst) { return tekst.replace('{naam}', NAAM).replace('{dag}', dagNr + 1); }

  // Een kleine toevalsgenerator met een zaadje, zodat een dag altijd dezelfde
  // woordrij en dezelfde volgorde van antwoorden heeft.
  function schud(lijst, zaad) {
    let a = zaad >>> 0;
    const toeval = () => {
      a = (a + 0x6d2b79f5) >>> 0;
      let t = Math.imul(a ^ (a >>> 15), a | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    const kopie = lijst.slice();
    for (let i = kopie.length - 1; i > 0; i--) {
      const j = Math.floor(toeval() * (i + 1));
      [kopie[i], kopie[j]] = [kopie[j], kopie[i]];
    }
    return kopie;
  }

  function datumVan(nr) {
    const [j, m, d] = MOCHI.begin.split('-').map(Number);
    return new Date(j, m - 1, d + nr);
  }
  function kortDatum(nr) { return datumVan(nr).toLocaleDateString('nl-NL', { weekday: 'short', day: 'numeric', month: 'short' }); }
  function langDatum(nr) { return datumVan(nr).toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long' }); }

  // Welke dag het vandaag is in het plan: -1 ervoor, MOCHI.dagen erna.
  function vandaagNr() {
    const nu = new Date();
    const vandaag = new Date(nu.getFullYear(), nu.getMonth(), nu.getDate());
    return Math.round((vandaag - datumVan(0)) / 86400000);
  }

  function resultaten(nr) { return voortgang.dagen[nr] || {}; }
  function isGedaan(nr, id) { return Boolean(resultaten(nr)[id]); }
  function aantalGedaan(nr) { return MOCHI.onderdelen.filter((o) => isGedaan(nr, o.id)).length; }
  function dagKlaar(nr) { return aantalGedaan(nr) === MOCHI.onderdelen.length; }
  function volgendeOnderdeel(nr) { return MOCHI.onderdelen.find((o) => !isGedaan(nr, o.id)); }

  function bewaarResultaat(resultaat) {
    if (!voortgang.dagen[dagNr]) voortgang.dagen[dagNr] = {};
    voortgang.dagen[dagNr][onderdeel.id] = { ...resultaat, op: new Date().toISOString().slice(0, 10) };
    bewaar(OPSLAG, voortgang);
  }

  function resultaatTekst(id, r) {
    if (!r) return '';
    if (id === 'woordrij') return `${r.woorden} woorden${r.seconden < WOORDRIJ_SECONDEN ? ` in ${r.seconden} sec` : ''}`;
    if (id === 'hardop') return `${perMinuut(r.woorden, r.seconden)} woorden per minuut`;
    return `${r.goed} van ${r.van} goed`;
  }
  function perMinuut(woorden, seconden) { return Math.round((woorden / Math.max(1, seconden)) * 60); }
  function telWoorden(tekst) { return tekst.split(/\s+/).filter((w) => /[\p{L}\d]/u.test(w)).length; }
  function tekstVan(alineas) { return alineas.map((a) => `<p>${escapeHtml(a)}</p>`).join(''); }

  function stopKlok() {
    if (klok) clearInterval(klok.interval);
    klok = null;
  }

  /* ------------------------------------------------------------------ */
  /*  Alle dagen                                                         */
  /* ------------------------------------------------------------------ */

  function toonStart(praatje) {
    stopSpreken();
    stopKlok();
    const nu = vandaagNr();
    panda('#panda-start', praatje ? 'juich' : 'zwaai');
    $('#m-welkom').textContent = praatje
      || (nu < 0 ? MOCHI.voorBegin : nu >= MOCHI.dagen ? MOCHI.naEinde : vul(kies(MOCHI.welkom)));
    $('#m-ondertitel').textContent =
      `Van ${langDatum(0)} tot en met ${langDatum(MOCHI.dagen - 1)}. Elke dag alle zeven toetsen, samen ongeveer ${MOCHI.onderdelen.reduce((s, o) => s + o.minuten, 0)} minuten.`;

    const houder = $('#m-dagen');
    houder.innerHTML = '';
    for (let nr = 0; nr < MOCHI.dagen; nr++) {
      const gedaan = aantalGedaan(nr);
      const knop = document.createElement('button');
      knop.type = 'button';
      knop.className = `m-dag ${dagKlaar(nr) ? 'is-klaar' : gedaan ? 'is-bezig' : ''} ${nr === nu ? 'is-vandaag' : ''}`;
      knop.innerHTML = `
        <span class="m-dag-nr">Dag ${nr + 1}</span>
        <span class="m-dag-datum">${escapeHtml(kortDatum(nr))}</span>
        <span class="m-dag-status">${dagKlaar(nr) ? '✅ Klaar' : gedaan ? `${gedaan} van ${MOCHI.onderdelen.length}` : nr === nu ? '👉 Vandaag' : ''}</span>`;
      knop.addEventListener('click', () => toonDag(nr));
      houder.appendChild(knop);
    }

    tekenStand();
    toonScherm('scherm-m-start');
  }

  // Een paar cijfers onder de dagen, zodat je ziet dat je vooruitgaat.
  function tekenStand() {
    const alle = Object.values(voortgang.dagen);
    const klaar = Array.from({ length: MOCHI.dagen }, (_, nr) => dagKlaar(nr)).filter(Boolean).length;
    const woordrij = alle.map((d) => d.woordrij).filter(Boolean);
    const hardop = alle.map((d) => d.hardop).filter(Boolean);
    const procent = (id) => {
      const lijst = alle.map((d) => d[id]).filter(Boolean);
      if (!lijst.length) return null;
      return Math.round((lijst.reduce((s, r) => s + r.goed, 0) / lijst.reduce((s, r) => s + r.van, 0)) * 100);
    };
    const blokken = [
      ['📅', 'Dagen klaar', `${klaar} van ${MOCHI.dagen}`],
      ['⚡', 'Woordrij: beste minuut', woordrij.length ? `${Math.max(...woordrij.map((r) => perMinuut(r.woorden, r.seconden)))} woorden` : '–'],
      ['🗣️', 'Hardop: snelste', hardop.length ? `${Math.max(...hardop.map((r) => perMinuut(r.woorden, r.seconden)))} per minuut` : '–'],
      ...['werkwoorden', 'rekenen', 'tekst', 'kort', 'woorden'].map((id) => {
        const o = MOCHI.onderdelen.find((x) => x.id === id);
        const p = procent(id);
        return [o.emoji, o.titel, p === null ? '–' : `${p}% goed`];
      })
    ];
    $('#m-stand').innerHTML = blokken.map(([emoji, naam, waarde]) =>
      `<div class="m-stand-blok"><span class="m-stand-emoji">${emoji}</span><span class="m-stand-naam">${escapeHtml(naam)}</span><b>${escapeHtml(waarde)}</b></div>`).join('');
  }

  /* ------------------------------------------------------------------ */
  /*  Eén dag                                                            */
  /* ------------------------------------------------------------------ */

  function toonDag(nr, praatje) {
    stopSpreken();
    stopKlok();
    dagNr = nr;
    const klaar = dagKlaar(nr);
    panda('#panda-dag', klaar ? 'juich' : 'blij');
    $('#m-dag-praatje').textContent = praatje || vul(kies(klaar ? MOCHI.dagKlaar : MOCHI.dagIntro));
    $('#m-dag-titel').textContent = `Dag ${nr + 1}: ${langDatum(nr)}`;
    $('#m-dag-ondertitel').textContent = `Vandaag lees je "${MOCHI_LEZEN[nr].hardop.titel}". ${aantalGedaan(nr)} van de ${MOCHI.onderdelen.length} onderdelen gedaan.`;

    const lijst = $('#m-onderdelen');
    lijst.innerHTML = '';
    const volgende = volgendeOnderdeel(nr);
    MOCHI.onderdelen.forEach((o, i) => {
      const r = resultaten(nr)[o.id];
      const li = document.createElement('li');
      li.innerHTML = `
        <button type="button" class="m-onderdeel ${r ? 'is-klaar' : ''} ${o === volgende ? 'is-volgende' : ''}">
          <span class="m-onderdeel-emoji">${o.emoji}</span>
          <span class="m-onderdeel-tekst">
            <span class="m-onderdeel-titel">${i + 1}. ${escapeHtml(o.titel)}</span>
            <span class="m-onderdeel-uitleg">${escapeHtml(o.uitleg)}</span>
            <span class="m-onderdeel-toets">Boom-toets: ${escapeHtml(o.toets)}</span>
          </span>
          <span class="m-onderdeel-rechts">
            <span class="m-onderdeel-tijd">± ${o.minuten} min</span>
            <span class="m-onderdeel-score">${r ? `✅ ${escapeHtml(resultaatTekst(o.id, r))}` : o === volgende ? '👉' : ''}</span>
          </span>
        </button>`;
      li.querySelector('button').addEventListener('click', () => startOnderdeel(o));
      lijst.appendChild(li);
    });

    const knop = $('#m-dag-start');
    knop.textContent = volgende ? `${aantalGedaan(nr) ? 'Verder met' : 'Begin met'} ${volgende.titel.toLowerCase()} →` : '✅ Klaar! Terug naar alle dagen';
    toonScherm('scherm-m-dag');
  }

  /* ------------------------------------------------------------------ */
  /*  Een onderdeel                                                      */
  /* ------------------------------------------------------------------ */

  function startOnderdeel(o) {
    stopSpreken();
    stopKlok();
    onderdeel = o;
    meting = null;
    $('#m-onderdeel-label').textContent = `${o.emoji} ${o.titel}`;
    $('#m-onderdeel-toets').textContent = `Dag ${dagNr + 1} · oefent voor ${o.toets} · ± ${o.minuten} min`;
    panda('#panda-oefen', 'blij');
    zeg(o.tip);
    $('#m-stippen').innerHTML = '';
    $('#m-knop-2').hidden = true;

    if (o.id === 'woordrij') { soort = 'woordrij'; tekenWoordrij(); }
    else if (o.id === 'hardop') { soort = 'hardop'; tekenHardop(); }
    else {
      soort = 'vragen';
      vragen = maakVragen(o.id);
      vraagNr = 0;
      antwoorden = [];
      tekenVraag();
    }
    toonScherm('scherm-m-oefen');
  }

  // Alle vraagsoorten worden hier één vorm: { vorm: 'mc' | 'invul' | 'getal', ... }.
  function maakVragen(id) {
    const lezen = MOCHI_LEZEN[dagNr];
    if (id === 'tekst') {
      return lezen.hardop.vragen.map((v) => ({ vorm: 'mc', label: v.vaardigheid, ...v, lade: lezen.hardop }));
    }
    if (id === 'kort') {
      return lezen.kort.flatMap((t) => t.vragen.map((v) => ({ vorm: 'mc', label: v.vaardigheid, ...v, kort: t })));
    }
    if (id === 'werkwoorden') {
      return MOCHI_SPELLING.werkwoorden[dagNr].map((v) => ({
        vorm: 'invul', label: 'Werkwoord', vraag: 'Schrijf het werkwoord in de goede vorm.', zin: v.zin, cue: `werkwoord: ${v.cue}`, goed: v.goed, uitleg: v.uitleg
      }));
    }
    if (id === 'woorden') {
      return MOCHI_SPELLING.woorden[dagNr].map((v, i) => {
        const opties = schud([v.goed, ...v.fout], dagNr * 100 + i + 1);
        return { vorm: 'mc', label: 'Spelling', vraag: 'Welk woord hoort op de puntjes?', zin: v.zin, opties, goed: opties.indexOf(v.goed), uitleg: v.uitleg };
      });
    }
    // rekenen
    return Rekensommen.vanDag(dagNr).map((s) => (s.opties
      ? { vorm: 'mc', label: s.domein, vraag: s.vraag, opties: s.opties, goed: s.goed, uitleg: s.uitleg }
      : { vorm: 'getal', label: s.domein, vraag: s.vraag, som: s, voor: s.voor, na: s.na, uitleg: s.uitleg }));
  }

  /* ---------- Vragen ---------- */

  function tekenStippen() {
    $('#m-stippen').innerHTML = vragen.map((_, i) => {
      const a = antwoorden[i];
      return `<span class="stip ${a ? (a.goed ? 'goed' : 'fout') : i === vraagNr ? 'nu' : ''}"></span>`;
    }).join('');
  }

  function tekenVraag() {
    const v = vragen[vraagNr];
    keuze = null;
    nagekeken = false;
    tekenStippen();
    panda('#panda-oefen', 'denk');
    if (vraagNr > 0) zeg(vraagNr === vragen.length - 1 ? 'De laatste! Je kunt het.' : `Vraag ${vraagNr + 1} van ${vragen.length}.`);

    let context = '';
    if (v.lade) {
      context = `<details class="tekst-lade m-lade" ${vraagNr === 0 ? 'open' : ''}>
          <summary>📄 ${escapeHtml(v.lade.titel)}</summary>
          <article class="tekst tekst-klein">${tekstVan(v.lade.alineas)}</article>
        </details>`;
    } else if (v.kort) {
      context = `<article class="tekst tekst-klein m-kort">
          <p class="m-kort-kop"><span class="label">${escapeHtml(v.kort.soort)}</span> <b>${escapeHtml(v.kort.titel)}</b></p>
          ${tekstVan(v.kort.tekst)}
        </article>`;
    }

    let antwoord = '';
    if (v.vorm === 'mc') {
      antwoord = `${v.zin ? `<p class="invul-zin">${escapeHtml(v.zin).replace('___', '<span class="m-gat">…</span>')}</p>` : ''}
        <div class="opties">${v.opties.map((o, i) =>
          `<button type="button" class="optie" data-optie="${i}"><span class="optie-letter">${LETTERS[i]}</span><span>${escapeHtml(o)}</span></button>`).join('')}</div>`;
    } else if (v.vorm === 'invul') {
      const [voor, na] = v.zin.split('___');
      antwoord = `<p class="invul-zin">${escapeHtml(voor)}<input type="text" class="invul-veld" id="m-veld" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" aria-label="Vul het werkwoord in" style="width:${Math.max(8, String([].concat(v.goed)[0]).length + 3)}ch">${escapeHtml(na || '')}</p>
        <p class="invul-cue">${escapeHtml(v.cue)}</p>`;
    } else {
      antwoord = `<p class="m-getal-rij">${v.voor ? `<span>${escapeHtml(v.voor)}</span>` : ''}<input type="text" inputmode="decimal" class="invul-veld m-getal" id="m-veld" autocomplete="off" aria-label="Je antwoord">${v.na ? `<span>${escapeHtml(v.na)}</span>` : ''}</p>
        <p class="invul-cue">Een kommagetal schrijf je met een komma, zoals 2,5.</p>`;
    }

    $('#m-kaart').innerHTML = `
      ${context}
      <span class="label label-vaardigheid">${escapeHtml(v.label)}</span>
      <h2 class="vraag">${escapeHtml(v.vraag)}</h2>
      ${antwoord}
      <div class="feedback" id="m-feedback" hidden>
        <div class="feedback-tekst"><p class="feedback-kop" id="m-feedback-kop"></p><p class="feedback-uitleg" id="m-feedback-uitleg"></p></div>
      </div>`;

    const knop = $('#m-knop');
    knop.textContent = 'Nakijken';
    knop.disabled = true;

    $('#m-kaart').querySelectorAll('.optie').forEach((b) => b.addEventListener('click', () => {
      if (nagekeken) return;
      keuze = Number(b.dataset.optie);
      $('#m-kaart').querySelectorAll('.optie').forEach((x) => x.classList.toggle('gekozen', x === b));
      knop.disabled = false;
    }));
    const veld = $('#m-veld');
    if (veld) {
      veld.addEventListener('input', () => { keuze = veld.value.trim(); knop.disabled = !keuze; });
      veld.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !knop.disabled) { e.preventDefault(); knop.click(); }
      });
      if (window.matchMedia && window.matchMedia('(pointer: fine)').matches) veld.focus({ preventScroll: true });
    }
  }

  // Hoofdletters, spaties en een krullende apostrof van de tablet tellen niet.
  function normaliseer(woord) {
    return String(woord).toLowerCase().trim().replace(/[’‘`´]/g, "'").replace(/\s+/g, ' ').replace(/[.,!?;:]+$/, '');
  }

  function kijkNa() {
    const v = vragen[vraagNr];
    nagekeken = true;
    let goed;
    let juist = '';
    if (v.vorm === 'mc') {
      goed = keuze === v.goed;
      $('#m-kaart').querySelectorAll('.optie').forEach((b, i) => {
        b.disabled = true;
        b.classList.remove('gekozen');
        if (i === v.goed) b.classList.add('is-goed');
        else if (i === keuze) b.classList.add('is-fout');
      });
    } else {
      const veld = $('#m-veld');
      veld.disabled = true;
      if (v.vorm === 'invul') {
        const goede = [].concat(v.goed);
        goed = goede.some((g) => normaliseer(g) === normaliseer(keuze));
        juist = goede[0];
      } else {
        goed = Rekensommen.klopt(v.som, keuze);
        juist = `${v.voor ? `${v.voor} ` : ''}${Rekensommen.nl(v.som.antwoord)}${v.na ? ` ${v.na}` : ''}`;
      }
      veld.classList.add(goed ? 'is-goed' : 'is-fout');
    }
    antwoorden[vraagNr] = { goed, gegeven: v.vorm === 'mc' ? v.opties[keuze] : keuze, juist: v.vorm === 'mc' ? v.opties[v.goed] : juist };

    const fb = $('#m-feedback');
    fb.hidden = false;
    fb.className = `feedback ${goed ? 'goed' : 'fout'}`;
    $('#m-feedback-kop').textContent = goed ? kies(MOCHI.goed) : (juist ? `Het goede antwoord is: ${juist}` : MOCHI.fout);
    $('#m-feedback-uitleg').textContent = v.uitleg;
    panda('#panda-oefen', goed ? 'juich' : 'troost');
    zeg(goed ? kies(MOCHI.goed) : MOCHI.fout);
    tekenStippen();

    const knop = $('#m-knop');
    knop.disabled = false;
    knop.textContent = vraagNr === vragen.length - 1 ? 'Bekijk je score →' : 'Volgende vraag →';
    fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function tekenScore() {
    const goed = antwoorden.filter((a) => a.goed).length;
    bewaarResultaat({ goed, van: vragen.length });
    const deel = goed / vragen.length;
    const stemming = deel >= 0.8 ? 'hoog' : deel >= 0.5 ? 'midden' : 'laag';
    panda('#panda-oefen', stemming === 'laag' ? 'troost' : 'juich');
    zeg(MOCHI.klaar[stemming]);
    $('#m-stippen').innerHTML = antwoorden.map((a) => `<span class="stip ${a.goed ? 'goed' : 'fout'}"></span>`).join('');
    $('#m-kaart').innerHTML = `
      <p class="m-score"><b>${goed}</b> van de ${vragen.length} goed</p>
      <ol class="m-overzicht">${antwoorden.map((a, i) => `
        <li class="${a.goed ? 'is-goed' : 'is-fout'}">
          <span>${a.goed ? '✅' : '❌'}</span>
          <span>${escapeHtml(vragen[i].zin || vragen[i].vraag)}${a.goed ? '' : `<br><small>Jij: <s>${escapeHtml(String(a.gegeven))}</s> · goed: <b>${escapeHtml(String(a.juist))}</b></small>`}</span>
        </li>`).join('')}
      </ol>`;
    naHetOnderdeel();
  }

  // De knoppen onderaan na een onderdeel: door naar het volgende, of terug.
  function naHetOnderdeel() {
    const volgende = volgendeOnderdeel(dagNr);
    const knop = $('#m-knop');
    knop.disabled = false;
    knop.textContent = volgende ? `Verder: ${volgende.titel.toLowerCase()} →` : '🎉 Dag klaar!';
    soort = 'klaar';
    const terug = $('#m-knop-2');
    terug.hidden = !volgende;
    terug.textContent = 'Terug naar de dag';
  }

  /* ---------- Woordrij ---------- */

  function woordrijVan(nr) {
    const banden = ['kort', 'middel', 'lang', 'moeilijk'];
    return banden.flatMap((band, i) => schud(MOCHI_SPELLING.woordrij[band], nr * 31 + i + 7).slice(0, WOORDEN_PER_BAND));
  }

  function tekenWoordrij() {
    const woorden = woordrijVan(dagNr);
    meting = { fase: 'klaar', woorden: woorden.length, seconden: 0, gelezen: 0 };
    $('#m-kaart').innerHTML = `
      <p class="m-klok" id="m-klok">1:00</p>
      <div class="m-woordrij is-wazig" id="m-woordrij">${woorden.map((w, i) =>
        `<button type="button" class="m-woord" data-i="${i}" disabled>${escapeHtml(w)}</button>`).join('')}</div>
      <p class="invul-cue" id="m-woordrij-hulp">De woorden worden scherp zodra je op start drukt. Lees ze rij voor rij, van links naar rechts.</p>`;
    $('#m-knop').disabled = false;
    $('#m-knop').textContent = '▶ Start (1 minuut)';
  }

  function woordrijStart() {
    meting.fase = 'lezen';
    $('#m-woordrij').classList.remove('is-wazig');
    $('#m-woordrij-hulp').textContent = 'Lees maar! Klaar voordat de tijd om is? Druk dan op "Ik ben klaar".';
    panda('#panda-oefen', 'denk');
    zeg('Lezen maar, zo snel en zo goed als je kunt!');
    $('#m-knop').textContent = '■ Ik ben klaar';
    const start = Date.now();
    klok = {
      start,
      interval: setInterval(() => {
        if (!$('#scherm-m-oefen').classList.contains('actief')) { stopKlok(); return; }
        const over = Math.max(0, WOORDRIJ_SECONDEN - Math.floor((Date.now() - start) / 1000));
        $('#m-klok').textContent = `${Math.floor(over / 60)}:${String(over % 60).padStart(2, '0')}`;
        $('#m-klok').classList.toggle('is-bijna', over <= 10);
        if (over === 0) woordrijStop();
      }, 200)
    };
  }

  function woordrijStop() {
    meting.seconden = Math.min(WOORDRIJ_SECONDEN, Math.round((Date.now() - klok.start) / 1000));
    stopKlok();
    meting.fase = 'aanwijzen';
    $('#m-klok').textContent = meting.seconden >= WOORDRIJ_SECONDEN ? 'Tijd!' : `${meting.seconden} sec`;
    panda('#panda-oefen', 'blij');
    zeg('Tik op het laatste woord dat je goed hebt gelezen.');
    $('#m-woordrij-hulp').innerHTML = 'Tik op het <b>laatste woord</b> dat je hebt gelezen. Woorden die je fout las, tellen niet mee: tel ze in je hoofd af en tik dan zoveel woorden eerder.';
    $('#m-knop').textContent = 'Opslaan →';
    $('#m-knop').disabled = true;
    $('#m-woordrij').querySelectorAll('.m-woord').forEach((b) => {
      b.disabled = false;
      b.addEventListener('click', () => {
        meting.gelezen = Number(b.dataset.i) + 1;
        $('#m-woordrij').querySelectorAll('.m-woord').forEach((x) =>
          x.classList.toggle('is-gelezen', Number(x.dataset.i) < meting.gelezen));
        $('#m-klok').textContent = `${meting.gelezen} woorden`;
        $('#m-knop').disabled = false;
      });
    });
  }

  function woordrijBewaar() {
    const vorige = beste('woordrij');
    bewaarResultaat({ woorden: meting.gelezen, seconden: meting.seconden });
    const nu = perMinuut(meting.gelezen, meting.seconden);
    panda('#panda-oefen', 'juich');
    zeg(vorige === null ? 'Dat is je eerste meting. Morgen kijken we of het er meer worden!'
      : nu > vorige ? `Nieuw record! Je vorige beste was ${vorige} woorden per minuut.`
        : `Goed gedaan! Je beste tot nu toe is ${vorige} woorden per minuut.`);
    $('#m-kaart').innerHTML = `<p class="m-score"><b>${meting.gelezen}</b> woorden${meting.seconden < WOORDRIJ_SECONDEN ? ` in ${meting.seconden} seconden (${nu} per minuut)` : ' in één minuut'}</p>`;
    naHetOnderdeel();
  }

  // De beste snelheid tot nu toe, zonder de dag die nu open is.
  function beste(id) {
    const lijst = Object.entries(voortgang.dagen)
      .filter(([nr, d]) => Number(nr) !== dagNr && d[id])
      .map(([, d]) => perMinuut(d[id].woorden, d[id].seconden));
    return lijst.length ? Math.max(...lijst) : null;
  }

  /* ---------- Hardop lezen ---------- */

  function tekenHardop() {
    const t = MOCHI_LEZEN[dagNr].hardop;
    meting = { fase: 'klaar', woorden: telWoorden(t.alineas.join(' ')), seconden: 0, gevoel: null };
    $('#m-kaart').innerHTML = `
      <p class="m-klok" id="m-klok">0:00</p>
      <h2 class="vraag">${t.emoji} ${escapeHtml(t.titel)}</h2>
      <article class="tekst is-wazig" id="m-hardop-tekst">${tekstVan(t.alineas)}</article>
      <div id="m-gevoel" hidden>
        <h3 class="regel-kop">Hoe ging het?</h3>
        <div class="opties">
          ${['Vlot, bijna geen foutjes', 'Een paar keer gehaperd', 'Best lastig'].map((g, i) =>
            `<button type="button" class="optie" data-gevoel="${i}"><span class="optie-letter">${['😄', '🙂', '😅'][i]}</span><span>${g}</span></button>`).join('')}
        </div>
      </div>`;
    $('#m-knop').disabled = false;
    $('#m-knop').textContent = '▶ Start de stopwatch';
  }

  function hardopStart() {
    meting.fase = 'lezen';
    $('#m-hardop-tekst').classList.remove('is-wazig');
    panda('#panda-oefen', 'denk');
    zeg('Lees maar hardop. Druk op stop als je bij de laatste punt bent.');
    $('#m-knop').textContent = '■ Klaar met lezen';
    const start = Date.now();
    klok = {
      start,
      interval: setInterval(() => {
        if (!$('#scherm-m-oefen').classList.contains('actief')) { stopKlok(); return; }
        const sec = Math.floor((Date.now() - start) / 1000);
        $('#m-klok').textContent = `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
      }, 250)
    };
  }

  function hardopStop() {
    meting.seconden = Math.max(1, Math.round((Date.now() - klok.start) / 1000));
    stopKlok();
    meting.fase = 'gevoel';
    const pm = perMinuut(meting.woorden, meting.seconden);
    $('#m-klok').textContent = `${Math.floor(meting.seconden / 60)}:${String(meting.seconden % 60).padStart(2, '0')} · ${pm} woorden per minuut`;
    panda('#panda-oefen', 'blij');
    zeg(`${meting.woorden} woorden in ${meting.seconden} seconden. Hoe ging het lezen?`);
    $('#m-gevoel').hidden = false;
    $('#m-knop').textContent = 'Opslaan →';
    $('#m-knop').disabled = true;
    $('#m-gevoel').querySelectorAll('.optie').forEach((b) => b.addEventListener('click', () => {
      meting.gevoel = Number(b.dataset.gevoel);
      $('#m-gevoel').querySelectorAll('.optie').forEach((x) => x.classList.toggle('gekozen', x === b));
      $('#m-knop').disabled = false;
    }));
    $('#m-gevoel').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function hardopBewaar() {
    const vorige = beste('hardop');
    bewaarResultaat({ woorden: meting.woorden, seconden: meting.seconden, gevoel: meting.gevoel });
    const nu = perMinuut(meting.woorden, meting.seconden);
    panda('#panda-oefen', 'juich');
    zeg(meting.gevoel === 2
      ? 'Lastige tekst vandaag! Lees hem straks nog eens, dan gaat het al veel makkelijker.'
      : vorige !== null && nu > vorige ? `Sneller dan ooit! Je vorige beste was ${vorige} woorden per minuut.` : 'Mooi voorgelezen! Bij de volgende onderdelen ga je deze tekst nog gebruiken.');
    $('#m-kaart').innerHTML = `<p class="m-score"><b>${nu}</b> woorden per minuut</p>
      <p class="titel-midden">${meting.woorden} woorden in ${meting.seconden} seconden.</p>`;
    naHetOnderdeel();
  }

  /* ------------------------------------------------------------------ */
  /*  De grote knop onderaan                                             */
  /* ------------------------------------------------------------------ */

  function hoofdknop() {
    if (soort === 'klaar') {
      const volgende = volgendeOnderdeel(dagNr);
      if (volgende) startOnderdeel(volgende);
      else toonDag(dagNr);
      return;
    }
    if (soort === 'woordrij') {
      if (meting.fase === 'klaar') woordrijStart();
      else if (meting.fase === 'lezen') woordrijStop();
      else woordrijBewaar();
      return;
    }
    if (soort === 'hardop') {
      if (meting.fase === 'klaar') hardopStart();
      else if (meting.fase === 'lezen') hardopStop();
      else hardopBewaar();
      return;
    }
    if (!nagekeken) { kijkNa(); return; }
    if (vraagNr < vragen.length - 1) { vraagNr += 1; tekenVraag(); }
    else tekenScore();
  }

  /* ------------------------------------------------------------------ */
  /*  Knoppen aansluiten                                                 */
  /* ------------------------------------------------------------------ */

  $('#m-knop').addEventListener('click', hoofdknop);
  $('#m-knop-2').addEventListener('click', () => toonDag(dagNr));
  $('#m-naar-dag').addEventListener('click', () => toonDag(dagNr));
  document.querySelectorAll('[data-m-start]').forEach((k) => k.addEventListener('click', () => toonStart()));
  $('#m-dag-start').addEventListener('click', () => {
    const volgende = volgendeOnderdeel(dagNr);
    if (volgende) startOnderdeel(volgende);
    else toonStart();
  });
  $('#m-reset').addEventListener('click', () => {
    if (!confirm('Weet je het zeker? Alle resultaten van de toetstraining verdwijnen dan.')) return;
    voortgang = { dagen: {} };
    bewaar(OPSLAG, voortgang);
    toonStart();
  });

  window.Mochi = { toonStart };
})();

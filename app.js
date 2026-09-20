/*
 * Oefenen met Kaia — app-logica.
 *
 * Bewust zonder framework of build-stap: dit bestand wordt direct door de
 * browser geladen. De oefeningen komen uit exercises.js (begrijpend lezen),
 * spelling.js en taal.js (taalverzorging); deze code kent geen enkele oefening
 * bij naam, zodat er later een editor bovenop kan.
 *
 * De oefenvormen delen alles behalve het scherm vóór de vragen: bij lezen is
 * dat de tekst, bij spelling en taalverzorging de regelkaart van Kaia.
 *
 * Dit bestand regelt ook het keuzescherm voor de groep. Groep 8 is alles
 * hieronder; groep 5 (de spelletjes met het konijn) staat in spellen.js en
 * gebruikt de hulpjes die onderaan in window.KaiaApp worden klaargezet.
 */

(() => {
  'use strict';

  /* ------------------------------------------------------------------ */
  /*  Kleine hulpjes                                                     */
  /* ------------------------------------------------------------------ */

  const $ = (sel) => document.querySelector(sel);
  const OPSLAG_SLEUTEL = 'lezen-met-kaia:voortgang:v1';
  const INSTELLING_SLEUTEL = 'lezen-met-kaia:instellingen:v1';
  const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function kies(lijst) { return lijst[Math.floor(Math.random() * lijst.length)]; }

  // localStorage kan geblokkeerd zijn (privémodus); dan werkt de app gewoon door.
  function laad(sleutel, standaard) {
    try {
      const ruw = localStorage.getItem(sleutel);
      return ruw ? JSON.parse(ruw) : standaard;
    } catch (e) { return standaard; }
  }
  function bewaar(sleutel, waarde) {
    try { localStorage.setItem(sleutel, JSON.stringify(waarde)); } catch (e) { /* niet erg */ }
  }

  /* ------------------------------------------------------------------ */
  /*  Wat Kaia zegt                                                      */
  /* ------------------------------------------------------------------ */

  const PRAATJES = {
    terug: [
      'Daar ben je weer! Wat pakken we nu?',
      'Goed bezig. Nog eentje doen?',
      'Kies maar iets uit. Ik wacht wel even.'
    ],
    goed: [
      'Helemaal goed!', 'Top gedaan!', 'Precies!', 'Ja! Goed gelezen.', 'Knap hoor!'
    ],
    reeks: [
      'Wauw, {n} goed op rij!', 'Je bent lekker bezig: {n} achter elkaar goed!', '{n} op rij! Doorgaan zo.'
    ],
    fout: [
      'Bijna! Kijk maar even mee.',
      'Niet erg — hier leer je juist van.',
      'Deze was lastig. Ik leg hem uit.',
      'Nog niet goed, maar je bent op de goede weg.'
    ],
    lezen: [
      'Lees rustig. Kom je een moeilijk woord tegen? Klik erop, dan leg ik het uit.',
      'Tip: lees de tekst één keer helemaal door voordat je aan de vragen begint.',
      'Onderstreepte woorden kun je aanklikken. En je mag de tekst straks terugkijken!'
    ],
    spellen: [
      'Lees de regel eerst rustig door. Je mag hem straks bij elke vraag terugkijken.',
      'Snap je de regel? Dan zijn de vragen zo gepiept.',
      'Zeg de voorbeelden hardop. Spelling zit half in je oren en half in je ogen.'
    ]
  };

  /* ------------------------------------------------------------------ */
  /*  De oefenvormen                                                     */
  /* ------------------------------------------------------------------ */

  // Alles wat per oefenvorm verschilt staat hier bij elkaar. De rest van de
  // app (vragen, nakijken, score) werkt voor alle vormen hetzelfde.
  // `stof` zegt wat het kind vóór de vragen te zien krijgt: de tekst of een
  // regelkaart van Kaia.
  const MODI = {
    lezen: {
      icoon: '📖',
      stof: 'tekst',
      titel: 'Kies een tekst',
      ondertitel: 'Lees eerst rustig de tekst. Daarna stel ik je een paar vragen.',
      lade: '📄 Bekijk de tekst nog een keer',
      andere: 'Andere tekst kiezen →',
      woord: 'lezen',
      lijst: () => OEFENINGEN,
      welkom: [
        'Hoi! Ik ben Kaia. Zullen we samen oefenen met begrijpend lezen?',
        'Fijn dat je er bent! Kies een tekst, dan lezen we samen.',
        'Klaar voor een tekst? Rustig lezen mag altijd — daar wordt je brein blij van.'
      ]
    },
    spelling: {
      icoon: '✍️',
      stof: 'regel',
      titel: 'Kies een spellingregel',
      ondertitel: 'Ik leg de regel eerst uit. Daarna oefen je hem meteen.',
      lade: '📐 Bekijk de regel nog een keer',
      andere: 'Andere regel kiezen →',
      woord: 'spelling',
      lijst: () => SPELLINGOEFENINGEN,
      welkom: [
        'Spelling! Elke regel die je snapt, scheelt straks een heleboel twijfelen.',
        'Kies een regel. Ik leg hem uit en daarna oefenen we samen.',
        'Word of wordt? Kies maar een regel, dan weet je het zo.'
      ]
    },
    taal: {
      icoon: '📝',
      stof: 'regel',
      titel: 'Kies een taalregel',
      ondertitel: 'Hoofdletters, leestekens, zinnen: ik leg de regel uit en dan oefen je hem meteen.',
      lade: '📐 Bekijk de regel nog een keer',
      andere: 'Andere regel kiezen →',
      woord: 'taalverzorging',
      lijst: () => TAALOEFENINGEN,
      welkom: [
        'Taalverzorging! Hoofdletters, komma\'s en zinsdelen: na vandaag zie je ze overal.',
        'Kies een regel. Ik leg hem uit en daarna oefenen we samen.',
        'Groter als of groter dan? Kies maar een regel, dan weet je het zo.'
      ]
    }
  };

  /* ------------------------------------------------------------------ */
  /*  Instellingen (lettergrootte en voorlezen)                          */
  /* ------------------------------------------------------------------ */

  const instellingen = laad(INSTELLING_SLEUTEL, { letters: 0, voorlezen: false, modus: 'lezen' });
  const LETTERKLASSEN = ['', 'letters-groot', 'letters-extra'];

  function pasLettersToe() {
    document.body.classList.remove('letters-groot', 'letters-extra');
    const klasse = LETTERKLASSEN[instellingen.letters];
    if (klasse) document.body.classList.add(klasse);
  }

  // Voorlezen gaat het liefst met een opgenomen stem: genereer-audio.js maakt
  // met ElevenLabs een mp3 per tekst, regelkaart en hint en zet die in
  // audio/manifest.json. Is er voor een stuk tekst geen opname (vragen,
  // uitleg), dan valt Kaia terug op de Nederlandse stem van de browser.
  const kanSpreken = 'speechSynthesis' in window;
  const kanAfspelen = 'Audio' in window;
  let opnames = {};
  if (kanAfspelen) {
    fetch('audio/manifest.json', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : {}))
      .then((m) => { opnames = (m && m.opnames) || {}; })
      .catch(() => { /* geen opnames; browserstem doet het werk */ });
  }
  const speler = kanAfspelen ? new Audio() : null;

  // Voorlezen: alleen als de voorleesknop aan staat.
  function spreek(tekst, sleutel) {
    if (!instellingen.voorlezen || !tekst) return;
    speelOpname(sleutel, tekst);
  }

  // Altijd afspelen, ook als voorlezen uit staat. Voor de spelletjes van
  // groep 5, waar het gesproken woord bij het spel zelf hoort.
  function speelOpname(sleutel, tekst) {
    stopSpreken();
    const opname = sleutel && speler && opnames[sleutel];
    if (opname) {
      // De vingerafdruk in de URL zorgt dat de browser na opnieuw opnemen
      // (andere stem, andere tekst) niet de oude mp3 uit zijn cache haalt.
      speler.src = `audio/${opname.bestand}?v=${String(opname.hash || '').slice(0, 10)}`;
      speler.play().catch(() => spreekMetBrowser(tekst));
      return;
    }
    spreekMetBrowser(tekst);
  }

  function spreekMetBrowser(tekst) {
    if (!kanSpreken) return;
    const uiting = new SpeechSynthesisUtterance(tekst);
    uiting.lang = 'nl-NL';
    uiting.rate = 0.95;
    const stem = window.speechSynthesis.getVoices().find((v) => v.lang && v.lang.startsWith('nl'));
    if (stem) uiting.voice = stem;
    window.speechSynthesis.speak(uiting);
  }

  function stopSpreken() {
    if (kanSpreken) window.speechSynthesis.cancel();
    if (speler && !speler.paused) { speler.pause(); speler.currentTime = 0; }
  }

  /* ------------------------------------------------------------------ */
  /*  Voortgang                                                          */
  /* ------------------------------------------------------------------ */

  let voortgang = laad(OPSLAG_SLEUTEL, {});

  function sterrenVoor(percentage) {
    if (percentage >= 90) return 3;
    if (percentage >= 70) return 2;
    if (percentage >= 50) return 1;
    return 0;
  }

  /* ------------------------------------------------------------------ */
  /*  Toestand van de huidige ronde                                      */
  /* ------------------------------------------------------------------ */

  let modus = MODI[instellingen.modus] ? instellingen.modus : 'lezen';
  let oefening = null;      // de gekozen oefening
  let vraagNr = 0;          // index in oefening.vragen
  let antwoorden = [];      // { punten: 0 | 0.5 | 1, gekozen: ... } per vraag
  let reeks = 0;            // aantal goede antwoorden op rij
  let keuze = null;         // huidige keuze (mc: index, volgorde: array, open: tekst)
  let nagekeken = false;

  function huidigeLijst() { return MODI[modus].lijst(); }

  /* ------------------------------------------------------------------ */
  /*  Schermen wisselen                                                  */
  /* ------------------------------------------------------------------ */

  function toonScherm(id) {
    document.querySelectorAll('.scherm').forEach((s) => s.classList.toggle('actief', s.id === id));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ------------------------------------------------------------------ */
  /*  Groep kiezen                                                       */
  /* ------------------------------------------------------------------ */

  // De bovenbalk en de kleuren volgen de gekozen groep (null = keuzescherm).
  function zetGroep(groep) {
    document.body.classList.toggle('groep-5', groep === 5);
    const konijn = escapeHtml(GROEP5.konijn);
    $('#balk-naam').innerHTML =
      groep === 5 ? `Oefenen met <b>${konijn}</b>`
        : groep === 8 ? 'Oefenen met <b>Kaia</b>'
          : `Oefenen met <b>Kaia</b> en <b>${konijn}</b>`;
    if (groep !== 8) $('#balk-icoon').textContent = groep === 5 ? '🐰' : '🏡';
  }

  function toonGroepen() {
    stopSpreken();
    zetGroep(null);
    Konijn.render($('#konijn-keuze'), 'zwaai', GROEP5.konijn);
    Capybara.render($('#capy-keuze'), 'zwaai');
    $('#groep-5-uitleg').textContent = `Spellingspelletjes met ${GROEP5.konijn} het konijn`;
    toonScherm('scherm-groep');
  }

  /* ------------------------------------------------------------------ */
  /*  Startscherm groep 8                                                */
  /* ------------------------------------------------------------------ */

  function toonStart(praatje) {
    stopSpreken();
    zetGroep(8);
    const m = MODI[modus];
    Capybara.render($('#capy-start'), 'zwaai');
    $('#welkom-tekst').textContent = praatje || kies(m.welkom);
    $('#start-titel').textContent = m.titel;
    $('#start-ondertitel').textContent = m.ondertitel;
    $('#balk-icoon').textContent = m.icoon;
    $('#knop-andere').textContent = m.andere;
    document.querySelectorAll('.modus-knop').forEach((knop) => {
      const aan = knop.dataset.modus === modus;
      knop.classList.toggle('actief', aan);
      knop.setAttribute('aria-selected', String(aan));
    });
    tekenKaarten();
    tekenTotaal();
    toonScherm('scherm-start');
  }

  function tekenKaarten() {
    const houder = $('#kaarten');
    houder.innerHTML = '';
    huidigeLijst().forEach((oef) => {
      const opgeslagen = voortgang[oef.id];
      const knop = document.createElement('button');
      knop.className = 'kaart';
      knop.type = 'button';
      knop.innerHTML = `
        <span class="kaart-emoji">${oef.emoji}</span>
        <span class="kaart-titel">${escapeHtml(oef.titel)}</span>
        <span class="kaart-meta">
          <span class="label">${escapeHtml(oef.soort)}</span>
          <span class="bolletjes" title="Moeilijkheid">${'●'.repeat(oef.niveau)}${'○'.repeat(3 - oef.niveau)}</span>
          <span class="kaart-meta-vragen">${oef.vragen.length} vragen</span>
        </span>
        <span class="kaart-score ${opgeslagen ? '' : 'leeg'}">${
          opgeslagen
            ? `${'⭐'.repeat(opgeslagen.sterren)}${'☆'.repeat(3 - opgeslagen.sterren)} &nbsp;beste score: ${opgeslagen.beste}%`
            : 'Nog niet gedaan'
        }</span>`;
      knop.addEventListener('click', () => startOefening(oef));
      houder.appendChild(knop);
    });
  }

  // De sterren tellen per oefenvorm: elke vorm heeft zijn eigen rijtje.
  function tekenTotaal() {
    const lijst = huidigeLijst();
    const sterren = lijst.reduce((n, oef) => n + (voortgang[oef.id] ? voortgang[oef.id].sterren : 0), 0);
    const max = lijst.length * 3;
    const el = $('#totaal-tekst');
    if (!sterren) {
      el.textContent = 'Je hebt hier nog geen sterren verdiend. Begin maar gewoon — je mag alles zo vaak doen als je wilt!';
    } else {
      el.textContent = `Je hebt ${sterren} van de ${max} sterren verdiend bij ${MODI[modus].woord}. ${
        sterren === max ? 'Alles compleet — wat een topper! 🎉' : 'Ga zo door!'}`;
    }
  }

  /* ------------------------------------------------------------------ */
  /*  Leesscherm                                                         */
  /* ------------------------------------------------------------------ */

  function startOefening(oef) {
    oefening = oef;
    vraagNr = 0;
    antwoorden = [];
    reeks = 0;

    // Wat er in de lade bij de vragen zit: de tekst, of de regel van Kaia.
    const metRegel = MODI[modus].stof === 'regel';
    $('#lade-titel').textContent = MODI[modus].lade;
    $('#tekst-herhaling').className = metRegel ? 'regelkaart regelkaart-klein' : 'tekst tekst-klein';
    $('#tekst-herhaling').innerHTML = metRegel ? regelAlsHtml(oef) : tekstAlsHtml(oef, false);

    if (metRegel) toonRegel(oef);
    else toonLeestekst(oef);
  }

  function toonLeestekst(oef) {
    Capybara.render($('#capy-lezen'), 'lezen');
    $('#lees-soort').textContent = oef.soort;
    $('#lees-titel').textContent = oef.titel;
    $('#lees-tip').textContent = oef.intro || kies(PRAATJES.lezen);

    $('#tekst-inhoud').innerHTML = tekstAlsHtml(oef, true);
    verbergWoordkaart();

    toonScherm('scherm-lezen');
    spreek(`${oef.titel}. ${oef.alineas.join(' ')}`, `lees:${oef.id}`);
  }

  function toonRegel(oef) {
    Capybara.render($('#capy-regel'), 'denk');
    $('#regel-soort').textContent = oef.soort;
    $('#regel-titel').textContent = oef.titel;
    $('#regel-tip').textContent = oef.intro || kies(PRAATJES.spellen);
    $('#regel-inhoud').innerHTML = regelAlsHtml(oef);

    toonScherm('scherm-regel');
    spreek(`${oef.titel}. ${((oef.regel && oef.regel.stappen) || []).join(' ').replace(/\*/g, '')}`, `regel:${oef.id}`);
  }

  // In de regelteksten mag *een stukje tussen sterretjes* staan; dat wordt vet.
  function nadruk(tekst) {
    return escapeHtml(tekst).replace(/\*([^*]+)\*/g, '<b>$1</b>');
  }

  function regelAlsHtml(oef) {
    const regel = oef.regel || {};
    const stappen = (regel.stappen || []).map((s) => `<li>${nadruk(s)}</li>`).join('');
    const voorbeelden = (regel.voorbeelden || []).map((v) =>
      `<li><span class="vb-woord">${escapeHtml(v.woord)}</span><span class="vb-uitleg">${nadruk(v.uitleg)}</span></li>`).join('');
    return [
      stappen ? `<ol class="regel-stappen">${stappen}</ol>` : '',
      voorbeelden ? `<h3 class="regel-kop">Zo ziet dat eruit</h3><ul class="regel-voorbeelden">${voorbeelden}</ul>` : '',
      regel.letop ? `<p class="letop"><b>Let op!</b> ${nadruk(regel.letop)}</p>` : ''
    ].join('');
  }

  // Zet de alinea's om in HTML en maak de moeilijke woorden aanklikbaar.
  function tekstAlsHtml(oef, metWoorden) {
    return oef.alineas.map((alinea, i) => {
      let html = escapeHtml(alinea);
      if (metWoorden && oef.woorden) {
        oef.woorden.forEach((w, wi) => {
          const patroon = new RegExp(`(^|[\\s(«"'])(${escapeHtml(w.woord).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(?=[\\s.,;:!?)»"']|$)`, 'i');
          html = html.replace(patroon, (m, voor, woord) =>
            `${voor}<button type="button" class="moeilijk" data-woord="${wi}">${woord}</button>`);
        });
      }
      return `<p data-nr="${i + 1}">${html}</p>`;
    }).join('');
  }

  function toonWoordkaart(index) {
    const w = oefening.woorden[index];
    if (!w) return;
    $('#woordkaart-woord').textContent = w.woord;
    $('#woordkaart-uitleg').textContent = w.uitleg;
    $('#woordkaart').hidden = false;
    spreek(`${w.woord}. ${w.uitleg}`);
  }
  function verbergWoordkaart() { $('#woordkaart').hidden = true; }

  /* ------------------------------------------------------------------ */
  /*  Vragen                                                             */
  /* ------------------------------------------------------------------ */

  function toonVraag() {
    const v = oefening.vragen[vraagNr];
    keuze = null;
    nagekeken = false;

    tekenStippen();
    $('#vraag-vaardigheid').textContent = v.vaardigheid || 'Begrijpend lezen';
    $('#vraag-tekst').textContent = v.vraag;
    $('#hint-tekst').hidden = true;
    $('#hint-tekst').textContent = v.hint || '';
    $('#knop-hint').hidden = !v.hint;
    $('#knop-hint').textContent = '💡 Hint van Kaia';
    $('#feedback').hidden = true;
    $('#feedback').className = 'feedback';
    $('#knop-nakijken').hidden = false;
    $('#knop-nakijken').disabled = true;
    $('#knop-nakijken').textContent = 'Nakijken';
    $('#knop-volgende').hidden = true;
    $('#tekst-lade').open = false;

    const gebied = $('#antwoord-gebied');
    gebied.innerHTML = '';
    if (v.type === 'open') tekenOpen(gebied, v);
    else if (v.type === 'volgorde') tekenVolgorde(gebied, v);
    else if (v.type === 'invul') tekenInvul(gebied, v);
    else if (v.type === 'sorteer') tekenSorteer(gebied, v);
    else tekenMeerkeuze(gebied, v);

    toonScherm('scherm-vragen');
    spreek(vraagAlsSpraak(v));
  }

  // Bij spelling en taalverzorging klinken de antwoorden vaak precies
  // hetzelfde ("word" en "wordt", een komma meer of minder), dus die leest
  // Kaia niet voor — dan zou de vraag geen vraag meer zijn. De zin van een
  // invulvraag juist wél, met een stilte op het gat.
  function vraagAlsSpraak(v) {
    if (v.type === 'invul') return `${v.vraag} ${String(v.zin || '').replace('___', '...')}`;
    if (v.type === 'mc' && modus === 'lezen') return `${v.vraag}. ${v.opties.join('. ')}`;
    return v.vraag;
  }

  function tekenStippen() {
    const houder = $('#stippen');
    houder.innerHTML = '';
    oefening.vragen.forEach((_, i) => {
      const stip = document.createElement('span');
      stip.className = 'stip';
      if (i === vraagNr) stip.classList.add('nu');
      else if (antwoorden[i]) stip.classList.add(antwoorden[i].punten >= 1 ? 'goed' : 'fout');
      stip.title = `Vraag ${i + 1} van ${oefening.vragen.length}`;
      houder.appendChild(stip);
    });
  }

  function tekenMeerkeuze(gebied, v) {
    const lijst = document.createElement('div');
    lijst.className = 'opties';
    v.opties.forEach((tekst, i) => {
      const knop = document.createElement('button');
      knop.type = 'button';
      knop.className = 'optie';
      knop.innerHTML = `<span class="optie-letter">${LETTERS[i]}</span><span>${escapeHtml(tekst)}</span>`;
      knop.addEventListener('click', () => {
        if (nagekeken) return;
        keuze = i;
        lijst.querySelectorAll('.optie').forEach((k, ki) => k.classList.toggle('gekozen', ki === i));
        $('#knop-nakijken').disabled = false;
      });
      lijst.appendChild(knop);
    });
    gebied.appendChild(lijst);
  }

  function tekenOpen(gebied, v) {
    const veld = document.createElement('textarea');
    veld.className = 'open-antwoord';
    veld.id = 'open-veld';
    veld.placeholder = 'Typ hier je antwoord in je eigen woorden…';
    veld.addEventListener('input', () => {
      keuze = veld.value.trim();
      $('#knop-nakijken').disabled = keuze.length < 2;
    });
    gebied.appendChild(veld);
    $('#knop-nakijken').textContent = 'Vergelijk met Kaia';
  }

  function tekenVolgorde(gebied, v) {
    const gekozen = [];
    const hulp = document.createElement('div');
    hulp.className = 'volgorde-hulp';
    hulp.innerHTML = '<span id="volgorde-uitleg">Klik ze aan van <b>eerst</b> naar <b>laatst</b>.</span>';
    const wisknop = document.createElement('button');
    wisknop.type = 'button';
    wisknop.className = 'tekstknop';
    wisknop.textContent = 'Begin opnieuw';
    hulp.appendChild(wisknop);
    gebied.appendChild(hulp);

    const lijst = document.createElement('div');
    lijst.className = 'volgorde';
    v.items.forEach((tekst, i) => {
      const knop = document.createElement('button');
      knop.type = 'button';
      knop.className = 'volgorde-item';
      knop.dataset.index = i;
      knop.innerHTML = `<span class="volgorde-nr">–</span><span>${escapeHtml(tekst)}</span>`;
      knop.addEventListener('click', () => {
        if (nagekeken) return;
        const plek = gekozen.indexOf(i);
        if (plek === -1) gekozen.push(i);
        else gekozen.splice(plek, 1);
        ververs();
      });
      lijst.appendChild(knop);
    });
    gebied.appendChild(lijst);

    wisknop.addEventListener('click', () => { if (!nagekeken) { gekozen.length = 0; ververs(); } });

    function ververs() {
      lijst.querySelectorAll('.volgorde-item').forEach((knop) => {
        const i = Number(knop.dataset.index);
        const plek = gekozen.indexOf(i);
        knop.classList.toggle('gekozen', plek !== -1);
        knop.querySelector('.volgorde-nr').textContent = plek === -1 ? '–' : plek + 1;
      });
      keuze = gekozen.slice();
      $('#knop-nakijken').disabled = gekozen.length !== v.items.length;
    }
  }

  // Invulvraag: het kind typt het woord in het gat in de zin. Dit type kijkt
  // de app wél zelf na — bij spelling is er maar één goede schrijfwijze.
  function tekenInvul(gebied, v) {
    const goedeWoorden = alsLijst(v.goed);
    const zin = document.createElement('p');
    zin.className = 'invul-zin';
    const delen = String(v.zin || '___').split('___');

    const veld = document.createElement('input');
    veld.type = 'text';
    veld.id = 'invul-veld';
    veld.className = 'invul-veld';
    veld.autocomplete = 'off';
    veld.spellcheck = false;                      // anders verklapt de browser het antwoord
    veld.setAttribute('autocorrect', 'off');
    veld.setAttribute('aria-label', 'Vul het goede woord in');
    veld.style.width = `${Math.max(8, goedeWoorden[0].length + 3)}ch`;

    zin.appendChild(document.createTextNode(delen[0]));
    zin.appendChild(veld);
    zin.appendChild(document.createTextNode(delen.slice(1).join('___')));
    gebied.appendChild(zin);

    if (v.cue) {
      const cue = document.createElement('p');
      cue.className = 'invul-cue';
      cue.textContent = v.cue;
      gebied.appendChild(cue);
    }

    veld.addEventListener('input', () => {
      keuze = veld.value.trim();
      $('#knop-nakijken').disabled = keuze.length < 1;
    });
    veld.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return;
      e.preventDefault();
      if (!nagekeken && !$('#knop-nakijken').disabled) nakijken();
    });
    // Op een tablet zou dit meteen het toetsenbord opgooien; alleen met muis.
    if (window.matchMedia && window.matchMedia('(pointer: fine)').matches) {
      veld.focus({ preventScroll: true });
    }
  }

  // Sorteervraag: elk woord hoort in een van de twee vakjes.
  function tekenSorteer(gebied, v) {
    const gekozen = new Array(v.items.length).fill(-1);

    const hulp = document.createElement('p');
    hulp.className = 'sorteer-hulp';
    hulp.id = 'sorteer-hulp';
    hulp.textContent = 'Kies bij elk woord het goede vakje.';
    gebied.appendChild(hulp);

    const lijst = document.createElement('div');
    lijst.className = 'sorteer';
    v.items.forEach((tekst, i) => {
      const rij = document.createElement('div');
      rij.className = 'sorteer-rij';
      rij.dataset.index = i;
      rij.innerHTML = `<span class="sorteer-woord">${escapeHtml(tekst)}</span>`;

      const knoppen = document.createElement('div');
      knoppen.className = 'sorteer-knoppen';
      v.categorieen.forEach((categorie, ci) => {
        const knop = document.createElement('button');
        knop.type = 'button';
        knop.className = 'sorteer-knop';
        knop.textContent = categorie;
        knop.setAttribute('aria-label', `${tekst}: ${categorie}`);
        knop.addEventListener('click', () => {
          if (nagekeken) return;
          gekozen[i] = ci;
          ververs();
        });
        knoppen.appendChild(knop);
      });
      rij.appendChild(knoppen);
      lijst.appendChild(rij);
    });
    gebied.appendChild(lijst);

    function ververs() {
      lijst.querySelectorAll('.sorteer-rij').forEach((rij, i) => {
        rij.querySelectorAll('.sorteer-knop').forEach((knop, ci) =>
          knop.classList.toggle('gekozen', gekozen[i] === ci));
      });
      keuze = gekozen.slice();
      $('#knop-nakijken').disabled = gekozen.some((g) => g === -1);
    }
  }

  /* ------------------------------------------------------------------ */
  /*  Nakijken                                                           */
  /* ------------------------------------------------------------------ */

  function nakijken() {
    const v = oefening.vragen[vraagNr];
    if (v.type === 'open') { nakijkenOpen(v); return; }
    if (v.type === 'invul') { nakijkenInvul(v); return; }
    if (v.type === 'sorteer') { nakijkenSorteer(v); return; }

    nagekeken = true;
    let goed;

    if (v.type === 'volgorde') {
      goed = keuze.every((waarde, plek) => waarde === v.goedeVolgorde[plek]);
      const hulp = document.getElementById('volgorde-uitleg');
      if (hulp) {
        hulp.innerHTML = goed
          ? 'Precies de goede volgorde!'
          : 'De cijfers laten nu de <b>juiste</b> volgorde zien.';
      }
      const wis = document.querySelector('.volgorde-hulp .tekstknop');
      if (wis) wis.hidden = true;
      document.querySelectorAll('.volgorde-item').forEach((knop) => {
        const i = Number(knop.dataset.index);
        const plek = keuze.indexOf(i);
        knop.disabled = true;
        knop.classList.remove('gekozen');
        knop.classList.add(v.goedeVolgorde[plek] === i ? 'is-goed' : 'is-fout');
        if (v.goedeVolgorde[plek] !== i) {
          knop.querySelector('.volgorde-nr').textContent = v.goedeVolgorde.indexOf(i) + 1;
        }
      });
    } else {
      goed = keuze === v.goed;
      document.querySelectorAll('.optie').forEach((knop, i) => {
        knop.disabled = true;
        knop.classList.remove('gekozen');
        if (i === v.goed) knop.classList.add('is-goed');
        else if (i === keuze) knop.classList.add('is-fout');
      });
    }

    noteer(goed ? 1 : 0, v);
  }

  // Bij open vragen kijkt het kind zichzelf na aan de hand van het
  // voorbeeldantwoord. Dat past bij begrijpend lezen: er zijn meer goede
  // antwoorden mogelijk.
  function nakijkenOpen(v) {
    nagekeken = true;
    const veld = $('#open-veld');
    if (veld) veld.disabled = true;
    $('#knop-nakijken').hidden = true;

    const blok = document.createElement('div');
    blok.className = 'voorbeeld';
    blok.innerHTML = `
      <h3>Zo had je het ongeveer kunnen opschrijven:</h3>
      <p>${escapeHtml(v.voorbeeldantwoord)}</p>
      <p><b>Lijkt jouw antwoord hierop?</b></p>
      <div class="zelfcheck">
        <button type="button" data-punten="1">✅ Ja, hetzelfde</button>
        <button type="button" data-punten="0.5">🤏 Bijna, deels goed</button>
        <button type="button" data-punten="0">❌ Nee, dit was anders</button>
      </div>`;
    $('#antwoord-gebied').appendChild(blok);
    spreek(`Zo had je het ongeveer kunnen opschrijven. ${v.voorbeeldantwoord}`);

    blok.querySelectorAll('.zelfcheck button').forEach((knop) => {
      knop.addEventListener('click', () => {
        blok.querySelectorAll('.zelfcheck button').forEach((k) => k.classList.remove('actief'));
        knop.classList.add('actief');
        noteer(Number(knop.dataset.punten), v);
      });
    });
  }

  function alsLijst(waarde) { return Array.isArray(waarde) ? waarde : [waarde]; }

  // Hoofdletters, spaties en een punt aan het eind laten we door de vingers
  // glippen: het gaat om het woord zelf.
  function normaliseer(woord) {
    return String(woord).toLowerCase().trim().replace(/\s+/g, ' ').replace(/[.,!?;:]+$/, '');
  }
  function zonderTekentjes(woord) {
    return normaliseer(woord).normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function nakijkenInvul(v) {
    nagekeken = true;
    const goedeWoorden = alsLijst(v.goed);
    const gegeven = String(keuze || '');
    const veld = $('#invul-veld');
    if (veld) veld.disabled = true;

    let punten = 0;
    if (goedeWoorden.some((w) => normaliseer(w) === normaliseer(gegeven))) punten = 1;
    // Alleen een trema of een accent vergeten telt als half goed.
    else if (goedeWoorden.some((w) => zonderTekentjes(w) === zonderTekentjes(gegeven))) punten = 0.5;

    if (veld) veld.classList.add(punten >= 1 ? 'is-goed' : 'is-fout');
    if (punten < 1) {
      const antwoord = document.createElement('p');
      antwoord.className = 'invul-antwoord';
      antwoord.innerHTML = `Zo schrijf je het: <b>${escapeHtml(goedeWoorden[0])}</b>`;
      $('#antwoord-gebied').appendChild(antwoord);
    }
    noteer(punten, v);
  }

  function nakijkenSorteer(v) {
    nagekeken = true;
    let aantalGoed = 0;

    document.querySelectorAll('.sorteer-rij').forEach((rij, i) => {
      const juist = keuze[i] === v.goed[i];
      if (juist) aantalGoed++;
      rij.classList.add(juist ? 'is-goed' : 'is-fout');
      rij.querySelectorAll('.sorteer-knop').forEach((knop, ci) => {
        knop.disabled = true;
        knop.classList.remove('gekozen');
        if (ci === v.goed[i]) knop.classList.add('is-goed');
        else if (ci === keuze[i]) knop.classList.add('is-fout');
      });
    });

    const hulp = document.getElementById('sorteer-hulp');
    if (hulp) hulp.textContent = `Je had er ${aantalGoed} van de ${v.items.length} goed. Groen is de goede plek.`;

    const alles = aantalGoed === v.items.length;
    noteer(alles ? 1 : aantalGoed > v.items.length / 2 ? 0.5 : 0, v);
  }

  function noteer(punten, v) {
    antwoorden[vraagNr] = { punten, gekozen: keuze };
    reeks = punten >= 1 ? reeks + 1 : 0;

    const goed = punten >= 1;
    const bijna = punten > 0 && punten < 1;

    let kop;
    if (goed) kop = reeks >= 3 ? kies(PRAATJES.reeks).replace('{n}', reeks) : kies(PRAATJES.goed);
    else if (bijna) kop = v.type === 'open' ? 'Deels goed — mooi dat je eerlijk bent!' : 'Net niet — je was er heel dichtbij!';
    else kop = kies(PRAATJES.fout);

    const vak = $('#feedback');
    vak.className = 'feedback ' + (goed ? 'goed' : bijna ? '' : 'fout');
    vak.hidden = false;
    $('#feedback-kop').textContent = kop;
    $('#feedback-uitleg').textContent = v.uitleg || '';
    Capybara.render($('#capy-feedback'), goed ? 'juich' : bijna ? 'blij' : 'troost');

    tekenStippen();
    $('#knop-nakijken').hidden = true;
    $('#knop-volgende').hidden = false;
    $('#knop-volgende').textContent =
      vraagNr === oefening.vragen.length - 1 ? 'Bekijk je resultaat 🎉' : 'Volgende vraag →';
    $('#knop-volgende').focus({ preventScroll: true });
    // De onderbalk plakt onderaan het scherm; even scrollen zodat de feedback
    // van Kaia niet achter die knop verdwijnt.
    vak.scrollIntoView({ behavior: 'smooth', block: 'center' });
    spreek(`${kop} ${v.uitleg || ''}`);
  }

  function volgende() {
    if (vraagNr < oefening.vragen.length - 1) { vraagNr++; toonVraag(); }
    else toonKlaar();
  }

  /* ------------------------------------------------------------------ */
  /*  Eindscherm                                                         */
  /* ------------------------------------------------------------------ */

  function toonKlaar() {
    const totaal = oefening.vragen.length;
    const punten = antwoorden.reduce((n, a) => n + (a ? a.punten : 0), 0);
    const percentage = Math.round((punten / totaal) * 100);
    const sterren = sterrenVoor(percentage);

    const eerder = voortgang[oefening.id];
    voortgang[oefening.id] = {
      beste: Math.max(percentage, eerder ? eerder.beste : 0),
      sterren: Math.max(sterren, eerder ? eerder.sterren : 0),
      keer: (eerder ? eerder.keer : 0) + 1
    };
    bewaar(OPSLAG_SLEUTEL, voortgang);

    Capybara.render($('#capy-klaar'), sterren >= 2 ? 'juich' : 'blij');
    $('#klaar-tekst').textContent = eindPraatje(sterren, percentage);
    $('#sterren').innerHTML = [0, 1, 2].map((i) =>
      i < sterren
        ? `<span class="ster-aan" style="animation-delay:${i * 0.18}s">⭐</span>`
        : '<span class="ster-uit">☆</span>').join('');
    $('#score-getal').textContent =
      `${punten % 1 === 0 ? punten : punten.toFixed(1)} van de ${totaal} punten (${percentage}%)`;

    const lijst = $('#overzicht');
    lijst.innerHTML = '';
    oefening.vragen.forEach((v, i) => {
      const a = antwoorden[i];
      const p = a ? a.punten : 0;
      const li = document.createElement('li');
      li.className = p >= 1 ? 'goed' : p > 0 ? '' : 'fout';
      li.innerHTML = `
        <span class="overzicht-icoon">${p >= 1 ? '✅' : p > 0 ? '🤏' : '❌'}</span>
        <span>
          <p class="overzicht-vraag">${i + 1}. ${escapeHtml(v.vraag)}</p>
          <p class="overzicht-uitleg">${escapeHtml(v.uitleg || '')}</p>
        </span>`;
      lijst.appendChild(li);
    });

    toonScherm('scherm-klaar');
    spreek($('#klaar-tekst').textContent);
  }

  function eindPraatje(sterren, percentage) {
    const stof = MODI[modus].stof;
    if (sterren === 3) {
      return stof === 'regel'
        ? `Wauw! ${percentage}% goed. Deze regel zit echt in je hoofd. Ik ben trots op je!`
        : `Wauw! ${percentage}% goed. Je leest de tekst echt goed door. Ik ben trots op je!`;
    }
    if (sterren === 2) return `Goed gedaan! ${percentage}% goed. Kijk hieronder nog even bij de vragen die misgingen — dan zit je er volgende keer bovenop.`;
    if (sterren === 1) return `Je hebt ${percentage}% goed. Deze ${stof} was pittig. Lees hem gerust nog een keer, dan gaat het vaak veel beter.`;
    return `Deze was lastig, maar opgeven doen we niet. Zullen we de ${stof} nog een keer samen doorlezen?`;
  }

  /* ------------------------------------------------------------------ */
  /*  Knoppen aansluiten                                                 */
  /* ------------------------------------------------------------------ */

  $('#knop-home').addEventListener('click', toonGroepen);
  document.querySelectorAll('.groep-kaart').forEach((kaart) => {
    kaart.addEventListener('click', () => {
      if (kaart.dataset.groep === '5') { zetGroep(5); window.Groep5.toonStart(); }
      else toonStart();
    });
  });
  document.querySelectorAll('[data-naar-groepen]').forEach((k) => k.addEventListener('click', toonGroepen));
  document.querySelectorAll('[data-terug]').forEach((k) =>
    k.addEventListener('click', () => toonStart(kies(PRAATJES.terug))));

  document.querySelectorAll('.modus-knop').forEach((knop) => {
    knop.addEventListener('click', () => {
      if (knop.dataset.modus === modus) return;
      modus = knop.dataset.modus;
      instellingen.modus = modus;
      bewaar(INSTELLING_SLEUTEL, instellingen);
      toonStart();
    });
  });

  $('#knop-start-vragen').addEventListener('click', () => { stopSpreken(); toonVraag(); });
  $('#knop-start-spelling').addEventListener('click', () => { stopSpreken(); toonVraag(); });
  $('#knop-nakijken').addEventListener('click', nakijken);
  $('#knop-volgende').addEventListener('click', volgende);
  $('#knop-opnieuw').addEventListener('click', () => startOefening(oefening));
  $('#knop-andere').addEventListener('click', () => toonStart(kies(PRAATJES.terug)));

  $('#knop-hint').addEventListener('click', () => {
    const hint = $('#hint-tekst');
    hint.hidden = !hint.hidden;
    $('#knop-hint').textContent = hint.hidden ? '💡 Hint van Kaia' : '💡 Hint verbergen';
    if (!hint.hidden) {
      Capybara.render($('#capy-feedback'), 'denk');
      spreek(hint.textContent, `hint:${oefening.id}:${vraagNr}`);
    }
  });

  $('#tekst-inhoud').addEventListener('click', (e) => {
    const knop = e.target.closest('.moeilijk');
    if (knop) toonWoordkaart(Number(knop.dataset.woord));
  });
  $('#woordkaart-sluit').addEventListener('click', verbergWoordkaart);

  $('#knop-reset').addEventListener('click', () => {
    if (!confirm('Weet je het zeker? Al je sterren verdwijnen dan.')) return;
    voortgang = {};
    bewaar(OPSLAG_SLEUTEL, voortgang);
    tekenKaarten();
    tekenTotaal();
  });

  $('#knop-tekstgrootte').addEventListener('click', () => {
    instellingen.letters = (instellingen.letters + 1) % LETTERKLASSEN.length;
    pasLettersToe();
    bewaar(INSTELLING_SLEUTEL, instellingen);
  });

  const geluidKnop = $('#knop-geluid');
  if (!kanSpreken && !kanAfspelen) {
    geluidKnop.hidden = true;
  } else {
    geluidKnop.addEventListener('click', () => {
      instellingen.voorlezen = !instellingen.voorlezen;
      geluidKnop.setAttribute('aria-pressed', String(instellingen.voorlezen));
      geluidKnop.textContent = instellingen.voorlezen ? '🔊' : '🔇';
      bewaar(INSTELLING_SLEUTEL, instellingen);
      if (!instellingen.voorlezen) stopSpreken();
      else spreek('Ik lees voortaan met je mee.', 'ui:voorlezen-aan');
    });
    geluidKnop.setAttribute('aria-pressed', String(instellingen.voorlezen));
    geluidKnop.textContent = instellingen.voorlezen ? '🔊' : '🔇';
  }

  /* ------------------------------------------------------------------ */
  /*  Start                                                              */
  /* ------------------------------------------------------------------ */

  // Wat spellen.js (groep 5) van deze app nodig heeft.
  window.KaiaApp = { $, kies, laad, bewaar, escapeHtml, toonScherm, spreek, speelOpname, stopSpreken };

  pasLettersToe();
  Capybara.render($('#capy-feedback'), 'blij');
  toonGroepen();
})();

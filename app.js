/*
 * Lezen met Kaya — app-logica.
 *
 * Bewust zonder framework of build-stap: dit bestand wordt direct door de
 * browser geladen. De oefeningen komen uit exercises.js; deze code kent geen
 * enkele oefening bij naam, zodat er later een editor bovenop kan.
 */

(() => {
  'use strict';

  /* ------------------------------------------------------------------ */
  /*  Kleine hulpjes                                                     */
  /* ------------------------------------------------------------------ */

  const $ = (sel) => document.querySelector(sel);
  const OPSLAG_SLEUTEL = 'lezen-met-kaya:voortgang:v1';
  const INSTELLING_SLEUTEL = 'lezen-met-kaya:instellingen:v1';
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
  /*  Wat Kaya zegt                                                      */
  /* ------------------------------------------------------------------ */

  const PRAATJES = {
    welkom: [
      'Hoi! Ik ben Kaya. Zullen we samen oefenen met begrijpend lezen?',
      'Fijn dat je er bent! Kies een tekst, dan lezen we samen.',
      'Klaar voor een tekst? Rustig lezen mag altijd — daar wordt je brein blij van.'
    ],
    terug: [
      'Daar ben je weer! Welke tekst pakken we nu?',
      'Goed bezig. Nog eentje doen?',
      'Kies maar een tekst. Ik wacht wel even.'
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
    ]
  };

  /* ------------------------------------------------------------------ */
  /*  Instellingen (lettergrootte en voorlezen)                          */
  /* ------------------------------------------------------------------ */

  const instellingen = laad(INSTELLING_SLEUTEL, { letters: 0, voorlezen: false });
  const LETTERKLASSEN = ['', 'letters-groot', 'letters-extra'];

  function pasLettersToe() {
    document.body.classList.remove('letters-groot', 'letters-extra');
    const klasse = LETTERKLASSEN[instellingen.letters];
    if (klasse) document.body.classList.add(klasse);
  }

  const kanSpreken = 'speechSynthesis' in window;

  function spreek(tekst) {
    if (!kanSpreken || !instellingen.voorlezen || !tekst) return;
    window.speechSynthesis.cancel();
    const uiting = new SpeechSynthesisUtterance(tekst);
    uiting.lang = 'nl-NL';
    uiting.rate = 0.95;
    const stem = window.speechSynthesis.getVoices().find((v) => v.lang && v.lang.startsWith('nl'));
    if (stem) uiting.voice = stem;
    window.speechSynthesis.speak(uiting);
  }

  function stopSpreken() { if (kanSpreken) window.speechSynthesis.cancel(); }

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

  let oefening = null;      // de gekozen oefening
  let vraagNr = 0;          // index in oefening.vragen
  let antwoorden = [];      // { punten: 0 | 0.5 | 1, gekozen: ... } per vraag
  let reeks = 0;            // aantal goede antwoorden op rij
  let keuze = null;         // huidige keuze (mc: index, volgorde: array, open: tekst)
  let nagekeken = false;

  /* ------------------------------------------------------------------ */
  /*  Schermen wisselen                                                  */
  /* ------------------------------------------------------------------ */

  function toonScherm(id) {
    document.querySelectorAll('.scherm').forEach((s) => s.classList.toggle('actief', s.id === id));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ------------------------------------------------------------------ */
  /*  Startscherm                                                        */
  /* ------------------------------------------------------------------ */

  function toonStart(praatje) {
    stopSpreken();
    Capybara.render($('#capy-start'), 'zwaai');
    $('#welkom-tekst').textContent = praatje || kies(PRAATJES.welkom);
    tekenKaarten();
    tekenTotaal();
    toonScherm('scherm-start');
  }

  function tekenKaarten() {
    const houder = $('#kaarten');
    houder.innerHTML = '';
    OEFENINGEN.forEach((oef) => {
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

  function tekenTotaal() {
    const sterren = Object.values(voortgang).reduce((n, v) => n + v.sterren, 0);
    const max = OEFENINGEN.length * 3;
    const el = $('#totaal-tekst');
    if (!sterren) {
      el.textContent = 'Je hebt nog geen sterren verdiend. Begin maar gewoon — je mag alles zo vaak doen als je wilt!';
    } else {
      el.textContent = `Je hebt ${sterren} van de ${max} sterren verdiend. ${
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

    Capybara.render($('#capy-lezen'), 'lezen');
    $('#lees-soort').textContent = oef.soort;
    $('#lees-titel').textContent = oef.titel;
    $('#lees-tip').textContent = oef.intro || kies(PRAATJES.lezen);

    $('#tekst-inhoud').innerHTML = tekstAlsHtml(oef, true);
    $('#tekst-herhaling').innerHTML = tekstAlsHtml(oef, false);
    verbergWoordkaart();

    toonScherm('scherm-lezen');
    spreek(`${oef.titel}. ${oef.alineas.join(' ')}`);
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
    $('#knop-hint').textContent = '💡 Hint van Kaya';
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
    else tekenMeerkeuze(gebied, v);

    toonScherm('scherm-vragen');
    spreek(v.vraag + (v.type === 'mc' ? '. ' + v.opties.join('. ') : ''));
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
    $('#knop-nakijken').textContent = 'Vergelijk met Kaya';
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

  /* ------------------------------------------------------------------ */
  /*  Nakijken                                                           */
  /* ------------------------------------------------------------------ */

  function nakijken() {
    const v = oefening.vragen[vraagNr];
    if (v.type === 'open') { nakijkenOpen(v); return; }

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

  function noteer(punten, v) {
    antwoorden[vraagNr] = { punten, gekozen: keuze };
    reeks = punten >= 1 ? reeks + 1 : 0;

    const goed = punten >= 1;
    const bijna = punten > 0 && punten < 1;

    let kop;
    if (goed) kop = reeks >= 3 ? kies(PRAATJES.reeks).replace('{n}', reeks) : kies(PRAATJES.goed);
    else if (bijna) kop = 'Deels goed — mooi dat je eerlijk bent!';
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
    // van Kaya niet achter die knop verdwijnt.
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
    if (sterren === 3) return `Wauw! ${percentage}% goed. Je leest de tekst echt goed door. Ik ben trots op je!`;
    if (sterren === 2) return `Goed gedaan! ${percentage}% goed. Kijk hieronder nog even bij de vragen die misgingen — dan zit je er volgende keer bovenop.`;
    if (sterren === 1) return `Je hebt ${percentage}% goed. Deze tekst was pittig. Lees hem gerust nog een keer, dan gaat het vaak veel beter.`;
    return 'Deze was lastig, maar opgeven doen we niet. Zullen we de tekst nog een keer samen doorlezen?';
  }

  /* ------------------------------------------------------------------ */
  /*  Knoppen aansluiten                                                 */
  /* ------------------------------------------------------------------ */

  $('#knop-home').addEventListener('click', () => toonStart(kies(PRAATJES.terug)));
  document.querySelectorAll('[data-terug]').forEach((k) =>
    k.addEventListener('click', () => toonStart(kies(PRAATJES.terug))));

  $('#knop-start-vragen').addEventListener('click', () => { stopSpreken(); toonVraag(); });
  $('#knop-nakijken').addEventListener('click', nakijken);
  $('#knop-volgende').addEventListener('click', volgende);
  $('#knop-opnieuw').addEventListener('click', () => startOefening(oefening));
  $('#knop-andere').addEventListener('click', () => toonStart(kies(PRAATJES.terug)));

  $('#knop-hint').addEventListener('click', () => {
    const hint = $('#hint-tekst');
    hint.hidden = !hint.hidden;
    $('#knop-hint').textContent = hint.hidden ? '💡 Hint van Kaya' : '💡 Hint verbergen';
    if (!hint.hidden) {
      Capybara.render($('#capy-feedback'), 'denk');
      spreek(hint.textContent);
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
  if (!kanSpreken) {
    geluidKnop.hidden = true;
  } else {
    geluidKnop.addEventListener('click', () => {
      instellingen.voorlezen = !instellingen.voorlezen;
      geluidKnop.setAttribute('aria-pressed', String(instellingen.voorlezen));
      geluidKnop.textContent = instellingen.voorlezen ? '🔊' : '🔇';
      bewaar(INSTELLING_SLEUTEL, instellingen);
      if (!instellingen.voorlezen) stopSpreken();
      else spreek('Ik lees voortaan met je mee.');
    });
    geluidKnop.setAttribute('aria-pressed', String(instellingen.voorlezen));
    geluidKnop.textContent = instellingen.voorlezen ? '🔊' : '🔇';
  }

  /* ------------------------------------------------------------------ */
  /*  Start                                                              */
  /* ------------------------------------------------------------------ */

  pasLettersToe();
  Capybara.render($('#capy-feedback'), 'blij');
  toonStart();
})();

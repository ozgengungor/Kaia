/*
 * Knutselen — de lessen met Wolkje het schaap.
 *
 * Een les gaat stap voor stap: één stap tegelijk in grote letters, zodat je
 * kunt meedoen met je handen vol wol. Na de stappen komen een paar vragen
 * ("Weet je het nog?") en daarna zeg je zelf of het gelukt is. Er zijn geen
 * sterren: je haakwerk is het bewijs.
 *
 * Bij projecten staat een teller voor toeren en steken; die onthoudt de
 * stand per les, ook als je het tabblad sluit.
 *
 * De gedeelde hulpjes (schermen wisselen, opslag, audio) komen uit app.js via
 * window.KaiaApp. De voortgang staat los van die van groep 5 en groep 8.
 */

(() => {
  'use strict';

  const { $, kies, laad, bewaar, escapeHtml, toonScherm, spreek, speelOpname, stopSpreken } = window.KaiaApp;

  const NAAM = KNUTSELEN.coach;
  const OPSLAG = 'lezen-met-kaia:knutselen:v1';

  let voortgang = laad(OPSLAG, null) || { klaar: {}, tellers: {} };
  let plan = null;        // het plan van de les die open is
  let les = null;         // de les die open is
  let fase = 'stap';      // 'stap' | 'vraag' | 'einde'
  let stapNr = 0;
  let vraagNr = 0;
  let beantwoord = false;

  /* ------------------------------------------------------------------ */
  /*  Hulpjes                                                            */
  /* ------------------------------------------------------------------ */

  function schaap(sel, stemming) { Schaap.render($(sel), stemming, NAAM); }
  function vet(tekst) { return escapeHtml(tekst).replace(/\*([^*]+)\*/g, '<b>$1</b>'); }
  function kaal(tekst) { return String(tekst).replace(/\*/g, ''); }
  function sleutelVan(p, l) { return `${p.id}:${l.id}`; }
  function isKlaar(p, l) { return Boolean(voortgang.klaar[sleutelVan(p, l)]); }
  function zeg(tekst) { $('#k-praatje').textContent = tekst; }

  // Wat er bij een stap wordt voorgelezen. Er zijn geen opnames voor Knutselen,
  // dus speelOpname() valt altijd terug op de browserstem.
  function stapAlsSpraak(stap) { return kaal(stap.tip ? `${stap.tekst} Tip: ${stap.tip}` : stap.tekst); }
  function vraagAlsSpraak(v) { return [v.vraag, ...v.opties].map((t) => (/[.!?]$/.test(t) ? t : `${t}.`)).join(' '); }

  /* ------------------------------------------------------------------ */
  /*  Haaktekens en haakschema's                                         */
  /* ------------------------------------------------------------------ */

  // De internationale tekens uit haakschema's, in een vakje van 40 bij 40.
  const TEKENS = {
    losse: { naam: 'losse', afk: 'l', svg: '<ellipse cx="20" cy="20" rx="12" ry="6.5" fill="none" stroke="currentColor" stroke-width="3"/>' },
    'halve-vaste': { naam: 'halve vaste', afk: 'hv', svg: '<circle cx="20" cy="20" r="6" fill="currentColor"/>' },
    vaste: { naam: 'vaste', afk: 'v', svg: '<path d="M11 11 L29 29 M29 11 L11 29" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>' },
    'half-stokje': { naam: 'half stokje', afk: 'hstk', svg: '<path d="M10 8 H30 M20 8 V34" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>' },
    stokje: { naam: 'stokje', afk: 'stk', svg: '<path d="M10 6 H30 M20 6 V36 M13 25 L27 17" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>' }
  };

  function tekenSvg(naam, grootte = 40) {
    return `<svg class="k-teken-svg" viewBox="0 0 40 40" width="${grootte}" height="${grootte}" aria-hidden="true">${TEKENS[naam].svg}</svg>`;
  }

  function tekenBlok(naam) {
    const t = TEKENS[naam];
    if (!t) return '';
    return `<span class="k-teken">${tekenSvg(naam)}<span><b>${escapeHtml(t.naam)}</b> (${escapeHtml(t.afk)})</span></span>`;
  }

  // Twee kleuren om de toeren in een schema uit elkaar te houden.
  const TOERKLEUREN = ['#7b52b3', '#2f9e6e'];

  // Een plaatsje voor één teken in een schema, gecentreerd op (x, y).
  function zet(naam, x, y, kleur, draai = 0) {
    return `<g transform="translate(${x - 10} ${y - 10}) rotate(${draai} 10 10) scale(.5)" style="color:${kleur}">${TEKENS[naam].svg}</g>`;
  }

  // Heen en weer: onderaan de lossen, daarboven de toeren vasten. Toer 1
  // gaat van rechts naar links (je begint bij de naald), toer 2 terug, enz.
  // Aan het eind van elke toer staat de keerlosse, rechtop.
  function schemaRijen({ steken, rijen }) {
    const vak = 24;
    const breed = (steken + 3) * vak;
    const hoog = (rijen + 1) * vak + 20;
    const x = (kolom) => (kolom + 1) * vak;
    const y = (rij) => hoog - 14 - rij * vak;
    let uit = '';
    for (let k = 1; k <= steken + 1; k++) uit += zet('losse', x(k), y(0), '#6d5c4d');
    for (let r = 1; r <= rijen; r++) {
      const kleur = TOERKLEUREN[(r - 1) % 2];
      for (let k = 1; k <= steken; k++) uit += zet('vaste', x(k), y(r), kleur);
      const vanRechts = r % 2 === 1;
      const nummerX = vanRechts ? x(steken + 1) + 14 : x(0) - 14;
      uit += `<text x="${nummerX}" y="${y(r) + 5}" font-size="13" font-weight="700" text-anchor="middle" fill="${kleur}">${r}</text>`;
      // De keerlosse voor de volgende toer, aan de kant waar deze toer eindigt.
      if (r < rijen) uit += zet('losse', vanRechts ? x(0) : x(steken + 1), y(r + 1), TOERKLEUREN[r % 2], 90);
    }
    return `<svg class="k-schema-svg" viewBox="-10 0 ${breed + 20} ${hoog}" role="img" aria-label="Haakschema met ${rijen} toeren van ${steken} vasten">${uit}</svg>`;
  }

  // In de rondte: in het midden de ring, daaromheen elke toer 6 steken meer.
  function schemaRond({ toeren }) {
    const afstand = 26;
    const straal = toeren * afstand + 16;
    let uit = `<circle cx="0" cy="0" r="8" fill="none" stroke="#6d5c4d" stroke-width="2" stroke-dasharray="3 3"/>`;
    for (let t = 1; t <= toeren; t++) {
      const kleur = TOERKLEUREN[(t - 1) % 2];
      const aantal = 6 * t;
      const r = t * afstand - 4;
      for (let i = 0; i < aantal; i++) {
        const hoek = (i / aantal) * Math.PI * 2 - Math.PI / 2;
        uit += zet('vaste', Math.cos(hoek) * r, Math.sin(hoek) * r, kleur, (hoek * 180) / Math.PI + 90);
      }
      uit += `<text x="${r + 4}" y="${-r + 10}" font-size="12" font-weight="700" fill="${kleur}">${t}</text>`;
    }
    return `<svg class="k-schema-svg k-schema-rond" viewBox="${-straal} ${-straal} ${straal * 2} ${straal * 2}" role="img" aria-label="Haakschema in de rondte met ${toeren} ${toeren === 1 ? 'toer' : 'toeren'}">${uit}</svg>`;
  }

  /* ------------------------------------------------------------------ */
  /*  Startscherm                                                        */
  /* ------------------------------------------------------------------ */

  function toonStart(praatje) {
    stopSpreken();
    les = null;
    schaap('#schaap-start', praatje ? 'juich' : 'zwaai');
    $('#k-welkom').textContent = (praatje || kies(KNUTSELEN.welkom)).replace('{naam}', NAAM);

    const houder = $('#k-plannen');
    houder.innerHTML = '';
    KNUTSELEN.plannen.forEach((p) => {
      const gedaan = p.lessen.filter((l) => isKlaar(p, l)).length;
      const volgende = p.lessen.find((l) => !isKlaar(p, l));
      const blok = document.createElement('section');
      blok.className = 'k-plan';
      blok.innerHTML = `
        <h1 class="titel">${p.emoji} ${escapeHtml(p.titel)}</h1>
        <p class="ondertitel">${escapeHtml(p.uitleg)}</p>
        <div class="k-plan-voortgang">
          <div class="k-balk" role="progressbar" aria-valuemin="0" aria-valuemax="${p.lessen.length}" aria-valuenow="${gedaan}">
            <span style="width:${(gedaan / p.lessen.length) * 100}%"></span>
          </div>
          <span>${gedaan} van de ${p.lessen.length} lessen gelukt</span>
        </div>
        <div class="kaarten"></div>`;
      const kaarten = blok.querySelector('.kaarten');
      p.lessen.forEach((l, i) => {
        const klaar = isKlaar(p, l);
        const knop = document.createElement('button');
        knop.type = 'button';
        knop.className = `kaart ${l === volgende ? 'k-kaart-volgende' : ''}`;
        knop.innerHTML = `
          <span class="kaart-emoji">${l.emoji}</span>
          <span class="kaart-titel">${i + 1}. ${escapeHtml(l.titel)}</span>
          <span class="kaart-meta">
            <span class="label">${escapeHtml(l.soort)}</span>
            <span class="kaart-meta-vragen">${escapeHtml(l.duur)}</span>
          </span>
          <span class="kaart-score ${klaar || l === volgende ? '' : 'leeg'}">${
            klaar ? '✅ Gelukt' : l === volgende ? '👉 Hier ga je verder' : 'Nog niet gedaan'
          }</span>`;
        knop.addEventListener('click', () => startLes(p, l));
        kaarten.appendChild(knop);
      });
      houder.appendChild(blok);
    });

    toonScherm('scherm-k-start');
  }

  /* ------------------------------------------------------------------ */
  /*  Een les                                                            */
  /* ------------------------------------------------------------------ */

  function startLes(p, l) {
    stopSpreken();
    plan = p;
    les = l;
    fase = 'stap';
    stapNr = 0;
    vraagNr = 0;

    $('#k-les-soort').textContent = l.soort;
    $('#k-les-titel').textContent = `${l.emoji} ${l.titel}`;
    schaap('#schaap-les', 'blij');
    zeg(l.intro);

    const nodig = $('#k-nodig');
    nodig.hidden = !l.nodig;
    nodig.innerHTML = l.nodig
      ? `<h2 class="regel-kop">Dit heb je nodig</h2><ul>${l.nodig.map((n) => `<li>${vet(n)}</li>`).join('')}</ul>`
      : '';

    const schema = $('#k-schema');
    schema.hidden = !l.schema;
    schema.open = false;
    schema.innerHTML = l.schema
      ? `<summary>🗺️ Bekijk het haakschema</summary>
         <div class="k-schema-plaatje">${l.schema.soort === 'rond' ? schemaRond(l.schema) : schemaRijen(l.schema)}</div>
         <p>${vet(l.schema.uitleg)}</p>`
      : '';

    $('#k-hulp').hidden = !l.hulp;
    $('#k-hulp').open = false;
    $('#k-hulp-lijst').innerHTML = (l.hulp || []).map((h) =>
      `<li><p class="k-probleem">${vet(h.probleem)}</p><p>${vet(h.oplossing)}</p></li>`).join('');

    $('#k-teller').hidden = !l.teller;
    if (l.teller) tekenTeller();

    tekenStap(true);
    toonScherm('scherm-k-les');
  }

  function tekenStippen() {
    const houder = $('#k-stippen');
    houder.innerHTML = les.stappen.map((_, i) => {
      const klasse = fase !== 'stap' || i < stapNr ? 'gedaan' : i === stapNr ? 'nu' : '';
      return `<span class="stip ${klasse}"></span>`;
    }).join('');
  }

  function tekenStap(eerste) {
    const stap = les.stappen[stapNr];
    const laatste = stapNr === les.stappen.length - 1;
    tekenStippen();
    $('#k-kaart').innerHTML = `
      <p class="k-stap-nr">Stap ${stapNr + 1} van ${les.stappen.length}</p>
      <p class="k-stap-tekst">${vet(stap.tekst)}</p>
      ${stap.teken ? `<p class="k-tekens">${tekenBlok(stap.teken)}</p>` : ''}
      ${stap.tekens ? `<p class="k-tekens">${stap.tekens.map(tekenBlok).join('')}</p>` : ''}
      ${stap.tip ? `<p class="letop">💡 ${vet(stap.tip)}</p>` : ''}
      <button type="button" class="luisterknop" id="k-luister">🔊 Lees voor</button>`;
    $('#k-luister').addEventListener('click', () => speelOpname(`k:${les.id}:stap:${stapNr}`, stapAlsSpraak(stap)));

    const terug = $('#k-terug');
    terug.hidden = false;
    terug.disabled = stapNr === 0;
    terug.textContent = '← Vorige';
    $('#k-verder').disabled = false;
    $('#k-verder').textContent = laatste ? (les.vragen ? 'Klaar! Weet je het nog? →' : 'Klaar met de stappen →') : 'Volgende stap →';

    if (eerste) spreek(`${les.intro} ${stapAlsSpraak(stap)}`, [`k:${les.id}:intro`, `k:${les.id}:stap:${stapNr}`]);
    else spreek(stapAlsSpraak(stap), `k:${les.id}:stap:${stapNr}`);
  }

  function tekenVraag() {
    const v = les.vragen[vraagNr];
    beantwoord = false;
    tekenStippen();
    schaap('#schaap-les', 'denk');
    zeg('Weet je het nog? Kies het goede antwoord.');
    $('#k-kaart').innerHTML = `
      <p class="k-stap-nr">Weet je het nog? Vraag ${vraagNr + 1} van ${les.vragen.length}</p>
      <h2 class="vraag">${vet(v.vraag)}</h2>
      <div class="k-opties">${v.opties.map((o, i) =>
        `<button type="button" class="k-optie" data-optie="${i}">${vet(o)}</button>`).join('')}</div>
      <p class="k-vraag-uitleg" id="k-vraag-uitleg" hidden></p>`;
    $('#k-kaart').querySelectorAll('.k-optie').forEach((knop) =>
      knop.addEventListener('click', () => kijkNa(Number(knop.dataset.optie))));
    $('#k-terug').hidden = true;
    $('#k-verder').disabled = true;
    $('#k-verder').textContent = vraagNr === les.vragen.length - 1 ? 'Naar het einde →' : 'Volgende vraag →';
    spreek(vraagAlsSpraak(v), `k:${les.id}:vraag:${vraagNr}`);
  }

  function kijkNa(keuze) {
    if (beantwoord) return;
    beantwoord = true;
    const v = les.vragen[vraagNr];
    const goed = keuze === v.goed;
    $('#k-kaart').querySelectorAll('.k-optie').forEach((knop, i) => {
      knop.disabled = true;
      if (i === v.goed) knop.classList.add('is-goed');
      else if (i === keuze) knop.classList.add('is-fout');
    });
    const kop = goed ? kies(KNUTSELEN.vraagGoed) : KNUTSELEN.vraagFout;
    const uitleg = $('#k-vraag-uitleg');
    uitleg.hidden = false;
    uitleg.innerHTML = `<b>${escapeHtml(kop)}</b> ${vet(v.uitleg)}`;
    schaap('#schaap-les', goed ? 'juich' : 'troost');
    zeg(kop);
    $('#k-verder').disabled = false;
    spreek(kaal(v.uitleg), `k:${les.id}:uitleg:${vraagNr}`);
  }

  function tekenEinde() {
    const klaar = isKlaar(plan, les);
    tekenStippen();
    schaap('#schaap-les', 'juich');
    zeg(les.klaar);
    $('#k-kaart').innerHTML = `
      <p class="k-stap-nr">Einde van de les</p>
      <h2 class="vraag">Is het gelukt?</h2>
      <p>Kijk naar wat je gemaakt hebt. Lijkt het erop? Dan is de les gelukt, ook als het nog niet perfect is. Oefenen mag altijd!</p>`;
    const terug = $('#k-terug');
    terug.hidden = false;
    terug.disabled = false;
    terug.textContent = '🔁 Nog een keer';
    $('#k-verder').disabled = false;
    $('#k-verder').textContent = klaar ? '✅ Terug naar de lessen' : '✅ Gelukt!';
    spreek(les.klaar, `k:${les.id}:klaar`);
  }

  function verder() {
    if (fase === 'stap') {
      if (stapNr < les.stappen.length - 1) { stapNr += 1; tekenStap(false); return; }
      if (les.vragen) { fase = 'vraag'; vraagNr = 0; tekenVraag(); return; }
      fase = 'einde';
      tekenEinde();
    } else if (fase === 'vraag') {
      if (vraagNr < les.vragen.length - 1) { vraagNr += 1; tekenVraag(); return; }
      fase = 'einde';
      tekenEinde();
    } else {
      const wasAlKlaar = isKlaar(plan, les);
      voortgang.klaar[sleutelVan(plan, les)] = new Date().toISOString().slice(0, 10);
      bewaar(OPSLAG, voortgang);
      toonStart(wasAlKlaar ? 'Wat wil je nu doen?' : kies(KNUTSELEN.gelukt));
    }
  }

  function terug() {
    if (fase === 'einde') { startLes(plan, les); return; }
    if (fase === 'stap' && stapNr > 0) { stapNr -= 1; tekenStap(false); }
  }

  /* ------------------------------------------------------------------ */
  /*  De teller                                                          */
  /* ------------------------------------------------------------------ */

  function teller() {
    const sleutel = sleutelVan(plan, les);
    if (!voortgang.tellers[sleutel]) voortgang.tellers[sleutel] = { toer: 0, steek: 0 };
    return voortgang.tellers[sleutel];
  }

  function tekenTeller() {
    const t = teller();
    $('#teller-toer').textContent = t.toer;
    $('#teller-steek').textContent = t.steek;
  }

  // Een nieuwe toer begint weer bij steek 0.
  function telBij(soort, stap) {
    const t = teller();
    t[soort] = Math.max(0, t[soort] + stap);
    if (soort === 'toer' && stap > 0) t.steek = 0;
    bewaar(OPSLAG, voortgang);
    tekenTeller();
  }

  /* ------------------------------------------------------------------ */
  /*  Knoppen aansluiten                                                 */
  /* ------------------------------------------------------------------ */

  $('#k-verder').addEventListener('click', verder);
  $('#k-terug').addEventListener('click', terug);
  document.querySelectorAll('[data-k-start]').forEach((k) =>
    k.addEventListener('click', () => toonStart('Welke les wil je doen?')));
  document.querySelectorAll('.teller-knop').forEach((k) =>
    k.addEventListener('click', () => telBij(k.dataset.teller, Number(k.dataset.stap))));
  $('#teller-wis').addEventListener('click', () => {
    const t = teller();
    t.toer = 0;
    t.steek = 0;
    bewaar(OPSLAG, voortgang);
    tekenTeller();
  });

  $('#k-reset').addEventListener('click', () => {
    if (!confirm('Weet je het zeker? Alle vinkjes en tellers van Knutselen verdwijnen dan.')) return;
    voortgang = { klaar: {}, tellers: {} };
    bewaar(OPSLAG, voortgang);
    toonStart();
  });

  window.Knutselen = { toonStart };
})();

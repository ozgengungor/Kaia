/* ==========================================================================
 * Profiel: wie oefent er op dit apparaat?
 *
 * Een ouder krijgt een koppelcode (op de ouderpagina). Die vul je één keer in
 * op de tablet van het kind; daarna kiest het kind zijn naam, net als een
 * profiel bij Netflix. Elk antwoord gaat dan met het kind mee naar de server,
 * zodat de ouder alleen de eigen kinderen ziet.
 *
 * Elk kind heeft op dit apparaat ook zijn eigen voortgang: de opslagsleutels
 * krijgen "@kind" erachter (zie sleutel()). Het eerste kind dat op een
 * apparaat gekozen wordt, krijgt de voortgang die er al stond.
 *
 * Dit bestand laadt vóór app.js, want app.js leest bij het starten meteen de
 * voortgang in. Wisselen van kind herlaadt daarom de pagina.
 * ========================================================================== */

(() => {
  'use strict';

  const OPSLAG = 'lezen-met-kaia:profiel:v1';
  const EIGEN = /^lezen-met-kaia:(profiel|logboek):/;   // horen bij het apparaat, niet bij een kind

  function lees() {
    try { return JSON.parse(localStorage.getItem(OPSLAG)) || {}; } catch (e) { return {}; }
  }
  function schrijf(p) {
    try { localStorage.setItem(OPSLAG, JSON.stringify(p)); } catch (e) { /* geblokkeerd */ }
  }

  let profiel = lees();   // { code, gezin, kinderen: [{ id, naam }], kind, overgeslagen, overgenomen }

  const huidigKind = () => (profiel.kinderen || []).find((k) => k.id === profiel.kind) || null;

  function sleutel(k) {
    const kind = huidigKind();
    return kind && k.startsWith('lezen-met-kaia:') && !EIGEN.test(k) ? `${k}@${kind.id}` : k;
  }

  // Het eerste kind op dit apparaat neemt de voortgang over die er al stond.
  function neemVoortgangOver(kindId) {
    if (profiel.overgenomen) return;
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (!k || !k.startsWith('lezen-met-kaia:') || EIGEN.test(k) || k.includes('@')) continue;
        if (localStorage.getItem(`${k}@${kindId}`) === null) localStorage.setItem(`${k}@${kindId}`, localStorage.getItem(k));
      }
    } catch (e) { /* geen opslag */ }
    profiel.overgenomen = true;
  }

  function kiesKind(id) {
    const wasAl = profiel.kind === id;
    neemVoortgangOver(id);
    profiel.kind = id;
    schrijf(profiel);
    if (wasAl) sluit(); else location.reload();
  }

  async function haalGezin(code) {
    const r = await fetch('/api/koppel', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code })
    });
    const data = await r.json().catch(() => ({}));
    if (!r.ok) { const fout = new Error(data.fout || 'Dat lukte niet.'); fout.status = r.status; throw fout; }
    return data;
  }

  /* ---------- Het venster ---------- */

  let laag = null;
  const esc = (t) => String(t ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function sluit() {
    if (laag) laag.hidden = true;
    tekenKnop();
  }

  function open() {
    if (!laag) {
      laag = document.createElement('div');
      laag.className = 'profiel-laag';
      laag.setAttribute('role', 'dialog');
      laag.setAttribute('aria-modal', 'true');
      laag.setAttribute('aria-labelledby', 'profiel-kop');
      document.body.appendChild(laag);
      laag.addEventListener('click', (e) => { if (e.target === laag && (profiel.kind || profiel.overgeslagen)) sluit(); });
    }
    laag.hidden = false;
    teken();
    // De kinderenlijst verversen: misschien is er een kind bijgekomen, of is de code vervangen.
    if (profiel.code) {
      haalGezin(profiel.code).then((data) => {
        profiel.gezin = data.gezin;
        profiel.kinderen = data.kinderen;
        schrijf(profiel);
        if (!laag.hidden) teken();
      }).catch((e) => {
        if (e.status === 404) { ontkoppel(); teken('Deze koppelcode werkt niet meer. Vraag je ouder om de nieuwe.'); }
      });
    }
  }

  function ontkoppel() {
    profiel = { overgenomen: profiel.overgenomen };
    schrijf(profiel);
  }

  function teken(melding) {
    if (!profiel.code) {
      laag.innerHTML = `
        <div class="profiel-kaart">
          <h2 id="profiel-kop">Wie oefent er?</h2>
          <p>Vul de koppelcode in die je van je ouder hebt gekregen. Dan kan je ouder zien hoe het oefenen gaat.</p>
          <form class="profiel-form">
            <input id="profiel-code" type="text" inputmode="text" autocomplete="off" autocapitalize="characters"
                   spellcheck="false" placeholder="ABCD-1234" aria-label="Koppelcode" maxlength="12">
            <button type="submit" class="grote-knop">Koppelen</button>
          </form>
          <p class="profiel-melding" role="alert">${esc(melding || '')}</p>
          <button type="button" class="tekstknop" data-profiel="overslaan">Zonder koppelen oefenen</button>
        </div>`;
      const veld = laag.querySelector('#profiel-code');
      laag.querySelector('form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const code = veld.value.trim();
        if (!code) return;
        try {
          const data = await haalGezin(code);
          profiel = { ...profiel, code, gezin: data.gezin, kinderen: data.kinderen, overgeslagen: false };
          schrijf(profiel);
          if (data.kinderen.length === 1) kiesKind(data.kinderen[0].id);
          else teken();
        } catch (fout) {
          teken(fout.message);
        }
      });
      laag.querySelector('[data-profiel="overslaan"]').addEventListener('click', () => {
        profiel.overgeslagen = true;
        schrijf(profiel);
        sluit();
      });
      setTimeout(() => veld.focus(), 50);
      return;
    }

    const kinderen = profiel.kinderen || [];
    laag.innerHTML = `
      <div class="profiel-kaart">
        <h2 id="profiel-kop">Wie oefent er?</h2>
        <p>Gezin ${esc(profiel.gezin)}</p>
        <div class="profiel-kinderen">
          ${kinderen.map((k) => `<button type="button" class="profiel-kind ${k.id === profiel.kind ? 'actief' : ''}" data-kind="${esc(k.id)}">
            <span class="profiel-letter">${esc(k.naam.slice(0, 1).toUpperCase())}</span><span>${esc(k.naam)}</span></button>`).join('')}
        </div>
        ${kinderen.length ? '' : '<p class="profiel-melding">Er staan nog geen kinderen bij dit gezin. Vraag je ouder om ze toe te voegen.</p>'}
        <p class="profiel-melding" role="alert">${esc(melding || '')}</p>
        <button type="button" class="tekstknop" data-profiel="ontkoppel">Andere koppelcode invullen</button>
      </div>`;
    laag.querySelectorAll('[data-kind]').forEach((b) => b.addEventListener('click', () => kiesKind(b.dataset.kind)));
    laag.querySelector('[data-profiel="ontkoppel"]').addEventListener('click', () => { ontkoppel(); teken(); });
  }

  /* ---------- Knop in de balk ---------- */

  function tekenKnop() {
    const knop = document.getElementById('knop-profiel');
    if (!knop) return;
    const kind = huidigKind();
    knop.innerHTML = kind
      ? `<span class="profiel-letter klein">${esc(kind.naam.slice(0, 1).toUpperCase())}</span><span class="profiel-naam">${esc(kind.naam)}</span>`
      : '👤';
    knop.title = kind ? `${kind.naam} oefent. Klik om te wisselen.` : 'Wie oefent er?';
  }

  document.addEventListener('DOMContentLoaded', () => {
    const knoppen = document.querySelector('.balk-knoppen');
    if (knoppen) {
      const knop = document.createElement('button');
      knop.type = 'button';
      knop.id = 'knop-profiel';
      knop.className = 'icoonknop profielknop';
      knop.setAttribute('aria-label', 'Wie oefent er?');
      knop.addEventListener('click', open);
      knoppen.prepend(knop);
      tekenKnop();
    }
    // Eerste keer, of gekoppeld maar nog geen kind gekozen: meteen vragen.
    if ((!profiel.code && !profiel.overgeslagen) || (profiel.code && !huidigKind())) open();
  });

  window.Profiel = {
    sleutel,
    kind: () => (huidigKind() ? huidigKind().id : null),
    code: () => profiel.code || null
  };
})();

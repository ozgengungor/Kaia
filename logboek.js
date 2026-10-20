/* ==========================================================================
 * Logboek: elk antwoord gaat naar de server, zodat een ouder op een ander
 * apparaat kan zien wat er geoefend is (zie ouders.html).
 *
 * Antwoorden komen eerst in een wachtrij in de browser en worden daarna in
 * kleine stapjes verstuurd. Is er even geen internet, dan blijven ze in de
 * wachtrij staan tot het weer lukt; er gaat dus niets verloren.
 * ========================================================================== */

(() => {
  'use strict';

  const WACHTRIJ = 'lezen-met-kaia:logboek:wachtrij:v1';
  const APPARAAT = 'lezen-met-kaia:logboek:apparaat:v1';
  const MAX_WACHTRIJ = 2000;      // daarboven vallen de oudste weg
  const PER_KEER = 200;

  function lees(sleutel, standaard) {
    try { return JSON.parse(localStorage.getItem(sleutel)) ?? standaard; } catch (e) { return standaard; }
  }
  function schrijf(sleutel, waarde) {
    try { localStorage.setItem(sleutel, JSON.stringify(waarde)); } catch (e) { /* vol of geblokkeerd */ }
  }
  function nieuwId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
  }

  let apparaat = lees(APPARAAT, null);
  if (!apparaat) { apparaat = nieuwId(); schrijf(APPARAAT, apparaat); }

  let wachtrij = lees(WACHTRIJ, []);
  let bezig = false;
  let timer = null;

  function voegToe(gebeurtenis) {
    wachtrij.push({ id: nieuwId(), t: new Date().toISOString(), apparaat, ...gebeurtenis });
    if (wachtrij.length > MAX_WACHTRIJ) wachtrij = wachtrij.slice(-MAX_WACHTRIJ);
    schrijf(WACHTRIJ, wachtrij);
    clearTimeout(timer);
    timer = setTimeout(verstuur, 1500);
  }

  async function verstuur(bijVertrek) {
    if (bezig || !wachtrij.length || location.protocol === 'file:') return;
    bezig = true;
    const stuk = wachtrij.slice(0, PER_KEER);
    try {
      const antwoord = await fetch('/api/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(stuk),
        keepalive: Boolean(bijVertrek)
      });
      if (antwoord.ok) {
        const weg = new Set(stuk.map((g) => g.id));
        wachtrij = wachtrij.filter((g) => !weg.has(g.id));
        schrijf(WACHTRIJ, wachtrij);
      }
    } catch (e) { /* geen verbinding: later opnieuw */ }
    bezig = false;
    if (wachtrij.length && !bijVertrek) timer = setTimeout(verstuur, 1000);
  }

  window.addEventListener('online', () => verstuur());
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') verstuur(true);
  });
  setInterval(() => verstuur(), 60000);
  setTimeout(() => verstuur(), 3000);

  window.Logboek = {
    // Eén oefenbeurt (een tekst, een ronde, een onderdeel van een dag).
    nieuweSessie: nieuwId,

    // { wie, onderdeel, titel, sessie, nr, vraag, antwoord, juist, punten (0–1), dag? }
    antwoord(a) { voegToe({ soort: 'antwoord', ...a }); },

    // { wie, onderdeel, titel, sessie, score, totaal, resultaat?, dag? }
    klaar(k) { voegToe({ soort: 'klaar', ...k }); }
  };
})();

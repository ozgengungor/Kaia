/* ==========================================================================
 * Niveaus: bij welk referentieniveau (1F, 2F of 1S) hoort een vraag van Mochi?
 *
 * De niveaus zelf staan in mochi-niveaus.js, per vraag op dezelfde plek als
 * in mochi-lezen.js, mochi-spelling.js en rekensommen.js. Dit bestand zoekt
 * het label op bij (onderdeel, dag, vraagnummer). De app stuurt het niveau
 * mee met elk antwoord; de ouderpagina gebruikt dezelfde opzoeking voor
 * antwoorden van vóórdat de niveaus erbij kwamen.
 *
 * Label: { domein, sub, niveau, laag?, descriptor, pagina }
 *   taal:    domein 'lezen' | 'taalverzorging', niveau '1F' | '2F'
 *   rekenen: domein 'getallen' | 'verhoudingen' | 'meten_meetkunde' | 'verbanden',
 *            niveau '1F' | '1S', laag 'paraat' | 'functioneel' | 'weten_waarom'
 * ========================================================================== */

const Niveaus = (() => {
  const data = () => (typeof MOCHI_NIVEAUS !== 'undefined' ? MOCHI_NIVEAUS : null);

  // Op 25 oktober (deploy van 21:18) gingen de rekensommen van 8 naar 16 per
  // dag: per domein eerst een gewone, dan een IEP-som. Daarvoor was som nr
  // gewoon domein nr.
  const REKENEN_16_VANAF = Date.parse('2026-10-25T20:18:00Z');

  function rekenen(n, dag, nr, t) {
    const domeinen = Object.keys(n.rekenen);
    const zestien = nr >= domeinen.length || !t || Date.parse(t) >= REKENEN_16_VANAF;
    const i = zestien ? Math.floor(nr / 2) : nr;
    const lijst = zestien && nr % 2 === 1 ? 'iep' : 'makers';
    const d = n.rekenen[domeinen[i]];
    if (!d) return null;
    return d[lijst][(dag + i) % d[lijst].length] || null;
  }

  // De korte teksten worden in de app achter elkaar gezet: tekst 1 vraag 1, 2, tekst 2 vraag 1, 2.
  function kort(n, dag, nr) {
    let rest = nr;
    for (const vragen of n.kort[dag] || []) {
      if (rest < vragen.length) return vragen[rest];
      rest -= vragen.length;
    }
    return null;
  }

  function van(onderdeel, dag, nr, t) {
    const n = data();
    if (!n || dag === undefined || dag === null || nr === undefined || nr === null) return null;
    if (onderdeel === 'rekenen') return rekenen(n, dag, nr, t);
    if (onderdeel === 'kort') return kort(n, dag, nr);
    const lijst = n[onderdeel];
    return (lijst && lijst[dag] && lijst[dag][nr]) || null;
  }

  // Het streefniveau eind groep 8 (2F bij taal, 1S bij rekenen) of hoger: een
  // paar vragen zitten volgens het referentiekader al op 3F of 2F rekenen.
  const isHoog = (niveau) => Boolean(niveau) && niveau !== '1F';

  return { van, isHoog };
})();

if (typeof module !== 'undefined') { module.exports = { Niveaus }; }

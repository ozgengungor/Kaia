/*
 * Het konijn — de coach van groep 5.
 *
 * Zelfde idee als capybara.js: één SVG-tekening waarvan alleen de ogen, de
 * mond en een "extraatje" per stemming veranderen. Het bewegen (oren, neus,
 * knipperen, huppelen) zit in styles.css, op de klassen konijn-oor-l,
 * konijn-oor-r, konijn-neus, konijn-ogen en konijn-poot.
 *
 * Gebruik:  Konijn.render(element, 'blij')
 * Stemmingen: 'blij' | 'denk' | 'juich' | 'troost' | 'zwaai' | 'kijk' | 'luister'
 */

const Konijn = (() => {
  const KLEUR = {
    vacht: '#dccab5',
    vachtDonker: '#c9b39b',
    buik: '#f8f1e7',
    oorBinnen: '#f3a9b9',
    neus: '#e8798f',
    wang: '#f08fa3',
    lijn: '#4a3527'
  };

  const oog = (cx, cy, r = 7) => `
    <ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${r + 1.5}" fill="${KLEUR.lijn}"/>
    <circle cx="${cx + 2.5}" cy="${cy - 3}" r="${r / 3}" fill="#fff"/>`;
  const boogOog = (cx, cy, omhoog) =>
    `<path d="M${cx - 8} ${cy} q8 ${omhoog ? -12 : 9} 16 0" stroke="${KLEUR.lijn}" stroke-width="4.5" fill="none" stroke-linecap="round"/>`;
  const lijn = (d) => `<path d="${d}" stroke="${KLEUR.lijn}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;

  // Twee voortanden horen bij een konijn; ze hangen onder de mond.
  const TANDEN = `<rect x="94" y="134" width="12" height="9" rx="2.5" fill="#fff" stroke="${KLEUR.lijn}" stroke-width="1.5"/>
    <path d="M100 134 v9" stroke="${KLEUR.lijn}" stroke-width="1.5"/>`;

  // Alles binnen viewBox 0 0 200 200. Ogen op y≈102, mond op y≈134.
  const GEZICHTEN = {
    blij: {
      ogen: `<g class="konijn-ogen">${oog(80, 102)}${oog(120, 102)}</g>`,
      mond: `${lijn('M88 132 q12 10 24 0')}${TANDEN}`,
      extra: ''
    },
    denk: {
      ogen: `<g class="konijn-ogen">${oog(83, 101)}${oog(123, 101)}</g>
        ${lijn('M70 86 q10 -7 20 -2')}${lijn('M112 84 q10 -3 20 2')}`,
      mond: lijn('M92 135 q8 -4 16 1'),
      extra: `
        <circle cx="166" cy="46" r="4.5" fill="#fff" opacity=".95"/>
        <circle cx="180" cy="30" r="10" fill="#fff" opacity=".95"/>
        <text x="180" y="35" font-size="13" font-family="sans-serif" font-weight="700" text-anchor="middle" fill="${KLEUR.lijn}">?</text>`
    },
    juich: {
      ogen: `${boogOog(80, 104, true)}${boogOog(120, 104, true)}`,
      mond: `<path d="M86 130 q14 20 28 0 z" fill="${KLEUR.lijn}"/>
        <path d="M94 140 q6 6 12 0" fill="#e88ba0"/>
        <rect x="94" y="130" width="12" height="8" rx="2" fill="#fff"/>`,
      extra: `
        <g stroke="#f0932b" stroke-width="4" stroke-linecap="round">
          <path d="M30 70 l-12 -8"/><path d="M170 70 l12 -8"/>
          <path d="M26 112 l-14 0"/><path d="M174 112 l14 0"/>
        </g>`
    },
    troost: {
      ogen: `<g class="konijn-ogen">${oog(80, 104)}${oog(120, 104)}</g>
        ${lijn('M68 90 q11 3 21 -3')}${lijn('M111 87 q10 -6 21 3')}`,
      mond: lijn('M90 137 q10 -7 20 0'),
      extra: ''
    },
    zwaai: {
      ogen: `<g class="konijn-ogen">${oog(80, 102)}</g>${boogOog(120, 104, true)}`,
      mond: `${lijn('M88 131 q12 12 24 0')}${TANDEN}`,
      extra: `
        <g transform="translate(160 138)">
          <g class="konijn-poot">
            <ellipse cx="0" cy="0" rx="11" ry="17" fill="${KLEUR.vacht}"/>
            <ellipse cx="0" cy="-8" rx="7" ry="6" fill="${KLEUR.buik}"/>
          </g>
        </g>`
    },
    kijk: {
      ogen: `<g class="konijn-ogen">${oog(80, 101, 9.5)}${oog(120, 101, 9.5)}</g>`,
      mond: `<ellipse cx="100" cy="137" rx="5" ry="5.5" fill="${KLEUR.lijn}"/>`,
      extra: ''
    },
    luister: {
      ogen: `${boogOog(80, 101, false)}${boogOog(120, 101, false)}`,
      mond: lijn('M90 133 q10 7 20 0'),
      extra: `
        <g fill="${KLEUR.lijn}" font-family="sans-serif" font-weight="700">
          <text x="164" y="52" font-size="22">♪</text>
          <text x="22" y="66" font-size="16">♫</text>
        </g>`
    }
  };

  function oor(kant) {
    const cx = kant === 'l' ? 76 : 124;
    const hoek = kant === 'l' ? -9 : 9;
    return `
      <g class="konijn-oor-${kant}">
        <ellipse cx="${cx}" cy="40" rx="15" ry="40" transform="rotate(${hoek} ${cx} 40)" fill="${KLEUR.vacht}"/>
        <ellipse cx="${cx}" cy="44" rx="7.5" ry="28" transform="rotate(${hoek} ${cx} 44)" fill="${KLEUR.oorBinnen}"/>
      </g>`;
  }

  function snor(x, richting) {
    const eind = x + 27 * richting;
    return `<g stroke="${KLEUR.lijn}" stroke-width="1.8" stroke-linecap="round" opacity=".55">
        <path d="M${x} 124 L${eind} 118"/><path d="M${x} 128 L${eind} 129"/><path d="M${x} 132 L${eind} 140"/>
      </g>`;
  }

  function svg(stemming, naam) {
    const g = GEZICHTEN[stemming] || GEZICHTEN.blij;
    return `
    <svg class="konijn-svg" viewBox="0 0 200 200" role="img" aria-label="${naam} het konijn">
      <ellipse cx="100" cy="192" rx="56" ry="7" fill="#000" opacity=".08"/>

      ${oor('l')}${oor('r')}

      <!-- staartje, lijf en voeten -->
      <circle cx="150" cy="170" r="11" fill="#fff"/>
      <ellipse cx="100" cy="162" rx="46" ry="31" fill="${KLEUR.vachtDonker}"/>
      <ellipse cx="100" cy="168" rx="25" ry="19" fill="${KLEUR.buik}"/>
      <ellipse cx="74" cy="187" rx="17" ry="8" fill="${KLEUR.vacht}"/>
      <ellipse cx="126" cy="187" rx="17" ry="8" fill="${KLEUR.vacht}"/>

      <!-- kop met wangen en snuit -->
      <ellipse cx="100" cy="108" rx="52" ry="45" fill="${KLEUR.vacht}"/>
      <ellipse cx="60" cy="124" rx="10" ry="6.5" fill="${KLEUR.wang}" opacity=".5"/>
      <ellipse cx="140" cy="124" rx="10" ry="6.5" fill="${KLEUR.wang}" opacity=".5"/>
      <ellipse cx="100" cy="128" rx="21" ry="15" fill="${KLEUR.buik}"/>
      ${snor(80, -1)}${snor(120, 1)}
      <g class="konijn-neus">
        <path d="M93 117 h14 q2 0 .8 1.8 l-6.2 7 q-1.6 1.6 -3.2 0 l-6.2 -7 q-1.2 -1.8 .8 -1.8 z" fill="${KLEUR.neus}"/>
      </g>
      <path d="M100 126 v6" stroke="${KLEUR.lijn}" stroke-width="3" stroke-linecap="round"/>

      ${g.ogen}
      ${g.mond}
      ${g.extra}
    </svg>`;
  }

  function render(el, stemming, naam) {
    if (!el) return;
    el.dataset.stemming = stemming;
    el.innerHTML = svg(stemming, naam || 'Pluis');
  }

  return { render };
})();

if (typeof module !== 'undefined') { module.exports = { Konijn }; }

/*
 * Het schaap — de coach van Knutselen.
 *
 * Zelfde idee als capybara.js en konijn.js: één SVG-tekening waarvan alleen
 * de ogen, de mond en een "extraatje" per stemming veranderen. Het bewegen
 * (deinen, knipperen, zwaaien) zit in styles.css, op de klassen schaap-svg,
 * schaap-ogen en schaap-poot.
 *
 * Gebruik:  Schaap.render(element, 'blij')
 * Stemmingen: 'blij' | 'denk' | 'juich' | 'troost' | 'zwaai'
 */

const Schaap = (() => {
  const KLEUR = {
    wol: '#fffaf2',
    wolRand: '#e6dccd',
    kop: '#6e6573',
    kopDonker: '#58505d',
    oorBinnen: '#e9a3b6',
    wang: '#f08fa3',
    lijn: '#2e2733',
    licht: '#fbe3ea',
    bol: '#b38ad6',
    bolDonker: '#9068b8'
  };

  // Ogen op een donkere kop: wit met een donkere pupil.
  const oog = (cx, cy, r = 8.5) => `
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff"/>
    <circle cx="${cx + 1}" cy="${cy + 1}" r="${r * 0.55}" fill="${KLEUR.lijn}"/>
    <circle cx="${cx + 2.6}" cy="${cy - 1.6}" r="${r * 0.2}" fill="#fff"/>`;
  const boogOog = (cx, cy, omhoog) =>
    `<path d="M${cx - 8} ${cy} q8 ${omhoog ? -11 : 9} 16 0" stroke="#fff" stroke-width="4.5" fill="none" stroke-linecap="round"/>`;
  const lijn = (d) => `<path d="${d}" stroke="${KLEUR.licht}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;

  // Een bolletje wol met een haaknaald erin, voor naast het schaap.
  const BOL = `
    <g transform="translate(34 166)">
      <circle r="17" fill="${KLEUR.bol}"/>
      <g stroke="${KLEUR.bolDonker}" stroke-width="2.2" fill="none" stroke-linecap="round">
        <path d="M-14 -6 q14 -8 26 4"/><path d="M-16 3 q16 -9 31 3"/><path d="M-11 11 q12 -6 24 0"/>
      </g>
      <path d="M6 -14 L26 -40" stroke="#f0932b" stroke-width="4" stroke-linecap="round"/>
      <path d="M26 -40 q4 -3 1 -6" stroke="#f0932b" stroke-width="3" fill="none" stroke-linecap="round"/>
    </g>`;

  // Alles binnen viewBox 0 0 200 200. Ogen op y≈96, mond op y≈122.
  const GEZICHTEN = {
    blij: {
      ogen: `<g class="schaap-ogen">${oog(86, 96)}${oog(114, 96)}</g>`,
      mond: lijn('M91 120 q9 8 18 0'),
      extra: BOL
    },
    denk: {
      ogen: `<g class="schaap-ogen">${oog(88, 95)}${oog(116, 95)}</g>
        ${lijn('M76 82 q9 -6 18 -1')}${lijn('M108 81 q9 -3 18 2')}`,
      mond: lijn('M93 123 q7 -3 14 1'),
      extra: `
        <circle cx="166" cy="50" r="4.5" fill="#fff" opacity=".95"/>
        <circle cx="180" cy="33" r="10" fill="#fff" opacity=".95"/>
        <text x="180" y="38" font-size="13" font-family="sans-serif" font-weight="700" text-anchor="middle" fill="${KLEUR.lijn}">?</text>`
    },
    juich: {
      ogen: `${boogOog(86, 98, true)}${boogOog(114, 98, true)}`,
      mond: `<path d="M89 117 q11 17 22 0 z" fill="${KLEUR.lijn}"/>
        <path d="M95 125 q5 5 10 0" fill="#e88ba0"/>`,
      extra: `
        ${BOL}
        <g stroke="#f0932b" stroke-width="4" stroke-linecap="round">
          <path d="M34 72 l-12 -8"/><path d="M166 72 l12 -8"/>
          <path d="M28 112 l-14 0"/><path d="M172 112 l14 0"/>
        </g>`
    },
    troost: {
      ogen: `<g class="schaap-ogen">${oog(86, 98)}${oog(114, 98)}</g>
        ${lijn('M74 86 q10 3 19 -3')}${lijn('M107 83 q9 -6 19 3')}`,
      mond: lijn('M92 125 q8 -6 16 0'),
      extra: ''
    },
    zwaai: {
      ogen: `<g class="schaap-ogen">${oog(86, 96)}</g>${boogOog(114, 98, true)}`,
      mond: lijn('M90 119 q10 10 20 0'),
      extra: `
        <g transform="translate(162 132)">
          <g class="schaap-poot">
            <rect x="-6" y="-26" width="12" height="30" rx="6" fill="${KLEUR.kop}"/>
            <rect x="-6" y="-26" width="12" height="7" rx="3" fill="${KLEUR.kopDonker}"/>
          </g>
        </g>`
    }
  };

  // De wolwolk van het lijf: een paar rondjes die samen één wolk zijn.
  const WOL = [
    [58, 132, 24], [76, 112, 24], [100, 106, 26], [124, 112, 24], [142, 132, 24],
    [126, 154, 24], [100, 160, 26], [74, 154, 24]
  ];

  function oor(kant) {
    const cx = kant === 'l' ? 64 : 136;
    const hoek = kant === 'l' ? 24 : -24;
    return `
      <ellipse cx="${cx}" cy="86" rx="17" ry="8" transform="rotate(${hoek} ${cx} 86)" fill="${KLEUR.kop}"/>
      <ellipse cx="${cx}" cy="86" rx="10" ry="4" transform="rotate(${hoek} ${cx} 86)" fill="${KLEUR.oorBinnen}"/>`;
  }

  function svg(stemming, naam) {
    const g = GEZICHTEN[stemming] || GEZICHTEN.blij;
    const wol = WOL.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${KLEUR.wol}" stroke="${KLEUR.wolRand}" stroke-width="2.5"/>`).join('');
    return `
    <svg class="schaap-svg" viewBox="0 0 200 200" role="img" aria-label="${naam} het schaap">
      <ellipse cx="100" cy="192" rx="56" ry="7" fill="#000" opacity=".08"/>

      <!-- pootjes -->
      <g fill="${KLEUR.kop}">
        <rect x="68" y="166" width="11" height="24" rx="5"/>
        <rect x="88" y="170" width="11" height="22" rx="5"/>
        <rect x="104" y="170" width="11" height="22" rx="5"/>
        <rect x="122" y="166" width="11" height="24" rx="5"/>
      </g>

      <!-- wollig lijf -->
      ${wol}
      <circle cx="100" cy="134" r="40" fill="${KLEUR.wol}"/>

      <!-- kop met oren en een plukje wol -->
      ${oor('l')}${oor('r')}
      <ellipse cx="100" cy="104" rx="30" ry="34" fill="${KLEUR.kop}"/>
      <ellipse cx="100" cy="120" rx="17" ry="12" fill="${KLEUR.kopDonker}"/>
      <ellipse cx="78" cy="113" rx="7" ry="4.5" fill="${KLEUR.wang}" opacity=".55"/>
      <ellipse cx="122" cy="113" rx="7" ry="4.5" fill="${KLEUR.wang}" opacity=".55"/>
      <path d="M95 111 h10 l-5 5 z" fill="${KLEUR.oorBinnen}"/>
      <g fill="${KLEUR.wol}" stroke="${KLEUR.wolRand}" stroke-width="2">
        <circle cx="84" cy="72" r="12"/><circle cx="116" cy="72" r="12"/><circle cx="100" cy="66" r="14"/>
      </g>

      ${g.ogen}
      ${g.mond}
      ${g.extra}
    </svg>`;
  }

  function render(el, stemming, naam) {
    if (!el) return;
    el.dataset.stemming = stemming;
    el.innerHTML = svg(stemming, naam || 'Wolkje');
  }

  return { render };
})();

if (typeof module !== 'undefined') { module.exports = { Schaap }; }

/*
 * De panda — Mochi, de coach van de toetstraining.
 *
 * Zelfde idee als capybara.js, konijn.js en schaap.js: één SVG-tekening
 * waarvan alleen de ogen, de mond en een "extraatje" per stemming veranderen.
 * Het bewegen (deinen, knipperen, zwaaien) zit in styles.css, op de klassen
 * panda-svg, panda-ogen en panda-poot.
 *
 * Gebruik:  Panda.render(element, 'blij')
 * Stemmingen: 'blij' | 'denk' | 'juich' | 'troost' | 'zwaai'
 */

const Panda = (() => {
  const KLEUR = {
    wit: '#fdfcf8',
    witRand: '#e4dfd3',
    zwart: '#2c2b33',
    wang: '#f4a3b4',
    lijn: '#2c2b33',
    bamboe: '#6cbf5a',
    bamboeDonker: '#4a9a3c',
    blad: '#8fd47a'
  };

  // De ogen zitten in de zwarte vlekken: wit met een donkere pupil.
  const oog = (cx, cy, r = 6.5) => `
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff"/>
    <circle cx="${cx + 0.8}" cy="${cy + 0.8}" r="${r * 0.58}" fill="${KLEUR.lijn}"/>
    <circle cx="${cx + 2.2}" cy="${cy - 1.4}" r="${r * 0.22}" fill="#fff"/>`;
  const boogOog = (cx, cy) =>
    `<path d="M${cx - 6.5} ${cy + 1} q6.5 -9 13 0" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>`;
  const lijn = (d) => `<path d="${d}" stroke="${KLEUR.lijn}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;

  // Een stengel bamboe met een blaadje, voor naast de panda.
  const BAMBOE = `
    <g transform="translate(30 120) rotate(-8)">
      <rect x="-5" y="-4" width="10" height="72" rx="4" fill="${KLEUR.bamboe}"/>
      <g stroke="${KLEUR.bamboeDonker}" stroke-width="2.6" stroke-linecap="round">
        <path d="M-5 18 h10"/><path d="M-5 42 h10"/>
      </g>
      <path d="M4 16 q16 -14 24 -6 q-12 2 -24 6 z" fill="${KLEUR.blad}"/>
      <path d="M-4 40 q-16 -12 -22 -3 q11 0 22 3 z" fill="${KLEUR.blad}"/>
    </g>`;

  // Alles binnen viewBox 0 0 200 200. Ogen op y≈90, mond op y≈114.
  const GEZICHTEN = {
    blij: {
      ogen: `<g class="panda-ogen">${oog(82, 90)}${oog(118, 90)}</g>`,
      mond: lijn('M93 113 q7 7 14 0'),
      extra: BAMBOE
    },
    denk: {
      ogen: `<g class="panda-ogen">${oog(84, 89)}${oog(120, 89)}</g>`,
      mond: lijn('M94 115 q7 -3 13 1'),
      extra: `
        <circle cx="164" cy="52" r="4.5" fill="#fff" opacity=".95"/>
        <circle cx="178" cy="35" r="10" fill="#fff" opacity=".95"/>
        <text x="178" y="40" font-size="13" font-family="sans-serif" font-weight="700" text-anchor="middle" fill="${KLEUR.lijn}">?</text>`
    },
    juich: {
      ogen: `${boogOog(82, 91)}${boogOog(118, 91)}`,
      mond: `<path d="M90 110 q10 16 20 0 z" fill="${KLEUR.lijn}"/>
        <path d="M95 117 q5 5 10 0" fill="#e88ba0"/>`,
      extra: `
        ${BAMBOE}
        <g stroke="#f0932b" stroke-width="4" stroke-linecap="round">
          <path d="M44 56 l-12 -8"/><path d="M156 56 l12 -8"/>
          <path d="M40 92 l-14 0"/><path d="M160 92 l14 0"/>
        </g>`
    },
    troost: {
      ogen: `<g class="panda-ogen">${oog(82, 92)}${oog(118, 92)}</g>`,
      mond: lijn('M93 117 q7 -5 14 0'),
      extra: ''
    },
    zwaai: {
      ogen: `<g class="panda-ogen">${oog(82, 90)}</g>${boogOog(118, 91)}`,
      mond: lijn('M92 112 q8 9 16 0'),
      extra: `
        <g transform="translate(160 128)">
          <g class="panda-poot">
            <rect x="-9" y="-34" width="18" height="40" rx="9" fill="${KLEUR.zwart}"/>
          </g>
        </g>`
    }
  };

  function svg(stemming, naam) {
    const g = GEZICHTEN[stemming] || GEZICHTEN.blij;
    const zwaait = stemming === 'zwaai';
    return `
    <svg class="panda-svg" viewBox="0 0 200 200" role="img" aria-label="${naam} de panda">
      <ellipse cx="100" cy="192" rx="56" ry="7" fill="#000" opacity=".08"/>

      <!-- lijf met pootjes -->
      <ellipse cx="100" cy="150" rx="48" ry="40" fill="${KLEUR.wit}" stroke="${KLEUR.witRand}" stroke-width="2.5"/>
      <path d="M58 132 q42 -22 84 0 l0 10 q-42 -18 -84 0 z" fill="${KLEUR.zwart}"/>
      <ellipse cx="72" cy="182" rx="17" ry="11" fill="${KLEUR.zwart}"/>
      <ellipse cx="128" cy="182" rx="17" ry="11" fill="${KLEUR.zwart}"/>
      <ellipse cx="60" cy="152" rx="11" ry="20" transform="rotate(18 60 152)" fill="${KLEUR.zwart}"/>
      ${zwaait ? '' : `<ellipse cx="140" cy="152" rx="11" ry="20" transform="rotate(-18 140 152)" fill="${KLEUR.zwart}"/>`}

      <!-- kop met oren -->
      <circle cx="64" cy="58" r="17" fill="${KLEUR.zwart}"/>
      <circle cx="136" cy="58" r="17" fill="${KLEUR.zwart}"/>
      <ellipse cx="100" cy="96" rx="48" ry="42" fill="${KLEUR.wit}" stroke="${KLEUR.witRand}" stroke-width="2.5"/>

      <!-- de vlekken rond de ogen -->
      <ellipse cx="81" cy="92" rx="14" ry="18" transform="rotate(28 81 92)" fill="${KLEUR.zwart}"/>
      <ellipse cx="119" cy="92" rx="14" ry="18" transform="rotate(-28 119 92)" fill="${KLEUR.zwart}"/>

      <ellipse cx="68" cy="112" rx="7" ry="4.5" fill="${KLEUR.wang}" opacity=".6"/>
      <ellipse cx="132" cy="112" rx="7" ry="4.5" fill="${KLEUR.wang}" opacity=".6"/>
      <ellipse cx="100" cy="104" rx="7.5" ry="5" fill="${KLEUR.zwart}"/>
      <path d="M100 109 v3" stroke="${KLEUR.lijn}" stroke-width="2.6" stroke-linecap="round"/>

      ${g.ogen}
      ${g.mond}
      ${g.extra}
    </svg>`;
  }

  function render(el, stemming, naam) {
    if (!el) return;
    el.dataset.stemming = stemming;
    el.innerHTML = svg(stemming, naam || 'Mochi');
  }

  return { render };
})();

if (typeof module !== 'undefined') { module.exports = { Panda }; }

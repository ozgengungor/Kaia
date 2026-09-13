/*
 * Kaia de capybara — de coach van de app.
 *
 * Eén SVG-tekening waarvan alleen de ogen, de mond en een "extraatje"
 * veranderen. Zo kan Kaia reageren op wat het kind doet zonder dat we voor
 * elke stemming een apart plaatje nodig hebben.
 *
 * Gebruik:  Capybara.render(element, 'blij')
 * Stemmingen: 'blij' | 'denk' | 'juich' | 'troost' | 'lezen' | 'zwaai'
 */

const Capybara = (() => {
  const KLEUR = {
    vacht: '#b58255',
    vachtDonker: '#9c6a41',
    snuit: '#c8985f',
    neus: '#5a3a22',
    oor: '#7a5133',
    lijn: '#432916',
    wang: '#dd8a76'
  };

  // Alles binnen viewBox 0 0 200 200. Ogen op y≈78, mond onder de neus op y≈128.
  const GEZICHTEN = {
    blij: {
      ogen: `
        <ellipse cx="74" cy="78" rx="6.5" ry="7.5" fill="${KLEUR.lijn}"/>
        <ellipse cx="126" cy="78" rx="6.5" ry="7.5" fill="${KLEUR.lijn}"/>
        <circle cx="76.5" cy="75.5" r="2.2" fill="#fff"/>
        <circle cx="128.5" cy="75.5" r="2.2" fill="#fff"/>`,
      mond: `<path d="M90 126 q10 9 20 0" stroke="${KLEUR.lijn}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`,
      extra: ''
    },
    denk: {
      ogen: `
        <ellipse cx="78" cy="78" rx="6.5" ry="7.5" fill="${KLEUR.lijn}"/>
        <ellipse cx="130" cy="78" rx="6.5" ry="7.5" fill="${KLEUR.lijn}"/>
        <circle cx="80.5" cy="75.5" r="2.2" fill="#fff"/>
        <circle cx="132.5" cy="75.5" r="2.2" fill="#fff"/>
        <path d="M64 62 q10 -7 20 -2" stroke="${KLEUR.lijn}" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <path d="M116 60 q10 -3 20 2" stroke="${KLEUR.lijn}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`,
      mond: `<path d="M92 128 q9 -4 18 1" stroke="${KLEUR.lijn}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`,
      extra: `
        <circle cx="166" cy="40" r="4.5" fill="#fff" opacity=".95"/>
        <circle cx="178" cy="26" r="9" fill="#fff" opacity=".95"/>
        <text x="178" y="31" font-size="12" font-family="sans-serif" font-weight="700" text-anchor="middle" fill="${KLEUR.lijn}">?</text>`
    },
    juich: {
      ogen: `
        <path d="M66 80 q8 -12 16 0" stroke="${KLEUR.lijn}" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <path d="M118 80 q8 -12 16 0" stroke="${KLEUR.lijn}" stroke-width="4.5" fill="none" stroke-linecap="round"/>`,
      mond: `
        <path d="M87 122 q13 18 26 0 z" fill="${KLEUR.lijn}"/>
        <path d="M94 132 q6 6 12 0" fill="#e88ba0"/>`,
      extra: `
        <g stroke="#f0932b" stroke-width="4" stroke-linecap="round">
          <path d="M28 34 l-9 -11"/><path d="M172 34 l9 -11"/>
          <path d="M24 84 l-13 -4"/><path d="M176 84 l13 -4"/>
        </g>`
    },
    troost: {
      ogen: `
        <ellipse cx="74" cy="80" rx="6.5" ry="7.5" fill="${KLEUR.lijn}"/>
        <ellipse cx="126" cy="80" rx="6.5" ry="7.5" fill="${KLEUR.lijn}"/>
        <circle cx="76.5" cy="77.5" r="2.2" fill="#fff"/>
        <circle cx="128.5" cy="77.5" r="2.2" fill="#fff"/>
        <path d="M62 64 q11 3 21 -2" stroke="${KLEUR.lijn}" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <path d="M117 62 q10 -5 21 2" stroke="${KLEUR.lijn}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`,
      mond: `<path d="M90 130 q10 -8 20 0" stroke="${KLEUR.lijn}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`,
      extra: ''
    },
    lezen: {
      ogen: `
        <path d="M66 78 q8 9 16 0" stroke="${KLEUR.lijn}" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <path d="M118 78 q8 9 16 0" stroke="${KLEUR.lijn}" stroke-width="4.5" fill="none" stroke-linecap="round"/>`,
      mond: `<path d="M93 127 h14" stroke="${KLEUR.lijn}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`,
      extra: `
        <g transform="translate(100 168)">
          <path d="M-36 -8 q18 -9 36 0 q18 -9 36 0 v18 q-18 -9 -36 0 q-18 -9 -36 0 z"
                fill="#fdf6e8" stroke="${KLEUR.lijn}" stroke-width="3" stroke-linejoin="round"/>
          <path d="M0 -8 v18" stroke="${KLEUR.lijn}" stroke-width="3"/>
        </g>`
    },
    zwaai: {
      ogen: `
        <ellipse cx="74" cy="78" rx="6.5" ry="7.5" fill="${KLEUR.lijn}"/>
        <circle cx="76.5" cy="75.5" r="2.2" fill="#fff"/>
        <path d="M118 80 q8 -12 16 0" stroke="${KLEUR.lijn}" stroke-width="4.5" fill="none" stroke-linecap="round"/>`,
      mond: `<path d="M88 124 q12 12 24 0" stroke="${KLEUR.lijn}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`,
      extra: `
        <g transform="translate(162 116)">
          <g class="capy-poot">
            <ellipse cx="0" cy="0" rx="12" ry="16" fill="${KLEUR.vachtDonker}"/>
            <ellipse cx="0" cy="7" rx="8" ry="7" fill="${KLEUR.snuit}"/>
          </g>
        </g>`
    }
  };

  function svg(stemming) {
    const g = GEZICHTEN[stemming] || GEZICHTEN.blij;
    return `
    <svg class="capy-svg" viewBox="0 0 200 200" role="img" aria-label="Kaia de capybara">
      <ellipse cx="100" cy="190" rx="62" ry="8" fill="#000" opacity=".08"/>

      <!-- lijf met pootjes -->
      <ellipse cx="100" cy="158" rx="58" ry="34" fill="${KLEUR.vachtDonker}"/>
      <rect x="60" y="172" width="26" height="18" rx="9" fill="${KLEUR.vacht}"/>
      <rect x="114" y="172" width="26" height="18" rx="9" fill="${KLEUR.vacht}"/>

      <!-- oren: klein en rond, opzij van de kop. De kop wordt hierna getekend,
           dus de aanzet valt netjes achter de kop weg. -->
      <ellipse cx="31" cy="54" rx="13" ry="11" transform="rotate(-18 31 54)" fill="${KLEUR.vachtDonker}"/>
      <ellipse cx="29" cy="55" rx="6.5" ry="5" transform="rotate(-18 29 55)" fill="${KLEUR.oor}"/>
      <ellipse cx="169" cy="54" rx="13" ry="11" transform="rotate(18 169 54)" fill="${KLEUR.vachtDonker}"/>
      <ellipse cx="171" cy="55" rx="6.5" ry="5" transform="rotate(18 171 55)" fill="${KLEUR.oor}"/>

      <!-- kop: een blok met afgeronde hoeken, breder onderaan -->
      <path d="M62 34 h76 a26 26 0 0 1 26 26 v56 a34 34 0 0 1 -34 34 h-60 a34 34 0 0 1 -34 -34 v-56 a26 26 0 0 1 26 -26 z"
            fill="${KLEUR.vacht}"/>

      <!-- wangen -->
      <ellipse cx="52" cy="106" rx="10" ry="6.5" fill="${KLEUR.wang}" opacity=".45"/>
      <ellipse cx="148" cy="106" rx="10" ry="6.5" fill="${KLEUR.wang}" opacity=".45"/>

      <!-- stompe snuit met brede neus -->
      <rect x="62" y="94" width="76" height="52" rx="26" fill="${KLEUR.snuit}"/>
      <rect x="82" y="100" width="36" height="16" rx="8" fill="${KLEUR.neus}"/>
      <ellipse cx="92" cy="107" rx="3" ry="2.4" fill="#2c1a0e"/>
      <ellipse cx="108" cy="107" rx="3" ry="2.4" fill="#2c1a0e"/>
      <path d="M100 116 v6" stroke="${KLEUR.lijn}" stroke-width="3" stroke-linecap="round"/>

      ${g.ogen}
      ${g.mond}
      ${g.extra}
    </svg>`;
  }

  function render(el, stemming) {
    if (!el) return;
    el.dataset.stemming = stemming;
    el.innerHTML = svg(stemming);
  }

  return { render };
})();

if (typeof module !== 'undefined') { module.exports = { Capybara }; }

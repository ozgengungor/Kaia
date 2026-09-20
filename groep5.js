/*
 * Groep 5 — spellingspelletjes met het konijn.
 *
 * Net als de andere databestanden is dit "data-only": spellen.js kent geen
 * enkel woord bij naam. Een woordpakket toevoegen = een object aan
 * `pakketten` plakken; alle vier de spellen werken er dan meteen mee.
 *
 * Een woord schrijf je als 'tr[ei]n': het stuk tussen de haken is het lastige
 * stukje waar het pakket over gaat. Dat stukje is
 *   - het gat bij Wortelkeuze,
 *   - één blokje (met de andere opties als afleider) bij Woordbouwer,
 *   - gekleurd in het overzicht na afloop.
 *
 * Een pakket:
 *   id, titel, emoji, soort
 *   opties     de keuzes voor het gat, bv. ['ei', 'ij']. Laat je `opties` weg,
 *              dan is het een enkel/dubbel-pakket: de keuzes zijn dan de
 *              letter tussen de haken één of twee keer ('k' en 'kk').
 *   tip        uitleg van het konijn; wordt getoond (en voorgelezen) bij een fout
 *   woorden    [{ w: 'hon[d]', emoji, zin, lang? }]
 *              zin   dicteezin; genereer-audio.js neemt "Hond. <zin>" op
 *              lang  het langer gemaakte woord, voor d/t ('honden')
 */

const GROEP5 = {
  konijn: 'Pluis',

  welkom: [
    'Hoi! Ik ben {naam}. Zullen we een spelletje doen met woorden?',
    'Daar ben je! Ik heb zin in wortels. Help je mee?',
    'Kies maar een spel. Voor elk goed woord krijg ik een wortel!'
  ],

  spellen: [
    {
      id: 'klank',
      titel: 'Wortelkeuze',
      emoji: '🥕',
      soort: 'Kies de klank',
      uitleg: 'Ik zeg een woord, maar er mist een stukje. Kies de wortel met het goede stukje erop!',
      opdracht: 'Welk stukje hoort in het gat?'
    },
    {
      id: 'bouw',
      titel: 'Woordbouwer',
      emoji: '🧱',
      soort: 'Bouw het woord',
      uitleg: 'Ik zeg een woord en jij bouwt het met de blokjes. Let op: er ligt één blokje te veel!',
      opdracht: 'Tik de blokjes in de goede volgorde.'
    },
    {
      id: 'flits',
      titel: 'Flitswoord',
      emoji: '⚡',
      soort: 'Kijk en onthoud',
      uitleg: 'Je ziet het woord heel even. Daarna is het weg en typ jij het precies zo na.',
      opdracht: 'Kijk goed! Zo meteen is het woord weg.'
    },
    {
      id: 'luister',
      titel: 'Luisterwoord',
      emoji: '🎧',
      soort: 'Dictee',
      uitleg: 'Dit is een dictee. Ik zeg het woord en een zin erbij. Jij typt het woord.',
      opdracht: 'Luister goed en typ het woord.'
    }
  ],

  pakketten: [
    {
      id: 'eij',
      titel: 'ei of ij',
      emoji: '🚂',
      soort: 'Weetwoorden',
      opties: ['ei', 'ij'],
      tip: 'De korte ei en de lange ij klinken precies hetzelfde. Dit zijn weetwoorden: kijk goed en onthoud hoe het woord eruitziet.',
      woorden: [
        { w: 'tr[ei]n', emoji: '🚂', zin: 'De trein rijdt naar Utrecht.' },
        { w: 'g[ei]t', emoji: '🐐', zin: 'De geit eet gras in de wei.' },
        { w: 'kl[ei]n', emoji: '🐭', zin: 'Een muis is een klein dier.' },
        { w: 'r[ei]s', emoji: '✈️', zin: 'Wij gaan op reis naar Spanje.' },
        { w: 'pl[ei]n', emoji: '🛝', zin: 'Op het plein spelen de kinderen.' },
        { w: 'z[ei]l', emoji: '⛵', zin: 'De boot heeft een wit zeil.' },
        { w: '[ij]s', emoji: '🧊', zin: 'Op de sloot ligt dik ijs.' },
        { w: 't[ij]d', emoji: '⏰', zin: 'Het is tijd om naar bed te gaan.' },
        { w: 'pr[ij]s', emoji: '🏆', zin: 'Zij wint de eerste prijs.' },
        { w: 'v[ij]f', emoji: '🖐️', zin: 'Een hand heeft vijf vingers.' },
        { w: 'b[ij]', emoji: '🐝', zin: 'De bij zoekt een bloem.' },
        { w: 'p[ij]l', emoji: '🏹', zin: 'De pijl wijst naar links.' }
      ]
    },
    {
      id: 'auou',
      titel: 'au of ou',
      emoji: '🚗',
      soort: 'Weetwoorden',
      opties: ['au', 'ou'],
      tip: 'De au en de ou klinken hetzelfde. Ook dit zijn weetwoorden. Trucje: de meeste woorden hebben ou, dus de woorden met au kun je het best onthouden.',
      woorden: [
        { w: '[au]to', emoji: '🚗', zin: 'De auto staat voor het huis.' },
        { w: 'bl[au]w', emoji: '🔵', zin: 'De lucht is vandaag mooi blauw.' },
        { w: 'p[au]w', emoji: '🦚', zin: 'De pauw heeft prachtige veren.' },
        { w: 's[au]s', emoji: '🍝', zin: 'Ik wil graag saus op mijn pasta.' },
        { w: 'g[au]w', emoji: '🏃', zin: 'Kom gauw naar binnen, het regent!' },
        { w: 'h[ou]t', emoji: '🪵', zin: 'De tafel is gemaakt van hout.' },
        { w: 'g[ou]d', emoji: '🥇', zin: 'De ring is van echt goud.' },
        { w: 'k[ou]d', emoji: '🥶', zin: 'In de winter is het koud buiten.' },
        { w: 'z[ou]t', emoji: '🧂', zin: 'Er zit te veel zout in de soep.' },
        { w: 't[ou]w', emoji: '🪢', zin: 'Wij springen met een lang touw.' },
        { w: 'k[ou]s', emoji: '🧦', zin: 'Er zit een gat in mijn kous.' },
        { w: 'vr[ou]w', emoji: '👩', zin: 'De vrouw fietst naar haar werk.' }
      ]
    },
    {
      id: 'dt',
      titel: 'd of t aan het eind',
      emoji: '🐕',
      soort: 'Langer maken',
      opties: ['d', 't'],
      tip: 'Hoor je aan het eind een t? Maak het woord dan langer. Hond wordt honden: je hoort een d, dus je schrijft een d.',
      woorden: [
        { w: 'hon[d]', emoji: '🐕', lang: 'honden', zin: 'De hond rent achter de bal aan.' },
        { w: 'paar[d]', emoji: '🐴', lang: 'paarden', zin: 'Het paard staat in de wei.' },
        { w: 'broo[d]', emoji: '🍞', lang: 'broden', zin: 'Ik eet brood met kaas.' },
        { w: 'han[d]', emoji: '✋', lang: 'handen', zin: 'Geef mij maar een hand.' },
        { w: 'stran[d]', emoji: '🏖️', lang: 'stranden', zin: 'Wij bouwen een kasteel op het strand.' },
        { w: 'tan[d]', emoji: '🦷', lang: 'tanden', zin: 'Mijn tand zit los.' },
        { w: 'be[d]', emoji: '🛏️', lang: 'bedden', zin: 'Ik lig lekker in mijn bed.' },
        { w: 'boo[t]', emoji: '⛵', lang: 'boten', zin: 'De boot vaart over het meer.' },
        { w: 'voe[t]', emoji: '🦶', lang: 'voeten', zin: 'Ik stoot mijn voet tegen de stoel.' },
        { w: 'kran[t]', emoji: '📰', lang: 'kranten', zin: 'Opa leest elke dag de krant.' },
        { w: 'taar[t]', emoji: '🎂', lang: 'taarten', zin: 'Op mijn feest eten wij taart.' },
        { w: 'ten[t]', emoji: '⛺', lang: 'tenten', zin: 'Wij slapen in een tent.' }
      ]
    },
    {
      id: 'ngnk',
      titel: 'ng of nk',
      emoji: '💍',
      soort: 'Luisterwoorden',
      opties: ['ng', 'nk'],
      tip: 'Luister goed naar het eind van de klank. Hoor je een k? Dan schrijf je nk, zoals in bank. Hoor je geen k? Dan schrijf je ng, zoals in ring.',
      woorden: [
        { w: 'ri[ng]', emoji: '💍', zin: 'Mama draagt een gouden ring.' },
        { w: 'sla[ng]', emoji: '🐍', zin: 'De slang kruipt door het gras.' },
        { w: 'koni[ng]', emoji: '👑', zin: 'De koning woont in een paleis.' },
        { w: 'to[ng]', emoji: '👅', zin: 'Ik brand mijn tong aan de thee.' },
        { w: 'vi[ng]er', emoji: '☝️', zin: 'Ik heb een pleister om mijn vinger.' },
        { w: 'la[ng]', emoji: '📏', zin: 'Dat touw is heel lang.' },
        { w: 'ba[nk]', emoji: '🛋️', zin: 'Wij zitten samen op de bank.' },
        { w: 'pla[nk]', emoji: '🪚', zin: 'De timmerman zaagt een plank.' },
        { w: 'i[nk]t', emoji: '🖋️', zin: 'Er zit blauwe inkt in de pen.' },
        { w: 'dri[nk]en', emoji: '🥤', zin: 'Ik wil graag water drinken.' },
        { w: 'da[nk]', emoji: '🙏', zin: 'Dank je wel voor het cadeau.' },
        { w: 'sti[nk]en', emoji: '🦨', zin: 'Die oude sokken stinken!' }
      ]
    },
    {
      id: 'dubbel',
      titel: 'Eén of twee medeklinkers',
      emoji: '🥖',
      soort: 'Klankgroepen',
      tip: 'Verdeel het woord in klankgroepen. Eindigt de eerste klankgroep op een korte klank, zoals in bak-ker? Dan komen er twee medeklinkers. Is het een lange klank, zoals in bo-men? Dan maar één.',
      woorden: [
        { w: 'ba[kk]er', emoji: '👨‍🍳', zin: 'De bakker bakt vers brood.' },
        { w: 'ka[tt]en', emoji: '🐈', zin: 'Onze katten slapen op de bank.' },
        { w: 'pe[nn]en', emoji: '🖊️', zin: 'De pennen liggen in de la.' },
        { w: 'vi[ss]en', emoji: '🐟', zin: 'In de vijver zwemmen vissen.' },
        { w: 'bu[ss]en', emoji: '🚌', zin: 'De bussen rijden naar de stad.' },
        { w: 'be[ll]en', emoji: '🔔', zin: 'Ik ga oma even bellen.' },
        { w: 'ko[pp]en', emoji: '☕', zin: 'De koppen staan in de kast.' },
        { w: 'bo[m]en', emoji: '🌳', zin: 'In het bos staan hoge bomen.' },
        { w: 'ra[m]en', emoji: '🪟', zin: 'Papa wast de ramen.' },
        { w: 'a[p]en', emoji: '🐒', zin: 'De apen klimmen in de boom.' },
        { w: 'po[t]en', emoji: '🐾', zin: 'Een hond heeft vier poten.' },
        { w: 'sla[p]en', emoji: '😴', zin: 'De baby moet nu slapen.' }
      ]
    },
    {
      id: 'schr',
      titel: 'sch of schr',
      emoji: '🏫',
      soort: 'Luisterwoorden',
      opties: ['sch', 'schr'],
      tip: 'Zeg het woord langzaam. Hoor je na de sch nog een r? Dan schrijf je schr, zoals in schrijven.',
      woorden: [
        { w: '[sch]ool', emoji: '🏫', zin: 'Om half negen begint de school.' },
        { w: '[sch]aap', emoji: '🐑', zin: 'Het schaap heeft een dikke vacht.' },
        { w: '[sch]oen', emoji: '👟', zin: 'Mijn schoen zit te strak.' },
        { w: '[sch]ip', emoji: '🚢', zin: 'Het schip vaart over de zee.' },
        { w: '[sch]aar', emoji: '✂️', zin: 'Knip het papier met de schaar.' },
        { w: '[sch]at', emoji: '💰', zin: 'De piraat zoekt een schat.' },
        { w: '[schr]ift', emoji: '📓', zin: 'Ik schrijf de som in mijn schrift.' },
        { w: '[schr]ijven', emoji: '✍️', zin: 'Wij leren netjes schrijven.' },
        { w: '[schr]ik', emoji: '😱', zin: 'Van schrik liet ik mijn beker vallen.' },
        { w: '[schr]oef', emoji: '🔩', zin: 'Er zit een schroef los in de stoel.' },
        { w: '[schr]am', emoji: '🩹', zin: 'Ik heb een schram op mijn knie.' }
      ]
    },
    {
      id: 'eeuw',
      titel: 'eeuw, ieuw of uw',
      emoji: '🦁',
      soort: 'Regelwoorden',
      opties: ['eeuw', 'ieuw', 'uw'],
      tip: 'Aan het eind van eeuw, ieuw en uw schrijf je altijd een w, ook al hoor je die bijna niet. En bij uw schrijf je maar één u.',
      woorden: [
        { w: 'l[eeuw]', emoji: '🦁', zin: 'De leeuw brult heel hard.' },
        { w: 'sn[eeuw]', emoji: '❄️', zin: 'Er ligt sneeuw op het dak.' },
        { w: 'm[eeuw]', emoji: '🕊️', zin: 'De meeuw pikt een frietje.' },
        { w: 'schr[eeuw]', emoji: '😫', zin: 'Ik hoorde een harde schreeuw.' },
        { w: 'n[ieuw]', emoji: '✨', zin: 'Ik heb een nieuw boek gekregen.' },
        { w: 'k[ieuw]', emoji: '🐟', zin: 'Een vis ademt door een kieuw.' },
        { w: 'd[uw]', emoji: '👉', zin: 'Geef de schommel een duw.' },
        { w: 'r[uw]', emoji: '🪨', zin: 'De steen voelt ruw aan.' },
        { w: 'sch[uw]', emoji: '🙈', zin: 'Het hertje is erg schuw.' }
      ]
    },
    {
      id: 'aaiooi',
      titel: 'aai, ooi of oei',
      emoji: '🦈',
      soort: 'Regelwoorden',
      opties: ['aai', 'ooi', 'oei'],
      tip: 'Je hoort aan het eind een j, maar je schrijft een i: haai, mooi, groei.',
      woorden: [
        { w: 'h[aai]', emoji: '🦈', zin: 'De haai zwemt in de zee.' },
        { w: 'kr[aai]', emoji: '🐦', zin: 'Op het dak zit een zwarte kraai.' },
        { w: 's[aai]', emoji: '🥱', zin: 'Ik vind deze film saai.' },
        { w: 'zw[aai]', emoji: '👋', zin: 'Geef opa een zwaai.' },
        { w: 'm[ooi]', emoji: '🌈', zin: 'Wat een mooi schilderij!' },
        { w: 'k[ooi]', emoji: '🦜', zin: 'De vogel zit in zijn kooi.' },
        { w: 'n[ooi]t', emoji: '🙅', zin: 'Ik ben nog nooit in Parijs geweest.' },
        { w: 'g[ooi]', emoji: '🤾', zin: 'Ik gooi de bal naar jou.' },
        { w: 'gr[oei]', emoji: '🌱', zin: 'Ik groei elk jaar een stukje.' },
        { w: 'bl[oei]', emoji: '🌸', zin: 'De boom staat in bloei.' },
        { w: 'b[oei]', emoji: '🛟', zin: 'In het water drijft een rode boei.' },
        { w: 'f[oei]', emoji: '😠', zin: 'Foei, dat mag niet!' }
      ]
    }
  ]
};

if (typeof module !== 'undefined') { module.exports = { GROEP5 }; }

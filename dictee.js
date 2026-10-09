/*
 * Dictee — groep 8.
 *
 * Net als de andere databestanden is dit "data-only": app.js kent geen enkel
 * woord bij naam. Een pakket toevoegen = een object aan `pakketten` plakken;
 * het krijgt vanzelf een eigen dictee en doet mee in de gemengde dictees.
 *
 * Een dictee gaat zoals op school: Kaia leest voor, het kind schrijft op, en
 * er wordt pas aan het eind nagekeken.
 *
 * `dictees` zijn de gemengde dictees, met woorden of zinnen uit alle pakketten:
 *   id, titel, soort, emoji, niveau
 *   vorm       'woorden' (Kaia zegt het woord en een zin, het kind typt het
 *              woord) of 'zinnen' (het kind typt de hele zin)
 *   aantal     hoeveel woorden of zinnen er in één dictee zitten
 *
 * Een pakket:
 *   id, titel, soort, emoji, niveau
 *   regel      id van de spellingregel in spelling.js die erbij hoort; na een
 *              fout verwijst Kaia daarnaar (mag ontbreken)
 *   tip        de regel in het kort; staat na afloop bij een fout woord
 *   woorden    [{ w: 'wordt', zin: 'Mijn zusje wordt later dierenarts.', zinDictee? }]
 *              zin        genereer-audio.js neemt "Wordt. <zin>" op, en de zin
 *                         los voor het zinnendictee
 *              zinDictee  false = zin niet gebruiken in het zinnendictee
 *
 * Let bij een zin op dat je hem maar op één manier kunt opschrijven: geen
 * getallen (acht of 8?), geen namen van mensen en geen woorden met een accent
 * dat je niet hoort (één). Komma's kijkt de app niet na.
 */

const DICTEE8 = {
  // Zoveel woorden zitten er in het dictee van één pakket.
  woordenPerPakket: 10,

  // Wat Kaia zegt bij het eerste woord en bij elk volgend woord.
  uitleg: {
    woorden: 'Ik zeg steeds een woord en daarna een zin waar het in zit. Jij schrijft alleen het woord op. Nakijken doen we aan het eind.',
    zinnen: 'Ik lees steeds een hele zin voor. Schrijf hem precies op, met hoofdletters en een leesteken aan het eind. Nakijken doen we aan het eind.'
  },
  opdracht: {
    woorden: 'Luister goed en typ het woord.',
    zinnen: 'Luister goed en typ de hele zin.'
  },

  dictees: [
    {
      id: 'dictee-woorden',
      titel: 'Groot woorddictee',
      soort: 'Alles door elkaar',
      emoji: '📝',
      niveau: 3,
      vorm: 'woorden',
      aantal: 15
    },
    {
      id: 'dictee-zinnen',
      titel: 'Zinnendictee',
      soort: 'Hele zinnen',
      emoji: '✏️',
      niveau: 3,
      vorm: 'zinnen',
      aantal: 8
    }
  ],

  pakketten: [
    {
      id: 'klankgroepen',
      titel: 'Verdubbelen en verenkelen',
      soort: 'Klanken',
      emoji: '🏊',
      niveau: 1,
      regel: 'sp-klankgroepen',
      tip: 'Hak het woord in klankgroepen. Korte klank in een klankgroep: de medeklinker erachter dubbel. Lange klank aan het eind van een klankgroep: één klinker.',
      woorden: [
        { w: 'vertellen', zin: 'Opa kan prachtig over vroeger vertellen.' },
        { w: 'verschillende', zin: 'In de winkel liggen verschillende soorten appels.' },
        { w: 'beginnen', zin: 'De les gaat bijna beginnen.' },
        { w: 'getallen', zin: 'Schrijf de getallen netjes onder elkaar.' },
        { w: 'kapotte', zin: 'De kapotte fiets staat al weken in de schuur.' },
        { w: 'struikelen', zin: 'Pas op dat je niet over die tak gaat struikelen.' },
        { w: 'vergeten', zin: 'Ik ben mijn gymschoenen vergeten.' },
        { w: 'leraren', zin: 'De leraren vergaderen vanmiddag na schooltijd.' },
        { w: 'verhalen', zin: 'In dat boek staan korte verhalen.' },
        { w: 'eigenaren', zin: 'De eigenaren van de bakkerij zijn heel aardig.' },
        { w: 'gevaarlijke', zin: 'Bij de brug is een gevaarlijke bocht.' },
        { w: 'druppels', zin: 'Er vallen dikke druppels op het raam.' }
      ]
    },
    {
      id: 'tegenwoordige-tijd',
      titel: 'Werkwoorden: tegenwoordige tijd',
      soort: 'Werkwoorden',
      emoji: '⌨️',
      niveau: 2,
      regel: 'sp-tegenwoordige-tijd',
      tip: 'Ik: alleen de stam. Hij, zij of het: stam + t. Staat jij achter het werkwoord? Dan valt de t weg. Eindigt de stam al op een t? Dan komt er geen t bij: hij verwacht.',
      woorden: [
        { w: 'wordt', zin: 'Mijn zusje wordt later dierenarts.' },
        { w: 'word', zin: 'Ik word vanmiddag door oma opgehaald.' },
        { w: 'vindt', zin: 'De juf vindt mijn werkstuk erg mooi.' },
        { w: 'vind', zin: 'Vind jij rekenen ook zo leuk?' },
        { w: 'antwoordt', zin: 'De meester antwoordt meteen op elke vraag.' },
        { w: 'houdt', zin: 'Mijn opa houdt veel van zijn tuin.' },
        { w: 'rijdt', zin: 'De bus rijdt elke ochtend langs onze school.' },
        { w: 'verwacht', zin: 'De trainer verwacht dat iedereen op tijd komt.' },
        { w: 'bedoelt', zin: 'Ik snap niet wat hij daarmee bedoelt.' },
        { w: 'gebeurt', zin: 'Er gebeurt nooit iets in dit dorp.' },
        { w: 'verhuist', zin: 'Mijn beste vriendin verhuist naar een andere stad.' },
        { w: 'belooft', zin: 'Papa belooft dat hij komt kijken.' }
      ]
    },
    {
      id: 'verleden-tijd',
      titel: 'Werkwoorden: verleden tijd',
      soort: 'Werkwoorden',
      emoji: '🚢',
      niveau: 3,
      regel: 'sp-kofschip',
      tip: "Stam + te(n) of de(n). Eindigt de stam op een letter uit 't kofschip, dan -te. Eindigt de stam zelf al op een t of d, dan krijg je tt of dd. Let op: leven en verhuizen hebben een v en een z, dus leefde en verhuisde.",
      woorden: [
        { w: 'werkte', zin: 'Gisteren werkte mijn moeder de hele dag thuis.' },
        { w: 'fietsten', zin: 'Vorige week fietsten wij samen naar het strand.' },
        { w: 'verhuisden', zin: 'Toen ik klein was, verhuisden wij naar het noorden.' },
        { w: 'leefde', zin: 'Lang geleden leefde hier een machtige koning.' },
        { w: 'antwoordde', zin: 'De juf antwoordde gisteren heel vriendelijk.' },
        { w: 'wachtten', zin: 'Gisteren wachtten wij lang op de trein.' },
        { w: 'praatte', zin: 'Mijn tante praatte gisteren urenlang met de buurvrouw.' },
        { w: 'beloofde', zin: 'Hij beloofde dat hij zou helpen.' },
        { w: 'landde', zin: 'Het vliegtuig landde gisteravond precies op tijd.' },
        { w: 'luisterden', zin: 'De kinderen luisterden stil naar het verhaal.' },
        { w: 'verbaasde', zin: 'Het verbaasde mij dat niemand iets zei.' },
        { w: 'stopten', zin: 'De bussen stopten gisteren voor het rode licht.' }
      ]
    },
    {
      id: 'voltooid-deelwoord',
      titel: 'Voltooid deelwoord',
      soort: 'Werkwoorden',
      emoji: '✅',
      niveau: 3,
      regel: 'sp-voltooid-deelwoord',
      tip: "Hoort het woord bij hebben, zijn of worden? Gebruik dan 't kofschip voor de laatste letter. Je hoort het in een langere vorm: de verhuisde buren.",
      woorden: [
        { w: 'gebeurd', zin: 'Wat is er gisteren op het plein gebeurd?' },
        { w: 'gewerkt', zin: 'Ik heb de hele middag aan mijn werkstuk gewerkt.' },
        { w: 'geantwoord', zin: 'De meester heeft nog niet geantwoord.' },
        { w: 'verhuisd', zin: 'Onze buren zijn vorige maand verhuisd.' },
        { w: 'gefietst', zin: 'Wij zijn helemaal naar het bos gefietst.' },
        { w: 'beloofd', zin: 'Je hebt beloofd dat je zou komen.' },
        { w: 'verteld', zin: 'Oma heeft een spannend verhaal verteld.' },
        { w: 'betaald', zin: 'Mama heeft de boodschappen al betaald.' },
        { w: 'ontdekt', zin: 'De jongen heeft een geheime gang ontdekt.' },
        { w: 'verrast', zin: 'Wij hebben de juf verrast met een taart.' },
        { w: 'verbrand', zin: 'Ik heb mijn vinger verbrand aan de oven.' },
        { w: 'gepraat', zin: 'Wij hebben lang over het schoolkamp gepraat.' }
      ]
    },
    {
      id: 'woordstukjes',
      titel: 'Anders dan je hoort: -tie, -isch, -lijk, -ig',
      soort: 'Woorden',
      emoji: '🔤',
      niveau: 2,
      regel: 'sp-woordstukjes',
      tip: 'Je hoort sie, ies, luk of ug, maar je schrijft -tie, -isch, -lijk en -ig.',
      woorden: [
        { w: 'vakantie', zin: 'In de zomer gaan wij op vakantie.' },
        { w: 'politie', zin: 'De politie regelt het verkeer.' },
        { w: 'informatie', zin: 'In deze folder staat alle informatie.' },
        { w: 'traditie', zin: 'Wij hebben thuis een leuke traditie.' },
        { w: 'logisch', zin: 'Dat klinkt heel logisch.' },
        { w: 'fantastisch', zin: 'Het optreden was fantastisch.' },
        { w: 'elektrisch', zin: 'De nieuwe bus rijdt helemaal elektrisch.' },
        { w: 'moeilijk', zin: 'Deze som is niet moeilijk.' },
        { w: 'eindelijk', zin: 'Eindelijk is het weekend.' },
        { w: 'natuurlijk', zin: 'Natuurlijk mag je meedoen.' },
        { w: 'gezellig', zin: 'Het was erg gezellig op het feest.' },
        { w: 'voorzichtig', zin: 'Wees voorzichtig met dat glas.' }
      ]
    },
    {
      id: 'samenstellingen',
      titel: 'Samenstellingen, trema en koppelteken',
      soort: 'Woorden',
      emoji: '🔗',
      niveau: 3,
      regel: 'sp-samenstellingen',
      tip: 'Een samenstelling is één woord. Hoor je een "uh" tussen de delen en heeft het eerste deel alleen een meervoud op -en? Dan komt er een tussen-n. Botsende klinkers: een trema in één woord, een koppelteken in een samenstelling.',
      woorden: [
        { w: 'pannenkoek', zin: 'Op zaterdag bak ik een grote pannenkoek.' },
        { w: 'boekenkast', zin: 'De boekenkast staat vol met strips.' },
        { w: 'stationsplein', zin: 'Wij spreken af op het stationsplein.' },
        { w: 'tandenborstel', zin: 'Mijn tandenborstel staat in de badkamer.' },
        { w: 'zonnebloem', zin: 'In de tuin groeit een hoge zonnebloem.' },
        { w: 'verjaardagsfeest', zin: 'Kom je zaterdag op mijn verjaardagsfeest?' },
        { w: 'krantenwijk', zin: 'Mijn broer heeft een krantenwijk.' },
        { w: 'groentesoep', zin: 'Vanavond eten wij verse groentesoep.' },
        { w: 'zee-egel', zin: 'Tussen de rotsen zit een zee-egel.' },
        { w: 'zeeën', zin: 'Grote schepen varen over alle zeeën.' },
        { w: 'ideeën', zin: 'Onze groep heeft veel goede ideeën.' },
        { w: 'auto-ongeluk', zin: 'Bij het auto-ongeluk raakte gelukkig niemand gewond.' }
      ]
    },
    {
      id: 'dubbel-verleden',
      titel: 'Verleden tijd met tt of dd',
      soort: 'Werkwoorden',
      emoji: '⏪',
      niveau: 3,
      regel: 'sp-verleden-tijd-dubbel',
      tip: 'Stam + te of de, ook als de stam al op een t of d eindigt: praat + te = praatte, antwoord + de = antwoordde.',
      woorden: [
        { w: 'wachtte', zin: 'Gisteren wachtte ik lang op de bus.' },
        { w: 'zette', zin: 'Zij zette gisteren haar tas in de gang.' },
        { w: 'feestten', zin: 'Vorige week feestten wij tot laat in de avond.' },
        { w: 'rustte', zin: 'Na de wandeling rustte opa even uit.' },
        { w: 'kostte', zin: 'Dat kaartje kostte vorig jaar veel minder.' },
        { w: 'praatten', zin: 'Vorige week praatten wij lang over het schoolkamp.' },
        { w: 'meldden', zin: 'De kinderen meldden zich gisteren bij de directeur.' },
        { w: 'brandde', zin: 'Gisteravond brandde er een kaars op tafel.' },
        { w: 'raadde', zin: 'Zij raadde gisteren het goede antwoord.' },
        { w: 'verwachtte', zin: 'Niemand verwachtte gisteren zulke harde regen.' },
        { w: 'bloedde', zin: 'Na de val bloedde mijn knie een beetje.' },
        { w: 'startten', zin: 'De lopers startten gisteren precies op tijd.' }
      ]
    },
    {
      id: 'meervoud',
      titel: "Meervoud: -s of -'s",
      soort: 'Woorden',
      emoji: '👯',
      niveau: 2,
      regel: 'sp-meervoud',
      tip: "Eindigt het woord op één lange a, i, o, u of y? Dan schrijf je 's: auto's. Na een e die klinkt als uh, een é of meer klinkers samen komt de s er gewoon aan vast: tantes, cafés, cadeaus.",
      woorden: [
        { w: "auto's", zin: "Op het plein staan veel auto's." },
        { w: "foto's", zin: "Wij bekijken de foto's van de vakantie." },
        { w: "baby's", zin: "De baby's liggen lekker te slapen." },
        { w: "hobby's", zin: "Lezen en tekenen zijn mijn hobby's." },
        { w: "opa's", zin: "Mijn opa's wonen allebei ver weg." },
        { w: "taxi's", zin: "De taxi's wachten voor het station." },
        { w: "menu's", zin: "De ober legt de menu's op tafel." },
        { w: 'cafés', zin: 'In de stad zijn veel cafés.' },
        { w: 'cadeaus', zin: 'Onder de boom liggen de cadeaus.' },
        { w: 'bureaus', zin: 'In het lokaal staan nieuwe bureaus.' },
        { w: 'tantes', zin: 'Mijn tantes komen zondag op bezoek.' },
        { w: 'kangoeroes', zin: 'In de dierentuin springen de kangoeroes rond.' }
      ]
    },
    {
      id: 'verkleinwoorden',
      titel: 'Verkleinwoorden',
      soort: 'Woorden',
      emoji: '🤏',
      niveau: 2,
      regel: 'sp-verkleinwoorden',
      tip: 'Meestal -je. Na een lange klank -tje, na een m -pje. Na een korte klank met klemtoon en dan l, m, n, r of ng komt -etje. Een woord op -ing zonder klemtoon krijgt -inkje.',
      woorden: [
        { w: 'boompje', zin: 'In de tuin staat een klein boompje.' },
        { w: 'balletje', zin: 'De hond rent achter het balletje aan.' },
        { w: 'koninkje', zin: 'Het koninkje woont in een heel klein kasteel.' },
        { w: 'kettinkje', zin: 'Zij draagt een zilveren kettinkje.' },
        { w: 'autootje', zin: 'Mijn broertje speelt met een rood autootje.' },
        { w: 'parapluutje', zin: 'Mijn parapluutje past precies in mijn tas.' },
        { w: 'stoeltje', zin: 'De peuter zit op een laag stoeltje.' },
        { w: 'sterretje', zin: 'Ik teken een sterretje in mijn schrift.' },
        { w: 'ringetje', zin: 'Aan haar vinger zit een gouden ringetje.' },
        { w: 'filmpje', zin: 'Wij maken een grappig filmpje.' },
        { w: 'omaatje', zin: 'Het omaatje steekt langzaam de straat over.' },
        { w: 'zonnetje', zin: 'Het zonnetje schijnt weer.' }
      ]
    },
    {
      id: 'leenwoorden',
      titel: 'Leenwoorden',
      soort: 'Woorden',
      emoji: '🎁',
      niveau: 3,
      regel: 'sp-leenwoorden',
      tip: 'Leenwoorden zijn weetwoorden. In Franse woorden: eau voor oo, ch voor sj en ou voor oe. De zj is aan het eind een g (garage, horloge) en aan het begin vaak een j (journaal).',
      woorden: [
        { w: 'cadeau', zin: 'Ik kreeg een prachtig cadeau.' },
        { w: 'bureau', zin: 'Mijn boeken liggen op het bureau.' },
        { w: 'niveau', zin: 'Zij voetbalt op een hoog niveau.' },
        { w: 'chauffeur', zin: 'De chauffeur wacht bij de bus.' },
        { w: 'restaurant', zin: 'Wij eten vanavond in een restaurant.' },
        { w: 'douche', zin: 'Na het sporten neem ik een douche.' },
        { w: 'garage', zin: 'De auto staat in de garage.' },
        { w: 'horloge', zin: 'Opa kijkt op zijn horloge.' },
        { w: 'journaal', zin: 'Mijn ouders kijken elke avond naar het journaal.' },
        { w: 'toilet', zin: 'Het toilet is aan het eind van de gang.' },
        { w: 'portemonnee', zin: 'Ik ben mijn portemonnee kwijt.' },
        { w: 'pyjama', zin: 'Ik heb mijn pyjama al aan.' }
      ]
    },
    {
      id: 'instinkers',
      titel: 'Instinkers',
      soort: 'Weetwoorden',
      emoji: '🪤',
      niveau: 3,
      tip: 'Dit is een weetwoord: er is geen regel voor. Kijk goed naar het woord, dek het af en schrijf het nog een keer op.',
      woorden: [
        { w: 'onmiddellijk', zin: 'Kom onmiddellijk naar beneden.' },
        { w: 'interessant', zin: 'Ik vond de film erg interessant.' },
        { w: 'enthousiast', zin: 'De hele klas was enthousiast.' },
        { w: 'apparaat', zin: 'Dit apparaat maakt veel lawaai.' },
        { w: 'burgemeester', zin: 'De burgemeester opent het nieuwe zwembad.' },
        { w: 'abonnement', zin: 'Ik heb een abonnement op een stripblad.' },
        { w: 'sowieso', zin: 'Ik kom morgen sowieso naar je toe.' },
        { w: 'misschien', zin: 'Misschien gaat het morgen sneeuwen.' },
        { w: 'ontzettend', zin: 'Het was ontzettend druk in de stad.' },
        { w: 'tegenwoordig', zin: 'Tegenwoordig heeft bijna iedereen een telefoon.' },
        { w: 'thuis', zin: 'Ik blijf vanavond lekker thuis.' },
        { w: 'precies', zin: 'De trein vertrekt precies op tijd.' },
        { w: 'herinneren', zin: 'Kun jij je onze eerste schooldag nog herinneren?' }
      ]
    }
  ]
};

if (typeof module !== 'undefined') { module.exports = { DICTEE8 }; }

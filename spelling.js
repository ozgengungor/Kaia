/*
 * Spellingoefeningen — groep 8.
 *
 * Zelfde idee als exercises.js: alles hardcoded en "data-only", zodat de app
 * geen enkele oefening bij naam kent en er later een editor bovenop kan.
 *
 * Structuur van een spellingoefening:
 *   id          unieke sleutel (voor het opslaan van voortgang)
 *   titel       naam van de regel
 *   soort       label op de kaart ("Werkwoorden", "Klanken", ...)
 *   emoji       plaatje op de keuzekaart
 *   niveau      1 = makkelijker, 2 = gemiddeld, 3 = pittig
 *   intro       een zin van Kaia bij de regelkaart
 *   regel       { stappen: [..], voorbeelden: [{ woord, uitleg }], letop }
 *               In stappen, letop en de uitleg bij een voorbeeld mag je een
 *               stukje *tussen sterretjes* zetten; dat wordt vetgedrukt.
 *   vragen      array met vragen, zie hieronder
 *
 * Vraagtypes (mc werkt precies zoals bij begrijpend lezen):
 *   { type: 'mc',      vraag, opties: [..], goed: <index>, hint, uitleg, vaardigheid }
 *   { type: 'invul',   vraag, zin: 'Ik ___ twaalf.', cue, goed: 'word' | ['word', ..],
 *                      hint, uitleg, vaardigheid }
 *   { type: 'sorteer', vraag, categorieen: ['-te', '-de'], items: [..],
 *                      goed: [..index van de categorie per item..], hint, uitleg, vaardigheid }
 */

const SPELLINGOEFENINGEN = [
  {
    id: 'sp-klankgroepen',
    titel: 'Verdubbelen of verenkelen',
    soort: 'Klanken',
    emoji: '🏊',
    niveau: 1,
    intro: 'Bal wordt ballen, maar boom wordt bomen. Ik laat je zien hoe dat zit.',
    regel: {
      stappen: [
        'Hak het woord in klankgroepen: stukjes met één klinkerklank. Klap maar mee: *bal-len*, *bo-men*.',
        'Hoor je een *korte* klank aan het eind van een klankgroep? Dan verdubbel je de medeklinker: bal → *ballen*.',
        'Hoor je een *lange* klank aan het eind van een klankgroep? Dan schrijf je maar één klinker: boom → *bomen*.'
      ],
      voorbeelden: [
        { woord: 'kat → katten', uitleg: 'kat-ten, korte a, dus twee keer de t' },
        { woord: 'raam → ramen', uitleg: 'ra-men, lange aa aan het eind, dus één a' },
        { woord: 'bus → bussen', uitleg: 'bus-sen, korte u, dus twee keer de s' },
        { woord: 'boot → boten', uitleg: 'bo-ten, lange oo aan het eind, dus één o' }
      ],
      letop: 'Zeg het woord hardop en luister naar de klank. Je oren weten het vaak al: *bommen* en *bomen* klinken echt anders.'
    },
    vragen: [
      {
        type: 'invul',
        vaardigheid: 'Verdubbelen',
        vraag: 'Vul het goede woord in.',
        zin: 'Er liggen drie ___ in de gang.',
        cue: 'meer dan één bal',
        goed: 'ballen',
        hint: 'Hak het in stukjes: bal-len. Wat hoor je aan het eind van het eerste stukje: een korte of een lange a?',
        uitleg: 'Je hakt het woord in bal-len. Aan het eind van de eerste klankgroep hoor je een korte a, dus verdubbel je de l: ballen.'
      },
      {
        type: 'invul',
        vaardigheid: 'Verenkelen',
        vraag: 'Vul het goede woord in.',
        zin: 'In dat bos staan hele hoge ___.',
        cue: 'meer dan één boom',
        goed: 'bomen',
        hint: 'Hak het in stukjes: bo-men. Hoor je aan het eind van het eerste stukje een lange oo?',
        uitleg: 'Je hakt het woord in bo-men. Aan het eind van de eerste klankgroep hoor je een lange oo, en dan schrijf je maar één o: bomen. Met twee o\'s zou je "boo-men" schrijven, en dat hoeft niet.'
      },
      {
        type: 'mc',
        vaardigheid: 'Verenkelen',
        vraag: 'Welke zin is goed geschreven?',
        opties: [
          'De poes ligt lekker te slaapen.',
          'De poes ligt lekker te slappen.',
          'De poes ligt lekker te slapen.'
        ],
        goed: 2,
        hint: 'Hak het werkwoord in klankgroepen en luister: sla-pen of slap-pen?',
        uitleg: 'Je hoort sla-pen, met een lange aa aan het eind van de eerste klankgroep. Dan schrijf je één a: slapen. "Slappen" zou je uitspreken met een korte a, zoals in "slap".'
      },
      {
        type: 'sorteer',
        vaardigheid: 'Meervoud',
        vraag: 'Wat gebeurt er met dit woord in het meervoud?',
        categorieen: ['Medeklinker verdubbelen', 'Eén klinker minder'],
        items: ['kat', 'raam', 'pot', 'muur', 'bus', 'boot'],
        goed: [0, 1, 0, 1, 0, 1],
        hint: 'Zeg het meervoud hardop en hak het in klankgroepen. Hoor je een korte klank, dan verdubbel je.',
        uitleg: 'katten, potten en bussen hebben een korte klank, dus verdubbel je de medeklinker. ramen, muren en boten hebben een lange klank aan het eind van de klankgroep, dus houd je één klinker over.'
      },
      {
        type: 'invul',
        vaardigheid: 'Verdubbelen',
        vraag: 'Vul het goede woord in.',
        zin: 'In groep 8 krijg je best veel ___.',
        cue: 'meer dan één les',
        goed: 'lessen',
        hint: 'les-sen: hoor je aan het eind van het eerste stukje een korte e?',
        uitleg: 'Je hakt het in les-sen. De e is kort, dus de s wordt verdubbeld: lessen.'
      },
      {
        type: 'mc',
        vaardigheid: 'Verdubbelen',
        vraag: 'Welke zin is goed geschreven?',
        opties: [
          'Oma gaat een verhaal vertelen.',
          'Oma gaat een verhaal vertellen.',
          'Oma gaat een verhaal verteelen.'
        ],
        goed: 1,
        hint: 'Hak het woord in drieën: ver-tel-len of ver-te-len?',
        uitleg: 'Je hoort ver-tel-len, met een korte e in het middelste stukje. Daarom komen er twee l\'en: vertellen.'
      }
    ]
  },

  {
    id: 'sp-tegenwoordige-tijd',
    titel: 'Werkwoorden in de tegenwoordige tijd',
    soort: 'Werkwoorden',
    emoji: '⌨️',
    niveau: 2,
    intro: 'Ik word, hij wordt, word jij? Drie keer hetzelfde woord en toch drie keer anders. Kijk mee!',
    regel: {
      stappen: [
        'Zoek eerst de *stam*: haal -en van het hele werkwoord af. worden → *word*.',
        'Ik → alleen de stam: *ik word*.',
        'Jij, hij, zij, het, de juf → stam *+ t*: *hij wordt*.',
        'Staat *jij achter* de persoonsvorm? Dan valt de t weg: *word jij?*',
        'Eindigt de stam zelf al op een t? Dan komt er geen tweede bij: *hij eet*.'
      ],
      voorbeelden: [
        { woord: 'ik word', uitleg: 'alleen de stam' },
        { woord: 'hij wordt', uitleg: 'stam word + t' },
        { woord: 'word jij?', uitleg: 'jij staat erachter, dus zonder t' },
        { woord: 'hij eet', uitleg: 'de stam eet eindigt al op een t' }
      ],
      letop: 'De t hoor je vaak niet. Kijk daarom altijd *wie* er iets doet, en of jij vóór of achter het werkwoord staat.'
    },
    vragen: [
      {
        type: 'invul',
        vaardigheid: 'Ik-vorm',
        vraag: 'Zet het werkwoord in de goede vorm.',
        zin: 'Ik ___ volgende week twaalf jaar.',
        cue: 'werkwoord: worden',
        goed: 'word',
        hint: 'Bij "ik" schrijf je alleen de stam. Wat blijft er over als je -en weghaalt bij worden?',
        uitleg: 'De stam van worden is word. Bij "ik" komt er nooit een t bij: ik word.'
      },
      {
        type: 'invul',
        vaardigheid: 'Stam + t',
        vraag: 'Zet het werkwoord in de goede vorm.',
        zin: 'Mijn zusje ___ volgende week acht.',
        cue: 'werkwoord: worden',
        goed: 'wordt',
        hint: '"Mijn zusje" kun je vervangen door "zij". En bij zij, hij of het geldt: stam + t.',
        uitleg: 'Mijn zusje = zij, dus stam + t: word + t = wordt. Je hoort maar één t, maar je schrijft er twee.'
      },
      {
        type: 'mc',
        vaardigheid: 'Jij erachter',
        vraag: 'Welke zin is goed geschreven?',
        opties: [
          'Jij word morgen opgehaald.',
          'Word jij morgen opgehaald?',
          'Wordt jij morgen opgehaald?'
        ],
        goed: 1,
        hint: 'Kijk goed waar "jij" staat: vóór of achter het werkwoord?',
        uitleg: 'Staat jij áchter de persoonsvorm, dan valt de t weg: "Word jij ...?" Staat jij ervóór, dan hoort de t er juist wel bij: "Jij wordt morgen opgehaald."'
      },
      {
        type: 'invul',
        vaardigheid: 'Jij erachter',
        vraag: 'Zet het werkwoord in de goede vorm.',
        zin: '___ jij mijn sleutels ergens?',
        cue: 'werkwoord: vinden',
        goed: 'vind',
        hint: 'Jij staat achter het werkwoord. Wat gebeurt er dan met de t?',
        uitleg: 'De stam is vind. Omdat jij erachter staat, valt de t weg: "Vind jij mijn sleutels ergens?" Vergelijk: "Jij vindt mijn sleutels."'
      },
      {
        type: 'invul',
        vaardigheid: 'Stam + t',
        vraag: 'Zet het werkwoord in de goede vorm.',
        zin: 'De meester ___ altijd meteen op mijn mail.',
        cue: 'werkwoord: antwoorden',
        goed: 'antwoordt',
        hint: 'Haal -en weg van antwoorden. Wat is de stam? En de meester = hij, dus ...',
        uitleg: 'De stam is antwoord (antwoorden zonder -en). De meester = hij, dus stam + t: antwoordt. Vreemd om te zien, maar helemaal goed.'
      },
      {
        type: 'invul',
        vaardigheid: 'Stam op een t',
        vraag: 'Zet het werkwoord in de goede vorm.',
        zin: 'Hij ___ elke ochtend een boterham met pindakaas.',
        cue: 'werkwoord: eten',
        goed: 'eet',
        hint: 'De stam van eten is eet. Eindigt die al op een t?',
        uitleg: 'De stam eet eindigt al op een t, en dan komt er geen tweede t bij: hij eet. Hetzelfde gebeurt bij "hij zit" en "hij wacht".'
      }
    ]
  },

  {
    id: 'sp-kofschip',
    titel: "'t Kofschip: -te of -de",
    soort: 'Werkwoorden',
    emoji: '🚢',
    niveau: 2,
    intro: 'Werkte of werkde? Er is een schip dat je dat altijd vertelt. Stap maar aan boord!',
    regel: {
      stappen: [
        'De verleden tijd maak je van de *stam* + te(n) of de(n).',
        "Eindigt de stam op een letter uit *'t kofschip* (t, k, f, s, ch, p)? Dan schrijf je *-te(n)*: werk → werkte.",
        'Staat die letter er niet in? Dan schrijf je *-de(n)*: bel → belde.',
        'Meer dan één persoon? Dan komt er -n achter: wij werk*ten*, wij bel*den*.'
      ],
      voorbeelden: [
        { woord: 'werken → werkte', uitleg: 'de k zit in \'t kofschip' },
        { woord: 'fietsen → fietste', uitleg: 'de s zit in \'t kofschip' },
        { woord: 'bellen → belde', uitleg: 'de l zit er niet in' },
        { woord: 'tekenen → tekende', uitleg: 'de n zit er niet in' }
      ],
      letop: 'Zit er een *v* of een *z* in het hele werkwoord? Dan hoort het *niet* bij \'t kofschip, ook al eindigt de stam op een f of een s: verhuizen → *verhuisde*, leven → *leefde*.'
    },
    vragen: [
      {
        type: 'invul',
        vaardigheid: "'t Kofschip",
        vraag: 'Zet het werkwoord in de verleden tijd.',
        zin: 'Gisteren ___ mijn vader gewoon thuis.',
        cue: 'werkwoord: werken',
        goed: 'werkte',
        hint: 'De stam is werk. Zit de laatste letter in \'t kofschip?',
        uitleg: 'De stam werk eindigt op een k, en de k zit in \'t kofschip. Dus: werk + te = werkte.'
      },
      {
        type: 'invul',
        vaardigheid: 'Meervoud',
        vraag: 'Zet het werkwoord in de verleden tijd.',
        zin: 'Vorige week ___ wij elke dag op het plein.',
        cue: 'werkwoord: voetballen',
        goed: 'voetbalden',
        hint: 'De stam is voetbal. Zit de l in \'t kofschip? En let op: het gaat over "wij".',
        uitleg: 'De stam voetbal eindigt op een l, en die zit niet in \'t kofschip. Dus -de. Omdat het over "wij" gaat, komt er nog een n achter: voetbalden.'
      },
      {
        type: 'mc',
        vaardigheid: "'t Kofschip",
        vraag: 'Welke zin is goed geschreven?',
        opties: [
          'Wij fietsden rustig naar school.',
          'Wij fietsten rustig naar school.',
          'Wij fietstten rustig naar school.'
        ],
        goed: 1,
        hint: 'De stam van fietsen is fiets. Op welke letter eindigt die?',
        uitleg: 'De stam fiets eindigt op een s, en de s zit in \'t kofschip. Dus fiets + ten = fietsten. Je hoort maar één t, maar de stam heeft er al een en de uitgang -ten brengt er nog een mee.'
      },
      {
        type: 'sorteer',
        vaardigheid: "'t Kofschip",
        vraag: 'Krijgt dit werkwoord in de verleden tijd -te of -de?',
        categorieen: ['-te / -ten', '-de / -den'],
        items: ['hopen', 'bellen', 'blaffen', 'roeien', 'lachen', 'tekenen'],
        goed: [0, 1, 0, 1, 0, 1],
        hint: 'Maak eerst de stam (haal -en weg) en kijk dan naar de laatste klank: zit hij in t-k-f-s-ch-p?',
        uitleg: 'hoopte (p), blafte (f) en lachte (ch) eindigen op een kofschip-letter, dus -te. belde (l), roeide (i) en tekende (n) niet, dus -de.'
      },
      {
        type: 'invul',
        vaardigheid: 'Werkwoord met een z',
        vraag: 'Zet het werkwoord in de verleden tijd.',
        zin: 'Toen ik klein was, ___ wij bijna elk jaar.',
        cue: 'werkwoord: verhuizen',
        goed: 'verhuisden',
        hint: 'De stam is verhuis, maar in het hele werkwoord staat een z. Wat zei ik ook alweer over de v en de z?',
        uitleg: 'De stam is verhuis, maar je kijkt naar de z van verhuizen. Die zit niet in \'t kofschip, dus -de. Over "wij" gaat het ook nog, dus: verhuisden.'
      },
      {
        type: 'mc',
        vaardigheid: 'Werkwoord met een v',
        vraag: 'Hoe schrijf je de verleden tijd van "leven"?',
        opties: ['hij leefte', 'hij leefde', 'hij levde'],
        goed: 1,
        hint: 'De stam wordt leef, maar in leven hoor je een v. En de v hoort niet bij \'t kofschip.',
        uitleg: 'De stam schrijf je met een f (leef), maar voor de uitgang kijk je naar de v van leven. Die zit niet in \'t kofschip, dus: leefde. Zo gaat het ook bij verhuizen → verhuisde.'
      }
    ]
  },

  {
    id: 'sp-voltooid-deelwoord',
    titel: 'Voltooid deelwoord: -d of -t',
    soort: 'Werkwoorden',
    emoji: '✅',
    niveau: 3,
    intro: 'Is het nou "er is iets gebeurd" of "gebeurt"? Deze regel maakt er voorgoed een eind aan.',
    regel: {
      stappen: [
        'Een voltooid deelwoord hoort bij *hebben*, *zijn* of *worden*: ik heb ..., het is ....',
        'Je maakt het meestal zo: *ge + stam + d of t*.',
        "Gebruik weer 't kofschip: eindigt de stam op t, k, f, s, ch of p, dan *-t* (gewerkt). Anders *-d* (gehoord).",
        'Eindigt de stam zelf al op een d of een t? Dan komt er geen tweede bij: antwoord → *geantwoord*.'
      ],
      voorbeelden: [
        { woord: 'ik heb gewerkt', uitleg: 'stam werk, de k zit in \'t kofschip' },
        { woord: 'ik heb gehoord', uitleg: 'stam hoor, geen kofschip-letter' },
        { woord: 'het is gebeurd', uitleg: 'stam gebeur, dus met een d' },
        { woord: 'er gebeurt iets', uitleg: 'geen hebben of zijn: gewoon stam + t' }
      ],
      letop: 'Twijfel je tussen d en t? Zet het woord dan vóór een naamwoord en luister: de *verhuisde* buurman, de *gefietste* kilometers. Wat je dan hoort, schrijf je op.'
    },
    vragen: [
      {
        type: 'invul',
        vaardigheid: 'Voltooid deelwoord',
        vraag: 'Vul het voltooid deelwoord in.',
        zin: 'Wat is er gisteren op het schoolplein ___?',
        cue: 'werkwoord: gebeuren',
        goed: 'gebeurd',
        hint: 'Er staat "is" in de zin, dus het is een voltooid deelwoord. De stam is gebeur — zit de r in \'t kofschip?',
        uitleg: 'Door het woordje "is" weet je dat het een voltooid deelwoord is. De stam gebeur eindigt op een r en die zit niet in \'t kofschip, dus komt er een d: gebeurd.'
      },
      {
        type: 'mc',
        vaardigheid: 'Deelwoord of niet?',
        vraag: 'Welke zin is goed geschreven?',
        opties: [
          'Er gebeurd nooit iets in dit dorp.',
          'Er gebeurt nooit iets in dit dorp.',
          'Er gebeurdt nooit iets in dit dorp.'
        ],
        goed: 1,
        hint: 'Zoek naar hebben, zijn of worden in de zin. Staat dat er niet, dan is het geen voltooid deelwoord.',
        uitleg: 'Er staat geen hebben of zijn bij, dus dit is gewoon de tegenwoordige tijd: stam gebeur + t = gebeurt. Vergelijk: "Er is iets gebeurd" — daar hoort wél een d.'
      },
      {
        type: 'invul',
        vaardigheid: "'t Kofschip",
        vraag: 'Vul het voltooid deelwoord in.',
        zin: 'Ik heb de hele middag aan mijn werkstuk ___.',
        cue: 'werkwoord: werken',
        goed: 'gewerkt',
        hint: 'ge + stam + ? De stam is werk en de k zit in \'t kofschip.',
        uitleg: 'ge + werk + t = gewerkt, want de k zit in \'t kofschip. Je kunt het ook horen: de gewerkte uren.'
      },
      {
        type: 'invul',
        vaardigheid: 'Stam op een d',
        vraag: 'Vul het voltooid deelwoord in.',
        zin: 'De meester heeft netjes ___ op mijn mail.',
        cue: 'werkwoord: antwoorden',
        goed: 'geantwoord',
        hint: 'De stam is antwoord. Die eindigt al op een d — komt er dan nog een tweede bij?',
        uitleg: 'De stam antwoord eindigt al op een d, en dan komt er geen tweede bij: geantwoord. Let op het verschil met de tegenwoordige tijd: "hij antwoordt".'
      },
      {
        type: 'sorteer',
        vaardigheid: 'Voltooid deelwoord',
        vraag: 'Eindigt het voltooid deelwoord op een d of op een t?',
        categorieen: ['... op een d', '... op een t'],
        items: ['horen', 'fietsen', 'leren', 'maken', 'bouwen', 'stoppen'],
        goed: [0, 1, 0, 1, 0, 1],
        hint: 'Maak de stam en kijk of de laatste letter in \'t kofschip zit (t, k, f, s, ch, p).',
        uitleg: 'gehoord, geleerd en gebouwd krijgen een d, want r, r en w zitten niet in \'t kofschip. gefietst, gemaakt en gestopt krijgen een t, want s, k en p wel.'
      },
      {
        type: 'mc',
        vaardigheid: 'Voltooid deelwoord',
        vraag: 'Welke zin is goed geschreven?',
        opties: [
          'De brief is gisteren verstuurt.',
          'De brief is gisteren verstuurd.',
          'De brief is gisteren versturd.'
        ],
        goed: 1,
        hint: 'De stam is verstuur. Zit de r in \'t kofschip? En luister eens naar "de verstuurde brief".',
        uitleg: 'De stam verstuur eindigt op een r, dus krijgt het deelwoord een d: verstuurd. In "de verstuurde brief" hoor je die d ook.'
      }
    ]
  },

  {
    id: 'sp-woordstukjes',
    titel: 'Woorden die je anders schrijft dan je hoort',
    soort: 'Woorden',
    emoji: '🔤',
    niveau: 2,
    intro: 'Je hoort "va-kan-sie" en toch schrijf je vakantie. Bij deze woorden moet je je oren niet geloven.',
    regel: {
      stappen: [
        'Hoor je aan het eind *sie*? Dan schrijf je meestal *-tie*: politie, vakantie, informatie.',
        'Hoor je *ies*? Dan schrijf je vaak *-isch*: logisch, typisch, fantastisch.',
        'Hoor je *luk*? Dan schrijf je *-lijk*: moeilijk, natuurlijk, eindelijk.',
        'Hoor je *ug*? Dan schrijf je *-ig*: rustig, grappig, geweldig.',
        'Een *c* kan klinken als een k (contact) of als een s (cent).'
      ],
      voorbeelden: [
        { woord: 'vakantie', uitleg: 'je hoort va-kan-sie' },
        { woord: 'logisch', uitleg: 'je hoort lo-gies' },
        { woord: 'moeilijk', uitleg: 'je hoort moei-luk' },
        { woord: 'rustig', uitleg: 'je hoort rus-tug' }
      ],
      letop: 'Deze woorden leer je vooral door ze *vaak te zien*. Kom je zo\'n woord tegen in een boek, kijk dan even goed naar het staartje.'
    },
    vragen: [
      {
        type: 'invul',
        vaardigheid: 'Woorden op -tie',
        vraag: 'Schrijf het woord goed op.',
        zin: 'In de zomer hebben we zes weken ___.',
        cue: 'je hoort: va-kan-sie',
        goed: 'vakantie',
        hint: 'Je hoort "sie" aan het eind, maar zo schrijf je het niet.',
        uitleg: 'Je hoort "sie", maar je schrijft -tie: vakantie. Net als politie en informatie.'
      },
      {
        type: 'invul',
        vaardigheid: 'Woorden op -ig',
        vraag: 'Schrijf het woord goed op.',
        zin: 'Wat een ___ idee van jou!',
        cue: 'je hoort: ge-wel-dug',
        goed: 'geweldig',
        hint: 'Je hoort "ug" aan het eind. Met welke twee letters schrijf je dat?',
        uitleg: 'Je hoort "ug", maar je schrijft -ig: geweldig. Zo gaat het ook bij rustig en grappig.'
      },
      {
        type: 'mc',
        vaardigheid: 'Woorden op -lijk',
        vraag: 'Welk woord is goed geschreven?',
        opties: ['moeilik', 'moeiluk', 'moeilijk'],
        goed: 2,
        hint: 'Je hoort "luk", maar in dit staartje zit een lange ij.',
        uitleg: 'Je hoort "moei-luk", maar je schrijft -lijk: moeilijk. Net als natuurlijk, eindelijk en gezellig... nee, die laatste is met -ig!'
      },
      {
        type: 'invul',
        vaardigheid: 'Woorden op -isch',
        vraag: 'Schrijf het woord goed op.',
        zin: 'Dat klinkt heel ___.',
        cue: 'je hoort: lo-gies',
        goed: 'logisch',
        hint: 'Je hoort "ies", maar er staat een stille ch in.',
        uitleg: 'Je hoort "ies", maar je schrijft -isch: logisch. De ch hoor je niet, maar hij hoort er wel bij. Net als bij typisch en fantastisch.'
      },
      {
        type: 'sorteer',
        vaardigheid: 'De letter c',
        vraag: 'Klinkt de c in dit woord als een s of als een k?',
        categorieen: ['Je hoort een s', 'Je hoort een k'],
        items: ['cent', 'cadeau', 'december', 'contact', 'centrum', 'concert'],
        goed: [0, 1, 0, 1, 0, 1],
        hint: 'Zeg de woorden hardop. Voor een e of een i klinkt de c meestal als een s.',
        uitleg: 'Voor een e of een i klinkt de c als een s: cent, december, centrum. Voor een a, o of u klinkt hij als een k: cadeau, contact, concert.'
      },
      {
        type: 'mc',
        vaardigheid: 'Woorden op -isch',
        vraag: 'Welk woord is goed geschreven?',
        opties: ['fantasties', 'fantastiesch', 'fantastisch'],
        goed: 2,
        hint: 'Denk aan logisch en typisch: hoe eindigen die?',
        uitleg: 'Je hoort "fan-tas-ties", maar het staartje is -isch: fantastisch. De i van "ies" wordt gewoon een i, en daarachter komt sch.'
      }
    ]
  },

  {
    id: 'sp-samenstellingen',
    titel: 'Samenstellingen, trema en koppelteken',
    soort: 'Woorden',
    emoji: '🔗',
    niveau: 3,
    intro: 'Pannenkoek, stationsplein, zee-egel: bij plakwoorden komt er soms iets tussen. Ik leg uit wanneer.',
    regel: {
      stappen: [
        'Een samenstelling is één woord: voetbal, boekenkast, tandenborstel.',
        'Kun je van het eerste woord *alleen* een meervoud op -en maken? Dan komt er een *tussen-n*: pan → pannen → *pannenkoek*.',
        'Hoor je duidelijk een *s* tussen de twee delen? Dan schrijf je die: *stationsplein*, *verjaardagsfeest*.',
        'Botsen er twee klinkers in één woord? Dan komt er een *trema*: zeeën, tweeëntwintig.',
        'Botsen ze in een *samenstelling* (twee losse woorden)? Dan komt er een *koppelteken*: zee-egel, na-apen.'
      ],
      voorbeelden: [
        { woord: 'pannenkoek', uitleg: 'pan heeft alleen het meervoud pannen' },
        { woord: 'groentesoep', uitleg: 'groente kan ook groentes zijn, dus geen n' },
        { woord: 'stationsplein', uitleg: 'je hoort de tussen-s' },
        { woord: 'zee-egel', uitleg: 'zee + egel: twee woorden, dus een streepje' }
      ],
      letop: 'De zon en de maan zijn er maar één keer, en daarom zijn ze een uitzondering: je schrijft *zonnebloem* en *maneschijn*, zonder tussen-n.'
    },
    vragen: [
      {
        type: 'invul',
        vaardigheid: 'Tussen-n',
        vraag: 'Plak de twee woorden aan elkaar.',
        zin: 'Op zaterdag bak ik een grote ___.',
        cue: 'pan + koek',
        goed: 'pannenkoek',
        hint: 'Wat is het meervoud van pan? Kan het ook op -s?',
        uitleg: 'Het meervoud van pan is alleen pannen (niet "pans"), en dan komt er een tussen-n: pannenkoek.'
      },
      {
        type: 'mc',
        vaardigheid: 'Tussen-n',
        vraag: 'Welk woord is goed geschreven?',
        opties: ['boekekast', 'boekenkast', 'boekskast'],
        goed: 1,
        hint: 'Meer dan één boek zijn ... ?',
        uitleg: 'Het meervoud van boek is alleen boeken, dus komt er een tussen-n: boekenkast.'
      },
      {
        type: 'invul',
        vaardigheid: 'Tussen-s',
        vraag: 'Plak de twee woorden aan elkaar.',
        zin: 'We spreken af op het ___.',
        cue: 'station + plein',
        goed: 'stationsplein',
        hint: 'Zeg het hardop. Hoor je iets tussen station en plein?',
        uitleg: 'Je hoort duidelijk een s tussen de twee delen, en die schrijf je dan ook op: stationsplein. Net als bij verjaardagsfeest en dorpsstraat.'
      },
      {
        type: 'mc',
        vaardigheid: 'Trema',
        vraag: 'Hoe schrijf je het getal 22 voluit?',
        opties: ['tweeentwintig', 'tweeëntwintig', 'twee-en-twintig'],
        goed: 1,
        hint: 'Er botsen drie e\'s. Dit is één woord, geen samenstelling van losse woorden.',
        uitleg: 'Getallen schrijf je aan elkaar, en bij botsende klinkers in één woord komt er een trema op de tweede: tweeëntwintig.'
      },
      {
        type: 'mc',
        vaardigheid: 'Koppelteken',
        vraag: 'Welk woord is goed geschreven?',
        opties: ['zeeegel', 'zeeëgel', 'zee-egel'],
        goed: 2,
        hint: 'Dit zijn twee losse woorden die je aan elkaar plakt: zee en egel.',
        uitleg: 'Bij een samenstelling van twee woorden gebruik je een koppelteken en géén trema: zee-egel. Net als na-apen en auto-ongeluk.'
      },
      {
        type: 'sorteer',
        vaardigheid: 'Tussen-n',
        vraag: 'Komt er een tussen-n als je deze woorden aan elkaar plakt?',
        categorieen: ['Met tussen-n', 'Zonder tussen-n'],
        items: ['hond + hok', 'groente + soep', 'krant + wijk', 'sneeuw + bal', 'pan + koek', 'zon + bloem'],
        goed: [0, 1, 0, 1, 0, 1],
        hint: 'Maak van het eerste woord het meervoud. Kan dat alleen op -en, dan komt er een n.',
        uitleg: 'hondenhok, krantenwijk en pannenkoek krijgen een n, want honden, kranten en pannen kunnen alleen zo. groentesoep niet (het kan ook groentes zijn), sneeuwbal niet (sneeuw heeft geen meervoud) en zonnebloem is de bekende uitzondering: er is maar één zon.'
      }
    ]
  }
];

// Zodat de app dit bestand ook kan gebruiken als er ooit een build-stap komt.
if (typeof module !== 'undefined') { module.exports = { SPELLINGOEFENINGEN }; }

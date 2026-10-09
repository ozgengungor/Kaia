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
        'Hoor je een *korte* klank in de eerste klankgroep? Dan verdubbel je de medeklinker: bal → *ballen*.',
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
        hint: 'Hak het in stukjes: bal-len. Wat hoor je in het eerste stukje: een korte of een lange a?',
        uitleg: 'Je hakt het woord in bal-len. In de eerste klankgroep hoor je een korte a, dus verdubbel je de l: ballen.'
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
        hint: 'les-sen: hoor je in het eerste stukje een korte e?',
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
      },
      {
        type: 'invul',
        vaardigheid: 'Verenkelen',
        vraag: 'Vul het goede woord in.',
        zin: 'Op het schip zaten drie ___.',
        cue: 'meer dan één piraat',
        goed: 'piraten',
        hint: 'Hak het in stukjes: pi-ra-ten. Hoor je aan het eind van het tweede stukje een lange aa?',
        uitleg: 'Je hakt het in pi-ra-ten. De klankgroep ra eindigt op een lange aa, en dan schrijf je maar één a: piraten.'
      },
      {
        type: 'mc',
        vaardigheid: 'Verdubbelen',
        vraag: 'Welke zin is goed geschreven?',
        opties: [
          'Ik kan me die dag nog goed herineren.',
          'Ik kan me die dag nog goed herinneren.',
          'Ik kan me die dag nog goed herrinneren.'
        ],
        goed: 1,
        hint: 'Hak het woord in stukjes: her-in-ne-ren. Welke klank hoor je in het tweede stukje?',
        uitleg: 'Je hoort her-in-ne-ren. De i is kort, dus de n wordt verdubbeld. Her- is een voorvoegsel, net als in herkennen en herhalen. Daar komt nooit een extra r achter: herinneren.'
      }
    ]
  },

  {
    id: 'sp-tegenwoordige-tijd',
    titel: 'Werkwoorden in de tegenwoordige tijd',
    soort: 'Werkwoorden',
    emoji: '⌨️',
    niveau: 2,
    intro: 'Ik word, hij wordt, word jij? Het klinkt steeds hetzelfde, maar je schrijft het niet altijd hetzelfde. Kijk mee!',
    regel: {
      stappen: [
        'Zoek eerst de *stam*: dat is de ik-vorm. worden → ik *word*, eten → ik *eet*.',
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
        hint: 'Bij "ik" schrijf je alleen de stam. Komt daar nog een letter achter?',
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
        uitleg: 'Mijn zusje = zij, dus stam + t: word + t = wordt. Je hoort alleen een t, maar je schrijft dt: de d van de stam en de t erachter.'
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
        zin: '___ jij deze film ook zo spannend?',
        cue: 'werkwoord: vinden',
        goed: 'vind',
        hint: 'Jij staat achter het werkwoord. Wat gebeurt er dan met de t?',
        uitleg: 'De stam is vind. Omdat jij erachter staat, valt de t weg: "Vind jij deze film ook zo spannend?" Vergelijk: "Jij vindt deze film spannend."'
      },
      {
        type: 'invul',
        vaardigheid: 'Stam + t',
        vraag: 'Zet het werkwoord in de goede vorm.',
        zin: 'De meester ___ altijd meteen op mijn mail.',
        cue: 'werkwoord: antwoorden',
        goed: 'antwoordt',
        hint: 'Wat is de stam van antwoorden? Denk aan de ik-vorm. En de meester = hij, dus ...',
        uitleg: 'De stam is antwoord (ik antwoord). De meester = hij, dus stam + t: antwoordt. Vreemd om te zien, maar helemaal goed.'
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
      },
      {
        type: 'invul',
        vaardigheid: 'Je of je moeder?',
        vraag: 'Zet het werkwoord in de goede vorm.',
        zin: '___ je moeder het goed dat je blijft eten?',
        cue: 'werkwoord: vinden',
        goed: 'vindt',
        hint: 'Wie vindt hier iets: jij, of je moeder? Vervang "je moeder" eens door "zij".',
        uitleg: 'Het onderwerp is "je moeder", en dat kun je vervangen door zij. Dus stam + t: vindt. De t valt alleen weg als jij of je zelf het onderwerp is én achter het werkwoord staat: "Vind je het goed?"'
      },
      {
        type: 'invul',
        vaardigheid: 'Stam + t',
        vraag: 'Zet het werkwoord in de goede vorm.',
        zin: 'Mijn opa ___ heel veel van zijn tuin.',
        cue: 'werkwoord: houden',
        goed: 'houdt',
        hint: 'De stam van houden is houd. Mijn opa = hij, dus ...',
        uitleg: 'De stam is houd. Mijn opa = hij, dus stam + t: houdt. Je hoort alleen een t, maar de d van de stam blijft staan.'
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
      letop: 'Eindigt de stam op een f of een s, en staat daar in het hele werkwoord een *v* of een *z*? Dan hoort hij *niet* bij \'t kofschip: leven → *leefde*, verhuizen → *verhuisde*.'
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
        uitleg: 'De stam fiets eindigt op een s, en de s zit in \'t kofschip. Dus fiets + ten = fietsten.'
      },
      {
        type: 'sorteer',
        vaardigheid: "'t Kofschip",
        vraag: 'Krijgt dit werkwoord in de verleden tijd -te of -de?',
        categorieen: ['-te / -ten', '-de / -den'],
        items: ['hopen', 'bellen', 'blaffen', 'roeien', 'lachen', 'tekenen'],
        goed: [0, 1, 0, 1, 0, 1],
        hint: 'Maak eerst de stam (de ik-vorm) en kijk dan naar de laatste klank: zit hij in t-k-f-s-ch-p?',
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
      },
      {
        type: 'invul',
        vaardigheid: "'t Kofschip",
        vraag: 'Zet het werkwoord in de verleden tijd.',
        zin: 'Het publiek ___ heel hard na het optreden.',
        cue: 'werkwoord: juichen',
        goed: 'juichte',
        hint: 'De stam is juich. Die eindigt op ch, en de ch zit in \'t kofschip.',
        uitleg: 'De stam juich eindigt op ch, en de ch zit in \'t kofschip. Dus: juich + te = juichte. "Het publiek" is één groep, dus er komt geen n achter.'
      },
      {
        type: 'mc',
        vaardigheid: 'Werkwoord met een z',
        vraag: 'Hoe schrijf je de verleden tijd van "reizen"?',
        opties: ['wij reisten', 'wij reizden', 'wij reisden'],
        goed: 2,
        hint: 'De stam is reis, maar in reizen hoor je een z. Zit de z in \'t kofschip?',
        uitleg: 'Je kijkt naar de z van reizen, en die zit niet in \'t kofschip. Dus -den. De stam schrijf je wel met een s: wij reisden.'
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
        'Begint het werkwoord met be-, ge-, her-, ont- of ver-? Dan komt er geen ge- voor: *verhuisd*, *beloofd*, *ontdekt*.',
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
      },
      {
        type: 'invul',
        vaardigheid: 'Werkwoord met een z',
        vraag: 'Vul het voltooid deelwoord in.',
        zin: 'Wij zijn vorig jaar naar een ander dorp ___.',
        cue: 'werkwoord: verhuizen',
        goed: 'verhuisd',
        hint: 'De stam is verhuis, maar kijk naar de z van verhuizen. Zit die in \'t kofschip?',
        uitleg: 'Bij verhuizen kijk je naar de z, en die zit niet in \'t kofschip. Dus een d: verhuisd. Je hoort het ook in "de verhuisde buren". En let op: een werkwoord dat met ver- begint, krijgt geen ge- ervoor.'
      },
      {
        type: 'mc',
        vaardigheid: 'Werkwoord met een v',
        vraag: 'Welke zin is goed geschreven?',
        opties: [
          'Mijn oma heeft dat vroeger zelf beleeft.',
          'Mijn oma heeft dat vroeger zelf beleefd.',
          'Mijn oma heeft dat vroeger zelf beleevd.'
        ],
        goed: 1,
        hint: 'Het hele werkwoord is beleven. Welke letter hoor je daar vóór -en?',
        uitleg: 'In beleven hoor je een v, en die zit niet in \'t kofschip. Dus een d: beleefd. De v zelf wordt een f, net als bij leefde.'
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
        'Hoor je aan het eind een zachte *luk*, zonder klemtoon? Dan schrijf je *-lijk*: moeilijk, natuurlijk, eindelijk.',
        'Hoor je aan het eind een zachte *ug*, zonder klemtoon? Dan schrijf je *-ig*: rustig, grappig, geweldig.',
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
        uitleg: 'Je hoort "moei-luk", maar je schrijft -lijk: moeilijk. Net als natuurlijk en eindelijk.'
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
        items: ['cent', 'cadeau', 'december', 'contact', 'centrum', 'camera'],
        goed: [0, 1, 0, 1, 0, 1],
        hint: 'Zeg de woorden hardop. Voor een e of een i klinkt de c meestal als een s.',
        uitleg: 'Voor een e of een i klinkt de c als een s: cent, december, centrum. Voor een a, o of u klinkt hij als een k: cadeau, contact, camera.'
      },
      {
        type: 'mc',
        vaardigheid: 'Woorden op -isch',
        vraag: 'Welk woord is goed geschreven?',
        opties: ['fantasties', 'fantastiesch', 'fantastisch'],
        goed: 2,
        hint: 'Denk aan logisch en typisch: hoe eindigen die?',
        uitleg: 'Je hoort "fan-tas-ties", maar het staartje is -isch: fantastisch. De i van "ies" wordt gewoon een i, en daarachter komt sch.'
      },
      {
        type: 'invul',
        vaardigheid: 'Woorden op -tie',
        vraag: 'Schrijf het woord goed op.',
        zin: 'In deze folder staat alle ___ over het schoolkamp.',
        cue: 'je hoort: in-for-ma-sie',
        goed: 'informatie',
        hint: 'Je hoort "sie" aan het eind. Hoe schrijf je dat staartje?',
        uitleg: 'Je hoort "sie", maar je schrijft -tie: informatie. Net als vakantie, politie en traditie.'
      },
      {
        type: 'mc',
        vaardigheid: 'Woorden op -lijk',
        vraag: 'Welk woord is goed geschreven?',
        opties: ['eigelijk', 'eigenluk', 'eigenlijk'],
        goed: 2,
        hint: 'Het woord komt van "eigen". En het staartje dat klinkt als "luk" ken je al.',
        uitleg: 'Eigenlijk is eigen + lijk. De n van eigen hoor je bijna niet, maar hij hoort er wel bij. En "luk" schrijf je als -lijk.'
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
        'Hoor je tussen de twee delen een *uh*? Kijk dan naar het meervoud van het eerste woord. Kan dat *alleen* op -en, dan schrijf je *-en*: pan → pannen → *pannenkoek*. Kan het ook op -s, dan alleen *-e*: *groentesoep*.',
        'Hoor je duidelijk een *s* tussen de twee delen? Dan schrijf je die: *stationsplein*, *verjaardagsfeest*.',
        'Botsen er twee klinkers in één woord, zodat je het verkeerd zou lezen (zeeen)? Dan komt er een *trema*: zeeën, tweeëntwintig.',
        'Botsen ze zo in een *samenstelling* van twee losse woorden (zeeegel)? Dan komt er een *koppelteken*: zee-egel, na-apen.'
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
        uitleg: 'Je hoort duidelijk een s tussen de twee delen, en die schrijf je dan ook op: stationsplein. Net als bij verjaardagsfeest en dorpsplein.'
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
        hint: 'Hoor je een "uh" tussen de twee delen? Maak dan van het eerste woord het meervoud. Kan dat alleen op -en, dan komt er een n.',
        uitleg: 'hondenhok, krantenwijk en pannenkoek krijgen een n, want honden, kranten en pannen kunnen alleen zo. groentesoep niet (het kan ook groentes zijn), sneeuwbal niet (je hoort tussen sneeuw en bal geen "uh", dus er komt niets tussen) en zonnebloem is de bekende uitzondering: er is maar één zon.'
      },
      {
        type: 'invul',
        vaardigheid: 'Tussen-n',
        vraag: 'Plak de twee woorden aan elkaar.',
        zin: 'Mijn nieuwe ___ staat in de badkamer.',
        cue: 'tand + borstel',
        goed: 'tandenborstel',
        hint: 'Wat is het meervoud van tand? Kan het ook op -s?',
        uitleg: 'Het meervoud van tand is alleen tanden, dus komt er een tussen-n: tandenborstel.'
      },
      {
        type: 'mc',
        vaardigheid: 'Trema',
        vraag: 'Welk woord is goed geschreven?',
        opties: ['ideeen', 'ideeën', 'idee-en'],
        goed: 1,
        hint: 'Dit is één woord: het meervoud van idee. Wat doe je als klinkers botsen in één woord?',
        uitleg: 'Ideeën is het meervoud van idee: één woord, geen samenstelling. Botsende klinkers in één woord krijgen een trema: ideeën. Net als zeeën.'
      }
    ]
  },
  {
    id: 'sp-verleden-tijd-dubbel',
    titel: 'Verleden tijd met tt of dd',
    soort: 'Werkwoorden',
    emoji: '⏪',
    niveau: 3,
    intro: 'Hij antwoordde, zij praatte, wij wachtten. Dat ziet er gek uit, maar het klopt precies. Kijk maar.',
    regel: {
      stappen: [
        'Bij gewone (regelmatige) werkwoorden is de verleden tijd altijd *stam + te(n)* of *stam + de(n)*. Dat blijft zo, ook als de stam zelf al op een t of een d eindigt.',
        'Eindigt de stam op een *t*? Dan krijg je *tt*: praat + te = *praatte*.',
        'Eindigt de stam op een *d*? Dan krijg je *dd*: antwoord + de = *antwoordde*.',
        'Meer dan één persoon? Dan komt er nog een n achter: wij *praatten*, wij *antwoordden*.'
      ],
      voorbeelden: [
        { woord: 'praten → praatte', uitleg: 'stam praat + te' },
        { woord: 'wachten → wachtten', uitleg: 'stam wacht + ten, want het gaat over wij' },
        { woord: 'antwoorden → antwoordde', uitleg: 'stam antwoord + de' },
        { woord: 'landen → landde', uitleg: 'stam land + de' }
      ],
      letop: 'Je hoort geen verschil tussen "wij wachten" (nu) en "wij wachtten" (toen). Zoek daarom naar woorden als *gisteren*, *vorige week* of *toen*: die vertellen je dat het verleden tijd is.'
    },
    vragen: [
      {
        type: 'invul',
        vaardigheid: 'Stam op een t',
        vraag: 'Zet het werkwoord in de verleden tijd.',
        zin: 'Gisteren ___ de juf heel lang met mijn moeder.',
        cue: 'werkwoord: praten',
        goed: 'praatte',
        hint: 'De stam is praat. Daar komt -te achter. Hoeveel t\'s zie je dan?',
        uitleg: 'De stam is praat, en de t zit in \'t kofschip. Dus praat + te = praatte, met twee t\'s. Je hoort er maar één, maar ze horen er allebei bij.'
      },
      {
        type: 'invul',
        vaardigheid: 'Stam op een d',
        vraag: 'Zet het werkwoord in de verleden tijd.',
        zin: 'De meester ___ gisteren pas na een uur op mijn vraag.',
        cue: 'werkwoord: antwoorden',
        goed: 'antwoordde',
        hint: 'De stam is antwoord. De d zit niet in \'t kofschip, dus er komt -de achter.',
        uitleg: 'antwoord + de = antwoordde, met twee d\'s. De eerste d hoort bij de stam, de tweede bij de uitgang -de.'
      },
      {
        type: 'mc',
        vaardigheid: 'Nu of toen?',
        vraag: 'Welke zin is goed geschreven?',
        opties: [
          'Vorige week wachten wij een uur op de bus.',
          'Vorige week wachtten wij een uur op de bus.',
          'Vorige week wachtden wij een uur op de bus.'
        ],
        goed: 1,
        hint: '"Vorige week" vertelt je dat het al gebeurd is. De stam is wacht, en het gaat over wij.',
        uitleg: 'wacht + ten = wachtten. "Wij wachten" is de tegenwoordige tijd. Door "vorige week" weet je dat het verleden tijd moet zijn, en dan komt er een extra t bij.'
      },
      {
        type: 'invul',
        vaardigheid: 'Stam op een d',
        vraag: 'Zet het werkwoord in de verleden tijd.',
        zin: 'Het vliegtuig ___ gisteravond veilig op het vliegveld.',
        cue: 'werkwoord: landen',
        goed: 'landde',
        hint: 'De stam is land. Stam + de: wat krijg je dan?',
        uitleg: 'land + de = landde. De eerste d is van de stam land, de tweede van de uitgang -de.'
      },
      {
        type: 'sorteer',
        vaardigheid: 'Enkel of dubbel',
        vraag: 'Krijgt de verleden tijd van dit werkwoord één of twee keer een t of d?',
        categorieen: ['Eén keer', 'Dubbel: tt of dd'],
        items: ['werken', 'praten', 'bellen', 'wachten', 'spelen', 'antwoorden'],
        goed: [0, 1, 0, 1, 0, 1],
        hint: 'Maak de stam. Eindigt die zelf al op een t of een d? Dan komt er een tweede bij.',
        uitleg: 'werkte, belde en speelde hebben een stam die niet op een t of d eindigt: één keer dus. praatte, wachtte en antwoordde hebben een stam op een t of d, en daar komt -te of -de nog achter: dubbel.'
      },
      {
        type: 'mc',
        vaardigheid: 'Stam op een t',
        vraag: 'Hoe schrijf je de verleden tijd van "zetten"?',
        opties: ['Hij zete de tas neer.', 'Hij zette de tas neer.', 'Hij zettte de tas neer.'],
        goed: 1,
        hint: 'De stam van zetten is zet, met één t. Daar komt -te achter.',
        uitleg: 'De stam is zet: een stam eindigt nooit op twee dezelfde medeklinkers. zet + te = zette. Drie t\'s achter elkaar komt dus nooit voor.'
      },
      {
        type: 'invul',
        vaardigheid: 'Meer dan één persoon',
        vraag: 'Zet het werkwoord in de verleden tijd.',
        zin: 'De kinderen ___ zich gisteren netjes bij de directeur.',
        cue: 'werkwoord: melden',
        goed: 'meldden',
        hint: 'De stam is meld. En het gaat over "de kinderen", dus meer dan één.',
        uitleg: 'meld + den = meldden. De eerste d is van de stam, en daarna komt -den omdat het over meer kinderen gaat.'
      },
      {
        type: 'mc',
        vaardigheid: 'Stam op een t',
        vraag: 'Welke zin is goed geschreven?',
        opties: [
          'Mijn zus feeste het hele weekend.',
          'Mijn zus feestte het hele weekend.',
          'Mijn zus feestde het hele weekend.'
        ],
        goed: 1,
        hint: 'De stam is feest. Op welke letter eindigt die, en zit die in \'t kofschip?',
        uitleg: 'De stam feest eindigt op een t, en die zit in \'t kofschip. Dus feest + te = feestte.'
      }
    ]
  },

  {
    id: 'sp-meervoud',
    titel: "Meervoud: -s of -'s",
    soort: 'Woorden',
    emoji: '👯',
    niveau: 2,
    intro: "Twee tafels, twee auto's, twee cafés. Wanneer komt er nou zo'n komma in de lucht bij? Ik laat het zien.",
    regel: {
      stappen: [
        'Veel woorden krijgen in het meervoud gewoon een *s* erachter: tafel → *tafels*, meisje → *meisjes*.',
        "Eindigt het woord op één klinker die *lang klinkt*: a, i, o, u of y? Dan schrijf je *'s*: auto → *auto's*, baby → *baby's*.",
        'Die apostrof houdt de klank lang. Zonder apostrof zou je de o van auto kort lezen, zoals in "bos".',
        'Eindigt het woord op een *e* die klinkt als "uh" (tante, meisje), of op een *é*? Dan plak je de s er gewoon aan: tante → *tantes*, café → *cafés*.',
        'Staan er aan het eind *meer klinkers samen*, zoals eau of oe? Dan ook gewoon een s: *cadeaus*, *kangoeroes*.'
      ],
      voorbeelden: [
        { woord: "auto → auto's", uitleg: "de o klinkt lang, dus 's" },
        { woord: "baby → baby's", uitleg: "de y klinkt als ie, dus 's" },
        { woord: 'tante → tantes', uitleg: 'na een e komt de s er gewoon aan' },
        { woord: 'café → cafés', uitleg: 'het streepje op de é zegt al hoe het klinkt' }
      ],
      letop: 'De apostrof is er alleen voor de *uitspraak*. Zet hem dus niet waar hij niet nodig is: het is *tafels* en *meisjes*, zonder apostrof.'
    },
    vragen: [
      {
        type: 'invul',
        vaardigheid: "Meervoud met 's",
        vraag: 'Schrijf het meervoud op.',
        zin: 'Op de parkeerplaats staan wel honderd ___.',
        cue: 'meer dan één auto',
        goed: "auto's",
        hint: 'Auto eindigt op een o die lang klinkt. Wat heb je nodig om die klank lang te houden?',
        uitleg: "Auto eindigt op een lange o. Met alleen een s zou je die o kort lezen, dus komt er een apostrof voor de s: auto's."
      },
      {
        type: 'mc',
        vaardigheid: 'Gewoon een s',
        vraag: 'Welk meervoud is goed geschreven?',
        opties: ["tafel's", 'tafels', 'tafelen'],
        goed: 1,
        hint: 'Is hier een apostrof nodig om een klank lang te houden?',
        uitleg: 'Tafel eindigt op een l. Er is geen klinker aan het eind die lang moet blijven, dus de s komt er gewoon aan: tafels.'
      },
      {
        type: 'invul',
        vaardigheid: "Meervoud met 's",
        vraag: 'Schrijf het meervoud op.',
        zin: 'In de kinderkamer liggen twee ___ te slapen.',
        cue: 'meer dan één baby',
        goed: "baby's",
        hint: 'De y aan het eind klinkt als een lange ie.',
        uitleg: "De y van baby klinkt als ie. Na zo'n lange klinker aan het eind schrijf je een apostrof en een s: baby's."
      },
      {
        type: 'mc',
        vaardigheid: 'Woorden op é',
        vraag: 'Welke zin is goed geschreven?',
        opties: [
          "In onze straat zijn drie café's.",
          'In onze straat zijn drie cafés.',
          'In onze straat zijn drie cafees.'
        ],
        goed: 1,
        hint: 'Het streepje op de é vertelt al hoe je de klank uitspreekt.',
        uitleg: 'Door het streepje op de é weet je al hoe het klinkt. Een apostrof is dan niet meer nodig: cafés.'
      },
      {
        type: 'sorteer',
        vaardigheid: "s of 's",
        vraag: 'Hoe schrijf je het meervoud van dit woord?',
        categorieen: ["Met 's", 'Gewoon s'],
        items: ['foto', 'tante', 'opa', 'lepel', 'taxi', 'cadeau'],
        goed: [0, 1, 0, 1, 0, 1],
        hint: 'Kijk naar het eind van het woord. Staat daar één losse a, i, o, u of y? Dan komt er een apostrof.',
        uitleg: "foto's, opa's en taxi's eindigen op één lange klinker, dus met een apostrof. tantes eindigt op een e, lepels op een medeklinker en cadeaus op eau: daar komt de s gewoon aan vast."
      },
      {
        type: 'invul',
        vaardigheid: "Meervoud met 's",
        vraag: 'Schrijf het meervoud op.',
        zin: 'Mijn zus heeft veel ___: turnen, tekenen en gitaar spelen.',
        cue: 'meer dan één hobby',
        goed: "hobby's",
        hint: 'Hobby eindigt net als baby op een y.',
        uitleg: "Hobby eindigt op een y die als ie klinkt. Dus net als bij baby's: hobby's."
      },
      {
        type: 'mc',
        vaardigheid: 'Meer klinkers samen',
        vraag: 'Welk meervoud is goed geschreven?',
        opties: ["cadeau's", 'cadeaus', 'cadeauen'],
        goed: 1,
        hint: 'Aan het eind staan drie klinkers samen: eau. Verandert die klank als er een s achter komt?',
        uitleg: 'De klank eau blijft hetzelfde als er een s achter komt, dus er is geen apostrof nodig: cadeaus. Zo ook: bureaus en niveaus.'
      },
      {
        type: 'invul',
        vaardigheid: 'Meer klinkers samen',
        vraag: 'Schrijf het meervoud op.',
        zin: 'In de dierentuin zagen we drie ___ met een jong in hun buidel.',
        cue: 'meer dan één kangoeroe',
        goed: 'kangoeroes',
        hint: 'Kangoeroe eindigt op oe: twee klinkers samen.',
        uitleg: 'De oe blijft gewoon oe als er een s achter komt, dus zonder apostrof: kangoeroes.'
      }
    ]
  },

  {
    id: 'sp-verkleinwoorden',
    titel: 'Verkleinwoorden: -je, -tje, -pje of -etje',
    soort: 'Woorden',
    emoji: '🤏',
    niveau: 2,
    intro: 'Boom wordt boompje, bal wordt balletje en koning wordt koninkje. Iets klein maken is nog best een hele klus!',
    regel: {
      stappen: [
        'Meestal plak je er gewoon *-je* achter: huis → *huisje*, boek → *boekje*.',
        'Na een *lange klank*, ook als daar nog een l, n, r of w achter staat, komt *-tje*: ei → *eitje*, stoel → *stoeltje*, deur → *deurtje*. Dat geldt ook na -el, -en en -er zonder klemtoon: tafel → *tafeltje*.',
        'Na een *m* komt *-pje*: boom → *boompje*, film → *filmpje*, bezem → *bezempje*. Behalve na een korte klank met klemtoon: kam → *kammetje*.',
        'Na een *korte klank met klemtoon* en dan een l, m, n, r of ng komt *-etje*. De medeklinker wordt dan dubbel: bal → *balletje*, zon → *zonnetje*. Alleen de ng blijft zoals hij is: ring → *ringetje*.',
        'Eindigt het woord op *-ing* zonder klemtoon? Dan wordt het *-inkje*: koning → *koninkje*.'
      ],
      voorbeelden: [
        { woord: 'boek → boekje', uitleg: 'gewoon -je' },
        { woord: 'stoel → stoeltje', uitleg: 'lange oe en dan een l' },
        { woord: 'boom → boompje', uitleg: 'na de m komt -pje' },
        { woord: 'bal → balletje', uitleg: 'korte a en dan een l: -etje en een dubbele l' }
      ],
      letop: 'Eindigt het woord op een a, o of u? Dan wordt die klinker *dubbel*, anders zou je hem kort lezen: auto → *autootje*, oma → *omaatje*, paraplu → *parapluutje*.'
    },
    vragen: [
      {
        type: 'invul',
        vaardigheid: 'Na een m: -pje',
        vraag: 'Maak het woord klein.',
        zin: 'In de tuin staat een ___ met roze bloesem.',
        cue: 'een kleine boom',
        goed: 'boompje',
        hint: 'Boom eindigt op een m. Welk staartje hoort daarbij?',
        uitleg: 'Na een m komt -pje: boompje. Probeer maar eens "boomtje" te zeggen. Dat bekt niet lekker, en daarom is de t een p geworden.'
      },
      {
        type: 'invul',
        vaardigheid: 'Korte klank: -etje',
        vraag: 'Maak het woord klein.',
        zin: 'De goochelaar verstopt een ___ onder de beker.',
        cue: 'een kleine bal',
        goed: 'balletje',
        hint: 'Bal heeft een korte a met een l erachter.',
        uitleg: 'Na een korte klank met een l komt -etje, en de l wordt verdubbeld om de a kort te houden: balletje.'
      },
      {
        type: 'mc',
        vaardigheid: 'Woorden op -ing',
        vraag: 'Welk woord is goed geschreven?',
        opties: ['koningje', 'koninkje', 'koningetje'],
        goed: 1,
        hint: 'Koning eindigt op -ing, en de klemtoon ligt op ko-.',
        uitleg: 'Eindigt een woord op -ing zonder klemtoon, dan wordt dat -inkje: koninkje. Bij ring ligt de klemtoon wél op -ing, en dan is het ringetje.'
      },
      {
        type: 'invul',
        vaardigheid: 'Klinker aan het eind',
        vraag: 'Maak het woord klein.',
        zin: 'Mijn broertje speelt met een rood ___.',
        cue: 'een kleine auto',
        goed: 'autootje',
        hint: 'Auto eindigt op een o. Hoe zorg je dat die lang blijft klinken vóór -tje?',
        uitleg: 'Na een klinker komt -tje. Maar "autotje" zou je met een korte o lezen, dus wordt de o verdubbeld: autootje.'
      },
      {
        type: 'sorteer',
        vaardigheid: '-tje of -pje',
        vraag: 'Welk staartje krijgt dit woord als je het klein maakt?',
        categorieen: ['-tje', '-pje'],
        items: ['stoel', 'raam', 'deur', 'bezem', 'schoen', 'film'],
        goed: [0, 1, 0, 1, 0, 1],
        hint: 'Kijk naar de laatste letter. Is het een m?',
        uitleg: 'stoeltje, deurtje en schoentje: een lange klank met een l, r of n erachter, dus -tje. raampje, bezempje en filmpje eindigen op een m, dus -pje.'
      },
      {
        type: 'mc',
        vaardigheid: 'Lange klank',
        vraag: 'Welk woord is goed geschreven?',
        opties: ['bloemmetje', 'bloemtje', 'bloemetje'],
        goed: 2,
        hint: 'De oe in bloem is een lange klank. Hoeft de m dan verdubbeld te worden?',
        uitleg: 'Een medeklinker verdubbel je alleen na een korte klank. De oe van bloem is lang, dus één m: bloemetje. Bloem is wel een uitzondering: na een lange klank met een m komt normaal -pje, zoals in boompje. Daarom mag bloempje ook.'
      },
      {
        type: 'invul',
        vaardigheid: 'Woorden op -ing',
        vraag: 'Maak het woord klein.',
        zin: 'Om haar hals draagt ze een zilveren ___.',
        cue: 'een kleine ketting',
        goed: 'kettinkje',
        hint: 'Ketting eindigt op -ing zonder klemtoon, net als koning.',
        uitleg: 'De klemtoon ligt op ket-, dus -ing wordt -inkje: kettinkje.'
      },
      {
        type: 'invul',
        vaardigheid: 'Klinker aan het eind',
        vraag: 'Maak het woord klein.',
        zin: 'Het regent zacht, dus ik neem alleen mijn ___ mee.',
        cue: 'een kleine paraplu',
        goed: 'parapluutje',
        hint: 'Paraplu eindigt op een u. Wat gebeurt er met een klinker aan het eind?',
        uitleg: 'Na een klinker komt -tje, en de u wordt verdubbeld om lang te blijven: parapluutje. Net als autootje en omaatje.'
      }
    ]
  },

  {
    id: 'sp-leenwoorden',
    titel: 'Leenwoorden uit het Frans en het Engels',
    soort: 'Woorden',
    emoji: '🎁',
    niveau: 3,
    intro: 'Cadeau, douche, computer: deze woorden hebben we geleend uit een andere taal, en hun spelling hebben ze gewoon meegenomen.',
    regel: {
      stappen: [
        'Hoor je *oo* aan het eind van een Frans woord? Dan schrijf je vaak *eau*: cadeau, bureau, niveau.',
        'Hoor je *sj*? In een Frans woord is dat vaak *ch*: chauffeur, douche, machine.',
        'Hoor je *zj* aan het eind van een Frans woord (-age, -oge)? Dan schrijf je een *g*: garage, horloge, etage. Aan het begin is het vaak een *j*: journaal.',
        'Hoor je *oe*? In een Frans woord is dat vaak *ou*: douche, route, journaal.',
        'Engelse woorden schrijf je op zijn Engels: *computer*, *team*, *weekend*.'
      ],
      voorbeelden: [
        { woord: 'cadeau', uitleg: 'je hoort ka-doo' },
        { woord: 'chauffeur', uitleg: 'je hoort sjo-feur' },
        { woord: 'garage', uitleg: 'je hoort ga-ra-zje' },
        { woord: 'team', uitleg: 'je hoort tiem' }
      ],
      letop: 'Voor deze woorden bestaat geen trucje: het zijn *weetwoorden*. Schrijf een lastig woord drie keer op, dan onthoudt je hand het vanzelf.'
    },
    vragen: [
      {
        type: 'invul',
        vaardigheid: 'Frans: eau',
        vraag: 'Schrijf het woord goed op.',
        zin: 'Voor mijn verjaardag kreeg ik een groot ___.',
        cue: 'je hoort: ka-doo',
        goed: 'cadeau',
        hint: 'De oo aan het eind schrijf je met drie letters.',
        uitleg: 'Cadeau komt uit het Frans. De k-klank is een c en de oo aan het eind schrijf je als eau: cadeau.'
      },
      {
        type: 'mc',
        vaardigheid: 'Frans: ch',
        vraag: 'Welk woord is goed geschreven?',
        opties: ['sjauffeur', 'chauffeur', 'chaufeur'],
        goed: 1,
        hint: 'De sj-klank is in het Frans een ch. En tel de f\'en goed.',
        uitleg: 'Chauffeur: de sj-klank schrijf je als ch, de oo als au en daarna komen er twee f\'en.'
      },
      {
        type: 'invul',
        vaardigheid: 'Frans: ou en ch',
        vraag: 'Schrijf het woord goed op.',
        zin: 'Na het sporten neem ik altijd een warme ___.',
        cue: 'je hoort: doesj',
        goed: 'douche',
        hint: 'De oe is hier ou, en de sj is ch.',
        uitleg: 'Douche is Frans: de oe schrijf je als ou, de sj als ch, en er staat nog een e achter die je nauwelijks hoort: douche.'
      },
      {
        type: 'sorteer',
        vaardigheid: 'Frans of Engels',
        vraag: 'Uit welke taal is dit woord geleend?',
        categorieen: ['Uit het Frans', 'Uit het Engels'],
        items: ['bureau', 'computer', 'garage', 'weekend', 'restaurant', 'team'],
        goed: [0, 1, 0, 1, 0, 1],
        hint: 'Franse woorden herken je vaak aan eau, au, ou, ch of -age. Engelse woorden spreek je op zijn Engels uit.',
        uitleg: 'Bureau (eau), garage (-age) en restaurant (au) komen uit het Frans. Computer, weekend en team zijn Engels.'
      },
      {
        type: 'invul',
        vaardigheid: 'Frans: g',
        vraag: 'Schrijf het woord goed op.',
        zin: 'De auto staat veilig in de ___.',
        cue: 'je hoort: ga-ra-zje',
        goed: 'garage',
        hint: 'De zj-klank schrijf je met één letter, net als in horloge.',
        uitleg: 'De zj-klank aan het eind van een Frans woord schrijf je met een g: garage. Zo ook: etage, horloge en bagage. Aan het begin is het vaak een j, zoals in journaal.'
      },
      {
        type: 'mc',
        vaardigheid: 'Frans: eau',
        vraag: 'Welk woord is goed geschreven?',
        opties: ['nivo', 'niveau', 'nivau'],
        goed: 1,
        hint: 'Denk aan cadeau en bureau.',
        uitleg: 'De oo aan het eind van een Frans woord is vaak eau: niveau, net als cadeau en bureau.'
      },
      {
        type: 'invul',
        vaardigheid: 'Frans: au',
        vraag: 'Schrijf het woord goed op.',
        zin: 'Wij eten vanavond met de hele familie in een ___.',
        cue: 'je hoort: res-to-rant',
        goed: 'restaurant',
        hint: 'In het midden hoor je een o, maar je schrijft twee letters.',
        uitleg: 'Restaurant: de o-klank in het midden schrijf je als au, net als in chauffeur.'
      },
      {
        type: 'mc',
        vaardigheid: 'Engels',
        vraag: 'Welke zin is goed geschreven?',
        opties: [
          'Ons tiem heeft de wedstrijd gewonnen.',
          'Ons team heeft de wedstrijd gewonnen.',
          'Ons teem heeft de wedstrijd gewonnen.'
        ],
        goed: 1,
        hint: 'Dit woord komt uit het Engels, en daar schrijf je de ie-klank vaak als ea.',
        uitleg: 'Team is Engels. De ie-klank schrijf je daar als ea, net als in jeans en speaker.'
      }
    ]
  }
];

// Zodat de app dit bestand ook kan gebruiken als er ooit een build-stap komt.
if (typeof module !== 'undefined') { module.exports = { SPELLINGOEFENINGEN }; }

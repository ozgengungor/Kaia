/*
 * Mochi — spelling (werkwoorden en woorden) en de woordrijen voor technisch lezen.
 *
 * Een plan van 14 dagen (dag 1 = 20 oktober, dag 14 = 2 november) voor de
 * Boom LVS-toetsen van groep 8. Net als de andere databestanden is dit
 * "data-only": de app kent geen enkel woord bij naam.
 *
 *   werkwoorden  14 arrays (één per dag) met elk 6 zinnen. Het kind typt de
 *                werkwoordsvorm in het gat.
 *                { soort, zin: '... ___ ...', cue: 'hele werkwoord',
 *                  goed: 'vorm' | ['vorm', ..], uitleg }
 *                soort: 'tt' tegenwoordige tijd, 'vt' verleden tijd,
 *                'dd' verleden tijd met dubbele d of t, 'vd' voltooid
 *                deelwoord, 'bijv' deelwoord als bijvoeglijk naamwoord,
 *                'engels' Engelse werkwoorden, 'val' de bekende instinkers.
 *                Volgorde: dag 1-2 tt, 3-4 vt, 5 dd, 6-7 vd, 8 herhaling,
 *                9 val, 10 bijv, 11 engels, 12-14 alles door elkaar.
 *   woorden      14 arrays met elk 5 meerkeuzevragen: welk woord is goed?
 *                { soort, zin: '... ___ ...', goed, fout: [2 foute], uitleg }
 *   woordrij     woorden om hardop te lezen (1 minuut), per moeilijkheid:
 *                kort, middel, lang en moeilijk (elk 60 woorden). De app maakt
 *                er per dag zelf een rij van.
 */

const MOCHI_SPELLING = {
  // Per dag 6 werkwoordzinnen. 14 arrays.
  werkwoorden: [
    // Dag 1 — tegenwoordige tijd
    [
      { soort: 'tt', zin: 'Mijn broer ___ elke ochtend om zeven uur wakker, want dan gaat zijn wekker.', cue: 'worden', goed: 'wordt',
        uitleg: 'Elke ochtend en "gaat": tegenwoordige tijd. Het onderwerp is mijn broer, dat is een hij. Dus stam + t: word + t = wordt. Je hoort die t niet, maar je schrijft hem wel.' },
      { soort: 'tt', zin: 'Wat ___ jij op dit moment het leukste vak op school?', cue: 'vinden', goed: 'vind',
        uitleg: 'Op dit moment: tegenwoordige tijd. Jij staat achter het werkwoord, en dan krijgt het geen t. Alleen de stam: vind.' },
      { soort: 'tt', zin: 'Mijn opa ___ elke dag een stukje met de hond, ook als het regent.', cue: 'wandelen', goed: 'wandelt',
        uitleg: '"Regent" staat in de tegenwoordige tijd, dus dit werkwoord ook. Mijn opa is een hij: stam + t = wandelt.' },
      { soort: 'tt', zin: '___ je vader ons morgen naar de training?', cue: 'rijden', goed: 'rijdt',
        uitleg: 'Let op: je vader is niet jij, maar hij. Probeer maar: rijdt hij? Dus stam + t: rijd + t = rijdt. Alleen bij jij zelf achter het werkwoord valt de t weg.' },
      { soort: 'tt', zin: 'Hoe oud ___ jij volgend jaar?', cue: 'worden', goed: 'word',
        uitleg: 'Volgend jaar: tegenwoordige tijd (die gebruik je ook voor straks). Jij staat achter het werkwoord, dus geen t: word jij.' },
      { soort: 'tt', zin: 'Onze juf ___ altijd heel rustig als iemand haar iets vraagt.', cue: 'antwoorden', goed: 'antwoordt',
        uitleg: '"Vraagt" laat zien dat het nu is: tegenwoordige tijd. De juf is een zij, dus stam + t. De stam is antwoord, met een d. Daar komt de t achter: antwoordt.' }
    ],
    // Dag 2 — tegenwoordige tijd, stam op d of t
    [
      { soort: 'tt', zin: 'Jij ___ je fiets tegenwoordig altijd in de schuur, hè?', cue: 'zetten', goed: 'zet',
        uitleg: 'Tegenwoordig: tegenwoordige tijd. Jij staat vóór het werkwoord, dus stam + t. Maar de stam zet eindigt al op een t. Twee t\'s aan het eind schrijf je nooit, dus: zet.' },
      { soort: 'tt', zin: 'Het ___ vandaag de hele dag, dus we blijven binnen.', cue: 'regenen', goed: 'regent',
        uitleg: 'Vandaag en "blijven": tegenwoordige tijd. Het is net als hij: stam + t. Stam regen + t = regent.' },
      { soort: 'tt', zin: 'Met wie ___ jij morgen naar het toernooi?', cue: 'rijden', goed: 'rijd',
        uitleg: 'Morgen: tegenwoordige tijd. Jij staat achter het werkwoord, dus geen t erbij. Je schrijft alleen de stam: rijd, met de d die bij de stam hoort.' },
      { soort: 'tt', zin: 'Ik ___ altijd een beetje zenuwachtig als ik moet voorlezen.', cue: 'worden', goed: 'word',
        uitleg: '"Moet" staat in de tegenwoordige tijd. Bij ik schrijf je alleen de stam. De stam van worden is word, dus: ik word. Nooit een t na ik.' },
      { soort: 'tt', zin: 'De kaars ___ nog steeds, blaas hem maar uit.', cue: 'branden', goed: 'brandt',
        uitleg: 'Nog steeds en "blaas": het gebeurt nu, tegenwoordige tijd. De kaars is een hij, dus stam + t: brand + t = brandt.' },
      { soort: 'tt', zin: 'Hoe ___ je tante het tegenwoordig op haar nieuwe werk?', cue: 'vinden', goed: 'vindt',
        uitleg: 'Tegenwoordig: tegenwoordige tijd. Je tante is niet jij, maar zij. Probeer maar: vindt zij? Dus stam + t: vindt.' }
    ],
    // Dag 3 — verleden tijd en 't kofschip
    [
      { soort: 'vt', zin: 'Gisteren ___ wij de hele middag in het park.', cue: 'spelen', goed: 'speelden',
        uitleg: 'Gisteren: verleden tijd. De stam is speel. De l zit niet in \'t kofschip, dus -de. Het zijn wij, meer dan één, dus -den: speelden.' },
      { soort: 'vt', zin: 'Vorige week ___ mijn vader onze hele schuur.', cue: 'schilderen', goed: 'schilderde',
        uitleg: 'Vorige week: verleden tijd. De stam is schilder. De r zit niet in \'t kofschip, dus -de: schilderde.' },
      { soort: 'vt', zin: 'Gisteren ___ ik heel hard naar de bushalte.', cue: 'rennen', goed: 'rende',
        uitleg: 'Gisteren: verleden tijd. De stam van rennen is ren, met één n. De n zit niet in \'t kofschip, dus -de: rende. Niet rennde!' },
      { soort: 'vt', zin: 'Vorig jaar ___ mijn oma naar een appartement in de stad.', cue: 'verhuizen', goed: 'verhuisde',
        uitleg: 'Vorig jaar: verleden tijd. De stam is verhuis, maar kijk voor \'t kofschip naar het hele werkwoord: verhuizen, met een z. De z zit niet in \'t kofschip, dus -de: verhuisde.' },
      { soort: 'vt', zin: 'Afgelopen zaterdag ___ ik met mijn vriendin door het bos.', cue: 'fietsen', goed: 'fietste',
        uitleg: 'Afgelopen zaterdag: verleden tijd. De stam is fiets. De s zit in \'t kofschip, dus -te: fietste.' },
      { soort: 'vt', zin: 'Gisteravond ___ mijn moeder een heerlijke pompoensoep.', cue: 'koken', goed: 'kookte',
        uitleg: 'Gisteravond: verleden tijd. De stam is kook. De k zit in \'t kofschip, dus -te: kookte.' }
    ],
    // Dag 4 — verleden tijd, met de z/v-instinkers
    [
      { soort: 'vt', zin: 'Vroeger ___ hier een oude molenaar met zijn gezin.', cue: 'leven', goed: 'leefde',
        uitleg: 'Vroeger: verleden tijd. De stam is leef, maar het hele werkwoord is leven, met een v. De v zit niet in \'t kofschip, dus -de: leefde.' },
      { soort: 'vt', zin: 'Gisteren ___ de kinderen in de klas over hun vakantie.', cue: 'praten', goed: 'praatten',
        uitleg: 'Gisteren: verleden tijd. De stam is praat. De t zit in \'t kofschip, dus -te, en meer kinderen: -ten. Praat + ten = praatten, met twee t\'s.' },
      { soort: 'vt', zin: 'Gisteren ___ ik mijn vriend met een grappige tekening.', cue: 'verrassen', goed: 'verraste',
        uitleg: 'Gisteren: verleden tijd. De stam is verras, met één s. De s zit in \'t kofschip, dus -te: verraste.' },
      { soort: 'vt', zin: 'Vorig jaar ___ de jongens samen een boomhut.', cue: 'bouwen', goed: 'bouwden',
        uitleg: 'Vorig jaar: verleden tijd. De stam is bouw. De w zit niet in \'t kofschip, dus -de. Het zijn meer jongens: -den, dus bouwden.' },
      { soort: 'vt', zin: 'De hond ___ gisteren een uur lang tegen de postbode.', cue: 'blaffen', goed: 'blafte',
        uitleg: 'Gisteren: verleden tijd. De stam is blaf. Blaffen heeft echt een f, en de f zit in \'t kofschip, dus -te: blafte. Vergelijk met leven: daar is het een v, dus leefde.' },
      { soort: 'tt', zin: 'Mijn tante ___ volgende week veertig jaar.', cue: 'worden', goed: 'wordt',
        uitleg: 'Even herhalen: volgende week is tegenwoordige tijd. Mijn tante is een zij, dus stam + t: wordt.' }
    ],
    // Dag 5 — verleden tijd met dubbele d of t
    [
      { soort: 'dd', zin: 'Gisteren ___ ik alle vragen van de toets.', cue: 'beantwoorden', goed: 'beantwoordde',
        uitleg: 'Gisteren: verleden tijd. De stam is beantwoord. De d zit niet in \'t kofschip, dus -de. Eén d van de stam en één van -de: beantwoordde.' },
      { soort: 'dd', zin: 'Vorige week ___ ik mijn fiets tegen de muur van de school.', cue: 'zetten', goed: 'zette',
        uitleg: 'Vorige week: verleden tijd. De stam is zet. De t zit in \'t kofschip, dus -te. Eén t van de stam en één van -te: zette.' },
      { soort: 'dd', zin: 'Gisteren ___ de kaarsen tijdens het hele feest.', cue: 'branden', goed: 'brandden',
        uitleg: 'Gisteren: verleden tijd. De stam is brand; de d zit niet in \'t kofschip, dus -de. Meer kaarsen: -den. Brand + den = brandden.' },
      { soort: 'dd', zin: 'Gisteren ___ mijn opa de hele middag op de bank.', cue: 'rusten', goed: 'rustte',
        uitleg: 'Gisteren: verleden tijd. De stam is rust. De t zit in \'t kofschip, dus -te: rust + te = rustte.' },
      { soort: 'dd', zin: 'De brandweer ___ gisteren een kat uit een hoge boom.', cue: 'redden', goed: 'redde',
        uitleg: 'Gisteren: verleden tijd. De stam van redden is red, met één d. De d zit niet in \'t kofschip, dus -de: red + de = redde.' },
      { soort: 'dd', zin: 'Een kaartje voor de dierentuin ___ vorig jaar nog maar tien euro.', cue: 'kosten', goed: 'kostte',
        uitleg: 'Vorig jaar: verleden tijd. De stam is kost. De t zit in \'t kofschip, dus -te: kost + te = kostte.' }
    ],
    // Dag 6 — voltooid deelwoord
    [
      { soort: 'vd', zin: 'Ik heb gisteren mijn opa en oma ___.', cue: 'bellen', goed: 'gebeld',
        uitleg: 'Heb + deelwoord: voltooid deelwoord. Stam bel, l niet in \'t kofschip, dus een d. Twijfel je? Maak het langer: de gebelde oma. Je hoort een d: gebeld.' },
      { soort: 'vd', zin: 'Mijn zus heeft haar kamer helemaal blauw ___.', cue: 'verven', goed: 'geverfd',
        uitleg: 'Heeft + deelwoord. Het hele werkwoord is verven, met een v, en die zit niet in \'t kofschip. Dus een d: geverfd. Langer maken helpt ook: de geverfde kamer.' },
      { soort: 'vd', zin: 'Heb jij je huiswerk al ___?', cue: 'maken', goed: 'gemaakt',
        uitleg: 'Heb + deelwoord. De stam is maak. De k zit in \'t kofschip, dus een t: gemaakt.' },
      { soort: 'vd', zin: 'We hebben het hele weekend ___ voor de musical.', cue: 'oefenen', goed: 'geoefend',
        uitleg: 'Hebben + deelwoord. De stam is oefen. De n zit niet in \'t kofschip, dus een d: geoefend.' },
      { soort: 'vd', zin: 'De dief is gisteren door de politie ___.', cue: 'betrappen', goed: 'betrapt',
        uitleg: 'Is + deelwoord. Het werkwoord begint met be-, dus komt er geen ge- voor. Stam betrap, p in \'t kofschip, dus een t: betrapt.' },
      { soort: 'vd', zin: 'Mijn neef is vorige maand naar een andere stad ___.', cue: 'verhuizen', goed: 'verhuisd',
        uitleg: 'Is + deelwoord. Ver- aan het begin, dus geen ge-. Verhuizen heeft een z, en die zit niet in \'t kofschip: een d. Verhuisd.' }
    ],
    // Dag 7 — voltooid deelwoord, stam op d of t, en geen ge-
    [
      { soort: 'vd', zin: 'Heb jij de brief van je vriendin al ___?', cue: 'beantwoorden', goed: 'beantwoord',
        uitleg: 'Heb + deelwoord. Be- aan het begin, dus geen ge-. De stam beantwoord eindigt al op een d. Er zou nog een d bij moeten, maar twee d\'s aan het eind schrijf je nooit: beantwoord.' },
      { soort: 'vd', zin: 'De juf heeft mijn naam op het bord ___.', cue: 'zetten', goed: 'gezet',
        uitleg: 'Heeft + deelwoord. Stam zet, t in \'t kofschip, dus een t erachter. Maar er staat al een t, en twee t\'s aan het eind schrijf je niet: gezet.' },
      { soort: 'vd', zin: 'Wat is er gisteren op het schoolplein ___?', cue: 'gebeuren', goed: 'gebeurd',
        uitleg: 'Is + deelwoord. Gebeuren begint al met ge-, dus er komt geen extra ge- bij. Stam gebeur, r niet in \'t kofschip, dus een d: gebeurd.' },
      { soort: 'vd', zin: 'Het vliegtuig is net veilig ___.', cue: 'landen', goed: 'geland',
        uitleg: 'Is + deelwoord. De stam land eindigt op een d. Ge- + land + d, maar twee d\'s aan het eind schrijf je niet: geland.' },
      { soort: 'vd', zin: 'De juf heeft de uitleg nog een keer ___.', cue: 'herhalen', goed: 'herhaald',
        uitleg: 'Heeft + deelwoord. Her- aan het begin, dus geen ge-. Stam herhaal, l niet in \'t kofschip, dus een d: herhaald.' },
      { soort: 'vd', zin: 'De ontdekkingsreiziger heeft een onbekend eiland ___.', cue: 'ontdekken', goed: 'ontdekt',
        uitleg: 'Heeft + deelwoord. Ont- aan het begin, dus geen ge-. Stam ontdek, k in \'t kofschip, dus een t: ontdekt.' }
    ],
    // Dag 8 — herhaling van alles tot nu toe
    [
      { soort: 'tt', zin: 'Mijn vriendin ___ altijd als ik een mop vertel.', cue: 'lachen', goed: 'lacht',
        uitleg: '"Vertel" staat in de tegenwoordige tijd. Mijn vriendin is een zij, dus stam + t: lacht.' },
      { soort: 'vt', zin: 'Vorige week ___ we een grote kaart voor onze zieke juf.', cue: 'maken', goed: 'maakten',
        uitleg: 'Vorige week: verleden tijd. Stam maak, k in \'t kofschip, dus -te. Het is we, meer dan één: -ten. Maakten.' },
      { soort: 'dd', zin: 'Gisteren ___ ik me ziek bij de juf, want ik voelde me niet lekker.', cue: 'melden', goed: 'meldde',
        uitleg: '"Gisteren" en "voelde": verleden tijd. Stam meld, d niet in \'t kofschip, dus -de: meld + de = meldde.' },
      { soort: 'vd', zin: 'Mijn vader heeft de kapotte auto van de buren ___.', cue: 'repareren', goed: 'gerepareerd',
        uitleg: 'Heeft + deelwoord. Stam repareer, r niet in \'t kofschip, dus een d: gerepareerd.' },
      { soort: 'vt', zin: 'Vorige zomer ___ wij met de trein door Italië.', cue: 'reizen', goed: 'reisden',
        uitleg: 'Vorige zomer: verleden tijd. De stam is reis, maar het hele werkwoord heeft een z, en die zit niet in \'t kofschip. Dus -de, en bij wij -den: reisden.' },
      { soort: 'tt', zin: 'Morgen ___ jij twaalf jaar, toch?', cue: 'worden', goed: 'word',
        uitleg: 'Morgen: tegenwoordige tijd. Jij staat achter het werkwoord, dus geen t: word jij.' }
    ],
    // Dag 9 — de bekende instinkers
    [
      { soort: 'val', zin: 'Wat ___ er als je op die rode knop drukt?', cue: 'gebeuren', goed: 'gebeurt',
        uitleg: 'Er staat geen heeft of is bij, en "drukt" is tegenwoordige tijd. Dus dit is gewoon de persoonsvorm in de tegenwoordige tijd: het gebeurt, stam + t.' },
      { soort: 'val', zin: 'Het ongeluk is gisteren op de hoek van onze straat ___.', cue: 'gebeuren', goed: 'gebeurd',
        uitleg: 'Is + deelwoord: voltooid deelwoord. Stam gebeur, r niet in \'t kofschip, dus een d. Langer maken: het gebeurde ongeluk. Gebeurd.' },
      { soort: 'val', zin: '___ jij het ook zo koud in deze klas, of ben ik de enige?', cue: 'vinden', goed: 'vind',
        uitleg: '"Ben ik" laat zien dat het nu is. Jij staat achter het werkwoord, dus geen t: vind jij.' },
      { soort: 'val', zin: 'Mijn broer ___ het altijd vreselijk als hij moet stofzuigen.', cue: 'vinden', goed: 'vindt',
        uitleg: '"Moet" is tegenwoordige tijd. Mijn broer is een hij, dus stam + t: vindt. De d hoort bij de stam, de t komt erachter.' },
      { soort: 'val', zin: 'Gisteren ___ ik per ongeluk mijn tong aan de hete chocolademelk.', cue: 'verbranden', goed: 'verbrandde',
        uitleg: 'Gisteren: verleden tijd. Stam verbrand, d niet in \'t kofschip, dus -de. Eén d van de stam en één van -de: verbrandde.' },
      { soort: 'val', zin: 'Mijn vriendin ___ altijd meteen elke vraag die de juf stelt.', cue: 'beantwoorden', goed: 'beantwoordt',
        uitleg: 'Er staat geen heeft of is bij: dit is de persoonsvorm. "Stelt" laat zien dat het tegenwoordige tijd is, en mijn vriendin is een zij: stam + t. Beantwoord + t = beantwoordt.' }
    ],
    // Dag 10 — het deelwoord als bijvoeglijk naamwoord
    [
      { soort: 'bijv', zin: 'De ___ pizza ging meteen in de vuilnisbak.', cue: 'verbranden', goed: 'verbrande',
        uitleg: 'Het woord staat vóór pizza en zegt hoe die pizza is. Neem het deelwoord, verbrand, en zet er een -e achter: verbrande. Met één d, want het is geen verleden tijd.' },
      { soort: 'bijv', zin: 'In de winkel kocht mama een ___ fiets voor mij.', cue: 'gebruiken', goed: 'gebruikte',
        uitleg: 'Het woord zegt iets over de fiets. Het deelwoord is gebruikt (k in \'t kofschip). Bij de fiets komt er een -e achter: een gebruikte fiets.' },
      { soort: 'bijv', zin: 'Op tafel stond een schaal met ___ appels.', cue: 'schillen', goed: 'geschilde',
        uitleg: 'Het woord zegt iets over de appels. Het deelwoord is geschild (l niet in \'t kofschip, dus d). Met -e erachter: geschilde. Eén l, want schil heeft één l.' },
      { soort: 'bijv', zin: 'Het pas ___ gras rook heerlijk.', cue: 'maaien', goed: 'gemaaide',
        uitleg: 'Het woord zegt iets over het gras. Deelwoord: gemaaid (stam maai, de i zit niet in \'t kofschip, dus d). Bij "het gras" komt er een -e achter: gemaaide.' },
      { soort: 'bijv', zin: 'De ___ vogel mocht na een week weer vliegen.', cue: 'redden', goed: 'geredde',
        uitleg: 'Het woord zegt iets over de vogel. Het deelwoord is gered (stam red, één d). Met -e erachter: geredde.' },
      { soort: 'bijv', zin: 'Mijn broer slaapt in een ___ bed van onze neef.', cue: 'gebruiken', goed: 'gebruikt',
        uitleg: 'Het deelwoord is gebruikt. Bed is een het-woord, en bij "een" + het-woord komt er geen -e achter: een gebruikt bed. Vergelijk: het gebruikte bed.' }
    ],
    // Dag 11 — Engelse werkwoorden
    [
      { soort: 'engels', zin: 'Gisteren ___ ik met mijn neef in het skatepark.', cue: 'skaten', goed: 'skatete',
        uitleg: 'Gisteren: verleden tijd. De stam is skate, net als in het Engels. Je hoort aan het eind een t, en die zit in \'t kofschip: -te. Skate + te = skatete.' },
      { soort: 'engels', zin: 'Ik heb mijn werkstuk gisteren naar de juf ___.', cue: 'mailen', goed: 'gemaild',
        uitleg: 'Heb + deelwoord. De stam is mail; de l zit niet in \'t kofschip, dus een d: gemaild.' },
      { soort: 'engels', zin: 'Mijn tablet is midden in het spel ___.', cue: 'crashen', goed: 'gecrasht',
        uitleg: 'Is + deelwoord. De stam is crash. Je hoort aan het eind een sj-klank, die telt als de s van \'t kofschip. Dus een t: gecrasht.' },
      { soort: 'engels', zin: 'De app is vannacht vanzelf ___.', cue: 'updaten', goed: 'geüpdatet',
        uitleg: 'Is + deelwoord. De stam is update, en je hoort aan het eind een t: \'t kofschip, dus een t erachter. Ge + update + t, met een trema op de u zodat je ge-up leest: geüpdatet.' },
      { soort: 'engels', zin: 'Mijn broer heeft de hele zaterdag ___.', cue: 'gamen', goed: 'gegamed',
        uitleg: 'Heeft + deelwoord. De stam is game. Je hoort aan het eind een m, en die zit niet in \'t kofschip. Dus een d: gegamed.' },
      { soort: 'engels', zin: 'Gisteren ___ mijn broer een nieuw spel op zijn tablet.', cue: 'downloaden', goed: 'downloadde',
        uitleg: 'Gisteren: verleden tijd. De stam is download, met een d, en die zit niet in \'t kofschip: -de. Eén d van de stam en één van -de: downloadde.' }
    ],
    // Dag 12 — alles door elkaar, zoals op de toets
    [
      { soort: 'tt', zin: 'Mijn oom ___ tegenwoordig in een vrachtwagen door heel Europa.', cue: 'rijden', goed: 'rijdt',
        uitleg: 'Tegenwoordig: tegenwoordige tijd. Mijn oom is een hij, dus stam + t: rijd + t = rijdt.' },
      { soort: 'vt', zin: 'Vorige week ___ mijn oma ons een kaart uit Spanje.', cue: 'sturen', goed: 'stuurde',
        uitleg: 'Vorige week: verleden tijd. Stam stuur, r niet in \'t kofschip, dus -de: stuurde.' },
      { soort: 'dd', zin: 'Gisteren ___ ik mijn vriendin toevallig in het zwembad.', cue: 'ontmoeten', goed: 'ontmoette',
        uitleg: 'Gisteren: verleden tijd. Stam ontmoet, t in \'t kofschip, dus -te. Eén t van de stam en één van -te: ontmoette.' },
      { soort: 'vd', zin: 'De kinderen hebben de hele gang ___ voor het feest.', cue: 'versieren', goed: 'versierd',
        uitleg: 'Hebben + deelwoord. Ver- aan het begin, dus geen ge-. Stam versier, r niet in \'t kofschip, dus een d: versierd.' },
      { soort: 'bijv', zin: 'De ___ fietsen staan in een lange rij achter de school.', cue: 'parkeren', goed: 'geparkeerde',
        uitleg: 'Het woord zegt iets over de fietsen. Het deelwoord is geparkeerd (r niet in \'t kofschip). Met -e erachter: geparkeerde.' },
      { soort: 'engels', zin: 'Vorige week ___ ik oma een foto van mijn tekening.', cue: 'mailen', goed: 'mailde',
        uitleg: 'Vorige week: verleden tijd. Stam mail, l niet in \'t kofschip, dus -de: mailde.' }
    ],
    // Dag 13 — alles door elkaar
    [
      { soort: 'val', zin: 'Het ___ steeds later donker als de zomer eraan komt.', cue: 'worden', goed: 'wordt',
        uitleg: '"Komt" staat in de tegenwoordige tijd. Het is net als hij: stam + t. Word + t = wordt.' },
      { soort: 'vt', zin: 'Gisteren ___ mijn vader en ik samen een vogelhuisje.', cue: 'timmeren', goed: 'timmerden',
        uitleg: 'Gisteren: verleden tijd. Stam timmer, r niet in \'t kofschip, dus -de. Mijn vader en ik zijn met z\'n tweeën: -den. Timmerden.' },
      { soort: 'dd', zin: 'Vorige week ___ wij een uur op de trein, want hij had vertraging.', cue: 'wachten', goed: 'wachtten',
        uitleg: 'Vorige week: verleden tijd. Stam wacht, t in \'t kofschip, dus -te. Bij wij -ten: wacht + ten = wachtten.' },
      { soort: 'vd', zin: 'De kat heeft zich achter de bank ___.', cue: 'verstoppen', goed: 'verstopt',
        uitleg: 'Heeft + deelwoord. Ver- aan het begin, dus geen ge-. Stam verstop, p in \'t kofschip, dus een t: verstopt.' },
      { soort: 'bijv', zin: 'Wij zaten in een ___ trein en kwamen te laat aan.', cue: 'vertragen', goed: 'vertraagde',
        uitleg: 'Het woord zegt iets over de trein. Het deelwoord is vertraagd: stam vertraag, en de g zit niet in \'t kofschip, dus een d. Met -e erachter: vertraagde.' },
      { soort: 'engels', zin: 'De voetballer heeft de bal precies in de hoek ___.', cue: 'scoren', goed: 'gescoord',
        uitleg: 'Heeft + deelwoord. Stam scoor, r niet in \'t kofschip, dus een d: gescoord.' }
    ],
    // Dag 14 — alles door elkaar, de laatste ronde
    [
      { soort: 'tt', zin: 'Waarom ___ jij altijd zo snel boos als je verliest?', cue: 'worden', goed: 'word',
        uitleg: '"Verliest" laat zien dat het nu is. Jij staat achter het werkwoord, dus geen t: word jij.' },
      { soort: 'vt', zin: 'Vorige week ___ mijn neef de hele dag, want hij was verkouden.', cue: 'niezen', goed: 'niesde',
        uitleg: 'Vorige week en "was": verleden tijd. De stam is nies, maar niezen heeft een z, en die zit niet in \'t kofschip. Dus -de: niesde.' },
      { soort: 'dd', zin: 'Gisteren ___ mijn vriendin meteen wat er in het cadeau zat.', cue: 'raden', goed: 'raadde',
        uitleg: 'Gisteren: verleden tijd. Stam raad, d niet in \'t kofschip, dus -de. Eén d van de stam en één van -de: raadde.' },
      { soort: 'vd', zin: 'Ik heb mijn tante met haar verjaardag ___.', cue: 'feliciteren', goed: 'gefeliciteerd',
        uitleg: 'Heb + deelwoord. Stam feliciteer, r niet in \'t kofschip, dus een d: gefeliciteerd.' },
      { soort: 'val', zin: 'Pas op, je ___ je vingers aan die hete pan!', cue: 'verbranden', goed: 'verbrandt',
        uitleg: '"Pas op": het gaat om nu, tegenwoordige tijd. Je staat vóór het werkwoord, dus stam + t: verbrand + t = verbrandt.' },
      { soort: 'bijv', zin: 'De ___ vragen lagen op een stapel bij de juf.', cue: 'beantwoorden', goed: 'beantwoorde',
        uitleg: 'Het woord zegt iets over de vragen. Het deelwoord is beantwoord, en daar komt een -e achter: beantwoorde. Niet beantwoordde, want het is geen verleden tijd.' }
    ]
  ],

  // Per dag 5 woorden: kies de goede schrijfwijze. 14 arrays.
  woorden: [
    // Dag 1
    [
      { soort: 'klankgroepen', zin: 'Op de markt kochten we een kilo ___.', goed: 'tomaten', fout: ['tommaten', 'tomaaten'],
        uitleg: 'Hak het in stukjes: to-ma-ten. De a staat aan het eind van een klankgroep en klinkt lang, dus schrijf je er maar één.' },
      { soort: 'ei-ij', zin: 'Het hek rond de tuin is gemaakt van ___.', goed: 'ijzer', fout: ['eizer', 'ijser'],
        uitleg: 'IJzer schrijf je met de lange ij. Ei of ij hoor je niet, dat moet je onthouden. En je hoort een z, dus schrijf je een z.' },
      { soort: 'au-ou', zin: 'In de herfst wordt het buiten steeds ___.', goed: 'kouder', fout: ['kauder', 'koudder'],
        uitleg: 'Koud schrijf je met ou, en kouder dus ook. Woorden op -oud en -out schrijf je bijna altijd met ou: koud, oud, goud, hout.' },
      { soort: 'g-ch', zin: 'Na de regen was de ___ weer helemaal blauw.', goed: 'lucht', fout: ['lugt', 'luchd'],
        uitleg: 'Voor een t schrijf je bijna altijd ch: lucht, licht, nacht. Een g voor een t komt bijna alleen voor bij werkwoorden zoals ligt en zegt.' },
      { soort: '-tie', zin: 'Ik heb in de klas een ___ over vulkanen gehouden.', goed: 'presentatie', fout: ['presentatsie', 'presentasie'],
        uitleg: 'Aan het eind hoor je tsie of sie, maar je schrijft -tie. Net als bij vakantie en informatie.' }
    ],
    // Dag 2
    [
      { soort: '-ig-lijk-isch', zin: 'Wat een ___ idee van jou!', goed: 'prachtig', fout: ['prachtich', 'prachtieg'],
        uitleg: 'Aan het eind hoor je ug of ich, maar je schrijft -ig. Maak het langer om het te checken: prachtige.' },
      { soort: 'c-k-s', zin: 'In het ___ zagen we een clown op een eenwieler.', goed: 'circus', fout: ['sirkus', 'circkus'],
        uitleg: 'Circus komt uit het Latijn. De eerste c klinkt als een s (voor een i), de tweede als een k (voor een u).' },
      { soort: 'leenwoord', zin: 'Na het eten kregen we een ijsje als ___.', goed: 'dessert', fout: ['dessèr', 'desert'],
        uitleg: 'Dessert is een Frans woord. Je schrijft twee s\'en en een t aan het eind, ook al hoor je die t niet.' },
      { soort: 'tussen-n', zin: 'Bij de vijver zagen we een pluizig ___.', goed: 'eendenkuiken', fout: ['eendekuiken', 'eentenkuiken'],
        uitleg: 'Het eerste deel, eend, heeft als meervoud eenden. Dan schrijf je in een samenstelling ook de n: eendenkuiken.' },
      { soort: 'meervoud', zin: 'We kochten drie rijpe ___ bij de groenteboer.', goed: "mango's", fout: ['mangos', 'mangoos'],
        uitleg: 'Mango eindigt op een lange klinker (o). Zonder apostrof zou je mangos lezen met een korte o, dus schrijf je mango\'s.' }
    ],
    // Dag 3
    [
      { soort: 'hoofdletter', zin: 'In het voorjaar vieren we ___ met chocolade-eieren.', goed: 'Pasen', fout: ['pasen', 'Paasen'],
        uitleg: 'Feestdagen zoals Pasen, Kerstmis en Pinksteren schrijf je met een hoofdletter. En pa-sen: lange a aan het eind, dus één a.' },
      { soort: 'weetwoord', zin: 'Wil je de deur ___ even dichtdoen?', goed: 'alsjeblieft', fout: ['alsjeblief', 'alsjeblievt'],
        uitleg: 'Alsjeblieft is eigenlijk "als het je belieft". Daarom eindigt het op ft, ook al zeg je het soms zonder t.' },
      { soort: 'trema', zin: 'Op de berg stond de ___ van een oud kasteel.', goed: 'ruïne', fout: ['ruine', 'ruiene'],
        uitleg: 'Je zegt ru-i-ne, niet ruin-e. Het trema op de i laat zien dat er een nieuwe klankgroep begint.' },
      { soort: 'koppelteken', zin: 'Op het strand trapte ik bijna op een ___.', goed: 'zee-egel', fout: ['zeeëgel', 'zeeegel'],
        uitleg: 'Zee en egel zijn twee woorden die aan elkaar gaan. Zonder streepje zou je zeeegel verkeerd lezen. Bij een samenstelling zet je dan een koppelteken.' },
      { soort: 'verkleinwoord', zin: 'In mijn tas zit altijd een ___ voor mijn haar.', goed: 'kammetje', fout: ['kamtje', 'kametje'],
        uitleg: 'Na een korte klank met m, n, l of r krijg je -etje, en dan verdubbel je de medeklinker: kam wordt kammetje.' }
    ],
    // Dag 4
    [
      { soort: 'klankgroepen', zin: 'In de dierentuin maakten we foto\'s van de ___.', goed: 'giraffen', fout: ['girafen', 'giraaffen'],
        uitleg: 'Gi-raf-fen: je hoort een korte a, dus verdubbel je de f. Een dubbele aa past daar niet bij.' },
      { soort: 'ei-ij', zin: 'Na het eten liepen we nog een ___ door het bos.', goed: 'eindje', fout: ['ijndje', 'eintje'],
        uitleg: 'Eindje komt van eind, met ei. En een eind eindigt op een d, dus het verkleinwoord ook: eindje.' },
      { soort: 'au-ou', zin: 'Volgens het sprookje woont er in het bos een ___.', goed: 'kabouter', fout: ['kabauter', 'kabouder'],
        uitleg: 'Kabouter schrijf je met ou. Je hoort duidelijk een t, dus geen d.' },
      { soort: 'g-ch', zin: 'Midden in de ___ werd ik wakker van een uil.', goed: 'nacht', fout: ['nagt', 'nachd'],
        uitleg: 'Voor een t schrijf je ch: nacht. Maak je het langer, nachten, dan hoor je ook een t, geen d.' },
      { soort: '-ig-lijk-isch', zin: 'De nieuwe buurvrouw is heel ___ tegen iedereen.', goed: 'vriendelijk', fout: ['vriendelek', 'vriendelijck'],
        uitleg: 'Aan het eind hoor je luk, maar je schrijft -lijk. Net als bij eerlijk en gevaarlijk.' }
    ],
    // Dag 5
    [
      { soort: '-tie', zin: 'Na de ___ aan zijn knie moest mijn opa een week rusten.', goed: 'operatie', fout: ['operasie', 'operatsie'],
        uitleg: 'Je hoort sie of tsie, maar je schrijft -tie. Dat doe je na bijna elke klinker of n aan het eind van zo\'n woord.' },
      { soort: 'c-k-s', zin: 'Met mijn nieuwe ___ maak ik foto\'s van vogels.', goed: 'camera', fout: ['kamera', 'cammera'],
        uitleg: 'Camera komt uit het Latijn en begint met een c die als k klinkt. Ca-me-ra: lange a aan het eind, dus één m.' },
      { soort: 'leenwoord', zin: 'We kochten een ___ in de winkel van het museum.', goed: 'souvenir', fout: ['suvenir', 'souveneer'],
        uitleg: 'Souvenir is Frans. De oe-klank schrijf je als ou, en aan het eind schrijf je -ir.' },
      { soort: 'tussen-s', zin: 'In het midden van het dorp is een groot ___.', goed: 'dorpsplein', fout: ['dorpplein', 'dorpenplein'],
        uitleg: 'Je hoort een s tussen dorp en plein, dus schrijf je die s ook: dorpsplein.' },
      { soort: 'meervoud', zin: 'Er hingen drie mooie ___ aan de muur.', goed: "foto's", fout: ['fotos', 'fotoos'],
        uitleg: 'Foto eindigt op een lange o. Met alleen -s zou je fotos lezen met een korte o, dus zet je er een apostrof tussen: foto\'s.' }
    ],
    // Dag 6
    [
      { soort: 'hoofdletter', zin: 'Mijn juf spreekt heel goed ___.', goed: 'Engels', fout: ['engels', 'Engelsch'],
        uitleg: 'Talen schrijf je met een hoofdletter, want ze komen van een land: Engels, Frans, Nederlands.' },
      { soort: 'weetwoord', zin: 'Ik weet het niet zeker, maar het gaat ___ regenen.', goed: 'waarschijnlijk', fout: ['waarschijnelijk', 'waarschijlijk'],
        uitleg: 'Waar-schijn-lijk: het woord schijn zit erin, en daarachter -lijk. Daar komt geen extra e bij.' },
      { soort: 'trema', zin: 'In de zomer gaan wij op vakantie naar ___.', goed: 'België', fout: ['Belgie', 'Belgïe'],
        uitleg: 'Je zegt Bel-gi-e, met een nieuwe klankgroep. Het trema staat op de e, de letter waar die nieuwe klankgroep begint.' },
      { soort: 'koppelteken', zin: 'Op ons dak liggen panelen voor ___.', goed: 'zonne-energie', fout: ['zonneenergie', 'zonnenergie'],
        uitleg: 'Zonne eindigt op een e en energie begint met een e. Om ze niet aan elkaar te lezen, zet je een koppelteken.' },
      { soort: 'verkleinwoord', zin: 'Mijn opa woont in een klein ___ aan de dijk.', goed: 'woninkje', fout: ['woningje', 'woninkkje'],
        uitleg: 'Eindigt een woord op -ing, dan wordt het verkleinwoord -inkje: woning wordt woninkje, koning wordt koninkje.' }
    ],
    // Dag 7
    [
      { soort: 'klankgroepen', zin: 'Op de vijver zwommen twee witte ___.', goed: 'zwanen', fout: ['zwaanen', 'zwannen'],
        uitleg: 'Zwa-nen: de a staat aan het eind van de klankgroep en klinkt lang. Dan is één a genoeg.' },
      { soort: 'ei-ij', zin: 'Mijn oom heeft een ___ met koeien en kippen.', goed: 'boerderij', fout: ['boerderei', 'boerdeirij'],
        uitleg: 'Woorden die eindigen op de klank -erij schrijf je met lange ij: boerderij, bakkerij.' },
      { soort: 'au-ou', zin: 'Mijn oma draagt een ___ ring met een steentje.', goed: 'gouden', fout: ['gauden', 'goudden'],
        uitleg: 'Gouden komt van goud, met ou. Gou-den: er is maar één d.' },
      { soort: 'g-ch', zin: 'De ___ naar Spanje duurde twee uur.', goed: 'vlucht', fout: ['vlugt', 'vluchd'],
        uitleg: 'Voor de t schrijf je ch: vlucht. Je hoort ook een t aan het eind, geen d.' },
      { soort: '-ig-lijk-isch', zin: 'Dat is weer ___ mijn broertje: hij is zijn sleutels kwijt.', goed: 'typisch', fout: ['tipisch', 'typies'],
        uitleg: 'Aan het eind hoor je ies, maar je schrijft -isch. Typisch komt van type, daarom schrijf je een y.' }
    ],
    // Dag 8
    [
      { soort: '-tie', zin: 'Mijn tante werkt bij de ___ van de krant.', goed: 'redactie', fout: ['redaktie', 'redacsie'],
        uitleg: 'Je schrijft -ctie, net als bij actie en reactie. De c klinkt hier als een k.' },
      { soort: 'c-k-s', zin: 'Mijn moeder perst een ___ uit voor in de thee.', goed: 'citroen', fout: ['sitroen', 'citroun'],
        uitleg: 'Citroen begint met een c die als s klinkt. Een c voor een i of e klinkt als s.' },
      { soort: 'leenwoord', zin: 'De ___ in het vliegtuig bracht ons iets te drinken.', goed: 'stewardess', fout: ['stuwardess', 'stewardes'],
        uitleg: 'Stewardess is Engels: je schrijft ew, al klinkt het als joe. En aan het eind staan twee s\'en.' },
      { soort: 'tussen-n', zin: 'Op een gele ___ zat een vlinder.', goed: 'paardenbloem', fout: ['paardebloem', 'paartenbloem'],
        uitleg: 'Paard heeft als meervoud paarden, dus schrijf je de tussen-n: paardenbloem.' },
      { soort: 'trema', zin: 'Op wintersport gingen we elke dag ___.', goed: 'skiën', fout: ['skien', 'skieën'],
        uitleg: 'Je zegt ski-en. De e begint een nieuwe klankgroep, dus krijgt die e een trema: skiën.' }
    ],
    // Dag 9
    [
      { soort: 'meervoud', zin: 'In de dierentuin zagen we twee grote ___.', goed: "gorilla's", fout: ['gorillas', 'gorillaas'],
        uitleg: 'Gorilla eindigt op een a. Met alleen -s zou je gorillas lezen met een korte a, dus schrijf je gorilla\'s.' },
      { soort: 'hoofdletter', zin: 'Met ___ zetten we een boom in de kamer.', goed: 'Kerstmis', fout: ['kerstmis', 'Kersmis'],
        uitleg: 'Kerstmis is een feestdag, dus met een hoofdletter. En kerst heeft een t, ook al hoor je die nauwelijks.' },
      { soort: 'weetwoord', zin: 'Het ___ was heel smal, dus we liepen achter elkaar.', goed: 'trottoir', fout: ['trottwar', 'trotoir'],
        uitleg: 'Trottoir is een Frans woord: twee t\'s in het midden, en de klank wa schrijf je als oi.' },
      { soort: 'koppelteken', zin: 'Een ___ van onze school kwam vertellen over zijn werk.', goed: 'oud-leerling', fout: ['oudleerling', 'oud leerling'],
        uitleg: 'Oud betekent hier "vroeger", net als bij oud-burgemeester. Dan zet je er een koppelteken tussen.' },
      { soort: 'klankgroepen', zin: 'Voor het feest hebben we alle ___ opgeblazen.', goed: 'ballonnen', fout: ['ballonen', 'balonnen'],
        uitleg: 'Bal-lon-nen: twee keer een korte klank. Dus verdubbel je de l én de n.' }
    ],
    // Dag 10
    [
      { soort: 'ei-ij', zin: 'In de ___ achter ons huis zwemmen goudvissen.', goed: 'vijver', fout: ['veiver', 'vijfer'],
        uitleg: 'Vijver schrijf je met ij. En je hoort in het midden een v, dus geen f.' },
      { soort: 'au-ou', zin: 'In de volle bus kreeg ik het heel ___.', goed: 'benauwd', fout: ['benouwd', 'benauwt'],
        uitleg: 'Benauwd schrijf je met auw. Maak het langer: benauwde. Dan hoor je een d.' },
      { soort: 'g-ch', zin: 'We fietsten over een smalle ___ over de rivier.', goed: 'brug', fout: ['bruch', 'brugh'],
        uitleg: 'Je hoort aan het eind een ch, maar maak het meervoud: bruggen. Je hoort een g, dus schrijf je brug.' },
      { soort: '-tie', zin: 'Mijn opa heeft een grote ___ oude munten.', goed: 'collectie', fout: ['collecsie', 'kollectie'],
        uitleg: 'Je schrijft -ctie, net als bij redactie. Collectie begint met een c en heeft twee l\'en.' },
      { soort: 'tussen-s', zin: 'Met de ___ ben je in tien minuten in het centrum.', goed: 'stadsbus', fout: ['stadbus', 'statsbus'],
        uitleg: 'Je hoort een s tussen stad en bus. Stad houdt zijn d, en dan komt de tussen-s: stadsbus.' }
    ],
    // Dag 11
    [
      { soort: 'meervoud', zin: 'Mijn tante heeft net een tweeling gekregen: twee ___.', goed: "baby's", fout: ['babys', 'babies'],
        uitleg: 'Baby eindigt op een y. Dan krijgt het meervoud een apostrof: baby\'s. Babies is Engels.' },
      { soort: 'verkleinwoord', zin: 'Mijn broertje speelt met een houten ___.', goed: 'treintje', fout: ['treinje', 'treintjie'],
        uitleg: 'Na een lange klank met n krijg je -tje: trein wordt treintje.' },
      { soort: 'hoofdletter', zin: 'Mijn verjaardag is in ___, als de bladeren vallen.', goed: 'oktober', fout: ['Oktober', 'october'],
        uitleg: 'Maanden en dagen schrijf je in het Nederlands zonder hoofdletter: oktober, maandag. In het Engels is dat anders!' },
      { soort: 'weetwoord', zin: 'Ik had ___ geen zin om te gaan, maar het was toch leuk.', goed: 'eigenlijk', fout: ['eigelijk', 'eigenluk'],
        uitleg: 'Eigen + lijk: de n van eigen hoor je bijna niet, maar die schrijf je wel.' },
      { soort: 'trema', zin: 'In de bibliotheek staat een kast vol ___: gedichten van allerlei dichters.', goed: 'poëzie', fout: ['poezie', 'poëzi'],
        uitleg: 'Je zegt po-e-zie. Zonder trema zou je poe lezen, dus zet je het trema op de e.' }
    ],
    // Dag 12
    [
      { soort: 'koppelteken', zin: 'Na het zwemmen kregen we allemaal een ___.', goed: 'mini-ijsje', fout: ['miniijsje', 'mini ijsje'],
        uitleg: 'Mini eindigt op een i en ijsje begint met ij. Om ze niet door elkaar te lezen, zet je een koppelteken.' },
      { soort: 'klankgroepen', zin: 'We gaan morgen met de hele klas ___.', goed: 'zwemmen', fout: ['zwemen', 'zweemmen'],
        uitleg: 'Zwem-men: je hoort een korte e, dus verdubbel je de m.' },
      { soort: 'ei-ij', zin: 'In onze ___ wonen veel gezinnen met kinderen.', goed: 'wijk', fout: ['weik', 'wijck'],
        uitleg: 'Wijk schrijf je met lange ij. Dat moet je gewoon onthouden.' },
      { soort: 'au-ou', zin: 'Mijn trui heeft een gat in de ___.', goed: 'mouw', fout: ['mauw', 'mouwe'],
        uitleg: 'Mouw schrijf je met ouw, net als vrouw en touw.' },
      { soort: 'g-ch', zin: 'De kat sprong ___ op de tafel.', goed: 'vlug', fout: ['vluch', 'vlugh'],
        uitleg: 'Maak het langer: vlugge. Je hoort een g, dus schrijf je vlug.' }
    ],
    // Dag 13
    [
      { soort: '-ig-lijk-isch', zin: 'Ik ben heel ___ hoe het boek afloopt.', goed: 'nieuwsgierig', fout: ['nieuwsgierich', 'nieuwsgierieg'],
        uitleg: 'Aan het eind hoor je ug, maar je schrijft -ig. Maak het langer om te checken: nieuwsgierige.' },
      { soort: '-tie', zin: 'Ons team traint hard voor de ___.', goed: 'competitie', fout: ['competisie', 'compititie'],
        uitleg: 'Je hoort tsie, maar je schrijft -tie. Com-pe-ti-tie: let op de e in het midden.' },
      { soort: 'c-k-s', zin: 'Op zaterdag is het ___ van de stad erg druk.', goed: 'centrum', fout: ['sentrum', 'centrumm'],
        uitleg: 'Centrum begint met een c die als s klinkt, want er staat een e achter.' },
      { soort: 'leenwoord', zin: 'Ik nam een ___ mee, want het ging regenen.', goed: 'paraplu', fout: ['parapluu', 'paraplue'],
        uitleg: 'Paraplu is Frans. Aan het eind staat de u alleen, ook al klinkt hij lang.' },
      { soort: 'tussen-n', zin: 'Mijn broer heeft een ___ getimmerd voor onze hond.', goed: 'hondenhok', fout: ['hondehok', 'hontenhok'],
        uitleg: 'Hond heeft als meervoud honden, dus komt er een tussen-n: hondenhok.' }
    ],
    // Dag 14
    [
      { soort: 'tussen-s', zin: 'Op de bouwplaats draagt iedereen een ___.', goed: 'veiligheidshelm', fout: ['veiligheidhelm', 'veiligheitshelm'],
        uitleg: 'Je hoort een s tussen veiligheid en helm. Veiligheid houdt zijn d, en dan komt de s: veiligheidshelm.' },
      { soort: 'meervoud', zin: 'De ober bracht ons twee ___.', goed: "menu's", fout: ['menus', 'menuus'],
        uitleg: 'Menu eindigt op een u die je lang zegt. Met alleen -s zou je menus lezen met een korte u, dus schrijf je menu\'s.' },
      { soort: 'verkleinwoord', zin: 'Ik heb een klein ___ voor je gekocht.', goed: 'cadeautje', fout: ['cadeauwtje', 'cadeautjie'],
        uitleg: 'Cadeau eindigt op een lange klank. Dan komt er -tje achter: cadeautje.' },
      { soort: 'koppelteken', zin: 'Mijn opa en oma wonen in ___, vlak bij Amsterdam.', goed: 'Noord-Holland', fout: ['Noordholland', 'noord-Holland'],
        uitleg: 'Bij een windrichting voor een naam zet je een koppelteken, en allebei de delen krijgen een hoofdletter: Noord-Holland.' },
      { soort: 'weetwoord', zin: 'Het was stil, maar ___ begon de hond te blaffen.', goed: 'plotseling', fout: ['plotselings', 'plotsseling'],
        uitleg: 'Plots + eling: er zit maar één s in, en aan het eind komt geen s.' }
    ]
  ],

  // Woorden om hardop te lezen (1 minuut), per moeilijkheid. De app maakt er per dag een rij van.
  woordrij: {
    kort: [
      'straat', 'sprong', 'herfst', 'schrift', 'knalt', 'vlucht', 'strand', 'sterk', 'schrik', 'plank',
      'kracht', 'sprint', 'stroom', 'struik', 'splint', 'knoop', 'kwast', 'klomp', 'vlecht', 'schelp',
      'dwerg', 'zwerm', 'fluit', 'gracht', 'schors', 'slurf', 'kramp', 'spreuk', 'krans', 'drank',
      'plons', 'trots', 'glimp', 'scherp', 'streep', 'wrak', 'spruit', 'stamp', 'klets', 'blonk',
      'schreeuw', 'vriend', 'zwaard', 'knecht', 'dwars', 'smaakt', 'spuugt', 'strik', 'schrob', 'slurpt',
      'knikt', 'grond', 'brandt', 'zweeft', 'flitst', 'stronk', 'schuimt', 'dwingt', 'klimt', 'schrijft'
    ],
    middel: [
      'wandel', 'pompoen', 'bliksem', 'spiegel', 'verhaal', 'tafel', 'wortel', 'ladder', 'kasteel', 'bezem',
      'venster', 'sleutel', 'ridder', 'kussen', 'molen', 'emmer', 'donder', 'zadel', 'schommel', 'kikker',
      'vlinder', 'stempel', 'trommel', 'schaduw', 'regen', 'kompas', 'sneeuwpop', 'voetbal', 'zandbak', 'handdoek',
      'snoepjes', 'werkstuk', 'tandarts', 'schrijver', 'dromen', 'kapper', 'bakker', 'gevecht', 'bedrag', 'geluid',
      'verdriet', 'begin', 'kabel', 'duikbril', 'parel', 'vogel', 'lepel', 'sterren', 'knuffel', 'schoenen',
      'kleuren', 'strepen', 'vlaggen', 'krekel', 'eekhoorn', 'slingers', 'springtouw', 'pleister', 'blokken', 'vergeet'
    ],
    lang: [
      'olifanten', 'verjaardag', 'kapstokken', 'gevaarlijk', 'boterham', 'beloning', 'bananen', 'piraten', 'vakantie', 'tekening',
      'kampvuren', 'schildpadden', 'regenjas', 'brandweerman', 'vlindertuin', 'telefoon', 'komkommer', 'aardbeien', 'kinderen', 'boerderij',
      'sprookjesboek', 'snoepwinkel', 'voetballer', 'dromerig', 'zonnebril', 'wintermuts', 'ziekenhuis', 'spinnenweb', 'schoolreisje', 'regenboog',
      'kangoeroe', 'molenaar', 'timmerman', 'zakdoeken', 'paddenstoel', 'kabouters', 'pinguïn', 'bakkerij', 'vergeten', 'onweersbui',
      'verstoppen', 'avondrood', 'mopperen', 'gitaren', 'zeemeermin', 'fietsenrek', 'knikkerbaan', 'slagroomtaart', 'hagelslag', 'opruimen',
      'verhuizen', 'woordenboek', 'tovenaar', 'sneeuwballen', 'vogelnest', 'vuurtoren', 'appelboom', 'regenwolken', 'winkelstraat', 'zonnescherm'
    ],
    moeilijk: [
      'onmiddellijk', 'ziekenhuisbed', 'chauffeur', 'enthousiasme', 'ingewikkeld', 'vertegenwoordiger', 'bibliotheek', 'dinosaurus', 'sinaasappel', 'verantwoordelijk',
      'onafhankelijk', 'temperatuur', 'ambulance', 'restaurant', 'horloge', 'journalist', 'champignon', 'chocolade', 'parachute', 'verschrikkelijk',
      'kinderboerderij', 'avonturen', 'trampoline', 'tandenborstel', 'zandkastelen', 'televisie', 'informatie', 'helikopter', 'politieagent', 'encyclopedie',
      'bouillon', 'souvenir', 'accommodatie', 'interessant', 'elektriciteit', 'machinist', 'brandweerkazerne', 'vliegtuigmaatschappij', 'aardrijkskunde', 'geschiedenis',
      'rekenmachine', 'thermometer', 'natuurkunde', 'ingrediënten', 'knuffelbeesten', 'verkeersregels', 'uitzonderlijk', 'belangstelling', 'waterschildpad', 'vergaderingen',
      'schoonheidsspecialist', 'kampioenschap', 'tegenovergesteld', 'wetenschapper', 'manege', 'pyjamafeest', 'nieuwsgierigheid', 'kaartjesautomaat', 'overweldigend', 'zelfstandigheid'
    ]
  }
};

if (typeof module !== 'undefined') { module.exports = { MOCHI_SPELLING }; }

/*
 * IEP-uitbreiding (vanaf 25 oktober 2026): per dag zes extra werkwoordzinnen
 * en vijf extra woorden, moeilijker dan de gewone: onderwerp ver van het
 * werkwoord, inversie, tijd uit de context, instinkers, Engelse werkwoorden;
 * en bij de woorden leenwoorden, -tie, dubbele medeklinkers, tussen-n/-s,
 * trema, koppelteken en hoofdletters. Ze komen na de gewone van die dag.
 */
const MOCHI_SPELLING_IEP = {
  werkwoorden: [
    // Dag 1
    [
      { soort: 'val', zin: 'Weet jij of je zus nog steeds van paarden ___, of is ze daar inmiddels op uitgekeken?', cue: 'houden', goed: 'houdt', uitleg: 'Let op: je zus betekent jouw zus, dus het onderwerp is een zij. "Is ze uitgekeken" staat in de tegenwoordige tijd. Stam + t: houd + t = houdt.' },
      { soort: 'val', zin: 'Het team van mijn broers ___ dit seizoen bijna elke wedstrijd, dus ze staan bovenaan.', cue: 'winnen', goed: 'wint', uitleg: '"Staan" laat zien dat het nu is: tegenwoordige tijd. Wie wint? Niet de broers, maar het team. Dat is één ding, een hij. Dus stam + t: win + t = wint.' },
      { soort: 'tt', zin: '___ u zich morgen om negen uur bij de balie van het ziekenhuis, mevrouw?', cue: 'melden', goed: 'meldt', uitleg: 'Morgen: tegenwoordige tijd. Bij u schrijf je altijd stam + t, ook als u achter het werkwoord staat. Meld + t = meldt.' },
      { soort: 'vt', zin: 'Mijn opa vertelt dat hij als jongen elke ochtend de koeien ___ voordat hij naar school ging.', cue: 'melken', goed: 'melkte', uitleg: '"Ging" laat zien dat het vroeger was: verleden tijd. De stam is melk en eindigt op een k. De k zit in \'t kofschip, dus melk + te = melkte.' },
      { soort: 'dd', zin: 'Mijn broer ___ met zijn vriend om een zak drop dat Ajax zou winnen, maar hij verloor.', cue: 'wedden', goed: 'wedde', uitleg: '"Verloor": verleden tijd. De stam van wedden is wed, met één d. De d zit niet in \'t kofschip, dus wed + de = wedde.' },
      { soort: 'bijv', zin: 'Op zolder vonden we een ___ doos vol oude foto\'s van opa en oma.', cue: 'vergeten', goed: 'vergeten', uitleg: 'Het voltooid deelwoord van vergeten is vergeten. Een deelwoord dat op -en eindigt, krijgt geen extra e als het voor een zelfstandig naamwoord staat: een vergeten doos.' }
    ],
    // Dag 2
    [
      { soort: 'val', zin: 'Als mijn vader een nieuwe baan in Groningen krijgt, ___ ons hele gezin mee naar het noorden.', cue: 'verhuizen', goed: 'verhuist', uitleg: '"Krijgt": tegenwoordige tijd. Het onderwerp is ons hele gezin: één groep, dus een hij. De stam is verhuis, met een s. Stam + t = verhuist.' },
      { soort: 'tt', zin: 'Een van de koks in dat restaurant ___ elke ochtend de kippen voor het avondeten, dus het ruikt daar altijd lekker.', cue: 'braden', goed: 'braadt', uitleg: '"Ruikt": tegenwoordige tijd. Het onderwerp is een van de koks, dus maar één kok: een hij. Stam + t: braad + t = braadt.' },
      { soort: 'vd', zin: 'Nadat de brandweer het vuur had ___, mochten de buren weer naar binnen.', cue: 'doven', goed: 'gedoofd', uitleg: 'Bij had hoort een voltooid deelwoord: ge + stam + d of t. De stam is doof, maar het hele werkwoord is doven, met een v. De v zit niet in \'t kofschip, dus een d: gedoofd.' },
      { soort: 'dd', zin: 'Na een uur rondjes vliegen boven zee ___ het vliegtuig eindelijk, en alle passagiers klapten.', cue: 'landen', goed: 'landde', uitleg: '"Klapten": verleden tijd. De stam is land en eindigt op een d. De d zit niet in \'t kofschip, dus land + de = landde, met twee d\'s.' },
      { soort: 'engels', zin: 'Mijn broer ___ elke avond met zijn vrienden, terwijl hij eigenlijk zijn huiswerk moet maken.', cue: 'chatten', goed: 'chat', uitleg: '"Moet": tegenwoordige tijd. Mijn broer is een hij, dus stam + t. De stam chat eindigt al op een t, en twee t\'s aan het eind schrijf je niet: chat.' },
      { soort: 'bijv', zin: 'Mama legde de ___ kip op een grote schaal midden op tafel.', cue: 'braden', goed: 'gebraden', uitleg: 'Het voltooid deelwoord van braden is gebraden. Het eindigt op -en, en dan komt er geen e meer achter: de gebraden kip.' }
    ],
    // Dag 3
    [
      { soort: 'val', zin: 'Als ik niet oppas, ___ ik me elke keer aan de hete oven.', cue: 'verbranden', goed: 'verbrand', uitleg: '"Oppas": tegenwoordige tijd. Bij ik schrijf je alleen de stam, nooit een t. De stam van verbranden is verbrand: ik verbrand.' },
      { soort: 'val', zin: 'Niemand wist precies wat er ___, want alle getuigen vertelden een ander verhaal.', cue: 'gebeuren', goed: 'gebeurde', uitleg: '"Wist" en "vertelden": verleden tijd. De stam is gebeur en eindigt op een r. Die zit niet in \'t kofschip, dus gebeur + de = gebeurde.' },
      { soort: 'vt', zin: 'Mijn oma ___ de oude stoel knalgeel, want ze vond bruin zo saai.', cue: 'verven', goed: 'verfde', uitleg: '"Vond": verleden tijd. De stam is verf, maar het hele werkwoord is verven, met een v. De v zit niet in \'t kofschip, dus verf + de = verfde.' },
      { soort: 'vd', zin: 'Hebben jullie de tafels en stoelen al naar de gymzaal ___?', cue: 'verplaatsen', goed: 'verplaatst', uitleg: 'Bij hebben hoort een voltooid deelwoord. Verplaatsen begint met ver-, dus er komt geen ge- voor. De stam verplaats eindigt op een s, die zit in \'t kofschip: verplaatst, met één t.' },
      { soort: 'engels', zin: 'Mijn vader heeft alle oude vakantiefoto\'s in de computer ___.', cue: 'scannen', goed: 'gescand', uitleg: 'Bij heeft hoort een voltooid deelwoord. De stam is scan. De n zit niet in \'t kofschip, dus ge + scan + d = gescand.' },
      { soort: 'tt', zin: 'Hoe ___ je opa al die oude verhalen toch? Hij is al negentig!', cue: 'onthouden', goed: 'onthoudt', uitleg: '"Is": tegenwoordige tijd. Je opa betekent jouw opa, dus het onderwerp is een hij en niet jij. Stam + t: onthoud + t = onthoudt.' }
    ],
    // Dag 4
    [
      { soort: 'val', zin: 'Als je de groep door het donkere bos ___, moet je goed op de kaart kijken.', cue: 'leiden', goed: 'leidt', uitleg: '"Moet": tegenwoordige tijd. Hier staat je vóór het werkwoord. Dan betekent het jij en krijgt het werkwoord een t: leid + t = leidt.' },
      { soort: 'tt', zin: 'Mijn oom en zijn buurman ___ elke zaterdag samen naar de markt, en daar kopen ze altijd verse vis.', cue: 'rijden', goed: 'rijden', uitleg: '"Kopen": tegenwoordige tijd. Het onderwerp is mijn oom en zijn buurman: dat zijn er twee. Bij meer personen schrijf je het hele werkwoord: rijden.' },
      { soort: 'vt', zin: 'De leerlingen die in de pauze buiten speelden, ___ allemaal naar binnen toen het begon te hagelen.', cue: 'rennen', goed: 'renden', uitleg: '"Speelden" en "begon": verleden tijd. Wie renden er? De leerlingen, meer dan één. De stam is ren, de n zit niet in \'t kofschip: ren + den = renden.' },
      { soort: 'dd', zin: 'Mijn moeder ___ het deeg een kwartier lang, en toen mocht het rijzen.', cue: 'kneden', goed: 'kneedde', uitleg: '"Mocht": verleden tijd. De stam is kneed en eindigt op een d. Die zit niet in \'t kofschip, dus kneed + de = kneedde.' },
      { soort: 'bijv', zin: 'Een ___ antwoord is altijd nog beter dan helemaal geen antwoord.', cue: 'raden', goed: 'geraden', uitleg: 'Pas op: de verleden tijd is raadde, maar het voltooid deelwoord is geraden. Het eindigt op -en, dus er komt geen e achter: een geraden antwoord.' },
      { soort: 'vd', zin: 'Heeft de schaatsclub de wedstrijd van zaterdag al ___?', cue: 'afgelasten', goed: 'afgelast', uitleg: 'Bij heeft hoort een voltooid deelwoord. Afgelasten krijgt geen extra ge-. De stam afgelast eindigt al op een t, dus er komt niets meer bij: afgelast.' }
    ],
    // Dag 5
    [
      { soort: 'val', zin: 'Mevrouw, ___ u alstublieft even op mijn tas terwijl ik naar de wc ga?', cue: 'letten', goed: 'let', uitleg: '"Ga": tegenwoordige tijd. Bij u schrijf je stam + t. Maar de stam let eindigt al op een t, en twee t\'s schrijf je niet: let u.' },
      { soort: 'engels', zin: 'Toen de stroom uitviel, was ik blij dat ik mijn werkstuk al had ___.', cue: 'saven', goed: 'gesaved', uitleg: 'Bij had hoort een voltooid deelwoord. Bij Engelse werkwoorden luister je naar de Engelse klank: saven eindigt op een v-klank, en die zit niet in \'t kofschip. Dus een d, en de Engelse e blijft staan: gesaved.' },
      { soort: 'dd', zin: 'De zieke man ___ zo erg uit zijn neus dat hij naar de dokter moest.', cue: 'bloeden', goed: 'bloedde', uitleg: '"Moest": verleden tijd. De stam is bloed en eindigt op een d. Die zit niet in \'t kofschip, dus bloed + de = bloedde.' },
      { soort: 'vd', zin: 'Zijn jullie in de vakantie nog naar Frankrijk ___?', cue: 'reizen', goed: 'gereisd', uitleg: 'Bij zijn hoort hier een voltooid deelwoord. De stam is reis, maar het hele werkwoord is reizen, met een z. De z zit niet in \'t kofschip, dus een d: gereisd.' },
      { soort: 'vd', zin: 'De oude kerk is in de oorlog bijna helemaal ___.', cue: 'verwoesten', goed: 'verwoest', uitleg: 'Bij is hoort een voltooid deelwoord. Verwoesten begint met ver-, dus geen ge-. De stam verwoest eindigt al op een t, dus er komt geen t meer bij: verwoest.' },
      { soort: 'bijv', zin: 'De pas ___ muur mag je niet aanraken, want hij is nog nat.', cue: 'verven', goed: 'geverfde', uitleg: 'Het voltooid deelwoord is geverfd: verven heeft een v, en die zit niet in \'t kofschip. Voor muur komt er een e achter: de geverfde muur.' }
    ],
    // Dag 6
    [
      { soort: 'val', zin: 'Zulke ongelukken ___ vooral als mensen veel te hard rijden.', cue: 'gebeuren', goed: 'gebeuren', uitleg: '"Rijden": tegenwoordige tijd. Wat gebeurt er? Zulke ongelukken: dat zijn er meer. Bij meer dan één schrijf je het hele werkwoord: gebeuren.' },
      { soort: 'val', zin: 'Pas toen we thuis waren, ___ mijn moeder dat ze haar portemonnee in de winkel had laten liggen.', cue: 'ontdekken', goed: 'ontdekte', uitleg: '"Waren": verleden tijd, dus niet ontdekt maar met -te erachter. De stam is ontdek, de k zit in \'t kofschip: ontdek + te = ontdekte.' },
      { soort: 'vt', zin: 'Terwijl mijn vader de auto waste, ___ mijn broertje de fietsen.', cue: 'poetsen', goed: 'poetste', uitleg: '"Waste": verleden tijd. De stam is poets en eindigt op een s. De s zit in \'t kofschip, dus poets + te = poetste.' },
      { soort: 'engels', zin: 'Op de kermis ___ mijn broer in een botsauto achter iedereen aan, totdat de muziek stopte.', cue: 'racen', goed: 'racete', uitleg: '"Stopte": verleden tijd. Racen spreek je uit met een s-klank aan het eind, en die zit in \'t kofschip. Dus race + te = racete.' },
      { soort: 'vd', zin: 'Mijn vader heeft de foto van ons huis flink ___, zodat hij hem boven de bank kon hangen.', cue: 'vergroten', goed: 'vergroot', uitleg: 'Bij heeft hoort een voltooid deelwoord. Vergroten begint met ver-, dus geen ge-. De stam vergroot eindigt al op een t, dus er komt niets bij: vergroot.' },
      { soort: 'bijv', zin: 'Aan de muur hing een ___ foto van onze hond, bijna zo groot als een deur.', cue: 'vergroten', goed: 'vergrote', uitleg: 'Het voltooid deelwoord is vergroot. Voor foto komt er een e achter, en dan schrijf je één o: vergrote. Niet vergrootte, want dat is de verleden tijd.' }
    ],
    // Dag 7
    [
      { soort: 'val', zin: 'De jongens van het team ___ na elke training hun eigen schoenen schoon, anders mogen ze niet meedoen.', cue: 'schoonmaken', goed: 'maken', uitleg: '"Mogen": tegenwoordige tijd. Wie maken de schoenen schoon? Niet het team, maar de jongens: meer dan één. Dus het hele werkwoord: maken.' },
      { soort: 'tt', zin: 'Hoeveel ___ je vader op dit moment voor die oude brommer op de veiling?', cue: 'bieden', goed: 'biedt', uitleg: 'Op dit moment: tegenwoordige tijd. Je vader betekent jouw vader, dus het onderwerp is een hij. Stam + t: bied + t = biedt.' },
      { soort: 'dd', zin: 'Mijn moeder ___ mijn zusje snel aan, want de bus kwam er al aan.', cue: 'aankleden', goed: 'kleedde', uitleg: '"Kwam": verleden tijd. De stam is kleed en eindigt op een d. Die zit niet in \'t kofschip, dus kleed + de = kleedde.' },
      { soort: 'vd', zin: 'Iemand heeft onze jassen ___, want ik heb nu een jas die veel te groot is.', cue: 'verwisselen', goed: 'verwisseld', uitleg: 'Bij heeft hoort een voltooid deelwoord. Ver- krijgt geen ge-. De stam verwissel eindigt op een l, die zit niet in \'t kofschip: verwisseld.' },
      { soort: 'engels', zin: 'Mijn zus heeft het filmpje van ons toneelstuk op internet ___.', cue: 'uploaden', goed: 'geüpload', uitleg: 'Bij heeft hoort een voltooid deelwoord. De stam upload eindigt al op een d, dus er komt niets meer bij. Na ge komt een u, dus zet je puntjes op de u: geüpload.' },
      { soort: 'vt', zin: 'De hond ___ zich onder de tafel, omdat hij bang was voor het onweer.', cue: 'verstoppen', goed: 'verstopte', uitleg: '"Was": verleden tijd. De stam is verstop en eindigt op een p. De p zit in \'t kofschip, dus verstop + te = verstopte.' }
    ],
    // Dag 8
    [
      { soort: 'val', zin: 'Hoe kan het dat jij nooit je gymspullen ___?', cue: 'vergeten', goed: 'vergeet', uitleg: '"Kan": tegenwoordige tijd. Jij staat vóór het werkwoord, dus stam + t. Maar de stam vergeet eindigt al op een t, dus: vergeet.' },
      { soort: 'bijv', zin: 'De ___ hond werd binnen een dag teruggevonden in het bos.', cue: 'ontsnappen', goed: 'ontsnapte', uitleg: 'Het voltooid deelwoord is ontsnapt (de p zit in \'t kofschip). Voor hond komt er een e achter: de ontsnapte hond.' },
      { soort: 'dd', zin: 'Na de wedstrijd ___ de trainer elke speler met een handdruk, en daarna gingen ze naar huis.', cue: 'groeten', goed: 'groette', uitleg: '"Gingen": verleden tijd. De stam is groet en eindigt op een t. De t zit in \'t kofschip, dus groet + te = groette.' },
      { soort: 'vt', zin: 'Mijn opa vertelde dat hij als jongen elke winter op de bevroren sloten ___.', cue: 'schaatsen', goed: 'schaatste', uitleg: '"Vertelde": verleden tijd. De stam is schaats en eindigt op een s. De s zit in \'t kofschip, dus schaats + te = schaatste.' },
      { soort: 'tt', zin: 'De doos met oude kerstballen en slingers ___ al jaren op zolder, en niemand weet nog wat erin zit.', cue: 'staan', goed: 'staat', uitleg: '"Weet": tegenwoordige tijd. Wat staat er op zolder? De doos, niet de kerstballen. De doos is één ding, dus stam + t: staat.' },
      { soort: 'engels', zin: 'Mijn zus ___ elke avond met haar vriendinnen, totdat mijn moeder zei dat het genoeg was.', cue: 'chatten', goed: 'chatte', uitleg: '"Zei": verleden tijd. De stam is chat en eindigt op een t. De t zit in \'t kofschip, dus chat + te = chatte.' }
    ],
    // Dag 9
    [
      { soort: 'val', zin: 'Toen de meester vroeg wie er jarig was, ___ drie kinderen tegelijk.', cue: 'antwoorden', goed: 'antwoordden', uitleg: '"Vroeg": verleden tijd. Wie antwoordden? Drie kinderen, meer dan één. De stam antwoord eindigt op een d, dus antwoord + den = antwoordden.' },
      { soort: 'val', zin: 'Zij zegt dat haar hond nooit ___, maar hij heeft me al twee keer gebeten.', cue: 'bijten', goed: 'bijt', uitleg: '"Zegt": tegenwoordige tijd. Haar hond is een hij, dus stam + t. De stam bijt eindigt al op een t, dus er komt geen t meer bij: bijt.' },
      { soort: 'vd', zin: 'Ik had de sleutel onder de mat ___, maar mijn broer kon hem niet vinden.', cue: 'leggen', goed: 'gelegd', uitleg: 'Bij had hoort een voltooid deelwoord: ge + stam + d of t. De stam is leg, de g zit niet in \'t kofschip. Dus: gelegd.' },
      { soort: 'bijv', zin: 'In de vitrine van het museum lag een ___ zwaard uit de middeleeuwen.', cue: 'verroesten', goed: 'verroest', uitleg: 'Het voltooid deelwoord is verroest. Zwaard is een het-woord en er staat een voor, dus er komt geen e achter: een verroest zwaard.' },
      { soort: 'dd', zin: 'De twee strandwachten ___ samen een zwemmer die in de golven niet meer verder kon.', cue: 'redden', goed: 'redden', uitleg: '"Kon": verleden tijd. Het onderwerp is de twee strandwachten: meervoud. De stam is red, de d zit niet in \'t kofschip: red + den = redden. Het lijkt op het hele werkwoord, maar het is echt de verleden tijd.' },
      { soort: 'vt', zin: 'Voordat we op vakantie gingen, ___ mijn vader nog één keer alle ramen en deuren.', cue: 'controleren', goed: 'controleerde', uitleg: '"Gingen": verleden tijd. De stam is controleer en eindigt op een r. Die zit niet in \'t kofschip, dus controleer + de = controleerde.' }
    ],
    // Dag 10
    [
      { soort: 'val', zin: 'Waarom ___ je je jas niet aan? Het is ijskoud buiten!', cue: 'aantrekken', goed: 'trek', uitleg: '"Is": tegenwoordige tijd. Je staat achter het werkwoord en betekent jij. Dan krijgt het werkwoord geen t: trek je.' },
      { soort: 'tt', zin: 'Iedereen in onze klas, zelfs de strenge meester van groep 7, ___ ademloos als mijn opa komt vertellen over vroeger.', cue: 'luisteren', goed: 'luistert', uitleg: '"Komt": tegenwoordige tijd. Het onderwerp is iedereen, en dat is enkelvoud, net als hij. Stam + t: luister + t = luistert.' },
      { soort: 'engels', zin: 'De vlogger heeft zijn filmpje eerst goed ___ voordat hij het online zette.', cue: 'editen', goed: 'geëdit', uitleg: 'Bij heeft hoort een voltooid deelwoord. De stam edit eindigt al op een t, dus er komt niets bij. Na ge komt een e, dus zet je puntjes op de e: geëdit.' },
      { soort: 'dd', zin: 'De gemeente ___ de smalle weg, zodat er een fietspad naast kon komen.', cue: 'verbreden', goed: 'verbreedde', uitleg: '"Kon": verleden tijd. De stam is verbreed en eindigt op een d. Die zit niet in \'t kofschip, dus verbreed + de = verbreedde.' },
      { soort: 'vd', zin: 'Door het slechte weer is de schoolreis een week ___.', cue: 'uitstellen', goed: 'uitgesteld', uitleg: 'Bij is hoort een voltooid deelwoord. Uit blijft vooraan, daarna ge + stel + d. De l zit niet in \'t kofschip: uitgesteld.' },
      { soort: 'bijv', zin: 'Mijn moeder gooide de ___ bloemen in de groenbak.', cue: 'verwelken', goed: 'verwelkte', uitleg: 'Het voltooid deelwoord is verwelkt (de k zit in \'t kofschip). Voor bloemen komt er een e achter: de verwelkte bloemen.' }
    ],
    // Dag 11
    [
      { soort: 'val', zin: 'Volgens het bord op Schiphol ___ het vliegtuig van oma over tien minuten.', cue: 'landen', goed: 'landt', uitleg: 'Over tien minuten: tegenwoordige tijd. Het vliegtuig is een hij, dus stam + t: land + t = landt.' },
      { soort: 'val', zin: 'De kinderen die achter in de bus zaten, ___ de hele reis door.', cue: 'kletsen', goed: 'kletsten', uitleg: '"Zaten": verleden tijd. Wie kletsten? De kinderen, meer dan één. De stam klets eindigt op een s, die zit in \'t kofschip: klets + ten = kletsten.' },
      { soort: 'vt', zin: 'Mijn broertje ___ niet alleen naar boven, omdat het daar zo donker was.', cue: 'durven', goed: 'durfde', uitleg: '"Was": verleden tijd. De stam is durf, maar het hele werkwoord is durven, met een v. De v zit niet in \'t kofschip, dus durf + de = durfde.' },
      { soort: 'bijv', zin: 'De ___ reis naar Parijs ging helaas niet door.', cue: 'plannen', goed: 'geplande', uitleg: 'Het voltooid deelwoord is gepland (de n zit niet in \'t kofschip). Voor reis komt er een e achter: de geplande reis.' },
      { soort: 'engels', zin: 'De fabriek heeft de oude plastic flessen ___ tot nieuwe truien.', cue: 'recyclen', goed: 'gerecycled', uitleg: 'Bij heeft hoort een voltooid deelwoord. Recyclen eindigt op een l-klank, en die zit niet in \'t kofschip. Dus een d, en de Engelse e blijft staan: gerecycled.' },
      { soort: 'dd', zin: 'Tijdens de warme wandeling ___ iedereen zo erg dat we om de tien minuten moesten drinken.', cue: 'zweten', goed: 'zweette', uitleg: '"Moesten": verleden tijd. Iedereen is enkelvoud. De stam is zweet en eindigt op een t, die zit in \'t kofschip: zweet + te = zweette.' }
    ],
    // Dag 12
    [
      { soort: 'val', zin: 'Weet jij hoeveel een kaartje voor de film van vanavond ___?', cue: 'kosten', goed: 'kost', uitleg: 'Vanavond: tegenwoordige tijd. Een kaartje is een hij, dus stam + t. De stam kost eindigt al op een t, dus: kost.' },
      { soort: 'tt', zin: 'Mijn moeder ___ het brood altijd in dunne sneetjes, want zo vinden wij het lekkerder.', cue: 'snijden', goed: 'snijdt', uitleg: '"Vinden": tegenwoordige tijd. Mijn moeder is een zij, dus stam + t: snijd + t = snijdt.' },
      { soort: 'vd', zin: 'Wij hebben het zieke vogeltje een week lang met een pipetje ___.', cue: 'voeden', goed: 'gevoed', uitleg: 'Bij hebben hoort een voltooid deelwoord: ge + stam + d of t. De stam voed eindigt al op een d, dus er komt niets meer bij: gevoed.' },
      { soort: 'bijv', zin: 'Een ___ kind gaat soms de gekste dingen doen.', cue: 'vervelen', goed: 'verveeld', uitleg: 'Het voltooid deelwoord is verveeld. Kind is een het-woord en er staat een voor, dus er komt geen e achter: een verveeld kind.' },
      { soort: 'dd', zin: 'De herder ___ zijn schapen elke avond terug naar de stal, waar ze veilig sliepen.', cue: 'leiden', goed: 'leidde', uitleg: '"Sliepen": verleden tijd. De stam is leid en eindigt op een d. Die zit niet in \'t kofschip, dus leid + de = leidde.' },
      { soort: 'engels', zin: 'Mijn broer ___ de software van zijn telefoon, en daarna werkte alles weer.', cue: 'updaten', goed: 'updatete', uitleg: '"Werkte": verleden tijd. Updaten spreek je uit met een t-klank aan het eind, en die zit in \'t kofschip. Dus update + te = updatete.' }
    ],
    // Dag 13
    [
      { soort: 'dd', zin: 'Omdat hij zich had verslapen, ___ mijn broer zich naar school.', cue: 'haasten', goed: 'haastte', uitleg: '"Had verslapen": het gebeurde vroeger, verleden tijd. De stam is haast en eindigt op een t. Die zit in \'t kofschip, dus haast + te = haastte.' },
      { soort: 'vt', zin: 'Het meisje dat naast mij in de bus zat, ___ de hele reis uit het raam.', cue: 'staren', goed: 'staarde', uitleg: '"Zat": verleden tijd. Het onderwerp is het meisje. De stam is staar en eindigt op een r, die zit niet in \'t kofschip: staar + de = staarde.' },
      { soort: 'vd', zin: 'De oude brug is helemaal ___, en nu kun je er weer veilig overheen.', cue: 'vernieuwen', goed: 'vernieuwd', uitleg: 'Bij is hoort een voltooid deelwoord. Ver- krijgt geen ge-. De stam vernieuw eindigt op een w, die zit niet in \'t kofschip: vernieuwd.' },
      { soort: 'bijv', zin: 'De pas ___ vloer was nog spiegelglad.', cue: 'dweilen', goed: 'gedweilde', uitleg: 'Het voltooid deelwoord is gedweild (de l zit niet in \'t kofschip). Voor vloer komt er een e achter: de gedweilde vloer.' },
      { soort: 'tt', zin: 'Jouw broer en jij ___ nu toch allebei op voetbal?', cue: 'zitten', goed: 'zitten', uitleg: 'Nu: tegenwoordige tijd. Jouw broer en jij samen zijn jullie: meervoud. Dus het hele werkwoord: zitten.' },
      { soort: 'dd', zin: 'Bij de val ___ de wielrenner zijn knie, maar hij reed toch verder.', cue: 'verwonden', goed: 'verwondde', uitleg: '"Reed": verleden tijd. De stam is verwond en eindigt op een d. Die zit niet in \'t kofschip, dus verwond + de = verwondde.' }
    ],
    // Dag 14
    [
      { soort: 'val', zin: 'Op het strand ___ mijn broer en ik allebei onze schouders, want we waren de zonnebrandcrème vergeten.', cue: 'verbranden', goed: 'verbrandden', uitleg: '"Waren": verleden tijd. Mijn broer en ik zijn samen wij: meervoud. De stam verbrand eindigt op een d, dus verbrand + den = verbrandden.' },
      { soort: 'vt', zin: 'Toen de hele klas voor haar zong, ___ mijn zus tot achter haar oren.', cue: 'blozen', goed: 'bloosde', uitleg: '"Zong": verleden tijd. De stam is bloos, maar het hele werkwoord is blozen, met een z. De z zit niet in \'t kofschip, dus bloos + de = bloosde.' },
      { soort: 'engels', zin: 'Ik heb het formulier ___ en in de brievenbus van school gedaan.', cue: 'printen', goed: 'geprint', uitleg: 'Bij heb hoort een voltooid deelwoord. De stam print eindigt al op een t, dus er komt niets bij: geprint.' },
      { soort: 'vd', zin: 'Het pakketje dat ik vorige week heb besteld, is nog steeds niet ___.', cue: 'bezorgen', goed: 'bezorgd', uitleg: 'Bij is hoort een voltooid deelwoord. Be- krijgt geen ge-. De stam bezorg eindigt op een g, die zit niet in \'t kofschip: bezorgd.' },
      { soort: 'tt', zin: 'Wat ___ jij en je vriendin later eigenlijk worden?', cue: 'willen', goed: 'willen', uitleg: 'Later: tegenwoordige tijd. Het onderwerp is jij en je vriendin: samen zijn dat jullie, meervoud. Dus het hele werkwoord: willen.' },
      { soort: 'bijv', zin: 'De ___ fiets stond al maanden roestig in de stalling bij het station.', cue: 'achterlaten', goed: 'achtergelaten', uitleg: 'Het voltooid deelwoord van achterlaten is achtergelaten. Het eindigt op -en, dus er komt geen e achter: de achtergelaten fiets.' }
    ]
  ],
  woorden: [
    // Dag 1
    [
      { soort: 'leenwoord', zin: 'Mijn huiswerk maak ik aan het ___ op mijn kamer.', goed: 'bureau', fout: ['buro', 'burau'], uitleg: 'Bureau komt uit het Frans. De o-klank aan het eind schrijf je als eau, net als in cadeau.' },
      { soort: '-tie', zin: 'Na het ongeluk zette de ___ de straat af.', goed: 'politie', fout: ['polisie', 'politsie'], uitleg: 'Je hoort "sie", maar je schrijft tie. Denk aan vakantie en informatie.' },
      { soort: 'dubbel', zin: 'Voor mijn verjaardag hadden mijn vriendinnen een ___ voor me bedacht.', goed: 'verrassing', fout: ['verassing', 'verrasing'], uitleg: 'Het komt van verrassen: ver + rassen. Daarom twee r\'en én twee s\'en.' },
      { soort: 'tussen-n', zin: 'Op zondag eten we een ___ met stroop.', goed: 'pannenkoek', fout: ['pannekoek', 'panenkoek'], uitleg: 'Pan heeft als meervoud pannen. Dan schrijf je in de samenstelling ook -en: pannenkoek.' },
      { soort: 'hoofdletter', zin: 'Mijn overgrootvader vertelde vaak verhalen over de ___.', goed: 'Tweede Wereldoorlog', fout: ['tweede wereldoorlog', 'Tweede wereldoorlog'], uitleg: 'Dit is de naam van één bepaalde oorlog. Daarom krijgen beide woorden een hoofdletter: Tweede Wereldoorlog.' }
    ],
    // Dag 2
    [
      { soort: 'leenwoord', zin: 'De ___ van de bus wachtte tot iedereen zat.', goed: 'chauffeur', fout: ['chaufeur', 'sjoffeur'], uitleg: 'Chauffeur is Frans: je schrijft ch voor de sj-klank, au voor de o en dubbel f.' },
      { soort: '-tie', zin: 'In de ___ gaan we kamperen in Frankrijk.', goed: 'vakantie', fout: ['vakansie', 'vacantie'], uitleg: 'Vakantie schrijf je met een k vooraan en tie aan het eind.' },
      { soort: 'tussen-s', zin: 'In het ___ kun je de eendjes voeren.', goed: 'stadspark', fout: ['stadpark', 'statspark'], uitleg: 'Je hoort een s tussen stad en park, dus schrijf je hem ook: stads-park. Stad blijft stad, met een d.' },
      { soort: 'trema', zin: 'Mijn broer is erg ___ in dinosaurussen.', goed: 'geïnteresseerd', fout: ['geinteresseerd', 'geïntresseerd'], uitleg: 'Zonder trema lees je "gei". Het puntje op de i laat zien dat er een nieuwe klank begint: ge-ïn. En vergeet de e na de t niet: interesse.' },
      { soort: 'meervoud', zin: 'In de gang stonden drie natte ___.', goed: 'paraplu\'s', fout: ['paraplus', 'parapluus'], uitleg: 'Paraplu eindigt op een lange klank (u). Dan zet je een apostrof voor de s, zodat je hem goed blijft uitspreken.' }
    ],
    // Dag 3
    [
      { soort: 'leenwoord', zin: 'Papa zet de auto \'s avonds in de ___.', goed: 'garage', fout: ['garaasje', 'garasje'], uitleg: 'Garage komt uit het Frans. De zj-klank aan het eind schrijf je als ge.' },
      { soort: 'dubbel', zin: 'Het boek over de ruimte was heel ___.', goed: 'interessant', fout: ['intressant', 'interresant'], uitleg: 'Inter-es-sant: één r, daarna een e, en dan twee s\'en.' },
      { soort: 'koppelteken', zin: 'Bij het kruispunt is gisteren een ___ gebeurd.', goed: 'auto-ongeluk', fout: ['autoongeluk', 'auto ongeluk'], uitleg: 'Twee o\'s naast elkaar zou je lezen als oo. Daarom zet je er een streepje tussen: auto-ongeluk.' },
      { soort: '-ig-lijk-isch', zin: 'Een rugzak is heel ___ als je gaat wandelen.', goed: 'praktisch', fout: ['practisch', 'praktis'], uitleg: 'Je hoort "ies", maar bijvoeglijke naamwoorden als deze eindigen op -isch: praktisch, typisch, logisch.' },
      { soort: 'hoofdletter', zin: 'In de zomer zwemmen we in de ___.', goed: 'Noordzee', fout: ['noordzee', 'Noord-Zee'], uitleg: 'De Noordzee is de naam van één zee, dus een hoofdletter. Het is één woord, zonder streepje.' }
    ],
    // Dag 4
    [
      { soort: 'leenwoord', zin: 'Op mijn ___ zie ik dat het al half vier is.', goed: 'horloge', fout: ['horlosje', 'orloge'], uitleg: 'Horloge komt uit het Frans. Je begint met een h en de zj-klank aan het eind schrijf je als ge.' },
      { soort: '-tie', zin: 'In de klas hadden we een ___ over de schooltijden.', goed: 'discussie', fout: ['discutie', 'diskussie'], uitleg: 'Discussie komt van discussiëren: met c vooraan, twee s\'en en -sie aan het eind.' },
      { soort: 'tussen-n', zin: 'Het was zo zonnig dat ik mijn ___ opzette.', goed: 'zonnebril', fout: ['zonnenbril', 'zonebril'], uitleg: 'Er is maar één zon aan de hemel. Daarom geen n ertussen: zonnebril, net als zonnebloem.' },
      { soort: 'c-k-s', zin: 'Gisteren gingen we naar een ___ van mijn favoriete zanger.', goed: 'concert', fout: ['koncert', 'consert'], uitleg: 'Concert begint met een c die als k klinkt. De tweede c klinkt als s, omdat er een e achter staat.' },
      { soort: 'verkleinwoord', zin: 'In het poppenhuis woont een ___ met een gouden kroon.', goed: 'koninkje', fout: ['koningje', 'koninkkje'], uitleg: 'Na -ing wordt het verkleinwoord -inkje: koning wordt koninkje, net als woning wordt woninkje.' }
    ],
    // Dag 5
    [
      { soort: 'leenwoord', zin: 'Voor oma\'s verjaardag gingen we uit eten in een ___.', goed: 'restaurant', fout: ['restorant', 'restaurand'], uitleg: 'Restaurant komt uit het Frans: de o-klank schrijf je als au, en aan het eind staat een t.' },
      { soort: 'dubbel', zin: 'Ik kwam mijn juf ___ tegen in de supermarkt.', goed: 'toevallig', fout: ['toevalig', 'toevallich'], uitleg: 'Het komt van toeval. Na de korte a komen twee l\'en: toe-val-lig. En het eind schrijf je als -ig.' },
      { soort: 'meervoud', zin: 'Op het station stonden drie ___ te wachten.', goed: 'taxi\'s', fout: ['taxis', 'taxies'], uitleg: 'Taxi eindigt op een i die je lang uitspreekt. Dan krijgt het meervoud een apostrof: taxi\'s.' },
      { soort: 'tussen-n', zin: 'Je ___ loopt van je nek tot onder in je rug.', goed: 'ruggengraat', fout: ['ruggegraat', 'rugengraat'], uitleg: 'Rug heeft als meervoud ruggen. Daarom schrijf je ruggengraat, met dubbel g en -en.' },
      { soort: 'trema', zin: 'Ik heb veel ___ voor ons werkstuk.', goed: 'ideeën', fout: ['ideeen', 'ideën'], uitleg: 'Idee + en: dan staan er drie e\'s naast elkaar. Het trema op de laatste e laat zien dat daar een nieuwe klank begint: ide-eën.' }
    ],
    // Dag 6
    [
      { soort: 'leenwoord', zin: 'De ___ schreef een artikel over onze school voor de krant.', goed: 'journalist', fout: ['sjoernalist', 'journaliest'], uitleg: 'Journalist komt van het Franse journal. Je schrijft j-ou, ook al hoor je "sjoe".' },
      { soort: '-tie', zin: 'Wij wonen in de ___ Gelderland.', goed: 'provincie', fout: ['provintie', 'provinsie'], uitleg: 'Provincie eindigt op -cie. Dat hoor je niet, dat moet je gewoon onthouden.' },
      { soort: 'hoofdletter', zin: 'In het ___ restaurant aten we sushi en loempia\'s.', goed: 'Aziatische', fout: ['aziatische', 'Aziatiesche'], uitleg: 'Het komt van Azië, een werelddeel. Woorden die van een naam komen krijgen een hoofdletter: Aziatisch, Nederlands, Frans.' },
      { soort: 'koppelteken', zin: 'Mijn zusje moet altijd alles wat ik doe ___.', goed: 'na-apen', fout: ['naäpen', 'naapen'], uitleg: 'Na en apen: a en a naast elkaar lees je als aa. Bij een samenstelling zet je dan een streepje: na-apen.' },
      { soort: '-ig-lijk-isch', zin: 'Mijn opa wordt dit jaar ___.', goed: 'zeventig', fout: ['zeventich', 'zeventigh'], uitleg: 'Tientallen eindigen op -tig: twintig, dertig, zeventig. Je hoort een ch, maar je schrijft g.' }
    ],
    // Dag 7
    [
      { soort: 'leenwoord', zin: 'Alle leerlingen vulden een ___ in over het schoolplein.', goed: 'enquête', fout: ['enquete', 'enkête'], uitleg: 'Enquête komt uit het Frans: met qu en een dakje op de e (ê).' },
      { soort: 'dubbel', zin: 'Mijn moeder zit in de ___ die het schoolfeest organiseert.', goed: 'commissie', fout: ['comissie', 'commisie'], uitleg: 'Commissie heeft twee keer dubbel: twee m\'en en twee s\'en.' },
      { soort: 'tussen-n', zin: 'Als ik ziek ben, maakt mijn vader ___ voor me.', goed: 'kippensoep', fout: ['kippesoep', 'kipensoep'], uitleg: 'Kip heeft als meervoud kippen. Daarom schrijf je kippensoep, met -en ertussen.' },
      { soort: 'c-k-s', zin: 'Mijn broer moet volgende week ___ doen voor zijn diploma.', goed: 'examen', fout: ['eksamen', 'exsamen'], uitleg: 'De x klinkt als ks. Je schrijft gewoon een x: examen, net als extra.' },
      { soort: 'meervoud', zin: 'Op de rivier voeren drie ___ voorbij.', goed: 'kano\'s', fout: ['kanos', 'kanoos'], uitleg: 'Kano eindigt op een lange o. Bij het meervoud zet je een apostrof voor de s: kano\'s, net als foto\'s.' }
    ],
    // Dag 8
    [
      { soort: 'leenwoord', zin: 'Het is koud, dus doe je ___ maar om.', goed: 'sjaal', fout: ['chaal', 'sjahl'], uitleg: 'Sjaal schrijf je met sj vooraan en twee a\'s.' },
      { soort: '-tie', zin: 'Op internet zocht ik ___ over haaien.', goed: 'informatie', fout: ['informasie', 'informatsie'], uitleg: 'Informatie eindigt op -tie, net als presentatie en vakantie.' },
      { soort: 'tussen-s', zin: 'Op mijn ___ kwamen twaalf kinderen.', goed: 'verjaardagsfeest', fout: ['verjaardagfeest', 'verjaardachsfeest'], uitleg: 'Je hoort een s tussen verjaardag en feest, dus schrijf je die ook. Verjaardag blijft gewoon met een g.' },
      { soort: 'hoofdletter', zin: 'Mijn moeder heeft de ___ nationaliteit.', goed: 'Nederlandse', fout: ['nederlandse', 'Nederlanse'], uitleg: 'Nederlands komt van Nederland, een naam. Daarom een hoofdletter. En vergeet de d niet: Neder-land-se.' },
      { soort: 'trema', zin: 'Mijn opa ging naar een ___ van zijn oude school.', goed: 'reünie', fout: ['reunie', 'reüni'], uitleg: 'Zonder trema lees je "reu". Het trema laat zien dat de u een nieuwe klank begint: re-u-nie.' }
    ],
    // Dag 9
    [
      { soort: 'leenwoord', zin: 'Het ___ van de wiskundetoets was best hoog.', goed: 'niveau', fout: ['nivo', 'nieveau'], uitleg: 'Niveau komt uit het Frans: de o-klank aan het eind schrijf je als eau, net als bij cadeau en bureau.' },
      { soort: 'dubbel', zin: 'Mijn oom is een ___ fotograaf.', goed: 'professioneel', fout: ['profesioneel', 'proffessioneel'], uitleg: 'Het komt van professie: één f en twee s\'en. Pro-fes-sio-neel.' },
      { soort: 'koppelteken', zin: 'Bij de kust zagen we een ___ duiken naar vis.', goed: 'zee-eend', fout: ['zeeëend', 'zeeeend'], uitleg: 'Zee + eend geeft drie e\'s op een rij. Bij een samenstelling zet je dan een streepje: zee-eend.' },
      { soort: '-tie', zin: 'Bij de ___ van het hotel kregen we de sleutel van onze kamer.', goed: 'receptie', fout: ['recepsie', 'resepsie'], uitleg: 'Receptie schrijf je met een c die als s klinkt, en -tie aan het eind.' },
      { soort: 'hoofdletter', zin: 'Op ___ verkoop ik oude spullen op de vrijmarkt.', goed: 'Koningsdag', fout: ['koningsdag', 'Koningdag'], uitleg: 'Koningsdag is de naam van een feestdag. Feestdagen krijgen een hoofdletter, net als Pasen en Kerstmis.' }
    ],
    // Dag 10
    [
      { soort: 'leenwoord', zin: 'Op het vliegveld moesten we eerst onze ___ inchecken.', goed: 'bagage', fout: ['bagasje', 'baggage'], uitleg: 'Bagage komt uit het Frans: één g in het midden en de zj-klank schrijf je als ge.' },
      { soort: 'leenwoord', zin: 'Op dinsdag hebben we ___ in de sporthal.', goed: 'gymnastiek', fout: ['gimnastiek', 'gymnastik'], uitleg: 'Gymnastiek komt uit het Grieks. Je hoort een i, maar je schrijft een y: gym. Aan het eind staat -iek.' },
      { soort: 'tussen-n', zin: 'In de hoek van de zolder hing een groot ___.', goed: 'spinnenweb', fout: ['spinneweb', 'spinnenwep'], uitleg: 'Spin heeft als meervoud spinnen. Daarom schrijf je spinnenweb, met -en ertussen. Web eindigt op een b.' },
      { soort: 'meervoud', zin: 'Op het plein zijn veel gezellige ___ met terrasjes.', goed: 'cafés', fout: ['café\'s', 'cafe\'s'], uitleg: 'Café eindigt op een é met een accent. Dat accent laat de klank al goed zien, dus geen apostrof: cafés.' },
      { soort: '-ig-lijk-isch', zin: 'Het is toch ___ dat je moe bent na zo\'n lange dag?', goed: 'logisch', fout: ['logiesch', 'lochisch'], uitleg: 'Je hoort "ies", maar je schrijft -isch, net als bij praktisch en typisch.' }
    ],
    // Dag 11
    [
      { soort: 'leenwoord', zin: 'Bij het ontbijt at ik een ___ met jam.', goed: 'croissant', fout: ['croisant', 'kroissant'], uitleg: 'Croissant is Frans: met een c vooraan en twee s\'en in het midden.' },
      { soort: '-tie', zin: 'Het is bij ons een ___ om met oud en nieuw oliebollen te eten.', goed: 'traditie', fout: ['tradisie', 'traditsie'], uitleg: 'Traditie eindigt op -tie. Je hoort "sie", maar je schrijft tie.' },
      { soort: 'tussen-s', zin: 'We wachtten in de ___ op de trein.', goed: 'stationshal', fout: ['stationhal', 'stationsshal'], uitleg: 'Je hoort een s tussen station en hal, dus schrijf je hem. Maar niet twee: stations-hal.' },
      { soort: 'trema', zin: 'Het is ___ om alle snoepjes zelf op te eten.', goed: 'egoïstisch', fout: ['egoistisch', 'egoïstich'], uitleg: 'Zonder trema lees je "oi". Het trema laat zien dat de i een nieuwe klank begint: e-go-ïs-tisch. En aan het eind -isch.' },
      { soort: 'koppelteken', zin: 'Op safari in ___ zagen we leeuwen en olifanten.', goed: 'Zuid-Afrika', fout: ['Zuid Afrika', 'Zuidafrika'], uitleg: 'Bij een windrichting voor een landnaam zet je een streepje, en beide delen krijgen een hoofdletter: Zuid-Afrika, net als Noord-Holland.' }
    ],
    // Dag 12
    [
      { soort: 'leenwoord', zin: 'Als je je afval scheidt, is dat goed voor het ___.', goed: 'milieu', fout: ['millieu', 'milieuw'], uitleg: 'Milieu komt uit het Frans: één l, en aan het eind ieu.' },
      { soort: '-tie', zin: 'Door elke dag hard te lopen heb ik een goede ___.', goed: 'conditie', fout: ['konditie', 'condisie'], uitleg: 'Conditie begint met een c en eindigt op -tie.' },
      { soort: 'dubbel', zin: 'Onze ___ in Italië had een zwembad.', goed: 'accommodatie', fout: ['accomodatie', 'acommodatie'], uitleg: 'Accommodatie heeft twee keer dubbel: twee c\'s en twee m\'en. Ac-com-mo-da-tie.' },
      { soort: 'tussen-n', zin: 'Bij het ontbijt drink ik een glas ___.', goed: 'bessensap', fout: ['bessesap', 'besensap'], uitleg: 'Bes heeft als meervoud bessen. Daarom schrijf je bessensap, met -en ertussen.' },
      { soort: 'hoofdletter', zin: 'Tijdens de vakantie in Spanje zwommen we in de ___.', goed: 'Middellandse Zee', fout: ['middellandse zee', 'Middellandse zee'], uitleg: 'Middellandse Zee is een naam. Beide woorden krijgen een hoofdletter, net als bij de Tweede Wereldoorlog.' }
    ],
    // Dag 13
    [
      { soort: 'leenwoord', zin: 'Na het tandenpoetsen trek ik mijn ___ aan.', goed: 'pyjama', fout: ['pijama', 'pyama'], uitleg: 'Pyjama schrijf je met een y en daarna een j. Py-ja-ma.' },
      { soort: '-tie', zin: 'Gisteren keken we een film op ___.', goed: 'televisie', fout: ['televiesie', 'televizie'], uitleg: 'Televisie eindigt op -sie, net als discussie. Je hoort "zie", maar je schrijft sie.' },
      { soort: 'tussen-s', zin: 'Op het strand keken we naar de ___.', goed: 'zonsondergang', fout: ['zonondergang', 'zonssondergang'], uitleg: 'Je hoort een s tussen zon en ondergang. Die schrijf je ook, maar maar één: zons-ondergang.' },
      { soort: 'meervoud', zin: 'In het orkest spelen vier ___.', goed: 'cello\'s', fout: ['cellos', 'celloos'], uitleg: 'Cello eindigt op een lange o. Bij het meervoud zet je een apostrof voor de s: cello\'s.' },
      { soort: 'trema', zin: 'Het was heel ___ om te denken dat de kat van de vis zou afblijven.', goed: 'naïef', fout: ['naief', 'naiëf'], uitleg: 'Zonder trema lees je "ai". Het trema op de i laat zien dat je na-ief zegt.' }
    ],
    // Dag 14
    [
      { soort: 'leenwoord', zin: 'Mijn tante is ___ en ontwerpt bruggen.', goed: 'ingenieur', fout: ['ingeneur', 'inzjenieur'], uitleg: 'Ingenieur komt uit het Frans: in-ge-nieur. De zj-klank schrijf je als g.' },
      { soort: 'leenwoord', zin: 'Vanavond eten we ___ met tomatensaus.', goed: 'spaghetti', fout: ['spagetti', 'spaghetty'], uitleg: 'Spaghetti is Italiaans: na de g komt een h, en in het midden staan twee t\'s.' },
      { soort: 'koppelteken', zin: 'In het ___ van mijn oma zitten foto\'s van vroeger.', goed: 'fotoalbum', fout: ['foto-album', 'fotoälbum'], uitleg: 'Een o en een a naast elkaar lees je niet verkeerd. Daarom is geen streepje nodig: fotoalbum. Alleen bij botsende klinkers, zoals in auto-ongeluk, zet je een streepje.' },
      { soort: 'hoofdletter', zin: 'De schilder Rembrandt leefde in de ___.', goed: 'Gouden Eeuw', fout: ['gouden eeuw', 'Gouden eeuw'], uitleg: 'De Gouden Eeuw is de naam van een bepaalde tijd in de geschiedenis. Beide woorden krijgen een hoofdletter.' },
      { soort: 'dubbel', zin: 'Mijn vriendin is ___ voor pinda\'s.', goed: 'allergisch', fout: ['alergisch', 'allergies'], uitleg: 'Allergisch heeft twee l\'en en eindigt op -isch, net als logisch.' }
    ]
  ]
};
MOCHI_SPELLING_IEP.werkwoorden.forEach((dag, i) => MOCHI_SPELLING.werkwoorden[i].push(...dag));
MOCHI_SPELLING_IEP.woorden.forEach((dag, i) => MOCHI_SPELLING.woorden[i].push(...dag));

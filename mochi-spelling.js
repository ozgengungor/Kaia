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

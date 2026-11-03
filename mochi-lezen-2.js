/*
 * Mochi — lezen, deel 2: dag 15 t/m 88 (3 november 2026 – 15 januari 2027),
 * op weg naar de IEP-doorstroomtoets. Zelfde vorm als mochi-lezen.js; de dagen
 * worden achter de eerste 14 gezet. De referentieniveaus staan in mochi-niveaus.js.
 */
const MOCHI_LEZEN_DEEL2 = [
  // Dag 15: Waarom bladeren in de herfst verkleuren
  {
    hardop: {
      titel: 'Waarom bladeren in de herfst verkleuren', soort: 'Informatief', emoji: '🍂',
      alineas: [
        'Elk najaar verandert het bos in een schilderij van geel, oranje en rood. Wandelaars trekken er speciaal voor naar buiten. Toch verkleuren de bladeren niet om er mooi uit te zien. Het is eigenlijk een bijwerking van een slimme spaaractie: de boom maakt zich klaar voor de winter.',
        'In de zomer werkt elk blad als een kleine fabriek. Met zonlicht, water en lucht maakt het suiker, het voedsel van de boom. Daarvoor is bladgroen nodig, een groene kleurstof die het zonlicht opvangt. Bladgroen is zo sterk aanwezig dat het alle andere kleuren in het blad verbergt. Toch zitten er de hele zomer ook gele en oranje kleurstoffen in.',
        'Wanneer de dagen korter worden, stopt de boom met het maken van bladgroen. Hij breekt het zelfs af en haalt de bruikbare stoffen terug naar zijn takken en wortels. Zo gaat er niets verloren. Doordat het groen verdwijnt, worden de gele en oranje kleuren zichtbaar. Sommige bomen, zoals de esdoorn, maken daarnaast een rode kleurstof aan.',
        'Ten slotte groeit er bij de steel van elk blad een laagje kurk. Dat sluit de verbinding met de tak af, waardoor het blad uitdroogt en loslaat. Dat afwerpen is noodzakelijk. In de winter is de grond vaak bevroren, zodat de wortels nauwelijks water kunnen opnemen. Bladeren verdampen juist veel water. Een boom die zijn bladeren zou houden, zou dus uitdrogen.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Waarom zie je in de zomer geen gele en oranje kleuren in het blad?', opties: ['Die kleurstoffen maakt de boom pas in de herfst', 'De zon laat die kleuren verbleken', 'Het bladgroen verbergt ze', 'Die kleurstoffen zitten alleen in de takken'], goed: 2, uitleg: 'Zoek in de tekst naar de woorden uit de vraag: "geel" en "oranje". In alinea 2 staat dat bladgroen alle andere kleuren verbergt, terwijl de gele en oranje kleurstoffen er de hele zomer al in zitten. Ze worden dus niet pas in de herfst gemaakt.' },
        { vaardigheid: 'Beeldspraak', vraag: 'In alinea 2 staat dat elk blad werkt "als een kleine fabriek". Wat bedoelt de schrijver daarmee?', opties: ['Een blad maakt iets: het produceert voedsel voor de boom', 'In een blad zitten kleine machientjes', 'Bladeren maken net zoveel lawaai als een fabriek', 'In een blad werken heel kleine diertjes'], goed: 0, uitleg: 'Dit is een vergelijking. Een fabriek maakt producten. De schrijver bedoelt dat een blad ook iets maakt: suiker, het voedsel van de boom. Echte machines of lawaai zitten er natuurlijk niet in.' },
        { vaardigheid: 'Woordbetekenis', vraag: 'In alinea 4 staat: "Dat afwerpen is noodzakelijk." Wat betekent "afwerpen" hier?', opties: ['laten vallen', 'weer laten groeien', 'opvangen', 'kleur geven'], goed: 0, uitleg: 'Kijk naar de delen van het woord en naar de zin ervoor: af + werpen (gooien). Het blad droogt uit en laat los. Afwerpen betekent hier dus: de bladeren laten vallen.' },
        { vaardigheid: 'Signaalwoord', vraag: 'Alinea 4 begint met "Ten slotte". Wat laat dat signaalwoord zien?', opties: ['Dat er een tegenstelling volgt', 'Dat er een voorbeeld volgt', 'Dat er een oorzaak volgt', 'Dat dit de laatste stap is van wat de boom doet'], goed: 3, uitleg: '"Ten slotte" gebruik je bij de laatste stap of het laatste punt van een rij. De tekst beschrijft stap voor stap wat de boom doet: eerst stopt hij met bladgroen maken, en ten slotte laat hij de bladeren los.' },
        { vaardigheid: 'Verband', vraag: 'Waarom zou een boom die zijn bladeren houdt, in de winter uitdrogen?', opties: ['Omdat de kurklaag al het water in de takken tegenhoudt', 'Omdat de bladeren veel water verdampen, terwijl de wortels uit bevroren grond bijna geen water krijgen', 'Omdat het in de winter nooit regent', 'Omdat de rode kleurstof het water opslokt'], goed: 1, uitleg: 'Hier moet je twee dingen combineren: de bladeren verdampen veel water (gevolg: er gaat water uit de boom) en de wortels kunnen uit bevroren grond nauwelijks water opnemen (er komt niets bij). Er gaat dus meer uit dan erin, en daardoor droogt de boom uit.' },
        { vaardigheid: 'Samenvatten', vraag: 'Welke samenvatting past het best bij de hele tekst?', opties: ['In de herfst gaan veel mensen wandelen om de mooie kleuren in het bos te zien.', 'Bladeren zijn groen door bladgroen, en esdoorns krijgen in de herfst een rode kleur.', 'Bomen laten in de herfst hun bladeren vallen omdat die te zwaar worden.', 'In de herfst stopt de boom met bladgroen maken, waardoor andere kleuren zichtbaar worden; daarna laat hij de bladeren vallen om niet uit te drogen.'], goed: 3, uitleg: 'Een goede samenvatting noemt de hoofdzaken van de hele tekst, niet één detail. Het eerste antwoord gaat alleen over de inleiding en het tweede alleen over de kleuren. Het derde staat niet in de tekst. Alleen het laatste antwoord vat alle alinea\'s samen.' }
      ]
    },
    kort: [
      {
        titel: 'Herfstkleuren in Stadspark De Wielen', soort: 'Tabel',
        tekst: [
          'Herfstkleuren in Stadspark De Wielen: wanneer is welke boom op zijn mooist?',
          'Boom | Kleur in de herfst | Mooiste periode',
          'Berk | geel | begin oktober – eind oktober',
          'Esdoorn | rood en oranje | half oktober – begin november',
          'Beuk | goudbruin | eind oktober – half november',
          'Eik | bruin | begin november – eind november',
          'Ginkgo | felgeel | half november (alle bladeren vallen binnen een paar dagen)',
          'Tip: na een nacht met vorst verkleuren de bladeren extra snel.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Welke boom verliest al zijn bladeren binnen een paar dagen?', opties: ['De berk', 'De eik', 'De esdoorn', 'De ginkgo'], goed: 3, uitleg: 'Bij een tabel lees je niet alles, maar zoek je gericht. Kijk in de kolom "Mooiste periode": alleen bij de ginkgo staat tussen haakjes dat alle bladeren binnen een paar dagen vallen.' },
          { vaardigheid: 'Schema lezen', vraag: 'Op welke datum kun je zowel de berk als de esdoorn op hun mooist zien?', opties: ['5 oktober', '22 oktober', '5 november', '15 november'], goed: 1, uitleg: 'Je moet hier twee rijen van de tabel combineren. De berk is mooi van begin tot eind oktober, de esdoorn van half oktober tot begin november. Alleen in de tweede helft van oktober overlappen die periodes. Op 5 oktober is de esdoorn nog niet op zijn mooist, en in november de berk niet meer.' }
        ]
      },
      {
        titel: 'Het weer voor zaterdag', soort: 'Weerbericht',
        tekst: [
          'Zaterdag begint grijs, met op veel plaatsen mist. In de loop van de ochtend lost de mist op en breekt de zon door. \'s Middags wordt het 13 graden, met een zwakke wind uit het zuiden.',
          '\'s Avonds trekt er vanuit het westen een regengebied over het land. Na middernacht klaart het op. In het oosten van het land kan het dan licht vriezen.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wanneer is het zaterdag het beste weer voor een boswandeling?', opties: ['Vroeg in de ochtend', '\'s Middags', '\'s Avonds', 'Na middernacht'], goed: 1, uitleg: 'Zoek in het weerbericht naar het moment met het fijnste weer. \'s Ochtends is het mistig, \'s avonds regent het en \'s nachts kan het vriezen. \'s Middags schijnt de zon en is het 13 graden.' },
          { vaardigheid: 'Teksten vergelijken', vraag: 'Stadspark De Wielen ligt in het oosten van het land. Wat kan er na de nacht van zaterdag op zondag in het park gebeuren, als je de tabel en het weerbericht combineert?', opties: ['De ginkgo krijgt rode bladeren', 'Het park gaat dicht vanwege de regen', 'De bladeren verkleuren extra snel', 'Alle bomen zijn hun bladeren in één nacht kwijt'], goed: 2, uitleg: 'Hier heb je beide teksten nodig. Het weerbericht zegt dat het in het oosten licht kan vriezen. Onder de tabel staat de tip dat bladeren na een nacht met vorst extra snel verkleuren. Samen geeft dat het antwoord.' }
        ]
      }
    ]
  },
  // Dag 16: De verdwenen sleutel
  {
    hardop: {
      titel: 'De verdwenen sleutel', soort: 'Verhalend', emoji: '🔑',
      alineas: [
        'Vrijdagmiddag gaf mevrouw Bakker hem de sleutel, aan een rood koordje. "Twee keer per dag eten en water voor Moos," zei ze. "En vergeet de kattenbak niet." Daan knikte plechtig en stopte de sleutel diep in de zak van zijn jas. Een week lang voor een kat zorgen: eindelijk vertrouwde iemand hem iets belangrijks toe.',
        'Zaterdagochtend stond hij voor de deur van nummer 9 en greep in zijn zak. Leeg. Hij voelde in zijn andere zak, in zijn broekzakken, zelfs in zijn sokken. Niets. Zijn hart begon te bonken. Achter het raam zat Moos hem verwijtend aan te kijken, alsof hij wist dat zijn ontbijt in gevaar was.',
        'Daan rende naar huis en stormde de kamer van zijn zusje binnen. "Jij hebt aan mijn jas gezeten!" riep hij. Lotte keek hem met grote ogen aan en schudde haar hoofd. Mama kwam erbij en vroeg rustig waar hij de jas allemaal had gedragen. Daan somde het op: school, de supermarkt, het voetbalveld. Hoe langer hij praatte, hoe kleiner hij zich voelde.',
        'Toen pakte mama de jas en voelde langs de onderkant. Daar zat iets hards. In de zak bleek een gat te zitten, en de sleutel was in de voering gegleden. Daan werd rood tot achter zijn oren. Hij liep terug naar Lottes kamer. "Sorry," mompelde hij. "Ik had het niet zomaar op jou mogen gooien."'
      ],
      vragen: [
        { vaardigheid: 'Personage', vraag: 'Hoe voelt Daan zich als hij de sleutel van mevrouw Bakker krijgt?', opties: ['Trots, omdat hij iets belangrijks mag doen', 'Bang, omdat hij niet van katten houdt', 'Verveeld, omdat hij een week voor een kat moet zorgen', 'Boos, omdat hij liever ging voetballen'], goed: 0, uitleg: 'Lees de laatste zin van alinea 1: "eindelijk vertrouwde iemand hem iets belangrijks toe." Het woord "eindelijk" laat zien dat Daan hier blij en trots op is.' },
        { vaardigheid: 'Woordbetekenis', vraag: '"Daan knikte plechtig." Wat betekent "plechtig" hier?', opties: ['ernstig, omdat hij de taak belangrijk vond', 'snel, omdat hij haast had', 'stiekem, zodat niemand het zag', 'lachend, omdat hij het een grap vond'], goed: 0, uitleg: 'Gebruik de zinnen eromheen. Daan vindt het een belangrijke taak, dus hij knikt niet lachend of haastig, maar ernstig en serieus. Dat betekent plechtig.' },
        { vaardigheid: 'Beeldspraak', vraag: '"Hoe langer hij praatte, hoe kleiner hij zich voelde." Wat bedoelt de schrijver?', opties: ['Daan ging steeds lager zitten', 'Daan werd steeds bozer op Lotte', 'Daan kreeg het koud', 'Daan begon zich steeds meer te schamen'], goed: 3, uitleg: 'Je voelt je "klein" als je je schaamt of onzeker bent. Terwijl Daan opsomt waar hij overal is geweest, beseft hij dat hij de sleutel zelf kwijt kan zijn geraakt, en dat hij Lotte onterecht de schuld gaf.' },
        { vaardigheid: 'Ontwikkeling', vraag: 'Hoe verandert Daan in de loop van het verhaal?', opties: ['Van een jongen die bang is voor katten naar een echte kattenvriend', 'Van een vrolijke jongen naar een boze jongen', 'Van iemand die een ander de schuld geeft naar iemand die zijn fout toegeeft', 'Hij verandert niet: hij blijft de hele tijd boos'], goed: 2, uitleg: 'Vergelijk het begin met het eind. In alinea 3 beschuldigt Daan zijn zusje. In alinea 4 zegt hij "Sorry" en geeft hij toe dat hij het niet op haar had mogen gooien. Dat is de verandering.' },
        { vaardigheid: 'Bedoeling', vraag: 'Mama vraagt "rustig" waar Daan de jas allemaal had gedragen. Waarom doet ze dat waarschijnlijk?', opties: ['Ze wil weten of Daan wel naar school is geweest', 'Ze wil dat Daan zelf nadenkt waar de sleutel kan zijn, in plaats van Lotte de schuld te geven', 'Ze wil de jas gaan wassen', 'Ze denkt dat Lotte de sleutel heeft verstopt'], goed: 1, uitleg: 'Dit staat er niet letterlijk; je moet bedenken wat mama wil bereiken. Daan is in paniek en geeft Lotte de schuld. Door rustig te vragen helpt mama hem om zelf na te denken. En inderdaad: terwijl hij praat, gaat hij twijfelen.' },
        { vaardigheid: 'Verwijswoord', vraag: '"Ik had het niet zomaar op jou mogen gooien." Wat bedoelt Daan met "het"?', opties: ['de sleutel', 'zijn jas', 'de schuld', 'de kattenbak'], goed: 2, uitleg: '"Iets op iemand gooien" is hier een uitdrukking: iemand de schuld geven. Daan gooide niet echt iets naar Lotte. Hij beschuldigde haar ten onrechte, en daar zegt hij sorry voor.' }
      ]
    },
    kort: [
      {
        titel: 'Sleutelservice De Klink', soort: 'Advertentie',
        tekst: [
          'Sleutelservice De Klink – Marktstraat 4',
          'Sleutel bijmaken terwijl u wacht: vanaf € 4,50',
          'Sleutel met chip (voor auto of fietsslot): vanaf € 19,95',
          'Buitengesloten? Wij openen uw deur binnen 30 minuten, ook \'s nachts en in het weekend. Bel gratis: 0800-1234.',
          'Openingstijden winkel: maandag t/m vrijdag 8.30–17.30 uur, zaterdag 9.00–16.00 uur.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Je bent op zondagavond buitengesloten. Wat kun je volgens de advertentie doen?', opties: ['Naar de winkel aan de Marktstraat gaan', 'Wachten tot maandag 8.30 uur', 'Niets, want De Klink helpt alleen overdag', 'Gratis bellen naar 0800-1234'], goed: 3, uitleg: 'Zoek de regel die past bij jouw situatie: "Buitengesloten?" Daar staat dat ze ook \'s nachts en in het weekend komen, en dat je gratis kunt bellen. De winkel zelf is op zondag dicht.' },
          { vaardigheid: 'Formulering', vraag: 'Wat betekent "vanaf € 4,50"?', opties: ['Een sleutel kost € 4,50 of meer', 'Elke sleutel kost precies € 4,50', 'Een sleutel kost hoogstens € 4,50', 'Je krijgt € 4,50 korting'], goed: 0, uitleg: '"Vanaf" in een advertentie betekent: dit is de laagste prijs. Een eenvoudige sleutel kost € 4,50, een ingewikkeldere kan duurder zijn. Let op zulke kleine woordjes: ze veranderen de betekenis.' }
        ]
      },
      {
        titel: 'Bedankt!', soort: 'Mail',
        tekst: [
          'Van: Ria Bakker',
          'Aan: Daan',
          'Onderwerp: Bedankt!',
          'Hoi Daan,',
          'We zijn weer thuis! Moos lag lekker te spinnen op de bank en zijn bak was schoon. Wat fijn dat je zo goed voor hem hebt gezorgd.',
          'Als bedankje hebben we iets voor je meegenomen uit Frankrijk. Je mag het morgen na school komen ophalen; ik ben vanaf vier uur thuis.',
          'O ja, wil je de sleutel dan ook meenemen? Dan hang ik hem weer aan het haakje in de gang.',
          'Groetjes, Ria'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat moet Daan morgen meenemen naar mevrouw Bakker?', opties: ['Moos', 'Een cadeautje uit Frankrijk', 'De sleutel', 'Kattenbrokjes'], goed: 2, uitleg: 'Zoek naar een zin waarin Ria iets vraagt. Bijna aan het eind staat: "wil je de sleutel dan ook meenemen?" Het cadeautje krijgt Daan juist van haar.' },
          { vaardigheid: 'Tekstdoel', vraag: 'Wat is het belangrijkste doel van deze mail?', opties: ['Daan bedanken en afspreken wanneer hij langs kan komen', 'Vertellen hoe de vakantie in Frankrijk was', 'Daan vragen om volgende week weer op te passen', 'Klagen over de kattenbak'], goed: 0, uitleg: 'Kijk naar het onderwerp ("Bedankt!") en naar wat de schrijver van Daan wil. Ria bedankt hem en spreekt af wanneer hij het bedankje en de sleutel kan brengen. Over de vakantie zelf vertelt ze niets.' }
        ]
      }
    ]
  },
  // Dag 17: Hoe een vuurtoren werkt
  {
    hardop: {
      titel: 'Hoe een vuurtoren werkt', soort: 'Informatief', emoji: '⚓',
      alineas: [
        'Al eeuwenlang staan er langs de kust hoge torens met een sterke lamp in de top: vuurtorens. Ze helpen schepen om veilig hun weg te vinden, vooral \'s nachts en bij slecht weer. Zonder zo\'n baken zouden schippers in het donker ongemerkt te dicht bij zandbanken of rotsen kunnen komen, met een schipbreuk als gevolg.',
        'Vroeger brandde er bovenin een open vuur van hout of kolen. Later kwamen er olielampen, en tegenwoordig gebruikt men elektrische lampen. Een lamp alleen is echter niet genoeg om ver te schijnen. Daarom staat de lamp in een groot glazen lenzenstelsel. Die lenzen bundelen het licht tot een smalle, krachtige straal, die op zee soms meer dan dertig kilometer ver te zien is.',
        'Elke vuurtoren heeft zijn eigen lichtsignaal, een soort handtekening van licht. De ene toren geeft elke tien seconden twee korte flitsen, een andere schijnt lang en wordt dan even donker. Op hun zeekaarten kunnen schippers opzoeken welk signaal bij welke toren hoort. Zo weten ze precies waar ze zijn, ook als ze verder niets van de kust kunnen zien.',
        'Vroeger woonde er bij elke vuurtoren een vuurtorenwachter. Hij hield de lamp brandend, poetste de lenzen en klom daarvoor elke dag tientallen treden op. Tegenwoordig gaat alles automatisch en wordt de lamp op afstand bewaakt. Bovendien navigeren schepen nu ook met gps. Toch worden de meeste vuurtorens niet afgebroken: als de techniek uitvalt, blijft een lichtsignaal een betrouwbare reserve.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Waarvoor dienen de lenzen in een vuurtoren?', opties: ['Ze beschermen de lamp tegen de regen', 'Ze geven het licht een kleur', 'Ze bundelen het licht, zodat het ver te zien is', 'Ze zorgen dat de lamp minder stroom gebruikt'], goed: 2, uitleg: 'Zoek het woord "lenzen" op in de tekst. In alinea 2 staat dat de lenzen het licht bundelen tot een smalle, krachtige straal die ver te zien is.' },
        { vaardigheid: 'Woordbetekenis', vraag: '"Zonder zo\'n baken zouden schippers in het donker ..." Wat is een "baken"?', opties: ['een herkenningspunt dat de weg wijst', 'een schip dat in nood is', 'een rots in zee', 'een soort reddingsboot'], goed: 0, uitleg: '"Zo\'n" verwijst terug naar iets wat net genoemd is: de vuurtoren, die schepen helpt de weg te vinden. Een baken is dus een herkenningspunt dat de weg wijst.' },
        { vaardigheid: 'Beeldspraak', vraag: 'De schrijver noemt het lichtsignaal "een soort handtekening van licht". Wat bedoelt hij daarmee?', opties: ['De vuurtorenwachter schrijft elke avond zijn naam met licht', 'Elke toren heeft een eigen signaal, zodat je hem kunt herkennen', 'Het licht maakt letters op het water', 'Het lichtsignaal is heel mooi om te zien'], goed: 1, uitleg: 'Een handtekening is van jou alleen: niemand anders heeft precies dezelfde. Zo heeft ook elke vuurtoren een eigen signaal. Daaraan herkent een schipper welke toren hij ziet.' },
        { vaardigheid: 'Signaalwoord', vraag: 'In alinea 4 staat: "Bovendien navigeren schepen nu ook met gps." Welk woord kun je in plaats van "Bovendien" gebruiken zonder dat de betekenis verandert?', opties: ['Toch', 'Daarom', 'Bijvoorbeeld', 'Daarnaast'], goed: 3, uitleg: '"Bovendien" betekent dat er nog iets bij komt: een extra punt. "Daarnaast" betekent hetzelfde. "Toch" geeft een tegenstelling, "Daarom" een gevolg en "Bijvoorbeeld" een voorbeeld.' },
        { vaardigheid: 'Slot', vraag: 'Wat is de functie van de laatste zin van de tekst?', opties: ['Hij legt uit waarom vuurtorens nog nuttig zijn, ook al bestaat er gps', 'Hij vertelt hoe een vuurtorenwachter leefde', 'Hij geeft een voorbeeld van een lichtsignaal', 'Hij legt uit hoe gps werkt'], goed: 0, uitleg: 'Een slotzin rondt vaak een gedachte af. Eerst lees je dat alles automatisch gaat en dat er gps is. Je zou dan denken: zijn vuurtorens nog wel nodig? De laatste zin geeft het antwoord: ja, als reserve als de techniek uitvalt.' },
        { vaardigheid: 'Samenvatten', vraag: 'Welke tussenkop past het best boven alinea 3?', opties: ['Van houtvuur naar elektrische lamp', 'Het werk van de vuurtorenwachter', 'Elke toren zijn eigen signaal', 'Vuurtorens en gps'], goed: 2, uitleg: 'Een tussenkop vat in een paar woorden samen waar de hele alinea over gaat. Alinea 3 gaat over het eigen lichtsignaal van elke toren en hoe schippers dat gebruiken. De andere koppen passen bij alinea 2 of 4.' }
      ]
    },
    kort: [
      {
        titel: 'Open dag Vuurtoren Westhoek', soort: 'Programma',
        tekst: [
          'Open dag Vuurtoren Westhoek – zondag 15 november',
          '10.00 uur | Toren open voor bezoekers (118 treden, niet geschikt voor kinderen onder 6 jaar)',
          '11.00 uur | Rondleiding: het leven van de vuurtorenwachter (45 minuten)',
          '13.00 uur | Lezing: hoe werkt de lens? (30 minuten)',
          '14.30 uur | Rondleiding: het leven van de vuurtorenwachter (45 minuten)',
          '16.00 uur | Laatste beklimming van de toren',
          '17.00 uur | Einde open dag',
          'Toegang: volwassenen € 6, kinderen van 6 t/m 12 jaar € 3, kinderen onder 6 jaar gratis. De rondleidingen en de lezing zijn bij de prijs inbegrepen.'
        ],
        vragen: [
          { vaardigheid: 'Schema lezen', vraag: 'Familie Jansen (twee volwassenen en kinderen van 9 en 4 jaar) gaat naar de open dag. Hoeveel betalen ze samen?', opties: ['€ 12', '€ 15', '€ 18', '€ 21'], goed: 1, uitleg: 'Reken per persoon: twee volwassenen is 2 × € 6 = € 12. Het kind van 9 betaalt € 3. Het kind van 4 is jonger dan 6 en mag gratis naar binnen. Samen is dat € 15.' },
          { vaardigheid: 'Schema lezen', vraag: 'Noor komt om 12.00 uur aan en moet om 15.00 uur weer weg. Ze wil de lezing én een rondleiding meemaken. Lukt dat?', opties: ['Ja: om 13.00 uur de lezing en om 14.30 uur de rondleiding', 'Ja, want de rondleidingen duren maar 30 minuten', 'Nee, want de lezing begint pas om 16.00 uur', 'Nee, want de tweede rondleiding is pas om 15.15 uur afgelopen'], goed: 3, uitleg: 'De lezing om 13.00 uur lukt. De eerste rondleiding is al geweest. De tweede begint om 14.30 uur en duurt 45 minuten, dus hij eindigt om 15.15 uur. Dan moet Noor al weg zijn.' }
        ]
      },
      {
        titel: 'Opwindzaklamp Zeeblik', soort: 'Gebruiksaanwijzing',
        tekst: [
          'Opwindzaklamp Zeeblik – gebruiksaanwijzing',
          '1. Klap de slinger aan de zijkant uit.',
          '2. Draai de slinger één minuut rond, met de klok mee. Dat geeft ongeveer twintig minuten licht.',
          '3. Druk één keer op de knop voor wit licht, twee keer voor knipperend rood licht.',
          '4. Houd de knop drie seconden ingedrukt om de lamp uit te zetten.',
          'Let op: draai nooit tegen de klok in. Dan kan het mechanisme beschadigen.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Hoe zet je de lamp uit?', opties: ['Eén keer op de knop drukken', 'De slinger inklappen', 'De knop drie seconden ingedrukt houden', 'De slinger tegen de klok in draaien'], goed: 2, uitleg: 'In een gebruiksaanwijzing zoek je de stap die bij jouw vraag hoort. Stap 4 gaat over uitzetten. Tegen de klok in draaien mag juist nooit.' },
          { vaardigheid: 'Instructie', vraag: 'Bram wil een uur lang licht hebben. Hoe lang moet hij ongeveer aan de slinger draaien?', opties: ['Eén minuut', 'Drie minuten', 'Twintig minuten', 'Een uur'], goed: 1, uitleg: 'Eén minuut draaien geeft twintig minuten licht. Een uur is 60 minuten, dus drie keer zoveel: 3 × 20 = 60. Bram moet dus ongeveer drie minuten draaien.' }
        ]
      }
    ]
  },
  // Dag 18: Mobiel in de klas: ja of nee?
  {
    hardop: {
      titel: 'Mobiel in de klas: ja of nee?', soort: 'Betoog', emoji: '📱',
      alineas: [
        'In bijna elke rugzak zit tegenwoordig een mobiele telefoon. Op steeds meer scholen moet die tijdens de les in een kluisje of in een bak bij de deur. Sommige leerlingen vinden dat overdreven. Ik ben het met de scholen eens: een mobiel hoort niet in de klas.',
        'Mijn belangrijkste argument is concentratie. Een telefoon trekt voortdurend aan je aandacht, ook als hij stil op tafel ligt. Eén trilling is genoeg om je gedachten af te leiden van de som of de tekst waarmee je bezig was. Onderzoekers ontdekten zelfs dat leerlingen beter presteren wanneer hun telefoon in een andere ruimte ligt.',
        'Daarnaast wordt de pauze gezelliger. Wie niet op een scherm kijkt, praat met klasgenoten, speelt een spelletje of gaat buiten voetballen. Bovendien voorkom je ruzies over berichtjes en over foto\'s die zonder toestemming worden gemaakt en doorgestuurd.',
        'Tegenstanders zeggen dat je met een mobiel ook dingen kunt opzoeken of oefenen. Dat klopt, maar daarvoor heeft de school laptops of tablets, die de juf beter in de gaten kan houden. En wie in een noodgeval zijn ouders moet bereiken, kan altijd de schooltelefoon gebruiken. Mijn conclusie is daarom duidelijk: de mobiel mag mee naar school, maar in de klas blijft hij in het kluisje.'
      ],
      vragen: [
        { vaardigheid: 'Standpunt', vraag: 'Wat vindt de schrijver?', opties: ['Mobieltjes moeten helemaal verboden worden op school', 'Een mobiel hoort niet in de klas', 'Leerlingen moeten zelf bepalen of ze hun mobiel gebruiken', 'Scholen moeten meer laptops kopen'], goed: 1, uitleg: 'De mening van de schrijver staat vaak aan het begin en aan het eind. In alinea 1 staat: "een mobiel hoort niet in de klas." Let op: de schrijver vindt wél dat de mobiel mee naar school mag. Een volledig verbod is dus niet zijn mening.' },
        { vaardigheid: 'Signaalwoord', vraag: 'Alinea 3 begint met "Daarnaast". Wat geeft dat woord aan?', opties: ['Er volgt nog een argument', 'Er volgt een tegenargument', 'Er volgt de conclusie', 'Er volgt een voorbeeld'], goed: 0, uitleg: '"Daarnaast" betekent: er komt nog iets bij. In alinea 2 stond het eerste argument (concentratie); in alinea 3 volgt nog een argument (een gezelligere pauze).' },
        { vaardigheid: 'Informatie zoeken', vraag: 'Wat kun je volgens de schrijver doen als je in een noodgeval je ouders moet bellen?', opties: ['Je mobiel uit het kluisje halen', 'Een mail sturen via de laptop', 'Wachten tot de pauze', 'De schooltelefoon gebruiken'], goed: 3, uitleg: 'Zoek in de tekst het woord "noodgeval". In alinea 4 staat dat je dan altijd de schooltelefoon kunt gebruiken.' },
        { vaardigheid: 'Standpunt en argument', vraag: 'Welke zin is een argument van de schrijver, en niet het standpunt zelf?', opties: ['Een telefoon trekt voortdurend aan je aandacht, ook als hij stil op tafel ligt.', 'Een mobiel hoort niet in de klas.', 'In bijna elke rugzak zit tegenwoordig een mobiele telefoon.', 'Tegenstanders zeggen dat je met een mobiel ook dingen kunt opzoeken.'], goed: 0, uitleg: 'Het standpunt is wat de schrijver vindt; een argument is de reden waarom. "Een mobiel hoort niet in de klas" is het standpunt. De zin over de rugzak is een inleiding, en de zin over tegenstanders is juist een tegenargument. Dat een telefoon steeds aan je aandacht trekt, is een reden voor het standpunt.' },
        { vaardigheid: 'Alinea', vraag: 'Wat doet de schrijver in alinea 4?', opties: ['Hij geeft een nieuw argument voor zijn standpunt', 'Hij vertelt wat er in de pauze gebeurt', 'Hij noemt een tegenargument, reageert daarop en geeft zijn conclusie', 'Hij verandert van mening'], goed: 2, uitleg: 'Let op de woorden "Tegenstanders zeggen" en "Dat klopt, maar". Zo kondigt een schrijver een tegenargument aan en weerlegt hij het. Met "Mijn conclusie is daarom" sluit hij af.' },
        { vaardigheid: 'Bedoeling', vraag: 'Waarom noemt de schrijver in alinea 2 het onderzoek naar leerlingen van wie de telefoon in een andere ruimte lag?', opties: ['Om zijn argument sterker te maken met bewijs', 'Om te laten zien dat hij zelf onderzoeker is', 'Om uit te leggen hoe een telefoon werkt', 'Om de tegenstanders gelijk te geven'], goed: 0, uitleg: 'Een schrijver die je wil overtuigen, ondersteunt zijn argument graag met bewijs. Het onderzoek laat zien dat het argument over concentratie niet zomaar een mening is.' }
      ]
    },
    kort: [
      {
        titel: 'Enquête: mobiel op school', soort: 'Tabel',
        tekst: [
          'Enquête in groep 7 en 8 van De Regenboog: hoe vaak kijk jij op school op je mobiel?',
          'Antwoord | groep 7 | groep 8',
          'Nooit, ik heb geen mobiel | 9 leerlingen | 4 leerlingen',
          'Alleen in de pauze | 12 leerlingen | 14 leerlingen',
          'Ook stiekem in de les | 3 leerlingen | 8 leerlingen',
          'Totaal | 24 leerlingen | 26 leerlingen'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Hoeveel leerlingen van groep 8 kijken alleen in de pauze op hun mobiel?', opties: ['12', '8', '26', '14'], goed: 3, uitleg: 'Zoek eerst de goede rij ("Alleen in de pauze") en daarna de goede kolom ("groep 8"). Waar ze elkaar kruisen, staat het antwoord: 14. Het getal 12 hoort bij groep 7.' },
          { vaardigheid: 'Schema lezen', vraag: 'Welke uitspraak klopt volgens de tabel?', opties: ['In groep 7 hebben meer leerlingen een mobiel dan in groep 8', 'De helft van groep 8 kijkt stiekem in de les op zijn mobiel', 'In groep 8 kijken meer leerlingen stiekem in de les op hun mobiel dan in groep 7', 'In groep 7 kijkt niemand in de les op zijn mobiel'], goed: 2, uitleg: 'Controleer elke uitspraak met de getallen. Stiekem in de les: groep 7 heeft 3 leerlingen, groep 8 heeft er 8. Dat klopt dus. In groep 7 hebben juist méér kinderen géén mobiel (9 tegen 4), en 8 van de 26 is lang niet de helft.' }
        ]
      },
      {
        titel: 'Bericht van juf Esra', soort: 'Bericht',
        tekst: [
          'Bericht van juf Esra – groep 8',
          'Beste ouders,',
          'Vanaf maandag 9 november gaan alle mobieltjes van groep 8 bij binnenkomst in de telefoonkast. Na schooltijd krijgen de kinderen ze terug. Op woensdagmiddag gebruiken we de telefoons wel, tijdens de les mediawijsheid.',
          'Moet u uw kind onder schooltijd dringend bereiken? Bel dan naar de administratie: 010-555 2468.',
          'Met vriendelijke groet, juf Esra'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wanneer mogen de leerlingen hun mobiel in de klas wel gebruiken?', opties: ['Tijdens de pauze', 'Als hun ouders bellen', 'Op woensdagmiddag, tijdens de les mediawijsheid', 'Nooit meer'], goed: 2, uitleg: 'Zoek het woordje "wel" in het bericht: "Op woensdagmiddag gebruiken we de telefoons wel." Tijdens de pauze liggen ze gewoon in de kast, want ze komen pas na schooltijd terug.' },
          { vaardigheid: 'Bedoeling', vraag: 'Waarom zet juf Esra het telefoonnummer van de administratie in het bericht?', opties: ['Omdat de administratie de telefoonkast beheert', 'Omdat ouders hun kind onder schooltijd niet meer op de mobiel kunnen bereiken', 'Omdat ouders moeten melden of hun kind een mobiel heeft', 'Omdat de juf zelf geen telefoon heeft'], goed: 1, uitleg: 'Denk na over het gevolg van de nieuwe regel: de mobieltjes liggen de hele dag in de kast. Ouders kunnen hun kind dus niet meer zelf bellen. Daarom geeft de juf een ander nummer voor dringende gevallen.' }
        ]
      }
    ]
  },
  // Dag 19: Spechten, de timmerlieden van het bos
  {
    hardop: {
      titel: 'Spechten, de timmerlieden van het bos', soort: 'Informatief', emoji: '🌳',
      alineas: [
        'Wie in het voorjaar door een bos loopt, hoort soms een snel geroffel, alsof er iemand met een drilboor aan het werk is. Grote kans dat het een specht is. In Nederland leven verschillende soorten, zoals de grote bonte specht en de groene specht. Ze hebben één ding gemeen: ze hakken met hun snavel in hout.',
        'Spechten doen dat om drie redenen. Ten eerste zoeken ze voedsel: ze hakken een gaatje in de schors en vissen er met hun lange, kleverige tong larven en kevers uit. Ten tweede maken ze een nestholte in een boomstam. Ten derde roffelen ze om hun gebied af te bakenen en een partner te lokken. Dat geroffel is eigenlijk een soort lied, maar dan zonder stem.',
        'Een mens zou van zoveel gebonk hoofdpijn krijgen, maar het lichaam van een specht is erop gebouwd. Zijn hersenen zijn klein en zitten stevig in de schedel, zodat ze nauwelijks heen en weer schudden. Met zijn stijve staartveren en sterke tenen steunt hij tegen de stam, zodat hij niet achterover valt.',
        'Spechten zijn belangrijk voor het hele bos. Ze eten insecten die bomen kunnen beschadigen. Bovendien gebruiken ze een nestholte meestal maar één seizoen. Daarna trekken er andere dieren in, zoals mezen, boomklevers en zelfs vleermuizen. Zo zorgt het werk van de specht voor woonruimte voor veel andere bosbewoners.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Waarvoor gebruikt de specht zijn lange, kleverige tong?', opties: ['Om een partner te lokken', 'Om zich aan de boom vast te houden', 'Om larven en kevers uit het hout te halen', 'Om gaatjes in de schors te maken'], goed: 2, uitleg: 'Zoek de woorden "kleverige tong" op. In alinea 2 staat dat de specht er larven en kevers mee uit het hout vist. Het gaatje maakt hij met zijn snavel.' },
        { vaardigheid: 'Signaalwoord', vraag: 'In alinea 2 staan "Ten eerste", "Ten tweede" en "Ten derde". Wat voor verband geven die woorden aan?', opties: ['Een opsomming', 'Een tegenstelling', 'Een oorzaak en een gevolg', 'Een vergelijking'], goed: 0, uitleg: 'Met "ten eerste, ten tweede, ten derde" zet een schrijver dingen op een rij: dat heet een opsomming. Hier worden de drie redenen opgesomd waarom spechten in hout hakken.' },
        { vaardigheid: 'Beeldspraak', vraag: 'Waarom noemt de schrijver spechten in de titel "de timmerlieden van het bos"?', opties: ['Omdat ze bomen omhakken', 'Omdat ze in houten huisjes wonen', 'Omdat ze andere dieren helpen verhuizen', 'Omdat ze net als een timmerman met hout werken en er gaten in maken'], goed: 3, uitleg: 'Een timmerman werkt met hout en hamert de hele dag. Een specht hakt en roffelt ook in hout en maakt er holtes in. Daarom vergelijkt de schrijver hem met een timmerman. Bomen omhakken doet een specht niet.' },
        { vaardigheid: 'Verwijswoord', vraag: 'In alinea 4 staat: "Daarna trekken er andere dieren in." Wanneer is "daarna"?', opties: ['Nadat de specht de holte één seizoen heeft gebruikt', 'Nadat de specht de insecten heeft opgegeten', 'Nadat de boom is omgevallen', 'Nadat de vleermuizen zijn vertrokken'], goed: 0, uitleg: 'Een woord als "daarna" verwijst terug naar de zin ervoor. Daar staat dat spechten een nestholte maar één seizoen gebruiken. Als ze die verlaten, trekken er andere dieren in.' },
        { vaardigheid: 'Eigen kennis', vraag: 'Een boswachter laat oude, dode bomen staan in plaats van ze op te ruimen. Welke reden past het best bij de informatie uit de tekst?', opties: ['Dode bomen zijn mooier dan levende bomen', 'In dode bomen zitten geen insecten meer', 'In zulke bomen kunnen spechten holtes hakken, waar later ook andere dieren gaan wonen', 'Spechten eten het liefst dood hout'], goed: 2, uitleg: 'Combineer de tekst met wat je al weet. Uit de tekst weet je dat de holtes van spechten later woonruimte geven aan andere dieren. Dat oud, zachter hout makkelijker te bewerken is, weet je misschien zelf. In dood hout zitten trouwens juist veel insecten, en hout eten spechten niet.' },
        { vaardigheid: 'Alinea', vraag: 'Wat is de functie van alinea 4 in de tekst?', opties: ['Ze legt uit waarom spechten geen hoofdpijn krijgen', 'Ze laat zien waarom spechten nuttig zijn voor het bos en zijn bewoners', 'Ze beschrijft hoe een specht eruitziet', 'Ze noemt de soorten spechten in Nederland'], goed: 1, uitleg: 'De eerste zin van alinea 4 zegt het al: "Spechten zijn belangrijk voor het hele bos." De rest van de alinea legt uit waarom: ze eten schadelijke insecten en maken woonruimte voor andere dieren.' }
      ]
    },
    kort: [
      {
        titel: 'Wandelroute Spechtenpad', soort: 'Informatiebord',
        tekst: [
          'Wandelroute Spechtenpad – 4,5 km (ongeveer anderhalf uur)',
          'Volg de paaltjes met het groene spechtje.',
          'Onderweg: 1 Vogelkijkhut bij de vijver – 2 Uitzichttoren (gesloten bij storm) – 3 Speelbos',
          'Honden zijn welkom, mits aangelijnd.',
          'Van 15 maart tot en met 15 juli broeden er veel vogels. Blijf dan op de paden.',
          'Parkeren en koffie: bij Theehuis De Eikel, aan het begin van de route.'
        ],
        vragen: [
          { vaardigheid: 'Formulering', vraag: '"Honden zijn welkom, mits aangelijnd." Wat betekent dat?', opties: ['Honden zijn welkom als ze aan de lijn zijn', 'Honden mogen alleen los lopen', 'Honden zijn niet welkom', 'Honden moeten bij het theehuis blijven'], goed: 0, uitleg: '"Mits" betekent "op voorwaarde dat" of "als". Honden zijn dus welkom, maar alleen als ze aan de lijn lopen.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'In welke periode moet je extra goed op de paden blijven?', opties: ['Als het stormt', 'In de winter', 'Van 15 maart tot en met 15 juli', 'Alleen op zondag'], goed: 2, uitleg: 'Zoek de regel met "Blijf dan op de paden." Het woordje "dan" verwijst naar de periode ervoor: van 15 maart tot en met 15 juli, als de vogels broeden. Bij storm is alleen de uitzichttoren dicht.' }
        ]
      },
      {
        titel: 'Doe mee met de Grote Bosvogeltelling!', soort: 'Poster',
        tekst: [
          'Doe mee met de Grote Bosvogeltelling!',
          'Zaterdag 21 november, van 8.30 tot 11.00 uur',
          'Samen met een gids tel je de vogels in Boswachterij Hooghei. Spechten, mezen, boomklevers: alles telt mee.',
          'Neem mee: warme kleren, laarzen en, als je die hebt, een verrekijker.',
          'Aanmelden is verplicht en kan tot en met woensdag 18 november bij het bezoekerscentrum.',
          'Deelname is gratis. Kinderen onder 10 jaar doen mee onder begeleiding van een volwassene.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Daan (11) wil zich op donderdag 19 november aanmelden. Wat is het probleem?', opties: ['Hij is te jong om alleen mee te doen', 'Hij moet eerst betalen', 'Hij heeft geen verrekijker', 'Hij is te laat, want aanmelden kon tot en met 18 november'], goed: 3, uitleg: 'Vergelijk de datum in de vraag met de datum op de poster. Aanmelden kon tot en met woensdag 18 november; donderdag 19 november is dus te laat. Daan is 11, dus hij mag wel zonder volwassene meedoen.' },
          { vaardigheid: 'Formulering', vraag: 'Welke uitspraak over de verrekijker klopt?', opties: ['Zonder verrekijker mag je niet meedoen', 'Een verrekijker is handig, maar niet verplicht', 'De gids deelt verrekijkers uit', 'Kinderen onder 10 jaar mogen geen verrekijker gebruiken'], goed: 1, uitleg: 'Let op de woorden "als je die hebt". Daarmee laat de schrijver zien dat de verrekijker handig is, maar niet verplicht. Dat de gids verrekijkers uitdeelt, staat nergens.' }
        ]
      }
    ]
  },
  // Dag 20: Het kampvuur
  {
    hardop: {
      titel: 'Het kampvuur', soort: 'Verhalend', emoji: '🔥',
      alineas: [
        'Het was de laatste avond van het scoutingkamp. Fenna zat een beetje achteraf op een boomstam, haar handen diep in de mouwen van haar trui. Ze kende bijna niemand, want ze was pas sinds de zomer bij de groep. De anderen kletsten en lachten alsof ze elkaar al jaren kenden, en dat was ook zo.',
        'Toen de leiding het kampvuur aanstak, schoof iedereen dichter naar elkaar toe. Jens vertelde een spookverhaal over een verdwaalde wandelaar, en iedereen gilde toen hij plotseling een tak liet knappen. Maar halverwege het verhaal zakte het vuur in elkaar. Het hout was vochtig, en de vlammen werden kleiner en kleiner, tot er alleen nog een paar gloeiende kooltjes over waren.',
        '"Dat wordt niks meer," zuchtte een van de leiders. Fenna aarzelde. Toen stond ze op, pakte een handvol droge dennennaalden van onder de bomen en legde die voorzichtig op de kooltjes. Daarop zette ze dunne twijgjes, als een klein tentje. Ze boog zich voorover en blies, zacht en lang, precies zoals opa haar had geleerd. Even gebeurde er niets. Toen sprong er een vlammetje omhoog.',
        'Binnen een paar minuten knetterde het vuur weer. "Hoe deed je dat?" vroeg Jens bewonderend. Fenna haalde haar schouders op, maar ze voelde haar wangen gloeien, en niet alleen door het vuur. De rest van de avond zat ze niet meer achteraf op de boomstam, maar midden in de kring.'
      ],
      vragen: [
        { vaardigheid: 'Personage', vraag: 'Waarom zit Fenna aan het begin van het verhaal een beetje achteraf?', opties: ['Ze kent bijna niemand in de groep', 'Ze heeft het koud', 'Ze is bang voor het vuur', 'Ze heeft ruzie met Jens'], goed: 0, uitleg: 'Zoek in alinea 1 naar de reden. Er staat: "Ze kende bijna niemand, want ze was pas sinds de zomer bij de groep." Het woord "want" geeft de reden aan.' },
        { vaardigheid: 'Beeldspraak', vraag: '"Ze voelde haar wangen gloeien, en niet alleen door het vuur." Wat bedoelt de schrijver?', opties: ['Fenna zat veel te dicht bij het vuur', 'Fenna had koorts gekregen', 'Fenna bloosde ook omdat ze trots en een beetje verlegen was', 'Fenna had zich gebrand aan een tak'], goed: 2, uitleg: 'Door de woorden "niet alleen door het vuur" weet je dat er nog een andere reden is. Jens geeft haar net een compliment. Van trots en verlegenheid krijg je rode wangen: je bloost.' },
        { vaardigheid: 'Personage', vraag: 'Welke woorden passen het best bij Fenna?', opties: ['verlegen, maar handig', 'stoer en luidruchtig', 'bang en onhandig', 'brutaal en grappig'], goed: 0, uitleg: 'Kijk naar wat Fenna doet en voelt. Ze zit eerst stil achteraf en haalt bij het compliment haar schouders op: verlegen. Maar ze weet precies hoe ze het vuur weer aan de gang krijgt: handig.' },
        { vaardigheid: 'Ontwikkeling', vraag: 'Wat laat de laatste zin van het verhaal zien?', opties: ['Dat Fenna het te warm had op de boomstam', 'Dat de leiding de boomstam had weggehaald', 'Dat Fenna het vuur in de gaten wilde houden', 'Dat Fenna zich nu een echt onderdeel van de groep voelt'], goed: 3, uitleg: 'Vergelijk het begin en het eind. Eerst zit Fenna achteraf, omdat ze bijna niemand kent. Aan het eind zit ze "midden in de kring". Die plek laat zien dat ze er nu bij hoort.' },
        { vaardigheid: 'Bedoeling', vraag: 'Fenna aarzelt even voordat ze opstaat. Waarom doet ze dat waarschijnlijk?', opties: ['Ze weet niet zeker hoe je een vuur aanmaakt', 'Ze is nieuw en verlegen, en durft niet zomaar op te vallen', 'Ze wil eerst het einde van het spookverhaal horen', 'Ze heeft geen zin om dennennaalden te zoeken'], goed: 1, uitleg: 'Dit staat niet letterlijk in de tekst. Je weet wel dat Fenna precies weet hoe het moet, want opa heeft het haar geleerd. Wat haar tegenhoudt, is dus iets anders: ze is nieuw in de groep en verlegen. Opstaan voor iedereen is dan spannend.' },
        { vaardigheid: 'Verhaalopbouw', vraag: '"Maar halverwege het verhaal zakte het vuur in elkaar." Wat laat het woord "Maar" hier zien?', opties: ['Er volgt een oorzaak', 'Er volgt een voorbeeld', 'Er volgt een wending: er gaat iets mis', 'Er volgt een samenvatting'], goed: 2, uitleg: 'Tot dan toe is het gezellig en spannend rond het vuur. "Maar" kondigt een tegenstelling aan: het vuur gaat bijna uit. Door die wending krijgt Fenna de kans om te laten zien wat ze kan.' }
      ]
    },
    kort: [
      {
        titel: 'Broodjes aan een stok', soort: 'Recept',
        tekst: [
          'Broodjes aan een stok (voor 6 stokken)',
          'Nodig: 250 gram zelfrijzend bakmeel, 150 milliliter melk, 1 eetlepel olie, een snufje zout en 6 schone, dikke stokken.',
          '1. Meng het bakmeel met het zout in een kom.',
          '2. Voeg de melk en de olie toe en kneed tot een soepel deeg.',
          '3. Verdeel het deeg in 6 stukken en rol van elk stuk een lange worst.',
          '4. Draai de worst als een spiraal om het uiteinde van een stok.',
          '5. Houd de stok boven de gloeiende kooltjes en draai hem steeds rond. Na ongeveer 10 minuten is het broodje goudbruin en gaar.',
          'Let op: houd de stok niet in de vlammen. Dan verbrandt de buitenkant, terwijl de binnenkant nog rauw is.'
        ],
        vragen: [
          { vaardigheid: 'Instructie', vraag: 'De groep wil 12 broodjes aan een stok maken. Hoeveel melk is daarvoor nodig?', opties: ['150 milliliter', '250 milliliter', '300 milliliter', '500 milliliter'], goed: 2, uitleg: 'Het recept is voor 6 stokken. Voor 12 stokken heb je twee keer zoveel nodig: 2 × 150 = 300 milliliter. Let op: 250 is het aantal grammen bakmeel.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Waarom moet je de stok niet in de vlammen houden?', opties: ['Omdat de buitenkant dan verbrandt, terwijl de binnenkant rauw blijft', 'Omdat de stok dan vlam vat', 'Omdat het deeg dan van de stok glijdt', 'Omdat het broodje dan te snel gaar is'], goed: 0, uitleg: 'Het antwoord staat in de "Let op"-regel onder het recept. Zulke regels zijn belangrijk: ze waarschuwen voor wat er mis kan gaan.' }
        ]
      },
      {
        titel: 'Kampbrief Scouting De Vossen', soort: 'Brief',
        tekst: [
          'Kamp: vrijdag 13 t/m zondag 15 november, kampeerterrein Het Ven',
          'Vertrek: vrijdag om 18.00 uur bij het clubhuis. Terug: zondag rond 15.00 uur.',
          'Meenemen: slaapzak, matje, zaklamp, regenjas, stevige schoenen en extra sokken.',
          'Niet meenemen: snoep (we zorgen zelf voor iets lekkers) en een mobiel.',
          'Ouders kunnen de leiding in noodgevallen bellen: 06-12345678.',
          'Kosten: € 35, graag vóór 6 november overmaken.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat mag je NIET meenemen op kamp?', opties: ['Een zaklamp', 'Extra sokken', 'Een regenjas', 'Snoep'], goed: 3, uitleg: 'Let op het woord NIET in de vraag. Kijk dan naar de regel "Niet meenemen": daar staan snoep en een mobiel. De andere spullen staan juist bij "Meenemen".' },
          { vaardigheid: 'Formulering', vraag: 'Waarom staat er achter "snoep" tussen haakjes: "(we zorgen zelf voor iets lekkers)"?', opties: ['Omdat snoep op het kampeerterrein verboden is', 'Om de kinderen gerust te stellen: ze krijgen op kamp wel iets lekkers', 'Omdat de leiding het snoep van de kinderen wil opeten', 'Omdat het kamp anders duurder wordt'], goed: 1, uitleg: 'De schrijver weet dat kinderen het jammer vinden om geen snoep mee te mogen nemen. Met de zin tussen haakjes laat hij weten dat ze niets tekortkomen. Zo\'n toevoeging zegt iets over de bedoeling van de schrijver.' }
        ]
      }
    ]
  },
  // Dag 21: Bibliotheek krijgt een robot
  {
    hardop: {
      titel: 'Bibliotheek krijgt een robot', soort: 'Nieuws', emoji: '🤖',
      alineas: [
        'HOOGEVELD – In de bibliotheek van Hoogeveld rijdt sinds maandag een opvallende nieuwe medewerker rond: robot Lex. De robot, die ongeveer zo groot is als een kind van tien, helpt bezoekers om boeken te vinden en legt uit hoe de uitleenautomaat werkt.',
        'Lex heeft een scherm op zijn buik en kan praten. Vraagt een bezoeker naar een boek over dinosaurussen, dan rijdt hij mee naar de juiste kast. \'s Avonds, als de bibliotheek dicht is, scant hij met een camera alle planken. Zo ziet hij welke boeken op de verkeerde plek staan. Vroeger kostte dat de medewerkers uren werk.',
        'Volgens directeur Marieke de Wit is de robot geen vervanging voor mensen. "Ik vind Lex een prachtige aanvulling," zegt ze. "Hij doet het saaie werk, zodat onze medewerkers meer tijd hebben voor bezoekers. Een robot kan prima een boek opzoeken, maar hij kan een kind niet helpen kiezen welk verhaal het spannend vindt."',
        'Niet iedereen is meteen enthousiast. Sommige oudere bezoekers vinden het vreemd om door een machine te worden aangesproken. Kinderen daarentegen zijn dol op Lex: op de eerste dag stond er een rij om met hem op de foto te gaan. De bibliotheek test de robot een halfjaar. Daarna wordt besloten of hij mag blijven.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Wat doet Lex \'s avonds, als de bibliotheek dicht is?', opties: ['Hij scant de planken om te zien welke boeken verkeerd staan', 'Hij laadt zijn batterij op in de kelder', 'Hij leest zelf boeken', 'Hij maakt de uitleenautomaat schoon'], goed: 0, uitleg: 'Zoek in de tekst naar "\'s avonds". In alinea 2 staat dat Lex dan met een camera alle planken scant, zodat hij ziet welke boeken op de verkeerde plek staan.' },
        { vaardigheid: 'Inleiding', vraag: 'Wat is de functie van de eerste alinea van dit nieuwsbericht?', opties: ['Hij vertelt kort het belangrijkste nieuws: wat er is gebeurd, waar en sinds wanneer', 'Hij geeft de mening van de directeur', 'Hij beschrijft de nadelen van de robot', 'Hij vertelt hoe het afloopt met de robot'], goed: 0, uitleg: 'Een nieuwsbericht begint bijna altijd met de kern: wat, waar en wanneer. In de eerste alinea lees je dat er sinds maandag een robot in de bibliotheek van Hoogeveld rondrijdt. De details volgen later.' },
        { vaardigheid: 'Signaalwoord', vraag: '"Kinderen daarentegen zijn dol op Lex." Wat betekent "daarentegen" hier?', opties: ['ook', 'daarom', 'in tegenstelling tot de oudere bezoekers', 'bijvoorbeeld'], goed: 2, uitleg: '"Daarentegen" geeft een tegenstelling aan. De zin ervoor gaat over oudere bezoekers die het vreemd vinden. Kinderen vinden het juist geweldig: het tegenovergestelde.' },
        { vaardigheid: 'Feit of mening', vraag: 'Welke zin uit de tekst is een mening en geen feit?', opties: ['De bibliotheek test de robot een halfjaar.', 'Lex heeft een scherm op zijn buik en kan praten.', 'Op de eerste dag stond er een rij om met hem op de foto te gaan.', '"Ik vind Lex een prachtige aanvulling."'], goed: 3, uitleg: 'Een feit kun je controleren: klopt het of klopt het niet? Een mening is wat iemand ervan vindt. Woorden als "ik vind" en "prachtig" zijn een sterke aanwijzing voor een mening. De andere zinnen kun je allemaal nagaan.' },
        { vaardigheid: 'Bedoeling', vraag: 'Waarom laat de schrijver directeur De Wit aan het woord in alinea 3?', opties: ['Om te laten zien dat zij de robot zelf heeft gebouwd', 'Om te reageren op de vraag of de robot mensen gaat vervangen', 'Om uit te leggen hoe de camera van Lex werkt', 'Om te vertellen dat ze haar medewerkers saai vindt'], goed: 1, uitleg: 'De alinea begint met "Volgens directeur Marieke de Wit is de robot geen vervanging voor mensen." Veel lezers vragen zich dat af bij een robot. De directeur legt uit wat de robot wel en niet kan.' },
        { vaardigheid: 'Slot', vraag: 'Wat is na het lezen van dit bericht nog onzeker?', opties: ['Of Lex boeken kan opzoeken', 'Of kinderen Lex leuk vinden', 'Of Lex kan praten', 'Of Lex na het halfjaar in de bibliotheek mag blijven'], goed: 3, uitleg: 'Lees het slot nog eens: de bibliotheek test de robot een halfjaar, en daarna wordt besloten of hij mag blijven. Dat besluit is er dus nog niet. De andere dingen staan wel als feit in de tekst.' }
      ]
    },
    kort: [
      {
        titel: 'Openingstijden Bibliotheek Hoogeveld', soort: 'Rooster',
        tekst: [
          'Openingstijden Bibliotheek Hoogeveld',
          'Maandag | gesloten',
          'Dinsdag | 10.00 – 17.00 uur',
          'Woensdag | 10.00 – 20.00 uur',
          'Donderdag | 13.00 – 17.00 uur',
          'Vrijdag | 10.00 – 17.00 uur',
          'Zaterdag | 10.00 – 14.00 uur',
          'Zondag | gesloten',
          'Robot Lex rijdt rond op woensdag en zaterdag.',
          'Boeken terugbrengen kan altijd, via de inleverbus naast de ingang.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Sven kan alleen na 17.00 uur naar de bibliotheek. Op welke dag kan hij dan terecht?', opties: ['Dinsdag', 'Woensdag', 'Vrijdag', 'Zaterdag'], goed: 1, uitleg: 'Kijk naar de sluitingstijden. Alleen op woensdag is de bibliotheek na 17.00 uur nog open, tot 20.00 uur.' },
          { vaardigheid: 'Schema lezen', vraag: 'Mila wil Lex ontmoeten, maar ze kan alleen \'s ochtends vóór twaalf uur. Wanneer kan ze gaan?', opties: ['Alleen op woensdag', 'Alleen op zaterdag', 'Op woensdag en op zaterdag', 'Op donderdag'], goed: 2, uitleg: 'Combineer twee gegevens. Lex rijdt rond op woensdag en zaterdag. Op allebei die dagen gaat de bibliotheek om 10.00 uur open, dus Mila kan op beide dagen \'s ochtends gaan. Op donderdag is de bibliotheek \'s ochtends dicht en is Lex er niet.' }
        ]
      },
      {
        titel: 'Bouw je eigen robot!', soort: 'Poster',
        tekst: [
          'Bouw je eigen robot! Cursus voor kinderen van 9 tot en met 12 jaar',
          'Waar: Bibliotheek Hoogeveld, leeszaal',
          'Wanneer: vier woensdagmiddagen (18 en 25 november, 2 en 9 december), van 14.00 tot 15.30 uur',
          'Je bouwt een kleine robot die een lijn kan volgen. Die mag je na afloop mee naar huis nemen.',
          'Kosten: € 20 voor de hele cursus, inclusief materiaal. Met een bibliotheekpas: € 15.',
          'Let op: vol = vol. Er is plek voor 12 kinderen.'
        ],
        vragen: [
          { vaardigheid: 'Formulering', vraag: 'Wat bedoelt de bibliotheek met "vol = vol"?', opties: ['De robot moet helemaal opgeladen zijn', 'Je moet alle vier de middagen komen', 'Als de 12 plekken bezet zijn, kun je niet meer meedoen', 'De leeszaal is altijd druk'], goed: 2, uitleg: 'Lees de zin erna: "Er is plek voor 12 kinderen." Als die plekken vol zijn, is de cursus vol en kun je niet meer meedoen. Zo\'n korte formule zie je vaak op posters.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Zoë is 8 jaar en houdt van techniek. Kan ze meedoen aan de cursus?', opties: ['Ja, als ze een bibliotheekpas heeft', 'Nee, de cursus is voor kinderen van 9 tot en met 12 jaar', 'Ja, maar dan betaalt ze € 20', 'Ja, op woensdag 18 november'], goed: 1, uitleg: 'Kijk naar de eerste regel: de cursus is voor kinderen van 9 tot en met 12 jaar. Zoë is 8, dus ze is nog te jong. Een bibliotheekpas verandert daar niets aan.' }
        ]
      }
    ]
  },
  // Dag 22: Een lampion maken voor Sint-Maarten
  {
    hardop: {
      titel: 'Een lampion maken voor Sint-Maarten', soort: 'Instructief', emoji: '🏮',
      alineas: [
        'Op 11 november gaan in veel delen van Nederland kinderen met een lampion langs de deuren. Ze zingen een liedje en krijgen in ruil daarvoor iets lekkers. Een gekochte lampion is snel geregeld, maar een zelfgemaakte is veel leuker. Met deze uitleg maak je in ongeveer een uur een stevige lampion van een leeg melkpak.',
        'Je hebt nodig: een leeg melkpak, een schaar, een prikpen, gekleurd vloeipapier, lijm, een stuk ijzerdraad van ongeveer dertig centimeter, een stokje en een ledlampje. Spoel het pak eerst goed om en laat het drogen, anders gaat het later zuur ruiken.',
        'Knip eerst de bovenkant van het pak af. Teken daarna op elke zijkant een figuur, bijvoorbeeld een maan, een ster of een uil. Prik met de prikpen langs de lijnen en druk de figuur er voorzichtig uit. Plak vervolgens aan de binnenkant een stukje vloeipapier over elk gat. Als het lampje straks brandt, schijnt het licht in mooie kleuren door de figuren heen.',
        'Maak tot slot het hengsel. Prik bovenaan in twee tegenoverliggende zijkanten een gaatje, steek het ijzerdraad erdoor en buig de uiteinden om. Hang het hengsel aan het stokje en zet het ledlampje op de bodem. Gebruik liever geen echte kaars: papier en karton vatten snel vlam. Nu is je lampion klaar voor de avond van 11 november.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Waarom moet je het melkpak eerst omspoelen en laten drogen?', opties: ['Anders plakt het vloeipapier niet', 'Anders kun je er niet in knippen', 'Anders gaat het lampje kapot', 'Anders gaat het later zuur ruiken'], goed: 3, uitleg: 'Zoek de zin met "omspoelen" (in de tekst: "Spoel het pak eerst goed om"). Direct erachter staat de reden, na het woordje "anders": het gaat later zuur ruiken.' },
        { vaardigheid: 'Volgorde', vraag: 'Wat doe je direct nadat je de figuren uit het karton hebt gedrukt?', opties: ['Je plakt vloeipapier over de gaten', 'Je knipt de bovenkant van het pak af', 'Je maakt het hengsel', 'Je tekent een maan of een ster'], goed: 0, uitleg: 'Volg de signaalwoorden in alinea 3: eerst, daarna, vervolgens. Na het uitdrukken van de figuren komt "Plak vervolgens ... vloeipapier over elk gat". Het hengsel komt pas "tot slot".' },
        { vaardigheid: 'Tekstdoel', vraag: 'Wat is het doel van deze tekst?', opties: ['De lezer uitleggen hoe je zelf een lampion maakt', 'De lezer vertellen waarom Sint-Maarten wordt gevierd', 'De lezer overhalen om op 11 november langs de deuren te gaan', 'De lezer vermaken met een verhaal over 11 november'], goed: 0, uitleg: 'Kijk naar de vorm van de tekst: een lijst met spullen en stappen die je moet uitvoeren ("Knip", "Teken", "Plak"). Zo\'n tekst wil je iets leren doen: het is een instructie.' },
        { vaardigheid: 'Woordbetekenis', vraag: '"Prik bovenaan in twee tegenoverliggende zijkanten een gaatje." Wat zijn "tegenoverliggende zijkanten"?', opties: ['twee zijkanten die naast elkaar liggen', 'de bovenkant en de onderkant', 'twee zijkanten die recht tegenover elkaar liggen', 'alle vier de zijkanten'], goed: 2, uitleg: 'Haal het woord uit elkaar: tegenover + liggend. Het zijn dus twee kanten die recht tegenover elkaar liggen. Dat is ook logisch: alleen dan hangt de lampion recht aan het hengsel.' },
        { vaardigheid: 'Eigen kennis', vraag: 'Waarom schijnt het licht "in mooie kleuren" door de figuren?', opties: ['Omdat het ledlampje steeds van kleur verandert', 'Omdat het licht door het gekleurde vloeipapier gaat', 'Omdat het melkpak gekleurd is', 'Omdat het ijzerdraad het licht weerkaatst'], goed: 1, uitleg: 'Combineer de tekst met wat je al weet. Over elk gat zit gekleurd vloeipapier. Je weet vast dat licht dat door gekleurd, dun papier schijnt, die kleur krijgt. Over een lampje dat van kleur verandert, staat niets in de tekst.' },
        { vaardigheid: 'Inleiding', vraag: 'Welke functie heeft alinea 1?', opties: ['Ze noemt alle spullen die je nodig hebt', 'Ze geeft de eerste stap van het maken', 'Ze vertelt waarvoor je een lampion gebruikt en wat je in deze tekst gaat maken', 'Ze waarschuwt voor brandgevaar'], goed: 2, uitleg: 'Een inleiding leidt het onderwerp in. Alinea 1 vertelt wat er op 11 november gebeurt en kondigt aan wat je gaat maken: een lampion van een melkpak. De spullen en stappen komen pas daarna.' }
      ]
    },
    kort: [
      {
        titel: 'Sint-Maarten in Lindendorp', soort: 'Programma',
        tekst: [
          'Sint-Maarten in Lindendorp – woensdag 11 november',
          '17.30 uur | Verzamelen op het Dorpsplein; de jury bekijkt de lampionnen',
          '17.45 uur | Sint-Maarten komt aan op zijn paard',
          '18.00 uur | Start van de optocht: Dorpsplein – Kerkstraat – Molenweg – Dorpsplein (ongeveer 2 km)',
          '18.45 uur | Terug op het Dorpsplein: warme chocolademelk en de uitslag van de lampionwedstrijd',
          '19.15 uur | Einde; daarna kunnen de kinderen nog langs de deuren',
          'Prijs voor de mooiste zelfgemaakte lampion: een boekenbon van € 15. Meedoen is gratis.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Hoe laat moet je op het Dorpsplein zijn als de jury je lampion moet kunnen bekijken?', opties: ['17.30 uur', '17.45 uur', '18.00 uur', '18.45 uur'], goed: 0, uitleg: 'Zoek in het programma de regel over de jury. Die staat bij 17.30 uur. Om 18.45 uur hoor je pas de uitslag.' },
          { vaardigheid: 'Schema lezen', vraag: 'Hoe lang duurt de optocht ongeveer, van de start tot je terug bent op het Dorpsplein?', opties: ['15 minuten', '30 minuten', '45 minuten', '1 uur en 15 minuten'], goed: 2, uitleg: 'Zoek twee tijden op: de start van de optocht (18.00 uur) en het moment dat je terug bent (18.45 uur). Het verschil is 45 minuten.' }
        ]
      },
      {
        titel: 'Buurtapp Molenweg', soort: 'Bericht',
        tekst: [
          'Buurtapp Molenweg',
          'Hoi buren! Woensdagavond komt de Sint-Maartenoptocht door onze straat. Wilt u snoep uitdelen? Zet dan een lichtje bij de voordeur. Zo weten de kinderen dat ze bij u mogen aanbellen.',
          'Geen lichtje? Dan slaan de kinderen uw huis over.',
          'Groet, Kees (nr. 22)'
        ],
        vragen: [
          { vaardigheid: 'Formulering', vraag: 'Wat bedoelt Kees met "Dan slaan de kinderen uw huis over"?', opties: ['De kinderen bellen bij uw huis niet aan', 'De kinderen gooien iets tegen uw deur', 'De kinderen zingen bij u extra lang', 'De kinderen rennen hard langs uw huis'], goed: 0, uitleg: '"Iets overslaan" betekent dat je het niet doet of erlangs gaat. Wie geen lichtje heeft, wil geen kinderen aan de deur. De kinderen bellen daar dan niet aan.' },
          { vaardigheid: 'Teksten vergelijken', vraag: 'Kijk ook naar het programma. Rond welk tijdstip komt de optocht ongeveer door de Molenweg?', opties: ['Rond 17.30 uur', 'Rond 17.45 uur', 'Na 19.15 uur', 'Tussen 18.00 en 18.45 uur'], goed: 3, uitleg: 'Je hebt beide teksten nodig. Kees zegt dat de optocht door de Molenweg komt. In het programma zie je dat de Molenweg in de route ligt, en dat de optocht van 18.00 tot 18.45 uur loopt. Ergens daartussen komt de optocht dus langs.' }
        ]
      }
    ]
  },
  // Dag 23: Waar komt Sint-Maarten vandaan?
  {
    hardop: {
      titel: 'Waar komt Sint-Maarten vandaan?', soort: 'Informatief', emoji: '🐴',
      alineas: [
        'Elk jaar op 11 november lopen kinderen met lampionnen langs de deuren. Maar wie was Sint-Maarten eigenlijk? Zijn echte naam was Martinus. Hij werd ongeveer zeventienhonderd jaar geleden geboren in een gebied dat nu bij Hongarije hoort. Zijn vader was een Romeinse officier, en ook Martinus moest al jong het leger in.',
        'Het bekendste verhaal over hem speelt zich af in Frankrijk, op een ijskoude winterdag. Bij de stadspoort van Amiens zag Martinus een bedelaar die bijna niets aanhad en lag te rillen van de kou. Martinus had zelf alleen zijn wapenrusting en een wijde soldatenmantel. Zonder te aarzelen sneed hij met zijn zwaard de mantel doormidden en gaf hij de helft aan de arme man.',
        'Volgens de legende droomde Martinus de nacht daarna dat Jezus aan hem verscheen, gekleed in die halve mantel. Later liet hij zich dopen en verliet hij het leger. Hij werd uiteindelijk zelfs bisschop van de Franse stad Tours. Omdat hij zo goed voor arme mensen zorgde, werd hij na zijn dood als heilige vereerd. Hij werd begraven op 11 november.',
        'Dat kinderen juist dan met lichtjes rondgaan, heeft waarschijnlijk ook met de tijd van het jaar te maken. Rond 11 november was de oogst binnen en vierden mensen feest, voordat de donkere winter begon. De lichtjes verdreven de duisternis. En het delen van snoep? Dat past precies bij Martinus, die zijn mantel deelde met iemand die het nodig had.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Waar sneed Martinus zijn mantel doormidden?', opties: ['In Hongarije', 'In de stad Tours', 'Bij de stadspoort van Amiens', 'In een klooster'], goed: 2, uitleg: 'Zoek in de tekst naar "mantel". In alinea 2 staat waar het gebeurde: bij de stadspoort van Amiens, in Frankrijk. Tours is de stad waar hij later bisschop werd.' },
        { vaardigheid: 'Woordbetekenis', vraag: 'Wat is een "bedelaar"?', opties: ['iemand die arm is en anderen om geld of eten vraagt', 'een Romeinse soldaat', 'een bisschop', 'een boer die net heeft geoogst'], goed: 0, uitleg: 'Gebruik de zinnen eromheen. De man heeft bijna niets aan, rilt van de kou en wordt "de arme man" genoemd. Een bedelaar is iemand die arm is en anderen om hulp vraagt.' },
        { vaardigheid: 'Formulering', vraag: 'Alinea 3 begint met "Volgens de legende". Wat wil de schrijver daarmee zeggen?', opties: ['Dat het verhaal over de droom zeker waar is', 'Dat het een oud verhaal is waarvan niet zeker is of het echt zo is gebeurd', 'Dat Martinus het verhaal zelf heeft opgeschreven', 'Dat het verhaal alleen in kinderboeken staat'], goed: 1, uitleg: 'Een legende is een oud verhaal dat al heel lang wordt doorverteld. Vaak zit er een kern van waarheid in, maar je weet niet zeker of alles echt zo gebeurd is. Met "volgens de legende" laat de schrijver dat merken.' },
        { vaardigheid: 'Signaalwoord', vraag: '"Omdat hij zo goed voor arme mensen zorgde, werd hij na zijn dood als heilige vereerd." Welk verband geeft "Omdat" aan?', opties: ['een tegenstelling', 'een tijdsvolgorde', 'een voorwaarde', 'een reden'], goed: 3, uitleg: '"Omdat" is een signaalwoord dat een reden of oorzaak aangeeft. De zin vertelt waarom Martinus als heilige werd vereerd: omdat hij zo goed voor arme mensen zorgde.' },
        { vaardigheid: 'Verband', vraag: 'Welk verband legt de schrijver in de laatste zin van de tekst?', opties: ['Tussen het snoep delen op 11 november en de mantel die Martinus deelde', 'Tussen de oogst en de lampionnen', 'Tussen Hongarije en Frankrijk', 'Tussen het leger en het geloof'], goed: 0, uitleg: 'In de laatste zin koppelt de schrijver een gewoonte van nu (snoep delen) aan het verhaal uit alinea 2 (de mantel delen). Zo verbindt hij het slot met de kern van de tekst.' },
        { vaardigheid: 'Eigen kennis', vraag: 'Waarom deden lichtjes de mensen rond 11 november vroeger extra veel plezier?', opties: ['Omdat de avonden in november lang en donker zijn', 'Omdat het in november nog lang licht is', 'Omdat Martinus lampen verkocht', 'Omdat er toen nog geen kaarsen bestonden'], goed: 0, uitleg: 'In de tekst staat dat de donkere winter begon en dat de lichtjes de duisternis verdreven. Je weet zelf ook dat het in november al vroeg donker wordt. Een lichtje maakt die lange, donkere avonden gezelliger.' }
      ]
    },
    kort: [
      {
        titel: 'Tentoonstelling "Martinus en de mantel"', soort: 'Folder',
        tekst: [
          'Tentoonstelling "Martinus en de mantel" – Stadsmuseum Lindendorp',
          'Van 1 november tot en met 31 januari',
          'Open: dinsdag t/m zondag van 11.00 tot 17.00 uur',
          'Entree: volwassenen € 12,50 – kinderen van 4 t/m 12 jaar € 5 – kinderen tot 4 jaar gratis',
          'Woensdag 11 november: gratis entree voor iedereen die een zelfgemaakte lampion meeneemt!',
          'Speurtocht voor kinderen: vraag bij de kassa naar het gratis speurboekje.'
        ],
        vragen: [
          { vaardigheid: 'Schema lezen', vraag: 'Een moeder gaat op zaterdag met haar kinderen van 10 en 3 jaar naar de tentoonstelling. Hoeveel betalen ze samen?', opties: ['€ 17,50', '€ 22,50', '€ 12,50', '€ 15'], goed: 0, uitleg: 'Reken per persoon: de moeder betaalt € 12,50, het kind van 10 betaalt € 5 en het kind van 3 is jonger dan 4, dus gratis. Samen: € 12,50 + € 5 = € 17,50.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Wanneer kun je gratis naar binnen met een zelfgemaakte lampion?', opties: ['Elke dinsdag', 'Op 31 januari', 'Als je een speurboekje hebt', 'Op woensdag 11 november'], goed: 3, uitleg: 'Zoek het woord "lampion" in de folder. Er staat één datum bij: woensdag 11 november. Het speurboekje is gratis, maar daarmee kom je niet gratis binnen.' }
        ]
      },
      {
        titel: 'Lampionnen knutselen', soort: 'Mail',
        tekst: [
          'Van: juf Ingrid',
          'Aan: ouders van groep 5 t/m 8',
          'Onderwerp: lampionnen knutselen',
          'Beste ouders,',
          'Op dinsdag 10 november knutselen we \'s middags lampionnen voor Sint-Maarten. Wilt u uw kind die dag een leeg, schoongespoeld melkpak meegeven? Ledlampjes en stokjes zijn er op school.',
          'De lampionnen gaan dinsdag meteen mee naar huis, zodat de kinderen er woensdagavond mee kunnen lopen.',
          'Kunt u van 13.00 tot 14.30 uur helpen? Laat het me dan vóór vrijdag weten.',
          'Hartelijke groet, juf Ingrid'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat moeten de kinderen zelf meenemen naar school?', opties: ['Een ledlampje', 'Een stokje', 'Een leeg, schoongespoeld melkpak', 'Een schaar'], goed: 2, uitleg: 'Zoek de zin waarin de juf iets vraagt: "Wilt u uw kind ... een leeg, schoongespoeld melkpak meegeven?" Ledlampjes en stokjes zijn er al op school.' },
          { vaardigheid: 'Teksten vergelijken', vraag: 'Stel dat de school van juf Ingrid in Lindendorp staat. Wat kan een leerling op 11 november met de zelfgemaakte lampion doen, volgens de folder?', opties: ['Er een speurboekje mee kopen', 'Hem op school laten keuren', 'Hem ruilen voor een boekenbon', 'Gratis naar de tentoonstelling "Martinus en de mantel" gaan'], goed: 3, uitleg: 'Hier combineer je de twee teksten. Uit de mail weet je dat de kinderen een zelfgemaakte lampion hebben. In de folder staat dat je op 11 november met een zelfgemaakte lampion gratis naar de tentoonstelling mag.' }
        ]
      }
    ]
  },
  // Dag 24: Een nieuwe buurvrouw
  {
    hardop: {
      titel: 'Een nieuwe buurvrouw', soort: 'Verhalend', emoji: '⚽',
      alineas: [
        'Sinds mevrouw Verhoef naast hen woonde, was het gedaan met de rust. Tenminste, zo voelde het voor Ruben. Al op de tweede dag had ze over de schutting geroepen dat zijn bal te vaak tegen haar schuurtje knalde. "Wat een zuurpruim," mopperde Ruben tegen zijn moeder. Die zei alleen dat hij misschien wat zachter kon schieten.',
        'Een week later gebeurde het ergste. Ruben schoot de bal hoog over de schutting en hoorde iets breken. Met knikkende knieën belde hij aan. Het duurde even voordat de deur openging. Mevrouw Verhoef hield de bal in haar ene hand en de scherven van een bloempot in de andere. Ruben wilde het liefst door de grond zakken.',
        '"Het spijt me," stamelde hij. "Ik betaal hem terug van mijn zakgeld." Tot zijn verbazing begon de buurvrouw te glimlachen. "Die pot was toch al lelijk," zei ze. "Maar die trap van jou was niet slecht. Alleen schiet je met je tenen. Daarom gaat de bal alle kanten op." Ruben keek haar verbaasd aan. Hoe wist zij dat nou?',
        'In de gang hing een ingelijste foto van een voetbalelftal in ouderwetse shirts. In het doel stond een jonge vrouw met een vastberaden blik. "Twintig jaar keepster geweest," zei mevrouw Verhoef. "Kom zaterdag maar langs, dan leer ik je hoe je met de wreef schiet." Op weg naar huis besloot Ruben dat het woord zuurpruim misschien toch niet zo goed bij haar paste.'
      ],
      vragen: [
        { vaardigheid: 'Woordbetekenis', vraag: '"Wat een zuurpruim," mopperde Ruben. Wat is een "zuurpruim"?', opties: ['iemand die van zure snoepjes houdt', 'iemand die goed kan voetballen', 'iemand die vaak chagrijnig is en moppert', 'iemand die net verhuisd is'], goed: 2, uitleg: 'Gebruik de situatie. De buurvrouw klaagt over de bal, en Ruben "moppert" over haar. Hij vindt haar dus een chagrijnig, klagerig mens. Zuur betekent hier: niet vriendelijk.' },
        { vaardigheid: 'Beeldspraak', vraag: '"Ruben wilde het liefst door de grond zakken." Wat betekent dat?', opties: ['Ruben schaamde zich heel erg', 'Ruben wilde zich in de tuin verstoppen', 'Ruben was erg moe', 'Ruben viel bijna om'], goed: 0, uitleg: 'Dit is een uitdrukking. Als je "door de grond wilt zakken", schaam je je zo erg dat je het liefst zou verdwijnen. Ruben staat voor de deur met de scherven van de pot die hij kapot heeft geschoten.' },
        { vaardigheid: 'Informatie zoeken', vraag: 'Waarom gaat de bal van Ruben volgens mevrouw Verhoef alle kanten op?', opties: ['Omdat de bal te zacht is opgepompt', 'Omdat Ruben met zijn tenen schiet', 'Omdat Ruben te hard schiet', 'Omdat de schutting te hoog is'], goed: 1, uitleg: 'Zoek het stukje waarin de buurvrouw over de trap praat. Ze zegt: "Alleen schiet je met je tenen. Daarom gaat de bal alle kanten op." Het signaalwoord "Daarom" laat zien dat de oorzaak er net voor staat.' },
        { vaardigheid: 'Ontwikkeling', vraag: 'Hoe verandert Rubens beeld van mevrouw Verhoef in het verhaal?', opties: ['Eerst vindt hij haar aardig, later streng', 'Eerst is hij bang voor haar, en dat blijft zo', 'Eerst vindt hij haar grappig, later saai', 'Eerst vindt hij haar een zeur, later merkt hij dat ze aardig is en verstand heeft van voetbal'], goed: 3, uitleg: 'Vergelijk het begin met het eind. Aan het begin noemt Ruben haar een zuurpruim. Aan het eind denkt hij dat dat woord "misschien toch niet zo goed bij haar paste": hij is anders over haar gaan denken.' },
        { vaardigheid: 'Personage', vraag: 'Welke omschrijving past het best bij mevrouw Verhoef?', opties: ['Ze is streng, maar ook vergevingsgezind en sportief', 'Ze is bang en verlegen', 'Ze is gierig en zeurderig', 'Ze trekt zich nergens iets van aan'], goed: 0, uitleg: 'Kijk naar alles wat ze doet. Ze klaagt over de bal (streng), maar wordt niet boos om de kapotte pot (vergevingsgezind) en was twintig jaar keepster (sportief). Een goede typering past bij het hele verhaal, niet alleen bij het begin.' },
        { vaardigheid: 'Bedoeling', vraag: 'Mevrouw Verhoef zegt: "Die pot was toch al lelijk." Waarom zegt ze dat waarschijnlijk?', opties: ['Ze is blij dat ze van de pot af is en wil een nieuwe', 'Ze wil dat Ruben een mooiere pot voor haar koopt', 'Ze wil Ruben geruststellen, zodat hij zich minder schuldig voelt', 'Ze wil laten zien dat ze geen verstand van potten heeft'], goed: 2, uitleg: 'Kijk naar de situatie: Ruben stamelt sorry en biedt aan te betalen. De buurvrouw glimlacht. Met haar opmerking laat ze merken dat het niet erg is. Zo neemt ze zijn schuldgevoel weg. Dat staat er niet letterlijk; je leidt het af uit wat ze doet.' }
      ]
    },
    kort: [
      {
        titel: 'Buurtbus 512', soort: 'Dienstregeling',
        tekst: [
          'Buurtbus 512: Lindendorp – Station Hoogeveld (maandag t/m vrijdag)',
          'Lindendorp, Dorpsplein | 7.15 | 9.15 | 11.15 | 13.15 | 15.15',
          'Lindendorp, Molenweg | 7.18 | 9.18 | 11.18 | 13.18 | 15.18',
          'Zorgcentrum De Linde | 7.25 | 9.25 | 11.25 | 13.25 | 15.25',
          'Station Hoogeveld | 7.40 | 9.40 | 11.40 | 13.40 | 15.40',
          'De buurtbus rijdt niet op zaterdag, zondag en feestdagen. Er is plaats voor 8 reizigers.'
        ],
        vragen: [
          { vaardigheid: 'Schema lezen', vraag: 'Mevrouw Verhoef woont aan de Molenweg. Ze wil zo laat mogelijk vertrekken en toch vóór 12.00 uur op het station zijn. Hoe laat stapt ze in?', opties: ['Om 9.18 uur', 'Om 11.18 uur', 'Om 11.15 uur', 'Om 13.18 uur'], goed: 1, uitleg: 'Zoek eerst de rij van haar halte: Molenweg. Kijk dan in de rij van het station welke bus vóór 12.00 uur aankomt: die van 11.40 uur. Ga in dezelfde kolom terug naar de Molenweg: 11.18 uur. Om 11.15 uur vertrekt die bus van het Dorpsplein, niet van haar halte.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Op welke dag kun je niet met de buurtbus?', opties: ['Maandag', 'Woensdag', 'Vrijdag', 'Zaterdag'], goed: 3, uitleg: 'Lees de regel onder de tijden: de buurtbus rijdt niet op zaterdag, zondag en feestdagen. Ook in de kop staat al "maandag t/m vrijdag".' }
        ]
      },
      {
        titel: 'Nieuw adres!', soort: 'Verhuisbericht',
        tekst: [
          'Nieuw adres!',
          'Vanaf 1 november woon ik niet meer in Amsterdam, maar in Lindendorp:',
          'Ans Verhoef, Molenweg 24, Lindendorp',
          'Mijn telefoonnummer blijft hetzelfde.',
          'Kom gerust eens langs voor een kop koffie. Bel wel even van tevoren, want op dinsdag en donderdag ben ik bij de voetbalclub, waar ik de jeugdkeepers train.'
        ],
        vragen: [
          { vaardigheid: 'Teksten vergelijken', vraag: 'Kijk ook naar het verhaal "Een nieuwe buurvrouw". Wat lees je in dit verhuisbericht over mevrouw Verhoef dat niet in het verhaal staat?', opties: ['Dat ze nog steeds met voetbal bezig is: ze traint jeugdkeepers', 'Dat ze vroeger keepster was', 'Dat ze naast Ruben woont', 'Dat ze een bloempot had'], goed: 0, uitleg: 'Vergelijk de twee teksten. Dat ze keepster was, naast Ruben woont en een bloempot had, lees je al in het verhaal. Nieuw is dat ze nu nog bij een voetbalclub de jeugdkeepers traint.' },
          { vaardigheid: 'Formulering', vraag: 'Waarom schrijft mevrouw Verhoef: "Mijn telefoonnummer blijft hetzelfde"?', opties: ['Omdat ze niet gebeld wil worden', 'Omdat ze geen telefoon heeft', 'Zodat mensen weten dat ze haar oude nummer kunnen blijven gebruiken', 'Omdat het nummer al op de kaart staat'], goed: 2, uitleg: 'Bij een verhuizing verandert er veel: je adres, soms ook je telefoonnummer. Met deze zin laat ze weten dat mensen haar gewoon op het oude nummer kunnen blijven bellen. Daarom zet ze het nummer er ook niet opnieuw bij.' }
        ]
      }
    ]
  },
  // Dag 25: De eerste vliegtuigen
  {
    hardop: {
      titel: 'De eerste vliegtuigen', soort: 'Informatief', emoji: '✈️',
      alineas: [
        'Eeuwenlang keken mensen jaloers naar de vogels. Sommige uitvinders bonden vleugels van veren aan hun armen en sprongen van een toren, meestal met een pijnlijke afloop. Pas in 1783 kwamen er voor het eerst mensen echt los van de grond, in een luchtballon van de Franse gebroeders Montgolfier. Maar een ballon drijft met de wind mee: sturen kon je hem nauwelijks.',
        'De Duitser Otto Lilienthal pakte het anders aan. Hij bestudeerde nauwkeurig hoe vogels hun vleugels gebruiken en bouwde zweeftoestellen, waarmee hij van heuvels af gleed. Hij maakte zo\'n tweeduizend vluchten. In 1896 stortte hij echter neer en kwam hij om het leven. Zijn aantekeningen werden wel een belangrijke bron voor anderen.',
        'Twee van die anderen waren de Amerikaanse broers Orville en Wilbur Wright. Ze hadden een fietsenwinkel en waren handig met techniek. Jarenlang testten ze vleugels, eerst met vliegers en later in een zelfgebouwde windtunnel. Op 17 december 1903 was het zover: hun vliegtuig met motor bleef twaalf seconden in de lucht en vloog zevenendertig meter ver. Dat is nog geen half voetbalveld, maar het was de eerste bestuurbare vlucht met een motorvliegtuig.',
        'Daarna ging het snel. In 1909 vloog de Fransman Louis Blériot over het Kanaal naar Engeland. Ook de Nederlander Anthony Fokker bouwde al jong een eigen vliegtuig, dat de Spin werd genoemd. Binnen twintig jaar na de eerste vlucht vervoerden vliegtuigen post en passagiers. Wat begon als de droom van een paar uitvinders, groeide uit tot een manier van reizen die de wereld kleiner maakte.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Wat was het nadeel van de luchtballon?', opties: ['Hij kwam niet hoog genoeg', 'Je kon hem nauwelijks besturen', 'Hij was gemaakt van veren', 'Er konden geen mensen in'], goed: 1, uitleg: 'Zoek in alinea 1 de zin over de ballon die begint met "Maar". Na "maar" volgt vaak een nadeel: een ballon drijft met de wind mee, en sturen kon je hem nauwelijks.' },
        { vaardigheid: 'Signaalwoord', vraag: '"In 1896 stortte hij echter neer." Welk woord betekent hier ongeveer hetzelfde als "echter"?', opties: ['daarom', 'bovendien', 'maar', 'dus'], goed: 2, uitleg: '"Echter" geeft een tegenstelling aan, net als "maar". Lilienthal maakte heel veel vluchten, maar in 1896 ging het mis. "Daarom" en "dus" geven een gevolg aan, "bovendien" een toevoeging.' },
        { vaardigheid: 'Verwijzing', vraag: 'Alinea 3 begint met "Twee van die anderen". Wie zijn "die anderen"?', opties: ['De vogels die Lilienthal bestudeerde', 'De mensen voor wie de aantekeningen van Lilienthal een belangrijke bron waren', 'De gebroeders Montgolfier', 'De uitvinders die met vleugels van veren van een toren sprongen'], goed: 1, uitleg: 'Een verwijzing aan het begin van een alinea slaat vaak terug op het eind van de vorige alinea. Daar staat: "Zijn aantekeningen werden wel een belangrijke bron voor anderen." De gebroeders Wright waren twee van die anderen.' },
        { vaardigheid: 'Beeldspraak', vraag: 'De schrijver schrijft dat vliegen "de wereld kleiner maakte". Wat bedoelt hij daarmee?', opties: ['De aarde kromp door de vliegtuigen een beetje', 'Er pasten minder mensen op de wereld', 'Landen werden kleiner door de vliegvelden', 'Door vliegtuigen kon je verre plekken veel sneller bereiken'], goed: 3, uitleg: 'De wereld wordt natuurlijk niet echt kleiner. Het is figuurlijk bedoeld: omdat je met een vliegtuig in een paar uur ver weg kunt zijn, voelen afstanden kleiner.' },
        { vaardigheid: 'Tekstopbouw', vraag: 'Hoe is deze tekst vooral opgebouwd?', opties: ['Als probleem en oplossing', 'In tijdsvolgorde: van de eerste pogingen tot latere vliegtuigen', 'Als vergelijking tussen vogels en vliegtuigen', 'Als standpunt met argumenten'], goed: 1, uitleg: 'Let op de jaartallen en de woorden die tijd aangeven: "Eeuwenlang", "Pas in 1783", "In 1896", "In 1903", "Daarna ging het snel". De tekst volgt de geschiedenis van vroeg naar laat.' },
        { vaardigheid: 'Bedoeling', vraag: 'Waarom vertelt de schrijver dat de gebroeders Wright een fietsenwinkel hadden?', opties: ['Om reclame te maken voor hun fietsen', 'Om uit te leggen waarom hun vliegtuig wielen had', 'Om te laten zien dat ze verstand hadden van techniek', 'Om te vertellen dat ze niet veel geld hadden'], goed: 2, uitleg: 'Kijk naar wat er direct na de fietsenwinkel staat: "en waren handig met techniek". Wie fietsen bouwt en repareert, weet veel van onderdelen en techniek. Dat hielp hen bij het bouwen van een vliegtuig.' }
      ]
    },
    kort: [
      {
        titel: 'Mijlpalen in de luchtvaart', soort: 'Tijdlijn',
        tekst: [
          'Jaar | Gebeurtenis',
          '1783 | Eerste vlucht met mensen in een luchtballon (Frankrijk)',
          '1903 | Eerste vlucht met een motorvliegtuig door de gebroeders Wright (12 seconden)',
          '1909 | Louis Blériot vliegt over het Kanaal',
          '1919 | Oprichting van de KLM',
          '1927 | Charles Lindbergh vliegt in zijn eentje en zonder tussenstop over de Atlantische Oceaan',
          '1969 | Eerste vlucht van de Boeing 747, de eerste jumbojet',
          '1976 | De Concorde gaat passagiers vervoeren; hij vliegt sneller dan het geluid'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat gebeurde er in 1927?', opties: ['De KLM werd opgericht', 'Charles Lindbergh vloog alleen over de Atlantische Oceaan', 'De Concorde ging passagiers vervoeren', 'Louis Blériot vloog over het Kanaal'], goed: 1, uitleg: 'Zoek in de linkerkolom het jaartal 1927 en lees in dezelfde rij wat er gebeurde.' },
          { vaardigheid: 'Schema lezen', vraag: 'Hoeveel jaar zat er tussen de eerste vlucht van de gebroeders Wright en de oprichting van de KLM?', opties: ['6 jaar', '24 jaar', '16 jaar', '26 jaar'], goed: 2, uitleg: 'Zoek de twee jaartallen op: 1903 (Wright) en 1919 (KLM). Trek ze van elkaar af: 1919 − 1903 = 16 jaar. Pak niet per ongeluk 1927; dat is het jaar van Lindbergh.' }
        ]
      },
      {
        titel: 'Instapkaart', soort: 'Instapkaart',
        tekst: [
          'INSTAPKAART – Noordwind Air',
          'Passagier: Ilse Jansen',
          'Vlucht: NW 482 | Van: Amsterdam | Naar: Londen',
          'Datum: 21 november | Vertrek: 10.55 uur',
          'Gate: D7 | Instappen vanaf: 10.15 uur | Gate sluit: 10.35 uur',
          'Stoel: 14A (raam)',
          'Handbagage: 1 stuk, maximaal 10 kilo'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Waar zit Ilse in het vliegtuig?', opties: ['Op stoel 14A, bij het raam', 'Op stoel D7, bij het raam', 'Op stoel 10A, bij het gangpad', 'Op stoel 14A, bij het gangpad'], goed: 0, uitleg: 'Zoek op de kaart het woord "Stoel": 14A, met tussen haakjes "raam". D7 is de gate waar je instapt, geen stoel.' },
          { vaardigheid: 'Schema lezen', vraag: 'Ilse komt om 10.40 uur aan bij gate D7. Wat is er aan de hand?', opties: ['Ze is precies op tijd om in te stappen', 'Ze moet nog een kwartier wachten', 'Ze is te laat, want de gate is al gesloten', 'Het vliegtuig is dan al opgestegen'], goed: 2, uitleg: 'Vergelijk de tijd uit de vraag met de tijden op de kaart. De gate sluit om 10.35 uur. Om 10.40 uur is Ilse dus te laat, ook al vertrekt het vliegtuig pas om 10.55 uur.' }
        ]
      }
    ]
  },
  // Dag 26: Eén dag per week zonder vlees
  {
    hardop: {
      titel: 'Eén dag per week zonder vlees', soort: 'Betoog', emoji: '🥦',
      alineas: [
        'Bij ons thuis staat er bijna elke avond vlees op tafel: een gehaktbal, een kipfilet of een stukje worst. Bij veel andere gezinnen gaat het net zo. Toch vind ik dat iedereen minstens één dag per week vegetarisch zou moeten eten. Dat is minder moeilijk dan je denkt, en het levert veel op.',
        'Om te beginnen is het goed voor het klimaat. Voor de productie van vlees, vooral van rundvlees, zijn veel land, water en veevoer nodig. Bovendien stoten koeien veel methaan uit, een gas dat de aarde opwarmt. Als miljoenen mensen één dag per week geen vlees eten, scheelt dat dus enorm.',
        'Ten tweede hoeft een maaltijd zonder vlees niet saai of ongezond te zijn. Bonen, linzen, eieren, noten en kaas bevatten ook eiwitten, die je lichaam nodig heeft om te groeien. Denk aan een pan dampende chili met bonen, een pizza met groenten of pannenkoeken. Wie er zo naar kijkt, ziet dat een dag zonder vlees eigenlijk een dag met extra lekkers is.',
        'Sommige mensen zeggen dat één dag veel te weinig is om iets te veranderen. Dat is een vreemde redenering. Elke grote verandering begint klein, en wie eenmaal merkt hoe lekker een vegetarische maaltijd is, eet misschien vanzelf vaker zonder vlees. Daarom zeg ik: kies jouw dag, bijvoorbeeld de woensdag, en probeer het gewoon. Je hebt niets te verliezen.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Welke voedingsmiddelen bevatten volgens de schrijver ook eiwitten?', opties: ['Rijst, pasta en brood', 'Bonen, linzen, eieren, noten en kaas', 'Appels, peren en bananen', 'Gehaktballen en kipfilet'], goed: 1, uitleg: 'Zoek het woord "eiwitten" op. In alinea 3 staat een rijtje: bonen, linzen, eieren, noten en kaas. Gehakt en kip bevatten ook eiwitten, maar dat is vlees, en daar gaat het hier juist niet om.' },
        { vaardigheid: 'Woordbetekenis', vraag: 'Wat is "methaan" volgens de tekst?', opties: ['een soort veevoer', 'een ziekte bij koeien', 'een soort vlees', 'een gas dat de aarde opwarmt'], goed: 3, uitleg: 'Moeilijke woorden worden vaak direct na een komma uitgelegd. Lees maar: "methaan, een gas dat de aarde opwarmt". Zo\'n uitleg heet een bijstelling.' },
        { vaardigheid: 'Tekstdoel', vraag: 'Wat wil de schrijver met deze tekst bereiken?', opties: ['De lezer overhalen om helemaal geen vlees meer te eten', 'De lezer uitleggen hoe je chili met bonen maakt', 'De lezer overtuigen om één dag per week geen vlees te eten', 'De lezer informeren over het leven van koeien'], goed: 2, uitleg: 'Kijk naar de eerste en de laatste alinea: daar staat het standpunt. De schrijver wil dat je één dag per week vegetarisch eet. Pas op voor het eerste antwoord: helemaal stoppen met vlees vraagt hij niet.' },
        { vaardigheid: 'Standpunt en argument', vraag: 'Welke zin is GEEN argument voor het standpunt van de schrijver?', opties: ['Voor de productie van vlees zijn veel land, water en veevoer nodig.', 'Bonen en linzen bevatten ook eiwitten.', 'Bij ons thuis staat er bijna elke avond vlees op tafel.', 'Elke grote verandering begint klein.'], goed: 2, uitleg: 'Een argument is een reden waarom je het met het standpunt eens zou moeten zijn. Drie zinnen geven zo\'n reden: het klimaat, de eiwitten en dat veranderen klein begint. De zin over het eten bij de schrijver thuis is alleen een inleiding: hij vertelt hoe het nu gaat.' },
        { vaardigheid: 'Verwijswoord', vraag: 'In alinea 4 staat: "Dat is een vreemde redenering." Waar verwijst "Dat" naar?', opties: ['Naar het eten van vegetarische maaltijden', 'Naar de gedachte dat één dag te weinig is om iets te veranderen', 'Naar de uitstoot van methaan', 'Naar het kiezen van de woensdag'], goed: 1, uitleg: 'Een verwijswoord slaat meestal terug op de zin ervoor. Daar staat wat "sommige mensen zeggen": dat één dag te weinig is. De schrijver noemt dat tegenargument een vreemde redenering en legt uit waarom.' },
        { vaardigheid: 'Bedoeling', vraag: 'Waarom schrijft de schrijver dat een dag zonder vlees "eigenlijk een dag met extra lekkers is"?', opties: ['Hij wil dat mensen op die dag meer snoep eten', 'Hij vindt vlees niet lekker', 'Hij bedoelt dat vegetarisch eten duurder is', 'Hij wil laten zien dat je er niets bij inlevert, maar er juist iets bij krijgt'], goed: 3, uitleg: 'De schrijver draait het om: je denkt misschien dat je iets moet missen, maar hij zegt dat je er lekkere gerechten bij krijgt. Zo probeert hij de lezer over te halen.' }
      ]
    },
    kort: [
      {
        titel: 'Eetcafé De Gouden Lepel – kindermenu', soort: 'Menukaart',
        tekst: [
          'Eetcafé De Gouden Lepel – kindermenu (t/m 12 jaar)',
          'Pannenkoek naturel | € 5,50',
          'Pannenkoek met kaas | € 6,75',
          'Kipnuggets met friet en appelmoes | € 7,95',
          'Groenteburger met friet | € 7,95',
          'Toetje: ijsje met slagroom | € 3,25',
          'Bij elk kindermenu een gratis glas ranja.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat krijg je gratis bij elk kindermenu?', opties: ['Een ijsje', 'Appelmoes', 'Een glas ranja', 'Slagroom'], goed: 2, uitleg: 'Zoek het woord "gratis" op de menukaart. Het staat in de laatste regel: een glas ranja.' },
          { vaardigheid: 'Schema lezen', vraag: 'Ties (10) neemt een pannenkoek met kaas en een ijsje met slagroom. Hoeveel betaalt hij?', opties: ['€ 9,00', '€ 10,00', '€ 10,25', '€ 8,75'], goed: 1, uitleg: 'Zoek de twee prijzen op: pannenkoek met kaas € 6,75 en een ijsje € 3,25. Tel ze op: € 6,75 + € 3,25 = € 10,00.' }
        ]
      },
      {
        titel: 'Restaurant \'t Hoekje – woensdag veggiedag', soort: 'Menukaart',
        tekst: [
          'Restaurant \'t Hoekje – elke woensdag veggiedag: alleen vegetarische gerechten!',
          'Linzensoep met brood | € 4,50',
          'Chili met bonen en rijst | € 8,50',
          'Groentelasagne | € 11,00',
          'Kinderportie van elk hoofdgerecht: halve prijs',
          'Toetje: appeltaart | € 3,75'
        ],
        vragen: [
          { vaardigheid: 'Schema lezen', vraag: 'Wat kost een kinderportie chili met bonen en rijst?', opties: ['€ 4,25', '€ 4,50', '€ 8,50', '€ 2,25'], goed: 0, uitleg: 'De gewone chili kost € 8,50. Een kinderportie kost de helft: € 8,50 : 2 = € 4,25. Let op: € 4,50 is de prijs van de linzensoep.' },
          { vaardigheid: 'Teksten vergelijken', vraag: 'Femke (11) eet op een woensdag buiten de deur. Ze wil een vegetarisch hoofdgerecht en heeft € 5. Welk gerecht kan ze kiezen? Kijk naar beide menukaarten.', opties: ['Een pannenkoek naturel bij De Gouden Lepel', 'Een groenteburger bij De Gouden Lepel', 'Een kinderportie groentelasagne bij \'t Hoekje', 'Een kinderportie chili bij \'t Hoekje'], goed: 3, uitleg: 'Vergelijk de prijzen op beide kaarten. De pannenkoek kost € 5,50 en de groenteburger € 7,95: te duur. Een kinderportie lasagne is de helft van € 11,00, dus € 5,50: ook te duur. Een kinderportie chili kost € 4,25. Dat past wel.' }
        ]
      }
    ]
  },
  // Dag 27: Bevers in de Biesbosch
  {
    hardop: {
      titel: 'Bevers in de Biesbosch', soort: 'Informatief', emoji: '🦫',
      alineas: [
        'In de Biesbosch, een waterrijk natuurgebied in het zuiden van Nederland, leeft een dier dat er lange tijd helemaal niet meer te vinden was: de bever. In 1826 werd in ons land de laatste wilde bever gedood. Mensen joegen op hem om zijn dikke vacht en zijn vlees. Pas in 1988 werden er in de Biesbosch weer bevers uitgezet, afkomstig uit Duitsland.',
        'De bever is het grootste knaagdier van Europa. Een volwassen dier kan meer dan een meter lang worden en tot wel dertig kilo wegen. Zijn voortanden groeien zijn hele leven door, maar slijten ook steeds af, doordat hij er hout mee knaagt. Ze zijn opvallend oranje. Met zijn platte, geschubde staart stuurt hij onder water, zoals een schip met een roer.',
        'Bevers zijn echte bouwmeesters. Van takken en modder maken ze een burcht: een hol met een ingang onder water. Zo kunnen vijanden niet zomaar naar binnen. Als het water te laag staat, bouwen ze een dam om het water hoger te laten komen. Op die manier blijft de ingang van de burcht altijd onder water.',
        'Tegenwoordig leven er in Nederland weer duizenden bevers, en niet alleen in de Biesbosch. Dat is goed nieuws voor de natuur, want door hun dammen ontstaan nieuwe natte plekken, waar vissen, kikkers en vogels van profiteren. Toch zorgen bevers ook voor problemen. Sommige graven gangen in dijken, en dat kan gevaarlijk zijn voor het land achter die dijken.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Waarom werd er vroeger op bevers gejaagd?', opties: ['Omdat ze dijken kapotmaakten', 'Om hun vacht en hun vlees', 'Omdat ze vissen opaten', 'Omdat ze te groot werden'], goed: 1, uitleg: 'Zoek in alinea 1 naar het woord "joegen". Daar staat de reden: om zijn dikke vacht en zijn vlees. Dat bevers gangen in dijken graven, staat in alinea 4 en gaat over nu.' },
        { vaardigheid: 'Woordbetekenis', vraag: 'Wat is een "burcht" in deze tekst?', opties: ['een dam van takken', 'een plek waar bevers voedsel bewaren', 'een soort boom', 'een hol van takken en modder met een ingang onder water'], goed: 3, uitleg: 'Na het woord "burcht" staat een dubbele punt. Daarna volgt de uitleg: "een hol met een ingang onder water". De dam is iets anders: die bouwen bevers om het water hoger te laten komen.' },
        { vaardigheid: 'Vergelijking', vraag: 'Een bever stuurt met zijn staart "zoals een schip met een roer". Wat bedoelt de schrijver?', opties: ['De bever bepaalt met zijn staart de richting als hij zwemt', 'De bever roeit met zijn staart', 'De staart van de bever is van hout', 'De bever slaat met zijn staart op het water'], goed: 0, uitleg: 'Met een roer stuur je een schip: je bepaalt ermee de richting. De schrijver vergelijkt de staart van de bever daarmee. Roeien doe je met roeispanen, niet met een roer.' },
        { vaardigheid: 'Eigen kennis', vraag: 'Waarom is een boer met land naast een beverdam niet altijd blij met bevers?', opties: ['Omdat bevers zijn koeien aanvallen', 'Omdat bevers \'s nachts veel lawaai maken', 'Omdat zijn land door de dam natter kan worden of kan overstromen', 'Omdat bevers zijn tractor beschadigen'], goed: 2, uitleg: 'Combineer de tekst met wat je al weet. Een dam laat het water hoger komen en zorgt voor nieuwe natte plekken. Voor de natuur is dat goed, maar een weiland of akker kan daardoor te nat worden. Bevers eten trouwens alleen planten.' },
        { vaardigheid: 'Feit of mening', vraag: 'Welke zin bevat een mening?', opties: ['In 1826 werd in ons land de laatste wilde bever gedood.', 'Een volwassen dier kan tot wel dertig kilo wegen.', 'Dat is goed nieuws voor de natuur.', 'In 1988 werden er weer bevers uitgezet.'], goed: 2, uitleg: 'Bij een feit kun je nagaan of het klopt: een jaartal of een gewicht. "Goed nieuws" is een oordeel: de schrijver vindt iets van de terugkeer van de bever. Dat maakt de zin een mening, ook al geeft de schrijver er een reden bij.' },
        { vaardigheid: 'Signaalwoord', vraag: 'In alinea 4 staat: "Toch zorgen bevers ook voor problemen." Wat laat "Toch" hier zien?', opties: ['Er volgt een voorbeeld', 'Er volgt een tegenstelling: na de voordelen komt een nadeel', 'Er volgt nog een voordeel', 'Er volgt een samenvatting'], goed: 1, uitleg: '"Toch" is een signaalwoord voor een tegenstelling. Eerst schrijft de schrijver over het goede nieuws voor de natuur, daarna over de gevaren voor dijken.' }
      ]
    },
    kort: [
      {
        titel: 'Ontdek de Biesbosch!', soort: 'Programma',
        tekst: [
          'Ontdek de Biesbosch! Excursies vanaf Bezoekerscentrum De Kreek',
          'Excursie | Wanneer | Duur | Volwassene | Kind (4–12 jaar)',
          'Fluisterboot: op zoek naar de bever | elke dag 11.00 en 14.00 uur | 1,5 uur | € 14 | € 8',
          'Kanotocht (vanaf 10 jaar) | zaterdag en zondag 10.00 uur | 3 uur | € 22 | € 15',
          'Wandeling met de boswachter | woensdag en zondag 13.30 uur | 2 uur | € 6 | € 3',
          'Bevers zijn schemerdieren. Overdag is de kans klein dat je er een ziet, maar hun sporen, zoals afgeknaagde boomstammen, zie je altijd.'
        ],
        vragen: [
          { vaardigheid: 'Schema lezen', vraag: 'Familie De Groot (twee volwassenen en kinderen van 8 en 11 jaar) wil op zaterdag met z\'n allen een excursie doen. Welke excursie kunnen ze kiezen?', opties: ['Alleen de kanotocht', 'Alleen de fluisterboot', 'De fluisterboot en de wandeling', 'Alle drie de excursies'], goed: 1, uitleg: 'Controleer per excursie twee dingen: de dag en de leeftijd. De fluisterboot vaart elke dag. De kanotocht is op zaterdag, maar pas vanaf 10 jaar, en het kind van 8 mag dus niet mee. De wandeling is alleen op woensdag en zondag.' },
          { vaardigheid: 'Woordbetekenis', vraag: 'Wat zijn "schemerdieren"?', opties: ['Dieren die zich goed kunnen verstoppen', 'Dieren die alleen in de winter actief zijn', 'Dieren die vooral actief zijn als het licht of donker wordt', 'Dieren die bang zijn voor boten'], goed: 2, uitleg: 'Haal het woord uit elkaar: schemer + dieren. De schemering is de tijd waarin het licht of donker wordt. De zin erna past daarbij: overdag zie je ze bijna nooit.' }
        ]
      },
      {
        titel: 'Welkom in het leefgebied van de bever', soort: 'Informatiebord',
        tekst: [
          'Welkom in het leefgebied van de bever',
          'Honden altijd aan de lijn.',
          'Vuur maken is verboden.',
          'Varen: maximaal 6 kilometer per uur.',
          'Zie je een beverburcht? Blijf op minstens 10 meter afstand en maak geen lawaai.',
          'Wie zich niet aan de regels houdt, kan een boete krijgen.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Hoe dicht mag je bij een beverburcht komen?', opties: ['Niet dichter dan 10 meter', 'Tot 6 meter', 'Zo dicht als je wilt, als je maar stil bent', 'Je mag er helemaal niet naar kijken'], goed: 0, uitleg: 'Zoek de regel met "beverburcht". Daar staat "minstens 10 meter afstand". Dat betekent: 10 meter of meer, dus niet dichterbij. Het getal 6 hoort bij de vaarsnelheid.' },
          { vaardigheid: 'Eigen kennis', vraag: 'Waarom geldt er in dit gebied waarschijnlijk een maximumsnelheid voor boten?', opties: ['Omdat boten anders te veel brandstof gebruiken', 'Omdat bevers met de boten meezwemmen', 'Omdat er geen boten mogen varen', 'Om de dieren en hun burchten langs de oever niet te verstoren met golven en lawaai'], goed: 3, uitleg: 'De reden staat niet op het bord; je moet hem zelf bedenken. Een snelle boot maakt golven en lawaai. Bevers wonen in burchten aan de oever, met een ingang onder water. Golven en herrie kunnen hen verstoren.' }
        ]
      }
    ]
  },
  // Dag 28: Het geheim van de zolder
  {
    hardop: {
      titel: 'Het geheim van de zolder', soort: 'Verhalend', emoji: '🎩',
      alineas: [
        'Het regende al de hele herfstvakantie, en Isa en haar broertje Mats verveelden zich stierlijk bij opa en oma. "Ga anders eens op zolder kijken," zei oma. "Daar staat genoeg oude rommel." Opa keek even op van zijn krant, alsof hij iets wilde zeggen, maar hij zweeg. Dat deed opa wel vaker. Hij was een man van weinig woorden.',
        'De zolder was schemerig en rook naar stof. Tussen dozen met kerstspullen stond een oude, leren koffer. Toen Isa de sloten openklikte, hield ze haar adem in. Bovenop lag een zwarte cape met een rode voering. Daaronder vonden ze een hoge hoed, een stapel speelkaarten en een vergeelde affiche: "De Grote Bernardo – avonden vol verbazing!"',
        '"Bernardo..." zei Mats langzaam. "Opa heet toch Bernard?" Ze keken elkaar aan en renden met de affiche de trap af. Opa legde zijn krant weg en bleef een hele tijd naar de affiche kijken. Toen verscheen er een glimlach op zijn gezicht die Isa nog nooit bij hem had gezien. "Twintig jaar lang heb ik op het toneel gestaan," zei hij zacht. "Ik dacht dat niemand het nog wist."',
        'Die middag pakte opa voor het eerst in jaren de speelkaarten. Hij liet Mats een kaart kiezen, schudde het spel en haalde de kaart even later uit Isa\'s capuchon. Mats gilde van verbazing. "Hoe doe je dat?" Opa tikte tegen zijn neus. "Een goochelaar verraadt nooit zijn geheimen," zei hij. Maar vanaf die dag was opa niet meer alleen de stille man achter de krant.'
      ],
      vragen: [
        { vaardigheid: 'Personage', vraag: 'Hoe voelen Isa en Mats zich aan het begin van het verhaal?', opties: ['Ze vervelen zich', 'Ze zijn bang', 'Ze zijn boos op opa', 'Ze zijn moe van het buitenspelen'], goed: 0, uitleg: 'In de eerste zin staat het letterlijk: ze "verveelden zich stierlijk". Stierlijk betekent hier: heel erg. Buitenspelen konden ze niet eens, want het regende.' },
        { vaardigheid: 'Woordbetekenis', vraag: '"Hij was een man van weinig woorden." Wat betekent dat?', opties: ['Hij kende niet veel woorden', 'Hij werd snel boos', 'Hij praatte niet veel', 'Hij kon niet goed lezen'], goed: 2, uitleg: 'Kijk naar de zinnen ervoor: opa wil iets zeggen, maar zwijgt, en dat doet hij "wel vaker". Een man van weinig woorden is iemand die niet veel praat. Het gaat niet om hoeveel woorden hij kent.' },
        { vaardigheid: 'Informatie zoeken', vraag: 'Waardoor komen Isa en Mats erachter dat de man op de affiche opa kan zijn?', opties: ['Oma vertelt het hun', 'De naam Bernardo lijkt op opa\'s naam Bernard', 'Ze herkennen opa\'s snor', 'Op de affiche staat opa\'s adres'], goed: 1, uitleg: 'Lees wat Mats zegt in alinea 3: "Bernardo... Opa heet toch Bernard?" De twee namen lijken op elkaar. Daarom rennen ze met de affiche naar beneden.' },
        { vaardigheid: 'Bedoeling', vraag: 'Aan het begin kijkt opa op van zijn krant, "alsof hij iets wilde zeggen", maar hij zwijgt. Wat is daarvoor de meest waarschijnlijke reden?', opties: ['Hij twijfelt of hij de kinderen over de koffer op zolder moet vertellen', 'Hij wil liever verder lezen', 'Hij vindt dat de kinderen buiten moeten spelen', 'Hij is boos op oma'], goed: 0, uitleg: 'Dit staat niet letterlijk in de tekst; je leidt het af uit wat er later gebeurt. Opa weet wat er op zolder staat en zegt later: "Ik dacht dat niemand het nog wist." Als oma over de zolder begint, aarzelt hij dus of hij zijn geheim zal vertellen.' },
        { vaardigheid: 'Personage', vraag: 'Wat verandert er aan het eind van het verhaal aan opa?', opties: ['Hij wordt een beroemde goochelaar', 'Hij geeft de koffer aan Mats', 'Hij gaat weer op het toneel staan', 'Hij laat een andere, vrolijke kant van zichzelf zien'], goed: 3, uitleg: 'Vergelijk hoe opa aan het begin en aan het eind wordt beschreven. Eerst is hij de stille man achter de krant. Aan het eind glimlacht hij, doet hij een goocheltruc en is hij "niet meer alleen de stille man". De andere antwoorden staan niet in de tekst.' },
        { vaardigheid: 'Titel', vraag: 'Waarom past de titel "Het geheim van de zolder" bij dit verhaal?', opties: ['Omdat er op de zolder een schat met goud verstopt ligt', 'Omdat de koffer op zolder laat zien wat opa vroeger deed, iets wat de kinderen niet wisten', 'Omdat Isa een geheim voor Mats heeft', 'Omdat oma de zolder altijd op slot houdt'], goed: 1, uitleg: 'Een goede titel past bij waar het hele verhaal om draait. Op zolder vinden de kinderen een koffer die opa\'s verleden als goochelaar verraadt. Dat was het geheim. Een schat of een slot komt in het verhaal niet voor.' }
      ]
    },
    kort: [
      {
        titel: 'Magische Middag', soort: 'Advertentie',
        tekst: [
          'Theater De Lantaarn presenteert: Magische Middag!',
          'Goochelaar Mira laat dingen verdwijnen, en soms ook weer verschijnen.',
          'Zondag 29 november, 14.00 uur (zaal open om 13.30 uur). Duur: 75 minuten, zonder pauze.',
          'Geschikt voor kinderen vanaf 6 jaar.',
          'Kaartjes: kinderen € 9,50, volwassenen € 12,50. Gezinskaart (2 volwassenen en 2 kinderen): € 38.',
          'Na de show: goochelworkshop voor kinderen (15.30–16.15 uur), € 5 extra. Opgeven bij de kassa.'
        ],
        vragen: [
          { vaardigheid: 'Schema lezen', vraag: 'Een gezin met twee volwassenen en twee kinderen koopt een gezinskaart in plaats van vier losse kaartjes. Hoeveel geld besparen ze?', opties: ['€ 4', '€ 6', '€ 8', '€ 10'], goed: 1, uitleg: 'Reken eerst uit wat vier losse kaartjes kosten: 2 × € 12,50 = € 25 en 2 × € 9,50 = € 19. Samen is dat € 44. De gezinskaart kost € 38. Het verschil is € 44 − € 38 = € 6.' },
          { vaardigheid: 'Informatie combineren', vraag: 'Hoe laat is de show afgelopen?', opties: ['Om 15.00 uur', 'Om 15.30 uur', 'Om 15.15 uur', 'Om 16.15 uur'], goed: 2, uitleg: 'De show begint om 14.00 uur en duurt 75 minuten, zonder pauze. 75 minuten is 1 uur en 15 minuten. 14.00 + 1.15 = 15.15 uur. Om 15.30 uur begint pas de workshop.' }
        ]
      },
      {
        titel: 'Goocheltruc: de verdwijnende munt', soort: 'Instructie',
        tekst: [
          'Goocheltruc: de verdwijnende munt',
          'Nodig: een glas, twee vellen papier in dezelfde kleur, een schaar, lijm, een zakdoek en een munt.',
          'Voorbereiding (zonder publiek!): zet het glas ondersteboven op een vel papier. Teken de rand na, knip het rondje uit en plak het op de rand van het glas.',
          '1. Leg het andere vel op tafel en leg de munt erop.',
          '2. Dek het glas af met de zakdoek en zet het glas met de opening naar beneden op de munt.',
          '3. Haal de zakdoek weg. De munt is "verdwenen"!',
          '4. Leg de zakdoek terug, til glas en zakdoek samen op, en de munt is er weer.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat moet je doen voordat het publiek komt kijken?', opties: ['De munt onder het glas leggen', 'Een rondje papier op de rand van het glas plakken', 'De zakdoek op tafel leggen', 'De munt in de zakdoek verstoppen'], goed: 1, uitleg: 'Zoek het stukje met "zonder publiek!": dat is de voorbereiding. Daar staat dat je een rondje papier uitknipt en op de rand van het glas plakt.' },
          { vaardigheid: 'Instructie', vraag: 'Waarom lijkt de munt te verdwijnen?', opties: ['De munt glijdt ongemerkt in je mouw', 'De zakdoek is doorzichtig', 'Het papieren rondje op het glas heeft dezelfde kleur als het vel eronder en bedekt de munt', 'Het glas maakt de munt kleiner'], goed: 2, uitleg: 'Bedenk waarom je papier in dezelfde kleur nodig hebt. Het rondje op de rand van het glas ligt precies over de munt. Omdat het dezelfde kleur heeft als het vel op tafel, zie je het niet, en lijkt het alsof de munt weg is.' }
        ]
      }
    ]
  },
  // Dag 29: Leerlingen maken een moestuin op het dak
  {
    hardop: {
      titel: 'Leerlingen maken een moestuin op het dak', soort: 'Nieuws', emoji: '🥕',
      alineas: [
        'HOOGEVELD – Op het platte dak van basisschool De Zonnewijzer groeien sinds dit voorjaar tomaten, sla en aardbeien. Leerlingen van groep 7 en 8 hebben er samen met een tuinman een moestuin aangelegd. Vorige week werd de laatste oogst van dit jaar binnengehaald: ruim veertig kilo groente en fruit.',
        'Het idee kwam van de leerlingen zelf. "Onze school heeft bijna geen plein, alleen tegels," vertelt Noa (12) uit groep 8. "Maar het dak was helemaal leeg. Zonde!" De klas schreef een brief aan de gemeente, die geld gaf voor bakken, aarde en een hek rondom. Een bouwmarkt uit de buurt schonk het gereedschap.',
        'Een tuin op een dak is niet zonder uitdagingen. Het waait er harder dan beneden, en de zon brandt de hele dag op de planten. Daarom zijn de bakken zwaar en diep, zodat de aarde het vocht beter vasthoudt. Regenwater wordt opgevangen in een grote ton. In de zomervakantie wisselden ouders elkaar af om de planten water te geven.',
        'De oogst gaat niet naar de supermarkt, maar naar de schoolkeuken. Daar koken de leerlingen er één keer per maand mee. "Ik at eerst nooit sla," zegt Sem (11), "maar als je het zelf hebt gekweekt, smaakt het opeens veel lekkerder." Volgend jaar wil de school ook kruiden en pompoenen kweken. Andere scholen in de stad hebben al gebeld om te vragen hoe ze zelf zo\'n daktuin kunnen beginnen.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Wie betaalde de bakken, de aarde en het hek?', opties: ['De leerlingen zelf', 'De gemeente', 'Een bouwmarkt uit de buurt', 'De ouders'], goed: 1, uitleg: 'Zoek in alinea 2 naar de woorden uit de vraag. Er staat dat de gemeente geld gaf voor bakken, aarde en een hek. De bouwmarkt schonk alleen het gereedschap.' },
        { vaardigheid: 'Woordbetekenis', vraag: '"Een tuin op een dak is niet zonder uitdagingen." Wat betekent "uitdagingen" hier?', opties: ['wedstrijden', 'voordelen', 'uitnodigingen', 'moeilijkheden die je moet oplossen'], goed: 3, uitleg: 'Lees de zinnen erna: het waait harder en de zon brandt de hele dag. Dat zijn problemen waar je een oplossing voor moet bedenken. Dat bedoelt de schrijver met uitdagingen.' },
        { vaardigheid: 'Verband', vraag: 'Waarom zijn de bakken op het dak zwaar en diep?', opties: ['Omdat er heel veel planten in moeten', 'Zodat de aarde het vocht beter vasthoudt, ondanks de wind en de zon', 'Zodat de leerlingen er niet in kunnen vallen', 'Omdat de gemeente dat wilde'], goed: 1, uitleg: 'Het signaalwoord "Daarom" laat zien dat de reden er vlak voor staat: de harde wind en de felle zon. De zin zelf zegt waarvoor het nodig is: "zodat de aarde het vocht beter vasthoudt".' },
        { vaardigheid: 'Bedoeling', vraag: 'Waarom laat de schrijver Noa aan het woord in alinea 2?', opties: ['Om te vertellen hoe oud Noa is', 'Om uit te leggen hoe je tomaten kweekt', 'Om te laten zien dat het idee van de leerlingen zelf kwam, en waarom', 'Om kritiek te geven op de gemeente'], goed: 2, uitleg: 'In een nieuwsbericht laat een schrijver vaak iemand aan het woord die erbij betrokken is. Noa legt uit waarom de leerlingen op het idee kwamen: geen groen plein, wel een leeg dak. Zo wordt het bericht levendiger en geloofwaardiger.' },
        { vaardigheid: 'Feit of mening', vraag: 'Welke uitspraak is een mening?', opties: ['Vorige week werd de laatste oogst binnengehaald.', 'Regenwater wordt opgevangen in een grote ton.', 'De leerlingen koken één keer per maand met de oogst.', 'Als je het zelf hebt gekweekt, smaakt het opeens veel lekkerder.'], goed: 3, uitleg: 'Of iets "lekkerder smaakt", vindt iedereen anders: dat is een mening. Of de oogst vorige week was, of er een regenton is en hoe vaak er gekookt wordt, kun je nagaan: dat zijn feiten.' },
        { vaardigheid: 'Slot', vraag: 'Wat laat de laatste zin van het bericht zien?', opties: ['Dat de daktuin ook buiten de school indruk maakt', 'Dat de school een tweede dak wil bouwen', 'Dat de gemeente geen geld meer wil geven', 'Dat de leerlingen voor andere scholen gaan koken'], goed: 0, uitleg: 'Andere scholen bellen om te vragen hoe ze zelf een daktuin kunnen beginnen. Dat laat zien dat het project ook buiten De Zonnewijzer opvalt. Een nieuwsbericht eindigt vaak met zo\'n blik vooruit.' }
      ]
    },
    kort: [
      {
        titel: 'Zaaikalender voor de daktuin', soort: 'Tabel',
        tekst: [
          'Groente | Zaaien | Oogsten | Zon',
          'Sla | maart – augustus | 6 weken na het zaaien | halfschaduw is genoeg',
          'Radijs | maart – september | 4 weken na het zaaien | veel zon',
          'Spinazie | maart – april en augustus – september | 6 tot 8 weken na het zaaien | halfschaduw is genoeg',
          'Tomaat | binnen voorzaaien in maart, naar buiten in mei | juli – oktober | veel zon',
          'Pompoen | mei | september – oktober | veel zon'
        ],
        vragen: [
          { vaardigheid: 'Schema lezen', vraag: 'Welke groente kun je eind september zaaien en nog in oktober oogsten?', opties: ['Sla', 'Radijs', 'Pompoen', 'Spinazie'], goed: 1, uitleg: 'Je moet twee kolommen combineren. Sla en pompoen kun je in september niet zaaien. Spinazie wel, maar die is pas na 6 tot 8 weken klaar: dan zit je al in november. Radijs is na 4 weken klaar, dus eind oktober.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Welke groenten hebben genoeg aan halfschaduw?', opties: ['Sla en spinazie', 'Tomaat en pompoen', 'Radijs en sla', 'Alleen spinazie'], goed: 0, uitleg: 'Kijk in de laatste kolom ("Zon") en zoek waar "halfschaduw is genoeg" staat. Dat is bij sla en bij spinazie.' }
        ]
      },
      {
        titel: 'Hulp gezocht voor de daktuin', soort: 'Mail',
        tekst: [
          'Van: meester Joost',
          'Aan: ouders van groep 7 en 8',
          'Onderwerp: hulp gezocht voor de daktuin',
          'Beste ouders,',
          'Volgend voorjaar breiden we de daktuin uit met pompoenen en kruiden. Daarvoor zoeken we ouders die in april op woensdagmiddag kunnen helpen met het vullen van nieuwe bakken.',
          'Het dak is alleen bereikbaar via een smalle trap. Wie hoogtevrees heeft, kan ook beneden helpen met het voorzaaien in bakjes.',
          'Opgeven kan tot 1 december.',
          'Groet, meester Joost'
        ],
        vragen: [
          { vaardigheid: 'Formulering', vraag: 'Wat bedoelt meester Joost met "Wie hoogtevrees heeft, kan ook beneden helpen"?', opties: ['Alleen ouders zonder hoogtevrees mogen helpen', 'Ouders die bang zijn op hoge plekken, kunnen toch meehelpen', 'De trap is te smal voor volwassenen', 'Al het werk gebeurt beneden'], goed: 1, uitleg: 'Hoogtevrees betekent: bang zijn op hoge plekken. Het woordje "ook" laat zien dat er een andere mogelijkheid is: zulke ouders kunnen beneden helpen in plaats van op het dak.' },
          { vaardigheid: 'Teksten vergelijken', vraag: 'Kijk ook naar de zaaikalender. Waarom is het handig dat de nieuwe bakken in april worden gevuld?', opties: ['Omdat je pompoen in april oogst', 'Omdat pompoenen in de winter groeien', 'Omdat pompoenen in mei gezaaid worden', 'Omdat pompoenen halfschaduw nodig hebben'], goed: 2, uitleg: 'Combineer de twee teksten. In de mail staat dat er pompoenen bij komen en dat de bakken in april worden gevuld. In de zaaikalender zie je dat je pompoen in mei zaait. Dan moeten de bakken dus net op tijd klaar zijn.' }
        ]
      }
    ]
  },
  // Dag 30: Zo houd je een goede spreekbeurt
  {
    hardop: {
      titel: 'Zo houd je een goede spreekbeurt', soort: 'Instructief', emoji: '🎤',
      alineas: [
        'Over een paar weken sta je voor de klas met je spreekbeurt. Spannend? Dat is heel normaal: zelfs ervaren sprekers hebben vlak van tevoren last van kriebels in hun buik. Het goede nieuws is dat je die zenuwen een stuk kleiner kunt maken door je goed voor te bereiden. Met de tips in deze tekst gaat dat vast lukken.',
        'Kies om te beginnen een onderwerp dat je zelf boeiend vindt, want enthousiasme werkt aanstekelijk: als jij het interessant vindt, gaat je publiek ook beter luisteren. Zoek daarna informatie in boeken en op betrouwbare websites. Schrijf niet alles over, maar noteer alleen de belangrijkste feiten, in je eigen woorden.',
        'Vervolgens maak je een duidelijke opbouw. Begin met een pakkende inleiding, bijvoorbeeld een verrassende vraag of een opvallend voorwerp. In de kern vertel je in een logische volgorde wat je weet. Sluit af met een korte samenvatting, zodat de klas onthoudt waar het om ging. Zet steekwoorden op kleine kaartjes in plaats van een hele tekst op te lezen. Zo blijf je de klas aankijken.',
        'Oefen ten slotte een paar keer hardop, bijvoorbeeld voor je ouders of voor de spiegel. Let daarbij op je tempo: wie zenuwachtig is, gaat vaak veel te snel praten. Neem dus af en toe een korte pauze. En als je een keer hapert? Geen ramp. Haal rustig adem, kijk op je kaartje en ga gewoon verder.'
      ],
      vragen: [
        { vaardigheid: 'Tekstdoel', vraag: 'Waarom heeft de schrijver deze tekst over spreekbeurten geschreven?', opties: ['De lezer overhalen om een spreekbeurt over dieren te houden', 'De lezer uitleggen hoe je je goed voorbereidt op een spreekbeurt', 'Vertellen over een spreekbeurt die helemaal misging', 'Uitleggen waar zenuwen in je buik vandaan komen'], goed: 1, uitleg: 'Kijk naar wat er in elke alinea gebeurt: kies een onderwerp, maak een opbouw, oefen hardop. De schrijver geeft stap voor stap tips. Een tekst die uitlegt hoe je iets doet, heeft als doel: instructie geven.' },
        { vaardigheid: 'Woordbetekenis', vraag: '"Enthousiasme werkt aanstekelijk." Wat betekent "aanstekelijk" hier?', opties: ['Het maakt je moe', 'Het is gevaarlijk', 'Het gaat over op anderen', 'Het duurt maar kort'], goed: 2, uitleg: 'Lees verder in dezelfde zin: "als jij het interessant vindt, gaat je publiek ook beter luisteren." Jouw enthousiasme springt dus over op de klas, net zoals een verkoudheid aanstekelijk is.' },
        { vaardigheid: 'Verwijswoord', vraag: '"Zo blijf je de klas aankijken." Waar verwijst "Zo" naar?', opties: ['Naar het oefenen voor de spiegel', 'Naar een pakkende inleiding met een opvallend voorwerp', 'Naar de korte samenvatting aan het eind', 'Naar het gebruiken van kaartjes met steekwoorden in plaats van een hele tekst'], goed: 3, uitleg: '"Zo" verwijst terug naar de zin ervoor. Daar staat dat je steekwoorden op kaartjes zet in plaats van een hele tekst op te lezen. Omdat je niet de hele tijd op papier hoeft te kijken, kun je de klas blijven aankijken.' },
        { vaardigheid: 'Signaalwoord', vraag: 'Alinea 2, 3 en 4 beginnen met "Kies om te beginnen", "Vervolgens" en "Oefen ten slotte". Wat laten die woorden zien?', opties: ['Dat er een tegenstelling komt', 'In welke volgorde je de stappen zet', 'Wat de oorzaak is van zenuwen', 'Dat er een voorbeeld volgt'], goed: 1, uitleg: '"Om te beginnen", "vervolgens" en "ten slotte" zijn signaalwoorden van volgorde. Ze laten zien welke stap eerst komt en welke als laatste. In een instructieve tekst zie je ze heel vaak.' },
        { vaardigheid: 'Inleiding', vraag: 'Waarom begint de schrijver met "Spannend? Dat is heel normaal"?', opties: ['Om de lezer gerust te stellen voordat de tips komen', 'Om te laten zien dat je een spreekbeurt beter kunt overslaan', 'Om uit te leggen dat ervaren sprekers geen zenuwen hebben', 'Om de lezer te waarschuwen dat het vaak misgaat'], goed: 0, uitleg: 'Een inleiding probeert de lezer mee te krijgen. De schrijver weet dat veel kinderen het eng vinden, en zegt meteen: dat is normaal, en je kunt er iets aan doen. Daarna volgen de tips. Let op: er staat juist dat óók ervaren sprekers kriebels hebben.' },
        { vaardigheid: 'Hoofdgedachte', vraag: 'Welke zin past het best als hoofdgedachte van de tekst?', opties: ['Ervaren sprekers hebben ook last van zenuwen.', 'Gebruik altijd kaartjes met steekwoorden.', 'Met een goede voorbereiding wordt je spreekbeurt beter en worden je zenuwen kleiner.', 'Oefen je spreekbeurt voor de spiegel.'], goed: 2, uitleg: 'De hoofdgedachte is de belangrijkste boodschap van de hele tekst, niet van één alinea. De kaartjes en de spiegel zijn losse tips. Alle tips samen dienen één doel: door je goed voor te bereiden, gaat het beter en ben je minder zenuwachtig.' }
      ]
    },
    kort: [
      {
        titel: 'Spreekbeurten groep 8', soort: 'Rooster',
        tekst: [
          'Rooster spreekbeurten groep 8 – november',
          'Maandag 9 november | 10.15 uur | Sem | Vulkanen',
          'Woensdag 11 november | 13.30 uur | Fatima | Marokko',
          'Donderdag 12 november | 10.15 uur | Lotte | Paarden',
          'Maandag 16 november | 13.30 uur | Yusuf | De ruimte',
          'Woensdag 18 november | 10.15 uur | Mila | Zeeschildpadden',
          'Elke spreekbeurt duurt 10 minuten. Daarna is er 5 minuten tijd voor vragen.',
          'Ruilen? Alleen met toestemming van juf Anouk, en uiterlijk een week van tevoren.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wie houdt een spreekbeurt op woensdag 18 november?', opties: ['Fatima', 'Mila', 'Yusuf', 'Lotte'], goed: 1, uitleg: 'Zoek in het rooster eerst de goede datum en lees dan de regel verder naar rechts. Op woensdag 18 november staat Mila, met een spreekbeurt over zeeschildpadden.' },
          { vaardigheid: 'Conclusie', vraag: 'Lotte wil haar spreekbeurt ruilen met Yusuf. Ze vraagt het op dinsdag 10 november aan juf Anouk. Wat zal de juf waarschijnlijk zeggen?', opties: ['Ja, want Lotte vraagt het netjes aan de juf', 'Ja, want ze houden allebei hun spreekbeurt om 10.15 uur', 'Nee, want Lotte vraagt het minder dan een week voor haar spreekbeurt', 'Nee, want op maandag zijn er geen spreekbeurten'], goed: 2, uitleg: 'Combineer de regel onderaan met het rooster. Ruilen mag alleen uiterlijk een week van tevoren. Lotte is aan de beurt op 12 november. Op 10 november is dat nog maar twee dagen van tevoren: te laat.' }
        ]
      },
      {
        titel: 'Leen een spreekbeurtkist!', soort: 'Folder',
        tekst: [
          'Spreekbeurt op komst? Leen een spreekbeurtkist bij de bibliotheek!',
          'In elke kist zitten boeken, platen en soms een echt voorwerp over één onderwerp, bijvoorbeeld ridders of het menselijk lichaam.',
          'Je mag een kist drie weken lenen. Verlengen kan één keer, met twee weken.',
          'Lenen is gratis voor leden tot 18 jaar. Ben je geen lid? Dan betaal je € 5 borg.',
          'Reserveer op tijd: populaire kisten zijn vaak weken van tevoren al weg.'
        ],
        vragen: [
          { vaardigheid: 'Conclusie', vraag: 'Fenna leent op zondag 1 november een kist en verlengt hem één keer. Wanneer moet de kist uiterlijk terug?', opties: ['Zondag 22 november', 'Zondag 29 november', 'Zondag 6 december', 'Zondag 13 december'], goed: 2, uitleg: 'Tel de twee regels bij elkaar op: drie weken lenen plus twee weken verlengen is vijf weken. Vijf weken na 1 november is 6 december. 22 november is drie weken: dan ben je het verlengen vergeten.' },
          { vaardigheid: 'Bedoeling', vraag: 'Wat bedoelt de bibliotheek met "Reserveer op tijd"?', opties: ['Dat je de kist op tijd terug moet brengen', 'Dat je pas een kist mag lenen als je lid bent', 'Dat de bibliotheek maar kort open is', 'Dat je de kist ruim voor je spreekbeurt moet aanvragen, omdat hij anders misschien al uitgeleend is'], goed: 3, uitleg: 'Lees de hele zin: "populaire kisten zijn vaak weken van tevoren al weg." De bibliotheek waarschuwt je dus: wacht niet tot vlak voor je spreekbeurt, want dan is jouw onderwerp misschien al door iemand anders geleend.' }
        ]
      }
    ]
  },
  // Dag 31: De reis van de Rijn
  {
    hardop: {
      titel: 'De reis van de Rijn', soort: 'Informatief', emoji: '🏞️',
      alineas: [
        'De Rijn is een van de belangrijkste rivieren van Europa. Hij ontspringt hoog in de Zwitserse Alpen, waar smeltwater van sneeuw en gletsjers samenkomt in kleine bergbeekjes. Die beekjes vloeien samen tot een snelle, ijskoude rivier. Vanaf daar legt het water een reis af van ongeveer 1200 kilometer. Onderweg stroomt het door of langs zes landen, voordat het in de Noordzee uitkomt.',
        'Onderweg verandert de rivier flink van karakter. In de bergen raast het water omlaag. Bij het Zwitserse Schaffhausen stort het met donderend geweld naar beneden, in een van de grootste watervallen van Europa. Verder naar het noorden wordt de Rijn breder en kalmer. In Duitsland slingert hij tussen steile heuvels vol wijngaarden en oude burchten door.',
        'Bij Lobith stroomt de Rijn Nederland binnen. Niet veel later splitst hij zich in een aantal takken, zoals de Waal, de Nederrijn en de IJssel. Samen met de Maas hebben die rivieren in duizenden jaren een groot deel van West-Nederland opgebouwd uit zand en klei. Zo\'n gebied, waar een rivier zich vlak voor de zee in steeds meer armen verdeelt, heet een delta.',
        'Voor ons land is de Rijn onmisbaar. Enorme vrachtschepen varen over de rivier van de haven van Rotterdam naar Duitsland en terug. Ook halen waterbedrijven er drinkwater uit. Maar de rivier kan ook gevaarlijk zijn. Na veel regen, of als in de bergen de sneeuw smelt, stijgt het water soms zo hoog dat de dijken het zwaar krijgen. Daarom houden waterbeheerders de waterstand bij Lobith elke dag nauwkeurig in de gaten.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Waar ontspringt de Rijn?', opties: ['In de Noordzee', 'Bij Lobith', 'In de Zwitserse Alpen', 'In de heuvels met wijngaarden in Duitsland'], goed: 2, uitleg: '"Ontspringen" betekent: beginnen. Het antwoord staat in de tweede zin van alinea 1: de Rijn ontspringt hoog in de Zwitserse Alpen. De Noordzee is juist het eindpunt.' },
        { vaardigheid: 'Woordbetekenis', vraag: '"Voor ons land is de Rijn onmisbaar." Wat betekent "onmisbaar"?', opties: ['We kunnen niet zonder', 'Hij is heel gevaarlijk', 'Hij is heel lang', 'Hij is moeilijk te vinden'], goed: 0, uitleg: 'Kijk naar de vorm van het woord: on-mis-baar. Iets wat je kunt missen, is misbaar. "On" draait dat om: je kunt het niet missen. De rest van de alinea laat zien waarom: schepen, drinkwater.' },
        { vaardigheid: 'Alinea', vraag: 'Waar gaat alinea 2 vooral over?', opties: ['Waar de Rijn begint', 'Waarom de Rijn gevaarlijk kan zijn', 'Welke takken de Rijn in Nederland heeft', 'Hoe de rivier onderweg verandert'], goed: 3, uitleg: 'De eerste zin van alinea 2 zegt het al: "Onderweg verandert de rivier flink van karakter." Daarna lees je hoe: eerst wild in de bergen, dan een waterval, daarna breder en kalmer.' },
        { vaardigheid: 'Verband', vraag: 'Waarom houden waterbeheerders de waterstand bij Lobith elke dag in de gaten?', opties: ['Omdat daar de meeste vrachtschepen varen', 'Omdat te hoog water de dijken in gevaar kan brengen', 'Omdat daar het drinkwater wordt opgepompt', 'Omdat de Rijn daar uit de Alpen komt'], goed: 1, uitleg: 'Het signaalwoord "Daarom" vertelt dat je de reden in de zin ervoor vindt. Daar staat dat het water na veel regen of smeltende sneeuw zo hoog kan worden dat de dijken het zwaar krijgen.' },
        { vaardigheid: 'Eigen kennis', vraag: 'Lobith ligt vlak bij de grens met Duitsland. Waarom is dat een slimme plek om de waterstand te meten?', opties: ['Omdat het daar het hardst regent', 'Omdat er in Lobith veel mensen wonen', 'Omdat je daar ziet hoeveel water Nederland binnenkomt, voordat het zich over de takken verdeelt', 'Omdat de rivier daar het smalst is en het water dus het laagst staat'], goed: 2, uitleg: 'Combineer de tekst met wat je zelf weet. Bij Lobith komt al het Rijnwater in één keer ons land binnen; pas daarna splitst het zich. Als het daar hoog staat, weet je dat er veel water op Nederland afkomt, en heb je nog tijd om je voor te bereiden.' },
        { vaardigheid: 'Samenvatten', vraag: 'Welke samenvatting past het best bij de tekst?', opties: ['De Rijn begint in Zwitserland en heeft een grote waterval.', 'In Nederland splitst de Rijn zich in de Waal, de Nederrijn en de IJssel.', 'Schepen varen over de Rijn van Rotterdam naar Duitsland.', 'De Rijn stroomt van de Alpen naar de Noordzee, verandert onderweg, splitst zich in Nederland en is belangrijk, maar soms ook gevaarlijk.'], goed: 3, uitleg: 'Een goede samenvatting noemt kort de kern van álle alinea\'s. De andere antwoorden zijn wel waar, maar gaan maar over één stukje van de tekst.' }
      ]
    },
    kort: [
      {
        titel: 'Rondvaartboot De Rijnparel', soort: 'Tabel',
        tekst: [
          'Rondvaartboot De Rijnparel – vertrek vanaf de steiger in Arnhem',
          'Tocht | Vertrek | Duur | Volwassene | Kind (4–12 jaar)',
          'Stadsrondje | 11.00, 13.00 en 15.00 uur | 1 uur | € 12,50 | € 7,50',
          'Naar de stuw | 10.30 uur | 2,5 uur | € 19,50 | € 11,00',
          'Avondtocht met diner | 18.00 uur | 3 uur | € 45,00 | € 25,00',
          'Kinderen tot 4 jaar varen gratis mee.',
          'Van 1 november tot 1 april varen wij alleen op zaterdag en zondag.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Hoe lang duurt de tocht "Naar de stuw"?', opties: ['1 uur', '2,5 uur', '3 uur', '10.30 uur'], goed: 1, uitleg: 'Zoek de regel "Naar de stuw" en kijk in de kolom "Duur". Let op: 10.30 uur is de vertrektijd, niet hoe lang de tocht duurt.' },
          { vaardigheid: 'Conclusie', vraag: 'Mama, Jesse (10 jaar) en zijn zusje Roos (3 jaar) maken op zaterdag 21 november het Stadsrondje. Wat betalen ze samen?', opties: ['€ 27,50', '€ 20,00', '€ 32,50', 'Niets, want in november vaart de boot niet'], goed: 1, uitleg: 'Mama betaalt € 12,50 en Jesse € 7,50. Roos is jonger dan 4 en vaart gratis mee. Samen: € 20,00. In november vaart de boot wel, alleen in het weekend, en 21 november is een zaterdag.' }
        ]
      },
      {
        titel: 'Hoog water op de Rijn', soort: 'Nieuwsbericht',
        tekst: [
          'Door de vele regen in Duitsland en Zwitserland stijgt het water in de Rijn snel. Bij Lobith staat het nu ruim drie meter hoger dan normaal. Gevaar voor de dijken is er nog niet, maar de uiterwaarden lopen wel onder. Wandelpaden langs de rivier zijn daarom afgesloten. Rijkswaterstaat verwacht dat het water vanaf woensdag weer gaat zakken.'
        ],
        vragen: [
          { vaardigheid: 'Signaalwoord', vraag: '"Wandelpaden langs de rivier zijn daarom afgesloten." Waarom zijn ze afgesloten?', opties: ['Omdat de dijken het gaan begeven', 'Omdat het in Duitsland veel regent', 'Omdat het water vanaf woensdag zakt', 'Omdat de uiterwaarden onder water lopen'], goed: 3, uitleg: '"Daarom" wijst terug naar de reden in de zin ervoor: de uiterwaarden lopen onder. De wandelpaden liggen daar, dus ze staan onder water. Er staat juist dat er nog géén gevaar voor de dijken is.' },
          { vaardigheid: 'Woordbetekenis', vraag: 'Wat zijn "uiterwaarden" waarschijnlijk?', opties: ['Lage stukken land tussen de rivier en de dijk', 'Grote schepen op de rivier', 'Meetpalen voor de waterstand', 'Huizen aan de overkant van de rivier'], goed: 0, uitleg: 'Gebruik de context: de uiterwaarden "lopen onder" als het water stijgt, terwijl de dijken nog veilig zijn, en er liggen wandelpaden langs de rivier. Het moet dus laag land vlak bij de rivier zijn, nog vóór de dijk.' }
        ]
      }
    ]
  },
  // Dag 32: De wedstrijd van Noor
  {
    hardop: {
      titel: 'De wedstrijd van Noor', soort: 'Verhalend', emoji: '⚽',
      alineas: [
        'Al de hele week dacht Noor aan zaterdag. Dan speelde haar team, de Zwaluwen, de laatste wedstrijd van het seizoen tegen de Bevers. De Bevers stonden één punt boven hen, dus de Zwaluwen moesten winnen om kampioen te worden. Noor was de spits van het team en had al veertien keer gescoord. "Jij moet het zaterdag doen," zei trainer Bas na de laatste training. Noor knikte stoer, maar die nacht lag ze lang wakker.',
        'De wedstrijd begon slecht. Al na tien minuten stonden de Zwaluwen met 0-1 achter. Noor rende en rende, maar elke keer als ze de bal kreeg, stonden er meteen twee verdedigers om haar heen. Langs de lijn hoorde ze haar vader roepen, maar zijn woorden waaiden weg in de wind. Aan het eind van de eerste helft voelden haar benen als lood.',
        'In de rust ging ze naast Lieke zitten, het stilste meisje van het team. Lieke had nog nooit gescoord. "Ze letten helemaal niet op jou," zei Noor ineens. "Als ik straks naar links loop, neem ik de verdedigers mee. Dan sta jij vrij." Lieke keek haar met grote ogen aan. "Weet je het zeker?" Noor knikte, al was ze dat zelf helemaal niet.',
        'Vijf minuten voor het einde gebeurde het precies zo. Noor sprintte naar links, de twee verdedigers holden achter haar aan, en ze tikte de bal opzij naar Lieke. Die schoot hem hard in de hoek: 1-1. Even later floot de scheidsrechter af. Kampioen werden ze niet, want een gelijkspel was niet genoeg. Toch voelde Noor zich, met Lieke juichend op haar rug, eigenlijk een winnaar.'
      ],
      vragen: [
        { vaardigheid: 'Personage', vraag: 'Hoe voelt Noor zich in de nacht na de laatste training?', opties: ['Heel zeker van zichzelf', 'Zenuwachtig', 'Boos op trainer Bas', 'Verdrietig omdat ze niet mag spelen'], goed: 1, uitleg: 'Let op het woordje "maar": Noor knikt stoer, máár ze ligt lang wakker. Van buiten doet ze stoer, van binnen is ze gespannen. Wie niet kan slapen voor een wedstrijd, is meestal zenuwachtig.' },
        { vaardigheid: 'Beeldspraak', vraag: '"Aan het eind van de eerste helft voelden haar benen als lood." Wat betekent dat?', opties: ['Haar benen deden pijn door een schop', 'Ze had het koud', 'Ze wilde niet meer meedoen', 'Haar benen voelden heel zwaar en moe'], goed: 3, uitleg: 'Lood is een heel zwaar metaal. De schrijver vergelijkt Noors benen ermee: ze voelen zwaar, omdat ze zo hard heeft gerend. Haar benen zijn natuurlijk niet echt van lood; het is beeldspraak.' },
        { vaardigheid: 'Verband', vraag: 'Waarom lukt het Noor in de eerste helft niet om te scoren?', opties: ['Omdat haar vader steeds naar haar roept', 'Omdat er telkens twee verdedigers om haar heen staan', 'Omdat Lieke de bal nooit naar haar overspeelt', 'Omdat ze zich niet goed voelt'], goed: 1, uitleg: 'Zoek in alinea 2 wat er gebeurt als Noor de bal krijgt: "stonden er meteen twee verdedigers om haar heen." De Bevers weten dat zij de gevaarlijkste speler is en houden haar extra goed in de gaten.' },
        { vaardigheid: 'Personage', vraag: 'Wat zegt het plan dat Noor in de rust bedenkt over haar?', opties: ['Dat ze aan het hele team denkt en niet alleen aan zelf scoren', 'Dat ze bang is om de bal te verliezen', 'Dat ze het belangrijk vindt om zelf de held te zijn', 'Dat ze eigenlijk niet meer wil voetballen'], goed: 0, uitleg: 'Noor is de topscorer, maar ze bedenkt een plan waarbij een ánder kan scoren. Ze gebruikt het feit dat zíj in de gaten wordt gehouden, om Lieke vrij te spelen. Dat laat zien dat ze een teamspeler is.' },
        { vaardigheid: 'Tussen de regels', vraag: '"Noor knikte, al was ze dat zelf helemaal niet." Wat bedoelt de schrijver?', opties: ['Noor wist niet meer wat Lieke had gevraagd', 'Noor vond Lieke eigenlijk geen goede speler', 'Noor wist zelf niet zeker of het plan zou werken', 'Noor wilde liever zelf naar links lopen'], goed: 2, uitleg: '"Dat" verwijst naar Liekes vraag: "Weet je het zeker?" Noor knikt ja, maar ze is het zelf "helemaal niet": ze twijfelt dus. Toch laat ze dat niet merken, om Lieke moed te geven.' },
        { vaardigheid: 'Bedoeling', vraag: 'Waarom voelt Noor zich aan het eind toch een winnaar, terwijl haar team geen kampioen is geworden?', opties: ['Omdat zij het doelpunt heeft gemaakt', 'Omdat de scheidsrechter de Bevers een straf gaf', 'Omdat ze nu de topscorer van de competitie is', 'Omdat haar plan werkte en ze Lieke aan haar eerste doelpunt heeft geholpen'], goed: 3, uitleg: 'Dit staat niet letterlijk in de tekst; je moet het afleiden. Lieke, die nog nooit scoorde, springt juichend op Noors rug. Noors plan is gelukt. Voor Noor telt dat zwaarder dan de titel. Let op: Lieke scoorde, niet Noor.' }
      ]
    },
    kort: [
      {
        titel: 'Eindstand meisjes onder 13', soort: 'Tabel',
        tekst: [
          'Eindstand meisjes onder 13, poule B',
          'Team | Gespeeld | Gewonnen | Gelijk | Verloren | Punten',
          '1. Bevers | 10 | 8 | 1 | 1 | 25',
          '2. Zwaluwen | 10 | 7 | 3 | 0 | 24',
          '3. Kievit | 10 | 5 | 2 | 3 | 17',
          '4. Oranje Vogels | 10 | 2 | 1 | 7 | 7',
          'Winst = 3 punten, gelijkspel = 1 punt, verlies = 0 punten.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Welk team heeft dit seizoen geen enkele wedstrijd verloren?', opties: ['Bevers', 'Kievit', 'Zwaluwen', 'Oranje Vogels'], goed: 2, uitleg: 'Kijk alleen in de kolom "Verloren" en zoek de 0. Die staat bij de Zwaluwen. Ze werden toch tweede, omdat ze drie keer gelijkspeelden.' },
          { vaardigheid: 'Conclusie', vraag: 'Stel dat de Zwaluwen één van hun gelijke spelen toch hadden gewonnen. Wat was er dan gebeurd?', opties: ['Dan waren de Bevers nog steeds kampioen', 'Dan waren de Zwaluwen kampioen geworden met 26 punten', 'Dan waren de Zwaluwen kampioen geworden met 27 punten', 'Dan hadden beide teams 25 punten gehad'], goed: 1, uitleg: 'Een gelijkspel is 1 punt, een overwinning 3 punten. Wordt één gelijkspel een overwinning, dan krijgen de Zwaluwen er 2 punten bij: 24 + 2 = 26. Dat is meer dan de 25 van de Bevers.' }
        ]
      },
      {
        titel: 'Mail van trainer Bas', soort: 'Mail',
        tekst: [
          'Hoi allemaal,',
          'Wat een seizoen! We zijn tweede geworden, met maar één punt verschil. Daar mogen we trots op zijn.',
          'Op zaterdag 28 november vieren we dat met een feestje in de kantine, van 14.00 tot 16.00 uur. Neem gerust je ouders mee. Voor drinken en friet wordt gezorgd.',
          'Let op: de training van donderdag 26 november gaat niet door, omdat het veld een nieuwe toplaag krijgt.',
          'Groetjes, Bas'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Waarom gaat de training van 26 november niet door?', opties: ['Omdat het veld een nieuwe toplaag krijgt', 'Omdat er dan een feestje is', 'Omdat het seizoen voorbij is', 'Omdat trainer Bas er niet is'], goed: 0, uitleg: 'Zoek de regel waarin 26 november staat. Na het woord "omdat" volgt de reden: het veld krijgt een nieuwe toplaag. Het feestje is op een andere dag, zaterdag 28 november.' },
          { vaardigheid: 'Bedoeling', vraag: 'Waarom schrijft Bas "met maar één punt verschil"?', opties: ['Om te klagen over de scheidsrechter', 'Om uit te leggen hoe je punten telt', 'Om te zeggen dat het team volgend jaar beter moet trainen', 'Om te laten zien dat het team bijna kampioen was en het dus heel goed heeft gedaan'], goed: 3, uitleg: 'Lees de zin erna: "Daar mogen we trots op zijn." Bas benadrukt hoe klein het verschil was. Hij wil zijn team laten voelen dat tweede worden, zo dicht bij de titel, een mooie prestatie is.' }
        ]
      }
    ]
  },
  // Dag 33: Hoe de boekdrukkunst alles veranderde
  {
    hardop: {
      titel: 'Hoe de boekdrukkunst alles veranderde', soort: 'Informatief', emoji: '📜',
      alineas: [
        'Stel je voor dat elk boek met de hand moest worden overgeschreven. Tot ongeveer 1450 was dat in Europa precies zo. Monniken en schrijvers zaten soms maandenlang aan één boek. Ze schreven met ganzenveren en inkt op perkament, dat van dierenhuid werd gemaakt. Boeken waren daardoor zeldzaam en zo duur dat alleen kloosters, vorsten en rijke kooplieden ze konden betalen.',
        'Rond 1450 bedacht de Duitse goudsmid Johannes Gutenberg een slimme oplossing. Hij goot losse letters van metaal, die hij in elke gewenste volgorde naast elkaar kon zetten. Zo stelde hij een hele bladzijde samen. Die bladzijde bestreek hij met inkt. Daarna drukte hij er met een pers, die leek op een pers voor druiven, stevig een vel papier op. Na afloop kon hij dezelfde letters opnieuw gebruiken voor de volgende bladzijde.',
        'Het eerste grote boek dat Gutenberg drukte, was een bijbel. Waar een schrijver jaren mee bezig zou zijn, kon een drukkerij nu in dezelfde tijd tientallen exemplaren maken. Boeken werden daardoor veel goedkoper, en steeds meer mensen leerden lezen. Binnen vijftig jaar stonden er in meer dan tweehonderd Europese steden drukkerijen.',
        'De gevolgen waren enorm. Nieuwe ideeën over wetenschap, geloof en politiek verspreidden zich razendsnel, omdat ze niet meer afhankelijk waren van een paar overgeschreven kopieën. Sommige machthebbers vonden dat gevaarlijk en probeerden boeken te verbieden, maar dat lukte maar half. Daarom noemen historici de boekdrukkunst vaak een van de belangrijkste uitvindingen ooit: zonder Gutenberg geen kranten en geen schoolboeken.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Waarvan werd perkament gemaakt?', opties: ['Van papier', 'Van ganzenveren', 'Van metaal', 'Van dierenhuid'], goed: 3, uitleg: 'Zoek het woord "perkament" op in de tekst. Het staat in alinea 1, met de uitleg er direct achter: "dat van dierenhuid werd gemaakt".' },
        { vaardigheid: 'Verwijswoord', vraag: '"... omdat ze niet meer afhankelijk waren van een paar overgeschreven kopieën." Waar verwijst "ze" naar?', opties: ['Naar de machthebbers', 'Naar de nieuwe ideeën', 'Naar de historici', 'Naar de boeken die verboden werden'], goed: 1, uitleg: 'Kijk wat er in het begin van dezelfde zin staat: "Nieuwe ideeën ... verspreidden zich razendsnel". Vervang "ze" door "de nieuwe ideeën" en de zin klopt. De machthebbers komen pas in de zin erna.' },
        { vaardigheid: 'Woordbetekenis', vraag: 'Wat zijn "machthebbers"?', opties: ['Mensen die het in een land voor het zeggen hebben', 'Mensen die drukpersen maken', 'Mensen die veel boeken lezen', 'Mensen die de bijbel drukken'], goed: 0, uitleg: 'Splits de samenstelling: macht + hebbers. Het zijn mensen die macht hébben, zoals koningen en vorsten. Dat past ook bij de zin: zij konden proberen boeken te verbieden.' },
        { vaardigheid: 'Verband', vraag: 'Waardoor werden boeken veel goedkoper?', opties: ['Doordat perkament goedkoper werd', 'Doordat monniken sneller gingen schrijven', 'Doordat een drukkerij veel meer exemplaren kon maken in dezelfde tijd', 'Doordat machthebbers boeken verboden'], goed: 2, uitleg: 'In alinea 3 staat het signaalwoord "daardoor". Dat wijst terug naar de oorzaak in de zin ervoor: een drukkerij maakte in dezelfde tijd tientallen exemplaren. Als je sneller veel meer kunt maken, wordt elk exemplaar goedkoper.' },
        { vaardigheid: 'Tekststructuur', vraag: 'Hoe hangen alinea 1 en alinea 2 met elkaar samen?', opties: ['Alinea 2 geeft een voorbeeld bij alinea 1', 'Alinea 2 spreekt alinea 1 tegen', 'Alinea 2 vertelt wat er daarna in andere landen gebeurde', 'Alinea 1 beschrijft een probleem, alinea 2 de oplossing'], goed: 3, uitleg: 'Alinea 1 legt uit wat er mis was: overschrijven duurde lang, dus boeken waren zeldzaam en duur. Alinea 2 begint met "een slimme oplossing". Probleem en oplossing is een veelgebruikte opbouw in informatieve teksten.' },
        { vaardigheid: 'Hoofdgedachte', vraag: 'Wat is de hoofdgedachte van de tekst?', opties: ['Gutenberg was een Duitse goudsmid.', 'Door de boekdrukkunst konden boeken en ideeën zich veel sneller en goedkoper verspreiden.', 'Monniken schreven boeken met ganzenveren.', 'Machthebbers probeerden boeken te verbieden.'], goed: 1, uitleg: 'De hoofdgedachte is wat de hele tekst wil zeggen; de titel helpt: "Hoe de boekdrukkunst alles veranderde". De andere zinnen zijn details die in één alinea staan.' }
      ]
    },
    kort: [
      {
        titel: 'Drukken als Gutenberg', soort: 'Programma',
        tekst: [
          'Drukkerijmuseum De Letterkast – zondag 15 november: Drukken als Gutenberg',
          '11.00 – 11.45 uur | Rondleiding: boeken van vroeger | vanaf 8 jaar',
          '12.00 – 13.00 uur | Workshop: zet je naam in metalen letters | 8 t/m 12 jaar | max. 10 kinderen',
          '13.30 – 14.15 uur | Demonstratie op de oude drukpers | alle leeftijden',
          '14.30 – 15.30 uur | Workshop: maak je eigen boekje | vanaf 10 jaar | max. 10 kinderen',
          'Entree: volwassenen € 12, kinderen tot 18 jaar gratis. Workshops: € 4 extra per kind, vooraf aanmelden.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat kun je om 13.30 uur doen?', opties: ['Een rondleiding volgen', 'Kijken naar een demonstratie op de oude drukpers', 'Je naam zetten in metalen letters', 'Je eigen boekje maken'], goed: 1, uitleg: 'Zoek in de linkerkolom de tijd 13.30 uur en lees de regel verder. Daar staat de demonstratie op de oude drukpers.' },
          { vaardigheid: 'Conclusie', vraag: 'Daan is 9 jaar en wil allebei de workshops doen. Wat klopt?', opties: ['Hij kan allebei de workshops doen en betaalt € 8 extra', 'Hij kan geen enkele workshop doen', 'Hij kan alleen de workshop om 12.00 uur doen', 'Hij kan alleen de workshop om 14.30 uur doen'], goed: 2, uitleg: 'Je moet tijd én leeftijd combineren. De workshop van 12.00 uur is voor 8 t/m 12 jaar: dat past. De workshop van 14.30 uur is vanaf 10 jaar: daar is Daan nog te jong voor.' }
        ]
      },
      {
        titel: 'Boekenruilmarkt', soort: 'Bericht',
        tekst: [
          'Boekenruilmarkt in de aula!',
          'Heb je thuis boeken die je al uit hebt? Breng ze mee en ruil ze voor een ander boek.',
          'Wanneer: vrijdag 20 november, van 12.00 tot 13.00 uur.',
          'Hoe werkt het? Voor elk boek dat je inlevert, krijg je één ruilkaartje. Met één kaartje kies je één ander boek.',
          'Let op: we nemen alleen boeken aan die heel en schoon zijn. Strips tellen niet mee.',
          'Wat er overblijft, geven we aan de kinderafdeling van het ziekenhuis.'
        ],
        vragen: [
          { vaardigheid: 'Conclusie', vraag: 'Ilias neemt vier boeken en twee strips mee, allemaal heel en schoon. Hoeveel boeken kan hij uitkiezen?', opties: ['2', '4', '6', 'Geen enkel boek'], goed: 1, uitleg: 'Je krijgt een kaartje voor elk boek dat je inlevert. Maar lees ook de regel met "Let op": strips tellen niet mee. Ilias krijgt dus 4 kaartjes en kan 4 boeken kiezen.' },
          { vaardigheid: 'Bedoeling', vraag: 'Waarom vertelt de school wat er met de overgebleven boeken gebeurt?', opties: ['Om te laten zien dat de boeken niet worden weggegooid, maar nog andere kinderen blij maken', 'Omdat je je boeken na afloop mag terughalen', 'Omdat je alleen boeken over ziekenhuizen mag meenemen', 'Om kinderen te waarschuwen dat ze hun boeken kwijtraken'], goed: 0, uitleg: 'Vraag je af wat de lezer denkt: "Wat als niemand mijn boek kiest?" De laatste zin geeft daar een fijn antwoord op: de boeken gaan naar zieke kinderen. Zo wordt het meedoen extra aantrekkelijk.' }
        ]
      }
    ]
  },
  // Dag 34: Huiswerk op de basisschool afschaffen?
  {
    hardop: {
      titel: 'Huiswerk op de basisschool afschaffen?', soort: 'Betoog', emoji: '📝',
      alineas: [
        'Steeds vaker hoor je ouders en leraren zeggen dat kinderen op de basisschool geen huiswerk meer zouden moeten krijgen. Kinderen hebben het al druk genoeg, vinden zij. Na een lange schooldag moeten ze kunnen spelen, sporten en uitrusten. Ik begrijp dat best, maar toch ben ik het er niet mee eens. Een beetje huiswerk hoort er volgens mij gewoon bij, zeker in groep 7 en 8.',
        'Mijn eerste argument is dat je met huiswerk leert plannen. Op de middelbare school krijg je elke dag huiswerk voor allerlei vakken. Wie dan nog nooit een agenda heeft bijgehouden, raakt snel het overzicht kwijt. Mijn neef wist in de brugklas in het begin echt niet waar hij moest beginnen. Als je op de basisschool al oefent met kleine opdrachten, ben je beter voorbereid.',
        'Daarnaast kun je thuis in je eigen tempo oefenen. In de klas gaat de uitleg soms te snel. Thuis kun je een moeilijke som of een lastig woordrijtje rustig nog een keer doornemen, zonder dat er iemand meekijkt. Bovendien zien je ouders zo wat je op school leert, en kunnen ze je helpen als je ergens vastloopt.',
        'Natuurlijk moet het niet overdreven worden. Twee uur huiswerk per avond is voor een kind van elf veel te veel. Maar een kwartiertje per dag neemt echt niet al je vrije tijd weg. Daarom vind ik: schaf huiswerk niet af, maar houd het kort en zinvol. Dan heb je er later alleen maar plezier van.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Hoeveel huiswerk per dag vindt de schrijver goed?', opties: ['Helemaal geen huiswerk', 'Twee uur', 'Een kwartiertje', 'Een uur'], goed: 2, uitleg: 'Zoek in de laatste alinea. Twee uur vindt de schrijver "veel te veel", maar "een kwartiertje per dag neemt echt niet al je vrije tijd weg".' },
        { vaardigheid: 'Signaalwoord', vraag: 'Alinea 3 begint met "Daarnaast". Wat geeft dat woord aan?', opties: ['Dat er nog een argument bij komt', 'Dat er een tegenstelling volgt', 'Dat er een conclusie komt', 'Dat er een voorbeeld volgt'], goed: 0, uitleg: '"Daarnaast" is een signaalwoord van opsomming, net als "ook" en "bovendien". Na het eerste argument (leren plannen) komt er een tweede bij: in je eigen tempo oefenen.' },
        { vaardigheid: 'Tekstdoel', vraag: 'Wat wil de schrijver met deze tekst over huiswerk bereiken?', opties: ['Informeren over hoeveel huiswerk kinderen in Nederland krijgen', 'Uitleggen hoe je een agenda bijhoudt', 'Vertellen over de neef van de schrijver', 'De lezer overtuigen dat huiswerk op de basisschool moet blijven'], goed: 3, uitleg: 'De schrijver geeft een mening ("ik ben het er niet mee eens") en argumenten ("Mijn eerste argument ..."). Een tekst met een standpunt en argumenten is een betoog: het doel is overtuigen.' },
        { vaardigheid: 'Bedoeling', vraag: 'Waarom schrijft de schrijver in alinea 4: "Natuurlijk moet het niet overdreven worden"?', opties: ['Omdat hij eigenlijk toch vindt dat huiswerk afgeschaft moet worden', 'Omdat hij wil laten zien dat veel huiswerk goed is', 'Omdat hij de tegenstanders een beetje gelijk geeft, zodat zijn eigen standpunt redelijker klinkt', 'Omdat hij uitlegt hoe lang een kind van elf moet slapen'], goed: 2, uitleg: 'Een sterke schrijver laat zien dat hij ook naar de andere kant heeft geluisterd: te veel huiswerk is inderdaad niet goed. Daarna komt toch weer zijn eigen standpunt. Zo is hij moeilijker tegen te spreken.' },
        { vaardigheid: 'Standpunt en argument', vraag: 'Welke zin is een argument vóór het standpunt van de schrijver?', opties: ['Kinderen hebben het al druk genoeg.', 'Met huiswerk leer je plannen.', 'Twee uur huiswerk per avond is veel te veel.', 'Schaf huiswerk niet af, maar houd het kort en zinvol.'], goed: 1, uitleg: 'Het standpunt is: houd huiswerk, maar kort. Dat is de laatste zin; dat is dus zelf geen argument. "Kinderen hebben het al druk genoeg" is juist een argument van de tegenstanders. "Met huiswerk leer je plannen" ondersteunt het standpunt.' },
        { vaardigheid: 'Verband', vraag: 'Waarom vertelt de schrijver over zijn neef in de brugklas?', opties: ['Als voorbeeld dat laat zien waarom leren plannen belangrijk is', 'Om te laten zien dat de middelbare school leuk is', 'Omdat zijn neef het met hem oneens is', 'Om uit te leggen wat een brugklas is'], goed: 0, uitleg: 'Kijk naar wat er vóór en ná de neef staat: het gaat over leren plannen. Het verhaal van de neef is een voorbeeld dat het eerste argument sterker maakt.' }
      ]
    },
    kort: [
      {
        titel: 'Reactie van Mila', soort: 'Mening van een lezer',
        tekst: [
          'Ik ben het helemaal oneens met het stuk over huiswerk. Na school heb ik op maandag zwemles, op woensdag voetbal en op vrijdag muziekles. Als ik dan ook nog huiswerk moet maken, heb ik geen tijd meer om gewoon buiten te spelen. En spelen is ook belangrijk: daar leer je samenwerken en oplossingen bedenken. Plannen leer je op de middelbare school vanzelf wel.',
          '– Mila, groep 8'
        ],
        vragen: [
          { vaardigheid: 'Standpunt', vraag: 'Wat vindt Mila?', opties: ['Dat kinderen meer sport moeten doen', 'Dat kinderen op de basisschool geen huiswerk zouden moeten krijgen', 'Dat je op de middelbare school geen huiswerk krijgt', 'Dat muziekles belangrijker is dan voetbal'], goed: 1, uitleg: 'Mila begint met haar mening: ze is het "helemaal oneens" met het stuk dat vóór huiswerk was. De rest van haar reactie legt uit waarom ze geen huiswerk wil.' },
          { vaardigheid: 'Bedoeling', vraag: 'Waarom noemt Mila haar zwemles, voetbal en muziekles?', opties: ['Om op te scheppen over haar hobby\'s', 'Om andere kinderen uit te nodigen', 'Om uit te leggen wat je bij sport leert', 'Om te laten zien hoe druk ze na school al is'], goed: 3, uitleg: 'Vraag je af wat dit stukje dóét in haar reactie. Direct erna zegt ze: "Als ik dan ook nog huiswerk moet maken, heb ik geen tijd meer." De opsomming laat zien hoe vol haar week al is.' }
        ]
      },
      {
        titel: 'Reactie van meester Rik', soort: 'Mening van een lezer',
        tekst: [
          'Als leerkracht zie ik elk jaar hoe groot de stap naar de brugklas is. Daarom geef ik in groep 8 één keer per week een kleine huiswerkopdracht, die de kinderen zelf in hun agenda zetten. Ze krijgen er een hele week de tijd voor, zodat het nooit botst met sport of muziekles. Zo leren ze plannen zonder dat het stress geeft.',
          '– meester Rik, groep 8'
        ],
        vragen: [
          { vaardigheid: 'Teksten vergelijken', vraag: 'Mila schrijft dat ze door haar sport en muziekles geen tijd heeft voor huiswerk. Hoe lost meester Rik dat probleem op?', opties: ['Hij geeft een hele week de tijd voor één kleine opdracht', 'Hij geeft helemaal geen huiswerk', 'Hij zegt dat kinderen moeten stoppen met sport', 'Hij geeft alleen huiswerk in de vakantie'], goed: 0, uitleg: 'Leg de twee teksten naast elkaar. Mila\'s bezwaar is tijd. Meester Rik geeft één opdracht per week met een hele week de tijd, "zodat het nooit botst met sport of muziekles". Zo neemt hij haar bezwaar weg.' },
          { vaardigheid: 'Verwijswoord', vraag: '"Zo leren ze plannen zonder dat het stress geeft." Waar verwijst "Zo" naar?', opties: ['Naar de sport en muziekles van de kinderen', 'Naar de stap naar de brugklas', 'Naar het zelf in de agenda zetten van één opdracht per week, met een hele week de tijd', 'Naar de reactie van Mila'], goed: 2, uitleg: '"Zo" betekent "op deze manier" en wijst terug naar wat meester Rik net heeft beschreven: kinderen zetten zelf één opdracht per week in hun agenda en krijgen er een week de tijd voor.' }
        ]
      }
    ]
  },
  // Dag 35: Egels in de winter
  {
    hardop: {
      titel: 'Egels in de winter', soort: 'Informatief', emoji: '🦔',
      alineas: [
        'Wie in de herfst \'s avonds door de tuin loopt, hoort soms gesnuffel en geritsel tussen de struiken. Grote kans dat er een egel op zoek is naar eten. In deze tijd van het jaar heeft hij haast: voordat het echt koud wordt, moet hij flink aankomen. Een volwassen egel kan in een paar weken wel een derde zwaarder worden.',
        'Ondertussen bouwt de egel een winternest. Hij sleept bladeren, mos en gras naar een beschutte plek, bijvoorbeeld onder een takkenhoop of een schuurtje. Daar draait hij net zo lang rond tot er een stevige, waterdichte bal ontstaat. Daarin rolt hij zich op en begint hij aan zijn winterslaap. Zijn lichaamstemperatuur daalt dan van ongeveer 35 graden naar soms maar 5 graden, en zijn hart klopt nog maar zo\'n twintig keer per minuut.',
        'Helemaal doorslapen doet een egel overigens niet. Af en toe wordt hij wakker, bijvoorbeeld als het buiten erg zacht weer is. Soms verhuist hij dan zelfs naar een ander nest. Dat wakker worden kost wel veel energie. Als het in een winter vaak afwisselend vriest en dooit, raakt zijn vetvoorraad sneller op dan goed voor hem is.',
        'Vooral jonge egels die laat in het jaar geboren zijn, lopen gevaar. Zijn ze aan het begin van de winter te licht, dan halen ze het voorjaar vaak niet. Zie je in november of december overdag een kleine egel rondscharrelen, dan is dat geen goed teken: egels zijn immers nachtdieren. Bel dan een egelopvang. Geef hem in elk geval geen melk, want daar krijgen egels buikpijn van.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Wat moet je een egel volgens de tekst níét geven?', opties: ['Water', 'Melk', 'Bladeren', 'Kattenvoer'], goed: 1, uitleg: 'Zoek in de laatste alinea. Daar staat: "Geef hem in elk geval geen melk, want daar krijgen egels buikpijn van."' },
        { vaardigheid: 'Eigen kennis', vraag: '"Egels zijn immers nachtdieren." Waarom is een egel die in december overdag rondloopt dan geen goed teken?', opties: ['Omdat hij dan meer kans heeft om aangereden te worden door fietsers', 'Omdat egels overdag niet kunnen zien', 'Omdat het overdag te warm is voor een egel', 'Omdat een gezonde egel dan in zijn winterslaap is; deze egel is waarschijnlijk te zwak of te licht'], goed: 3, uitleg: 'Combineer de tekst met wat je weet. Een nachtdier komt normaal alleen in het donker tevoorschijn, en in december hoort een egel te slapen. Loopt hij overdag rond, dan is er iets mis: hij zoekt wanhopig eten, omdat hij te weinig vet heeft.' },
        { vaardigheid: 'Verband', vraag: 'Waarom is vaak wakker worden in de winter gevaarlijk voor een egel?', opties: ['Omdat het veel energie kost, waardoor zijn vetvoorraad te snel opraakt', 'Omdat hij dan zijn nest niet meer terugvindt', 'Omdat andere dieren hem dan kunnen opeten', 'Omdat hij dan te dik wordt'], goed: 0, uitleg: 'Alinea 3 geeft het antwoord in twee stappen: wakker worden "kost wel veel energie", en daardoor "raakt zijn vetvoorraad sneller op dan goed voor hem is". Een egel eet in zijn winterslaap niets, dus dat vet moet de hele winter meegaan.' },
        { vaardigheid: 'Woordbetekenis', vraag: 'Wat betekent "rondscharrelen" in alinea 4?', opties: ['Snel wegrennen', 'Een nest bouwen', 'Rustig rondlopen en hier en daar wat zoeken', 'Diep slapen'], goed: 2, uitleg: '"Rond" zegt al dat het om bewegen gaat. "Scharrelen" doen ook kippen: een beetje rondlopen en zoeken naar eten. Dat past bij een egel die overdag op zoek is naar voedsel.' },
        { vaardigheid: 'Tekststructuur', vraag: 'Welke rij kopjes past bij alinea 1 tot en met 4?', opties: ['Het winternest – Aankomen – Gevaar voor jonge egels – Even wakker', 'Aankomen – Het winternest – Even wakker – Gevaar voor jonge egels', 'Aankomen – Even wakker – Het winternest – Gevaar voor jonge egels', 'Gevaar voor jonge egels – Het winternest – Aankomen – Even wakker'], goed: 1, uitleg: 'Bedenk per alinea in een paar woorden waar hij over gaat. Alinea 1: aankomen voor de winter. Alinea 2: het nest en de winterslaap. Alinea 3: af en toe wakker worden. Alinea 4: jonge egels in gevaar.' },
        { vaardigheid: 'Conclusie', vraag: 'Wat kun je concluderen als je alinea 3 en 4 samen leest?', opties: ['Jonge egels worden in de winter nooit wakker', 'Melk is goed voor egels die te licht zijn', 'Een winter met veel wisselend weer is extra gevaarlijk voor een jonge egel die al te licht is', 'Egels hebben in een zachte winter geen winterslaap nodig'], goed: 2, uitleg: 'Dit staat nergens letterlijk; je moet twee alinea\'s combineren. Alinea 3: wisselend vriezen en dooien kost veel vet. Alinea 4: jonge egels die te licht zijn, halen het voorjaar vaak niet. Samen: zo\'n winter is voor hen extra gevaarlijk.' }
      ]
    },
    kort: [
      {
        titel: 'Egelopvang De Stekel', soort: 'Informatiebord',
        tekst: [
          'Egelopvang De Stekel',
          'Egel gevonden? Bel eerst: 06-12345678 (dag en nacht bereikbaar).',
          'Egels brengen: maandag t/m vrijdag 9.00 – 17.00 uur | zaterdag 10.00 – 14.00 uur | zondag alleen na telefonisch overleg.',
          'Bezoek met de klas: woensdagmiddag van 13.30 tot 15.00 uur, aanmelden via de website.',
          'Vervoer de egel in een doos met een handdoek. Gebruik handschoenen!'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Je vindt op zondagmiddag een egel. Wat moet je volgens het bord doen?', opties: ['De egel meteen naar de opvang brengen', 'Wachten tot maandagochtend 9.00 uur', 'De egel melk geven', 'Eerst de opvang bellen'], goed: 3, uitleg: 'Lees het bord gericht: wat staat er over zondag? "Zondag alleen na telefonisch overleg." En bovenaan staat al: "Bel eerst", dag en nacht. Je belt dus eerst.' },
          { vaardigheid: 'Eigen kennis', vraag: 'Waarom staat er "Gebruik handschoenen!"?', opties: ['Omdat egels het koud hebben', 'Omdat een egel stekels heeft waaraan je je kunt prikken', 'Omdat je de handdoek anders vies maakt', 'Omdat egels bang zijn voor handen'], goed: 1, uitleg: 'Het bord legt dit niet uit; dat moet je zelf bedenken met wat je over egels weet. Een egel zit vol scherpe stekels. Met handschoenen kun je hem oppakken zonder je te prikken.' }
        ]
      },
      {
        titel: 'Maak je tuin egelvriendelijk', soort: 'Folder',
        tekst: [
          'Maak je tuin egelvriendelijk',
          '1. Laat een hoek met bladeren en takken liggen.',
          '2. Maak een gat van 13 bij 13 centimeter in je schutting, zodat egels van tuin naar tuin kunnen lopen.',
          '3. Kijk goed voordat je gaat maaien of een takkenhoop verbrandt.',
          '4. Gebruik geen slakkenkorrels: egels eten de vergiftigde slakken op.',
          '5. Zet een bakje water neer, maar geen melk.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Hoe groot moet het gat in de schutting zijn?', opties: ['10 bij 10 centimeter', '15 bij 15 centimeter', '13 bij 13 centimeter', '13 bij 30 centimeter'], goed: 2, uitleg: 'Zoek de tip waarin de schutting genoemd wordt. Dat is tip 2: een gat van 13 bij 13 centimeter.' },
          { vaardigheid: 'Verband', vraag: 'Waarom is het gebruik van slakkenkorrels slecht voor egels?', opties: ['Omdat de slakken door de korrels vergiftigd raken, en egels eten slakken', 'Omdat egels de korrels voor eten aanzien', 'Omdat de korrels de schutting kapotmaken', 'Omdat egels dan te weinig slakken kunnen vinden'], goed: 0, uitleg: 'In tip 4 moet je zelf de stappen achter elkaar zetten: de korrels vergiftigen de slakken, en een egel eet die slakken op. Zo krijgt de egel het gif binnen.' }
        ]
      }
    ]
  },
  // Dag 36: Sneeuw in de stad
  {
    hardop: {
      titel: 'Sneeuw in de stad', soort: 'Verhalend', emoji: '❄️',
      alineas: [
        'Toen Yara die ochtend de gordijnen opendeed, hield ze even haar adem in. De hele straat was wit. De geparkeerde auto\'s leken op grote suikerklontjes, en op elke lantaarnpaal lag een mutsje van sneeuw. Het was stil, zo stil als het in de stad bijna nooit is. Alleen ergens in de verte bromde een sneeuwschuiver.',
        'Op school ging het die dag nergens anders over. In de pauze bouwde groep 8 een sneeuwfort op het plein, en juf Merel deed zelfs mee met het sneeuwballengevecht. Toen Yara na school naar huis liep, zag ze haar buurman, meneer Oosterhuis, achter het raam staan. Hij keek naar de spiegelgladde stoep, met zijn wandelstok in zijn hand.',
        'Yara aarzelde. Haar vriendinnen gingen sleeën in het park, en ze had beloofd te komen. Maar ze wist ook dat meneer Oosterhuis elke middag zelf zijn boodschappen deed, en dat hij sinds de zomer slecht ter been was. Ze belde aan. "Zal ik even naar de supermarkt gaan?" vroeg ze. De oude man keek haar verbaasd aan. Toen brak er een glimlach door op zijn gezicht, als een zonnetje dat achter de wolken vandaan komt.',
        'Een halfuur later stond Yara weer op de stoep, met een tas vol brood, melk en koffie. Daarna pakte ze de sneeuwschep uit de schuur en maakte ze een pad vrij tot aan zijn voordeur. Toen ze eindelijk in het park kwam, was het al bijna donker en waren haar vriendinnen weg. Toch liep Yara fluitend naar huis. In haar jaszak zat een reep chocola, met een briefje erbij: "Voor de beste buurvrouw van de straat."'
      ],
      vragen: [
        { vaardigheid: 'Personage', vraag: 'Yara "hield even haar adem in" toen ze de gordijnen opendeed. Hoe voelde ze zich op dat moment?', opties: ['Bang', 'Verdrietig', 'Verrast en onder de indruk', 'Boos'], goed: 2, uitleg: 'Je adem inhouden doe je als iets je verrast of als je iets heel bijzonders ziet. De zinnen erna beschrijven hoe mooi en stil de witte straat is. Dat past bij verwondering, niet bij angst.' },
        { vaardigheid: 'Beeldspraak', vraag: '"Toen brak er een glimlach door op zijn gezicht, als een zonnetje dat achter de wolken vandaan komt." Wat betekent dit?', opties: ['Meneer Oosterhuis keek opeens blij, nadat hij eerst verbaasd en somber was', 'De zon ging die middag schijnen', 'Meneer Oosterhuis moest lachen om Yara', 'Meneer Oosterhuis had het warm gekregen'], goed: 0, uitleg: 'De schrijver vergelijkt de glimlach met de zon die na een grijze dag doorbreekt. Eerst keek de buurman verbaasd en stond hij somber naar de gladde stoep te kijken; dan wordt zijn gezicht ineens vrolijk.' },
        { vaardigheid: 'Woordbetekenis', vraag: 'Wat betekent "slecht ter been zijn"?', opties: ['Snel boos worden', 'Slecht kunnen zien', 'Vaak verdwalen', 'Moeilijk kunnen lopen'], goed: 3, uitleg: 'Gebruik de aanwijzingen in de tekst: meneer Oosterhuis heeft een wandelstok en kijkt bezorgd naar de gladde stoep. "Been" zit ook in de uitdrukking. Hij kan dus niet goed lopen.' },
        { vaardigheid: 'Personage', vraag: 'Welk woord past het best bij Yara?', opties: ['Ongeduldig', 'Behulpzaam', 'Verlegen', 'Eigenwijs'], goed: 1, uitleg: 'Kijk naar wat Yara dóét: ze doet boodschappen voor haar buurman en schept zijn stoep sneeuwvrij, terwijl ze eigenlijk wilde sleeën. Iemand die zo voor een ander klaarstaat, is behulpzaam.' },
        { vaardigheid: 'Verband', vraag: 'Waarom aarzelt Yara in alinea 3?', opties: ['Omdat ze bang is voor meneer Oosterhuis', 'Omdat ze geen geld heeft voor de boodschappen', 'Omdat ze heeft beloofd te gaan sleeën, maar ook ziet dat haar buurman hulp nodig heeft', 'Omdat de supermarkt dicht is'], goed: 2, uitleg: 'Aarzelen doe je als je twijfelt tussen twee dingen. De zinnen erna noemen ze allebei: haar belofte aan haar vriendinnen ("Maar ...") en haar buurman die slecht ter been is.' },
        { vaardigheid: 'Boodschap', vraag: 'Wat wil de schrijver met dit verhaal vooral laten zien?', opties: ['Dat je in de sneeuw beter binnen kunt blijven', 'Dat je je beloftes aan vrienden altijd moet nakomen', 'Dat sleeën in het park gevaarlijk is', 'Dat iemand helpen je een fijner gevoel kan geven dan je eigen plezier'], goed: 3, uitleg: 'Yara mist het sleeën, maar loopt toch fluitend naar huis. Dat zegt veel: het helpen van haar buurman maakt haar blijer dan sleeën had gedaan. Dat is de boodschap achter het verhaal.' }
      ]
    },
    kort: [
      {
        titel: 'Gladheid verwacht', soort: 'Bericht',
        tekst: [
          'Bericht van de gemeente: vanavond en vannacht kans op ijzel en gladheid',
          'De strooiwagens rijden vanaf 18.00 uur over de hoofdwegen en de busroutes. Fietspaden naar scholen krijgen voorrang.',
          'Woonstraten worden niet gestrooid.',
          'Woont u in een woonstraat? Houd dan zelf uw stoep sneeuw- en ijsvrij. Gratis strooizout is op te halen bij de gemeentewerf, Industrieweg 4, zolang de voorraad strekt.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Welke wegen worden níét gestrooid?', opties: ['De busroutes', 'De woonstraten', 'De fietspaden naar scholen', 'De hoofdwegen'], goed: 1, uitleg: 'Lees precies: "Woonstraten worden niet gestrooid." De andere wegen worden juist wel gestrooid; de fietspaden naar scholen zelfs als eerste.' },
          { vaardigheid: 'Woordbetekenis', vraag: 'Wat betekent "zolang de voorraad strekt"?', opties: ['Alleen voor mensen met een lange stoep', 'Alleen tot 18.00 uur', 'Je mag zoveel meenemen als je wilt', 'Zolang er nog strooizout over is'], goed: 3, uitleg: 'Een voorraad is wat er is opgeslagen, hier: het strooizout. "Strekken" betekent hier: genoeg zijn. Als het zout op is, kun je dus niets meer halen.' }
        ]
      },
      {
        titel: 'IJsbaan op de Grote Markt', soort: 'Advertentie',
        tekst: [
          'IJsbaan op de Grote Markt – van 12 december tot en met 3 januari',
          'Open: ma t/m vr 12.00 – 21.00 uur | za en zo 10.00 – 22.00 uur | 25 december gesloten',
          'Toegang + schaatshuur, kind t/m 12 jaar | € 6,00',
          'Toegang + schaatshuur, vanaf 13 jaar | € 8,50',
          'Toegang met eigen schaatsen, iedereen | € 4,00',
          'Schaatsles voor beginners: zaterdag 10.00 – 11.00 uur, € 3 extra.'
        ],
        vragen: [
          { vaardigheid: 'Conclusie', vraag: 'Yara (12) huurt schaatsen. Haar broer Omar (14) neemt zijn eigen schaatsen mee. Wat betalen ze samen?', opties: ['€ 12,50', '€ 14,50', '€ 10,00', '€ 8,00'], goed: 2, uitleg: 'Zoek voor ieder de goede regel. Yara is 12 en huurt: € 6,00. Omar heeft eigen schaatsen, dan maakt zijn leeftijd niet uit: € 4,00. Samen € 10,00. € 12,50 krijg je als je Omar ten onrechte laat huren.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Op welke dag is de ijsbaan dicht?', opties: ['Op 25 december', 'Op elke maandag', 'Op 12 december', 'Op 3 januari'], goed: 0, uitleg: 'Kijk bij de openingstijden. Daar staat aan het eind: "25 december gesloten". Op 12 december opent de baan juist, en tot en met 3 januari is hij nog open.' }
        ]
      }
    ]
  },
  // Dag 37: Hoe een weerbericht ontstaat
  {
    hardop: {
      titel: 'Hoe een weerbericht ontstaat', soort: 'Informatief', emoji: '🌦️',
      alineas: [
        'Elke avond vertelt een weerpresentator in een paar minuten wat voor weer we morgen kunnen verwachten. Dat lijkt eenvoudig, maar achter zo\'n weerbericht zit een enorme hoeveelheid werk. Het begint met meten. Overal ter wereld staan weerstations die dag en nacht de temperatuur, de luchtdruk, de windsnelheid en de hoeveelheid neerslag bijhouden.',
        'Die metingen op de grond zijn niet genoeg. Weerballonnen stijgen tot wel dertig kilometer hoog en sturen gegevens door over de lucht daarboven. Satellieten maken vanuit de ruimte foto\'s van wolken en stormen, en een radar laat zien waar het op dat moment regent. Ook schepen en vliegtuigen geven hun metingen door. Zo ontstaat een soort momentopname van het weer op de hele aarde.',
        'Al die gegevens gaan naar supercomputers. Die rekenen met natuurkundige formules uit hoe de lucht zich de komende uren en dagen zal bewegen. Zo\'n berekening heet een weermodel. Omdat het weer heel ingewikkeld is, laten meteorologen, zoals weerkundigen ook wel heten, hun model vaak tientallen keren draaien, steeds met net iets andere beginwaarden. Komen bijna alle uitkomsten overeen, dan is de verwachting betrouwbaar. Lopen ze sterk uiteen, dan is er meer onzekerheid.',
        'Toch blijft er werk over voor mensen. Een meteoroloog vergelijkt de uitkomsten, kent de streek en weet bijvoorbeeld dat het weer aan de kust vaak anders is dan in het binnenland. Voor morgen klopt een verwachting tegenwoordig meestal heel goed. Voor over een week is het eerder een slimme gok.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Wat doen weerballonnen?', opties: ['Ze maken foto\'s van wolken vanuit de ruimte', 'Ze laten zien waar het op dat moment regent', 'Ze rekenen uit hoe het weer wordt', 'Ze stijgen hoog op en sturen gegevens door over de lucht daarboven'], goed: 3, uitleg: 'Zoek het woord "weerballonnen" in alinea 2. De zin vertelt het precies: ze stijgen tot wel dertig kilometer hoog en sturen gegevens door. Foto\'s vanuit de ruimte maken satellieten.' },
        { vaardigheid: 'Woordbetekenis', vraag: 'Wat is een "meteoroloog"?', opties: ['Een computer die het weer berekent', 'Een weerkundige', 'Iemand die meteorieten zoekt', 'Een presentator van het nieuws'], goed: 1, uitleg: 'Soms staat de uitleg van een moeilijk woord er gewoon bij. In alinea 3 lees je: "meteorologen, zoals weerkundigen ook wel heten". Let op: het lijkt op "meteoriet", maar heeft er niets mee te maken.' },
        { vaardigheid: 'Woordbetekenis', vraag: 'Wat is een "momentopname van het weer"?', opties: ['Een beeld van hoe het weer op één bepaald moment overal is', 'Een voorspelling voor de komende week', 'Een foto die een weerpresentator maakt', 'Een korte regenbui'], goed: 0, uitleg: 'Splits het woord: moment + opname. Een opname leg je vast, zoals een foto. Al die metingen samen laten zien hoe het weer op dat ene moment op de hele aarde is.' },
        { vaardigheid: 'Verband', vraag: 'Waarom laten meteorologen hun weermodel tientallen keren draaien?', opties: ['Omdat de computer vaak fouten maakt', 'Omdat ze dan meer verschillende weerberichten kunnen uitzenden', 'Om te zien hoe zeker de verwachting is', 'Om de computer warm te houden'], goed: 2, uitleg: 'Lees verder na de zin met "tientallen keren": komen de uitkomsten overeen, dan is de verwachting betrouwbaar; lopen ze uiteen, dan is er meer onzekerheid. Het doel is dus: weten hoe zeker je kunt zijn.' },
        { vaardigheid: 'Eigen kennis', vraag: 'In je weer-app staat voor zaterdag over acht dagen: zon en 18 graden. Wat kun je volgens de tekst het beste denken?', opties: ['Dat wordt zeker zonnig, want de computers rekenen heel precies', 'De verwachting kan nog flink veranderen, want zo ver vooruit is het eerder een gok', 'Het gaat die dag zeker regenen', 'De app is kapot, want zo ver vooruit kun je niets zeggen'], goed: 1, uitleg: 'De laatste alinea zegt: voor morgen klopt het meestal goed, "voor over een week is het eerder een slimme gok". Een gok is niet waardeloos, maar ook niet zeker. Kijk dus een paar dagen later nog eens.' },
        { vaardigheid: 'Samenvatten', vraag: 'Welke volgorde past bij hoe een weerbericht ontstaat?', opties: ['Weermodel berekenen → gegevens meten → weerbericht → meteoroloog vergelijkt', 'Meteoroloog vergelijkt → gegevens meten → weermodel berekenen → weerbericht', 'Gegevens meten → meteoroloog vergelijkt → weermodel berekenen → weerbericht', 'Gegevens meten → weermodel berekenen → meteoroloog vergelijkt → weerbericht'], goed: 3, uitleg: 'Volg de alinea\'s: eerst meten (alinea 1 en 2), dan rekenen met supercomputers (alinea 3), dan vergelijkt een meteoroloog de uitkomsten (alinea 4). Pas daarna is het weerbericht klaar.' }
      ]
    },
    kort: [
      {
        titel: 'Het weer voor de komende dagen', soort: 'Weerbericht',
        tekst: [
          'Het weer voor de komende dagen',
          'Vrijdag | 7 °C | regen, vooral in de middag | wind: zuidwest 4',
          'Zaterdag | 4 °C | droog, af en toe zon | wind: noord 3',
          'Zondag | 1 °C | in de ochtend kans op sneeuw (60%) | wind: noordoost 5',
          'Maandag | 2 °C | droog en koud, \'s nachts vorst | wind: oost 2',
          'Windkracht: 2 = zwak, 3 en 4 = matig, 5 = vrij krachtig'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Op welke dag is er kans op sneeuw?', opties: ['Vrijdag', 'Zaterdag', 'Zondag', 'Maandag'], goed: 2, uitleg: 'Kijk in de kolom met het weer. Alleen bij zondag staat "kans op sneeuw (60%)".' },
          { vaardigheid: 'Conclusie', vraag: 'Mees wil gaan vliegeren. Hij wil droog weer en zoveel mogelijk wind. Welke dag kiest hij het best?', opties: ['Vrijdag', 'Zaterdag', 'Zondag', 'Maandag'], goed: 1, uitleg: 'Je moet twee dingen tegelijk bekijken. Droog zijn alleen zaterdag en maandag. Van die twee waait het op zaterdag het hardst (windkracht 3 tegen 2). Zondag waait harder, maar dan is er een grote kans op sneeuw.' }
        ]
      },
      {
        titel: 'Kloppen weerspreuken?', soort: 'Informatief',
        tekst: [
          'Vroeger hadden mensen geen weer-app. Ze letten op de natuur en bedachten weerspreuken, zoals: "Morgenrood, water in de sloot; avondrood, mooi weer aan boord." Daar zit een kern van waarheid in. Ons weer komt meestal uit het westen. Is de lucht \'s avonds in het westen rood, dan is het daar helder, en dat heldere weer komt onze kant op. Andere spreuken, zoals "Wast de kat zich achter de oren, dan komt er regen", kloppen helemaal niet.'
        ],
        vragen: [
          { vaardigheid: 'Verband', vraag: 'Waarom zegt een rode avondlucht in het westen iets over het weer van morgen?', opties: ['Omdat de zon dan heel warm is', 'Omdat het weer meestal uit het westen komt, en het daar dan helder is', 'Omdat rood een kleur van regen is', 'Omdat de wolken \'s nachts naar het westen gaan'], goed: 1, uitleg: 'Zet de zinnen achter elkaar: ons weer komt meestal uit het westen; een rode lucht in het westen betekent dat het daar helder is; dat heldere weer komt dus naar ons toe.' },
          { vaardigheid: 'Bedoeling', vraag: 'Bij zonsopgang is de lucht knalrood. Wat voorspelt de spreuk dan?', opties: ['Mooi weer', 'Sneeuw', 'Veel wind', 'Regen'], goed: 3, uitleg: '"Morgenrood" is een rode lucht \'s ochtends. Daarbij hoort "water in de sloot": er komt regen, zodat de sloten vollopen. De spreuk zegt het niet letterlijk; je moet de formulering duiden.' }
        ]
      }
    ]
  },
  // Dag 38: Sinterklaas komt aan in de haven
  {
    hardop: {
      titel: 'Sinterklaas komt aan in de haven', soort: 'Nieuws', emoji: '🚢',
      alineas: [
        'WESTERHAVEN – Ruim achtduizend kinderen en ouders stonden zaterdag langs de kades van Westerhaven om Sinterklaas te verwelkomen. Om elf uur, een kwartier later dan gepland, voer de stoomboot de haven binnen, begeleid door een stoet versierde sloepen en een boot van de reddingsbrigade. Toen de Sint op de kade stapte, barstte er een oorverdovend gejuich los.',
        'De organisatie had dit jaar extra maatregelen genomen. Vorig jaar raakten tientallen kinderen hun ouders kwijt in de drukte. Daarom kregen alle kinderen bij de ingang een polsbandje, waarop hun ouders een telefoonnummer konden schrijven. "Dat heeft goed geholpen," vertelt woordvoerder Karin Smit. "We hebben vandaag maar vijf kinderen hoeven terugbrengen, en dat ging telkens binnen een paar minuten."',
        'Na de aankomst trok de Sint op zijn schimmel door de binnenstad naar het stadhuis. Onderweg strooiden de pieten pepernoten en kruidnoten. Bij het stadhuis werd hij welkom geheten door burgemeester Van Dam, die hem de sleutel van de stad overhandigde. Daarna zongen honderden kinderen samen "Sinterklaas kapoentje".',
        'Niet alles liep op rolletjes. Door de harde wind moest de boot een kwartier wachten voordat hij veilig kon aanleggen, en een aantal kinderen had het daardoor flink koud. Toch was bijna iedereen tevreden. "Het wachten maakte het juist spannend," zegt de negenjarige Sem. "Toen ik de mijter zag, vergat ik meteen dat mijn tenen bevroren waren."'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Hoe laat had de stoomboot eigenlijk moeten aankomen?', opties: ['Om 10.45 uur', 'Om 11.00 uur', 'Om 11.15 uur', 'Om 10.30 uur'], goed: 0, uitleg: 'In alinea 1 staat: "Om elf uur, een kwartier later dan gepland". Gepland was dus een kwartier vóór elf uur: 10.45 uur. 11.00 uur is de tijd waarop de boot echt aankwam.' },
        { vaardigheid: 'Woordbetekenis', vraag: '"Er barstte een oorverdovend gejuich los." Wat betekent "oorverdovend"?', opties: ['Heel zacht', 'Vals gezongen', 'Zo hard dat je oren er bijna pijn van doen', 'Heel kort'], goed: 2, uitleg: 'Splits het woord: oor + verdovend. Iets wat je oren verdooft, is zo hard dat je even bijna niets anders meer hoort. Dat past bij achtduizend juichende mensen.' },
        { vaardigheid: 'Beeldspraak', vraag: '"Niet alles liep op rolletjes." Wat betekent dat?', opties: ['De wagens van de optocht hadden geen wielen', 'Niet alles ging even soepel', 'Er reden te weinig wagens mee', 'De kinderen konden niet goed lopen'], goed: 1, uitleg: 'Dit is een uitdrukking: als iets "op rolletjes loopt", gaat het makkelijk en zonder problemen. Hier staat "niet", en daarna volgt ook meteen wat er misging: de boot moest wachten door de wind.' },
        { vaardigheid: 'Tekststructuur', vraag: 'In een nieuwsbericht lees je meestal meteen wie, wat, waar en wanneer. In welke alinea vind je die informatie?', opties: ['Alinea 2', 'Alinea 3', 'Alinea 4', 'Alinea 1'], goed: 3, uitleg: 'Een nieuwsbericht begint met de kern: wat is er gebeurd, waar, wanneer en met wie? Alinea 1 noemt het allemaal: Sinterklaas (wie), komt aan met de stoomboot (wat), in Westerhaven (waar), zaterdag om elf uur (wanneer). Daarna volgen de details.' },
        { vaardigheid: 'Verband', vraag: 'Waarom kregen de kinderen dit jaar een polsbandje?', opties: ['Zodat ze pepernoten konden krijgen', 'Zodat de Sint wist hoe oud ze waren', 'Omdat vorig jaar veel kinderen hun ouders kwijtraakten', 'Omdat het koud was'], goed: 2, uitleg: 'Het signaalwoord "Daarom" laat zien dat de reden in de zin ervoor staat: vorig jaar raakten tientallen kinderen hun ouders kwijt. Met een telefoonnummer op het bandje kun je de ouders snel bellen.' },
        { vaardigheid: 'Feit of mening', vraag: 'Welke zin uit de tekst is een mening?', opties: ['"Om elf uur voer de stoomboot de haven binnen."', '"Het wachten maakte het juist spannend."', '"De burgemeester overhandigde hem de sleutel van de stad."', '"We hebben vandaag maar vijf kinderen hoeven terugbrengen."'], goed: 1, uitleg: 'Een feit kun je controleren: de tijd, wat de burgemeester deed, hoeveel kinderen er zijn teruggebracht. Of wachten spannend is, vindt Sem; iemand anders vond het misschien gewoon koud en saai. Dat is dus een mening.' }
      ]
    },
    kort: [
      {
        titel: 'Sinterklaasfeest op school', soort: 'Programma',
        tekst: [
          'Vrijdag 4 december – Sinterklaasfeest op OBS De Regenboog',
          '8.30 uur | Alle kinderen verzamelen op het plein',
          '8.45 uur | Aankomst van Sinterklaas (bij regen: in de gymzaal)',
          '9.15 – 10.30 uur | Groep 1 t/m 4: bezoek van de Sint in de klas',
          '9.15 – 10.30 uur | Groep 5 t/m 8: surprises uitpakken in de eigen klas',
          '10.30 – 10.45 uur | Pauze met chocolademelk',
          '10.45 – 12.00 uur | Groep 5 t/m 8: spelletjescircuit in de gymzaal',
          '12.00 uur | Alle kinderen vrij!'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat doet groep 8 om 9.30 uur?', opties: ['Verzamelen op het plein', 'Bezoek krijgen van de Sint in de klas', 'Het spelletjescircuit doen', 'Surprises uitpakken in de eigen klas'], goed: 3, uitleg: 'Om 9.30 uur gebeuren er twee dingen tegelijk, dus moet je ook kijken voor welke groepen het is. Groep 8 valt onder "groep 5 t/m 8": surprises uitpakken. Het bezoek van de Sint is voor groep 1 t/m 4.' },
          { vaardigheid: 'Conclusie', vraag: 'Hoe lang is groep 6 die ochtend in de gymzaal als het droog is?', opties: ['45 minuten', '1 uur en 15 minuten', '1 uur en 30 minuten', '2 uur en 15 minuten'], goed: 1, uitleg: 'Als het droog is, komt de Sint buiten aan; dan is groep 6 alleen in de gymzaal voor het spelletjescircuit, van 10.45 tot 12.00 uur. Dat is 1 uur en 15 minuten.' }
        ]
      },
      {
        titel: 'Zet je schoen in de bibliotheek', soort: 'Poster',
        tekst: [
          'Zet je schoen in de bibliotheek!',
          'Van maandag 23 november tot en met woensdag 2 december mag je je schoen zetten in de bibliotheek. Neem een tekening of een gedicht voor de Sint mee en stop het in je schoen.',
          'Op donderdag 3 december kun je je schoen weer ophalen. Wie weet zit er iets lekkers in!',
          'Let op: schrijf je naam aan de binnenkant van je schoen. Schoenen zonder naam kunnen we niet teruggeven.',
          'Deze actie is voor kinderen tot en met 10 jaar.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wanneer kun je je schoen weer ophalen?', opties: ['Op maandag 23 november', 'Op woensdag 2 december', 'Op donderdag 3 december', 'Op zaterdag 5 december'], goed: 2, uitleg: 'Zoek het woord "ophalen". In die zin staat de datum: donderdag 3 december. Tot en met 2 december mag je je schoen nog zetten.' },
          { vaardigheid: 'Eigen kennis', vraag: 'Waarom kan de bibliotheek schoenen zonder naam niet teruggeven?', opties: ['Omdat er veel schoenen staan die op elkaar lijken, zodat niemand weet van wie ze zijn', 'Omdat schoenen zonder naam naar de Sint gaan', 'Omdat de actie alleen voor kinderen tot en met 10 jaar is', 'Omdat de bibliotheek op 3 december dicht is'], goed: 0, uitleg: 'De poster zegt niet waarom; dat moet je zelf bedenken. Stel je voor: honderden schoenen op een rij, veel dezelfde merken en maten. Zonder naam weet de bibliotheek niet welke schoen bij wie hoort.' }
        ]
      }
    ]
  },
  // Dag 39: November
  {
    hardop: {
      titel: 'November', soort: 'Gedicht', emoji: '🍂',
      alineas: [
        'De bomen staan te rillen, kaal en bloot,\nhun laatste blad drijft bruin en nat in de sloot.\nDe wind is als een hond die niemand temt:\nhij blaft en jaagt door straten, ongeremd.',
        'De dagen krimpen, worden grijs en klein,\nde regen tikt een lied zonder refrein.\nOm vijf uur gaan de lantaarns al weer aan\nen blijft de maan verlegen achter wolken staan.',
        'Maar binnen brandt een kaars, de thee is warm,\nmijn kat ligt als een kussen op mijn arm.\nIk lees een boek en ben de wind vergeten,\nde kachel snort, de koekjes zijn gegeten.',
        'November, jij bent somber, nat en koud,\ntoch ben je ook een maand waarvan ik houd:\nwant wie de storm heeft horen razen buiten,\nweet pas hoe fijn het is de deur te sluiten.'
      ],
      vragen: [
        { vaardigheid: 'Signaalwoord', vraag: 'Strofe 3 begint met "Maar". Wat verandert er vanaf daar in het gedicht?', opties: ['Het wordt ochtend in plaats van avond', 'De plaats verandert: van buiten in de kou naar binnen in de warmte', 'De wind wordt harder', 'De dichter gaat over een andere maand schrijven'], goed: 1, uitleg: '"Maar" is een signaalwoord van tegenstelling. In strofe 1 en 2 ben je buiten: kale bomen, wind en regen. Vanaf "Maar binnen" ben je in een warme kamer met een kaars, thee en een kat.' },
        { vaardigheid: 'Beeldspraak', vraag: '"De wind is als een hond die niemand temt." Wat wil de dichter daarmee laten zien?', opties: ['Dat er in november veel honden buiten lopen', 'Dat de wind wild is en door niemand tegen te houden', 'Dat de wind zacht en vriendelijk is', 'Dat honden bang zijn voor wind'], goed: 1, uitleg: 'Een hond die niemand temt, is wild en luistert naar niemand. De dichter vergelijkt de wind daarmee: hij "blaft en jaagt" ongeremd door de straten. Zo hoor en voel je hoe hard en wild het waait.' },
        { vaardigheid: 'Strofe', vraag: 'Waar gaat strofe 2 over?', opties: ['Over een gezellige avond binnen', 'Over een storm op zee', 'Over de bomen die hun blad verliezen', 'Over de korte, donkere en natte dagen'], goed: 3, uitleg: 'Zeg strofe 2 in je eigen woorden: de dagen worden korter en grijzer, het regent, om vijf uur is het al donker en de maan zie je niet. Het gaat dus over de korte, donkere dagen.' },
        { vaardigheid: 'Beeldspraak', vraag: '"... en blijft de maan verlegen achter wolken staan." Wat bedoelt de dichter?', opties: ['Dat de maan bijna niet te zien is, omdat er veel wolken zijn', 'Dat de maan bang is voor de wind', 'Dat het volle maan is', 'Dat de maan heel fel schijnt'], goed: 0, uitleg: 'De dichter doet alsof de maan een verlegen persoon is die zich verstopt. In het echt betekent het: de wolken hangen voor de maan, dus je ziet hem nauwelijks. Dat past bij de grijze, natte dagen.' },
        { vaardigheid: 'Gevoel', vraag: 'Hoe denkt de dichter over november?', opties: ['Hij vindt het alleen maar een vervelende maand', 'Hij vindt het de warmste maand van het jaar', 'Hij vindt het somber en koud, maar houdt er toch van', 'Hij vindt het een saaie maand zonder iets bijzonders'], goed: 2, uitleg: 'Lees de laatste strofe goed. De dichter noemt november "somber, nat en koud", maar zegt daarna: "toch ben je ook een maand waarvan ik houd". Hij heeft dus twee gevoelens tegelijk.' },
        { vaardigheid: 'Boodschap', vraag: 'Welke gedachte staat in de laatste twee regels centraal?', opties: ['Je moet in de herfst altijd binnen blijven', 'Juist doordat het buiten zo guur is, geniet je extra van de warmte binnen', 'Je moet je deur goed op slot doen tegen inbrekers', 'Storm is gevaarlijk voor huizen'], goed: 1, uitleg: '"Wie de storm heeft horen razen buiten, weet pas hoe fijn het is de deur te sluiten." De dichter zegt: het slechte weer buiten maakt het binnen extra fijn. Dat verklaart ook waarom hij van november houdt.' }
      ]
    },
    kort: [
      {
        titel: 'Gedichtenwedstrijd "Mijn seizoen"', soort: 'Poster',
        tekst: [
          'Gedichtenwedstrijd "Mijn seizoen"',
          'Voor kinderen van 9 tot en met 12 jaar.',
          'Schrijf een gedicht van hoogstens 16 regels over jouw lievelingsseizoen.',
          'Inleveren: uiterlijk vrijdag 11 december, bij de balie van de bibliotheek of via de website.',
          'Vermeld je naam, je leeftijd en je school.',
          'Prijzen: 1e prijs een boekenbon van € 25, 2e en 3e prijs een boekenbon van € 10.',
          'De drie winnende gedichten komen in de krant.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Hoeveel regels mag je gedicht hoogstens hebben?', opties: ['12', '16', '25', '10'], goed: 1, uitleg: 'Lees de regel die met "Schrijf" begint: "hoogstens 16 regels". De 12 hoort bij de leeftijd, en 25 en 10 bij de prijzen.' },
          { vaardigheid: 'Woordbetekenis', vraag: '"Inleveren: uiterlijk vrijdag 11 december." Wat betekent dat?', opties: ['Je mag het alleen op vrijdag 11 december inleveren', 'Je mag het pas na 11 december inleveren', 'Je mag het eerder inleveren, maar niet later dan 11 december', 'Op 11 december wordt de winnaar bekendgemaakt'], goed: 2, uitleg: '"Uiterlijk" betekent: op z\'n laatst. 11 december is dus de laatste dag. Eerder inleveren mag altijd, later niet meer.' }
        ]
      },
      {
        titel: 'Warme chocolademelk', soort: 'Recept',
        tekst: [
          'Warme chocolademelk (voor 4 bekers)',
          'Nodig: 1 liter melk, 100 gram pure chocolade, 2 eetlepels suiker, een snufje kaneel en eventueel slagroom.',
          '1. Breek de chocolade in kleine stukjes.',
          '2. Verwarm de melk in een pan op laag vuur. Laat de melk niet koken!',
          '3. Doe de chocolade en de suiker erbij en roer tot alles is opgelost.',
          '4. Voeg de kaneel toe en schenk de chocolademelk in de bekers.',
          '5. Spuit er als je wilt een toef slagroom op.'
        ],
        vragen: [
          { vaardigheid: 'Conclusie', vraag: 'Floor wil chocolademelk maken voor 2 bekers. Hoeveel chocolade heeft ze nodig?', opties: ['25 gram', '100 gram', '200 gram', '50 gram'], goed: 3, uitleg: 'Kijk eerst voor hoeveel bekers het recept is: 4. Floor wil er 2, dat is de helft. De helft van 100 gram is 50 gram. Bij een recept moet je dus soms zelf rekenen.' },
          { vaardigheid: 'Woordbetekenis', vraag: 'Wat betekent "eventueel" in de regel met "Nodig"?', opties: ['Als je wilt', 'Altijd', 'Heel veel', 'Na afloop'], goed: 0, uitleg: 'Kijk naar stap 5. Daar staat bij de slagroom: "als je wilt". Slagroom hoort er dus niet per se bij. "Eventueel" betekent hetzelfde.' }
        ]
      }
    ]
  },
  // Dag 40: Hoe een vulkaan werkt
  {
    hardop: {
      titel: 'Hoe een vulkaan werkt', soort: 'Informatief', emoji: '🌋',
      alineas: [
        'Diep onder onze voeten is het ontzettend heet. Op een diepte van tientallen kilometers is het zo warm dat gesteente kan smelten. Dat gesmolten gesteente heet magma. Omdat magma lichter is dan het vaste gesteente eromheen, stijgt het heel langzaam op, ongeveer zoals een luchtbel in een glas limonade naar boven komt.',
        'De aardkorst bestaat niet uit één stuk, maar uit enorme platen die heel langzaam bewegen, soms maar een paar centimeter per jaar. Vooral waar die platen tegen elkaar aan duwen of juist uit elkaar schuiven, vindt het magma een weg naar boven. Daarom liggen de meeste vulkanen in lange rijen, bijvoorbeeld rondom de Grote Oceaan. Dat gebied wordt ook wel de Ring van Vuur genoemd.',
        'Onder een vulkaan verzamelt het magma zich in een grote ruimte: de magmakamer. In het magma zitten gassen opgelost, net als koolzuur in een fles frisdrank. Neemt de druk te veel toe, dan baant het magma zich een weg naar buiten. Zodra het boven de grond komt, noemen we het lava. Soms stroomt die lava rustig naar beneden, maar als er veel gas in zit, volgt een explosie waarbij as en stenen kilometers hoog de lucht in worden geslingerd.',
        'Ondanks het gevaar wonen er miljoenen mensen vlak bij een vulkaan. Daar is een reden voor: vulkanische as maakt de grond erg vruchtbaar, zodat boeren er goede oogsten hebben. Wetenschappers houden actieve vulkanen daarom nauwkeurig in de gaten. Ze meten kleine aardbevingen en veranderingen in de vorm van de berg. Zo kunnen ze een uitbarsting vaak op tijd voorspellen en de bewoners waarschuwen.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Wat is het verschil tussen magma en lava?', opties: ['Magma is koud, lava is heet', 'Lava zit onder de grond, magma erboven', 'Magma zit onder de grond; boven de grond heet het lava', 'Magma bestaat uit gas, lava uit steen'], goed: 2, uitleg: 'In alinea 1 lees je dat gesmolten gesteente onder de grond magma heet. In alinea 3 staat: "Zodra het boven de grond komt, noemen we het lava." Het is dus hetzelfde spul, op een andere plek.' },
        { vaardigheid: 'Bedoeling', vraag: 'Waarom vergelijkt de schrijver magma met een fles frisdrank?', opties: ['Om uit te leggen hoe opgeloste gassen onder druk ineens met kracht naar buiten kunnen komen', 'Om te laten zien dat magma zoet is', 'Om te vertellen dat je bij een vulkaan niet mag drinken', 'Om uit te leggen waarom lava rood is'], goed: 0, uitleg: 'Denk aan een fles frisdrank die je schudt en opendraait: het gas spuit eruit. Met die bekende ervaring maakt de schrijver duidelijk waarom een vulkaan met veel gas kan ontploffen.' },
        { vaardigheid: 'Verband', vraag: 'Waarom liggen de meeste vulkanen in lange rijen?', opties: ['Omdat mensen ze daar hebben gebouwd', 'Omdat ze allemaal in de Grote Oceaan liggen', 'Omdat het daar het warmst is', 'Omdat het magma vooral naar boven komt waar de platen van de aardkorst elkaar raken of uit elkaar gaan'], goed: 3, uitleg: '"Daarom" in alinea 2 wijst terug naar de zin ervoor: het magma vindt een weg naar boven vooral waar de platen tegen elkaar duwen of uit elkaar schuiven. Die randen zijn lange lijnen, dus liggen de vulkanen ook in rijen.' },
        { vaardigheid: 'Woordbetekenis', vraag: '"Dan baant het magma zich een weg naar buiten." Wat betekent dat?', opties: ['Het magma koelt af', 'Het magma maakt zelf een doorgang naar buiten', 'Het magma zakt naar beneden', 'Het magma blijft in de magmakamer'], goed: 1, uitleg: 'Een baan is een weg. Wie "zich een weg baant", maakt zelf ruimte om erdoor te komen, zoals jij door een drukke menigte. Het magma duwt zich dus door het gesteente naar buiten.' },
        { vaardigheid: 'Eigen kennis', vraag: 'Waarom meten wetenschappers kleine aardbevingen bij een vulkaan?', opties: ['Omdat aardbevingen de grond vruchtbaar maken', 'Omdat aardbevingen de vulkaan laten afkoelen', 'Omdat magma dat omhoogkomt de grond kan laten trillen, wat kan wijzen op een uitbarsting', 'Omdat ze willen weten hoe oud de vulkaan is'], goed: 2, uitleg: 'De tekst zegt dat ze kleine aardbevingen meten om uitbarstingen te voorspellen. Bedenk zelf het verband: als magma omhoog duwt, schuift en kraakt het gesteente. Dat voel je als trillingen.' },
        { vaardigheid: 'Conclusie', vraag: 'Welke conclusie past bij alinea 4?', opties: ['Voor veel mensen wegen de voordelen van wonen bij een vulkaan op tegen het gevaar', 'Wonen bij een vulkaan is helemaal niet gevaarlijk', 'Wetenschappers kunnen uitbarstingen altijd precies voorspellen', 'Boeren kunnen alleen bij vulkanen goede oogsten hebben'], goed: 0, uitleg: 'Weeg de woorden. "Ondanks het gevaar" wonen er miljoenen mensen, omdat de grond zo vruchtbaar is: het voordeel vinden ze belangrijker. De andere antwoorden zijn te sterk: er staat "vaak op tijd", niet "altijd".' }
      ]
    },
    kort: [
      {
        titel: 'Tentoonstelling VUUR!', soort: 'Advertentie',
        tekst: [
          'Tentoonstelling VUUR! in het Aardmuseum – tot en met 28 februari',
          'Beleef een uitbarsting in onze trilzaal en bekijk echte lava uit IJsland.',
          'Kaartje | Online | Aan de kassa',
          'Volwassene | € 14,00 | € 16,50',
          'Kind (4–17 jaar) | € 8,00 | € 9,50',
          'Gezinskaart (2 volwassenen + 2 kinderen) | € 39,00 | € 45,00',
          'De trilzaal is niet geschikt voor kinderen onder de 6 jaar.'
        ],
        vragen: [
          { vaardigheid: 'Conclusie', vraag: 'Een gezin met 2 volwassenen en 2 kinderen koopt online kaartjes. Hoeveel besparen ze met een gezinskaart, vergeleken met losse online kaartjes?', opties: ['€ 2,00', '€ 5,00', '€ 13,00', '€ 6,00'], goed: 1, uitleg: 'Reken eerst de losse online kaartjes uit: 2 × € 14,00 + 2 × € 8,00 = € 44,00. De online gezinskaart kost € 39,00. Het verschil is € 5,00. Let op dat je in dezelfde kolom (online) blijft.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat kost één kinderkaartje aan de kassa?', opties: ['€ 8,00', '€ 16,50', '€ 14,00', '€ 9,50'], goed: 3, uitleg: 'Zoek de regel "Kind" en kijk dan in de kolom "Aan de kassa". Daar staat € 9,50. € 8,00 is de online prijs.' }
        ]
      },
      {
        titel: 'Uitbarsting op IJsland', soort: 'Nieuwsbericht',
        tekst: [
          'Op het schiereiland Reykjanes in IJsland is gisteravond opnieuw een vulkaan uitgebarsten. Uit een lange scheur in de grond spuit lava tientallen meters hoog. Een vissersdorp in de buurt was uit voorzorg al eerder ontruimd. Het vliegverkeer heeft geen last van de uitbarsting, omdat er bijna geen as vrijkomt.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Waarom heeft het vliegverkeer geen last van de uitbarsting?', opties: ['Omdat er bijna geen as vrijkomt', 'Omdat er op IJsland geen vliegveld is', 'Omdat de lava maar tientallen meters hoog spuit', 'Omdat het dorp is ontruimd'], goed: 0, uitleg: 'Zoek naar "vliegverkeer". In dezelfde zin staat na "omdat" de reden: er komt bijna geen as vrij.' },
          { vaardigheid: 'Woordbetekenis', vraag: 'Het dorp was "uit voorzorg" ontruimd. Wat betekent dat?', opties: ['Omdat het dorp al door lava was geraakt', 'Omdat de bewoners op vakantie waren', 'Om gevaar te voorkomen, voordat er echt iets misging', 'Omdat het dorp te klein was'], goed: 2, uitleg: 'In "voorzorg" zit "vooraf zorgen". Je doet iets van tevoren, zodat het niet mis kan gaan. Het woordje "al eerder" in de zin past daarbij: de mensen waren weg voordat de vulkaan uitbarstte.' }
        ]
      }
    ]
  },
  // Dag 41: De kapotte fiets
  {
    hardop: {
      titel: 'De kapotte fiets', soort: 'Verhalend', emoji: '🚲',
      alineas: [
        'Het was kwart over acht toen Thijs met een schok tot stilstand kwam. Zijn ketting was eraf gelopen en zat muurvast tussen het tandwiel en het frame. Hij trok eraan, maar kreeg alleen zwarte vegen op zijn handen. Uitgerekend vandaag, dacht hij. Om half negen begon de oefentoets rekenen, en juf Annelies had een hekel aan laatkomers.',
        'Op dat moment remde er iemand naast hem. Het was Ruby, het meisje uit zijn klas met wie hij eigenlijk nooit praatte. Hij vond haar altijd een beetje een betweter, omdat ze bij elke vraag van de juf meteen haar vinger opstak. "Ketting eraf?" vroeg ze, en zonder op antwoord te wachten zette ze haar fiets tegen een lantaarnpaal.',
        'Ruby zette zijn fiets op zijn kop, zodat hij op het zadel en het stuur stond. "Kijk, als je de trapper achteruit draait en de ketting tegelijk tegen het tandwiel duwt, loopt hij er vanzelf weer op." Ze deed het voor, en na drie pogingen liep de ketting weer soepel rond. "Van mijn opa geleerd," zei ze schouderophalend. "Hij heeft een fietsenwinkel."',
        'Ze haalden het nét. Toen Thijs hijgend zijn jas ophing, zag hij zijn zwarte handen. Ruby gaf hem zonder iets te zeggen een vochtig doekje uit haar tas. Tijdens de toets keek hij een paar keer opzij. Ruby zat geconcentreerd te rekenen, met het puntje van haar tong tussen haar lippen. Misschien, dacht Thijs, was ze helemaal geen betweter. Misschien wist ze gewoon heel veel.'
      ],
      vragen: [
        { vaardigheid: 'Personage', vraag: 'Waarom heeft Thijs zo\'n haast?', opties: ['Omdat het begint te regenen', 'Omdat om half negen een oefentoets begint en de juf niet van laatkomers houdt', 'Omdat hij met Ruby heeft afgesproken', 'Omdat hij nog naar de fietsenwinkel moet'], goed: 1, uitleg: 'In de laatste zinnen van alinea 1 staat wat Thijs denkt: "Uitgerekend vandaag." Daarna lees je waarom: om half negen begint de toets, en het is al kwart over acht.' },
        { vaardigheid: 'Woordbetekenis', vraag: 'Wat is een "betweter"?', opties: ['Iemand die goed kan fietsen', 'Iemand die altijd te laat komt', 'Iemand die nooit iets zegt', 'Iemand die laat merken dat hij of zij alles beter weet'], goed: 3, uitleg: 'Kijk naar de vorm: "bet" komt van "beter", dus iemand die het altijd beter weet. In de tekst zie je waarom Thijs dat vindt: Ruby steekt bij elke vraag meteen haar vinger op.' },
        { vaardigheid: 'Informatie zoeken', vraag: 'Hoe krijgt Ruby de ketting er weer op?', opties: ['Ze draait de trapper achteruit en duwt de ketting tegelijk tegen het tandwiel', 'Ze haalt een nieuwe ketting uit de fietsenwinkel', 'Ze vraagt een volwassene om hulp', 'Ze trekt hard aan de ketting'], goed: 0, uitleg: 'In alinea 3 legt Ruby het zelf uit. Vertel het in je eigen woorden: fiets op zijn kop, trapper achteruit draaien en de ketting tegen het tandwiel duwen. Hard trekken deed Thijs, en dat hielp niet.' },
        { vaardigheid: 'Ontwikkeling', vraag: 'Hoe verandert de mening van Thijs over Ruby in het verhaal?', opties: ['Eerst vindt hij haar aardig, later vervelend', 'Hij blijft haar een betweter vinden', 'Eerst vindt hij haar een betweter, later denkt hij dat ze gewoon veel weet', 'Eerst kent hij haar niet, later wordt ze zijn beste vriendin'], goed: 2, uitleg: 'Vergelijk het begin met het eind. In alinea 2 vindt Thijs haar een betweter. In de laatste zinnen denkt hij: "Misschien was ze helemaal geen betweter. Misschien wist ze gewoon heel veel." Of ze beste vriendinnen worden, staat nergens.' },
        { vaardigheid: 'Personage', vraag: 'Wat laat het zien dat Ruby "zonder iets te zeggen" een vochtig doekje aan Thijs geeft?', opties: ['Dat ze boos op hem is', 'Dat ze niet wil dat de juf het merkt', 'Dat ze verlegen is en niet durft te praten', 'Dat ze uit zichzelf helpt, zonder er iets voor terug te willen'], goed: 3, uitleg: 'Ruby ziet dat Thijs vieze handen heeft en helpt meteen, zonder er drukte over te maken. Net als bij de ketting wacht ze niet tot iemand het vraagt. Dat zegt iets over haar karakter: ze is behulpzaam en doet niet stoer.' },
        { vaardigheid: 'Soort verhaal', vraag: 'Wat voor verhaal is dit?', opties: ['Een sprookje, want Ruby kan iets wat gewone kinderen niet kunnen', 'Een realistisch verhaal: alles wat gebeurt, kan echt gebeuren', 'Een fabel, want er zit een les in', 'Een informatieve tekst over fietsen repareren'], goed: 1, uitleg: 'Vraag je af: kan dit echt gebeuren? Een ketting die eraf loopt, een klasgenoot die helpt, een toets op school: allemaal heel gewoon. Er gebeurt niets onmogelijks, dus het is realistisch.' }
      ]
    },
    kort: [
      {
        titel: 'Fietsenmaker Van Dalen', soort: 'Prijslijst',
        tekst: [
          'Fietsenmaker Van Dalen – prijslijst reparaties',
          'Ketting eraf, terugzetten | € 5,00',
          'Nieuwe ketting (inclusief montage) | € 27,50',
          'Binnenband vervangen | € 15,00',
          'Lekke band plakken | € 9,50',
          'Remblokjes vervangen (per rem) | € 12,00',
          'Grote beurt (alles nagekeken en afgesteld) | € 59,00',
          'Klaar terwijl u wacht: lekke band plakken en ketting terugzetten.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat kost het om een lekke band te laten plakken?', opties: ['€ 5,00', '€ 15,00', '€ 9,50', '€ 12,00'], goed: 2, uitleg: 'Zoek de regel met "lekke band plakken" en lees de prijs ernaast: € 9,50. € 15,00 is voor een nieuwe binnenband.' },
          { vaardigheid: 'Conclusie', vraag: 'Thijs laat zijn lekke band plakken en de remblokjes van zijn voor- én achterrem vervangen. Wat betaalt hij?', opties: ['€ 21,50', '€ 33,50', '€ 59,00', '€ 36,00'], goed: 1, uitleg: 'Let op "per rem": twee remmen is 2 × € 12,00 = € 24,00. Daar komt het plakken bij: € 24,00 + € 9,50 = € 33,50. Wie "per rem" overslaat, komt op € 21,50.' }
        ]
      },
      {
        titel: 'Fiets gevonden', soort: 'Prikbordbericht',
        tekst: [
          'GEVONDEN: blauwe kinderfiets',
          'Afgelopen dinsdag stond er bij de ingang van het park een blauwe kinderfiets (26 inch) met een gele bel en een kapotte achterlamp. Hij stond er de hele dag zonder slot.',
          'We hebben hem meegenomen, zodat hij niet gestolen wordt.',
          'Is dit jouw fiets? Kom langs op de Lindelaan 8. Vertel ons dan wel wat er aan de bagagedrager hangt, zodat we weten dat hij echt van jou is.'
        ],
        vragen: [
          { vaardigheid: 'Tussen de regels', vraag: 'Waarom staat er in het bericht níét bij wat er aan de bagagedrager hangt?', opties: ['Omdat de schrijvers dat vergeten zijn', 'Omdat er niets aan de bagagedrager hangt', 'Omdat het bericht anders te lang wordt', 'Omdat dan iedereen kan doen alsof het zijn fiets is'], goed: 3, uitleg: 'Lees de laatste zin: de eigenaar moet zelf vertellen wat eraan hangt, "zodat we weten dat hij echt van jou is". Als het al in het bericht stond, kon iedereen dat antwoord geven. Het is dus een soort controlevraag.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat is er kapot aan de gevonden fiets?', opties: ['De bel', 'De achterlamp', 'De bagagedrager', 'De ketting'], goed: 1, uitleg: 'Lees de beschrijving van de fiets in de tweede regel. Daar staat "een kapotte achterlamp". De bel is geel, maar niet kapot.' }
        ]
      }
    ]
  },
  // Dag 42: Een surprise maken
  {
    hardop: {
      titel: 'Een surprise maken', soort: 'Instructief', emoji: '🎁',
      alineas: [
        'Op 5 december krijg je op school misschien een surprise, maar je moet er ook zelf een maken. Een surprise is een cadeautje dat verstopt zit in een zelfgemaakte, grappige verpakking. Daar hoort altijd een gedicht bij. De mooiste surprise is er een die precies past bij degene voor wie je hem maakt. Hoe pak je dat aan?',
        'Begin met een beetje speurwerk. Wat doet jouw lootje graag? Heeft hij of zij een hobby, een lievelingsdier of een bekende uitspraak? Schrijf alles wat je weet op een briefje. Zit Daan bijvoorbeeld altijd te gamen, dan kun je een enorme spelcomputer maken. Is Sara gek op paarden, dan wordt het misschien een paard met een staart van wol. Bedenk ook alvast waar je het cadeautje gaat verstoppen.',
        'Daarna ga je bouwen. Verzamel dozen, wc-rolletjes, oude kranten en lege flessen. Je kunt een stevige vorm maken van karton en plakband, of papier-maché gebruiken: repen krant die je met behangplaksel over een ballon of een doos plakt. Laat dat minstens een nacht drogen voordat je gaat verven. Begin dus op tijd, want op het laatste moment lukt dat niet meer.',
        'Tot slot schrijf je het gedicht. Daarin mag je je lootje een beetje plagen, maar het moet wel leuk blijven: niemand wil voor de hele klas voor gek staan. Lees je gedicht daarom hardop voor aan iemand thuis. Moet die persoon lachen, en zou jij het zelf ook leuk vinden om te horen? Dan zit je goed. Onderteken het gedicht natuurlijk met "Sint en Piet" en niet met je eigen naam!'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Hoe lang moet papier-maché minstens drogen?', opties: ['Een uur', 'Tot de volgende pauze', 'Een nacht', 'Een week'], goed: 2, uitleg: 'Zoek het woord "papier-maché" in alinea 3. Een paar zinnen verder staat: "Laat dat minstens een nacht drogen voordat je gaat verven."' },
        { vaardigheid: 'Woordbetekenis', vraag: '"Begin met een beetje speurwerk." Wat bedoelt de schrijver met "speurwerk"?', opties: ['Uitzoeken wat je lootje leuk vindt', 'Spullen zoeken voor je surprise', 'Een goede verstopplek zoeken', 'Je eigen lootje geheim houden'], goed: 0, uitleg: 'Een speurder zoekt dingen uit, zoals een detective. Lees de zinnen erna: wat doet je lootje graag, welke hobby, welk lievelingsdier? Je zoekt dus informatie over degene voor wie je de surprise maakt.' },
        { vaardigheid: 'Verband', vraag: 'Waarom moet je je gedicht volgens de schrijver eerst hardop voorlezen aan iemand thuis?', opties: ['Om te oefenen voor een spreekbeurt', 'Om te testen of het grappig is zonder dat je lootje voor gek staat', 'Omdat de Sint het gedicht anders niet wil ondertekenen', 'Omdat je het gedicht uit je hoofd moet leren'], goed: 1, uitleg: 'Het signaalwoord "daarom" wijst terug naar de zin ervoor: plagen mag, maar niemand wil voor de hele klas voor gek staan. Door het eerst voor te lezen, kun je controleren of het leuk is. Dat zie je ook aan de vragen die erna komen.' },
        { vaardigheid: 'Signaalwoord', vraag: '"Begin dus op tijd." Waarom staat hier het woord "dus"?', opties: ['Omdat er een voorbeeld volgt', 'Omdat het een gevolg is van het feit dat papier-maché een nacht moet drogen', 'Omdat er een tegenstelling komt', 'Omdat het de laatste stap is'], goed: 1, uitleg: '"Dus" is een signaalwoord van gevolg of conclusie. De reden staat in de zin ervoor: je moet het een nacht laten drogen. Daaruit volgt: als je te laat begint, krijg je je surprise niet op tijd af.' },
        { vaardigheid: 'Voorbeeld', vraag: 'Waarom noemt de schrijver Daan en Sara?', opties: ['Omdat zij de surprises van de schrijver krijgen', 'Om te laten zien welke kinderen goed kunnen knutselen', 'Als voorbeelden van hoe je een surprise laat passen bij iemands hobby', 'Om uit te leggen hoe je een gedicht schrijft'], goed: 2, uitleg: 'Kijk naar wat er vlak ervóór staat: je zoekt uit wat je lootje graag doet. Met "bijvoorbeeld" komen dan Daan (gamen → spelcomputer) en Sara (paarden → paard). Ze maken de tip duidelijk.' },
        { vaardigheid: 'Hoofdgedachte', vraag: 'Wat is de belangrijkste boodschap van de schrijver?', opties: ['Papier-maché is de beste manier om een surprise te maken.', 'Een surprise moet vooral heel groot zijn.', 'Je moet je lootje in je gedicht flink plagen.', 'Een goede surprise maak je met aandacht voor degene die hem krijgt, en met genoeg tijd.'], goed: 3, uitleg: 'Zoek wat in de hele tekst steeds terugkomt: de surprise moet passen bij je lootje (alinea 1, 2), het gedicht moet leuk zijn voor die persoon (alinea 4) en je moet op tijd beginnen (alinea 3). Papier-maché is maar één mogelijkheid.' }
      ]
    },
    kort: [
      {
        titel: 'Hobbywinkel De Schaar', soort: 'Advertentie',
        tekst: [
          'Alles voor je surprise bij Hobbywinkel De Schaar!',
          'Behangplaksel, 1 pak | € 3,95',
          'Plakkaatverf, set van 6 kleuren | € 7,50',
          'Crêpepapier, per rol | € 1,25',
          'Ballonnen, zak van 20 | € 2,50',
          'Actie: koop 2 sets verf, dan krijg je de derde set gratis!',
          'Open: maandag t/m zaterdag 9.30 – 17.30 uur, koopavond op vrijdag tot 21.00 uur.'
        ],
        vragen: [
          { vaardigheid: 'Conclusie', vraag: 'Yasmin koopt 3 sets verf en 2 rollen crêpepapier. Wat betaalt ze?', opties: ['€ 25,00', '€ 17,50', '€ 22,50', '€ 20,00'], goed: 1, uitleg: 'Gebruik de actie: bij 3 sets verf betaal je er maar 2, dus 2 × € 7,50 = € 15,00. Twee rollen crêpepapier kosten 2 × € 1,25 = € 2,50. Samen € 17,50. Zonder de actie kom je op € 25,00.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Tot hoe laat is de winkel op vrijdag open?', opties: ['Tot 21.00 uur', 'Tot 17.30 uur', 'Tot 9.30 uur', 'De winkel is op vrijdag dicht'], goed: 0, uitleg: 'Lees de hele regel met de openingstijden. Normaal sluit de winkel om 17.30 uur, maar op vrijdag is er koopavond tot 21.00 uur.' }
        ]
      },
      {
        titel: 'Een gedicht voor Daan', soort: 'Gedicht',
        tekst: [
          'Beste Daan, de Sint weet het wel:',
          'jij speelt het liefst een computerspel.',
          'Je duimen gaan sneller dan de wind,',
          'en roept je moeder: "Eten, kind!",',
          'dan zeg jij: "Ik kom zo, nog één level maar!"',
          'en staat je bord al koud te wachten daar.',
          'Daarom bouwde Piet een controller van karton:',
          'maak hem open en ontdek wat de Sint voor je verzon!',
          'Sint en Piet'
        ],
        vragen: [
          { vaardigheid: 'Beeldspraak', vraag: '"Je duimen gaan sneller dan de wind." Wat bedoelt de Sint?', opties: ['Dat Daan heel hard kan rennen', 'Dat Daan het koud heeft', 'Dat Daan zijn duimen heeft bezeerd', 'Dat Daan razendsnel op de knoppen drukt'], goed: 3, uitleg: 'Duimen kunnen natuurlijk niet echt sneller dan de wind. Het is een overdrijving die laat zien hoe snel Daan zijn duimen beweegt: bij gamen druk je met je duimen op de knoppen van de controller.' },
          { vaardigheid: 'Verband', vraag: 'Waarom heeft Piet juist een controller van karton gemaakt?', opties: ['Omdat Daan altijd te laat komt eten', 'Omdat de surprise past bij wat Daan het liefst doet: gamen', 'Omdat karton goedkoop is', 'Omdat Daans controller kapot is'], goed: 1, uitleg: 'Het woord "Daarom" verbindt de surprise met wat ervoor staat: Daan speelt het liefst computerspelletjes. Een controller past dus precies bij hem, net zoals de tekst van vandaag adviseert.' }
        ]
      }
    ]
  },
  // Dag 43: Waarom Nederland een fietsland is
  {
    hardop: {
      titel: 'Waarom Nederland een fietsland is', soort: 'Informatief', emoji: '🚴',
      alineas: [
        'Nederland telt ongeveer achttien miljoen inwoners, maar meer dan drieëntwintig miljoen fietsen. Gemiddeld heeft iedere Nederlander dus meer dan één fiets. Nergens ter wereld wordt zoveel gefietst als bij ons. Hoe komt dat eigenlijk?',
        'Een deel van de verklaring ligt voor de hand: ons land is plat. Je hoeft geen steile hellingen op te zwoegen, en veel afstanden zijn kort. Toch is dat niet het hele verhaal. Er zijn immers ook in andere landen vlakke gebieden waar bijna niemand fietst. Er moet dus meer aan de hand zijn.',
        'In de jaren zestig leek het erop dat de auto de fiets zou verdringen. Steden kregen bredere wegen, en er reden steeds meer auto\'s. Maar het aantal verkeersongelukken steeg schrikbarend: in 1971 kwamen er ruim drieduizend mensen om in het verkeer, onder wie meer dan vierhonderd kinderen. Ouders kwamen in actie onder de leus "Stop de kindermoord". Mede daardoor besloot de overheid veel geld te steken in veilige fietspaden.',
        'Dat is tot op de dag van vandaag te merken. Nederland heeft tienduizenden kilometers fietspad, en in veel steden zijn er aparte verkeerslichten en zelfs grote fietsenstallingen onder de grond. Omdat fietsen hier zo veilig en makkelijk is, doen ook kinderen en ouderen het. En dat heeft voordelen voor iedereen: fietsen is gezond, goedkoop en schoon. Geen wonder dat bestuurders uit andere landen naar Nederland komen om te kijken hoe wij het doen.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Hoeveel fietsen zijn er ongeveer in Nederland?', opties: ['Achttien miljoen', 'Meer dan drieëntwintig miljoen', 'Drieduizend', 'Vierhonderd'], goed: 1, uitleg: 'De eerste zin geeft twee getallen. Achttien miljoen gaat over de inwoners; de fietsen zijn er "meer dan drieëntwintig miljoen". Lees dus precies waar elk getal bij hoort.' },
        { vaardigheid: 'Signaalwoord', vraag: '"Toch is dat niet het hele verhaal." Wat geeft "Toch" hier aan?', opties: ['Dat er een voorbeeld volgt', 'Dat er een opsomming begint', 'Dat de schrijver een conclusie trekt', 'Dat er een tegenstelling komt: plat zijn is een reden, maar niet de enige'], goed: 3, uitleg: '"Toch" is een signaalwoord van tegenstelling. Eerst noemt de schrijver een verklaring (het land is plat), daarna zegt hij: dat verklaart niet alles. Zo maakt hij je nieuwsgierig naar de rest van het antwoord.' },
        { vaardigheid: 'Woordbetekenis', vraag: '"... dat de auto de fiets zou verdringen." Wat betekent "verdringen" hier?', opties: ['Wegduwen en de plaats innemen', 'Helpen', 'Inhalen op de weg', 'Repareren'], goed: 0, uitleg: 'In "verdringen" zit "dringen": duwen om ergens te komen. Als de auto de fiets verdringt, neemt de auto de plaats van de fiets in. Dat past bij de zin erna: bredere wegen en steeds meer auto\'s.' },
        { vaardigheid: 'Tekststructuur', vraag: 'Welke functie heeft alinea 1?', opties: ['Het geeft het belangrijkste antwoord op de vraag van de tekst', 'Het vertelt wat er in de jaren zestig gebeurde', 'Het leidt het onderwerp in met opvallende getallen en een vraag', 'Het geeft een mening over fietsen'], goed: 2, uitleg: 'Een inleiding maakt de lezer nieuwsgierig. Alinea 1 doet dat met verrassende getallen en eindigt met een vraag: "Hoe komt dat eigenlijk?" Het antwoord volgt pas in de alinea\'s daarna.' },
        { vaardigheid: 'Verband', vraag: 'Wat was volgens alinea 3 een belangrijke reden dat de overheid veel geld in fietspaden ging steken?', opties: ['Er waren te weinig auto\'s', 'Nederland is plat', 'Fietsen is goedkoop', 'Er vielen veel verkeersdoden, en ouders kwamen daartegen in actie'], goed: 3, uitleg: '"Mede daardoor" wijst terug naar wat ervoor staat: het grote aantal verkeersdoden, ook kinderen, en de actie van de ouders. "Mede" betekent: het was niet de enige reden, wel een belangrijke.' },
        { vaardigheid: 'Hoofdgedachte', vraag: 'Welke zin geeft de hoofdgedachte van deze tekst over het fietsland het best weer?', opties: ['In 1971 kwamen er veel kinderen om in het verkeer.', 'Nederlanders hebben meer fietsen dan inwoners.', 'Nederland is een fietsland, niet alleen doordat het plat is, maar ook door keuzes die mensen hebben gemaakt.', 'In andere landen wordt bijna niet gefietst.'], goed: 2, uitleg: 'De tekst stelt een vraag (waarom fietsen we zoveel?) en geeft het antwoord: het vlakke land helpt, maar de acties van ouders en de aanleg van veilige fietspaden waren minstens zo belangrijk. De andere zinnen zijn feiten uit één alinea, of kloppen niet.' }
      ]
    },
    kort: [
      {
        titel: 'Fietsenstalling Station Centrum', soort: 'Tabel',
        tekst: [
          'Fietsenstalling Station Centrum – tarieven',
          'Eerste 24 uur | gratis',
          'Elke volgende 24 uur | € 1,35',
          'Abonnement per maand | € 12,00',
          'Open: dag en nacht. Fietsen die langer dan 28 dagen blijven staan, worden verwijderd.',
          'Gratis bandenpomp bij de ingang.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat kost het om je fiets 12 uur in de stalling te zetten?', opties: ['€ 1,35', '€ 12,00', '€ 0,70', 'Niets'], goed: 3, uitleg: 'Kijk naar de eerste regel van de tabel: de eerste 24 uur zijn gratis. 12 uur valt daarbinnen, dus je betaalt niets.' },
          { vaardigheid: 'Conclusie', vraag: 'Fenna zet haar fiets van maandag 8.00 uur tot woensdag 8.00 uur in de stalling. Wat betaalt ze?', opties: ['€ 1,35', '€ 2,70', 'Niets', '€ 12,00'], goed: 0, uitleg: 'Van maandag 8.00 uur tot woensdag 8.00 uur is 48 uur. De eerste 24 uur zijn gratis, de volgende 24 uur kosten € 1,35. Wie vergeet dat het eerste etmaal gratis is, komt op € 2,70.' }
        ]
      },
      {
        titel: 'Oplaadbaar fietslampje', soort: 'Gebruiksaanwijzing',
        tekst: [
          'Oplaadbaar fietslampje – gebruiksaanwijzing',
          'Opladen: sluit het lampje met de USB-kabel aan op een lader. Tijdens het laden brandt het controlelampje rood; als de batterij vol is, wordt het groen. Opladen duurt ongeveer 3 uur.',
          'Aan en uit: houd de knop 2 seconden ingedrukt.',
          'Knipperstand: druk, als het lampje aan is, één keer kort op de knop.',
          'Met een volle batterij brandt het lampje tot 8 uur, in de knipperstand tot 15 uur.'
        ],
        vragen: [
          { vaardigheid: 'Conclusie', vraag: 'Mees sluit zijn lampje om 19.00 uur aan op de lader. Hoe laat is het ongeveer vol?', opties: ['Om 19.08 uur', 'Om 22.00 uur', 'Om 21.00 uur', 'Om 03.00 uur'], goed: 1, uitleg: 'Zoek hoe lang opladen duurt: ongeveer 3 uur. 19.00 uur plus 3 uur is 22.00 uur. Dan wordt het controlelampje groen.' },
          { vaardigheid: 'Conclusie', vraag: 'Mees fietst elke dag 40 minuten met zijn lampje aan, niet knipperend. Hoeveel dagen kan hij ongeveer met een volle batterij doen?', opties: ['8 dagen', '12 dagen', '15 dagen', '20 dagen'], goed: 1, uitleg: 'Gebruik de juiste stand: zonder knipperen brandt het lampje 8 uur. 8 uur is 480 minuten, en 480 : 40 = 12. Mees kan dus ongeveer 12 dagen fietsen. 15 hoort bij de knipperstand, in uren.' }
        ]
      }
    ]
  },
  // Dag 44: Pakjesavond bij oma
  {
    hardop: {
      titel: 'Pakjesavond bij oma', soort: 'Verhalend', emoji: '🎁',
      alineas: [
        'Elk jaar vierde de hele familie pakjesavond bij oma Ria, in haar kleine huis aan de dijk. Dit jaar was het anders. Opa was in de zomer overleden, en Lieke vroeg zich al weken af of oma eigenlijk wel zin had in een feest. "Natuurlijk gaan we," had mama gezegd. "Juist dit jaar."',
        'Toen ze binnenkwamen, rook het naar speculaas en mandarijnen. Oma had de kamer versierd zoals altijd, met slingers en een grote jutezak naast de kachel. Op opa\'s stoel lag zijn oude rode sjaal. Niemand ging erop zitten. Even was het stil, totdat neef Joep riep: "Er wordt op de deur gebonsd!" Iedereen rende naar de gang, maar er was niemand. Op de mat stond alleen een mand vol pakjes.',
        'Het werd een gezellige avond. Er werden gedichten voorgelezen en surprises uitgepakt. Lieke kreeg een tekenset waar ze al maanden om had gevraagd. Maar het pakje dat haar het meest verraste, kwam als laatste. Het was plat en rechthoekig, en er zat geen gedicht bij. Alleen een kaartje, in het bibberige handschrift van oma: "Hij zou gewild hebben dat jij dit kreeg."',
        'Lieke maakte het papier voorzichtig open. Het was de oude houten schaakdoos van opa, waarop ze elke zondag samen hadden gespeeld. Ze keek op naar oma. Die knikte alleen maar, met glanzende ogen. Later die avond zette Lieke de stukken klaar en speelde ze een partij tegen oma. Oma won. "Dat heb ik van hem geleerd," zei ze met een knipoog, en voor het eerst die avond lachten ze allebei.'
      ],
      vragen: [
        { vaardigheid: 'Personage', vraag: 'Hoe voelt Lieke zich in de weken voor pakjesavond?', opties: ['Ze heeft er heel veel zin in', 'Ze twijfelt of oma wel zin heeft in een feest', 'Ze is boos op mama', 'Ze is bang voor Sinterklaas'], goed: 1, uitleg: 'In alinea 1 staat dat Lieke zich "al weken afvroeg" of oma wel zin had in een feest. Ze maakt zich dus zorgen, omdat opa in de zomer is overleden.' },
        { vaardigheid: 'Woordbetekenis', vraag: 'Oma schrijft in een "bibberig handschrift". Wat betekent dat?', opties: ['Een heel netjes handschrift', 'Een handschrift met veel kleuren', 'Een heel klein handschrift', 'Een trillerig, onregelmatig handschrift'], goed: 3, uitleg: '"Bibberen" is trillen, bijvoorbeeld van de kou of van emotie. Een bibberig handschrift zijn letters die er een beetje beverig uitzien, omdat de hand trilt. Dat past bij een oudere vrouw die iets moeilijks opschrijft.' },
        { vaardigheid: 'Tussen de regels', vraag: '"Op opa\'s stoel lag zijn oude rode sjaal. Niemand ging erop zitten." Waarom gaat niemand op die stoel zitten?', opties: ['Omdat de stoel kapot is', 'Omdat de stoel voor Sinterklaas is', 'Omdat het opa\'s plek is en iedereen aan hem denkt', 'Omdat de sjaal nat is'], goed: 2, uitleg: 'Dit staat niet letterlijk in de tekst. Opa is overleden, maar zijn sjaal ligt nog op zijn stoel. Het is alsof die plek nog van hem is. Daarom gaat niemand erop zitten, en is het daarna "even stil".' },
        { vaardigheid: 'Beeldspraak', vraag: 'Oma knikt "met glanzende ogen". Wat betekent dat hier?', opties: ['Oma heeft een nieuwe bril', 'Oma is moe', 'Oma is ontroerd en heeft tranen in haar ogen', 'Oma is boos'], goed: 2, uitleg: 'Glanzende ogen kunnen blij zijn, maar kijk naar het moment: Lieke krijgt de schaakdoos van opa die overleden is. Oma zegt niets, ze knikt alleen. Ze is ontroerd: blij en verdrietig tegelijk.' },
        { vaardigheid: 'Bedoeling', vraag: 'Mama zegt: "Juist dit jaar." Wat bedoelt ze daarmee?', opties: ['Dat dit het laatste jaar is dat ze pakjesavond vieren', 'Dat oma de familie dit jaar, nu opa er niet meer is, extra hard nodig heeft', 'Dat Lieke dit jaar de mooiste cadeaus krijgt', 'Dat ze dit jaar eindelijk tijd hebben'], goed: 1, uitleg: 'Mama legt het niet uit; je moet het afleiden. Lieke denkt dat oma misschien geen zin heeft, vanwege opa. Mama zegt: juist dáárom moeten we gaan. Oma moet nu niet alleen zijn.' },
        { vaardigheid: 'Onderwerp', vraag: 'Waar gaat dit verhaal vooral over?', opties: ['Over hoe je moet schaken', 'Over de mooiste cadeaus van pakjesavond', 'Over neef Joep, die graag grapjes maakt', 'Over de eerste pakjesavond zonder opa, waarin opa toch een beetje bij hen is'], goed: 3, uitleg: 'Vraag je af wat steeds terugkomt: opa\'s sjaal op zijn stoel, de schaakdoos, oma die zegt "Dat heb ik van hem geleerd". Het verhaal gaat over het missen van opa en hoe de familie hem samen herdenkt.' }
      ]
    },
    kort: [
      {
        titel: 'Sprinter Westerhaven – Dijkdorp', soort: 'Dienstregeling',
        tekst: [
          'Sprinter Westerhaven – Dijkdorp (zaterdag)',
          'Westerhaven vertrek | 17.04 | 17.34 | 18.04 | 18.34',
          'Molenbrug | 17.11 | 17.41 | 18.11 | 18.41',
          'Veenhuizen | 17.19 | — | 18.19 | —',
          'Dijkdorp aankomst | 17.26 | 17.50 | 18.26 | 18.50',
          '— = de trein stopt niet op dit station.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Hoe laat komt de trein die om 17.34 uur uit Westerhaven vertrekt, aan in Dijkdorp?', opties: ['17.26 uur', '17.41 uur', '17.50 uur', '18.26 uur'], goed: 2, uitleg: 'Zoek de kolom die begint met 17.34 en volg die naar beneden tot de regel "Dijkdorp aankomst": 17.50 uur. 17.41 uur is de tijd in Molenbrug.' },
          { vaardigheid: 'Conclusie', vraag: 'Lieke moet om 18.30 uur bij oma zijn. Oma woont 10 minuten lopen van het station in Dijkdorp. Welke trein moet Lieke in Westerhaven uiterlijk nemen?', opties: ['De trein van 17.04 uur', 'De trein van 17.34 uur', 'De trein van 18.04 uur', 'De trein van 18.34 uur'], goed: 1, uitleg: 'Reken terug. De trein van 18.04 uur is om 18.26 uur in Dijkdorp; met 10 minuten lopen is Lieke er pas om 18.36 uur: te laat. De trein van 17.34 uur komt om 17.50 uur aan, dan is ze er om 18.00 uur. Die van 17.04 uur kan ook, maar is niet de laatste.' }
        ]
      },
      {
        titel: 'Dobbelspel voor pakjesavond', soort: 'Spelregels',
        tekst: [
          'Dobbelspel voor pakjesavond (vanaf 4 spelers)',
          'Iedereen neemt drie kleine, ingepakte cadeautjes mee en legt ze op tafel.',
          'Om de beurt gooi je met een dobbelsteen. Gooi je een 6? Pak dan een cadeautje van tafel.',
          'Liggen alle cadeautjes van tafel? Dan zet iemand een wekker op vijf minuten. Vanaf nu mag je bij een 6 een cadeautje afpakken van een andere speler.',
          'Gaat de wekker af? Dan mag je openmaken wat je op dat moment hebt.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat doe je als je aan het begin van het spel een 6 gooit?', opties: ['Je zet een wekker', 'Je pakt een cadeautje af van een andere speler', 'Je maakt een cadeautje open', 'Je pakt een cadeautje van tafel'], goed: 3, uitleg: 'Aan het begin liggen alle cadeautjes nog op tafel. De regel die dan geldt: "Gooi je een 6? Pak dan een cadeautje van tafel." Afpakken mag pas later.' },
          { vaardigheid: 'Spelregels', vraag: 'Wat is het belangrijkste verschil tussen het eerste en het tweede deel van het spel?', opties: ['In het tweede deel pak je bij een 6 een cadeautje van een andere speler, en het spel duurt nog maar vijf minuten', 'In het tweede deel mag je met twee dobbelstenen gooien', 'In het tweede deel moet je een 1 gooien in plaats van een 6', 'In het tweede deel mag je je cadeautjes al openmaken'], goed: 0, uitleg: 'Vergelijk de regels voor en na "Liggen alle cadeautjes van tafel?". Dan veranderen er twee dingen: er loopt een wekker van vijf minuten, en bij een 6 pak je iets af van een ander. Openmaken mag pas als de wekker gaat.' }
        ]
      }
    ]
  },
  // Dag 45: De geschiedenis van Sinterklaas
  {
    hardop: {
      titel: 'De geschiedenis van Sinterklaas', soort: 'Informatief', emoji: '🎁',
      alineas: [
        'Elk jaar komt hij in november met de stoomboot aan, maar de echte Sint-Nicolaas heeft nooit een boot uit Spanje gezien. Hij leefde ruim zestienhonderd jaar geleden in Myra, een havenstad in het land dat nu Turkije heet. Daar was hij bisschop: de leider van de christelijke kerk in die streek.',
        'Over Nicolaas gaan veel legendes rond. Dat zijn oude verhalen waarvan niemand precies weet of ze echt gebeurd zijn. De bekendste gaat over een arme man met drie dochters. Omdat hij geen geld had, konden de meisjes niet trouwen. Nicolaas zou daarom \'s nachts stiekem zakjes goud door hun raam hebben gegooid. Zo kreeg hij de naam van een goedheiligman die in het geheim cadeautjes geeft.',
        'Na zijn dood werd Nicolaas in heel Europa vereerd. In de middeleeuwen kregen kinderen in Nederland op 6 december, zijn sterfdag, al kleine geschenken. Toch zag het feest er toen heel anders uit dan nu. De stoomboot en Spanje kwamen in het verhaal nog niet voor. Die bedacht de Amsterdamse onderwijzer Jan Schenkman pas in 1850, in een prentenboek dat razend populair werd.',
        'Ook buiten Nederland leeft Sinterklaas voort. Nederlanders die in de zeventiende eeuw naar Amerika vertrokken, namen hun feest mee naar Nieuw-Amsterdam, het huidige New York. Volgens een bekend verhaal groeide de Sint daar langzaam uit tot Santa Claus. De Amerikaanse kerstman zou dus weleens een verre neef van onze eigen Sint kunnen zijn.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Waar leefde de echte Sint-Nicolaas?', opties: ['In Spanje', 'In Amsterdam', 'In Myra, een stad in het huidige Turkije', 'In Nieuw-Amsterdam'], goed: 2, uitleg: 'Zoek gericht naar een plaatsnaam. In alinea 1 staat dat hij leefde "in Myra, een havenstad in het land dat nu Turkije heet". Spanje hoort bij het verhaal van nu, niet bij de echte Nicolaas.' },
        { vaardigheid: 'Woordbetekenis', vraag: 'Wat zijn "legendes"?', opties: ['Oude verhalen waarvan niet zeker is of ze echt gebeurd zijn', 'Liedjes die kinderen voor Sinterklaas zingen', 'Prentenboeken uit de negentiende eeuw', 'Feesten die in de middeleeuwen gevierd werden'], goed: 0, uitleg: 'Soms legt de schrijver een moeilijk woord meteen uit. Direct na "legendes" volgt: "Dat zijn oude verhalen waarvan niemand precies weet of ze echt gebeurd zijn."' },
        { vaardigheid: 'Signaalwoord', vraag: 'Alinea 3: "Toch zag het feest er toen heel anders uit dan nu." Wat laat het woord "Toch" hier zien?', opties: ['Er komt een oorzaak: daardoor kregen kinderen cadeautjes', 'Er komt een voorbeeld van een cadeautje uit de middeleeuwen', 'Er komt een samenvatting van de hele tekst', 'Er komt een tegenstelling: er waren al cadeautjes, maar het feest was nog niet zoals nu'], goed: 3, uitleg: '"Toch" is een signaalwoord voor een tegenstelling. Eerst lees je wat al hetzelfde was (cadeautjes op 6 december), daarna wat anders was: geen stoomboot en geen Spanje.' },
        { vaardigheid: 'Inleiding', vraag: 'Waarom begint de schrijver de tekst met de stoomboot uit Spanje?', opties: ['Om uit te leggen hoe een stoomboot werkt', 'Om je nieuwsgierig te maken: het feest dat je kent, verschilt van het echte leven van Nicolaas', 'Om te vertellen wanneer de intocht dit jaar is', 'Om te bewijzen dat Nicolaas uit Spanje kwam'], goed: 1, uitleg: 'Een inleiding wil je vaak de tekst in lokken. De schrijver begint bij iets wat je kent, en zegt meteen dat de echte Nicolaas nooit een boot uit Spanje heeft gezien. Dan wil je weten hoe het wél zit.' },
        { vaardigheid: 'Eigen kennis', vraag: 'Jan Schenkman liet Sinterklaas in 1850 met een stoomboot komen. Waarom paste een stoomboot goed bij die tijd?', opties: ['Stoomboten bestonden al in de tijd van Nicolaas', 'Stoomboten waren toen een nieuwe, moderne uitvinding', 'In 1850 waren er nog helemaal geen schepen', 'Een stoomboot is ook nu nog het snelste vervoer'], goed: 1, uitleg: 'Hier combineer je de tekst met wat je zelf weet. De stoommachine was in de negentiende eeuw nieuw; een stoomboot was toen dus iets spannends en moderns. Zeilschepen bestonden al eeuwen, dus "geen schepen" klopt niet.' },
        { vaardigheid: 'Samenvatten', vraag: 'Welke samenvatting past het best bij de hele tekst?', opties: ['Sint-Nicolaas gooide stiekem zakjes goud door het raam van drie arme meisjes', 'Jan Schenkman schreef in 1850 een prentenboek dat razend populair werd', 'In de middeleeuwen kregen kinderen op 6 december kleine geschenken', 'Sinterklaas gaat terug op een echte bisschop; het feest veranderde door de eeuwen heen en reisde zelfs mee naar Amerika'], goed: 3, uitleg: 'Een goede samenvatting dekt alle alinea\'s: de echte bisschop (1), de legendes (2), de veranderingen (3) en Amerika (4). De andere antwoorden zijn waar, maar gaan maar over één stukje.' }
      ]
    },
    kort: [
      {
        titel: 'Sinterklaasmiddag in De Linde', soort: 'Programma',
        tekst: [
          'Sinterklaasmiddag in buurthuis De Linde – zaterdag 5 december',
          '13.00 – 13.30 uur   Ontvangst met chocolademelk (gratis)',
          '13.30 – 14.15 uur   Pepernoten bakken (€ 2,50 per kind, aanmelden verplicht)',
          '14.15 – 15.00 uur   Voorstelling "De verdwaalde mijter" (gratis)',
          '15.00 – 16.00 uur   Sinterklaas op bezoek (alleen voor kinderen tot en met 8 jaar)',
          '16.00 – 16.30 uur   Gedichtenwedstrijd voor kinderen van 9 tot en met 12 jaar (gratis)',
          'Aanmelden voor het bakken kan tot en met donderdag 3 december bij de balie.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Hoe laat begint de voorstelling?', opties: ['14.15 uur', '13.30 uur', '15.00 uur', '16.00 uur'], goed: 0, uitleg: 'In een programma zoek je eerst de juiste regel: de voorstelling. Daar staat 14.15 – 15.00 uur. Het eerste tijdstip is de begintijd.' },
          { vaardigheid: 'Conclusie', vraag: 'Mila (11) en haar broertje Ties (6) bakken allebei pepernoten en blijven tot het eind. Wat klopt?', opties: ['Ze betalen samen € 2,50 en Ties mag meedoen met de gedichtenwedstrijd', 'Ze betalen samen € 5,00 en ze mogen allebei bij Sinterklaas op bezoek', 'Ze betalen samen € 5,00 en alleen Mila mag meedoen met de gedichtenwedstrijd', 'Ze betalen niets, want de hele middag is gratis'], goed: 2, uitleg: 'Combineer twee dingen. Het bakken kost € 2,50 per kind, dus 2 × € 2,50 = € 5,00. De gedichtenwedstrijd is voor 9 tot en met 12 jaar: dus wel voor Mila, niet voor Ties. Het bezoek van Sinterklaas is alleen tot en met 8 jaar.' }
        ]
      },
      {
        titel: 'Surprises op vrijdag', soort: 'Mail',
        tekst: [
          'Van: juf Esra',
          'Aan: ouders en leerlingen van groep 8',
          'Onderwerp: Sinterklaasviering vrijdag 4 december',
          'Beste allemaal,',
          'Vrijdag vieren we in groep 8 Sinterklaas met surprises. Neem je surprise donderdag al mee naar school, goed ingepakt en met je naam eronder geplakt. Zo kunnen we ze na schooltijd stiekem in het speellokaal verstoppen.',
          'Het cadeau in de surprise kost niet meer dan € 5. Vergeet het gedicht niet: dat lezen we hardop voor!',
          'Vrijdag zijn alle kinderen om 12.00 uur uit. Er is die dag dus geen overblijf.',
          'Groetjes, juf Esra'
        ],
        vragen: [
          { vaardigheid: 'Verband', vraag: 'Waarom moet de surprise al op donderdag mee naar school?', opties: ['Omdat de school vrijdag om 12.00 uur uit is', 'Omdat het cadeau niet meer dan € 5 mag kosten', 'Zodat de juf het gedicht kan nakijken', 'Zodat de juf de surprises vooraf kan verstoppen'], goed: 3, uitleg: 'Let op het woordje "Zo" na de zin over donderdag: "Zo kunnen we ze na schooltijd stiekem in het speellokaal verstoppen." Dat is het doel. Dat de school vrijdag vroeg uit is, staat er wel, maar is niet de reden.' },
          { vaardigheid: 'Woordbetekenis', vraag: 'Wat bedoelt de juf met "Er is die dag dus geen overblijf"?', opties: ['Er blijft na de viering geen snoep over', 'Niemand mag na schooltijd blijven spelen', 'Niemand eet die vrijdag tussen de middag op school', 'Er zijn geen surprises over'], goed: 2, uitleg: 'Kijk naar het woord zelf: over + blijven, tussen de middag op school blijven. En kijk naar de zin ervoor: iedereen is om 12.00 uur uit. Dus is er niemand die tussen de middag op school blijft eten. Het woordje "dus" laat zien dat het een gevolg is.' }
        ]
      }
    ]
  },
  // Dag 46: Dieren die een winterslaap houden
  {
    hardop: {
      titel: 'Dieren die een winterslaap houden', soort: 'Informatief', emoji: '🦇',
      alineas: [
        'Als de dagen korter worden, krijgen veel dieren een probleem. Insecten, vruchten en zaden zijn in de winter moeilijk te vinden. Sommige dieren trekken daarom naar warmere streken, andere leggen een voorraad aan. Weer andere kiezen een heel andere oplossing: ze slapen de koude maanden gewoon door.',
        'Bij een echte winterslaap gaat het lichaam bijna op slot. Neem de dwergvleermuis. In de zomer klopt zijn hart honderden keren per minuut, maar tijdens zijn winterslaap nog maar een paar tientallen keren. Zijn lichaamstemperatuur daalt tot een paar graden boven nul. Daardoor verbruikt hij zo weinig energie dat hij maandenlang kan teren op het vet dat hij in de herfst heeft opgebouwd.',
        'Een bruine beer slaapt ook lang, maar lang niet zo diep. Zijn temperatuur zakt maar een paar graden. Biologen spreken daarom niet van een winterslaap, maar van winterrust. Een beer kan bij gevaar dan ook vrij snel wakker worden. Een vleermuis die je in de winter wekt, heeft daarentegen zeker een halfuur nodig om op te warmen. Daarbij verbruikt hij in één keer een flink deel van zijn voorraad.',
        'Kikkers en padden doen het weer anders. Zij zijn koudbloedig: hun lichaam wordt net zo warm of koud als hun omgeving. In de winter verstoppen ze zich in de modder of onder bladeren en worden ze stijf en traag. Pas als de lente de grond verwarmt, komen ze weer in beweging.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Hoe noemen biologen de lange slaap van een bruine beer?', opties: ['Winterrust', 'Winterslaap', 'Winterstijfheid', 'Een trektocht'], goed: 0, uitleg: 'Zoek het woord "beer" op en lees die alinea precies. In alinea 3 staat: "Biologen spreken daarom niet van een winterslaap, maar van winterrust." Let op het woordje "niet".' },
        { vaardigheid: 'Signaalwoord', vraag: '"Een vleermuis die je in de winter wekt, heeft daarentegen zeker een halfuur nodig om op te warmen." Wat geeft "daarentegen" hier aan?', opties: ['Een opsomming: er komt nog een dier bij', 'Een tegenstelling: de beer wordt vrij snel wakker, de vleermuis juist niet', 'Een oorzaak: daardoor wordt de beer wakker', 'Een tijd: dit gebeurt daarna'], goed: 1, uitleg: '"Daarentegen" betekent "juist het omgekeerde". De zin ervoor gaat over de beer die snel wakker wordt. Daar zet de schrijver de vleermuis tegenover, die er lang over doet.' },
        { vaardigheid: 'Woordbetekenis', vraag: '"... dat hij maandenlang kan teren op het vet." Wat betekent "teren op" hier?', opties: ['Leven van iets wat je hebt opgespaard', 'Slapen op iets zachts', 'Bang zijn voor iets', 'Zoeken naar iets'], goed: 0, uitleg: 'Kijk naar de context: de vleermuis eet niet, maar heeft in de herfst vet opgebouwd en verbruikt weinig energie. Hij leeft dus van die voorraad. Dat is "teren op".' },
        { vaardigheid: 'Alinea', vraag: 'Wat is de functie van alinea 1 in deze tekst?', opties: ['Uitleggen hoe een vleermuis vet opbouwt', 'Het probleem beschrijven waarvoor de rest van de tekst oplossingen laat zien', 'Laten zien dat alle dieren naar het zuiden trekken', 'De lezer overhalen om dieren in de winter te voeren'], goed: 1, uitleg: 'Vraag je af wat een alinea doet in het geheel. Alinea 1 noemt het probleem (weinig voedsel in de winter) en een paar oplossingen. Daarna gaat de tekst dieper in op één oplossing: doorslapen.' },
        { vaardigheid: 'Verband', vraag: 'Waarom is het gevaarlijk voor een vleermuis als iemand hem in de winter wakker maakt?', opties: ['Hij raakt dan de weg naar zijn slaapplek kwijt', 'Hij wordt dan agressief en gaat bijten', 'Hij verbruikt dan in één keer veel van het vet dat hij nodig heeft om de winter door te komen', 'Zijn hart stopt dan meteen met kloppen'], goed: 2, uitleg: 'Hier leg je een verband tussen oorzaak en gevolg in twee alinea\'s. Alinea 2: de vleermuis moet de hele winter doen met zijn vetvoorraad. Alinea 3: wakker worden kost een flink deel van die voorraad. Gevolg: hij heeft misschien te weinig over voor de rest van de winter.' },
        { vaardigheid: 'Hoofdgedachte', vraag: 'Welke zin geeft de hoofdgedachte van de hele tekst het best weer?', opties: ['Vleermuizen hebben in de winter een heel trage hartslag', 'Beren houden geen echte winterslaap', 'Kikkers zijn koudbloedig', 'Dieren komen op verschillende manieren de winter door, en ook "doorslapen" gaat niet bij elk dier op dezelfde manier'], goed: 3, uitleg: 'De hoofdgedachte past bij de hele tekst, niet bij één alinea. De vleermuis, de beer en de kikker zijn voorbeelden van verschillende manieren om de winter door te komen.' }
      ]
    },
    kort: [
      {
        titel: 'Winterslapers in Nederland', soort: 'Tabel',
        tekst: [
          'Dier | Periode | Slaapplek | Lichaamstemperatuur in de winterslaap',
          'Egel | november tot maart | onder bladeren of takken | ongeveer 5 °C',
          'Hazelmuis | oktober tot april | rond nestje van gras op de grond | ongeveer 2 °C',
          'Dwergvleermuis | november tot maart | spleten in muren en op zolders | ongeveer 6 °C',
          'Wakker zijn deze dieren ongeveer 35 tot 37 °C.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Welk dier uit de tabel houdt de langste winterslaap?', opties: ['De egel', 'De hazelmuis', 'De dwergvleermuis', 'Ze slapen alle drie even lang'], goed: 1, uitleg: 'Vergelijk de kolom "Periode". De egel en de vleermuis slapen van november tot maart, de hazelmuis van oktober tot april. Dat is twee maanden langer.' },
          { vaardigheid: 'Conclusie', vraag: 'Tom vindt in januari een klein diertje in een rond nestje van gras op de grond. Het voelt ijskoud aan. Wat is volgens de tabel de beste verklaring?', opties: ['Het is waarschijnlijk een hazelmuis; dat hij zo koud is, is normaal in zijn winterslaap', 'Het is waarschijnlijk een hazelmuis; hij is ziek, want hij hoort 35 °C te zijn', 'Het is een dwergvleermuis, want die is in januari altijd wakker', 'Het is een egel, want egels slapen in een nestje van gras'], goed: 0, uitleg: 'Gebruik twee kolommen tegelijk. De slaapplek (nestje van gras op de grond) wijst naar de hazelmuis. In de laatste kolom zie je dat hij in zijn winterslaap maar ongeveer 2 °C is. Die 35 tot 37 °C geldt alleen als hij wakker is.' }
        ]
      },
      {
        titel: 'Weerbericht voor vrijdag', soort: 'Weerbericht',
        tekst: [
          'Weerbericht voor vrijdag 4 december',
          'Vannacht is het helder en koud, met matige vorst: tot −4 °C.',
          'Vrijdagochtend: zonnig, maar pas op! Op fietspaden en bruggen kunnen bevroren plassen voor gladheid zorgen.',
          'Vrijdagmiddag: vanuit het westen meer bewolking. In de avond regen, die in het oosten van het land even als natte sneeuw kan vallen.',
          'Middagtemperatuur: 2 tot 4 °C. Wind: zwak tot matig uit het zuidwesten.'
        ],
        vragen: [
          { vaardigheid: 'Bedoeling', vraag: 'Waarom staat er "pas op!" in het weerbericht?', opties: ['Omdat het in de middag gaat regenen', 'Omdat het in de avond natte sneeuw wordt', 'Omdat de wind uit het zuidwesten komt', 'Om fietsers te waarschuwen voor gladheid in de ochtend'], goed: 3, uitleg: 'Kijk wat er direct na "pas op!" komt: bevroren plassen op fietspaden en bruggen. De schrijver wil je dus waarschuwen voor gladheid. De regen en natte sneeuw komen pas later op de dag.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Wanneer en waar kan er natte sneeuw vallen?', opties: ['Vrijdagochtend in het hele land', 'Vannacht in het westen van het land', 'Vrijdagavond in het oosten van het land', 'Vrijdagmiddag op bruggen'], goed: 2, uitleg: 'Zoek het woord "sneeuw" op. Het staat bij vrijdagmiddag, maar het gaat over de avond: "In de avond regen, die in het oosten van het land even als natte sneeuw kan vallen."' }
        ]
      }
    ]
  },
  // Dag 47: Het verloren pakje
  {
    hardop: {
      titel: 'Het verloren pakje', soort: 'Verhalend', emoji: '📦',
      alineas: [
        'Drie weken lang had Sem zijn zakgeld gespaard. Daarvan had hij voor zijn zusje Fenna een sneeuwbol gekocht met een klein huisje erin, precies zo een als zij in de etalage van de speelgoedwinkel had zien staan. Hij had het cadeau ingepakt in glanzend rood papier en verstopt onder een stapel oude kranten in een kartonnen doos in de schuur.',
        'Op pakjesavond sloop hij om zeven uur naar buiten. De fietsen stonden er nog, maar de doos was verdwenen. Sem voelde zijn hart in zijn keel kloppen. Hij keek achter de grasmaaier, onder de werkbank en zelfs in de kliko. Niets. "Pap," riep hij door de achterdeur, "heb jij een doos gezien?" Zijn vader keek op van zijn krant. "Die doos met oude kranten? Die heb ik vanmiddag naar de papierbak gebracht."',
        'Sem rende de straat uit naar de papiercontainer op de hoek. Op zijn tenen kon hij net door de klep kijken. Tussen natte kranten en platgedrukte dozen zag hij iets roods glanzen. Met een lange stok viste hij het pakje omhoog. Het papier was gescheurd en doorweekt, maar toen hij het voorzichtig schudde, hoorde hij geen gerinkel van glas.',
        'Thuis pakte Sem de sneeuwbol opnieuw in en schreef er snel een gedicht bij, over een pakje dat bijna bij het oud papier was beland. Toen Fenna het voorlas, lag de hele kamer dubbel van het lachen, en zijn vader kreeg een knalrood hoofd. Fenna schudde de sneeuwbol en keek haar broer stralend aan. "Hoe wist je dat ik deze wilde?" Sem haalde zijn schouders op en grijnsde.'
      ],
      vragen: [
        { vaardigheid: 'Personage', vraag: 'Hoe voelt Sem zich als hij merkt dat de doos weg is?', opties: ['Opgelucht', 'Boos op Fenna', 'Geschrokken en ongerust', 'Verveeld'], goed: 2, uitleg: 'Let op hoe de schrijver het gevoel laat zien: "Sem voelde zijn hart in zijn keel kloppen." Dat gebeurt als je schrikt. Daarna zoekt hij overal, dus hij maakt zich echt zorgen.' },
        { vaardigheid: 'Personage', vraag: 'Waarom bracht de vader van Sem de doos naar de papierbak?', opties: ['Hij dacht dat er alleen oude kranten in zaten', 'Hij wilde Sem een beetje plagen', 'Fenna had hem erom gevraagd', 'De doos was nat geworden'], goed: 0, uitleg: 'Lees wat vader zelf zegt: "Die doos met oude kranten?" Hij wist dus niet dat het pakje onder de kranten lag. Sem had het daar juist goed verstopt.' },
        { vaardigheid: 'Beeldspraak', vraag: '"De hele kamer lag dubbel van het lachen." Wat betekent dat?', opties: ['Iedereen lag van het lachen op de grond', 'De kamer was te klein voor iedereen', 'Iedereen lachte Sem uit', 'Iedereen moest heel hard lachen'], goed: 3, uitleg: '"Dubbel liggen van het lachen" is een uitdrukking: je lacht zo hard dat je bijna dubbelklapt. Het is figuurlijk bedoeld, niemand ligt echt op de grond. Ze lachen om het grappige gedicht, niet om Sem.' },
        { vaardigheid: 'Verband', vraag: 'Sem schudt het natte pakje en hoort "geen gerinkel van glas". Waarom is dat belangrijk?', opties: ['Hij weet dan dat het pakje leeg is', 'Hij weet dan dat de sneeuwbol waarschijnlijk niet kapot is', 'Hij weet dan dat zijn vader het pakje heeft opengemaakt', 'Hij weet dan dat het pakje van iemand anders is'], goed: 1, uitleg: 'Een sneeuwbol is van glas. Als die gebroken was, zou je scherven horen rinkelen. Geen gerinkel betekent dus: hij is (waarschijnlijk) heel gebleven. Dat staat er niet letterlijk; je leidt het af.' },
        { vaardigheid: 'Personage', vraag: 'Welke woorden passen het best bij Sem?', opties: ['Gierig en lui', 'Gul en vastberaden', 'Verlegen en bang', 'Slordig en onverschillig'], goed: 1, uitleg: 'Kijk naar wat Sem doet. Hij spaart drie weken zakgeld voor zijn zus: gul. Als het pakje weg is, geeft hij niet op, maar rent hij naar de container en vist het eruit: vastberaden.' },
        { vaardigheid: 'Tussen de regels', vraag: 'Waarom krijgt de vader van Sem "een knalrood hoofd"?', opties: ['Hij heeft het warm van de kaarsjes', 'Hij is boos op Sem omdat die zomaar naar buiten rende', 'Hij heeft te veel pepernoten gegeten', 'Hij schaamt zich een beetje, want het gedicht gaat over de doos die hij zelf weggooide'], goed: 3, uitleg: 'Verbind twee gebeurtenissen: vader bracht de doos naar de papierbak, en het gedicht gaat over een pakje dat bijna bij het oud papier belandde. Iedereen lacht erom, en vader weet dat het over hem gaat. Een rood hoofd hoort hier bij schaamte.' }
      ]
    },
    kort: [
      {
        titel: 'Pakketpunt Boekhandel Van Dam', soort: 'Openingstijden',
        tekst: [
          'Pakketpunt Boekhandel Van Dam – openingstijden in december',
          'maandag: 13.00 – 18.00 uur',
          'dinsdag tot en met vrijdag: 9.00 – 18.00 uur',
          'zaterdag: 9.00 – 17.00 uur',
          'zondag: gesloten',
          'Let op: op zaterdag 5 december zijn we open tot 14.00 uur.',
          'Neem bij het ophalen je ophaalcode mee. Een pakket blijft 7 dagen liggen; daarna gaat het terug naar de afzender.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Hoe laat gaat het pakketpunt op een gewone maandag open?', opties: ['13.00 uur', '9.00 uur', '14.00 uur', '18.00 uur'], goed: 0, uitleg: 'Zoek de regel met "maandag". Daar staat 13.00 – 18.00 uur. Op maandagochtend ben je dus te vroeg.' },
          { vaardigheid: 'Conclusie', vraag: 'Sinds donderdag 3 december ligt er een pakket voor Noor. Ze wil het op zaterdag 5 december om 15.00 uur ophalen. Wat gaat er mis?', opties: ['Er gaat niets mis, want op zaterdag is het open tot 17.00 uur', 'Het pakket is dan al teruggestuurd naar de afzender', 'Het pakketpunt is die dag om 14.00 uur al dicht', 'Op zaterdag is het pakketpunt altijd gesloten'], goed: 2, uitleg: 'Lees ook de regel onder het rooster. Normaal is het op zaterdag tot 17.00 uur open, maar op 5 december maar tot 14.00 uur. Het pakket ligt pas twee dagen, dus het is nog niet teruggestuurd.' }
        ]
      },
      {
        titel: 'Appje van mama', soort: 'Bericht',
        tekst: [
          'Hoi Sem! Ik ben nog bij oma. Wil jij om half zes de oven aanzetten op 180 graden? De ovenschotel staat in de koelkast, op de bovenste plank. Hij moet een uur in de oven. Papa is pas om zes uur thuis en we eten om half zeven. Dikke kus, mama'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Waar staat de ovenschotel?', opties: ['Al in de oven', 'Op het aanrecht', 'Bij oma', 'Op de bovenste plank van de koelkast'], goed: 3, uitleg: 'Zoek het woord "ovenschotel" en lees de zin precies: "De ovenschotel staat in de koelkast, op de bovenste plank."' },
          { vaardigheid: 'Tussen de regels', vraag: 'Waarom vraagt mama dit aan Sem en niet aan papa?', opties: ['Papa kan niet met de oven omgaan', 'Sem heeft zelf om de ovenschotel gevraagd', 'Als papa er om zes uur aan begint, is het eten om half zeven nog niet klaar', 'Papa eet die avond niet mee'], goed: 2, uitleg: 'Mama zegt het niet letterlijk, maar je kunt het uitrekenen. De schotel moet een uur in de oven en ze eten om half zeven. Papa komt pas om zes uur thuis: dan zou het eten pas om zeven uur klaar zijn.' }
        ]
      }
    ]
  },
  // Dag 48: Plastic in de zee
  {
    hardop: {
      titel: 'Plastic in de zee', soort: 'Informatief', emoji: '🌊',
      alineas: [
        'Een plastic flesje dat in zee belandt, verdwijnt niet zomaar. Waar een appelklokhuis binnen een paar maanden door bacteriën wordt afgebroken, doet plastic daar honderden jaren over. Bovendien valt het niet echt uit elkaar, maar brokkelt het af in steeds kleinere stukjes. Die piepkleine deeltjes, kleiner dan vijf millimeter, heten microplastics.',
        'Hoe komt al dat plastic in zee? Een deel wordt op het strand achtergelaten of valt van schepen, maar het grootste deel komt van het land. Afval dat op straat waait, belandt in sloten en rivieren en drijft zo naar de kust. Zeestromingen voeren het daarna mee, soms duizenden kilometers ver. In het noorden van de Grote Oceaan heeft zich zo een enorme vlek van drijvend afval gevormd: de plasticsoep.',
        'Voor dieren is dat afval levensgevaarlijk. Zeeschildpadden zien een drijvend plastic tasje gemakkelijk aan voor een kwal, een van hun favoriete prooien. Vogels vullen hun maag met plastic stukjes en voelen zich verzadigd, terwijl ze eigenlijk verhongeren. Onderzoekers vonden bij ongeveer negen van de tien dode stormvogels op de Nederlandse kust plastic in de maag.',
        'Er wordt gelukkig hard gewerkt aan oplossingen. De Nederlander Boyan Slat bedacht als tiener een manier om drijvend afval uit de oceaan te vissen. Toch zeggen veel deskundigen dat opruimen alleen niet genoeg is. Het belangrijkste is dat er minder plastic in zee terechtkomt. Daar kan iedereen aan bijdragen: door minder wegwerpplastic te gebruiken en afval altijd in de bak te gooien.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Wat zijn microplastics?', opties: ['Piepkleine stukjes plastic, kleiner dan vijf millimeter', 'Plastic flesjes die op het strand liggen', 'Plastic dat door bacteriën is afgebroken', 'Vissen die plastic hebben gegeten'], goed: 0, uitleg: 'Het woord staat aan het eind van alinea 1, en de uitleg staat er vlak voor: "Die piepkleine deeltjes, kleiner dan vijf millimeter, heten microplastics."' },
        { vaardigheid: 'Signaalwoord', vraag: '"Bovendien valt het niet echt uit elkaar..." Wat doet het woord "Bovendien" hier?', opties: ['Het geeft een tegenstelling aan', 'Het voegt nog een probleem toe aan wat er al gezegd is', 'Het kondigt een voorbeeld aan', 'Het kondigt een conclusie aan'], goed: 1, uitleg: '"Bovendien" betekent "en daarbij ook nog". Eerst lees je dat plastic heel langzaam wordt afgebroken, en daar komt nog een tweede probleem bij: het brokkelt af in kleine stukjes.' },
        { vaardigheid: 'Verband', vraag: 'Waarom verhongeren vogels die plastic eten?', opties: ['Hun maag zit vol plastic, waardoor ze geen honger voelen en te weinig echt voedsel eten', 'Het plastic is giftig', 'Ze vinden in zee geen vis meer', 'Ze raken verstrikt in plastic tasjes'], goed: 0, uitleg: 'Lees de zin precies: ze "voelen zich verzadigd, terwijl ze eigenlijk verhongeren". Verzadigd betekent dat je vol zit. Het woordje "terwijl" laat de tegenstelling zien: vol gevoel, maar geen echt voedsel.' },
        { vaardigheid: 'Bedoeling', vraag: 'Waarom noemt de schrijver in alinea 1 het appelklokhuis?', opties: ['Om te laten zien hoe gezond appels zijn', 'Om door een vergelijking duidelijk te maken hoe langzaam plastic wordt afgebroken', 'Om uit te leggen dat je klokhuizen niet in zee mag gooien', 'Om te laten zien dat bacteriën gevaarlijk zijn'], goed: 1, uitleg: 'Het klokhuis is een voorbeeld om mee te vergelijken. Een paar maanden tegenover honderden jaren: zo voel je hoe groot het verschil is. De zin "Waar een appelklokhuis ..., doet plastic daar honderden jaren over" zet de twee naast elkaar.' },
        { vaardigheid: 'Feit of mening', vraag: 'Welke zin uit de tekst is een mening en geen feit?', opties: ['Onderzoekers vonden bij ongeveer negen van de tien dode stormvogels plastic in de maag.', 'Zeestromingen voeren het daarna mee, soms duizenden kilometers ver.', 'Het belangrijkste is dat er minder plastic in zee terechtkomt.', 'Boyan Slat bedacht als tiener een manier om drijvend afval uit de oceaan te vissen.'], goed: 2, uitleg: 'Een feit kun je controleren: tellen, meten, opzoeken. Een mening is wat iemand ervan vindt. Of iets "het belangrijkste" is, kun je niet meten; daar kunnen mensen verschillend over denken.' },
        { vaardigheid: 'Eigen kennis', vraag: 'Welke actie past het best bij de oplossing waar de tekst mee eindigt?', opties: ['Vaker naar het strand gaan', 'Plastic afval op het strand verbranden', 'Meer vis eten', 'Een navulbare drinkfles meenemen in plaats van steeds een plastic flesje te kopen'], goed: 3, uitleg: 'Het slot zegt: zorg dat er minder plastic in zee komt, bijvoorbeeld door minder wegwerpplastic te gebruiken. Een navulbare fles is een voorbeeld uit je eigen leven dat daarbij past.' }
      ]
    },
    kort: [
      {
        titel: 'Grote Strandschoonmaak', soort: 'Poster',
        tekst: [
          'Doe mee met de Grote Strandschoonmaak!',
          'Zaterdag 12 december, 10.00 – 12.30 uur',
          'Verzamelen bij strandpaviljoen De Zeemeeuw',
          'Handschoenen en vuilniszakken krijg je van ons.',
          'Neem zelf mee: warme kleren en laarzen.',
          'Kinderen onder de 12 jaar komen samen met een volwassene.',
          'Na afloop: gratis warme chocolademelk!',
          'Aanmelden is niet nodig.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat hoef je NIET zelf mee te nemen?', opties: ['Warme kleren', 'Handschoenen', 'Laarzen', 'Een volwassene, als je 10 jaar bent'], goed: 1, uitleg: 'Lees vragen met NIET extra goed. Op de poster staat: "Handschoenen en vuilniszakken krijg je van ons." Die hoef je dus niet mee te nemen.' },
          { vaardigheid: 'Tekstdoel', vraag: 'Wat is het belangrijkste doel van deze poster?', opties: ['Mensen overhalen om mee te helpen het strand op te ruimen', 'Uitleggen hoe lang plastic in zee blijft', 'Reclame maken voor warme chocolademelk', 'Uitleggen hoe je een vuilniszak gebruikt'], goed: 0, uitleg: 'Een poster met een uitroep als "Doe mee!" wil dat jij iets gaat doen. De chocolademelk is een lokkertje, maar niet het doel.' }
        ]
      },
      {
        titel: 'Hoe lang blijft afval in zee?', soort: 'Tabel',
        tekst: [
          'Afval | Materiaal | Ongeveer zo lang duurt het tot het vergaan is',
          'krant | papier | 6 weken',
          'appelklokhuis | plantaardig | 2 maanden',
          'conservenblik | metaal | 50 jaar',
          'plastic flesje | plastic | 450 jaar',
          'visdraad | plastic | 600 jaar',
          'Dit zijn schattingen: de precieze tijd hangt af van het water, het licht en de temperatuur.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Welk afval uit de tabel vergaat het snelst?', opties: ['Het appelklokhuis', 'Het conservenblik', 'De visdraad', 'De krant'], goed: 3, uitleg: 'Vergelijk de getallen in de laatste kolom. Let op de eenheden: 6 weken is korter dan 2 maanden.' },
          { vaardigheid: 'Conclusie', vraag: 'Een plastic flesje en een conservenblik komen op dezelfde dag in zee. Hoeveel jaar ligt het flesje er ongeveer nog als het blik al vergaan is?', opties: ['50 jaar', '450 jaar', '400 jaar', '500 jaar'], goed: 2, uitleg: 'Je hebt twee rijen nodig. Het blik is na 50 jaar vergaan, het flesje na 450 jaar. Het verschil is 450 − 50 = 400 jaar.' }
        ]
      }
    ]
  },
  // Dag 49: Elke dag een uur gym op school
  {
    hardop: {
      titel: 'Elke dag een uur gym op school', soort: 'Betoog', emoji: '🤸',
      alineas: [
        'Volgens de Gezondheidsraad moeten kinderen elke dag minstens een uur bewegen. Toch haalt maar ongeveer de helft van de Nederlandse kinderen dat. Op de meeste basisscholen krijgen leerlingen twee gymlessen per week, en de rest van de dag zitten ze stil achter hun tafeltje. Ik vind dat dat anders moet: elke school zou elke dag een uur gym moeten geven.',
        'Mijn eerste argument is dat bewegen goed is voor je lichaam. Wie veel beweegt, krijgt sterkere spieren en botten en heeft minder kans op overgewicht. Bovendien slaap je beter als je overdag lekker moe bent geworden.',
        'Een tweede argument is minder bekend: bewegen helpt ook je hoofd. Na een halfuur rennen of springen kunnen kinderen zich vaak beter concentreren. Een uur gym gaat dus niet ten koste van rekenen of taal, maar maakt die lessen juist beter. Sommige mensen zeggen dat er geen tijd is voor nog meer gym, omdat het lesprogramma al zo vol zit. Dat begrijp ik, maar wat heb je aan een vol programma als de helft van de klas zit te suffen?',
        'Natuurlijk kost het geld: scholen hebben meer gymleraren en gymzalen nodig. Maar gezonde, fitte kinderen zijn een investering die zich later dubbel en dwars terugbetaalt. Laten we daarom niet langer wachten. Eén uur per dag: dat is toch niet te veel gevraagd?'
      ],
      vragen: [
        { vaardigheid: 'Standpunt', vraag: 'Wat vindt de schrijver?', opties: ['Kinderen zouden minder huiswerk moeten krijgen', 'Gymleraren zouden meer moeten verdienen', 'Elke school zou elke dag een uur gym moeten geven', 'Kinderen zouden na school op een sportclub moeten gaan'], goed: 2, uitleg: 'Het standpunt staat vaak aan het eind van de eerste alinea, na woorden als "Ik vind dat". Hier: "elke school zou elke dag een uur gym moeten geven".' },
        { vaardigheid: 'Signaalwoord', vraag: 'Welke woorden laten zien dat er in alinea 2 en 3 telkens een nieuw argument begint?', opties: ['"Mijn eerste argument" en "Een tweede argument"', '"Volgens" en "Toch"', '"Natuurlijk" en "Maar"', '"Laten we" en "daarom"'], goed: 0, uitleg: 'In een betoog helpen signaalwoorden je de argumenten te vinden. Woorden als "eerste" en "tweede" geven een opsomming aan: hier komt argument 1, hier komt argument 2.' },
        { vaardigheid: 'Woordbetekenis', vraag: '"Een uur gym gaat dus niet ten koste van rekenen of taal." Wat betekent "ten koste van"?', opties: ['Dankzij', 'Voor een lagere prijs dan', 'Samen met', 'Zo dat er minder van overblijft'], goed: 3, uitleg: 'Lees de hele zin: de schrijver zegt dat gym rekenen en taal níét slechter maakt, maar juist beter. "Ten koste van iets gaan" betekent dus dat iets anders erdoor minder wordt. Het heeft hier niets met geld te maken.' },
        { vaardigheid: 'Standpunt en argument', vraag: 'Welke zin is een argument voor het standpunt van de schrijver?', opties: ['Elke school zou elke dag een uur gym moeten geven.', 'Wie veel beweegt, krijgt sterkere spieren en botten.', 'Laten we daarom niet langer wachten.', 'Eén uur per dag: dat is toch niet te veel gevraagd?'], goed: 1, uitleg: 'Een standpunt is wat de schrijver vindt; een argument is een reden waarom. "Elke school zou ... moeten" is het standpunt zelf. De laatste twee zinnen zijn een oproep aan de lezer. Alleen de zin over spieren en botten geeft een reden.' },
        { vaardigheid: 'Bedoeling', vraag: 'In alinea 3 schrijft de schrijver: "Sommige mensen zeggen dat er geen tijd is voor nog meer gym." Waarom noemt hij dat?', opties: ['Omdat hij het met die mensen eens is', 'Om een tegenargument te noemen en er meteen op te reageren', 'Om te laten zien dat gym eigenlijk saai is', 'Om uit te leggen hoe het lesprogramma eruitziet'], goed: 1, uitleg: 'Een sterk betoog noemt ook wat tegenstanders vinden, en laat dan zien waarom dat niet klopt. Direct erna komt "Dat begrijp ik, maar ...": met dat "maar" reageert de schrijver op het tegenargument.' },
        { vaardigheid: 'Beeldspraak', vraag: '"... een investering die zich later dubbel en dwars terugbetaalt." Wat bedoelt de schrijver?', opties: ['Dat kinderen het geld later zelf moeten terugbetalen', 'Dat het twee keer zo duur wordt', 'Dat de school het geld van de ouders terugkrijgt', 'Dat het later veel meer oplevert dan het nu kost'], goed: 3, uitleg: '"Dubbel en dwars" betekent "ruimschoots, meer dan genoeg". De schrijver bedoelt het niet letterlijk met geld: gezonde kinderen leveren later zoveel op dat de kosten het meer dan waard zijn.' }
      ]
    },
    kort: [
      {
        titel: 'Rooster gymzaal De Horst', soort: 'Rooster',
        tekst: [
          'Rooster gymzaal De Horst – alle gymlessen duren 45 minuten',
          'maandag: 8.30 groep 5 | 9.15 groep 6 | 10.15 groep 7 | 11.00 groep 8',
          'donderdag: 8.30 groep 3 | 9.15 groep 4 | 10.15 groep 8 | 11.00 groep 7',
          'Na 15.00 uur wordt de zaal verhuurd aan sportclubs.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Welke groep heeft op maandag om 9.15 uur gym?', opties: ['Groep 6', 'Groep 4', 'Groep 5', 'Groep 7'], goed: 0, uitleg: 'Zoek eerst de goede dag (maandag) en lees dan op die regel naar het tijdstip 9.15. Op donderdag is dat groep 4, maar dat is de verkeerde dag.' },
          { vaardigheid: 'Conclusie', vraag: 'Hoe laat is de gymles van groep 7 op donderdag afgelopen?', opties: ['11.00 uur', '10.15 uur', '11.45 uur', '12.00 uur'], goed: 2, uitleg: 'Combineer twee gegevens. Op donderdag begint groep 7 om 11.00 uur, en bovenaan staat dat elke les 45 minuten duurt. 11.00 + 45 minuten = 11.45 uur.' }
        ]
      },
      {
        titel: 'Gratis proeflessen bij Turnclub Salto', soort: 'Advertentie',
        tekst: [
          'Gratis proeflessen in december!',
          'Turnen voor kinderen van 8 tot en met 12 jaar: donderdag 15.30 – 16.30 uur in gymzaal De Horst.',
          'Freerunning vanaf 11 jaar: vrijdag 16.00 – 17.30 uur in sporthal De Brink.',
          'Neem sportkleding mee. Turnen doe je op blote voeten.',
          'Aanmelden via de website van Turnclub Salto.'
        ],
        vragen: [
          { vaardigheid: 'Twee teksten', vraag: 'Lotte (10) zit in groep 7. Ze gaat op donderdag naar gym en daarna naar de proefles turnen. Wat klopt? Gebruik beide teksten.', opties: ['Ze moet voor de proefles naar sporthal De Brink', 'Haar proefles is op donderdagochtend', 'Ze is te jong voor de proefles turnen', 'Ze is die dag twee keer in dezelfde gymzaal'], goed: 3, uitleg: 'Leg de twee teksten naast elkaar. Volgens het rooster heeft groep 7 op donderdag gym in De Horst. Volgens de advertentie is turnen op donderdag ook in gymzaal De Horst. Lotte is 10, dus ze mag meedoen.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat moet je bij de proefles turnen doen?', opties: ['Turnschoenen meenemen', 'Geld voor de les meenemen', 'Op blote voeten turnen', 'Je bij de ingang aanmelden'], goed: 2, uitleg: 'Zoek het woord "turnen" in de advertentie. Er staat: "Turnen doe je op blote voeten." Aanmelden gaat via de website en de proefles is gratis.' }
        ]
      }
    ]
  },
  // Dag 50: De ontdekking van penicilline
  {
    hardop: {
      titel: 'De ontdekking van penicilline', soort: 'Informatief', emoji: '🧫',
      alineas: [
        'In september 1928 kwam de Schotse onderzoeker Alexander Fleming terug van vakantie in zijn rommelige laboratorium in Londen. Voordat hij wegging, had hij een stapel glazen schaaltjes laten staan waarin hij bacteriën kweekte. Toen hij ze wilde schoonmaken, zag hij iets vreemds. Op één schaaltje was een schimmel gegroeid, en rondom die schimmel waren de bacteriën verdwenen.',
        'Fleming begreep dat de schimmel een stof moest maken die bacteriën doodde. Hij noemde die stof penicilline, naar de naam van de schimmel: Penicillium. Toch duurde het nog meer dan tien jaar voordat er een medicijn van kwam. Het lukte Fleming namelijk niet om genoeg zuivere penicilline te maken.',
        'Pas rond 1940 slaagden twee andere onderzoekers in Oxford, Howard Florey en Ernst Chain, daarin. Tijdens de Tweede Wereldoorlog werd het medicijn in fabrieken op grote schaal gemaakt. Zo werden duizenden gewonde soldaten gered die anders aan een ontstoken wond zouden zijn overleden. In 1945 kregen Fleming, Florey en Chain samen de Nobelprijs.',
        'Penicilline was het eerste antibioticum: een medicijn tegen bacteriën. Tegen virussen, zoals het griepvirus, helpt het niet. Artsen zijn tegenwoordig voorzichtig met antibiotica. Als ze te vaak worden gebruikt, kunnen bacteriën er ongevoelig voor worden. Een rommelig laboratorium en een vergeten schaaltje hebben de geneeskunde dus voorgoed veranderd, maar we moeten zuinig zijn op die ontdekking.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Wat zag Fleming op het schaaltje?', opties: ['Rond een schimmel waren de bacteriën verdwenen', 'De bacteriën groeiden juist heel snel', 'Het schaaltje was gebroken', 'Er zat een griepvirus op'], goed: 0, uitleg: 'Het antwoord staat aan het eind van alinea 1: "rondom die schimmel waren de bacteriën verdwenen". Lees zulke zinnen precies, dan val je niet voor een antwoord dat bijna klopt.' },
        { vaardigheid: 'Verwijswoord', vraag: '"Pas rond 1940 slaagden twee andere onderzoekers in Oxford ... daarin." Waarin slaagden zij?', opties: ['In het ontdekken van de schimmel', 'In het maken van genoeg zuivere penicilline', 'In het winnen van de Nobelprijs', 'In het opruimen van het laboratorium'], goed: 1, uitleg: '"Daarin" verwijst terug naar iets wat net genoemd is. De laatste zin van alinea 2 zegt dat het Fleming niet lukte om genoeg zuivere penicilline te maken. Dat lukte Florey en Chain wel.' },
        { vaardigheid: 'Eigen kennis', vraag: 'Je bent verkouden. Een verkoudheid komt door een virus. Helpt penicilline dan?', opties: ['Nee, want penicilline werkt tegen bacteriën en niet tegen virussen', 'Ja, want penicilline helpt tegen alle ziektes', 'Ja, als je het maar lang genoeg gebruikt', 'Nee, want penicilline wordt niet meer gemaakt'], goed: 0, uitleg: 'Combineer de tekst met wat je weet. In alinea 4 staat dat penicilline tegen bacteriën werkt en niet tegen virussen. Weet je dat een verkoudheid door een virus komt, dan weet je het antwoord.' },
        { vaardigheid: 'Tekststructuur', vraag: 'Hoe is deze tekst vooral geordend?', opties: ['Als een vergelijking tussen bacteriën en virussen', 'In de volgorde van de tijd: van de ontdekking tot nu', 'Als een betoog met argumenten voor en tegen', 'Als een stappenplan om een medicijn te maken'], goed: 1, uitleg: 'Kijk naar de tijdsaanduidingen: 1928, meer dan tien jaar later, rond 1940, de Tweede Wereldoorlog, 1945, tegenwoordig. De schrijver vertelt de gebeurtenissen in de volgorde waarin ze gebeurden.' },
        { vaardigheid: 'Conclusie', vraag: 'Wat zou er waarschijnlijk zijn gebeurd als Fleming zijn schaaltjes vóór zijn vakantie had schoongemaakt?', opties: ['Dan was de schimmel juist sneller gegroeid', 'Dan had hij eerder genoeg zuivere penicilline kunnen maken', 'Dan had hij de werking van de schimmel toen waarschijnlijk niet ontdekt', 'Dan was de Tweede Wereldoorlog eerder afgelopen'], goed: 2, uitleg: 'Dit staat niet in de tekst; je redeneert vanuit oorzaak en gevolg. De ontdekking kwam doordat de schaaltjes bleven staan en er een schimmel op groeide. Zonder die rommel geen schimmel op dat schaaltje, en dus ook geen ontdekking op dat moment.' },
        { vaardigheid: 'Hoofdgedachte', vraag: 'Wat is de hoofdgedachte van de tekst?', opties: ['Fleming was een slordige onderzoeker', 'In de Tweede Wereldoorlog raakten veel soldaten gewond', 'Florey en Chain verdienden de Nobelprijs meer dan Fleming', 'Een toevallige ontdekking leidde tot het eerste antibioticum, dat veel levens redde en waar we zuinig op moeten zijn'], goed: 3, uitleg: 'De hoofdgedachte vat de hele tekst samen. De slordigheid en de soldaten zijn details. Over wie de prijs het meest verdiende, zegt de tekst niets.' }
      ]
    },
    kort: [
      {
        titel: 'Hoestsiroop Tijm & Honing', soort: 'Gebruiksaanwijzing',
        tekst: [
          'Gebruiksaanwijzing Hoestsiroop Tijm & Honing',
          'Leeftijd | per keer | hoe vaak per dag',
          '2 tot en met 5 jaar | 2,5 ml | 3 keer',
          '6 tot en met 11 jaar | 5 ml | 3 keer',
          '12 jaar en ouder | 10 ml | 3 tot 4 keer',
          'Gebruik altijd het maatbekertje. Niet geven aan kinderen jonger dan 1 jaar, vanwege de honing.',
          'Hoest je na een week nog steeds? Ga dan naar de huisarts.'
        ],
        vragen: [
          { vaardigheid: 'Conclusie', vraag: 'Daan is 9 jaar. Hoeveel ml siroop mag hij op één dag in totaal nemen?', opties: ['5 ml', '15 ml', '10 ml', '20 ml'], goed: 1, uitleg: 'Zoek de rij die bij 9 jaar past: 6 tot en met 11 jaar. Daar staat 5 ml per keer, 3 keer per dag. 3 × 5 ml = 15 ml.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Waarom mag een baby van 8 maanden deze siroop niet krijgen?', opties: ['Omdat er honing in zit', 'Omdat er tijm in zit', 'Omdat het maatbekertje te groot is', 'Omdat baby\'s niet hoesten'], goed: 0, uitleg: 'Een baby van 8 maanden is jonger dan 1 jaar. In de tekst staat: "Niet geven aan kinderen jonger dan 1 jaar, vanwege de honing."' }
        ]
      },
      {
        titel: 'Jonge Onderzoekersclub in de bieb', soort: 'Nieuwsbericht',
        tekst: [
          'Bibliotheek De Wissel start in januari een Jonge Onderzoekersclub. Elke woensdagmiddag van 14.00 tot 15.30 uur onderzoeken kinderen van 9 tot en met 13 jaar van alles onder de microscoop: van slootwater tot schimmel op brood. "Kinderen zijn van nature nieuwsgierig," zegt bibliothecaris Joyce Kramer. "Hier mogen ze vragen stellen waar ook wij het antwoord nog niet op weten." De club is gratis voor leden van de bibliotheek. Wie geen lid is, betaalt € 3 per keer.'
        ],
        vragen: [
          { vaardigheid: 'Bedoeling', vraag: 'Joyce Kramer zegt: "Hier mogen ze vragen stellen waar ook wij het antwoord nog niet op weten." Wat bedoelt ze?', opties: ['De medewerkers van de bibliotheek weten niet veel', 'Kinderen mogen bij de club geen vragen stellen', 'De club is alleen voor kinderen die alles al weten', 'Bij de club mogen kinderen echt zelf onderzoeken en dingen ontdekken'], goed: 3, uitleg: 'Lees de uitspraak in samenhang met de zin ervoor: kinderen zijn nieuwsgierig. Bij echt onderzoek weet je het antwoord nog niet van tevoren. Joyce bedoelt dus dat de kinderen samen dingen gaan uitzoeken, niet dat de medewerkers dom zijn.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Voor wie is de club gratis?', opties: ['Voor alle kinderen van 9 tot en met 13 jaar', 'Voor kinderen die een eigen microscoop hebben', 'Voor leden van de bibliotheek', 'Voor iedereen die op woensdag kan'], goed: 2, uitleg: 'Zoek het woord "gratis". Daar staat: "De club is gratis voor leden van de bibliotheek." Wie geen lid is, betaalt € 3 per keer.' }
        ]
      }
    ]
  },
  // Dag 51: De stille jongen in groep 8
  {
    hardop: {
      titel: 'De stille jongen in groep 8', soort: 'Verhalend', emoji: '✏️',
      alineas: [
        'Bram zat al sinds groep 3 bij ons in de klas, maar ik kon me niet herinneren dat ik ooit een echt gesprek met hem had gevoerd. Hij zat altijd achterin bij het raam, met zijn capuchon half over zijn hoofd. Als de juf hem iets vroeg, antwoordde hij zo zacht dat ze het twee keer moest vragen. "Die is gewoon saai," zei mijn vriendin Romy eens. Ik had nooit de moeite genomen om te bedenken of dat klopte.',
        'Toen de juf in december de groepjes voor de kerstmusical indeelde, kwam ik bij Bram terecht. We moesten samen het decor ontwerpen. Ik zuchtte diep. Dit werd vast een lange middag waarin ik alles alleen moest doen. Bram zei niets, pakte een potlood en boog zich over een groot vel papier.',
        'Na een kwartier keek ik over zijn schouder en hield ik mijn adem in. Op het papier stond een complete stad: smalle grachtenhuizen, een brug met lantaarns, zelfs een kat die over een dakgoot sloop. Alles klopte tot in de kleinste details. "Heb jij dit gemaakt?" vroeg ik. Bram haalde zijn schouders op. "Ik teken elke dag," mompelde hij. "Thuis heb ik wel twintig schetsboeken."',
        'Die middag praatten we meer dan in al die jaren daarvoor samen. Hij vertelde over de strips die hij maakte en over zijn droom om later tekenfilms te maken. Bij de uitvoering kreeg het decor een daverend applaus. Romy stootte me aan. "Wie heeft dat getekend?" Ik wees naar achteren, naar de jongen met de capuchon. "Bram," zei ik. "En saai is hij echt niet."'
      ],
      vragen: [
        { vaardigheid: 'Personage', vraag: 'Waarom zucht de verteller als het groepje bekend is?', opties: ['De verteller is moe van de schooldag', 'De verteller kan zelf niet tekenen', 'De verteller denkt al het werk alleen te moeten doen', 'De verteller wil niet meedoen aan de musical'], goed: 2, uitleg: 'Lees de zin die direct na het zuchten komt: "Dit werd vast een lange middag waarin ik alles alleen moest doen." Daar staat de reden.' },
        { vaardigheid: 'Beeldspraak', vraag: '"Na een kwartier keek ik over zijn schouder en hield ik mijn adem in." Wat laat dat zien?', opties: ['De verteller is erg onder de indruk van de tekening', 'De verteller heeft het koud', 'De verteller is boos op Bram', 'De verteller moet bijna hoesten'], goed: 0, uitleg: 'Je houdt je adem in als je iets heel spannends of bijzonders ziet. Meteen daarna beschrijft de verteller de prachtige tekening. Zo laat de schrijver zien wat de verteller voelt, zonder het woord "verbaasd" te gebruiken.' },
        { vaardigheid: 'Informatie zoeken', vraag: 'Waar droomt Bram van?', opties: ['Meespelen in de musical', 'Juf of meester worden', 'Grachtenhuizen bouwen', 'Later tekenfilms maken'], goed: 3, uitleg: 'Zoek naar het woord "droom" in alinea 4: "zijn droom om later tekenfilms te maken". De grachtenhuizen staan op zijn tekening; dat zijn geen echte huizen die hij wil bouwen.' },
        { vaardigheid: 'Ontwikkeling', vraag: 'Hoe verandert de mening van de verteller over Bram?', opties: ['Eerst vindt de verteller Bram aardig, later saai', 'Eerst neemt de verteller aan dat Bram saai is, later ontdekt de verteller dat hij bijzonder is', 'De verteller vindt Bram het hele verhaal saai', 'Eerst is de verteller bang voor Bram, later niet meer'], goed: 1, uitleg: 'Vergelijk het begin met het eind. In alinea 1 had de verteller nooit nagedacht of Bram saai was. In de laatste zin zegt de verteller zelf: "En saai is hij echt niet." Daartussen zit de ontdekking van de tekening.' },
        { vaardigheid: 'Personage', vraag: 'Welke omschrijving past het best bij Bram?', opties: ['Brutaal en grappig', 'Verlegen, maar heel getalenteerd', 'Lui en ongeïnteresseerd', 'Stoer en luidruchtig'], goed: 1, uitleg: 'Kijk naar wat Bram doet en zegt. Hij praat zacht, mompelt en draagt zijn capuchon: verlegen. Maar hij tekent een complete stad tot in de kleinste details: getalenteerd. Lui is hij niet, want hij tekent elke dag.' },
        { vaardigheid: 'Thema', vraag: 'Welke les zit er in dit verhaal?', opties: ['Je moet altijd luisteren naar wat je vrienden zeggen', 'Tekenen is belangrijker dan rekenen', 'Stille kinderen willen liever niet praten', 'Je kunt iemand pas echt beoordelen als je hem de kans geeft en hem leert kennen'], goed: 3, uitleg: 'Een les of thema staat niet letterlijk in een verhaal; je haalt het uit wat er gebeurt. Romy en de verteller vonden Bram saai zonder hem te kennen. Pas toen ze samenwerkten, bleek hoe bijzonder hij is.' }
      ]
    },
    kort: [
      {
        titel: 'Kerstmusical "De stad van licht"', soort: 'Programma',
        tekst: [
          'Kerstmusical "De stad van licht" – groep 8 van De Regenboog',
          'woensdag 16 december, 10.30 uur: voorstelling voor groep 1 tot en met 4',
          'woensdag 16 december, 13.30 uur: voorstelling voor groep 5 tot en met 7',
          'donderdag 17 december, 19.00 uur: voorstelling voor ouders en familie (zaal open om 18.30 uur)',
          'Kaarten voor de avondvoorstelling: € 2,50 per persoon. Kinderen tot 4 jaar gratis. Per gezin maximaal 4 kaarten.',
          'De opbrengst gaat naar de voedselbank.'
        ],
        vragen: [
          { vaardigheid: 'Conclusie', vraag: 'Bram krijgt bezoek van zijn vader, moeder, oma en zusje van 3 jaar. Hoeveel betalen ze samen voor de kaarten?', opties: ['€ 7,50', '€ 10,00', '€ 2,50', '€ 5,00'], goed: 0, uitleg: 'Tel eerst hoeveel mensen moeten betalen. Het zusje is 3, dus gratis. Vader, moeder en oma betalen: 3 × € 2,50 = € 7,50. Met 4 kaarten blijven ze ook binnen het maximum.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Hoe laat gaat de zaal donderdagavond open?', opties: ['19.00 uur', '13.30 uur', '18.30 uur', '18.00 uur'], goed: 2, uitleg: 'Kijk bij donderdag. Er staan twee tijden: de voorstelling begint om 19.00 uur, en tussen haakjes staat dat de zaal om 18.30 uur opengaat.' }
        ]
      },
      {
        titel: 'Wie helpt met het decor?', soort: 'Bericht',
        tekst: [
          'Hoi allemaal! Wie kan zaterdag helpen met het verven van het decor? We beginnen om 10.00 uur in het speellokaal. Trek oude kleren aan, want verf gaat er niet meer uit! Bram neemt zijn schetsen mee, dan weten we precies wat we moeten schilderen. Laat het even weten met een duimpje, dan weet ik hoeveel kwasten ik moet halen. Groetjes, Romy'
        ],
        vragen: [
          { vaardigheid: 'Signaalwoord', vraag: '"Trek oude kleren aan, want verf gaat er niet meer uit!" Wat geeft het woord "want" hier aan?', opties: ['Een tegenstelling', 'Een voorbeeld', 'Een tijd', 'Een reden'], goed: 3, uitleg: '"Want" kondigt een reden aan: waaróm moet je oude kleren aan? Omdat de verf er niet meer uitgaat.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Waarom vraagt Romy om een duimpje?', opties: ['Zodat Bram zijn schetsen meeneemt', 'Omdat het speellokaal anders dicht is', 'Zodat ze weet hoeveel kwasten ze moet halen', 'Omdat ze wil weten wie oude kleren heeft'], goed: 2, uitleg: 'Zoek het woord "duimpje" en lees de zin af: "dan weet ik hoeveel kwasten ik moet halen".' }
        ]
      }
    ]
  },
  // Dag 52: Kinderen maken een schoolkrant
  {
    hardop: {
      titel: 'Kinderen maken een schoolkrant', soort: 'Nieuws', emoji: '📰',
      alineas: [
        'DEVENTER – Op basisschool De Klimop is deze week het eerste nummer van De Klimkrant verschenen. De krant van twaalf pagina\'s is helemaal gemaakt door leerlingen van groep 7 en 8. Vrijdag lag hij op de deurmat van ruim tweehonderd gezinnen.',
        'Het idee kwam van leerling Noah Bakker (11). "Mijn opa was vroeger journalist," vertelt hij. "Hij liet me oude kranten zien en ik dacht: dat kunnen wij ook." Juf Marieke Smit was meteen enthousiast. "Kinderen leren hier ontzettend veel van," zegt ze. "Ze moeten informatie zoeken, interviews afnemen en hun teksten steeds opnieuw verbeteren."',
        'Een redactie van acht leerlingen besliste welke stukken in de krant kwamen. Er staat onder meer een interview in met de conciërge, die al dertig jaar op de school werkt, een stripverhaal en een test over het schoolplein. Het moeilijkste was volgens Noah het schrappen. "We hadden veel te veel stukken. Sommige klasgenoten waren teleurgesteld dat hun verhaal er niet in kwam."',
        'De eerste reacties zijn lovend. Een moeder schreef dat ze de krant "van voor tot achter" had gelezen. De redactie werkt daarom alweer aan het volgende nummer, dat in maart verschijnt. Wie een tip heeft, kan die in de rode brievenbus naast de gymzaal stoppen.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Van wie kwam het idee voor de schoolkrant?', opties: ['Van Noah Bakker', 'Van juf Marieke Smit', 'Van de conciërge', 'Van de opa van Noah'], goed: 0, uitleg: 'In alinea 2 staat het letterlijk: "Het idee kwam van leerling Noah Bakker." Zijn opa liet hem wel oude kranten zien, maar het idee om zelf een krant te maken was van Noah.' },
        { vaardigheid: 'Inleiding', vraag: 'Op welke vragen geeft de eerste alinea vooral antwoord?', opties: ['Waarom en hoe is de krant gemaakt?', 'Wat is er gebeurd, waar en wanneer?', 'Wat vinden de lezers ervan?', 'Wat staat er precies in de krant?'], goed: 1, uitleg: 'Een nieuwsbericht begint meestal met het belangrijkste: wat er gebeurd is, waar en wanneer. Hier: een eerste schoolkrant (wat), op De Klimop in Deventer (waar), deze week (wanneer). Het hoe en waarom komen later.' },
        { vaardigheid: 'Woordbetekenis', vraag: '"Het moeilijkste was volgens Noah het schrappen." Wat betekent "schrappen" hier?', opties: ['Stukken weglaten', 'Teksten mooi opschrijven', 'Teksten snel lezen', 'De krant uitprinten'], goed: 0, uitleg: 'Kijk naar de zinnen erna: ze hadden "veel te veel stukken" en sommige verhalen kwamen "er niet in". Schrappen betekent dus dat je stukken weglaat.' },
        { vaardigheid: 'Bedoeling', vraag: 'Waarom laat de schrijver juf Marieke Smit aan het woord?', opties: ['Om te laten zien dat de juf de krant heeft geschreven', 'Om uit te leggen waarom een schoolkrant leerzaam is', 'Om te vertellen wanneer het volgende nummer verschijnt', 'Om kritiek op de krant te geven'], goed: 1, uitleg: 'Lees wat de juf zegt: kinderen leren er veel van, en ze noemt wat ze leren. Haar woorden laten dus zien waarom zo\'n krant nuttig is. De krant is door leerlingen gemaakt, niet door de juf.' },
        { vaardigheid: 'Feit of mening', vraag: 'Welke zin is een mening?', opties: ['De krant van twaalf pagina\'s is gemaakt door leerlingen van groep 7 en 8.', 'Het volgende nummer verschijnt in maart.', '"Kinderen leren hier ontzettend veel van."', 'De conciërge werkt al dertig jaar op de school.'], goed: 2, uitleg: 'Een feit kun je nagaan: pagina\'s tellen, op de kalender kijken. Hoeveel kinderen ergens van leren, is wat de juf vindt. Woorden als "ontzettend" zijn vaak een teken van een mening.' },
        { vaardigheid: 'Slot', vraag: 'Waarom eindigt het bericht met de rode brievenbus naast de gymzaal?', opties: ['Om te vertellen waar de gymzaal is', 'Om te laten zien dat de krant per post wordt bezorgd', 'Om te zeggen dat de krant nu af is', 'Om lezers uit te nodigen mee te helpen aan het volgende nummer'], goed: 3, uitleg: 'Het slot kijkt vooruit naar het volgende nummer. Met de brievenbus kunnen lezers tips geven. De schrijver nodigt je dus uit om mee te doen.' }
      ]
    },
    kort: [
      {
        titel: 'Inhoud De Klimkrant', soort: 'Inhoudsopgave',
        tekst: [
          'De Klimkrant – nummer 1 – december',
          'blz. 2   Van de redactie',
          'blz. 3–4   Interview: dertig jaar meester Ton, onze conciërge',
          'blz. 5   Nieuws uit de groepen',
          'blz. 6–7   Test: Hoe goed ken jij ons schoolplein?',
          'blz. 8   Recept: kerstkoekjes van groep 5',
          'blz. 9–10   Strip: De avonturen van Kapitein Krijt',
          'blz. 11   Puzzels en moppen',
          'blz. 12   Agenda en oplossingen'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Op welke bladzijde begint het interview met de conciërge?', opties: ['Bladzijde 2', 'Bladzijde 3', 'Bladzijde 5', 'Bladzijde 9'], goed: 1, uitleg: 'Zoek het woord "Interview" en kijk welk getal ervoor staat: blz. 3–4. Het interview begint dus op bladzijde 3.' },
          { vaardigheid: 'Manier van lezen', vraag: 'Je hebt de puzzel gemaakt en wilt nakijken of je het goed hebt. Welke bladzijde sla je open?', opties: ['Bladzijde 12', 'Bladzijde 11', 'Bladzijde 2', 'Bladzijde 6'], goed: 0, uitleg: 'De puzzels staan op bladzijde 11, maar jij zoekt de antwoorden. Een ander woord voor antwoorden van een puzzel is "oplossingen", en die staan op bladzijde 12.' }
        ]
      },
      {
        titel: 'Kerstkoekjes van groep 5', soort: 'Recept',
        tekst: [
          'Kerstkoekjes (ongeveer 30 stuks)',
          'Nodig: 250 g bloem, 150 g zachte boter, 100 g suiker, 1 ei, een snufje zout en uitsteekvormpjes.',
          '1. Kneed de bloem, boter, suiker, het ei en het zout tot een soepel deeg.',
          '2. Laat het deeg een halfuur rusten in de koelkast.',
          '3. Verwarm de oven voor op 180 °C.',
          '4. Rol het deeg uit tot het een halve centimeter dik is en steek er figuurtjes uit.',
          '5. Bak de koekjes in 12 tot 15 minuten goudbruin.',
          'Tip: prik met een rietje een gaatje in elk koekje vóór het bakken. Dan kun je ze met een lintje in de kerstboom hangen.'
        ],
        vragen: [
          { vaardigheid: 'Conclusie', vraag: 'Je wilt ongeveer 60 koekjes bakken. Hoeveel bloem heb je nodig?', opties: ['250 g', '300 g', '600 g', '500 g'], goed: 3, uitleg: 'Het recept is voor ongeveer 30 koekjes. Voor 60 koekjes heb je twee keer zoveel nodig: 2 × 250 g = 500 g.' },
          { vaardigheid: 'Eigen kennis', vraag: 'Waarom moet je het gaatje vóór het bakken prikken en niet erna?', opties: ['De oven is dan nog niet warm', 'Het lintje smelt anders in de oven', 'Het deeg is dan nog zacht; een gebakken koekje is hard en breekt makkelijk', 'Het rietje past niet in een gebakken koekje'], goed: 2, uitleg: 'Dit staat niet in het recept; je gebruikt wat je zelf weet. Zacht deeg kun je makkelijk doorprikken. Een gebakken koekje is hard en brokkelig: als je daar een gat in prikt, breekt het. Het lintje gaat er pas na het bakken in.' }
        ]
      }
    ]
  },
  // Dag 53: Stroom uit zon en wind
  {
    hardop: {
      titel: 'Stroom uit zon en wind', soort: 'Informatief', emoji: '☀️',
      alineas: [
        'Steeds meer daken in Nederland zijn bedekt met blauwzwarte panelen, en langs de kust en op zee verrijzen enorme windmolens. Ze hebben allebei hetzelfde doel: elektriciteit opwekken zonder steenkool of aardgas te verbranden. Bij het verbranden daarvan komt namelijk koolstofdioxide vrij, een gas dat bijdraagt aan de opwarming van de aarde.',
        'Een zonnepaneel bestaat uit tientallen kleine cellen, meestal gemaakt van silicium. Wanneer er zonlicht op valt, gaan er in die cellen piepkleine deeltjes bewegen: elektronen. Die stroom van elektronen is precies wat we elektriciteit noemen. Een windmolen werkt heel anders. De wind laat de wieken draaien, en die draaiende beweging drijft een generator aan: een soort fietsdynamo, maar dan reusachtig groot.',
        'Er is wel een lastig probleem. \'s Nachts schijnt de zon niet, en op windstille dagen staan de molens stil. Toch willen we ook dan kunnen koken, douchen en onze telefoon opladen. Op zonnige, winderige dagen is er daarentegen soms meer stroom dan iemand nodig heeft. Daarom zoeken onderzoekers naar manieren om stroom op te slaan, bijvoorbeeld in enorme batterijen.',
        'Ook het stroomnet zelf moet worden aangepast. De kabels zijn ooit aangelegd voor een paar grote elektriciteitscentrales, niet voor miljoenen kleine zonnedaken. Op sommige plekken zit het net al vol, zoals een snelweg in de spits. Het zal dus nog jaren duren voordat Nederland al zijn stroom uit zon en wind haalt.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Waarom willen we elektriciteit opwekken zonder steenkool of aardgas?', opties: ['Omdat steenkool en aardgas te duur zijn', 'Omdat steenkool en aardgas al op zijn', 'Omdat er bij het verbranden een gas vrijkomt dat bijdraagt aan de opwarming van de aarde', 'Omdat zonnepanelen mooier zijn'], goed: 2, uitleg: 'Het antwoord staat in de laatste zin van alinea 1. Het woordje "namelijk" laat zien dat daar de reden komt.' },
        { vaardigheid: 'Woordbetekenis', vraag: '"... en langs de kust en op zee verrijzen enorme windmolens." Wat betekent "verrijzen" hier?', opties: ['Gebouwd worden en omhoogkomen', 'Omvallen', 'Snel ronddraaien', 'Afgebroken worden'], goed: 0, uitleg: 'In "verrijzen" zit "rijzen": omhooggaan. De zin gaat over steeds méér zonnepanelen en windmolens. Er komen dus windmolens bij: ze worden gebouwd en steken hoog boven alles uit.' },
        { vaardigheid: 'Beeldspraak', vraag: '"Op sommige plekken zit het net al vol, zoals een snelweg in de spits." Wat bedoelt de schrijver?', opties: ['Stroomkabels liggen vaak langs snelwegen', 'Auto\'s gebruiken heel veel stroom', 'Het stroomnet werkt heel snel', 'Er moet zoveel stroom door de kabels dat het vastloopt, net als verkeer in een file'], goed: 3, uitleg: 'De schrijver vergelijkt het stroomnet met een snelweg. In de spits staat alles vast omdat er te veel auto\'s zijn. Zo kunnen de kabels op sommige plekken niet alle stroom aan.' },
        { vaardigheid: 'Alinea', vraag: 'Wat doet de schrijver in alinea 2?', opties: ['Hij noemt de voordelen van windmolens boven zonnepanelen', 'Hij vergelijkt hoe een zonnepaneel en een windmolen stroom maken', 'Hij legt uit waarom stroom steeds duurder wordt', 'Hij vertelt de geschiedenis van de windmolen'], goed: 1, uitleg: 'De alinea legt eerst uit hoe een zonnepaneel werkt, en dan komt: "Een windmolen werkt heel anders." Met zulke zinnen laat de schrijver zien dat hij twee dingen vergelijkt.' },
        { vaardigheid: 'Verband', vraag: '"Daarom zoeken onderzoekers naar manieren om stroom op te slaan." Wat is de reden daarvoor?', opties: ['Batterijen zijn heel goedkoop', 'Er is soms te veel en soms te weinig stroom uit zon en wind', 'Het stroomnet zit op sommige plekken vol', 'Windmolens gaan vaak kapot'], goed: 1, uitleg: '"Daarom" verwijst terug naar wat ervoor staat. In alinea 3 lees je: \'s nachts en zonder wind is er te weinig stroom, en op zonnige, winderige dagen soms te veel. Opslaan lost dat op. Het volle net staat pas in alinea 4 en hoort niet bij dit "daarom".' },
        { vaardigheid: 'Slot', vraag: 'Met welke conclusie eindigt de tekst?', opties: ['Nederland haalt al bijna al zijn stroom uit zon en wind', 'Stroom uit zon en wind is eigenlijk niet nodig', 'Batterijen zijn de enige oplossing', 'Overstappen op stroom uit zon en wind kost nog jaren, omdat er nog problemen moeten worden opgelost'], goed: 3, uitleg: 'Kijk naar de laatste zin, die begint met "Het zal dus ...". Het woordje "dus" kondigt vaak een conclusie aan. De problemen uit alinea 3 en 4 zorgen ervoor dat het nog jaren duurt.' }
      ]
    },
    kort: [
      {
        titel: 'Zonnepanelen op het dak van De Regenboog', soort: 'Tabel',
        tekst: [
          'Stroom van de zonnepanelen op het dak van de school (in kWh)',
          'maart | 950',
          'juni | 1850',
          'september | 1200',
          'december | 310',
          'De school gebruikt gemiddeld 1000 kWh per maand.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'In welke maand wekten de panelen de minste stroom op?', opties: ['December', 'Maart', 'Juni', 'September'], goed: 0, uitleg: 'Vergelijk de getallen: 310 is het kleinste. Dat past ook bij wat je weet: in december zijn de dagen kort en staat de zon laag.' },
          { vaardigheid: 'Conclusie', vraag: 'In welke maanden wekten de panelen genoeg stroom op voor de hele school?', opties: ['Alleen in juni', 'In maart, juni en september', 'In juni en september', 'In alle vier de maanden'], goed: 2, uitleg: 'Gebruik de regel onder de tabel: de school gebruikt 1000 kWh per maand. Kijk welke getallen daarboven zitten: 1850 (juni) en 1200 (september). Maart (950) komt net tekort.' }
        ]
      },
      {
        titel: 'Zonnepowerbank SunCharge', soort: 'Gebruiksaanwijzing',
        tekst: [
          'Leg de powerbank met het zonnepaneel naar boven in de volle zon.',
          'Tijdens het opladen knippert het lampje groen. Brandt het lampje de hele tijd groen, dan is de powerbank vol.',
          'Een volle powerbank laadt een telefoon ongeveer twee keer helemaal op.',
          'Geen zon? Je kunt de powerbank ook opladen met een USB-kabel.',
          'Let op: laat de powerbank niet in een warme auto in de zon liggen. Hij kan dan oververhit raken.'
        ],
        vragen: [
          { vaardigheid: 'Instructie', vraag: 'Je wilt onderweg je telefoon twee keer helemaal kunnen opladen. Wat moet je vooraf doen?', opties: ['Wachten tot het lampje groen knippert', 'De powerbank in een warme auto in de zon leggen', 'De telefoon eerst helemaal leeg laten lopen', 'De powerbank opladen tot het lampje de hele tijd groen brandt'], goed: 3, uitleg: 'Combineer twee regels. Een volle powerbank laadt een telefoon ongeveer twee keer op. En vol is hij als het lampje de hele tijd groen brandt. Knipperen betekent dat hij nog bezig is.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Hoe kun je de powerbank opladen als de zon niet schijnt?', opties: ['In een warme auto', 'Door hem te schudden', 'Met een USB-kabel', 'Dat kan niet'], goed: 2, uitleg: 'Zoek naar "Geen zon?". Daarachter staat het antwoord: met een USB-kabel.' }
        ]
      }
    ]
  },
  // Dag 54: Het schaaktoernooi
  {
    hardop: {
      titel: 'Het schaaktoernooi', soort: 'Verhalend', emoji: '♟️',
      alineas: [
        'Het was stil in de aula, zo stil dat Yara de schaakklok hoorde tikken. Tegenover haar zat Joep, de beste jeugdschaker van de regio, met zijn armen over elkaar. Hij had al zijn partijen van die dag gewonnen, meestal binnen twintig minuten. Yara had er ook vier gewonnen, maar dat leek nu ineens niets meer waard.',
        'Na tien zetten maakte ze een fout. Ze zag het pas toen Joep zijn loper naar voren schoof: haar dame stond in gevaar. Haar wangen gloeiden. Achter het touw zag ze haar opa staan. Hij tikte met zijn wijsvinger tegen zijn slaap, zoals hij altijd deed als ze samen schaakten aan de keukentafel. Eerst denken, dan pas zetten.',
        'Yara haalde diep adem en liet haar ogen langzaam over het bord glijden. Haar dame redden kon niet meer, maar misschien kon ze er iets voor terugkrijgen. Ze sloeg met haar paard een toren van Joep en zette tegelijk zijn koning schaak. Joep fronste. Voor het eerst die dag bleef zijn hand een hele tijd boven het bord hangen.',
        'Een uur later stonden er nog maar een paar stukken. Geen van beiden kon nog winnen. "Remise?" vroeg Joep zacht, en hij stak zijn hand uit. Yara schudde hem. Ze deelden de eerste plaats. Na de prijsuitreiking zocht ze haar opa op. "Ik heb niet gewonnen," zei ze. Opa gaf haar een knipoog. "Nee," zei hij, "maar je bent na die fout niet in paniek geraakt. Dat is moeilijker dan winnen."'
      ],
      vragen: [
        { vaardigheid: 'Woordbetekenis', vraag: 'Wat betekent "remise" in dit verhaal?', opties: ['Gelijkspel', 'Winst', 'Verlies', 'Een pauze'], goed: 0, uitleg: 'Lees de zin ervoor: "Geen van beiden kon nog winnen." Daarna geven ze elkaar een hand en delen ze de eerste plaats. Niemand wint en niemand verliest: gelijkspel.' },
        { vaardigheid: 'Personage', vraag: 'Waarom tikt opa met zijn wijsvinger tegen zijn slaap?', opties: ['Hij heeft hoofdpijn van de spanning', 'Hij herinnert Yara aan zijn advies: eerst denken, dan pas zetten', 'Hij wil dat Yara opschiet', 'Hij wil laten zien dat Joep slim is'], goed: 1, uitleg: 'De slaap is de zijkant van je hoofd. Opa doet dit altijd als ze samen schaken, en de schrijver zegt meteen erna wat het betekent: "Eerst denken, dan pas zetten." Zo geeft hij haar zonder woorden een tip.' },
        { vaardigheid: 'Beeldspraak', vraag: '"Haar wangen gloeiden." Wat zegt dat over Yara?', opties: ['Ze schrok en schaamde zich voor haar fout', 'Ze had koorts', 'Ze was heel blij', 'Ze had het koud'], goed: 0, uitleg: 'Gloeiende wangen betekent dat je rood wordt. Kijk wat er net gebeurd is: Yara maakt een fout en haar dame staat in gevaar. Ze wordt rood van schrik en schaamte.' },
        { vaardigheid: 'Personage', vraag: 'Hoe reageert Joep als Yara zijn toren slaat?', opties: ['Hij lacht haar uit', 'Hij moet ineens lang nadenken; hij had dit niet verwacht', 'Hij geeft meteen op', 'Hij wordt boos en loopt weg'], goed: 1, uitleg: 'De schrijver laat het zien: Joep fronst en "voor het eerst die dag bleef zijn hand een hele tijd boven het bord hangen". Joep won alles snel, maar nu twijfelt hij.' },
        { vaardigheid: 'Ontwikkeling', vraag: 'Hoe verandert Yara tijdens de partij?', opties: ['Ze begint zelfverzekerd en wordt steeds banger', 'Ze speelt de hele partij zonder na te denken', 'Na haar fout raakt ze even van slag, maar ze herpakt zich en speelt rustig verder', 'Ze verliest haar zin in schaken en wil stoppen'], goed: 2, uitleg: 'Volg Yara door het verhaal: eerst zenuwachtig, dan een fout en gloeiende wangen, maar daarna haalt ze diep adem en kijkt rustig over het bord. Aan het eind speelt ze gelijk tegen de beste speler.' },
        { vaardigheid: 'Bedoeling', vraag: 'Opa zegt: "Dat is moeilijker dan winnen." Wat bedoelt hij?', opties: ['Winnen is helemaal niet belangrijk', 'Yara had eigenlijk beter moeten spelen', 'Joep had eigenlijk moeten winnen', 'Rustig blijven na een fout is een grotere prestatie dan een partij winnen'], goed: 3, uitleg: '"Dat" verwijst naar "niet in paniek raken na die fout". Opa zegt dus dat rustig blijven als het misgaat knapper is dan winnen. Dat is ook de boodschap van het verhaal.' }
      ]
    },
    kort: [
      {
        titel: 'Eindstand schoolschaaktoernooi', soort: 'Tabel',
        tekst: [
          'Eindstand schoolschaaktoernooi – zaterdag 12 december',
          'Naam | School | Gewonnen | Remise | Verloren | Punten',
          'Joep | De Wegwijzer | 4 | 1 | 0 | 4½',
          'Yara | De Vlinderboom | 4 | 1 | 0 | 4½',
          'Mehmet | De Vlinderboom | 3 | 0 | 2 | 3',
          'Lieke | De Kameleon | 2 | 1 | 2 | 2½',
          'Puntentelling: winst = 1 punt, remise = ½ punt, verlies = 0 punten.'
        ],
        vragen: [
          { vaardigheid: 'Conclusie', vraag: 'Hoeveel partijen heeft Lieke in totaal gespeeld?', opties: ['2', '5', '3', '4'], goed: 1, uitleg: 'Tel de drie kolommen bij elkaar op: 2 gewonnen + 1 remise + 2 verloren = 5 partijen. Haar punten (2½) zijn iets anders dan het aantal partijen.' },
          { vaardigheid: 'Conclusie', vraag: 'Welke school heeft samen de meeste punten gehaald?', opties: ['De Vlinderboom', 'De Wegwijzer', 'De Kameleon', 'Ze hebben allemaal evenveel'], goed: 0, uitleg: 'Zoek per school de spelers en tel hun punten op. De Vlinderboom: Yara 4½ + Mehmet 3 = 7½. De Wegwijzer: 4½. De Kameleon: 2½.' }
        ]
      },
      {
        titel: 'Schaakclub De Witte Toren', soort: 'Poster',
        tekst: [
          'Schaakclub De Witte Toren zoekt nieuwe jeugdleden!',
          'Elke woensdag van 15.30 tot 17.00 uur in buurthuis Het Anker.',
          'Voor kinderen van 7 tot en met 14 jaar.',
          'De eerste drie keer doe je gratis mee. Daarna betaal je € 6 per maand.',
          'Geen ervaring nodig: wij leren je alle regels!'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat kost de schaakclub na de drie gratis keren?', opties: ['€ 6 per keer', '€ 3 per keer', 'Niets', '€ 6 per maand'], goed: 3, uitleg: 'Zoek naar het bedrag en lees wat erachter staat: "€ 6 per maand". Let op het verschil tussen per maand en per keer.' },
          { vaardigheid: 'Tekstdoel', vraag: 'Wat is het doel van deze poster?', opties: ['Uitleggen hoe je moet schaken', 'Vertellen wie het schaaktoernooi heeft gewonnen', 'Kinderen overhalen om lid te worden van de schaakclub', 'Reclame maken voor buurthuis Het Anker'], goed: 2, uitleg: 'De poster begint met "zoekt nieuwe jeugdleden!" en eindigt met "wij leren je alle regels!". De club wil dat jij komt. De regels zelf staan er niet op.' }
        ]
      }
    ]
  },
  // Dag 55: Hoe je hart werkt
  {
    hardop: {
      titel: 'Hoe je hart werkt', soort: 'Informatief', emoji: '❤️',
      alineas: [
        'Leg je hand eens op je borst, iets links van het midden. Voel je het kloppen? Dat is je hart, een spier die ongeveer zo groot is als je eigen vuist. Hij werkt dag en nacht, zonder dat je erover hoeft na te denken. Bij een volwassene klopt het hart in rust zo\'n zeventig keer per minuut: ruim honderdduizend keer per dag.',
        'Je hart is eigenlijk een pomp met vier ruimtes: twee boezems bovenin en twee kamers onderin. De rechterhelft pompt bloed naar je longen. Daar geeft het bloed koolstofdioxide af en neemt het nieuwe zuurstof op. Daarna stroomt het naar de linkerhelft, die het met kracht door je hele lichaam pompt. Daarom is de wand van de linkerkamer veel dikker en sterker dan die van de rechterkamer.',
        'Tussen de boezems en de kamers, en bij de uitgangen van de kamers, zitten kleppen. Ze werken als deurtjes die maar één kant op opengaan, zodat het bloed niet terug kan stromen. Het geluid dat een dokter met een stethoscoop hoort, is vooral het dichtklappen van die kleppen.',
        'Als je gaat rennen, hebben je spieren meer zuurstof nodig. Je hart gaat dan sneller kloppen, soms wel twee keer zo snel als in rust. Een hart dat vaak flink moet werken, wordt net als andere spieren sterker. Met één slag pompt het dan meer bloed rond. Bij goed getrainde sporters klopt het hart in rust daardoor vaak langzamer.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Waar neemt het bloed nieuwe zuurstof op?', opties: ['In het hart', 'In de spieren', 'In de longen', 'In de kleppen'], goed: 2, uitleg: 'Zoek het woord "zuurstof" in alinea 2: de rechterhelft pompt bloed naar de longen, en "daar" neemt het nieuwe zuurstof op.' },
        { vaardigheid: 'Signaalwoord', vraag: 'Waarom is de wand van de linkerkamer dikker dan die van de rechterkamer?', opties: ['De linkerkamer moet het bloed met kracht door het hele lichaam pompen', 'In de linkerkamer zitten meer kleppen', 'Aan de linkerkant zit meer zuurstof', 'De linkerkamer is groter dan je vuist'], goed: 0, uitleg: 'De zin over de dikke wand begint met "Daarom". Dat woord verwijst naar de reden in de zin ervoor: de linkerhelft pompt het bloed met kracht door je hele lichaam. Daar is een sterke spier voor nodig.' },
        { vaardigheid: 'Beeldspraak', vraag: 'De kleppen werken "als deurtjes die maar één kant op opengaan". Wat wil de schrijver daarmee duidelijk maken?', opties: ['De kleppen zijn van hout gemaakt', 'Je hart lijkt op een huis met kamers', 'De kleppen zitten soms op slot', 'Het bloed kan maar in één richting door het hart stromen'], goed: 3, uitleg: 'Een vergelijking maakt iets moeilijks begrijpelijk. Een deurtje dat maar één kant op opengaat, laat alles er wel in maar niet terug. Zo houden de kleppen het bloed in één richting. Achter de vergelijking staat het ook: "zodat het bloed niet terug kan stromen".' },
        { vaardigheid: 'Eigen kennis', vraag: 'Na de gymles voel je je hart bonzen. Hoe komt dat volgens de tekst?', opties: ['Je kleppen klappen harder dicht omdat ze moe zijn', 'Je spieren hebben meer zuurstof nodig, dus je hart pompt sneller', 'Je longen nemen even geen zuurstof meer op', 'Je hart wordt tijdens het sporten groter'], goed: 1, uitleg: 'Verbind wat je zelf meemaakt met alinea 4: bij rennen hebben je spieren meer zuurstof nodig, en daarom gaat je hart sneller kloppen. Het bloed brengt die zuurstof naar je spieren.' },
        { vaardigheid: 'Conclusie', vraag: 'Sanne traint al jaren voor lange hardloopwedstrijden. Wat is volgens de tekst waarschijnlijk waar?', opties: ['Haar hart klopt in rust sneller dan bij iemand die weinig sport', 'Haar hart klopt in rust langzamer dan bij iemand die weinig sport', 'Haar hart heeft meer dan vier ruimtes', 'Haar hart is kleiner dan haar vuist'], goed: 1, uitleg: 'Pas de laatste alinea toe op Sanne. Wie veel traint, krijgt een sterker hart dat per slag meer bloed rondpompt. Het hoeft in rust dan minder vaak te kloppen.' },
        { vaardigheid: 'Samenvatten', vraag: 'Welke samenvatting past het best bij alinea 2?', opties: ['Het hart is ongeveer zo groot als je vuist', 'Kleppen zorgen ervoor dat het bloed niet terugstroomt', 'Sporters hebben een sterk hart', 'Het hart heeft vier ruimtes: de rechterhelft pompt bloed naar de longen, de linkerhelft door het lichaam'], goed: 3, uitleg: 'Een samenvatting van een alinea bevat de belangrijkste informatie van díé alinea. De andere zinnen kloppen ook, maar ze horen bij alinea 1, 3 of 4.' }
      ]
    },
    kort: [
      {
        titel: 'Hartslag in rust', soort: 'Tabel',
        tekst: [
          'Gemiddelde hartslag in rust (slagen per minuut)',
          'kind van 6 tot en met 12 jaar | 70 tot 110',
          'volwassene | 60 tot 80',
          'goed getrainde sporter | 40 tot 60',
          'muis | ongeveer 500',
          'olifant | ongeveer 30'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Welk hart klopt volgens de tabel in rust het langzaamst?', opties: ['Dat van een olifant', 'Dat van een goed getrainde sporter', 'Dat van een volwassene', 'Dat van een muis'], goed: 0, uitleg: 'Zoek het laagste getal. Een olifant heeft ongeveer 30 slagen per minuut; zelfs een sporter zit daar met 40 tot 60 boven.' },
          { vaardigheid: 'Conclusie', vraag: 'Kees is 10 jaar. Zijn hartslag in rust is 85 slagen per minuut. Wat kun je volgens de tabel zeggen?', opties: ['Die is te hoog voor zijn leeftijd', 'Die is te laag voor zijn leeftijd', 'Die past bij zijn leeftijd', 'Die past alleen bij een getrainde sporter'], goed: 2, uitleg: 'Zoek eerst de rij die bij Kees past: kind van 6 tot en met 12 jaar. Daar hoort 70 tot 110 bij. 85 ligt daartussen. Dat 85 hoger is dan bij een volwassene, maakt niet uit: Kees is een kind.' }
        ]
      },
      {
        titel: 'Cursus Jeugd-EHBO', soort: 'Folder',
        tekst: [
          'Leer levens redden!',
          'Cursus Jeugd-EHBO in buurthuis De Kern, voor kinderen van 10 tot en met 14 jaar.',
          'Vier woensdagmiddagen in januari, van 14.00 tot 16.00 uur.',
          'Prijs: € 25 voor de hele cursus, inclusief diploma.',
          '"Elke minuut telt," zegt instructeur Petra. "Wie snel hulp krijgt, heeft veel meer kans om het te overleven."',
          'Aanmelden vóór 20 december bij de balie van De Kern.'
        ],
        vragen: [
          { vaardigheid: 'Bedoeling', vraag: 'Waarom staat de uitspraak "Elke minuut telt" in de folder?', opties: ['Om te zeggen dat de cursus precies op tijd begint', 'Om te zeggen dat de cursus maar kort duurt', 'Om te laten weten dat je niet te laat mag komen', 'Om te laten zien hoe belangrijk het is dat je snel kunt helpen'], goed: 3, uitleg: 'Lees de zin die Petra erna zegt: wie snel hulp krijgt, heeft meer kans om het te overleven. "Elke minuut telt" gaat dus over hulp bij een ongeluk, niet over het tijdstip van de les.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat krijg je bij de prijs van de cursus?', opties: ['Een EHBO-doos', 'Een lunch', 'Een diploma', 'Een stethoscoop'], goed: 2, uitleg: 'Kijk bij de prijs. Daar staat "inclusief diploma". Inclusief betekent: het zit erbij inbegrepen.' }
        ]
      }
    ]
  },
  // Dag 56: Een kerststukje maken
  {
    hardop: {
      titel: 'Een kerststukje maken', soort: 'Instructief', emoji: '🕯️',
      alineas: [
        'Een kerststukje op tafel maakt de feestdagen meteen gezellig, en je maakt het zelf in ongeveer een uur. Je hebt nodig: een ondiepe schaal, een blok steekschuim, een dikke kaars, groene takjes (bijvoorbeeld van een den, een conifeer of hulst), een snoeischaar en wat versiering, zoals dennenappels, rode besjes of linten.',
        'Begin met het steekschuim. Dat is een groen, sponzig blok dat water vasthoudt, zodat je takjes langer vers blijven. Leg het blok op een bak water en laat het vanzelf zinken. Duw het vooral niet onder: dan blijven er droge plekken in zitten. Na een paar minuten is het verzadigd. Snijd het blok daarna op maat en zet het stevig in de schaal.',
        'Druk nu de kaars in het midden, zodat je stukje een duidelijk middelpunt heeft. Knip de takjes schuin af; zo prikken ze makkelijk in het schuim en kunnen ze goed water opzuigen. Werk van buiten naar binnen: eerst de langere takjes langs de rand, daarna steeds kortere richting de kaars. Zorg dat het schuim helemaal bedekt raakt. Tot slot steek je de versiering ertussen.',
        'Let op: een kerststukje met een kaars is mooi, maar ook brandgevaarlijk. Laat een brandende kaars nooit alleen, en vervang hem voordat hij tot vlak boven het groen is opgebrand. Geef het schuim om de paar dagen een scheutje water. Zo blijft je stukje tot na Kerstmis groen en geurig.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Waarom knip je de takjes schuin af?', opties: ['Zodat ze makkelijk in het schuim prikken en goed water opzuigen', 'Zodat ze er mooier uitzien', 'Zodat ze korter zijn dan de kaars', 'Zodat de kaars beter blijft branden'], goed: 0, uitleg: 'Bij een instructie staat de reden vaak direct na de handeling, na een puntkomma of na "zodat". Hier: "zo prikken ze makkelijk in het schuim en kunnen ze goed water opzuigen".' },
        { vaardigheid: 'Woordbetekenis', vraag: '"Na een paar minuten is het verzadigd." Wat betekent "verzadigd" hier?', opties: ['Helemaal droog', 'Helemaal volgezogen met water', 'In stukjes gesneden', 'Bovenop het water drijvend'], goed: 1, uitleg: 'Kijk naar wat er gebeurt: het schuim ligt op het water en zinkt vanzelf omdat het water opzuigt. Na een paar minuten kan er niets meer bij: het is helemaal vol. Je kent het woord misschien ook van eten: verzadigd = vol.' },
        { vaardigheid: 'Volgorde', vraag: 'Wat doe je direct nadat je het schuim in de schaal hebt gezet?', opties: ['De kaars in het midden drukken', 'Het schuim op een bak water leggen', 'De versiering ertussen steken', 'Het schuim een scheutje water geven'], goed: 0, uitleg: 'Volg de stappen in de volgorde van de tekst. Alinea 2 eindigt met het schuim in de schaal zetten. Alinea 3 begint met "Druk nu de kaars in het midden". Het woordje "nu" laat zien dat dit de volgende stap is.' },
        { vaardigheid: 'Alinea', vraag: 'Wat is het doel van alinea 4?', opties: ['Uitleggen hoe je zelf een kaars maakt', 'De lezer waarschuwen en tips geven om het stukje veilig en mooi te houden', 'De lezer overtuigen om geen kaarsen te gebruiken', 'Vertellen welk groen het lekkerst ruikt'], goed: 1, uitleg: 'Alinea 4 begint met "Let op:". Dat is een waarschuwing. Daarna volgt nog een tip over water geven. De schrijver zegt niet dat je geen kaars mag gebruiken, alleen hoe je er veilig mee omgaat.' },
        { vaardigheid: 'Signaalwoord', vraag: 'Welke woorden in alinea 3 helpen je de stappen in de goede volgorde te doen?', opties: ['"zodat", "zo" en "en"', '"mooi", "maar" en "ook"', '"nu", "eerst", "daarna" en "Tot slot"', '"vooral", "niet" en "dan"'], goed: 2, uitleg: 'Signaalwoorden van tijd en volgorde laten zien wat eerst komt en wat daarna. In alinea 3 staan "nu", "eerst", "daarna" en "Tot slot".' },
        { vaardigheid: 'Verband', vraag: 'Waarom is het een probleem als er droge plekken in het steekschuim blijven?', opties: ['Het schuim wordt dan te zwaar voor de schaal', 'De kaars valt dan om', 'Je kunt het schuim dan niet snijden', 'Takjes in die droge plekken krijgen geen water en verdrogen snel'], goed: 3, uitleg: 'De tekst zegt alleen dát er droge plekken komen; het gevolg moet je zelf bedenken. Het schuim is er juist om de takjes water te geven. Een takje in een droog stuk krijgt geen water, dus dat verdroogt.' }
      ]
    },
    kort: [
      {
        titel: 'Workshops kerststukjes', soort: 'Programma',
        tekst: [
          'Bloemenwinkel Het Boeket – workshops op zaterdag 19 december',
          '10.00 – 11.30 uur | Klein tafelstukje | € 15,00 | vanaf 8 jaar',
          '13.00 – 15.00 uur | Grote krans voor de deur | € 32,50 | vanaf 14 jaar',
          '15.30 – 16.30 uur | Mini-stukje in een kopje | € 9,50 | vanaf 6 jaar',
          'Alle materialen zijn inbegrepen. Kinderen tot 12 jaar komen met een volwassene, die gratis mag meekijken.',
          'Vol is vol: per workshop maximaal 10 deelnemers.'
        ],
        vragen: [
          { vaardigheid: 'Conclusie', vraag: 'Ilse (9) doet eerst het tafelstukje en daarna nog een tweede workshop. Haar moeder kijkt alleen. Welke tweede workshop kan Ilse doen, en wat kost het samen?', opties: ['De krans; samen € 47,50', 'Het mini-stukje; samen € 24,50', 'Het mini-stukje; samen € 49,00', 'De krans; samen € 32,50'], goed: 1, uitleg: 'Controleer eerst de leeftijd: de krans is vanaf 14 jaar, dus die valt af. Dan reken je: € 15,00 + € 9,50 = € 24,50. Moeder kijkt mee en dat is gratis, dus je hoeft niet te verdubbelen.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Hoe lang duurt de workshop "Grote krans voor de deur"?', opties: ['2 uur', '1 uur', '1,5 uur', '2,5 uur'], goed: 0, uitleg: 'Kijk naar de begin- en eindtijd: van 13.00 tot 15.00 uur. Dat is 2 uur.' }
        ]
      },
      {
        titel: 'Veilige feestdagen', soort: 'Poster',
        tekst: [
          'Kaarsen en kerstverlichting: zo voorkom je brand',
          '• Zet kaarsen altijd op een ondergrond die niet kan branden, ver van gordijnen.',
          '• Ga je weg of naar bed? Blaas eerst alle kaarsen uit.',
          '• Controleer je kerstverlichting: gebruik geen snoeren met kapotte draden.',
          '• Hang een rookmelder op elke verdieping en test hem één keer per maand.',
          'Toch brand? Ga direct naar buiten en bel 112.'
        ],
        vragen: [
          { vaardigheid: 'Signaalwoord', vraag: 'Waarom begint de laatste regel met "Toch brand?"', opties: ['De tips werken eigenlijk niet', 'De schrijver vraagt of er al eens brand is geweest', 'Het is reclame voor rookmelders', 'Er volgt wat je moet doen als het ondanks alle tips toch misgaat'], goed: 3, uitleg: '"Toch" betekent hier "ondanks alles". Eerst staan er tips om brand te voorkomen. Lukt dat niet, dan lees je in de laatste regel wat je moet doen.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Hoe vaak moet je een rookmelder testen?', opties: ['Eén keer per week', 'Eén keer per jaar', 'Eén keer per maand', 'Alleen met Kerstmis'], goed: 2, uitleg: 'Zoek het woord "rookmelder". In dezelfde regel staat: "test hem één keer per maand".' }
        ]
      }
    ]
  },
  // Dag 57: Pinguïns op Antarctica
  {
    hardop: {
      titel: 'Pinguïns op Antarctica', soort: 'Informatief', emoji: '🐧',
      alineas: [
        'Antarctica is het koudste werelddeel op aarde. In de winter kan het er kouder worden dan veertig graden onder nul, en er waaien stormen van meer dan honderd kilometer per uur. Toch kiest één vogel juist dat seizoen uit om een jong groot te brengen: de keizerspinguïn. Met ruim een meter is hij de grootste pinguïn ter wereld.',
        'Als het vrouwtje een ei heeft gelegd, geeft ze het voorzichtig door aan het mannetje. Daarna vertrekt ze naar zee om te eten. Het mannetje legt het ei op zijn voeten en bedekt het met een warme huidplooi van zijn buik. Zo staat hij ruim twee maanden lang in de ijzige kou, zonder één hap te eten. Hij leeft al die tijd van zijn vetvoorraad.',
        'Hoe houden de mannetjes dat vol? Ze kruipen met honderden of zelfs duizenden dicht tegen elkaar aan. In het midden van zo\'n groep is het veel warmer dan aan de rand. De pinguïns schuifelen langzaam rond, zodat iedereen om de beurt in het warme midden en aan de koude buitenkant staat. Zo hoeft niemand te lang in de ijskoude wind te blijven.',
        'Wanneer het kuiken uit het ei komt, keert het vrouwtje terug, met een maag vol vis en inktvis. Nu is het de beurt van het mannetje om naar zee te gaan. Vliegen kan hij niet, maar zwemmen des te beter: met zijn stevige vleugels als vinnen kan een keizerspinguïn honderden meters diep duiken.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Wie zorgt voor het ei terwijl het vrouwtje op zee is?', opties: ['Andere vrouwtjes', 'Niemand', 'Het mannetje', 'Het kuiken'], goed: 2, uitleg: 'In alinea 2 staat dat het vrouwtje het ei doorgeeft aan het mannetje en dat hij het op zijn voeten legt. Hij past er ruim twee maanden op.' },
        { vaardigheid: 'Signaalwoord', vraag: '"Toch kiest één vogel juist dat seizoen uit om een jong groot te brengen." Waarom staat daar "Toch"?', opties: ['Je zou niet verwachten dat een dier in zo\'n strenge kou een jong krijgt', 'Pinguïns kunnen niet vliegen', 'De keizerspinguïn is de grootste pinguïn', 'In de zomer is het op Antarctica nog kouder'], goed: 0, uitleg: '"Toch" geeft een tegenstelling aan met wat ervoor staat. Eerst lees je hoe ongelooflijk koud en stormachtig de winter is. Dan verwacht je niet dat er juist dan een jong wordt grootgebracht.' },
        { vaardigheid: 'Woordbetekenis', vraag: '"De pinguïns schuifelen langzaam rond." Wat betekent "schuifelen"?', opties: ['Snel rennen', 'Op de buik over het ijs glijden', 'Springen', 'Met kleine stapjes langzaam lopen'], goed: 3, uitleg: 'Denk aan hoe de pinguïns staan: heel dicht op elkaar, met een ei op hun voeten. Rennen of springen kan dan niet. "Langzaam" helpt ook: ze bewegen met kleine stapjes.' },
        { vaardigheid: 'Alinea', vraag: 'Waar gaat alinea 3 vooral over?', opties: ['Hoe groot een groep pinguïns kan worden', 'Hoe de mannetjes samen warm blijven', 'Waarom het aan de rand van de groep koud is', 'Hoe de vrouwtjes vis vangen'], goed: 1, uitleg: 'De alinea begint met een vraag: "Hoe houden de mannetjes dat vol?" De rest van de alinea geeft het antwoord: dicht tegen elkaar en om de beurt in het midden. De grootte van de groep is een detail.' },
        { vaardigheid: 'Eigen kennis', vraag: 'Waarom helpt het tegen de kou om dicht tegen elkaar aan te staan?', opties: ['Ze kunnen zo samen vis eten', 'Ze houden elkaars lichaamswarmte vast en vangen minder wind', 'Het ijs onder hun voeten smelt dan', 'Ze worden er groter van'], goed: 1, uitleg: 'De tekst zegt dat het in het midden warmer is, maar niet waarom. Dat weet je zelf: lichamen geven warmte af, en in een groep blijft die warmte hangen. Wie binnenin staat, krijgt bovendien geen wind.' },
        { vaardigheid: 'Conclusie', vraag: 'Waarom vertrekt het mannetje direct naar zee als het vrouwtje terugkomt?', opties: ['Hij wil het kuiken niet zien', 'Hij gaat vis halen voor het vrouwtje', 'Hij wil leren vliegen', 'Hij moet dringend eten, want hij heeft al maanden niets gehad'], goed: 3, uitleg: 'Combineer alinea 2 en 4. In alinea 2 lees je dat het mannetje ruim twee maanden niets eet. Als het vrouwtje terug is met eten voor het kuiken, kan hij eindelijk zelf gaan eten. Dat staat er niet letterlijk; je trekt het zelf als conclusie.' }
      ]
    },
    kort: [
      {
        titel: 'Vier soorten pinguïns', soort: 'Tabel',
        tekst: [
          'Soort | Lengte | Gewicht | Leefgebied',
          'keizerspinguïn | ongeveer 115 cm | 22 – 40 kg | Antarctica',
          'koningspinguïn | ongeveer 95 cm | 11 – 16 kg | eilanden rond Antarctica',
          'adéliepinguïn | ongeveer 70 cm | 4 – 6 kg | Antarctica',
          'galápagospinguïn | ongeveer 50 cm | 2 – 2,5 kg | Galápagoseilanden, vlak bij de evenaar'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Welke pinguïn leeft het dichtst bij de evenaar?', opties: ['De galápagospinguïn', 'De keizerspinguïn', 'De koningspinguïn', 'De adéliepinguïn'], goed: 0, uitleg: 'Kijk in de kolom "Leefgebied". Alleen bij de galápagospinguïn staat "vlak bij de evenaar".' },
          { vaardigheid: 'Klopt het?', vraag: 'Welke uitspraak klopt volgens de tabel?', opties: ['Alle pinguïns uit de tabel leven op Antarctica', 'De adéliepinguïn is zwaarder dan de koningspinguïn', 'De kleinste pinguïn uit de tabel leeft het verst van Antarctica', 'De koningspinguïn is de grootste pinguïn uit de tabel'], goed: 2, uitleg: 'Controleer elke uitspraak met twee kolommen. De galápagospinguïn is met 50 cm de kleinste en leeft bij de evenaar, dus het verst weg. De adéliepinguïn (4 – 6 kg) is lichter dan de koningspinguïn (11 – 16 kg).' }
        ]
      },
      {
        titel: 'Pinguïnparade in Dierenpark Zuidpoolzicht', soort: 'Advertentie',
        tekst: [
          'Kom kijken naar de pinguïnparade!',
          'Elke dag om 11.00 en 15.00 uur wandelen onze pinguïns een rondje over het pad.',
          'Om 14.00 uur: voeren, met uitleg van de verzorger.',
          'In de kerstvakantie (19 december – 3 januari) is er een extra parade om 13.00 uur.',
          'Entree: volwassenen € 18, kinderen van 3 tot en met 12 jaar € 13, kinderen onder de 3 jaar gratis.'
        ],
        vragen: [
          { vaardigheid: 'Conclusie', vraag: 'Familie De Wit (twee volwassenen en kinderen van 10 en 2 jaar) gaat op 28 december. Hoeveel parades kunnen ze zien, en wat betalen ze samen?', opties: ['2 parades en € 49', '3 parades en € 62', '2 parades en € 44', '3 parades en € 49'], goed: 3, uitleg: 'Twee dingen tegelijk. 28 december valt in de kerstvakantie, dus er zijn 3 parades (11.00, 13.00 en 15.00 uur). Entree: 2 × € 18 + € 13 = € 49; het kind van 2 is gratis.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Hoe laat worden de pinguïns gevoerd?', opties: ['Om 11.00 uur', 'Om 13.00 uur', 'Om 14.00 uur', 'Om 15.00 uur'], goed: 2, uitleg: 'Zoek het woord "voeren". Ervoor staat: om 14.00 uur. De andere tijden zijn parades.' }
        ]
      }
    ]
  },
  // Dag 58: De brief van opa
  {
    hardop: {
      titel: 'De brief van opa', soort: 'Verhalend', emoji: '✉️',
      alineas: [
        'Elk jaar in december lag er een dikke envelop met een buitenlandse postzegel op de mat. Opa woonde al heel lang in Canada, en hij weigerde koppig om te appen. "Een bericht op een schermpje is zo weer weg," zei hij altijd. "Een brief kun je bewaren." Liv vond dat eigenlijk maar ouderwets. Een appje was toch veel sneller?',
        'Dit jaar was de envelop nog dikker dan anders. Er zat een brief in van vier kantjes, in opa\'s schuine, sierlijke handschrift, en een vergeelde foto. Liv herkende het huis op de foto niet, maar wel het meisje op de stoep: dat was haar moeder, met dezelfde sproeten en hetzelfde scheve lachje als Liv zelf.',
        '"Lieve Liv," schreef opa. "Je bent nu even oud als je moeder was toen we naar Canada verhuisden. Ze huilde de hele vlucht, omdat ze haar beste vriendin moest achterlaten. Weet je wat haar troostte? Die vriendin schreef haar elke maand een brief. Je moeder heeft ze allemaal nog, in een schoenendoos op zolder. Vraag maar of je ze mag lezen."',
        'Die avond zat Liv met haar moeder op zolder, tussen stapels brieven met kleine tekeningetjes in de kantlijn. Ze lachten veel, en soms werd haar moeder even stil. Voor het slapengaan pakte Liv een vel papier en een pen. Het schrijven ging langzaam en ze moest twee keer opnieuw beginnen. Maar toen ze de envelop dichtplakte, begreep ze eindelijk wat opa bedoelde.'
      ],
      vragen: [
        { vaardigheid: 'Personage', vraag: 'Waarom wil opa geen appjes sturen?', opties: ['Hij vindt dat je een brief kunt bewaren en een appje niet', 'Hij heeft geen telefoon', 'Hij kan niet typen', 'Appjes naar Canada zijn te duur'], goed: 0, uitleg: 'Opa zegt het zelf in alinea 1: "Een bericht op een schermpje is zo weer weg. Een brief kun je bewaren."' },
        { vaardigheid: 'Personage', vraag: 'Hoe voelde Livs moeder zich toen ze als meisje naar Canada verhuisde?', opties: ['Blij, omdat ze ging vliegen', 'Verdrietig, omdat ze haar beste vriendin moest achterlaten', 'Boos op opa, omdat hij niet wilde appen', 'Zenuwachtig voor haar nieuwe school'], goed: 1, uitleg: 'In de brief van opa staat: "Ze huilde de hele vlucht, omdat ze haar beste vriendin moest achterlaten." Huilen en een reden met "omdat": dat wijst op verdriet.' },
        { vaardigheid: 'Woordbetekenis', vraag: '"... en hij weigerde koppig om te appen." Wat betekent "koppig"?', opties: ['Vasthoudend aan zijn eigen zin, ook als anderen iets anders willen', 'Heel vriendelijk', 'Vergeetachtig', 'Erg snel'], goed: 0, uitleg: 'Kijk naar het woord "weigerde": opa wil niet, ook al vindt Liv appen veel handiger. Iemand die zo blijft vasthouden aan zijn eigen idee, noem je koppig.' },
        { vaardigheid: 'Ontwikkeling', vraag: 'Hoe verandert Livs mening over brieven?', opties: ['Ze vindt brieven het hele verhaal saai', 'Eerst vindt ze brieven ouderwets, aan het eind begrijpt ze waarom een brief bijzonder is', 'Eerst schrijft ze graag brieven, later niet meer', 'Ze vindt brieven altijd al beter dan appjes'], goed: 1, uitleg: 'Vergelijk het begin met het eind. In alinea 1 vindt Liv brieven "maar ouderwets". In de laatste zin "begreep ze eindelijk wat opa bedoelde". Daartussen leest ze de oude brieven van haar moeder en schrijft ze er zelf een.' },
        { vaardigheid: 'Bedoeling', vraag: 'Waarom stuurt opa juist dit jaar de foto en het verhaal over de brieven?', opties: ['Hij is de schoenendoos met brieven kwijtgeraakt', 'Hij wil dat Liv ook naar Canada verhuist', 'Liv is nu even oud als haar moeder toen, en hij wil dat ze zelf ontdekt wat brieven kunnen betekenen', 'Hij heeft geen nieuwe foto\'s meer'], goed: 2, uitleg: 'Opa zegt het niet rechtstreeks, maar geeft hints. Hij schrijft: "Je bent nu even oud als je moeder was." En hij stuurt Liv naar de brieven op zolder. Zo laat hij haar zelf ontdekken waarom hij brieven zo belangrijk vindt.' },
        { vaardigheid: 'Verband', vraag: 'Aan het eind "begreep ze eindelijk wat opa bedoelde". Aan welke uitspraak van opa moet je dan denken?', opties: ['"Vraag maar of je ze mag lezen."', '"Lieve Liv."', '"Ze huilde de hele vlucht."', '"Een brief kun je bewaren."'], goed: 3, uitleg: 'Ga terug naar het begin: daar legt opa uit waarom hij brieven schrijft. Liv heeft net gezien dat haar moeder alle brieven van haar vriendin nog heeft. Nu snapt ze dat je een brief kunt bewaren.' }
      ]
    },
    kort: [
      {
        titel: 'Kerstpost: op tijd posten!', soort: 'Tabel',
        tekst: [
          'Wil je dat je kerstpost vóór Kerstmis aankomt? Post dan uiterlijk op deze dag:',
          'Nederland | maandag 21 december',
          'Europa | dinsdag 15 december',
          'rest van de wereld | donderdag 10 december',
          'Post je later, dan komt je kaart of brief waarschijnlijk pas na Kerstmis aan.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat is de laatste dag om kerstpost binnen Nederland te posten?', opties: ['Dinsdag 15 december', 'Maandag 21 december', 'Donderdag 10 december', 'Vrijdag 25 december'], goed: 1, uitleg: 'Zoek de rij "Nederland" en lees de datum ernaast.' },
          { vaardigheid: 'Eigen kennis', vraag: 'Je wilt een kerstkaart naar je tante in Duitsland sturen, en die moet vóór Kerstmis aankomen. Wanneer moet je hem uiterlijk posten?', opties: ['Dinsdag 15 december', 'Maandag 21 december', 'Donderdag 10 december', 'Dat staat niet in de tabel'], goed: 0, uitleg: 'Duitsland staat niet letterlijk in de tabel. Je moet zelf weten dat Duitsland in Europa ligt. Dan gebruik je de rij "Europa": dinsdag 15 december.' }
        ]
      },
      {
        titel: 'Lieve opa', soort: 'Brief',
        tekst: [
          'Woensdag 16 december',
          'Lieve opa,',
          'Bedankt voor uw lange brief en de foto! Mama en ik hebben gisteren de hele avond op zolder gezeten. Ze heeft me alle brieven van haar vriendin Ingrid laten zien. Wist u dat ze nog steeds vriendinnen zijn? Ingrid komt met oud en nieuw bij ons eten.',
          'Dit is mijn allereerste echte brief. Mijn handschrift is niet zo mooi als dat van u, maar ik ga oefenen. Schrijft u mij terug?',
          'Veel liefs, Liv'
        ],
        vragen: [
          { vaardigheid: 'Twee teksten', vraag: 'Liv post deze brief op de dag die erboven staat. Wat kun je met de tabel "Kerstpost: op tijd posten!" zeggen?', opties: ['De brief komt ruim op tijd vóór Kerstmis aan', 'De brief komt precies op 21 december aan', 'Liv is op tijd, want ze post vóór 21 december', 'De brief komt waarschijnlijk pas na Kerstmis bij opa in Canada aan'], goed: 3, uitleg: 'Gebruik beide teksten. De brief is van woensdag 16 december. Canada valt onder "rest van de wereld", en daarvoor was de laatste dag donderdag 10 december. Dus komt de brief waarschijnlijk pas na Kerstmis aan. 21 december geldt alleen voor post binnen Nederland.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Wie komt er met oud en nieuw bij Liv eten?', opties: ['Opa', 'De tante van Liv', 'Ingrid', 'De oma van Liv'], goed: 2, uitleg: 'Zoek "oud en nieuw" in de brief. Daar staat: "Ingrid komt met oud en nieuw bij ons eten."' }
        ]
      }
    ]
  },
  // Dag 59: Moet vuurwerk verboden worden?
  {
    hardop: {
      titel: 'Moet vuurwerk verboden worden?', soort: 'Betoog', emoji: '🎆',
      alineas: [
        'Elk jaar op 1 januari lees je dezelfde berichten: honderden gewonden, vernielde bushokjes en dieren die dagenlang van slag zijn. Toch steken we ieder jaar weer massaal vuurwerk af. Ik vind dat dat moet stoppen. Gewone mensen zouden geen vuurwerk meer mogen kopen en afsteken.',
        'Mijn belangrijkste argument is de veiligheid. Elke jaarwisseling belanden er honderden mensen op de spoedeisende hulp, vaak met brandwonden of verwondingen aan hun ogen en handen. Een groot deel van hen is jonger dan twintig, en lang niet altijd hebben ze zelf vuurwerk afgestoken: veel slachtoffers stonden er alleen maar naast. Ook hulpverleners worden soms met vuurwerk bekogeld, terwijl zij juist komen helpen.',
        'Daarnaast lijden dieren enorm onder het geknal. Honden kruipen trillend onder de bank, en vogels vliegen midden in de nacht in paniek op en raken uitgeput. Bovendien hangt er na middernacht een dikke deken van rook boven de steden. Die rook bevat fijnstof, dat slecht is voor je longen.',
        'Tegenstanders zeggen dat vuurwerk een mooie traditie is die bij oud en nieuw hoort. Daar hebben ze een punt: niemand wil een saaie jaarwisseling. Maar een traditie kan ook veranderen. Laat elke gemeente een grote vuurwerkshow organiseren, verzorgd door vakmensen. Dan kan iedereen samen genieten van de pijlen en de kleuren, zonder dat er iemand gewond raakt.'
      ],
      vragen: [
        { vaardigheid: 'Standpunt', vraag: 'Wat vindt de schrijver?', opties: ['Vuurwerk zou goedkoper moeten worden', 'Vuurwerk zou alleen overdag mogen', 'Gewone mensen zouden geen vuurwerk meer mogen kopen en afsteken', 'Huisdieren moeten met oud en nieuw binnenblijven'], goed: 2, uitleg: 'Het standpunt staat aan het eind van alinea 1, na "Ik vind dat dat moet stoppen": gewone mensen zouden geen vuurwerk meer mogen kopen en afsteken.' },
        { vaardigheid: 'Signaalwoord', vraag: 'Welk woord aan het begin van alinea 3 laat zien dat er een nieuw argument komt?', opties: ['Daarnaast', 'Honden', 'lijden', 'enorm'], goed: 0, uitleg: '"Daarnaast" is een signaalwoord van opsomming: er komt nóg een argument bij, na het argument over veiligheid in alinea 2.' },
        { vaardigheid: 'Beeldspraak', vraag: '"... een dikke deken van rook boven de steden." Wat bedoelt de schrijver?', opties: ['Er ligt een brandende deken op straat', 'De rook voelt warm aan, zoals een deken', 'Mensen moeten dieren met een deken beschermen', 'Er hangt een dichte laag rook over de stad'], goed: 3, uitleg: 'Dit is beeldspraak. Een deken ligt als een dikke laag over iets heen. Zo hangt de rook als een dichte laag over de stad. Er ligt natuurlijk geen echte deken.' },
        { vaardigheid: 'Standpunt en argument', vraag: 'Welke zin is een argument van de tegenstanders van een verbod?', opties: ['Hulpverleners worden soms met vuurwerk bekogeld.', 'Vuurwerk is een mooie traditie die bij oud en nieuw hoort.', 'Fijnstof is slecht voor je longen.', 'Een traditie kan ook veranderen.'], goed: 1, uitleg: 'Zoek in de tekst wat de tegenstanders zeggen: "Tegenstanders zeggen dat vuurwerk een mooie traditie is." De andere zinnen zijn argumenten van de schrijver zelf, ook "Een traditie kan ook veranderen": daarmee reageert hij op de tegenstanders.' },
        { vaardigheid: 'Bedoeling', vraag: 'Waarom schrijft de schrijver in alinea 4: "Daar hebben ze een punt"?', opties: ['Hij laat zien dat hij van mening is veranderd', 'Hij geeft de tegenstanders deels gelijk, voordat hij met een oplossing komt', 'Hij wil zeggen dat vuurwerk toch moet blijven', 'Hij wil de lezer aan het lachen maken'], goed: 1, uitleg: 'Na "Daar hebben ze een punt" komt "Maar". De schrijver geeft de tegenstanders eerst een beetje gelijk en komt dan met een voorstel dat ook bij hun bezwaar past: een gezamenlijke vuurwerkshow. Zo maakt hij zijn betoog sterker.' },
        { vaardigheid: 'Tekstdoel', vraag: 'Wat is het doel van deze tekst?', opties: ['De lezer informeren over hoe vuurwerk werkt', 'De lezer vermaken met verhalen over oud en nieuw', 'De lezer uitleggen hoe je veilig vuurwerk afsteekt', 'De lezer overtuigen dat gewone mensen geen vuurwerk meer zouden mogen afsteken'], goed: 3, uitleg: 'Let op woorden als "Ik vind", "Mijn belangrijkste argument" en "Laat elke gemeente ...". Een tekst met een mening, argumenten en een oproep wil je overtuigen.' }
      ]
    },
    kort: [
      {
        titel: 'Vuurwerkslachtoffers in Waldorp', soort: 'Tabel',
        tekst: [
          'Vuurwerkslachtoffers in het ziekenhuis van Waldorp',
          'Jaarwisseling | Slachtoffers | Daarvan jonger dan 20 | Daarvan omstander',
          '2022–2023 | 48 | 27 | 15',
          '2023–2024 | 52 | 30 | 18',
          '2024–2025 | 41 | 19 | 18',
          '2025–2026 | 36 | 15 | 17',
          'Een omstander is iemand die zelf geen vuurwerk afstak.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Bij welke jaarwisseling waren er de meeste slachtoffers?', opties: ['2023–2024', '2022–2023', '2024–2025', '2025–2026'], goed: 0, uitleg: 'Kijk alleen in de kolom "Slachtoffers" en zoek het grootste getal: 52.' },
          { vaardigheid: 'Klopt het?', vraag: 'Welke uitspraak klopt volgens de tabel?', opties: ['Het aantal slachtoffers steeg elk jaar', 'Steeds meer slachtoffers waren jonger dan 20', 'Na 2023–2024 daalde het totaal, maar het aantal omstanders bleef ongeveer gelijk', 'Er waren elk jaar meer omstanders dan slachtoffers jonger dan 20'], goed: 2, uitleg: 'Vergelijk twee kolommen tegelijk. Het totaal ging van 52 naar 41 naar 36: een daling. De omstanders bleven 18, 18 en 17: ongeveer gelijk. Alleen in 2025–2026 waren er meer omstanders (17) dan jongeren (15), dus niet elk jaar.' }
        ]
      },
      {
        titel: 'Laat ons toch knallen!', soort: 'Mening van een lezer',
        tekst: [
          'Ik ben veertien en oud en nieuw is voor mij het leukste feest van het jaar. Met mijn vader steek ik altijd een paar pijlen af, met een vuurwerkbril op en een emmer water ernaast. Waarom moeten wij gestraft worden voor een paar mensen die zich niet aan de regels houden? Pak liever die mensen aan.',
          'Thijs (14), Zutphen'
        ],
        vragen: [
          { vaardigheid: 'Standpunt', vraag: 'Wat vindt Thijs?', opties: ['Vuurwerk moet helemaal verboden worden', 'Alleen vaders mogen vuurwerk afsteken', 'Vuurwerk moet goedkoper worden', 'Gewone mensen moeten vuurwerk blijven afsteken, maar wie de regels breekt, moet worden aangepakt'], goed: 3, uitleg: 'Thijs zegt het niet in één zin, maar zijn titel ("Laat ons toch knallen!") en zijn laatste zin ("Pak liever die mensen aan") laten samen zien wat hij vindt.' },
          { vaardigheid: 'Bedoeling', vraag: 'Waarom vertelt Thijs dat hij een vuurwerkbril draagt en een emmer water klaarzet?', opties: ['Om reclame te maken voor vuurwerkbrillen', 'Om uit te leggen hoe je een brand blust', 'Om te laten zien dat hij zelf veilig en verantwoord met vuurwerk omgaat', 'Omdat zijn vader hem dat verplicht'], goed: 2, uitleg: 'Dit detail ondersteunt zijn mening. Thijs wil zeggen: ik doe het goed, dus het is oneerlijk als ik gestraft word voor mensen die het fout doen.' }
        ]
      }
    ]
  },
  // Dag 60: De kortste dag van het jaar
  {
    hardop: {
      titel: 'De kortste dag van het jaar', soort: 'Informatief', emoji: '🌅',
      alineas: [
        'Wie rond 21 december uit school komt, fietst vaak al in de schemering naar huis. Op die dag komt de zon in het midden van Nederland pas om kwart voor negen op, en rond half vijf is ze alweer verdwenen. Er is dan nog geen acht uur daglicht. Daarom heet 21 december de kortste dag van het jaar, hoewel die dag natuurlijk gewoon vierentwintig uur duurt.',
        'Hoe komt dat? De aarde draait niet alleen om haar eigen as, maar in een jaar ook om de zon. Die as staat een beetje scheef. Daardoor is het noordelijk halfrond, waar Nederland ligt, in december van de zon af gekanteld. De zon klimt overdag maar laag aan de hemel en haar stralen vallen schuin op de grond, zodat ze minder warmte geven. In juni is het precies andersom.',
        'Op het zuidelijk halfrond is 21 december juist de langste dag. In Australië vieren veel mensen Kerstmis daarom op het strand, met een barbecue in plaats van een stamppot. Hoe dichter je bij een van de polen komt, hoe groter de verschillen worden. In het noorden van Noorwegen komt de zon in december zelfs helemaal niet boven de horizon. Dat noemen ze daar de poolnacht.',
        'Al duizenden jaren letten mensen op deze bijzondere dag. Bij het monument Stonehenge in Engeland staan de enorme stenen zo dat je de zon er op de kortste dag precies tussendoor ziet ondergaan. Voor veel volken was dat geen somber moment, maar een reden voor een feest: vanaf nu zou het elke dag weer een beetje lichter worden.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Hoe laat gaat de zon rond 21 december in het midden van Nederland ongeveer onder?', opties: ['Om kwart voor negen', 'Rond half vijf', 'Rond acht uur', 'Rond half zes'], goed: 1, uitleg: 'Zoek gericht naar het stukje over de tijden in alinea 1. Daar staan er twee: kwart voor negen is het moment dat de zon opkomt, rond half vijf is ze "verdwenen". Lees dus goed welke tijd bij welk woord hoort.' },
        { vaardigheid: 'Woordbetekenis', vraag: 'In alinea 2 staat dat het noordelijk halfrond in december "van de zon af gekanteld" is. Wat betekent "gekanteld" hier?', opties: ['dichter naar de zon toe geschoven', 'helemaal stilgezet', 'schuin weggedraaid', 'in tweeën gedeeld'], goed: 2, uitleg: 'Kijk naar de zin ervoor: de as staat "een beetje scheef". Iets wat scheef staat, helt over naar één kant. Gekanteld betekent dus schuin gedraaid, en hier van de zon af, niet ernaartoe.' },
        { vaardigheid: 'Verband', vraag: 'Wat is volgens alinea 2 de oorzaak dat de dagen in december zo kort zijn?', opties: ['De scheve stand van de aardas', 'De aarde staat in december het verst van de zon af', 'De zon geeft in december minder licht', 'De aarde draait in de winter langzamer om haar as'], goed: 0, uitleg: 'Het signaalwoord "Daardoor" laat zien wat oorzaak en gevolg is. Vóór "Daardoor" staat de oorzaak: de as staat scheef. De andere antwoorden klinken misschien logisch, maar ze staan niet in de tekst (en ze kloppen ook niet).' },
        { vaardigheid: 'Eigen kennis', vraag: 'Wat kun je met de tekst en je eigen kennis zeggen over 21 juni in Australië?', opties: ['Dan is het daar ook de langste dag van het jaar', 'Dan komt de zon daar helemaal niet op', 'Dan is het daar even lang licht als in december', 'Dan is het daar ongeveer de kortste dag van het jaar'], goed: 3, uitleg: 'In alinea 2 staat dat het in juni "precies andersom" is, en in alinea 3 dat de seizoenen op het zuidelijk halfrond omgekeerd zijn. Is 21 december in Australië de langste dag, dan is 21 juni daar dus ongeveer de kortste. De poolnacht hoort alleen bij gebieden dicht bij de pool.' },
        { vaardigheid: 'Bedoeling', vraag: 'Waarom schrijft de schrijver in alinea 1: "hoewel die dag natuurlijk gewoon vierentwintig uur duurt"?', opties: ['Om te laten zien dat de naam "kortste dag" eigenlijk een fout is die je beter niet kunt gebruiken', 'Om duidelijk te maken dat "kortste dag" gaat over het aantal uren daglicht', 'Om uit te leggen dat de aarde in december sneller draait', 'Om de lezer te laten weten hoe laat het donker wordt'], goed: 1, uitleg: '"Hoewel" kondigt een tegenstelling aan. De schrijver voorkomt een misverstand: de dag duurt niet korter, er is alleen minder licht. Hij zegt niet dat je de naam niet mag gebruiken, hij legt hem juist uit.' },
        { vaardigheid: 'Oorzaak en gevolg', vraag: 'Waarom is het in december volgens de tekst niet alleen donkerder, maar ook kouder? Welke combinatie klopt?', opties: ['De zon staat dan verder weg, en er hangen meer wolken boven het land', 'De zon komt helemaal niet op, en het waait harder', 'Minder uren zon, en schuine stralen die minder warmte geven', 'De stralen vallen recht op de grond, en de dagen zijn korter'], goed: 2, uitleg: 'Zoek de woorden die een gevolg aangeven, zoals "zodat". In alinea 2 staat dat de stralen schuin vallen, "zodat ze minder warmte geven". Samen met de korte dagen uit alinea 1 levert dat het goede antwoord op. De andere combinaties staan niet in de tekst of zijn juist het omgekeerde.' }
      ]
    },
    kort: [
      {
        titel: 'Zon op en zon onder', soort: 'Tabel',
        tekst: [
          'Zon op en zon onder in De Bilt (december)',
          'Datum | Zon op | Zon onder | Daglicht',
          '1 december | 8.24 uur | 16.33 uur | 8 uur en 9 minuten',
          '11 december | 8.37 uur | 16.28 uur | 7 uur en 51 minuten',
          '21 december | 8.45 uur | 16.29 uur | 7 uur en 44 minuten',
          '31 december | 8.48 uur | 16.37 uur | 7 uur en 49 minuten'
        ],
        vragen: [
          { vaardigheid: 'Tabel lezen', vraag: 'Op welke datum uit de tabel komt de zon het laatst op?', opties: ['1 december', '11 december', '21 december', '31 december'], goed: 3, uitleg: 'Kijk alleen in de kolom "Zon op" en zoek de latere tijd. Veel kinderen kiezen 21 december omdat dat de kortste dag is, maar de zon komt op 31 december nog drie minuten later op (8.48 uur). Daarom is het een tabel waard: precies kijken loont.' },
          { vaardigheid: 'Tabel lezen', vraag: 'Op 11 december gaat de zon eerder onder dan op 21 december. Waarom heeft 21 december toch minder daglicht?', opties: ['Omdat de zon 8 minuten later opkomt en maar 1 minuut later ondergaat', 'Omdat de zon op 21 december eerder ondergaat dan op 11 december', 'Omdat de tabel op 21 december een fout bevat', 'Omdat het rond 21 december vaker bewolkt is, waardoor het eerder donker wordt'], goed: 0, uitleg: 'Bij een tabel combineer je kolommen. Vergelijk beide tijden: zon op 8.37 tegen 8.45 (8 minuten later) en zon onder 16.28 tegen 16.29 (1 minuut later). Je verliest \'s ochtends meer licht dan je \'s avonds wint.' }
        ]
      },
      {
        titel: 'Winterlichtjesavond', soort: 'Poster',
        tekst: [
          'Winterlichtjesavond in Park De Linde',
          'Maandag 21 december, de kortste dag van het jaar',
          '16.30 uur: verzamelen bij de muziektent',
          '17.00 uur: lichtjestocht door het park (ongeveer 45 minuten)',
          '17.45 uur: warme chocolademelk en verhalen bij het vuur',
          'Neem een lampion of zaklamp mee. Echte kaarsjes zijn niet toegestaan.',
          'Gratis. Kinderen tot 8 jaar alleen onder begeleiding van een volwassene.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat mag je NIET meenemen naar de lichtjestocht?', opties: ['Een lampion', 'Een zaklamp', 'Een echt kaarsje', 'Een volwassene'], goed: 2, uitleg: 'Let op het woord NIET in de vraag. Zoek de regel met "niet toegestaan": echte kaarsjes. Een lampion en een zaklamp moet je juist meenemen.' },
          { vaardigheid: 'Eigen kennis', vraag: 'Waarom begint de avond waarschijnlijk om half vijf?', opties: ['Omdat de kinderen dan net uit school komen', 'Omdat het dan ongeveer donker begint te worden', 'Omdat de chocolademelk dan klaar is', 'Omdat het park pas om half vijf zijn poorten opent'], goed: 1, uitleg: 'Dit staat niet letterlijk op de poster. Combineer wat er staat ("de kortste dag van het jaar", lichtjes) met wat je weet: lichtjes zie je pas goed als het donker wordt, en op 21 december gaat de zon rond half vijf onder.' }
        ]
      }
    ]
  },
  // Dag 61: Het kerstdiner
  {
    hardop: {
      titel: 'Het kerstdiner', soort: 'Verhalend', emoji: '🍽️',
      alineas: [
        'Zolang Sem zich kon herinneren, kookte oma op eerste kerstdag voor de hele familie. Maar dit jaar zat haar rechterarm in het gips, na een val op straat. "Dan gaat het kerstdiner dus niet door," zei Sems vader somber. Sem keek naar zijn zus Noor. Zonder iets te zeggen wisten ze allebei wat de ander dacht.',
        'Twee weken lang oefenden ze. Noor schreef een menu op een groot vel papier en hing het met magneten op de koelkast: tomatensoep, kip uit de oven met aardappeltjes en als toetje chocolademousse. Sem maakte een planning op de minuut. Om drie uur de mousse, om vier uur de aardappels schillen, om half vijf de kip in de oven. Hij las het lijstje zo vaak dat hij het uit zijn hoofd kende.',
        'Op eerste kerstdag ging het toch mis. De soep was zo zout dat oom Bas met een rood hoofd een heel glas water achteroversloeg. Sem voelde zijn wangen gloeien. Hij wilde het liefst onder de tafel kruipen. Maar naast hem zat oma te schudden van het lachen, met haar gipsarm tegen haar buik.',
        '"Weet je wat ik bij mijn eerste kerstdiner heb gedaan?" vroeg ze, toen ze weer kon praten. "Ik was vergeten de oven aan te zetten. We hebben om negen uur \'s avonds pas gegeten." Iedereen schaterde, en ook Sem moest lachen. De kip was gelukkig perfect, en de mousse was binnen vijf minuten op. Na het afruimen pakte Sem zijn planning nog één keer. Onderaan schreef hij met grote letters: volgend jaar minder zout.'
      ],
      vragen: [
        { vaardigheid: 'Personage', vraag: 'Wat doet Sem om zich goed voor te bereiden op het kerstdiner?', opties: ['Hij schrijft het menu op een groot vel papier', 'Hij maakt een planning op de minuut', 'Hij vraagt oma om hulp bij het koken', 'Hij kookt het hele menu twee keer van tevoren'], goed: 1, uitleg: 'Lees goed wie wat doet in alinea 2. Noor schrijft het menu, Sem maakt de planning. Bij zulke vragen zit de val vaak in een detail dat wel in de tekst staat, maar bij een ander personage hoort.' },
        { vaardigheid: 'Tussen de regels', vraag: '"Zonder iets te zeggen wisten ze allebei wat de ander dacht." Wat dachten Sem en Noor?', opties: ['Dat oma het toch wel zou redden met één arm', 'Dat het kerstdiner dit jaar beter kon worden overgeslagen', 'Dat ze vader moesten troosten', 'Dat zij het kerstdiner dan zelf zouden koken'], goed: 3, uitleg: 'Het staat er niet letterlijk, maar de volgende alinea verraadt het: "Twee weken lang oefenden ze." Als je een gedachte niet kunt vinden, kijk dan wat de personages daarna doen.' },
        { vaardigheid: 'Beeldspraak', vraag: '"Sem voelde zijn wangen gloeien." Wat betekent dat hier?', opties: ['Sem schaamde zich', 'Sem had koorts', 'Sem had te dicht bij de oven gestaan', 'Sem was boos op oom Bas'], goed: 0, uitleg: 'Gloeiende wangen krijg je als je je schaamt. Dat past bij de volgende zin: hij wilde het liefst onder de tafel kruipen. De soep die hij zelf had gemaakt, was mislukt.' },
        { vaardigheid: 'Personage', vraag: 'Welk woord past het best bij Sem, als je let op alinea 2?', opties: ['slordig', 'ongeduldig', 'zorgvuldig', 'onverschillig'], goed: 2, uitleg: 'Typeer een personage met bewijs uit de tekst. Sem maakt een planning "op de minuut" en leest die zo vaak dat hij hem uit zijn hoofd kent. Dat doet iemand die zorgvuldig is en niets aan het toeval wil overlaten.' },
        { vaardigheid: 'Bedoeling', vraag: 'Waarom vertelt oma over haar eigen eerste kerstdiner?', opties: ['Om op te scheppen dat zij vroeger beter kon koken', 'Om Sem te laten merken dat fouten maken niet erg is', 'Om te zeggen dat ze volgend jaar weer zelf wil koken', 'Om oom Bas te plagen met zijn rode hoofd'], goed: 1, uitleg: 'Oma zegt het niet letterlijk, maar je kunt het afleiden: ze vertelt het op het moment dat Sem zich schaamt, en ze vertelt over een fout die nog veel groter was. Het gevolg is dat iedereen lacht, ook Sem. Dat was precies haar bedoeling.' },
        { vaardigheid: 'Ontwikkeling', vraag: 'Wat laat de laatste zin ("volgend jaar minder zout") zien over Sem?', opties: ['Hij is nog steeds boos over de mislukte soep', 'Hij wil volgend jaar niet meer koken', 'Hij vindt dat oom Bas te veel zeurde over de soep', 'Hij kan om zijn fout lachen en wil ervan leren'], goed: 3, uitleg: 'Vergelijk Sem in alinea 3 (hij wil onder de tafel kruipen) met Sem aan het eind. Hij schrijft een grapje onder zijn planning en denkt al aan volgend jaar. Hij is dus veranderd: de schaamte is weg.' }
      ]
    },
    kort: [
      {
        titel: 'Kerstmenu Eetcafé De Kroon', soort: 'Menukaart',
        tekst: [
          'Eetcafé De Kroon – kerstmenu (25 en 26 december)',
          'Voorgerecht (kies één): tomatensoep / pompoensoep / carpaccio (+ € 3,00)',
          'Hoofdgerecht (kies één): kalkoen met cranberrysaus / zalm met kruidenkorst / vegetarische Wellington',
          'Nagerecht (kies één): chocolademousse / kerstijs / kaasplankje (+ € 4,00)',
          'Driegangenmenu: € 39,50 per persoon',
          'Kindermenu (tot en met 11 jaar): € 17,50 – soep, kipnuggets of pasta, en een ijsje',
          'Reserveren is verplicht: bel vóór 20 december.'
        ],
        vragen: [
          { vaardigheid: 'Menukaart lezen', vraag: 'Wat kost het driegangenmenu met carpaccio, zalm en chocolademousse?', opties: ['€ 42,50', '€ 39,50', '€ 46,50', '€ 43,50'], goed: 0, uitleg: 'Begin bij de basisprijs: € 39,50. Kijk dan per gang of er "+" achter je keuze staat. Alleen carpaccio kost € 3,00 extra; de zalm en de mousse niet. € 39,50 + € 3,00 = € 42,50.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Lotte is 12 jaar. Ze wil het kindermenu met pasta. Kan dat?', opties: ['Ja, want het kindermenu is voor alle kinderen', 'Ja, maar dan moet ze € 3,00 bijbetalen', 'Nee, want het kindermenu is tot en met 11 jaar', 'Nee, want pasta zit niet in het kindermenu'], goed: 2, uitleg: '"Tot en met 11 jaar" betekent: 11 doet nog mee, 12 niet meer. Let bij leeftijden en datums altijd op kleine woorden als "tot", "tot en met" en "vanaf".' }
        ]
      },
      {
        titel: 'Kerstkransjes', soort: 'Recept',
        tekst: [
          'Kerstkransjes (ongeveer 20 stuks)',
          'Je hebt nodig: 200 gram bloem, 100 gram suiker, 150 gram koude boter, een snufje zout, 1 ei, hagelslag of gekleurde suiker.',
          '1. Verwarm de oven voor op 180 °C.',
          '2. Snijd de boter in blokjes. Kneed de boter met de bloem, de suiker en het zout tot een glad deeg.',
          '3. Laat het deeg een halfuur in de koelkast rusten, anders plakt het bij het uitsteken.',
          '4. Rol het deeg uit tot het een halve centimeter dik is en steek er rondjes uit. Maak in het midden van elk rondje een gaatje met een appelboor.',
          '5. Klop het ei los, bestrijk de koekjes ermee en strooi er hagelslag over.',
          '6. Bak de kransjes in 12 tot 15 minuten goudbruin. Laat ze afkoelen en hang ze met een lintje in de kerstboom.'
        ],
        vragen: [
          { vaardigheid: 'Instructie', vraag: 'Waarom moet het deeg eerst een halfuur in de koelkast?', opties: ['Anders wordt de oven niet warm genoeg', 'Anders blijft de hagelslag niet zitten', 'Anders smelt de suiker', 'Anders plakt het deeg bij het uitsteken'], goed: 3, uitleg: 'Het signaalwoord "anders" geeft aan wat er gebeurt als je een stap overslaat. In stap 3 staat het meteen erachter: anders plakt het bij het uitsteken.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Waarvoor gebruik je het ei in dit recept?', opties: ['Om de koekjes te bestrijken', 'Om het deeg te kneden', 'Om het gaatje te maken', 'Om het deeg in de koelkast te laten rusten'], goed: 0, uitleg: 'Het ei staat in de lijst met ingrediënten, maar niet in stap 2 bij het kneden. Zoek het woord "ei" in de stappen: in stap 5 klop je het los en bestrijk je de koekjes ermee.' }
        ]
      }
    ]
  },
  // Dag 62: Winter
  {
    hardop: {
      titel: 'Winter', soort: 'Gedicht', emoji: '❄️',
      alineas: [
        'Vannacht trok de sloot een jas aan van glas,\nde rijp legde zilver op elk sprietje gras.\nDe wilgen staan stil met hun haren vol ijs,\nals oude mannetjes, gebogen en grijs.',
        'Een merel zit bol op de rand van de schuur,\nhij pikt in een appel, bevroren en zuur.\nMijn adem wordt wolkjes, mijn neus wordt een kers,\nde lucht ruikt naar sneeuw en de morgen is vers.',
        'Dan valt het: eerst één vlok, dan duizend tegelijk,\nze leggen een deken op daken en dijk.\nGeen voetstap, geen fiets, er is niets meer te horen,\nde wereld is stil, als in watten verloren.',
        'Straks roept mama: "Binnen!" De lampen gaan aan.\nMaar eerst blijf ik even hier buiten nog staan.\nWant winter is kort en de dooi komt te snel:\ndit witte, dit stille, dat onthoud ik wel.'
      ],
      vragen: [
        { vaardigheid: 'Rijm', vraag: 'Hoe rijmen de regels in elke strofe van dit gedicht?', opties: ['Regel 1 rijmt op regel 3, en regel 2 op regel 4', 'Regel 1 rijmt op regel 2, en regel 3 op regel 4', 'Regel 1 rijmt op regel 4, en regel 2 op regel 3', 'De regels rijmen niet'], goed: 1, uitleg: 'Kijk naar de laatste woorden van elke regel. In strofe 1: glas – gras, ijs – grijs. Twee regels die na elkaar op elkaar rijmen, heet gepaard rijm.' },
        { vaardigheid: 'Opbouw', vraag: 'In welke strofe verandert het weer?', opties: ['In strofe 1', 'In strofe 2', 'In strofe 4', 'In strofe 3'], goed: 3, uitleg: 'In strofe 1 en 2 is het helder en koud: rijp, ijs en een merel bij een bevroren appel. Strofe 3 begint met "Dan valt het": de sneeuw komt. Het woordje "Dan" laat zien dat er iets nieuws gebeurt. In strofe 4 wordt het avond, maar het weer verandert niet opnieuw.' },
        { vaardigheid: 'Beeldspraak', vraag: '"Vannacht trok de sloot een jas aan van glas." Wat bedoelt de dichter?', opties: ['Er is een dun laagje ijs op de sloot gekomen', 'Iemand heeft glas in de sloot gegooid', 'De sloot is \'s nachts helemaal leeggelopen', 'Het water in de sloot is \'s nachts heel helder geworden'], goed: 0, uitleg: 'Dit is beeldspraak: een sloot kan geen jas aantrekken. De dichter bedoelt iets wat over het water heen is gekomen en er doorzichtig uitziet, net als glas. In de winter is dat een laagje ijs.' },
        { vaardigheid: 'Vergelijking', vraag: 'De wilgen lijken "oude mannetjes, gebogen en grijs". Waarom vergelijkt de dichter ze daarmee?', opties: ['Wilgen worden heel oud', 'Er staan oude mannen tussen de wilgen', 'Hun takken hangen krom en zijn grijs-wit van het ijs', 'De wilgen maken een krakend geluid, net als oude mensen'], goed: 2, uitleg: 'Bij een vergelijking zoek je wat de twee dingen gemeen hebben. "Met hun haren vol ijs" zijn de hangende takken. Die zijn gebogen en grijs door het ijs, net als een oud mannetje met grijs haar.' },
        { vaardigheid: 'Personage', vraag: 'Waarom wil de ik-persoon in de laatste strofe nog even buiten blijven?', opties: ['Omdat het binnen te warm en te druk is met al die lampen', 'Omdat de sneeuw snel zal smelten en de ik dit wil onthouden', 'Omdat de ik nog een sneeuwpop wil maken voordat het donker is', 'Omdat de ik niet wil luisteren naar mama'], goed: 1, uitleg: 'Het antwoord staat na het signaalwoord "Want": "winter is kort en de dooi komt te snel". Dooi betekent dat het ijs en de sneeuw smelten. Daarom wil de ik het witte en stille nog even in zich opnemen.' },
        { vaardigheid: 'Dichttechniek', vraag: 'De sloot "trekt een jas aan" en de wilgen lijken "oude mannetjes". Wat bereikt de dichter met zulke beelden?', opties: ['De lezer weet precies hoe koud het is', 'Het gedicht gaat eigenlijk over mensen in plaats van over de winter', 'De regels gaan er beter door rijmen', 'De natuur lijkt te leven, zodat je de winterse plek scherp voor je ziet'], goed: 3, uitleg: 'De dichter doet alsof dingen uit de natuur mensen zijn: de sloot kleedt zich aan, de wilgen zijn oude mannetjes. Dat heet personificatie. Het effect is dat het gedicht levendig wordt: je ziet de bevroren sloot en de wilgen bijna voor je.' }
      ]
    },
    kort: [
      {
        titel: 'Het weer voor het weekend', soort: 'Weerbericht',
        tekst: [
          'Zaterdag: droog en zonnig, maar koud. In de ochtend matige vorst, tot -6 °C. In de middag rond 0 °C. Zwakke oostenwind.',
          'Zondag: in de loop van de ochtend vanuit het zuidwesten sneeuw, later overgaand in regen. In de middag 3 °C. Kans op gladheid op wegen en fietspaden, vooral in de ochtend!',
          'Maandag: zacht en nat, 7 °C. De dooi zet door.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Op welk moment is het volgens het weerbericht het koudst?', opties: ['Zaterdagochtend', 'Zaterdagmiddag', 'Zondagmiddag', 'Maandag'], goed: 0, uitleg: 'Vergelijk alle temperaturen: -6 °C, 0 °C, 3 °C en 7 °C. Het laagste getal is -6 °C, en dat hoort bij zaterdagochtend.' },
          { vaardigheid: 'Woordbetekenis', vraag: 'Wat betekent "De dooi zet door"?', opties: ['Het gaat na het weekend weer harder vriezen', 'Er valt maandag nog meer sneeuw dan zondag', 'Het blijft boven nul, dus het smelt verder', 'Het wordt droog en zonnig'], goed: 2, uitleg: 'Gebruik de woorden eromheen: maandag is het "zacht en nat, 7 °C". Bij zeven graden smelt sneeuw. "Doorzetten" betekent hier: doorgaan. Dooi is dus het smelten na een periode van vorst, en dat gaat maandag door.' }
        ]
      },
      {
        titel: 'Herbruikbare handwarmer', soort: 'Gebruiksaanwijzing',
        tekst: [
          'Herbruikbare handwarmer – gebruiksaanwijzing',
          '1. Knik het metalen plaatje in de vloeistof een paar keer heen en weer.',
          '2. De vloeistof wordt wit en hard en warmt op tot ongeveer 50 °C. De warmte blijft ongeveer een halfuur.',
          '3. Opnieuw gebruiken? Leg de harde handwarmer in een pan kokend water tot alle witte kristallen zijn verdwenen (ongeveer 10 minuten). Laat hem daarna afkoelen.',
          'Let op: prik nooit in het zakje.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Hoe lang blijft de handwarmer ongeveer warm?', opties: ['Ongeveer 10 minuten', 'Ongeveer een halfuur', 'Ongeveer 50 minuten', 'De hele dag'], goed: 1, uitleg: 'In stap 2 staat: "De warmte blijft ongeveer een halfuur." De andere getallen staan ook in de tekst (10 minuten koken, 50 graden), maar ze horen bij iets anders. Lees dus goed wat bij welk getal hoort.' },
          { vaardigheid: 'Instructie', vraag: 'Jesse heeft zijn handwarmer net gebruikt. Hij is nu wit, hard en koud. Wat moet hij doen om hem morgen weer te kunnen gebruiken?', opties: ['Het metalen plaatje nog een paar keer heen en weer knikken', 'Hem een nacht in de vriezer leggen, zodat de kristallen verdwijnen', 'Er met een speld een gaatje in prikken', 'Hem in kokend water leggen tot de kristallen weg zijn'], goed: 3, uitleg: 'Zoek de stap die past bij de situatie van Jesse: "Opnieuw gebruiken?" Dat is stap 3. Het plaatje knikken (stap 1) werkt alleen als de vloeistof weer vloeibaar is. Prikken mag nooit.' }
        ]
      }
    ]
  },
  // Dag 63: De geschiedenis van de kerstboom
  {
    hardop: {
      titel: 'De geschiedenis van de kerstboom', soort: 'Informatief', emoji: '🎄',
      alineas: [
        'In bijna elke Nederlandse woonkamer staat in december een kerstboom. Toch is dat een vrij nieuwe gewoonte. Wel haalden mensen al heel lang groene takken in huis in de donkere dagen rond midwinter. Een boom die in de winter groen blijft, was voor hen een teken van leven en hoop: het licht en de warmte zouden terugkomen.',
        'De eerste versierde kerstbomen stonden ruim vierhonderd jaar geleden in Duitsland en in de Elzas, een streek die nu bij Frankrijk hoort. Daar hingen mensen appels, noten en papieren rozen in een spar. Later kwamen er brandende kaarsjes bij. Dat was prachtig, maar ook gevaarlijk: menige boom ging in vlammen op.',
        'Rond 1850 werd de kerstboom in grote delen van Europa populair. Dat kwam vooral door koningin Victoria van Engeland en haar Duitse man Albert. In een krant verscheen een tekening van het koninklijk gezin rond hun versierde boom, en veel rijke families wilden dat meteen nadoen. In Nederland bleef de kerstboom lang iets voor deftige families. Pas in de twintigste eeuw, vooral na de Tweede Wereldoorlog, kreeg bijna ieder gezin er een.',
        'Tegenwoordig worden er in Nederland elk jaar ongeveer twee miljoen echte kerstbomen verkocht. Elektrische lampjes hebben de kaarsjes vervangen, dus het brandgevaar is veel kleiner. Wel vragen steeds meer mensen zich af of het verstandig is om ieder jaar een boom te laten kappen. Sommigen kiezen daarom voor een boom met kluit, die na de feestdagen weer in de tuin kan.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Wat hingen mensen in de eerste versierde kerstbomen?', opties: ['Elektrische lampjes en slingers', 'Groene takken', 'Appels, noten en papieren rozen', 'Glazen kerstballen en een piek'], goed: 2, uitleg: 'Zoek de alinea over "de eerste versierde kerstbomen": dat is alinea 2. Daar staat het rijtje. Elektrische lampjes kwamen pas veel later, en glazen ballen worden in de tekst niet genoemd.' },
        { vaardigheid: 'Signaalwoord', vraag: '"In bijna elke Nederlandse woonkamer staat in december een kerstboom. Toch is dat een vrij nieuwe gewoonte." Wat geeft "Toch" hier aan?', opties: ['Een tegenstelling: het lijkt een oude gewoonte, maar dat is het niet', 'Een oorzaak: omdat iedereen een boom heeft, is het een nieuwe gewoonte', 'Een opsomming: er komt nog een voorbeeld bij', 'Een tijd: eerst kwam de boom, toen de woonkamer'], goed: 0, uitleg: '"Toch" is een signaalwoord van tegenstelling, net als "maar" en "echter". Het tweede deel botst met wat je na het eerste deel zou verwachten: zo\'n gewone boom, en dan toch zo nieuw.' },
        { vaardigheid: 'Woordbetekenis', vraag: 'In alinea 3 bleef de kerstboom lang "iets voor deftige families". Wat betekent "deftig"?', opties: ['groot, met veel kinderen', 'rijk en voornaam', 'gelovig', 'arm en eenvoudig'], goed: 1, uitleg: 'Kijk naar de zin ervoor: "veel rijke families wilden dat meteen nadoen". De schrijver bedoelt dezelfde groep mensen. Deftig betekent: rijk, voornaam en een beetje chic.' },
        { vaardigheid: 'Eigen kennis', vraag: 'Waarom is het brandgevaar met elektrische lampjes veel kleiner dan met kaarsjes?', opties: ['Lampjes geven meer licht', 'Lampjes hangen hoger in de boom', 'Lampjes zijn goedkoper', 'Lampjes hebben geen open vlam'], goed: 3, uitleg: 'Dit staat niet in de tekst; je gebruikt je eigen kennis. Een kaars heeft een vlam die een tak of papieren roos kan laten ontbranden. Een lampje heeft geen vlam.' },
        { vaardigheid: 'Alinea', vraag: 'Wat is de functie van alinea 1 in deze tekst?', opties: ['Hij vat de hele geschiedenis van de kerstboom kort samen', 'Hij geeft de mening van de schrijver over kerstbomen', 'Hij leidt het onderwerp in en vertelt wat eraan voorafging', 'Hij legt uit hoe je een kerstboom versiert'], goed: 2, uitleg: 'Een inleiding vertelt waar de tekst over gaat en maakt de lezer nieuwsgierig. Alinea 1 begint bij iets bekends (de boom in de woonkamer), zegt dan dat het een nieuwe gewoonte is en vertelt wat eraan voorafging. De rest van de geschiedenis volgt in de kern.' },
        { vaardigheid: 'Feit of mening', vraag: 'Welke zin uit de tekst bevat een mening?', opties: ['"Dat was prachtig, maar ook gevaarlijk."', '"De Elzas is een streek die nu bij Frankrijk hoort."', '"Er worden elk jaar ongeveer twee miljoen kerstbomen verkocht."', '"In een krant verscheen een tekening van het koninklijk gezin."'], goed: 0, uitleg: 'Een feit kun je controleren; een mening is wat iemand ergens van vindt. Of de Elzas bij Frankrijk hoort en hoeveel bomen er verkocht worden, kun je opzoeken. "Prachtig" is een oordeel: niet iedereen hoeft dat te vinden.' }
      ]
    },
    kort: [
      {
        titel: 'Kerstbomen van Kwekerij Groenhart', soort: 'Advertentie',
        tekst: [
          'Kwekerij Groenhart – verse kerstbomen uit eigen teelt',
          'Nordmann (valt nauwelijks uit) | 100–125 cm: € 29 | 125–150 cm: € 39 | 150–175 cm: € 49',
          'Fijnspar (geurt heerlijk, maar verliest sneller zijn naalden) | 100–125 cm: € 19 | 125–150 cm: € 25 | 150–175 cm: € 32',
          'Boom met kluit: € 10 extra',
          'Gratis thuisbezorgd bij aankoop boven € 45.',
          'Open vanaf 5 december, dagelijks van 9.00 tot 17.00 uur.'
        ],
        vragen: [
          { vaardigheid: 'Prijslijst lezen', vraag: 'Familie Peters koopt een fijnspar van 160 cm met kluit. Wat klopt?', opties: ['Ze betalen € 42 en de boom wordt gratis bezorgd', 'Ze betalen € 42 en de boom wordt niet gratis bezorgd', 'Ze betalen € 32 en de boom wordt gratis bezorgd', 'Ze betalen € 59 en de boom wordt gratis bezorgd'], goed: 1, uitleg: 'Zoek eerst de goede rij (fijnspar) en de goede kolom (150–175 cm): € 32. Daar komt € 10 bij voor de kluit: € 42. Daarna nog één regel checken: gratis bezorgen pas boven € 45. Dat halen ze dus niet.' },
          { vaardigheid: 'Woordbetekenis', vraag: 'Wat betekent het dat de Nordmann "nauwelijks uitvalt"?', opties: ['Hij valt bijna nooit om', 'Hij is bijna nooit uitverkocht', 'Hij groeit bijna niet meer', 'Hij verliest bijna geen naalden'], goed: 3, uitleg: 'De advertentie zet de twee bomen tegenover elkaar. Bij de fijnspar staat dat hij "sneller zijn naalden verliest". Bij de Nordmann staat het omgekeerde, alleen in andere woorden. Uitvallen betekent hier dus: naalden verliezen.' }
        ]
      },
      {
        titel: 'Kerstbomen inzamelen', soort: 'Folder',
        tekst: [
          'Gemeente Lindewaard – kerstbomen inzamelen',
          'Breng je kerstboom van zaterdag 2 tot en met woensdag 6 januari naar een van de inleverpunten: speeltuin De Klimop, sportpark Noord of het plein bij de bibliotheek. Open van 13.00 tot 16.00 uur.',
          'Haal eerst alle versiering, lampjes en spijkers uit de boom. Bomen met kluit of in een pot nemen we niet aan.',
          'Voor elke boom krijg je een lot voor de verloting van een gezinsbon voor de dierentuin. Kinderen tot en met 12 jaar krijgen per boom ook 50 cent.'
        ],
        vragen: [
          { vaardigheid: 'Teksten vergelijken', vraag: 'Familie De Vries heeft bij Kwekerij Groenhart een Nordmann met kluit gekocht. Wat kunnen ze na de feestdagen NIET met de boom doen, als je beide teksten leest?', opties: ['Hem na de feestdagen in de tuin planten', 'De versiering eruit halen', 'Hem inleveren bij een inleverpunt', 'Hem nog een paar dagen in de woonkamer laten staan'], goed: 2, uitleg: 'Combineer de twee teksten. Uit de advertentie weet je dat hun boom een kluit heeft. In de folder staat dat bomen met kluit niet worden aangenomen. Zo\'n boom kun je juist goed in de tuin zetten.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Ilse (11) levert twee kale kerstbomen in. Wat krijgt ze?', opties: ['Twee loten en 1 euro', 'Eén lot en 50 cent', 'Twee loten en 50 cent', 'Een gezinsbon voor de dierentuin'], goed: 0, uitleg: 'Per boom krijg je een lot, en kinderen tot en met 12 jaar per boom ook 50 cent. Twee bomen is dus twee loten en twee keer 50 cent. De gezinsbon kun je alleen winnen.' }
        ]
      }
    ]
  },
  // Dag 64: Verdwaald in de sneeuw
  {
    hardop: {
      titel: 'Verdwaald in de sneeuw', soort: 'Verhalend', emoji: '🌨️',
      alineas: [
        'Toen Ravi en zijn zusje Fenna na de lunch het bos in liepen, lag er een dun laagje sneeuw en scheen de zon. Ze trokken de slee achter zich aan naar de heuvel bij de zandverstuiving. Fenna gilde van plezier bij elke afdaling. Geen van beiden lette op de grauwe wolken die van achter de bomen kwamen aanschuiven.',
        'Rond drie uur begon het te sneeuwen, eerst zachtjes, daarna zo dicht dat Ravi zijn eigen handschoenen nauwelijks nog zag. Hij besloot terug te gaan, maar na een paar minuten bleef hij staan. Waar was het pad? Hun voetstappen waren al onder een witte laag verdwenen, en elke boom leek op de vorige. "We zijn verdwaald, hè?" fluisterde Fenna. Haar onderlip trilde.',
        'Ravi voelde zijn hart in zijn keel kloppen, maar hij hield zijn stem rustig. "Niks aan de hand," zei hij, al wist hij dat het niet waar was. Toen dacht hij aan wat opa altijd zei: als je verdwaalt, ga dan niet rennen, maar blijf staan en luister. Ze stonden stokstijf. Het bos was doodstil. En toen, heel ver weg, klonk het: bong, bong, bong, bong. De kerkklok van het dorp.',
        'Ravi wist dat het huisje van opa vlak bij de kerk stond. Hij pakte Fenna\'s hand en liep in de richting van het geluid. Toen de klok een kwartier later opnieuw sloeg, paste hij hun koers een beetje aan. Na twintig minuten zagen ze tussen de bomen een gele lamp. Opa stond in de deuropening, met zijn jas al aan. "Ik wilde jullie net gaan zoeken," zei hij. Ravi grijnsde, maar zijn knieën trilden nog.'
      ],
      vragen: [
        { vaardigheid: 'Inhoud', vraag: 'Waardoor konden Ravi en Fenna het pad niet meer vinden?', opties: ['Ze waren in het donker gaan wandelen', 'De slee was kapotgegaan en ze moesten omlopen', 'Ze waren te ver weggerend van opa', 'De sneeuw had hun voetstappen bedekt'], goed: 3, uitleg: 'Zoek het stukje waar het misgaat: alinea 2. Daar staan twee redenen: de voetstappen zijn verdwenen en "elke boom leek op de vorige". Het was nog licht, want het was rond drie uur.' },
        { vaardigheid: 'Gevoel', vraag: 'Hoe voelt Fenna zich als ze fluistert: "We zijn verdwaald, hè?"', opties: ['Bang', 'Boos', 'Opgewonden', 'Verveeld'], goed: 0, uitleg: 'Kijk naar wat haar lichaam doet: ze fluistert en haar onderlip trilt. Zo reageer je als je bang bent en bijna gaat huilen.' },
        { vaardigheid: 'Beeldspraak', vraag: '"Ravi voelde zijn hart in zijn keel kloppen." Wat betekent dat?', opties: ['Ravi had keelpijn van de kou', 'Ravi had te hard gerend', 'Ravi was erg geschrokken en gespannen', 'Ravi was blij dat hij de kerkklok hoorde'], goed: 2, uitleg: 'Je hart klopt natuurlijk niet echt in je keel. Het is een uitdrukking voor hevige schrik of spanning. Het past ook bij de zin erna: hij moet moeite doen om zijn stem rustig te houden.' },
        { vaardigheid: 'Personage', vraag: 'Waarom zegt Ravi "Niks aan de hand", terwijl hij weet dat het niet waar is?', opties: ['Hij denkt echt dat er niets aan de hand is', 'Hij wil zijn zusje geruststellen', 'Hij wil niet dat opa boos wordt', 'Hij wil Fenna voor de gek houden'], goed: 1, uitleg: 'Er staat letterlijk dat hij wist dat het niet waar was. Hij houdt zijn stem rustig omdat zijn zusje bang is. Zo gedraagt een grote broer zich die zijn zusje wil beschermen.' },
        { vaardigheid: 'Vertelwijze', vraag: 'Aan het eind van alinea 1 staat: "Geen van beiden lette op de grauwe wolken die kwamen aanschuiven." Waarom zet de schrijver die zin daar?', opties: ['Om alvast te laten voelen dat er iets mis gaat lopen', 'Om uit te leggen waarom Fenna zo hard gilde', 'Om te laten zien dat het weer die dag mooi bleef', 'Om te vertellen dat de kinderen goed opletten'], goed: 0, uitleg: 'De kinderen merken de wolken niet op, maar de lezer wel. Zo bouwt de schrijver spanning op: je voelt dat er iets gaat gebeuren, en in alinea 2 begint het inderdaad te sneeuwen. Dit heet een vooruitwijzing.' },
        { vaardigheid: 'Realistisch?', vraag: 'Kan dit verhaal in het echt zo gebeurd zijn?', opties: ['Nee, want in Nederland valt nooit zoveel sneeuw', 'Nee, want je kunt een kerkklok niet in een bos horen', 'Nee, want kinderen mogen nooit alleen het bos in', 'Ja, want alles wat er gebeurt, kan echt gebeuren'], goed: 3, uitleg: 'Vraag je af of alles wat gebeurt in het echt kan. Dichte sneeuwbuien komen ook in Nederland voor, en een klok die slaat, draagt in een stil bos heel ver. Er gebeurt niets onmogelijks, dus het verhaal is realistisch.' }
      ]
    },
    kort: [
      {
        titel: 'Buurtbus 507', soort: 'Dienstregeling',
        tekst: [
          'Buurtbus 507 – kerstvakantie',
          'Halte | Rit 1 | Rit 2 | Rit 3 | Rit 4',
          'Station Heideveen | 9.10 | 11.10 | 13.10 | 15.10',
          'Dorpsplein | 9.22 | 11.22 | 13.22 | 15.22',
          'Zwembad De Wiel | 9.27 | – | 13.27 | –',
          'Bosrand (eindhalte) | 9.35 | 11.32 | 13.35 | 15.32',
          '– = deze rit stopt niet bij deze halte.',
          'De buurtbus rijdt van maandag tot en met zaterdag. Op 25 en 26 december en op 1 januari rijdt er geen bus.'
        ],
        vragen: [
          { vaardigheid: 'Dienstregeling', vraag: 'Fenna neemt om 11.10 uur de bus vanaf Station Heideveen. Ze wil naar Zwembad De Wiel. Wat is het probleem?', opties: ['Rit 2 stopt niet bij het zwembad', 'Rit 2 rijdt niet in de kerstvakantie', 'Rit 2 komt pas om 13.27 uur bij het zwembad', 'Rit 2 rijdt alleen tot het Dorpsplein'], goed: 0, uitleg: 'Zoek de rit die om 11.10 uur vertrekt: rit 2. Ga in die kolom naar beneden tot de rij van het zwembad. Daar staat een streepje, en onder de tabel staat wat dat betekent: de bus stopt daar niet.' },
          { vaardigheid: 'Dienstregeling', vraag: 'Op welke dag in de kerstvakantie rijdt de buurtbus NIET?', opties: ['Maandag 28 december', 'Woensdag 30 december', 'Zaterdag 26 december', 'Zaterdag 2 januari'], goed: 2, uitleg: 'Je moet hier twee regels combineren: de bus rijdt van maandag tot en met zaterdag, behalve op 25 en 26 december en 1 januari. Zaterdag 26 december is wel een zaterdag, maar het is ook tweede kerstdag. Dan rijdt er geen bus.' }
        ]
      },
      {
        titel: 'Wat te doen bij onderkoeling?', soort: 'Informatief',
        tekst: [
          'Bij onderkoeling daalt je lichaamstemperatuur onder de 35 °C. Dat kan al gebeuren als het boven nul is, vooral als je kleren nat zijn en het hard waait.',
          'Je herkent het aan: rillen, bleke of blauwe lippen, sufheid en onduidelijk praten.',
          'Wat doe je? Breng de persoon naar een warme, droge plek. Trek natte kleren uit en wikkel hem in dekens. Geef iets warms en zoets te drinken, maar alleen als hij goed wakker is. Wrijf niet over armen en benen.',
          'Bel 112 als iemand erg suf is of niet meer rilt.'
        ],
        vragen: [
          { vaardigheid: 'Toepassen', vraag: 'Opa heeft lang in de kou gestaan. Eerst rilde hij hevig, maar nu rilt hij niet meer en praat hij onduidelijk. Wat moet je volgens de tekst doen?', opties: ['Niets, want hij rilt niet meer, dus hij is weer warm', '112 bellen, want dit zijn ernstige tekens', 'Hem buiten laten rondlopen om warm te worden', 'Stevig over zijn armen en benen wrijven'], goed: 1, uitleg: 'Je zou kunnen denken dat stoppen met rillen goed nieuws is. Maar de tekst zegt: bel 112 als iemand erg suf is of niet meer rilt. Onduidelijk praten hoort ook bij de tekens. Wrijven mag juist niet.' },
          { vaardigheid: 'Toepassen', vraag: 'In welke situatie is de kans op onderkoeling volgens de tekst het grootst?', opties: ['Je loopt bij -2 °C in droge, warme kleren zonder wind', 'Je zit bij 4 °C droog in een schuur', 'Je fietst bij 10 °C in de zon', 'Je loopt bij 4 °C in natte kleren en het waait hard'], goed: 3, uitleg: 'De tekst noemt twee dingen die het gevaar groter maken: natte kleren en harde wind. Het hoeft daarvoor niet te vriezen. De situatie met allebei die dingen is dus het gevaarlijkst, ook al is het boven nul.' }
        ]
      }
    ]
  },
  // Dag 65: Hoe een ijsbaan bevriest
  {
    hardop: {
      titel: 'Hoe een ijsbaan bevriest', soort: 'Informatief', emoji: '⛸️',
      alineas: [
        'Na een paar koude nachten kijkt half Nederland naar de sloten. Gaat het vriezen? Kunnen we schaatsen? Toch bevriest water niet zomaar. Eerst moet het water afkoelen tot nul graden, en daarna moet het nog meer warmte kwijtraken om in ijs te veranderen.',
        'Water verliest vooral \'s nachts warmte, en het snelst als het helder is. Wolken werken als een deken die de warmte vasthoudt. Zonder wolken verdwijnt die warmte de ruimte in. Het water aan de oppervlakte koelt het eerst af. Bijzonder is dat ijs lichter is dan water. Daarom ontstaat ijs altijd aan de bovenkant en blijft het drijven, terwijl vissen eronder gewoon kunnen blijven zwemmen.',
        'Een natuurijsbaan is vaak een weiland dat de ijsclub in de herfst onder water zet. Het laagje water is daar maar een paar centimeter diep. Ondiep water koelt veel sneller af dan een diepe vaart of een meer, en daarom kun je op zo\'n baan meestal het eerst schaatsen. Bovendien is het minder gevaarlijk als je er toch doorheen zakt. IJsmeesters boren gaatjes om te meten hoe dik het ijs is.',
        'Wie niet op de vorst wil wachten, gaat naar een kunstijsbaan. Daar liggen onder de betonnen vloer kilometers buizen met een ijskoude vloeistof, die de vloer tot ver onder nul afkoelt. Daarna spuiten medewerkers er laag voor laag water op, tot er een gladde ijsvloer van een paar centimeter ligt. Zo kun je daar zelfs schaatsen als het buiten tien graden is.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Wanneer verliest water volgens de tekst het snelst warmte?', opties: ['Op een bewolkte nacht', 'Op een zonnige middag', 'Op een heldere nacht', 'Als het hard regent'], goed: 2, uitleg: 'Lees de eerste zin van alinea 2: water verliest vooral \'s nachts warmte, "en het snelst als het helder is". Helder betekent hier: zonder wolken.' },
        { vaardigheid: 'Beeldspraak', vraag: '"Wolken werken als een deken." Wat bedoelt de schrijver?', opties: ['Wolken houden de warmte bij de aarde vast', 'Wolken zijn zacht en wollig', 'Wolken maken het donker, zodat mensen gaan slapen', 'Wolken laten sneeuw vallen als een witte deken'], goed: 0, uitleg: 'Een deken houdt jouw warmte vast, zodat je het niet koud krijgt. De zin erna bevestigt het: zonder wolken "verdwijnt die warmte de ruimte in". De vergelijking gaat dus over warmte, niet over hoe wolken eruitzien.' },
        { vaardigheid: 'Verband', vraag: 'Waarom kun je op een natuurijsbaan in een weiland meestal eerder schaatsen dan op een meer?', opties: ['Omdat de ijsclub er zout op strooit', 'Omdat ondiep water sneller afkoelt dan diep water', 'Omdat er onder een weiland buizen met koude vloeistof liggen', 'Omdat het in een weiland harder waait'], goed: 1, uitleg: 'Het signaalwoord "daarom" verbindt een oorzaak met een gevolg. Vóór "daarom" staat de oorzaak: ondiep water koelt veel sneller af. De buizen horen bij de kunstijsbaan, niet bij het weiland.' },
        { vaardigheid: 'Eigen kennis', vraag: 'Stel dat ijs zwaarder was dan water. Wat zou er dan in een strenge winter met een vijver kunnen gebeuren?', opties: ['Er zou nooit meer ijs op de vijver komen, dus je kon er altijd zwemmen', 'Er verandert niets, want ijs drijft altijd', 'Het water zou warmer worden', 'Het ijs zakt en de vijver kan helemaal dichtvriezen'], goed: 3, uitleg: 'Combineer de tekst met wat je weet: iets wat zwaarder is dan water, zinkt. Zinkt het ijs, dan komt er steeds nieuw water boven dat weer bevriest. Dan blijft er voor de vissen geen water meer over. Daarom is het zo belangrijk dat ijs drijft.' },
        { vaardigheid: 'Samenvatten', vraag: 'Welke kop past het best boven alinea 4?', opties: ['Waarom ijs drijft', 'Gevaarlijk ijs', 'Schaatsen zonder vorst', 'Een weiland onder water'], goed: 2, uitleg: 'Een goede kop vat de hele alinea samen in een paar woorden. Alinea 4 gaat over de kunstijsbaan: daar kun je schaatsen, zelfs als het buiten tien graden is. De andere koppen passen bij andere alinea\'s.' },
        { vaardigheid: 'Middel en doel', vraag: 'In welke zin staan een middel én een doel?', opties: ['"IJsmeesters boren gaatjes om te meten hoe dik het ijs is."', '"Bijzonder is dat ijs lichter is dan water."', '"Het laagje water is daar maar een paar centimeter diep."', '"Water verliest vooral \'s nachts warmte."'], goed: 0, uitleg: 'Een middel is wat je doet, het doel is waarom je het doet. Signaalwoorden zijn "om ... te" en "zodat". Gaatjes boren is het middel, meten hoe dik het ijs is het doel. De andere zinnen geven alleen een feit.' }
      ]
    },
    kort: [
      {
        titel: 'Kunstijsbaan De Vonk', soort: 'Rooster',
        tekst: [
          'Kunstijsbaan De Vonk – kerstvakantie (19 december t/m 3 januari)',
          'Dag | Vrij schaatsen | Schaatsles (6–12 jaar)',
          'Maandag t/m vrijdag | 10.00–16.00 en 19.00–22.00 | 9.00–10.00',
          'Zaterdag en zondag | 10.00–17.00 | geen les',
          '24 en 31 december | 10.00–15.00 | geen les',
          '25 december en 1 januari | gesloten | gesloten',
          'Entree: kinderen t/m 12 jaar € 5,50 – volwassenen € 8,00 – schaatsen huren € 4,00'
        ],
        vragen: [
          { vaardigheid: 'Rooster lezen', vraag: 'Mila wil op donderdag 31 december om 16.00 uur gaan schaatsen. Kan dat?', opties: ['Ja, want op donderdag is de baan open tot 16.00 uur', 'Nee, want op 31 december sluit de baan om 15.00 uur', 'Ja, want de baan is in de vakantie elke dag tot 17.00 uur open', 'Nee, want op 31 december is de baan de hele dag dicht'], goed: 1, uitleg: 'Twee regels lijken te passen: "maandag t/m vrijdag" en "24 en 31 december". De speciale regel voor een datum gaat altijd voor de gewone weekregel. Op 31 december is de baan van 10.00 tot 15.00 uur open, dus om 16.00 uur is hij dicht.' },
          { vaardigheid: 'Rooster lezen', vraag: 'Vader gaat schaatsen met zijn kinderen van 9 en 13 jaar. Alleen vader huurt schaatsen. Wat betalen ze samen?', opties: ['€ 23,00', '€ 21,00', '€ 29,50', '€ 25,50'], goed: 3, uitleg: 'Let op de leeftijdsgrens: "t/m 12 jaar". Het kind van 13 betaalt dus de prijs voor volwassenen. Reken: vader € 8,00 + kind van 13 € 8,00 + kind van 9 € 5,50 + schaatsen € 4,00 = € 25,50.' }
        ]
      },
      {
        titel: 'Bericht van de ijsclub', soort: 'Bericht',
        tekst: [
          'IJsclub De Poldertrappers – woensdag 8.15 uur',
          'Goed nieuws! Na drie nachten vorst is het ijs op onze baan aan de Kerkweg 7 centimeter dik. Dat is nog net te dun. Als het vannacht weer flink vriest, gaat de baan morgen om 13.00 uur open.',
          'Wil je helpen met vegen? Kom morgen om 10.00 uur naar het clubhuis. Helpers schaatsen de hele winter gratis!',
          'Niet-leden betalen € 2 per dag.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat krijgen mensen die helpen met vegen?', opties: ['Ze mogen de hele winter gratis schaatsen', 'Ze krijgen € 2 per dag', 'Ze worden voor een jaar gratis lid van de club', 'Ze mogen als eerste het ijs op'], goed: 0, uitleg: 'Zoek het woord "helpen" in het bericht. In dezelfde regel staat de beloning: helpers schaatsen de hele winter gratis.' },
          { vaardigheid: 'Signaalwoord', vraag: 'Waarom is het nog niet zeker dat de baan donderdag opengaat?', opties: ['Er hebben zich nog niet genoeg helpers aangemeld', 'Het clubhuis is nog dicht', 'Dat hangt ervan af of het vannacht weer flink vriest', 'De ijsmeesters moeten eerst nog gaatjes in het ijs boren'], goed: 2, uitleg: 'Het woordje "Als" laat zien dat er een voorwaarde is: alleen als het vannacht flink vriest, gaat de baan open. Het ijs is nu nog net te dun.' }
        ]
      }
    ]
  },
  // Dag 66: Een cadeau voor Mila
  {
    hardop: {
      titel: 'Een cadeau voor Mila', soort: 'Verhalend', emoji: '🎁',
      alineas: [
        'Mila is jarig op 27 december, precies tussen kerst en oud en nieuw. "Iedereen is dan moe van de cadeaus," zei ze ooit tegen Yara. "Ik krijg altijd iets wat ze nog over hadden." Ze lachte erbij, maar Yara zag dat haar ogen niet meelachten. Daarom had Yara zich voorgenomen: dit jaar krijgt Mila het mooiste cadeau van allemaal.',
        'In de winkel van meneer Hoekstra lag het: een houten kist met zestig tekenstiften in alle kleuren van de regenboog. Mila tekende elke vrije minuut, dus het was perfect. Alleen kostte de kist € 45, en in Yara\'s spaarpot zat nog geen twintig euro. Ze telde het geld drie keer, alsof het daardoor vanzelf meer zou worden.',
        'Die avond lag ze lang wakker. Toen kreeg ze een idee. Ze haalde de oude schoenendoos met foto\'s onder haar bed vandaan. Er zaten foto\'s in van hun eerste schooldag, van het kamp in groep 6 en van de sneeuwpop die ze vorig jaar samen hadden gebouwd. Een week lang plakte, schreef en tekende Yara in een dik schetsboek. Op de laatste bladzijde schreef ze: Wordt vervolgd.',
        'Op 27 december gaf ze het boek, met een rood lint eromheen. Mila sloeg de eerste bladzijde open en werd stil. Ze bladerde verder, langzaam, alsof ze bang was dat het boek zou breken. Bij de laatste bladzijde keek ze op. Haar ogen waren nat. "Dit is het eerste cadeau," zei ze schor, "dat niemand anders had kunnen geven."'
      ],
      vragen: [
        { vaardigheid: 'Inhoud', vraag: 'Waarom koopt Yara de tekenstiften niet?', opties: ['Ze heeft er niet genoeg geld voor', 'Mila heeft al tekenstiften', 'De winkel van meneer Hoekstra is dicht', 'Ze vindt de stiften toch niet mooi genoeg'], goed: 0, uitleg: 'In alinea 2 staat het: de kist kost € 45, en Yara heeft nog geen twintig euro. Het signaalwoord "Alleen" laat zien dat er een probleem komt.' },
        { vaardigheid: 'Tussen de regels', vraag: '"Ze lachte erbij, maar Yara zag dat haar ogen niet meelachten." Wat merkt Yara?', opties: ['Dat Mila een grapje maakt over haar verjaardag', 'Dat Mila moe is van de feestdagen', 'Dat Mila boos is op Yara', 'Dat Mila het eigenlijk jammer vindt'], goed: 3, uitleg: 'Iemand die lacht met haar mond maar niet met haar ogen, doet alsof. "Maar" geeft de tegenstelling aan: van buiten lacht Mila, van binnen vindt ze het verdrietig dat ze altijd iets krijgt "wat ze nog over hadden".' },
        { vaardigheid: 'Beeldspraak', vraag: '"Ze telde het geld drie keer, alsof het daardoor vanzelf meer zou worden." Wat laat die zin zien?', opties: ['Yara kan niet goed rekenen met grote bedragen', 'Yara hoopt dat het toch genoeg is', 'Yara denkt dat ze geld kwijt is', 'Yara wil het geld liever houden'], goed: 1, uitleg: 'Met "alsof" maakt de schrijver een vergelijking. Natuurlijk wordt geld niet meer door het te tellen. Yara weet dat ook wel, maar ze wil het zo graag dat ze het blijft proberen.' },
        { vaardigheid: 'Personage', vraag: 'Welk woord past het best bij Yara?', opties: ['jaloers', 'gierig', 'vindingrijk', 'onverschillig'], goed: 2, uitleg: 'Typeer een personage met bewijs. Yara heeft een probleem (te weinig geld) en bedenkt zelf een andere oplossing: een boek vol herinneringen. Iemand die slim een oplossing vindt, is vindingrijk.' },
        { vaardigheid: 'Figuurlijk taalgebruik', vraag: 'Wat bedoelt Yara met "Wordt vervolgd" op de laatste bladzijde?', opties: ['Dat hun vriendschap nog lang doorgaat', 'Dat ze het boek nog niet af heeft', 'Dat Mila het boek moet teruggeven', 'Dat er een tweede deel in de winkel ligt'], goed: 0, uitleg: '"Wordt vervolgd" staat meestal onder een strip of een serie: het verhaal gaat verder. Yara gebruikt het figuurlijk: het boek gaat over hun vriendschap, en die is nog lang niet voorbij.' },
        { vaardigheid: 'Verband', vraag: 'Waarom zegt Mila dat dit het eerste cadeau is "dat niemand anders had kunnen geven"?', opties: ['Het schetsboek was in geen enkele winkel meer te koop', 'Niemand anders wist dat Mila jarig was', 'De andere cadeaus waren allemaal tekenstiften', 'Het zit vol herinneringen die alleen zij samen hebben'], goed: 3, uitleg: 'Verbind het einde met het begin. Mila kreeg altijd iets "wat ze nog over hadden": cadeaus die je aan iedereen kunt geven. Dit boek zit vol herinneringen van Mila en Yara samen. Daarom kon alleen Yara dit geven.' }
      ]
    },
    kort: [
      {
        titel: 'Kerstdeals bij TekenTop', soort: 'Advertentie',
        tekst: [
          'TekenTop – kerstdeals!',
          'Houten kist met 60 tekenstiften: van € 45,00 voor € 34,95',
          'Schetsboek A4, 120 bladzijden: € 8,50',
          'Set van 12 kleurpotloden: € 6,95',
          'Gratis verzending vanaf € 40. Daaronder betaal je € 3,95 verzendkosten.',
          'Voor 22.00 uur besteld, morgen in huis (niet op zon- en feestdagen).'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Hoeveel korting krijg je met de kerstdeal op de kist met tekenstiften?', opties: ['€ 10,95', '€ 9,95', '€ 10,05', '€ 11,05'], goed: 2, uitleg: 'Trek de nieuwe prijs af van de oude: € 45,00 − € 34,95 = € 10,05. Tip: reken eerst tot € 35,00 (dat is 5 cent) en dan tot € 45,00 (nog € 10). Samen € 10,05.' },
          { vaardigheid: 'Teksten vergelijken', vraag: 'Kijk naar de advertentie én de mail. Waarom betaalt Yara verzendkosten?', opties: ['Haar bestelling kost samen minder dan € 40', 'Ze heeft na 22.00 uur besteld', 'Ze heeft de tekenstiften besteld', 'Verzendkosten moet je altijd betalen'], goed: 0, uitleg: 'In de mail zie je wat Yara bestelde: € 8,50 + € 6,95 = € 15,45. In de advertentie staat dat verzending pas vanaf € 40 gratis is. Daaronder betaal je € 3,95, en dat bedrag staat ook in de mail.' }
        ]
      },
      {
        titel: 'Je bestelling is ontvangen', soort: 'Mail',
        tekst: [
          'Van: Klantenservice TekenTop',
          'Onderwerp: Je bestelling 40125 is ontvangen',
          'Beste Yara,',
          'Bedankt voor je bestelling! Je hebt besteld:',
          '1 × Schetsboek A4, 120 bladzijden – € 8,50',
          '1 × Set van 12 kleurpotloden – € 6,95',
          'Verzendkosten – € 3,95',
          'Totaal – € 19,40',
          'Je hebt besteld op zaterdag 19 december om 21.40 uur. Je pakketje wordt bezorgd op maandag 21 december.',
          'Met vriendelijke groet, het team van TekenTop'
        ],
        vragen: [
          { vaardigheid: 'Teksten vergelijken', vraag: 'Yara bestelde voor 22.00 uur. Waarom komt het pakketje dan toch pas op maandag?', opties: ['Ze bestelde te laat op de avond', 'Op zondag wordt er niet bezorgd', 'Kleurpotloden zijn niet op voorraad', 'Ze betaalde geen verzendkosten'], goed: 1, uitleg: 'In de advertentie staat: voor 22.00 uur besteld, morgen in huis, "niet op zon- en feestdagen". Yara bestelde op zaterdag; morgen is dan zondag. Daarom schuift de bezorging op naar maandag.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat heeft Yara NIET besteld?', opties: ['Een schetsboek', 'Kleurpotloden', 'Een product van € 6,95', 'De kist met tekenstiften'], goed: 3, uitleg: 'Vergelijk het lijstje in de mail met de producten in de advertentie. Het schetsboek en de kleurpotloden staan erin, de kist met tekenstiften niet. Dat past ook bij het verhaal: daar had ze te weinig geld voor.' }
        ]
      }
    ]
  },
  // Dag 67: Clowns in het kinderziekenhuis
  {
    hardop: {
      titel: 'Clowns in het kinderziekenhuis', soort: 'Nieuws', emoji: '🤡',
      alineas: [
        'ZWOLLE – Op de kinderafdeling van ziekenhuis De Linde klinkt sinds deze maand elke dinsdag en vrijdag gelach. Dan komen de clowns Dokter Pruttel en Juffrouw Pief langs. Ze maken een ronde langs alle kamers, net als echte artsen. Maar in plaats van een stethoscoop hebben ze een ukelele en een zak vol zeepbellen bij zich.',
        'De clowns werken voor stichting Lachspiegel, die al twintig jaar ziekenhuisclowns opleidt. "Een ziekenhuis is voor een kind een spannende plek," vertelt Pief, die buiten haar werk Ellen de Wit heet. "Alles draait om onderzoeken en prikken. Bij ons bepaalt het kind zelf wat er gebeurt. Wil het niet spelen, dan zwaaien we en gaan we weer." Dat is volgens haar heel belangrijk: een kind dat zich machteloos voelt, krijgt zo een beetje controle terug.',
        'Verpleegkundige Fatima Bouali ziet het effect elke week. "Kinderen die met de clowns hebben gelachen, zijn vaak rustiger bij een prik. Ze vergeten even dat ze ziek zijn." Ook onderzoek in andere landen laat zien dat kinderen die vlak voor een operatie bezoek krijgen van een clown, minder angstig zijn. En de ouders? Die krijgen even ruimte om koffie te halen of gewoon mee te lachen.',
        'Toch is het werk niet altijd makkelijk. "Je komt ook bij kinderen die heel ziek zijn," zegt Pruttel. "Dan zijn we zachter en stiller. Soms blazen we alleen een zeepbel en kijken we samen hoe hij wegzweeft." De stichting betaalt de bezoeken volledig met giften. Wie wil helpen, kan op de website van Lachspiegel een rode clownsneus kopen voor vijf euro.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Op welke dagen komen de clowns naar de kinderafdeling?', opties: ['Elke dag', 'Op dinsdag en vrijdag', 'Op maandag en donderdag', 'Alleen in het weekend'], goed: 1, uitleg: 'Zoek gericht naar dagen van de week. In de eerste zin van het bericht staat: "elke dinsdag en vrijdag".' },
        { vaardigheid: 'Woordbetekenis', vraag: 'Wat betekent "machteloos" in alinea 2?', opties: ['Je hebt geen kracht meer in je spieren', 'Je bent heel boos', 'Je hebt geen zin om te spelen', 'Je kunt zelf niets beslissen of veranderen'], goed: 3, uitleg: 'Kijk naar de vorm van het woord: macht + loos. "-loos" betekent "zonder", zoals in "werkloos". Machteloos is dus: zonder macht. De zin erna helpt ook: het kind krijgt "controle terug". Dat wat ontbrak, was controle.' },
        { vaardigheid: 'Bedoeling', vraag: 'Waarom schrijft de schrijver dat de clowns "in plaats van een stethoscoop" een ukelele en zeepbellen bij zich hebben?', opties: ['Om te laten zien dat ze geen onderzoek doen, maar plezier maken', 'Om uit te leggen dat de clowns ook echte artsen zijn', 'Om te laten zien dat er in het ziekenhuis te weinig stethoscopen zijn', 'Om reclame te maken voor ukeleles'], goed: 0, uitleg: 'De schrijver zet twee dingen tegenover elkaar: wat een arts meeneemt en wat de clowns meenemen. Ze lopen een ronde "net als echte artsen", maar ze komen niet om te onderzoeken. Dat contrast laat zien wat hun werk anders maakt.' },
        { vaardigheid: 'Nieuwsbericht', vraag: 'Wat vertelt de eerste alinea van dit nieuwsbericht vooral?', opties: ['Hoe de stichting aan haar geld komt', 'Wat onderzoek zegt over clowns', 'Wie er komen, wat ze doen, waar en wanneer', 'Wat een verpleegkundige van de clowns vindt'], goed: 2, uitleg: 'Een nieuwsbericht begint meestal met de belangrijkste feiten: wie, wat, waar en wanneer. Details, uitspraken en achtergrond komen in de alinea\'s daarna.' },
        { vaardigheid: 'Standpunt en argument', vraag: 'Pief vindt het belangrijk dat het kind zelf mag bepalen wat er gebeurt. Welk argument geeft ze daarvoor?', opties: ['Kinderen die gelachen hebben, zijn rustiger bij een prik', 'Een kind dat zich machteloos voelt, krijgt zo controle terug', 'De stichting bestaat al twintig jaar', 'Bij heel zieke kinderen zijn de clowns zachter en stiller dan anders'], goed: 1, uitleg: 'Een argument is de reden waarom iemand iets vindt. Pief zegt eerst wat ze belangrijk vindt en geeft dan het waarom. Let op: het antwoord over de prik is ook waar, maar dat zegt de verpleegkundige, en het gaat niet over zelf bepalen.' },
        { vaardigheid: 'Slot', vraag: 'Wat wil de schrijver met de laatste zin bereiken?', opties: ['Lezers vragen om de clowns te steunen', 'Lezers laten lachen om een rode neus', 'Uitleggen hoe je zelf clown kunt worden', 'Laten zien dat de clowns veel geld verdienen'], goed: 0, uitleg: 'De zin ervoor zegt dat de stichting alles betaalt met giften. Daarna volgt "Wie wil helpen, ...". Zo eindigt het bericht met een uitnodiging aan de lezer om de stichting te steunen.' }
      ]
    },
    kort: [
      {
        titel: 'Kerstmiddag op de kinderafdeling', soort: 'Programma',
        tekst: [
          'Kerstmiddag op de kinderafdeling – donderdag 24 december',
          '14.00 uur – opening door Dokter Pruttel en Juffrouw Pief (speelkamer)',
          '14.30 uur – kerststukjes knutselen (speelkamer, vanaf 6 jaar)',
          '15.30 uur – voorlezen door de burgemeester (in de kamers, op aanvraag)',
          '16.00 uur – poffertjes voor iedereen (gang bij de lift)',
          '16.45 uur – kerstliedjes met het schoolkoor (speelkamer)',
          'Kun je niet uit bed? Laat het de verpleging weten, dan komt de activiteit naar jou toe. Alleen het koor blijft in de speelkamer.'
        ],
        vragen: [
          { vaardigheid: 'Programma lezen', vraag: 'Sven kan niet uit bed. Bij welke activiteit kan hij NIET meedoen?', opties: ['Het knutselen van kerststukjes', 'De poffertjes', 'Het voorlezen door de burgemeester', 'De kerstliedjes met het schoolkoor'], goed: 3, uitleg: 'De laatste regel zegt dat alles naar je bed kan komen, behalve één ding: het koor blijft in de speelkamer. Combineer die regel met het programma.' },
          { vaardigheid: 'Programma lezen', vraag: 'Kim is 5 jaar. Bij welke activiteit mag ze NIET meedoen?', opties: ['Kerststukjes knutselen', 'Poffertjes eten', 'Kerstliedjes zingen met het schoolkoor', 'Luisteren naar de burgemeester'], goed: 0, uitleg: 'Bij één activiteit staat een leeftijd tussen haakjes: knutselen is "vanaf 6 jaar". Kim is 5, dus dat mag nog niet. Let bij een programma altijd op zulke kleine toevoegingen.' }
        ]
      },
      {
        titel: 'Bedankt, clowns!', soort: 'Brief',
        tekst: [
          'Lieve Dokter Pruttel en Juffrouw Pief,',
          'Ik lag drie weken in het ziekenhuis met een gebroken been. De eerste week vond ik alles stom en wilde ik met niemand praten. Toen jullie de eerste keer kwamen, trok ik mijn deken over mijn hoofd. Jullie zwaaiden en gingen weer weg. De volgende keer gluurde ik voorzichtig onder de deken door. En daarna wilde ik elke dinsdag en vrijdag dat jullie kwamen.',
          'Nu ben ik weer thuis. Ik loop nog met krukken, maar ik oefen elke dag. Het zeepbellenpotje dat ik van jullie kreeg, staat op mijn bureau.',
          'Groetjes van Daan (9 jaar)'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat deed Daan toen de clowns de eerste keer langskwamen?', opties: ['Hij lachte meteen hard mee', 'Hij gluurde onder de deken door', 'Hij trok zijn deken over zijn hoofd', 'Hij blies zeepbellen'], goed: 2, uitleg: 'Let op "de eerste keer". Onder de deken door gluren deed hij pas "de volgende keer". Bij vragen over volgorde moet je precies lezen welke handeling bij welk moment hoort.' },
          { vaardigheid: 'Teksten vergelijken', vraag: 'Welke uitspraak van Pief uit het nieuwsbericht past het best bij wat Daan meemaakte?', opties: ['"Alles draait om onderzoeken en prikken."', '"Wil het niet spelen, dan zwaaien we en gaan we weer."', '"Soms blazen we alleen een zeepbel en kijken we hoe hij wegzweeft."', '"Dan zijn we zachter en stiller."'], goed: 1, uitleg: 'Daan verstopte zich onder zijn deken, en de clowns "zwaaiden en gingen weer weg". Dat is precies wat Pief vertelt. Omdat Daan zelf mocht kiezen, durfde hij de volgende keer wel te kijken.' }
        ]
      }
    ]
  },
  // Dag 68: De Romeinen in Nederland
  {
    hardop: {
      titel: 'De Romeinen in Nederland', soort: 'Informatief', emoji: '🏛️',
      alineas: [
        'Ongeveer tweeduizend jaar geleden trokken Romeinse soldaten ons land binnen. Het Romeinse Rijk was toen enorm: het liep van Engeland tot Egypte. De Rijn werd de noordgrens van dat rijk. Ten zuiden van de rivier hadden de Romeinen het voor het zeggen, ten noorden ervan woonden de Friezen, die zich weinig van Rome aantrokken.',
        'Om die grens te bewaken, bouwden de Romeinen langs de Rijn een lange rij forten, met wachttorens en een weg ertussen. Zo\'n verdedigingslinie heet een limes. Rond de forten ontstonden dorpen met smeden, bakkers en herbergen. Sommige groeiden uit tot steden. Nijmegen kreeg al rond het jaar 100 stadsrechten en noemt zich daarom de oudste stad van Nederland. Ook Utrecht begon als Romeins fort.',
        'De Romeinen brachten veel nieuwe dingen mee. Ze legden verharde wegen aan, bouwden badhuizen en betaalden met munten. Ook in onze taal zijn ze nog terug te vinden. Woorden als straat, muur, kelder en venster komen uit het Latijn, de taal van de Romeinen. Wie een stuk kaas uit de kelder haalt en er een glas wijn bij drinkt, gebruikt zonder het te weten drie Romeinse woorden.',
        'Toch verliep het samenleven niet altijd vreedzaam. In het rivierengebied woonden de Bataven. Veel Bataven dienden als ruiter in het Romeinse leger, maar in het jaar 69 kwamen ze in opstand, omdat de Romeinen steeds meer jonge mannen dwongen om soldaat te worden. Pas na ruim een jaar werd er weer vrede gesloten. Rond het jaar 400 vertrokken de laatste Romeinse soldaten. Archeologen vinden nog altijd munten, scherven en zelfs complete schepen in de grond.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Welke rivier werd de noordgrens van het Romeinse Rijk?', opties: ['De Maas', 'De IJssel', 'De Waal', 'De Rijn'], goed: 3, uitleg: 'Zoek het woord "noordgrens" in de tekst. In alinea 1 staat: "De Rijn werd de noordgrens van dat rijk."' },
        { vaardigheid: 'Woordbetekenis', vraag: 'Wat is een limes?', opties: ['Een rij forten met torens langs de grens', 'Een Romeinse stad met stadsrechten', 'Een Romeins badhuis bij een fort', 'Een Romeinse munt van zilver of brons'], goed: 0, uitleg: 'Moeilijke woorden worden in informatieve teksten vaak uitgelegd. Kijk naar de zin met "limes": "Zo\'n verdedigingslinie heet een limes." "Zo\'n" verwijst terug naar de zin ervoor, met de forten, torens en de weg.' },
        { vaardigheid: 'Signaalwoord', vraag: 'Waarom noemt Nijmegen zich de oudste stad van Nederland?', opties: ['Omdat het het allereerste Romeinse fort in ons land was', 'Omdat het ten noorden van de Rijn ligt', 'Omdat het al rond het jaar 100 stadsrechten kreeg', 'Omdat de Bataven er woonden'], goed: 2, uitleg: 'Het signaalwoord "daarom" verbindt een reden met een gevolg. De reden staat ervoor: Nijmegen kreeg al rond het jaar 100 stadsrechten. Een fort was het begin van Utrecht; dat wordt bij Nijmegen niet gezegd.' },
        { vaardigheid: 'Bedoeling', vraag: 'Waarom schrijft de schrijver de zin over kaas, de kelder en wijn?', opties: ['Om te vertellen wat de Romeinen graag aten en dronken', 'Om te laten zien dat we nog elke dag Romeinse woorden gebruiken', 'Om uit te leggen hoe je kaas in een kelder bewaart', 'Om te laten zien dat de Romeinen veel wijn dronken'], goed: 1, uitleg: 'De zin staat direct na de uitleg over Latijnse woorden. De schrijver maakt die uitleg met een grappig, alledaags voorbeeld duidelijk. Het gaat dus niet over eten, maar over taal.' },
        { vaardigheid: 'Oorzaak en gevolg', vraag: 'Wat was volgens de tekst de oorzaak van de Bataafse opstand, en wat was het gevolg?', opties: ['Oorzaak: gedwongen soldaat worden. Gevolg: ruim een jaar strijd tot de vrede', 'Oorzaak: de Bataven wilden zelf een stad bouwen. Gevolg: Nijmegen kreeg stadsrechten', 'Oorzaak: de Friezen vielen de Bataven aan. Gevolg: de Romeinen vertrokken', 'Oorzaak: de Romeinen vertrokken rond het jaar 400. Gevolg: de forten raakten in verval'], goed: 0, uitleg: 'Zoek de signaalwoorden in alinea 4. Na "omdat" staat de oorzaak: de dwang om soldaat te worden. Daarna volgt wat er gebeurde: pas na ruim een jaar kwam er vrede. Het vertrek rond het jaar 400 gebeurde ruim driehonderd jaar later en is geen gevolg van de opstand.' },
        { vaardigheid: 'Samenvatten', vraag: 'Welke samenvatting past het best bij de hele tekst?', opties: ['Nijmegen is de oudste stad van Nederland, want het kreeg al vroeg stadsrechten', 'De Romeinen leerden ons kaas maken en wijn drinken', 'De Bataven waren goede ruiters in het Romeinse leger', 'De Romeinen bewaakten de Rijn, lieten veel na en botsten met de Bataven'], goed: 3, uitleg: 'Een goede samenvatting noemt de hoofdpunten van alle alinea\'s, niet één detail. De andere antwoorden gaan maar over één stukje van de tekst, of kloppen niet.' }
      ]
    },
    kort: [
      {
        titel: 'Museum Castellum', soort: 'Folder',
        tekst: [
          'Museum Castellum – beleef de Romeinse tijd!',
          'Open: dinsdag t/m zondag 10.00–17.00 uur. In de kerstvakantie ook op maandag. Gesloten op 25 december en 1 januari.',
          'Toegang | Gewoon | Met Museumkaart',
          'Volwassenen | € 14,00 | gratis',
          'Kinderen 4 t/m 17 jaar | € 7,50 | gratis',
          'Kinderen tot 4 jaar | gratis | gratis',
          'In de vakantie: elke dag om 11.00 en 14.00 uur "Word een Romeinse soldaat!" (6–12 jaar, € 3,00 per kind, aanmelden bij de kassa).'
        ],
        vragen: [
          { vaardigheid: 'Tabel lezen', vraag: 'Moeder (zonder Museumkaart), Jens (10) en Lies (3) gaan naar het museum. Jens doet mee met "Word een Romeinse soldaat!". Wat kost dat samen?', opties: ['€ 21,50', '€ 32,00', '€ 24,50', '€ 29,00'], goed: 2, uitleg: 'Zoek voor elke persoon de goede rij: moeder € 14,00, Jens (4 t/m 17) € 7,50, Lies (tot 4) gratis. Daar komt € 3,00 bij voor de activiteit van Jens. € 14,00 + € 7,50 + € 3,00 = € 24,50.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Op welke dag is het museum dicht?', opties: ['Maandag 28 december', 'Vrijdag 25 december', 'Zondag 27 december', 'Donderdag 31 december'], goed: 1, uitleg: 'Normaal is het museum op maandag dicht, maar in de kerstvakantie niet. Lees daarom ook de laatste zin van die regel: gesloten op 25 december en 1 januari.' }
        ]
      },
      {
        titel: 'Romeinse cijfers', soort: 'Informatief',
        tekst: [
          'De Romeinen schreven getallen met letters: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500 en M = 1000.',
          'Meestal tel je de tekens bij elkaar op: XV = 10 + 5 = 15.',
          'Staat een kleiner teken vóór een groter teken, dan trek je het kleinere af: IV = 5 − 1 = 4 en XC = 100 − 10 = 90.',
          'Je ziet Romeinse cijfers nog vaak, bijvoorbeeld op klokken, bij koningen (Willem IV) en als jaartal op oude gebouwen.'
        ],
        vragen: [
          { vaardigheid: 'Instructie toepassen', vraag: 'Op een oud gebouw staat het jaartal MDCCCL. Welk jaar is dat?', opties: ['1850', '1650', '1550', '2350'], goed: 0, uitleg: 'Pas de regels uit de tekst stap voor stap toe. Alle tekens staan van groot naar klein, dus je telt op: M (1000) + D (500) + CCC (300) + L (50) = 1850.' },
          { vaardigheid: 'Instructie toepassen', vraag: 'Hoe schrijf je het getal 40 in Romeinse cijfers?', opties: ['LX', 'XC', 'XL', 'VL'], goed: 2, uitleg: 'Je hebt 50 (L) min 10 (X) nodig. Bij aftrekken zet je het kleinere teken vóór het grotere: XL = 50 − 10 = 40. LX is juist 50 + 10 = 60, XC is 90 (dat staat in de tekst) en VL zou 45 zijn.' }
        ]
      }
    ]
  },
  // Dag 69: De laatste dag van het jaar
  {
    hardop: {
      titel: 'De laatste dag van het jaar', soort: 'Verhalend', emoji: '✉️',
      alineas: [
        'Op de laatste dag van het jaar hing er bij Lars thuis altijd een rommelige sfeer. Overal stonden schalen met oliebollen en de televisie praatte in zichzelf. Maar Lars dacht maar aan één ding: de envelop in de bovenste la van zijn bureau. Daar had hij precies een jaar geleden een brief aan zichzelf in gestopt.',
        'Om tien uur \'s avonds ging hij op zijn bed zitten en scheurde de envelop open. Zijn handschrift van vorig jaar zag er kinderlijk uit. Beste Lars van volgend jaar, stond er. Zit je nog steeds op voetbal? Ik hoop van niet. Ik hoop dat je eindelijk durft te zeggen dat je liever toneel speelt.',
        'Lars liet de brief zakken. Hij wist nog precies hoe hij zich vorig jaar voelde: elke zaterdag ging hij met buikpijn naar het veld, omdat hij bang was dat zijn vader teleurgesteld zou zijn als hij stopte. In maart had hij het eindelijk gezegd, met trillende stem, aan de keukentafel. Zijn vader had even gezwegen en toen gevraagd: "Waarom heb je dat niet eerder verteld?" Sinds september zat Lars bij de jeugdtoneelclub, en in februari zou hij zijn eerste hoofdrol spelen.',
        'Beneden riep zijn moeder dat het bijna twaalf uur was. Lars pakte een nieuw vel papier en een pen. Beste Lars van volgend jaar, schreef hij. Ik weet niet wat je allemaal gaat meemaken op de middelbare school. Maar onthoud één ding: zeggen wat je echt wilt, is minder eng dan je denkt. Hij stopte de brief in een nieuwe envelop en rende de trap af, net op tijd voor het aftellen.'
      ],
      vragen: [
        { vaardigheid: 'Inhoud', vraag: 'Wat zat er in de envelop in de la van Lars?', opties: ['Een brief van zijn vader over voetbal', 'Een brief van Lars aan zichzelf', 'Een kaartje voor de toneelvoorstelling', 'Geld voor vuurwerk'], goed: 1, uitleg: 'In de laatste zin van alinea 1 staat het: "Daar had hij precies een jaar geleden een brief aan zichzelf in gestopt." In alinea 2 zie je dat ook aan de aanhef: "Beste Lars van volgend jaar".' },
        { vaardigheid: 'Gevoel', vraag: 'Hoe voelde Lars zich vorig jaar op zaterdag?', opties: ['Gespannen, want hij durfde niet te stoppen', 'Blij, want hij was dol op voetbal', 'Moe, want hij moest elke zaterdag vroeg op', 'Boos, want zijn team verloor elke wedstrijd'], goed: 0, uitleg: 'In alinea 3 staat dat hij met buikpijn naar het veld ging, "omdat hij bang was dat zijn vader teleurgesteld zou zijn". Buikpijn door spanning past bij iemand die iets niet durft te zeggen.' },
        { vaardigheid: 'Beeldspraak', vraag: '"De televisie praatte in zichzelf." Wat bedoelt de schrijver?', opties: ['De televisie was kapot', 'Er was een programma over mensen die in zichzelf praten', 'De televisie stond heel hard', 'De televisie stond aan, maar niemand keek of luisterde'], goed: 3, uitleg: 'Iemand die "in zichzelf praat", praat zonder dat iemand antwoordt. Een televisie kan dat natuurlijk niet echt; de schrijver bedoelt dat hij aanstond terwijl iedereen met iets anders bezig was.' },
        { vaardigheid: 'Volgorde', vraag: 'Welke volgorde van gebeurtenissen klopt?', opties: ['Toneelclub – gesprek met vader – stoppen met voetbal', 'Gesprek in september – toneelclub – eerste hoofdrol in maart', 'Buikpijn bij voetbal – gesprek in maart – toneelclub in september', 'Eerste brief – toneelclub – brief lezen in maart'], goed: 2, uitleg: 'In alinea 3 springt de schrijver terug in de tijd. Let op tijdwoorden als "vorig jaar", "in maart", "sinds september" en "in februari". Zet ze in volgorde: eerst de buikpijn, dan in maart het gesprek, in september de toneelclub. De hoofdrol komt pas nog.' },
        { vaardigheid: 'Ontwikkeling', vraag: 'Hoe is Lars in een jaar veranderd?', opties: ['Hij is beter geworden in voetbal', 'Hij durft nu te zeggen wat hij echt wil', 'Hij is banger geworden voor zijn vader', 'Hij schrijft geen brieven meer'], goed: 1, uitleg: 'Vergelijk de brief van vorig jaar ("Ik hoop dat je eindelijk durft ...") met de nieuwe brief ("zeggen wat je echt wilt, is minder eng dan je denkt"). Lars heeft gedaan wat hij toen niet durfde, en geeft die les nu door aan zichzelf.' },
        { vaardigheid: 'Tussen de regels', vraag: 'Zijn vader vraagt: "Waarom heb je dat niet eerder verteld?" Wat laat die vraag zien?', opties: ['Vader was niet boos; Lars was voor niets bang geweest', 'Vader was boos dat Lars na al die jaren wilde stoppen', 'Vader wilde dat Lars nog een jaar zou blijven voetballen', 'Vader had het al lang aan de buikpijn gezien'], goed: 0, uitleg: 'Je moet hier zelf het verband leggen. Lars was bang dat zijn vader teleurgesteld zou zijn. Maar vader vraagt alleen waarom hij het niet eerder zei. Hij had dus liever gehad dat Lars het eerder had verteld. De angst van Lars bleek onnodig.' }
      ]
    },
    kort: [
      {
        titel: 'Afval rond de feestdagen', soort: 'Tabel',
        tekst: [
          'Gemeente Lindewaard – afvalinzameling rond de feestdagen',
          'Gewone ophaaldag | Soort afval | Wordt nu opgehaald op',
          'donderdag 24 december | papier | donderdag 24 december (geen wijziging)',
          'vrijdag 25 december | gft-afval | woensdag 23 december',
          'maandag 28 december | restafval | maandag 28 december (geen wijziging)',
          'vrijdag 1 januari | plastic | zaterdag 2 januari',
          'Zet je container vóór 7.30 uur aan de straat.'
        ],
        vragen: [
          { vaardigheid: 'Tabel lezen', vraag: 'Familie Bakker zet de gft-container zoals altijd op de vrijdagochtend van eerste kerstdag aan de straat. Wat gaat er mis?', opties: ['Het gft-afval wordt pas op zaterdag 2 januari opgehaald', 'Ze zijn te laat, want de container moest vóór 7.00 uur buiten staan', 'Er gaat niets mis', 'Het gft-afval is toen al op woensdag 23 december opgehaald'], goed: 3, uitleg: 'Zoek de rij met gft-afval. In de laatste kolom staat de nieuwe dag: woensdag 23 december. Op vrijdag staat hun container dus voor niets buiten. Zaterdag 2 januari hoort bij plastic.' },
          { vaardigheid: 'Tabel lezen', vraag: 'Je gewone ophaaldag voor plastic is vrijdag 1 januari. Wanneer moet de plastic container nu uiterlijk aan de straat staan?', opties: ['Zaterdag 2 januari vóór 7.30 uur', 'Vrijdag 1 januari vóór 7.30 uur', 'Woensdag 23 december vóór 7.30 uur', 'Zaterdag 2 januari vóór 12.00 uur'], goed: 0, uitleg: 'Combineer twee stukjes informatie: in de tabel staat de nieuwe dag voor plastic (zaterdag 2 januari), en onder de tabel staat de tijd (vóór 7.30 uur). Bij een tabel staat belangrijke extra informatie vaak onderaan.' }
        ]
      },
      {
        titel: 'Uitnodiging van oma', soort: 'Mail',
        tekst: [
          'Van: Oma Ria',
          'Aan: Lars, Fleur, Mees en Sanne',
          'Onderwerp: Nieuwjaarsbrunch!',
          'Lieve kleinkinderen,',
          'Op zondag 3 januari geef ik een nieuwjaarsbrunch. Jullie zijn van harte welkom vanaf half elf. Opa bakt pannenkoeken en ik maak mijn beroemde appelflappen.',
          'Ik heb nog een verzoek: neem allemaal één ding mee dat je dit jaar voor het eerst hebt gedaan of geleerd. Een foto, een tekening, een medaille: alles mag. Na het eten laten we het om de beurt zien.',
          'Laten jullie vóór 30 december weten of je komt? Dan weet opa hoeveel beslag hij moet maken.',
          'Dikke knuffel, oma'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Vanaf hoe laat zijn de kleinkinderen welkom?', opties: ['Vanaf 10.00 uur', 'Vanaf 11.30 uur', 'Vanaf 10.30 uur', 'Vanaf 12.00 uur'], goed: 2, uitleg: 'In de mail staat "vanaf half elf". Half elf is half uur vóór elf uur, dus 10.30 uur. Een veelgemaakte fout is 11.30 uur.' },
          { vaardigheid: 'Teksten vergelijken', vraag: 'Wat zou Lars, als je zijn verhaal kent, het best kunnen meenemen naar de brunch?', opties: ['Zijn voetbalschoenen van het afgelopen seizoen', 'Iets van de toneelclub, waar hij sinds september op zit', 'De brief die hij vanavond aan zichzelf schreef', 'Een foto van zijn eerste hoofdrol bij de toneelclub'], goed: 1, uitleg: 'Combineer de mail met het verhaal. Oma vraagt iets wat je dit jaar voor het eerst deed. Voetballen deed Lars al langer, de nieuwe brief mag hij pas over een jaar openen, en zijn eerste hoofdrol speelt hij pas in februari. In september begon hij voor het eerst bij de toneelclub.' }
        ]
      }
    ]
  },
  // Dag 70: Hoe de oliebol ontstond
  {
    hardop: {
      titel: 'Hoe de oliebol ontstond', soort: 'Informatief', emoji: '🍩',
      alineas: [
        'Op oudejaarsavond staat in veel Nederlandse huizen een schaal met oliebollen op tafel, met een flinke laag poedersuiker erover. Maar waar komt dat ronde, vette baksel eigenlijk vandaan? Precies weten we het niet. Wel is duidelijk dat Nederlanders al eeuwenlang deeg in hete olie of vet bakken.',
        'Volgens een oud verhaal aten Germaanse stammen al vette deegballen in de donkere dagen rond midwinter. Ze geloofden dat boze geesten dan door de lucht vlogen en mensen aanvielen met hun zwaarden. Wie zo\'n bal had gegeten, zou beschermd zijn: het zwaard zou gewoon van het vet afglijden. Historici hebben voor dit verhaal echter nooit bewijs gevonden. Het is dus waarschijnlijk vooral een mooie legende.',
        'Steviger bewijs komt uit de zeventiende eeuw. Op een schilderij uit die tijd zit een vrouw naast een pan met heet vet en een schaal vol oliekoeken, zoals oliebollen toen heetten. In 1667 verscheen bovendien een kookboek, De verstandige kock, met een recept voor oliekoeken met appel en krenten. Ze werden vooral rond de feestdagen gegeten, omdat suiker, krenten en vet duur waren. Alleen bij een feest kon je je dat permitteren.',
        'In de loop der jaren veranderde de naam oliekoek in oliebol, maar het recept bleef bijna hetzelfde. Tegenwoordig staan er in december overal oliebollenkramen, en kranten houden zelfs wedstrijden om de lekkerste oliebol van het land te vinden. Wie op 31 december een oliebol eet, eet dus eigenlijk een stukje geschiedenis.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'In welk jaar verscheen het kookboek De verstandige kock?', opties: ['1767', '1667', '1617', '1867'], goed: 1, uitleg: 'Zoek naar een jaartal in de buurt van de titel van het kookboek. In alinea 3 staat: "In 1667 verscheen bovendien een kookboek".' },
        { vaardigheid: 'Woordbetekenis', vraag: '"Alleen bij een feest kon je je dat permitteren." Wat betekent "je iets permitteren"?', opties: ['iets zelf maken', 'ergens zin in hebben', 'het je kunnen veroorloven', 'iets aan anderen uitdelen'], goed: 2, uitleg: 'Kijk naar de zin ervoor: suiker, krenten en vet "waren duur". Alleen bij een feest gaf je zoveel geld uit. Je iets permitteren betekent dus: het je kunnen veroorloven, het kunnen betalen.' },
        { vaardigheid: 'Verband', vraag: 'Waarom aten mensen in de zeventiende eeuw oliekoeken vooral rond de feestdagen?', opties: ['Omdat ze bang waren voor boze geesten', 'Omdat de oliebollenkramen alleen in december open waren', 'Omdat het recept pas in december verscheen', 'Omdat de ingrediënten duur waren'], goed: 3, uitleg: 'Het signaalwoord "omdat" geeft de reden. Na "omdat" staat: suiker, krenten en vet waren duur. De boze geesten horen bij de legende uit alinea 2, niet bij de zeventiende eeuw.' },
        { vaardigheid: 'Feit of verhaal', vraag: 'Waarom noemt de schrijver het verhaal over de Germanen "waarschijnlijk vooral een mooie legende"?', opties: ['Omdat historici er nooit bewijs voor hebben gevonden', 'Omdat de Germanen geen oliebollen lustten', 'Omdat het verhaal niet in De verstandige kock staat', 'Omdat boze geesten wel echt bestaan'], goed: 0, uitleg: 'Een feit kun je bewijzen; een legende is een verhaal dat mensen doorvertellen zonder bewijs. De schrijver geeft zelf de reden: "Historici hebben voor dit verhaal echter nooit bewijs gevonden."' },
        { vaardigheid: 'Alinea\'s', vraag: 'Hoe verschilt alinea 3 van alinea 2?', opties: ['Alinea 2 gaat over nu, alinea 3 over vroeger', 'Alinea 2 geeft een recept, alinea 3 een legende', 'Alinea 2 vertelt een verhaal zonder bewijs, alinea 3 geeft echt bewijs', 'Alinea 3 spreekt alinea 2 helemaal niet tegen; ze zeggen hetzelfde'], goed: 2, uitleg: 'Let op het begin van alinea 3: "Steviger bewijs". Dat zet alinea 3 tegenover alinea 2. Eerst een legende waarvoor geen bewijs is, dan een schilderij en een kookboek die je echt kunt bekijken.' },
        { vaardigheid: 'Beeldspraak', vraag: '"Wie op 31 december een oliebol eet, eet dus eigenlijk een stukje geschiedenis." Wat bedoelt de schrijver?', opties: ['Dat oliebollen heel oud en niet meer vers zijn', 'Dat het recept al eeuwen bijna hetzelfde is', 'Dat je in een oliebol oude papiertjes vindt', 'Dat je in een museum oliebollen kunt eten'], goed: 1, uitleg: 'Je kunt geschiedenis niet echt eten; dit is figuurlijk taalgebruik. De schrijver vat de tekst samen: de oliebol bestaat al eeuwen en het recept bleef bijna hetzelfde. Bij elke hap proef je dus iets van vroeger.' }
      ]
    },
    kort: [
      {
        titel: 'Oliebollen bakken', soort: 'Recept',
        tekst: [
          'Oliebollen (ongeveer 20 stuks)',
          'Je hebt nodig: 500 gram bloem, 1 zakje gedroogde gist (7 gram), 450 ml lauwe melk, 1 ei, 1 theelepel zout, 150 gram krenten en rozijnen, 1 geraspte appel, frituurolie, poedersuiker.',
          '1. Meng de gist met een beetje lauwe melk. Let op: is de melk te heet, dan werkt de gist niet meer.',
          '2. Doe de bloem en het zout in een grote kom. Voeg de gistmelk, de rest van de melk en het ei toe en klop er een glad beslag van.',
          '3. Spoel de krenten en rozijnen, dep ze droog en roer ze samen met de appel door het beslag.',
          '4. Dek de kom af met een theedoek en laat het beslag een uur rijzen op een warme plek, tot het twee keer zo groot is.',
          '5. Verhit de olie tot 180 °C. Schep met twee lepels bolletjes beslag in de olie en bak ze in ongeveer 6 minuten goudbruin. Draai ze halverwege om.',
          '6. Laat ze uitlekken op keukenpapier en bestrooi ze met poedersuiker.',
          'Bak oliebollen altijd samen met een volwassene!'
        ],
        vragen: [
          { vaardigheid: 'Instructie', vraag: 'Waarom moet de melk lauw zijn en niet heet?', opties: ['Omdat de gist in hete melk niet meer werkt', 'Omdat het beslag anders aan de kom plakt', 'Omdat je je anders brandt aan de olie', 'Omdat de krenten anders zacht worden'], goed: 0, uitleg: 'In stap 1 staat een waarschuwing met "Let op": is de melk te heet, dan werkt de gist niet meer. Zonder werkende gist rijst het beslag in stap 4 niet.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Hoe lang moet het beslag rijzen?', opties: ['Zes minuten', 'Een uur', 'Een halfuur', 'Twee uur'], goed: 1, uitleg: 'Zoek het woord "rijzen": dat staat in stap 4. Zes minuten is de baktijd in stap 5, en "twee keer zo groot" gaat over de grootte, niet over de tijd.' }
        ]
      },
      {
        titel: 'Oliebollenkraam De Gouden Bol', soort: 'Prijslijst',
        tekst: [
          'Oliebollenkraam De Gouden Bol – Marktplein',
          'Product | per stuk | 5 stuks | 10 stuks',
          'Oliebol naturel | € 1,20 | € 5,50 | € 10,00',
          'Oliebol met krenten | € 1,40 | € 6,50 | € 12,00',
          'Appelbeignet | € 1,80 | € 8,50 | –',
          'Zakje poedersuiker: gratis',
          'Open tot en met 31 december, dagelijks 9.00–18.00 uur. Op oudejaarsdag tot 16.00 uur.'
        ],
        vragen: [
          { vaardigheid: 'Prijslijst lezen', vraag: 'Mats koopt 10 oliebollen met krenten en 5 appelbeignets. Wat betaalt hij?', opties: ['€ 22,50', '€ 23,00', '€ 18,50', '€ 20,50'], goed: 3, uitleg: 'Zoek per product de goede kolom: 10 oliebollen met krenten kosten € 12,00 en 5 appelbeignets € 8,50. Samen € 20,50. Gebruik niet de prijs per stuk, want dan betaal je te veel.' },
          { vaardigheid: 'Prijslijst lezen', vraag: 'Hoeveel bespaar je als je 10 naturel oliebollen in één keer koopt in plaats van 10 losse?', opties: ['€ 2,00', '€ 1,20', '€ 0,50', '€ 1,00'], goed: 0, uitleg: 'Tien losse kosten 10 × € 1,20 = € 12,00. Tien in één keer kosten € 10,00. Het verschil is € 2,00. Bij zo\'n vraag combineer je twee kolommen.' }
        ]
      }
    ]
  },
  // Dag 71: Goede voornemens hebben geen zin
  {
    hardop: {
      titel: 'Goede voornemens hebben geen zin', soort: 'Betoog', emoji: '📝',
      alineas: [
        'Elk jaar is het weer raak. Op 1 januari beloven miljoenen mensen dat ze voortaan gezonder gaan eten, elke dag gaan sporten of minder op hun telefoon zitten. Ik vind dat zonde van de moeite. Goede voornemens hebben namelijk geen zin, en daar heb ik drie redenen voor.',
        'Om te beginnen houdt bijna niemand ze vol. Uit verschillende enquêtes blijkt dat veel mensen hun voornemen binnen een paar weken alweer vergeten zijn. Ten tweede zijn de meeste voornemens veel te groot. Wie nooit sport en ineens elke dag wil hardlopen, houdt dat geen week vol. Bovendien kies je je voornemen op een moment dat je moe bent van de feestdagen. Dat is geen goed moment om over je leven na te denken.',
        'Mijn derde reden weegt het zwaarst: wie zijn voornemen niet volhoudt, voelt zich een mislukkeling. Je dacht dat het je zou lukken, en nu lukt het weer niet. Daardoor wordt de kans kleiner dat je het later opnieuw probeert. Een voornemen kan je dus juist tegenhouden.',
        'Sommige mensen zeggen dat een nieuw jaar een mooi startpunt is. Dat begrijp ik, maar elke maandag, elke verjaardag en zelfs elke ochtend is een startpunt. Begin dus liever klein, en op een gewoon moment: tien minuten lezen voor het slapengaan, of één keer per week een rondje hardlopen. Wie kleine stapjes zet, komt verder dan wie op 1 januari in één keer een berg wil beklimmen.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Hoeveel redenen geeft de schrijver voor zijn mening?', opties: ['Twee', 'Vier', 'Drie', 'Eén'], goed: 2, uitleg: 'De schrijver kondigt het in alinea 1 zelf aan: "daar heb ik drie redenen voor". In de tekst zie je ze terug met "Om te beginnen", "Ten tweede" en "Mijn derde reden".' },
        { vaardigheid: 'Signaalwoord', vraag: 'Met welk woord voegt de schrijver in alinea 2 nog een extra punt toe aan zijn tweede reden?', opties: ['Bovendien', 'Om te beginnen', 'Ten tweede', 'Namelijk'], goed: 0, uitleg: '"Bovendien" is een signaalwoord van opsomming: er komt nog iets bij. "Om te beginnen" en "Ten tweede" openen een nieuwe reden, maar "Bovendien" vult de tweede reden aan.' },
        { vaardigheid: 'Tekstdoel', vraag: 'Wat wil de schrijver met deze tekst vooral bereiken?', opties: ['De lezer uitleggen hoe je een enquête over voornemens houdt', 'De lezer informeren over de geschiedenis van oud en nieuw', 'De lezer laten lachen om mensen die niet volhouden met sporten', 'De lezer overtuigen om klein te beginnen, niet met een groot voornemen'], goed: 3, uitleg: 'Een betoog wil de lezer ergens van overtuigen. Kijk vooral naar het begin en het slot: daar staan de mening en het advies van de schrijver.' },
        { vaardigheid: 'Standpunt en argument', vraag: 'Welke zin is een argument van de schrijver, en niet zijn standpunt?', opties: ['"Goede voornemens hebben geen zin."', '"De meeste voornemens zijn veel te groot."', '"Elk jaar is het weer raak."', '"Sommige mensen zeggen dat een nieuw jaar een mooi startpunt is."'], goed: 1, uitleg: 'Het standpunt is wat de schrijver vindt: voornemens hebben geen zin. Een argument is een reden waarom hij dat vindt. "Te groot" is zijn tweede reden. "Elk jaar is het weer raak" is de inleiding, en de laatste zin is een tegenargument van anderen.' },
        { vaardigheid: 'Tegenargument', vraag: 'Wat doet de schrijver in alinea 4 met de mening dat een nieuw jaar een mooi startpunt is?', opties: ['Hij noemt dit tegenargument en zwakt het daarna af', 'Hij is het er helemaal mee eens en verandert van mening', 'Hij noemt het als zijn vierde reden', 'Hij vat er de hele tekst mee samen'], goed: 0, uitleg: 'Een sterk betoog noemt ook wat andere mensen vinden, en reageert daarop. "Dat begrijp ik, maar ..." laat zien dat de schrijver het tegenargument serieus neemt en dan uitlegt waarom het volgens hem niet klopt: elk moment kan een startpunt zijn.' },
        { vaardigheid: 'Beeldspraak', vraag: 'Wat bedoelt de schrijver met mensen die "op 1 januari in één keer een berg willen beklimmen"?', opties: ['Mensen die op nieuwjaarsdag gaan wandelen in de bergen', 'Mensen die heel sportief zijn', 'Mensen die te veel tegelijk willen veranderen', 'Mensen die het nieuwe jaar vieren op een hoge plek'], goed: 2, uitleg: 'De berg staat tegenover "kleine stapjes". Het is beeldspraak: een berg is een heel groot doel dat je in één keer wilt halen. Dat past bij zijn tweede reden: de meeste voornemens zijn te groot.' }
      ]
    },
    kort: [
      {
        titel: 'Mijn voornemen werkte wél', soort: 'Mening van een lezer',
        tekst: [
          'Reactie op "Goede voornemens hebben geen zin"',
          'Ik ben het niet met de schrijver eens. Vorig jaar nam ik me op 1 januari voor om elke week een boek te lezen. Dat was inderdaad te veel: na drie weken lag ik al achter. Maar toen heb ik mijn voornemen veranderd in één boek per maand. En dat is gelukt! Ik heb er dit jaar twaalf gelezen. Een voornemen hoeft dus niet mis te gaan, als je het maar aanpast wanneer het te zwaar is.',
          'Sara (12), Amersfoort'
        ],
        vragen: [
          { vaardigheid: 'Teksten vergelijken', vraag: 'Op welk punt is Sara het eigenlijk wél eens met de schrijver van het betoog?', opties: ['Dat voornemens geen zin hebben', 'Dat je beter op een gewone maandag kunt beginnen', 'Dat enquêtes niet kloppen', 'Dat haar eerste voornemen te groot was'], goed: 3, uitleg: 'Sara schrijft dat ze het niet eens is, maar ze geeft ook iets toe: "Dat was inderdaad te veel". "Inderdaad" laat zien dat ze de schrijver op dat punt gelijk geeft. Zijn tweede reden was dat voornemens vaak te groot zijn.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Hoeveel boeken las Sara uiteindelijk in dat jaar?', opties: ['Twaalf', 'Drie', 'Eén per week, dus 52', 'Vier'], goed: 0, uitleg: 'Lees goed tot het eind: haar eerste plan (elke week een boek) lukte niet. Het nieuwe plan wel: "Ik heb er dit jaar twaalf gelezen."' }
        ]
      },
      {
        titel: 'Enquête in groep 8', soort: 'Tabel',
        tekst: [
          'We vroegen 28 leerlingen uit groep 8 naar hun voornemen van vorig jaar.',
          'Voornemen | Aantal leerlingen | Volgehouden tot de zomer',
          'Meer sporten | 9 | 3',
          'Minder schermtijd | 8 | 1',
          'Meer lezen | 5 | 3',
          'Kamer opgeruimd houden | 4 | 0',
          'Geen voornemen | 2 | –'
        ],
        vragen: [
          { vaardigheid: 'Tabel lezen', vraag: 'Welk voornemen werd in verhouding het vaakst volgehouden?', opties: ['Meer sporten', 'Meer lezen', 'Minder schermtijd', 'Kamer opgeruimd houden'], goed: 1, uitleg: 'Kijk niet alleen naar de laatste kolom, want daar staan "meer sporten" en "meer lezen" allebei op 3. Vergelijk met het aantal leerlingen: 3 van de 9 sporters, maar 3 van de 5 lezers. Bij lezen hield dus een veel groter deel het vol.' },
          { vaardigheid: 'Teksten beoordelen', vraag: 'De schrijver van het betoog zegt dat "bijna niemand" zijn voornemen volhoudt. Wat laat de enquête daarover zien?', opties: ['Dat de meesten het niet volhielden: 7 van de 26 haalden de zomer', 'Dat klopt niet: de meeste leerlingen hielden hun voornemen vol', 'Dat klopt niet: niemand had een voornemen', 'Daar zegt de enquête niets over'], goed: 0, uitleg: 'Tel de laatste kolom op: 3 + 1 + 3 + 0 = 7. Het aantal leerlingen met een voornemen is 28 − 2 = 26. De meesten hielden het dus niet vol; dat steunt de schrijver. Maar "bijna niemand" is wel wat overdreven, want 7 is meer dan een kwart.' }
        ]
      }
    ]
  },
  // Dag 72: Hoe vuurwerk zijn kleuren krijgt
  {
    hardop: {
      titel: 'Hoe vuurwerk zijn kleuren krijgt', soort: 'Informatief', emoji: '🎆',
      alineas: [
        'Om middernacht op oudejaarsavond kleurt de lucht rood, groen, goud en zilver. Het lijkt wel toverkunst, maar het is gewoon scheikunde. Elke kleur in een vuurpijl komt namelijk van een ander metaal. Vuurwerkmakers mengen die metalen door kleine korrels, die ze sterren noemen.',
        'Hoe werkt dat? Als een ster verbrandt, wordt het erg heet. De kleine deeltjes van het metaal, de atomen, krijgen door die hitte extra energie. Die energie kunnen ze niet vasthouden. Ze geven haar meteen weer af, in de vorm van licht. Elk metaal geeft daarbij zijn eigen kleur: strontium kleurt de lucht rood, barium groen en natrium geel. Koper geeft blauw, maar dat is de lastigste kleur. Is het vuur te heet, dan verdwijnt het blauw en zie je alleen een witte flits.',
        'Het buskruit dat de pijl de lucht in schiet, is ruim duizend jaar geleden in China uitgevonden. Het bestaat uit salpeter, zwavel en houtskool. Chinese vuurwerkmakers ontdekten al snel dat je er feestelijke knallen mee kon maken. Kleuren kwamen er pas veel later bij, in de negentiende eeuw, toen scheikundigen ontdekten welke stoffen welke kleur gaven.',
        'Ook de vorm van het vuurwerk is geen toeval. In een grote vuurwerkbom liggen de sterren in een precies patroon rond een lading buskruit. Ontploft die lading hoog in de lucht, dan schieten de sterren alle kanten op. Liggen ze in een ring, dan zie je een cirkel; liggen ze in de vorm van een hart, dan verschijnt er een hart aan de hemel. Zo is elke vuurpijl eigenlijk een klein kunstwerk.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Welk metaal zorgt voor groen licht?', opties: ['Barium', 'Strontium', 'Natrium', 'Koper'], goed: 0, uitleg: 'Zoek in alinea 2 het rijtje met metalen en kleuren. Lees precies: strontium rood, barium groen, natrium geel, koper blauw.' },
        { vaardigheid: 'Woordbetekenis', vraag: 'Wat zijn "sterren" in deze tekst?', opties: ['Sterren aan de hemel', 'Vuurpijlen in de vorm van een ster', 'Kleine korrels met metaal erin', 'Vonken van een sterretje'], goed: 2, uitleg: 'Een bekend woord kan in een tekst een andere betekenis hebben. Lees de zin waarin het staat: vuurwerkmakers mengen metalen "door kleine korrels, die ze sterren noemen".' },
        { vaardigheid: 'Verband', vraag: 'Waarom is blauw de lastigste kleur voor vuurwerkmakers?', opties: ['Koper is heel duur en moeilijk te krijgen', 'Blauw is in het donker bijna niet te zien', 'Koper bestond vroeger nog niet', 'Als het vuur te heet wordt, verdwijnt het blauw'], goed: 3, uitleg: 'Na "maar dat is de lastigste kleur" volgt de uitleg: "Is het vuur te heet, dan verdwijnt het blauw." Zo\'n "als ..., dan ..."-zin geeft een voorwaarde en een gevolg.' },
        { vaardigheid: 'Samenvatten', vraag: 'Welke kop past het best boven alinea 3?', opties: ['Waarom koper blauw kleurt', 'Van Chinese knallen naar gekleurd vuurwerk', 'Hoe een vuurwerkbom hoog in de lucht ontploft', 'Vuurwerk is gevaarlijk'], goed: 1, uitleg: 'Een kop vat de hele alinea samen. Alinea 3 vertelt de geschiedenis: buskruit uit China, eerst alleen knallen, pas veel later kleuren. De andere koppen passen bij alinea 2, alinea 4 of bij geen enkele alinea.' },
        { vaardigheid: 'Inleiding', vraag: 'Wat doet de schrijver in de eerste alinea?', opties: ['Hij begint met een bekend beeld en noemt het onderwerp', 'Hij geeft zijn mening over vuurwerk op oudejaarsavond', 'Hij legt precies uit hoe atomen licht maken', 'Hij waarschuwt voor de gevaren van vuurwerk'], goed: 0, uitleg: 'Een goede inleiding maakt je nieuwsgierig en noemt het onderwerp. De schrijver begint bij iets wat je kent (de gekleurde lucht om middernacht) en zegt dan: dat is scheikunde, elke kleur komt van een metaal. De uitleg zelf volgt in alinea 2.' },
        { vaardigheid: 'Oorzaak en gevolg', vraag: 'Welke volgorde van oorzaak en gevolg klopt volgens alinea 2?', opties: ['Atomen geven licht → de ster verbrandt → het wordt heet → de pijl ontploft', 'Het wordt heet → het licht verdwijnt → de atomen verbranden → de ster wordt blauw', 'Ster verbrandt → het wordt heet → atomen krijgen extra energie → ze geven die af als licht', 'De ster geeft licht → de atomen krijgen energie → het wordt koud → de kleur verschijnt'], goed: 2, uitleg: 'Volg de keten: elke stap is de oorzaak van de volgende. Signaalwoorden zoals "Als", "door die hitte" en "in de vorm van" laten zien hoe de stappen aan elkaar vastzitten.' }
      ]
    },
    kort: [
      {
        titel: 'Sterretjes', soort: 'Gebruiksaanwijzing',
        tekst: [
          'Sterretjes – 10 stuks, lengte 30 cm',
          'Houd het sterretje aan het uiteinde vast, met gestrekte arm en van je af.',
          'Steek nooit meer dan één sterretje tegelijk aan.',
          'Gebruik sterretjes alleen buiten.',
          'Let op: het ijzerdraad blijft na het branden nog lang heet. Leg uitgebrande sterretjes in een emmer water.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat doe je met een sterretje dat is uitgebrand?', opties: ['Je gooit het in de prullenbak', 'Je legt het in een emmer water', 'Je steekt het nog een keer aan', 'Je legt het binnen op tafel'], goed: 1, uitleg: 'Zoek het woord "uitgebrand". In de laatste regel staat wat je moet doen: in een emmer water leggen.' },
          { vaardigheid: 'Instructie', vraag: 'Waarom moet een uitgebrand sterretje in water?', opties: ['Omdat het daardoor weer opnieuw kan branden', 'Omdat het anders gaat roesten', 'Omdat het anders gaat knallen', 'Omdat het draad nog lang heet blijft'], goed: 3, uitleg: 'Bij een gebruiksaanwijzing staat de reden vaak vlak bij de opdracht. Lees de zin ervóór: "het ijzerdraad blijft na het branden nog lang heet." In water koelt het af.' }
        ]
      },
      {
        titel: 'Vuurwerkvrije zones', soort: 'Poster',
        tekst: [
          'Gemeente Lindewaard: vuurwerkvrije zones tijdens de jaarwisseling',
          'Van 31 december 18.00 uur tot 1 januari 2.00 uur mag je in deze gebieden geen vuurwerk afsteken:',
          '– rond de dierenweide in het Stadspark',
          '– rond verpleeghuis De Zonnehoek',
          '– in het hele winkelcentrum',
          'Op het Marktplein is om 00.15 uur een gratis lichtshow met drones.',
          'Wie in een vuurwerkvrije zone toch vuurwerk afsteekt, krijgt een boete van € 100.'
        ],
        vragen: [
          { vaardigheid: 'Eigen kennis', vraag: 'Waarom is er waarschijnlijk een vuurwerkvrije zone rond de dierenweide en het verpleeghuis?', opties: ['Dieren en ouderen schrikken erg van harde knallen', 'Daar is te weinig ruimte om veilig vuurwerk af te steken', 'Daar is de lichtshow met drones', 'Daar wonen geen mensen'], goed: 0, uitleg: 'Op de poster staat niet waarom. Gebruik wat je zelf weet: dieren raken in paniek van knallen, en ouderen in een verpleeghuis kunnen erg schrikken. De lichtshow is op het Marktplein, niet daar.' },
          { vaardigheid: 'Bedoeling', vraag: 'Wat is waarschijnlijk de bedoeling van de gratis lichtshow met drones?', opties: ['Met de drones controleren wie er vuurwerk afsteekt', 'Geld verdienen voor de gemeente', 'De dieren in het Stadspark geruststellen', 'Mensen iets moois bieden, zodat ze minder zelf afsteken'], goed: 3, uitleg: 'Het staat er niet letterlijk. Maar de lichtshow staat op een poster over vuurwerkvrije zones, en hij is gratis. De gemeente wil dus een feestelijk alternatief bieden voor zelf knallen. Geld verdienen kan niet, want de show is gratis, en over controleren staat niets op de poster.' }
        ]
      }
    ]
  },
  // Dag 73: Oudejaarsavond op de dijk
  {
    hardop: {
      titel: 'Oudejaarsavond op de dijk', soort: 'Verhalend', emoji: '🎇',
      alineas: [
        'Elk jaar liep Tess op oudejaarsavond met haar ouders de dijk op om naar het vuurwerk boven het dorp te kijken. Dit jaar liep er iemand extra mee: meneer Visser, de buurman van drieëntachtig. Hij hield Tess\' arm stevig vast, want hij zag al jaren bijna niets meer. "Ik kom voor de knallen," zei hij grinnikend. "En voor jouw verhalen."',
        'Om twaalf uur barstte het los. Vanaf de dijk zagen ze het hele dorp onder zich: overal flitste en knetterde het. "Vertel," zei meneer Visser. Tess opende haar mond, maar wist niet wat ze moest zeggen. "Eh, het is heel mooi," zei ze. "Heel veel kleuren." Meneer Visser knikte vriendelijk, maar Tess zag dat hij er niets aan had.',
        'Ze haalde diep adem en keek beter. "Boven de kerktoren hangt nu een gouden regen," zei ze langzaam. "Hij zakt heel zacht naar beneden, alsof iemand een emmer glitter leeggooit. En daar, links bij de rivier, schiet een groene pijl omhoog. Hij spat uiteen in honderd kleine slangetjes, die sissend wegkronkelen." Meneer Visser draaide zijn hoofd naar links. Er verscheen een glimlach op zijn gezicht.',
        'Ze stonden er bijna een uur. Tess beschreef elke pijl, elke fontein en zelfs de rook die als een grijze sluier over de daken dreef. Haar wangen waren koud en haar stem werd schor, maar ze wilde niet stoppen. Toen ze eindelijk naar huis liepen, kneep meneer Visser zachtjes in haar arm. "Dit was het mooiste vuurwerk in jaren," zei hij. "En ik heb er geen pijl van gezien."'
      ],
      vragen: [
        { vaardigheid: 'Inhoud', vraag: 'Waarom houdt meneer Visser de arm van Tess vast?', opties: ['Hij is bang voor de harde knallen', 'Het is glad op de dijk', 'Hij heeft het koud', 'Hij ziet al jaren bijna niets meer'], goed: 3, uitleg: 'Het signaalwoord "want" geeft de reden: "want hij zag al jaren bijna niets meer".' },
        { vaardigheid: 'Gevoel', vraag: 'Hoe voelt Tess zich als ze zegt: "Eh, het is heel mooi"?', opties: ['Onzeker, want ze weet niet hoe ze het moet zeggen', 'Verveeld, want ze vindt vuurwerk eigenlijk saai', 'Boos, want ze wil liever alleen kijken', 'Bang, want het vuurwerk is te dichtbij'], goed: 0, uitleg: 'Ze opent haar mond, maar "wist niet wat ze moest zeggen", en ze begint met "Eh". Zo praat je als je onzeker bent.' },
        { vaardigheid: 'Beeldspraak', vraag: '"Hij zakt heel zacht naar beneden, alsof iemand een emmer glitter leeggooit." Wat laat deze vergelijking zien?', opties: ['Dat er echt glitter uit de lucht valt', 'Dat het vuurwerk heel hard knalt', 'Dat de gouden regen langzaam glinsterend valt', 'Dat iemand met emmers op de kerktoren staat'], goed: 2, uitleg: 'Met "alsof" maakt Tess een vergelijking. Glitter die uit een emmer valt, dwarrelt en glinstert. Zo kan meneer Visser zich voorstellen hoe de gouden regen eruitziet, ook al kan hij hem niet zien.' },
        { vaardigheid: 'Ontwikkeling', vraag: 'Wat verandert er tussen alinea 2 en alinea 3 aan de manier waarop Tess vertelt?', opties: ['Eerst vertelt ze precies, daarna steeds korter', 'Eerst vertelt ze vaag, daarna precies en beeldend', 'Eerst praat ze hard, daarna fluistert ze', 'Er verandert niets'], goed: 1, uitleg: 'Vergelijk de twee stukjes. In alinea 2 zegt ze alleen "heel mooi, heel veel kleuren". In alinea 3 zegt ze waar iets is (boven de kerktoren, links bij de rivier), welke kleur het heeft en hoe het beweegt.' },
        { vaardigheid: 'Oorzaak en gevolg', vraag: 'Waarom draait meneer Visser zijn hoofd naar links?', opties: ['Tess vertelde dat daar een groene pijl omhoogschoot', 'Hij wilde zijn gezicht uit de wind draaien', 'Hij zag de groene pijl zelf heel even', 'Tess stond aan zijn linkerkant'], goed: 0, uitleg: 'Hier moet je een handeling verbinden met wat er net daarvoor gebeurde. Tess zei: "daar, links bij de rivier". Meneer Visser kan bijna niets zien, maar hij volgt haar woorden. Dat laat zien dat haar beschrijving werkt.' },
        { vaardigheid: 'Tussen de regels', vraag: 'Wat bedoelt meneer Visser met: "En ik heb er geen pijl van gezien"?', opties: ['Hij vond het vuurwerk eigenlijk tegenvallen', 'Hij stond met zijn rug naar het vuurwerk', 'Er was dit jaar geen vuurwerk met pijlen', 'Hij beleefde het door de woorden van Tess'], goed: 3, uitleg: 'Het klinkt tegenstrijdig: het mooiste vuurwerk in jaren, maar geen pijl gezien. Die tegenstelling is juist het punt. Door de verhalen van Tess kon hij het toch voor zich zien.' }
      ]
    },
    kort: [
      {
        titel: 'Oudejaarsavond in het dorpshuis', soort: 'Programma',
        tekst: [
          'Oudejaarsavond in Dorpshuis De Kolk – donderdag 31 december',
          '19.30 uur – deur open, warme chocolademelk en oliebollen',
          '20.00 uur – bingo voor jong en oud (kaart € 2,50)',
          '21.30 uur – kinderdisco in de kleine zaal (tot 12 jaar)',
          '22.45 uur – oudejaarsconference op het grote scherm',
          '23.55 uur – samen naar de dijk voor het aftellen',
          '00.30 uur – nieuwjaarsborrel met erwtensoep',
          'Entree: € 5,00 per persoon, kinderen tot 12 jaar gratis.'
        ],
        vragen: [
          { vaardigheid: 'Programma lezen', vraag: 'Tess (11) gaat met haar vader en moeder. Tess en haar vader spelen elk met één bingokaart. Wat betalen ze samen?', opties: ['€ 12,50', '€ 15,00', '€ 17,50', '€ 20,00'], goed: 1, uitleg: 'Reken per persoon: vader € 5,00, moeder € 5,00, Tess gratis (tot 12 jaar). Dan twee bingokaarten: 2 × € 2,50 = € 5,00. Samen € 15,00.' },
          { vaardigheid: 'Programma lezen', vraag: 'Hoeveel tijd zit er tussen het begin van de oudejaarsconference en het moment dat iedereen naar de dijk gaat?', opties: ['1 uur en 55 minuten', '55 minuten', '1 uur en 10 minuten', '1 uur en 45 minuten'], goed: 2, uitleg: 'Zoek de twee tijden: de conference begint om 22.45 uur, naar de dijk gaat iedereen om 23.55 uur. Van 22.45 tot 23.45 uur is 1 uur, en dan nog 10 minuten tot 23.55 uur.' }
        ]
      },
      {
        titel: 'Het weer rond de jaarwisseling', soort: 'Weerbericht',
        tekst: [
          'Na een grijze dag klaart het in de avond op. Rond middernacht is het droog en grotendeels helder, met een temperatuur van -2 °C.',
          'De wind is zwak, waardoor de rook van het vuurwerk lang blijft hangen. Vooral in steden kan de lucht daardoor na middernacht flink vervuild raken. Mensen met astma blijven dan beter binnen.',
          'Nieuwjaarsdag begint zonnig. Later trekt er vanuit het westen bewolking binnen, met in de avond kans op een beetje sneeuw.'
        ],
        vragen: [
          { vaardigheid: 'Signaalwoord', vraag: 'Waarom blijft de rook van het vuurwerk volgens het weerbericht lang hangen?', opties: ['Omdat er weinig wind is', 'Omdat het vriest', 'Omdat het helder is', 'Omdat er later sneeuw komt'], goed: 0, uitleg: 'Het signaalwoord "waardoor" verbindt een oorzaak met een gevolg. Vóór "waardoor" staat de oorzaak: "De wind is zwak."' },
          { vaardigheid: 'Teksten vergelijken', vraag: 'In het verhaal dreef de rook "als een grijze sluier over de daken". Welk stukje uit het weerbericht verklaart dat?', opties: ['"Rond middernacht is het droog en grotendeels helder, met een temperatuur van -2 °C."', '"Mensen met astma blijven dan beter binnen."', '"Later trekt er vanuit het westen bewolking binnen."', '"De wind is zwak, waardoor de rook van het vuurwerk lang blijft hangen."'], goed: 3, uitleg: 'Zoek in het weerbericht de zin die over rook gaat. Een sluier is een dunne doek die blijft hangen. Dat past bij rook die door zwakke wind niet wordt weggeblazen.' }
        ]
      }
    ]
  },
  // Dag 74: Duizenden mensen bij de nieuwjaarsduik
  {
    hardop: {
      titel: 'Duizenden mensen bij de nieuwjaarsduik', soort: 'Nieuws', emoji: '🏊',
      alineas: [
        'STRANDHOVEN – Met luid gejuich renden vrijdagmiddag om precies twaalf uur ruim drieduizend mensen de ijskoude Noordzee in. Het zeewater was 7 graden, de lucht 4 graden. Toch stonden veel deelnemers na afloop met een glimlach op het strand, rillend onder een handdoek en met een beker warme soep in hun handen.',
        'De nieuwjaarsduik in Strandhoven bestaat dit jaar dertig jaar. De eerste keer deden er zeven vrienden mee, die het jaar "fris wilden beginnen". Tegenwoordig komen er mensen uit het hele land. Velen dragen de oranje muts die ze bij de inschrijving krijgen. Sommigen verkleden zich: dit jaar liepen er onder anderen een ijsbeer, een kerstboom en drie verdwaalde sinterklazen de golven in.',
        'Volgens de reddingsbrigade verliep alles rustig. Twintig vrijwilligers stonden met reddingsboeien klaar, en de deelnemers mochten niet dieper dan tot hun middel het water in. "Koud water is niet zonder gevaar," zegt brigadelid Joost Hermans. "Je ademhaling schiet de eerste seconden omhoog. Daarom raden we aan om niet met je hoofd onder te gaan en na een paar minuten weer uit het water te komen."',
        'Priya (12) deed voor het eerst mee, samen met haar moeder. "Het voelde alsof er duizend naalden in mijn benen prikten," vertelt ze. "Maar daarna voelde ik me superfit." Haar moeder is er ook enthousiast over: "Iedereen zou dit één keer in zijn leven moeten doen." Priya weet nu al zeker dat ze volgend jaar terugkomt. "Dan neem ik mijn vader mee. Hij heeft het beloofd."'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Hoe koud was het zeewater?', opties: ['7 graden', '4 graden', '12 graden', '0 graden'], goed: 0, uitleg: 'In alinea 1 staan twee temperaturen. Lees goed welke bij het water hoort: "Het zeewater was 7 graden, de lucht 4 graden."' },
        { vaardigheid: 'Formulering', vraag: 'De zeven vrienden wilden het jaar "fris beginnen". Waarom is dat een woordgrap?', opties: ['Ze dronken op het strand frisdrank', 'Het was die dag erg warm', '"Fris" betekent hier koud én uitgerust', 'Ze waren pas net wakker'], goed: 2, uitleg: 'Let op de aanhalingstekens: die laten vaak zien dat een woord bijzonder gebruikt wordt. "Fris beginnen" betekent normaal: opnieuw en uitgerust beginnen. Maar het water is ook letterlijk fris, dus koud. Twee betekenissen in één woord: een woordgrap.' },
        { vaardigheid: 'Nieuwsbericht', vraag: 'Waarom staat "STRANDHOVEN" in hoofdletters aan het begin van het bericht?', opties: ['Het is de naam van de krant', 'Het is de plaats waar het nieuws gebeurde', 'Het is de naam van de schrijver', 'Het is het belangrijkste woord van de duik'], goed: 1, uitleg: 'Dit weet je uit je eigen kennis van nieuwsberichten: ze beginnen vaak met de plaatsnaam in hoofdletters, gevolgd door een streepje. Dat is de plaats waar het nieuws vandaan komt.' },
        { vaardigheid: 'Verband', vraag: 'Waarom raadt de reddingsbrigade aan om niet met je hoofd onder water te gaan?', opties: ['Omdat je anders je muts verliest', 'Omdat het water te vies is', 'Omdat er te veel mensen tegelijk in het water zijn', 'Omdat je ademhaling in koud water omhoogschiet'], goed: 3, uitleg: 'Vóór "Daarom" staat de reden: je ademhaling schiet omhoog. Als je dan met je hoofd onder water bent, kun je water binnenkrijgen. Het signaalwoord helpt je oorzaak en gevolg te vinden.' },
        { vaardigheid: 'Beeldspraak', vraag: '"Het voelde alsof er duizend naalden in mijn benen prikten." Wat bedoelt Priya?', opties: ['Dat de kou heel scherp en stekend aanvoelde', 'Dat ze op de bodem in iets scherps was gestapt', 'Dat ze door een kwal was gestoken', 'Dat ze kramp kreeg van het rennen'], goed: 0, uitleg: 'Met "alsof" vergelijkt Priya de kou met iets wat je kent: prikkende naalden. Ijskoud water voelt op je huid scherp en stekend aan, niet als gewone kou.' },
        { vaardigheid: 'Feit of mening', vraag: 'Welke zin uit het bericht is een mening?', opties: ['"Het zeewater was 7 graden."', '"Twintig vrijwilligers stonden met reddingsboeien klaar."', '"Iedereen zou dit één keer in zijn leven moeten doen."', '"De nieuwjaarsduik bestaat dit jaar dertig jaar."'], goed: 2, uitleg: 'Een feit kun je controleren met een thermometer, door te tellen of op te zoeken. Een mening zegt wat iemand vindt; woorden als "zou moeten" verraden dat vaak. Niet iedereen hoeft het met de moeder van Priya eens te zijn.' }
      ]
    },
    kort: [
      {
        titel: 'Nieuwjaarsduik Strandhoven', soort: 'Poster',
        tekst: [
          'NIEUWJAARSDUIK STRANDHOVEN – vrijdag 1 januari',
          '11.00 uur: inschrijven bij strandpaviljoen De Branding (€ 3,00, kinderen tot 12 jaar gratis)',
          '11.45 uur: gezamenlijke warming-up',
          '12.00 uur: de duik!',
          '12.15 uur: warme erwtensoep en chocolademelk voor alle deelnemers',
          'Kinderen tot 16 jaar doen alleen mee samen met een volwassene.',
          'Bij de inschrijving krijg je een oranje muts. Neem zelf een handdoek, droge kleren en badslippers mee.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat krijg je bij de inschrijving?', opties: ['Een handdoek', 'Badslippers', 'Een beker erwtensoep', 'Een oranje muts'], goed: 3, uitleg: 'Zoek het woord "inschrijving" in de laatste regels. Een handdoek en badslippers moet je zelf meenemen; de soep krijg je pas na de duik.' },
          { vaardigheid: 'Poster lezen', vraag: 'Priya (12) en haar moeder schrijven zich in. Wat betalen ze samen?', opties: ['€ 3,00', '€ 6,00', 'Niets, het is gratis', '€ 4,50'], goed: 1, uitleg: 'Let op "tot 12 jaar". Dat betekent: tot je twaalfde verjaardag. Priya is 12, dus zij betaalt al wel. Twee keer € 3,00 is € 6,00.' }
        ]
      },
      {
        titel: 'Pendelbus naar het strand', soort: 'Dienstregeling',
        tekst: [
          'Gratis pendelbus nieuwjaarsduik – vrijdag 1 januari',
          'Heen: P+R Duinpark → Strand (de rit duurt 10 minuten)',
          'Vertrek: 10.30 | 10.45 | 11.00 | 11.15 | 11.30 | 11.40',
          'Terug: Strand → P+R Duinpark',
          'Vertrek: 12.30 | 12.45 | 13.00 | 13.30 | 14.00',
          'Let op: op de heenweg kan het druk zijn. Reken op wachttijd.'
        ],
        vragen: [
          { vaardigheid: 'Teksten vergelijken', vraag: 'Priya en haar moeder willen er zijn als het inschrijven begint. Welke bus vanaf P+R Duinpark moeten ze uiterlijk nemen?', opties: ['De bus van 10.45 uur', 'De bus van 10.30 uur', 'De bus van 11.00 uur', 'De bus van 11.40 uur'], goed: 0, uitleg: 'Combineer de twee teksten. Op de poster staat dat het inschrijven om 11.00 uur begint. De rit duurt 10 minuten. Met de bus van 10.45 uur ben je er om 10.55 uur; met die van 11.00 uur ben je pas om 11.10 uur op het strand.' },
          { vaardigheid: 'Dienstregeling', vraag: 'Hoe laat gaat de laatste bus terug naar P+R Duinpark?', opties: ['Om 11.40 uur', 'Om 13.30 uur', 'Om 14.00 uur', 'Om 12.30 uur'], goed: 2, uitleg: 'Kijk in het goede deel van de dienstregeling: "Terug". 11.40 uur is de laatste bus op de heenweg.' }
        ]
      }
    ]
  },
  // Dag 75: Satellieten om de aarde
  {
    hardop: {
      titel: 'Satellieten om de aarde', soort: 'Informatief', emoji: '🛰️',
      alineas: [
        'Als je op een heldere avond lang genoeg naar de hemel kijkt, zie je soms een lichtpuntje dat rustig en zonder te knipperen tussen de sterren door schuift. Dat is geen ster en ook geen vliegtuig, maar een satelliet. Een satelliet is een voorwerp dat in een baan rond een hemellichaam draait. De maan is een natuurlijke satelliet van de aarde, maar tegenwoordig cirkelen er ook duizenden kunstmatige satellieten boven ons hoofd.',
        'Waarom valt zo\'n satelliet niet naar beneden? Eigenlijk valt hij voortdurend, maar hij mist de aarde steeds. Een raket brengt hem eerst naar grote hoogte en geeft hem daar een enorme snelheid: vaak bijna achtduizend meter per seconde. Doordat hij zo snel opzij beweegt, buigt het aardoppervlak onder hem net zo snel weg als hij valt. Zo blijft hij rondjes draaien.',
        'Satellieten zijn onmisbaar geworden. Weersatellieten fotograferen wolken en stormen, zodat meteorologen kunnen voorspellen wat voor weer het wordt. Navigatiesatellieten sturen signalen naar je telefoon, waardoor die precies weet waar je bent. Weer andere satellieten zorgen ervoor dat je live naar een voetbalwedstrijd aan de andere kant van de wereld kunt kijken.',
        'Toch heeft al dat verkeer in de ruimte ook een keerzijde. Oude satellieten die niet meer werken, blijven vaak nog jaren rondzweven, samen met losse onderdelen en stukken van raketten. Dit ruimteschroot is gevaarlijk, want bij die hoge snelheid kan zelfs een schroefje een werkende satelliet beschadigen. Wetenschappers bedenken daarom manieren om de ruimte op te ruimen, bijvoorbeeld met een satelliet die afval vangt in een groot net.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Hoe kun je volgens alinea 1 een satelliet aan de avondhemel herkennen?', opties: ['Hij beweegt rustig tussen de sterren door en knippert niet', 'Hij knippert snel met rode en groene lampjes', 'Hij staat altijd stil naast de maan', 'Hij is altijd het felste lichtpunt aan de hemel'], goed: 0, uitleg: 'Zoek in alinea 1 naar de zin die beschrijft wat je ziet: "een lichtpuntje dat rustig en zonder te knipperen tussen de sterren door schuift". Knipperende gekleurde lampjes horen bij een vliegtuig, en daarvan zegt de tekst juist dat het géén vliegtuig is.' },
        { vaardigheid: 'Woordbetekenis', vraag: 'In alinea 4 staat: "Toch heeft al dat verkeer in de ruimte ook een keerzijde." Wat betekent "keerzijde" hier?', opties: ['De achterkant van een satelliet', 'De terugweg van een raket naar de aarde', 'Een plek in de ruimte waar satellieten omkeren', 'Een nadeel van iets wat verder handig is'], goed: 3, uitleg: 'Kijk naar de woorden eromheen. "Toch" laat zien dat er na al het goede nieuws uit alinea 3 iets minder fijns komt. Daarna lees je over ruimteschroot en gevaar. Een keerzijde is dus de minder leuke kant van iets: een nadeel.' },
        { vaardigheid: 'Signaalwoord', vraag: 'In alinea 2 staat: "Doordat hij zo snel opzij beweegt, buigt het aardoppervlak onder hem net zo snel weg als hij valt." Welk verband geeft "Doordat" aan?', opties: ['Een tegenstelling', 'Een voorbeeld', 'Een oorzaak en een gevolg', 'Een volgorde in de tijd'], goed: 2, uitleg: '"Doordat" is een signaalwoord van oorzaak: wat erna komt (de hoge snelheid opzij) zorgt ervoor dat er iets gebeurt (de aarde buigt onder hem weg, zodat hij haar mist). Andere woorden met zo\'n verband zijn "omdat", "daardoor" en "want".' },
        { vaardigheid: 'Alinea', vraag: 'Welke functie heeft alinea 1 in deze tekst?', opties: ['Hij leidt het onderwerp in en legt uit wat een satelliet is', 'Hij vat de hele tekst kort samen', 'Hij geeft de mening van de schrijver over satellieten', 'Hij geeft een oplossing voor het probleem uit alinea 4'], goed: 0, uitleg: 'Een inleiding maakt je nieuwsgierig en vertelt waar de tekst over gaat. Alinea 1 begint met iets wat je zelf kunt zien, en legt daarna uit wat een satelliet is. Pas in de alinea\'s daarna lees je hoe satellieten werken, waarvoor ze dienen en welk probleem er is.' },
        { vaardigheid: 'Bedoeling', vraag: 'Waarom schrijft de schrijver in alinea 2: "Eigenlijk valt hij voortdurend, maar hij mist de aarde steeds"?', opties: ['Om te laten zien dat satellieten vaak neerstorten', 'Om de lezer bang te maken voor vallende satellieten', 'Om een ingewikkeld idee op een verrassende, begrijpelijke manier uit te leggen', 'Om aan te kondigen dat de rest van de tekst over vallen gaat'], goed: 2, uitleg: 'De zin klinkt eerst vreemd: hoe kun je vallen en toch boven blijven? Juist daardoor blijf je hangen. In de zinnen erna legt de schrijver uit hoe het zit. Hij gebruikt deze formulering dus om een moeilijk natuurkundig idee helder en spannend te maken.' },
        { vaardigheid: 'Verband', vraag: 'Waarom kan volgens alinea 4 zelfs een klein schroefje een werkende satelliet beschadigen?', opties: ['Omdat het schroefje zo zwaar is dat het andere satellieten aantrekt', 'Omdat het schroefje storende signalen uitzendt', 'Omdat het schroefje vastgeplakt zit aan oude raketten', 'Omdat het schroefje met een enorme snelheid beweegt'], goed: 3, uitleg: 'Zoek de oorzaak achter het signaalwoord "want": "want bij die hoge snelheid kan zelfs een schroefje een werkende satelliet beschadigen". Wat hier telt, is de snelheid, niet de grootte. Denk terug aan alinea 2: alles in een baan rond de aarde gaat razendsnel.' }
      ]
    },
    kort: [
      {
        titel: 'Ruimtemuseum De Sterrenpoort', soort: 'Programma',
        tekst: [
          'Ruimtemuseum De Sterrenpoort – programma zaterdag 9 januari',
          '10.30 uur – Film: Leven in het ruimtestation (25 min.) – zaal 1',
          '11.30 uur – Workshop: bouw je eigen raket (60 min.) – lokaal 3, vanaf 8 jaar, € 4 extra',
          '13.00 uur – Lezing: Wie ruimt het ruimteschroot op? (45 min.) – zaal 1',
          '14.30 uur – Film: Leven in het ruimtestation (25 min.) – zaal 1',
          '15.00 uur – Workshop: bouw je eigen raket (60 min.) – lokaal 3, vanaf 8 jaar, € 4 extra',
          'Entree: volwassenen € 14, kinderen van 4 tot en met 12 jaar € 9, kinderen onder de 4 gratis.',
          'Het museum is open van 10.00 tot 17.00 uur.'
        ],
        vragen: [
          { vaardigheid: 'Schema lezen', vraag: 'Fenna wil de lezing en de film allebei zien, en daartussen zo kort mogelijk wachten. Welke film kiest ze?', opties: ['De film van 10.30 uur', 'De film van 14.30 uur', 'Allebei, want de film duurt maar 25 minuten', 'Geen van beide, want de film en de lezing zijn in dezelfde zaal'], goed: 1, uitleg: 'Reken met begin- en eindtijden. De lezing is van 13.00 tot 13.45 uur. Na de film van 10.30 uur (klaar om 10.55 uur) moet ze ruim twee uur wachten. Na de lezing duurt het tot de film van 14.30 uur maar 45 minuten. Dat de zaal hetzelfde is, is juist handig.' },
          { vaardigheid: 'Informatie combineren', vraag: 'Een moeder gaat met haar kinderen van 6 en 10 jaar naar het museum. Alleen het oudste kind doet mee aan de raketworkshop. Hoeveel betalen ze samen?', opties: ['€ 32', '€ 27', '€ 40', '€ 36'], goed: 3, uitleg: 'Tel stap voor stap: moeder € 14, twee kinderen van 4 tot en met 12 jaar 2 × € 9 = € 18, en de workshop € 4 extra. Samen: 14 + 18 + 4 = € 36. Het kind van 6 mag niet eens mee naar de workshop, want die is vanaf 8 jaar.' }
        ]
      },
      {
        titel: 'Het ruimtestation zien', soort: 'Tip',
        tekst: [
          'Tip van Sterrenwacht Het Zwerk',
          'Het internationale ruimtestation ISS is na de maan vaak het helderste voorwerp aan de avondhemel. Je kunt het zonder telescoop zien.',
          'Wanneer? Deze week vlak na zonsondergang, als het bij jou al donker is, maar het ruimtestation hoog boven je nog in het zonlicht hangt.',
          'Hoe herken je het? Een fel wit lichtpunt dat in een paar minuten van west naar oost over de hemel glijdt.',
          'Let op: bij bewolking zie je niets. Kijk dus eerst even naar het weerbericht.'
        ],
        vragen: [
          { vaardigheid: 'Eigen kennis', vraag: 'Waarom zie je het ISS alleen als het ruimtestation zelf nog "in het zonlicht hangt"?', opties: ['Omdat het ruimtestation zelf geen licht geeft, maar zonlicht terugkaatst', 'Omdat de lampen van het ISS alleen overdag aangaan', 'Omdat het ISS na zonsondergang op aarde landt', 'Omdat de maan dan nog niet schijnt'], goed: 0, uitleg: 'Combineer de tekst met wat je al weet. De maan geeft ook geen eigen licht: je ziet haar omdat de zon erop schijnt. Met het ISS werkt het net zo. Daarom zie je het alleen als het bij jou donker is, terwijl het ruimtestation hoog in de lucht nog zonlicht vangt.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'In welke richting beweegt het ISS over de hemel?', opties: ['Van noord naar zuid', 'Van oost naar west', 'Van west naar oost', 'Het staat een paar minuten stil'], goed: 2, uitleg: 'Zoek gericht naar de regel "Hoe herken je het?". Daar staat: "van west naar oost". Let goed op de volgorde van de windrichtingen, want "van oost naar west" is precies andersom.' }
        ]
      }
    ]
  },
  // Dag 76: De sleutelhanger
  {
    hardop: {
      titel: 'De sleutelhanger', soort: 'Verhalend', emoji: '🔑',
      alineas: [
        'Op de stoep voor de bakkerij lag iets te glinsteren. Ruben bukte en raapte het op: een sleutelbos met één koperen sleutel en een houten vosje eraan. Het vosje was zo klein dat het in zijn handpalm verdween, maar elk haartje van de staart was er met een mesje in gekerfd. Zo\'n mooie sleutelhanger had hij nog nooit gezien.',
        '"Die hou ik," dacht hij. Niemand had gezien dat hij hem opraapte, en een sleutel kon je altijd laten bijmaken. Hij stopte het vosje in zijn jaszak en liep door. Maar bij elke stap voelde hij het ding tegen zijn been tikken, alsof het hem iets wilde vertellen.',
        'Bij de bushalte hing een papiertje aan de lantaarnpaal, vastgeplakt met plakband dat al half losliet. "Sleutel verloren, met een houten vos. Zeer dierbaar. Graag terugbrengen: Lindelaan 4." Ruben bleef staan. Het handschrift was bibberig en de letters stonden scheef. Hij keek naar de bus die net de hoek om kwam, en daarna naar de Lindelaan aan de overkant.',
        'De man die opendeed, had grijze stoppels en een vest met een gat in de elleboog. Toen hij het vosje zag, werden zijn ogen vochtig. "Dat heb ik veertig jaar geleden voor mijn vrouw gesneden," zei hij zacht. Ruben miste zijn bus. Hij zat aan de keukentafel en keek hoe meneer Brands met een klein mesje een stukje hout bewerkte. Toen hij eindelijk naar huis ging, zat er een uiltje in zijn zak.'
      ],
      vragen: [
        { vaardigheid: 'Personage', vraag: 'Hoe voelt Ruben zich in alinea 2, terwijl hij met het vosje in zijn zak doorloopt?', opties: ['Blij en trots, want hij heeft iets moois gevonden', 'Niet op zijn gemak, alsof hij iets doet wat niet klopt', 'Boos, omdat iemand zo slordig is geweest', 'Bang, omdat hij denkt dat iemand hem volgt'], goed: 1, uitleg: 'De schrijver zegt niet letterlijk hoe Ruben zich voelt, maar laat het zien. Het vosje tikt bij elke stap tegen zijn been, "alsof het hem iets wilde vertellen". Iets in hem zeurt dus: hij voelt dat het niet goed is om de sleutelhanger te houden.' },
        { vaardigheid: 'Samenvatten', vraag: 'Welke zin vat alinea 3 het best samen?', opties: ['Ruben stapt in de bus en vergeet het vosje', 'Ruben hangt zelf een briefje op bij de bushalte', 'Ruben ziet de eigenaar van de sleutel bij de bushalte staan', 'Ruben leest een briefje van de eigenaar en twijfelt wat hij zal doen'], goed: 3, uitleg: 'Een goede samenvatting noemt het belangrijkste en klopt helemaal. In alinea 3 leest Ruben het briefje, blijft staan en kijkt van de bus naar de Lindelaan: hij twijfelt. De eigenaar ziet hij pas in alinea 4, en het briefje heeft hij niet zelf opgehangen.' },
        { vaardigheid: 'Woordbetekenis', vraag: '"Het handschrift was bibberig." Wat zegt dat waarschijnlijk over de schrijver van het briefje?', opties: ['Het is iemand die heel netjes en sierlijk schrijft', 'Het briefje is in de regen geschreven', 'Het is iemand met een trillende hand, bijvoorbeeld een oude man', 'De schrijver had heel veel haast'], goed: 2, uitleg: '"Bibberig" lijkt op "bibberen": trillen. Een trillend handschrift past bij iemand met een trillende hand. In alinea 4 zie je dat het klopt: meneer Brands is een oude man met grijze stoppels. Lees dus ook verder om je idee te controleren.' },
        { vaardigheid: 'Beeldspraak', vraag: '"Bij elke stap voelde hij het ding tegen zijn been tikken, alsof het hem iets wilde vertellen." Wat bedoelt de schrijver hiermee?', opties: ['Dat Ruben steeds aan het vosje moet denken en zich schuldig voelt', 'Dat het houten vosje echt kan praten', 'Dat Ruben door de zware sleutelbos gaat hinken', 'Dat de sleutel bijna uit zijn zak valt'], goed: 0, uitleg: '"Alsof" laat zien dat het niet letterlijk zo is: een houten vosje praat niet. Het is beeldspraak. Het tikken herinnert Ruben steeds aan wat hij heeft gedaan, net als een stemmetje in je hoofd dat zegt: dit is niet van jou.' },
        { vaardigheid: 'Ontwikkeling', vraag: 'Hoe verandert Ruben in de loop van het verhaal?', opties: ['Van iemand die de sleutelhanger wil houden naar iemand die tijd maakt voor de eigenaar', 'Van een verlegen jongen naar een jongen die veel praat', 'Van een vrolijke jongen naar een boze jongen', 'Hij verandert niet: hij wilde de sleutelhanger vanaf het begin terugbrengen'], goed: 0, uitleg: 'Vergelijk het begin met het eind. In alinea 2 denkt Ruben: "Die hou ik." Aan het eind brengt hij de sleutel terug, mist hij zijn bus en blijft hij bij meneer Brands zitten. Zijn gedachten en zijn gedrag zijn dus echt veranderd.' },
        { vaardigheid: 'Personage', vraag: 'Aan het eind krijgt Ruben een uiltje mee. Wat wil meneer Brands daarmee waarschijnlijk laten zien?', opties: ['Dat hij nu beter kan snijden dan veertig jaar geleden', 'Dat hij het uiltje eigenlijk aan Ruben wil verkopen', 'Dat Ruben, net als zijn vrouw vroeger, iets met aandacht gemaakt verdient', 'Dat Ruben het uiltje moet teruggeven als hij het vosje weer vindt'], goed: 2, uitleg: 'Dit staat nergens letterlijk, je moet het afleiden. Het vosje maakte hij uit liefde voor zijn vrouw. Nu snijdt hij met hetzelfde mesje een dier voor Ruben. Zo bedankt hij Ruben niet met geld, maar met iets persoonlijks: Ruben is belangrijk voor hem geworden.' }
      ]
    },
    kort: [
      {
        titel: 'Gevonden voorwerpen', soort: 'Tabel',
        tekst: [
          'Gevonden voorwerpen – gemeente Zandhoven, week 1',
          'Datum | Voorwerp | Gevonden bij',
          '2 jan. | zwarte handschoen (links) | sporthal De Kuip',
          '3 jan. | sleutelbos, 3 sleutels, rode hanger | bushalte Marktplein',
          '4 jan. | blauwe fiets, zonder slot | station',
          '5 jan. | gele muts met pompon | speeltuin Parkweg',
          'Ophalen: gemeentehuis, balie 2, maandag tot en met vrijdag van 9.00 tot 12.30 uur. Neem een identiteitsbewijs mee.',
          'Gevonden voorwerpen worden drie maanden bewaard.'
        ],
        vragen: [
          { vaardigheid: 'Schema lezen', vraag: 'Waar is de sleutelbos gevonden?', opties: ['Bij sporthal De Kuip', 'Bij het station', 'Bij bushalte Marktplein', 'In het gemeentehuis'], goed: 2, uitleg: 'In een tabel zoek je eerst de goede rij (sleutelbos) en kijk je dan in de goede kolom (Gevonden bij). Daar staat: bushalte Marktplein. Het gemeentehuis is de plek waar je hem ophaalt, niet waar hij gevonden is.' },
          { vaardigheid: 'Schema lezen', vraag: 'Esmee is haar blauwe fiets kwijt en kan alleen op woensdagmiddag naar het gemeentehuis. Wat is het probleem?', opties: ['Haar fiets staat niet in de lijst', 'De balie is \'s middags dicht', 'Gevonden fietsen worden maar een week bewaard', 'Ze moet eerst een slot kopen'], goed: 1, uitleg: 'De fiets staat wel in de tabel (4 januari, station), dus daar zit het probleem niet. Kijk dan naar de regel over ophalen: van 9.00 tot 12.30 uur. Op woensdagmiddag is de balie dus gesloten. Ze moet een ochtend kiezen.' }
        ]
      },
      {
        titel: 'Gevonden in de Lindelaan', soort: 'Berichten in een buurtapp',
        tekst: [
          'Buurtapp Lindelaan en omgeving',
          'Joke (14.12): Wie mist er een fietssleutel aan een rood touwtje? Gevonden bij het speeltuintje. Hij ligt bij mij op nummer 9.',
          'Hamid (14.20): Volgens mij is die van de jongen van nummer 15. Die liep vanochtend iets te zoeken.',
          'Joke (14.22): Ik heb daar net aangebeld, maar er is niemand thuis.',
          'Hamid (14.25): Zijn moeder werkt tot vijf uur. Probeer het daarna nog eens.'
        ],
        vragen: [
          { vaardigheid: 'Bedoeling', vraag: 'Waarom begint Hamid zijn bericht met "Volgens mij"?', opties: ['Omdat hij heeft gezien hoe de jongen de sleutel verloor', 'Omdat hij wil dat Joke de sleutel aan hem geeft', 'Omdat hij het denkt, maar het niet zeker weet', 'Omdat hij boos is dat niemand reageert'], goed: 2, uitleg: 'Met "volgens mij" laat iemand zien dat iets een vermoeden is en geen zekerheid. Hamid zag de jongen alleen "iets" zoeken, niet per se deze sleutel. Let bij het lezen op zulke woordjes: ze vertellen hoe zeker de schrijver is.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Waar ligt de gevonden sleutel nu?', opties: ['Bij het speeltuintje', 'Bij Hamid', 'Op nummer 15', 'Bij Joke op nummer 9'], goed: 3, uitleg: 'Let op het verschil tussen waar iets gevonden is en waar het nu is. Gevonden bij het speeltuintje, maar Joke schrijft: "Hij ligt bij mij op nummer 9." Nummer 15 is waar de eigenaar misschien woont.' }
        ]
      }
    ]
  },
  // Dag 77: Zeehonden in de Waddenzee
  {
    hardop: {
      titel: 'Zeehonden in de Waddenzee', soort: 'Informatief', emoji: '🦭',
      alineas: [
        'Wie bij laagwater over de Waddenzee vaart, ziet ze soms liggen: tientallen zeehonden op een zandplaat, lui uitgestrekt in de zon. In de Waddenzee leven twee soorten. De gewone zeehond komt het meest voor. Hij heeft een rond hoofd en een korte snuit, een beetje zoals een hond. De grijze zeehond is groter en heeft een lange, rechte kop.',
        'Zeehonden zijn uitstekend aangepast aan het leven in koud water. Onder hun huid zit een dikke laag spek, die werkt als een warme jas. Bij het duiken knijpen ze hun neusgaten dicht en vertragen ze hun hartslag, zodat ze zuinig omgaan met zuurstof. Zo kunnen ze soms wel een kwartier onder water blijven om te jagen op vis en garnalen.',
        'Toch moeten ze regelmatig aan land. Op de zandplaten rusten ze uit, verteren ze hun voedsel en zogen de moeders hun jongen. Een pasgeboren gewone zeehond kan meteen zwemmen, maar is de eerste weken helemaal afhankelijk van de melk van zijn moeder. Raakt een jong haar kwijt, bijvoorbeeld door een storm, dan ligt het soms alleen op het strand. Zo\'n jong noemen we een huiler, omdat het roept om zijn moeder.',
        'Rond 1975 leek het bijna gedaan met de zeehonden in de Nederlandse Waddenzee. Er waren er nog maar een paar honderd over. Eerst was er lange tijd op ze gejaagd, en daarna maakte vervuild water hen ziek. Doordat de jacht verboden werd en het water schoner werd, groeide hun aantal weer. Tegenwoordig leven er duizenden. Zie je een zeehond op het strand, blijf dan wel op afstand: het is een wild dier dat flink kan bijten.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Waaraan kun je een grijze zeehond herkennen?', opties: ['Aan zijn grotere lijf en lange, rechte kop', 'Aan zijn ronde hoofd en korte snuit', 'Aan de witte vlekken op zijn rug', 'Aan het geluid dat hij maakt'], goed: 0, uitleg: 'In alinea 1 worden twee soorten vergeleken. Lees precies welk kenmerk bij welke soort hoort: het ronde hoofd en de korte snuit horen bij de gewone zeehond. Over de grijze zeehond staat: "groter" en "een lange, rechte kop".' },
        { vaardigheid: 'Woordbetekenis', vraag: 'In alinea 3 staat: "zogen de moeders hun jongen". Wat betekent "zogen"?', opties: ['Leren zwemmen', 'Schoonlikken', 'Beschermen tegen de storm', 'Melk laten drinken'], goed: 3, uitleg: 'Lees de zin die erop volgt: het jong is "helemaal afhankelijk van de melk van zijn moeder". Zogen betekent dus dat een moederdier haar jong melk laat drinken. De volgende zin helpt je vaak bij een onbekend woord.' },
        { vaardigheid: 'Beeldspraak', vraag: 'De laag spek "werkt als een warme jas". Wat bedoelt de schrijver?', opties: ['Zeehonden dragen in de winter een vacht die op een jas lijkt', 'De speklaag is net zo dik als een winterjas', 'Zeehonden trekken in de winter extra spek aan', 'De speklaag houdt de warmte in het lichaam vast, net zoals een jas doet'], goed: 3, uitleg: 'Dit is een vergelijking: je herkent hem aan "als". Een jas houdt jou warm in de kou. De schrijver bedoelt dat het spek bij de zeehond hetzelfde doet. Het gaat om wat het spek doet, niet om hoe dik het is of hoe het eruitziet.' },
        { vaardigheid: 'Signaalwoord', vraag: 'Alinea 3 begint met "Toch". Waarom gebruikt de schrijver dat woord?', opties: ['Omdat hij een voorbeeld van een prooi gaat geven', 'Omdat hij de tekst gaat afsluiten', 'Omdat er een tegenstelling komt: ze zijn goed aangepast aan het water, maar moeten ook aan land', 'Omdat hij een oorzaak gaat geven voor de vervuiling'], goed: 2, uitleg: '"Toch" is een signaalwoord van tegenstelling. Alinea 2 vertelt hoe goed zeehonden in het water kunnen leven. Je zou denken dat ze dan altijd in zee blijven, maar "toch" moeten ze aan land. Zo verbindt de schrijver de twee alinea\'s.' },
        { vaardigheid: 'Samenvatten', vraag: 'Welke zin vat alinea 4 het best samen?', opties: ['Zeehonden kunnen flink bijten, dus blijf op afstand', 'Rond 1975 waren er nog maar een paar honderd zeehonden', 'Na een dieptepunt rond 1975 gaat het weer goed met de zeehonden, dankzij een jachtverbod en schoner water', 'Mensen moeten zeehonden op het strand helpen'], goed: 2, uitleg: 'Een samenvatting van een alinea moet de hele alinea dekken, niet één detail. Het bijten en het jaartal zijn stukjes van de alinea. De zin over het dieptepunt, de oorzaak van het herstel en de duizenden van nu vat alles samen. Het laatste antwoord staat er niet.' },
        { vaardigheid: 'Feit of advies', vraag: 'Welke zin uit de tekst is geen feit, maar een advies aan de lezer?', opties: ['De grijze zeehond is groter dan de gewone zeehond.', 'Tegenwoordig leven er duizenden.', 'Een pasgeboren gewone zeehond kan meteen zwemmen.', 'Zie je een zeehond op het strand, blijf dan wel op afstand.'], goed: 3, uitleg: 'Een feit kun je controleren: je kunt zeehonden meten of tellen. Een advies vertelt jou wat je moet doen. De zin "blijf dan wel op afstand" is gericht aan de lezer en zegt wat je beter kunt doen. In een informatieve tekst staat zo\'n advies vaak aan het eind.' }
      ]
    },
    kort: [
      {
        titel: 'Naar de zeehondenbank', soort: 'Dienstregeling',
        tekst: [
          'Rondvaart naar de zeehondenbank – rederij De Zeester, Lauwersoog',
          'Onze vertrektijden hangen af van het getij: we varen alleen als de zandplaten droog liggen.',
          'Datum | Vertrek | Terug',
          'za 16 jan. | 10.15 uur | 12.45 uur',
          'zo 17 jan. | 11.00 uur | 13.30 uur',
          'za 23 jan. | 15.30 uur | 18.00 uur',
          'Prijzen: volwassene € 19,50, kind van 4 tot en met 11 jaar € 12, hond € 3.',
          'Kom uiterlijk 20 minuten voor vertrek naar de steiger.'
        ],
        vragen: [
          { vaardigheid: 'Eigen kennis', vraag: 'Waarom vertrekt de boot niet elke dag op hetzelfde tijdstip?', opties: ['Omdat de kapitein niet elke dag vroeg kan beginnen', 'Omdat de zandplaten alleen bij laagwater droog liggen, en eb en vloed elke dag later vallen', 'Omdat er in het weekend meer passagiers zijn', 'Omdat de boot eerst moet tanken'], goed: 1, uitleg: 'In de tekst staat dat de tijden afhangen van het getij. Wat je zelf weet over eb en vloed helpt je verder: laagwater valt niet elke dag op dezelfde tijd, maar schuift steeds een stukje op. Daarom veranderen ook de vaartijden.' },
          { vaardigheid: 'Schema lezen', vraag: 'Hoe laat moet je uiterlijk bij de steiger zijn voor de boot van zondag 17 januari?', opties: ['10.40 uur', '11.00 uur', '10.20 uur', '10.55 uur'], goed: 0, uitleg: 'Zoek eerst de vertrektijd op zondag: 11.00 uur. Lees dan de regel onderaan: "uiterlijk 20 minuten voor vertrek". 11.00 uur min 20 minuten is 10.40 uur.' }
        ]
      },
      {
        titel: 'Zeehond op het strand?', soort: 'Poster',
        tekst: [
          'Zie je een jonge zeehond alleen op het strand?',
          '1. Blijf minstens 30 meter uit de buurt.',
          '2. Raak hem niet aan en geef hem geen eten of water.',
          '3. Houd honden aan de lijn.',
          '4. Bel de zeehondenopvang: 0519 – 123 456 (dag en nacht bereikbaar).',
          'Een zeehond op het strand is niet altijd in nood. Vaak rust hij alleen maar uit. Onze medewerkers beoordelen of hij hulp nodig heeft.'
        ],
        vragen: [
          { vaardigheid: 'Bedoeling', vraag: 'Waarom staat onderaan de poster: "Vaak rust hij alleen maar uit"?', opties: ['Om te zeggen dat je nooit hoeft te bellen', 'Om uit te leggen dat zeehonden lui zijn', 'Om mensen gerust te stellen, zodat ze niet zelf iets gaan doen met de zeehond', 'Om reclame te maken voor de opvang'], goed: 2, uitleg: 'Vraag je af wat die zin met de lezer moet doen. Wie een eenzame zeehond ziet, schrikt en wil helpen. Deze zin zegt: rustig maar, vaak is er niets aan de hand. De poster vraagt wel om te bellen, dus het eerste antwoord klopt niet.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat moet je volgens de poster niet doen?', opties: ['De zeehondenopvang bellen', 'Je hond aan de lijn houden', 'De zeehond een bakje water geven', 'Minstens 30 meter afstand houden'], goed: 2, uitleg: 'Let op het woord "niet" in de vraag: drie antwoorden zijn dingen die je juist wél moet doen. Bij stap 2 staat: "geef hem geen eten of water". Een bakje water is dus precies wat je moet laten.' }
        ]
      }
    ]
  },
  // Dag 78: Een middag in het museum
  {
    hardop: {
      titel: 'Een middag in het museum', soort: 'Verhalend', emoji: '🖼️',
      alineas: [
        'Lotte zuchtte zo hard dat de suppoost opkeek. Ze liepen al drie kwartier door het museum, en juf Ans had bij elk schilderij iets te vertellen. Over kleuren, over licht, over schilders met lastige namen. Lotte had pijn in haar voeten en haar maag rammelde. "Nog één zaal," beloofde de juf. Lotte geloofde er niets van.',
        'In die laatste zaal hing een schilderij vol mensen op het ijs. Op het eerste gezicht was het een rommeltje: schaatsers, sleeën, een paard, een hond die achter een bal aan rende. Lotte wilde alweer doorlopen, maar toen viel haar oog op iets kleins, helemaal links onderaan. Een jongen lag languit op het ijs, zijn muts een eindje verderop, en een meisje in een rode jas stond dubbel van het lachen.',
        '"Juf, kijk!" riep Lotte, harder dan de bedoeling was. Ze wees naar het tafereeltje. Juf Ans boog zich voorover en glimlachte. "Goed gezien. De schilder heeft overal van die kleine grapjes verstopt. Wie vindt er nog meer?" Binnen een minuut stond de hele klas met de neus vlak bij het doek, tot de suppoost kuchte en iedereen een stap achteruit deed.',
        'Ze vonden een man die door een wak was gezakt, een kind dat stiekem een appel uit een kraam pakte en een vogel op het hoofd van een sneeuwpop. Toen de bus om half vier vertrok, zat Lotte met haar voorhoofd tegen het raam. Haar voeten deden nog steeds pijn, maar daar dacht ze niet meer aan. Ze vroeg zich af langs hoeveel schilderijen ze altijd te snel was gelopen.'
      ],
      vragen: [
        { vaardigheid: 'Personage', vraag: 'Hoe voelt Lotte zich in alinea 1?', opties: ['Zenuwachtig', 'Trots', 'Moe en verveeld', 'Verdrietig'], goed: 2, uitleg: 'Zoek naar aanwijzingen: ze zucht hard, heeft pijn in haar voeten, haar maag rammelt en ze gelooft de juf niet. Dat zijn allemaal tekens dat ze moe is en er geen zin meer in heeft.' },
        { vaardigheid: 'Woordbetekenis', vraag: 'Wat is een "suppoost"? Gebruik de aanwijzingen in het verhaal.', opties: ['Een schilder die in het museum werkt', 'Een medewerker die in de zalen op de bezoekers en de kunst let', 'Een leerling uit de klas van Lotte', 'De chauffeur van de bus'], goed: 1, uitleg: 'Het woord komt twee keer voor. De suppoost kijkt op als Lotte hard zucht, en hij kucht als de kinderen te dicht bij het schilderij staan, waarna iedereen achteruitgaat. Hij let dus op in de zaal: een suppoost is een zaalwachter in een museum.' },
        { vaardigheid: 'Samenvatten', vraag: 'Wat ontdekt Lotte als eerste op het schilderij?', opties: ['Een man die door een wak is gezakt', 'Een vogel op het hoofd van een sneeuwpop', 'Een kind dat een appel pakt', 'Een jongen die languit op het ijs ligt'], goed: 3, uitleg: 'Let op de volgorde in het verhaal. Lotte ziet in alinea 2 de jongen die languit op het ijs ligt. De andere grapjes vindt de klas pas later, samen, in alinea 4.' },
        { vaardigheid: 'Bedoeling', vraag: 'Wat laat de zin "Lotte geloofde er niets van" zien?', opties: ['Dat Lotte verwacht dat er na deze zaal nog meer zalen komen', 'Dat Lotte denkt dat de juf liegt over het schilderij', 'Dat Lotte niet weet wat een zaal is', 'Dat Lotte de juf niet goed kon verstaan'], goed: 0, uitleg: 'Kijk naar de zin ervoor: de juf belooft "Nog één zaal". Lotte gelooft dat niet: ze denkt dat er nog veel meer komt. Het schilderij heeft ze op dat moment nog niet eens gezien. Zo laat de schrijver zien hoe weinig zin Lotte nog heeft.' },
        { vaardigheid: 'Ontwikkeling', vraag: 'Hoe verandert Lotte in dit verhaal?', opties: ['Ze gaat van vrolijk naar moe', 'Ze gaat van verveeld naar nieuwsgierig', 'Ze wordt steeds bozer op de suppoost', 'Ze verandert niet: ze vindt musea aan het eind nog steeds saai'], goed: 1, uitleg: 'Vergelijk het begin met het eind. Eerst zucht ze en wil ze doorlopen. Aan het eind vraagt ze zich af langs hoeveel schilderijen ze te snel is gelopen. Ze is dus nieuwsgierig geworden naar wat er op schilderijen te ontdekken is.' },
        { vaardigheid: 'Verband', vraag: 'Waarom denkt Lotte aan het eind niet meer aan haar pijnlijke voeten?', opties: ['Omdat ze in de bus zit en eindelijk kan uitrusten', 'Omdat de juf haar een pleister heeft gegeven', 'Omdat haar voeten eigenlijk geen pijn meer doen', 'Omdat ze vol is van wat ze op het schilderij heeft ontdekt'], goed: 3, uitleg: 'Hier moet je een verband leggen dat niet letterlijk in de tekst staat. Er staat: "Haar voeten deden nog steeds pijn", dus de pijn is niet over, ook niet door het zitten in de bus. Wel zijn haar gedachten bij de schilderijen, zoals de laatste zin laat zien. Haar ontdekking is dus de reden dat ze de pijn vergeet.' }
      ]
    },
    kort: [
      {
        titel: 'Speurtochten in het museum', soort: 'Rooster',
        tekst: [
          'Museum Het Gulden Doek – speurtochten voor kinderen',
          'Speurtocht | Leeftijd | Duur | Start',
          'Zoek de hond! | 6–9 jaar | 45 min. | 11.00 en 14.00 uur',
          'Geheimen op het ijs | 9–12 jaar | 60 min. | 11.30 uur',
          'Detective in de schilderzaal | 10–14 jaar | 75 min. | 13.30 uur',
          'Meedoen is gratis met een geldig toegangskaartje. Vol is vol: haal je startkaart op bij de kassa.'
        ],
        vragen: [
          { vaardigheid: 'Schema lezen', vraag: 'Thijs is 11 jaar en wil een speurtocht doen. Hij moet om 14.30 uur het museum uit. Welke speurtocht kan hij doen?', opties: ['Alleen Geheimen op het ijs', 'Alleen Detective in de schilderzaal', 'Geheimen op het ijs en Detective in de schilderzaal', 'Zoek de hond! en Geheimen op het ijs'], goed: 0, uitleg: 'Je moet hier twee kolommen tegelijk gebruiken. Leeftijd: "Zoek de hond!" is tot 9 jaar, dus die valt af. Tijd: "Detective" begint om 13.30 uur en duurt 75 minuten, dus is pas om 14.45 uur klaar. Alleen "Geheimen op het ijs" (11.30–12.30 uur) past.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat heb je nodig om gratis mee te doen aan een speurtocht?', opties: ['Een museumkaart van school', 'Een geldig toegangskaartje', 'Een eigen vergrootglas', 'Niets, de speurtochten zijn voor iedereen gratis'], goed: 1, uitleg: 'Lees de laatste regel precies: "Meedoen is gratis met een geldig toegangskaartje." Het is dus niet zomaar gratis: je moet wel een kaartje voor het museum hebben.' }
        ]
      },
      {
        titel: 'Huisregels', soort: 'Informatiebord',
        tekst: [
          'Welkom! Help je mee de kunst te beschermen?',
          '– Blijf minstens een halve meter van de schilderijen.',
          '– Fotograferen mag, maar zonder flitser.',
          '– Eten en drinken alleen in het museumcafé.',
          '– Grote tassen en rugzakken gaan in een kluisje. Je hebt een muntje van € 1 nodig, dat je terugkrijgt.'
        ],
        vragen: [
          { vaardigheid: 'Eigen kennis', vraag: 'Waarom mag je in het museum wel fotograferen, maar niet met flitser?', opties: ['Omdat de flitser van een telefoon snel kapotgaat', 'Omdat foto\'s met flits in een museum altijd mislukken', 'Omdat het museum zijn eigen foto\'s wil verkopen', 'Omdat fel licht oude schilderijen kan beschadigen en andere bezoekers stoort'], goed: 3, uitleg: 'De reden staat niet op het bord. Gebruik wat je al weet en de kop: "Help je mee de kunst te beschermen?" Fel licht kan oude verf aantasten, en een flits in een stille zaal is vervelend voor andere bezoekers.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat kost een kluisje je uiteindelijk?', opties: ['Niets, want je krijgt je muntje terug', '€ 1', '€ 2', 'Dat staat er niet'], goed: 0, uitleg: 'Lees de hele zin, niet alleen het bedrag. Je hebt een muntje van € 1 nodig, "dat je terugkrijgt". Je betaalt dus uiteindelijk niets.' }
        ]
      }
    ]
  },
  // Dag 79: Hoe kies je een middelbare school?
  {
    hardop: {
      titel: 'Hoe kies je een middelbare school?', soort: 'Informatief', emoji: '🏫',
      alineas: [
        'In groep 8 komt er een grote keuze op je af: naar welke middelbare school ga je straks? Gelukkig hoef je daar niet in je eentje over te beslissen. Je ouders, je leerkracht en je eigen gevoel spelen allemaal een rol. Toch helpt het als je weet waar je op kunt letten.',
        'Het belangrijkste is het schooladvies. Je leerkracht kijkt daarvoor naar je resultaten van de afgelopen jaren, maar ook naar hoe je werkt: kun je je goed concentreren, plan je je huiswerk, zet je door als iets lastig is? Het advies vertelt welk niveau bij je past, bijvoorbeeld vmbo, havo of vwo. Pas als je dat weet, kun je kijken welke scholen dat niveau aanbieden.',
        'Daarna wordt het pas echt interessant, want scholen verschillen sterk van elkaar. Op de ene school werk je veel met een laptop, op de andere juist met boeken. Sommige scholen hebben een sportklas, een technasium of extra aandacht voor kunst en muziek. Ook de grootte maakt uit: op een school met tweeduizend leerlingen voelt een eerste schooldag heel anders dan op een school met vierhonderd.',
        'De beste manier om te ontdekken wat bij je past, is gaan kijken. Bijna alle scholen houden in januari en februari open dagen. Je kunt dan proeflessen volgen en vragen stellen aan leerlingen die er al op zitten. Let niet alleen op het mooie gebouw, maar vooral op de sfeer. Voel je je er welkom? Ook de afstand telt mee: een uur fietsen in de regen is na een paar weken geen pretje meer.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Waar kijkt de leerkracht volgens alinea 2 naar als hij een schooladvies geeft?', opties: ['Naar je resultaten en naar hoe je werkt', 'Alleen naar je cijfers van groep 8', 'Naar de school die je ouders het liefst willen', 'Naar de afstand van je huis tot de school'], goed: 0, uitleg: 'Lees de zin met "daarvoor" precies: de leerkracht kijkt naar "je resultaten van de afgelopen jaren, maar ook naar hoe je werkt". Het gaat dus om twee dingen, en niet alleen om groep 8.' },
        { vaardigheid: 'Volgorde', vraag: 'In welke volgorde pak je je schoolkeuze volgens de tekst het best aan?', opties: ['Eerst open dagen bezoeken, daarna je schooladvies krijgen', 'Eerst een sportklas kiezen, daarna je niveau bepalen', 'Eerst je schooladvies, dan kijken welke scholen dat niveau hebben, dan gaan kijken op open dagen', 'Eerst vragen waar je vrienden heen gaan, daarna je schooladvies'], goed: 2, uitleg: 'Signaalwoorden helpen je de volgorde te vinden. "Het belangrijkste" en "Pas als je dat weet" (alinea 2) laten zien dat het advies eerst komt. Alinea 3 begint met "Daarna", en in alinea 4 ga je echt kijken.' },
        { vaardigheid: 'Woordbetekenis', vraag: '"Een uur fietsen in de regen is na een paar weken geen pretje meer." Wat betekent "geen pretje"?', opties: ['Niet leuk', 'Niet gezond', 'Niet toegestaan', 'Niet snel'], goed: 0, uitleg: 'Een pret is iets leuks, iets waar je plezier aan hebt. "Geen pretje" betekent dus: helemaal niet leuk. Stel je voor: elke dag een uur fietsen in de regen. Dat wordt vervelend.' },
        { vaardigheid: 'Inleiding', vraag: 'Welke functie heeft alinea 1?', opties: ['Hij geeft een overzicht van alle middelbare scholen', 'Hij geeft het belangrijkste advies van de tekst', 'Hij vertelt een persoonlijk verhaal van de schrijver', 'Hij leidt het onderwerp in en stelt de lezer gerust dat hij niet alleen hoeft te kiezen'], goed: 3, uitleg: 'Een inleiding noemt het onderwerp en maakt je klaar om verder te lezen. Hier staat de vraag waar het om gaat ("naar welke middelbare school ga je straks?") en een geruststelling ("Gelukkig hoef je daar niet in je eentje over te beslissen"). Het belangrijkste advies komt pas in alinea 2.' },
        { vaardigheid: 'Tekstdoel', vraag: 'Waarom heeft de schrijver deze tekst vooral geschreven?', opties: ['De lezer overhalen om naar de havo te gaan', 'Uitleggen hoe het onderwijs in Nederland is ontstaan', 'Kinderen in groep 8 helpen om een goede schoolkeuze te maken', 'Ouders overtuigen dat kinderen helemaal zelf moeten kiezen'], goed: 2, uitleg: 'Vraag je af: voor wie is de tekst geschreven en wat moet die lezer ermee? De schrijver spreekt jou aan ("je") en geeft tips: let op het advies, de soort school, de sfeer en de afstand. De tekst wil je dus helpen bij je keuze.' },
        { vaardigheid: 'Feit of mening', vraag: 'Welke zin uit de tekst is een mening en geen feit?', opties: ['Bijna alle scholen houden in januari en februari open dagen.', 'Sommige scholen hebben een sportklas.', 'Op de ene school werk je veel met een laptop.', 'Daarna wordt het pas echt interessant.'], goed: 3, uitleg: 'Een feit kun je nagaan, bijvoorbeeld door scholen te bellen of op hun website te kijken. Of iets "interessant" is, vindt de schrijver; een ander kan dat anders zien. Woorden als "interessant", "mooi" of "leuk" verraden vaak een mening.' }
      ]
    },
    kort: [
      {
        titel: 'Open dagen', soort: 'Tabel',
        tekst: [
          'Open dagen middelbare scholen in Rivierstad',
          'School | Niveaus | Open dag | Proeflessen',
          'Het Baken | vmbo, havo | za 16 jan., 10.00–13.00 uur | ja, aanmelden via de website',
          'Erasmus College | havo, vwo | wo 20 jan., 14.00–17.00 uur | nee',
          'De Brug | vmbo | do 21 jan., 18.30–20.30 uur | ja, gewoon binnenlopen',
          'Lyceum Westwal | vwo, ook tweetalig | za 30 jan., 10.00–14.00 uur | ja, aanmelden via de website'
        ],
        vragen: [
          { vaardigheid: 'Schema lezen', vraag: 'Mira heeft een havo-advies en wil op een open dag ook een proefles volgen. Welke school past daarbij?', opties: ['Erasmus College', 'Het Baken', 'De Brug', 'Lyceum Westwal'], goed: 1, uitleg: 'Gebruik twee kolommen tegelijk. Havo hebben Het Baken en het Erasmus College. Proeflessen zijn er wel bij Het Baken, maar niet bij het Erasmus College. Alleen Het Baken past dus bij allebei de wensen.' },
          { vaardigheid: 'Schema lezen', vraag: 'Bij welke school kun je zonder aanmelden een proefles volgen?', opties: ['Het Baken', 'Lyceum Westwal', 'Erasmus College', 'De Brug'], goed: 3, uitleg: 'Kijk alleen in de laatste kolom. Bij twee scholen moet je je aanmelden via de website, bij het Erasmus College zijn geen proeflessen. Bij De Brug staat: "gewoon binnenlopen".' }
        ]
      },
      {
        titel: 'Mail van Mira', soort: 'Mail',
        tekst: [
          'Hoi tante Saskia,',
          'Zaterdag ben ik naar de open dag van Het Baken geweest. Ik had een proefles scheikunde: we maakten slijm en het mijne werd groen! De leerlingen waren aardig, maar het gebouw is wel enorm. Ik raakte twee keer de weg kwijt. Mijn juf zegt dat ik met mijn havo-advies goed op Het Baken pas.',
          'Donderdag ga ik nog bij De Brug kijken, omdat mijn vriendin Amy daarheen gaat. Ik ga haar echt missen als we niet op dezelfde school zitten.',
          'Liefs, Mira'
        ],
        vragen: [
          { vaardigheid: 'Teksten vergelijken', vraag: 'Mira gaat donderdag bij De Brug kijken, omdat Amy daarheen gaat. Wat ontdek je als je de mail naast de tabel met open dagen legt?', opties: ['De open dag van De Brug is al geweest', 'Bij De Brug moet Mira zich eerst aanmelden voor een proefles', 'De Brug heeft geen havo, dus Mira en Amy komen waarschijnlijk niet op dezelfde school', 'De Brug heeft precies dezelfde niveaus als Het Baken'], goed: 2, uitleg: 'Hier combineer je twee teksten. In de mail staat dat Mira een havo-advies heeft. In de tabel zie je dat De Brug alleen vmbo heeft. Dan kun je concluderen dat Mira daar niet heen gaat. De open dag van De Brug is op donderdag 21 januari, dus die komt nog.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat vond Mira minder fijn aan Het Baken?', opties: ['De proefles scheikunde', 'De leerlingen', 'Het grote gebouw', 'Het groene slijm'], goed: 2, uitleg: 'Let op het signaalwoord "maar": "De leerlingen waren aardig, maar het gebouw is wel enorm." Na "maar" komt vaak het minder fijne. Ze raakte er zelfs twee keer de weg kwijt.' }
        ]
      }
    ]
  },
  // Dag 80: Een week zonder scherm
  {
    hardop: {
      titel: 'Een week zonder scherm', soort: 'Betoog', emoji: '📵',
      alineas: [
        'Hoeveel uur per dag kijk jij op een scherm? Tel je de telefoon, de tablet, de laptop en de televisie bij elkaar op, dan kom je al snel op vier of vijf uur. Veel kinderen hebben dat zelf niet eens meer in de gaten. Daarom vind ik dat elke basisschool één keer per jaar een week zonder scherm zou moeten organiseren, voor de leerlingen én hun ouders.',
        'Mijn eerste argument is dat je dan beter slaapt. Het felle licht van een scherm houdt je hersenen wakker, en wie tot laat filmpjes kijkt, ligt daarna nog lang te woelen. Uit onderzoek blijkt dat kinderen die een uur voor het slapengaan hun telefoon wegleggen, sneller in slaap vallen. En wie uitgerust is, kan zich op school ook beter concentreren.',
        'Daarnaast ontdek je in zo\'n week wat je allemaal kunt doen zonder telefoon in je hand. Ineens is er tijd om te tekenen, buiten te voetballen of dat dikke boek uit te lezen dat al maanden op je nachtkastje ligt. Bovendien praat je weer echt met elkaar, zonder dat iemand ondertussen naar een scherm zit te staren.',
        'Natuurlijk zullen sommige mensen zeggen dat je een scherm nodig hebt voor je huiswerk of om met vrienden af te spreken. Dat klopt, maar een week is kort. Huiswerk kan ook met pen en papier, en afspreken kan ook gewoon bij de voordeur. Wie het een week heeft volgehouden, weet daarna in elk geval beter wanneer hij een scherm echt nodig heeft, en wanneer niet.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Op hoeveel uur schermtijd per dag kom je volgens de schrijver al snel?', opties: ['Vier of vijf uur', 'Een of twee uur', 'Acht uur', 'Dat staat niet in de tekst'], goed: 0, uitleg: 'Zoek een getal in alinea 1. Daar staat: "dan kom je al snel op vier of vijf uur". Als een vraag over een aantal gaat, zoek je gericht naar cijfers of getallen in de tekst.' },
        { vaardigheid: 'Woordbetekenis', vraag: '"Wie tot laat filmpjes kijkt, ligt daarna nog lang te woelen." Wat betekent "woelen"?', opties: ['Onrustig heen en weer draaien in bed', 'Hard snurken', 'Dromen over filmpjes', 'Zachtjes in jezelf praten'], goed: 0, uitleg: 'De zin gaat over iemand die niet kan slapen: het scherm "houdt je hersenen wakker". Wie wakker in bed ligt, draait zich steeds om. Dat is woelen. De volgende zin ("sneller in slaap vallen") bevestigt dat het om slecht slapen gaat.' },
        { vaardigheid: 'Signaalwoord', vraag: 'Welk woord uit alinea 3 laat zien dat de schrijver een nieuw argument toevoegt?', opties: ['Ineens', 'Ondertussen', 'Daarnaast', 'Weer'], goed: 2, uitleg: '"Daarnaast" is een signaalwoord van opsomming: er komt nog iets bij. Na het eerste argument (beter slapen) volgt het tweede. "Ineens" en "ondertussen" gaan over tijd, en "weer" betekent hier "opnieuw".' },
        { vaardigheid: 'Alinea', vraag: 'Alinea 4 begint met: "Natuurlijk zullen sommige mensen zeggen ...". Wat doet de schrijver in deze alinea?', opties: ['Hij geeft nog een argument voor zijn standpunt', 'Hij noemt een tegenargument en laat zien waarom dat volgens hem niet opgaat', 'Hij vat de hele tekst samen', 'Hij verandert van mening'], goed: 1, uitleg: 'In een betoog komt vaak een tegenargument: wat zouden anderen ertegenin brengen? Hier is dat: je hebt een scherm nodig voor huiswerk en afspraken. Met "Dat klopt, maar een week is kort" weerlegt de schrijver dat. Zijn mening blijft hetzelfde.' },
        { vaardigheid: 'Bedoeling', vraag: 'In alinea 2 schrijft de schrijver: "Uit onderzoek blijkt dat ...". Waarom noemt hij dat onderzoek?', opties: ['Om te laten zien dat hij zelf onderzoeker is', 'Om de lezer te waarschuwen voor telefoons in de klas', 'Om een tegenargument te geven', 'Om zijn argument sterker en geloofwaardiger te maken'], goed: 3, uitleg: 'Een schrijver die je wil overtuigen, zoekt steun voor zijn argumenten. Als hij zegt dat onderzoek het bevestigt, is het niet meer alleen zijn eigen idee. Daardoor wordt zijn argument over slaap overtuigender.' },
        { vaardigheid: 'Standpunt', vraag: 'Welke zin geeft het standpunt van de schrijver weer?', opties: ['Elke basisschool zou één keer per jaar een week zonder scherm moeten organiseren.', 'Kinderen kijken veel te lang naar een scherm.', 'Wie uitgerust is, kan zich beter concentreren.', 'Huiswerk kan ook met pen en papier.'], goed: 0, uitleg: 'Het standpunt is de mening die de schrijver met de hele tekst wil verdedigen. Je herkent het vaak aan "Daarom vind ik dat ...". De andere zinnen zijn argumenten of uitleg die het standpunt moeten ondersteunen.' }
      ]
    },
    kort: [
      {
        titel: 'Schermvrije week op De Wilgen', soort: 'Programma',
        tekst: [
          'Schermvrije week op obs De Wilgen – activiteiten na schooltijd (15.15–16.30 uur)',
          'maandag | bordspellenmiddag | aula',
          'dinsdag | voetbaltoernooi groep 6 tot en met 8 | sportveld',
          'woensdag | geen activiteit (vrije middag)',
          'donderdag | een stripverhaal tekenen met een echte tekenaar | lokaal 8, maximaal 20 kinderen',
          'vrijdag | levend stratego: ouders tegen kinderen | schoolplein',
          'Opgeven voor donderdag kan tot en met dinsdag bij meester Rik.'
        ],
        vragen: [
          { vaardigheid: 'Schema lezen', vraag: 'Op welke dag doen de ouders mee aan de activiteit?', opties: ['Maandag', 'Dinsdag', 'Donderdag', 'Vrijdag'], goed: 3, uitleg: 'Zoek in de middelste kolom het woord "ouders". Dat staat alleen bij vrijdag: "levend stratego: ouders tegen kinderen".' },
          { vaardigheid: 'Schema lezen', vraag: 'Sem wil op donderdag meedoen en geeft zich op woensdagochtend op. Wat is er aan de hand?', opties: ['Dat kan, want opgeven kan tot donderdag', 'Hij is te laat, want opgeven kon tot en met dinsdag', 'Hij moet zich opgeven bij de tekenaar', 'Het maakt niet uit, want iedereen mag meedoen'], goed: 1, uitleg: 'Combineer de regel onder het schema met de dagen. Opgeven kan "tot en met dinsdag". Woensdag is dus te laat. Bovendien zijn er maar 20 plaatsen, dus iedereen kan ook niet zomaar meedoen.' }
        ]
      },
      {
        titel: 'Laat mijn telefoon met rust', soort: 'Mening van een lezer',
        tekst: [
          'Op onze school is er volgende week een schermvrije week. Ik snap het idee, maar ik vind het overdreven. Ik gebruik mijn telefoon niet alleen voor spelletjes. Ik oefen er Engelse woordjes mee, ik bel mijn vader die in het buitenland werkt en ik zoek er de vertrektijden van de bus mee op. Waarom zou ik daarmee stoppen? Leer kinderen liever hoe ze hun telefoon verstandig gebruiken.',
          'Yara (12), Zwolle'
        ],
        vragen: [
          { vaardigheid: 'Bedoeling van de schrijver', vraag: 'Wat wil Yara bereiken met haar brief?', opties: ['Dat haar vader vaker naar huis komt', 'Dat de school meer Engelse les geeft', 'Dat kinderen leren hun telefoon verstandig te gebruiken, in plaats van hem een week weg te leggen', 'Dat de bus vaker gaat rijden'], goed: 2, uitleg: 'De laatste zin van een mening is vaak de belangrijkste. Yara sluit af met: "Leer kinderen liever hoe ze hun telefoon verstandig gebruiken." De Engelse woordjes, haar vader en de bus zijn voorbeelden die haar mening ondersteunen.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Welke reden om haar telefoon te gebruiken noemt Yara niet?', opties: ['Engelse woordjes oefenen', 'Haar vader bellen', 'De vertrektijden van de bus opzoeken', 'Rekenhuiswerk maken'], goed: 3, uitleg: 'Let op "niet" in de vraag. Streep af wat er wel staat: Engelse woordjes, haar vader, de bus. Over rekenen of huiswerk zegt Yara niets.' }
        ]
      }
    ]
  },
  // Dag 81: Hoe een windmolen werkt
  {
    hardop: {
      titel: 'Hoe een windmolen werkt', soort: 'Informatief', emoji: '🌬️',
      alineas: [
        'Een windmolen zet de kracht van de wind om in beweging. Dat idee is eeuwenoud. Al in de middeleeuwen stonden er in Nederland molens die graan maalden tot meel. Later kwamen er molens bij die water wegpompten, hout zaagden of olie uit zaden persten. Rond 1850 draaiden er in ons land zo\'n tienduizend molens.',
        'Hoe werkt zo\'n molen? De wind duwt tegen de wieken, de vier lange armen met zeilen erop. Doordat de zeilen schuin staan, gaan de wieken draaien. Ze zitten vast aan een dikke as, die de draaiing via grote houten tandwielen naar beneden brengt. Bij een korenmolen draait daar een zware steen over een andere steen heen. Het graan dat ertussen valt, wordt fijngemalen.',
        'Een molenaar moet het weer goed in de gaten houden. Draait de wind, dan moet hij de kap met de wieken bijdraaien, zodat ze weer recht in de wind staan. Dat heet kruien. Waait het te hard, dan haalt hij de zeilen gedeeltelijk of helemaal van de wieken. Anders draait de molen veel te snel en kan hij kapotgaan. Een goede molenaar leest de lucht zoals een ander de krant leest.',
        'Tegenwoordig wekken windturbines elektriciteit op. Ze werken volgens hetzelfde principe als hun voorgangers: de wind laat de wieken draaien. Alleen drijft de as nu geen molensteen aan, maar een generator, die de beweging omzet in stroom. En het kruien gaat vanzelf: een computer draait de turbine automatisch in de wind.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Waarvoor werden windmolens vroeger niet gebruikt, volgens alinea 1?', opties: ['Graan malen', 'Water wegpompen', 'Hout zagen', 'Stroom opwekken'], goed: 3, uitleg: 'Let op "niet" en op "vroeger". In alinea 1 staan graan malen, water wegpompen, hout zagen en olie persen. Stroom opwekken komt pas in alinea 4, en daar gaat het over windturbines van "tegenwoordig".' },
        { vaardigheid: 'Woordbetekenis', vraag: 'Wat betekent "kruien" in alinea 3?', opties: ['De kap met de wieken in de wind draaien', 'De zeilen van de wieken halen', 'Het graan tussen de stenen strooien', 'De molen schoonmaken na het malen'], goed: 0, uitleg: 'Soms legt de tekst een moeilijk woord zelf uit. Kijk naar de zin vlak voor "Dat heet kruien": de molenaar draait de kap met de wieken bij, zodat ze weer recht in de wind staan. "Dat" verwijst naar die handeling.' },
        { vaardigheid: 'Beeldspraak', vraag: '"Een goede molenaar leest de lucht zoals een ander de krant leest." Wat bedoelt de schrijver?', opties: ['Molenaars lezen elke ochtend de krant', 'Molenaars schrijven het weerbericht voor de krant', 'Een goede molenaar ziet aan de lucht hoe het weer zich ontwikkelt', 'In de lucht staan letters die de molenaar kan lezen'], goed: 2, uitleg: 'Dit is een vergelijking: "zoals". Zoals jij in de krant leest wat er gebeurt, zo ziet de molenaar aan de wolken en de wind wat het weer gaat doen. Dat past bij de eerste zin van de alinea: hij moet het weer goed in de gaten houden.' },
        { vaardigheid: 'Volgorde', vraag: 'Welke volgorde klopt bij een korenmolen?', opties: ['wind – wieken – as – tandwielen – molensteen', 'wind – tandwielen – wieken – molensteen – as', 'wieken – wind – molensteen – as – tandwielen', 'wind – as – wieken – molensteen – tandwielen'], goed: 0, uitleg: 'Volg de beweging door alinea 2 heen, zin voor zin: de wind duwt tegen de wieken, de wieken zitten vast aan de as, de as brengt de draaiing via tandwielen naar beneden, en daar draait de molensteen. Bij zo\'n vraag helpt het om met je vinger mee te lezen.' },
        { vaardigheid: 'Alinea', vraag: 'Wat doet alinea 4 ten opzichte van de rest van de tekst?', opties: ['Hij geeft een mening over windturbines', 'Hij herhaalt alinea 2 met andere woorden', 'Hij vertelt hoe de eerste molens zijn ontstaan', 'Hij vergelijkt de oude molen met de moderne windturbine'], goed: 3, uitleg: 'Let op woorden als "hetzelfde principe", "hun voorgangers" en "Alleen ... nu". Daarmee zet de schrijver het oude en het nieuwe naast elkaar: wat is hetzelfde en wat is anders? Dat is een vergelijking.' },
        { vaardigheid: 'Verband', vraag: 'Wat zou er gebeuren als een windturbine niet automatisch in de wind gedraaid werd terwijl de wind van richting verandert?', opties: ['Hij zou juist sneller gaan draaien', 'Hij zou minder of geen stroom opwekken, omdat de wieken niet meer goed in de wind staan', 'Hij zou meel gaan malen', 'Er zou niets veranderen'], goed: 1, uitleg: 'Dit staat niet letterlijk in de tekst; je moet oorzaak en gevolg combineren. Alinea 3 legt uit waarom een molenaar kruit: de wieken moeten recht in de wind staan om goed te draaien. Bij een turbine is dat net zo. Minder draaien betekent minder stroom.' }
      ]
    },
    kort: [
      {
        titel: 'Korenmolen De Hoop', soort: 'Informatiebord',
        tekst: [
          'Korenmolen De Hoop – welkom!',
          'Open: woensdag en zaterdag van 10.00 tot 16.00 uur, maar alleen als de molenaar er is. Je ziet dat aan de blauwe vlag.',
          'De molen draait als er genoeg wind is. Bij storm staan de wieken stil.',
          'Toegang gratis. Een gift voor het onderhoud wordt gewaardeerd.',
          'In het molenwinkeltje: vers gemalen meel, € 2,40 per kilo.',
          'Let op: de trappen zijn steil. Kinderen tot 12 jaar alleen onder begeleiding.'
        ],
        vragen: [
          { vaardigheid: 'Bedoeling', vraag: '"Een gift voor het onderhoud wordt gewaardeerd." Wat bedoelt de molen hiermee?', opties: ['Je mag vrijwillig wat geld geven om de molen in goede staat te houden', 'Je moet toch entree betalen', 'Je krijgt een cadeautje als je helpt met het onderhoud', 'Je moet zelf meehelpen met het onderhoud'], goed: 0, uitleg: 'Lees de zin ervoor: "Toegang gratis." Je hoeft dus niets te betalen. Een gift is iets wat je geeft zonder dat het moet, en "wordt gewaardeerd" betekent: we vinden het fijn als je het doet. Het is dus een beleefd verzoek.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Hoe weet je of de molen open is?', opties: ['Als de wieken draaien', 'Als de blauwe vlag uithangt', 'Als het niet stormt', 'Als het molenwinkeltje open is'], goed: 1, uitleg: 'De molen is open "alleen als de molenaar er is", en dat zie je "aan de blauwe vlag". Draaiende wieken zeggen iets over de wind, niet over de openingstijden.' }
        ]
      },
      {
        titel: 'Stroom uit één windturbine', soort: 'Tabel',
        tekst: [
          'Hoeveel huishoudens kan één windturbine per jaar van stroom voorzien?',
          'Soort turbine | Hoogte van de as | Lengte van één wiek | Aantal huishoudens',
          'kleine turbine (bij een boerderij) | 30 m | 10 m | 50',
          'turbine op land | 100 m | 60 m | 2500',
          'turbine op zee | 150 m | 110 m | 12.000',
          'Op zee waait het harder en vaker dan op land.'
        ],
        vragen: [
          { vaardigheid: 'Schema lezen', vraag: 'Hoeveel turbines op land heb je ongeveer nodig om evenveel huishoudens van stroom te voorzien als één turbine op zee?', opties: ['Ongeveer 2', 'Bijna 5', 'Ongeveer 12', 'Ongeveer 50'], goed: 1, uitleg: 'Zoek de twee getallen in de laatste kolom: 2500 en 12.000. Vijf turbines op land geven 5 × 2500 = 12.500 huishoudens. Dat is iets meer dan 12.000, dus je hebt er bijna vijf nodig.' },
          { vaardigheid: 'Schema en tekst', vraag: 'Waarom kan een turbine op zee volgens de tekst zoveel meer huishoudens van stroom voorzien dan een turbine op land?', opties: ['Omdat zeewater extra stroom geeft', 'Omdat er op zee meer mensen wonen', 'Omdat hij groter is en het op zee harder en vaker waait', 'Omdat hij langzamer draait en daardoor langer meegaat'], goed: 2, uitleg: 'Combineer de tabel met de zin eronder. In de tabel zie je dat de turbine op zee hoger is en langere wieken heeft. De zin eronder voegt toe dat het op zee harder en vaker waait. Samen verklaren die twee dingen het verschil.' }
        ]
      }
    ]
  },
  // Dag 82: Het vriendschapsbandje
  {
    hardop: {
      titel: 'Het vriendschapsbandje', soort: 'Verhalend', emoji: '🧶',
      alineas: [
        'Het bandje om Nora\'s pols was ooit felroze geweest. Nu was het vaal, bijna grijs, en de knoopjes waren pluizig van het vele wassen. Ze hadden het in groep 5 geknoopt, op de zolder van Fatima, terwijl het buiten stortregende. Twee bandjes, precies hetzelfde. "Voor altijd," had Fatima gezegd. Ze waren toen negen.',
        'Sinds de zomer zat Fatima in de pauze steeds bij Jade, het nieuwe meisje met de glitterpennen en de verhalen over Spanje. Nora stond er een beetje bij, als een paraplu die niemand meer nodig heeft omdat de zon schijnt. Vandaag zag ze dat Jade en Fatima allebei een nieuw bandje droegen: blauw met wit, splinternieuw.',
        'Na school wachtte Nora haar op bij het fietsenhok. "Leuke bandjes," zei ze. Haar stem klonk scherper dan ze wilde. Fatima keek verbaasd op. "Jade heeft ze gemaakt. Ze wil gewoon ergens bij horen, ze kent hier nog niemand." "En ik dan?" vroeg Nora. Het was eruit voordat ze het wist. Fatima zei niets, maakte haar fiets los en reed weg.',
        'Die avond lag Nora op haar bed naar het plafond te staren. Haar telefoon trilde. Een foto van Fatima: haar pols, met het nieuwe blauwe bandje. En daarnaast, half verstopt onder haar mouw, een vaal roze bandje met pluizige knoopjes. Eronder stond maar één woord: "Altijd." Nora lachte en huilde tegelijk. Morgen, besloot ze, ging ze in de pauze naast Jade zitten.'
      ],
      vragen: [
        { vaardigheid: 'Tijd in het verhaal', vraag: 'Een deel van alinea 1 speelt zich af in het verleden. Hoe oud waren de meisjes toen ze de bandjes maakten?', opties: ['Zes', 'Negen', 'Elf', 'Twaalf'], goed: 1, uitleg: 'In alinea 1 springt het verhaal terug in de tijd: "in groep 5", "had Fatima gezegd". De laatste zin geeft het antwoord: "Ze waren toen negen." Het woordje "toen" laat zien dat het over vroeger gaat.' },
        { vaardigheid: 'Personage', vraag: 'Hoe voelt Nora zich in alinea 2?', opties: ['Opgelucht, omdat ze even alleen kan zijn', 'Vrolijk, omdat de zon schijnt', 'Buitengesloten en overbodig', 'Boos op Jade, omdat die uit Spanje komt'], goed: 2, uitleg: 'Nora "stond er een beetje bij": ze hoort er niet echt bij. De vergelijking met een paraplu die niemand meer nodig heeft, laat zien dat ze zich overbodig voelt. Over de zon gaat het alleen in die vergelijking, niet in het echt.' },
        { vaardigheid: 'Beeldspraak', vraag: '"Nora stond er een beetje bij, als een paraplu die niemand meer nodig heeft omdat de zon schijnt." Wat bedoelt de schrijver?', opties: ['Nora voelt zich overbodig nu Fatima een nieuwe vriendin heeft', 'Nora had haar paraplu vergeten', 'Het was mooi weer in de pauze', 'Nora gaat liever niet naar buiten als het regent'], goed: 0, uitleg: 'Dit is een vergelijking ("als een paraplu"). Een paraplu is fijn als het regent, maar als de zon schijnt, laat iedereen hem staan. Zo voelt Nora zich: vroeger had Fatima haar nodig, nu Jade er is niet meer.' },
        { vaardigheid: 'Personage', vraag: '"Haar stem klonk scherper dan ze wilde." Wat zegt dit over Nora?', opties: ['Ze vindt de nieuwe bandjes echt mooi', 'Ze heeft keelpijn van de kou', 'Ze wil ruzie maken met Jade', 'Ze is gekwetst, en dat hoor je aan haar stem, ook al wil ze dat niet laten merken'], goed: 3, uitleg: '"Leuke bandjes" klinkt als een compliment, maar Nora zegt het scherp. Er zit dus iets anders achter: ze is gekwetst. "Dan ze wilde" laat zien dat ze dat eigenlijk niet wilde laten merken. Let bij personages op het verschil tussen wat ze zeggen en hoe ze het zeggen.' },
        { vaardigheid: 'Ontwikkeling', vraag: 'Welk besluit neemt Nora aan het eind, en wat laat dat zien?', opties: ['Ze praat niet meer met Fatima: ze is nog steeds boos', 'Ze maakt een nieuw bandje: ze wil Fatima jaloers maken', 'Ze gaat naast Jade zitten: ze ziet Jade niet meer als een bedreiging en wil haar erbij laten horen', 'Ze gaat in de pauze alleen zitten: ze wil niemand meer zien'], goed: 2, uitleg: 'Het besluit staat in de laatste zin: "Morgen ... ging ze in de pauze naast Jade zitten." Eerder was Nora jaloers op Jade. Nu ze weet dat Fatima hun vriendschap niet vergeten is, kan ze Jade een plekje gunnen. Dat is de verandering in het verhaal.' },
        { vaardigheid: 'Symbool', vraag: 'Wat betekent het oude roze bandje om Fatima\'s pols aan het eind van het verhaal?', opties: ['Dat Fatima vergeten is het af te doen', 'Dat de vriendschap met Nora voor Fatima nog steeds belangrijk is', 'Dat Fatima het nieuwe bandje eigenlijk niet mooi vindt', 'Dat Jade ook een roze bandje heeft gekregen'], goed: 1, uitleg: 'Het bandje is meer dan een bandje: het staat voor de vriendschap ("Voor altijd"). Fatima stuurt bewust een foto van allebei de bandjes, met het woord "Altijd." Daarmee zegt ze zonder veel woorden: een nieuwe vriendin betekent niet dat jij er niet meer toe doet.' }
      ]
    },
    kort: [
      {
        titel: 'Zo knoop je een vriendschapsbandje', soort: 'Instructie',
        tekst: [
          'Je hebt nodig: 3 draden borduurgaren van 60 cm, plakband en een schaar.',
          '1. Leg de draden naast elkaar en maak bovenaan een knoop. Laat boven de knoop 5 cm over.',
          '2. Plak het stuk boven de knoop met plakband vast aan de tafel.',
          '3. Vlecht de drie draden: steeds de rechterdraad over de middelste, dan de linkerdraad over de middelste.',
          '4. Is het bandje lang genoeg om je pols? Maak dan onderaan weer een knoop.',
          '5. Knip de uiteinden af tot ongeveer 5 cm. Daarmee knoop je het bandje om je pols.'
        ],
        vragen: [
          { vaardigheid: 'Instructie', vraag: 'Waarom plak je het bandje bij stap 2 vast aan de tafel?', opties: ['Zodat het bandje gaat glimmen', 'Zodat het bandje niet wegschuift terwijl je vlecht', 'Zodat je minder draad nodig hebt', 'Zodat de knoop later vanzelf losgaat'], goed: 1, uitleg: 'Bij een instructie helpt het om je voor te stellen dat je het echt doet. Je trekt bij het vlechten steeds aan de draden. Zonder plakband schuift alles mee. Het plakband houdt het begin op zijn plek.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Hoeveel draden heb je nodig?', opties: ['5', '60', '2', '3'], goed: 3, uitleg: 'Kijk bij "Je hebt nodig". Daar staat "3 draden". De getallen 60 en 5 komen ook in de tekst voor, maar dat zijn centimeters. Lees dus wat er achter het getal staat.' }
        ]
      },
      {
        titel: 'Nieuwe leerling in groep 8', soort: 'Nieuwsbrief',
        tekst: [
          'Uit de nieuwsbrief van De Wilgenhoek',
          'Na de kerstvakantie verwelkomen we een nieuwe leerling in groep 8b: Tomás. Hij komt uit Portugal en spreekt al aardig Nederlands, maar sommige woorden zijn nog nieuw voor hem. Tomás houdt van tekenen en van voetbal; in zijn oude team was hij keeper. De eerste weken krijgt hij een maatje uit de klas, dat hem de school laat zien en in de pauze met hem optrekt. Wil je ook eens maatje zijn? Vraag het dan aan meester Jeroen.'
        ],
        vragen: [
          { vaardigheid: 'Woordbetekenis', vraag: 'Het maatje "trekt in de pauze met hem op". Wat betekent "optrekken met" hier?', opties: ['Iemand omhoogtrekken als hij gevallen is', 'Met iemand op de foto gaan', 'Samen dingen doen en bij elkaar blijven', 'Een wedstrijdje doen wie het sterkst is'], goed: 2, uitleg: '"Optrekken met iemand" is een vaste uitdrukking: veel samen zijn, samen dingen doen. Het past in de zin: het maatje laat Tomás de school zien en is in de pauze bij hem. Dat hij gevallen is of een wedstrijdje doet, staat nergens.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat moet je doen als je ook maatje van Tomás wilt zijn?', opties: ['Een mail sturen naar Tomás', 'Het vragen aan meester Jeroen', 'Je opgeven bij de directeur', 'In de pauze met Tomás gaan voetballen'], goed: 1, uitleg: 'De laatste zin geeft het antwoord: "Vraag het dan aan meester Jeroen." In een nieuwsbrief staat zo\'n oproep vaak aan het eind.' }
        ]
      }
    ]
  },
  // Dag 83: Kinderen in de Gouden Eeuw
  {
    hardop: {
      titel: 'Kinderen in de Gouden Eeuw', soort: 'Informatief', emoji: '⛵',
      alineas: [
        'In de zeventiende eeuw was de Republiek der Nederlanden een van de rijkste landen ter wereld. Schepen voeren naar Azië en kwamen terug met peper, zijde en porselein. Die periode noemen we de Gouden Eeuw. Maar hoe was het eigenlijk om toen kind te zijn? Dat hing er sterk van af in welk gezin je werd geboren.',
        'Kinderen van rijke kooplieden woonden in grote grachtenpanden. Jongens gingen naar de Latijnse school, waar ze Latijn en Grieks leerden, zodat ze later konden gaan studeren. Meisjes leerden thuis lezen, schrijven, naaien en een huishouden leiden. Op schilderijen uit die tijd dragen rijke kinderen kleren die op die van volwassenen lijken, met kanten kragen en lange rokken. Ook kleine jongens droegen nog een jurk.',
        'Voor arme kinderen zag het leven er heel anders uit. Veel van hen gingen niet of maar een paar jaar naar school. Al jong moesten ze meewerken om geld te verdienen voor het gezin, bijvoorbeeld in een werkplaats, op het land of als hulpje in een rijk huishouden. Sommige jongens monsterden al op hun twaalfde aan als scheepsjongen op een schip van de VOC. Een reis naar Azië duurde maanden, en lang niet iedereen kwam terug.',
        'Toch speelden alle kinderen, arm of rijk. Op het schilderij "Kinderspelen" van Pieter Bruegel uit 1560 zijn meer dan tachtig spelletjes te zien, en veel daarvan deden kinderen in de Gouden Eeuw nog steeds: hoepelen, tollen, bikkelen en haasje-over. Een tol of een paar knikkers had je zo, en meer had je niet nodig voor een middag plezier.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Wat leerden jongens van rijke ouders op de Latijnse school?', opties: ['Latijn en Grieks', 'Naaien en een huishouden leiden', 'Zeilen en navigeren', 'Schilderen'], goed: 0, uitleg: 'Zoek in alinea 2 de naam "Latijnse school" op en lees de zin verder: "waar ze Latijn en Grieks leerden". Naaien en een huishouden leiden leerden de meisjes, en dat deden ze thuis.' },
        { vaardigheid: 'Woordbetekenis', vraag: '"Sommige jongens monsterden al op hun twaalfde aan als scheepsjongen." Wat betekent "aanmonsteren"?', opties: ['Een monster vangen op zee', 'Een schip schoonmaken', 'Van boord gaan', 'Zich laten inschrijven om op een schip te gaan werken'], goed: 3, uitleg: 'Gebruik de rest van de zin: "als scheepsjongen op een schip van de VOC". Het gaat dus over werk op een schip, en de volgende zin vertelt over de reis naar Azië. Aanmonsteren is: je aanmelden als bemanningslid. Van boord gaan heet juist "afmonsteren".' },
        { vaardigheid: 'Signaalwoord', vraag: 'Alinea 4 begint met "Toch". Welke tegenstelling bedoelt de schrijver?', opties: ['Rijke kinderen speelden wel, maar arme kinderen nooit', 'Rijke en arme kinderen hadden een heel ander leven, maar spelen deden ze allemaal', 'Kinderen speelden vroeger meer dan nu', 'Bruegel schilderde kinderen, maar geen volwassenen'], goed: 1, uitleg: '"Toch" zet iets tegenover wat ervoor kwam. Alinea 2 en 3 laten zien hoe verschillend het leven van rijke en arme kinderen was. Alinea 4 zegt: ondanks die verschillen speelden ze allemaal. Dat staat ook letterlijk in de eerste zin: "arm of rijk".' },
        { vaardigheid: 'Opbouw', vraag: 'Hoe heeft de schrijver deze tekst opgebouwd?', opties: ['Probleem – oorzaak – oplossing – slot', 'Mening – argument – tegenargument – conclusie', 'Inleiding – rijke kinderen – arme kinderen – wat alle kinderen gemeen hadden', 'Eerst arme kinderen, dan rijke kinderen, dan de geschiedenis van de VOC'], goed: 2, uitleg: 'Geef elke alinea in gedachten een kopje. Alinea 1: inleiding met de vraag hoe het was om kind te zijn. Alinea 2: rijke kinderen. Alinea 3: arme kinderen. Alinea 4: spelen, iets wat ze allemaal deden. Er is geen mening of probleem, dus de andere opbouw past niet.' },
        { vaardigheid: 'Eigen kennis', vraag: 'Het schilderij "Kinderspelen" is uit 1560. Wat weet je daardoor?', opties: ['Het is gemaakt aan het eind van de Gouden Eeuw', 'Het is gemaakt door een scheepsjongen', 'Het toont spellen die kinderen in de Gouden Eeuw niet meer kenden', 'Het is gemaakt vóór de Gouden Eeuw, die in de zeventiende eeuw was'], goed: 3, uitleg: 'Gebruik wat je weet over eeuwen: 1560 hoort bij de zestiende eeuw (de jaren 1501–1600). De Gouden Eeuw was de zeventiende eeuw. Het schilderij is dus ouder. Daarom schrijft de schrijver ook dat kinderen die spellen "nog steeds" deden.' },
        { vaardigheid: 'Hoofdgedachte', vraag: 'Wat is de hoofdgedachte van de tekst?', opties: ['In de Gouden Eeuw was Nederland een van de rijkste landen ter wereld', 'Hoe je jeugd in de Gouden Eeuw eruitzag, hing vooral af van de vraag of je ouders rijk of arm waren', 'Arme jongens werkten als scheepsjongen op schepen van de VOC', 'Kinderen in de Gouden Eeuw speelden dezelfde spellen als nu'], goed: 1, uitleg: 'De hoofdgedachte past bij de hele tekst, niet bij één alinea. De rijkdom van het land is de aanleiding, de scheepsjongens en de spellen zijn onderdelen. De zin "Dat hing er sterk van af in welk gezin je werd geboren" in de inleiding wijst de weg: de tekst laat dat verschil zien.' }
      ]
    },
    kort: [
      {
        titel: 'Doe-dag Gouden Eeuw', soort: 'Poster',
        tekst: [
          'Doe-dag in Stadsmuseum Oudhaven: leef als een kind in 1650!',
          'Zondag 24 januari, 11.00–16.00 uur',
          'Schrijf met een ganzenveer, ga hoepelen en bikkelen op de binnenplaats en proef pap uit een houten kom.',
          'Om 13.00 uur vertelt verhalenverteller Kees over Jan, een scheepsjongen die met de VOC naar Azië voer.',
          'Kom je verkleed? Dan krijg je een glas limonade cadeau!',
          'Kinderen tot 13 jaar gratis, volwassenen € 8.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat krijg je als je verkleed komt?', opties: ['Gratis toegang', 'Een ganzenveer', 'Een glas limonade', 'Een hoepel'], goed: 2, uitleg: 'Zoek het woord "verkleed": "Dan krijg je een glas limonade cadeau!" Gratis toegang heb je als kind tot 13 jaar sowieso, verkleed of niet.' },
          { vaardigheid: 'Tekstdoel', vraag: 'Wat voor tekst is dit, en wat wil de schrijver ermee?', opties: ['Een verslag van een dag die al voorbij is', 'Een instructie voor het spel bikkelen', 'Een verhaal over scheepsjongen Jan', 'Een uitnodiging die mensen wil overhalen om naar de doe-dag te komen'], goed: 3, uitleg: 'Let op de vorm: een datum die nog moet komen, tijden, prijzen, uitroeptekens en een beloning voor wie verkleed komt. Zo\'n tekst wil je overhalen om te komen. Het verhaal over Jan is maar één onderdeel van het programma.' }
        ]
      },
      {
        titel: 'Uit het dagboek van een scheepsjongen', soort: 'Verhaalfragment',
        tekst: [
          '4 maart 1652. Al drie weken zien we niets dan water. Het brood is zo hard als steen en er kruipen beestjes in. Vannacht stormde het zo dat ik dacht dat het schip in tweeën zou breken. De stuurman lachte me uit: "Dit is nog maar een briesje, jongen." Ik mis mijn moeder en de warme kachel thuis. Maar als ik terugkom, heb ik genoeg verdiend voor een nieuwe winterjas voor haar.'
        ],
        vragen: [
          { vaardigheid: 'Beeldspraak', vraag: '"Het brood is zo hard als steen." Wat voor taalgebruik is dit?', opties: ['Letterlijk: het brood is van steen gemaakt', 'Een vergelijking: het brood is heel erg hard', 'Een vraag aan de lezer', 'Een tegenstelling'], goed: 1, uitleg: '"Zo ... als" is een teken van een vergelijking. Brood kan niet echt van steen zijn. De schrijver bedoelt: het brood is zo oud en droog dat het bijna niet te eten is.' },
          { vaardigheid: 'Personage', vraag: 'Waarom houdt de scheepsjongen het vol, ook al heeft hij het zwaar?', opties: ['Hij wil later stuurman worden', 'Hij houdt van stormen', 'Hij wil geld verdienen om zijn moeder te helpen', 'Hij wil de stuurman laten zien dat hij niet bang is'], goed: 2, uitleg: 'Zoek de zin met "Maar": na alle ellende komt de reden om door te gaan. Hij wil genoeg verdienen voor een nieuwe winterjas voor zijn moeder. Dat hij haar mist, maakt die reden nog sterker.' }
        ]
      }
    ]
  },
  // Dag 84: Bedenk je eigen bordspel
  {
    hardop: {
      titel: 'Bedenk je eigen bordspel', soort: 'Instructief', emoji: '🎲',
      alineas: [
        'Ganzenbord, mens-erger-je-niet, dammen: iedereen kent wel een paar bordspellen. Maar heb je er ooit zelf een bedacht? Dat is minder moeilijk dan je denkt. Met een groot vel karton, een paar stiften en een flinke dosis fantasie maak je in één middag een spel dat helemaal van jou is.',
        'Begin met een thema. Gaat je spel over een schattenjacht op een eiland, een race door de ruimte of een ontsnapping uit een spookhuis? Een goed thema maakt een spel meteen spannender. Bedenk daarna het doel: wanneer heeft iemand gewonnen? Bijvoorbeeld als hij als eerste bij de finish is, of als hij de meeste schatten heeft verzameld.',
        'Dan de spelregels. Houd ze in het begin eenvoudig, want niemand wil een kwartier regels lezen voordat hij mag beginnen. Spreek af hoe je vooruitkomt: met een dobbelsteen, met kaartjes of door vragen te beantwoorden. Voeg daarna een paar verrassingen toe, zoals vakjes waar je een beurt overslaat of juist drie plaatsen vooruit mag. Die afwisseling tussen geluk en pech houdt het spel spannend.',
        'Het belangrijkste is misschien wel het testen. Speel je spel met familie of vrienden en let goed op. Is het te makkelijk, duurt het te lang, of wint steeds dezelfde speler? Schrijf op wat beter kan en pas je regels aan. Zelfs de makers van beroemde spellen testen hun ontwerp tientallen keren voordat het in de winkel ligt. Na een paar rondes heb je een spel waar je trots op kunt zijn.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Wat heb je volgens alinea 1 nodig om een bordspel te maken?', opties: ['Een groot vel karton, stiften en fantasie', 'Een computer en een printer', 'Pionnen en een dobbelsteen uit de winkel', 'De handleiding van een bestaand spel'], goed: 0, uitleg: 'Zoek in alinea 1 naar het woordje "Met": "Met een groot vel karton, een paar stiften en een flinke dosis fantasie". Een dobbelsteen wordt pas later genoemd, als een van de manieren om vooruit te komen.' },
        { vaardigheid: 'Woordbetekenis', vraag: '"Met een flinke dosis fantasie." Wat betekent "een flinke dosis" hier?', opties: ['Een kleine hoeveelheid', 'Een recept van de dokter', 'Een grote hoeveelheid', 'Een beetje geluk'], goed: 2, uitleg: 'Een dosis is een hoeveelheid, en "flink" betekent groot of stevig. Samen: heel veel. Het woord "dosis" ken je misschien van medicijnen, maar hier gaat het niet over de dokter.' },
        { vaardigheid: 'Volgorde', vraag: 'Wat doe je volgens de tekst direct nadat je een thema hebt gekozen?', opties: ['Je spel testen met vrienden', 'Verrassingsvakjes tekenen', 'Karton en stiften kopen', 'Bedenken wanneer iemand heeft gewonnen'], goed: 3, uitleg: 'Let op signaalwoorden van volgorde. In alinea 2 staat: "Begin met een thema" en dan "Bedenk daarna het doel: wanneer heeft iemand gewonnen?" Het doel komt dus direct na het thema. De verrassingen en het testen komen later.' },
        { vaardigheid: 'Tekstdoel', vraag: 'Met welk doel is deze tekst geschreven?', opties: ['Informeren over de geschiedenis van bordspellen', 'Uitleggen hoe je zelf een bordspel kunt maken', 'Overtuigen dat bordspellen beter zijn dan computerspellen', 'Een spannend verhaal vertellen over een schattenjacht'], goed: 1, uitleg: 'Kijk naar de zinnen: "Begin met ...", "Bedenk daarna ...", "Speel je spel ...". De schrijver vertelt jou wat je moet doen, stap voor stap. Zo\'n tekst heet instructief: hij wil je iets leren doen.' },
        { vaardigheid: 'Bedoeling', vraag: 'Waarom noemt de schrijver in alinea 4 dat makers van beroemde spellen hun ontwerp tientallen keren testen?', opties: ['Om reclame te maken voor beroemde spellen', 'Om te zeggen dat je je spel later kunt verkopen', 'Om uit te leggen dat testen eigenlijk saai is', 'Om te laten zien dat testen normaal en belangrijk is, ook voor echte spelmakers'], goed: 3, uitleg: 'Vraag je af wat dit voorbeeld met jou als lezer moet doen. Als zelfs echte spelmakers zo vaak testen, hoef jij je niet te schamen als je spel de eerste keer nog niet perfect is. Het voorbeeld ondersteunt de eerste zin: "Het belangrijkste is misschien wel het testen."' },
        { vaardigheid: 'Middel en doel', vraag: 'Welk middel raadt de schrijver aan om een spel spannend te houden?', opties: ['Afwisseling tussen geluk en pech, bijvoorbeeld met verrassingsvakjes', 'Heel veel ingewikkelde spelregels', 'Een spel dat erg lang duurt', 'Een spel waarbij steeds dezelfde speler wint'], goed: 0, uitleg: 'Hier zoek je een middel (wat je doet) bij een doel (spanning). In alinea 3 staat het doel aan het eind: "houdt het spel spannend". Wat dat doet, staat ervoor: "Die afwisseling tussen geluk en pech". De andere antwoorden noemt de schrijver juist als dingen die je wilt voorkomen.' }
      ]
    },
    kort: [
      {
        titel: 'Schatzoekers', soort: 'Spelregels',
        tekst: [
          'Schatzoekers – voor 2 tot 4 spelers, vanaf 8 jaar',
          'Doel: als eerste drie schatkaarten verzamelen en terug zijn in de haven.',
          'Om de beurt gooi je met de dobbelsteen en loop je zoveel vakjes vooruit.',
          'Kom je op een schatvakje (gele ster)? Pak dan een schatkaart.',
          'Kom je op een stormvakje (blauwe golf)? Lever dan één schatkaart in, als je er een hebt.',
          'Gooi je zes? Dan mag je nog een keer gooien.'
        ],
        vragen: [
          { vaardigheid: 'Instructie', vraag: 'Lisa heeft twee schatkaarten en komt op een stormvakje. Een beurt later komt ze op een schatvakje. Hoeveel schatkaarten heeft ze dan?', opties: ['3', '1', '2', '4'], goed: 2, uitleg: 'Volg de regels stap voor stap. Op het stormvakje levert ze er één in: 2 − 1 = 1. Op het schatvakje pakt ze er één: 1 + 1 = 2. Bij zo\'n vraag helpt het om bij elke stap even op te schrijven hoeveel kaarten ze heeft.' },
          { vaardigheid: 'Precies lezen', vraag: 'Wanneer heb je Schatzoekers gewonnen?', opties: ['Als je als eerste drie schatkaarten hebt', 'Als je als eerste drie schatkaarten hebt én terug bent in de haven', 'Als je zes gooit', 'Als je aan het eind de meeste schatkaarten hebt'], goed: 1, uitleg: 'Lees de regel "Doel" heel precies, tot het eind. Drie schatkaarten alleen is niet genoeg: je moet ook "terug zijn in de haven". Wie te snel leest, mist dat tweede deel.' }
        ]
      },
      {
        titel: 'Spellenmiddag bij De Dobbelsteen', soort: 'Advertentie',
        tekst: [
          'Spellenmiddag bij speelgoedwinkel De Dobbelsteen!',
          'Elke woensdag van 14.00 tot 16.30 uur: probeer gratis nieuwe spellen uit.',
          'Deze maand 20% korting op alle coöperatieve spellen (je speelt samen tegen het spel).',
          'Bijvoorbeeld: Redding op de Maan, van € 25 voor € 20.',
          'Lege spelborden om zelf te ontwerpen: € 6,50 per stuk, 3 voor € 15.'
        ],
        vragen: [
          { vaardigheid: 'Bedoeling', vraag: 'Waarom staat er tussen haakjes "(je speelt samen tegen het spel)"?', opties: ['Omdat niet iedereen weet wat een coöperatief spel is', 'Omdat die spellen goedkoper zijn', 'Omdat die spellen alleen op woensdag te koop zijn', 'Omdat de winkel die spellen zelf maakt'], goed: 0, uitleg: 'Tussen haakjes staat vaak uitleg bij een moeilijk woord. "Coöperatief" kennen veel mensen niet. De winkel legt het uit, zodat iedereen begrijpt om welke spellen het gaat.' },
          { vaardigheid: 'Rekenen met de tekst', vraag: 'Bram koopt drie lege spelborden met de aanbieding. Hoeveel geld bespaart hij vergeleken met drie losse borden?', opties: ['€ 1,50', '€ 4,50', '€ 6,50', '€ 3,00'], goed: 1, uitleg: 'Drie losse borden kosten 3 × € 6,50 = € 19,50. Met de aanbieding betaal je € 15. Het verschil is € 19,50 − € 15 = € 4,50.' }
        ]
      }
    ]
  },
  // Dag 85: Robots in de zorg
  {
    hardop: {
      titel: 'Robots in de zorg', soort: 'Informatief', emoji: '🤖',
      alineas: [
        'In ziekenhuizen en verpleeghuizen werken steeds vaker collega\'s van metaal. Dat is minder vreemd dan het klinkt. Mensen in Nederland worden gemiddeld steeds ouder, en hoe ouder je bent, hoe meer zorg je vaak nodig hebt. Tegelijkertijd zijn er te weinig verpleegkundigen. Robots kunnen een deel van het werk overnemen, zodat de mensen in de zorg meer tijd overhouden voor hun patiënten.',
        'Sommige robots doen eenvoudig, maar zwaar werk. Ze rijden zelfstandig door de gangen van een ziekenhuis om maaltijden, schone lakens of medicijnen rond te brengen. Andere robots zijn juist heel precies. Een operatierobot heeft armen met piepkleine instrumenten. De chirurg bestuurt ze vanachter een scherm, en de robot zet zijn bewegingen om in kleine, rustige handelingen. Zo is er een kleinere wond nodig en herstellen patiënten vaak sneller.',
        'Opvallend zijn de robots die gezelschap houden. Een knuffelrobot in de vorm van een zeehondje reageert met geluidjes en bewegingen als je hem aait. Bij ouderen met dementie, een ziekte waarbij je steeds meer vergeet, kan zo\'n robot onrust verminderen. Andere robots herinneren mensen eraan dat ze hun pillen moeten innemen of genoeg moeten drinken.',
        'Toch is niet iedereen enthousiast. Critici vrezen dat robots straks het echte contact vervangen. Een robot kan je wel aan je pillen herinneren, maar hij kan niet echt met je meeleven. Ook kost een goede robot veel geld. Over één ding zijn de meeste deskundigen het wel eens: een robot kan een handige hulp zijn, maar geen vervanging van een mens die naast je bed zit.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Wat doet de knuffelrobot uit alinea 3 als je hem aait?', opties: ['Hij reageert met geluidjes en bewegingen', 'Hij brengt je medicijnen', 'Hij meet je temperatuur', 'Hij roept een verpleegkundige'], goed: 0, uitleg: 'Zoek in alinea 3 het woord "aait": "reageert met geluidjes en bewegingen als je hem aait". Medicijnen rondbrengen doen de robots uit alinea 2.' },
        { vaardigheid: 'Woordbetekenis', vraag: 'Wat is dementie volgens de tekst?', opties: ['Een soort zorgrobot', 'Een medicijn tegen onrust', 'Een ziekte waarbij je steeds meer vergeet', 'Een afdeling van het ziekenhuis'], goed: 2, uitleg: 'Soms legt de schrijver een moeilijk woord direct uit, tussen twee komma\'s: "dementie, een ziekte waarbij je steeds meer vergeet,". Let op zulke uitleg, die is er om je te helpen.' },
        { vaardigheid: 'Beeldspraak', vraag: 'In alinea 1 staat: "werken steeds vaker collega\'s van metaal". Wie of wat bedoelt de schrijver met "collega\'s van metaal"?', opties: ['Verpleegkundigen in een harnas', 'Medische apparaten zoals bedden', 'Mensen die in een metaalfabriek werken', 'Robots'], goed: 3, uitleg: 'De schrijver noemt robots niet meteen bij hun naam, maar beschrijft ze als collega\'s die van metaal zijn. Zo maakt hij je nieuwsgierig. Aan het eind van alinea 1 lees je het woord "Robots", en dan weet je het zeker.' },
        { vaardigheid: 'Slot', vraag: 'Welke functie heeft de laatste zin van de tekst?', opties: ['Hij geeft een conclusie: robots zijn een hulp, maar geen vervanging van mensen', 'Hij noemt een nieuw voorbeeld van een robot', 'Hij stelt een vraag aan de lezer', 'Hij noemt een nadeel dat nog niet eerder is genoemd'], goed: 0, uitleg: 'Het slot van een tekst rondt vaak af met een conclusie. Na de voordelen (alinea 2 en 3) en de nadelen (alinea 4) komt de schrijver tot een afweging waar de meeste deskundigen het over eens zijn. Er komt geen nieuw voorbeeld of nieuw nadeel bij.' },
        { vaardigheid: 'Samenvatten', vraag: 'Welke samenvatting past het best bij alinea 2?', opties: ['Robots brengen in ziekenhuizen alleen maaltijden rond', 'Door robots duren operaties veel langer', 'Robots doen in ziekenhuizen zowel zwaar sjouwwerk als heel precies werk bij operaties', 'Een chirurg is bij een operatie niet meer nodig'], goed: 2, uitleg: 'Alinea 2 bestaat uit twee delen: "Sommige robots ..." (zwaar werk) en "Andere robots ..." (precies werk). Een goede samenvatting noemt allebei. "Alleen maaltijden" is te weinig, en de chirurg is juist wel nodig: hij bestuurt de robot.' },
        { vaardigheid: 'Oorzaak en gevolg', vraag: 'Waarom herstellen patiënten na een operatie met een operatierobot vaak sneller?', opties: ['Omdat de robot de patiënt na de operatie verzorgt', 'Omdat er door de kleine, rustige handelingen een kleinere wond nodig is', 'Omdat de chirurg vanachter een scherm beter kan zien', 'Omdat robots nooit moe worden'], goed: 1, uitleg: 'Zoek het signaalwoord "Zo" aan het eind van alinea 2: wat ervoor staat is de oorzaak, wat erna komt het gevolg. De robot maakt kleine, rustige bewegingen. Daardoor is er een kleinere wond nodig, en daardoor herstel je sneller. Een keten van oorzaak en gevolg dus.' }
      ]
    },
    kort: [
      {
        titel: 'Bezoektijden', soort: 'Rooster',
        tekst: [
          'Bezoektijden – Ziekenhuis De Linde',
          'Afdeling | Maandag t/m vrijdag | Zaterdag en zondag | Bezoekers per patiënt',
          'Kinderafdeling | 10.00–20.00 uur | 10.00–20.00 uur | 2 (ouders altijd welkom)',
          'Verpleegafdelingen | 15.00–20.00 uur | 11.00–20.00 uur | 2',
          'Intensive care | 11.00–12.00 en 18.00–19.30 uur | 11.00–12.00 en 18.00–19.30 uur | 2, alleen na overleg',
          'Kinderen onder de 12 jaar mogen niet op de intensive care.'
        ],
        vragen: [
          { vaardigheid: 'Schema lezen', vraag: 'Saar (10) wil op dinsdag om 12.30 uur met haar vader naar haar oma, die op een verpleegafdeling ligt. Kan dat?', opties: ['Nee, want op een doordeweekse dag begint het bezoekuur op een verpleegafdeling pas om 15.00 uur', 'Ja, want er mogen twee bezoekers per patiënt komen', 'Nee, want kinderen onder de 12 mogen nooit op bezoek', 'Ja, want het bezoekuur is van 11.00 tot 20.00 uur'], goed: 0, uitleg: 'Kies de goede rij (verpleegafdelingen) en de goede kolom (dinsdag is maandag t/m vrijdag): 15.00–20.00 uur. Om 12.30 uur is dus te vroeg. De tijd 11.00 uur geldt alleen in het weekend, en de regel over kinderen onder de 12 gaat alleen over de intensive care.' },
          { vaardigheid: 'Schema lezen', vraag: 'Op welke afdeling zijn ouders altijd welkom?', opties: ['Op de verpleegafdelingen', 'Op de intensive care', 'Op alle afdelingen', 'Op de kinderafdeling'], goed: 3, uitleg: 'Zoek in het rooster de woorden "ouders altijd welkom". Die staan tussen haakjes in de rij van de kinderafdeling.' }
        ]
      },
      {
        titel: 'Medicijnrobot Pim', soort: 'Gebruiksaanwijzing',
        tekst: [
          'Pim herinnert je aan je medicijnen.',
          '1. Vul de bakjes in de lade met de pillen voor één week. Op elk bakje staan de dag en het tijdstip.',
          '2. Stel met de knoppen de tijden in waarop Pim je moet waarschuwen.',
          '3. Op het ingestelde tijdstip speelt Pim een melodietje en gaat het juiste bakje open.',
          '4. Druk op de groene knop als je je pillen hebt ingenomen.',
          '5. Heb je na 30 minuten nog niet op de groene knop gedrukt? Dan stuurt Pim een berichtje naar je mantelzorger.'
        ],
        vragen: [
          { vaardigheid: 'Instructie', vraag: 'Opa heeft om 8.00 uur zijn pillen ingenomen, maar is vergeten op de groene knop te drukken. Wat gebeurt er?', opties: ['Pim speelt het melodietje de hele dag opnieuw', 'Het bakje gaat dicht en de pillen verdwijnen', 'Er gebeurt niets, want de pillen zijn al ingenomen', 'Om 8.30 uur krijgt zijn mantelzorger een berichtje'], goed: 3, uitleg: 'Pim weet niet dat opa zijn pillen heeft ingenomen; Pim kijkt alleen of de groene knop is ingedrukt. Volgens stap 5 stuurt Pim na 30 minuten een berichtje. 8.00 uur plus 30 minuten is 8.30 uur.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Voor hoeveel tijd vul je de bakjes in één keer?', opties: ['Eén dag', 'Eén week', 'Dertig minuten', 'Eén maand'], goed: 1, uitleg: 'Lees stap 1: "met de pillen voor één week". De dertig minuten komen uit stap 5 en gaan over iets anders.' }
        ]
      }
    ]
  },
  // Dag 86: De laatste schaatsdag
  {
    hardop: {
      titel: 'De laatste schaatsdag', soort: 'Verhalend', emoji: '⛸️',
      alineas: [
        'Volgens het weerbericht zou het vanaf morgen gaan dooien. "Dus vandaag is de laatste kans," zei opa aan het ontbijt, en hij schoof mijn schaatsen al over de tafel naar me toe. Mijn broertje Siem had zijn muts al op voordat opa zijn zin had afgemaakt. Vier dagen lang had het gevroren, en de sloot achter de boerderij lag erbij als een spiegel.',
        'Het ijs kraakte zachtjes toen ik erop stapte, maar opa had het die ochtend al met een bijl getest. "Tien centimeter," had hij gezegd. "Daar kan een olifant op." We schaatsten tot aan de molen en weer terug, steeds opnieuw, tot mijn tenen gevoelloos waren en Siems wangen zo rood zagen als appels.',
        'Rond drie uur kwam de zon tevoorschijn. Bij de brug was het ijs donkerder geworden, bijna zwart, en er stond een dun laagje water op. Siem wilde er toch overheen, want daar begon het rechte stuk, waar je het hardst kon. "Niet doen!" riep ik, en ik hoorde dat ik klonk als opa. Siem keek me aan, keek naar het donkere ijs en draaide toen mopperend om.',
        'Die avond regende het. Ik lag in bed en luisterde naar de druppels op het dak, die alles kapotmaakten wat de vorst had opgebouwd. Ik dacht aan de spiegel achter de boerderij, die nu weer gewoon een sloot werd. Maar ik dacht ook aan Siem, die zich had omgedraaid. Volgend jaar, nam ik me voor, schaatsen we weer. Allebei.'
      ],
      vragen: [
        { vaardigheid: 'Personage', vraag: 'Hoe voelen de kinderen zich aan het ontbijt in alinea 1?', opties: ['Ongeduldig en blij: ze willen meteen het ijs op', 'Bang voor het dunne ijs', 'Verdrietig, omdat het gaat dooien', 'Moe van het vroege opstaan'], goed: 0, uitleg: 'Kijk naar wat de kinderen doen. Siem heeft zijn muts al op "voordat opa zijn zin had afgemaakt": hij kan niet wachten. Dat het gaat dooien, maakt het juist extra belangrijk om vandaag te gaan.' },
        { vaardigheid: 'Woordbetekenis', vraag: '"... tot mijn tenen gevoelloos waren." Wat betekent "gevoelloos" hier?', opties: ['Zo koud dat ik ze bijna niet meer voelde', 'Gebroken', 'Lekker warm', 'Gekneusd door een val'], goed: 0, uitleg: 'Kijk naar de delen van het woord: "gevoel" + "loos" (= zonder). Zonder gevoel dus. Na urenlang schaatsen in de vrieskou voel je je tenen bijna niet meer. Ook de rode wangen van Siem laten zien hoe koud het is.' },
        { vaardigheid: 'Beeldspraak', vraag: 'Opa zegt over het ijs: "Daar kan een olifant op." Wat bedoelt hij?', opties: ['Dat er vroeger een olifant op de sloot heeft gelopen', 'Dat de kinderen te zwaar zijn voor het ijs', 'Dat het ijs alleen dieren kan dragen', 'Dat het ijs heel dik en stevig is'], goed: 3, uitleg: 'Opa overdrijft expres. Hij bedoelt niet dat er echt een olifant op kan, maar dat het ijs zo stevig is dat je je geen zorgen hoeft te maken. Zo\'n overdrijving zie je vaker in gewone gesprekken: "Ik heb je al honderd keer gezegd ...".' },
        { vaardigheid: 'Personage', vraag: '"... en ik hoorde dat ik klonk als opa." Wat bedoelt de verteller hiermee?', opties: ['Dat de verteller hees is van de kou', 'Dat de verteller net als opa voorzichtig is en de verantwoordelijkheid neemt voor Siem', 'Dat de verteller opa nadoet om Siem aan het lachen te maken', 'Dat opa achter de verteller staat en meeroept'], goed: 1, uitleg: 'Opa testte het ijs met een bijl en paste op de kinderen. Nu let de verteller op het donkere, gevaarlijke ijs en roept "Niet doen!". De verteller merkt dat hij of zij zich gedraagt zoals opa: zorgzaam en verantwoordelijk.' },
        { vaardigheid: 'Realistisch?', vraag: 'Is dit een realistisch verhaal?', opties: ['Nee, want ijs kan geen olifant dragen', 'Nee, want na vorst regent het nooit', 'Ja, alles wat er gebeurt, kan ook echt gebeuren', 'Nee, want kinderen schaatsen nooit op een sloot'], goed: 2, uitleg: 'Ga na of alles in het echt kan: vorst, schaatsen op een sloot, donker ijs bij dooi en daarna regen. Dat kan allemaal. Over de olifant: dat zegt opa als overdrijving, er komt geen echte olifant in het verhaal voor.' },
        { vaardigheid: 'Verband', vraag: 'Waarom denkt de verteller aan het eind ook aan Siem, "die zich had omgedraaid"?', opties: ['Omdat Siem boos is en niet meer wil schaatsen', 'Omdat Siem zijn schaatsen kwijt is', 'Omdat Siem bang is voor de regen', 'Omdat Siem door om te keren veilig is gebleven, en daar is de verteller blij en opgelucht om'], goed: 3, uitleg: 'Verbind alinea 3 met alinea 4. Het donkere ijs met water erop was gevaarlijk; Siem had erdoor kunnen zakken. Doordat hij omdraaide, is er niets gebeurd. Daarom kan de verteller zeggen: volgend jaar schaatsen we weer, "Allebei".' }
      ]
    },
    kort: [
      {
        titel: 'Het weer', soort: 'Weerbericht',
        tekst: [
          'Het weer voor de komende dagen',
          'Vandaag: nog één koude dag. \'s Ochtends vorst tot −6 °C, \'s middags rond het vriespunt. Zonnig.',
          'Morgen: vanuit het zuidwesten trekt een regengebied over het land. De temperatuur stijgt naar 7 °C. In de ochtend kans op ijzel: wees voorzichtig in het verkeer!',
          'Overmorgen: wisselend bewolkt en 8 °C. Het ijs op sloten en plassen wordt snel onbetrouwbaar.'
        ],
        vragen: [
          { vaardigheid: 'Eigen kennis', vraag: 'Waarom is er morgenochtend kans op ijzel?', opties: ['Omdat het morgen nog kouder wordt dan vandaag', 'Omdat de regen op de nog bevroren grond valt en daar meteen bevriest', 'Omdat er veel sneeuw gaat vallen', 'Omdat de zon het ijs laat smelten'], goed: 1, uitleg: 'Combineer de tekst met wat je weet. Na een vriesnacht is de grond nog ijskoud. Als daar \'s ochtends regen op valt, bevriest die meteen tot een glad laagje: ijzel. Pas later stijgt de temperatuur naar 7 °C.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Welke dag wordt het warmst?', opties: ['Vandaag', 'Morgen', 'Overmorgen', 'Dat staat er niet'], goed: 2, uitleg: 'Vergelijk de temperaturen: vandaag rond het vriespunt, morgen 7 °C, overmorgen 8 °C. Overmorgen is dus het warmst.' }
        ]
      },
      {
        titel: 'IJsclub De Vlijt', soort: 'Mededeling',
        tekst: [
          'Bericht van IJsclub De Vlijt – vandaag, 7.30 uur',
          'De ijsbaan is vandaag open van 9.00 tot 16.00 uur. Het ijs is 9 centimeter dik.',
          'Leden gratis, niet-leden € 4. Koek-en-zopie bij de ingang.',
          'Morgen is de baan dicht vanwege de dooi.',
          'Schaats alleen binnen de linten. Daarbuiten is het ijs niet gecontroleerd.'
        ],
        vragen: [
          { vaardigheid: 'Teksten vergelijken', vraag: 'Kloppen het bericht van de ijsclub en het weerbericht met elkaar?', opties: ['Nee, volgens het weerbericht vriest het morgen nog harder', 'Nee, de ijsclub zegt dat het ijs nog een week goed blijft', 'Ja, uit allebei blijkt dat je morgen niet meer kunt schaatsen, omdat het gaat dooien', 'Ja, allebei zeggen dat het ijs 9 centimeter dik is'], goed: 2, uitleg: 'Leg de twee teksten naast elkaar. De ijsclub schrijft: "Morgen is de baan dicht vanwege de dooi." Het weerbericht voorspelt voor morgen regen en 7 °C. Die passen bij elkaar. De dikte van het ijs staat alleen in het bericht van de ijsclub.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Waarom moet je binnen de linten blijven?', opties: ['Omdat het ijs daarbuiten niet is gecontroleerd', 'Omdat je daarbuiten moet betalen', 'Omdat daar de koek-en-zopie staat', 'Omdat daar alleen leden mogen schaatsen'], goed: 0, uitleg: 'De reden staat direct achter de regel: "Daarbuiten is het ijs niet gecontroleerd." Je weet dus niet of het daar dik genoeg is.' }
        ]
      }
    ]
  },
  // Dag 87: Hoe je hersenen leren
  {
    hardop: {
      titel: 'Hoe je hersenen leren', soort: 'Informatief', emoji: '🧠',
      alineas: [
        'Je hersenen bestaan uit ongeveer zesentachtig miljard zenuwcellen. Die cellen sturen elkaar voortdurend piepkleine elektrische signaaltjes. Telkens als je iets nieuws leert, bijvoorbeeld een moeilijk woord of een nieuwe manier van rekenen, ontstaan er nieuwe verbindingen tussen die cellen. Leren is dus eigenlijk het aanleggen van nieuwe paadjes in je hoofd.',
        'Zo\'n nieuw paadje is in het begin nog smal en een beetje overwoekerd. Het kost moeite om het terug te vinden. Maar hoe vaker je dezelfde weg aflegt, hoe breder en steviger het pad wordt. Daarom helpt herhalen zo goed. Wie een woordje drie keer, verspreid over een week, oefent, onthoudt het veel beter dan wie het op één avond tien keer achter elkaar opdreunt.',
        'Ook slaap speelt een grote rol. Terwijl jij in bed ligt, zijn je hersenen druk bezig. Ze spelen nog eens af wat je die dag hebt geleerd en slaan de belangrijkste dingen op. Onderzoekers ontdekten dat mensen die na het leren een nacht goed hadden geslapen, het geleerde beter onthielden dan mensen die wakker waren gehouden. Een nacht doorhalen voor een toets is dus geen goed idee.',
        'Ten slotte maakt het uit hoe je je voelt. Ben je erg gestrest, dan maakt je lichaam stoffen aan die het leren moeilijker maken. Een beetje spanning is niet erg; die houdt je scherp. Maar wie zich ontspant, af en toe beweegt en op tijd pauze neemt, geeft zijn hersenen de ruimte om te doen waar ze goed in zijn: leren.'
      ],
      vragen: [
        { vaardigheid: 'Informatie zoeken', vraag: 'Wat gebeurt er volgens alinea 1 in je hersenen als je iets nieuws leert?', opties: ['Er ontstaan nieuwe verbindingen tussen zenuwcellen', 'Er ontstaan nieuwe zenuwcellen', 'Er verdwijnen oude herinneringen', 'Je hersenen worden zwaarder'], goed: 0, uitleg: 'Lees precies: er staat niet dat er nieuwe cellen bijkomen, maar dat er "nieuwe verbindingen tussen die cellen" ontstaan. Het verschil zit in één woord, dus lees zulke vragen nauwkeurig.' },
        { vaardigheid: 'Woordbetekenis', vraag: '"... dan wie het op één avond tien keer achter elkaar opdreunt." Wat betekent "opdreunen"?', opties: ['Iets opschrijven in een schrift', 'Iets aan een ander uitleggen', 'Iets hard zingen', 'Iets snel en eentonig achter elkaar opzeggen'], goed: 3, uitleg: '"Dreunen" is een zwaar, steeds herhaald geluid. Wie iets opdreunt, zegt het op zonder na te denken, als een machine. Dat past bij "tien keer achter elkaar": de schrijver zet het tegenover slim verspreid oefenen.' },
        { vaardigheid: 'Beeldspraak', vraag: 'De schrijver vergelijkt leren met "het aanleggen van nieuwe paadjes". Welke uitspraak past bij die vergelijking?', opties: ['Leren gaat het best als je veel wandelt', 'Je hersenen bestaan echt uit zandpaadjes', 'Hoe vaker je iets oefent, hoe makkelijker je het terugvindt, net als een pad waar je vaak loopt', 'Je kunt maar één paadje tegelijk aanleggen'], goed: 2, uitleg: 'Een vergelijking zegt iets over het echte onderwerp. Alinea 2 werkt het beeld uit: een nieuw pad is smal en moeilijk te vinden, maar wordt breder als je er vaak loopt. Zo werkt het ook met iets wat je leert: herhalen maakt het steviger.' },
        { vaardigheid: 'Signaalwoord', vraag: 'Welke signaalwoorden laten zien dat de schrijver een opsomming geeft van dingen die invloed hebben op leren?', opties: ['"Daarom" (alinea 2) en "dus" (alinea 3)', '"Ook" (alinea 3) en "Ten slotte" (alinea 4)', '"Maar" (alinea 2) en "Terwijl" (alinea 3)', '"Telkens" (alinea 1) en "Daarom" (alinea 2)'], goed: 1, uitleg: 'Kijk naar de eerste woorden van alinea 3 en 4. "Ook" en "Ten slotte" laten zien dat er een rijtje is: herhalen, slaap en ten slotte je gevoel. "Daarom" en "dus" zijn signaalwoorden van oorzaak en gevolg, niet van opsomming.' },
        { vaardigheid: 'Toepassen', vraag: 'Je hebt over een week een toets over de provincies. Welk plan past het best bij de tekst?', opties: ['De avond voor de toets alles tien keer opzeggen en laat naar bed gaan', 'Een week niets doen en op de ochtend van de toets snel alles leren', 'Alleen oefenen op momenten dat je gestrest bent', 'Elke dag een kwartiertje oefenen, goed slapen en op tijd pauze nemen'], goed: 3, uitleg: 'Pas de drie tips uit de tekst toe: verspreid herhalen (alinea 2), goed slapen (alinea 3) en ontspannen met pauzes (alinea 4). Alleen het laatste plan gebruikt alle drie. De andere plannen doen juist wat de tekst afraadt.' },
        { vaardigheid: 'Hoofdgedachte', vraag: 'Welke zin geeft het best weer waar de hele tekst over gaat?', opties: ['Je hersenen bestaan uit zesentachtig miljard zenuwcellen.', 'Leren is nieuwe verbindingen maken, en herhalen, slaap en ontspanning helpen daarbij.', 'Je moet niet gestrest zijn voor een toets.', 'Slaap is belangrijker dan herhalen.'], goed: 1, uitleg: 'De hoofdgedachte dekt alle alinea\'s. Het aantal cellen is een detail uit alinea 1, en stress gaat alleen over alinea 4. Dat slaap belangrijker is dan herhalen, staat nergens. Het goede antwoord noemt wat leren is én de drie dingen die helpen.' }
      ]
    },
    kort: [
      {
        titel: 'Leerplanning van Jesse', soort: 'Planning',
        tekst: [
          'Jesse heeft volgende week vrijdag een toets aardrijkskunde over hoofdstuk 4.',
          'Dag | Wat | Hoe lang',
          'zaterdag | samenvatting maken | 30 min.',
          'maandag | begrippen oefenen met kaartjes | 15 min.',
          'dinsdag | voetbaltraining, geen huiswerk | –',
          'woensdag | begrippen en de kaart oefenen | 20 min.',
          'donderdag | oefentoets maken en fouten nakijken | 25 min.',
          'vrijdag | toets!'
        ],
        vragen: [
          { vaardigheid: 'Schema lezen', vraag: 'Hoeveel minuten besteedt Jesse in totaal aan leren voor de toets?', opties: ['70 minuten', '75 minuten', '90 minuten', '110 minuten'], goed: 2, uitleg: 'Tel alle tijden in de laatste kolom op: 30 + 15 + 20 + 25 = 90 minuten. Op dinsdag leert hij niet, dus die dag tel je niet mee.' },
          { vaardigheid: 'Teksten verbinden', vraag: 'Welk advies uit de tekst "Hoe je hersenen leren" volgt Jesse duidelijk met deze planning?', opties: ['Hij leert alles op de avond voor de toets', 'Hij verspreidt het oefenen over meerdere dagen', 'Hij slaat een nacht slapen over', 'Hij oefent elke dag precies even lang'], goed: 1, uitleg: 'Leg de planning naast alinea 2 van de lange tekst: wie verspreid over een week oefent, onthoudt meer. Jesse oefent op vier verschillende dagen. Elke dag even lang klopt niet: het verschilt van 15 tot 30 minuten.' }
        ]
      },
      {
        titel: 'Tips voor de toets', soort: 'Bericht',
        tekst: [
          'Morgen is de toets! Een paar tips van juf Marieke:',
          '– Leg vanavond je etui alvast klaar.',
          '– Ga op tijd naar bed. Echt.',
          '– Eet morgen een goed ontbijt.',
          '– Lees elke vraag twee keer. Let op woorden als NIET en ALTIJD.',
          '– Weet je iets niet? Sla het over en kom er later op terug.',
          '– Zenuwachtig? Adem drie keer diep in en uit. Een beetje spanning hoort erbij.'
        ],
        vragen: [
          { vaardigheid: 'Bedoeling', vraag: 'Waarom zet juf Marieke het woord "Echt." achter "Ga op tijd naar bed"?', opties: ['Omdat ze niet zeker weet of de tip klopt', 'Omdat ze een grapje maakt en het eigenlijk niet meent', 'Omdat het een nieuwe tip is', 'Om te benadrukken dat ze deze tip extra belangrijk vindt'], goed: 3, uitleg: 'Het losse woordje "Echt." werkt als een knipoog met een uitroepteken: ik meen het! De juf weet dat kinderen de avond voor een toets vaak laat opblijven. Daarom legt ze extra nadruk op deze tip.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat moet je volgens juf Marieke doen als je het antwoord op een vraag niet weet?', opties: ['Gokken en doorgaan', 'De juf om hulp vragen', 'De vraag overslaan en er later op terugkomen', 'Drie keer diep ademhalen'], goed: 2, uitleg: 'Zoek de tip die begint met "Weet je iets niet?": "Sla het over en kom er later op terug." Diep ademhalen is een tip voor als je zenuwachtig bent.' }
        ]
      }
    ]
  },
  // Dag 88: Klaar voor de toets
  {
    hardop: {
      titel: 'Klaar voor de toets', soort: 'Verhalend', emoji: '✏️',
      alineas: [
        'Yasmin was al wakker voordat de wekker ging. Buiten was het nog donker, en in haar buik fladderde iets wat geen honger was. Vandaag was het zover: de eindtoets. Maandenlang had ze geoefend, met woordjes, sommen en teksten zoals deze. Toch voelde het nu alsof ze alles in één nacht was vergeten.',
        'Aan het ontbijt schoof haar moeder een bord pap naar haar toe. "Ik heb geen trek," zei Yasmin. "Drie hapjes," zei haar moeder. "Je hersenen draaien niet op lucht." Het werden er vijf. Op weg naar school fietste haar vriend Joep naast haar. Hij praatte de hele tijd over voetbal, en pas bij het hek begreep Yasmin dat hij dat expres deed. Joep was net zo zenuwachtig als zij.',
        'In het lokaal stonden de tafels in rijen, los van elkaar, als eilandjes. Meester Rik deelde de boekjes uit en zei: "Jullie hebben hier hard voor gewerkt. Lees rustig. En als je even vastloopt: adem, en ga door." De eerste vraag ging over een tekst over pinguïns. Yasmin las hem één keer, en toen nog een keer. Langzaam werd het fladderen in haar buik minder.',
        'Bij een lastige vraag over een gedicht bleef ze hangen. Ze voelde de paniek opkomen, maar toen hoorde ze in gedachten de stem van meester Rik. Ze sloeg de vraag over en kwam er later op terug. Na afloop liep ze naar buiten, de koude januarilucht in. Joep stond al bij de fietsen. "En?" vroeg hij. Yasmin haalde haar schouders op en grijnsde. "Ik heb gedaan wat ik kon." Het voelde als genoeg.'
      ],
      vragen: [
        { vaardigheid: 'Personage', vraag: 'Hoeveel hapjes pap eet Yasmin uiteindelijk?', opties: ['Geen', 'Drie', 'Vijf', 'Het hele bord'], goed: 2, uitleg: 'Haar moeder vraagt om drie hapjes, maar de zin daarna zegt: "Het werden er vijf." Lees altijd door tot na het gesprek: daar staat wat er echt gebeurt.' },
        { vaardigheid: 'Beeldspraak', vraag: '"In haar buik fladderde iets wat geen honger was." Wat bedoelt de schrijver?', opties: ['Yasmin heeft heel erge honger', 'Yasmin heeft buikpijn, omdat ze ziek is', 'Yasmin is zenuwachtig: ze heeft vlinders in haar buik', 'Er zit echt een vlinder in haar kamer'], goed: 2, uitleg: '"Vlinders in je buik" is een bekende uitdrukking voor een kriebelig, zenuwachtig gevoel. De schrijver zegt het net iets anders ("fladderde iets"), maar je herkent het. "Wat geen honger was" laat zien dat het niet over eten gaat, en de eindtoets verklaart de zenuwen.' },
        { vaardigheid: 'Personage', vraag: 'Waarom praat Joep op weg naar school de hele tijd over voetbal?', opties: ['Omdat hij niet weet dat er vandaag een toets is', 'Omdat hij na school een wedstrijd heeft', 'Omdat hij wil laten zien hoeveel hij van voetbal weet', 'Omdat hij zelf zenuwachtig is en zichzelf en Yasmin wil afleiden'], goed: 3, uitleg: 'De tekst helpt je: Yasmin begrijpt "dat hij dat expres deed", en direct daarna staat dat Joep "net zo zenuwachtig" was. Wie zenuwachtig is, praat soms juist over iets heel anders, om er niet aan te hoeven denken.' },
        { vaardigheid: 'Ontwikkeling', vraag: 'Hoe verandert Yasmin in de loop van het verhaal?', opties: ['Van zenuwachtig en onzeker naar rustig en tevreden over wat ze heeft gedaan', 'Van rustig naar steeds banger', 'Van vrolijk naar boos op meester Rik', 'Ze verandert niet: ze blijft de hele dag in paniek'], goed: 0, uitleg: 'Vergelijk het begin met het eind. Eerst fladdert het in haar buik en denkt ze dat ze alles vergeten is. Tijdens de toets wordt het fladderen minder, en aan het eind grijnst ze: "Ik heb gedaan wat ik kon." Ze is dus rustiger en tevreden geworden.' },
        { vaardigheid: 'Verband', vraag: 'In alinea 4 hoort Yasmin "in gedachten de stem van meester Rik". Welke zin van hem helpt haar op dat moment?', opties: ['"Jullie hebben hier hard voor gewerkt."', '"Lees rustig."', '"Adem, en ga door."', '"Drie hapjes."'], goed: 2, uitleg: 'Verbind alinea 4 met alinea 3. Yasmin loopt vast en voelt paniek. Ze gaat door met de volgende vragen en komt later terug. Dat past bij: "als je even vastloopt: adem, en ga door." "Drie hapjes" zei haar moeder, niet de meester.' },
        { vaardigheid: 'Thema', vraag: 'Welk vraagstuk staat centraal in dit verhaal?', opties: ['Hoe je een goede vriend vindt', 'Waarom pinguïns in de kou leven', 'Hoe je een gedicht schrijft', 'Hoe je omgaat met spanning voor een belangrijk moment'], goed: 3, uitleg: 'Vraag je af: waar draait alles om? De vlinders in haar buik, Joep die over voetbal praat, de tip van de meester en de paniek bij het gedicht gaan allemaal over spanning en hoe je daarmee omgaat. De pinguïns en het gedicht zijn maar details.' }
      ]
    },
    kort: [
      {
        titel: 'Rooster van de toetsdag', soort: 'Rooster',
        tekst: [
          'Doorstroomtoets groep 8 – rooster',
          'Tijd | Wat',
          '8.30 uur | binnenkomen, jas en tas op de gang',
          '8.45 uur | uitleg door meester Rik',
          '9.00–10.00 uur | taalverzorging en lezen (boekje 1)',
          '10.00–10.20 uur | pauze: fruit eten en buiten spelen',
          '10.20–11.20 uur | rekenen (boekje 2)',
          'vanaf 11.30 uur | gewone les',
          'Neem mee: twee goede potloden, een gum en een flesje water.'
        ],
        vragen: [
          { vaardigheid: 'Schema lezen', vraag: 'Hoe lang duurt de pauze?', opties: ['20 minuten', '10 minuten', '30 minuten', 'Een uur'], goed: 0, uitleg: 'De pauze is van 10.00 tot 10.20 uur. Van 10.00 tot 10.20 uur is 20 minuten.' },
          { vaardigheid: 'Schema lezen', vraag: 'Fleur moet om 10.45 uur naar de tandarts. Welk onderdeel mist ze dan (voor een deel)?', opties: ['Taalverzorging en lezen', 'De pauze', 'Rekenen', 'De uitleg van meester Rik'], goed: 2, uitleg: 'Zoek de rij waarin 10.45 uur valt: rekenen duurt van 10.20 tot 11.20 uur. Fleur is dus halverwege het rekenen weg. Taal en lezen en de pauze zijn dan al voorbij.' }
        ]
      },
      {
        titel: 'Een kaartje van oma', soort: 'Kaart',
        tekst: [
          'Lieve Yasmin,',
          'Morgen is je grote toets. Ik weet nog dat je in groep 3 moest huilen omdat je de letter g niet kon schrijven. En kijk nu eens: je leest dikke boeken en je schrijft zelf verhalen. Wat er morgen ook uitkomt, dat getal zegt niet alles over wie jij bent. Ik ben nu al trots op je.',
          'Veel liefs en een dikke knuffel, oma'
        ],
        vragen: [
          { vaardigheid: 'Bedoeling', vraag: 'Waarom vertelt oma over de letter g in groep 3?', opties: ['Om Yasmin een beetje uit te lachen', 'Om te zeggen dat schrijven het moeilijkste vak is', 'Om te laten zien hoeveel Yasmin sindsdien heeft geleerd', 'Om Yasmin te waarschuwen dat ze nog steeds fouten maakt'], goed: 2, uitleg: 'Kijk naar de zin die erop volgt: "En kijk nu eens: je leest dikke boeken en je schrijft zelf verhalen." Oma zet toen en nu naast elkaar. Zo laat ze zien hoe ver Yasmin is gekomen, en dat geeft moed.' },
          { vaardigheid: 'Verwijswoord', vraag: 'Wat bedoelt oma met "dat getal"?', opties: ['De uitslag van de toets', 'De leeftijd van Yasmin', 'Het aantal boeken dat Yasmin leest', 'Het nummer van haar groep'], goed: 0, uitleg: 'Een verwijswoord kijkt terug. Vlak ervoor staat: "Wat er morgen ook uitkomt". Wat er uit een toets komt, is een uitslag, vaak een getal of score. Oma bedoelt: die score zegt niet alles over wie je bent.' }
        ]
      }
    ]
  }
];
MOCHI_LEZEN.push(...MOCHI_LEZEN_DEEL2);

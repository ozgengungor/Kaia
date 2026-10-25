/*
 * Mochi — begrijpend lezen en hardop lezen, 14 dagen.
 *
 * Net als de andere databestanden is dit "data-only". Elke dag in
 * `MOCHI_LEZEN` hoort bij één dag van het schema van Mochi de panda
 * (dag 1 = dinsdag 20 oktober, dag 14 = maandag 2 november) en duurt
 * samen ongeveer een half uur.
 *
 * Een dag:
 *   hardop   één langere tekst. Het kind leest hem eerst hardop tegen de
 *            stopwatch (technisch lezen) en beantwoordt daarna 3 vragen in
 *            de stijl van de nieuwe Boom-toets begrijpend lezen.
 *            titel, soort ('Informatief' | 'Verhalend' | 'Betoog' |
 *            'Instructief' | 'Nieuws'), emoji, alineas [..], vragen [..]
 *   kort     twee korte, alledaagse teksten (advertentie, recept, bord,
 *            dienstregeling, mail ...) met elk 2 vragen in de stijl van
 *            Boom begrijpend lezen 2012.
 *            titel, soort, tekst [regels of alinea's], vragen [..]
 *
 * Een vraag:
 *   vaardigheid  korte naam van de leesvaardigheid ('Verwijswoord', ...)
 *   vraag, opties (altijd 4), goed (index 0–3 van het goede antwoord)
 *   uitleg       leert de strategie, niet alleen het antwoord
 */

const MOCHI_LEZEN = [
  // ───────────── Dag 1 ─────────────
  {
    hardop: {
      titel: 'De ijsvogel',
      soort: 'Informatief',
      emoji: '🐦',
      alineas: [
        'Wie langs een beek of vijver wandelt, ziet soms een flits van fel blauw over het water schieten. Grote kans dat je dan een ijsvogel hebt gezien. Dit vogeltje is ongeveer zo groot als een mus, maar door zijn kleuren valt hij meteen op. Zijn rug glanst blauw en zijn buik is oranje.',
        'De ijsvogel is een echte visser. Hij zit vaak doodstil op een tak boven het water en houdt de vissen in de gaten. Ziet hij een klein visje, dan duikt hij er razendsnel achteraan. Met zijn lange, puntige snavel grijpt hij de vis. Daarna vliegt hij terug naar zijn tak en slaat hij de vis een paar keer tegen het hout voordat hij hem doorslikt.',
        'Een nest bouwt de ijsvogel op een bijzondere plek. Hij graaft met zijn snavel een lange gang in een steile oever van zand of leem. Aan het eind van die gang legt het vrouwtje haar eieren. Zo zijn de jongen goed beschermd.',
        'Toch heeft de ijsvogel het soms zwaar. In een strenge winter vriest het water dicht en kan hij geen vis meer vangen. Na zo\'n winter zijn er veel minder ijsvogels. Gelukkig herstelt hun aantal zich meestal weer in een paar jaar, want een ijsvogelpaar kan per jaar meerdere keren jongen krijgen.'
      ],
      vragen: [
        { vaardigheid: 'Tekstdoel', vraag: 'Wat is het doel van deze tekst?', opties: ['De lezer overhalen om een ijsvogel te gaan zoeken', 'De lezer informeren over de ijsvogel', 'De lezer laten lachen om een grappige vogel', 'De lezer uitleggen hoe je een vogelhuisje bouwt'], goed: 1, uitleg: 'Vraag jezelf af: wil de schrijver me iets leren, me overtuigen, me vermaken of me iets laten doen? Deze tekst geeft vooral feiten over hoe de ijsvogel eruitziet, eet en nestelt. Dan is het doel informeren.' },
        { vaardigheid: 'Alinea', vraag: 'Waar gaat alinea 3 over?', opties: ['Waar de ijsvogel op jaagt', 'Waarom de ijsvogel blauw is', 'Wat de ijsvogel in de winter doet', 'Hoe en waar de ijsvogel zijn nest maakt'], goed: 3, uitleg: 'De eerste zin van een alinea vertelt vaak waar de hele alinea over gaat. Alinea 3 begint met "Een nest bouwt de ijsvogel op een bijzondere plek", en de rest gaat over de gang en de eieren.' },
        { vaardigheid: 'Conclusie', vraag: 'Wat kun je uit de laatste alinea concluderen?', opties: ['Na een zachte winter zijn er waarschijnlijk meer ijsvogels dan na een strenge winter', 'IJsvogels trekken in de winter naar warme landen', 'IJsvogels eten in de winter vooral zaden', 'Er komen elk jaar precies evenveel ijsvogels bij'], goed: 0, uitleg: 'Een conclusie staat niet letterlijk in de tekst, maar volgt er wel logisch uit. Er staat dat er na een strenge winter minder ijsvogels zijn, omdat ze geen vis kunnen vangen. Dus na een zachte winter zijn er waarschijnlijk meer.' }
      ]
    },
    kort: [
      {
        titel: 'Herfstactie bij De Spaak',
        soort: 'Advertentie',
        tekst: [
          'Fietsenmaker De Spaak, Dorpsstraat 12',
          'Herfstactie: van 19 oktober tot en met 1 november!',
          'Fietsverlichting voor en achter: van € 24,95 voor € 17,50.',
          'Gratis bandencheck bij elke reparatie.',
          'Kinderfietsen 24 inch: € 50 korting.',
          'Lever je oude fiets in? Dan krijg je € 25 extra korting op een nieuwe fiets.',
          'Open: dinsdag tot en met zaterdag van 9.00 tot 18.00 uur. Zondag en maandag gesloten.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Sanne wil op maandag 26 oktober nieuwe fietsverlichting kopen bij De Spaak. Wat gaat er mis?', opties: ['De actie is dan al voorbij', 'De winkel is op maandag dicht', 'De verlichting kost dan € 24,95', 'Ze moet eerst haar oude fiets inleveren'], goed: 1, uitleg: 'Bij een advertentie zoek je gericht: welke regel hoort bij jouw vraag? De vraag gaat over een dag, dus kijk je naar de openingstijden. Daar staat dat de winkel op maandag gesloten is.' },
          { vaardigheid: 'Conclusie', vraag: 'Joris koopt een kinderfiets van 24 inch en levert zijn oude fiets in. Hoeveel korting krijgt hij in totaal?', opties: ['€ 25', '€ 50', '€ 75', '€ 17,50'], goed: 2, uitleg: 'Soms moet je twee stukjes informatie uit de tekst combineren. Er staat € 50 korting op kinderfietsen en € 25 extra als je je oude fiets inlevert. Samen is dat € 75.' }
        ]
      },
      {
        titel: 'Een stekelige slaper',
        soort: 'Informatief',
        tekst: [
          'In de herfst eet de egel zoveel mogelijk slakken, kevers en wormen. Hij moet namelijk een flinke vetlaag opbouwen. Die heeft hij straks hard nodig, want van ongeveer november tot maart houdt hij een winterslaap. Hij zoekt dan een beschut plekje op, bijvoorbeeld onder een hoop bladeren of takken. Zijn hartslag en ademhaling gaan sterk omlaag. Zo verbruikt hij heel weinig energie.',
          'Ruim je tuin in de herfst dus niet te netjes op: een rommelig hoekje is voor een egel een prima slaapkamer.'
        ],
        vragen: [
          { vaardigheid: 'Verwijswoord', vraag: 'In de zin "Die heeft hij straks hard nodig" verwijst "Die" naar ...', opties: ['de egel', 'de winterslaap', 'de vetlaag', 'de slakken en kevers'], goed: 2, uitleg: 'Een verwijswoord verwijst meestal terug naar iets in de zin ervoor. Vervang "Die" door elk antwoord en lees de zin opnieuw. "De vetlaag heeft hij straks hard nodig, want ... winterslaap" is het enige dat echt klopt.' },
          { vaardigheid: 'Woordbetekenis', vraag: 'Wat betekent "beschut" in deze tekst?', opties: ['beschermd tegen wind en kou', 'heel donker', 'vlak bij het huis', 'vol met eten'], goed: 0, uitleg: 'Ken je een woord niet, kijk dan naar de woorden eromheen. Het voorbeeld is "onder een hoop bladeren of takken". Zo\'n plek houdt wind en kou tegen, dus beschut betekent beschermd.' }
        ]
      }
    ]
  },

  // ───────────── Dag 2 ─────────────
  {
    hardop: {
      titel: 'Het verkeerde spoor',
      soort: 'Verhalend',
      emoji: '🚆',
      alineas: [
        'Lotte stond met haar rugzak op het station van Utrecht en keek voor de derde keer naar het bord. Haar trein naar Zwolle zou om 10.12 uur vertrekken van spoor 7. Het was de eerste keer dat ze alleen naar oma reisde, en haar buik voelde als een wasmachine.',
        '"Let op, de trein naar Zwolle vertrekt vandaag van spoor 12," klonk het ineens door de luidsprekers. Lotte schrok. Spoor 12? Ze keek om zich heen. Overal liepen mensen met koffers, en niemand leek op haar te letten. Ze haalde diep adem en las de borden boven haar hoofd. Een pijl wees naar links: spoor 11 en 12.',
        'Ze rende de trap af, door de tunnel en weer omhoog. Daar stond de trein, met de deuren nog open. Een conducteur met een fluitje keek haar aan. "Zwolle?" vroeg hij. Lotte knikte, te buiten adem om iets te zeggen. "Spring er maar in," zei hij met een knipoog.',
        'Toen de trein begon te rijden, plofte Lotte op een stoel bij het raam. Ze pakte haar telefoon en stuurde oma een berichtje: "Zit erin! Spoor veranderd, maar ik heb het zelf opgelost." Ze keek naar buiten en merkte dat de wasmachine in haar buik eindelijk was gestopt.'
      ],
      vragen: [
        { vaardigheid: 'Beeldspraak', vraag: 'Lotte voelt haar buik "als een wasmachine". Wat bedoelt de schrijver daarmee?', opties: ['Lotte heeft honger', 'Lotte is zenuwachtig', 'Lotte heeft buikpijn van het eten', 'Lotte moet heel hard lachen'], goed: 1, uitleg: 'Bij beeldspraak vergelijkt de schrijver iets met iets anders. Een wasmachine draait en woelt. Zo voelt je buik als je gespannen bent, en Lotte reist voor het eerst alleen.' },
        { vaardigheid: 'Tussen de regels', vraag: 'Hoe voelt Lotte zich aan het eind van het verhaal?', opties: ['Boos op de conducteur', 'Nog steeds bang', 'Verdrietig omdat ze oma mist', 'Opgelucht en trots'], goed: 3, uitleg: 'Een schrijver zegt niet altijd precies hoe iemand zich voelt; dat moet je zelf afleiden. Lotte schrijft "ik heb het zelf opgelost" (trots), en de wasmachine in haar buik stopt (opgelucht).' },
        { vaardigheid: 'Hoofdgedachte', vraag: 'Welke zin past het best als hoofdgedachte van dit verhaal?', opties: ['Treinen vertrekken vaak van een ander spoor', 'Conducteurs zijn altijd vriendelijk', 'Lotte lost tijdens haar eerste reis alleen zelf een onverwacht probleem op', 'Lotte gaat op bezoek bij oma in Zwolle'], goed: 2, uitleg: 'De hoofdgedachte gaat over het hele verhaal, niet over één detail. Dat Lotte naar oma gaat klopt wel, maar het verhaal draait om het probleem met het spoor en hoe zij dat zelf oplost.' }
      ]
    },
    kort: [
      {
        titel: 'Snelle appelcrumble',
        soort: 'Recept',
        tekst: [
          'Snelle appelcrumble (voor 4 personen)',
          'Nodig: 4 appels, 100 gram bloem, 75 gram boter, 75 gram suiker, 1 theelepel kaneel.',
          '1. Verwarm eerst de oven voor op 200 graden.',
          '2. Schil de appels, haal het klokhuis eruit en snijd ze in stukjes.',
          '3. Leg de stukjes in een ovenschaal en strooi de kaneel erover.',
          '4. Kneed daarna de bloem, de boter en de suiker tot kruimels.',
          '5. Verdeel de kruimels over de appels.',
          '6. Zet de schaal ongeveer 30 minuten in de oven, tot de bovenkant goudbruin is.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Wat doe je direct nadat je de appels in stukjes hebt gesneden?', opties: ['De oven voorverwarmen', 'De kruimels maken', 'De schaal in de oven zetten', 'De stukjes in een schaal leggen en er kaneel over strooien'], goed: 3, uitleg: 'Bij een recept is de volgorde belangrijk. Zoek de stap waarin de appels gesneden worden (stap 2) en kijk dan naar de stap die daarna komt.' },
          { vaardigheid: 'Signaalwoord', vraag: 'In stap 1 staat dat je de oven "eerst" voorverwarmt. Waarom doe je dat als eerste?', opties: ['Zodat de oven al heet is als de schaal erin gaat', 'Omdat je anders geen kruimels kunt maken', 'Omdat de appels warm moeten zijn om te schillen', 'Zodat de boter alvast smelt'], goed: 0, uitleg: 'Signaalwoorden zoals "eerst", "daarna" en "tot" vertellen je iets over tijd en volgorde. "Eerst" betekent: dit doe je voor de rest. Zo is de oven al heet als je de schaal er in stap 6 in zet.' }
        ]
      },
      {
        titel: 'Gereedschap lenen in de bieb',
        soort: 'Nieuwsbericht',
        tekst: [
          'VEENDORP – In de bibliotheek van Veendorp kun je vanaf deze maand niet alleen boeken lenen, maar ook gereedschap. Denk aan een boormachine, een tuinschaar of een naaimachine. "Veel mensen gebruiken zo\'n apparaat maar een paar keer per jaar," zegt medewerker Fatima Yilmaz. "Het is zonde als iedereen er zelf een koopt."',
          'Leden mogen het gereedschap twee weken houden. Het lenen is gratis. Wel moet je het schoon en heel terugbrengen. De bibliotheek wil ook workshops geven, zodat mensen leren hoe ze het gereedschap veilig gebruiken.'
        ],
        vragen: [
          { vaardigheid: 'Hoofdgedachte', vraag: 'Wat is de hoofdgedachte van dit bericht?', opties: ['Een naaimachine is duur', 'Je moet gereedschap schoon terugbrengen', 'De bibliotheek van Veendorp leent nu ook gereedschap uit', 'Fatima Yilmaz werkt in de bibliotheek'], goed: 2, uitleg: 'De hoofdgedachte van een nieuwsbericht staat vaak al in de eerste zin. Die vertelt het belangrijkste nieuws; de rest van het bericht geeft extra details.' },
          { vaardigheid: 'Woordbetekenis', vraag: 'Fatima zegt: "Het is zonde als iedereen er zelf een koopt." Wat betekent "zonde" hier?', opties: ['Verboden', 'Heel duur', 'Gevaarlijk', 'Jammer, omdat het verspilling is'], goed: 3, uitleg: 'Een woord kan meer betekenissen hebben. Kijk wat er vlak ervoor staat: mensen gebruiken het apparaat maar een paar keer per jaar. Dan is het jammer en verspilling als iedereen er een koopt.' }
        ]
      }
    ]
  },

  // ───────────── Dag 3 ─────────────
  {
    hardop: {
      titel: 'Hoe een sluis werkt',
      soort: 'Informatief',
      emoji: '⛴️',
      alineas: [
        'Nederland heeft duizenden kilometers aan kanalen en rivieren. Maar het water is niet overal even hoog. Een schip kan niet zomaar van laag naar hoog water varen. Daarvoor is een sluis nodig: een soort lift voor schepen.',
        'Een sluis is een grote bak met aan beide kanten zware deuren. Die deuren heten sluisdeuren. Stel dat een boot van het lage naar het hoge water wil. Eerst gaan de deuren aan de lage kant open en vaart de boot de sluis in. Daarna gaan die deuren achter hem dicht.',
        'Nu komt het slimme deel. In de deuren aan de hoge kant zitten kleine luikjes, of er lopen buizen naast de sluis. Die worden geopend, zodat er langzaam water van de hoge kant de sluis in stroomt. Het water in de sluis stijgt, en de boot stijgt mee. Pas als het water binnen en buiten even hoog staat, kunnen de deuren aan de hoge kant open. De boot vaart verder.',
        'Wil een boot de andere kant op, dan gebeurt alles precies andersom: het water loopt uit de sluis weg en de boot zakt mee naar beneden. Het mooie is dat een sluis geen pomp nodig heeft om de boot omhoog te tillen. Het water stroomt vanzelf van hoog naar laag.'
      ],
      vragen: [
        { vaardigheid: 'Beeldspraak', vraag: 'De schrijver noemt een sluis "een soort lift voor schepen". Waarom is dat een goede vergelijking?', opties: ['Omdat een sluis net zo klein is als een lift', 'Omdat een sluis een schip omhoog of omlaag brengt', 'Omdat je in een sluis op een knopje drukt', 'Omdat een sluis veel stroom gebruikt'], goed: 1, uitleg: 'Bij een vergelijking zoek je wat de twee dingen gemeen hebben. Een lift brengt mensen naar een hogere of lagere verdieping, en een sluis brengt schepen naar hoger of lager water.' },
        { vaardigheid: 'Opbouw', vraag: 'Hoe heeft de schrijver alinea 2 en 3 vooral opgebouwd?', opties: ['Als stappen in een vaste volgorde', 'Als een rijtje voordelen en nadelen', 'Als een vergelijking tussen twee landen', 'Als een mening met argumenten'], goed: 0, uitleg: 'Let op signaalwoorden als "eerst", "daarna", "nu" en "pas als". Die laten zien dat de schrijver stap voor stap uitlegt wat er na elkaar gebeurt.' },
        { vaardigheid: 'Conclusie', vraag: 'Wat zou er gebeuren als de deuren aan de hoge kant opengingen terwijl het water in de sluis nog laag stond?', opties: ['Er zou niets bijzonders gebeuren', 'De boot zou vanzelf terugvaren naar het lage water', 'Het water van de hoge kant zou met grote kracht de sluis in stromen', 'De sluis zou helemaal leeglopen'], goed: 2, uitleg: 'Gebruik wat de tekst je heeft geleerd: water stroomt vanzelf van hoog naar laag. Gaan de deuren te vroeg open, dan stroomt het hoge water ineens de sluis in. Daarom wachten ze tot het water even hoog staat.' }
      ]
    },
    kort: [
      {
        titel: 'Fietspont Zandhoek',
        soort: 'Dienstregeling',
        tekst: [
          'Fietspont Zandhoek – Rietwijk',
          'De pont vaart van 1 april tot en met 31 oktober.',
          'Maandag tot en met vrijdag: elk half uur, van 7.00 tot 19.00 uur.',
          'Zaterdag en zondag: elk heel uur, van 10.00 tot 18.00 uur.',
          'Overtocht: ongeveer 5 minuten.',
          'Prijs: volwassenen € 1,50, kinderen tot 12 jaar € 0,75. Je fiets mag gratis mee.',
          'Let op: bij harde wind of storm kan de pont niet varen. Kijk dan op het bord bij de steiger.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Het is zaterdag 31 oktober, 10.20 uur. Wanneer gaat de volgende pont?', opties: ['Om 10.30 uur', 'Om 11.00 uur', 'Er vaart die dag geen pont', 'Om 10.25 uur'], goed: 1, uitleg: 'Lees eerst welke dag het is, en zoek de regel die daarbij hoort. Op zaterdag vaart de pont elk heel uur vanaf 10.00 uur. Die van 10.00 uur is al weg, dus de volgende gaat om 11.00 uur.' },
          { vaardigheid: 'Conclusie', vraag: 'Wat kun je concluderen over zondag 1 november?', opties: ['De pont vaart elk uur', 'De pont vaart elk half uur', 'De pont vaart die dag niet', 'De overtocht is die dag gratis'], goed: 2, uitleg: 'Een conclusie trek je door de tekst goed te combineren met de vraag. De pont vaart tot en met 31 oktober. 1 november valt daarbuiten, dus dan vaart hij niet.' }
        ]
      },
      {
        titel: 'Uitnodiging van Daan',
        soort: 'Mail',
        tekst: [
          'Van: Daan',
          'Aan: Mila, Sem, Noor en Yusuf',
          'Onderwerp: Mijn verjaardag!',
          'Hoi allemaal,',
          'Ik word 12 en dat wil ik vieren! Jullie zijn uitgenodigd voor een middag lasergamen op zaterdag 7 november. We verzamelen om 13.30 uur bij mij thuis. Mijn vader brengt ons met de auto naar de lasergamehal. Neem wel sportschoenen mee, want die zijn daar verplicht. Daarna eten we pizza bij ons. Rond 18.00 uur mogen jullie weer opgehaald worden. Laat je voor woensdag even weten of je komt?',
          'Groetjes, Daan'
        ],
        vragen: [
          { vaardigheid: 'Verwijswoord', vraag: 'In de zin "want die zijn daar verplicht" verwijst "daar" naar ...', opties: ['het huis van Daan', 'de auto van Daans vader', 'de pizzeria', 'de lasergamehal'], goed: 3, uitleg: '"Daar" is een verwijswoord voor een plek. Kijk in de zin ervoor welke plek genoemd wordt: de lasergamehal. Lees de zin opnieuw met "in de lasergamehal" in plaats van "daar", en je ziet dat het klopt.' },
          { vaardigheid: 'Klopt het?', vraag: 'Welke zin klopt NIET volgens de mail?', opties: ['Daan wordt twaalf', 'Ze eten pizza in de lasergamehal', 'Het feest is op een zaterdag', 'Daan wil voor woensdag weten wie er komt'], goed: 1, uitleg: 'Bij een "klopt niet"-vraag check je elk antwoord één voor één in de tekst. Er staat: "Daarna eten we pizza bij ons." Bij ons betekent bij Daan thuis, niet in de lasergamehal.' }
        ]
      }
    ]
  },

  // ───────────── Dag 4 ─────────────
  {
    hardop: {
      titel: 'Een bos op het schoolplein',
      soort: 'Nieuws',
      emoji: '🌳',
      alineas: [
        'LINDENHOVE – Waar vorig jaar nog grijze tegels lagen, groeit nu een klein bos. Leerlingen van basisschool De Kastanje hebben op hun schoolplein een zogeheten tiny forest geplant: een dicht bosje, ongeveer zo groot als een tennisbaan.',
        'Het idee kwam van de leerlingen zelf. "In de zomer was het op het plein bloedheet," vertelt Jesse (11) uit groep 8. "Er was nergens schaduw." Samen met hun juf schreven de kinderen een brief aan de gemeente. Die vond het een goed plan en betaalde de bomen en struiken.',
        'Op een zaterdag in maart staken ouders, leerkrachten en kinderen samen de handen uit de mouwen. Ze haalden de tegels weg, maakten de grond los en plantten ruim zeshonderd boompjes en struiken heel dicht op elkaar. Zo groeien ze snel naar het licht toe.',
        'Het bosje is nu al een plek voor vlinders, vogels en egels. Elke week houdt een groep leerlingen bij welke dieren ze zien. "Het is nu echt het mooiste schoolplein van de stad," vindt Jesse. Directeur Annelies de Boer is trots: "Onze leerlingen hebben laten zien dat je met een goed plan echt iets kunt veranderen."'
      ],
      vragen: [
        { vaardigheid: 'Tekstdoel', vraag: 'Wat is het belangrijkste doel van deze tekst?', opties: ['Lezers overhalen om ook een bos te planten', 'Lezers uitleggen hoe je een boom plant', 'Lezers informeren over iets nieuws dat op een school is gebeurd', 'Lezers vermaken met een verzonnen verhaal'], goed: 2, uitleg: 'Een nieuwsbericht vertelt wat er gebeurd is, waar, wanneer en wie erbij waren. Het begint met een plaatsnaam en geeft feiten en uitspraken van mensen. Het doel is dus informeren.' },
        { vaardigheid: 'Feit of mening', vraag: 'Welke zin is een mening?', opties: ['Het is nu echt het mooiste schoolplein van de stad.', 'De gemeente betaalde de bomen en struiken.', 'De leerlingen plantten ruim zeshonderd boompjes.', 'Elke week houdt een groep leerlingen bij welke dieren ze zien.'], goed: 0, uitleg: 'Een feit kun je controleren: het klopt of het klopt niet. Een mening is wat iemand vindt, en een ander kan het daar mee oneens zijn. "Het mooiste schoolplein" is wat Jesse vindt; iemand anders kan een ander plein mooier vinden.' },
        { vaardigheid: 'Alinea', vraag: 'Wat is de functie van alinea 2?', opties: ['Hij beschrijft welke dieren er nu in het bos leven', 'Hij legt uit hoe je bomen plant', 'Hij geeft de mening van de directeur', 'Hij vertelt hoe het idee voor het bos is ontstaan'], goed: 3, uitleg: 'Om de functie van een alinea te vinden, vraag je: wat voegt deze alinea toe aan het geheel? Alinea 2 vertelt waarom de kinderen een bos wilden (hitte, geen schaduw) en hoe ze het voor elkaar kregen. Dat is het ontstaan van het idee.' }
      ]
    },
    kort: [
      {
        titel: 'Spelregels kwartet',
        soort: 'Spelregel',
        tekst: [
          'Kwartet – voor 3 tot 6 spelers',
          'Doel: verzamel zoveel mogelijk kwartetten. Een kwartet is een set van vier kaarten die bij elkaar horen.',
          'Zo speel je: alle kaarten worden verdeeld. De jongste speler begint. Hij vraagt een andere speler om een kaart, maar alleen uit een set waarvan hij zelf al minstens één kaart heeft. Heeft de ander de kaart? Dan moet hij hem afgeven en mag de vrager nog een keer. Heeft de ander de kaart niet? Dan is hij zelf aan de beurt.',
          'Heb je een kwartet compleet, leg het dan open voor je neer.',
          'Winnaar: wie aan het eind de meeste kwartetten heeft.'
        ],
        vragen: [
          { vaardigheid: 'Klopt het?', vraag: 'Emre heeft geen enkele kaart uit de set "Dinosaurussen". Wat mag hij NIET doen?', opties: ['Een andere speler om een dinosauruskaart vragen', 'Een compleet kwartet neerleggen', 'Nog een keer vragen als hij een kaart krijgt', 'Een kaart afgeven als iemand erom vraagt'], goed: 0, uitleg: 'Bij spelregels let je op kleine woorden als "alleen" en "maar". Er staat dat je alleen mag vragen uit een set waarvan je zelf al een kaart hebt. Emre heeft er geen, dus hij mag er niet om vragen.' },
          { vaardigheid: 'Verwijswoord', vraag: 'In "Dan is hij zelf aan de beurt" verwijst "hij" naar ...', opties: ['de jongste speler', 'de speler aan wie om een kaart werd gevraagd', 'de speler die een kwartet heeft', 'de winnaar'], goed: 1, uitleg: 'Lees de zin vlak ervoor: "Heeft de ander de kaart niet?" Het gaat dus over de ander, de speler aan wie gevraagd werd. Zet "de ander" in plaats van "hij" en lees de zin opnieuw: dan klopt het.' }
        ]
      },
      {
        titel: 'Waarom bladeren verkleuren',
        soort: 'Informatief',
        tekst: [
          'In de zomer zijn de meeste bladeren groen. Dat komt door bladgroen, een stof die de boom nodig heeft om met zonlicht voedsel te maken. In de herfst worden de dagen korter en kouder. De boom stopt dan met het maken van bladgroen en breekt het af. Daardoor worden andere kleurstoffen zichtbaar die al die tijd in het blad zaten, zoals geel en oranje. Die werden in de zomer verborgen door het groen. Sommige bomen maken in de herfst bovendien een rode kleurstof aan.'
        ],
        vragen: [
          { vaardigheid: 'Signaalwoord', vraag: 'Het woord "Daardoor" laat zien dat er ...', opties: ['een tegenstelling komt', 'een voorbeeld komt', 'een gevolg komt', 'een tijdsvolgorde komt'], goed: 2, uitleg: '"Daardoor" is een signaalwoord van oorzaak en gevolg. De oorzaak staat ervoor (de boom breekt het bladgroen af), het gevolg staat erna (andere kleuren worden zichtbaar).' },
          { vaardigheid: 'Hoofdgedachte', vraag: 'Wat is de hoofdgedachte van deze tekst?', opties: ['Bomen hebben zonlicht nodig', 'Rode bladeren zijn het mooist', 'In de herfst worden de dagen korter', 'Bladeren verkleuren in de herfst doordat het groene bladgroen verdwijnt'], goed: 3, uitleg: 'De hoofdgedachte is het belangrijkste dat de hele tekst wil zeggen, in één zin. De andere antwoorden zijn details of staan niet in de tekst. De hele tekst legt uit waarom bladeren in de herfst van kleur veranderen.' }
        ]
      }
    ]
  },

  // ───────────── Dag 5 ─────────────
  {
    hardop: {
      titel: 'De laatste boei',
      soort: 'Verhalend',
      emoji: '⛵',
      alineas: [
        'Het water van het meer glinsterde in de zon. Bram trok het zeil strak en keek over zijn schouder. Achter hem zeilde Sophie, zijn beste vriendin en vandaag zijn grootste tegenstander. Nog één boei, dan was de finish.',
        '"Je haalt me toch niet in!" riep hij over het water. Sophie gaf geen antwoord. Ze zat laag in haar bootje en hield haar ogen strak op het zeil. Bram grinnikte en keek weer voor zich. Toen zag hij het: een windvlaag trok als een donkere streep over het water, recht op hem af.',
        'De boot helde ineens hard over. Bram greep de rand vast, maar het was te laat. Met een plons lag hij in het koude water, naast zijn omgeslagen bootje. Proestend kwam hij boven. Sophie had de vlaag ook gezien en had op tijd haar zeil gevierd. Ze zeilde rustig langs hem heen, maar draaide toen ineens bij.',
        '"Gaat het?" riep ze. Bram knikte en zwaaide dat ze door moest varen. Sophie aarzelde even, en zeilde toen naar de finish. Een kwartier later, met een handdoek om zijn schouders, kreeg Bram een beker warme chocolademelk in zijn handen gedrukt. "Van de winnaar," zei Sophie met een glimlach. Bram lachte terug. "Volgende keer kijk ik wat minder achterom."'
      ],
      vragen: [
        { vaardigheid: 'Tussen de regels', vraag: 'Waarom draait Sophie bij, terwijl ze Bram al voorbij is?', opties: ['Ze is de weg kwijt', 'Ze wil kijken of het goed gaat met Bram', 'Haar boot slaat ook bijna om', 'Ze wil Bram uitlachen'], goed: 1, uitleg: 'Het antwoord staat niet letterlijk in de tekst, maar je kunt het afleiden uit wat ze meteen daarna doet. Ze roept "Gaat het?". Daaruit blijkt dat ze stopte om te kijken of Bram in orde was.' },
        { vaardigheid: 'Beeldspraak', vraag: 'Een windvlaag trok "als een donkere streep over het water". Wat beschrijft de schrijver hiermee?', opties: ['Dat het ging regenen', 'Dat er een andere boot aankwam', 'Dat het water donkerder werd op de plek waar de harde wind eroverheen ging', 'Dat het avond werd'], goed: 2, uitleg: 'Beeldspraak helpt je iets voor je te zien. Waar een harde windvlaag over het water gaat, maakt die kleine golfjes en ziet het water er donkerder uit. Zo zag Bram de vlaag aankomen.' },
        { vaardigheid: 'Bedoeling', vraag: 'Wat bedoelt Bram als hij zegt: "Volgende keer kijk ik wat minder achterom"?', opties: ['Hij heeft geleerd dat hij beter op zijn eigen boot en de wind kan letten dan op zijn tegenstander', 'Hij wil voortaan achter Sophie varen', 'Hij vindt dat Sophie vals heeft gespeeld', 'Hij gaat nooit meer zeilen'], goed: 0, uitleg: 'Denk terug aan wat er misging. Bram was druk met Sophie: hij keek achterom en riep naar haar, en zag de windvlaag daardoor te laat. Met zijn grapje laat hij zien dat hij daarvan geleerd heeft.' }
      ]
    },
    kort: [
      {
        titel: 'Welkom op De Brede Heide',
        soort: 'Informatiebord',
        tekst: [
          'Welkom in natuurgebied De Brede Heide',
          'Open van zonsopgang tot zonsondergang.',
          'Honden zijn welkom, maar alleen aan de lijn. Van 15 maart tot 15 juli broeden er vogels op de grond. In die periode zijn honden niet toegestaan.',
          'Fietsen mag alleen op de rode fietspaden.',
          'Vuur maken en kamperen zijn verboden.',
          'Neem je afval mee naar huis. De natuur is geen prullenbak!',
          'Vragen? Spreek de boswachter aan bij het bezoekerscentrum.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Familie Jansen wil op 1 mei met hun hond wandelen op De Brede Heide. Mag dat?', opties: ['Ja, als de hond aan de lijn is', 'Ja, maar alleen op de rode fietspaden', 'Nee, in die periode zijn honden niet toegestaan', 'Nee, het gebied is in mei gesloten'], goed: 2, uitleg: 'Een bord geeft vaak eerst een algemene regel en daarna een uitzondering. De algemene regel is: honden aan de lijn. Maar 1 mei valt tussen 15 maart en 15 juli, en dan mogen honden er helemaal niet in.' },
          { vaardigheid: 'Tussen de regels', vraag: 'Waarom mogen honden in het voorjaar niet in het gebied?', opties: ['Omdat de paden dan te nat zijn', 'Omdat ze de vogels die op de grond broeden kunnen storen', 'Omdat de boswachter dan vrij is', 'Omdat er dan veel fietsers zijn'], goed: 1, uitleg: 'Soms staat de reden niet letterlijk bij een regel, maar wel vlak ervoor. Er staat dat er in die periode vogels op de grond broeden. Een hond kan die nesten verstoren, en dat is dus de reden.' }
        ]
      },
      {
        titel: 'Herfstwind',
        soort: 'Gedicht',
        tekst: [
          'De wind is een jongen die nooit stil kan zitten.',
          'Hij schopt de bladeren de straat over,',
          'hij trekt aan je muts en je sjaal',
          'en lacht door de kieren van het raam.',
          'Hij rammelt aan het hek van de buren,',
          'hij jaagt de wolken voor zich uit',
          'als schapen die te laat zijn voor de stal.',
          'Maar \'s avonds, als het donker wordt,',
          'kruipt hij moe tegen de schoorsteen aan',
          'en zingt hij zachtjes in zijn slaap.'
        ],
        vragen: [
          { vaardigheid: 'Beeldspraak', vraag: 'In het gedicht wordt de wind beschreven als ...', opties: ['een druk kind', 'een oude man', 'een boze hond', 'een herder'], goed: 0, uitleg: 'In een gedicht doet iets vaak alsof het een mens is. Kijk naar de eerste regel: "De wind is een jongen die nooit stil kan zitten." Alles wat de wind daarna doet, past bij een druk kind. De schapen gaan over de wolken, niet over de wind zelf.' },
          { vaardigheid: 'Signaalwoord', vraag: 'De laatste drie regels beginnen met "Maar". Wat verandert er daar?', opties: ['De wind wordt harder', 'Het gaat regenen', 'De wind gaat naar een andere stad', 'De wind wordt rustig en moe'], goed: 3, uitleg: '"Maar" is een signaalwoord van tegenstelling: wat erna komt, is anders dan wat ervoor kwam. Eerst is de wind druk en wild, daarna is hij moe en zingt hij zachtjes. Hij wordt dus rustiger.' }
        ]
      }
    ]
  },

  // ───────────── Dag 6 ─────────────
  {
    hardop: {
      titel: 'Laat school later beginnen',
      soort: 'Betoog',
      emoji: '⏰',
      alineas: [
        'Om half negen zit je in de klas, maar is je hoofd er ook al? Bij veel tieners niet. Toch beginnen bijna alle scholen in Nederland vroeg in de ochtend. Ik vind dat scholen voor oudere kinderen later moeten beginnen, bijvoorbeeld om tien uur.',
        'Mijn eerste argument is dat het lichaam van tieners anders werkt. Onderzoekers hebben ontdekt dat de biologische klok in de puberteit verschuift. Tieners worden \'s avonds pas later moe en zijn \'s ochtends dus ook later echt wakker. Ze zijn niet lui; hun lichaam is gewoon nog niet klaar om te leren.',
        'Daarnaast leer je beter als je goed uitgerust bent. Wie te weinig slaapt, kan zich slechter concentreren en onthoudt minder. Een later begin geeft leerlingen meer slaap, en dus betere lessen.',
        'Natuurlijk zijn er ook nadelen. Ouders moeten soms vroeg naar hun werk, en de school is later uit. Maar die problemen zijn op te lossen, bijvoorbeeld met een plek waar leerlingen \'s ochtends al rustig terechtkunnen. Daarom blijf ik erbij: laat de school later beginnen. Een uitgeslapen leerling is een betere leerling.'
      ],
      vragen: [
        { vaardigheid: 'Tekstdoel', vraag: 'Wat is het doel van deze tekst?', opties: ['De lezer uitleggen hoe slaap werkt', 'De lezer vertellen hoe laat scholen beginnen', 'De lezer vermaken met een verhaal over een luie leerling', 'De lezer overtuigen dat scholen later moeten beginnen'], goed: 3, uitleg: 'Een betoog herken je aan woorden als "ik vind", "mijn eerste argument" en "daarom". De schrijver geeft een mening en probeert je met argumenten mee te krijgen. Het doel is dus overtuigen.' },
        { vaardigheid: 'Alinea', vraag: 'Wat doet de schrijver in alinea 4?', opties: ['Hij noemt een tegenargument en weerlegt het', 'Hij geeft zijn eerste argument', 'Hij vertelt een grappig voorbeeld', 'Hij verandert van mening'], goed: 0, uitleg: 'Een sterk betoog noemt ook wat anderen ertegen kunnen zeggen, en laat dan zien waarom dat niet zo erg is. "Natuurlijk zijn er ook nadelen" is het tegenargument; met "Maar die problemen zijn op te lossen" weerlegt de schrijver het.' },
        { vaardigheid: 'Feit of mening', vraag: 'Welke zin is een mening?', opties: ['Onderzoekers hebben ontdekt dat de biologische klok in de puberteit verschuift.', 'Ouders moeten soms vroeg naar hun werk.', 'Een uitgeslapen leerling is een betere leerling.', 'Bijna alle scholen in Nederland beginnen vroeg in de ochtend.'], goed: 2, uitleg: 'Een feit kun je nagaan, een mening is wat de schrijver vindt. "Een betere leerling" is een oordeel: daar kun je het mee oneens zijn. Let ook op: de laatste zin van een betoog herhaalt vaak de mening, kort en krachtig.' }
      ]
    },
    kort: [
      {
        titel: 'Geen huiswerk in de vakantie!',
        soort: 'Mening van een lezer',
        tekst: [
          'Ik zit in groep 8 en ik vind dat we in de vakantie geen huiswerk moeten krijgen. Een vakantie is bedoeld om uit te rusten. Als je de hele week aan je rekenschrift moet denken, ben je niet echt vrij. Bovendien gaan veel kinderen op reis. Zij hebben geen tijd en vaak ook geen internet. Sommige mensen zeggen dat je zonder huiswerk alles vergeet. Dat geloof ik niet: na één week weet je echt nog wel hoe je een breuk uitrekent.',
          'Noor (11), Amersfoort'
        ],
        vragen: [
          { vaardigheid: 'Signaalwoord', vraag: 'Het woord "Bovendien" laat zien dat Noor ...', opties: ['nog een argument toevoegt', 'een tegenargument geeft', 'een conclusie trekt', 'een voorbeeld geeft'], goed: 0, uitleg: '"Bovendien" betekent "en daarnaast ook nog". Het is een signaalwoord van opsomming: er komt een extra argument bij. Noor noemde eerst het uitrusten en voegt daarna de kinderen toe die op reis gaan.' },
          { vaardigheid: 'Verwijswoord', vraag: 'In de zin "Zij hebben geen tijd" verwijst "Zij" naar ...', opties: ['sommige mensen', 'de leraren', 'de kinderen die op reis gaan', 'alle kinderen in groep 8'], goed: 2, uitleg: 'Een verwijswoord kijkt meestal terug naar de zin direct ervoor. Daar staat: "veel kinderen gaan op reis". Vervang "Zij" door "de kinderen die op reis gaan", en de zin klopt precies.' }
        ]
      },
      {
        titel: 'Zwembad De Golfslag',
        soort: 'Folder',
        tekst: [
          'Zwembad De Golfslag – openingstijden herfstvakantie',
          'Recreatief zwemmen (met glijbaan): elke dag van 13.00 tot 17.00 uur.',
          'Banenzwemmen: maandag tot en met vrijdag van 7.00 tot 9.00 uur.',
          'Golfslagbad: elk heel uur gaan de golven 15 minuten aan.',
          'Kinderen onder de 10 jaar alleen onder begeleiding van een volwassene.',
          'Kinderen zonder zwemdiploma A mogen niet in het diepe bad.',
          'Toegang: € 5,50 per persoon. Tienrittenkaart: € 45.'
        ],
        vragen: [
          { vaardigheid: 'Conclusie', vraag: 'Hoeveel geld bespaar je met een tienrittenkaart vergeleken met tien losse kaartjes?', opties: ['€ 5', '€ 0,50', '€ 55', '€ 10'], goed: 3, uitleg: 'Soms moet je met de informatie uit de tekst een beetje rekenen. Tien losse kaartjes kosten 10 × € 5,50 = € 55. De tienrittenkaart kost € 45, dus je bespaart € 10.' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Tim is 9 jaar en heeft zwemdiploma A. Hij wil alleen met een vriendje van 9 gaan zwemmen. Wat klopt?', opties: ['Dat mag, want hij heeft zijn diploma', 'Dat mag niet, want hij moet onder begeleiding van een volwassene', 'Dat mag alleen bij het banenzwemmen', 'Dat mag alleen als de golven uit staan'], goed: 1, uitleg: 'Lees de vraag goed: er zitten twee dingen in, zijn leeftijd en zijn diploma. Check dan alle regels. Zijn diploma is in orde, maar hij is jonger dan 10, dus hij moet met een volwassene komen.' }
        ]
      }
    ]
  },

  // ───────────── Dag 7 ─────────────
  {
    hardop: {
      titel: 'De Afsluitdijk',
      soort: 'Informatief',
      emoji: '🌊',
      alineas: [
        'Wie over de Afsluitdijk rijdt, ziet aan de ene kant de Waddenzee en aan de andere kant het IJsselmeer. Dat is bijzonder, want ruim honderd jaar geleden was dat allemaal één zee: de Zuiderzee. Die zee stak diep het land in en zorgde vaak voor problemen.',
        'Bij zware stormen stroomde het water van de Zuiderzee over de dijken. In 1916 ging het opnieuw mis en liep een groot gebied onder water. Na die overstroming besloot de regering dat er iets moest gebeuren. Ingenieur Cornelis Lely had al een plan bedacht: een lange dijk die de Zuiderzee zou afsluiten van de Waddenzee.',
        'In 1927 begon het werk. Duizenden arbeiders bouwden de dijk, vaak met de hand en met hulp van schepen die keileem en zand aanvoerden. Op 28 mei 1932 werd het laatste gat gedicht. De dijk werd ruim dertig kilometer lang.',
        'Doordat er geen zout zeewater meer binnenkwam, veranderde de Zuiderzee langzaam in een zoetwatermeer: het IJsselmeer. Het land eromheen was voortaan veel veiliger. Ook kon een deel van het meer worden drooggelegd, zodat er nieuw land ontstond, zoals de Noordoostpolder. Zo veranderde één dijk de kaart van Nederland.'
      ],
      vragen: [
        { vaardigheid: 'Hoofdgedachte', vraag: 'Wat is de hoofdgedachte van deze tekst?', opties: ['De Afsluitdijk maakte Nederland veiliger en veranderde de Zuiderzee in het IJsselmeer', 'Cornelis Lely was een slimme ingenieur', 'In 1916 was er een grote overstroming', 'De Noordoostpolder is nieuw land'], goed: 0, uitleg: 'De hoofdgedachte vat de hele tekst samen. De andere antwoorden kloppen wel, maar gaan maar over één alinea. Vraag jezelf: welk antwoord past bij alle alinea\'s samen?' },
        { vaardigheid: 'Opbouw', vraag: 'Hoe is deze tekst vooral opgebouwd?', opties: ['Als een rijtje voor- en nadelen', 'In de volgorde waarin het gebeurd is', 'Als een vergelijking tussen twee dijken', 'Als een mening met argumenten'], goed: 1, uitleg: 'Kijk naar de jaartallen: 1916, 1927, 1932. De schrijver vertelt de gebeurtenissen in de volgorde van de tijd: eerst het probleem, dan de bouw, dan het gevolg. Dat heet een chronologische opbouw.' },
        { vaardigheid: 'Conclusie', vraag: 'Wat kun je concluderen uit de laatste alinea?', opties: ['De Waddenzee is nu ook zoet', 'De dijk werd in 1916 gebouwd', 'Rond het IJsselmeer wonen geen mensen', 'Zonder de Afsluitdijk was de Noordoostpolder er waarschijnlijk niet gekomen'], goed: 3, uitleg: 'Een conclusie volgt logisch uit de tekst. Er staat dat er dankzij de dijk een deel van het meer kon worden drooggelegd, zoals de Noordoostpolder. Zonder dijk was dat dus waarschijnlijk niet gelukt.' }
      ]
    },
    kort: [
      {
        titel: 'De kist op zolder',
        soort: 'Verhaalfragment',
        tekst: [
          'Ilse duwde het luik open en klom de laatste treden op. Op de zolder van opa rook het naar stof en oud hout. Overal stonden dozen, en in de hoek stond een grote, houten kist. Op het deksel waren in sierlijke letters twee woorden geschilderd: "Niet openen". Ilse aarzelde. Ze hoorde opa beneden in de keuken fluiten. Ze knielde neer en streek met haar vinger over de letters. Toen pakte ze het koperen slot vast. Het was niet op slot.'
        ],
        vragen: [
          { vaardigheid: 'Bedoeling', vraag: 'Waarom vertelt de schrijver dat Ilse opa beneden hoort fluiten, vlak voordat ze het slot pakt?', opties: ['Om te laten zien dat opa vrolijk is', 'Om duidelijk te maken dat Ilse alleen is en niemand haar ziet', 'Om uit te leggen dat opa aan het koken is', 'Om te laten zien dat Ilse van muziek houdt'], goed: 1, uitleg: 'Een schrijver zet niet zomaar iets in een spannend moment. Op de kist staat "Niet openen" en Ilse aarzelt. Dat opa ver weg beneden is, maakt duidelijk dat niemand haar tegenhoudt. Zo wordt het nog spannender.' },
          { vaardigheid: 'Woordbetekenis', vraag: 'Wat zijn "sierlijke" letters?', opties: ['mooie, zwierig geschreven letters', 'heel kleine letters', 'rode letters', 'letters die bijna weg zijn'], goed: 0, uitleg: 'Denk aan woorden die erop lijken, zoals "sieraad" en "versieren". Die hebben met mooi maken te maken. Sierlijke letters zijn dus mooi, met zwierige lijnen geschreven.' }
        ]
      },
      {
        titel: 'Te koop: kinderfiets',
        soort: 'Advertentie',
        tekst: [
          'TE KOOP: kinderfiets, 26 inch, blauw',
          'Drie versnellingen, nieuwe banden (vorige maand vervangen).',
          'Kleine kras op het frame, verder in prima staat.',
          'Verlichting werkt op batterijen; die zitten er nog niet in.',
          'Te klein geworden voor onze zoon van 12. Er hoort een slot met twee sleutels bij.',
          'Vraagprijs: € 85. Bieden vanaf € 70.',
          'Ophalen in Deventer, wij versturen niet.',
          'Interesse? Stuur een berichtje naar Karin.'
        ],
        vragen: [
          { vaardigheid: 'Klopt het?', vraag: 'Welke uitspraak klopt NIET?', opties: ['De banden zijn nieuw', 'De fiets wordt niet opgestuurd', 'Je kunt de fiets kopen als je € 60 biedt', 'De verlichting heeft nog batterijen nodig'], goed: 2, uitleg: 'Check bij een "klopt niet"-vraag elk antwoord in de tekst. Bieden mag vanaf € 70. Een bod van € 60 is dus te laag; die uitspraak klopt niet.' },
          { vaardigheid: 'Woordbetekenis', vraag: 'Wat betekent "Vraagprijs"?', opties: ['De laagste prijs die je mag bieden', 'De prijs van een nieuwe fiets', 'De prijs voor het verzenden', 'De prijs die de verkoper graag wil krijgen'], goed: 3, uitleg: 'Knip een samengesteld woord in stukjes: vraag + prijs. Het is de prijs die de verkoper vraagt. Dat het niet de laagste prijs is, zie je aan de zin erna: bieden mag vanaf € 70.' }
        ]
      }
    ]
  },

  // ───────────── Dag 8 ─────────────
  {
    hardop: {
      titel: 'Bouw een insectenhotel',
      soort: 'Instructief',
      emoji: '🐝',
      alineas: [
        'Bijen en andere insecten hebben het in Nederland niet makkelijk. In nette tuinen met veel tegels vinden ze weinig plekken om te wonen. Met een insectenhotel help je ze een handje. Zo maak je er zelf een.',
        'Wat heb je nodig? Een houten kistje of een oud vogelhuisje zonder voorkant, holle stengels van bamboe of riet, een paar blokjes hard hout, dennenappels en een handboor. Vraag een volwassene om te helpen met zagen en boren.',
        'Stap 1: Zaag de holle stengels op de lengte van het kistje. Zorg dat de achterkant dicht is, want bijen willen een gang met maar één ingang. Stap 2: Boor gaatjes van verschillende groottes in de blokjes hout. Boor niet helemaal door het hout heen. Stap 3: Vul het kistje stevig op met de stengels, de blokjes en de dennenappels, zodat er niets uit kan vallen.',
        'Hang je hotel ten slotte op een zonnige, beschutte plek, het liefst op het zuiden en minstens een meter boven de grond. Dan heb je de meeste kans op gasten. Heb je geduld? In het voorjaar kun je zien hoe metselbijen de gaatjes dichtmaken met modder. Dan weet je: er is een nieuwe generatie bijen op komst.'
      ],
      vragen: [
        { vaardigheid: 'Tekstdoel', vraag: 'Wat wil de schrijver vooral met deze tekst?', opties: ['De lezer overtuigen dat tegels lelijk zijn', 'Vertellen hoeveel bijen er in Nederland zijn', 'De lezer uitleggen hoe je zelf een insectenhotel maakt', 'Een spannend verhaal over bijen vertellen'], goed: 2, uitleg: 'Een instructieve tekst leert je hoe je iets doet. Je herkent hem aan een lijstje "wat heb je nodig", genummerde stappen en zinnen die beginnen met een werkwoord, zoals "Boor" en "Vul".' },
        { vaardigheid: 'Alinea', vraag: 'Waarvoor dient alinea 1?', opties: ['Om de stappen uit te leggen', 'Om te vertellen waarom een insectenhotel nuttig is', 'Om te zeggen wat je nodig hebt', 'Om te vertellen waar je het hotel ophangt'], goed: 1, uitleg: 'De eerste alinea is vaak de inleiding. Hier vertelt de schrijver het probleem (insecten vinden weinig plekken om te wonen) en waarom je dus een hotel zou maken. Pas daarna komen de spullen en de stappen.' },
        { vaardigheid: 'Tussen de regels', vraag: 'Waarom moet je niet helemaal door het hout heen boren?', opties: ['Omdat je boor anders breekt', 'Omdat het hout dan te zwaar wordt', 'Omdat de dennenappels er anders uit vallen', 'Omdat bijen een gang willen met maar één ingang'], goed: 3, uitleg: 'De reden staat niet bij stap 2, maar wel een stap eerder: bijen willen een gang met maar één ingang. Combineer die twee stukjes: een gat dat helemaal door het hout gaat, heeft twee ingangen.' }
      ]
    },
    kort: [
      {
        titel: 'Zo plak je een lekke band',
        soort: 'Instructie',
        tekst: [
          '1. Haal de band met bandenlichters van de velg en trek de binnenband eruit.',
          '2. Pomp de binnenband een beetje op en houd hem in een bak water. Waar luchtbelletjes opstijgen, zit het gaatje.',
          '3. Droog de band af en maak de plek rond het gaatje ruw met schuurpapier.',
          '4. Smeer er een dun laagje solutie op en wacht een paar minuten tot het bijna droog is.',
          '5. Druk de plakker er stevig op.',
          '6. Voel aan de binnenkant van de buitenband: zit er nog een glassplinter of steentje in? Haal dat eruit.',
          '7. Leg alles terug en pomp de band op.'
        ],
        vragen: [
          { vaardigheid: 'Tussen de regels', vraag: 'Waarom moet je bij stap 6 de binnenkant van de buitenband controleren?', opties: ['Omdat de band anders meteen weer lek kan gaan', 'Om te kijken of de band de goede kleur heeft', 'Omdat de plakker anders niet blijft zitten', 'Om te zien of er genoeg lucht in zit'], goed: 0, uitleg: 'Denk na over de oorzaak van een lekke band: vaak is dat iets scherps. Zit dat glassplintertje er nog in, dan prikt het de geplakte band zo weer lek. Dat staat er niet letterlijk, maar je kunt het afleiden.' },
          { vaardigheid: 'Woordbetekenis', vraag: 'Wat is "solutie"?', opties: ['Een soort schuurpapier', 'Een gereedschap om de band van de velg te halen', 'Een soort lijm', 'Een fietspomp'], goed: 2, uitleg: 'Kijk wat je met het woord doet: je smeert het in een dun laagje op de band, laat het drogen en drukt er dan een plakker op. Iets wat je smeert zodat iets blijft plakken, is lijm.' }
        ]
      },
      {
        titel: 'Zeehond Maarten terug in zee',
        soort: 'Nieuwsbericht',
        tekst: [
          'LAUWERSOOG – Zeehond Maarten is gisteren weer in de Waddenzee losgelaten. Het jonge dier werd in juli verzwakt op het strand van Ameland gevonden. Hij woog toen maar 9 kilo. In een zeehondencentrum kreeg hij vis en medicijnen. Daar leerde hij ook zelf weer vis te vangen.',
          'Nu weegt Maarten bijna 30 kilo. Verzorgers droegen hem in een krat naar de waterkant. Na een paar tellen aarzelen gleed hij het water in. De toeschouwers klapten.'
        ],
        vragen: [
          { vaardigheid: 'Verwijswoord', vraag: 'In "Daar leerde hij ook zelf weer vis te vangen" verwijst "Daar" naar ...', opties: ['het strand van Ameland', 'de Waddenzee', 'de waterkant', 'het zeehondencentrum'], goed: 3, uitleg: '"Daar" wijst naar een plek die net genoemd is. In de zin ervoor staat: "In een zeehondencentrum kreeg hij vis en medicijnen." Lees de zin opnieuw met "In het zeehondencentrum" in plaats van "Daar", en je ziet dat het klopt.' },
          { vaardigheid: 'Woordbetekenis', vraag: 'Wat betekent "verzwakt" hier?', opties: ['slap en zonder kracht', 'heel jong', 'verdwaald', 'heel boos'], goed: 0, uitleg: 'In "verzwakt" zit het woord "zwak". Ook de rest van de tekst helpt: hij woog maar 9 kilo en kreeg medicijnen. Hij was dus slap en had weinig kracht.' }
        ]
      }
    ]
  },

  // ───────────── Dag 9 ─────────────
  {
    hardop: {
      titel: 'Een tekening zegt genoeg',
      soort: 'Verhalend',
      emoji: '✏️',
      alineas: [
        'Sinds maandag zat er een nieuwe jongen naast Fenna. Hij heette Tomasz en kwam uit Polen. Hij sprak nog maar een paar woorden Nederlands. In de pauze stond hij altijd bij het hek, met zijn handen diep in zijn zakken. Fenna merkte dat de anderen hem niet echt zagen staan.',
        'Op donderdag hadden ze tekenles. Fenna keek opzij en hield haar adem in. Tomasz tekende een draak, zo echt dat het leek alsof hij elk moment van het papier kon vliegen. Elke schub had een eigen schaduw. "Wauw," fluisterde ze. Tomasz keek verlegen op en schoof zijn papier een stukje naar haar toe.',
        'De volgende ochtend legde Fenna een leeg vel op zijn tafel. Ze tekende er een klein, scheef poppetje op en wees naar zichzelf. Toen wees ze naar het lege stuk ernaast. Tomasz begreep het meteen. Hij pakte een potlood en tekende naast haar poppetje een draak die het poppetje op zijn rug droeg.',
        'In de pauze stond Tomasz niet meer bij het hek. Hij zat met Fenna op een bankje, en om hen heen stond een kring kinderen. Iedereen wilde een eigen draak. Tomasz tekende en Fenna leerde hem ondertussen woorden. "Vleugel," zei ze, en ze wees. "Vleugel," herhaalde hij, en voor het eerst die week lachte hij hardop.'
      ],
      vragen: [
        { vaardigheid: 'Beeldspraak', vraag: 'Wat betekent het dat "de anderen hem niet echt zagen staan"?', opties: ['Het hek stond in de weg, zodat niemand hem kon zien', 'De anderen letten niet op hem en lieten hem alleen', 'De anderen hadden eigenlijk een bril nodig', 'Tomasz verstopte zich achter het hek'], goed: 1, uitleg: '"Iemand niet zien staan" is een uitdrukking; je moet hem niet letterlijk nemen. Het betekent dat je iemand negeert of niet bij de groep betrekt. Dat past bij Tomasz, die alleen bij het hek staat.' },
        { vaardigheid: 'Tussen de regels', vraag: 'Waarom tekent Fenna een poppetje en wijst ze naar het lege stuk ernaast?', opties: ['Ze nodigt Tomasz uit om samen een tekening te maken', 'Ze wil laten zien dat zij beter kan tekenen', 'Ze wil dat Tomasz haar tekening afmaakt omdat zij geen zin heeft', 'Ze wil hem het woord "papier" leren'], goed: 0, uitleg: 'Fenna en Tomasz spreken nog geen gemeenschappelijke taal, dus ze "praat" met een tekening. Het poppetje is zij zelf, het lege stuk is voor hem. Uit zijn reactie (hij begrijpt het meteen en tekent mee) zie je dat het een uitnodiging was.' },
        { vaardigheid: 'Hoofdgedachte', vraag: 'Wat is de kern van dit verhaal?', opties: ['Tomasz komt uit Polen en spreekt weinig Nederlands', 'Draken tekenen is heel moeilijk', 'Fenna leert Tomasz het woord "vleugel"', 'Tekenen helpt Tomasz om vrienden te maken, ook zonder dezelfde taal'], goed: 3, uitleg: 'Vergelijk het begin met het eind: eerst staat Tomasz alleen bij het hek, aan het eind zit hij in een kring kinderen en lacht hij. Wat zorgde voor die verandering? De tekeningen. Ook de titel wijst daarnaar.' }
      ]
    },
    kort: [
      {
        titel: 'Sterrenkijkavond',
        soort: 'Programma',
        tekst: [
          'Sterrenkijkavond – Volkssterrenwacht Orion',
          'Zaterdag 14 november',
          '19.00 uur: deuren open',
          '19.30 uur: lezing "Hoe ver weg zijn de sterren?" (zaal 1, duurt 45 minuten)',
          '19.30 uur: raketten bouwen voor kinderen (zaal 2)',
          '20.30 uur: kijken door de grote telescoop op het dak',
          '21.30 uur: einde',
          'Let op: bij bewolking kun je niet door de telescoop kijken. Er is dan een film in de planetariumzaal.',
          'Kaartjes: € 6, kinderen tot 12 jaar € 3.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Lieke wil naar de lezing én raketten bouwen. Kan dat?', opties: ['Ja, eerst de lezing en dan raketten bouwen', 'Nee, want ze beginnen op hetzelfde tijdstip', 'Ja, want ze zijn in dezelfde zaal', 'Nee, raketten bouwen is alleen voor volwassenen'], goed: 1, uitleg: 'Bij een programma kijk je naar de tijden die vooraan staan. De lezing en het raketten bouwen beginnen allebei om 19.30 uur, in verschillende zalen. Je kunt dus maar één van de twee kiezen.' },
          { vaardigheid: 'Conclusie', vraag: 'Het regent en de lucht is helemaal bewolkt. Wat gebeurt er waarschijnlijk om 20.30 uur?', opties: ['De avond wordt afgelast', 'Iedereen kijkt toch door de telescoop', 'Er wordt een film vertoond in de planetariumzaal', 'Er is een tweede lezing'], goed: 2, uitleg: 'Lees ook het "Let op"-stukje, daar staat vaak belangrijke informatie. Bij bewolking kan de telescoop niet gebruikt worden, en dan is er een film. Om 20.30 uur zie je dus een film.' }
        ]
      },
      {
        titel: 'De mol',
        soort: 'Informatief',
        tekst: [
          'Een mol leeft bijna zijn hele leven onder de grond. Hij graaft lange gangen met zijn brede voorpoten, die op schepjes lijken. De aarde die hij losmaakt, duwt hij naar boven. Zo ontstaan de bekende molshopen in het gras. Een mol ziet heel slecht, maar dat is geen probleem. Hij vindt zijn eten met zijn gevoelige snuit. Zijn lievelingskost is regenwormen. Soms vindt hij er meer dan hij op kan. Die bijt hij dan in hun kop, zodat ze niet meer weg kunnen kruipen, en hij bewaart ze in een voorraadkamer.'
        ],
        vragen: [
          { vaardigheid: 'Verwijswoord', vraag: 'In "Die bijt hij dan in hun kop" verwijst "Die" naar ...', opties: ['de molshopen', 'de voorpoten', 'de regenwormen die hij niet op kan', 'de gangen'], goed: 2, uitleg: 'Zoek in de zin ervoor naar iets dat een kop heeft en dat de mol kan bijten. Dat zijn de regenwormen die hij niet op kan. Vervang "Die" door "die extra regenwormen", en de zin is logisch.' },
          { vaardigheid: 'Signaalwoord', vraag: 'In de zin "Een mol ziet heel slecht, maar dat is geen probleem" staat het signaalwoord "maar". Wat laat dat zien?', opties: ['Een tegenstelling', 'Een oorzaak', 'Een opsomming', 'Een tijdsvolgorde'], goed: 0, uitleg: '"Maar" is een signaalwoord van tegenstelling. Je zou verwachten dat slecht zien een probleem is voor een dier, maar bij de mol is dat niet zo. Hij gebruikt zijn snuit in plaats van zijn ogen.' }
        ]
      }
    ]
  },

  // ───────────── Dag 10 ─────────────
  {
    hardop: {
      titel: 'De Elfstedentocht',
      soort: 'Informatief',
      emoji: '⛸️',
      alineas: [
        'Bijna elke Nederlander kent hem, maar de meeste kinderen hebben hem nog nooit meegemaakt: de Elfstedentocht. Het is een schaatstocht van ongeveer tweehonderd kilometer langs elf Friese steden, over bevroren meren, kanalen en vaarten.',
        'De eerste Elfstedentocht werd verreden in 1909. Sindsdien is de tocht maar vijftien keer gehouden. De laatste keer was in 1997. Dat komt doordat het ijs overal op de route minstens vijftien centimeter dik moet zijn. Daarvoor moet het een flinke tijd hard vriezen, en zulke winters zijn in Nederland zeldzaam geworden.',
        'Wie meedoet, start vroeg in de ochtend in Leeuwarden, als het nog donker is. Onderweg moeten de schaatsers in elke stad een stempel halen op hun stempelkaart. Zo kan de organisatie controleren dat niemand een stuk afsnijdt. Wie alle stempels heeft en op tijd terug is in Leeuwarden, krijgt het felbegeerde Elfstedenkruisje.',
        'Als bekend wordt dat het ijs dik genoeg is, raakt het hele land in de ban van de tocht. Er komen duizenden toeschouwers langs de route, en op televisie is de tocht urenlang te zien. Het is daarom meer dan een sportwedstrijd: het is een echt volksfeest.'
      ],
      vragen: [
        { vaardigheid: 'Woordbetekenis', vraag: 'Wat betekent "felbegeerde" in "het felbegeerde Elfstedenkruisje"?', opties: ['heel zware', 'glimmende', 'gouden', 'waar iedereen dolgraag naar verlangt'], goed: 3, uitleg: 'Knip een lastig woord in stukjes: fel + begeerd. "Begeren" betekent iets heel graag willen hebben, en "fel" maakt het nog sterker. Iets felbegeerds is dus iets waar iedereen dolgraag naar verlangt.' },
        { vaardigheid: 'Conclusie', vraag: 'Waarom is de Elfstedentocht na 1997 niet meer verreden, volgens de tekst?', opties: ['Omdat niemand meer wil schaatsen', 'Omdat het niet lang genoeg hard heeft gevroren', 'Omdat de route te lang is geworden', 'Omdat de stempelkaart is afgeschaft'], goed: 1, uitleg: 'Zoek de alinea waarin 1997 staat. Vlak daarna geeft "Dat komt doordat" de oorzaak: het ijs moet dik genoeg zijn, en daarvoor moet het lang hard vriezen. Zulke winters zijn er weinig.' },
        { vaardigheid: 'Bedoeling', vraag: 'Wat wil de schrijver in de laatste alinea duidelijk maken?', opties: ['Dat de tocht gevaarlijk is', 'Dat je de tocht beter op tv kunt kijken', 'Dat de tocht voor heel Nederland een groot feest is', 'Dat schaatsen een dure sport is'], goed: 2, uitleg: 'De laatste zin van een alinea vat vaak samen wat de schrijver bedoelt. Hier staat: "het is een echt volksfeest". De toeschouwers en de tv-uitzending zijn voorbeelden die dat ondersteunen.' }
      ]
    },
    kort: [
      {
        titel: 'Brief over de schommel',
        soort: 'Brief',
        tekst: [
          'Aan: gemeente Hoogerveld, afdeling Buitenruimte',
          'Beste meneer of mevrouw,',
          'Wij zijn de leerlingen van groep 8 van De Regenboog. Op het speelveldje aan de Kievitstraat staat al drie maanden een kapotte schommel. Er hangt een lint omheen, dus niemand kan erop. Kleine kinderen uit de buurt zijn daar erg teleurgesteld over. Wij vragen u om de schommel zo snel mogelijk te laten maken. Als het helpt, willen wij best een middag helpen met het opruimen van het veldje.',
          'Met vriendelijke groet,',
          'Groep 8 van De Regenboog'
        ],
        vragen: [
          { vaardigheid: 'Hoofdgedachte', vraag: 'Wat willen de kinderen vooral met deze brief?', opties: ['Dat het veldje wordt opgeruimd', 'Dat de schommel gerepareerd wordt', 'Dat er een lint om de schommel komt', 'Dat kleine kinderen niet meer op het veldje spelen'], goed: 1, uitleg: 'Bij een brief zoek je de zin waarin de schrijver vraagt wat hij wil. Hier is dat: "Wij vragen u om de schommel zo snel mogelijk te laten maken." Het opruimen is alleen een aanbod om te helpen.' },
          { vaardigheid: 'Verwijswoord', vraag: 'In "Kleine kinderen uit de buurt zijn daar erg teleurgesteld over" verwijst "daar" naar ...', opties: ['het lint', 'de leerlingen van groep 8', 'dat de schommel al maanden kapot is en niemand erop kan', 'de gemeente'], goed: 2, uitleg: 'Een verwijswoord kan ook naar een hele situatie verwijzen, niet alleen naar één woord. Lees de zinnen ervoor: de schommel is al drie maanden kapot en niemand kan erop. Daarover zijn de kinderen teleurgesteld.' }
        ]
      },
      {
        titel: 'Hoe ontstaat een regenboog?',
        soort: 'Informatief',
        tekst: [
          'Een regenboog zie je alleen als de zon schijnt terwijl het ergens regent. Bovendien moet je met je rug naar de zon staan. Zonlicht lijkt wit, maar het bestaat eigenlijk uit allerlei kleuren. Als het licht door een regendruppel gaat, buigt het af. Elke kleur buigt een beetje anders. Daardoor wordt het licht uit elkaar gehaald in rood, oranje, geel, groen, blauw en paars. Miljoenen druppels samen vormen zo een grote, gekleurde boog. Rood zit altijd aan de buitenkant van de boog.'
        ],
        vragen: [
          { vaardigheid: 'Conclusie', vraag: 'Het is eind van de middag. De zon staat in het westen en in het oosten regent het. Welke kant moet je op kijken om een regenboog te zien?', opties: ['Naar het oosten', 'Naar het westen', 'Recht omhoog', 'Naar het zuiden'], goed: 0, uitleg: 'Pas de informatie uit de tekst toe op de nieuwe situatie. Je moet met je rug naar de zon staan, en de zon staat in het westen. Dan kijk je naar het oosten, en daar regent het ook.' },
          { vaardigheid: 'Klopt het?', vraag: 'Welke zin klopt NIET volgens de tekst?', opties: ['Zonlicht bestaat uit verschillende kleuren', 'Je ziet een regenboog als de zon schijnt en het ergens regent', 'Elke kleur buigt anders af in een druppel', 'Rood zit altijd aan de binnenkant van de boog'], goed: 3, uitleg: 'Lees zulke zinnen heel precies: één woord kan het verschil maken. In de tekst staat dat rood aan de buitenkant zit, niet aan de binnenkant. Zet je vinger bij elke zin en zoek hem op in de tekst.' }
        ]
      }
    ]
  },

  // ───────────── Dag 11 ─────────────
  {
    hardop: {
      titel: 'Laat kinderen zelf fietsen',
      soort: 'Betoog',
      emoji: '🚲',
      alineas: [
        'Elke ochtend is het rond school een chaos. Auto\'s staan dubbel geparkeerd, portieren zwaaien open en kinderen zigzaggen tussen de bumpers door. Veel ouders brengen hun kind met de auto, omdat ze denken dat dat veiliger is. Ik denk dat het juist andersom is: kinderen in groep 7 en 8 kunnen prima zelf naar school fietsen.',
        'In de eerste plaats leer je het verkeer pas echt kennen als je er zelf aan meedoet. Volgend jaar fietsen de meeste brugklassers zelf naar hun nieuwe school, vaak een heel stuk verder weg. Wie nu al oefent op een korte, bekende route, is beter voorbereid.',
        'Ten tweede is fietsen gezond. Je beweegt al voordat de eerste les begint, en wie beweegt, is vaak frisser in zijn hoofd. Bovendien staan er minder auto\'s bij school als meer kinderen fietsen. Daardoor wordt het juist veiliger voor iedereen.',
        'Sommige ouders zijn bang dat er iets gebeurt. Die zorg is begrijpelijk. Maar je kunt de route eerst een paar keer samen fietsen en afspraken maken over waar je oversteekt. Kortom: geef kinderen het vertrouwen. Een kind dat zelf mag fietsen, groeit daarvan.'
      ],
      vragen: [
        { vaardigheid: 'Hoofdgedachte', vraag: 'Wat is het standpunt van de schrijver?', opties: ['Ouders moeten hun kinderen met de auto brengen', 'Kinderen in groep 7 en 8 kunnen prima zelf naar school fietsen', 'Het verkeer rond school is gevaarlijk', 'Fietsen is gezond'], goed: 1, uitleg: 'Het standpunt is de mening waar het hele betoog om draait. Je vindt het vaak aan het eind van de eerste alinea, na woorden als "ik denk" of "ik vind". "Fietsen is gezond" is maar één argument dat dat standpunt ondersteunt.' },
        { vaardigheid: 'Bedoeling', vraag: 'Waarom beschrijft de schrijver in de eerste alinea de chaos bij school?', opties: ['Om te laten zien dat al die auto\'s het juist onveilig maken', 'Om de lezer aan het lachen te maken', 'Om te laten zien dat de school slecht georganiseerd is', 'Om uit te leggen hoe je goed parkeert'], goed: 0, uitleg: 'Een schrijver kiest een begin niet zomaar. De chaos met auto\'s laat zien dat juist al die auto\'s het gevaarlijk maken. Zo bereidt hij je voor op zijn standpunt dat het "juist andersom" is.' },
        { vaardigheid: 'Signaalwoord', vraag: 'Met welk signaalwoord laat de schrijver zien dat hij gaat afronden met een conclusie?', opties: ['Maar', 'Ten tweede', 'Bovendien', 'Kortom'], goed: 3, uitleg: 'Signaalwoorden laten de opbouw van een tekst zien. "Ten tweede" en "Bovendien" kondigen een extra argument aan, "Maar" een tegenstelling. "Kortom" betekent "samengevat", en dat zie je bijna altijd vlak voor de conclusie.' }
      ]
    },
    kort: [
      {
        titel: 'Afvalwijzer',
        soort: 'Folder',
        tekst: [
          'Afvalwijzer gemeente Hoogerveld',
          'Groene bak (gft): groente- en fruitresten, etensresten, koffiedik, theezakjes, bladeren en gras.',
          'Oranje bak (pmd): plastic verpakkingen, blikjes en drinkpakken. Maak ze leeg, maar uitspoelen is niet nodig.',
          'Papiercontainer: kranten, tijdschriften en schone kartonnen dozen. Pizzadozen met vet of kaas horen bij het restafval.',
          'Grijze bak (restafval): alles wat nergens anders in mag, zoals luiers en stofzuigerzakken.',
          'Batterijen nooit in een bak! Lever ze in bij de supermarkt.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Waar gooi je een vette pizzadoos weg?', opties: ['In de papiercontainer', 'In de grijze bak', 'In de oranje bak', 'In de groene bak'], goed: 1, uitleg: 'Je zou eerst aan de papiercontainer denken, want een pizzadoos is van karton. Maar lees die regel helemaal uit: er staat een uitzondering voor pizzadozen met vet. Die horen bij het restafval, en dat is de grijze bak.' },
          { vaardigheid: 'Woordbetekenis', vraag: 'Wat betekent "uitspoelen" hier?', opties: ['Met water schoonmaken', 'Plat maken', 'In stukken knippen', 'Terugbrengen naar de winkel'], goed: 0, uitleg: '"Spoelen" heeft met water te maken; denk aan "doorspoelen" of "afspoelen". In de zin staat: "Maak ze leeg, maar uitspoelen is niet nodig." Je hoeft de verpakking dus niet nog met water schoon te maken.' }
        ]
      },
      {
        titel: 'Gamen is ook leren',
        soort: 'Mening van een lezer',
        tekst: [
          'Volwassenen klagen vaak dat kinderen te veel gamen. Ik ben het daar niet helemaal mee eens. Bij veel spellen moet je samenwerken, plannen en snel beslissen. In mijn favoriete bouwspel heb ik zelfs geleerd hoe een stroomkring werkt. Natuurlijk moet je niet de hele dag achter een scherm zitten. Ik heb met mijn ouders afgesproken dat ik eerst buiten speel of huiswerk maak. Daarna mag ik een uur gamen. Zo heb ik het beste van twee werelden.',
          'Sem (12), Leiden'
        ],
        vragen: [
          { vaardigheid: 'Hoofdgedachte', vraag: 'Wat vindt Sem?', opties: ['Kinderen moeten zoveel gamen als ze willen', 'Buiten spelen is altijd beter dan gamen', 'Gamen kan leerzaam zijn, als je er goede afspraken over maakt', 'Volwassenen moeten ook meer gamen'], goed: 2, uitleg: 'De mening van een schrijver zie je vaak aan het begin én aan het eind. Sem is het "niet helemaal eens" met de klachten, maar zegt ook dat je niet de hele dag moet gamen. Het goede antwoord past bij allebei die stukken.' },
          { vaardigheid: 'Woordbetekenis', vraag: 'Wat bedoelt Sem met "het beste van twee werelden"?', opties: ['Dat hij in twee landen woont', 'Dat hij twee spellen tegelijk speelt', 'Dat hij de beste gamer van de klas is', 'Dat hij de goede kanten van twee dingen combineert'], goed: 3, uitleg: 'Een uitdrukking moet je niet letterlijk nemen. Kijk naar wat ervoor staat: Sem speelt buiten of maakt huiswerk, en gamet daarna. Hij heeft dus van allebei de goede en leuke kanten.' }
        ]
      }
    ]
  },

  // ───────────── Dag 12 ─────────────
  {
    hardop: {
      titel: 'Eerst de flits, dan de knal',
      soort: 'Informatief',
      emoji: '⚡',
      alineas: [
        'Een felle flits, en even later een harde knal. Bij onweer zie je de bliksem altijd eerst en hoor je de donder pas daarna. Toch ontstaan ze precies tegelijk. Hoe kan dat?',
        'Bliksem is een enorme elektrische vonk tussen een wolk en de grond, of tussen twee wolken. Die vonk verhit de lucht eromheen in een fractie van een seconde tot wel dertigduizend graden. Door die hitte zet de lucht razendsnel uit. Dat veroorzaakt een schokgolf, en die hoor je als donder.',
        'Het verschil zit in de snelheid. Licht gaat zo snel dat je de flits vrijwel meteen ziet, ook al is hij kilometers ver weg. Geluid is veel trager: het legt ongeveer een kilometer af in drie seconden. Hoe verder weg het onweer is, hoe langer je dus op de donder moet wachten.',
        'Daar kun je handig gebruik van maken. Tel na een flits de seconden tot je de donder hoort en deel dat getal door drie. Dan weet je ongeveer hoeveel kilometer het onweer van je af is. Hoor je de donder bijna meteen? Dan is het onweer heel dichtbij. Ga dan snel naar binnen, en blijf weg van open velden en hoge, losse bomen.'
      ],
      vragen: [
        { vaardigheid: 'Alinea', vraag: 'Wat is de functie van alinea 1?', opties: ['Hij stelt een vraag die de rest van de tekst beantwoordt', 'Hij geeft meteen het hele antwoord', 'Hij geeft een veiligheidstip', 'Hij vertelt hoe heet bliksem is'], goed: 0, uitleg: 'Een inleiding wil je nieuwsgierig maken. Deze alinea eindigt met "Hoe kan dat?" De volgende alinea\'s geven stap voor stap het antwoord op die vraag.' },
        { vaardigheid: 'Conclusie', vraag: 'Je telt twaalf seconden tussen de flits en de donder. Hoe ver weg is het onweer ongeveer?', opties: ['12 kilometer', '36 kilometer', '4 kilometer', '3 kilometer'], goed: 2, uitleg: 'Gebruik de regel uit de laatste alinea: het aantal seconden gedeeld door drie. Twaalf gedeeld door drie is vier, dus het onweer is ongeveer vier kilometer van je af.' },
        { vaardigheid: 'Tussen de regels', vraag: 'Waarom hoor je de donder bijna meteen als het onweer heel dichtbij is?', opties: ['Omdat de bliksem dan sterker is', 'Omdat het geluid dan maar een kort stukje hoeft af te leggen', 'Omdat licht dan langzamer gaat', 'Omdat de lucht dan minder heet wordt'], goed: 1, uitleg: 'Dit staat niet letterlijk in de tekst, maar je kunt het afleiden uit alinea 3: geluid heeft tijd nodig om een afstand af te leggen. Is het onweer dichtbij, dan is de afstand kort en is het geluid er dus snel.' }
      ]
    },
    kort: [
      {
        titel: 'Doe mee met de Boekenbende!',
        soort: 'Poster',
        tekst: [
          'Doe mee met de Boekenbende!',
          'Lees jij graag en ben je tussen de 10 en 13 jaar? Kom dan naar de Boekenbende in de bibliotheek.',
          'Wanneer: elke eerste woensdag van de maand, van 14.00 tot 15.30 uur.',
          'Wat doen we: we praten over een boek dat iedereen gelezen heeft, doen quizjes en kiezen samen het volgende boek.',
          'Je krijgt het boek van tevoren gratis te leen.',
          'Aanmelden: bij de balie van de bibliotheek. Vol = vol: er kunnen maximaal 12 kinderen meedoen.'
        ],
        vragen: [
          { vaardigheid: 'Woordbetekenis', vraag: 'Wat betekent "Vol = vol" op deze poster?', opties: ['Dat de zaal altijd vol zit', 'Dat je je snel moet aanmelden, want als er 12 kinderen zijn, kan niemand meer meedoen', 'Dat je een volle tas boeken moet meenemen', 'Dat het boek heel dik is'], goed: 1, uitleg: 'Een korte uitdrukking op een poster begrijp je door naar de rest van de zin te kijken. Er staat: maximaal 12 kinderen. Als die plekken vol zijn, kun je er niet meer bij. Snel aanmelden dus!' },
          { vaardigheid: 'Informatie zoeken', vraag: 'Ravi is 9 jaar en leest heel graag. Mag hij meedoen?', opties: ['Ja, als hij zich op tijd aanmeldt', 'Ja, maar alleen op woensdag', 'Nee, hij is te jong', 'Nee, hij moet eerst een boek kopen'], goed: 2, uitleg: 'Lees de voorwaarden goed: voor wie is de club? Voor kinderen tussen de 10 en 13 jaar. Ravi is 9, dus hij is net te jong, hoe graag hij ook leest.' }
        ]
      },
      {
        titel: 'Het laatste kwartier',
        soort: 'Verhaalfragment',
        tekst: [
          'De klok in het lokaal tikte luider dan ooit. Nog vijftien minuten. Mees staarde naar de laatste opgave van de toets en voelde zijn hoofd leeg worden, alsof iemand de stekker eruit had getrokken. Hij legde zijn pen neer en haalde diep adem, zoals juf Meryem had geleerd: vier tellen in, vier tellen vast, vier tellen uit. Langzaam kwamen de getallen weer terug. Hij pakte zijn pen. Deze som had hij gisteren nog met papa geoefend.'
        ],
        vragen: [
          { vaardigheid: 'Beeldspraak', vraag: '"Alsof iemand de stekker eruit had getrokken" betekent dat Mees ...', opties: ['even helemaal niet meer kon nadenken', 'geen stroom had in het lokaal', 'moe was van het sporten', 'zijn rekenmachine kwijt was'], goed: 0, uitleg: 'Bij een vergelijking met "alsof" zoek je wat de twee dingen gemeen hebben. Trek je de stekker uit een apparaat, dan doet het niets meer. Zo voelde het hoofd van Mees: leeg, hij kon even niet meer nadenken.' },
          { vaardigheid: 'Conclusie', vraag: 'Wat kun je uit de laatste zinnen opmaken?', opties: ['Mees geeft de toets op', 'Mees vraagt de juf om hulp', 'Mees heeft de som met papa fout geoefend', 'Mees krijgt weer vertrouwen dat hij de som kan maken'], goed: 3, uitleg: 'Let op wat Mees doet en denkt: hij pakt zijn pen weer en herinnert zich dat hij deze som geoefend heeft. Er staat niet "hij voelde zich zeker", maar je kunt het concluderen uit wat hij doet.' }
        ]
      }
    ]
  },

  // ───────────── Dag 13 ─────────────
  {
    hardop: {
      titel: 'De duif van opa',
      soort: 'Verhalend',
      emoji: '🕊️',
      alineas: [
        'Opa Henk had zijn hele leven postduiven gehouden. Toen hij vorig jaar naar een verzorgingshuis verhuisde, gaf hij al zijn duiven weg, op één na. "Zilver blijft bij jou," had hij tegen Jip gezegd. "Hij weet de weg beter dan wij allebei."',
        'Jip begreep er eerst niets van. Wat moest hij met een duif? Maar elke ochtend voor school liet hij Zilver uit het hok, en elke ochtend draaide de duif een paar rondjes boven de daken en kwam dan keurig terug. Langzaam begon Jip zich op dat moment te verheugen. Hij leerde hoe je het hok schoonhoudt en welke zaden Zilver het lekkerst vond.',
        'Op een zaterdag nam Jip het reismandje mee in de bus. Op de kamer van opa zette hij het op tafel. Opa\'s ogen begonnen te glimmen toen hij de duif zag. "Laat hem maar gaan," zei hij zacht. Jip opende het raam en Zilver schoot naar buiten, draaide steeds hogere rondjes en verdween toen in de richting van de stad.',
        'Een uur later, toen Jip thuiskwam, zat Zilver al op de plank voor het hok. Jip pakte zijn telefoon en belde opa. "Hij is er al," zei hij. Aan de andere kant bleef het even stil. Toen hoorde Jip opa lachen. "Zie je wel," zei opa. "Hij weet altijd waar thuis is. Net als jij."'
      ],
      vragen: [
        { vaardigheid: 'Tussen de regels', vraag: 'Hoe verandert Jips gevoel over Zilver in alinea 2?', opties: ['Eerst vindt hij de duif eng, later grappig', 'Eerst snapt hij niet wat hij ermee moet, later wordt de duif belangrijk voor hem', 'Eerst vindt hij de duif leuk, later saai', 'Hij vindt de duif de hele tijd lastig'], goed: 1, uitleg: 'Let op woorden die een verandering aangeven, zoals "eerst", "Maar" en "Langzaam". In het begin begrijpt Jip er niets van, maar daarna verheugt hij zich op het moment en leert hij hoe hij voor Zilver zorgt.' },
        { vaardigheid: 'Beeldspraak', vraag: '"Opa\'s ogen begonnen te glimmen." Wat betekent dat?', opties: ['Opa werd blij en enthousiast', 'Opa moest huilen van verdriet', 'Opa had een nieuwe bril op', 'Opa werd moe'], goed: 0, uitleg: 'Glimmende ogen is een uitdrukking voor blijdschap of enthousiasme. Het past ook bij wat er gebeurt: opa ziet zijn geliefde duif terug. Verdriet past niet, want daarna zegt hij rustig dat Jip hem mag loslaten.' },
        { vaardigheid: 'Hoofdgedachte', vraag: 'Wat is de kern van dit verhaal?', opties: ['Postduiven kunnen heel snel vliegen', 'Jip neemt op zaterdag de bus naar opa', 'Duiven moet je elke dag laten vliegen', 'Een duif verbindt Jip en opa, ook nu opa ergens anders woont'], goed: 3, uitleg: 'Vraag jezelf af: waar draait het verhaal echt om? De duif is belangrijk, maar het gaat om Jip en opa: Jip zorgt voor opa\'s duif, ze delen samen het moment en lachen aan de telefoon. De andere antwoorden zijn details.' }
      ]
    },
    kort: [
      {
        titel: 'Eb en vloed',
        soort: 'Informatief',
        tekst: [
          'Wie een dag aan het strand ligt, merkt dat de zee niet stil blijft liggen. Een paar uur lang komt het water steeds hoger: dat heet vloed. Daarna zakt het weer: dat is eb. Dat komt vooral door de maan. Die trekt met haar zwaartekracht aan het water van de aarde. Aan de kant van de aarde die naar de maan gericht is, ontstaat zo een bult water. Ook aan de andere kant van de aarde ontstaat zo\'n bult. Omdat de aarde draait, krijgt de kust ongeveer twee keer per dag hoogwater en twee keer laagwater.'
        ],
        vragen: [
          { vaardigheid: 'Verwijswoord', vraag: 'In "Die trekt met haar zwaartekracht aan het water" verwijst "Die" naar ...', opties: ['de zee', 'de maan', 'de vloed', 'de aarde'], goed: 1, uitleg: 'Een verwijswoord verwijst meestal naar iets dat net genoemd is en dat logisch past. De zin ervoor eindigt met "door de maan". Lees maar: "De maan trekt met haar zwaartekracht aan het water." Dat klopt, en ook "haar" past bij de maan.' },
          { vaardigheid: 'Woordbetekenis', vraag: 'Wat is "eb"?', opties: ['Het moment dat het water het hoogst staat', 'Een bult water aan de kant van de maan', 'De tijd waarin het water zakt', 'Een storm op zee'], goed: 2, uitleg: 'Moeilijke woorden worden in informatieve teksten vaak meteen uitgelegd. Kijk naar de zin met "eb": "Daarna zakt het weer: dat is eb." De dubbele punt laat zien dat de uitleg erbij staat.' }
        ]
      },
      {
        titel: 'Hondenuitlater gezocht',
        soort: 'Prikbordbericht',
        tekst: [
          'GEZOCHT: hondenuitlater voor Bobbie',
          'Wij zoeken een betrouwbare jongen of meisje (vanaf 11 jaar) die onze hond Bobbie wil uitlaten.',
          'Bobbie is een rustige labrador van 8 jaar. Hij trekt niet aan de lijn en is gek op kinderen.',
          'Wanneer: maandag, woensdag en vrijdag na schooltijd, ongeveer 30 minuten.',
          'Vergoeding: € 3 per keer.',
          'Je moet wel in de buurt van de Merelstraat wonen.',
          'Interesse? Bel aan op nummer 14 en vraag naar Ellen.'
        ],
        vragen: [
          { vaardigheid: 'Conclusie', vraag: 'Hoeveel verdien je in één week als je Bobbie elke afgesproken keer uitlaat?', opties: ['€ 3', '€ 6', '€ 9', '€ 15'], goed: 2, uitleg: 'Zoek eerst hoe vaak per week het is: maandag, woensdag en vrijdag, dus drie keer. Dan reken je: 3 × € 3 = € 9. Bij zulke vragen moet je bijna altijd twee stukjes informatie combineren.' },
          { vaardigheid: 'Woordbetekenis', vraag: 'Wat betekent "betrouwbare" in deze tekst?', opties: ['iemand op wie je kunt rekenen', 'iemand die heel sterk is', 'iemand die veel van honden weet', 'iemand die dichtbij woont'], goed: 0, uitleg: 'In "betrouwbaar" zit "vertrouwen". Ellen zoekt iemand die zich aan de afspraken houdt en goed voor Bobbie zorgt. Dat je dichtbij moet wonen, wordt apart genoemd, verderop in de tekst.' }
        ]
      }
    ]
  },

  // ───────────── Dag 14 ─────────────
  {
    hardop: {
      titel: 'Boeren onder de grond',
      soort: 'Informatief',
      emoji: '🐜',
      alineas: [
        'De mens is niet de enige soort die aan landbouw doet. In de regenwouden van Midden- en Zuid-Amerika leven bladsnijdersmieren, en die zijn al miljoenen jaren boer. Toch eten ze de bladeren die ze verzamelen niet zelf.',
        'Met hun scherpe kaken knippen de mieren stukjes uit bladeren. Die stukjes zijn vaak groter dan de mier zelf. In lange rijen sjouwen ze hun buit naar het nest onder de grond. Daar worden de bladeren door kleinere mieren fijngekauwd tot een soort brij. Op die brij kweken de mieren een schimmel. Die schimmel is hun voedsel.',
        'Net als een echte boer zorgen de mieren goed voor hun "akker". Ze halen ongewenste schimmels weg en houden de tuin schoon. Op hun lichaam leven bovendien bacteriën die een soort medicijn maken tegen schimmels die de oogst kunnen bederven. Zo beschermen ze hun voedselvoorraad.',
        'Een kolonie kan uit miljoenen mieren bestaan, en elke mier heeft een eigen taak: knippen, sjouwen, kauwen, verzorgen of bewaken. Geen enkele mier zou alleen kunnen overleven. Juist door die samenwerking is een nest van bladsnijdersmieren een van de ingewikkeldste samenlevingen in de dierenwereld.'
      ],
      vragen: [
        { vaardigheid: 'Hoofdgedachte', vraag: 'Wat is de hoofdgedachte van deze tekst?', opties: ['Bladsnijdersmieren eten bladeren', 'Mieren leven in regenwouden', 'Schimmels zijn gevaarlijk voor mieren', 'Bladsnijdersmieren kweken als echte boeren hun eigen voedsel en werken daarbij goed samen'], goed: 3, uitleg: 'Bij een moeilijkere tekst helpt het om van elke alinea in een paar woorden op te schrijven waar hij over gaat: boeren, schimmel kweken, akker verzorgen, samenwerken. De hoofdgedachte is het antwoord dat al die stukjes samen dekt. Let op: "eten bladeren" spreekt de tekst juist tegen.' },
        { vaardigheid: 'Beeldspraak', vraag: 'De schrijver zet het woord "akker" tussen aanhalingstekens. Waarom?', opties: ['Omdat iemand dat woord letterlijk zegt', 'Omdat het geen echte akker is, maar de schimmeltuin van de mieren', 'Omdat het een moeilijk woord is', 'Omdat het een Engels woord is'], goed: 1, uitleg: 'Aanhalingstekens rond één woord betekenen vaak: dit is niet letterlijk bedoeld. De mieren hebben geen echte akker met gewassen, maar hun schimmeltuin lijkt daarop. De schrijver vergelijkt de mieren de hele tekst met boeren.' },
        { vaardigheid: 'Conclusie', vraag: 'Wat zou er waarschijnlijk gebeuren als de bacteriën op het lichaam van de mieren verdwenen?', opties: ['De schimmeltuin zou makkelijker door ongewenste schimmels worden aangetast', 'De mieren zouden geen bladeren meer kunnen knippen', 'De mieren zouden zelf bladeren gaan eten', 'De kolonie zou groter worden'], goed: 0, uitleg: 'Zoek op wat de bacteriën doen: ze maken een soort medicijn tegen schimmels die de oogst bederven. Als ze er niet meer zijn, valt die bescherming weg. Dan is de kans groter dat de schimmeltuin ziek wordt.' }
      ]
    },
    kort: [
      {
        titel: 'Buslijn 12',
        soort: 'Dienstregeling',
        tekst: [
          'Buslijn 12: Station – Ziekenhuis – Sportpark – Dorpsplein',
          'Vertrek bij het Station (maandag tot en met vrijdag): 7.05, 7.35, 8.05, 8.35 en daarna elk half uur tot 18.35 uur.',
          'Rijtijden vanaf het Station: Ziekenhuis 8 minuten, Sportpark 15 minuten, Dorpsplein 22 minuten.',
          'Zaterdag: elk uur, van 8.05 tot 18.05 uur.',
          'Zondag: geen busdienst.',
          'Let op: wegens werkzaamheden rijdt lijn 12 van 26 oktober tot en met 6 november niet langs het Sportpark. Gebruik dan de halte Ziekenhuis.'
        ],
        vragen: [
          { vaardigheid: 'Informatie zoeken', vraag: 'Je neemt op dinsdag de bus van 8.05 uur bij het Station naar het Dorpsplein. Hoe laat ben je er?', opties: ['8.13 uur', '8.20 uur', '8.27 uur', '8.35 uur'], goed: 2, uitleg: 'Zoek bij de rijtijden hoe lang de bus over het hele stuk doet: 22 minuten naar het Dorpsplein. Tel dat op bij de vertrektijd: 8.05 uur + 22 minuten = 8.27 uur.' },
          { vaardigheid: 'Conclusie', vraag: 'Fleur wil op woensdag 28 oktober met lijn 12 naar het Sportpark. Wat moet ze doen?', opties: ['Uitstappen bij de halte Ziekenhuis', 'Gewoon uitstappen bij het Sportpark', 'Op zondag gaan', 'Tot het Dorpsplein blijven zitten'], goed: 0, uitleg: 'Lees altijd het "Let op"-stukje onderaan, want dat kan alles veranderen. 28 oktober valt in de periode van de werkzaamheden. De bus stopt dan niet bij het Sportpark, en de tekst zegt dat je dan de halte Ziekenhuis gebruikt.' }
        ]
      },
      {
        titel: 'Waarom is de zee zout?',
        soort: 'Informatief',
        tekst: [
          'Regenwater is zoet, en toch is de zee zout. Hoe zit dat? Als het regent, stroomt het water over rotsen en door de bodem naar de rivieren. Onderweg lost het kleine beetjes zout op uit de stenen. Rivieren voeren dat zout mee naar zee. Daar verdampt het water door de warmte van de zon, maar het zout blijft achter. Dit gaat al miljoenen jaren zo door. Daardoor is er in de loop van de tijd steeds meer zout in de zee terechtgekomen. Ook rivierwater bevat dus zout, alleen zo weinig dat je het niet proeft.'
        ],
        vragen: [
          { vaardigheid: 'Klopt het?', vraag: 'Welke zin klopt NIET volgens de tekst?', opties: ['Het zout in de zee komt uit stenen op het land', 'Als zeewater verdampt, verdwijnt het zout ook', 'Rivieren brengen zout naar zee', 'In rivierwater zit een heel klein beetje zout'], goed: 1, uitleg: 'Lees de zin met "verdampt" nog eens precies: het water verdampt, "maar het zout blijft achter". Het signaalwoord "maar" laat zien dat het zout juist niet verdwijnt. Daarom klopt die zin niet.' },
          { vaardigheid: 'Verwijswoord', vraag: 'In "Daar verdampt het water" verwijst "Daar" naar ...', opties: ['de rivieren', 'de rotsen', 'de bodem', 'de zee'], goed: 3, uitleg: '"Daar" wijst naar een plek die vlak ervoor genoemd is. De zin ervoor eindigt met "naar zee". Vervang "Daar" door "In de zee" en je ziet dat het klopt: het water verdampt in de zee, en het zout blijft achter.' }
        ]
      }
    ]
  }
];

if (typeof module !== 'undefined') { module.exports = { MOCHI_LEZEN }; }

/*
 * IEP-uitbreiding (vanaf 25 oktober 2026): het doel is nu de
 * IEP-doorstroomtoets in januari. Per dag drie extra, moeilijkere vragen bij
 * de hardop-tekst: verbanden over alinea's heen, verwijswoorden,
 * tekststructuur, standpunt en argument, en "welke bewering klopt NIET".
 * Ze komen na de drie gewone vragen. Zelfde vorm als hardop.vragen.
 */
const MOCHI_LEZEN_IEP = [
  // Dag 1
  [
    { vaardigheid: 'Verband', vraag: 'Waarom zijn er na een strenge winter veel minder ijsvogels? Gebruik alinea 2 én alinea 4.', opties: ['De gangen in de oever vriezen dicht, zodat de eieren niet uitkomen', 'Hij vangt zijn eten door in het water te duiken, en dat kan niet als het water bevroren is', 'In de winter legt het vrouwtje geen eieren', 'Op de bevroren takken kan hij niet meer stil zitten'], goed: 1, uitleg: 'In alinea 4 staat dat hij in een strenge winter "geen vis meer kan vangen". Waarom niet? Dat lees je in alinea 2: hij duikt het water in om vis te pakken. Als dat water dichtgevroren is, lukt dat niet meer.' },
    { vaardigheid: 'Bedoeling', vraag: 'In alinea 1 staat dat de ijsvogel "ongeveer zo groot als een mus" is. Waarom vertelt de schrijver dat?', opties: ['Om te laten zien dat ijsvogels en mussen familie van elkaar zijn', 'Om uit te leggen waarom de ijsvogel zo snel kan duiken', 'Om te laten zien dat je een ijsvogel makkelijk met een mus verwart', 'Om te laten zien dat het een klein vogeltje is dat toch meteen opvalt door zijn kleuren'], goed: 3, uitleg: 'Lees de hele zin: "zo groot als een mus, maar door zijn kleuren valt hij meteen op". Het woord "maar" geeft een tegenstelling: klein, en toch valt hij op. Verwarren met een mus kan dus juist niet.' },
    { vaardigheid: 'Klopt het?', vraag: 'Welke bewering klopt NIET volgens de tekst?', opties: ['De ijsvogel maakt zijn nest van takjes, hoog in een boom boven het water', 'De ijsvogel graaft met zijn snavel een gang in een steile oever', 'Een ijsvogel slaat zijn vis een paar keer tegen een tak voordat hij hem doorslikt', 'Een ijsvogelpaar kan in één jaar meer dan één keer jongen krijgen'], goed: 0, uitleg: 'Bij een NIET-vraag controleer je elke bewering in de tekst. Drie ervan vind je terug in alinea 2, 3 en 4. Over een nest van takjes in een boom staat niets: de ijsvogel graaft een gang in een oever van zand of leem.' }
  ],
  // Dag 2
  [
    { vaardigheid: 'Verband', vraag: 'Waarom kijkt Lotte in alinea 1 "voor de derde keer" naar het bord?', opties: ['Omdat ze al wist dat haar spoor zou veranderen', 'Omdat ze de letters op het bord niet goed kan lezen', 'Omdat ze zenuwachtig is en zeker wil weten dat ze het goed heeft', 'Omdat haar trein vertraging heeft'], goed: 2, uitleg: 'Zoek in dezelfde alinea naar een reden. Daar staat dat ze voor het eerst alleen reist en dat haar buik "als een wasmachine" voelt. Wie zenuwachtig is, controleert alles een paar keer. Dat het spoor verandert, hoort ze pas later.' },
    { vaardigheid: 'Woordbetekenis', vraag: 'In alinea 3 is Lotte "te buiten adem om iets te zeggen". Wat betekent dat?', opties: ['Ze hijgt zo erg van het rennen dat ze geen lucht heeft om te praten', 'Ze is te verlegen om iets tegen de conducteur te zeggen', 'Ze heeft het zo koud buiten dat ze niet kan praten', 'Ze is te boos om iets te zeggen'], goed: 0, uitleg: 'Kijk wat er vlak daarvoor gebeurt: ze "rende de trap af, door de tunnel en weer omhoog". Na zo\'n sprint ben je buiten adem: je hijgt en hebt geen lucht over om te praten.' },
    { vaardigheid: 'Bedoeling', vraag: 'De schrijver noemt de "wasmachine" in Lottes buik in alinea 1 en nog een keer in alinea 4. Waarom doet de schrijver dat?', opties: ['Om te laten zien dat Lotte nog steeds misselijk is', 'Om te laten zien dat de trein veel lawaai maakt', 'Omdat Lotte bij oma moet helpen met de was', 'Om te laten zien dat Lottes spanning aan het eind helemaal weg is'], goed: 3, uitleg: 'Vergelijk het begin met het eind. In alinea 1 draait de wasmachine (ze is zenuwachtig), in alinea 4 is hij "eindelijk gestopt". Door hetzelfde beeld terug te laten komen, zie je hoe Lotte veranderd is: van gespannen naar rustig.' }
  ],
  // Dag 3
  [
    { vaardigheid: 'Tekststructuur', vraag: 'Hoe hangt alinea 1 samen met de rest van de tekst?', opties: ['Alinea 1 geeft een mening, de andere alinea\'s geven argumenten', 'Alinea 1 noemt een probleem, de andere alinea\'s leggen uit hoe een sluis dat oplost', 'Alinea 1 vertelt de geschiedenis van sluizen, de andere alinea\'s hoe ze er later uitzien', 'Alinea 1 noemt de voordelen van een sluis, de andere alinea\'s de nadelen'], goed: 1, uitleg: 'Vraag je af wat alinea 1 doet: "Een schip kan niet zomaar van laag naar hoog water varen." Dat is een probleem. "Daarvoor is een sluis nodig" kondigt de oplossing aan, en die wordt in alinea 2 tot en met 4 uitgelegd.' },
    { vaardigheid: 'Verwijswoord', vraag: 'In alinea 3 staat: "Die worden geopend, zodat er langzaam water van de hoge kant de sluis in stroomt." Waar verwijst "Die" naar?', opties: ['Naar de deuren aan de hoge kant', 'Naar de deuren aan de lage kant', 'Naar de luikjes in de deuren of de buizen naast de sluis', 'Naar de boten die in de sluis liggen'], goed: 2, uitleg: 'Een verwijswoord wijst meestal terug naar iets in de zin ervoor: "kleine luikjes, of er lopen buizen naast de sluis". Die gaan open. De deuren aan de hoge kant gaan pas open als het water even hoog staat, dat staat verderop.' },
    { vaardigheid: 'Conclusie', vraag: 'Een boot wil van het hoge naar het lage water. In welke volgorde gebeurt alles?', opties: ['Deuren aan de hoge kant open, boot vaart erin, deuren dicht, water loopt weg, deuren aan de lage kant open', 'Deuren aan de lage kant open, boot vaart erin, deuren dicht, water stroomt erin, deuren aan de hoge kant open', 'Deuren aan de hoge kant open, boot vaart erin, deuren dicht, water stroomt erin, deuren aan de lage kant open', 'Deuren aan de hoge kant open, boot vaart erin, water loopt weg, deuren dicht, deuren aan de lage kant open'], goed: 0, uitleg: 'In alinea 4 staat dat alles "precies andersom" gaat. Draai de stappen uit alinea 2 en 3 dus om: de boot komt nu van de hoge kant, het water moet zakken, en de deuren moeten dicht zijn voordat het water wegloopt.' }
  ],
  // Dag 4
  [
    { vaardigheid: 'Klopt het?', vraag: 'Welke bewering klopt NIET volgens de tekst?', opties: ['De kinderen schreven samen met hun juf een brief aan de gemeente', 'Het bos werd op een zaterdag geplant', 'Leerlingen houden bij welke dieren er in het bos komen', 'Het idee voor het bos kwam van de directeur'], goed: 3, uitleg: 'Zoek elke bewering op in de tekst. In alinea 2 staat: "Het idee kwam van de leerlingen zelf." De directeur komt pas aan het eind aan het woord, en zij is trots op wat de leerlingen hebben gedaan.' },
    { vaardigheid: 'Verwijswoord', vraag: 'In alinea 3 staat: "Zo groeien ze snel naar het licht toe." Waar verwijst "Zo" naar?', opties: ['Naar het weghalen van de tegels', 'Naar het feit dat de boompjes heel dicht op elkaar zijn geplant', 'Naar het losmaken van de grond', 'Naar het feit dat ouders, leerkrachten en kinderen samen hielpen'], goed: 1, uitleg: '"Zo" betekent hier "op die manier" en wijst terug naar wat er vlak ervoor staat: de boompjes staan "heel dicht op elkaar". Omdat ze zo dicht op elkaar staan, moeten ze snel omhoog groeien om bij het licht te komen.' },
    { vaardigheid: 'Bedoeling', vraag: 'Waarom eindigt de schrijver het bericht met de uitspraak van directeur Annelies de Boer?', opties: ['Om te laten zien dat het idee voor het bos van de directeur kwam', 'Om uit te leggen wie de bomen en struiken heeft betaald', 'Om af te sluiten met wat je van dit verhaal kunt leren: met een goed plan kun je echt iets veranderen', 'Om te laten zien dat niet iedereen blij is met het bos'], goed: 2, uitleg: 'Een slotzin geeft vaak de boodschap van de hele tekst. De directeur zegt dat de leerlingen "hebben laten zien dat je met een goed plan echt iets kunt veranderen". Dat vat het hele bericht samen: van idee en brief tot een echt bos.' }
  ],
  // Dag 5
  [
    { vaardigheid: 'Verband', vraag: 'Waarom slaat Bram om en Sophie niet? Gebruik alinea 2 en 3.', opties: ['Sophie lette op haar zeil en reageerde op tijd, terwijl Bram met Sophie bezig was en te laat reageerde', 'Sophie zeilde achter Bram, en daar kwam de windvlaag niet', 'Sophies boot was zwaarder, dus die kon niet omslaan', 'Bram stuurde expres naar de windvlaag om sneller te gaan'], goed: 0, uitleg: 'Combineer twee alinea\'s. In alinea 2 roept Bram naar Sophie en kijkt hij achterom, terwijl Sophie "haar ogen strak op het zeil" houdt. In alinea 3 staat dat Sophie de vlaag "ook" zag en "op tijd" haar zeil vierde. Bram was dus te laat.' },
    { vaardigheid: 'Woordbetekenis', vraag: 'Sophie "had op tijd haar zeil gevierd". Wat betekent "vieren" hier?', opties: ['Het zeil juist strakker trekken', 'Het zeil helemaal naar beneden halen', 'Feest vieren omdat ze bijna gewonnen heeft', 'Het zeil losser laten, zodat de wind er minder hard aan trekt'], goed: 3, uitleg: 'Bram "trok het zeil strak" en sloeg om, dus Sophie deed iets anders. Ze zeilde daarna "rustig langs hem heen", dus haar zeil was niet helemaal naar beneden. Vieren betekent hier: losser laten.' },
    { vaardigheid: 'Conclusie', vraag: 'Wat kun je uit het hele verhaal concluderen over Sophie?', opties: ['Winnen kan haar helemaal niets schelen', 'Ze is een goede zeiler die ook aan anderen denkt', 'Ze is boos op Bram omdat hij haar uitdaagde', 'Ze zeilt minder goed dan Bram, maar had geluk'], goed: 1, uitleg: 'Zet alles wat Sophie doet op een rijtje: ze ziet de vlaag op tijd (goede zeiler), draait bij en vraagt "Gaat het?", en brengt Bram warme chocolademelk (denkt aan een ander). "Helemaal niets" is te sterk: ze zeilt wel geconcentreerd naar de finish.' }
  ],
  // Dag 6
  [
    { vaardigheid: 'Standpunt', vraag: 'Welke zin is een argument voor het standpunt, en niet het standpunt zelf?', opties: ['Ik vind dat scholen voor oudere kinderen later moeten beginnen.', 'Ouders moeten soms vroeg naar hun werk.', 'Tieners worden \'s avonds pas later moe en zijn \'s ochtends dus ook later echt wakker.', 'Daarom blijf ik erbij: laat de school later beginnen.'], goed: 2, uitleg: 'Het standpunt is wat de schrijver vindt; een argument is een reden waarom. "Ik vind dat..." en "Daarom blijf ik erbij" geven het standpunt. Dat ouders vroeg naar hun werk moeten, is juist een tegenargument. Alleen de zin over tieners geeft een reden.' },
    { vaardigheid: 'Tekststructuur', vraag: 'Hoe hangt alinea 3 samen met alinea 2?', opties: ['Alinea 3 geeft een tegenargument op alinea 2', 'Alinea 3 geeft een tweede argument, dat aansluit bij het eerste: wie later begint, slaapt meer en leert beter', 'Alinea 3 geeft een voorbeeld bij het argument van alinea 2', 'Alinea 3 geeft de eindconclusie van het betoog'], goed: 1, uitleg: 'Let op het signaalwoord aan het begin van alinea 3: "Daarnaast". Dat kondigt iets extra\'s aan, dus een nieuw argument. De conclusie komt pas in alinea 4, en een tegenargument herken je aan woorden als "Natuurlijk zijn er ook nadelen".' },
    { vaardigheid: 'Bedoeling', vraag: 'Waarom schrijft de schrijver in alinea 2: "Ze zijn niet lui"?', opties: ['Om een vooroordeel weg te nemen: tieners kunnen er zelf niets aan doen dat ze \'s ochtends moe zijn', 'Om te laten zien dat tieners harder werken dan volwassenen', 'Om toe te geven dat tieners soms toch lui zijn', 'Om te zeggen dat tieners \'s avonds eerder naar bed moeten'], goed: 0, uitleg: 'Lees de hele zin: "Ze zijn niet lui; hun lichaam is gewoon nog niet klaar om te leren." De schrijver weet dat veel mensen denken dat tieners lui zijn, en zegt dat het aan hun biologische klok ligt. Zo maakt hij zijn argument sterker.' }
  ],
  // Dag 7
  [
    { vaardigheid: 'Verband', vraag: 'Wat was volgens de tekst de directe aanleiding voor het besluit om de Zuiderzee af te sluiten?', opties: ['Het plan van ingenieur Cornelis Lely', 'De wens om nieuw land te maken, zoals de Noordoostpolder', 'Het zoute water in het IJsselmeer', 'De overstroming van 1916'], goed: 3, uitleg: 'Zoek het moment van het besluit: "Na die overstroming besloot de regering dat er iets moest gebeuren." Het plan van Lely bestond "al", dat was dus niet de aanleiding. De Noordoostpolder kwam pas later, als gevolg van de dijk.' },
    { vaardigheid: 'Verwijswoord', vraag: 'In alinea 1 staat: "Dat is bijzonder." Waar verwijst "Dat" naar?', opties: ['Naar het feit dat het ruim honderd jaar geleden allemaal één zee was', 'Naar het feit dat je over de Afsluitdijk kunt rijden', 'Naar het feit dat je aan de ene kant de Waddenzee en aan de andere kant het IJsselmeer ziet', 'Naar het feit dat de Zuiderzee vaak voor problemen zorgde'], goed: 2, uitleg: '"Dat" wijst terug naar de zin ervoor: aan de ene kant de Waddenzee, aan de andere kant het IJsselmeer. Dat het vroeger één zee was, volgt na "want": dat is de reden waarom het bijzonder is, niet wat er bijzonder is.' },
    { vaardigheid: 'Klopt het?', vraag: 'Welke bewering klopt volgens de tekst?', opties: ['Het IJsselmeer bestond al voordat de dijk werd gebouwd', 'Het plan van Cornelis Lely bestond al toen de regering besloot dat er iets moest gebeuren', 'Door de dijk werd ook het water van de Waddenzee zoet', 'De dijk werd vooral met grote machines gebouwd'], goed: 1, uitleg: 'In alinea 2 staat dat Lely "al een plan had bedacht" toen de regering na de overstroming besloot dat er iets moest gebeuren. De andere beweringen kloppen niet: het IJsselmeer ontstond pas door de dijk, alleen de Zuiderzee werd zoet, en er werd "vaak met de hand" gewerkt.' }
  ],
  // Dag 8
  [
    { vaardigheid: 'Woordbetekenis', vraag: 'Je moet het hotel ophangen op een "zonnige, beschutte plek". Wat betekent "beschut"?', opties: ['Beschermd tegen wind en regen', 'Een plek waar veel zon komt', 'Hoog boven de grond', 'Een plek waar niemand komt'], goed: 0, uitleg: 'Let op: "zonnig" en "beschut" zijn twee verschillende woorden in de zin, dus "veel zon" is niet de betekenis van beschut. Een beschutte plek is beschermd, bijvoorbeeld tegen een muur of onder een afdakje, zodat het hotel uit de wind en de regen hangt.' },
    { vaardigheid: 'Tekststructuur', vraag: 'Hoe is deze tekst opgebouwd?', opties: ['Een probleem, de oorzaken, de gevolgen en een mening', 'Eerst de stappen, dan wat je nodig hebt, en tot slot waarom het nodig is', 'Waarom het nodig is, wat je nodig hebt, de stappen, en waar je het hotel ophangt en wat je dan kunt zien', 'Eerst de voordelen, dan de nadelen en tot slot een conclusie'], goed: 2, uitleg: 'Geef elke alinea een kopje. Alinea 1: waarom (insecten vinden weinig plekken). Alinea 2: "Wat heb je nodig?". Alinea 3: stap 1 tot en met 3. Alinea 4: ophangen en wachten op bijen. Dat is de vaste volgorde van een handleiding.' },
    { vaardigheid: 'Klopt het?', vraag: 'Welke bewering klopt NIET volgens de tekst?', opties: ['Je kunt holle stengels van bamboe of riet gebruiken', 'Een volwassene kan helpen met zagen en boren', 'In het voorjaar kun je zien dat er bijen in het hotel wonen', 'Bij stap 1 zorg je ervoor dat de stengels aan de achterkant open blijven'], goed: 3, uitleg: 'Controleer elke bewering. Bij stap 1 staat juist: "Zorg dat de achterkant dicht is, want bijen willen een gang met maar één ingang." De andere drie vind je terug in alinea 2 en 4.' }
  ],
  // Dag 9
  [
    { vaardigheid: 'Bedoeling', vraag: 'Waarom schuift Tomasz zijn papier "een stukje naar haar toe"?', opties: ['Hij wil dat Fenna zijn tekening afmaakt', 'Hij laat voorzichtig merken dat Fenna zijn tekening goed mag bekijken', 'Hij wil de tekening van Fenna overnemen', 'Hij wil dat Fenna stil is tijdens de les'], goed: 1, uitleg: 'Kijk wat er net gebeurde: Fenna fluistert "Wauw". Tomasz kijkt "verlegen" op en schuift zijn papier naar haar toe. Hij zegt niets, maar met dat gebaar laat hij zien dat hij haar aandacht fijn vindt en dat ze mag kijken.' },
    { vaardigheid: 'Woordbetekenis', vraag: 'In alinea 2 "hield Fenna haar adem in". Wat laat dat hier zien?', opties: ['Ze was heel verbaasd over hoe mooi de tekening was', 'Ze was bang voor de draak op het papier', 'Ze moest van de juf stil zijn', 'Ze was buiten adem van het rennen'], goed: 0, uitleg: 'Je adem inhouden kan bij schrik of bij verbazing. Kijk wat erna komt: de draak is "zo echt", elke schub heeft een schaduw, en Fenna fluistert "Wauw". Dat is bewondering, geen angst.' },
    { vaardigheid: 'Conclusie', vraag: 'Op welke dag legt Fenna het lege vel op de tafel van Tomasz?', opties: ['Op donderdag', 'Op maandag', 'Op vrijdag', 'Op zaterdag'], goed: 2, uitleg: 'Dit staat er niet letterlijk, je moet het uitrekenen. De tekenles is op donderdag (alinea 2), en alinea 3 begint met "De volgende ochtend". De dag na donderdag is vrijdag.' }
  ],
  // Dag 10
  [
    { vaardigheid: 'Conclusie', vraag: 'Wat zou er waarschijnlijk gebeuren als er geen stempelkaart was?', opties: ['Niemand zou nog mee willen doen', 'Het ijs zou minder dik hoeven te zijn', 'De tocht zou niet meer op televisie komen', 'Schaatsers zouden een stuk van de route kunnen overslaan zonder dat iemand het merkt'], goed: 3, uitleg: 'Zoek op waar de stempelkaart voor is: "Zo kan de organisatie controleren dat niemand een stuk afsnijdt." Valt de controle weg, dan kan iemand dus stiekem een stuk afsnijden.' },
    { vaardigheid: 'Woordbetekenis', vraag: 'In alinea 4 staat dat "het hele land in de ban van de tocht" raakt. Wat betekent dat?', opties: ['Iedereen is er vol aandacht mee bezig', 'De tocht wordt verboden', 'Iedereen gaat zelf meeschaatsen', 'Het hele land gaat op slot'], goed: 0, uitleg: 'Een "ban" kan een verbod zijn, maar dat past hier niet. Lees verder: duizenden toeschouwers, urenlang op tv, een volksfeest. "In de ban van iets zijn" betekent dat iets al je aandacht trekt.' },
    { vaardigheid: 'Klopt het?', vraag: 'Welke bewering klopt volgens de tekst?', opties: ['Wie alle stempels heeft, krijgt altijd een kruisje', 'Voor het kruisje moet je alle stempels hebben én op tijd terug zijn in Leeuwarden', 'De tocht gaat door als het ijs op de meeste plekken vijftien centimeter dik is', 'De tocht begint in Leeuwarden, maar eindigt in een andere stad'], goed: 1, uitleg: 'Let op kleine woorden. Er staat "alle stempels heeft en op tijd terug is": twee voorwaarden, dus "altijd" is te sterk. Het ijs moet "overal" dik genoeg zijn, niet op de meeste plekken. En je eindigt weer in Leeuwarden.' }
  ],
  // Dag 11
  [
    { vaardigheid: 'Standpunt', vraag: 'Met welk argument laat de schrijver zien dat het bij school veiliger wordt als kinderen fietsen?', opties: ['Wie fietst, is vaak frisser in zijn hoofd', 'Volgend jaar fietsen de meeste brugklassers zelf naar school', 'Als meer kinderen fietsen, staan er minder auto\'s bij school', 'Je kunt de route eerst een paar keer samen fietsen'], goed: 2, uitleg: 'Alle vier staan in de tekst, maar maar één gaat over veiligheid bij school. "Frisser in je hoofd" hoort bij gezondheid, de brugklas bij goed voorbereid zijn, en samen fietsen is een antwoord op de zorg van ouders. Alinea 3 zegt: minder auto\'s, "daardoor wordt het juist veiliger".' },
    { vaardigheid: 'Verwijswoord', vraag: 'In alinea 1 schrijft de schrijver: "Ik denk dat het juist andersom is." Wat bedoelt de schrijver met "andersom"?', opties: ['Dat auto\'s juist veiliger zijn dan fietsen', 'Dat kinderen juist hun ouders naar school moeten brengen', 'Dat de chaos bij school \'s middags juist het grootst is', 'Dat zelf fietsen juist veiliger is dan met de auto gebracht worden'], goed: 3, uitleg: 'Kijk naar de zin ervoor: ouders brengen hun kind met de auto, "omdat ze denken dat dat veiliger is". "Andersom" draait die gedachte om: niet de auto, maar de fiets is veiliger.' },
    { vaardigheid: 'Feit of mening', vraag: 'Welke zin is een feit en geen mening?', opties: ['Volgend jaar fietsen de meeste brugklassers zelf naar hun nieuwe school.', 'Kinderen in groep 7 en 8 kunnen prima zelf naar school fietsen.', 'Die zorg is begrijpelijk.', 'Een kind dat zelf mag fietsen, groeit daarvan.'], goed: 0, uitleg: 'Vraag bij elke zin: kun je dit natellen of nagaan? Hoeveel brugklassers zelf fietsen, kun je onderzoeken. Of iets "prima" gaat, "begrijpelijk" is of een kind "laat groeien", is wat de schrijver ervan vindt.' }
  ],
  // Dag 12
  [
    { vaardigheid: 'Verband', vraag: 'In alinea 1 staat: "Toch ontstaan ze precies tegelijk." Welk verband geeft "Toch" aan?', opties: ['Een oorzaak: de bliksem zorgt ervoor dat je de donder later hoort', 'Een tegenstelling: je merkt ze na elkaar op, maar ze ontstaan op hetzelfde moment', 'Een opsomming: de schrijver noemt nog een kenmerk van onweer', 'Een voorwaarde: alleen als het onweert, ontstaan ze tegelijk'], goed: 1, uitleg: '"Toch" is een signaalwoord voor een tegenstelling, net als "maar". De zin ervoor zegt dat je eerst de bliksem ziet en daarna de donder hoort. "Toch" zegt: dat lijkt na elkaar, maar ze ontstaan tegelijk.' },
    { vaardigheid: 'Conclusie', vraag: 'Je telt negen seconden tussen de flits en de donder. Je vriend zegt: "De donder is dus negen seconden na de bliksem ontstaan." Klopt dat?', opties: ['Ja, eerst komt de bliksem en negen seconden later ontstaat de donder', 'Nee, de donder ontstaat juist eerder dan de bliksem', 'Nee, ze ontstaan tegelijk; het geluid doet er alleen langer over om bij jou te komen', 'Ja, want het onweer is dan ongeveer drie kilometer weg'], goed: 2, uitleg: 'Combineer alinea 1 en 3. In alinea 1 staat dat ze "precies tegelijk" ontstaan, in alinea 3 dat geluid veel trager is dan licht. De negen seconden zijn dus de reistijd van het geluid. Dat het onweer drie kilometer weg is klopt, maar dat bewijst niet wat je vriend zegt.' },
    { vaardigheid: 'Verwijswoord', vraag: 'In alinea 4 staat: "Daar kun je handig gebruik van maken." Waar verwijst "Daar" naar?', opties: ['Naar de hitte van wel dertigduizend graden', 'Naar de schokgolf die je als donder hoort', 'Naar het feit dat bliksem ook tussen twee wolken kan ontstaan', 'Naar het feit dat je langer op de donder moet wachten naarmate het onweer verder weg is'], goed: 3, uitleg: '"Daar" wijst terug naar het einde van de vorige alinea: "Hoe verder weg het onweer is, hoe langer je dus op de donder moet wachten." Daarmee kun je in alinea 4 de afstand uitrekenen.' }
  ],
  // Dag 13
  [
    { vaardigheid: 'Bedoeling', vraag: 'Opa zegt aan het eind over Zilver: "Hij weet altijd waar thuis is. Net als jij." Wat bedoelt opa met "Net als jij"?', opties: ['Dat Jip, net als Zilver, altijd de weg terug weet naar de mensen bij wie hij hoort', 'Dat Jip net zo snel is als een postduif', 'Dat Jip voortaan bij opa in het verzorgingshuis moet wonen', 'Dat Jip vaak verdwaalt en de weg moet vragen'], goed: 0, uitleg: 'Opa vergelijkt Jip met Zilver. Zilver vliegt altijd terug naar zijn hok, en Jip komt altijd terug bij opa: hij neemt zelfs de bus om hem op te zoeken. Opa bedoelt het niet letterlijk, maar zegt eigenlijk: jij weet waar je hoort, bij mij.' },
    { vaardigheid: 'Verband', vraag: 'Opa zegt aan de telefoon: "Zie je wel." Aan welke eerdere uitspraak van opa denkt hij dan?', opties: ['"Zilver blijft bij jou."', '"Hij weet de weg beter dan wij allebei."', '"Laat hem maar gaan."', '"Hij is er al."'], goed: 1, uitleg: '"Zie je wel" zeg je als iets klopt wat je eerder al zei. Opa zei in alinea 1 dat Zilver "de weg beter weet dan wij allebei". Nu blijkt dat waar: Zilver is sneller thuis dan Jip. "Hij is er al" zegt Jip, niet opa.' },
    { vaardigheid: 'Klopt het?', vraag: 'Welke bewering klopt NIET volgens de tekst?', opties: ['Opa gaf al zijn duiven weg, op één na', 'Zilver was eerder bij het hok dan Jip', 'Jip liet Zilver elke ochtend voor school vliegen', 'Jip bracht Zilver met de auto naar opa'], goed: 3, uitleg: 'Zoek elke bewering op. In alinea 3 staat: "Jip nam het reismandje mee in de bus." Met de auto klopt dus niet. Dat Zilver eerder thuis was, lees je in alinea 4: toen Jip thuiskwam, "zat Zilver al op de plank voor het hok".' }
  ],
  // Dag 14
  [
    { vaardigheid: 'Bedoeling', vraag: 'Alinea 1 eindigt met: "Toch eten ze de bladeren die ze verzamelen niet zelf." Waarom zet de schrijver die zin daar?', opties: ['Om samen te vatten wat de mieren met de bladeren doen', 'Om te laten zien dat bladsnijdersmieren eigenlijk geen boeren zijn', 'Om je nieuwsgierig te maken naar wat de mieren dan wél met de bladeren doen', 'Om uit te leggen dat bladeren giftig zijn voor mieren'], goed: 2, uitleg: 'De zin roept een vraag op: waarom verzamelen ze bladeren als ze die niet eten? Het antwoord komt pas in alinea 2: ze kweken er een schimmel op. Zo lokt de schrijver je de tekst in.' },
    { vaardigheid: 'Verband', vraag: 'In alinea 4 staat: "Geen enkele mier zou alleen kunnen overleven." Waarom niet? Gebruik ook alinea 2.', opties: ['Elke mier heeft een eigen taak, en voor hun voedsel zijn al die taken samen nodig', 'Een mier is te klein om in zijn eentje een stuk blad te dragen', 'De schimmel is giftig voor een mier die alleen is', 'Een mier kan alleen in het regenwoud leven'], goed: 0, uitleg: 'Alinea 4 zegt dat elke mier één taak heeft: knippen, sjouwen, kauwen, verzorgen of bewaken. In alinea 2 zie je dat het voedsel pas ontstaat als al die stappen gebeuren. Dat een mier te klein is, klopt niet: de stukjes zijn vaak groter dan de mier, en toch sjouwt hij ze.' },
    { vaardigheid: 'Hoofdgedachte', vraag: 'Wat is de hoofdgedachte van alinea 3?', opties: ['Op het lichaam van de mieren leven bacteriën', 'De mieren beschermen hun schimmeltuin goed, net zoals een boer voor zijn akker zorgt', 'Ongewenste schimmels kunnen de oogst bederven', 'Bladsnijdersmieren kweken een schimmel als voedsel'], goed: 1, uitleg: 'De hoofdgedachte van een alinea dekt de hele alinea, niet één zin. De bacteriën en de ongewenste schimmels zijn details. Dat ze een schimmel kweken, staat in alinea 2. Alinea 3 gaat over hoe ze hun "akker" verzorgen en beschermen; de laatste zin vat dat samen.' }
  ]
];
MOCHI_LEZEN.forEach((dag, i) => dag.hardop.vragen.push(...MOCHI_LEZEN_IEP[i]));

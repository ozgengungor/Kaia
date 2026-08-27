/*
 * Oefeningen voor begrijpend lezen — groep 8.
 *
 * Alles staat hier hardcoded. De structuur is bewust "data-only" zodat er later
 * een editor bovenop gebouwd kan worden (of een JSON-bestand van de server komt):
 * de app leest alleen maar uit deze array en kent geen enkele oefening bij naam.
 *
 * Structuur van een oefening:
 *   id          unieke sleutel (wordt gebruikt voor het opslaan van voortgang)
 *   titel       titel van de tekst
 *   soort       tekstsoort, wordt als label getoond ("Informatief", "Verhalend", ...)
 *   emoji       plaatje op de keuzekaart
 *   niveau      1 = makkelijker, 2 = gemiddeld, 3 = pittig
 *   intro       een zin van Kaya (de capybara) om de tekst te introduceren
 *   alinea's    array van alinea's; elke alinea is platte tekst
 *   woorden     [{ woord, uitleg }] — deze woorden worden in de tekst aanklikbaar
 *   vragen      array met vragen, zie hieronder
 *
 * Vraagtypes:
 *   { type: 'mc',    vraag, opties: [..], goed: <index>, hint, uitleg, vaardigheid }
 *   { type: 'open',  vraag, voorbeeldantwoord, hint, uitleg, vaardigheid }
 *   { type: 'volgorde', vraag, items: [..in getoonde volgorde..],
 *                    goedeVolgorde: [..indexen in juiste volgorde..], hint, uitleg, vaardigheid }
 */

const OEFENINGEN = [
  {
    id: 'wolf',
    titel: 'De wolf is terug in Nederland',
    soort: 'Informatief',
    emoji: '🐺',
    niveau: 2,
    intro: 'Deze tekst zit vol met feiten én meningen. Kun jij het verschil zien?',
    alineas: [
      'Meer dan honderdvijftig jaar was het stil in de Nederlandse bossen. De laatste wilde wolf werd hier in 1869 doodgeschoten. Daarna verdween het dier volledig uit ons land. Maar in 2015 liep er ineens weer een wolf over een zandpad in Drenthe. Een automobilist filmde hem met zijn telefoon. Sindsdien zijn er steeds meer wolven bijgekomen. Op dit moment leven er verschillende roedels op de Veluwe en in Drenthe.',
      'De wolf is niet met een vrachtwagen naar Nederland gebracht. Hij is hier gewoon naartoe gelopen. Vanuit Duitsland en Polen trekken jonge wolven soms honderden kilometers ver om een eigen gebied te zoeken. Onderzoekers weten dat zeker, want ze vergelijken het DNA uit wolvenpoep met dat van wolven in andere landen. Zo kunnen ze precies zien uit welke familie een dier komt.',
      'Toch is niet iedereen blij met de terugkeer. Schapenhouders zijn boos, want een wolf die honger heeft, kiest soms een schaap uit in plaats van een ree. In sommige provincies is daarom geld beschikbaar voor hoge hekken met stroomdraad. Volgens boswachters helpen die hekken goed: waar de schapen beschermd zijn, gaat de wolf meestal weer op zoek naar wilde dieren.',
      'Natuurbeschermers wijzen op de andere kant van het verhaal. Een wolf eet vooral reeën en wilde zwijnen, en daar zijn er op de Veluwe erg veel van. Als de wolf die aantallen kleiner maakt, krijgen jonge boompjes eindelijk de kans om te groeien. Het bos wordt dan gevarieerder. "De wolf is de beste boswachter die er bestaat", zegt bioloog Marieke de Vries. Dat is natuurlijk haar mening, maar er zijn onderzoeken uit Amerika die in dezelfde richting wijzen.',
      'Moet je nu bang zijn als je gaat wandelen? Deskundigen zeggen van niet. Wolven zijn schuw en gaan mensen liever uit de weg. Zie je er toch eentje, dan is het advies simpel: blijf staan, maak jezelf groot en loop rustig achteruit weg. En vooral: geef het dier nooit eten. Een wolf die mensen met eten leert verbinden, wordt pas echt een probleem.'
    ],
    woorden: [
      { woord: 'roedels', uitleg: 'Groepen wolven die samen leven en jagen — meestal een vader, een moeder en hun jongen.' },
      { woord: 'DNA', uitleg: 'De code in elke cel van een dier of mens. Familieleden hebben DNA dat sterk op elkaar lijkt.' },
      { woord: 'schuw', uitleg: 'Verlegen en voorzichtig; een schuw dier blijft liever uit de buurt van mensen.' },
      { woord: 'Deskundigen', uitleg: 'Mensen die heel veel van een onderwerp weten, bijvoorbeeld door hun studie of hun werk.' }
    ],
    vragen: [
      {
        type: 'mc',
        vaardigheid: 'Hoofdgedachte',
        vraag: 'Wat is de hoofdgedachte van deze tekst?',
        opties: [
          'Wolven zijn gevaarlijke dieren waar je bang voor moet zijn.',
          'De wolf is uit zichzelf teruggekomen in Nederland en dat levert zowel problemen als voordelen op.',
          'Schapenhouders moeten hogere hekken plaatsen rond hun weiland.',
          'Op de Veluwe leven te veel reeën en wilde zwijnen.'
        ],
        goed: 1,
        hint: 'De hoofdgedachte gaat over de héle tekst, niet over één alinea. Waar gaat elke alinea een beetje over?',
        uitleg: 'De tekst vertelt hoe de wolf terugkwam (alinea 1 en 2), wat de nadelen zijn (alinea 3), wat de voordelen zijn (alinea 4) en hoe gevaarlijk het is (alinea 5). Antwoord B vat dat allemaal samen. De andere antwoorden gaan maar over één stukje.'
      },
      {
        type: 'mc',
        vaardigheid: 'Feit of mening',
        vraag: 'Welke zin uit de tekst is een mening?',
        opties: [
          '"De laatste wilde wolf werd hier in 1869 doodgeschoten."',
          '"Vanuit Duitsland en Polen trekken jonge wolven soms honderden kilometers ver."',
          '"De wolf is de beste boswachter die er bestaat."',
          '"Onderzoekers vergelijken het DNA uit wolvenpoep."'
        ],
        goed: 2,
        hint: 'Een feit kun je controleren. Bij een mening kun je het oneens zijn — let op woorden als "beste", "mooiste" of "moet".',
        uitleg: 'Het woord "beste" verraadt een mening: iemand anders kan er heel anders over denken. De andere drie zinnen kun je nakijken in onderzoek, dus dat zijn feiten.'
      },
      {
        type: 'mc',
        vaardigheid: 'Verwijswoord',
        vraag: 'In alinea 2 staat: "Hij is hier gewoon naartoe gelopen." Naar wie of wat verwijst het woord "hij"?',
        opties: ['De onderzoeker', 'De wolf', 'De vrachtwagen', 'Het DNA'],
        goed: 1,
        hint: 'Lees de zin ervóór nog een keer. Verwijswoorden kijken bijna altijd terug.',
        uitleg: 'De zin ervoor gaat over de wolf: "De wolf is niet met een vrachtwagen naar Nederland gebracht." Daarna verwijst "hij" naar diezelfde wolf.'
      },
      {
        type: 'mc',
        vaardigheid: 'Woordbetekenis',
        vraag: 'In alinea 5 staat dat wolven "schuw" zijn. Wat betekent dat hier?',
        opties: [
          'Ze zijn snel boos.',
          'Ze blijven liever uit de buurt van mensen.',
          'Ze zijn erg nieuwsgierig naar mensen.',
          'Ze slapen overdag.'
        ],
        goed: 1,
        hint: 'De rest van de zin legt het eigenlijk al uit. Lees door tot de punt!',
        uitleg: 'Achter het woord staat: "en gaan mensen liever uit de weg". Zo helpt de tekst je zelf aan de betekenis — dat heet een omschrijving in de context.'
      },
      {
        type: 'mc',
        vaardigheid: 'Signaalwoord',
        vraag: 'Alinea 3 begint met "Toch is niet iedereen blij met de terugkeer." Wat doet het signaalwoord "toch" hier?',
        opties: [
          'Het geeft een voorbeeld.',
          'Het geeft een tegenstelling met de vorige alinea aan.',
          'Het geeft de oorzaak aan.',
          'Het geeft de volgorde in de tijd aan.'
        ],
        goed: 1,
        hint: 'Denk aan woorden als maar, echter, hoewel. Wat hebben die met elkaar gemeen?',
        uitleg: '"Toch" hoort bij tegenstellingen, net als "maar", "hoewel" en "echter". Eerst las je het positieve verhaal, daarna komt de andere kant.'
      },
      {
        type: 'open',
        vaardigheid: 'Conclusie trekken',
        vraag: 'Waarom weten onderzoekers zo zeker dat de wolven uit Duitsland en Polen komen? Leg het in je eigen woorden uit.',
        voorbeeldantwoord: 'Omdat ze het DNA uit wolvenpoep vergelijken met het DNA van wolven in andere landen. Zo zien ze uit welke familie een wolf komt.',
        hint: 'Zoek in alinea 2 naar het bewijs dat de onderzoekers gebruiken.',
        uitleg: 'Het bewijs staat letterlijk in alinea 2: DNA uit poep vergelijken met dat van wolven elders. Goed antwoord = DNA + vergelijken met andere landen.'
      },
      {
        type: 'volgorde',
        vaardigheid: 'Volgorde in de tekst',
        vraag: 'Zet deze gebeurtenissen in de juiste volgorde. Klik ze aan van eerst naar laatst.',
        items: [
          'Een automobilist filmt een wolf in Drenthe.',
          'De laatste wilde wolf van Nederland wordt doodgeschoten.',
          'Er leven weer verschillende roedels op de Veluwe.',
          'Meer dan honderdvijftig jaar is er geen wolf in Nederland.'
        ],
        goedeVolgorde: [1, 3, 0, 2],
        hint: 'Begin in het jaar 1869 en werk naar nu toe.',
        uitleg: 'De tijdlijn in alinea 1: 1869 de laatste wolf → daarna 150 jaar niets → 2015 het filmpje in Drenthe → nu meerdere roedels.'
      }
    ]
  },

  {
    id: 'gapen',
    titel: 'Waarom gapen aanstekelijk is',
    soort: 'Informatief',
    emoji: '🥱',
    niveau: 1,
    intro: 'Wedden dat jij tijdens deze tekst een keer moet gapen? Let maar eens op.',
    alineas: [
      'Iemand in de klas gaapt. Drie tellen later zit jij met je mond wijd open. Je was helemaal niet moe, en toch gebeurde het. Gapen is namelijk aanstekelijk, en wetenschappers proberen al jaren te snappen hoe dat precies zit.',
      'Vroeger dachten onderzoekers dat gapen vooral met zuurstof te maken had. Het idee was simpel: je hersenen krijgen te weinig zuurstof, dus haal je in één keer heel diep adem. Die verklaring klinkt logisch, maar hij bleek niet te kloppen. In een proef ademden mensen extra zuurstof in, en ze gaapten daarna precies even vaak als daarvoor.',
      'Een nieuwere verklaring gaat over temperatuur. Je hersenen werken het beste als ze een beetje koel blijven. Bij een gaap stroomt er koelere lucht naar binnen en gaat er warm bloed naar buiten, een soort ventilator voor je hoofd dus. Deze theorie past bij een opvallende ontdekking: in de winter gapen mensen vaker dan op een snikhete zomerdag.',
      'Maar waarom neem je het dan over van een ander? Daarvoor moeten we naar een bijzonder soort hersencellen: spiegelneuronen. Die cellen worden actief als je iemand iets ziet doen, alsof je het zelf doet. Zo leer je als baby lachen en zwaaien. Bij gapen werkt hetzelfde systeem, alleen doe je het dan zonder erbij na te denken.',
      'Het gekste is nog wel dat het aanstekelijke gapen te maken heeft met inleving. Uit onderzoek blijkt dat je vaker meegaapt met je beste vriendin dan met een onbekende in de bus. Ook honden gapen mee met hun baasje. Kinderen onder de vier jaar doen dat trouwens bijna nooit — hun vermogen om zich in te leven groeit nog. Volgende keer dat de hele klas zit te gapen, weet jij dus dat het niet aan de meester of juf ligt.'
    ],
    woorden: [
      { woord: 'aanstekelijk', uitleg: 'Iets wat je snel van een ander overneemt, zoals lachen of gapen.' },
      { woord: 'spiegelneuronen', uitleg: 'Hersencellen die actief worden als je iemand iets ziet doen, alsof je het zelf doet.' },
      { woord: 'inleving', uitleg: 'Kunnen voelen of begrijpen hoe iemand anders zich voelt.' },
      { woord: 'vermogen', uitleg: 'Dat wat je kunt; waar je toe in staat bent.' }
    ],
    vragen: [
      {
        type: 'mc',
        vaardigheid: 'Tekstdoel',
        vraag: 'Wat is het doel van de schrijver van deze tekst?',
        opties: [
          'De lezer overtuigen dat gapen ongezond is.',
          'De lezer uitleggen wat wetenschappers over gapen weten.',
          'De lezer laten lachen om een grappig verhaal.',
          'De lezer instructies geven om beter te slapen.'
        ],
        goed: 1,
        hint: 'Wil de schrijver je iets leren, iets laten doen, of je overtuigen?',
        uitleg: 'De schrijver geeft uitleg en onderzoek: dat is informeren. Er wordt geen mening verdedigd en er staat geen stappenplan in.'
      },
      {
        type: 'mc',
        vaardigheid: 'Details begrijpen',
        vraag: 'Waarom klopt de zuurstof-verklaring volgens de tekst niet?',
        opties: [
          'Omdat mensen in de winter vaker gapen.',
          'Omdat mensen die extra zuurstof inademden even vaak bleven gapen.',
          'Omdat honden geen zuurstof nodig hebben om te gapen.',
          'Omdat baby\'s nog niet kunnen gapen.'
        ],
        goed: 1,
        hint: 'In alinea 2 staat een proef beschreven. Wat was de uitkomst daarvan?',
        uitleg: 'Alinea 2: bij extra zuurstof gaapten mensen precies even vaak. Als de verklaring klopte, hadden ze minder moeten gapen.'
      },
      {
        type: 'mc',
        vaardigheid: 'Woordbetekenis',
        vraag: 'Wat bedoelt de schrijver met "een soort ventilator voor je hoofd"?',
        opties: [
          'Dat je hoofd door gapen wat afkoelt.',
          'Dat er wind uit je mond komt.',
          'Dat je haar door de lucht waait.',
          'Dat je hersenen sneller gaan draaien.'
        ],
        goed: 0,
        hint: 'Waar dient een ventilator voor? En waar gaat deze alinea over?',
        uitleg: 'Het is een beeldspraak. Een ventilator koelt, en de alinea gaat over hersenen die koel moeten blijven. Dus: gapen koelt je hoofd af.'
      },
      {
        type: 'mc',
        vaardigheid: 'Verwijswoord',
        vraag: 'In alinea 2 staat: "Die verklaring klinkt logisch, maar hij bleek niet te kloppen." Waar verwijst "hij" naar?',
        opties: [
          'Naar de onderzoeker',
          'Naar de verklaring over zuurstof',
          'Naar de proef',
          'Naar de zuurstof'
        ],
        goed: 1,
        hint: 'Zoek het woord dat vlak ervoor staat en waar de hele zin over gaat.',
        uitleg: '"Hij" verwijst terug naar "die verklaring" uit dezelfde zin: de verklaring over zuurstof.'
      },
      {
        type: 'open',
        vaardigheid: 'Verbanden leggen',
        vraag: 'Waarom gapen kinderen onder de vier jaar bijna nooit mee met anderen?',
        voorbeeldantwoord: 'Omdat hun inleving nog moet groeien: ze kunnen zich nog niet goed in een ander verplaatsen, en juist daardoor gaap je mee.',
        hint: 'Kijk in de laatste alinea naar het verband tussen meegapen en inleving.',
        uitleg: 'De laatste alinea legt uit dat meegapen te maken heeft met inleving. Bij jonge kinderen groeit dat vermogen nog, dus gapen ze minder mee.'
      },
      {
        type: 'mc',
        vaardigheid: 'Conclusie trekken',
        vraag: 'Kim gaapt vaker mee met haar zusje dan met de buurman. Wat past het beste bij de tekst?',
        opties: [
          'Haar zusje gaapt harder dan de buurman.',
          'Kim leeft zich meer in haar zusje in dan in de buurman.',
          'Kim is bij haar zusje altijd moe.',
          'De buurman heeft geen spiegelneuronen.'
        ],
        goed: 1,
        hint: 'Uit het onderzoek in de laatste alinea kun je een regel halen. Pas die regel toe op Kim.',
        uitleg: 'Hoe dichter iemand bij je staat, hoe vaker je meegaapt. Kim staat dichter bij haar zusje, dus leeft ze zich meer in.'
      }
    ]
  },

  {
    id: 'smartphone',
    titel: 'Moet de smartphone de klas uit?',
    soort: 'Meningtekst',
    emoji: '📱',
    niveau: 3,
    intro: 'Let op: hier probeert iemand jou te overtuigen. Kun jij zijn trucjes ontdekken?',
    alineas: [
      'Sinds vorig jaar geldt op veel middelbare scholen een strenge regel: telefoons in een kluisje aan het begin van de dag, en pas na de laatste bel weer terug. Nu klinkt de vraag of ook basisscholen dat moeten doen. Wat mij betreft is het antwoord duidelijk: ja, en het liefst zo snel mogelijk.',
      'Het belangrijkste argument gaat over concentratie. Onderzoekers van een Britse universiteit lieten leerlingen een toets maken. De ene groep had de telefoon in de tas, de andere groep in een andere kamer. De groep zonder telefoon in de buurt maakte duidelijk minder fouten. En let op: die telefoons stonden uit. Alleen al de gedachte "misschien krijg ik zo een berichtje" haalt een stukje van je aandacht weg.',
      'Daarnaast verandert de pauze. Op scholen waar telefoons verboden zijn, zeggen leraren dat het buiten drukker en luidruchtiger is geworden. Kinderen voetballen weer, verzinnen spelletjes en maken ruzie die ze daarna zelf oplossen. Dat laatste klinkt misschien vervelend, maar juist daar leer je van. Van scrollen naast elkaar op een bankje leer je vrij weinig.',
      'Tegenstanders zeggen dat kinderen juist moeten leren omgaan met hun telefoon, en dat een verbod dat onmogelijk maakt. Dat is een serieus punt. Maar leren omgaan met iets hoeft niet altijd de hele dag door. Je leert ook verkeersregels zonder dat je de hele dag op een druk kruispunt staat. Bovendien: buiten schooltijd is er tijd zat om te oefenen.',
      'Natuurlijk moeten er uitzonderingen zijn. Een kind dat na school alleen naar huis fietst, moet zijn ouders kunnen bereiken. En bij sommige lessen is een tablet of telefoon echt handig, bijvoorbeeld om iets op te zoeken. Maar dat is iets anders dan een telefoon die de hele dag in je broekzak trilt. Scholen die de knoop doorhakken, doen hun leerlingen een groot plezier — ook al zullen die leerlingen dat op dag één vast niet zo voelen.'
    ],
    woorden: [
      { woord: 'argument', uitleg: 'Een reden waarmee je je mening onderbouwt.' },
      { woord: 'Tegenstanders', uitleg: 'Mensen die het niet eens zijn met een plan of idee.' },
      { woord: 'uitzonderingen', uitleg: 'Gevallen waarin de regel even niet geldt.' },
      { woord: 'knoop doorhakken', uitleg: 'Uitdrukking: een moeilijke keuze eindelijk maken.' }
    ],
    vragen: [
      {
        type: 'mc',
        vaardigheid: 'Tekstdoel',
        vraag: 'Wat wil de schrijver met deze tekst bereiken?',
        opties: [
          'Uitleggen hoe een smartphone werkt.',
          'De lezer overtuigen dat telefoons niet in de klas thuishoren.',
          'Vertellen over een leuke dag op school.',
          'Een handleiding geven voor telefoonkluisjes.'
        ],
        goed: 1,
        hint: 'Zoek zinnen waarin de schrijver zijn eigen mening geeft, zoals "Wat mij betreft...".',
        uitleg: 'De schrijver zegt in alinea 1 "Wat mij betreft is het antwoord duidelijk: ja" en geeft daarna argumenten. Dat is overtuigen.'
      },
      {
        type: 'mc',
        vaardigheid: 'Argumenten herkennen',
        vraag: 'Welk argument gebruikt de schrijver in alinea 2?',
        opties: [
          'Telefoons zijn te duur voor kinderen.',
          'Zelfs een uitgeschakelde telefoon in de buurt kost je concentratie.',
          'Kinderen spelen buiten liever voetbal.',
          'Ouders willen hun kind altijd kunnen bereiken.'
        ],
        goed: 1,
        hint: 'Wat was de uitkomst van het Britse onderzoek — en wat maakte die uitkomst extra bijzonder?',
        uitleg: 'De leerlingen zónder telefoon in de buurt maakten minder fouten, terwijl de telefoons uitstonden. Dat is precies het argument over concentratie.'
      },
      {
        type: 'mc',
        vaardigheid: 'Feit of mening',
        vraag: 'Welke zin is een feit?',
        opties: [
          '"Wat mij betreft is het antwoord duidelijk: ja."',
          '"Van scrollen naast elkaar op een bankje leer je vrij weinig."',
          '"De groep zonder telefoon in de buurt maakte duidelijk minder fouten."',
          '"Scholen die de knoop doorhakken, doen hun leerlingen een groot plezier."'
        ],
        goed: 2,
        hint: 'Welke zin komt uit een onderzoek en kun je dus controleren?',
        uitleg: 'De uitkomst van het onderzoek is te controleren: dat is een feit. De andere drie zinnen zijn wat de schrijver vindt.'
      },
      {
        type: 'mc',
        vaardigheid: 'Structuur van de tekst',
        vraag: 'Wat doet de schrijver in alinea 4?',
        opties: [
          'Hij geeft een nieuw argument voor zijn eigen mening.',
          'Hij noemt het argument van de tegenstanders en geeft er antwoord op.',
          'Hij vat de hele tekst samen.',
          'Hij vertelt een persoonlijke herinnering.'
        ],
        goed: 1,
        hint: 'Let op het woord "Tegenstanders" aan het begin en op het woord "Maar" in het midden.',
        uitleg: 'Eerst noemt hij eerlijk het tegenargument ("Dat is een serieus punt"), daarna weerlegt hij het met de vergelijking over verkeersregels. Dat heet een weerlegging.'
      },
      {
        type: 'open',
        vaardigheid: 'Vergelijkingen begrijpen',
        vraag: 'De schrijver vergelijkt het leren omgaan met een telefoon met het leren van verkeersregels. Wat wil hij daarmee duidelijk maken?',
        voorbeeldantwoord: 'Dat je iets ook goed kunt leren zonder er de hele dag mee bezig te zijn. Je hoeft niet de hele dag bij een druk kruispunt te staan om verkeersregels te leren, en zo hoef je ook niet de hele dag je telefoon bij je te hebben.',
        hint: 'Wat hebben de twee situaties met elkaar gemeen volgens de schrijver?',
        uitleg: 'De vergelijking moet laten zien dat oefenen in kleine stukjes ook werkt. Zo probeert hij het tegenargument te ontkrachten.'
      },
      {
        type: 'mc',
        vaardigheid: 'Kritisch lezen',
        vraag: 'De schrijver schrijft aan het eind: "ook al zullen die leerlingen dat op dag één vast niet zo voelen". Waarom zet hij dat erbij?',
        opties: [
          'Om te laten zien dat hij snapt dat leerlingen het eerst vervelend vinden.',
          'Om te bewijzen dat het onderzoek klopt.',
          'Om aan te geven dat hij van mening is veranderd.',
          'Om te vertellen wat leraren ervan vinden.'
        ],
        goed: 0,
        hint: 'Denk aan de lezer. Wie leest deze tekst waarschijnlijk, en wat vindt die er misschien van?',
        uitleg: 'Hij laat zien dat hij de bezwaren van leerlingen begrijpt. Dat maakt hem geloofwaardiger — een bekende overtuigingstruc.'
      },
      {
        type: 'volgorde',
        vaardigheid: 'Opbouw van een betoog',
        vraag: 'Zet de opbouw van dit betoog in de juiste volgorde.',
        items: [
          'De schrijver behandelt het argument van de tegenstanders.',
          'De schrijver geeft zijn mening over telefoons op de basisschool.',
          'De schrijver noemt de uitzonderingen en sluit af.',
          'De schrijver geeft zijn argument over concentratie.'
        ],
        goedeVolgorde: [1, 3, 0, 2],
        hint: 'Loop de alinea\'s van boven naar beneden langs.',
        uitleg: 'Zo is een betoog vaak opgebouwd: standpunt → argumenten → tegenargument weerleggen → afsluiting met een conclusie.'
      }
    ]
  },

  {
    id: 'vuurtoren',
    titel: 'De sleutel van de vuurtoren',
    soort: 'Verhalend',
    emoji: '🗝️',
    niveau: 2,
    intro: 'Een verhaal. Let goed op wat de personen voelen — dat staat er niet altijd letterlijk bij.',
    alineas: [
      'De sleutel lag onder in de koekjestrommel, tussen de kruimels van koekjes die allang op waren. Hij was zwaar, roestig en veel te groot voor welk slot dan ook in het huis van oma. Sanne draaide hem om en om in haar handen. Op de kop stond een nummer: 7.',
      '"Die had ik weggestopt", zei oma vanuit haar stoel. Ze zei het rustig, maar ze legde haar boek neer en dat deed ze bijna nooit halverwege een hoofdstuk. "Leg maar terug, kind."',
      'Sanne legde de sleutel niet terug. "Waar hoort hij bij?" Buiten sloeg de wind tegen het raam. Het duurde lang voordat oma antwoord gaf, zo lang dat Sanne dacht dat ze het niet gehoord had. "Bij de deur van de vuurtoren", zei oma uiteindelijk. "Nummer zeven was de kamer van je opa."',
      'Sanne wist dat opa vroeger op zee had gewerkt. Dat had ze honderd keer gehoord. Maar over een vuurtoren had niemand ooit iets gezegd, en over een kamer met een nummer al helemaal niet. Ze ging op de armleuning van oma\'s stoel zitten, precies zoals ze deed toen ze zes was. "Vertel", zei ze.',
      'Oma zuchtte, maar het was geen boos zuchten. "In de winter van 1962 zat je opa daar veertien dagen vast. De storm was zo hevig dat niemand hem kon bereiken. Wij dachten allemaal..." Ze maakte haar zin niet af. "Toen hij terugkwam, heeft hij die sleutel meegenomen. Hij zei dat hij hem hield om nooit te vergeten dat de zee altijd wint."',
      'Sanne keek naar het roestige ding in haar hand en het voelde ineens anders. Zwaarder, maar op een andere manier. "Mag ik hem houden?" Oma was even stil. Toen glimlachte ze, en die glimlach zag Sanne bijna nooit. "Hij is al van jou sinds je hem gevonden hebt", zei ze. "Maar beloof me één ding. Als jij ooit een kleindochter hebt, stop hem dan in de koekjestrommel."'
    ],
    woorden: [
      { woord: 'armleuning', uitleg: 'De zijkant van een stoel waar je je arm op legt.' },
      { woord: 'hevig', uitleg: 'Heel erg sterk of heftig.' },
      { woord: 'vuurtoren', uitleg: 'Hoge toren aan zee met een groot licht, zodat schepen de kust kunnen zien.' }
    ],
    vragen: [
      {
        type: 'mc',
        vaardigheid: 'Gevoelens afleiden',
        vraag: 'Oma legt haar boek neer terwijl ze bijna nooit halverwege een hoofdstuk stopt. Wat laat dit zien?',
        opties: [
          'Dat oma het boek saai vindt.',
          'Dat oma de sleutel belangrijk vindt en ervan schrikt.',
          'Dat oma slecht kan lezen.',
          'Dat oma boos is op Sanne omdat ze koekjes pakte.'
        ],
        goed: 1,
        hint: 'De schrijver zegt niet wat oma voelt. Wat doet ze, en wat zegt dat over haar?',
        uitleg: 'De schrijver "toont" in plaats van te "vertellen". Iets wat ze nooit doet, doet ze nu wel — dus dit raakt haar.'
      },
      {
        type: 'mc',
        vaardigheid: 'Details begrijpen',
        vraag: 'Waarom hield opa de sleutel volgens oma?',
        opties: [
          'Om hem later aan Sanne te geven.',
          'Om nooit te vergeten dat de zee altijd wint.',
          'Omdat hij nog terug wilde naar de vuurtoren.',
          'Omdat hij hem was vergeten terug te geven.'
        ],
        goed: 1,
        hint: 'Opa\'s eigen woorden staan in alinea 5.',
        uitleg: 'In alinea 5 zegt oma letterlijk: "Hij zei dat hij hem hield om nooit te vergeten dat de zee altijd wint."'
      },
      {
        type: 'open',
        vaardigheid: 'Tussen de regels lezen',
        vraag: 'Oma zegt: "Wij dachten allemaal..." en maakt haar zin niet af. Wat wilde ze waarschijnlijk zeggen?',
        voorbeeldantwoord: 'Dat ze dachten dat opa de storm niet zou overleven, dat hij dood was.',
        hint: 'Waarom zou iemand een zin juist niet afmaken? Waar was de familie bang voor tijdens die storm?',
        uitleg: 'Ze durft het niet uit te spreken. Uit de context — veertien dagen vast, niemand kon erbij — leid je af dat ze dachten dat hij zou omkomen.'
      },
      {
        type: 'mc',
        vaardigheid: 'Beeldspraak',
        vraag: 'Er staat: "het voelde ineens anders. Zwaarder, maar op een andere manier." Wat wordt daarmee bedoeld?',
        opties: [
          'De sleutel was nat geworden en woog meer.',
          'Sanne was moe van het vasthouden.',
          'De sleutel had nu een belangrijke betekenis voor haar gekregen.',
          'De sleutel begon te roesten in haar hand.'
        ],
        goed: 2,
        hint: '"Op een andere manier" zwaar — gaat dat nog wel over gewicht in gram?',
        uitleg: 'Het gewicht is niet echt veranderd, wel de betekenis. Nu weet Sanne het verhaal, en dat maakt de sleutel kostbaar.'
      },
      {
        type: 'mc',
        vaardigheid: 'Verwijswoord',
        vraag: 'In alinea 1 staat: "Hij was zwaar, roestig en veel te groot." Waar verwijst "hij" naar?',
        opties: ['De koekjestrommel', 'De sleutel', 'Opa', 'Het slot'],
        goed: 1,
        hint: 'Waar gaat de eerste zin van het verhaal over?',
        uitleg: 'De eerste zin gaat over de sleutel, dus verwijst "hij" daarnaar. Let op: in het Nederlands is een sleutel "hij", ook al is het geen persoon.'
      },
      {
        type: 'mc',
        vaardigheid: 'Conclusie trekken',
        vraag: 'Waarom wil oma dat Sanne de sleutel later weer in de koekjestrommel stopt?',
        opties: [
          'Zodat de sleutel niet kwijtraakt tussen de kruimels.',
          'Zodat het verhaal van opa aan een volgende kleindochter doorgegeven wordt.',
          'Zodat Sanne hem niet aan haar ouders laat zien.',
          'Zodat er weer koekjes in de trommel passen.'
        ],
        goed: 1,
        hint: 'Denk aan hoe Sanne zelf het verhaal ontdekte. Wat gebeurt er als iemand de sleutel weer vindt?',
        uitleg: 'Sanne vond de sleutel en kreeg zo het verhaal te horen. Als zij hem terugstopt, kan een volgende kleindochter hetzelfde meemaken.'
      }
    ]
  }
];

// Zodat de app dit bestand ook kan gebruiken als er ooit een build-stap komt.
if (typeof module !== 'undefined') { module.exports = { OEFENINGEN }; }

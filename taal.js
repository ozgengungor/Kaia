/*
 * Taalverzorging — groep 8.
 *
 * Alles wat niet spelling en niet begrijpend lezen is: hoofdletters,
 * leestekens, directe rede, woordsoorten, zinsdelen en lastige woordparen.
 * Zelfde structuur en vraagtypes als spelling.js; de app kent geen enkele
 * oefening bij naam.
 *
 * Let op bij het schrijven van vragen: een invulvraag kijkt de app na zonder
 * op hoofdletters en leestekens aan het eind te letten. Vragen over
 * hoofdletters en leestekens zijn daarom meerkeuze- of sorteervragen.
 */

const TAALOEFENINGEN = [
  {
    id: 'tv-hoofdletters',
    titel: 'Hoofdletters: wanneer wel en wanneer niet',
    soort: 'Hoofdletters',
    emoji: '🔠',
    niveau: 1,
    intro: 'Nederland met een hoofdletter, maar maandag zonder? Ik leg je uit hoe dat zit.',
    regel: {
      stappen: [
        'Elke zin begint met een *hoofdletter*. Ook na een punt, een vraagteken of een uitroepteken.',
        'Namen van *mensen, dieren en plaatsen* krijgen een hoofdletter: Fatima, Bello, Utrecht, Nederland, de Rijn.',
        'Ook *talen, volken en feestdagen* krijgen er een: Nederlands, Fransen, Pasen, Koningsdag.',
        'Dagen, maanden, seizoenen en windstreken krijgen *géén* hoofdletter: maandag, april, zomer, het noorden.'
      ],
      voorbeelden: [
        { woord: 'de Nederlandse taal', uitleg: 'Nederlands hoort bij een land, dus een hoofdletter' },
        { woord: 'in de herfst', uitleg: 'een seizoen: kleine letter' },
        { woord: 'op dinsdag 3 maart', uitleg: 'dag en maand: kleine letters' },
        { woord: 'Sinterklaas en Kerstmis', uitleg: 'feestdagen: hoofdletter' }
      ],
      letop: 'De *ij* is één letter. Krijgt die een hoofdletter, dan worden de i én de j groot: *IJ*sselmeer, *IJ*s is koud.'
    },
    vragen: [
      {
        type: 'mc',
        vaardigheid: 'Dagen en plaatsen',
        vraag: 'In welke zin staan de hoofdletters goed?',
        opties: [
          'Op Maandag gaan we naar Rotterdam.',
          'Op maandag gaan we naar Rotterdam.',
          'Op maandag gaan we naar rotterdam.'
        ],
        goed: 1,
        hint: 'Een dag van de week is geen naam. Een stad wel.',
        uitleg: 'Maandag is een dag en krijgt een kleine letter. Rotterdam is de naam van een stad en krijgt een hoofdletter.'
      },
      {
        type: 'sorteer',
        vaardigheid: 'Hoofdletter of niet',
        vraag: 'Hoofdletter of kleine letter?',
        categorieen: ['Hoofdletter', 'Kleine letter'],
        items: ['pasen', 'zomer', 'engels', 'oktober', 'duitsland', 'het westen'],
        goed: [0, 1, 0, 1, 0, 1],
        hint: 'Feestdagen, talen en landen wel. Seizoenen, maanden en windstreken niet.',
        uitleg: 'Pasen (feestdag), Engels (taal) en Duitsland (land) krijgen een hoofdletter. Zomer, oktober en het westen niet: seizoenen, maanden en windstreken schrijf je klein.'
      },
      {
        type: 'mc',
        vaardigheid: 'Talen',
        vraag: 'Welke zin is goed?',
        opties: [
          'Mijn oma spreekt frans en een beetje Turks.',
          'Mijn oma spreekt Frans en een beetje Turks.',
          'Mijn Oma spreekt Frans en een beetje turks.'
        ],
        goed: 1,
        hint: 'Talen krijgen altijd een hoofdletter. En "mijn oma" is geen naam.',
        uitleg: 'Frans en Turks zijn talen en krijgen allebei een hoofdletter. Oma is hier gewoon een woord, geen naam, dus een kleine letter.'
      },
      {
        type: 'mc',
        vaardigheid: 'De ij',
        vraag: 'Hoe schrijf je de naam van dit meer goed?',
        opties: ['ijsselmeer', 'Ijsselmeer', 'IJsselmeer'],
        goed: 2,
        hint: 'De ij is één letter, ook al zijn het twee tekens.',
        uitleg: 'De ij telt als één letter. Krijgt die een hoofdletter, dan worden de i én de j groot: IJsselmeer.'
      },
      {
        type: 'mc',
        vaardigheid: 'Begin van de zin',
        vraag: 'Welke zin is goed?',
        opties: [
          'Kom je ook? dan nemen we de bus.',
          'Kom je ook? Dan nemen we de bus.',
          'Kom je ook, Dan nemen we de bus.'
        ],
        goed: 1,
        hint: 'Na een vraagteken is de zin afgelopen. Wat gebeurt er dan aan het begin van de volgende zin?',
        uitleg: 'Een vraagteken sluit de zin af, net als een punt. De volgende zin begint dus weer met een hoofdletter: Dan nemen we de bus.'
      },
      {
        type: 'mc',
        vaardigheid: "Zin met 's",
        vraag: 'Welke zin is goed?',
        opties: [
          "'s Ochtends drinkt Sam thee.",
          "'S ochtends drinkt Sam thee.",
          "'s ochtends drinkt sam thee."
        ],
        goed: 0,
        hint: "'s is een afkorting van het oude woordje \"des\". De hoofdletter schuift door naar het volgende woord.",
        uitleg: "Begint een zin met 's, dan krijgt het woord erna de hoofdletter: 's Ochtends. Sam is een naam en krijgt er ook een."
      }
    ]
  },

  {
    id: 'tv-leestekens',
    titel: 'Punt, vraagteken, uitroepteken en komma',
    soort: 'Leestekens',
    emoji: '❗',
    niveau: 1,
    intro: 'Leestekens zijn de verkeersborden van een tekst. Ze zeggen: stop, vraag, pas op, even wachten.',
    regel: {
      stappen: [
        'Een gewone zin eindigt op een *punt*. Een vraag eindigt op een *vraagteken*. Roep, schrik of bevel? Dan een *uitroepteken*.',
        'Een *komma* zet je tussen de dingen van een opsomming: appels, peren en bananen. Vóór *en* komt meestal geen komma.',
        'Een komma komt ook tussen twee stukken zin die elk een *persoonsvorm* hebben: Als het regent, blijven we binnen.',
        'Spreek je iemand aan? Dan zet je een komma bij de naam: Mama, mag ik een koekje?'
      ],
      voorbeelden: [
        { woord: 'Wat een mooie dag!', uitleg: 'een uitroep, dus een uitroepteken' },
        { woord: 'Waar woon jij?', uitleg: 'een vraag, dus een vraagteken' },
        { woord: 'Ik koop melk, brood en kaas.', uitleg: "opsomming: komma's, maar geen komma voor en" },
        { woord: 'Toen ik thuiskwam, was het al donker.', uitleg: 'twee persoonsvormen (kwam en was), dus een komma ertussen' }
      ],
      letop: 'Een zin waar een vraag *in* zit, is nog geen vraagzin. *Ik vraag me af of hij komt.* eindigt gewoon met een punt.'
    },
    vragen: [
      {
        type: 'sorteer',
        vaardigheid: 'Leesteken aan het eind',
        vraag: 'Welk leesteken hoort aan het eind van de zin?',
        categorieen: ['Punt', 'Vraagteken', 'Uitroepteken'],
        items: ['Hoe laat is het', 'Kijk uit', 'Morgen ga ik zwemmen', 'Wat een prachtig doelpunt', 'Weet jij waar mijn tas is', 'Ik weet niet hoe laat het is'],
        goed: [1, 2, 0, 2, 1, 0],
        hint: 'Wordt er iets gevraagd, iets geroepen, of gewoon iets verteld?',
        uitleg: '"Hoe laat is het?" en "Weet jij waar mijn tas is?" zijn vragen. "Kijk uit!" en "Wat een prachtig doelpunt!" roep je. De andere twee vertellen gewoon iets, ook al zit er in de laatste een vraag verstopt: "Ik weet niet hoe laat het is."'
      },
      {
        type: 'mc',
        vaardigheid: 'Komma bij opsomming',
        vraag: "In welke zin staan de komma's goed?",
        opties: [
          'Ik neem een boterham, een appel, en een pakje drinken mee.',
          'Ik neem een boterham, een appel en een pakje drinken mee.',
          'Ik neem een boterham een appel, en een pakje drinken mee.'
        ],
        goed: 1,
        hint: 'Tussen de dingen van de opsomming een komma, maar vóór "en" niet.',
        uitleg: 'In een opsomming zet je een komma tussen de delen. Het laatste deel hangt met en aan de rest, en daar komt geen komma voor.'
      },
      {
        type: 'mc',
        vaardigheid: 'Komma tussen twee zinnen',
        vraag: 'Waar hoort de komma?',
        opties: [
          'Als je klaar bent mag je, buiten spelen.',
          'Als je klaar bent, mag je buiten spelen.',
          'Als je, klaar bent mag je buiten spelen.'
        ],
        goed: 1,
        hint: 'Zoek de twee persoonsvormen: bent en mag. De komma komt ertussen.',
        uitleg: 'De zin heeft twee persoonsvormen: bent en mag. De komma staat precies waar het ene stuk ophoudt en het andere begint: Als je klaar bent, mag je buiten spelen.'
      },
      {
        type: 'mc',
        vaardigheid: 'Aanspreking',
        vraag: 'Welke zin is goed?',
        opties: [
          'Papa mag ik vanavond, opblijven?',
          'Papa, mag ik vanavond opblijven?',
          'Papa mag ik vanavond opblijven.'
        ],
        goed: 1,
        hint: 'Iemand wordt aangesproken én er wordt iets gevraagd.',
        uitleg: 'Na de aanspreking Papa komt een komma. En omdat het een vraag is, eindigt de zin met een vraagteken.'
      },
      {
        type: 'mc',
        vaardigheid: 'Vraag of geen vraag',
        vraag: 'Welk leesteken hoort aan het eind van deze zin? "Mijn zus vroeg of ik meeging"',
        opties: ['Een punt', 'Een vraagteken', 'Een uitroepteken'],
        goed: 0,
        hint: 'Wordt er hier aan jou iets gevraagd, of wordt er verteld dat iemand iets vroeg?',
        uitleg: 'De zin vertelt dat je zus iets vroeg; het is zelf geen vraag. Daarom eindigt hij met een punt: Mijn zus vroeg of ik meeging.'
      },
      {
        type: 'mc',
        vaardigheid: 'Komma bij opsomming',
        vraag: "Hoeveel komma's horen er in deze zin? \"Op het feest waren Noor Ahmed Lisa en Bram\"",
        opties: ['Eén', 'Twee', 'Drie'],
        goed: 1,
        hint: 'Tel de namen. Tussen welke namen komt een komma, en waar staat en?',
        uitleg: "Noor, Ahmed, Lisa en Bram: een komma na Noor en een na Ahmed. Voor en komt er geen. Dus twee komma's."
      }
    ]
  },

  {
    id: 'tv-directe-rede',
    titel: 'Aanhalingstekens: wie zegt wat?',
    soort: 'Leestekens',
    emoji: '💬',
    niveau: 2,
    intro: 'Als iemand in een verhaal praat, zie je dat aan de aanhalingstekens. Maar waar zet je de komma, de punt en de hoofdletter?',
    regel: {
      stappen: [
        'Wat iemand *precies zegt*, zet je tussen aanhalingstekens: "Ik heb honger."',
        'Staat *wie het zegt* erachter? Dan komt er een komma tussen, en de zin gaat verder met een *kleine letter*: "Ik heb honger", zei Tom.',
        'Staat *wie het zegt* ervoor? Dan komt er een *dubbele punt*, en het gesprokene begint met een hoofdletter: Tom zei: "Ik heb honger."',
        'Eindigt de hele zin met wat iemand zegt? Dan hoort de punt *binnen* de aanhalingstekens.',
        'Vertel je alleen na wát iemand zei (met dat of of)? Dan zijn er geen aanhalingstekens: Tom zei dat hij honger had.'
      ],
      voorbeelden: [
        { woord: '"Kom je mee?" vroeg Sara.', uitleg: 'vraagteken binnen de aanhalingstekens, daarna een kleine letter' },
        { woord: 'Sara vroeg: "Kom je mee?"', uitleg: 'dubbele punt ervoor, hoofdletter erna' },
        { woord: '"Wacht even", riep hij, "ik ben bijna klaar."', uitleg: 'de zin gaat na riep hij gewoon door, dus een kleine letter' },
        { woord: 'Hij zei dat hij honger had.', uitleg: 'naverteld, dus geen aanhalingstekens' }
      ],
      letop: 'Na een vraagteken of uitroepteken komt *geen* komma meer: "Help!" riep ze. Die komma bij "zei Tom" zetten sommige boeken net vóór het aanhalingsteken: "Ik heb honger," zei Tom. Allebei mag; hou aan wat je op school leert.'
    },
    vragen: [
      {
        type: 'mc',
        vaardigheid: 'Dubbele punt',
        vraag: 'Welke zin is goed?',
        opties: [
          'Lot zei: "ik ga naar huis."',
          'Lot zei: "Ik ga naar huis."',
          'Lot zei, "Ik ga naar huis."'
        ],
        goed: 1,
        hint: 'Wie het zegt staat vooraan. Welk teken komt er dan, en hoe begint de gesproken zin?',
        uitleg: 'Staat wie het zegt vooraan, dan volgt een dubbele punt en begint het gesprokene met een hoofdletter: Lot zei: "Ik ga naar huis."'
      },
      {
        type: 'mc',
        vaardigheid: 'Na een vraagteken',
        vraag: 'Welke zin is goed?',
        opties: [
          '"Waar is de hond?" Vroeg opa.',
          '"Waar is de hond?", vroeg opa.',
          '"Waar is de hond?" vroeg opa.'
        ],
        goed: 2,
        hint: 'Na een vraagteken komt geen komma meer. En gaat de zin daarna verder, of begint er een nieuwe?',
        uitleg: 'Het vraagteken sluit het gesprokene af; een komma erbij is te veel. De zin gaat daarna gewoon door met vroeg opa, dus een kleine letter.'
      },
      {
        type: 'sorteer',
        vaardigheid: 'Direct of indirect',
        vraag: 'Zijn dit de letterlijke woorden (aanhalingstekens nodig) of wordt het naverteld (geen aanhalingstekens)?',
        categorieen: ['Aanhalingstekens', 'Geen aanhalingstekens'],
        items: [
          'Mila zei dat ze moe was.',
          'Ik ben moe, zei Mila.',
          'De juf vroeg of we stil wilden zijn.',
          'Stil zijn! riep de juf.',
          'Kom je morgen? vroeg Bo.',
          'Bo vroeg of ik morgen kwam.'
        ],
        goed: [1, 0, 1, 0, 0, 1],
        hint: 'Zijn dit precies de woorden die iemand zei? Of vertelt iemand na wat er gezegd werd?',
        uitleg: '"Ik ben moe", "Stil zijn!" en "Kom je morgen?" zijn de letterlijke woorden: die krijgen aanhalingstekens. De zinnen met dat en of vertellen het na, en dan komen er geen aanhalingstekens.'
      },
      {
        type: 'mc',
        vaardigheid: 'Na een uitroepteken',
        vraag: 'Welke zin is goed?',
        opties: [
          '"Help!" riep Finn. "Mijn vlieger zit in de boom!"',
          '"Help!", riep Finn, "mijn vlieger zit in de boom!"',
          '"Help" riep Finn! "Mijn vlieger zit in de boom".'
        ],
        goed: 0,
        hint: 'Na een uitroepteken komt geen komma. En Finn roept hier twee losse zinnen.',
        uitleg: 'Finn roept twee losse zinnen. De eerste eindigt op een uitroepteken zonder komma erbij, dan komt riep Finn met een punt, en de tweede zin begint met een hoofdletter en krijgt weer aanhalingstekens.'
      },
      {
        type: 'mc',
        vaardigheid: 'De punt aan het eind',
        vraag: 'In welke zin staat de punt op de goede plek?',
        opties: [
          'Mama zei: "We eten om zes uur".',
          'Mama zei: "We eten om zes uur."',
          'Mama zei: "We eten om zes uur"'
        ],
        goed: 1,
        hint: 'De gesproken zin eindigt met een punt. Hoort die binnen of buiten de aanhalingstekens?',
        uitleg: 'De hele zin eindigt met wat mama zegt. De punt hoort dan bij de gesproken zin en staat binnen de aanhalingstekens.'
      },
      {
        type: 'mc',
        vaardigheid: 'Direct of indirect',
        vraag: 'Zet deze zin om in de directe rede: "Jorik zei dat hij zijn huiswerk af had."',
        opties: [
          'Jorik zei: "Ik heb mijn huiswerk af."',
          'Jorik zei: "Hij heeft zijn huiswerk af."',
          'Jorik zei dat: "Ik heb mijn huiswerk af."'
        ],
        goed: 0,
        hint: 'Wat zei Jorik precies, in zijn eigen woorden? Hij praat over zichzelf, dus met ik.',
        uitleg: 'In de directe rede staan de woorden zoals Jorik ze zei: hij praat over zichzelf en zegt dus ik en mijn. Het woordje dat verdwijnt.'
      }
    ]
  },

  {
    id: 'tv-woordsoorten',
    titel: 'Woordsoorten: wat voor woord is het?',
    soort: 'Grammatica',
    emoji: '🧩',
    niveau: 2,
    intro: 'Elk woord in een zin heeft een baan: dingen benoemen, beschrijven, iets doen. Kun jij zien wie wat doet?',
    regel: {
      stappen: [
        'Een *zelfstandig naamwoord* is een woord voor een mens, dier, ding of plaats. Je kunt er de, het of een voor zetten: de fiets, het bos, een hond.',
        'Een *lidwoord* is de, het of een. Het staat vóór een zelfstandig naamwoord.',
        'Een *bijvoeglijk naamwoord* zegt iets over een zelfstandig naamwoord: de *rode* fiets, het *donkere* bos.',
        'Een *werkwoord* zegt wat iemand doet of wat er gebeurt: lopen, is, heeft. Je kunt het in een andere tijd zetten.',
        'Een *voorzetsel* zegt waar of wanneer iets is: op, onder, naast, in, na, tijdens. Trucje: past het vóór "de kast"? Op de kast, naast de kast.',
        'Een *persoonlijk voornaamwoord* staat in de plaats van een naam: ik, jij, hij, zij, wij, jullie, ze.'
      ],
      voorbeelden: [
        { woord: 'De kleine kat slaapt op de bank.', uitleg: 'De = lidwoord, kleine = bijvoeglijk naamwoord, kat = zelfstandig naamwoord, slaapt = werkwoord, op = voorzetsel' },
        { woord: 'Zij fietst naar school.', uitleg: 'Zij = persoonlijk voornaamwoord, fietst = werkwoord, naar = voorzetsel, school = zelfstandig naamwoord' }
      ],
      letop: 'Een woord kan in de ene zin een andere woordsoort zijn dan in de andere: *ik loop* (werkwoord) en *de loop van de rivier* (zelfstandig naamwoord). Kijk dus altijd naar de hele zin.'
    },
    vragen: [
      {
        type: 'sorteer',
        vaardigheid: 'Woordsoort herkennen',
        vraag: 'Welke woordsoort is het?',
        categorieen: ['Zelfstandig naamwoord', 'Werkwoord', 'Bijvoeglijk naamwoord'],
        items: ['tafel', 'rennen', 'groen', 'fluisteren', 'vrolijk', 'boswachter'],
        goed: [0, 1, 2, 1, 2, 0],
        hint: 'Kun je "de" of "het" ervoor zetten? Kun je het in de verleden tijd zetten? Of zegt het hoe iets is?',
        uitleg: 'De tafel en de boswachter zijn zelfstandige naamwoorden. Rennen en fluisteren kun je in een andere tijd zetten: werkwoorden. Groen en vrolijk zeggen hoe iets of iemand is: bijvoeglijke naamwoorden.'
      },
      {
        type: 'mc',
        vaardigheid: 'Bijvoeglijk naamwoord',
        vraag: 'Welk woord is het bijvoeglijk naamwoord? "De oude man voert de eenden."',
        opties: ['De', 'oude', 'man', 'voert'],
        goed: 1,
        hint: 'Welk woord zegt iets over de man?',
        uitleg: 'Oude zegt hoe de man is en staat bij het zelfstandig naamwoord man. Daarom is oude het bijvoeglijk naamwoord. De is een lidwoord en voert het werkwoord.'
      },
      {
        type: 'mc',
        vaardigheid: 'Werkwoorden tellen',
        vraag: 'Hoeveel werkwoorden staan er in deze zin? "Wij hebben gisteren de hele middag in het zwembad gezwommen."',
        opties: ['Eén', 'Twee', 'Drie'],
        goed: 1,
        hint: 'Zoek de persoonsvorm (het woord dat verandert als je de zin in een andere tijd zet) én het deelwoord.',
        uitleg: 'Hebben is de persoonsvorm en gezwommen het voltooid deelwoord. Samen zijn dat twee werkwoorden. Middag en zwembad zijn zelfstandige naamwoorden.'
      },
      {
        type: 'sorteer',
        vaardigheid: 'Voorzetsel',
        vraag: 'Voorzetsel of niet?',
        categorieen: ['Voorzetsel', 'Geen voorzetsel'],
        items: ['onder', 'mooi', 'naast', 'tussen', 'snel', 'tijdens'],
        goed: [0, 1, 0, 0, 1, 0],
        hint: 'Probeer: ... de kast. Past het woord ervoor?',
        uitleg: 'Onder de kast, naast de kast, tussen de kasten, tijdens de les: dat werkt, dus dat zijn voorzetsels. "Mooi de kast" en "snel de kast" slaan nergens op: mooi en snel zeggen hoe iets is.'
      },
      {
        type: 'mc',
        vaardigheid: 'Persoonlijk voornaamwoord',
        vraag: 'Welk woord is een persoonlijk voornaamwoord? "Gisteren gaf zij het boek aan de juf."',
        opties: ['Gisteren', 'zij', 'het', 'juf'],
        goed: 1,
        hint: 'Welk woord staat in de plaats van een naam?',
        uitleg: 'Zij staat in de plaats van een naam (bijvoorbeeld Emma) en is dus een persoonlijk voornaamwoord. Het is hier een lidwoord bij boek, en juf is een zelfstandig naamwoord.'
      },
      {
        type: 'mc',
        vaardigheid: 'Kijk naar de zin',
        vraag: 'Welke woordsoort is "vlucht" in deze zin? "De vlucht naar Spanje duurt drie uur."',
        opties: ['Werkwoord', 'Zelfstandig naamwoord', 'Bijvoeglijk naamwoord'],
        goed: 1,
        hint: 'Wat staat er vóór vlucht? En kun je het hier in een andere tijd zetten?',
        uitleg: 'Hier staat een lidwoord voor vlucht: de vlucht. Het is een ding, dus een zelfstandig naamwoord. In "Ik vlucht naar buiten" zou vlucht wél een werkwoord zijn.'
      }
    ]
  },

  {
    id: 'tv-zinsdelen',
    titel: 'Zinsdelen: persoonsvorm, onderwerp en meer',
    soort: 'Grammatica',
    emoji: '🔍',
    niveau: 3,
    intro: 'Een zin is een puzzel van stukjes. Als je de persoonsvorm vindt, valt de rest bijna vanzelf op zijn plek.',
    regel: {
      stappen: [
        'De *persoonsvorm* vind je door de zin *vragend* te maken: het woord dat dan vooraan komt. Of zet de zin in een andere tijd: het woord dat verandert.',
        'Het *onderwerp* vind je met de vraag: *wie of wat* + persoonsvorm? "De hond blaft." Wie blaft? De hond.',
        'Het *werkwoordelijk gezegde* zijn alle werkwoorden van de zin bij elkaar: heeft ... gegeten, wil ... gaan.',
        'Het *lijdend voorwerp* vind je met: *wie of wat* + gezegde + onderwerp? "Sam eet een appel." Wat eet Sam? Een appel.',
        'Het *meewerkend voorwerp* is aan wie of voor wie iets gebeurt. Je kunt er vaak *aan* of *voor* bij zetten: "Ik geef (aan) mijn zus een cadeau."'
      ],
      voorbeelden: [
        { woord: 'Morgen geeft de juf de kinderen een toets.', uitleg: 'geeft = persoonsvorm, de juf = onderwerp, een toets = lijdend voorwerp, de kinderen = meewerkend voorwerp' },
        { woord: 'Wij hebben gisteren een film gekeken.', uitleg: 'hebben gekeken = gezegde, wij = onderwerp, een film = lijdend voorwerp' }
      ],
      letop: 'Het onderwerp staat *niet altijd vooraan*. In "Gisteren kreeg mijn broer een nieuwe fiets" is *mijn broer* het onderwerp. Vraag altijd: wie kreeg?'
    },
    vragen: [
      {
        type: 'mc',
        vaardigheid: 'Persoonsvorm',
        vraag: 'Wat is de persoonsvorm? "Na school spelen de kinderen op het plein."',
        opties: ['school', 'spelen', 'kinderen', 'plein'],
        goed: 1,
        hint: 'Maak de zin vragend: welk woord komt dan vooraan?',
        uitleg: 'Vragend wordt het: Spelen de kinderen na school op het plein? Spelen komt vooraan, dus dat is de persoonsvorm.'
      },
      {
        type: 'mc',
        vaardigheid: 'Onderwerp',
        vraag: 'Wat is het onderwerp? "Gisteren kreeg mijn broer een nieuwe fiets."',
        opties: ['Gisteren', 'mijn broer', 'een nieuwe fiets', 'kreeg'],
        goed: 1,
        hint: 'Wie of wat kreeg?',
        uitleg: 'Wie kreeg? Mijn broer. Het onderwerp staat hier dus niet vooraan: Gisteren zegt wanneer, en een nieuwe fiets is het lijdend voorwerp.'
      },
      {
        type: 'mc',
        vaardigheid: 'Lijdend voorwerp',
        vraag: 'Wat is het lijdend voorwerp? "De bakker verkoopt elke ochtend verse broodjes."',
        opties: ['De bakker', 'elke ochtend', 'verse broodjes', 'verkoopt'],
        goed: 2,
        hint: 'Wat verkoopt de bakker?',
        uitleg: 'Wie verkoopt? De bakker (onderwerp). Wat verkoopt de bakker? Verse broodjes: dat is het lijdend voorwerp.'
      },
      {
        type: 'mc',
        vaardigheid: 'Meewerkend voorwerp',
        vraag: 'Wat is het meewerkend voorwerp? "Oma stuurt haar kleinkinderen elk jaar een kaart."',
        opties: ['Oma', 'haar kleinkinderen', 'elk jaar', 'een kaart'],
        goed: 1,
        hint: 'Aan wie stuurt oma een kaart? Je kunt er "aan" voor zetten.',
        uitleg: 'Oma stuurt (aan) haar kleinkinderen een kaart. Het meewerkend voorwerp is haar kleinkinderen. Een kaart is het lijdend voorwerp.'
      },
      {
        type: 'mc',
        vaardigheid: 'Gezegde',
        vraag: 'Wat is het werkwoordelijk gezegde? "Mijn zus heeft de hele avond op haar kamer zitten lezen."',
        opties: ['heeft', 'zitten lezen', 'heeft zitten lezen', 'de hele avond'],
        goed: 2,
        hint: 'Verzamel álle werkwoorden in de zin.',
        uitleg: 'De werkwoorden zijn heeft, zitten en lezen. Samen vormen ze het werkwoordelijk gezegde: heeft zitten lezen.'
      },
      {
        type: 'sorteer',
        vaardigheid: 'Zin ontleden',
        vraag: 'Ontleed de zin "Vanmiddag geeft Lina haar vriendin een lekker koekje." Welk zinsdeel is elk stuk?',
        categorieen: ['Persoonsvorm', 'Onderwerp', 'Lijdend voorwerp', 'Meewerkend voorwerp'],
        items: ['geeft', 'Lina', 'haar vriendin', 'een lekker koekje'],
        goed: [0, 1, 3, 2],
        hint: 'Begin met de persoonsvorm. Dan: wie geeft? Wat geeft ze? Aan wie geeft ze het?',
        uitleg: 'Geeft is de persoonsvorm. Wie geeft? Lina: onderwerp. Wat geeft Lina? Een lekker koekje: lijdend voorwerp. Aan wie? Haar vriendin: meewerkend voorwerp.'
      }
    ]
  },

  {
    id: 'tv-woordparen',
    titel: 'Lastige woordparen: als of dan, hun of zij',
    soort: 'Woordkeuze',
    emoji: '⚖️',
    niveau: 2,
    intro: 'Groter als of groter dan? Hun hebben of zij hebben? Deze woorden worden vaak verwisseld, ook door volwassenen.',
    regel: {
      stappen: [
        '*Dan* gebruik je bij een verschil: groter dan, liever dan. *Als* bij hetzelfde: even groot als, net zo snel als.',
        '*Zij* of *ze* zijn degenen die iets doen (het onderwerp): zij lachen. *Hun* betekent "van hen": hun fiets. Nooit: hun hebben.',
        '*Hen* gebruik je na een voorzetsel of als lijdend voorwerp: ik zie hen, voor hen. *Hun* zonder voorzetsel betekent "aan hen": ik geef hun een boek. Twijfel je? *Ze* mag bijna altijd.',
        '*Jou* is jij als voorwerp: ik zie jou. *Jouw* betekent "van jou": jouw tas. Trucje: past *mijn*? Dan jouw. Past *mij*? Dan jou.',
        '*Mij* en *me* betekenen hetzelfde. *Mijn* betekent "van mij": mijn jas.'
      ],
      voorbeelden: [
        { woord: 'Ik ben ouder dan jij.', uitleg: 'een verschil: dan' },
        { woord: 'Ik ben even oud als jij.', uitleg: 'hetzelfde: als' },
        { woord: 'Zij spelen buiten met hun bal.', uitleg: 'zij doen iets, en de bal is van hen' },
        { woord: 'Is dit jouw jas? Ik geef hem aan jou.', uitleg: 'jouw = van jou (mijn past ook), jou = mij past ook' }
      ],
      letop: 'Je hoort mensen vaak zeggen *groter als* en *hun hebben*. Als je het opschrijft, is het echt fout: *groter dan* en *zij hebben*.'
    },
    vragen: [
      {
        type: 'invul',
        vaardigheid: 'Als of dan',
        vraag: 'Vul in: als of dan.',
        zin: 'Mijn broer is veel groter ___ ik.',
        cue: 'als / dan',
        goed: 'dan',
        hint: 'Is er een verschil, of zijn ze even groot?',
        uitleg: 'Er is een verschil (groter), dus dan: groter dan ik.'
      },
      {
        type: 'invul',
        vaardigheid: 'Als of dan',
        vraag: 'Vul in: als of dan.',
        zin: 'Onze hond is net zo oud ___ jullie kat.',
        cue: 'als / dan',
        goed: 'als',
        hint: 'Net zo oud: is dat een verschil of hetzelfde?',
        uitleg: 'Net zo oud betekent hetzelfde, en bij hetzelfde hoort als.'
      },
      {
        type: 'mc',
        vaardigheid: 'Hun, hen of zij',
        vraag: 'Welke zin is goed?',
        opties: [
          'Hun hebben de wedstrijd gewonnen.',
          'Zij hebben de wedstrijd gewonnen.',
          'Hen hebben de wedstrijd gewonnen.'
        ],
        goed: 1,
        hint: 'Wie doet iets in deze zin? Dat is het onderwerp, en dat is nooit hun.',
        uitleg: 'Wie hebben gewonnen? Dat is het onderwerp, en als onderwerp gebruik je zij (of ze). Hun betekent "van hen" en hen is een voorwerp.'
      },
      {
        type: 'invul',
        vaardigheid: 'Jou of jouw',
        vraag: 'Vul in: jou of jouw.',
        zin: 'Is dit ___ rugzak?',
        cue: 'jou / jouw',
        goed: 'jouw',
        hint: 'Past "mijn" op die plek? Dan is het jouw.',
        uitleg: 'Is dit mijn rugzak? Mijn past, dus jouw: de rugzak is van jou.'
      },
      {
        type: 'invul',
        vaardigheid: 'Jou of jouw',
        vraag: 'Vul in: jou of jouw.',
        zin: 'Ik wacht op ___ bij de ingang.',
        cue: 'jou / jouw',
        goed: 'jou',
        hint: 'Past "mij" op die plek?',
        uitleg: 'Ik wacht op mij: mij past, dus jou. Zonder w, want het is niet "van jou".'
      },
      {
        type: 'mc',
        vaardigheid: 'Hun, hen of zij',
        vraag: 'In welke zin is "hun" goed gebruikt?',
        opties: [
          'Hun zijn op vakantie.',
          'Ik heb hun gisteren nog gezien.',
          'Hun tent staat naast de onze.'
        ],
        goed: 2,
        hint: 'Hun betekent "van hen" of "aan hen". Bij "ik heb ... gezien" is het een lijdend voorwerp.',
        uitleg: 'Hun tent = de tent van hen: goed. "Hun zijn" is fout, want een onderwerp is zij. En "ik heb hun gezien" moet hen zijn (lijdend voorwerp), of gewoon ze.'
      }
    ]
  }
];

// Zodat de app dit bestand ook kan gebruiken als er ooit een build-stap komt.
if (typeof module !== 'undefined') { module.exports = { TAALOEFENINGEN }; }

/*
 * Knutselen — leren haken (en later meer) met Wolkje het schaap.
 *
 * Net als de andere databestanden is dit "data-only": werkplaats.js kent
 * geen enkele les bij naam. Een nieuw plan (breien, naaien, ...) toevoegen =
 * een object aan `plannen` plakken; het krijgt vanzelf een eigen rijtje
 * lessen op het startscherm.
 *
 * Een les:
 *   id, titel, soort ('Basis', 'Steek', 'Project'), emoji, duur
 *   intro     wat Wolkje zegt bij het begin van de les
 *   nodig     (mag ontbreken) lijstje spullen, staat boven de stappen
 *   stappen   [{ tekst, tip?, teken?, tekens? }]
 *             tekst    de stap; een stukje *tussen sterretjes* wordt vet
 *             tip      een extra tip onder de stap
 *             teken    een haakteken dat bij de stap hoort ('losse',
 *                      'halve-vaste', 'vaste', 'half-stokje', 'stokje')
 *             tekens   een rijtje tekens, als legenda
 *   schema    (mag ontbreken) een haakschema bij de les:
 *             { soort: 'rijen', steken, rijen, uitleg } of { soort: 'rond', toeren, uitleg }
 *   teller    true = de toeren- en stekenteller staat bij de les
 *   hulp      [{ probleem, oplossing }] onder "Lukt het niet?"
 *   vragen    [{ vraag, opties, goed: <index>, uitleg }] na de stappen
 *   klaar     wat Wolkje zegt als de les af is
 *
 * Voor Knutselen worden geen opnames gemaakt; "Lees voor" gebruikt de
 * browserstem.
 */

const KNUTSELEN = {
  coach: 'Wolkje',

  welkom: [
    'Hoi! Ik ben {naam}. Mijn vacht is van wol, dus van haken weet ik alles. Zullen we beginnen?',
    'Daar ben je! Pak je haaknaald en een bolletje wol, dan gaan we verder.',
    'Fijn dat je er bent! Kies maar een les. Je mag alles zo vaak doen als je wilt.'
  ],

  // Wat Wolkje zegt als een les net gelukt is.
  gelukt: [
    'Hoera, weer een les gelukt! Wat word jij goed in haken.',
    'Knap gedaan! Op naar de volgende les.',
    'Wat mooi! Ik ben trots op je.'
  ],

  // Na een vraag in "Weet je het nog?".
  vraagGoed: ['Helemaal goed!', 'Ja, precies!', 'Goed onthouden!'],
  vraagFout: 'Bijna! Kijk maar:',

  plannen: [
    {
      id: 'haken',
      titel: 'Leren haken',
      emoji: '🧶',
      uitleg: 'Van je allereerste lusje tot een echte onderzetter. Doe de lessen op volgorde, dan bouw je stap voor stap alles op.',
      lessen: [
        {
          id: 'spullen',
          titel: 'Wat heb je nodig?',
          soort: 'Basis',
          emoji: '🧺',
          duur: '5 minuten',
          intro: 'Voordat we gaan haken, zoeken we eerst de goede spullen bij elkaar. Met goed gereedschap gaat alles een stuk makkelijker.',
          stappen: [
            { tekst: 'Een *haaknaald* van 5 millimeter. Op de naald staat een getal: dat is de dikte. Met een dikke naald is beginnen het makkelijkst.' },
            {
              tekst: 'Een bol *garen* dat bij die naald past. Kies katoen of acryl dat glad is en niet pluist.',
              tip: 'Op de wikkel om de bol staat welke naald erbij hoort. Vaak staat er een tekeningetje van een haaknaald met een getal, zoals 4,5 tot 5 millimeter.'
            },
            { tekst: 'Kies een *lichte kleur*, zoals geel, lichtblauw of roze. In donkere wol zie je je steken bijna niet.' },
            { tekst: 'Een *schaar* om de draad door te knippen.' },
            { tekst: 'Een *stopnaald*: een dikke naald met een groot oog en een botte punt. Daarmee werk je aan het eind de losse draadjes weg.' },
            { tekst: 'Handig, maar niet nodig: een paar *steekmarkeerders*. Dat zijn kleine clipjes die je in een steek hangt, zodat je weet waar je bent. Een paperclip of een stukje draad in een andere kleur werkt ook.' }
          ],
          vragen: [
            {
              vraag: 'Waarom begin je het best met garen in een lichte kleur?',
              opties: ['Dat is goedkoper', 'Dan zie je je steken goed', 'Dan haak je sneller'],
              goed: 1,
              uitleg: 'In lichte wol zie je precies waar je steken zitten. Dan weet je ook waar je naald in moet.'
            },
            {
              vraag: 'Waar zie je welke haaknaald bij je garen past?',
              opties: ['Op de wikkel om de bol', 'Aan de kleur van het garen', 'Dat maakt niet uit'],
              goed: 0,
              uitleg: 'Op de wikkel staat welke naaldmaat bij het garen hoort. Een naald die past, maakt mooie steken.'
            }
          ],
          klaar: 'Heb je alles klaarliggen? Dan kunnen we echt beginnen!'
        },

        {
          id: 'vasthouden',
          titel: 'Naald en draad vasthouden',
          soort: 'Basis',
          emoji: '✋',
          duur: '10 minuten',
          intro: 'Haken doe je met twee handen. De ene hand houdt de naald vast, de andere de draad. Dat voelt eerst gek, maar het went snel.',
          stappen: [
            {
              tekst: 'Pak de haaknaald in je *rechterhand*, met het haakje naar jou toe gedraaid. Je kunt hem vasthouden als een *potlood*, of als een *mes*, met je hand eroverheen. Allebei is goed: kies wat het fijnst voelt.'
            },
            { tekst: 'Houd de naald vast bij het *platte stukje* in het midden. Daar is hij voor gemaakt.' },
            { tekst: 'Nu de draad, in je *linkerhand*. Laat de draad tussen je pink en je ringvinger door lopen en wikkel hem één keer losjes om je *pink*. Zo glijdt hij niet te snel weg.' },
            { tekst: 'Leg de draad daarna over je *wijsvinger*. Steek je wijsvinger een beetje omhoog: zo houd je de draad mooi strak.' },
            { tekst: 'Je *duim* en je *middelvinger* zijn vrij. Daarmee houd je straks je haakwerk vast, vlak onder de naald.' },
            {
              tekst: 'Ben je *linkshandig*? Dan doe je alles precies andersom: de naald in je linkerhand en de draad in je rechterhand. Je haakt dan ook de andere kant op, en dat is helemaal goed.'
            }
          ],
          hulp: [
            {
              probleem: 'Mijn hand doet pijn of wordt moe.',
              oplossing: 'Je knijpt waarschijnlijk te hard. Leg de naald even neer, schud je handen los en pak hem dan zachtjes weer op. Haken gaat het best met slappe schouders.'
            },
            {
              probleem: 'De draad schiet steeds weg.',
              oplossing: 'Wikkel de draad nog een keer om je pink. Zo houd je hem beter vast.'
            }
          ],
          vragen: [
            {
              vraag: 'Waar houd je de haaknaald vast?',
              opties: ['Helemaal bovenaan, bij het haakje', 'Bij het platte stukje in het midden', 'Helemaal aan het uiteinde'],
              goed: 1,
              uitleg: 'Het platte stukje in het midden is er speciaal voor gemaakt. Daar ligt de naald stevig in je hand.'
            }
          ],
          klaar: 'Je weet nu hoe je alles vasthoudt. Op naar je allereerste lusje!'
        },

        {
          id: 'beginlus',
          titel: 'De beginlus',
          soort: 'Basis',
          emoji: '➰',
          duur: '10 minuten',
          intro: 'Elk haakwerk begint met dezelfde lus om je naald. Die heet de beginlus, of de schuifknoop.',
          stappen: [
            { tekst: 'Pak het eind van de draad en laat een staartje van ongeveer *15 centimeter* hangen. Dat stukje werk je later weg.' },
            { tekst: 'Maak met de draad een *rondje*, zo dat de draad van de bol óver het staartje heen gaat.' },
            { tekst: 'Pak met je naald de draad van de bol en haal die *door het rondje* naar voren. Nu heb je een nieuwe lus.' },
            { tekst: 'Laat de nieuwe lus om je naald zitten en trek aan *allebei* de draden. De lus wordt kleiner en sluit om je naald.' },
            {
              tekst: 'Trek hem niet te strak: de lus moet nog makkelijk over je naald heen en weer kunnen schuiven.',
              tip: 'Valt de knoop helemaal uit elkaar als je trekt? Dan lag het rondje andersom. Begin gewoon opnieuw: dat overkomt iedereen.'
            }
          ],
          hulp: [
            {
              probleem: 'De lus zit muurvast om mijn naald.',
              oplossing: 'Dan heb je te hard getrokken. Haal hem eraf en maak een nieuwe; dat kost maar een paar tellen.'
            }
          ],
          vragen: [
            {
              vraag: 'Hoe lang laat je het staartje ongeveer?',
              opties: ['1 centimeter', '15 centimeter', '1 meter'],
              goed: 1,
              uitleg: 'Ongeveer 15 centimeter. Dan is het lang genoeg om het aan het eind met een stopnaald weg te werken.'
            }
          ],
          klaar: 'De beginlus zit erop. Nu kun je echte steken gaan maken!'
        },

        {
          id: 'lossen',
          titel: 'Lossen',
          soort: 'Steek',
          emoji: '⛓️',
          duur: '15 minuten',
          intro: 'De losse is de allereerste steek. Een rij lossen is een soort kettinkje, en daarop bouw je later al het andere.',
          stappen: [
            { tekst: 'Je hebt de beginlus om je naald. Houd met je duim en middelvinger het staartje vast, vlak onder de lus.' },
            { tekst: 'Leg de draad van achteren naar voren over je naald, of draai de naald zo dat het haakje de draad pakt. Dat heet een *omslag*.' },
            {
              tekst: 'Haal de draad met het haakje *door de lus* op je naald. Klaar: dat is één losse!',
              teken: 'losse'
            },
            { tekst: 'Er zit nu weer één lus om je naald. Doe het nog een keer: omslag, erdoor halen. Steeds hetzelfde.' },
            { tekst: 'Haak een kettinkje van *20 lossen*. Schuif je duim en middelvinger telkens een stukje mee omhoog, zodat je steeds vlak onder de naald vasthoudt.' },
            {
              tekst: 'Tel je lossen. Elk *V-tje* aan de voorkant is één losse. De lus om je naald tel je niet mee.',
              tip: 'Tel je liever niet steeds opnieuw? Hang na elke tien lossen een steekmarkeerder in je kettinkje.'
            }
          ],
          hulp: [
            {
              probleem: 'Mijn lossen zijn heel strak en de naald komt er bijna niet door.',
              oplossing: 'Houd de draad wat losser over je wijsvinger, en trek niet na elke losse aan de draad. Lukt het nog niet, probeer dan een dikkere naald.'
            },
            {
              probleem: 'Mijn lossen zijn allemaal verschillend groot.',
              oplossing: 'Dat is heel normaal in het begin. Hoe meer je oefent, hoe gelijker ze worden. Haak gewoon nog een kettinkje!'
            }
          ],
          vragen: [
            {
              vraag: 'Je hebt een kettinkje gehaakt. Telt de lus om je naald mee?',
              opties: ['Ja, dat is de eerste losse', 'Nee, die tel je niet mee'],
              goed: 1,
              uitleg: 'De lus om je naald tel je nooit mee. Je telt alleen de V-tjes van het kettinkje.'
            },
            {
              vraag: 'Hoe ziet een losse eruit in een haakschema?',
              opties: ['Als een ovaaltje', 'Als een kruisje', 'Als een T'],
              goed: 0,
              uitleg: 'Een losse is in een schema een ovaaltje, net een schakel van een ketting.'
            }
          ],
          klaar: 'Je kunt lossen haken! Daar kun je meteen iets leuks mee maken.'
        },

        {
          id: 'armbandje',
          titel: 'Project: een armbandje',
          soort: 'Project',
          emoji: '📿',
          duur: '15 minuten',
          intro: 'Met alleen lossen kun je al iets moois maken: een armbandje. Voor jezelf, of voor een vriendin.',
          nodig: ['Je haaknaald', 'Garen in een vrolijke kleur', 'Een schaar'],
          stappen: [
            { tekst: 'Maak een beginlus en laat een staartje van ongeveer *15 centimeter* hangen.' },
            { tekst: 'Haak lossen tot het kettinkje precies *één keer om je pols* past. Houd het af en toe even om je pols om te kijken.' },
            { tekst: 'Knip de draad door en laat weer een staartje van *15 centimeter* hangen. Haal het staartje helemaal door de laatste lus en trek het aan.' },
            { tekst: 'Leg het armbandje om je pols en knoop de twee staartjes met een *strik* aan elkaar. Vraag iemand om je te helpen; met één hand is dat lastig.' },
            {
              tekst: 'Wil je een dikker armbandje? Haak dan *drie* kettinkjes, knoop ze aan één kant aan elkaar en vlecht ze.',
              tip: 'Met drie verschillende kleuren wordt de vlecht extra mooi.'
            }
          ],
          hulp: [
            {
              probleem: 'Mijn armbandje is te strak.',
              oplossing: 'Haak er nog een paar lossen bij voordat je de draad doorknipt. Een armbandje mag best een beetje los zitten.'
            }
          ],
          klaar: 'Je eerste haakwerk! Draag het met trots.'
        },

        {
          id: 'halve-vasten',
          titel: 'Halve vasten',
          soort: 'Steek',
          emoji: '⚫',
          duur: '10 minuten',
          intro: 'De halve vaste is de kleinste steek die er is. Je gebruikt hem vooral om iets netjes af te maken, of om een rondje dicht te maken.',
          stappen: [
            { tekst: 'Haak eerst een kettinkje van *10 lossen*.' },
            { tekst: 'Steek je naald in de *tweede losse* vanaf je naald. De losse die het dichtst bij je naald zit, sla je dus over.' },
            { tekst: 'Maak een omslag.' },
            {
              tekst: 'Haal de draad in één keer *door de losse én door de lus* om je naald. Dat is een halve vaste.',
              teken: 'halve-vaste'
            },
            { tekst: 'Steek je naald in de volgende losse en doe hetzelfde. Ga zo door tot het eind van je kettinkje.' }
          ],
          hulp: [
            {
              probleem: 'Mijn naald komt niet door de losse.',
              oplossing: 'Draai het haakje naar beneden als je de draad terughaalt, dan blijft het nergens achter haken. En haak je lossen de volgende keer wat losser.'
            }
          ],
          vragen: [
            {
              vraag: 'In welke losse steek je je naald als eerste?',
              opties: ['In de losse die het dichtst bij je naald zit', 'In de tweede losse vanaf je naald', 'In de allereerste losse van het kettinkje'],
              goed: 1,
              uitleg: 'Je begint in de tweede losse vanaf je naald. De eerste sla je over.'
            },
            {
              vraag: 'Waar gebruik je een halve vaste vooral voor?',
              opties: ['Om iets af te maken of een rondje dicht te maken', 'Om heel snel een grote sjaal te haken', 'Om de draad door te knippen'],
              goed: 0,
              uitleg: 'De halve vaste is zo klein dat je werk er bijna niet hoger van wordt. Daarom is hij handig om iets af te maken.'
            }
          ],
          klaar: 'De halve vaste kun je. Nu komt de belangrijkste steek van allemaal!'
        },

        {
          id: 'vasten',
          titel: 'Vasten',
          soort: 'Steek',
          emoji: '✖️',
          duur: '15 minuten',
          intro: 'De vaste is de belangrijkste steek. Er zijn hele knuffels die alleen uit vasten bestaan! Hij lijkt op de halve vaste, maar je haalt de draad in twee stapjes door.',
          stappen: [
            { tekst: 'Haak een kettinkje van *11 lossen*.' },
            { tekst: 'Steek je naald in de *tweede losse* vanaf je naald.' },
            { tekst: 'Maak een omslag en haal de draad alleen door de *losse*. Nu heb je *twee lussen* om je naald.' },
            {
              tekst: 'Maak nog een omslag en haal de draad door *allebei* de lussen. Klaar: één vaste!',
              teken: 'vaste'
            },
            {
              tekst: 'Haak in elke volgende losse een vaste. Aan het eind heb je er *10*. Tel ze maar!',
              tip: 'Zeg het zachtjes mee: "erin, omslag, erdoor. Omslag, door twee." Dan krijg je vanzelf een ritme.'
            }
          ],
          hulp: [
            {
              probleem: 'Ik heb er 9 of 11 in plaats van 10.',
              oplossing: 'Dan heb je een losse overgeslagen, of er twee keer in gehaakt. Uithalen mag! Haal je naald uit de lus, trek zachtjes aan de draad tot je bij de fout bent, en haak verder.'
            },
            {
              probleem: 'Ik heb drie lussen om mijn naald.',
              oplossing: 'Dan heb je twee keer een omslag gemaakt voordat je de draad erdoor haalde. Bij een vaste is het steeds: één omslag, en dan erdoor.'
            }
          ],
          vragen: [
            {
              vraag: 'Hoeveel lussen heb je om je naald nadat je de draad de eerste keer door de losse hebt gehaald?',
              opties: ['Eén', 'Twee', 'Drie'],
              goed: 1,
              uitleg: 'Twee lussen. Met de volgende omslag haal je de draad door allebei, en dan is je vaste klaar.'
            },
            {
              vraag: 'Welk teken hoort bij een vaste?',
              opties: ['Een ovaaltje', 'Een kruisje', 'Een zwart bolletje'],
              goed: 1,
              uitleg: 'Een vaste is een kruisje. Het ovaaltje is een losse, en het zwarte bolletje een halve vaste.'
            }
          ],
          klaar: 'Vasten kun je nu ook. Daarmee kun je al bijna alles maken!'
        },

        {
          id: 'lapje',
          titel: 'Keren: een lapje van vasten',
          soort: 'Steek',
          emoji: '🟨',
          duur: '30 minuten',
          intro: 'Eén rij is leuk, maar met meer rijen wordt het een lapje. Daarvoor draai je aan het eind van elke rij je werk om. Gebruik de teller hieronder, dan raak je de tel niet kwijt.',
          stappen: [
            { tekst: 'Haak weer *11 lossen* en daarop een rij van *10 vasten*, net als in de vorige les. Bij haken heet zo\'n rij een *toer*.' },
            {
              tekst: 'Haak aan het eind van de toer *één losse*. Dat is een *keerlosse*: die zorgt dat je volgende toer niet scheef omhoog trekt.',
              teken: 'losse'
            },
            { tekst: 'Draai je werk om, zoals je een bladzijde in een boek omslaat. De draad hangt nu weer aan de kant waar je begint.' },
            { tekst: 'Kijk naar de bovenkant van je toer: elke vaste heeft daar een *V-tje* van twee draadjes. Steek je naald onder *allebei* die draadjes door.' },
            {
              tekst: 'Haak een vaste in de eerste vaste, vlak naast de keerlosse, en zo verder in elke vaste. De keerlosse tel je niet mee.',
              teken: 'vaste'
            },
            { tekst: 'Tel aan het eind: heb je weer *10 vasten*? Druk dan op de plus bij "Toer" en begin aan de volgende.' },
            {
              tekst: 'Haak zo *8 toeren*. Dan heb je je eerste lapje!',
              tip: 'Hang een steekmarkeerder in de eerste en de laatste vaste van elke toer. Dan zie je precies waar je moet beginnen en stoppen.'
            }
          ],
          schema: {
            soort: 'rijen',
            steken: 10,
            rijen: 4,
            uitleg: 'Zo ziet het begin van je lapje eruit in een haakschema. Onderaan zie je de lossen, met daarboven elke toer vasten in een andere kleur. Je leest het van onder naar boven, en elke toer de andere kant op.'
          },
          teller: true,
          hulp: [
            {
              probleem: 'Mijn lapje wordt steeds smaller of breder.',
              oplossing: 'Dat is de bekendste beginnersfout! Smaller: je slaat aan het eind een steek over. Breder: je haakt ook in de keerlosse. Tel na elke toer, en gebruik steekmarkeerders aan de randen.'
            },
            {
              probleem: 'Ik kan de laatste steek van een toer niet vinden.',
              oplossing: 'Die zit vaak een beetje verstopt en is kleiner dan de andere. Het is de allereerste vaste van de vorige toer. Draai je werk een beetje en kijk goed naar de rand.'
            }
          ],
          vragen: [
            {
              vraag: 'Waarom haak je een keerlosse aan het eind van een toer?',
              opties: ['Zodat je volgende toer niet scheef omhoog trekt', 'Omdat het mooi staat', 'Om de draad af te knippen'],
              goed: 0,
              uitleg: 'De keerlosse geeft je de hoogte om aan de volgende toer te beginnen. Zonder keerlosse trekt de rand scheef.'
            },
            {
              vraag: 'Je lapje wordt steeds breder. Wat is er waarschijnlijk gebeurd?',
              opties: ['Je hebt ook in de keerlosse gehaakt', 'Je naald is te dik', 'Je garen heeft een lichte kleur'],
              goed: 0,
              uitleg: 'Als je in de keerlosse haakt, komt er elke toer een steek bij. Tel daarom na elke toer even na.'
            }
          ],
          klaar: 'Je eerste lapje! In de volgende les maak je het netjes af.'
        },

        {
          id: 'afhechten',
          titel: 'Afhechten en draadjes wegwerken',
          soort: 'Basis',
          emoji: '✂️',
          duur: '10 minuten',
          intro: 'Je lapje is klaar! Nu maken we het netjes af, zodat het nooit meer uit elkaar gaat.',
          nodig: ['Je lapje, met de naald er nog in', 'Een schaar', 'Een stopnaald'],
          stappen: [
            { tekst: 'Haak de laatste steek van je laatste toer.' },
            { tekst: 'Knip de draad door en laat een staartje van ongeveer *15 centimeter* hangen.' },
            { tekst: 'Maak een omslag en haal het staartje *helemaal door de lus* om je naald. Trek het stevig aan. Dat heet *afhechten*: nu kan je werk niet meer uithalen.' },
            { tekst: 'Rijg het staartje in je *stopnaald*.' },
            { tekst: 'Steek de stopnaald een paar centimeter door de steken aan de achterkant, en ga daarna een stukje terug de andere kant op. Zo kan het draadje niet meer losschieten.' },
            { tekst: 'Knip het draadje vlak bij je werk af. Doe hetzelfde met het staartje van het begin.' }
          ],
          hulp: [
            {
              probleem: 'Het draadje steekt na een tijdje weer uit.',
              oplossing: 'Rijg het nog een keer heen en terug, door meer steken. Hoe vaker je van richting verandert, hoe beter het vastzit.'
            }
          ],
          vragen: [
            {
              vraag: 'Waarom rijg je het draadje heen en weer terug?',
              opties: ['Zodat het niet meer losschiet', 'Zodat het langer wordt', 'Dat hoeft eigenlijk niet'],
              goed: 0,
              uitleg: 'Door van richting te veranderen zit het draadje klem tussen de steken. Dan schiet het nooit meer los.'
            }
          ],
          klaar: 'Netjes afgemaakt! Zo ziet echt haakwerk eruit.'
        },

        {
          id: 'stokjes',
          titel: 'Stokjes',
          soort: 'Steek',
          emoji: '🥢',
          duur: '20 minuten',
          intro: 'Een stokje is een lange steek. Je werk groeit er veel sneller mee dan met vasten, en het wordt lekker luchtig.',
          stappen: [
            { tekst: 'Haak een kettinkje van *13 lossen*.' },
            { tekst: 'Maak eerst een omslag, *voordat* je je naald ergens in steekt. Dat is het grote verschil met een vaste.' },
            { tekst: 'Steek je naald in de *vierde losse* vanaf je naald.' },
            { tekst: 'Maak een omslag en haal de draad door de losse. Nu heb je *drie lussen* om je naald.' },
            {
              tekst: 'Maak een omslag en haal de draad door de eerste *twee* lussen. Er blijven er twee over.',
              tip: 'Onthoud het zo: steeds door twee. Omslag, door twee. Omslag, door twee.'
            },
            {
              tekst: 'Maak een omslag en haal de draad door de laatste *twee* lussen. Klaar: een stokje!',
              teken: 'stokje'
            },
            { tekst: 'Haak in elke volgende losse een stokje. De drie lossen die je aan het begin oversloeg, tellen samen als je eerste stokje. Aan het eind heb je er dus *11*.' }
          ],
          hulp: [
            {
              probleem: 'Ik heb drie lussen om mijn naald en weet niet meer wat ik moet doen.',
              oplossing: 'Dat is precies goed! Maak nu een omslag en haal de draad door twee lussen. Daarna nog een keer: omslag, door de laatste twee.'
            },
            {
              probleem: 'Mijn stokjes zijn heel lang en slap.',
              oplossing: 'Trek de eerste lus iets minder hoog op, en houd de draad een beetje strakker over je wijsvinger.'
            }
          ],
          vragen: [
            {
              vraag: 'Wat doe je bij een stokje als eerste?',
              opties: ['Een omslag maken', 'De naald in de losse steken', 'De draad doorknippen'],
              goed: 0,
              uitleg: 'Bij een stokje maak je eerst een omslag, en pas daarna steek je je naald in de losse.'
            },
            {
              vraag: 'Hoe vaak haal je de draad "door twee" bij één stokje?',
              opties: ['Eén keer', 'Twee keer', 'Drie keer'],
              goed: 1,
              uitleg: 'Twee keer: eerst door twee van de drie lussen, en dan door de laatste twee.'
            }
          ],
          klaar: 'Stokjes kun je ook! Nu ken je de drie belangrijkste steken.'
        },

        {
          id: 'patroon',
          titel: 'Een haakpatroon lezen',
          soort: 'Basis',
          emoji: '📜',
          duur: '10 minuten',
          intro: 'In haakboeken en op internet staan patronen. Die zijn geschreven in een soort geheimtaal van afkortingen. Ik leer je die taal!',
          stappen: [
            {
              tekst: 'Steken worden afgekort: *l* is een losse, *hv* een halve vaste, *v* een vaste, *hstk* een half stokje en *stk* een stokje. In een haakschema heeft elke steek een eigen teken.',
              tekens: ['losse', 'halve-vaste', 'vaste', 'half-stokje', 'stokje']
            },
            { tekst: 'Een getal ervoor zegt hoe vaak. *12 l* betekent: haak 12 lossen.' },
            { tekst: 'Staat er *2 v in de volgende steek*? Dan haak je twee vasten in dezelfde steek. Zo wordt je werk breder; dat heet *meerderen*.' },
            { tekst: 'Tussen rechte haken staat een stukje dat je herhaalt. Bij *[1 v, 2 v in de volgende steek] 6 keer* haak je dat hele stukje zes keer achter elkaar.' },
            {
              tekst: 'Aan het eind van een toer staat vaak een getal tussen haakjes, zoals *(18)*. Zoveel steken moet je hebben als de toer klaar is. Tel dus even na!'
            },
            {
              tekst: 'Een patroon in het Engels? Let goed op. In een Amerikaans patroon heet onze vaste *single crochet*, maar in een Brits patroon heet hij *double crochet*. Kijk dus altijd even uit welk land een patroon komt.'
            }
          ],
          vragen: [
            {
              vraag: 'Wat betekent "8 l"?',
              opties: ['8 lossen', '8 vasten', '8 toeren'],
              goed: 0,
              uitleg: 'De l staat voor losse. Je haakt dus 8 lossen.'
            },
            {
              vraag: 'Wat betekent "2 v in de volgende steek"?',
              opties: ['Twee vasten in dezelfde steek', 'Twee steken overslaan', 'Twee toeren vasten haken'],
              goed: 0,
              uitleg: 'Je haakt twee vasten in één en dezelfde steek. Zo komt er een steek bij.'
            },
            {
              vraag: 'Je haakt "[1 v, 2 v in de volgende steek] 6 keer". Hoeveel vasten heb je dan gehaakt?',
              opties: ['12', '18', '6'],
              goed: 1,
              uitleg: 'Elke keer haak je 1 + 2 = 3 vasten. Zes keer drie is 18.'
            },
            {
              vraag: 'Wat zegt het getal (18) aan het eind van een toer?',
              opties: ['Hoeveel steken je dan moet hebben', 'Hoeveel minuten het duurt', 'Welke naaldmaat je nodig hebt'],
              goed: 0,
              uitleg: 'Het getal tussen haakjes is het aantal steken als de toer klaar is. Zo kun je controleren of je goed zit.'
            }
          ],
          klaar: 'Je kunt nu een haakpatroon lezen! Dan kun je straks alles maken wat je maar wilt.'
        },

        {
          id: 'magische-ring',
          titel: 'In de rondte: de magische ring',
          soort: 'Steek',
          emoji: '🌀',
          duur: '20 minuten',
          intro: 'Tot nu toe haakte je heen en weer. Maar je kunt ook in de rondte haken, zoals een slakkenhuis. Zo maak je ronde dingen: onderzetters, mutsen en knuffels.',
          stappen: [
            { tekst: 'Leg de draad in een *rondje* om twee vingers van je linkerhand, met het staartje vóór de draad van de bol langs. Houd de plek waar de draden kruisen vast met je duim.' },
            { tekst: 'Steek je naald onder het rondje door, pak de draad van de bol en haal hem door het rondje naar voren.' },
            { tekst: 'Maak een omslag en haal de draad door de lus om je naald. Die losse houdt alles bij elkaar, maar telt *niet* mee als steek.' },
            {
              tekst: 'Haak nu *6 vasten in de ring*. Steek je naald daarvoor steeds door het midden van het rondje, onder de draden van de ring door.',
              teken: 'vaste'
            },
            {
              tekst: 'Trek aan het *staartje*: het gat in het midden trekt dicht. Dat is het toverachtige van de magische ring!',
              tip: 'Lukt de magische ring niet? Het mag ook zo: haak 2 lossen en haak 6 vasten in de tweede losse vanaf je naald. Het gaatje in het midden blijft dan iets groter.'
            },
            { tekst: 'Hang een steekmarkeerder in de eerste vaste. Zo zie je straks waar elke toer begint.' }
          ],
          schema: {
            soort: 'rond',
            toeren: 1,
            uitleg: 'Zo ziet de magische ring eruit in een haakschema: zes kruisjes, dus zes vasten, in een rondje.'
          },
          hulp: [
            {
              probleem: 'Het rondje glipt steeds van mijn vingers.',
              oplossing: 'Dat gebeurt bijna iedereen de eerste keer. Haal de draad eraf en begin opnieuw, of gebruik de manier met 2 lossen uit de tip.'
            },
            {
              probleem: 'Mijn ring gaat weer open.',
              oplossing: 'Trek het staartje nog een keer goed aan en werk het straks stevig weg, een paar keer heen en terug.'
            }
          ],
          vragen: [
            {
              vraag: 'Hoe trek je het gaatje in het midden dicht?',
              opties: ['Door aan het staartje te trekken', 'Door aan de draad van de bol te trekken', 'Door een extra losse te haken'],
              goed: 0,
              uitleg: 'Als je aan het staartje trekt, wordt de ring kleiner en sluit het gaatje.'
            },
            {
              vraag: 'Waarvoor hang je een steekmarkeerder in de eerste steek?',
              opties: ['Zodat je ziet waar de toer begint', 'Omdat het mooi is', 'Zodat de draad niet in de knoop raakt'],
              goed: 0,
              uitleg: 'In de rondte lijkt elke steek op de andere. Met een markeerder zie je meteen waar een nieuwe toer begint.'
            }
          ],
          klaar: 'De magische ring is gelukt! Nu ben je klaar voor je eerste echte project.'
        },

        {
          id: 'onderzetter',
          titel: 'Project: een ronde onderzetter',
          soort: 'Project',
          emoji: '☕',
          duur: '45 minuten',
          intro: 'Nu ga je iets echts maken: een ronde onderzetter voor je beker. Je gebruikt bijna alles wat je geleerd hebt. Houd de teller bij, dan raak je nooit de tel kwijt.',
          nodig: ['Je haaknaald van 5 millimeter', 'Garen, in één of in twee kleuren', 'Een steekmarkeerder', 'Een schaar en een stopnaald'],
          stappen: [
            { tekst: '*Toer 1:* maak een magische ring en haak er 6 vasten in. Trek de ring dicht. Je hebt nu *6* steken.' },
            { tekst: 'Je haakt gewoon door in de rondte, zonder keerlosse en zonder je werk om te draaien. Verplaats aan het begin van elke toer je steekmarkeerder naar de eerste steek.' },
            { tekst: '*Toer 2:* haak in elke steek 2 vasten. Nu heb je *12* steken.' },
            {
              tekst: '*Toer 3:* haak [1 v, 2 v in de volgende steek] 6 keer. Nu heb je *18* steken.',
              tip: 'Tel na elke toer. Klopt het getal? Dan ben je precies goed bezig.'
            },
            { tekst: '*Toer 4:* haak [1 v in elk van de volgende 2 steken, 2 v in de volgende steek] 6 keer. Nu heb je *24* steken.' },
            { tekst: '*Toer 5:* haak [1 v in elk van de volgende 3 steken, 2 v in de volgende steek] 6 keer. Nu heb je *30* steken.' },
            { tekst: '*Toer 6:* haak [1 v in elk van de volgende 4 steken, 2 v in de volgende steek] 6 keer. Nu heb je *36* steken.' },
            { tekst: 'Zie je het patroon? Elke toer komen er *6 steken* bij, en er zit steeds één vaste meer tussen de meerderingen. Wil je hem groter? Haak dan nog een toer met 5 vasten ertussen. Dan heb je er 42.' },
            { tekst: 'Groot genoeg? Haak dan één *halve vaste* in de volgende steek. Zo loopt de rand mooi glad af. Hecht af en werk je draadjes weg.', teken: 'halve-vaste' }
          ],
          schema: {
            soort: 'rond',
            toeren: 4,
            uitleg: 'De eerste vier toeren in een haakschema. Elke kleur is een toer. Je begint in het midden en haakt in de rondte naar buiten.'
          },
          teller: true,
          hulp: [
            {
              probleem: 'Mijn onderzetter gaat golven, zoals een chipje.',
              oplossing: 'Dan haak je te los, of je hebt te veel steken. Tel na of er niet meer dan 6 meerderingen in een toer zitten, en probeer anders een dunnere naald.'
            },
            {
              probleem: 'Mijn onderzetter wordt een kommetje.',
              oplossing: 'Dan haak je te strak, of je bent een meerdering vergeten. Tel na of er in elke toer 6 meerderingen zitten, en haak wat losser.'
            },
            {
              probleem: 'Ik weet niet meer in welke toer ik zit.',
              oplossing: 'Kijk op de teller, of tel de ringen vanaf het midden. Hoeveel steken heb je? Deel dat door 6, dan weet je de toer: 24 steken is toer 4.'
            }
          ],
          vragen: [
            {
              vraag: 'Hoeveel steken komen er in elke toer bij?',
              opties: ['2', '6', '12'],
              goed: 1,
              uitleg: 'In elke toer meerder je 6 keer, dus komen er 6 steken bij.'
            },
            {
              vraag: 'Toer 5 is klaar. Hoeveel steken heb je?',
              opties: ['24', '30', '36'],
              goed: 1,
              uitleg: 'Toer 5 heeft 5 keer 6 is 30 steken.'
            }
          ],
          klaar: 'Je eerste echte haakwerk! Zet er meteen een beker warme chocolademelk op.'
        }
      ]
    },

    {
      id: 'haakprojecten',
      titel: 'Leuke haakprojecten',
      emoji: '🎨',
      uitleg: 'Kun je alles uit Leren haken? Dan ben je klaar voor deze projecten. Ze worden steeds een beetje moeilijker, en onderweg leer je nog een nieuwe steek.',
      lessen: [
        {
          id: 'knuffelsjaal',
          titel: 'Een sjaaltje voor je knuffel',
          soort: 'Project',
          emoji: '🧣',
          duur: '45 minuten',
          intro: 'Brr, je knuffel heeft het koud! Laten we een sjaaltje haken. Je hebt alleen vasten nodig, en je kunt er mooie strepen in maken.',
          nodig: ['Je haaknaald', 'Garen, in één kleur of in twee kleuren voor strepen', 'Een schaar en een stopnaald', 'Een knuffel om te passen'],
          stappen: [
            { tekst: 'Haak *7 lossen*.' },
            { tekst: 'Haak een vaste in de tweede losse vanaf je naald, en in elke losse daarna. Je hebt *6 vasten*.' },
            { tekst: 'Haak 1 keerlosse, draai je werk om en haak in elke vaste een vaste. Weer *6*. Dat ken je nog van je lapje!' },
            {
              tekst: 'Haak zo door tot het sjaaltje *één keer om de nek van je knuffel* past, met aan elke kant nog een stukje over. Houd het af en toe even om.',
              tip: 'Wil je strepen? Wissel dan om de 4 toeren van kleur. Hoe dat moet, staat in de volgende stap.'
            },
            { tekst: '*Een nieuwe kleur:* haak de laatste vaste van een toer tot er nog twee lussen om je naald zitten. Maak de laatste omslag met de *nieuwe kleur* en haal die door de twee lussen. Knip de oude draad af met een staartje van 15 centimeter.' },
            { tekst: 'Is het sjaaltje lang genoeg? Hecht af en werk alle draadjes weg.' },
            { tekst: '*Franjes:* knip 12 draadjes van ongeveer 10 centimeter. Vouw een draadje dubbel. Steek je haaknaald door een steek aan het korte eind, pak het lusje en haal het erdoor. Haal dan de twee uiteinden door het lusje en trek aan.' },
            { tekst: 'Doe dat in elke steek aan de korte kanten: *6 franjes* aan elke kant. Knip ze daarna netjes even lang.' }
          ],
          teller: true,
          hulp: [
            {
              probleem: 'Mijn sjaaltje wordt breder of smaller.',
              oplossing: 'Net als bij je lapje: tel na elke toer of je 6 vasten hebt. Haak niet in de keerlosse, en vergeet de laatste steek niet.'
            },
            {
              probleem: 'Bij een nieuwe kleur zit er een gaatje.',
              oplossing: 'Trek de twee staartjes zachtjes aan voordat je verder haakt. Als je ze straks wegwerkt, gaat het gaatje dicht.'
            }
          ],
          vragen: [
            {
              vraag: 'Je begint met 7 lossen. Hoeveel vasten heb je in elke toer?',
              opties: ['5', '6', '7'],
              goed: 1,
              uitleg: 'Je begint in de tweede losse vanaf je naald, dus de eerste losse tel je niet mee. Dan heb je er 6.'
            },
            {
              vraag: 'Wanneer pak je de nieuwe kleur?',
              opties: ['Bij de laatste omslag van de laatste vaste', 'Midden in een toer', 'Na de keerlosse'],
              goed: 0,
              uitleg: 'Met de laatste omslag van de toer haal je de nieuwe kleur er al doorheen. Zo begint de volgende toer meteen in de nieuwe kleur.'
            }
          ],
          klaar: 'Je knuffel heeft het nooit meer koud. Wat staat dat sjaaltje goed!'
        },

        {
          id: 'bloemetje',
          titel: 'Een gehaakt bloemetje',
          soort: 'Project',
          emoji: '🌸',
          duur: '20 minuten',
          intro: 'Een bloemetje is zo klaar, en je kunt het overal op zetten: op een haarspeld, een tas of je jas. Je gebruikt de magische ring en stokjes.',
          nodig: ['Je haaknaald', 'Garen in een vrolijke kleur', 'Een stopnaald', 'Als je wilt: een haarspeldje of een speld om het op te naaien'],
          stappen: [
            { tekst: '*Toer 1:* maak een magische ring en haak er *5 vasten* in. Trek de ring dicht.' },
            { tekst: 'Sluit de toer met een *halve vaste* in de eerste vaste. Nu heb je een gesloten rondje, in plaats van een slakkenhuis.' },
            {
              tekst: '*Toer 2*, het eerste blaadje: haak in de volgende steek achter elkaar *1 halve vaste, 2 lossen, 2 stokjes, 2 lossen en 1 halve vaste*. Alles in dezelfde steek!',
              tip: 'Bij een stokje maak je eerst een omslag, weet je nog? Omslag, erin, omslag, erdoor. Dan twee keer: omslag, door twee.'
            },
            { tekst: 'Haak zo in elke steek een blaadje. Dan heb je *5 blaadjes*, rondom.' },
            { tekst: 'Knip de draad af, hecht af en werk de draadjes weg aan de achterkant.' },
            { tekst: 'Naai je bloemetje met de stopnaald op een haarspeldje, een tas of je jas. Of maak er een heleboel in allerlei kleuren en rijg ze aan een kettinkje van lossen.' }
          ],
          hulp: [
            {
              probleem: 'Mijn blaadjes zijn heel klein en krom.',
              oplossing: 'Haak de stokjes wat losser, en trek de lossen niet aan. Een blaadje mag best een beetje bol staan.'
            },
            {
              probleem: 'Ik heb maar plek voor 4 blaadjes.',
              oplossing: 'Dan ben je een steek vergeten of zit er een blaadje over twee steken. Tel in toer 1 na of je echt 5 vasten hebt.'
            }
          ],
          vragen: [
            {
              vraag: 'Hoe maak je van een slakkenhuis een gesloten rondje?',
              opties: ['Met een halve vaste in de eerste steek', 'Met een keerlosse', 'Door de draad af te knippen'],
              goed: 0,
              uitleg: 'Met een halve vaste in de eerste steek maak je de toer dicht. Zo begint de volgende toer netjes op dezelfde plek.'
            },
            {
              vraag: 'Hoeveel blaadjes krijgt je bloemetje?',
              opties: ['4', '5', '6'],
              goed: 1,
              uitleg: 'In de ring zitten 5 vasten, en in elke vaste komt één blaadje. Dus 5.'
            }
          ],
          klaar: 'Wat een mooi bloemetje! Waar ga je het op zetten?'
        },

        {
          id: 'boekenlegger',
          titel: 'Een boekenlegger met een kwastje',
          soort: 'Project',
          emoji: '🔖',
          duur: '40 minuten',
          intro: 'Nooit meer ezelsoren in je boek! Deze boekenlegger haak je met stokjes, en onderaan komt een vrolijk kwastje.',
          nodig: ['Je haaknaald', 'Garen', 'Een schaar en een stopnaald', 'Een boek, om te kijken hoe lang hij moet worden'],
          stappen: [
            { tekst: 'Haak *8 lossen*.' },
            { tekst: 'Haak een stokje in de *vierde losse* vanaf je naald, en in elke losse daarna. Samen met de 3 overgeslagen lossen heb je *6 stokjes*.' },
            { tekst: '*Keren:* haak 3 lossen en draai je werk om. Die 3 lossen tellen als het eerste stokje van de nieuwe toer.' },
            {
              tekst: 'Sla de eerste steek over, want daar staan je 3 lossen al boven. Haak een stokje in elke volgende steek. Het laatste stokje haak je in de *bovenste* van de 3 lossen aan het eind. Weer *6*.',
              tip: 'Dat laatste stokje vergeten is de bekendste stokjesfout. Tel na elke toer: zes stokjes!'
            },
            { tekst: 'Herhaal stap 3 en 4 tot je boekenlegger ongeveer *zo lang is als je boek*. Dat zijn zo\'n 14 toeren.' },
            { tekst: 'Hecht af en werk de draadjes weg.' },
            { tekst: '*Het kwastje:* wikkel de draad *15 keer* om drie vingers. Haal het bosje voorzichtig van je vingers en knoop er bovenin een draadje stevig omheen.' },
            { tekst: 'Knoop een tweede draadje een stukje lager om het bosje, zodat er een bolletje ontstaat. Knip de lusjes onderaan open en knip de draadjes even lang.' },
            { tekst: 'Knoop het kwastje met het bovenste draadje vast aan een korte kant van je boekenlegger.' }
          ],
          teller: true,
          hulp: [
            {
              probleem: 'Mijn boekenlegger wordt steeds smaller.',
              oplossing: 'Je vergeet het laatste stokje, in de bovenste van de 3 keerlossen. Die is lastig te zien, maar hij hoort er echt bij.'
            },
            {
              probleem: 'Mijn boekenlegger wordt steeds breder.',
              oplossing: 'Je haakt een stokje in de eerste steek van de toer. Die sla je over, want de 3 keerlossen tellen al als eerste stokje.'
            }
          ],
          vragen: [
            {
              vraag: 'Waar haak je het laatste stokje van een toer?',
              opties: ['In de bovenste van de 3 keerlossen', 'In de eerste steek van de toer', 'Nergens: die sla je over'],
              goed: 0,
              uitleg: 'De 3 keerlossen tellen als een stokje, dus in de bovenste daarvan komt het laatste stokje van de volgende toer.'
            }
          ],
          klaar: 'Een echte boekenlegger! Ga er maar meteen een mooi boek mee lezen.'
        },

        {
          id: 'minderen',
          titel: 'Nieuwe steek: minderen',
          soort: 'Steek',
          emoji: '🔻',
          duur: '15 minuten',
          intro: 'Meerderen kun je al: twee vasten in één steek. Minderen is precies andersom: van twee steken maak je er één. Daarmee haak je driehoekjes en ballen.',
          stappen: [
            { tekst: 'Haak *11 lossen* en een toer van *10 vasten*, zoals je al kunt. Haak 1 keerlosse en draai je werk om.' },
            { tekst: 'Steek je naald in de eerste steek, maak een omslag en haal de draad erdoor. Je hebt nu *2 lussen* om je naald.' },
            { tekst: 'Niet afmaken! Steek je naald meteen in de *volgende* steek, maak een omslag en haal de draad erdoor. Nu heb je *3 lussen*.' },
            { tekst: 'Maak een omslag en haal de draad door *alle 3* de lussen. Klaar: van twee steken heb je er één gemaakt.' },
            {
              tekst: 'Haak de rest van de toer gewone vasten. Tel na: je hebt nu *9* steken.',
              tip: 'In een patroon staat minderen meestal als *2 v samen*: twee vasten samen haken.'
            }
          ],
          hulp: [
            {
              probleem: 'Ik heb 4 lussen om mijn naald.',
              oplossing: 'Dan heb je ergens twee omslagen gemaakt. In elke steek maak je maar één omslag om de draad erdoor te halen.'
            },
            {
              probleem: 'Er zit een gaatje waar ik heb geminderd.',
              oplossing: 'Trek de lussen iets strakker aan voordat je ze samen afhaakt. Een klein gaatje is niet erg: dat zie je straks bijna niet.'
            }
          ],
          vragen: [
            {
              vraag: 'Je hebt 10 steken en je mindert één keer. Hoeveel steken heb je dan?',
              opties: ['8', '9', '11'],
              goed: 1,
              uitleg: 'Van twee steken maak je er één, dus er gaat er één af: 9.'
            },
            {
              vraag: 'Hoeveel lussen heb je om je naald vlak voordat je ze samen afhaakt?',
              opties: ['2', '3', '4'],
              goed: 1,
              uitleg: 'Eén lus die er al zat, en uit elke steek één erbij. Samen 3.'
            }
          ],
          klaar: 'Minderen kun je nu ook. Daarmee kun je echte vormen gaan haken!'
        },

        {
          id: 'slinger',
          titel: 'Een slinger met vlaggetjes',
          soort: 'Project',
          emoji: '🎉',
          duur: '1 uur',
          intro: 'Feest! Met een slinger vol gehaakte vlaggetjes versier je je kamer. Elk vlaggetje is een driehoekje, en dat maak je met minderen.',
          nodig: ['Je haaknaald', 'Garen in een paar verschillende kleuren', 'Een schaar en een stopnaald'],
          stappen: [
            { tekst: 'Haak *11 lossen* en daarop een toer van *10 vasten*. Dat is toer 1. (10)' },
            { tekst: 'Aan het begin van elke toer haak je *1 keerlosse* en draai je je werk om. Dat staat er hierna niet steeds meer bij.' },
            { tekst: '*Toer 2:* 1 v in elke steek. (10)' },
            {
              tekst: '*Toer 3:* 2 v samen, 1 v in elk van de volgende 6 steken, 2 v samen. (8)',
              tip: 'Zie je het? Je mindert aan het begin én aan het eind. Daarom wordt je vlaggetje aan twee kanten smaller, en blijft hij recht.'
            },
            { tekst: '*Toer 4:* 1 v in elke steek. (8)' },
            { tekst: '*Toer 5:* 2 v samen, 1 v in elk van de volgende 4 steken, 2 v samen. (6)' },
            { tekst: '*Toer 6:* 1 v in elke steek. (6) *Toer 7:* 2 v samen, 1 v in elk van de volgende 2 steken, 2 v samen. (4)' },
            { tekst: '*Toer 8:* 1 v in elke steek. (4) *Toer 9:* 2 keer 2 v samen. (2)' },
            { tekst: '*Toer 10:* 2 v samen. (1) Hecht af en werk de draadjes weg. Je eerste vlaggetje is klaar!' },
            { tekst: 'Haak nog meer vlaggetjes, in allemaal verschillende kleuren. *5 of 6* is al een mooie slinger.' },
            { tekst: 'Haak een lang kettinkje van lossen, ongeveer *1 meter*. Rijg het met de stopnaald door de bovenste rand van elk vlaggetje, en schuif ze netjes uit elkaar. Klaar om op te hangen!' }
          ],
          teller: true,
          hulp: [
            {
              probleem: 'Mijn vlaggetje wordt scheef.',
              oplossing: 'Dan minder je maar aan één kant. Haak in een mindertoer aan het begin én aan het eind 2 v samen.'
            },
            {
              probleem: 'Ik weet niet meer in welke toer ik zit.',
              oplossing: 'Tel de steken in je laatste toer en kijk welk getal tussen haakjes erbij past. Of gebruik de teller hieronder.'
            }
          ],
          vragen: [
            {
              vraag: 'In toer 3 begin je met 10 steken en minder je twee keer. Hoeveel steken heb je daarna?',
              opties: ['6', '8', '9'],
              goed: 1,
              uitleg: 'Elke keer minderen gaat er één af. Twee keer minderen: 10 min 2 is 8.'
            }
          ],
          klaar: 'Wat een feestelijke slinger! Waar ga je hem ophangen?'
        },

        {
          id: 'knuffelbal',
          titel: 'Een knuffelbal met een gezichtje',
          soort: 'Project',
          emoji: '😊',
          duur: '1 uur',
          intro: 'Nu maak je je eerste echte knuffeltje: een zachte bal met een gezichtje. Dit heet amigurumi, dat is Japans voor gehaakte knuffeltjes. Je gebruikt meerderen én minderen.',
          nodig: [
            'Je haaknaald. Heb je er ook een van 4 millimeter? Die is nog beter: dan worden de steken strakker en zie je de vulling niet.',
            'Garen in je lievelingskleur',
            'Een handje vulling, uit de hobbywinkel',
            'Een stukje zwart garen voor het gezichtje',
            'Een steekmarkeerder, een schaar en een stopnaald'
          ],
          stappen: [
            { tekst: 'Je haakt de hele bal in de rondte, als een slakkenhuis: zonder keerlossen en zonder halve vasten aan het eind van een toer. Hang je steekmarkeerder steeds in de eerste steek van de toer.' },
            { tekst: '*Toer 1:* magische ring met 6 vasten. (6)' },
            { tekst: '*Toer 2:* 2 v in elke steek. (12)' },
            { tekst: '*Toer 3:* [1 v, 2 v in de volgende steek] 6 keer. (18)' },
            { tekst: '*Toer 4:* [1 v in elk van de volgende 2 steken, 2 v in de volgende steek] 6 keer. (24)' },
            { tekst: '*Toer 5 tot en met 8:* 1 v in elke steek. (24) Dat zijn 4 toeren zonder meerderen. Je werk buigt nu vanzelf om tot een kommetje.' },
            { tekst: '*Toer 9:* [1 v in elk van de volgende 2 steken, 2 v samen] 6 keer. (18)' },
            {
              tekst: 'Borduur nu het *gezichtje*, nu je er nog makkelijk bij kunt: twee oogjes en een lachje, met zwart garen en de stopnaald.',
              tip: 'Steek voor een oogje een paar keer op dezelfde plek door, dan wordt het lekker dik.'
            },
            { tekst: 'Stop de bal vol met *vulling*. Lekker stevig, maar niet zo vol dat het tussen de steken uit piept.' },
            { tekst: '*Toer 10:* [1 v, 2 v samen] 6 keer. (12) Stop er nog wat vulling bij als dat nodig is.' },
            { tekst: '*Toer 11:* 6 keer 2 v samen. (6)' },
            { tekst: 'Knip de draad af met een lang staartje en hecht af. Rijg het staartje in je stopnaald en steek het door de voorste lusjes van de laatste 6 steken. Trek aan: het gaatje gaat dicht.' },
            {
              tekst: 'Steek de naald nog een keer dwars door de bal en knip het draadje vlak tegen de bal af. Het verdwijnt vanzelf naar binnen.',
              tip: 'Met andere kleuren wordt het iets heel anders: oranje is een pompoentje, geel een smiley, blauw met groen een planeet.'
            }
          ],
          schema: {
            soort: 'rond',
            toeren: 4,
            uitleg: 'Het begin van je bal is precies hetzelfde als je onderzetter: elke toer 6 steken erbij, tot je er 24 hebt. Daarna haak je recht omhoog en minder je weer.'
          },
          teller: true,
          hulp: [
            {
              probleem: 'De vulling piept door de gaatjes.',
              oplossing: 'Gebruik de volgende keer een dunnere naald, of stop er iets minder vulling in.'
            },
            {
              probleem: 'Mijn bal wordt een beetje een eitje.',
              oplossing: 'Dat is ook schattig! Wil je hem ronder? Haak dan de volgende keer één toer minder zonder meerderen.'
            },
            {
              probleem: 'Ik zie niet waar mijn toer begint.',
              oplossing: 'Daar is de steekmarkeerder voor. Haal hem aan het begin van elke toer uit de oude steek en hang hem in de eerste steek van de nieuwe toer.'
            }
          ],
          vragen: [
            {
              vraag: 'Waarom borduur je het gezichtje vóórdat je de bal dichtmaakt?',
              opties: ['Dan kun je er nog bij met je naald', 'Omdat het garen dan sneller droogt', 'Dat maakt niet uit'],
              goed: 0,
              uitleg: 'Zolang de bal nog open is, kun je je naald aan de binnenkant terughalen. Als hij dicht is, wordt dat heel lastig.'
            },
            {
              vraag: 'Wat gebeurt er met je werk als je een paar toeren haakt zonder te meerderen?',
              opties: ['Het blijft plat', 'Het buigt om tot een kommetje', 'Het gaat golven'],
              goed: 1,
              uitleg: 'Zonder meerderen wordt je werk niet breder, alleen hoger. Daarom buigt het om, en zo krijg je een bal.'
            }
          ],
          klaar: 'Je eerste amigurumi! Geef je knuffelbal een naam.'
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined') { module.exports = { KNUTSELEN }; }

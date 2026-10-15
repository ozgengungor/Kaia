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
    }
  ]
};

if (typeof module !== 'undefined') { module.exports = { KNUTSELEN }; }

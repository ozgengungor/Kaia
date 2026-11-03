/*
 * Mochi — spelling, deel 2: dag 15 t/m 88 (3 november 2026 – 15 januari 2027).
 * Per dag 10 werkwoorden en 8 woorden; daar komen in de app tot twee
 * herhalingen bij van wat eerder fout ging. Zelfde vorm als mochi-spelling.js.
 */
const MOCHI_SPELLING_DEEL2 = {
  werkwoorden: [
    // Dag 15
    [
      { soort: 'tt', zin: 'Elke keer als ik op mijn tong bijt, ___ het een beetje.', cue: 'bloeden', goed: 'bloedt', uitleg: '"Bijt" en "elke keer": tegenwoordige tijd. Het onderwerp is het, en dat werkt als hij: stam bloed + t = bloedt.' },
      { soort: 'tt', zin: 'Mijn broertje ___ niet alleen in het donker naar de zolder, dus ik ga altijd mee.', cue: 'durven', goed: 'durft', uitleg: '"Ga" laat zien dat het nu is: tegenwoordige tijd. Mijn broertje is een hij, dus stam + t. De stam van durven is durf (v wordt f): durft.' },
      { soort: 'vt', zin: 'Vorige week ___ de jongens van groep 8 een pompoensoep voor de hele school.', cue: 'koken', goed: 'kookten', uitleg: 'Vorige week: verleden tijd. De stam kook eindigt op een k, en die zit in \'t kofschip, dus -te. Het zijn meer jongens, dus -ten: kookten.' },
      { soort: 'dd', zin: 'Gisteren ___ wij in de klas allemaal ons eigen pepernotendeeg.', cue: 'kneden', goed: 'kneedden', uitleg: 'Gisteren: verleden tijd. De stam kneed eindigt op een d, die zit niet in \'t kofschip, dus -den (wij is meervoud). Kneed + den = kneedden.' },
      { soort: 'dd', zin: 'Vorige maand ___ mijn moeder mij aan bij de hockeyclub.', cue: 'aanmelden', goed: 'meldde', uitleg: 'Vorige maand: verleden tijd. De stam meld eindigt op een d, niet in \'t kofschip, dus -de erachter: meld + de = meldde.' },
      { soort: 'vt-sterk', zin: 'Vorige winter ___ mijn zusje met haar slee zo hard van de dijk dat ze bijna in de sloot belandde.', cue: 'glijden', goed: 'gleed', uitleg: 'Vorige winter: verleden tijd. Glijden is een sterk werkwoord: de klank verandert en er komt geen -de achter. De d van de stam blijft: gleed (meervoud gleden).' },
      { soort: 'vd', zin: 'Ik heb van mijn zakgeld een nieuw fietslampje ___, want het wordt nu vroeg donker.', cue: 'kopen', goed: 'gekocht', uitleg: 'Heb + voltooid deelwoord. Kopen is onregelmatig: het voltooid deelwoord is gekocht, met ch en een t.' },
      { soort: 'bijv', zin: 'De ___ bladeren lagen in een grote hoop naast het schuurtje.', cue: 'harken', goed: 'geharkte', uitleg: 'Het voltooid deelwoord is geharkt: de k zit in \'t kofschip, dus een t. Het staat voor "de bladeren", dus komt er een e achter: geharkte.' },
      { soort: 'val', zin: '___ je broer morgen ook naar school, of gaat hij met de bus?', cue: 'fietsen', goed: 'fietst', uitleg: 'Let op: je broer is jouw broer, dus een hij (fietst hij?), en dan is het stam + t. Alleen als jij of je zelf achter het werkwoord staat, valt de t weg.' },
      { soort: 'tt', zin: 'Mijn vader ___ elke zaterdag brood voor de hele week.', cue: 'bakken', goed: 'bakt', uitleg: 'Elke zaterdag: tegenwoordige tijd. Mijn vader is een hij, dus stam + t: bak + t = bakt.' }
    ],
    // Dag 16
    [
      { soort: 'tt', zin: 'Onze buurvrouw ___ elke ochtend haar kleine zoontje aan, terwijl haar man het ontbijt maakt.', cue: 'aankleden', goed: 'kleedt', uitleg: '"Maakt" en "elke ochtend": tegenwoordige tijd. Onze buurvrouw is een zij, dus stam + t: kleed + t = kleedt.' },
      { soort: 'tt', zin: 'Mijn oom ___ op dit moment in zijn schuur een houten slee voor de kerst.', cue: 'bouwen', goed: 'bouwt', uitleg: 'Op dit moment: tegenwoordige tijd. Mijn oom is een hij, dus stam + t: bouw + t = bouwt.' },
      { soort: 'vt', zin: 'Gisteren ___ de hele klas toen de meester over zijn eigen veter struikelde.', cue: 'giechelen', goed: 'giechelde', uitleg: 'Gisteren: verleden tijd. De hele klas is één groep, dus enkelvoud. De stam giechel eindigt op een l, niet in \'t kofschip: giechelde.' },
      { soort: 'dd', zin: 'Vorige week ___ wij ons werkstuk over de Romeinen eindelijk af.', cue: 'afronden', goed: 'rondden', uitleg: 'Vorige week: verleden tijd, en wij is meervoud. De stam rond eindigt op een d, niet in \'t kofschip, dus -den: rond + den = rondden.' },
      { soort: 'vt-sterk', zin: 'Vorige vrijdag ___ de ouders juf Anke bij haar afscheid een grote bos bloemen aan.', cue: 'aanbieden', goed: 'boden', uitleg: 'Vorige vrijdag: verleden tijd. Bieden is een sterk werkwoord: bood, en in het meervoud boden. Er komt geen -de of -te achter.' },
      { soort: 'vd', zin: 'Mijn oma heeft voor iedereen in de familie een sjaal ___.', cue: 'breien', goed: 'gebreid', uitleg: 'Heeft + voltooid deelwoord. De stam brei eindigt op ei, niet in \'t kofschip, dus een d. Check: een gebreide sjaal.' },
      { soort: 'bijv', zin: 'Mama zette een bord met ___ eieren op tafel.', cue: 'koken', goed: 'gekookte', uitleg: 'Het voltooid deelwoord is gekookt (k zit in \'t kofschip). Het hoort bij "de eieren", dus er komt een e achter: gekookte.' },
      { soort: 'engels', zin: 'Mijn broer heeft gisteravond een nieuwe game ___.', cue: 'downloaden', goed: 'gedownload', uitleg: 'Heeft + voltooid deelwoord. De stam download eindigt al op een d, dus je zet er alleen ge- voor: gedownload. Geen extra d of t.' },
      { soort: 'tt', zin: 'Op onze school ___ één simpele regel: niemand wordt buitengesloten.', cue: 'gelden', goed: 'geldt', uitleg: '"Wordt" laat zien dat het nu is: tegenwoordige tijd. Het onderwerp is één simpele regel, dat is een hij. Stam geld + t = geldt.' },
      { soort: 'tt', zin: 'Kaia ___ elke avond haar tas voor de volgende schooldag in, zodat ze niets vergeet.', cue: 'inpakken', goed: 'pakt', uitleg: 'Elke avond en "vergeet": tegenwoordige tijd. Kaia is een zij, dus stam + t: pak + t = pakt.' }
    ],
    // Dag 17
    [
      { soort: 'tt', zin: 'Onze meester ___ elke nieuwe les in met een raadsel, en wie het weet, krijgt een sticker.', cue: 'inleiden', goed: 'leidt', uitleg: '"Krijgt" en "elke les": tegenwoordige tijd. Onze meester is een hij, dus stam + t: leid + t = leidt.' },
      { soort: 'tt', zin: 'Ons kleine broertje ___ zo hard dat de buren het kunnen horen.', cue: 'huilen', goed: 'huilt', uitleg: '"Kunnen" staat in de tegenwoordige tijd. Ons broertje is een hij, dus stam + t: huil + t = huilt.' },
      { soort: 'vt', zin: 'Vorige maand ___ wij in de herfstvakantie met het hele gezin een stuk langs het IJsselmeer.', cue: 'fietsen', goed: 'fietsten', uitleg: 'Vorige maand: verleden tijd. De stam fiets eindigt op een s, die zit in \'t kofschip, dus -te. Wij is meervoud: fietsten.' },
      { soort: 'dd', zin: 'Bij de open dag van de middelbare school ___ de directeur ons gisteren bij de deur.', cue: 'begroeten', goed: 'begroette', uitleg: 'Gisteren: verleden tijd. De stam begroet eindigt op een t, die zit in \'t kofschip: begroet + te = begroette. Eén t van de stam, één van -te.' },
      { soort: 'dd', zin: 'Mijn oma ___ vroeger elke dag de hele middag met haar vriendinnen.', cue: 'kaarten', goed: 'kaartte', uitleg: 'Vroeger: verleden tijd. De stam kaart eindigt op een t, dus -te erachter: kaart + te = kaartte.' },
      { soort: 'vt-sterk', zin: 'Toen mijn broertje het paard een appel gaf, ___ het dier bijna in zijn vingers.', cue: 'bijten', goed: 'beet', uitleg: '"Gaf": verleden tijd. Bijten is een sterk werkwoord: de verleden tijd is beet, zonder -te erachter. De t van de stam blijft gewoon staan.' },
      { soort: 'vd', zin: 'Het hondje heeft de hele nacht ___, omdat het onweerde.', cue: 'blaffen', goed: 'geblaft', uitleg: 'Heeft + voltooid deelwoord. De stam blaf eindigt op een f, die zit in \'t kofschip, dus een t: geblaft.' },
      { soort: 'bijv', zin: 'In het museum zagen we een ___ schaal uit de Romeinse tijd.', cue: 'barsten', goed: 'gebarsten', uitleg: 'Barsten heeft als voltooid deelwoord gebarsten, met -en. Dat eindigt al op -en, dus er komt geen e meer bij: een gebarsten schaal.' },
      { soort: 'val', zin: 'Hoe laat ___ jij morgen naar de hockeytraining?', cue: 'fietsen', goed: 'fiets', uitleg: 'Morgen: tegenwoordige tijd. Jij staat achter het werkwoord, en dan krijgt het geen t: fiets jij.' },
      { soort: 'tt', zin: 'Opa ___ niet zo goed meer, dus je moet wat harder praten.', cue: 'horen', goed: 'hoort', uitleg: '"Moet" laat zien dat het nu is: tegenwoordige tijd. Opa is een hij, dus stam + t: hoor + t = hoort.' }
    ],
    // Dag 18
    [
      { soort: 'tt', zin: 'Kijk, de pinguïn ___ op zijn buik over het ijs naar het water.', cue: 'glijden', goed: 'glijdt', uitleg: 'Kijk: het gebeurt nu, tegenwoordige tijd. De pinguïn is een hij, dus stam + t: glijd + t = glijdt.' },
      { soort: 'tt', zin: 'Mijn moeder ___ dat ik mijn kamer elke zaterdag opruim.', cue: 'eisen', goed: 'eist', uitleg: '"Opruim" staat in de tegenwoordige tijd. Mijn moeder is een zij, dus stam + t: eis + t = eist.' },
      { soort: 'vt', zin: 'Gisterochtend ___ de buurman het ijs van de ruiten van zijn auto.', cue: 'krabben', goed: 'krabde', uitleg: 'Gisterochtend: verleden tijd. De stam krab eindigt op een b, die zit niet in \'t kofschip, dus -de: krabde.' },
      { soort: 'dd', zin: 'Gisteravond ___ mijn moeder de baby in een klein badje.', cue: 'baden', goed: 'baadde', uitleg: 'Gisteravond: verleden tijd. De stam is baad (lange aa) en eindigt op een d, dus -de: baad + de = baadde.' },
      { soort: 'dd', zin: 'Gisteren ___ onze kat een muis in de schuur.', cue: 'doden', goed: 'doodde', uitleg: 'Gisteren: verleden tijd. De stam dood eindigt op een d, niet in \'t kofschip: dood + de = doodde.' },
      { soort: 'vt-sterk', zin: 'Vorige week ___ mijn vader het kokende water van de aardappels af.', cue: 'afgieten', goed: 'goot', uitleg: 'Vorige week: verleden tijd. Gieten is een sterk werkwoord: goot (meervoud goten). Er komt geen -te achter, de t van de stam blijft.' },
      { soort: 'vd', zin: 'Wie heeft er al een lampion voor Sint-Maarten ___?', cue: 'knutselen', goed: 'geknutseld', uitleg: 'Heeft + voltooid deelwoord. De stam knutsel eindigt op een l, niet in \'t kofschip, dus een d: geknutseld.' },
      { soort: 'bijv', zin: 'De juf hing de ___ tekeningen aan de waslijn in de klas.', cue: 'kleuren', goed: 'gekleurde', uitleg: 'Het voltooid deelwoord is gekleurd (r zit niet in \'t kofschip). Voor "de tekeningen" komt er een e achter: gekleurde.' },
      { soort: 'val', zin: 'Wat ___ je moeder van het nieuwe rooster?', cue: 'denken', goed: 'denkt', uitleg: 'Je moeder is jouw moeder, dus een zij: denkt zij. De t valt alleen weg als jij of je (= jij) zelf achter het werkwoord staat.' },
      { soort: 'tt', zin: 'Mijn zusje ___ uit de zak altijd eerst de rode snoepjes.', cue: 'kiezen', goed: 'kiest', uitleg: 'Altijd: tegenwoordige tijd. Mijn zusje is een zij, dus stam + t. De stam van kiezen is kies (z wordt s): kiest.' }
    ],
    // Dag 19
    [
      { soort: 'tt', zin: 'De kok ___ het deeg net zo lang tot het mooi glad is.', cue: 'kneden', goed: 'kneedt', uitleg: '"Is" staat in de tegenwoordige tijd. De kok is een hij, dus stam + t: kneed + t = kneedt.' },
      { soort: 'tt', zin: 'Mijn broer ___ zijn bord altijd helemaal leeg, zelfs als er spruitjes op liggen.', cue: 'eten', goed: 'eet', uitleg: 'Altijd: tegenwoordige tijd, en mijn broer is een hij. De stam eet eindigt al op een t, dus er komt geen tweede t bij: eet.' },
      { soort: 'vt', zin: 'Afgelopen weekend ___ wij met het hele gezin pannenkoeken.', cue: 'bakken', goed: 'bakten', uitleg: 'Afgelopen weekend: verleden tijd. De stam bak eindigt op een k, die zit in \'t kofschip, dus -te. Wij is meervoud: bakten.' },
      { soort: 'dd', zin: 'Afgelopen nacht ___ mijn broertje aan één stuk door, dus niemand heeft goed geslapen.', cue: 'hoesten', goed: 'hoestte', uitleg: '"Heeft geslapen" laat zien dat het voorbij is: verleden tijd. De stam hoest eindigt op een t, dus hoest + te = hoestte.' },
      { soort: 'vt-sterk', zin: 'Gisteravond ___ we met het hele gezin van een heerlijke stamppot.', cue: 'genieten', goed: 'genoten', uitleg: 'Gisteravond: verleden tijd. Genieten is een sterk werkwoord: genoot, en in het meervoud genoten. We is meervoud.' },
      { soort: 'vd', zin: 'Mijn zusje heeft heel erg ___ toen ze haar prijs kreeg.', cue: 'blozen', goed: 'gebloosd', uitleg: 'Heeft + voltooid deelwoord. Kijk naar de z van blozen: die zit niet in \'t kofschip, dus een d. Je schrijft wel een s: gebloosd.' },
      { soort: 'bijv', zin: 'Mijn neef gaf mij een ___ cadeautje met een grote strik.', cue: 'inpakken', goed: 'ingepakt', uitleg: 'Het voltooid deelwoord is ingepakt. Cadeautje is een het-woord en er staat een voor, dus er komt geen e achter: een ingepakt cadeautje.' },
      { soort: 'val', zin: 'Mijn zus ___ me altijd dat ze haar kamer opruimt, maar ze doet het nooit.', cue: 'beloven', goed: 'belooft', uitleg: 'Er staat geen heeft of is bij, dus dit is de persoonsvorm in de tegenwoordige tijd (zie "doet"). Mijn zus is een zij: stam beloof + t = belooft. Beloofd met een d is het voltooid deelwoord.' },
      { soort: 'tt', zin: 'Ons hondje ___ elke keer als de postbode langskomt.', cue: 'blaffen', goed: 'blaft', uitleg: 'Elke keer en "langskomt": tegenwoordige tijd. Ons hondje is een hij, dus stam + t: blaf + t = blaft.' },
      { soort: 'dd', zin: 'Vorige week ___ wij de brief van onze penvriend in Frankrijk.', cue: 'beantwoorden', goed: 'beantwoordden', uitleg: 'Vorige week: verleden tijd, en wij is meervoud. De stam beantwoord eindigt op een d, dus -den: beantwoord + den = beantwoordden.' }
    ],
    // Dag 20
    [
      { soort: 'val', zin: 'Hoe ___ jij de stand van de competitie zo goed bij?', cue: 'bijhouden', goed: ['houd', 'hou'], uitleg: 'Tegenwoordige tijd, en jij staat achter het werkwoord. Dan komt er geen t: houd jij. Hou jij mag ook.' },
      { soort: 'tt', zin: 'Na elke training ___ onze trainer de les af met een kort praatje, en dan mogen we douchen.', cue: 'afronden', goed: 'rondt', uitleg: '"Mogen" en "na elke training": tegenwoordige tijd. Onze trainer is een hij, dus stam + t: rond + t = rondt.' },
      { soort: 'tt', zin: 'De trainer ___ elke keer heel hard op zijn fluitje als iemand buitenspel staat.', cue: 'blazen', goed: 'blaast', uitleg: '"Staat": tegenwoordige tijd. De trainer is een hij, dus stam + t. De stam van blazen is blaas (z wordt s): blaast.' },
      { soort: 'vt', zin: 'Vorige zaterdag ___ de supporters de hele wedstrijd voor ons team.', cue: 'juichen', goed: 'juichten', uitleg: 'Vorige zaterdag: verleden tijd. De stam juich eindigt op ch, die zit in \'t kofschip, dus -te. Supporters is meervoud: juichten.' },
      { soort: 'dd', zin: 'Vorige week ___ de trainer ons aan om eerst goed warm te lopen.', cue: 'aanraden', goed: 'raadde', uitleg: 'Vorige week: verleden tijd. De stam raad eindigt op een d, niet in \'t kofschip: raad + de = raadde.' },
      { soort: 'vt-sterk', zin: 'Gisteren ___ onze verdediger in de laatste minuut de spits de weg naar het doel af.', cue: 'afsnijden', goed: 'sneed', uitleg: 'Gisteren: verleden tijd. Snijden is een sterk werkwoord: sneed (meervoud sneden). De d van de stam blijft, er komt geen -de achter.' },
      { soort: 'vd', zin: 'Mijn ouders hebben ons de hele wedstrijd langs de lijn ___.', cue: 'aanmoedigen', goed: 'aangemoedigd', uitleg: 'Hebben + voltooid deelwoord. De stam moedig eindigt op een g, niet in \'t kofschip, dus een d: aangemoedigd.' },
      { soort: 'bijv', zin: 'Voor de ___ deur van de kleedkamer stonden twintig koude kinderen te wachten.', cue: 'afsluiten', goed: 'afgesloten', uitleg: 'Sluiten is sterk: het voltooid deelwoord is (af)gesloten. Dat eindigt op -en, dus er komt geen e bij: de afgesloten deur.' },
      { soort: 'tt', zin: 'Mijn zus ___ elke zaterdag als scheidsrechter bij de kleintjes.', cue: 'fluiten', goed: 'fluit', uitleg: 'Elke zaterdag: tegenwoordige tijd. Mijn zus is een zij, dus stam + t. De stam fluit eindigt al op een t, dus er komt er geen tweede bij.' },
      { soort: 'dd', zin: 'Vorige week ___ de trainer alle nieuwe spelers welkom met een kopje thee.', cue: 'heten', goed: 'heette', uitleg: 'Vorige week: verleden tijd. De stam heet eindigt op een t, dus heet + te = heette.' }
    ],
    // Dag 21
    [
      { soort: 'tt', zin: 'Mijn oma ___ de kalkoen voor het kerstdiner altijd met tijm en salie.', cue: 'kruiden', goed: 'kruidt', uitleg: 'Altijd: tegenwoordige tijd. Mijn oma is een zij, dus stam + t: kruid + t = kruidt.' },
      { soort: 'tt', zin: 'Mijn broer ___ aan tafel altijd harder dan de rest.', cue: 'kletsen', goed: 'kletst', uitleg: 'Altijd: tegenwoordige tijd. Mijn broer is een hij, dus stam + t: klets + t = kletst.' },
      { soort: 'vt', zin: 'Gisteren ___ ik mijn oma in Spanje om haar te feliciteren.', cue: 'bellen', goed: 'belde', uitleg: 'Gisteren: verleden tijd. De stam bel eindigt op een l, niet in \'t kofschip, dus -de: belde.' },
      { soort: 'dd', zin: 'Vorige winter ___ de waterleiding in de schuur van mijn opa door de strenge vorst.', cue: 'barsten', goed: 'barstte', uitleg: 'Vorige winter: verleden tijd. De stam barst eindigt op een t, die zit in \'t kofschip: barst + te = barstte.' },
      { soort: 'vt-sterk', zin: 'Mijn oma ___ vroeger elke avond voor het eten.', cue: 'bidden', goed: 'bad', uitleg: 'Vroeger: verleden tijd. Bidden is een sterk werkwoord: ik bad, wij baden. Er komt geen -de achter.' },
      { soort: 'vd', zin: 'Ik heb het nog nooit ___ om van de hoge duikplank te springen.', cue: 'durven', goed: 'gedurfd', uitleg: 'Heb + voltooid deelwoord. Kijk naar de v van durven: die zit niet in \'t kofschip, dus een d. Je schrijft wel een f: gedurfd.' },
      { soort: 'bijv', zin: 'Op tafel stond een schaal met ___ walnoten.', cue: 'kraken', goed: 'gekraakte', uitleg: 'Het voltooid deelwoord is gekraakt (k zit in \'t kofschip). Voor "de walnoten" komt er een e achter: gekraakte.' },
      { soort: 'val', zin: '___ je tante zondag ook naar de verjaardag van je opa?', cue: 'komen', goed: 'komt', uitleg: 'Je tante is jouw tante, dus een zij: komt zij. Alleen als jij of je (= jij) achter het werkwoord staat, valt de t weg.' },
      { soort: 'tt', zin: 'De baby van mijn tante ___ al door de hele kamer.', cue: 'kruipen', goed: 'kruipt', uitleg: 'Al: het gebeurt nu, tegenwoordige tijd. De baby is een hij of zij, dus stam + t: kruip + t = kruipt.' },
      { soort: 'dd', zin: 'Gisteren ___ mijn vader opa naar het ziekenhuis.', cue: 'begeleiden', goed: 'begeleidde', uitleg: 'Gisteren: verleden tijd. De stam begeleid eindigt op een d, niet in \'t kofschip: begeleid + de = begeleidde.' }
    ],
    // Dag 22
    [
      { soort: 'tt', zin: 'Mijn zusje ___ haar lampion morgen met een touwtje aan een lange stok.', cue: 'binden', goed: 'bindt', uitleg: 'Morgen: tegenwoordige tijd (die gebruik je ook voor straks). Mijn zusje is een zij, dus stam + t: bind + t = bindt.' },
      { soort: 'tt', zin: 'Mijn moeder ___ alle snoep van Sint-Maarten altijd in één grote pot, zodat we niet alles tegelijk opeten.', cue: 'gooien', goed: 'gooit', uitleg: 'Altijd: tegenwoordige tijd. Mijn moeder is een zij, dus stam + t: gooi + t = gooit.' },
      { soort: 'vt', zin: 'Vorig jaar ___ we na Sint-Maarten alle snoep eerlijk met elkaar.', cue: 'delen', goed: 'deelden', uitleg: 'Vorig jaar: verleden tijd. De stam deel eindigt op een l, niet in \'t kofschip, dus -de. We is meervoud: deelden.' },
      { soort: 'dd', zin: 'Vorig jaar ___ het kaarsje in mijn lampion de hele avond.', cue: 'branden', goed: 'brandde', uitleg: 'Vorig jaar: verleden tijd. Het kaarsje is enkelvoud. De stam brand eindigt op een d: brand + de = brandde.' },
      { soort: 'vt-sterk', zin: 'Vorig jaar ___ de buurvrouw ons met Sint-Maarten zelfgebakken koekjes aan.', cue: 'aanbieden', goed: 'bood', uitleg: 'Vorig jaar: verleden tijd. Bieden is een sterk werkwoord: bood (meervoud boden). Je schrijft een d, net als in boden.' },
      { soort: 'vd', zin: 'Ik heb mijn lampion met mooi gekleurd papier ___.', cue: 'beplakken', goed: 'beplakt', uitleg: 'Heb + voltooid deelwoord. De stam beplak eindigt op een k, die zit in \'t kofschip, dus een t. Be- woorden krijgen geen ge-: beplakt.' },
      { soort: 'bijv', zin: 'Vorig jaar lag er na Sint-Maarten een half ___ lampion in de goot.', cue: 'afbranden', goed: 'afgebrande', uitleg: 'Het voltooid deelwoord is afgebrand. Lampion is een de-woord, dus er komt een e achter, ook na een: een afgebrande lampion.' },
      { soort: 'engels', zin: 'Mijn neef ___ elke dag na school minstens een uur.', cue: 'gamen', goed: 'gamet', uitleg: 'Elke dag: tegenwoordige tijd, en mijn neef is een hij. De stam is game (je zegt geem), dus stam + t = gamet.' },
      { soort: 'tt', zin: 'Mijn broer ___ zich morgen af voor de training, want dan loopt hij mee in de optocht.', cue: 'afmelden', goed: 'meldt', uitleg: 'Morgen en "loopt": tegenwoordige tijd. Mijn broer is een hij, dus stam + t: meld + t = meldt.' },
      { soort: 'dd', zin: 'Vorig jaar ___ de buren na de optocht nog tot laat.', cue: 'feesten', goed: 'feestten', uitleg: 'Vorig jaar: verleden tijd, en de buren is meervoud. De stam feest eindigt op een t: feest + ten = feestten.' }
    ],
    // Dag 23
    [
      { soort: 'tt', zin: 'Elk jaar ___ de buurvrouw ons met Sint-Maarten warme chocolademelk aan.', cue: 'aanbieden', goed: 'biedt', uitleg: 'Elk jaar: tegenwoordige tijd. De buurvrouw is een zij, dus stam + t: bied + t = biedt.' },
      { soort: 'tt', zin: 'Opa ___ altijd alsof hij heel erg schrikt van ons liedje.', cue: 'doen', goed: 'doet', uitleg: 'Altijd en "schrikt": tegenwoordige tijd. Opa is een hij, dus stam + t: doe + t = doet.' },
      { soort: 'vt', zin: 'Vorig jaar ___ mijn broertje na drie huizen al dat hij moe was.', cue: 'klagen', goed: 'klaagde', uitleg: 'Vorig jaar: verleden tijd. De stam klaag eindigt op een g, die zit niet in \'t kofschip, dus -de: klaagde.' },
      { soort: 'dd', zin: 'Vorig jaar ___ mijn grote broer stiekem een paar snoepjes uit mijn zak.', cue: 'jatten', goed: 'jatte', uitleg: 'Vorig jaar: verleden tijd. De stam jat eindigt op een t: jat + te = jatte.' },
      { soort: 'vt-sterk', zin: 'Vorig jaar ___ ik mijn lampion na afloop per ongeluk bij de buren achter.', cue: 'achterlaten', goed: 'liet', uitleg: 'Vorig jaar: verleden tijd. Laten is een sterk werkwoord: liet (meervoud lieten), zonder -te.' },
      { soort: 'vd', zin: 'We hebben vanavond al bij twintig huizen ___.', cue: 'aanbellen', goed: 'aangebeld', uitleg: 'Hebben + voltooid deelwoord. De stam bel eindigt op een l, niet in \'t kofschip, dus een d: aangebeld.' },
      { soort: 'bijv', zin: 'Mijn broertje liep trots met zijn ___ lampion voorop.', cue: 'beschilderen', goed: 'beschilderde', uitleg: 'Het voltooid deelwoord is beschilderd. Het staat voor een de-woord met zijn ervoor, dus er komt een e achter: beschilderde.' },
      { soort: 'val', zin: 'Mijn zus ___ haar snoep altijd tot de kerstvakantie, en dan heeft ze nog een hele pot.', cue: 'bewaren', goed: 'bewaart', uitleg: 'Geen heeft of is erbij: dit is de persoonsvorm, tegenwoordige tijd. Mijn zus is een zij: stam bewaar + t = bewaart. Bewaard met een d is het voltooid deelwoord.' },
      { soort: 'tt', zin: 'Mijn moeder ___ vanavond een grote schaal snoep klaar voor de kinderen.', cue: 'klaarzetten', goed: 'zet', uitleg: 'Vanavond: tegenwoordige tijd, en mijn moeder is een zij. De stam zet eindigt al op een t, dus er komt geen t meer bij.' },
      { soort: 'dd', zin: 'Vorig jaar ___ de schapen in de wei gewoon mee met ons liedje.', cue: 'blaten', goed: 'blaatten', uitleg: 'Vorig jaar: verleden tijd, en de schapen is meervoud. De stam blaat eindigt op een t: blaat + ten = blaatten.' }
    ],
    // Dag 24
    [
      { soort: 'tt', zin: 'Elke ochtend ___ de vuilniswagen precies om acht uur onze straat in.', cue: 'inrijden', goed: 'rijdt', uitleg: 'Elke ochtend: tegenwoordige tijd. De vuilniswagen is een hij, dus stam + t: rijd + t = rijdt.' },
      { soort: 'tt', zin: 'Ons buurmeisje ___ altijd al haar snoep met haar kleine broertje.', cue: 'delen', goed: 'deelt', uitleg: 'Altijd: tegenwoordige tijd. Ons buurmeisje is een zij, dus stam + t: deel + t = deelt.' },
      { soort: 'vt', zin: 'Gisteravond ___ wij met Sint-Maarten bij bijna dertig huizen aan.', cue: 'aanbellen', goed: 'belden', uitleg: 'Gisteravond: verleden tijd. De stam bel eindigt op een l, niet in \'t kofschip, dus -de. Wij is meervoud: belden.' },
      { soort: 'dd', zin: 'Gisteravond ___ de ouders hun kinderen extra warm aan, want het vroor.', cue: 'aankleden', goed: 'kleedden', uitleg: 'Gisteravond: verleden tijd, en de ouders is meervoud. De stam kleed eindigt op een d: kleed + den = kleedden.' },
      { soort: 'vt-sterk', zin: 'Mijn kleine zusje ___ gisteren zichtbaar van al die lichtjes in het donker.', cue: 'genieten', goed: 'genoot', uitleg: 'Gisteren: verleden tijd. Genieten is een sterk werkwoord: genoot (meervoud genoten), zonder -te.' },
      { soort: 'vd', zin: 'Hoeveel snoepjes heb jij gisteravond ___?', cue: 'krijgen', goed: 'gekregen', uitleg: 'Heb + voltooid deelwoord. Krijgen is een sterk werkwoord: het voltooid deelwoord is gekregen, op -en.' },
      { soort: 'bijv', zin: 'In de vuilnisbak lag een ___ lampion die niemand meer wilde hebben.', cue: 'kreuken', goed: 'gekreukte', uitleg: 'Het voltooid deelwoord is gekreukt (k zit in \'t kofschip). Lampion is een de-woord, dus er komt een e achter: een gekreukte lampion.' },
      { soort: 'val', zin: 'Hoeveel snoep ___ jij gisteren eigenlijk opgehaald?', cue: 'hebben', goed: 'heb', uitleg: 'Jij staat achter het werkwoord, dan gebruik je de korte vorm: heb jij. Bij hij of je broer zou het heeft zijn.' },
      { soort: 'tt', zin: 'Mijn broertje ___ dat hij volgend jaar weer het meeste snoep krijgt.', cue: 'hopen', goed: 'hoopt', uitleg: '"Krijgt": tegenwoordige tijd. Mijn broertje is een hij, dus stam + t: hoop + t = hoopt.' },
      { soort: 'dd', zin: 'Vroeger ___ ik spruitjes, maar nu vind ik ze wel lekker.', cue: 'haten', goed: 'haatte', uitleg: 'Vroeger: verleden tijd. De stam haat eindigt op een t: haat + te = haatte.' }
    ],
    // Dag 25
    [
      { soort: 'tt', zin: 'De directeur ___ morgen de nieuwe gymzaal in met een groot feest.', cue: 'inwijden', goed: 'wijdt', uitleg: 'Morgen: tegenwoordige tijd. De directeur is een hij, dus stam + t: wijd + t = wijdt.' },
      { soort: 'tt', zin: 'Onze juf ___ de klas elke ochtend met een handdruk bij de deur.', cue: 'begroeten', goed: 'begroet', uitleg: 'Elke ochtend: tegenwoordige tijd, en de juf is een zij. De stam begroet eindigt al op een t, dus er komt er geen tweede bij.' },
      { soort: 'vt', zin: 'Gisteren ___ de meester drie keer heel hard op de deur voordat hij binnenkwam.', cue: 'kloppen', goed: 'klopte', uitleg: 'Gisteren: verleden tijd. De stam klop eindigt op een p, die zit in \'t kofschip, dus -te: klopte.' },
      { soort: 'dd', zin: 'Vorig voorjaar ___ wij met de klas de hele border naast het schoolplein met bloembollen.', cue: 'beplanten', goed: 'beplantten', uitleg: 'Vorig voorjaar: verleden tijd, en wij is meervoud. De stam beplant eindigt op een t: beplant + ten = beplantten.' },
      { soort: 'vt-sterk', zin: 'Gisteren ___ Sam en Noor samen een spreekbeurt over vulkanen.', cue: 'houden', goed: 'hielden', uitleg: 'Gisteren: verleden tijd, en Sam en Noor zijn met z\'n tweeën. Houden is sterk: hield, meervoud hielden.' },
      { soort: 'vd', zin: 'Ik heb de som drie keer ___, maar ik kom steeds op een ander antwoord.', cue: 'controleren', goed: 'gecontroleerd', uitleg: 'Heb + voltooid deelwoord. De stam controleer eindigt op een r, niet in \'t kofschip, dus een d: gecontroleerd.' },
      { soort: 'bijv', zin: 'De ___ proefwerken lagen op het bureau van de meester.', cue: 'corrigeren', goed: 'gecorrigeerde', uitleg: 'Het voltooid deelwoord is gecorrigeerd. Voor "de proefwerken" komt er een e achter: gecorrigeerde.' },
      { soort: 'val', zin: '___ je me vanavond even als je thuis bent?', cue: 'bellen', goed: 'bel', uitleg: 'Hier betekent je hetzelfde als jij (je kunt het niet vervangen door jouw). Jij staat achter het werkwoord, dus geen t: bel je.' },
      { soort: 'tt', zin: 'Elke dag ___ een ander kind de klassenplanten water.', cue: 'geven', goed: 'geeft', uitleg: 'Elke dag: tegenwoordige tijd. Een ander kind is een hij of zij, dus stam + t. De stam van geven is geef (v wordt f): geeft.' },
      { soort: 'tt', zin: 'Het kantoor van de directeur ___ zich naast de gymzaal, dus loop daar even zachtjes.', cue: 'bevinden', goed: 'bevindt', uitleg: '"Loop" laat zien dat het om nu gaat: tegenwoordige tijd. Het kantoor is een hij-vorm, dus stam + t: bevind + t = bevindt.' }
    ],
    // Dag 26
    [
      { soort: 'tt', zin: 'De Piet met het grote boek ___ precies bij wie er lief is geweest.', cue: 'bijhouden', goed: 'houdt', uitleg: 'Tegenwoordige tijd. De Piet is een hij, dus stam + t: houd + t = houdt.' },
      { soort: 'tt', zin: 'De burgemeester ___ Sinterklaas vandaag welkom in onze stad.', cue: 'heten', goed: 'heet', uitleg: 'Vandaag: tegenwoordige tijd. De burgemeester is een hij, dus stam + t. De stam heet eindigt al op een t, dus er komt geen tweede bij.' },
      { soort: 'vt', zin: 'Vorig jaar ___ ik zo hard toen Sinterklaas aankwam dat mijn keel pijn deed.', cue: 'gillen', goed: 'gilde', uitleg: 'Vorig jaar: verleden tijd. De stam gil eindigt op een l, niet in \'t kofschip, dus -de: gilde.' },
      { soort: 'dd', zin: 'Toen Sinterklaas vorig jaar vroeg wie er lief was geweest, ___ mijn broertje heel hard: "Ik!"', cue: 'antwoorden', goed: 'antwoordde', uitleg: 'Vorig jaar: verleden tijd. De stam antwoord eindigt op een d: antwoord + de = antwoordde.' },
      { soort: 'vt-sterk', zin: 'Vorig jaar ___ een Piet het paard van Sinterklaas aan een paal bij de kade.', cue: 'binden', goed: 'bond', uitleg: 'Vorig jaar: verleden tijd. Binden is een sterk werkwoord: bond (meervoud bonden). Je schrijft een d, net als in bonden.' },
      { soort: 'vd', zin: 'De Pieten hebben de hele middag pepernoten ___.', cue: 'gooien', goed: 'gegooid', uitleg: 'Hebben + voltooid deelwoord. De stam gooi eindigt op oi, niet in \'t kofschip, dus een d: gegooid.' },
      { soort: 'bijv', zin: 'Op de kade lagen allemaal ___ pepernoten.', cue: 'kapottrappen', goed: 'kapotgetrapte', uitleg: 'Het voltooid deelwoord is kapotgetrapt (p zit in \'t kofschip). Voor "de pepernoten" komt er een e achter: kapotgetrapte.' },
      { soort: 'engels', zin: 'Gisteren ___ mijn tante een foto van haar nieuwe puppy naar de hele familie.', cue: 'appen', goed: 'appte', uitleg: 'Gisteren: verleden tijd. De stam app eindigt op een p, die zit in \'t kofschip, dus -te: appte.' },
      { soort: 'tt', zin: 'Mijn zusje ___ een beetje als de Pieten te dichtbij komen.', cue: 'beven', goed: 'beeft', uitleg: '"Komen": tegenwoordige tijd. Mijn zusje is een zij, dus stam + t. De stam van beven is beef (v wordt f): beeft.' },
      { soort: 'dd', zin: 'Vorig jaar ___ de chocoladeletters bij de bakker nog twee euro per stuk.', cue: 'kosten', goed: 'kostten', uitleg: 'Vorig jaar: verleden tijd, en de chocoladeletters is meervoud. De stam kost eindigt op een t: kost + ten = kostten.' }
    ],
    // Dag 27
    [
      { soort: 'tt', zin: 'Een mus ___ graag in het zand om van zijn beestjes af te komen.', cue: 'baden', goed: 'baadt', uitleg: 'Tegenwoordige tijd: zo doet een mus dat altijd. Een mus is een hij, dus stam + t: baad + t = baadt.' },
      { soort: 'tt', zin: 'Mijn zusje ___ elke ochtend als eerste in haar schoen.', cue: 'kijken', goed: 'kijkt', uitleg: 'Elke ochtend: tegenwoordige tijd. Mijn zusje is een zij, dus stam + t: kijk + t = kijkt.' },
      { soort: 'vt', zin: 'Gisterochtend ___ mijn zusje haar schoen meteen leeg op het kleed: er zat een chocolademuis in!', cue: 'kieperen', goed: 'kieperde', uitleg: 'Gisterochtend en "zat": verleden tijd. De stam kieper eindigt op een r, niet in \'t kofschip, dus -de: kieperde.' },
      { soort: 'dd', zin: 'Gisteren ___ oma het deeg voor de pepernoten met kaneel en nootmuskaat.', cue: 'kruiden', goed: 'kruidde', uitleg: 'Gisteren: verleden tijd. De stam kruid eindigt op een d: kruid + de = kruidde.' },
      { soort: 'vt-sterk', zin: 'Gisteravond ___ mijn broer en ik samen de chocolademelk in de bekers.', cue: 'gieten', goed: 'goten', uitleg: 'Gisteravond: verleden tijd, en mijn broer en ik is meervoud. Gieten is sterk: goot, meervoud goten.' },
      { soort: 'vd', zin: 'Heb jij al een gedichtje voor Sinterklaas ___?', cue: 'bedenken', goed: 'bedacht', uitleg: 'Heb + voltooid deelwoord. Bedenken is onregelmatig: bedacht, met ch en een t.' },
      { soort: 'bijv', zin: 'Naast mijn schoen lag een ___ wortel: het paard was dus echt geweest!', cue: 'aanbijten', goed: 'aangebeten', uitleg: 'Bijten is sterk: het voltooid deelwoord is (aan)gebeten. Dat eindigt op -en, dus er komt geen e bij: een aangebeten wortel.' },
      { soort: 'val', zin: '___ je zusje nog in Sinterklaas?', cue: 'geloven', goed: 'gelooft', uitleg: 'Je zusje is jouw zusje, dus een zij: gelooft zij. Stam geloof + t. Alleen bij jij of je (= jij) achter het werkwoord valt de t weg.' },
      { soort: 'tt', zin: 'Mijn opa ___ elk jaar een grote zak pepernoten bij de bakker.', cue: 'halen', goed: 'haalt', uitleg: 'Elk jaar: tegenwoordige tijd. Mijn opa is een hij, dus stam + t: haal + t = haalt.' },
      { soort: 'dd', zin: 'Vorig jaar ___ mijn ouders mij af om mijn schoen buiten te zetten, vanwege de regen.', cue: 'afraden', goed: 'raadden', uitleg: 'Vorig jaar: verleden tijd, en mijn ouders is meervoud. De stam raad eindigt op een d: raad + den = raadden.' }
    ],
    // Dag 28
    [
      { soort: 'tt', zin: 'Kijk, in de vensterbank ___ al een kaarsje, want het wordt nu vroeg donker.', cue: 'branden', goed: 'brandt', uitleg: 'Kijk en "wordt": tegenwoordige tijd. Het kaarsje is een hij-vorm, dus stam + t: brand + t = brandt.' },
      { soort: 'tt', zin: 'Kijk, het ___ ineens, er liggen allemaal witte balletjes op het gras!', cue: 'hagelen', goed: 'hagelt', uitleg: 'Kijk en "liggen": tegenwoordige tijd. Het is enkelvoud, dus stam + t: hagel + t = hagelt.' },
      { soort: 'vt', zin: 'Gisteravond ___ de wind zo hard om ons huis dat ik niet kon slapen.', cue: 'gieren', goed: 'gierde', uitleg: 'Gisteravond: verleden tijd. De stam gier eindigt op een r, niet in \'t kofschip, dus -de: gierde.' },
      { soort: 'dd', zin: 'Gisteren ___ het onweer de hele klas af van de rekenles.', cue: 'afleiden', goed: 'leidde', uitleg: 'Gisteren: verleden tijd. De stam leid eindigt op een d: leid + de = leidde.' },
      { soort: 'vt-sterk', zin: 'Gisteren ___ de eerste natte bladeren als kleine bootjes over de vijver.', cue: 'glijden', goed: 'gleden', uitleg: 'Gisteren: verleden tijd, en de bladeren is meervoud. Glijden is sterk: gleed, meervoud gleden.' },
      { soort: 'vd', zin: 'De storm heeft de vuilnisbakken door de hele straat ___.', cue: 'blazen', goed: 'geblazen', uitleg: 'Heeft + voltooid deelwoord. Blazen is een sterk werkwoord: geblazen, op -en.' },
      { soort: 'bijv', zin: 'Ik zette mijn ___ gymschoenen bij de verwarming.', cue: 'doorweken', goed: 'doorweekte', uitleg: 'Het voltooid deelwoord is doorweekt (k zit in \'t kofschip). Voor "de gymschoenen" komt er een e achter: doorweekte.' },
      { soort: 'val', zin: 'Mijn moeder heeft ons ___ dat we gaan schaatsen als het ijs dik genoeg is.', cue: 'beloven', goed: 'beloofd', uitleg: 'Heeft + voltooid deelwoord. Kijk naar de v van beloven: niet in \'t kofschip, dus een d. Beloofd, niet belooft (dat is de persoonsvorm: zij belooft).' },
      { soort: 'tt', zin: 'Kaia ___ elke ochtend haar dikste trui aan.', cue: 'aantrekken', goed: 'trekt', uitleg: 'Elke ochtend: tegenwoordige tijd. Kaia is een zij, dus stam + t: trek + t = trekt.' },
      { soort: 'dd', zin: 'Gisteren ___ de buren ons vriendelijk, ook al stormde het.', cue: 'groeten', goed: 'groetten', uitleg: 'Gisteren: verleden tijd, en de buren is meervoud. De stam groet eindigt op een t: groet + ten = groetten.' }
    ],
    // Dag 29
    [
      { soort: 'tt', zin: 'Mijn moeder ___ altijd de korstjes van mijn brood af.', cue: 'afsnijden', goed: 'snijdt', uitleg: 'Altijd: tegenwoordige tijd. Mijn moeder is een zij, dus stam + t: snijd + t = snijdt.' },
      { soort: 'tt', zin: 'Het water ___, dus je kunt de pasta erin doen.', cue: 'koken', goed: 'kookt', uitleg: '"Kunt": tegenwoordige tijd. Het water is een hij-vorm, dus stam + t: kook + t = kookt.' },
      { soort: 'vt', zin: 'Gisteren ___ mijn opa voor het eerst zelf een appeltaart.', cue: 'bakken', goed: 'bakte', uitleg: 'Gisteren: verleden tijd. De stam bak eindigt op een k, die zit in \'t kofschip, dus -te: bakte.' },
      { soort: 'dd', zin: 'Gisteren ___ mijn tante een kalkoen voor het hele gezin.', cue: 'braden', goed: 'braadde', uitleg: 'Gisteren: verleden tijd. De stam braad eindigt op een d: braad + de = braadde.' },
      { soort: 'vt-sterk', zin: 'Vorige week ___ mijn ouders dat we voortaan om de beurt koken.', cue: 'besluiten', goed: 'besloten', uitleg: 'Vorige week: verleden tijd, en mijn ouders is meervoud. Besluiten is sterk: besloot, meervoud besloten.' },
      { soort: 'vd', zin: 'Heb jij de tafel al ___?', cue: 'dekken', goed: 'gedekt', uitleg: 'Heb + voltooid deelwoord. De stam dek eindigt op een k, die zit in \'t kofschip, dus een t: gedekt.' },
      { soort: 'bijv', zin: 'De ___ room stond al klaar voor de taart.', cue: 'kloppen', goed: 'geklopte', uitleg: 'Het voltooid deelwoord is geklopt (p zit in \'t kofschip). Voor "de room" komt er een e achter: geklopte.' },
      { soort: 'val', zin: '___ jij vanavond de afwas?', cue: 'doen', goed: 'doe', uitleg: 'Vanavond: tegenwoordige tijd. Jij staat achter het werkwoord, dus geen t: doe jij.' },
      { soort: 'tt', zin: 'Mijn moeder ___ elke avond wat we gaan eten.', cue: 'bedenken', goed: 'bedenkt', uitleg: 'Elke avond: tegenwoordige tijd. Mijn moeder is een zij, dus stam + t: bedenk + t = bedenkt.' },
      { soort: 'tt', zin: 'Mijn broer en ik ___ elke zaterdag samen pannenkoeken.', cue: 'bakken', goed: 'bakken', uitleg: 'Elke zaterdag: tegenwoordige tijd. Mijn broer en ik zijn met z\'n tweeën, en in het meervoud gebruik je het hele werkwoord: bakken.' }
    ],
    // Dag 30
    [
      { soort: 'tt', zin: 'Mijn zus ___ bij het duiken haar adem al bijna een hele minuut in, en ze oefent elke week.', cue: 'inhouden', goed: 'houdt', uitleg: '"Oefent": tegenwoordige tijd. Mijn zus is een zij, dus stam + t: houd + t = houdt.' },
      { soort: 'tt', zin: 'Mijn oom ___ op elke verjaardag met kaarten en munten.', cue: 'goochelen', goed: 'goochelt', uitleg: 'Op elke verjaardag: tegenwoordige tijd. Mijn oom is een hij, dus stam + t: goochel + t = goochelt.' },
      { soort: 'vt', zin: 'Vorige week ___ ik drie uur lang aan een legokasteel.', cue: 'bouwen', goed: 'bouwde', uitleg: 'Vorige week: verleden tijd. De stam bouw eindigt op een w, niet in \'t kofschip, dus -de: bouwde.' },
      { soort: 'dd', zin: 'Gisteren ___ mijn vader zich naar het station, want de trein vertrok bijna.', cue: 'haasten', goed: 'haastte', uitleg: 'Gisteren: verleden tijd. De stam haast eindigt op een t: haast + te = haastte.' },
      { soort: 'vt-sterk', zin: 'Vorig jaar ___ mijn zus zich aan bij de scouting.', cue: 'aansluiten', goed: 'sloot', uitleg: 'Vorig jaar: verleden tijd. Sluiten is een sterk werkwoord: sloot (meervoud sloten), zonder -te.' },
      { soort: 'vd', zin: 'Wij hebben de hele middag ___ bij de knutselclub.', cue: 'kleien', goed: 'gekleid', uitleg: 'Hebben + voltooid deelwoord. De stam klei eindigt op ei, niet in \'t kofschip, dus een d: gekleid.' },
      { soort: 'bijv', zin: 'Mijn oma droeg een ___ vest met grote knopen.', cue: 'haken', goed: 'gehaakt', uitleg: 'Het voltooid deelwoord is gehaakt. Vest is een het-woord met een ervoor, dus er komt geen e achter: een gehaakt vest.' },
      { soort: 'engels', zin: 'Gisteren ___ de computer van mijn broer midden in zijn werkstuk.', cue: 'crashen', goed: 'crashte', uitleg: 'Gisteren: verleden tijd. De stam crash eindigt op een sj-klank, net als de s uit \'t kofschip, dus -te: crashte.' },
      { soort: 'tt', zin: 'Op het schoolplein ___ mijn broertje elke pauze met zijn vrienden.', cue: 'knikkeren', goed: 'knikkert', uitleg: 'Elke pauze: tegenwoordige tijd. Mijn broertje is een hij, dus stam + t: knikker + t = knikkert.' },
      { soort: 'dd', zin: 'Gisteren ___ wij ons naar de dansles, want we waren laat.', cue: 'haasten', goed: 'haastten', uitleg: 'Gisteren: verleden tijd, en wij is meervoud. De stam haast eindigt op een t: haast + ten = haastten.' }
    ],
    // Dag 31
    [
      { soort: 'tt', zin: 'Een spin ___ zijn prooi met gif en spint hem daarna in.', cue: 'doden', goed: 'doodt', uitleg: '"Spint": tegenwoordige tijd. Een spin is een hij, dus stam + t: dood + t = doodt.' },
      { soort: 'tt', zin: 'Ons konijn ___ elke ochtend een gat onder het hek.', cue: 'graven', goed: 'graaft', uitleg: 'Elke ochtend: tegenwoordige tijd. Ons konijn is een hij-vorm, dus stam + t. De stam van graven is graaf (v wordt f): graaft.' },
      { soort: 'vt', zin: 'Gisteren ___ ik heel voorzichtig de kop van het paard.', cue: 'aaien', goed: 'aaide', uitleg: 'Gisteren: verleden tijd. De stam aai eindigt op een i, niet in \'t kofschip, dus -de: aaide.' },
      { soort: 'dd', zin: 'Gisteren ___ de poten van onze hond na een wandeling door de bramen.', cue: 'bloeden', goed: 'bloedden', uitleg: 'Gisteren: verleden tijd, en de poten is meervoud. De stam bloed eindigt op een d: bloed + den = bloedden.' },
      { soort: 'vt-sterk', zin: 'Vorige zomer ___ de muggen ons helemaal lek.', cue: 'bijten', goed: 'beten', uitleg: 'Vorige zomer: verleden tijd, en de muggen is meervoud. Bijten is sterk: beet, meervoud beten.' },
      { soort: 'vd', zin: 'Onze kat heeft mij gisteren in mijn hand ___.', cue: 'krabben', goed: 'gekrabd', uitleg: 'Heeft + voltooid deelwoord. De stam krab eindigt op een b, niet in \'t kofschip, dus een d: gekrabd.' },
      { soort: 'bijv', zin: 'Het ___ katje lag te slapen in een mandje.', cue: 'adopteren', goed: 'geadopteerde', uitleg: 'Het voltooid deelwoord is geadopteerd. Er staat het voor katje, en dan komt er wel een e achter: het geadopteerde katje.' },
      { soort: 'val', zin: 'Hoe vaak ___ je hond eten per dag?', cue: 'krijgen', goed: 'krijgt', uitleg: 'Je hond is jouw hond, dus een hij: krijgt hij. Alleen bij jij of je (= jij) achter het werkwoord valt de t weg.' },
      { soort: 'tt', zin: 'Een uil ___ \'s nachts op muizen.', cue: 'jagen', goed: 'jaagt', uitleg: 'Tegenwoordige tijd: dat doet een uil altijd. Een uil is een hij, dus stam + t: jaag + t = jaagt.' },
      { soort: 'dd', zin: 'Toen wij gisteren bij de kinderboerderij riepen, ___ de ganzen meteen met luid gesnater.', cue: 'antwoorden', goed: 'antwoordden', uitleg: 'Gisteren: verleden tijd, en de ganzen is meervoud. De stam antwoord eindigt op een d: antwoord + den = antwoordden.' }
    ],
    // Dag 32
    [
      { soort: 'tt', zin: 'Ik ___ het deeg voor de kruidnoten net zo lang tot het niet meer plakt.', cue: 'kneden', goed: 'kneed', uitleg: '"Plakt": tegenwoordige tijd. Bij ik gebruik je alleen de stam, zonder t: ik kneed.' },
      { soort: 'tt', zin: 'Mijn broer ___ al weken aan zijn surprise voor de klas.', cue: 'knutselen', goed: 'knutselt', uitleg: 'Al weken: hij is er nu nog mee bezig, tegenwoordige tijd. Mijn broer is een hij, dus stam + t: knutselt.' },
      { soort: 'vt', zin: 'Gisteren ___ ik zo erg met papier-maché dat de hele keukentafel onder de lijm zat.', cue: 'kliederen', goed: 'kliederde', uitleg: 'Gisteren: verleden tijd. De stam klieder eindigt op een r, niet in \'t kofschip, dus -de: kliederde.' },
      { soort: 'dd', zin: 'Gisteravond ___ mijn moeder in tien minuten een prachtig gedicht voor mijn surprise.', cue: 'dichten', goed: 'dichtte', uitleg: 'Gisteravond: verleden tijd. De stam dicht eindigt op een t: dicht + te = dichtte.' },
      { soort: 'vt-sterk', zin: 'Vorig jaar ___ ik om een surprise in de vorm van een capybara te maken.', cue: 'besluiten', goed: 'besloot', uitleg: 'Vorig jaar: verleden tijd. Besluiten is een sterk werkwoord: besloot, zonder -te.' },
      { soort: 'vd', zin: 'Mijn vader heeft de doos voor mijn surprise van zolder ___.', cue: 'halen', goed: 'gehaald', uitleg: 'Heeft + voltooid deelwoord. De stam haal eindigt op een l, niet in \'t kofschip, dus een d: gehaald.' },
      { soort: 'bijv', zin: 'Mijn surprise is gemaakt van een ___ doos van de supermarkt.', cue: 'afdanken', goed: 'afgedankte', uitleg: 'Het voltooid deelwoord is afgedankt (k zit in \'t kofschip). Doos is een de-woord, dus er komt een e achter: een afgedankte doos.' },
      { soort: 'val', zin: '___ je moeder je met het gedicht voor je surprise?', cue: 'helpen', goed: 'helpt', uitleg: 'Je moeder is jouw moeder, dus een zij: helpt zij. Alleen bij jij of je (= jij) achter het werkwoord valt de t weg.' },
      { soort: 'tt', zin: 'Mijn zusje ___ nu heel precies alle letters voor haar surprise uit karton.', cue: 'knippen', goed: 'knipt', uitleg: 'Nu: tegenwoordige tijd. Mijn zusje is een zij, dus stam + t: knip + t = knipt.' },
      { soort: 'dd', zin: 'Gisteravond ___ ik mijn gedicht eindelijk af.', cue: 'afronden', goed: 'rondde', uitleg: 'Gisteravond: verleden tijd. De stam rond eindigt op een d: rond + de = rondde.' }
    ],
    // Dag 33
    [
      { soort: 'tt', zin: 'Voor de wedstrijd ___ ik mijn haar altijd in een staart.', cue: 'binden', goed: 'bind', uitleg: 'Altijd: tegenwoordige tijd. Bij ik gebruik je alleen de stam: ik bind, zonder t.' },
      { soort: 'tt', zin: 'De ijsmeester ___ elke ochtend of het ijs dik genoeg is om op te schaatsen.', cue: 'keuren', goed: 'keurt', uitleg: 'Elke ochtend: tegenwoordige tijd. De ijsmeester is een hij, dus stam + t: keur + t = keurt.' },
      { soort: 'vt', zin: 'Vorige winter ___ mijn opa een gat in het ijs om te kijken hoe dik het was.', cue: 'hakken', goed: 'hakte', uitleg: 'Vorige winter: verleden tijd. De stam hak eindigt op een k, die zit in \'t kofschip, dus -te: hakte.' },
      { soort: 'dd', zin: 'Vorige week ___ mijn zus en ik ons aan voor de schaatsles.', cue: 'aanmelden', goed: 'meldden', uitleg: 'Vorige week: verleden tijd, en mijn zus en ik is meervoud. De stam meld eindigt op een d: meld + den = meldden.' },
      { soort: 'vt-sterk', zin: 'Vorige winter ___ ik na de schaatsles nog een uur door over het ijs.', cue: 'doorrijden', goed: 'reed', uitleg: 'Vorige winter: verleden tijd. Rijden is een sterk werkwoord: reed (meervoud reden), zonder -de.' },
      { soort: 'vd', zin: 'Ons team heeft de hele wedstrijd hard ___.', cue: 'knokken', goed: 'geknokt', uitleg: 'Heeft + voltooid deelwoord. De stam knok eindigt op een k, die zit in \'t kofschip, dus een t: geknokt.' },
      { soort: 'bijv', zin: 'Op de pas ___ ijsbaan mocht nog niemand schaatsen.', cue: 'aanleggen', goed: 'aangelegde', uitleg: 'Het voltooid deelwoord is aangelegd (g zit niet in \'t kofschip). Voor "de ijsbaan" komt er een e achter: aangelegde.' },
      { soort: 'val', zin: 'Hoe ___ jij je eigenlijk als je gaat schaatsen?', cue: 'kleden', goed: 'kleed', uitleg: 'Tegenwoordige tijd, en jij staat achter het werkwoord. Dan krijgt het geen t: kleed jij.' },
      { soort: 'tt', zin: 'Mijn vader ___ elke ochtend eerst het ijs van de ruiten van de auto.', cue: 'krabben', goed: 'krabt', uitleg: 'Elke ochtend: tegenwoordige tijd. Mijn vader is een hij, dus stam + t: krab + t = krabt.' },
      { soort: 'tt', zin: 'Mijn opa en oma ___ elke winter naar het schaatsen op tv.', cue: 'kijken', goed: 'kijken', uitleg: 'Elke winter: tegenwoordige tijd. Opa en oma zijn met z\'n tweeën: meervoud, dus het hele werkwoord: kijken.' }
    ],
    // Dag 34
    [
      { soort: 'tt', zin: 'Als mijn moeder me roept, ___ ik altijd meteen.', cue: 'antwoorden', goed: 'antwoord', uitleg: '"Roept": tegenwoordige tijd. Bij ik gebruik je alleen de stam: ik antwoord, zonder t.' },
      { soort: 'tt', zin: 'Mijn broertje ___ elke avond om zeven uur naar bed.', cue: 'gaan', goed: 'gaat', uitleg: 'Elke avond: tegenwoordige tijd. Mijn broertje is een hij, dus stam + t: gaat.' },
      { soort: 'vt', zin: 'Gisteren ___ mijn oma voor het eerst met ons via de tablet, maar we zagen alleen haar neus.', cue: 'beeldbellen', goed: 'beeldbelde', uitleg: 'Gisteren: verleden tijd. De stam beeldbel eindigt op een l, niet in \'t kofschip, dus -de: beeldbelde.' },
      { soort: 'dd', zin: 'Gisteren ___ ik vol spanning het antwoord van mijn vriendin af.', cue: 'afwachten', goed: 'wachtte', uitleg: 'Gisteren: verleden tijd. De stam wacht eindigt op een t: wacht + te = wachtte.' },
      { soort: 'vt-sterk', zin: 'Gisteren ___ we de kat binnen omdat het zo stormde.', cue: 'binnenlaten', goed: 'lieten', uitleg: 'Gisteren: verleden tijd, en we is meervoud. Laten is sterk: liet, meervoud lieten.' },
      { soort: 'vd', zin: 'Heb jij het filmpje van mijn verjaardag al ___?', cue: 'bekijken', goed: 'bekeken', uitleg: 'Heb + voltooid deelwoord. Kijken is een sterk werkwoord: (be)keken, op -en.' },
      { soort: 'bijv', zin: 'Aan de muur hangt een ___ foto van mijn opa en oma.', cue: 'inlijsten', goed: 'ingelijste', uitleg: 'Het voltooid deelwoord is ingelijst. Foto is een de-woord, dus er komt een e achter: een ingelijste foto.' },
      { soort: 'engels', zin: 'Gisteren ___ mijn moeder drie keer of de voordeur wel op slot was.', cue: 'checken', goed: 'checkte', uitleg: 'Gisteren: verleden tijd. De stam check eindigt op een k-klank, die zit in \'t kofschip, dus -te: checkte.' },
      { soort: 'tt', zin: 'Mijn zusje ___ elke avond een kwartier met haar oma in Spanje.', cue: 'bellen', goed: 'belt', uitleg: 'Elke avond: tegenwoordige tijd. Mijn zusje is een zij, dus stam + t: bel + t = belt.' },
      { soort: 'dd', zin: 'Vroeger ___ alle honden in onze familie Bobby.', cue: 'heten', goed: 'heetten', uitleg: 'Vroeger: verleden tijd, en alle honden is meervoud. De stam heet eindigt op een t: heet + ten = heetten.' }
    ],
    // Dag 35
    [
      { soort: 'tt', zin: 'Ik ___ je mijn excuses aan, want het was niet aardig van mij.', cue: 'aanbieden', goed: 'bied', uitleg: 'Tegenwoordige tijd: je zegt het nu. Bij ik gebruik je alleen de stam: ik bied, zonder t.' },
      { soort: 'tt', zin: 'De meester ___ met zijn pen op tafel als het te onrustig wordt.', cue: 'kloppen', goed: 'klopt', uitleg: '"Wordt": tegenwoordige tijd. De meester is een hij, dus stam + t: klop + t = klopt.' },
      { soort: 'vt', zin: 'Gisteren ___ de directeur alle kinderen die hadden meegeholpen.', cue: 'bedanken', goed: 'bedankte', uitleg: 'Gisteren: verleden tijd. De stam bedank eindigt op een k, die zit in \'t kofschip, dus -te: bedankte.' },
      { soort: 'dd', zin: 'Gisteren ___ de meester het woord "bijvoorbeeld" af tot "bijv."', cue: 'afkorten', goed: 'kortte', uitleg: 'Gisteren: verleden tijd. De stam kort eindigt op een t: kort + te = kortte.' },
      { soort: 'vt-sterk', zin: 'Vroeger ___ op onze school de regel dat je binnen geen pet mocht dragen.', cue: 'gelden', goed: 'gold', uitleg: 'Vroeger: verleden tijd. Gelden is een sterk werkwoord: gold (meervoud golden), met een d.' },
      { soort: 'vd', zin: 'Ik heb de oppervlakte van het schoolplein ___.', cue: 'berekenen', goed: 'berekend', uitleg: 'Heb + voltooid deelwoord. De stam bereken eindigt op een n, niet in \'t kofschip, dus een d: berekend.' },
      { soort: 'bijv', zin: 'De ___ woorden in mijn dictee moest ik nog drie keer overschrijven.', cue: 'aanstrepen', goed: 'aangestreepte', uitleg: 'Het voltooid deelwoord is aangestreept (p zit in \'t kofschip). Voor "de woorden" komt er een e achter: aangestreepte.' },
      { soort: 'val', zin: 'De juf ___ elke spreekbeurt met een tip en een top.', cue: 'beoordelen', goed: 'beoordeelt', uitleg: 'Geen heeft of is erbij: dit is de persoonsvorm, tegenwoordige tijd. De juf is een zij: stam beoordeel + t = beoordeelt. Beoordeeld met een d is het voltooid deelwoord.' },
      { soort: 'tt', zin: 'Mijn broer ___ zich elke ochtend naar school, want hij is altijd te laat.', cue: 'haasten', goed: 'haast', uitleg: 'Elke ochtend: tegenwoordige tijd. Mijn broer is een hij, dus stam + t. De stam haast eindigt al op een t, dus er komt geen tweede bij.' },
      { soort: 'tt', zin: 'Ik ___ elke rekensom af op hele getallen.', cue: 'afronden', goed: 'rond', uitleg: 'Tegenwoordige tijd. Bij ik gebruik je alleen de stam: ik rond, zonder t.' }
    ],
    // Dag 36
    [
      { soort: 'tt', zin: 'Ik ___ me elke ochtend aan in de badkamer, want daar is het warm.', cue: 'aankleden', goed: 'kleed', uitleg: 'Elke ochtend: tegenwoordige tijd. Bij ik gebruik je alleen de stam: ik kleed, zonder t.' },
      { soort: 'tt', zin: 'Mijn zusje ___ elke avond haar oude teddybeer voordat ze gaat slapen.', cue: 'knuffelen', goed: 'knuffelt', uitleg: 'Elke avond: tegenwoordige tijd. Mijn zusje is een zij, dus stam + t: knuffel + t = knuffelt.' },
      { soort: 'vt', zin: 'Gisteravond ___ ik nog lang met mijn zus over de vakantie.', cue: 'kletsen', goed: 'kletste', uitleg: 'Gisteravond: verleden tijd. De stam klets eindigt op een s, die zit in \'t kofschip, dus -te: kletste.' },
      { soort: 'dd', zin: 'Vorig jaar ___ de burgemeester ons nieuwe schoolgebouw in.', cue: 'inwijden', goed: 'wijdde', uitleg: 'Vorig jaar: verleden tijd. De stam wijd eindigt op een d: wijd + de = wijdde.' },
      { soort: 'vt-sterk', zin: 'Vorige week ___ de politie een man aan die door rood fietste.', cue: 'aanhouden', goed: 'hield', uitleg: 'Vorige week: verleden tijd. Houden is een sterk werkwoord: hield (meervoud hielden), met een d.' },
      { soort: 'vd', zin: 'Ik heb mijn oude kleren naar de kringloop ___.', cue: 'brengen', goed: 'gebracht', uitleg: 'Heb + voltooid deelwoord. Brengen is onregelmatig: gebracht, met ch en een t.' },
      { soort: 'bijv', zin: 'Ik draag graag de ___ sokken van oma.', cue: 'breien', goed: 'gebreide', uitleg: 'Het voltooid deelwoord is gebreid (ei zit niet in \'t kofschip). Voor "de sokken" komt er een e achter: gebreide.' },
      { soort: 'val', zin: '___ je oma ook een kat?', cue: 'hebben', goed: 'heeft', uitleg: 'Je oma is jouw oma, dus een zij: heeft zij. Alleen bij jij of je (= jij) achter het werkwoord gebruik je heb.' },
      { soort: 'dd', zin: 'Gisteren ___ de kleuters ons met een zelfgemaakt lied.', cue: 'begroeten', goed: 'begroetten', uitleg: 'Gisteren: verleden tijd, en de kleuters is meervoud. De stam begroet eindigt op een t: begroet + ten = begroetten.' },
      { soort: 'tt', zin: 'De oude koelkast in onze schuur ___ zo hard dat je hem door de hele tuin hoort.', cue: 'brommen', goed: 'bromt', uitleg: '"Hoort": tegenwoordige tijd. De koelkast is een hij, dus stam + t: brom + t = bromt.' }
    ],
    // Dag 37
    [
      { soort: 'tt', zin: 'Ik ___ niet zo van spruitjes, maar boerenkool vind ik heerlijk.', cue: 'houden', goed: ['houd', 'hou'], uitleg: '"Vind": tegenwoordige tijd. Bij ik gebruik je alleen de stam: ik houd. Ik hou mag ook.' },
      { soort: 'tt', zin: 'Mijn moeder ___ de uien altijd heel fijn.', cue: 'hakken', goed: 'hakt', uitleg: 'Altijd: tegenwoordige tijd. Mijn moeder is een zij, dus stam + t: hak + t = hakt.' },
      { soort: 'vt', zin: 'Gisteravond ___ ik na het eten alle borden af.', cue: 'afdrogen', goed: 'droogde', uitleg: 'Gisteravond: verleden tijd. De stam droog eindigt op een g, die zit niet in \'t kofschip, dus -de: droogde.' },
      { soort: 'dd', zin: 'Vorige week ___ de leerlingen van groep 8 een driegangendiner voor hun ouders.', cue: 'bereiden', goed: 'bereidden', uitleg: 'Vorige week: verleden tijd, en de leerlingen is meervoud. De stam bereid eindigt op een d: bereid + den = bereidden.' },
      { soort: 'vt-sterk', zin: 'Op de veiling ___ mijn vader vorige week vijftig euro voor een oude kerststal.', cue: 'bieden', goed: 'bood', uitleg: 'Vorige week: verleden tijd. Bieden is een sterk werkwoord: bood (meervoud boden), met een d.' },
      { soort: 'vd', zin: 'Wie heeft er van de taart ___?', cue: 'eten', goed: 'gegeten', uitleg: 'Heeft + voltooid deelwoord. Eten is een sterk werkwoord: gegeten, op -en.' },
      { soort: 'bijv', zin: 'Bij de snackbar haalden we een bak ___ kibbeling.', cue: 'frituren', goed: 'gefrituurde', uitleg: 'Het voltooid deelwoord is gefrituurd (r zit niet in \'t kofschip). Kibbeling is een de-woord, dus er komt een e achter: gefrituurde.' },
      { soort: 'val', zin: 'Hoe lang ___ jij je ei?', cue: 'koken', goed: 'kook', uitleg: 'Tegenwoordige tijd, en jij staat achter het werkwoord. Dan krijgt het geen t: kook jij.' },
      { soort: 'tt', zin: 'Ik ___ altijd eerst de korstjes van mijn brood af.', cue: 'afsnijden', goed: 'snijd', uitleg: 'Altijd: tegenwoordige tijd. Bij ik gebruik je alleen de stam: ik snijd, zonder t.' },
      { soort: 'vt', zin: 'Gisteren ___ de visboer op de markt een hele zalm voor ons.', cue: 'fileren', goed: 'fileerde', uitleg: 'Gisteren: verleden tijd. De stam fileer eindigt op een r, niet in \'t kofschip, dus -de: fileerde.' }
    ],
    // Dag 38
    [
      { soort: 'tt', zin: 'Mijn zusje ___ altijd met "nee" als je vraagt of ze moe is, ook als ze bijna in slaap valt.', cue: 'antwoorden', goed: 'antwoordt', uitleg: '"Vraagt" en "valt": tegenwoordige tijd. Mijn zusje is een zij, dus stam + t: antwoord + t = antwoordt.' },
      { soort: 'tt', zin: 'Mijn broertje ___ de dagen af tot pakjesavond.', cue: 'aftellen', goed: 'telt', uitleg: 'Tegenwoordige tijd: hij doet het nu. Mijn broertje is een hij, dus stam + t: tel + t = telt.' },
      { soort: 'vt', zin: 'Vorig jaar ___ mijn broertje per ongeluk een bal tegen de kerstboom.', cue: 'gooien', goed: 'gooide', uitleg: 'Vorig jaar: verleden tijd. De stam gooi eindigt op oi, niet in \'t kofschip, dus -de: gooide.' },
      { soort: 'dd', zin: 'Vorig jaar ___ mijn vader de kerstverlichting al in november aan.', cue: 'aanzetten', goed: 'zette', uitleg: 'Vorig jaar: verleden tijd. De stam zet eindigt op een t: zet + te = zette.' },
      { soort: 'vt-sterk', zin: 'Vorig jaar ___ mijn broers de kerstboom met een touw op het dak van de auto.', cue: 'binden', goed: 'bonden', uitleg: 'Vorig jaar: verleden tijd, en mijn broers is meervoud. Binden is sterk: bond, meervoud bonden.' },
      { soort: 'vd', zin: 'Heb jij je werkstuk al ___?', cue: 'inleveren', goed: 'ingeleverd', uitleg: 'Heb + voltooid deelwoord. De stam lever eindigt op een r, niet in \'t kofschip, dus een d: ingeleverd.' },
      { soort: 'bijv', zin: 'Voor het raam hing een ___ ster van papier.', cue: 'knippen', goed: 'geknipte', uitleg: 'Het voltooid deelwoord is geknipt (p zit in \'t kofschip). Ster is een de-woord, dus er komt een e achter: een geknipte ster.' },
      { soort: 'engels', zin: 'Mijn broer ___ elke ochtend een rondje door het park, ook als het vriest.', cue: 'joggen', goed: 'jogt', uitleg: 'Elke ochtend: tegenwoordige tijd. Mijn broer is een hij, dus stam + t: jog + t = jogt.' },
      { soort: 'tt', zin: 'Morgen ___ ik me aan voor de kerstmusical van school.', cue: 'aanmelden', goed: 'meld', uitleg: 'Morgen: tegenwoordige tijd. Bij ik gebruik je alleen de stam: ik meld, zonder t.' },
      { soort: 'dd', zin: 'Vorig jaar ___ mijn opa en oma de kalkoen met tijm en rozemarijn.', cue: 'kruiden', goed: 'kruidden', uitleg: 'Vorig jaar: verleden tijd, en opa en oma is meervoud. De stam kruid eindigt op een d: kruid + den = kruidden.' }
    ],
    // Dag 39
    [
      { soort: 'val', zin: 'Onze juf ___ ons vanmiddag naar de bibliotheek.', cue: 'begeleiden', goed: 'begeleidt', uitleg: 'Geen heeft of is erbij: dit is de persoonsvorm, tegenwoordige tijd (vanmiddag). De juf is een zij: stam begeleid + t = begeleidt. Begeleid zonder t is het voltooid deelwoord.' },
      { soort: 'tt', zin: 'Mijn vader ___ mij elke donderdag met de auto naar de bibliotheek.', cue: 'brengen', goed: 'brengt', uitleg: 'Elke donderdag: tegenwoordige tijd. Mijn vader is een hij, dus stam + t: breng + t = brengt.' },
      { soort: 'vt', zin: 'Gisteren ___ ik zo hard om een grap in mijn boek dat mijn moeder kwam kijken.', cue: 'grinniken', goed: 'grinnikte', uitleg: 'Gisteren: verleden tijd. De stam grinnik eindigt op een k, die zit in \'t kofschip, dus -te: grinnikte.' },
      { soort: 'dd', zin: 'Vorige week ___ twee leerlingen het boekenkwartier met een toneelstukje in.', cue: 'inleiden', goed: 'leidden', uitleg: 'Vorige week: verleden tijd, en twee leerlingen is meervoud. De stam leid eindigt op een d: leid + den = leidden.' },
      { soort: 'vt-sterk', zin: 'Het boek dat ik gisteren zocht, ___ zich op de bovenste plank.', cue: 'bevinden', goed: 'bevond', uitleg: 'Gisteren: verleden tijd. Bevinden is een sterk werkwoord: bevond, met een d.' },
      { soort: 'vd', zin: 'Ik ben mijn bibliotheekpas ___.', cue: 'kwijtraken', goed: 'kwijtgeraakt', uitleg: 'Ben + voltooid deelwoord. De stam raak eindigt op een k, die zit in \'t kofschip, dus een t: kwijtgeraakt.' },
      { soort: 'bijv', zin: 'Bij de boekwinkel kocht ik een ___ boek voor maar drie euro.', cue: 'afprijzen', goed: 'afgeprijsd', uitleg: 'Kijk naar de z van prijzen: niet in \'t kofschip, dus een d (afgeprijsd). Boek is een het-woord met een ervoor, dus geen e: een afgeprijsd boek.' },
      { soort: 'tt', zin: 'Ik ___ je dit boek echt aan, het is supergrappig.', cue: 'aanraden', goed: 'raad', uitleg: '"Is": tegenwoordige tijd. Bij ik gebruik je alleen de stam: ik raad, zonder t.' },
      { soort: 'tt', zin: 'De kinderen van groep 5 ___ elke vrijdag nieuwe boeken uit de schoolbibliotheek.', cue: 'halen', goed: 'halen', uitleg: 'Elke vrijdag: tegenwoordige tijd. De kinderen is meervoud, dus het hele werkwoord: halen.' },
      { soort: 'tt', zin: 'Mijn broertje ___ in bed altijd stiekem door met een zaklamp.', cue: 'doorlezen', goed: 'leest', uitleg: 'Altijd: tegenwoordige tijd. Mijn broertje is een hij, dus stam + t. De stam van lezen is lees (z wordt s): leest.' }
    ],
    // Dag 40
    [
      { soort: 'tt', zin: 'Mijn vader ___ het kerstcadeau van mama altijd pas op de laatste dag.', cue: 'kopen', goed: 'koopt', uitleg: 'Altijd: tegenwoordige tijd. Mijn vader is een hij, dus stam + t: koop + t = koopt.' },
      { soort: 'tt', zin: 'Ons nieuwe puppy ___ op alles wat hij kan vinden.', cue: 'kauwen', goed: 'kauwt', uitleg: '"Kan": tegenwoordige tijd. Ons puppy is een hij, dus stam + t: kauw + t = kauwt.' },
      { soort: 'vt', zin: 'Afgelopen nacht ___ ons puppy uren in zijn mandje.', cue: 'janken', goed: 'jankte', uitleg: 'Afgelopen nacht: verleden tijd. De stam jank eindigt op een k, die zit in \'t kofschip, dus -te: jankte.' },
      { soort: 'dd', zin: 'Gisteren ___ bijna alle kinderen in de klas, want iedereen was verkouden.', cue: 'hoesten', goed: 'hoestten', uitleg: 'Gisteren: verleden tijd. Bijna alle kinderen is meervoud. De stam hoest eindigt op een t: hoest + ten = hoestten.' },
      { soort: 'vt-sterk', zin: 'Vroeger ___ de fietsers de bocht altijd af door over het gras te rijden.', cue: 'afsnijden', goed: 'sneden', uitleg: 'Vroeger: verleden tijd, en de fietsers is meervoud. Snijden is sterk: sneed, meervoud sneden.' },
      { soort: 'vd', zin: 'Mijn broer heeft zijn hele kamer opnieuw ___.', cue: 'inrichten', goed: 'ingericht', uitleg: 'Heeft + voltooid deelwoord. De stam richt eindigt al op een t, dus er komt geen tweede bij: ingericht.' },
      { soort: 'bijv', zin: 'Oma heeft een ___ stoel met roze bloemen.', cue: 'bekleden', goed: 'beklede', uitleg: 'Het voltooid deelwoord is bekleed. Stoel is een de-woord, dus er komt een e achter: een beklede stoel (één d).' },
      { soort: 'val', zin: 'Meneer, ___ u ook tot het einde van de kerstmarkt?', cue: 'blijven', goed: 'blijft', uitleg: 'Bij u krijgt het werkwoord in de tegenwoordige tijd altijd een t, ook als u erachter staat: blijft u. Stam blijf + t.' },
      { soort: 'tt', zin: 'Ik ___ mijn broertje af met een spelletje, zodat mama rustig kan bellen.', cue: 'afleiden', goed: 'leid', uitleg: '"Kan": tegenwoordige tijd. Bij ik gebruik je alleen de stam: ik leid, zonder t.' },
      { soort: 'dd', zin: 'Vorig jaar ___ de buurman zijn tuin helemaal opnieuw met struiken.', cue: 'beplanten', goed: 'beplantte', uitleg: 'Vorig jaar: verleden tijd. De stam beplant eindigt op een t: beplant + te = beplantte.' }
    ],
    // Dag 41
    [
      { soort: 'tt', zin: 'Ik ___ het liefst met mijn slee van de hoogste heuvel.', cue: 'glijden', goed: 'glijd', uitleg: 'Tegenwoordige tijd. Bij ik gebruik je alleen de stam: ik glijd, zonder t.' },
      { soort: 'tt', zin: 'Mijn vader ___ elk jaar een grote ster voor het raam.', cue: 'hangen', goed: 'hangt', uitleg: 'Elk jaar: tegenwoordige tijd. Mijn vader is een hij, dus stam + t: hang + t = hangt.' },
      { soort: 'vt', zin: 'Gisteren ___ mijn moeder alle kerstspullen van zolder.', cue: 'halen', goed: 'haalde', uitleg: 'Gisteren: verleden tijd. De stam haal eindigt op een l, niet in \'t kofschip, dus -de: haalde.' },
      { soort: 'dd', zin: 'Vorige week ___ de kinderen van groep 8 sinterklaasgedichten voor de kleuters.', cue: 'dichten', goed: 'dichtten', uitleg: 'Vorige week: verleden tijd, en de kinderen is meervoud. De stam dicht eindigt op een t: dicht + ten = dichtten.' },
      { soort: 'vt-sterk', zin: 'Gisteren ___ mijn moeder de deur goed af voordat we weggingen.', cue: 'afsluiten', goed: 'sloot', uitleg: 'Gisteren: verleden tijd. Sluiten is een sterk werkwoord: sloot (meervoud sloten), zonder -te.' },
      { soort: 'vd', zin: 'Heb jij de kerstballen al in de boom ___?', cue: 'hangen', goed: 'gehangen', uitleg: 'Heb + voltooid deelwoord. Hangen is een sterk werkwoord: gehangen, op -en.' },
      { soort: 'bijv', zin: 'Op tafel lag een ___ kerstkleed van oma.', cue: 'borduren', goed: 'geborduurd', uitleg: 'Het voltooid deelwoord is geborduurd. Kleed is een het-woord met een ervoor, dus geen e: een geborduurd kleed.' },
      { soort: 'engels', zin: 'Heeft je moeder het kerstmenu al naar de hele familie ___?', cue: 'e-mailen', goed: 'ge-e-maild', uitleg: 'Heeft + voltooid deelwoord: ge + e-mail + d (l zit niet in \'t kofschip). Omdat ge en e botsen, komt er een koppelteken: ge-e-maild.' },
      { soort: 'tt', zin: 'Mijn broer ___ altijd heel hard als hij een cadeau openmaakt.', cue: 'juichen', goed: 'juicht', uitleg: 'Altijd: tegenwoordige tijd. Mijn broer is een hij, dus stam + t: juich + t = juicht.' },
      { soort: 'dd', zin: 'Vorig jaar ___ twee moeders onze klas naar de kerstmarkt.', cue: 'begeleiden', goed: 'begeleidden', uitleg: 'Vorig jaar: verleden tijd, en twee moeders is meervoud. De stam begeleid eindigt op een d: begeleid + den = begeleidden.' }
    ],
    // Dag 42
    [
      { soort: 'val', zin: 'Mijn moeder ___ het kerstdiner dit jaar helemaal zelf.', cue: 'bereiden', goed: 'bereidt', uitleg: 'Geen heeft of is erbij: dit is de persoonsvorm in de tegenwoordige tijd. Mijn moeder is een zij: stam bereid + t = bereidt. Bereid zonder t is het voltooid deelwoord.' },
      { soort: 'tt', zin: 'Ik ___ de soep altijd met een beetje peper.', cue: 'kruiden', goed: 'kruid', uitleg: 'Altijd: tegenwoordige tijd. Bij ik gebruik je alleen de stam: ik kruid, zonder t.' },
      { soort: 'tt', zin: 'Mijn zus ___ vanavond de tafel voor het eten.', cue: 'dekken', goed: 'dekt', uitleg: 'Vanavond: tegenwoordige tijd. Mijn zus is een zij, dus stam + t: dek + t = dekt.' },
      { soort: 'dd', zin: 'Vroeger ___ mijn broer en ik spruitjes, maar nu eten we ze graag.', cue: 'haten', goed: 'haatten', uitleg: 'Vroeger: verleden tijd, en mijn broer en ik is meervoud. De stam haat eindigt op een t: haat + ten = haatten.' },
      { soort: 'dd', zin: 'Gisteren ___ wij in spanning de uitslag van de tekenwedstrijd af.', cue: 'afwachten', goed: 'wachtten', uitleg: 'Gisteren: verleden tijd, en wij is meervoud. De stam wacht eindigt op een t: wacht + ten = wachtten.' },
      { soort: 'vt-sterk', zin: 'Vroeger ___ mijn opa en oma voor elke maaltijd.', cue: 'bidden', goed: 'baden', uitleg: 'Vroeger: verleden tijd, en opa en oma is meervoud. Bidden is sterk: bad, meervoud baden.' },
      { soort: 'vd', zin: 'Mijn vader heeft het hout voor de kachel ___.', cue: 'hakken', goed: 'gehakt', uitleg: 'Heeft + voltooid deelwoord. De stam hak eindigt op een k, die zit in \'t kofschip, dus een t: gehakt.' },
      { soort: 'bijv', zin: 'In de kerstkrans zaten ___ sinaasappelschijfjes.', cue: 'drogen', goed: 'gedroogde', uitleg: 'Het voltooid deelwoord is gedroogd (g zit niet in \'t kofschip). Voor de schijfjes komt er een e achter: gedroogde.' },
      { soort: 'val', zin: '___ jij je kerstcadeaus altijd zelf in?', cue: 'inpakken', goed: 'pak', uitleg: 'Tegenwoordige tijd, en jij staat achter het werkwoord. Dan krijgt het geen t: pak jij.' },
      { soort: 'tt', zin: 'Mijn broertje ___ elk jaar wat er in zijn grootste pakje zit.', cue: 'gokken', goed: 'gokt', uitleg: 'Elk jaar: tegenwoordige tijd. Mijn broertje is een hij, dus stam + t: gok + t = gokt.' }
    ],
    // Dag 43
    [
      { soort: 'val', zin: 'Mijn oma ___ op dit moment de stoelen in de woonkamer opnieuw met rode stof.', cue: 'bekleden', goed: 'bekleedt', uitleg: 'Op dit moment: tegenwoordige tijd, en er staat geen heeft of is bij. Mijn oma is een zij: stam bekleed + t = bekleedt. Bekleed zonder t is het voltooid deelwoord.' },
      { soort: 'tt', zin: 'Als het stoplicht op oranje springt, ___ ik niet meer door, maar stop ik.', cue: 'doorrijden', goed: 'rijd', uitleg: '"Springt" en "stop": tegenwoordige tijd. Bij ik gebruik je alleen de stam: ik rijd, zonder t.' },
      { soort: 'tt', zin: 'Mijn zusje ___ elke ochtend als eerste naar haar adventskalender.', cue: 'grijpen', goed: 'grijpt', uitleg: 'Elke ochtend: tegenwoordige tijd. Mijn zusje is een zij, dus stam + t: grijp + t = grijpt.' },
      { soort: 'dd', zin: 'Vorig jaar ___ mijn moeder zich voor het kerstdiner in een lange rode jurk.', cue: 'kleden', goed: 'kleedde', uitleg: 'Vorig jaar: verleden tijd. De stam kleed eindigt op een d: kleed + de = kleedde.' },
      { soort: 'dd', zin: 'Na de gewonnen finale ___ het hele team vorige week tot diep in de nacht.', cue: 'feesten', goed: 'feestte', uitleg: 'Vorige week: verleden tijd. Het hele team is één groep, dus enkelvoud. De stam feest eindigt op een t: feest + te = feestte.' },
      { soort: 'vt-sterk', zin: 'Vroeger ___ op school veel strengere regels dan nu.', cue: 'gelden', goed: 'golden', uitleg: 'Vroeger: verleden tijd, en regels is meervoud. Gelden is sterk: gold, meervoud golden.' },
      { soort: 'vd', zin: 'Mijn oma heeft voor de hele familie kerstkoekjes ___.', cue: 'bakken', goed: 'gebakken', uitleg: 'Heeft + voltooid deelwoord. Bakken heeft als voltooid deelwoord gebakken, op -en.' },
      { soort: 'bijv', zin: 'Op de schaal lagen ___ kerstkransjes met een laagje suiker.', cue: 'glazuren', goed: 'geglazuurde', uitleg: 'Het voltooid deelwoord is geglazuurd (r zit niet in \'t kofschip). Voor de kransjes komt er een e achter: geglazuurde.' },
      { soort: 'val', zin: 'Hoe ___ jij eigenlijk het liefst je kerstvakantie door?', cue: 'doorbrengen', goed: 'breng', uitleg: 'Tegenwoordige tijd, en jij staat achter het werkwoord. Dan krijgt het geen t: breng jij.' },
      { soort: 'tt', zin: 'De juf ___ elke vraag over de kerstmusical geduldig, ook als hij al tien keer is gesteld.', cue: 'beantwoorden', goed: 'beantwoordt', uitleg: '"Is gesteld": het gaat om nu, tegenwoordige tijd. De juf is een zij, dus stam + t: beantwoord + t = beantwoordt.' }
    ],
    // Dag 44
    [
      { soort: 'tt', zin: 'Mijn zusje ___ zo veel van haar nieuwe cavia dat ze de hele dag tegen hem praat.', cue: 'houden', goed: 'houdt', uitleg: '"Praat": tegenwoordige tijd. Mijn zusje is een zij, dus stam + t: houd + t = houdt.' },
      { soort: 'tt', zin: 'Jij ___ je toch ook aan voor de kerstmusical?', cue: 'aanmelden', goed: 'meldt', uitleg: 'Tegenwoordige tijd. Jij staat hier vóór het werkwoord, dus stam + t: jij meldt. Alleen als jij erachter staat, valt de t weg.' },
      { soort: 'tt', zin: 'Mijn zusje ___ op dit moment elke kerstkaart met glitterstiften.', cue: 'kleuren', goed: 'kleurt', uitleg: 'Op dit moment: tegenwoordige tijd. Mijn zusje is een zij, dus stam + t: kleur + t = kleurt.' },
      { soort: 'dd', zin: 'Vorig jaar ___ we met kerst urenlang met de hele familie.', cue: 'kaarten', goed: 'kaartten', uitleg: 'Vorig jaar: verleden tijd, en we is meervoud. De stam kaart eindigt op een t: kaart + ten = kaartten.' },
      { soort: 'vd', zin: 'Ik heb alle kerstkaarten al ___, nu moeten ze alleen nog op de post.', cue: 'frankeren', goed: 'gefrankeerd', uitleg: 'Heb + voltooid deelwoord. De stam frankeer eindigt op een r, niet in \'t kofschip, dus een d: gefrankeerd.' },
      { soort: 'bijv', zin: 'Mijn moeder gaf me een stapel ___ enveloppen.', cue: 'dichtplakken', goed: 'dichtgeplakte', uitleg: 'Het voltooid deelwoord is dichtgeplakt (k zit in \'t kofschip). Voor de enveloppen komt er een e achter: dichtgeplakte.' },
      { soort: 'engels', zin: 'Gisteren ___ ik hoe je een kerstster van papier vouwt.', cue: 'googelen', goed: 'googelde', uitleg: 'Gisteren: verleden tijd. De stam googel eindigt op een l, niet in \'t kofschip, dus -de: googelde.' },
      { soort: 'val', zin: 'Mijn opa ___ elk jaar honderd kerstkaarten bij de drukker.', cue: 'bestellen', goed: 'bestelt', uitleg: 'Geen heeft of is erbij: dit is de persoonsvorm, tegenwoordige tijd (elk jaar). Mijn opa is een hij: stam bestel + t = bestelt. Besteld met een d is het voltooid deelwoord.' },
      { soort: 'tt', zin: 'Mijn moeder ___ elk jaar welke kerstkaart we versturen.', cue: 'beslissen', goed: 'beslist', uitleg: 'Elk jaar: tegenwoordige tijd. Mijn moeder is een zij, dus stam + t: beslis + t = beslist.' },
      { soort: 'dd', zin: 'Gisteren ___ het geitje op de kinderboerderij heel hard toen we langsliepen.', cue: 'blaten', goed: 'blaatte', uitleg: 'Gisteren: verleden tijd. De stam blaat eindigt op een t: blaat + te = blaatte.' }
    ],
    // Dag 45
    [
      { soort: 'val', zin: 'Waarom ___ jij je adem zo lang in?', cue: 'inhouden', goed: ['houd', 'hou'], uitleg: 'Tegenwoordige tijd, en jij staat achter het werkwoord. Dan krijgt het geen t: houd jij. Hou jij mag ook.' },
      { soort: 'tt', zin: 'Ik ___ mijn opa elke zaterdag naar de markt, want hij loopt niet zo goed meer.', cue: 'begeleiden', goed: 'begeleid', uitleg: 'Elke zaterdag: tegenwoordige tijd. Bij ik gebruik je alleen de stam: ik begeleid, zonder t.' },
      { soort: 'tt', zin: 'Mijn broertje ___ elke avond zijn verlanglijstje in de schoorsteen.', cue: 'fluisteren', goed: 'fluistert', uitleg: 'Elke avond: tegenwoordige tijd. Mijn broertje is een hij, dus stam + t: fluister + t = fluistert.' },
      { soort: 'dd', zin: 'Vroeger ___ kinderen maar één keer per week, op zaterdagavond.', cue: 'baden', goed: 'baadden', uitleg: 'Vroeger: verleden tijd, en kinderen is meervoud. De stam baad eindigt op een d: baad + den = baadden.' },
      { soort: 'dd', zin: 'Gisteren ___ mijn knie flink toen ik met mijn fiets over het ijs uitgleed.', cue: 'bloeden', goed: 'bloedde', uitleg: 'Gisteren: verleden tijd. De stam bloed eindigt op een d: bloed + de = bloedde.' },
      { soort: 'vd', zin: 'Mijn broer heeft een surprise in de vorm van een kasteel ___.', cue: 'bouwen', goed: 'gebouwd', uitleg: 'Heeft + voltooid deelwoord. De stam bouw eindigt op een w, niet in \'t kofschip, dus een d: gebouwd.' },
      { soort: 'bijv', zin: 'Ik vond voor de deur een ___ jutezak.', cue: 'dichtknopen', goed: 'dichtgeknoopte', uitleg: 'Het voltooid deelwoord is dichtgeknoopt (p zit in \'t kofschip). Jutezak is een de-woord, dus er komt een e achter: een dichtgeknoopte jutezak.' },
      { soort: 'val', zin: 'Morgen ___ de postbode de laatste pakjes, net op tijd voor pakjesavond.', cue: 'bezorgen', goed: 'bezorgt', uitleg: 'Morgen: tegenwoordige tijd, en er staat geen heeft of is bij. De postbode is een hij: stam bezorg + t = bezorgt. Bezorgd met een d is het voltooid deelwoord.' },
      { soort: 'tt', zin: 'Kijk, de verhuizer ___ de bank met een touw naar de bovenste verdieping.', cue: 'hijsen', goed: 'hijst', uitleg: 'Kijk: het gebeurt nu, tegenwoordige tijd. De verhuizer is een hij, dus stam + t. De stam van hijsen is hijs: hijst.' },
      { soort: 'tt', zin: 'Mijn kat ___ elke avond aan de deur om binnen te komen.', cue: 'krassen', goed: 'krast', uitleg: 'Elke avond: tegenwoordige tijd. Mijn kat is een hij of zij, dus stam + t: kras + t = krast.' }
    ],
    // Dag 46
    [
      { soort: 'tt', zin: 'Als het spannend wordt in de film, ___ mijn zusje altijd haar hoofd af.', cue: 'afwenden', goed: 'wendt', uitleg: '"Wordt": tegenwoordige tijd. Mijn zusje is een zij, dus stam + t: wend + t = wendt.' },
      { soort: 'tt', zin: 'Morgenavond ___ er vast weer iemand hard op onze deur.', cue: 'bonzen', goed: 'bonst', uitleg: 'Morgenavond: tegenwoordige tijd. Iemand is enkelvoud, dus stam + t. De stam van bonzen is bons (z wordt s): bonst.' },
      { soort: 'dd', zin: 'Vorig jaar ___ Sinterklaas mij bij de intocht vanaf zijn paard, en ik zwaaide terug.', cue: 'groeten', goed: 'groette', uitleg: 'Vorig jaar: verleden tijd. De stam groet eindigt op een t: groet + te = groette.' },
      { soort: 'vt-sterk', zin: 'Vorig jaar ___ mijn ouders de deur van de schuur af, zodat niemand onze nieuwe fietsen kon stelen.', cue: 'afsluiten', goed: 'sloten', uitleg: 'Vorig jaar: verleden tijd, en mijn ouders is meervoud. Sluiten is sterk: sloot, meervoud sloten.' },
      { soort: 'vd', zin: 'Wie heeft er al in de zak met pakjes ___?', cue: 'gluren', goed: 'gegluurd', uitleg: 'Heeft + voltooid deelwoord. De stam gluur eindigt op een r, niet in \'t kofschip, dus een d: gegluurd.' },
      { soort: 'bijv', zin: 'Op tafel stond een schaal met ___ pepernoten.', cue: 'kruiden', goed: 'gekruide', uitleg: 'Het voltooid deelwoord is gekruid. Voor de pepernoten komt er een e achter: gekruide (met één d).' },
      { soort: 'val', zin: '___ je opa morgen ook een gedicht voor iedereen?', cue: 'dichten', goed: 'dicht', uitleg: 'Je opa is jouw opa, dus een hij: stam + t. De stam dicht eindigt al op een t, dus er komt geen tweede bij: dicht.' },
      { soort: 'val', zin: 'Ik heb het gedicht van vorig jaar nog steeds ___ in een la.', cue: 'bewaren', goed: 'bewaard', uitleg: 'Heb + voltooid deelwoord. De stam bewaar eindigt op een r, niet in \'t kofschip, dus een d: bewaard. Bewaart met een t is de persoonsvorm.' },
      { soort: 'tt', zin: 'Mijn broertje ___ morgen pas om tien uur naar bed.', cue: 'hoeven', goed: 'hoeft', uitleg: 'Morgen: tegenwoordige tijd. Mijn broertje is een hij, dus stam + t. De stam van hoeven is hoef (v wordt f): hoeft.' },
      { soort: 'dd', zin: 'Gisteren ___ mijn opa zijn beroemde erwtensoep voor de hele familie.', cue: 'bereiden', goed: 'bereidde', uitleg: 'Gisteren: verleden tijd. De stam bereid eindigt op een d: bereid + de = bereidde.' }
    ],
    // Dag 47
    [
      { soort: 'tt', zin: 'Kijk, mijn broertje ___ het lint van zijn pakje gewoon met een schaar door.', cue: 'doorsnijden', goed: 'snijdt', uitleg: 'Kijk: het gebeurt nu, tegenwoordige tijd. Mijn broertje is een hij, dus stam + t: snijd + t = snijdt.' },
      { soort: 'tt', zin: 'Mijn zusje ___ elk pakje eerst heel lang voordat ze het openmaakt.', cue: 'bekijken', goed: 'bekijkt', uitleg: '"Openmaakt": tegenwoordige tijd. Mijn zusje is een zij, dus stam + t: bekijk + t = bekijkt.' },
      { soort: 'vt', zin: 'Vorig jaar ___ mijn zusje van blijdschap door de kamer.', cue: 'huppelen', goed: 'huppelde', uitleg: 'Vorig jaar: verleden tijd. De stam huppel eindigt op een l, niet in \'t kofschip, dus -de: huppelde.' },
      { soort: 'dd', zin: 'Vroeger ___ veel mensen het woord Sinterklaas af tot "de Sint".', cue: 'afkorten', goed: 'kortten', uitleg: 'Vroeger: verleden tijd, en veel mensen is meervoud. De stam kort eindigt op een t: kort + ten = kortten.' },
      { soort: 'vt-sterk', zin: 'Toen de bel ging, ___ ik even mijn adem in.', cue: 'inhouden', goed: 'hield', uitleg: '"Ging": verleden tijd. Houden is een sterk werkwoord: hield (meervoud hielden), met een d.' },
      { soort: 'vd', zin: 'Opa heeft de hele avond ___ om de gedichten.', cue: 'grinniken', goed: 'gegrinnikt', uitleg: 'Heeft + voltooid deelwoord. De stam grinnik eindigt op een k, die zit in \'t kofschip, dus een t: gegrinnikt.' },
      { soort: 'bijv', zin: 'Na het uitpakken lag er overal ___ cadeaupapier.', cue: 'kreuken', goed: 'gekreukt', uitleg: 'Het voltooid deelwoord is gekreukt. Cadeaupapier is een het-woord en er staat geen de of het voor, dus geen e: gekreukt cadeaupapier.' },
      { soort: 'val', zin: '___ jij Sinterklaas ook altijd met een tekening?', cue: 'bedanken', goed: 'bedank', uitleg: 'Tegenwoordige tijd, en jij staat achter het werkwoord. Dan krijgt het geen t: bedank jij.' },
      { soort: 'val', zin: 'Mijn moeder heeft ons er nog even aan ___ dat we Sinterklaas moeten bedanken.', cue: 'herinneren', goed: 'herinnerd', uitleg: 'Heeft + voltooid deelwoord. De stam herinner eindigt op een r, niet in \'t kofschip, dus een d: herinnerd. Herinnert met een t is de persoonsvorm.' },
      { soort: 'tt', zin: 'Hoor je dat? Er ___ een harde bons op de deur!', cue: 'klinken', goed: 'klinkt', uitleg: 'Hoor je dat: het gebeurt nu, tegenwoordige tijd. Een bons is enkelvoud, dus stam + t: klink + t = klinkt.' }
    ],
    // Dag 48
    [
      { soort: 'tt', zin: 'Mijn broer ___ op zijn nieuwe fiets gewoon door als ik hem roep.', cue: 'doorrijden', goed: 'rijdt', uitleg: '"Roep": tegenwoordige tijd. Mijn broer is een hij, dus stam + t: rijd + t = rijdt.' },
      { soort: 'tt', zin: 'Mijn zusje ___ al de hele dag over haar nieuwe pop.', cue: 'kwebbelen', goed: 'kwebbelt', uitleg: 'Al de hele dag: ze is nog steeds bezig, tegenwoordige tijd. Mijn zusje is een zij, dus stam + t: kwebbel + t = kwebbelt.' },
      { soort: 'vt', zin: 'Gisteravond ___ mijn oom van het lachen om zijn eigen gedicht.', cue: 'brullen', goed: 'brulde', uitleg: 'Gisteravond: verleden tijd. De stam brul eindigt op een l, niet in \'t kofschip, dus -de: brulde.' },
      { soort: 'dd', zin: 'Gisteren ___ het mijn moeder een uur om alle pakjes in te pakken.', cue: 'kosten', goed: 'kostte', uitleg: 'Gisteren: verleden tijd. De stam kost eindigt op een t: kost + te = kostte.' },
      { soort: 'vt-sterk', zin: 'Mijn broertje was moe, maar hij ___ door tot het laatste pakje open was.', cue: 'doorbijten', goed: 'beet', uitleg: '"Was": verleden tijd. Bijten is een sterk werkwoord: beet (meervoud beten), zonder -te.' },
      { soort: 'vd', zin: 'Ik heb mijn chocoladeletter eerlijk met mijn broertje ___.', cue: 'delen', goed: 'gedeeld', uitleg: 'Heb + voltooid deelwoord. De stam deel eindigt op een l, niet in \'t kofschip, dus een d: gedeeld.' },
      { soort: 'bijv', zin: 'Op tafel lag een chocoladeletter met een ___ hoek.', cue: 'afbijten', goed: 'afgebeten', uitleg: 'Bijten is sterk: het voltooid deelwoord is (af)gebeten. Dat eindigt op -en, dus er komt geen e bij: een afgebeten hoek.' },
      { soort: 'engels', zin: 'Mijn broer heeft gisteren de hele avond met zijn nieuwe spel ___.', cue: 'gamen', goed: 'gegamed', uitleg: 'Heeft + voltooid deelwoord. De stam game eindigt op een m-klank, niet in \'t kofschip, dus een d: gegamed.' },
      { soort: 'val', zin: '___ jij je broertje straks met het bouwen van zijn nieuwe lego?', cue: 'helpen', goed: 'help', uitleg: 'Straks: tegenwoordige tijd. Jij staat achter het werkwoord, dus geen t: help jij.' },
      { soort: 'tt', zin: 'Kijk, mijn zusje ___ helemaal van trots in haar nieuwe jurk.', cue: 'glimmen', goed: 'glimt', uitleg: 'Kijk: het is nu zo, tegenwoordige tijd. Mijn zusje is een zij, dus stam + t: glim + t = glimt.' }
    ],
    // Dag 49
    [
      { soort: 'tt', zin: 'Mijn opa ___ zich altijd heel netjes, met een stropdas.', cue: 'kleden', goed: 'kleedt', uitleg: 'Altijd: tegenwoordige tijd. Mijn opa is een hij, dus stam + t: kleed + t = kleedt.' },
      { soort: 'tt', zin: 'Mijn oma zegt altijd: "Ik ___ elke avond voor jullie allemaal."', cue: 'bidden', goed: 'bid', uitleg: 'Tegenwoordige tijd. Bij ik gebruik je alleen de stam: ik bid, zonder t.' },
      { soort: 'tt', zin: 'Volgende week ___ mijn zusje in de kerstmusical als sneeuwvlok over het podium.', cue: 'dansen', goed: 'danst', uitleg: 'Volgende week: tegenwoordige tijd (die gebruik je ook voor straks). Mijn zusje is een zij, dus stam + t: dans + t = danst.' },
      { soort: 'dd', zin: 'Vorig jaar ___ mijn oma de oude stoel opnieuw met rood fluweel.', cue: 'bekleden', goed: 'bekleedde', uitleg: 'Vorig jaar: verleden tijd. De stam bekleed eindigt op een d: bekleed + de = bekleedde.' },
      { soort: 'vd', zin: 'Wij hebben het kerstlied voor de musical goed ___.', cue: 'instuderen', goed: 'ingestudeerd', uitleg: 'Hebben + voltooid deelwoord. De stam studeer eindigt op een r, niet in \'t kofschip, dus een d: ingestudeerd.' },
      { soort: 'bijv', zin: 'De juf deelde de ___ liedteksten uit.', cue: 'kopiëren', goed: 'gekopieerde', uitleg: 'Het voltooid deelwoord is gekopieerd. Voor de liedteksten komt er een e achter: gekopieerde.' },
      { soort: 'val', zin: 'De school ___ dit jaar de kostuums voor de musical, dus wij hoeven niets mee te nemen.', cue: 'betalen', goed: 'betaalt', uitleg: 'Geen heeft of is erbij: dit is de persoonsvorm, tegenwoordige tijd (zie "hoeven"). De school is een zij: stam betaal + t = betaalt. Betaald met een d is het voltooid deelwoord.' },
      { soort: 'val', zin: '___ jij je tekst voor de kerstmusical al uit je hoofd?', cue: 'kennen', goed: 'ken', uitleg: 'Tegenwoordige tijd, en jij staat achter het werkwoord. Dan krijgt het geen t: ken jij.' },
      { soort: 'tt', zin: 'Mijn broertje ___ altijd als hij moet zingen voor publiek.', cue: 'blozen', goed: 'bloost', uitleg: 'Altijd: tegenwoordige tijd. Mijn broertje is een hij, dus stam + t. De stam van blozen is bloos (z wordt s): bloost.' },
      { soort: 'dd', zin: 'Na de musical ___ de juf gisteren alle vragen van de ouders.', cue: 'beantwoorden', goed: 'beantwoordde', uitleg: 'Gisteren: verleden tijd. De stam beantwoord eindigt op een d: beantwoord + de = beantwoordde.' }
    ],
    // Dag 50
    [
      { soort: 'tt', zin: 'Het geluid van de kerstmuziek op de gang ___ mij steeds af van mijn rekensommen.', cue: 'afleiden', goed: 'leidt', uitleg: 'Tegenwoordige tijd: het gebeurt nu. Het geluid is een hij-vorm, dus stam + t: leid + t = leidt.' },
      { soort: 'tt', zin: 'Als het erg koud is, ___ ik soms een beetje uit mijn neus.', cue: 'bloeden', goed: 'bloed', uitleg: '"Is": tegenwoordige tijd. Bij ik gebruik je alleen de stam: ik bloed, zonder t.' },
      { soort: 'tt', zin: 'Mijn vader ___ elke ochtend een beetje water in de voet van de kerstboom.', cue: 'gieten', goed: 'giet', uitleg: 'Elke ochtend: tegenwoordige tijd. Mijn vader is een hij, dus stam + t. De stam giet eindigt al op een t, dus er komt geen tweede bij.' },
      { soort: 'dd', zin: 'Gisteravond ___ mijn vader alvast de kerstboomvoet klaar in de woonkamer.', cue: 'klaarzetten', goed: 'zette', uitleg: 'Gisteravond: verleden tijd. De stam zet eindigt op een t: zet + te = zette.' },
      { soort: 'vt-sterk', zin: 'Gisteren ___ mijn moeder de bezorger met de kerstboom binnen.', cue: 'binnenlaten', goed: 'liet', uitleg: 'Gisteren: verleden tijd. Laten is een sterk werkwoord: liet (meervoud lieten), zonder -te.' },
      { soort: 'vd', zin: 'De buurman heeft een groot gat ___ voor zijn kerstboom met kluit.', cue: 'graven', goed: 'gegraven', uitleg: 'Heeft + voltooid deelwoord. Graven is een sterk werkwoord: gegraven, op -en.' },
      { soort: 'bijv', zin: 'Mijn oma gaf ons een ___ kerstkleed met rendieren.', cue: 'bedrukken', goed: 'bedrukt', uitleg: 'Het voltooid deelwoord is bedrukt. Kleed is een het-woord met een ervoor, dus geen e: een bedrukt kleed.' },
      { soort: 'val', zin: 'Wanneer ___ jij de kerstballen in de boom?', cue: 'hangen', goed: 'hang', uitleg: 'Tegenwoordige tijd, en jij staat achter het werkwoord. Dan krijgt het geen t: hang jij.' },
      { soort: 'val', zin: 'Hebben jullie de kerstboom al ___?', cue: 'betalen', goed: 'betaald', uitleg: 'Hebben + voltooid deelwoord. De stam betaal eindigt op een l, niet in \'t kofschip, dus een d: betaald. Betaalt met een t is de persoonsvorm.' },
      { soort: 'tt', zin: 'De boswachter ___ deze week honderden kerstbomen.', cue: 'kappen', goed: 'kapt', uitleg: 'Deze week: tegenwoordige tijd. De boswachter is een hij, dus stam + t: kap + t = kapt.' }
    ],
    // Dag 51
    [
      { soort: 'tt', zin: 'Opa ___ altijd als eerste de kersttulband aan.', cue: 'aansnijden', goed: 'snijdt', uitleg: 'Altijd: tegenwoordige tijd. Opa is een hij, dus stam + t: snijd + t = snijdt.' },
      { soort: 'tt', zin: 'Mijn hond ___ en trilt als er buiten vuurwerk afgaat.', cue: 'hijgen', goed: 'hijgt', uitleg: '"Trilt" en "afgaat": tegenwoordige tijd. Mijn hond is een hij, dus stam + t: hijg + t = hijgt.' },
      { soort: 'dd', zin: 'Vorig jaar op oudejaarsavond ___ mijn moeder nog uren bij met haar zus.', cue: 'bijpraten', goed: 'praatte', uitleg: 'Vorig jaar: verleden tijd. De stam praat eindigt op een t: praat + te = praatte.' },
      { soort: 'vt-sterk', zin: 'Vroeger ___ mijn opa met oud en nieuw altijd gesmolten lood in een emmer water.', cue: 'gieten', goed: 'goot', uitleg: 'Vroeger: verleden tijd. Gieten is een sterk werkwoord: goot (meervoud goten), zonder -te.' },
      { soort: 'vd', zin: 'Mijn vader heeft vorig jaar zelf geen vuurwerk ___.', cue: 'afsteken', goed: 'afgestoken', uitleg: 'Heeft + voltooid deelwoord. Steken is een sterk werkwoord: (af)gestoken, op -en.' },
      { soort: 'bijv', zin: 'Op tafel stond een schaal ___ oliebollen.', cue: 'bestrooien', goed: 'bestrooide', uitleg: 'Het voltooid deelwoord is bestrooid (met poedersuiker). Voor de oliebollen komt er een e achter: bestrooide.' },
      { soort: 'engels', zin: 'Mijn zus ___ al haar vriendinnen altijd precies om twaalf uur op oudejaarsavond.', cue: 'appen', goed: 'appt', uitleg: 'Altijd: tegenwoordige tijd. Mijn zus is een zij, dus stam + t: app + t = appt.' },
      { soort: 'val', zin: 'Hoe ___ jij het nieuwe jaar het liefst in: met vuurwerk of zonder?', cue: 'inluiden', goed: 'luid', uitleg: 'Tegenwoordige tijd, en jij staat achter het werkwoord. Dan krijgt het geen t, ook al eindigt de stam op een d: luid jij.' },
      { soort: 'tt', zin: 'Mijn oom ___ elk jaar op nieuwjaarsdag in de ijskoude zee.', cue: 'duiken', goed: 'duikt', uitleg: 'Elk jaar: tegenwoordige tijd. Mijn oom is een hij, dus stam + t: duik + t = duikt.' },
      { soort: 'tt', zin: 'Mijn opa ___ elk jaar precies om twaalf uur zijn glas.', cue: 'heffen', goed: 'heft', uitleg: 'Elk jaar: tegenwoordige tijd. Mijn opa is een hij, dus stam + t: hef + t = heft.' }
    ],
    // Dag 52
    [
      { soort: 'tt', zin: 'De bezorger ___ zijn bus elke ochtend om zes uur vol met pakjes, want het is druk voor de feestdagen.', cue: 'laden', goed: 'laadt', uitleg: '"Is": tegenwoordige tijd. Het onderwerp is de bezorger: een hij. Stam + t: laad + t = laadt.' },
      { soort: 'tt', zin: 'Onze juf ___ ons de kerstboom pas versieren als het lokaal is opgeruimd.', cue: 'laten', goed: 'laat', uitleg: '"Is opgeruimd": tegenwoordige tijd. Onze juf is een zij, dus stam + t. De stam laat eindigt al op een t, dus je schrijft geen tweede t: laat.' },
      { soort: 'dd', zin: 'Gisteren ___ ik een halfuur in de kou bij de bushalte, want de bus had vertraging.', cue: 'wachten', goed: 'wachtte', uitleg: 'Gisteren: verleden tijd. De stam is wacht en eindigt op een t. Die zit in \'t kofschip, dus wacht + te = wachtte, met twee t\'s.' },
      { soort: 'dd', zin: 'Na de schaatstocht van vorige week zaterdag ___ we even uit in de warme kantine.', cue: 'uitrusten', goed: 'rustten', uitleg: 'Vorige week: verleden tijd. Het onderwerp is we, meer dan één. De stam rust eindigt op een t, en die zit in \'t kofschip: rust + ten = rustten.' },
      { soort: 'vt-sterk', zin: 'Gisteren ___ er een sneeuwpop van twee meter op het schoolplein.', cue: 'staan', goed: 'stond', uitleg: 'Gisteren: verleden tijd. Staan is een sterk werkwoord: de verleden tijd is stond. Daar komt geen -de of -te achter.' },
      { soort: 'tt', zin: 'Mijn ouders ___ de kerstcadeaus elk jaar pas op kerstavond onder de boom.', cue: 'leggen', goed: 'leggen', uitleg: 'Elk jaar: tegenwoordige tijd. Het onderwerp is mijn ouders, dat zijn er twee. Bij meer dan één schrijf je het hele werkwoord: leggen.' },
      { soort: 'bijv', zin: 'Bij het toetje aten we ijs met ___ frambozen uit de vriezer.', cue: 'vriezen', goed: 'gevroren', uitleg: 'Het voltooid deelwoord van vriezen is gevroren. Het eindigt op -en, dus er komt geen e achter: gevroren frambozen.' },
      { soort: 'val', zin: '___ jij morgen de taart in stukjes, of doet mama dat?', cue: 'snijden', goed: 'snijd', uitleg: 'Morgen: tegenwoordige tijd. Jij staat achter het werkwoord, en dan krijgt het geen t. Alleen de stam: snijd jij.' },
      { soort: 'val', zin: 'Mijn opa ___ elk jaar met kerst hetzelfde verhaal over de strenge winter van 1963.', cue: 'vertellen', goed: 'vertelt', uitleg: 'Elk jaar: tegenwoordige tijd, en mijn opa is een hij: stam + t = vertelt. Pas op: verteld met een d is het voltooid deelwoord (hij heeft het verteld), maar hier is het de persoonsvorm.' },
      { soort: 'tt', zin: 'Mijn moeder ___ altijd dat ik een muts op moet, ook als het helemaal niet koud is.', cue: 'zeggen', goed: 'zegt', uitleg: '"Moet" en "is": tegenwoordige tijd. Mijn moeder is een zij, dus stam + t: zeg + t = zegt. Je hoort een ch-klank, maar de stam is zeg, met een g.' }
    ],
    // Dag 53
    [
      { soort: 'tt', zin: 'Zodra de bel ___, rennen alle kinderen naar buiten om in de sneeuw te spelen.', cue: 'luiden', goed: 'luidt', uitleg: '"Rennen": tegenwoordige tijd. Het onderwerp is de bel: een hij. Stam + t: luid + t = luidt.' },
      { soort: 'tt', zin: 'Wie ___ er op dit moment de kerstkaarten voor de hele klas?', cue: 'schrijven', goed: 'schrijft', uitleg: 'Op dit moment: tegenwoordige tijd. Wie is hier één persoon, een hij of zij. Stam + t: schrijf + t = schrijft.' },
      { soort: 'dd', zin: 'Mijn zus ___ gisteravond uren met haar vriendin aan de telefoon.', cue: 'praten', goed: 'praatte', uitleg: 'Gisteravond: verleden tijd. De stam is praat en eindigt op een t, die zit in \'t kofschip. Praat + te = praatte, met twee t\'s.' },
      { soort: 'dd', zin: 'De juf ___ vorige week de jongens en de meisjes voor de gymles, omdat er twee wedstrijden tegelijk waren.', cue: 'scheiden', goed: 'scheidde', uitleg: 'Vorige week: verleden tijd. De stam is scheid en eindigt op een d. De d zit niet in \'t kofschip, dus scheid + de = scheidde.' },
      { soort: 'vt-sterk', zin: 'Mijn broertje ___ gisteren in de bus helemaal alleen op de achterste bank.', cue: 'zitten', goed: 'zat', uitleg: 'Gisteren: verleden tijd. Zitten is een sterk werkwoord: de verleden tijd is zat. De stam zit eindigt op een t, maar er komt geen -te achter.' },
      { soort: 'vt', zin: 'Toen we het kerststukje hadden gemaakt, ___ ik er nog een rood lint omheen.', cue: 'leggen', goed: 'legde', uitleg: '"Hadden gemaakt": het is al gebeurd, verleden tijd. De stam is leg, de g zit niet in \'t kofschip: leg + de = legde.' },
      { soort: 'vd', zin: 'Heb jij de kerstkransjes van oma al ___? Ze zijn heerlijk!', cue: 'proeven', goed: 'geproefd', uitleg: 'Bij heb hoort een voltooid deelwoord. De stam is proef, maar het hele werkwoord is proeven, met een v. De v zit niet in \'t kofschip, dus een d: geproefd.' },
      { soort: 'val', zin: 'Hoe vaak ___ je moeder de vogeltjes in de tuin als het vriest?', cue: 'voeren', goed: 'voert', uitleg: 'Je moeder betekent jouw moeder, dus het onderwerp is een zij en niet jij. \'Vriest\': tegenwoordige tijd. Stam + t: voer + t = voert.' },
      { soort: 'engels', zin: 'Mijn nicht ___ gisteren elke kerstfoto die ik op internet had gezet.', cue: 'liken', goed: 'likete', uitleg: 'Gisteren: verleden tijd. Liken komt uit het Engels; je hoort aan het eind een k-klank. De k zit in \'t kofschip, dus like + te = likete.' },
      { soort: 'tt', zin: 'Het sneeuwt al de hele dag, maar mijn vader ___ toch gewoon naar zijn werk.', cue: 'lopen', goed: 'loopt', uitleg: '"Sneeuwt": tegenwoordige tijd. Mijn vader is een hij: stam + t. Loop + t = loopt.' }
    ],
    // Dag 54
    [
      { soort: 'tt', zin: 'Mijn vader ___ op kerstochtend altijd het verse brood in dikke plakken.', cue: 'snijden', goed: 'snijdt', uitleg: 'Altijd: tegenwoordige tijd. Mijn vader is een hij: stam + t. Snijd + t = snijdt.' },
      { soort: 'tt', zin: 'In december ___ mijn oma elke avond een kaarsje in het raam.', cue: 'plaatsen', goed: 'plaatst', uitleg: 'Elke avond: tegenwoordige tijd. Mijn oma is een zij, dus stam + t: plaats + t = plaatst.' },
      { soort: 'dd', zin: 'Op het kerstfeest van vorig jaar ___ mijn ouders voor het eerst de nieuwe buren.', cue: 'ontmoeten', goed: 'ontmoetten', uitleg: 'Vorig jaar: verleden tijd. Het onderwerp is mijn ouders, meer dan één. De stam ontmoet eindigt op een t, die zit in \'t kofschip: ontmoet + ten = ontmoetten.' },
      { soort: 'dd', zin: 'Gisteren ___ de kerkklokken in het hele dorp om twaalf uur.', cue: 'luiden', goed: 'luidden', uitleg: 'Gisteren: verleden tijd. Het onderwerp is de kerkklokken, meer dan één. De stam luid eindigt op een d, die zit niet in \'t kofschip: luid + den = luidden.' },
      { soort: 'vt-sterk', zin: 'Mijn ouders ___ het vorig jaar te koud om naar de kerstmarkt te gaan.', cue: 'vinden', goed: 'vonden', uitleg: 'Vorig jaar: verleden tijd. Vinden is een sterk werkwoord: vond, en bij meer personen vonden. Het onderwerp is mijn ouders, dus vonden.' },
      { soort: 'bijv', zin: 'Op tafel stond een schaal met ___ peren, net als vroeger bij oma.', cue: 'stoven', goed: 'gestoofde', uitleg: 'Het voltooid deelwoord is gestoofd: de stam is stoof, maar het hele werkwoord is stoven, met een v. Die zit niet in \'t kofschip, dus een d. Voor peren komt er een e achter: gestoofde.' },
      { soort: 'tt', zin: 'Alle leerlingen van de school ___ morgen samen kerstliedjes in de aula.', cue: 'zingen', goed: 'zingen', uitleg: 'Morgen: tegenwoordige tijd. Het onderwerp is alle leerlingen, meer dan één. Dan schrijf je het hele werkwoord: zingen.' },
      { soort: 'val', zin: 'Opa had dat verhaal al zo vaak ___ dat iedereen het uit zijn hoofd kende.', cue: 'vertellen', goed: 'verteld', uitleg: 'Bij had hoort een voltooid deelwoord; vertellen begint met ver-, dus er komt geen ge- voor. De stam vertel eindigt op een l, die zit niet in \'t kofschip: verteld, met een d (niet verwarren met hij vertelt).' },
      { soort: 'val', zin: '___ u straks ook mee met de kerstliedjes, meneer?', cue: 'zingen', goed: 'zingt', uitleg: 'Straks: tegenwoordige tijd. Bij u schrijf je altijd stam + t, ook als u achter het werkwoord staat: zingt u. Dat is anders dan bij jij.' },
      { soort: 'val', zin: '___ jij wat er in het grootste pakje zit?', cue: 'raden', goed: 'raad', uitleg: '"Zit": tegenwoordige tijd. Jij staat achter het werkwoord, en dan krijgt het geen t. Alleen de stam: raad jij.' }
    ],
    // Dag 55
    [
      { soort: 'tt', zin: 'Mijn tante ___ elke week een pakketje met snoep naar haar zoon in Australië.', cue: 'verzenden', goed: 'verzendt', uitleg: 'Elke week: tegenwoordige tijd. Mijn tante is een zij, dus stam + t: verzend + t = verzendt.' },
      { soort: 'tt', zin: 'Iedereen in de klas ___ al weken uit naar de kerstvakantie.', cue: 'uitkijken', goed: 'kijkt', uitleg: 'Al weken, en nog steeds: tegenwoordige tijd. Iedereen is één persoon, dus stam + t. De stam van uitkijken is kijk (kijk uit): kijk + t = kijkt.' },
      { soort: 'dd', zin: 'De fotograaf ___ zijn camera op de schaatsers die als eersten over de streep kwamen.', cue: 'richten', goed: 'richtte', uitleg: '"Kwamen": verleden tijd. De stam is richt en eindigt op een t. Die zit in \'t kofschip: richt + te = richtte.' },
      { soort: 'dd', zin: 'Mijn vader ___ de koffers boven op de auto, want we gingen op wintersport.', cue: 'laden', goed: 'laadde', uitleg: '"Gingen": verleden tijd. De stam is laad en eindigt op een d. Die zit niet in \'t kofschip: laad + de = laadde.' },
      { soort: 'vt-sterk', zin: 'Afgelopen zomer ___ we met de auto naar Italië, en nu gaan we er met kerst weer heen.', cue: 'rijden', goed: 'reden', uitleg: 'Afgelopen zomer: verleden tijd. Rijden is een sterk werkwoord: reed, en bij meer personen reden. Het onderwerp is we, dus reden.' },
      { soort: 'vd', zin: 'Ik heb gisteren de hele middag op de ijsbaan ___.', cue: 'schaatsen', goed: 'geschaatst', uitleg: 'Bij heb hoort een voltooid deelwoord. De stam is schaats en eindigt op een s, die zit in \'t kofschip: ge + schaats + t = geschaatst.' },
      { soort: 'vt', zin: 'Mijn zus ___ gisteren een prachtige kerstkaart voor oma.', cue: 'tekenen', goed: 'tekende', uitleg: 'Gisteren: verleden tijd. De stam is teken, de n zit niet in \'t kofschip: teken + de = tekende.' },
      { soort: 'val', zin: 'Waarom ___ je zus zich elk jaar als engel voor het kerstspel?', cue: 'verkleden', goed: 'verkleedt', uitleg: 'Je zus betekent jouw zus: een zij, niet jij. Elk jaar: tegenwoordige tijd. Stam + t: verkleed + t = verkleedt.' },
      { soort: 'val', zin: 'Ik was zo ___ over mijn cijfer dat ik het drie keer moest lezen.', cue: 'verbazen', goed: 'verbaasd', uitleg: 'Na was staat hier een voltooid deelwoord. De stam is verbaas, maar het hele werkwoord heeft een z, en die zit niet in \'t kofschip: verbaasd. Hij verbaast (met een t) is de tegenwoordige tijd.' },
      { soort: 'tt', zin: 'Mijn hond ___ in de sneeuw altijd als een gek achter de sneeuwballen aan.', cue: 'rennen', goed: 'rent', uitleg: 'Altijd: tegenwoordige tijd. Mijn hond is een hij: stam + t. Ren + t = rent.' }
    ],
    // Dag 56
    [
      { soort: 'tt', zin: 'Ons schoolteam ___ morgen in de finale van het zaalvoetbaltoernooi om de beker.', cue: 'strijden', goed: 'strijdt', uitleg: 'Morgen: tegenwoordige tijd. Het onderwerp is ons schoolteam: één team, dus een hij. Stam + t: strijd + t = strijdt.' },
      { soort: 'tt', zin: 'Elke ochtend ___ mijn broertje op zijn tenen naar het raam om te zien of het gesneeuwd heeft.', cue: 'sluipen', goed: 'sluipt', uitleg: 'Elke ochtend: tegenwoordige tijd. Mijn broertje is een hij: stam + t. Sluip + t = sluipt.' },
      { soort: 'dd', zin: 'De motor van de oude auto ___ gisteren pas na vijf pogingen, zo koud was het.', cue: 'starten', goed: 'startte', uitleg: 'Gisteren: verleden tijd. De stam is start en eindigt op een t. Die zit in \'t kofschip: start + te = startte.' },
      { soort: 'dd', zin: 'Het nieuws dat de school dichtging vanwege de sneeuw, ___ zich gisteren razendsnel door het dorp.', cue: 'verspreiden', goed: 'verspreidde', uitleg: 'Gisteren: verleden tijd, en het onderwerp is het nieuws. De stam verspreid eindigt op een d, die zit niet in \'t kofschip: verspreid + de = verspreidde.' },
      { soort: 'vt-sterk', zin: 'Vorig jaar ___ ons team de finale met 3-0.', cue: 'verliezen', goed: 'verloor', uitleg: 'Vorig jaar: verleden tijd. Verliezen is een sterk werkwoord: de verleden tijd is verloor. Er komt geen -de achter.' },
      { soort: 'bijv', zin: 'Mijn moeder plakte een pleister op mijn ___ knie.', cue: 'schaven', goed: 'geschaafde', uitleg: 'Het voltooid deelwoord is geschaafd: het hele werkwoord is schaven, met een v. Die zit niet in \'t kofschip, dus een d. Voor knie komt er een e achter: geschaafde.' },
      { soort: 'vd', zin: 'Mijn vader heeft gisteren de hele dag aan de kerstversiering ___.', cue: 'werken', goed: 'gewerkt', uitleg: 'Bij heeft hoort een voltooid deelwoord: ge + stam + d of t. De stam is werk, de k zit in \'t kofschip: gewerkt.' },
      { soort: 'engels', zin: 'Gisteren hebben we de kerstshow van school live ___ voor alle opa\'s en oma\'s.', cue: 'streamen', goed: 'gestreamd', uitleg: 'Bij hebben hoort een voltooid deelwoord. Streamen komt uit het Engels en eindigt op een m-klank, die zit niet in \'t kofschip. Dus ge + stream + d = gestreamd.' },
      { soort: 'val', zin: 'Elke ochtend ___ de conciërge eerst de gangen, voordat de kinderen komen.', cue: 'verwarmen', goed: 'verwarmt', uitleg: 'Elke ochtend: tegenwoordige tijd. De conciërge is een hij of zij: stam + t = verwarmt. Let op: verwarmd met een d is het voltooid deelwoord (het lokaal is verwarmd).' },
      { soort: 'val', zin: 'Mevrouw, ___ u hier op de bus naar het station?', cue: 'wachten', goed: 'wacht', uitleg: 'Het gaat over nu: tegenwoordige tijd. Bij u schrijf je stam + t. De stam wacht eindigt al op een t, en twee t\'s schrijf je niet: wacht u.' }
    ],
    // Dag 57
    [
      { soort: 'tt', zin: 'Mijn opa ___ nog steeds met een stok sinds hij op het ijs is gevallen.', cue: 'wandelen', goed: 'wandelt', uitleg: '\'Nog steeds\': tegenwoordige tijd. Mijn opa is een hij, dus stam + t: wandel + t = wandelt.' },
      { soort: 'tt', zin: 'Mijn zusje ___ elke ochtend een luikje van haar adventskalender.', cue: 'openen', goed: 'opent', uitleg: 'Elke ochtend: tegenwoordige tijd. Mijn zusje is een zij: stam + t. Open + t = opent.' },
      { soort: 'dd', zin: 'De herten ___ het bos in toen ze onze stemmen hoorden.', cue: 'vluchten', goed: 'vluchtten', uitleg: '"Hoorden": verleden tijd. Het onderwerp is de herten, meer dan één. De stam vlucht eindigt op een t, die zit in \'t kofschip: vlucht + ten = vluchtten.' },
      { soort: 'dd', zin: 'Niemand ___ dat het in december zo hard zou sneeuwen.', cue: 'verwachten', goed: 'verwachtte', uitleg: '"Zou sneeuwen": dit gaat over vroeger, verleden tijd. Niemand is één persoon. De stam is verwacht en eindigt op een t: verwacht + te = verwachtte.' },
      { soort: 'vt-sterk', zin: 'Gisteren in de pauze ___ de jongens van groep 8 sneeuwballen naar de doelpaal.', cue: 'smijten', goed: 'smeten', uitleg: 'Gisteren: verleden tijd. Smijten is een sterk werkwoord: smeet, en bij meer personen smeten. De jongens zijn er meer, dus smeten.' },
      { soort: 'vt', zin: 'Toen ik vanochtend wakker werd, ___ het buiten al flink.', cue: 'sneeuwen', goed: 'sneeuwde', uitleg: '"Werd": verleden tijd. De stam is sneeuw, de w zit niet in \'t kofschip: sneeuw + de = sneeuwde.' },
      { soort: 'bijv', zin: 'Bij de kassa van de ijsbaan staat een doos met ___ wanten.', cue: 'verliezen', goed: 'verloren', uitleg: 'Het voltooid deelwoord van verliezen is verloren. Het eindigt op -en, dus er komt geen e achter: verloren wanten.' },
      { soort: 'val', zin: '___ jij morgen de vergadering van de leerlingenraad?', cue: 'leiden', goed: 'leid', uitleg: 'Morgen: tegenwoordige tijd. Jij staat achter het werkwoord, dus geen t: alleen de stam, leid jij.' },
      { soort: 'val', zin: 'Gelukkig hebben alle egels in ons tuinhuisje de strenge winter ___.', cue: 'overleven', goed: 'overleefd', uitleg: 'Bij hebben hoort een voltooid deelwoord, en overleven krijgt geen ge-. De stam is overleef, maar het hele werkwoord heeft een v, die niet in \'t kofschip zit: overleefd. Hij overleeft met een t is de tegenwoordige tijd.' },
      { soort: 'tt', zin: 'Kom snel: het ___ in de keuken heerlijk naar kerstkoekjes!', cue: 'ruiken', goed: 'ruikt', uitleg: 'Kom snel: het gaat over nu, tegenwoordige tijd. Het onderwerp is het: stam + t. Ruik + t = ruikt.' }
    ],
    // Dag 58
    [
      { soort: 'tt', zin: 'Mijn broer ___ dat het met kerst gaat sneeuwen, maar ik geloof er niets van.', cue: 'wedden', goed: 'wedt', uitleg: '"Geloof": tegenwoordige tijd. Mijn broer is een hij: stam + t. Wed + t = wedt, met één d en een t.' },
      { soort: 'tt', zin: 'De bakker op de hoek ___ elke ochtend om vier uur het deeg voor de kerststollen uit.', cue: 'uitrollen', goed: 'rolt', uitleg: 'Elke ochtend: tegenwoordige tijd. De bakker is een hij: stam + t. Rol + t = rolt.' },
      { soort: 'dd', zin: 'Vorige week ___ de jongens van groep 8 hun nieuwe sleetjes op de heuvel achter school.', cue: 'testen', goed: 'testten', uitleg: 'Vorige week: verleden tijd. Het onderwerp is de jongens, meer dan één. De stam test eindigt op een t, die zit in \'t kofschip: test + ten = testten.' },
      { soort: 'dd', zin: 'Toen het donker werd, ___ de lantaarns de hele straat.', cue: 'verlichten', goed: 'verlichtten', uitleg: '"Werd": verleden tijd. Het onderwerp is de lantaarns, meer dan één. De stam verlicht eindigt op een t: verlicht + ten = verlichtten.' },
      { soort: 'vt-sterk', zin: 'Gisteren ___ de school al om twaalf uur, vanwege de sneeuw.', cue: 'sluiten', goed: 'sloot', uitleg: 'Gisteren: verleden tijd. Sluiten is een sterk werkwoord: de verleden tijd is sloot. Er komt geen -te achter.' },
      { soort: 'tt', zin: 'De kinderen van groep 3 ___ morgen een kerstspel voor de hele school.', cue: 'spelen', goed: 'spelen', uitleg: 'Morgen: tegenwoordige tijd. Het onderwerp is de kinderen van groep 3, meer dan één. Dus het hele werkwoord: spelen.' },
      { soort: 'vd', zin: 'Mijn overgrootmoeder heeft bijna honderd jaar in hetzelfde dorp ___.', cue: 'leven', goed: 'geleefd', uitleg: 'Bij heeft hoort een voltooid deelwoord. De stam is leef, maar het hele werkwoord is leven, met een v. De v zit niet in \'t kofschip, dus een d: geleefd.' },
      { soort: 'val', zin: '___ jij je ook al zo op de kerstvakantie?', cue: 'verheugen', goed: 'verheug', uitleg: 'Het gaat over nu: tegenwoordige tijd. Jij staat achter het werkwoord, dus geen t: alleen de stam, verheug jij.' },
      { soort: 'val', zin: 'Mijn broer ___ tegenwoordig zijn zakgeld met het uitlaten van de hond van de buren.', cue: 'verdienen', goed: 'verdient', uitleg: 'Tegenwoordig: tegenwoordige tijd. Mijn broer is een hij: stam + t = verdient. Verdiend met een d is het voltooid deelwoord (hij heeft het verdiend).' },
      { soort: 'tt', zin: 'Mijn zus ___ elke avond een hoofdstuk uit haar nieuwe boek.', cue: 'lezen', goed: 'leest', uitleg: 'Elke avond: tegenwoordige tijd. Mijn zus is een zij: stam + t. De stam is lees, met een s, dus lees + t = leest.' }
    ],
    // Dag 59
    [
      { soort: 'tt', zin: 'Mijn moeder ___ altijd een groot kleed onder de kerstboom uit.', cue: 'uitspreiden', goed: 'spreidt', uitleg: 'Altijd: tegenwoordige tijd. Mijn moeder is een zij: stam + t. Spreid + t = spreidt.' },
      { soort: 'tt', zin: 'Mijn kleine zusje ___ elke dag een nieuw plaatje op haar verlanglijstje.', cue: 'plakken', goed: 'plakt', uitleg: 'Elke dag: tegenwoordige tijd. Mijn zusje is een zij: stam + t. Plak + t = plakt.' },
      { soort: 'dd', zin: 'Mijn broer ___ diep toen hij hoorde dat hij met kerst moest afwassen.', cue: 'zuchten', goed: 'zuchtte', uitleg: '"Hoorde": verleden tijd. De stam is zucht en eindigt op een t: zucht + te = zuchtte.' },
      { soort: 'dd', zin: 'Vorige week ___ zich twintig kinderen bij de trainer van het schaakteam.', cue: 'melden', goed: 'meldden', uitleg: 'Vorige week: verleden tijd. Het onderwerp is twintig kinderen, meer dan één. De stam meld eindigt op een d, die zit niet in \'t kofschip: meld + den = meldden.' },
      { soort: 'vt-sterk', zin: 'Toen het eten op tafel kwam, ___ alle neven en nichten al aan tafel.', cue: 'zitten', goed: 'zaten', uitleg: '"Kwam": verleden tijd. Zitten is een sterk werkwoord: zat, en bij meer personen zaten. Het onderwerp is alle neven en nichten, dus zaten.' },
      { soort: 'vt', zin: 'Toen de kerstboom eindelijk stond, ___ mijn vader de piek erbovenop.', cue: 'plaatsen', goed: 'plaatste', uitleg: '"Stond": verleden tijd. De stam is plaats, de s zit in \'t kofschip: plaats + te = plaatste.' },
      { soort: 'bijv', zin: 'Het ___ lokaal van groep 8 zag er prachtig uit met al die slingers.', cue: 'versieren', goed: 'versierde', uitleg: 'Het voltooid deelwoord is versierd. Voor lokaal komt er een e achter: het versierde lokaal. Je hoort het niet, maar het komt van versierd met een d.' },
      { soort: 'engels', zin: 'De trainer ___ gisteren elke ronde met een stopwatch.', cue: 'timen', goed: 'timede', uitleg: 'Gisteren: verleden tijd. Timen komt uit het Engels en eindigt op een m-klank, die zit niet in \'t kofschip. Dus time + de = timede: de e van het Engelse time blijft staan.' },
      { soort: 'val', zin: 'Hoe ___ jij de taart: in acht of in twaalf stukken?', cue: 'verdelen', goed: 'verdeel', uitleg: 'Het gaat over nu: tegenwoordige tijd. Jij staat achter het werkwoord, dus geen t: verdeel jij.' },
      { soort: 'val', zin: 'Het ___ me niets dat de ijsbaan vandaag dicht is, want het dooit.', cue: 'verbazen', goed: 'verbaast', uitleg: '"Dooit": tegenwoordige tijd, en het onderwerp is het: stam + t. De stam is verbaas, met een s: verbaas + t = verbaast. Verbaasd met een d is het voltooid deelwoord.' }
    ],
    // Dag 60
    [
      { soort: 'tt', zin: 'In de taalles ___ de juf vandaag een hele lange zin op het bord.', cue: 'ontleden', goed: 'ontleedt', uitleg: 'Vandaag: tegenwoordige tijd. De juf is een zij: stam + t. Ontleed + t = ontleedt.' },
      { soort: 'tt', zin: 'Elk jaar op kerstavond ___ mijn moeder de kalkoen al om drie uur in de oven.', cue: 'schuiven', goed: 'schuift', uitleg: 'Elk jaar: tegenwoordige tijd. Mijn moeder is een zij: stam + t. Schuif + t = schuift.' },
      { soort: 'dd', zin: 'Mijn nicht ___ gisteren een foto van haar sneeuwpop op sociale media.', cue: 'posten', goed: 'postte', uitleg: 'Gisteren: verleden tijd. De stam is post en eindigt op een t: post + te = postte.' },
      { soort: 'dd', zin: 'Vorig jaar ___ de bibliotheek haar verzameling stripboeken flink uit.', cue: 'uitbreiden', goed: 'breidde', uitleg: 'Vorig jaar: verleden tijd. De stam van uitbreiden is breid (breid uit). Die eindigt op een d, en de d zit niet in \'t kofschip: breid + de = breidde.' },
      { soort: 'vt-sterk', zin: 'De school ___ gisteren de kerstbrief aan alle kinderen mee.', cue: 'meegeven', goed: 'gaf', uitleg: 'Gisteren: verleden tijd. Geven is een sterk werkwoord: de verleden tijd is gaf. Er komt geen -de achter.' },
      { soort: 'tt', zin: 'De vogels in onze tuin ___ elke ochtend op het voer dat ik neerleg.', cue: 'wachten', goed: 'wachten', uitleg: 'Elke ochtend: tegenwoordige tijd. Het onderwerp is de vogels, meer dan één: het hele werkwoord, wachten.' },
      { soort: 'bijv', zin: 'Op kerstavond at mijn opa een broodje met ___ vis.', cue: 'roken', goed: 'gerookte', uitleg: 'Het voltooid deelwoord is gerookt: de stam rook eindigt op een k, die zit in \'t kofschip. Voor vis komt er een e achter: gerookte.' },
      { soort: 'val', zin: 'Hoe ___ je broer het met zijn enkel in het gips?', cue: 'redden', goed: 'redt', uitleg: 'Je broer betekent jouw broer: een hij, niet jij. Het gaat over nu: tegenwoordige tijd. Stam + t: red + t = redt.' },
      { soort: 'val', zin: 'Mijn tante ___ de tafel elk jaar met kaarsjes en dennentakken.', cue: 'versieren', goed: 'versiert', uitleg: 'Elk jaar: tegenwoordige tijd. Mijn tante is een zij: stam + t = versiert. Versierd met een d is het voltooid deelwoord: de tafel is versierd.' },
      { soort: 'tt', zin: 'Mijn broertje ___ elke avond een kerstliedje op zijn blokfluit.', cue: 'oefenen', goed: 'oefent', uitleg: 'Elke avond: tegenwoordige tijd. Mijn broertje is een hij: stam + t. Oefen + t = oefent.' }
    ],
    // Dag 61
    [
      { soort: 'tt', zin: 'De gemeente ___ volgend jaar de weg langs onze school.', cue: 'verbreden', goed: 'verbreedt', uitleg: 'Volgend jaar: tegenwoordige tijd (die gebruik je ook voor later). De gemeente is één: stam + t. Verbreed + t = verbreedt.' },
      { soort: 'tt', zin: 'Mijn oma ___ elk jaar een kerstkaart aan al haar kleinkinderen.', cue: 'sturen', goed: 'stuurt', uitleg: 'Elk jaar: tegenwoordige tijd. Mijn oma is een zij: stam + t. Stuur + t = stuurt.' },
      { soort: 'dd', zin: 'Vroeger ___ een jongen uit mijn klas mij, maar nu zijn we vrienden.', cue: 'pesten', goed: 'pestte', uitleg: 'Vroeger: verleden tijd. Het onderwerp is een jongen. De stam is pest en eindigt op een t: pest + te = pestte.' },
      { soort: 'dd', zin: 'De twee broers ___ zich gisteren als herders voor het kerstspel.', cue: 'verkleden', goed: 'verkleedden', uitleg: 'Gisteren: verleden tijd. Het onderwerp is de twee broers. De stam verkleed eindigt op een d: verkleed + den = verkleedden.' },
      { soort: 'vt-sterk', zin: 'Vorig jaar ___ de burgemeester het vuurwerk in het centrum.', cue: 'verbieden', goed: 'verbood', uitleg: 'Vorig jaar: verleden tijd. Verbieden is een sterk werkwoord: de verleden tijd is verbood. Er komt geen -de achter.' },
      { soort: 'vd', zin: 'Mijn broer heeft de hele middag in de sneeuw ___.', cue: 'spelen', goed: 'gespeeld', uitleg: 'Bij heeft hoort een voltooid deelwoord: ge + stam + d of t. De stam is speel, de l zit niet in \'t kofschip: gespeeld.' },
      { soort: 'vt', zin: 'Toen we klaar waren met eten, ___ iedereen tevreden achterover op de bank.', cue: 'leunen', goed: 'leunde', uitleg: '"Waren": verleden tijd. De stam is leun, de n zit niet in \'t kofschip: leun + de = leunde.' },
      { soort: 'val', zin: 'Mijn oom en tante hebben zich met kerst ___!', cue: 'verloven', goed: 'verloofd', uitleg: 'Bij hebben hoort een voltooid deelwoord, en verloven krijgt geen ge-. De stam is verloof, maar het hele werkwoord heeft een v, die niet in \'t kofschip zit: verloofd. Verlooft met een t is de tegenwoordige tijd.' },
      { soort: 'val', zin: 'Waarom ___ jij je niet als koning voor het kerstspel?', cue: 'verkleden', goed: 'verkleed', uitleg: 'Het gaat over nu: tegenwoordige tijd. Jij staat achter het werkwoord, dus geen t. Alleen de stam: verkleed jij.' },
      { soort: 'tt', zin: 'Na het kerstdiner ___ mijn vader altijd in slaap op de bank.', cue: 'vallen', goed: 'valt', uitleg: 'Altijd: tegenwoordige tijd. Mijn vader is een hij: stam + t. Val + t = valt.' }
    ],
    // Dag 62
    [
      { soort: 'tt', zin: 'Kijk, deze kabel ___ de kerstverlichting met het stopcontact in de schuur.', cue: 'verbinden', goed: 'verbindt', uitleg: 'Het gaat over nu: tegenwoordige tijd. Deze kabel is één ding, een hij. Stam + t: verbind + t = verbindt.' },
      { soort: 'tt', zin: 'Mijn tante ___ altijd zo hard dat je haar door het hele huis hoort.', cue: 'praten', goed: 'praat', uitleg: '"Hoort": tegenwoordige tijd. Mijn tante is een zij: stam + t. De stam praat eindigt al op een t, dus je schrijft maar één t: praat.' },
      { soort: 'dd', zin: 'Toen ik vroeg of ik op mijn telefoon mocht, ___ mijn moeder alleen maar haar hoofd.', cue: 'schudden', goed: 'schudde', uitleg: '"Vroeg" en "mocht": verleden tijd. De stam is schud en eindigt op een d: schud + de = schudde.' },
      { soort: 'dd', zin: 'Vorige week ___ de leerlingen van groep 8 de nieuwe kleuters rond door de school.', cue: 'rondleiden', goed: 'leidden', uitleg: 'Vorige week: verleden tijd. Het onderwerp is de leerlingen, meer dan één. De stam leid eindigt op een d: leid + den = leidden.' },
      { soort: 'vt-sterk', zin: 'Vorige week ___ Daan in de laatste minuut de winnende goal.', cue: 'schieten', goed: 'schoot', uitleg: 'Vorige week: verleden tijd. Schieten is een sterk werkwoord: de verleden tijd is schoot. Er komt geen -te achter.' },
      { soort: 'bijv', zin: 'Mama legde het ___ brood op een plank midden op tafel.', cue: 'snijden', goed: 'gesneden', uitleg: 'Het voltooid deelwoord van snijden is gesneden. Het eindigt op -en, dus er komt geen e achter: het gesneden brood.' },
      { soort: 'tt', zin: 'Mijn neef en nicht ___ dit jaar met kerst bij ons, want hun huis wordt verbouwd.', cue: 'slapen', goed: 'slapen', uitleg: '"Wordt": tegenwoordige tijd. Het onderwerp is mijn neef en nicht, twee personen: het hele werkwoord, slapen.' },
      { soort: 'engels', zin: 'Gisteren ___ mijn oom alle foto\'s van het kerstdiner met de hele familie.', cue: 'sharen', goed: 'sharede', uitleg: 'Gisteren: verleden tijd. Sharen komt uit het Engels en eindigt op een r-klank, die zit niet in \'t kofschip. Dus share + de = sharede.' },
      { soort: 'val', zin: 'Mijn juf ___ de spelfouten altijd met een groene pen.', cue: 'verbeteren', goed: 'verbetert', uitleg: 'Altijd: tegenwoordige tijd. Mijn juf is een zij: stam + t = verbetert. Verbeterd met een d is het voltooid deelwoord: de toets is verbeterd.' },
      { soort: 'val', zin: 'Oma, ___ u nog een stukje kerststol?', cue: 'lusten', goed: 'lust', uitleg: 'Het gaat over nu: tegenwoordige tijd. Bij u schrijf je stam + t, ook als u achter het werkwoord staat. De stam lust eindigt al op een t: lust u.' }
    ],
    // Dag 63
    [
      { soort: 'tt', zin: 'Mijn broertje ___ altijd wat hij voor kerst krijgt, door aan de pakjes te schudden.', cue: 'raden', goed: 'raadt', uitleg: 'Altijd: tegenwoordige tijd. Mijn broertje is een hij: stam + t. Raad + t = raadt.' },
      { soort: 'tt', zin: 'Onze kerstboom ___ nu al zijn naalden, en het is pas 22 december!', cue: 'verliezen', goed: 'verliest', uitleg: '"Is": tegenwoordige tijd. Onze kerstboom is een hij: stam + t. De stam is verlies, met een s: verlies + t = verliest.' },
      { soort: 'dd', zin: 'Vroeger ___ de smid in ons dorp hoefijzers voor alle paarden.', cue: 'smeden', goed: 'smeedde', uitleg: 'Vroeger: verleden tijd. De stam is smeed en eindigt op een d: smeed + de = smeedde.' },
      { soort: 'dd', zin: 'Gisteren ___ de kraanvogels in grote groepen op het weiland achter ons huis.', cue: 'landen', goed: 'landden', uitleg: 'Gisteren: verleden tijd. Het onderwerp is de kraanvogels, meer dan één. De stam land eindigt op een d: land + den = landden.' },
      { soort: 'vt-sterk', zin: 'Vorig jaar ___ mijn broer en ik tijdens het kerstdiner steeds van tafel op.', cue: 'opstaan', goed: 'stonden', uitleg: 'Vorig jaar: verleden tijd. Staan is een sterk werkwoord: stond, en bij meer personen stonden. Mijn broer en ik zijn met z\'n tweeën, dus stonden.' },
      { soort: 'vt', zin: 'Mijn tante ___ vroeger in een groot huis aan zee.', cue: 'wonen', goed: 'woonde', uitleg: 'Vroeger: verleden tijd. De stam is woon, de n zit niet in \'t kofschip: woon + de = woonde.' },
      { soort: 'vd', zin: 'De meeuw heeft wel een uur boven het strand ___.', cue: 'zweven', goed: 'gezweefd', uitleg: 'Bij heeft hoort een voltooid deelwoord. De stam is zweef, maar het hele werkwoord is zweven, met een v. Die zit niet in \'t kofschip, dus een d: gezweefd.' },
      { soort: 'val', zin: '___ jij je broertje ook om in jouw kamer te komen?', cue: 'verbieden', goed: 'verbied', uitleg: 'Het gaat over nu: tegenwoordige tijd. Jij staat achter het werkwoord, en dan krijgt het geen t. Alleen de stam: verbied jij.' },
      { soort: 'val', zin: 'De dokter ___ dat de griep over een week wel weg is.', cue: 'voorspellen', goed: 'voorspelt', uitleg: '"Is": tegenwoordige tijd. De dokter is een hij of zij: voorspel + t = voorspelt. Voorspeld met een d is het voltooid deelwoord.' },
      { soort: 'tt', zin: 'Mijn opa ___ op kerstavond altijd in zijn oude stoel bij de open haard.', cue: 'schommelen', goed: 'schommelt', uitleg: 'Altijd: tegenwoordige tijd. Mijn opa is een hij: stam + t. Schommel + t = schommelt.' }
    ],
    // Dag 64
    [
      { soort: 'tt', zin: 'Mijn moeder ___ ons om tijdens het kerstdiner op onze telefoon te kijken.', cue: 'verbieden', goed: 'verbiedt', uitleg: 'Het gaat over nu: tegenwoordige tijd. Mijn moeder is een zij: stam + t. Verbied + t = verbiedt.' },
      { soort: 'tt', zin: 'Op eerste kerstdag ___ mijn zus altijd het langst in bed.', cue: 'liggen', goed: 'ligt', uitleg: 'Altijd: tegenwoordige tijd. Mijn zus is een zij: stam + t. Lig + t = ligt.' },
      { soort: 'dd', zin: 'Gisteren ___ ik mijn knie keihard tegen de rand van de tafel.', cue: 'stoten', goed: 'stootte', uitleg: 'Gisteren: verleden tijd. De stam is stoot en eindigt op een t: stoot + te = stootte.' },
      { soort: 'dd', zin: 'Na de kerstviering van gisteren ___ de ouders alle stoelen terug in de opslag.', cue: 'zetten', goed: 'zetten', uitleg: 'Gisteren: verleden tijd, en het onderwerp is de ouders, meer dan één. De stam zet eindigt op een t: zet + ten = zetten. Dat ziet eruit als het hele werkwoord, maar hier is het de verleden tijd.' },
      { soort: 'vt-sterk', zin: 'Gisteren ___ ik als laatste het lokaal, dus ik moest het licht uitdoen.', cue: 'verlaten', goed: 'verliet', uitleg: 'Gisteren: verleden tijd. Verlaten is een sterk werkwoord: de verleden tijd is verliet. Er komt geen -te achter.' },
      { soort: 'bijv', zin: 'De ___ chocolade liep langs mijn vingers naar beneden.', cue: 'smelten', goed: 'gesmolten', uitleg: 'Het voltooid deelwoord van smelten is gesmolten. Het eindigt op -en, dus er komt geen e achter: de gesmolten chocolade.' },
      { soort: 'tt', zin: 'Mijn ouders ___ elk jaar met kerst de hele familie uit.', cue: 'uitnodigen', goed: 'nodigen', uitleg: 'Elk jaar: tegenwoordige tijd. Mijn ouders zijn met z\'n tweeën: het hele werkwoord, nodigen (nodigen uit).' },
      { soort: 'val', zin: 'De diepvriesgroente is nog niet ___, dus we moeten nog even wachten.', cue: 'ontdooien', goed: 'ontdooid', uitleg: 'Na is staat hier een voltooid deelwoord, en ontdooien krijgt geen ge-. De stam ontdooi eindigt op een klinker, die zit niet in \'t kofschip: ontdooid. Het ontdooit met een t is de tegenwoordige tijd.' },
      { soort: 'val', zin: '___ jij het om je spreekbeurt af te hebben voor de vakantie?', cue: 'redden', goed: 'red', uitleg: 'Het gaat over nu en straks: tegenwoordige tijd. Jij staat achter het werkwoord, dus geen t. Alleen de stam: red jij.' },
      { soort: 'tt', zin: 'Mijn broertje ___ al dagen of het nu bijna kerst is.', cue: 'vragen', goed: 'vraagt', uitleg: 'Al dagen, en nog steeds: tegenwoordige tijd. Mijn broertje is een hij: stam + t. Vraag + t = vraagt.' }
    ],
    // Dag 65
    [
      { soort: 'tt', zin: 'Zie je hoe het licht van de kaarsjes zich over de hele kamer ___?', cue: 'verspreiden', goed: 'verspreidt', uitleg: '"Zie je": tegenwoordige tijd. Het onderwerp is het licht. Stam + t: verspreid + t = verspreidt.' },
      { soort: 'tt', zin: 'Mijn vader ___ morgen de hele dag in de keuken voor het kerstdiner.', cue: 'werken', goed: 'werkt', uitleg: 'Morgen: tegenwoordige tijd. Mijn vader is een hij: stam + t. Werk + t = werkt.' },
      { soort: 'dd', zin: 'Toen het vuurwerk afging, ___ de hond onder de bank.', cue: 'vluchten', goed: 'vluchtte', uitleg: '"Afging": verleden tijd. De stam is vlucht en eindigt op een t: vlucht + te = vluchtte.' },
      { soort: 'dd', zin: 'Vroeger ___ mijn oma op kerstavond het hele huis met kaarsen.', cue: 'verlichten', goed: 'verlichtte', uitleg: 'Vroeger: verleden tijd. De stam is verlicht en eindigt op een t: verlicht + te = verlichtte.' },
      { soort: 'vt-sterk', zin: 'Vorige maand ___ Sinterklaas op zijn paard door onze straat.', cue: 'rijden', goed: 'reed', uitleg: 'Vorige maand: verleden tijd. Rijden is een sterk werkwoord: de verleden tijd is reed, met één d aan het eind.' },
      { soort: 'vd', zin: 'Mijn broertje heeft vannacht wel twintig keer ___, want hij is verkouden.', cue: 'niezen', goed: 'geniesd', uitleg: 'Bij heeft hoort een voltooid deelwoord. De stam is nies, maar het hele werkwoord is niezen, met een z. Die zit niet in \'t kofschip, dus een d: geniesd.' },
      { soort: 'bijv', zin: 'Mijn moeder legde een pas ___ tafelkleed op de kersttafel.', cue: 'strijken', goed: 'gestreken', uitleg: 'Het voltooid deelwoord van strijken is gestreken. Het eindigt op -en, dus er komt geen e achter: een gestreken tafelkleed.' },
      { soort: 'engels', zin: 'Mijn tante ___ dit jaar al haar kerstcadeaus online, want ze had geen zin in de drukte.', cue: 'shoppen', goed: 'shopte', uitleg: '"Had": verleden tijd. Shoppen komt uit het Engels; de stam is shop en eindigt op een p. De p zit in \'t kofschip: shop + te = shopte, met één p.' },
      { soort: 'val', zin: 'Mijn opa ___ de pakjes elk jaar in gelijke stapels onder de kerstboom.', cue: 'verdelen', goed: 'verdeelt', uitleg: 'Elk jaar: tegenwoordige tijd. Mijn opa is een hij: verdeel + t = verdeelt. Verdeeld met een d is het voltooid deelwoord.' },
      { soort: 'val', zin: 'Meneer, ___ u of de kerstnachtdienst om tien of om elf uur begint?', cue: 'weten', goed: 'weet', uitleg: '"Begint": tegenwoordige tijd. Bij u schrijf je stam + t. De stam weet eindigt al op een t: weet u.' }
    ],
    // Dag 66
    [
      { soort: 'tt', zin: 'Mijn oma ___ elk jaar met kerst een grote taart voor ons mee.', cue: 'meenemen', goed: 'neemt', uitleg: 'Elk jaar: tegenwoordige tijd. Mijn oma is een zij: stam + t. De stam van meenemen is neem (neem mee): neem + t = neemt.' },
      { soort: 'tt', zin: 'Kijk naar buiten: het ___ al de hele middag!', cue: 'sneeuwen', goed: 'sneeuwt', uitleg: 'Het is nog bezig: tegenwoordige tijd. Het onderwerp is het: stam + t. Sneeuw + t = sneeuwt.' },
      { soort: 'dd', zin: 'Gisteren ___ mijn moeder zich als vrijwilliger bij de ijsbaan.', cue: 'melden', goed: 'meldde', uitleg: 'Gisteren: verleden tijd. De stam is meld en eindigt op een d, die zit niet in \'t kofschip: meld + de = meldde.' },
      { soort: 'dd', zin: 'Gisteren ___ de lopers van de kerstloop om precies tien uur.', cue: 'starten', goed: 'startten', uitleg: 'Gisteren: verleden tijd. Het onderwerp is de lopers, meer dan één. De stam start eindigt op een t: start + ten = startten.' },
      { soort: 'vt-sterk', zin: 'Vorig jaar ___ mijn ouders het toetje uit de koelkast te halen.', cue: 'vergeten', goed: 'vergaten', uitleg: 'Vorig jaar: verleden tijd. Vergeten is een sterk werkwoord: vergat, en bij meer personen vergaten. Mijn ouders zijn er twee: vergaten.' },
      { soort: 'vt', zin: 'Vorig jaar ___ mijn zus de hele kerstavond op haar nieuwe gitaar.', cue: 'spelen', goed: 'speelde', uitleg: 'Vorig jaar: verleden tijd. De stam is speel, de l zit niet in \'t kofschip: speel + de = speelde.' },
      { soort: 'tt', zin: 'Straks om twaalf uur ___ de klokken van alle kerken in de stad.', cue: 'luiden', goed: 'luiden', uitleg: 'Straks: tegenwoordige tijd. Het onderwerp is de klokken, meer dan één: het hele werkwoord, luiden.' },
      { soort: 'val', zin: '___ jij vanavond het kerstverhaal voor, of doet opa dat?', cue: 'voorlezen', goed: 'lees', uitleg: 'Vanavond: tegenwoordige tijd. Jij staat achter het werkwoord, dus geen t: lees jij (voor).' },
      { soort: 'val', zin: 'Mijn oom ___ de kinderen met kerst altijd met veel te veel snoep.', cue: 'verwennen', goed: 'verwent', uitleg: 'Altijd: tegenwoordige tijd. Mijn oom is een hij: verwen + t = verwent. Verwend met een d is het voltooid deelwoord: een verwend kind.' },
      { soort: 'tt', zin: 'Mijn zusje ___ vannacht bij mij op de kamer, omdat ze niet alleen durft.', cue: 'slapen', goed: 'slaapt', uitleg: '"Durft": tegenwoordige tijd. Mijn zusje is een zij: stam + t. De stam is slaap, met twee a\'s: slaap + t = slaapt.' }
    ],
    // Dag 67
    [
      { soort: 'tt', zin: 'De tv ___ elk jaar op eerste kerstdag dezelfde oude film uit.', cue: 'uitzenden', goed: 'zendt', uitleg: 'Elk jaar: tegenwoordige tijd. Het onderwerp is de tv: een hij. De stam is zend: zend + t = zendt.' },
      { soort: 'tt', zin: 'Mijn opa ___ na het kerstdiner altijd in zijn stoel.', cue: 'snurken', goed: 'snurkt', uitleg: 'Altijd: tegenwoordige tijd. Mijn opa is een hij: stam + t. Snurk + t = snurkt.' },
      { soort: 'dd', zin: 'We ___ geen sneeuw, maar vanochtend lag alles wit!', cue: 'verwachten', goed: 'verwachtten', uitleg: '"Lag": verleden tijd. Het onderwerp is we, meer dan één. De stam verwacht eindigt op een t: verwacht + ten = verwachtten.' },
      { soort: 'dd', zin: 'Gisteren ___ mijn broer en ik om een reep chocola wie het grootste cadeau zou krijgen.', cue: 'wedden', goed: 'wedden', uitleg: 'Gisteren: verleden tijd, en het onderwerp is mijn broer en ik, twee personen. De stam wed eindigt op een d: wed + den = wedden. Dat lijkt op het hele werkwoord, maar hier is het de verleden tijd.' },
      { soort: 'vt-sterk', zin: 'Terwijl de kaarsen brandden, ___ mijn vader een groot stuk van de kerststol.', cue: 'snijden', goed: 'sneed', uitleg: '"Brandden": verleden tijd. Snijden is een sterk werkwoord: de verleden tijd is sneed, met één d aan het eind.' },
      { soort: 'bijv', zin: 'We aten een ___ kalkoen met cranberrysaus.', cue: 'vullen', goed: 'gevulde', uitleg: 'Het voltooid deelwoord is gevuld: de stam vul eindigt op een l, die zit niet in \'t kofschip. Voor kalkoen komt er een e achter: gevulde.' },
      { soort: 'vd', zin: 'Ik heb vannacht bijna niet ___ van de spanning.', cue: 'slapen', goed: 'geslapen', uitleg: 'Bij heb hoort een voltooid deelwoord. Slapen is een sterk werkwoord: het voltooid deelwoord eindigt op -en: geslapen.' },
      { soort: 'val', zin: 'Hoe laat ___ jij je morgen bij de trainer voor de kerstloop?', cue: 'melden', goed: 'meld', uitleg: 'Morgen: tegenwoordige tijd. Jij staat achter het werkwoord, dus geen t. Alleen de stam: meld jij.' },
      { soort: 'val', zin: 'Na al dat harde werken heeft mijn moeder dit kerstdiner echt ___.', cue: 'verdienen', goed: 'verdiend', uitleg: 'Bij heeft hoort een voltooid deelwoord, en verdienen krijgt geen ge-. De stam verdien eindigt op een n, die zit niet in \'t kofschip: verdiend. Zij verdient met een t is de tegenwoordige tijd.' },
      { soort: 'tt', zin: 'Hoor je dat? Mijn neefje ___ met zijn nieuwe step door de gang.', cue: 'steppen', goed: 'stept', uitleg: '"Hoor je": het gebeurt nu, tegenwoordige tijd. Mijn neefje is een hij: stam + t. Step + t = stept.' }
    ],
    // Dag 68
    [
      { soort: 'tt', zin: 'Als het ijs dik genoeg is, ___ mijn vader ons morgen naar de ijsbaan.', cue: 'rijden', goed: 'rijdt', uitleg: 'Morgen: tegenwoordige tijd. Het onderwerp is mijn vader, die staat hier achter het werkwoord. Stam + t: rijd + t = rijdt.' },
      { soort: 'tt', zin: 'Mijn broer ___ al de hele ochtend met zijn nieuwe drone in de tuin.', cue: 'spelen', goed: 'speelt', uitleg: 'Al de hele ochtend, en hij is nog bezig: tegenwoordige tijd. Mijn broer is een hij: stam + t. Speel + t = speelt.' },
      { soort: 'dd', zin: 'Gisteren ___ ik mijn nieuwe schaatsen meteen uit op de ijsbaan.', cue: 'uittesten', goed: 'testte', uitleg: 'Gisteren: verleden tijd. De stam is test en eindigt op een t: test + te = testte.' },
      { soort: 'dd', zin: 'Gisteravond ___ oma nog een extra deken over het logeerbed.', cue: 'spreiden', goed: 'spreidde', uitleg: 'Gisteravond: verleden tijd. De stam is spreid en eindigt op een d: spreid + de = spreidde.' },
      { soort: 'vt-sterk', zin: 'Gisteren ___ de winkels al om vier uur.', cue: 'sluiten', goed: 'sloten', uitleg: 'Gisteren: verleden tijd. Sluiten is een sterk werkwoord: sloot, en bij meer dan één sloten. De winkels zijn er meer: sloten.' },
      { soort: 'vt', zin: 'Gisteren ___ mijn moeder al het cadeaupapier in een grote zak.', cue: 'stoppen', goed: 'stopte', uitleg: 'Gisteren: verleden tijd. De stam is stop, de p zit in \'t kofschip: stop + te = stopte.' },
      { soort: 'bijv', zin: 'Onder de bank vond ik nog een half ___ kerstkransje.', cue: 'opeten', goed: 'opgegeten', uitleg: 'Het voltooid deelwoord van opeten is opgegeten. Het eindigt op -en, dus er komt geen e achter: een half opgegeten kerstkransje.' },
      { soort: 'engels', zin: 'Op tweede kerstdag hebben al mijn vrienden mijn kerstfoto ___.', cue: 'liken', goed: 'geliket', uitleg: 'Bij hebben hoort een voltooid deelwoord. Liken komt uit het Engels; je hoort aan het eind een k-klank, en die zit in \'t kofschip. Dus ge + like + t = geliket.' },
      { soort: 'val', zin: '___ jij morgen ook mee naar de ijsbaan?', cue: 'meerijden', goed: 'rijd', uitleg: 'Morgen: tegenwoordige tijd. Jij staat achter het werkwoord, dus geen t: alleen de stam, rijd jij (mee).' },
      { soort: 'tt', zin: 'Mijn oom ___ elk jaar op tweede kerstdag in de ijskoude zee.', cue: 'zwemmen', goed: 'zwemt', uitleg: 'Elk jaar: tegenwoordige tijd. Mijn oom is een hij: stam + t. Zwem + t = zwemt.' }
    ],
    // Dag 69
    [
      { soort: 'tt', zin: 'De geur van oliebollen ___ mijn vader elk jaar om er tien te kopen.', cue: 'verleiden', goed: 'verleidt', uitleg: 'Elk jaar: tegenwoordige tijd. Het onderwerp is de geur: een hij. Stam + t: verleid + t = verleidt.' },
      { soort: 'tt', zin: 'Het ijs op de vaart ___ zo snel dat schaatsen niet meer mag.', cue: 'smelten', goed: 'smelt', uitleg: '"Mag": tegenwoordige tijd. Het onderwerp is het ijs: stam + t. De stam smelt eindigt al op een t, dus er komt geen t bij: smelt.' },
      { soort: 'dd', zin: 'Gisteren ___ mijn opa mijn kerstgeld op mijn spaarrekening.', cue: 'storten', goed: 'stortte', uitleg: 'Gisteren: verleden tijd. De stam is stort en eindigt op een t: stort + te = stortte.' },
      { soort: 'dd', zin: 'De jongens ___ gisteren een uur lang over wie het hardst kon schaatsen.', cue: 'praten', goed: 'praatten', uitleg: 'Gisteren: verleden tijd. Het onderwerp is de jongens, meer dan één. De stam praat eindigt op een t, die zit in \'t kofschip: praat + ten = praatten.' },
      { soort: 'vt-sterk', zin: 'Gisteren ___ er midden op de vaart een groot wak in het ijs.', cue: 'ontstaan', goed: 'ontstond', uitleg: 'Gisteren: verleden tijd. Ontstaan is een sterk werkwoord, net als staan: de verleden tijd is ontstond, met een d aan het eind.' },
      { soort: 'vd', zin: 'Ik ben gisteren op het ijs gevallen en heb mijn knie flink ___.', cue: 'schaven', goed: 'geschaafd', uitleg: 'Bij heb hoort een voltooid deelwoord. De stam is schaaf, maar het hele werkwoord is schaven, met een v. Die zit niet in \'t kofschip, dus een d: geschaafd.' },
      { soort: 'tt', zin: 'Kijk, de sneeuwvlokken ___ zachtjes op de vensterbank!', cue: 'vallen', goed: 'vallen', uitleg: 'Kijk: het gebeurt nu, tegenwoordige tijd. Het onderwerp is de sneeuwvlokken, meer dan één: het hele werkwoord, vallen.' },
      { soort: 'val', zin: 'Ik was zo ___ van de lange schaatstocht dat ik meteen in slaap viel.', cue: 'vermoeien', goed: 'vermoeid', uitleg: 'Na was staat hier een voltooid deelwoord, en vermoeien krijgt geen ge-. De stam vermoei eindigt op een klinker, niet in \'t kofschip: vermoeid, met een d. Het vermoeit me (met een t) is de tegenwoordige tijd.' },
      { soort: 'val', zin: 'Hoe ___ je zus zich voor op de schaatswedstrijd van zaterdag?', cue: 'voorbereiden', goed: 'bereidt', uitleg: 'Je zus betekent jouw zus: een zij, niet jij. Het gaat over nu: tegenwoordige tijd. De stam is bereid (bereid voor), dus stam + t = bereidt.' },
      { soort: 'tt', zin: 'Mijn vader ___ elke ochtend de sneeuw van de oprit.', cue: 'scheppen', goed: 'schept', uitleg: 'Elke ochtend: tegenwoordige tijd. Mijn vader is een hij: stam + t. Schep + t = schept.' }
    ],
    // Dag 70
    [
      { soort: 'tt', zin: 'Een vuurpijl ___ pas als je de lont aansteekt.', cue: 'ontploffen', goed: 'ontploft', uitleg: '\'Aansteekt\': tegenwoordige tijd. Een vuurpijl is één: stam + t. Ontplof + t = ontploft.' },
      { soort: 'tt', zin: 'Mijn moeder ___ dat de oliebollen dit jaar nog lekkerder worden.', cue: 'verwachten', goed: 'verwacht', uitleg: '"Worden": tegenwoordige tijd. Mijn moeder is een zij: stam + t. De stam verwacht eindigt al op een t, dus je schrijft er geen t bij: verwacht.' },
      { soort: 'dd', zin: 'Gisteren ___ de verhuizers de vrachtwagen van onze buren vol met dozen.', cue: 'laden', goed: 'laadden', uitleg: 'Gisteren: verleden tijd. Het onderwerp is de verhuizers, meer dan één. De stam laad eindigt op een d: laad + den = laadden.' },
      { soort: 'dd', zin: 'Vorig jaar ___ de fotografen hun camera\'s op het vuurwerk boven de rivier.', cue: 'richten', goed: 'richtten', uitleg: 'Vorig jaar: verleden tijd. Het onderwerp is de fotografen, meer dan één. De stam richt eindigt op een t: richt + ten = richtten.' },
      { soort: 'vt-sterk', zin: 'Vorig jaar ___ de buren al om acht uur \'s avonds vuurpijlen de lucht in.', cue: 'schieten', goed: 'schoten', uitleg: 'Vorig jaar: verleden tijd. Schieten is een sterk werkwoord: schoot, en bij meer dan één schoten. De buren zijn er meer: schoten.' },
      { soort: 'bijv', zin: 'Op tafel stond een schaal met ___ mandarijnen.', cue: 'pellen', goed: 'gepelde', uitleg: 'Het voltooid deelwoord is gepeld: de stam pel eindigt op een l, die zit niet in \'t kofschip. Voor mandarijnen komt er een e achter: gepelde.' },
      { soort: 'vt', zin: 'Gisteren ___ ik een lijstje met goede voornemens voor het nieuwe jaar.', cue: 'maken', goed: 'maakte', uitleg: 'Gisteren: verleden tijd. De stam is maak, de k zit in \'t kofschip: maak + te = maakte.' },
      { soort: 'val', zin: 'Waarom ___ je oom dit jaar met de trein in plaats van met de auto?', cue: 'reizen', goed: 'reist', uitleg: 'Je oom betekent jouw oom: een hij, niet jij. Het gaat over nu: stam + t. De stam is reis, met een s: reis + t = reist.' },
      { soort: 'val', zin: 'Mijn ouders hebben lang ___ of we dit jaar vuurwerk kopen.', cue: 'overleggen', goed: 'overlegd', uitleg: 'Bij hebben hoort een voltooid deelwoord, en overleggen krijgt geen ge-. De stam overleg eindigt op een g, die zit niet in \'t kofschip: overlegd. Hij overlegt met een t is de tegenwoordige tijd.' },
      { soort: 'tt', zin: 'De bakker op de markt ___ morgen extra oliebollen, want het wordt druk.', cue: 'verkopen', goed: 'verkoopt', uitleg: '"Wordt": tegenwoordige tijd. De bakker is een hij: stam + t. Verkoop + t = verkoopt.' }
    ],
    // Dag 71
    [
      { soort: 'tt', zin: 'Vuurwerk ___ elk jaar honderden mensen, vooral aan hun ogen en handen.', cue: 'verwonden', goed: 'verwondt', uitleg: 'Elk jaar: tegenwoordige tijd. Het onderwerp is vuurwerk. Stam + t: verwond + t = verwondt.' },
      { soort: 'tt', zin: 'Mijn zus ___ elk jaar een lijst met goede voornemens op, maar ze houdt zich er nooit aan.', cue: 'opstellen', goed: 'stelt', uitleg: '"Houdt": tegenwoordige tijd. Mijn zus is een zij: stam + t. Stel + t = stelt (stelt op).' },
      { soort: 'dd', zin: 'Gisteravond ___ mijn vader onze kat uit de hoge boom in de tuin.', cue: 'redden', goed: 'redde', uitleg: 'Gisteravond: verleden tijd. De stam is red en eindigt op een d, die zit niet in \'t kofschip: red + de = redde.' },
      { soort: 'dd', zin: 'Gisteren ___ mijn vader dat we wel zestig oliebollen nodig hadden.', cue: 'schatten', goed: 'schatte', uitleg: 'Gisteren: verleden tijd. De stam is schat en eindigt op een t: schat + te = schatte.' },
      { soort: 'vt-sterk', zin: 'Vorig jaar ___ de brandweer een uur lang tegen het vuur in een container.', cue: 'vechten', goed: 'vocht', uitleg: 'Vorig jaar: verleden tijd. Vechten is een sterk werkwoord: de verleden tijd is vocht. Er komt geen -te achter.' },
      { soort: 'vd', zin: 'Heb jij je goede voornemens al ___?', cue: 'opschrijven', goed: 'opgeschreven', uitleg: 'Bij heb hoort een voltooid deelwoord. Schrijven is een sterk werkwoord: op + ge + schreven = opgeschreven.' },
      { soort: 'bijv', zin: 'Mijn moeder gooide de ___ oliebollen weg en begon opnieuw.', cue: 'mislukken', goed: 'mislukte', uitleg: 'Het voltooid deelwoord is mislukt: mislukken krijgt geen ge-, en de stam misluk eindigt op een k, die zit in \'t kofschip. Voor oliebollen komt er een e achter: mislukte.' },
      { soort: 'engels', zin: 'Bij de ingang van het oudejaarsfeest ___ de beveiliger gisteren ieders kaartje met zijn telefoon.', cue: 'scannen', goed: 'scande', uitleg: 'Gisteren: verleden tijd. Scannen komt uit het Engels; de stam is scan en eindigt op een n. Die zit niet in \'t kofschip: scan + de = scande, met één n.' },
      { soort: 'val', zin: '___ jij straks iedereen in de klas een gelukkig nieuwjaar?', cue: 'wensen', goed: 'wens', uitleg: 'Straks: tegenwoordige tijd. Jij staat achter het werkwoord, dus geen t: alleen de stam, wens jij.' },
      { soort: 'val', zin: 'Opa, ___ u even op de oliebollen in de pan? Ik moet naar de deur.', cue: 'passen', goed: 'past', uitleg: 'Het gaat over nu: tegenwoordige tijd. Bij u schrijf je stam + t, ook als u achter het werkwoord staat: pas + t = past.' }
    ],
    // Dag 72
    [
      { soort: 'tt', zin: 'De gemeente ___ dit jaar de vuurwerkvrije zone uit tot de hele binnenstad.', cue: 'uitbreiden', goed: 'breidt', uitleg: 'Dit jaar: tegenwoordige tijd. De gemeente is één: stam + t. De stam van uitbreiden is breid (breid uit), dus breid + t = breidt.' },
      { soort: 'tt', zin: 'Mijn oma ___ al dertig jaar haar oliebollen volgens hetzelfde recept.', cue: 'maken', goed: 'maakt', uitleg: 'Al dertig jaar, en nog steeds: tegenwoordige tijd. Mijn oma is een zij: stam + t. Maak + t = maakt.' },
      { soort: 'dd', zin: 'Vorig jaar ___ de koster precies om twaalf uur de klok van de kerk.', cue: 'luiden', goed: 'luidde', uitleg: 'Vorig jaar: verleden tijd. De stam is luid en eindigt op een d: luid + de = luidde.' },
      { soort: 'dd', zin: 'De gasten ___ vorig jaar om middernacht met hun glazen op het nieuwe jaar.', cue: 'toosten', goed: 'toostten', uitleg: 'Vorig jaar: verleden tijd. Het onderwerp is de gasten, meer dan één. De stam toost eindigt op een t: toost + ten = toostten.' },
      { soort: 'vt-sterk', zin: 'Vorig jaar ___ de buren hun hond met oud en nieuw alleen thuis.', cue: 'laten', goed: 'lieten', uitleg: 'Vorig jaar: verleden tijd. Laten is een sterk werkwoord: liet, en bij meer dan één lieten. De buren zijn er meer: lieten.' },
      { soort: 'vt', zin: 'Vorig jaar om middernacht ___ ik mijn zus als eerste een gelukkig nieuwjaar.', cue: 'wensen', goed: 'wenste', uitleg: 'Vorig jaar: verleden tijd. De stam is wens, de s zit in \'t kofschip: wens + te = wenste.' },
      { soort: 'tt', zin: 'Mijn broertje ___ zich al weken op oudejaarsavond.', cue: 'verheugen', goed: 'verheugt', uitleg: 'Al weken, en nog steeds: tegenwoordige tijd. Mijn broertje is een hij: stam + t. Verheug + t = verheugt.' },
      { soort: 'val', zin: 'Elk jaar ___ vuurwerk een heleboel bushokjes en prullenbakken.', cue: 'vernielen', goed: 'vernielt', uitleg: 'Elk jaar: tegenwoordige tijd. Het onderwerp is vuurwerk: stam + t = vernielt. Vernield met een d is het voltooid deelwoord (de bushalte is vernield).' },
      { soort: 'val', zin: 'Waarom ___ jij je vingers nu al in je oren? Het vuurwerk begint pas om twaalf uur!', cue: 'steken', goed: 'steek', uitleg: '"Begint": tegenwoordige tijd. Jij staat achter het werkwoord, dus geen t: alleen de stam, steek jij.' },
      { soort: 'val', zin: 'Mevrouw, ___ u de deur alstublieft? Het tocht vreselijk.', cue: 'sluiten', goed: 'sluit', uitleg: 'Het gaat over nu: tegenwoordige tijd. Bij u schrijf je stam + t. De stam sluit eindigt al op een t, dus je schrijft er geen t bij: sluit u.' }
    ],
    // Dag 73
    [
      { soort: 'tt', zin: 'Mijn vader ___ het afval na het feest altijd netjes: plastic, papier en restafval apart.', cue: 'scheiden', goed: 'scheidt', uitleg: 'Altijd: tegenwoordige tijd. Mijn vader is een hij: stam + t. Scheid + t = scheidt.' },
      { soort: 'tt', zin: 'Kijk eens hoe het vuurwerk de hele hemel boven de stad ___!', cue: 'verlichten', goed: 'verlicht', uitleg: 'Het gebeurt nu: tegenwoordige tijd. Het onderwerp is het vuurwerk: stam + t. De stam verlicht eindigt al op een t: verlicht.' },
      { soort: 'dd', zin: 'Vorig jaar ___ de mensen op het strand dekens uit om op te zitten tijdens het vuurwerk.', cue: 'uitspreiden', goed: 'spreidden', uitleg: 'Vorig jaar: verleden tijd. Het onderwerp is de mensen, meer dan één. De stam spreid eindigt op een d: spreid + den = spreidden.' },
      { soort: 'vt-sterk', zin: 'Vorig jaar ___ mijn neef een rotje in de sloot, en dat was heel gevaarlijk.', cue: 'smijten', goed: 'smeet', uitleg: 'Vorig jaar: verleden tijd. Smijten is een sterk werkwoord: de verleden tijd is smeet, met één t aan het eind.' },
      { soort: 'dd', zin: 'Vorig jaar ___ al mijn vrienden om middernacht foto\'s van het vuurwerk.', cue: 'posten', goed: 'postten', uitleg: 'Vorig jaar: verleden tijd. Het onderwerp is al mijn vrienden, meer dan één. De stam post eindigt op een t: post + ten = postten.' },
      { soort: 'tt', zin: 'Straks om twaalf uur ___ alle mensen in onze straat elkaar een gelukkig nieuwjaar.', cue: 'wensen', goed: 'wensen', uitleg: 'Straks: tegenwoordige tijd. Het onderwerp is alle mensen, meer dan één: het hele werkwoord, wensen.' },
      { soort: 'bijv', zin: 'Op nieuwjaarsochtend lagen er overal ___ rotjes op straat.', cue: 'ontploffen', goed: 'ontplofte', uitleg: 'Het voltooid deelwoord is ontploft: ontploffen krijgt geen ge-, en de stam ontplof eindigt op een f, die zit in \'t kofschip. Voor rotjes komt er een e achter: ontplofte.' },
      { soort: 'val', zin: 'Mijn broer ___ elk jaar zijn hele spaargeld aan vuurwerk.', cue: 'verspillen', goed: 'verspilt', uitleg: 'Elk jaar: tegenwoordige tijd. Mijn broer is een hij: verspil + t = verspilt. Verspild met een d is het voltooid deelwoord.' },
      { soort: 'val', zin: '___ je moeder vanavond weer de hele straat uit voor oliebollen?', cue: 'uitnodigen', goed: 'nodigt', uitleg: 'Je moeder betekent jouw moeder: een zij, niet jij. Vanavond: tegenwoordige tijd. Stam + t: nodig + t = nodigt (nodigt uit).' },
      { soort: 'tt', zin: 'Straks om middernacht ___ de klok van de kerktoren twaalf keer.', cue: 'slaan', goed: 'slaat', uitleg: 'Straks: tegenwoordige tijd. De klok is een hij: stam + t. De stam van slaan is sla, en met een t erachter schrijf je slaat.' }
    ],
    // Dag 74
    [
      { soort: 'tt', zin: 'Wie meer dan tien oliebollen eet, ___ gegarandeerd misselijk.', cue: 'worden', goed: 'wordt', uitleg: '\'Eet\': tegenwoordige tijd. Het onderwerp is wie: één persoon. Stam + t: word + t = wordt.' },
      { soort: 'tt', zin: 'Mijn tante ___ vandaag voor de nieuwjaarsduik in de ijskoude zee.', cue: 'springen', goed: 'springt', uitleg: 'Vandaag: tegenwoordige tijd. Mijn tante is een zij: stam + t. Spring + t = springt.' },
      { soort: 'dd', zin: 'Vannacht ___ de hele hemel op door het vuurwerk.', cue: 'oplichten', goed: 'lichtte', uitleg: 'Vannacht: dat is al voorbij, verleden tijd. De stam is licht (licht op) en eindigt op een t: licht + te = lichtte.' },
      { soort: 'vt-sterk', zin: 'Vannacht ___ er in onze straat twee kleine branden door vuurwerk.', cue: 'ontstaan', goed: 'ontstonden', uitleg: 'Vannacht: verleden tijd. Ontstaan is een sterk werkwoord: ontstond, en bij meer dan één ontstonden. Het onderwerp is twee kleine branden: ontstonden.' },
      { soort: 'tt', zin: 'Na een nacht vol vuurwerk ___ onze straat vandaag op een slagveld.', cue: 'lijken', goed: 'lijkt', uitleg: 'Vandaag: tegenwoordige tijd. Onze straat is een zij: stam + t. Lijk + t = lijkt.' },
      { soort: 'vd', zin: 'Heb je vanochtend al naar het nieuwjaarsconcert op de radio ___?', cue: 'luisteren', goed: 'geluisterd', uitleg: 'Bij heb hoort een voltooid deelwoord. De stam luister eindigt op een r, die zit niet in \'t kofschip: geluisterd.' },
      { soort: 'engels', zin: 'De burgemeester heeft om middernacht een nieuwjaarswens ___.', cue: 'tweeten', goed: 'getweet', uitleg: 'Bij heeft hoort een voltooid deelwoord. Tweeten komt uit het Engels; de stam is tweet en eindigt al op een t. Er komt geen t meer bij: getweet.' },
      { soort: 'val', zin: 'Mijn vader ___ elk jaar op nieuwjaarsdag een appje naar de hele familie.', cue: 'versturen', goed: 'verstuurt', uitleg: 'Elk jaar: tegenwoordige tijd. Mijn vader is een hij: verstuur + t = verstuurt. Verstuurd met een d is het voltooid deelwoord (het appje is verstuurd).' },
      { soort: 'tt', zin: 'Elk jaar op nieuwjaarsdag ___ mijn opa iedereen drie keer op de wang.', cue: 'zoenen', goed: 'zoent', uitleg: 'Elk jaar: tegenwoordige tijd. Mijn opa is een hij: stam + t. Zoen + t = zoent.' },
      { soort: 'dd', zin: 'Toen het vuurwerk eindelijk voorbij was, ___ alle hondenbaasjes opgelucht.', cue: 'zuchten', goed: 'zuchtten', uitleg: '"Was": verleden tijd. Het onderwerp is alle hondenbaasjes, meer dan één. De stam zucht eindigt op een t: zucht + ten = zuchtten.' }
    ],
    // Dag 75
    [
      { soort: 'tt', zin: 'De zon ___ me als hij laag boven de besneeuwde velden staat.', cue: 'verblinden', goed: 'verblindt', uitleg: '"Staat": tegenwoordige tijd. De zon is een hij: stam + t. Verblind + t = verblindt.' },
      { soort: 'tt', zin: 'Mijn vader ___ elk jaar in januari dat hij gezonder gaat eten.', cue: 'zweren', goed: 'zweert', uitleg: 'Elk jaar: tegenwoordige tijd. Mijn vader is een hij: stam + t. Zweer + t = zweert.' },
      { soort: 'dd', zin: 'Vroeger was mijn opa piloot: hij ___ elke week met een groot vliegtuig op Schiphol.', cue: 'landen', goed: 'landde', uitleg: 'Vroeger: verleden tijd. De stam is land en eindigt op een d, die zit niet in \'t kofschip: land + de = landde.' },
      { soort: 'vt-sterk', zin: 'Gisteren ___ ik mijn sleutels op de keukentafel, dus ik kon er niet in.', cue: 'vergeten', goed: 'vergat', uitleg: 'Gisteren: verleden tijd. Vergeten is een sterk werkwoord: de verleden tijd is vergat. Er komt geen -te achter.' },
      { soort: 'tt', zin: 'Mijn opa ___ in januari altijd naar de zon in Spanje.', cue: 'verlangen', goed: 'verlangt', uitleg: 'Altijd: tegenwoordige tijd. Mijn opa is een hij: stam + t. Verlang + t = verlangt.' },
      { soort: 'bijv', zin: 'Van mijn opa kreeg ik een kaart met een met de hand ___ nieuwjaarswens.', cue: 'schrijven', goed: 'geschreven', uitleg: 'Het voltooid deelwoord van schrijven is geschreven. Het eindigt op -en, dus er komt geen e achter: een geschreven nieuwjaarswens.' },
      { soort: 'val', zin: 'Mijn zus is erg ___ dat ze in januari naar de skischool mag.', cue: 'verheugen', goed: 'verheugd', uitleg: 'Na is staat hier een voltooid deelwoord. De stam verheug eindigt op een g, die zit niet in \'t kofschip: verheugd, met een d. Zij verheugt zich (met een t) is de tegenwoordige tijd.' },
      { soort: 'val', zin: 'Hoe ___ je opa zich na die val op het ijs?', cue: 'voelen', goed: 'voelt', uitleg: 'Je opa betekent jouw opa: een hij, niet jij. Het gaat over nu: stam + t. Voel + t = voelt.' },
      { soort: 'tt', zin: 'Mijn zus ___ sinds nieuwjaar elke week drie keer.', cue: 'sporten', goed: 'sport', uitleg: 'Sinds nieuwjaar, en nog steeds: tegenwoordige tijd. Mijn zus is een zij: stam + t. De stam sport eindigt al op een t: sport.' },
      { soort: 'dd', zin: 'Gisteren ___ mijn opa onze oude kerstboom in zijn tuin.', cue: 'planten', goed: 'plantte', uitleg: 'Gisteren: verleden tijd. De stam is plant en eindigt op een t: plant + te = plantte.' }
    ],
    // Dag 76
    [
      { soort: 'tt', zin: 'Het weerbericht ___ dat het volgende week weer gaat vriezen.', cue: 'melden', goed: 'meldt', uitleg: '\'Gaat\': tegenwoordige tijd. Het onderwerp is het weerbericht: stam + t. Meld + t = meldt.' },
      { soort: 'tt', zin: 'Mijn opa ___ elk jaar de oude kerstboom in stukken voor de open haard.', cue: 'zagen', goed: 'zaagt', uitleg: 'Elk jaar: tegenwoordige tijd. Mijn opa is een hij: stam + t. Zaag + t = zaagt.' },
      { soort: 'dd', zin: 'Vorig jaar ___ de leerlingen van groep 8 dertig jonge boompjes achter de school.', cue: 'planten', goed: 'plantten', uitleg: 'Vorig jaar: verleden tijd. Het onderwerp is de leerlingen, meer dan één. De stam plant eindigt op een t: plant + ten = plantten.' },
      { soort: 'vt-sterk', zin: 'Gisteren ___ de dokter de wond aan mijn knie met een schoon verband.', cue: 'verbinden', goed: 'verbond', uitleg: 'Gisteren: verleden tijd. Verbinden is een sterk werkwoord: de verleden tijd is verbond, met een d aan het eind en zonder -de erachter.' },
      { soort: 'tt', zin: 'Mijn moeder ___ het nieuwe jaar altijd met een grote schoonmaak.', cue: 'starten', goed: 'start', uitleg: 'Altijd: tegenwoordige tijd. Mijn moeder is een zij: stam + t. De stam start eindigt al op een t: start.' },
      { soort: 'vt', zin: 'Gisteren ___ ik alle kerstkaarten in een mooie doos.', cue: 'verzamelen', goed: 'verzamelde', uitleg: 'Gisteren: verleden tijd. De stam is verzamel, de l zit niet in \'t kofschip: verzamel + de = verzamelde.' },
      { soort: 'val', zin: 'Ik heb mijn kamer in de vakantie helemaal ___.', cue: 'veranderen', goed: 'veranderd', uitleg: 'Bij heb hoort een voltooid deelwoord, en veranderen krijgt geen ge-. De stam verander eindigt op een r, die zit niet in \'t kofschip: veranderd. Hij verandert (met een t) is de tegenwoordige tijd.' },
      { soort: 'val', zin: '___ jij je nieuwe agenda ook met stickers?', cue: 'versieren', goed: 'versier', uitleg: 'Het gaat over nu: tegenwoordige tijd. Jij staat achter het werkwoord, dus geen t: alleen de stam, versier jij.' },
      { soort: 'tt', zin: 'Mijn broer ___ nu al zijn kerstgeld voor een nieuwe fiets.', cue: 'sparen', goed: 'spaart', uitleg: 'Nu: tegenwoordige tijd. Mijn broer is een hij: stam + t. Spaar + t = spaart.' },
      { soort: 'dd', zin: 'Gisteren ___ mijn vader de muren van mijn kamer, zodat ik het nieuwe jaar in een frisse kamer begin.', cue: 'witten', goed: 'witte', uitleg: 'Gisteren: verleden tijd. De stam is wit en eindigt op een t: wit + te = witte.' }
    ],
    // Dag 77
    [
      { soort: 'tt', zin: 'Een batterij ___ in de kou veel sneller leeg dan in de zomer.', cue: 'raken', goed: 'raakt', uitleg: 'Dit is altijd zo: tegenwoordige tijd. Een batterij is een zij: stam + t. Raak + t = raakt.' },
      { soort: 'tt', zin: 'Mijn zus ___ vanavond haar gymkleren voor de eerste schooldag.', cue: 'wassen', goed: 'wast', uitleg: 'Vanavond: tegenwoordige tijd. Mijn zus is een zij: stam + t. Was + t = wast.' },
      { soort: 'dd', zin: 'In de afgelopen vakantie ___ mijn moeder elke ochtend het wondje op de knie van mijn broertje.', cue: 'ontsmetten', goed: 'ontsmette', uitleg: 'In de afgelopen vakantie: dat is voorbij, verleden tijd. De stam is ontsmet en eindigt op een t: ontsmet + te = ontsmette.' },
      { soort: 'vt-sterk', zin: 'In de afgelopen kerstvakantie ___ mijn broertjes bijna elke dag om de afstandsbediening.', cue: 'vechten', goed: 'vochten', uitleg: 'In de afgelopen kerstvakantie: voorbij, verleden tijd. Vechten is een sterk werkwoord: vocht, en bij meer dan één vochten.' },
      { soort: 'tt', zin: 'Morgen ___ mijn wekker weer om kwart over zeven.', cue: 'rinkelen', goed: 'rinkelt', uitleg: 'Morgen: tegenwoordige tijd. Mijn wekker is een hij: stam + t. Rinkel + t = rinkelt.' },
      { soort: 'bijv', zin: 'Mijn moeder legde een schone, pas ___ broek klaar voor de eerste schooldag.', cue: 'wassen', goed: 'gewassen', uitleg: 'Het voltooid deelwoord van wassen is gewassen. Het eindigt op -en, dus er komt geen e achter: een gewassen broek.' },
      { soort: 'engels', zin: 'Mijn moeder heeft al mijn oude rapporten ___, zodat ze ze op de computer heeft.', cue: 'scannen', goed: 'gescand', uitleg: 'Bij heeft hoort een voltooid deelwoord. Scannen komt uit het Engels; de stam scan eindigt op een n, die zit niet in \'t kofschip. Dus ge + scan + d = gescand.' },
      { soort: 'val', zin: '___ je zus nog steeds elke dag voor haar examen?', cue: 'leren', goed: 'leert', uitleg: 'Je zus betekent jouw zus: een zij, niet jij. "Nog steeds": tegenwoordige tijd. Stam + t: leer + t = leert.' },
      { soort: 'tt', zin: 'Mijn opa ___ elke ochtend eerst de puzzel in de krant op.', cue: 'oplossen', goed: 'lost', uitleg: 'Elke ochtend: tegenwoordige tijd. Mijn opa is een hij: stam + t. Los + t = lost.' },
      { soort: 'dd', zin: 'Vorige week op oudejaarsavond ___ opa om middernacht met iedereen op het nieuwe jaar.', cue: 'toosten', goed: 'toostte', uitleg: 'Vorige week: verleden tijd. De stam is toost en eindigt op een t: toost + te = toostte.' }
    ],
    // Dag 78
    [
      { soort: 'tt', zin: 'Mijn broer ___ zijn telefoon elke avond naast zijn bed op.', cue: 'opladen', goed: 'laadt', uitleg: 'Elke avond: tegenwoordige tijd. Mijn broer is een hij: stam + t. De stam van opladen is laad (laad op): laad + t = laadt.' },
      { soort: 'tt', zin: 'De juf ___ vandaag een nieuw rooster op het bord.', cue: 'tekenen', goed: 'tekent', uitleg: 'Vandaag: tegenwoordige tijd. De juf is een zij: stam + t. Teken + t = tekent.' },
      { soort: 'dd', zin: 'Na de gymles van vanochtend ___ we allemaal flink.', cue: 'zweten', goed: 'zweetten', uitleg: 'Vanochtend: dat is al gebeurd, verleden tijd. Het onderwerp is we, meer dan één. De stam zweet eindigt op een t: zweet + ten = zweetten.' },
      { soort: 'vt-sterk', zin: 'Vanochtend ___ we in de klas papier in stroken voor een nieuwjaarsslinger.', cue: 'snijden', goed: 'sneden', uitleg: 'Vanochtend: verleden tijd. Snijden is een sterk werkwoord: sneed, en bij meer dan één sneden. Het onderwerp is we: sneden.' },
      { soort: 'tt', zin: 'Mijn tafelgenoot ___ de hele ochtend al dat de vakantie te kort was.', cue: 'zeuren', goed: 'zeurt', uitleg: 'De hele ochtend al, en nog steeds: tegenwoordige tijd. Mijn tafelgenoot is een hij of zij: stam + t. Zeur + t = zeurt.' },
      { soort: 'tt', zin: 'De kinderen van groep 8 ___ vandaag voor het eerst over de IEP-toets.', cue: 'praten', goed: 'praten', uitleg: 'Vandaag: tegenwoordige tijd. Het onderwerp is de kinderen van groep 8, meer dan één: het hele werkwoord, praten.' },
      { soort: 'vd', zin: 'De juf heeft in de vakantie het hele lokaal ___.', cue: 'opruimen', goed: 'opgeruimd', uitleg: 'Bij heeft hoort een voltooid deelwoord: op + ge + ruim + d. De m zit niet in \'t kofschip, dus een d: opgeruimd.' },
      { soort: 'val', zin: 'De juf heeft ons de afgelopen weken goed op de toets ___.', cue: 'voorbereiden', goed: 'voorbereid', uitleg: 'Bij heeft hoort een voltooid deelwoord. Bereiden heeft al een voorvoegsel, dus er komt geen ge- bij. De stam bereid eindigt al op een d, dus er komt niets meer achter: voorbereid.' },
      { soort: 'val', zin: '___ jij je huiswerk altijd meteen na school?', cue: 'maken', goed: 'maak', uitleg: 'Altijd: tegenwoordige tijd. Jij staat achter het werkwoord, dus geen t: alleen de stam, maak jij.' },
      { soort: 'dd', zin: 'In de afgelopen vakantie ___ twee kinderen uit onze klas zich bij het skiën.', cue: 'verwonden', goed: 'verwondden', uitleg: 'In de afgelopen vakantie: voorbij, verleden tijd. Het onderwerp is twee kinderen, meer dan één. De stam verwond eindigt op een d: verwond + den = verwondden.' }
    ],
    // Dag 79
    [
      { soort: 'tt', zin: 'Mijn broer ___ al weken plannen voor zijn verjaardagsfeest.', cue: 'smeden', goed: 'smeedt', uitleg: 'Al weken, en nog steeds: tegenwoordige tijd. Mijn broer is een hij: stam + t. Smeed + t = smeedt.' },
      { soort: 'tt', zin: 'Mijn buurman in de klas ___ altijd met zijn pen op tafel als hij nadenkt.', cue: 'tikken', goed: 'tikt', uitleg: 'Altijd: tegenwoordige tijd. Mijn buurman is een hij: stam + t. Tik + t = tikt.' },
      { soort: 'dd', zin: 'Gisteren ___ ik in de taalles een zin van wel twintig woorden.', cue: 'ontleden', goed: 'ontleedde', uitleg: 'Gisteren: verleden tijd. De stam is ontleed en eindigt op een d: ontleed + de = ontleedde.' },
      { soort: 'vt-sterk', zin: 'Vorig jaar ___ de juffen en meesters telefoons in de klas.', cue: 'verbieden', goed: 'verboden', uitleg: 'Vorig jaar: verleden tijd. Verbieden is een sterk werkwoord: verbood, en bij meer dan één verboden. De juffen en meesters zijn er meer: verboden.' },
      { soort: 'tt', zin: 'Wie de vraag niet ___, mag om een hint vragen.', cue: 'snappen', goed: 'snapt', uitleg: '"Mag": tegenwoordige tijd. Het onderwerp is wie: één persoon. Stam + t: snap + t = snapt.' },
      { soort: 'bijv', zin: 'De juf deelde de ___ oefentoetsen uit.', cue: 'nakijken', goed: 'nagekeken', uitleg: 'Het voltooid deelwoord van nakijken is nagekeken. Het eindigt op -en, dus er komt geen e achter: de nagekeken oefentoetsen.' },
      { soort: 'val', zin: 'Bij het dictee heb ik de woorden word en wordt weer ___.', cue: 'verwarren', goed: 'verward', uitleg: 'Bij heb hoort een voltooid deelwoord, en verwarren krijgt geen ge-. De stam verwar eindigt op een r, die zit niet in \'t kofschip: verward. Hij verwart (met een t) is de tegenwoordige tijd.' },
      { soort: 'val', zin: 'Waarom ___ je zus haar haren elke maand een andere kleur?', cue: 'verven', goed: 'verft', uitleg: 'Je zus betekent jouw zus: een zij, niet jij. Elke maand: tegenwoordige tijd. Stam + t: verf + t = verft.' },
      { soort: 'tt', zin: 'Mijn moeder ___ me elke avond een kwartier over mijn woordjes.', cue: 'overhoren', goed: 'overhoort', uitleg: 'Elke avond: tegenwoordige tijd. Mijn moeder is een zij: stam + t. Overhoor + t = overhoort.' },
      { soort: 'dd', zin: 'Bij de rekenles van gisteren ___ we hoe hoog de school is.', cue: 'schatten', goed: 'schatten', uitleg: 'Gisteren: verleden tijd, en het onderwerp is we, meer dan één. De stam schat eindigt op een t: schat + ten = schatten. Dat lijkt op het hele werkwoord, maar hier is het de verleden tijd.' }
    ],
    // Dag 80
    [
      { soort: 'tt', zin: 'Als je vragen hebt over de toets, ___ je ze gewoon aan de juf.', cue: 'stellen', goed: 'stel', uitleg: 'Het gaat over nu: tegenwoordige tijd. Na \'Als je vragen hebt\' komt eerst het werkwoord en dan pas je. Jij staat achter het werkwoord, dus geen t: alleen de stam, stel je.' },
      { soort: 'tt', zin: 'Mijn zus ___ op de middelbare school nu ook lessen Latijn.', cue: 'volgen', goed: 'volgt', uitleg: 'Nu: tegenwoordige tijd. Mijn zus is een zij: stam + t. Volg + t = volgt.' },
      { soort: 'dd', zin: 'Vorige week ___ de juf en de meester de jongens en de meisjes voor het voetbaltoernooi.', cue: 'scheiden', goed: 'scheidden', uitleg: 'Vorige week: verleden tijd. Het onderwerp is de juf en de meester, twee personen. De stam scheid eindigt op een d: scheid + den = scheidden.' },
      { soort: 'vt-sterk', zin: 'In de Tweede Wereldoorlog ___ veel mensen in Nederland honger.', cue: 'lijden', goed: 'leden', uitleg: 'In de Tweede Wereldoorlog: lang geleden, verleden tijd. Lijden is een sterk werkwoord: leed, en bij meer dan één leden.' },
      { soort: 'tt', zin: 'Mijn buurjongen ___ elke ochtend al om zeven uur op de bus.', cue: 'stappen', goed: 'stapt', uitleg: 'Elke ochtend: tegenwoordige tijd. Mijn buurjongen is een hij: stam + t. Stap + t = stapt.' },
      { soort: 'vt', zin: 'Op de open dag van vorige week ___ mijn vader allemaal vragen aan de mentor.', cue: 'stellen', goed: 'stelde', uitleg: 'Vorige week: verleden tijd. De stam is stel, de l zit niet in \'t kofschip: stel + de = stelde.' },
      { soort: 'engels', zin: 'Mijn neef ___ gisteren een uur met zijn vriend in Amerika.', cue: 'skypen', goed: 'skypete', uitleg: 'Gisteren: verleden tijd. Skypen komt uit het Engels; je hoort aan het eind een p-klank. De p zit in \'t kofschip: skype + te = skypete.' },
      { soort: 'val', zin: 'De school ___ dit jaar de hele gymzaal.', cue: 'vernieuwen', goed: 'vernieuwt', uitleg: 'Dit jaar: tegenwoordige tijd. De school is een zij: vernieuw + t = vernieuwt. Vernieuwd met een d is het voltooid deelwoord.' },
      { soort: 'val', zin: 'Welke opleiding ___ jij na de middelbare school, denk je?', cue: 'volgen', goed: 'volg', uitleg: 'Het gaat over nu en later: tegenwoordige tijd. Jij staat achter het werkwoord, dus geen t: alleen de stam, volg jij.' },
      { soort: 'dd', zin: 'Vroeger ___ een paar oudere jongens mijn vader, vertelde hij.', cue: 'pesten', goed: 'pestten', uitleg: 'Vroeger: verleden tijd. Het onderwerp is een paar oudere jongens, meer dan één. De stam pest eindigt op een t: pest + ten = pestten.' }
    ],
    // Dag 81
    [
      { soort: 'tt', zin: 'Mijn zus ___ haar goede voornemen al twee weken vol: elke dag een half uur lezen.', cue: 'volhouden', goed: 'houdt', uitleg: 'Al twee weken, en nog steeds: tegenwoordige tijd. Mijn zus is een zij: stam + t. De stam van volhouden is houd (houd vol): houd + t = houdt.' },
      { soort: 'tt', zin: 'Sinds hij in de brugklas zit, ___ mijn broer al zijn huiswerk in een planner.', cue: 'noteren', goed: 'noteert', uitleg: '"Zit": tegenwoordige tijd. Mijn broer is een hij: stam + t. Noteer + t = noteert.' },
      { soort: 'dd', zin: 'Op de eerste schooldag van vorig jaar ___ de brugklassers in de drukke gang steeds tegen elkaar aan.', cue: 'stoten', goed: 'stootten', uitleg: 'Vorig jaar: verleden tijd. Het onderwerp is de brugklassers, meer dan één. De stam stoot eindigt op een t: stoot + ten = stootten.' },
      { soort: 'vt-sterk', zin: 'Vorig jaar ___ mijn broer en zijn vrienden kampioen met hun voetbalteam.', cue: 'worden', goed: 'werden', uitleg: 'Vorig jaar: verleden tijd. Worden is een sterk werkwoord: werd, en bij meer dan één werden. Het onderwerp is mijn broer en zijn vrienden: werden.' },
      { soort: 'tt', zin: 'Mijn zus ___ elke middag met haar vriendinnen in de kantine.', cue: 'lunchen', goed: 'luncht', uitleg: 'Elke middag: tegenwoordige tijd. Mijn zus is een zij: stam + t. Lunch + t = luncht.' },
      { soort: 'bijv', zin: 'Mijn broer hing zijn ___ rooster boven zijn bureau.', cue: 'printen', goed: 'geprinte', uitleg: 'Het voltooid deelwoord is geprint: de stam print eindigt al op een t. Voor rooster komt er een e achter: het geprinte rooster.' },
      { soort: 'val', zin: 'Mijn broer was op zijn eerste dag helemaal ___ in het grote schoolgebouw.', cue: 'verdwalen', goed: 'verdwaald', uitleg: 'Na was staat hier een voltooid deelwoord, en verdwalen krijgt geen ge-. De stam verdwaal eindigt op een l, die zit niet in \'t kofschip: verdwaald. Hij verdwaalt (met een t) is de tegenwoordige tijd.' },
      { soort: 'val', zin: 'Hoe ___ jij al die woordjes voor Engels?', cue: 'onthouden', goed: 'onthoud', uitleg: 'Het gaat over nu: tegenwoordige tijd. Jij staat achter het werkwoord, dus geen t: alleen de stam, onthoud jij.' },
      { soort: 'tt', zin: 'Mijn broer ___ elke dag een uur aan zijn huiswerk.', cue: 'zitten', goed: 'zit', uitleg: 'Elke dag: tegenwoordige tijd. Mijn broer is een hij: stam + t. De stam zit eindigt al op een t: zit.' },
      { soort: 'dd', zin: 'Op de verkleeddag van vorige week ___ mijn broer zich als piraat.', cue: 'verkleden', goed: 'verkleedde', uitleg: 'Vorige week: verleden tijd. De stam is verkleed en eindigt op een d: verkleed + de = verkleedde.' }
    ],
    // Dag 82
    [
      { soort: 'tt', zin: 'Mijn broertje ___ elke week een nieuw spel uit, met hele ingewikkelde regels.', cue: 'uitvinden', goed: 'vindt', uitleg: 'Elke week: tegenwoordige tijd. Mijn broertje is een hij: stam + t. De stam van uitvinden is vind (vind uit): vind + t = vindt.' },
      { soort: 'tt', zin: 'Mijn juf ___ ons elke ochtend met een nieuw raadsel.', cue: 'verrassen', goed: 'verrast', uitleg: 'Elke ochtend: tegenwoordige tijd. Mijn juf is een zij: stam + t. De stam verras eindigt op een s: verras + t = verrast, met één s.' },
      { soort: 'dd', zin: 'Vorig jaar ___ de wegwerkers de fietspaden rond onze school.', cue: 'verbreden', goed: 'verbreedden', uitleg: 'Vorig jaar: verleden tijd. Het onderwerp is de wegwerkers, meer dan één. De stam verbreed eindigt op een d: verbreed + den = verbreedden.' },
      { soort: 'vt-sterk', zin: 'Vorig jaar ___ ik de juf niet altijd goed, want ze praatte heel zacht.', cue: 'verstaan', goed: 'verstond', uitleg: 'Vorig jaar: verleden tijd. Verstaan is een sterk werkwoord, net als staan: de verleden tijd is verstond.' },
      { soort: 'tt', zin: 'Mijn vriendin ___ elke avond een kwartier met een rekenapp.', cue: 'trainen', goed: 'traint', uitleg: 'Elke avond: tegenwoordige tijd. Mijn vriendin is een zij: stam + t. Train + t = traint.' },
      { soort: 'vd', zin: 'Mijn opa heeft vroeger in een klein dorpje in Friesland ___.', cue: 'wonen', goed: 'gewoond', uitleg: 'Bij heeft hoort een voltooid deelwoord. De stam woon eindigt op een n, die zit niet in \'t kofschip: gewoond.' },
      { soort: 'tt', zin: 'De leerlingen van groep 8 ___ deze week elke dag met oude IEP-toetsen.', cue: 'oefenen', goed: 'oefenen', uitleg: 'Deze week: tegenwoordige tijd. Het onderwerp is de leerlingen, meer dan één: het hele werkwoord, oefenen.' },
      { soort: 'val', zin: 'Mijn opa ___ elke ochtend eerst zijn plantjes.', cue: 'verzorgen', goed: 'verzorgt', uitleg: 'Elke ochtend: tegenwoordige tijd. Mijn opa is een hij: verzorg + t = verzorgt. Verzorgd met een d is het voltooid deelwoord.' },
      { soort: 'val', zin: 'Hoe ___ je zus al die sommen toch zo snel uit haar hoofd?', cue: 'rekenen', goed: 'rekent', uitleg: 'Je zus betekent jouw zus: een zij, niet jij. Het gaat over nu: stam + t. Reken + t = rekent.' },
      { soort: 'dd', zin: 'Gisteren ___ de leerlingen van groep 8 folders voor het schoolfeest door de wijk.', cue: 'verspreiden', goed: 'verspreidden', uitleg: 'Gisteren: verleden tijd. Het onderwerp is de leerlingen, meer dan één. De stam verspreid eindigt op een d: verspreid + den = verspreidden.' }
    ],
    // Dag 83
    [
      { soort: 'tt', zin: 'Ik ___ met je om een zak drop dat het morgen gaat sneeuwen.', cue: 'wedden', goed: 'wed', uitleg: '"Gaat": tegenwoordige tijd. Bij ik schrijf je alleen de stam, zonder t: ik wed.' },
      { soort: 'tt', zin: 'Mijn broertje ___ elke zaterdagochtend bij de ijshockeyclub.', cue: 'schaatsen', goed: 'schaatst', uitleg: 'Elke zaterdag: tegenwoordige tijd. Mijn broertje is een hij: stam + t. Schaats + t = schaatst.' },
      { soort: 'dd', zin: 'Vorig voorjaar ___ mijn oma elke week het onkruid tussen haar tegels.', cue: 'wieden', goed: 'wiedde', uitleg: 'Vorig voorjaar: verleden tijd. De stam is wied en eindigt op een d: wied + de = wiedde.' },
      { soort: 'vt-sterk', zin: 'Gisteren ___ de spelers van ons team als leeuwen achter elke bal aan.', cue: 'lopen', goed: 'liepen', uitleg: 'Gisteren: verleden tijd. Lopen is een sterk werkwoord: liep, en bij meer dan één liepen. De spelers zijn er meer: liepen.' },
      { soort: 'tt', zin: 'Mijn moeder ___ elke zaterdag met haar club op de rivier.', cue: 'roeien', goed: 'roeit', uitleg: 'Elke zaterdag: tegenwoordige tijd. Mijn moeder is een zij: stam + t. Roei + t = roeit.' },
      { soort: 'bijv', zin: 'Mijn moeder gooide het ___ T-shirt weg, want het was na de wasbeurt helemaal roze.', cue: 'verkleuren', goed: 'verkleurde', uitleg: 'Het voltooid deelwoord is verkleurd: verkleuren krijgt geen ge-, en de stam verkleur eindigt op een r, die zit niet in \'t kofschip. Voor T-shirt komt er een e achter: verkleurde.' },
      { soort: 'engels', zin: 'Mijn broer heeft gisteren voor het eerst in de skihal ___.', cue: 'snowboarden', goed: 'gesnowboard', uitleg: 'Bij heeft hoort een voltooid deelwoord. Snowboarden komt uit het Engels; de stam snowboard eindigt al op een d. Je schrijft ge + snowboard, en er komt geen extra d bij: gesnowboard.' },
      { soort: 'val', zin: 'Kijk, onze keeper ___ het doel als een leeuw!', cue: 'verdedigen', goed: 'verdedigt', uitleg: 'Het gaat over nu: tegenwoordige tijd. Onze keeper is een hij: verdedig + t = verdedigt. Verdedigd met een d is het voltooid deelwoord.' },
      { soort: 'tt', zin: 'Na elke training ___ de hele kleedkamer naar zweet.', cue: 'stinken', goed: 'stinkt', uitleg: 'Na elke training: tegenwoordige tijd. Het onderwerp is de hele kleedkamer: stam + t. Stink + t = stinkt.' },
      { soort: 'dd', zin: 'Vorig jaar ___ mijn vader bijna nooit, maar nu gaat hij drie keer per week naar de sportschool.', cue: 'sporten', goed: 'sportte', uitleg: 'Vorig jaar: verleden tijd. De stam is sport en eindigt op een t: sport + te = sportte.' }
    ],
    // Dag 84
    [
      { soort: 'tt', zin: 'Ik ___ thuis altijd het plastic van het papier.', cue: 'scheiden', goed: 'scheid', uitleg: 'Altijd: tegenwoordige tijd. Bij ik schrijf je alleen de stam, zonder t: ik scheid.' },
      { soort: 'tt', zin: 'Mijn opa ___ elke zondag uren aan de waterkant.', cue: 'vissen', goed: 'vist', uitleg: 'Elke zondag: tegenwoordige tijd. Mijn opa is een hij: stam + t. Vis + t = vist.' },
      { soort: 'dd', zin: 'Vorig jaar ___ mijn oma de kerstwandeling door het bos.', cue: 'leiden', goed: 'leidde', uitleg: 'Vorig jaar: verleden tijd. De stam is leid en eindigt op een d, die zit niet in \'t kofschip: leid + de = leidde.' },
      { soort: 'vt-sterk', zin: 'Mijn moeder ___ gisteren tegen mijn broer dat hij zijn kamer nooit opruimt.', cue: 'zeggen', goed: 'zei', uitleg: 'Gisteren: verleden tijd. Zeggen is een onregelmatig werkwoord: de verleden tijd is zei. Er komt geen -de achter.' },
      { soort: 'tt', zin: 'Mijn opa ___ elke zaterdag in zijn schuur.', cue: 'rommelen', goed: 'rommelt', uitleg: 'Elke zaterdag: tegenwoordige tijd. Mijn opa is een hij: stam + t. Rommel + t = rommelt.' },
      { soort: 'vd', zin: 'Ik heb nog nooit zo hard ___ als bij die film.', cue: 'lachen', goed: 'gelachen', uitleg: 'Bij heb hoort een voltooid deelwoord. Lachen heeft een voltooid deelwoord dat op -en eindigt: gelachen.' },
      { soort: 'tt', zin: 'Mijn oom ___ elk weekend met zijn camper door Europa.', cue: 'toeren', goed: 'toert', uitleg: 'Elk weekend: tegenwoordige tijd. Mijn oom is een hij: stam + t. Toer + t = toert.' },
      { soort: 'val', zin: 'Mijn neefje is zo ___ dat hij nooit dankjewel zegt.', cue: 'verwennen', goed: 'verwend', uitleg: 'Na is staat hier een voltooid deelwoord, en verwennen krijgt geen ge-. De stam verwen eindigt op een n, die zit niet in \'t kofschip: verwend, met een d. Hij verwent (met een t) is de tegenwoordige tijd.' },
      { soort: 'val', zin: '___ jij dit weekend ook bij je opa en oma?', cue: 'logeren', goed: 'logeer', uitleg: 'Dit weekend: tegenwoordige tijd. Jij staat achter het werkwoord, dus geen t: alleen de stam, logeer jij.' },
      { soort: 'dd', zin: 'Vroeger ___ mijn opa elke zomer bonen en aardappels uit zijn moestuin.', cue: 'oogsten', goed: 'oogstte', uitleg: 'Vroeger: verleden tijd. De stam is oogst en eindigt op een t: oogst + te = oogstte.' }
    ],
    // Dag 85
    [
      { soort: 'tt', zin: 'Wie elke dag leest, ___ nieuwe woorden veel beter.', cue: 'onthouden', goed: 'onthoudt', uitleg: '\'Leest\': tegenwoordige tijd. Het onderwerp is wie: één persoon. Stam + t: onthoud + t = onthoudt.' },
      { soort: 'tt', zin: 'De juf ___ ons straks uit hoe je de hoofdgedachte van een tekst vindt.', cue: 'uitleggen', goed: 'legt', uitleg: 'Straks: tegenwoordige tijd. De juf is een zij: stam + t. De stam van uitleggen is leg (leg uit): leg + t = legt.' },
      { soort: 'dd', zin: 'Bij de vorige oefentoets ___ ik niet goed op de tijd.', cue: 'letten', goed: 'lette', uitleg: 'Bij de vorige toets: verleden tijd. De stam is let en eindigt op een t: let + te = lette.' },
      { soort: 'vt-sterk', zin: 'Mijn gum ___ zo snel dat ik na een week al een nieuwe nodig had.', cue: 'slijten', goed: 'sleet', uitleg: '"Had": verleden tijd. Slijten is een sterk werkwoord: de verleden tijd is sleet, met één t aan het eind.' },
      { soort: 'tt', zin: 'Een goede lezer ___ bij elke alinea even na waar die over gaat.', cue: 'nadenken', goed: 'denkt', uitleg: 'Dit is altijd zo: tegenwoordige tijd. Een goede lezer is een hij of zij: stam + t. De stam van nadenken is denk (denk na): denk + t = denkt.' },
      { soort: 'vt', zin: 'Gisteren ___ ik alle signaalwoorden in de tekst met een gele stift.', cue: 'onderstrepen', goed: 'onderstreepte', uitleg: 'Gisteren: verleden tijd. De stam is onderstreep, de p zit in \'t kofschip: onderstreep + te = onderstreepte.' },
      { soort: 'val', zin: 'De juf heeft de oefentoets al ___, dus we krijgen vandaag ons cijfer.', cue: 'verbeteren', goed: 'verbeterd', uitleg: 'Bij heeft hoort een voltooid deelwoord, en verbeteren krijgt geen ge-. De stam verbeter eindigt op een r, die zit niet in \'t kofschip: verbeterd. Zij verbetert (met een t) is de tegenwoordige tijd.' },
      { soort: 'val', zin: '___ jij moeilijke woorden altijd op in het woordenboek?', cue: 'opzoeken', goed: 'zoek', uitleg: 'Altijd: tegenwoordige tijd. Jij staat achter het werkwoord, dus geen t: alleen de stam, zoek jij.' },
      { soort: 'tt', zin: 'Mijn vader ___ elke avond een stuk uit de krant voor me uit.', cue: 'uitzoeken', goed: 'zoekt', uitleg: 'Elke avond: tegenwoordige tijd. Mijn vader is een hij: stam + t. De stam van uitzoeken is zoek (zoek uit): zoek + t = zoekt.' },
      { soort: 'dd', zin: 'Gisteren ___ we in de klas samen tien lastige zinnen.', cue: 'ontleden', goed: 'ontleedden', uitleg: 'Gisteren: verleden tijd. Het onderwerp is we, meer dan één. De stam ontleed eindigt op een d: ontleed + den = ontleedden.' }
    ],
    // Dag 86
    [
      { soort: 'tt', zin: 'Ik ___ het fijn om vlak voor een toets nog even naar buiten te gaan.', cue: 'vinden', goed: 'vind', uitleg: 'Het gaat over nu: tegenwoordige tijd. Bij ik schrijf je alleen de stam, zonder t: ik vind.' },
      { soort: 'tt', zin: 'Mijn buurman ___ bij een verhaalsom eerst alle getallen.', cue: 'onderstrepen', goed: 'onderstreept', uitleg: 'Dit doet hij altijd: tegenwoordige tijd. Mijn buurman is een hij: stam + t. Onderstreep + t = onderstreept.' },
      { soort: 'dd', zin: 'Toen de juf gisteren vroeg wie de som snapte, ___ de meeste kinderen hun hoofd.', cue: 'schudden', goed: 'schudden', uitleg: 'Gisteren: verleden tijd, en het onderwerp is de meeste kinderen. De stam schud eindigt op een d: schud + den = schudden. Dat lijkt op het hele werkwoord, maar hier is het de verleden tijd.' },
      { soort: 'vt-sterk', zin: 'Bij de vorige toets ___ ik alle slordige fouten, door alles twee keer na te kijken.', cue: 'voorkomen', goed: 'voorkwam', uitleg: 'Bij de vorige toets: verleden tijd. Voorkomen is een sterk werkwoord, net als komen: de verleden tijd is voorkwam.' },
      { soort: 'tt', zin: 'Wie bij een som eerst ___, ziet snel of het antwoord kan kloppen.', cue: 'schatten', goed: 'schat', uitleg: '"Ziet": tegenwoordige tijd. Het onderwerp is wie: één persoon. Stam + t, maar de stam schat eindigt al op een t: schat.' },
      { soort: 'bijv', zin: 'De juf liet een in vieren ___ pizza zien om breuken uit te leggen.', cue: 'verdelen', goed: 'verdeelde', uitleg: 'Het voltooid deelwoord is verdeeld: verdelen krijgt geen ge-, en de stam verdeel eindigt op een l. Voor pizza komt er een e achter: verdeelde.' },
      { soort: 'engels', zin: 'Mijn moeder ___ gisteren de oefentoets voor me, zodat ik hem op papier kon maken.', cue: 'printen', goed: 'printte', uitleg: 'Gisteren: verleden tijd. De stam is print en eindigt op een t. Die zit in \'t kofschip: print + te = printte, met twee t\'s.' },
      { soort: 'val', zin: '___ je oom nog steeds in Amerika?', cue: 'wonen', goed: 'woont', uitleg: 'Je oom betekent jouw oom: een hij, niet jij. "Nog steeds": tegenwoordige tijd. Stam + t: woon + t = woont.' },
      { soort: 'tt', zin: 'Mijn tafelgenoot ___ bij elke som zachtjes in zichzelf.', cue: 'mompelen', goed: 'mompelt', uitleg: 'Bij elke som: tegenwoordige tijd. Mijn tafelgenoot is een hij of zij: stam + t. Mompel + t = mompelt.' },
      { soort: 'dd', zin: 'Bij de oefentoets van gisteren ___ we allemaal goed op de tijd.', cue: 'letten', goed: 'letten', uitleg: 'Gisteren: verleden tijd. Het onderwerp is we, meer dan één. De stam let eindigt op een t: let + ten = letten.' }
    ],
    // Dag 87
    [
      { soort: 'tt', zin: 'Ik ___ mijn woordenschat elke dag uit met tien nieuwe woorden.', cue: 'uitbreiden', goed: 'breid', uitleg: 'Elke dag: tegenwoordige tijd. Bij ik schrijf je alleen de stam, zonder t: ik breid (uit).' },
      { soort: 'tt', zin: 'Mijn opa ___ me morgen veel succes met een kaartje.', cue: 'wensen', goed: 'wenst', uitleg: 'Morgen: tegenwoordige tijd. Mijn opa is een hij: stam + t. Wens + t = wenst.' },
      { soort: 'dd', zin: 'Bij de vorige toets ___ ik helemaal van de zenuwen.', cue: 'zweten', goed: 'zweette', uitleg: 'Bij de vorige toets: verleden tijd. De stam is zweet en eindigt op een t, die zit in \'t kofschip: zweet + te = zweette.' },
      { soort: 'vt-sterk', zin: 'Vorig jaar ___ de juf de uitslag van de toets met iedereen apart door.', cue: 'doorspreken', goed: 'sprak', uitleg: 'Vorig jaar: verleden tijd. Spreken is een sterk werkwoord: de verleden tijd is sprak (sprak door). Er komt geen -te achter.' },
      { soort: 'tt', zin: 'Wie vanavond goed ___, kan zich morgen beter concentreren.', cue: 'uitrusten', goed: 'rust', uitleg: '"Kan": tegenwoordige tijd. Het onderwerp is wie: één persoon. Stam + t, maar de stam rust eindigt al op een t: rust (rust uit).' },
      { soort: 'vt', zin: 'Gisteren ___ de juf nog één keer alle tips voor de toets.', cue: 'noemen', goed: 'noemde', uitleg: 'Gisteren: verleden tijd. De stam is noem, de m zit niet in \'t kofschip: noem + de = noemde.' },
      { soort: 'val', zin: 'De juf ___ erop dat we goed voorbereid zijn.', cue: 'vertrouwen', goed: 'vertrouwt', uitleg: 'Het gaat over nu: tegenwoordige tijd. De juf is een zij: vertrouw + t = vertrouwt. Vertrouwd met een d is het voltooid deelwoord.' },
      { soort: 'val', zin: 'Hoe laat ___ jij morgen op om op tijd te zijn?', cue: 'opstaan', goed: 'sta', uitleg: 'Morgen: tegenwoordige tijd. Jij staat achter het werkwoord, dus geen t: sta jij (op).' },
      { soort: 'tt', zin: 'Mijn zusje ___ morgen stiekem een briefje met \'succes!\' in mijn etui.', cue: 'stoppen', goed: 'stopt', uitleg: 'Morgen: tegenwoordige tijd. Mijn zusje is een zij: stam + t. Stop + t = stopt.' },
      { soort: 'dd', zin: 'Gisteren ___ mijn broer zijn wekker om zes uur, zodat hij als eerste in de badkamer was.', cue: 'zetten', goed: 'zette', uitleg: 'Gisteren: verleden tijd. De stam is zet en eindigt op een t, die zit in \'t kofschip: zet + te = zette.' }
    ],
    // Dag 88
    [
      { soort: 'tt', zin: 'Bij een lastige werkwoordvraag ___ ik eerst de zin: wat is het onderwerp?', cue: 'ontleden', goed: 'ontleed', uitleg: 'Het gaat over nu: tegenwoordige tijd. Bij ik schrijf je alleen de stam, zonder t: ik ontleed.' },
      { soort: 'tt', zin: 'Vandaag ___ de juf precies om half negen het eerste toetsboekje uit.', cue: 'uitdelen', goed: 'deelt', uitleg: 'Vandaag: tegenwoordige tijd. De juf is een zij: stam + t. De stam van uitdelen is deel (deel uit): deel + t = deelt.' },
      { soort: 'dd', zin: 'Vanochtend ___ mijn vriendinnen en ik een plan: na de toets gaan we taart eten.', cue: 'smeden', goed: 'smeedden', uitleg: 'Vanochtend: dat is al gebeurd, verleden tijd. Het onderwerp is mijn vriendinnen en ik, meer dan één. De stam smeed eindigt op een d: smeed + den = smeedden.' },
      { soort: 'vt-sterk', zin: 'Het ___ mijn moeder dat ze vanochtend niet mee kon naar school.', cue: 'spijten', goed: 'speet', uitleg: '"Kon": verleden tijd. Spijten is een sterk werkwoord: de verleden tijd is speet, met één t aan het eind.' },
      { soort: 'tt', zin: 'Wie twijfelt bij een meerkeuzevraag, ___ eerst de antwoorden weg die zeker fout zijn.', cue: 'wegstrepen', goed: 'streept', uitleg: '"Twijfelt": tegenwoordige tijd. Het onderwerp is wie: één persoon. De stam van wegstrepen is streep (streep weg): streep + t = streept.' },
      { soort: 'bijv', zin: 'Mijn pas ___ potloden lagen klaar op tafel.', cue: 'slijpen', goed: 'geslepen', uitleg: 'Het voltooid deelwoord van slijpen is geslepen. Het eindigt op -en, dus er komt geen e achter: geslepen potloden.' },
      { soort: 'tt', zin: 'De leerlingen van groep 8 ___ vandaag in stilte aan hun toets.', cue: 'werken', goed: 'werken', uitleg: 'Vandaag: tegenwoordige tijd. Het onderwerp is de leerlingen, meer dan één: het hele werkwoord, werken.' },
      { soort: 'val', zin: '___ jij je antwoorden nog even na voordat je inlevert?', cue: 'nalopen', goed: 'loop', uitleg: 'Het gaat over nu: tegenwoordige tijd. Jij staat achter het werkwoord, dus geen t: alleen de stam, loop jij (na).' },
      { soort: 'val', zin: 'De juf had de toetsboekjes tot vanochtend in een kast ___.', cue: 'verstoppen', goed: 'verstopt', uitleg: 'Bij had hoort een voltooid deelwoord, en verstoppen krijgt geen ge-. De stam verstop eindigt op een p, die zit in \'t kofschip: verstopt, met een t.' },
      { soort: 'dd', zin: 'Na de toets van vorig jaar ___ de leerlingen met limonade op hun goede uitslag.', cue: 'proosten', goed: 'proostten', uitleg: 'Vorig jaar: verleden tijd. Het onderwerp is de leerlingen, meer dan één. De stam proost eindigt op een t: proost + ten = proostten.' }
    ]
  ],
  woorden: [
    // Dag 15
    [
      { soort: 'klankgroepen', zin: 'In de herfst vallen de ___ van de bomen.', goed: 'bladeren', fout: ['bladderen', 'blaaderen'], uitleg: 'Hak het in stukjes: bla-de-ren. De a staat aan het eind van een klankgroep en klinkt lang, dus schrijf je er maar één.' },
      { soort: '-ig-lijk-isch', zin: 'Het was erg ___ op het verjaardagsfeest van mijn nichtje.', goed: 'gezellig', fout: ['gezelig', 'gezellich'], uitleg: 'Ge-zel-lig: na de korte e komen twee l\'en. Aan het eind hoor je ug of ich, maar je schrijft -ig.' },
      { soort: 'ei-ij', zin: 'Op vakantie gingen we met de boot naar een klein ___.', goed: 'eiland', fout: ['ijland', 'eilant'], uitleg: 'Eiland schrijf je met de korte ei. Dat moet je onthouden. Maak het langer, eilanden, dan hoor je een d.' },
      { soort: 'g-ch', zin: 'De rondvaartboot voer langzaam door de smalle ___.', goed: 'gracht', fout: ['gragt', 'grachd'], uitleg: 'Voor een t schrijf je ch: gracht, nacht, lucht. Maak je het langer, grachten, dan hoor je een t.' },
      { soort: 'meervoud', zin: 'Op het parkeerterrein stonden heel veel ___.', goed: 'auto\'s', fout: ['autos', 'autoos'], uitleg: 'Auto eindigt op een lange o. Met alleen een s zou je autos lezen met een korte o. Daarom zet je er een apostrof tussen: auto\'s.' },
      { soort: 'hoofdletter', zin: 'Mijn oom woont in ___, een land met veel vulkanen en geisers.', goed: 'IJsland', fout: ['Ijsland', 'ijsland'], uitleg: 'Een land krijgt een hoofdletter. De ij telt als één letter, dus aan het begin van een naam worden de i en de j allebei een hoofdletter: IJsland.' },
      { soort: 'leenwoord', zin: 'Op de pizza lagen ham, kaas en ___.', goed: 'champignons', fout: ['sjampinjons', 'champinjons'], uitleg: 'Champignon is een Frans woord. De sj-klank schrijf je als ch, en de nj-klank als gn: champignons.' },
      { soort: 'tussen-s', zin: 'Bij ___ leren we over landen, rivieren en bergen.', goed: 'aardrijkskunde', fout: ['aardrijkkunde', 'aardrijksskunde'], uitleg: 'Zeg het langzaam: aard-rijks-kun-de. Je hoort een s tussen aardrijk en kunde, dus die schrijf je ook. Eén s is genoeg.' }
    ],
    // Dag 16
    [
      { soort: 'klankgroepen', zin: 'Mijn fiets is ___: de ketting is gebroken.', goed: 'kapot', fout: ['kappot', 'kapod'], uitleg: 'Ka-pot: de a staat aan het eind van een klankgroep en klinkt lang, dus geen dubbele p. Aan het eind schrijf je een t.' },
      { soort: '-tie', zin: 'De juf gaf ons een duidelijke ___ voor de knutselopdracht.', goed: 'instructie', fout: ['instruktie', 'instruksie'], uitleg: 'Je hoort ksie, maar je schrijft -ctie, net als bij actie en collectie.' },
      { soort: 'au-ou', zin: 'Wat een ___ grap, daar moet ik echt niet om lachen.', goed: 'flauwe', fout: ['flouwe', 'flauwwe'], uitleg: 'Flauw schrijf je met auw, net als blauw en lauw. Er komt maar één w: flau-we.' },
      { soort: 'c-k-s', zin: 'De ___ zei dat ik een paar dagen rust moest houden.', goed: 'dokter', fout: ['docter', 'dockter'], uitleg: 'Dokter is een gewoon Nederlands woord geworden. De k-klank schrijf je hier gewoon met een k.' },
      { soort: 'bijvoeglijk', zin: 'Mijn zus dronk limonade uit een ___ fles.', goed: 'glazen', fout: ['glaze', 'glassen'], uitleg: 'Een fles van glas is een glazen fles. Zegt een woord waarvan iets gemaakt is, dan eindigt het op -en: glazen, houten, gouden.' },
      { soort: 'tussen-n', zin: 'In de dierentuin keken we naar de ___, waar de apen slingerden.', goed: 'apenkooi', fout: ['apekooi', 'appenkooi'], uitleg: 'Het meervoud van aap is apen, alleen met -en. Dan schrijf je in een samenstelling ook de n: apenkooi.' },
      { soort: 'hoofdletter', zin: 'Mijn broertje riep vanuit de gang: "___ mijn sleutel gezien?"', goed: 'Heeft iemand', fout: ['heeft iemand', 'Heeft Iemand'], uitleg: 'Wat iemand letterlijk zegt, begint met een hoofdletter, want het is een nieuwe zin. Alleen het eerste woord krijgt die hoofdletter.' },
      { soort: 'trema', zin: 'Na de val van mijn fiets deden allebei mijn ___ pijn.', goed: 'knieën', fout: ['knieen', 'knies'], uitleg: 'Eén knie, twee knie-en. Zonder puntjes lees je knie-en als één klank. Het trema op de e laat zien dat daar een nieuwe klankgroep begint: knieën.' }
    ],
    // Dag 17
    [
      { soort: 'klankgroepen', zin: 'De vissersboten liggen veilig in de ___.', goed: 'haven', fout: ['havven', 'haaven'], uitleg: 'Ha-ven: de a staat aan het eind van een klankgroep en klinkt lang. Dan is één a genoeg en verdubbel je de v niet.' },
      { soort: '-ig-lijk-isch', zin: 'De vuurtoren geeft een ___ signaal aan de schepen.', goed: 'duidelijk', fout: ['duidelek', 'duidelijck'], uitleg: 'Aan het eind hoor je luk, maar je schrijft -lijk, net als bij vriendelijk en eerlijk.' },
      { soort: 'ei-ij', zin: 'Langs de zee ligt een hoge ___ die het water tegenhoudt.', goed: 'dijk', fout: ['deik', 'dijck'], uitleg: 'Dijk schrijf je met de lange ij. Dat moet je onthouden. Aan het eind staat gewoon een k.' },
      { soort: 'g-ch', zin: 'Het licht van de vuurtoren heeft heel veel ___.', goed: 'kracht', fout: ['kragt', 'krachd'], uitleg: 'Voor een t schrijf je ch: kracht. Maak het langer, krachten, dan hoor je dat het een t is.' },
      { soort: 'meervoud', zin: 'In de winkel van de vuurtoren betaal je met ___.', goed: 'euro\'s', fout: ['euros', 'euroos'], uitleg: 'Euro eindigt op een lange o. Met alleen een s zou je euros lezen met een korte o, dus schrijf je euro\'s.' },
      { soort: 'leenwoord', zin: 'Mijn zus speelt ___ met een stick en een bal.', goed: 'hockey', fout: ['hokkie', 'hockie'], uitleg: 'Hockey is een Engels woord. Je hoort ie aan het eind, maar je schrijft -ey. En in het midden staat ck.' },
      { soort: 'hoofdletter', zin: 'Op ___ heb ik altijd zwemles.', goed: 'dinsdag', fout: ['Dinsdag', 'dinstag'], uitleg: 'Dagen van de week schrijf je in het Nederlands met een kleine letter: maandag, dinsdag. En dins-dag eindigt op dag.' },
      { soort: 'koppelteken', zin: 'Voor school moest ik een ___ maken: drie foto\'s van de herfst.', goed: 'foto-opdracht', fout: ['fotoopdracht', 'foto opdracht'], uitleg: 'Foto en opdracht vormen samen één woord. Zonder streepje zou je fotoopdracht met een lange oo lezen. Daarom zet je een koppelteken tussen de twee o\'s.' }
    ],
    // Dag 18
    [
      { soort: 'dubbel', zin: 'Deze som is ___, die heb ik zo opgelost.', goed: 'gemakkelijk', fout: ['gemakelijk', 'gemakkelek'], uitleg: 'Het komt van gemak. Na de korte a komen twee k\'s: ge-mak-ke-lijk. En het eind schrijf je als -lijk.' },
      { soort: '-tie', zin: 'Je mobiel in je tas houden helpt bij je ___.', goed: 'concentratie', fout: ['concentrasie', 'consentratie'], uitleg: 'Aan het eind hoor je sie, maar je schrijft -tie. En con- begint met een c, net als concert.' },
      { soort: 'au-ou', zin: 'Ik had een ___ antwoord gegeven, dus ik verbeterde het.', goed: 'fout', fout: ['faut', 'foud'], uitleg: 'Fout schrijf je met ou, net als hout en koud. Maak het langer, fouten, dan hoor je een t.' },
      { soort: 'c-k-s', zin: 'Voor mijn spreekbeurt kreeg ik een mooi ___.', goed: 'cijfer', fout: ['sijfer', 'cyfer'], uitleg: 'Cijfer begint met een c die als s klinkt, want er komt een ij achter. In het midden staat de lange ij.' },
      { soort: 'meervoud', zin: 'Bij ons op school moeten ___ kinderen hun mobiel in een bak leggen.', goed: 'alle', fout: ['allen', 'alen'], uitleg: 'Er staat een zelfstandig naamwoord achter: kinderen. Dan schrijf je alle. Allen gebruik je alleen als het woord los staat: Allen gingen mee.' },
      { soort: 'hoofdletter', zin: 'De meester vroeg: "___ allemaal je mobiel in de bak leggen?"', goed: 'Kunnen jullie', fout: ['kunnen jullie', 'Kunnen Jullie'], uitleg: 'Na de dubbele punt en het aanhalingsteken begint wat de meester zegt. Dat is een nieuwe zin, dus alleen het eerste woord krijgt een hoofdletter.' },
      { soort: '-ig-lijk-isch', zin: 'Mijn mobiel heeft een ___ stand en gaat vanzelf op stil.', goed: 'automatische', fout: ['automatiese', 'outomatische'], uitleg: 'Woorden die eindigen op een ies-klank schrijf je met -isch: automatisch, en met een e erachter automatische. Auto- begint met au.' },
      { soort: 'tussen-s', zin: 'Na de les gingen we naar het ___ van juf Anna, die met pensioen ging.', goed: 'afscheidsfeest', fout: ['afscheidfeest', 'afscheitsfeest'], uitleg: 'Je hoort een s tussen afscheid en feest: afscheids-feest. Die s schrijf je ook. Afscheid eindigt op een d, want je zegt afscheiden.' }
    ],
    // Dag 19
    [
      { soort: 'klankgroepen', zin: 'Met zijn snavel maakt de specht ___ in de boomstam.', goed: 'gaten', fout: ['gatten', 'gaaten'], uitleg: 'Eén gat, twee ga-ten. In het meervoud klinkt de a lang en staat hij aan het eind van een klankgroep, dus één a en één t.' },
      { soort: 'verkleinwoord', zin: 'De specht pikt een klein ___ uit de schors van de boom.', goed: 'beestje', fout: ['beesje', 'beestjie'], uitleg: 'Beest + je: de t van beest blijft staan, en het verkleinwoord eindigt op -je: beestje.' },
      { soort: 'ei-ij', zin: 'Een specht hakt met zijn snavel als een ___ in het hout.', goed: 'beitel', fout: ['bijtel', 'beitle'], uitleg: 'Beitel schrijf je met de korte ei. Dat moet je onthouden. Aan het eind staat -el, net als bij lepel.' },
      { soort: 'g-ch', zin: 'Wist je dat een specht ___ wel twintig keer per seconde klopt?', goed: 'echt', fout: ['egt', 'echd'], uitleg: 'Voor een t schrijf je ch: echt. Een g voor een t komt bijna alleen voor bij werkwoorden zoals zegt.' },
      { soort: 'bijvoeglijk', zin: 'In de keuken van het boswachtershuisje hing een oude ___ ketel.', goed: 'koperen', fout: ['kopere', 'kopperen'], uitleg: 'Een ketel van koper is een koperen ketel. Een woord dat zegt waarvan iets gemaakt is, krijgt -en. Ko-pe-ren: lange o, dus één p.' },
      { soort: 'hoofdletter', zin: 'In de bossen rond ___ wonen veel spechten.', goed: 'Den Haag', fout: ['den Haag', 'Den haag'], uitleg: 'Den Haag is een naam. Allebei de woorden krijgen een hoofdletter: Den Haag.' },
      { soort: 'tussen-n', zin: 'Bij de imker zagen we een ___ vol zoemende bijen.', goed: 'bijenkorf', fout: ['bijekorf', 'beienkorf'], uitleg: 'Het meervoud van bij is bijen, alleen met -en. Dan schrijf je de n in de samenstelling ook: bijenkorf.' },
      { soort: 'trema', zin: 'Op vakantie in ___ zagen we een zwarte specht.', goed: 'Italië', fout: ['Italie', 'Itallië'], uitleg: 'Je zegt I-ta-li-ë. Het trema laat zien dat de e een eigen klankgroep is. En Italië is een land, dus een hoofdletter.' }
    ],
    // Dag 20
    [
      { soort: 'klankgroepen', zin: 'Bij de sloot naast het kamp hoorden we de ___ kwaken.', goed: 'kikkers', fout: ['kikers', 'kiekers'], uitleg: 'Kik-kers: je hoort een korte i, dus verdubbel je de k. Met één k zou je kie-kers lezen.' },
      { soort: '-ig-lijk-isch', zin: 'Het vuur werd zo groot dat het ___ werd.', goed: 'gevaarlijk', fout: ['gevarlijk', 'gevaarlek'], uitleg: 'Het komt van gevaar, met aa. Daarachter komt -lijk: ge-vaar-lijk.' },
      { soort: 'au-ou', zin: 'De nacht was koud, en \'s ochtends lag er ___ op het gras.', goed: 'dauw', fout: ['douw', 'dau'], uitleg: 'Dauw schrijf je met auw, net als blauw en nauw. Dat moet je onthouden.' },
      { soort: 'c-k-s', zin: 'We zaten met de hele groep in een grote ___ rond het vuur.', goed: 'cirkel', fout: ['sirkel', 'cirkkel'], uitleg: 'Cirkel begint met een c die als s klinkt, want er komt een i achter. Cir-kel: één k.' },
      { soort: 'apostrof', zin: '___ zaten we rond het kampvuur en vertelden we griezelverhalen.', goed: '\'s Avonds', fout: ['S\'avonds', '\'S avonds'], uitleg: '\'s Avonds is een verkorting van des avonds. De apostrof staat vóór de s. Aan het begin van een zin krijgt niet de s, maar het volgende woord de hoofdletter: \'s Avonds.' },
      { soort: 'hoofdletter', zin: '"___, daar in de bosjes!" fluisterde de leider.', goed: 'Kijk eens', fout: ['kijk eens', 'Kijk Eens'], uitleg: 'Wat iemand zegt, begint met een hoofdletter. Alleen het eerste woord krijgt die: Kijk eens.' },
      { soort: 'leenwoord', zin: 'De leiding speelde kampvuurliedjes op een ___.', goed: 'gitaar', fout: ['gietaar', 'guitaar'], uitleg: 'Gitaar komt uit het Spaans. Je schrijft gewoon gi-taar, met één i en twee a\'s.' },
      { soort: 'koppelteken', zin: 'Bij het kampvuur lag voor de zekerheid een ___ klaar.', goed: 'EHBO-doos', fout: ['ehbo-doos', 'EHBO doos'], uitleg: 'EHBO is een afkorting die je met hoofdletters schrijft. Plak je er een woord aan vast, dan zet je een koppelteken: EHBO-doos.' }
    ],
    // Dag 21
    [
      { soort: 'dubbel', zin: 'De robot in de bibliotheek vertelde een ___ mop.', goed: 'grappige', fout: ['grapige', 'grappiche'], uitleg: 'Het komt van grap. Na de korte a komen twee p\'s: grap-pi-ge. En -ig blijft -ig, ook met een e erachter.' },
      { soort: '-tie', zin: 'In de krant stond een ___ voor de nieuwe robot.', goed: 'advertentie', fout: ['advertensie', 'adfertentie'], uitleg: 'Aan het eind hoor je sie, maar je schrijft -tie: ad-ver-ten-tie. Net als bij vakantie.' },
      { soort: 'ei-ij', zin: 'Een robot in de bibliotheek is heel ___.', goed: 'bijzonder', fout: ['beizonder', 'bijsonder'], uitleg: 'Bijzonder schrijf je met de lange ij, net als bij. En je hoort een z: bij-zon-der.' },
      { soort: 'g-ch', zin: 'Ik las in de krant een ___ over de robot.', goed: 'bericht', fout: ['berigt', 'berichd'], uitleg: 'Voor een t schrijf je ch: bericht, licht, gezicht. Maak het langer, berichten, dan hoor je een t.' },
      { soort: 'meervoud', zin: 'In de bibliotheek vind je boeken over allerlei ___, zoals knutselen en tekenen.', goed: 'hobby\'s', fout: ['hobbys', 'hobbies'], uitleg: 'Hobby eindigt op een y die als ie klinkt. Dan zet je een apostrof voor de s: hobby\'s, net als baby\'s. De Engelse vorm hobbies is in het Nederlands fout.' },
      { soort: 'hoofdletter', zin: 'De robot spreekt Nederlands, Engels en ___.', goed: 'Frans', fout: ['frans', 'Fransch'], uitleg: 'Talen schrijf je met een hoofdletter, want ze komen van een land: Frans komt van Frankrijk.' },
      { soort: 'leenwoord', zin: 'Met de ___ van de bibliotheek vind je in een paar seconden een boek.', goed: 'computer', fout: ['kompjoeter', 'computor'], uitleg: 'Computer is een Engels woord. Je hoort oe, maar je schrijft u: com-pu-ter.' },
      { soort: 'trema', zin: 'We gingen met z\'n ___ naar de bibliotheek om de robot te zien.', goed: 'drieën', fout: ['drieen', 'drie-en'], uitleg: 'Je zegt drie-en. Zonder puntjes lees je ee als één klank. Het trema laat zien dat de e een nieuwe klankgroep begint: drieën.' }
    ],
    // Dag 22
    [
      { soort: 'klankgroepen', zin: 'Het was koud, dus we trokken onze dikke ___ aan.', goed: 'jassen', fout: ['jasen', 'jaassen'], uitleg: 'Jas-sen: je hoort een korte a, dus verdubbel je de s. Met één s zou je jaa-sen lezen.' },
      { soort: 'verkleinwoord', zin: 'Maak de lampion aan de stok vast met een dun ___.', goed: 'draadje', fout: ['draatje', 'dradje'], uitleg: 'Draad eindigt op een d. Die blijft in het verkleinwoord staan: draad + je = draadje.' },
      { soort: 'ei-ij', zin: 'Mijn oma woont ___, ik kan er zo naartoe lopen.', goed: 'dichtbij', fout: ['dichtbei', 'digtbij'], uitleg: 'Dichtbij betekent: niet ver weg. Je schrijft het als één woord als er geen woord achter komt: oma woont dichtbij. Bij heeft de lange ij.' },
      { soort: 'g-ch', zin: 'De buurvrouw liep met haar ___ langs de deuren.', goed: 'dochter', fout: ['dogter', 'dochtur'], uitleg: 'Voor een t schrijf je ch: dochter. Een g voor een t komt in zulke woorden niet voor.' },
      { soort: 'verkleinwoord', zin: 'Bij de laatste deur kregen we allemaal een ___.', goed: 'colaatje', fout: ['colatje', 'cola\'tje'], uitleg: 'Cola eindigt op een lange a. Om die lang te houden schrijf je in het verkleinwoord twee a\'s: colaatje, net als parapluutje.' },
      { soort: 'hoofdletter', zin: 'Ook veel ___ kinderen lopen met een lampion langs de deuren.', goed: 'Duitse', fout: ['duitse', 'Duitsche'], uitleg: 'Duits komt van Duitsland, een naam. Woorden die van een land komen, krijgen een hoofdletter: Duitse kinderen.' },
      { soort: '-tie', zin: 'Versier je lampion zoals je wilt: gebruik je ___!', goed: 'fantasie', fout: ['fantatie', 'fantazie'], uitleg: 'Pas op: fantasie schrijf je met -sie, niet met -tie. Dat moet je onthouden, net als bij televisie.' },
      { soort: 'c-k-s', zin: 'Mijn broertje maakte een lampion in de vorm van een ___.', goed: 'cactus', fout: ['kaktus', 'cactes'], uitleg: 'Cactus komt uit het Latijn. Allebei de k-klanken schrijf je als c: cac-tus.' }
    ],
    // Dag 23
    [
      { soort: 'klankgroepen', zin: 'Sint-Maarten deelde zijn mantel met een arme ___.', goed: 'bedelaar', fout: ['beddelaar', 'bedelaer'], uitleg: 'Be-de-laar: de e\'s staan aan het eind van een klankgroep, dus verdubbel je de d niet. Aan het eind schrijf je -aar.' },
      { soort: '-ig-lijk-isch', zin: 'Sint-Maarten was heel ___ en deelde wat hij had.', goed: 'goedhartig', fout: ['goedhartich', 'goedhardig'], uitleg: 'Goed + hart + ig. Hart schrijf je met een t, en aan het eind schrijf je -ig.' },
      { soort: 'au-ou', zin: 'Het was ___ en de grond was bedekt met sneeuw.', goed: 'koud', fout: ['kaud', 'koudt'], uitleg: 'Koud schrijf je met ou. Maak het langer, koude, dan hoor je een d. Er komt geen t achter.' },
      { soort: 'weetwoord', zin: 'De bedelaar zat rillend op de koude ___.', goed: 'grond', fout: ['gront', 'grondt'], uitleg: 'Aan het eind hoor je een t, maar maak het woord langer: gronden. Dan hoor je een d, dus schrijf je grond.' },
      { soort: 'meervoud', zin: 'Bij sommige huizen kregen we een mandarijn of twee ___.', goed: 'kiwi\'s', fout: ['kiwis', 'kiwies'], uitleg: 'Kiwi eindigt op een i die als ie klinkt. Met alleen een s zou je het verkeerd lezen, dus schrijf je kiwi\'s.' },
      { soort: 'hoofdletter', zin: 'Sint-Maarten werd geboren in het land dat nu ___ heet.', goed: 'Hongarije', fout: ['hongarije', 'Hongarijë'], uitleg: 'Een land krijgt een hoofdletter. Hon-ga-rij-e eindigt op -ije, zonder trema.' },
      { soort: 'tussen-s', zin: 'Met onze lampionnen liepen we door de ___.', goed: 'dorpsstraat', fout: ['dorpstraat', 'dorpenstraat'], uitleg: 'Dorps + straat: je hoort een tussen-s, en straat begint ook met een s. Dan schrijf je allebei: dorpsstraat.' },
      { soort: 'bijvoeglijk', zin: 'Op schilderijen draagt Sint-Maarten een helm en een ___ harnas.', goed: 'ijzeren', fout: ['ijzere', 'eizeren'], uitleg: 'Een harnas van ijzer is een ijzeren harnas. Woorden die zeggen waarvan iets gemaakt is, krijgen -en.' }
    ],
    // Dag 24
    [
      { soort: 'klankgroepen', zin: 'De nieuwe buurvrouw had een mand vol rode ___ uit haar tuin.', goed: 'appels', fout: ['apels', 'aapels'], uitleg: 'Ap-pels: je hoort een korte a, dus verdubbel je de p. Met één p zou je aa-pels lezen.' },
      { soort: '-ig-lijk-isch', zin: 'Ze bakte een ___ appeltaart voor ons.', goed: 'heerlijke', fout: ['heerluke', 'herlijke'], uitleg: 'Heer + lijk: je hoort luk, maar je schrijft -lijk. Heer heeft een lange ee, dus twee e\'s.' },
      { soort: 'ei-ij', zin: 'De buurvrouw heeft een ___ in haar tuin die de hele dag mekkert.', goed: 'geit', fout: ['gijt', 'geid'], uitleg: 'Geit schrijf je met de korte ei. Maak het langer, geiten, dan hoor je een t.' },
      { soort: 'g-ch', zin: 'Achter haar tuin staat een hoge ___ van struiken.', goed: 'heg', fout: ['hech', 'hegg'], uitleg: 'Aan het eind hoor je ch, maar maak het langer: heggen. Dan hoor je een g, dus schrijf je heg.' },
      { soort: 'verkleinwoord', zin: 'Ze stopte een ___ in onze brievenbus om kennis te maken.', goed: 'kaartje', fout: ['kaardje', 'kaartjie'], uitleg: 'Kaart + je = kaartje. De t van kaart blijft staan, en het verkleinwoord eindigt op -je.' },
      { soort: 'hoofdletter', zin: 'Ze kookt vaak ___ gerechten, zoals moussaka.', goed: 'Griekse', fout: ['griekse', 'Grieckse'], uitleg: 'Grieks komt van Griekenland, een naam. Daarom krijgt het een hoofdletter.' },
      { soort: 'leenwoord', zin: 'Ze woont in een ___ op de bovenste verdieping.', goed: 'appartement', fout: ['apartement', 'appartemend'], uitleg: 'Appartement komt uit het Frans: twee p\'s aan het begin, en aan het eind een t.' },
      { soort: 'trema', zin: 'Vroeger ging ze elk jaar op vakantie naar ___.', goed: 'Kroatië', fout: ['Kroatie', 'Kroasië'], uitleg: 'Je zegt Kro-a-ti-ë. Het trema laat zien dat de e een eigen klankgroep is. Een land krijgt een hoofdletter.' }
    ],
    // Dag 25
    [
      { soort: 'klankgroepen', zin: 'Vliegen was lang een van de grootste ___ van de mens.', goed: 'dromen', fout: ['droomen', 'drommen'], uitleg: 'Dro-men: de o staat aan het eind van een klankgroep en klinkt lang, dus schrijf je er maar één.' },
      { soort: '-ig-lijk-isch', zin: 'De eerste vlucht duurde maar twaalf seconden, maar het was ___.', goed: 'geweldig', fout: ['geweldich', 'geweltig'], uitleg: 'Aan het eind hoor je ich, maar je schrijft -ig. Het komt van geweld, met een d.' },
      { soort: 'g-ch', zin: 'Het vliegtuigje maakte een scherpe ___ door de lucht.', goed: 'bocht', fout: ['bogt', 'bochd'], uitleg: 'Voor een t schrijf je ch: bocht. Maak het langer, bochten, dan hoor je een t.' },
      { soort: 'leenwoord', zin: 'De piloot zat in een open ___ en voelde de wind in zijn gezicht.', goed: 'cockpit', fout: ['kokpit', 'cockpitt'], uitleg: 'Cockpit is een Engels woord. De k-klank in het midden schrijf je als ck.' },
      { soort: 'meervoud', zin: 'Mijn vader vloog met twee ___ naar Londen voor zijn werk.', goed: 'collega\'s', fout: ['collegas', 'colega\'s'], uitleg: 'Collega eindigt op een lange a. Met alleen een s zou je collegas met een korte a lezen, dus schrijf je collega\'s. En er staan twee l\'en in.' },
      { soort: 'tussen-n', zin: 'Vroeger schreef men met een ___ en inkt.', goed: 'ganzenveer', fout: ['ganzeveer', 'gansenveer'], uitleg: 'Het meervoud van gans is ganzen, alleen met -en. Dan schrijf je in de samenstelling ook de n: ganzenveer.' },
      { soort: 'hoofdletter', zin: 'In 1927 vloog een piloot in zijn eentje over de ___.', goed: 'Atlantische Oceaan', fout: ['Atlantische oceaan', 'atlantische Oceaan'], uitleg: 'Atlantische Oceaan is de naam van één bepaalde oceaan. Daarom krijgen beide woorden een hoofdletter.' },
      { soort: 'koppelteken', zin: 'In opa\'s ___ zitten foto\'s van zijn eerste vlucht.', goed: 'fotoalbum', fout: ['foto-album', 'fotoälbum'], uitleg: 'Een koppelteken zet je alleen als je de klinkers verkeerd zou lezen, zoals bij zee-egel. Oa lees je niet als één klank, dus schrijf je fotoalbum aan elkaar.' }
    ],
    // Dag 26
    [
      { soort: 'klankgroepen', zin: 'Op de boerderij lopen de ___ vrij rond.', goed: 'kippen', fout: ['kipen', 'kiepen'], uitleg: 'Kip-pen: je hoort een korte i, dus verdubbel je de p. Met één p zou je kie-pen lezen.' },
      { soort: '-tie', zin: 'Volgens de schrijver eet onze ___ al veel minder vlees.', goed: 'generatie', fout: ['generasie', 'generaatsie'], uitleg: 'Je hoort sie of tsie, maar je schrijft -tie: ge-ne-ra-tie.' },
      { soort: 'ei-ij', zin: 'In bonen en noten zitten veel ___.', goed: 'eiwitten', fout: ['ijwitten', 'eiwiten'], uitleg: 'Eiwit komt van ei en wit, met de korte ei. In het meervoud verdubbel je de t na de korte i: eiwit-ten.' },
      { soort: 'g-ch', zin: 'Ik eet ___ pannenkoeken zonder spek.', goed: 'graag', fout: ['graach', 'graagh'], uitleg: 'Aan het eind hoor je ch, maar graag schrijf je met een g. Dat moet je onthouden.' },
      { soort: 'tussen-n', zin: 'Vandaag aten we ___ in plaats van vlees.', goed: 'groentesoep', fout: ['groentensoep', 'groentessoep'], uitleg: 'Groente heeft twee meervouden: groenten en groentes. Dan schrijf je in de samenstelling geen n: groentesoep.' },
      { soort: 'hoofdletter', zin: 'Mijn vader kookte een ___ curry met kikkererwten.', goed: 'Indiase', fout: ['indiase', 'Indiaase'], uitleg: 'Indiaas komt van India, een land. Daarom een hoofdletter. In-di-a-se: de a klinkt lang aan het eind van een klankgroep, dus één a.' },
      { soort: '-ig-lijk-isch', zin: 'Groente uit een tuin zonder gif noem je ___.', goed: 'biologisch', fout: ['biologies', 'biolochisch'], uitleg: 'Woorden die eindigen op een ies-klank schrijf je met -isch, net als logisch.' },
      { soort: 'tussen-s', zin: 'Om half zes is het bij ons thuis ___.', goed: 'etenstijd', fout: ['etentijd', 'etenstijt'], uitleg: 'Je hoort een s tussen eten en tijd: etens-tijd. Tijd eindigt op een d, want je zegt tijden.' }
    ],
    // Dag 27
    [
      { soort: 'klankgroepen', zin: 'Bevers knagen met hun scherpe tanden aan ___.', goed: 'bomen', fout: ['boomen', 'bommen'], uitleg: 'Eén boom, twee bo-men. In het meervoud staat de o aan het eind van een klankgroep, dus schrijf je er maar één.' },
      { soort: 'verkleinwoord', zin: 'Een jonge bever is nog maar een klein ___.', goed: 'diertje', fout: ['dierje', 'diertjie'], uitleg: 'Na een lange klank met r krijg je -tje: dier wordt diertje.' },
      { soort: 'au-ou', zin: 'Met de scherpe ___ aan zijn poten graaft de bever gangen.', goed: 'klauwen', fout: ['klouwen', 'klauen'], uitleg: 'Klauw schrijf je met auw, net als blauw. In het meervoud blijft de w staan: klauwen.' },
      { soort: 'g-ch', zin: 'Een bever heeft een dikke vacht die hem warm en ___ houdt.', goed: 'droog', fout: ['drooch', 'droogh'], uitleg: 'Aan het eind hoor je ch, maar maak het langer: droge. Dan hoor je een g, dus schrijf je droog.' },
      { soort: 'hoofdletter', zin: 'Bevers leven in de ___, een natuurgebied met veel water.', goed: 'Biesbosch', fout: ['Biesbos', 'biesbosch'], uitleg: 'De Biesbosch is een naam, dus met een hoofdletter. Veel oude plaatsnamen houden hun oude spelling met -sch.' },
      { soort: 'bijvoeglijk', zin: 'In het bezoekerscentrum stond een ___ beeld van een bever.', goed: 'bronzen', fout: ['bronze', 'bronsen'], uitleg: 'Een beeld van brons is een bronzen beeld. Woorden die zeggen waarvan iets gemaakt is, krijgen -en, en de s wordt een z.' },
      { soort: '-tie', zin: 'De bevers zijn een echte ___ voor de bezoekers.', goed: 'attractie', fout: ['atractie', 'attraksie'], uitleg: 'At-trac-tie: twee t\'s aan het begin, en aan het eind -ctie, net als bij actie.' },
      { soort: 'koppelteken', zin: 'Ik stuurde een ___ naar het bezoekerscentrum met een vraag over bevers.', goed: 'e-mail', fout: ['email', 'e mail'], uitleg: 'E-mail schrijf je met een streepje na de e. Email zonder streepje is iets anders: een glazig laagje op een pan.' }
    ],
    // Dag 28
    [
      { soort: 'klankgroepen', zin: 'Op zolder stonden oude ___ vol spullen.', goed: 'dozen', fout: ['doozen', 'dozzen'], uitleg: 'Eén doos, twee do-zen. De o staat aan het eind van een klankgroep, dus één o. En de s wordt een z.' },
      { soort: '-ig-lijk-isch', zin: 'Het was een beetje ___ op de donkere zolder.', goed: 'akelig', fout: ['akelich', 'aakelig'], uitleg: 'A-ke-lig: de a staat aan het eind van een klankgroep, dus één a. Aan het eind schrijf je -ig.' },
      { soort: 'ei-ij', zin: 'In het kistje lag een brief met een groot ___.', goed: 'geheim', fout: ['geheijm', 'gehijm'], uitleg: 'Geheim schrijf je met de korte ei. Dat moet je onthouden.' },
      { soort: 'weetwoord', zin: 'In de kist lag een oude ___ van opa.', goed: 'hoed', fout: ['hoet', 'hoedt'], uitleg: 'Aan het eind hoor je een t, maar maak het langer: hoeden. Dan hoor je een d, dus schrijf je hoed.' },
      { soort: 'meervoud', zin: 'In de doos zaten opa\'s oude ___ vol aantekeningen.', goed: 'agenda\'s', fout: ['agendas', 'agendaas'], uitleg: 'Agenda eindigt op een lange a. Met alleen een s zou je agendas met een korte a lezen, dus schrijf je agenda\'s.' },
      { soort: 'hoofdletter', zin: 'Op een van de brieven zat een postzegel uit ___.', goed: 'Engeland', fout: ['engeland', 'Engelland'], uitleg: 'Een land krijgt een hoofdletter. En-ge-land: na de korte e komt ng, dus geen dubbele l.' },
      { soort: 'verkleinwoord', zin: 'In een doos vond ik een klein ___ van mijn vader.', goed: 'autootje', fout: ['autotje', 'auto\'tje'], uitleg: 'Auto eindigt op een lange o. Om die lang te houden schrijf je in het verkleinwoord twee o\'s: autootje.' },
      { soort: 'trema', zin: 'Opa had brieven bewaard uit ___, waar hij vroeger woonde.', goed: 'Australië', fout: ['Australie', 'Austraalië'], uitleg: 'Je zegt Au-stra-li-ë. Het trema laat zien dat de e een eigen klankgroep is.' }
    ],
    // Dag 29
    [
      { soort: 'klankgroepen', zin: 'Op het dak groeien tomaten, sla en ___.', goed: 'bonen', fout: ['boonen', 'bonnen'], uitleg: 'Eén boon, twee bo-nen. De o staat aan het eind van een klankgroep, dus schrijf je er maar één.' },
      { soort: 'verkleinwoord', zin: 'Elke leerling zaaide zaadjes in een eigen ___.', goed: 'bakje', fout: ['bakie', 'bakjie'], uitleg: 'Bak + je = bakje. Het verkleinwoord eindigt op -je, ook al zeg je soms bakkie.' },
      { soort: 'au-ou', zin: 'Op het dak kweken ze komkommers en ___.', goed: 'augurken', fout: ['ougurken', 'augurrken'], uitleg: 'Augurk schrijf je met au aan het begin, net als augustus. Dat moet je onthouden.' },
      { soort: 'g-ch', zin: 'De leerlingen woegen de oogst: het ___ was vijf kilo.', goed: 'gewicht', fout: ['gewigt', 'gewichd'], uitleg: 'Voor een t schrijf je ch: gewicht. Maak het langer, gewichten, dan hoor je een t.' },
      { soort: 'tussen-n', zin: 'Van de aardbeien op het dak maakten ze ___.', goed: 'aardbeienjam', fout: ['aardbeijam', 'aardbeiejam'], uitleg: 'Het meervoud van aardbei is aardbeien, alleen met -en. Dan schrijf je de n in de samenstelling ook: aardbeienjam.' },
      { soort: 'hoofdletter', zin: 'De directeur zei: "___ heel trots op jullie!"', goed: 'Ik ben', fout: ['ik ben', 'Ik Ben'], uitleg: 'Wat de directeur zegt, is een nieuwe zin. Het eerste woord krijgt een hoofdletter, de rest niet.' },
      { soort: '-ig-lijk-isch', zin: 'Het was een ___ gezicht: een groene tuin tussen de daken.', goed: 'fantastisch', fout: ['fantasties', 'fantastiesch'], uitleg: 'Woorden die eindigen op een ies-klank schrijf je met -isch: fantastisch, net als logisch.' },
      { soort: 'tussen-s', zin: 'In de ___ zorgde de buurman voor de tuin.', goed: 'herfstvakantie', fout: ['herfstsvakantie', 'herfsvakantie'], uitleg: 'Herfst + vakantie, zonder extra s: je hoort er geen tussen-s. Vergeet de t van herfst niet.' }
    ],
    // Dag 30
    [
      { soort: 'klankgroepen', zin: 'Ik hou al ___ van dinosaurussen, dus daar ging mijn spreekbeurt over.', goed: 'jaren', fout: ['jaaren', 'jarren'], uitleg: 'Eén jaar, twee ja-ren. De a staat aan het eind van een klankgroep, dus schrijf je er maar één.' },
      { soort: '-tie', zin: 'Met een ___ op het digibord laat je zien wat je bedoelt.', goed: 'illustratie', fout: ['illustrasie', 'ilustratie'], uitleg: 'Il-lu-stra-tie: twee l\'en aan het begin. Aan het eind hoor je sie, maar je schrijft -tie.' },
      { soort: 'ei-ij', zin: 'Wie ___ oefent, staat straks rustig voor de klas.', goed: 'ijverig', fout: ['eiverig', 'ijverich'], uitleg: 'IJver schrijf je met de lange ij. Dat moet je onthouden. Aan het eind schrijf je -ig.' },
      { soort: 'g-ch', zin: 'Kijk de klas aan met een vriendelijk ___.', goed: 'gezicht', fout: ['gezigt', 'gezichd'], uitleg: 'Voor een t schrijf je ch: gezicht. Maak het langer, gezichten, dan hoor je een t.' },
      { soort: 'meervoud', zin: 'Laat een paar ___ zien op het digibord, dat maakt het levendiger.', goed: 'dia\'s', fout: ['dias', 'diaas'], uitleg: 'Dia eindigt op een lange a. Met alleen een s zou je dias met een korte a lezen, dus schrijf je dia\'s.' },
      { soort: 'hoofdletter', zin: 'Mijn spreekbeurt ging over de ___, de beroemde schaatstocht.', goed: 'Elfstedentocht', fout: ['elfstedentocht', 'Elfstedetocht'], uitleg: 'De Elfstedentocht is de naam van één bepaalde tocht, dus met een hoofdletter. Elf steden: met een n.' },
      { soort: 'leenwoord', zin: 'Na de spreekbeurt kreeg ik een groot ___ van de klas.', goed: 'applaus', fout: ['aplaus', 'applous'], uitleg: 'Applaus komt uit het Latijn: twee p\'s, en de ou-klank schrijf je als au.' },
      { soort: 'koppelteken', zin: 'Ik liet een liedje horen op een oude ___.', goed: 'cd-speler', fout: ['cdspeler', 'CD-speler'], uitleg: 'Cd schrijf je met kleine letters. Plak je er een woord aan vast, dan zet je een koppelteken: cd-speler.' }
    ],
    // Dag 31
    [
      { soort: 'klankgroepen', zin: 'Langs de Rijn liggen veel oude ___.', goed: 'kastelen', fout: ['kasteelen', 'kasstelen'], uitleg: 'Eén kasteel, twee ka-ste-len. In het meervoud staat de e aan het eind van een klankgroep, dus schrijf je er maar één.' },
      { soort: '-ig-lijk-isch', zin: 'In de bergen stroomt het water heel ___.', goed: 'krachtig', fout: ['krachtich', 'kragtig'], uitleg: 'Kracht + ig: voor de t schrijf je ch, en aan het eind schrijf je -ig.' },
      { soort: 'ei-ij', zin: 'In de bergen stroomt de jonge Rijn over grote ___.', goed: 'keien', fout: ['kijen', 'keijen'], uitleg: 'Kei schrijf je met de korte ei. In het meervoud komt er alleen -en achter: keien.' },
      { soort: 'hoofdletter', zin: 'De Rijn ontspringt in de ___, hoge bergen in Zwitserland.', goed: 'Alpen', fout: ['alpen', 'Alppen'], uitleg: 'De Alpen is de naam van één bepaald gebergte, dus met een hoofdletter.' },
      { soort: 'tussen-n', zin: 'Langs de rivier ligt een oud ___.', goed: 'eikenbos', fout: ['eikebos', 'eikkenbos'], uitleg: 'Het meervoud van eik is eiken, alleen met -en. Dan schrijf je de n in de samenstelling ook: eikenbos.' },
      { soort: 'meervoud', zin: 'Tussen de hoge rotsen hoor je je stem in ___ terugkomen.', goed: 'echo\'s', fout: ['echos', 'echoos'], uitleg: 'Echo eindigt op een lange o. Met alleen een s zou je echos met een korte o lezen, dus schrijf je echo\'s.' },
      { soort: '-ig-lijk-isch', zin: 'Het Rijndal is een ___ gebied met oude kastelen.', goed: 'historisch', fout: ['histories', 'historiesch'], uitleg: 'Woorden die eindigen op een ies-klank schrijf je met -isch: historisch.' },
      { soort: 'tussen-s', zin: 'Vroeger voer er een ___ met wijn en hout over de Rijn.', goed: 'handelsschip', fout: ['handelschip', 'handelssschip'], uitleg: 'Handels + schip: je hoort een tussen-s, en schip begint ook met s. Dan schrijf je allebei: handelsschip.' }
    ],
    // Dag 32
    [
      { soort: 'dubbel', zin: 'Noor was zo ___ dat haar handen trilden.', goed: 'gespannen', fout: ['gespanen', 'gesspannen'], uitleg: 'Het komt van spannen. Na de korte a komen twee n\'en: ge-span-nen.' },
      { soort: '-ig-lijk-isch', zin: 'Noor speelde altijd ___, ook als haar team achterstond.', goed: 'eerlijk', fout: ['eerlek', 'erlijk'], uitleg: 'Eer + lijk: je hoort luk, maar je schrijft -lijk. Eer heeft een lange ee, dus twee e\'s.' },
      { soort: 'au-ou', zin: 'Noor trok haar ___ omhoog tot over haar scheenbeschermer.', goed: 'kous', fout: ['kaus', 'kouz'], uitleg: 'Kous schrijf je met ou. Dat moet je onthouden. Aan het eind staat een s.' },
      { soort: 'g-ch', zin: 'De bal vloog met een mooie ___ over de keeper heen.', goed: 'boog', fout: ['booch', 'boogh'], uitleg: 'Aan het eind hoor je ch, maar maak het langer: bogen. Dan hoor je een g, dus schrijf je boog.' },
      { soort: 'hoofdletter', zin: 'De tegenstander was een ___ club uit Leeuwarden.', goed: 'Friese', fout: ['friese', 'Friesse'], uitleg: 'Fries komt van Friesland, een naam. Daarom krijgt het een hoofdletter.' },
      { soort: 'meervoud', zin: 'Noor scoorde in ___ helften een doelpunt.', goed: 'beide', fout: ['beiden', 'beidde'], uitleg: 'Er staat een zelfstandig naamwoord achter: helften. Dan schrijf je beide. Beiden gebruik je alleen als het los staat en over mensen gaat: Ze scoorden beiden.' },
      { soort: 'leenwoord', zin: 'De ___ gaf Noor in de rust nog snel een tip.', goed: 'coach', fout: ['koots', 'coatch'], uitleg: 'Coach is een Engels woord. Je hoort koots, maar je schrijft c-o-a-c-h.' },
      { soort: 'trema', zin: 'Noor was ___ omdat de scheidsrechter haar doelpunt afkeurde.', goed: 'geïrriteerd', fout: ['geirriteerd', 'geïriteerd'], uitleg: 'Je zegt ge-ir-ri-teerd. Het trema op de i laat zien dat die niet bij de e hoort. Irriteren heeft twee r\'en.' }
    ],
    // Dag 33
    [
      { soort: 'klankgroepen', zin: 'Eerst waren boeken alleen voor rijke mensen, zoals ___.', goed: 'koningen', fout: ['konningen', 'kooningen'], uitleg: 'Ko-nin-gen: de o staat aan het eind van een klankgroep en klinkt lang, dus één o en één n.' },
      { soort: '-tie', zin: 'Elke nieuwe ___ van de krant werd voortaan gedrukt.', goed: 'editie', fout: ['edietie', 'editsie'], uitleg: 'Aan het eind hoor je tsie, maar je schrijft -tie: e-di-tie.' },
      { soort: 'au-ou', zin: 'Je kon de ___ van een boek ineens met veel mensen delen.', goed: 'inhoud', fout: ['inhaud', 'inhout'], uitleg: 'Inhoud komt van houden, met ou. Daarom eindigt het ook op een d.' },
      { soort: 'c-k-s', zin: 'Dankzij de drukpers ontstond ook de eerste ___.', goed: 'krant', fout: ['crant', 'krandt'], uitleg: 'Krant is een gewoon Nederlands woord: je schrijft gewoon een k. Aan het eind staat alleen een t.' },
      { soort: 'hoofdletter', zin: 'De eerste boeken van Gutenberg waren in het Latijn, niet in het ___.', goed: 'Duits', fout: ['duits', 'Duitsch'], uitleg: 'Talen schrijf je met een hoofdletter, want ze komen van een land: Duits komt van Duitsland.' },
      { soort: 'verkleinwoord', zin: 'Op elk ___ stond één letter in spiegelbeeld.', goed: 'blokje', fout: ['bloktje', 'blokie'], uitleg: 'Blok + je = blokje. Na een k krijgt het verkleinwoord -je.' },
      { soort: 'leenwoord', zin: 'In de ___ kun je duizenden boeken lenen.', goed: 'bibliotheek', fout: ['bieblioteek', 'bibliothek'], uitleg: 'Bi-bli-o-theek komt uit het Grieks: je schrijft i, geen ie, en aan het eind -theek met th.' },
      { soort: 'apostrof', zin: '___ broer las het boek over Gutenberg in één dag uit.', goed: 'Anna\'s', fout: ['Annas', 'Annas\''], uitleg: 'Anna eindigt op een lange a. Zonder apostrof zou je Annas met een korte a lezen. Daarom schrijf je Anna\'s broer.' }
    ],
    // Dag 34
    [
      { soort: 'klankgroepen', zin: 'Aan het ___ van het schooljaar kreeg ik een planner.', goed: 'begin', fout: ['beggin', 'beginn'], uitleg: 'Be-gin: de e staat aan het eind van een klankgroep, dus verdubbel je de g niet. Aan het eind staat één n.' },
      { soort: '-ig-lijk-isch', zin: 'Een planner is ___ om je huiswerk bij te houden.', goed: 'handig', fout: ['handich', 'hantig'], uitleg: 'Het komt van hand, met een d. Aan het eind hoor je ich, maar je schrijft -ig.' },
      { soort: 'ei-ij', zin: 'Thuis is er veel ___, zoals je telefoon en de tv.', goed: 'afleiding', fout: ['afleijding', 'aflijding'], uitleg: 'Afleiding komt van leiden, met de korte ei.' },
      { soort: 'g-ch', zin: 'Wie ___ een kwartier oefent, onthoudt meer.', goed: 'dagelijks', fout: ['dachelijks', 'dagelijk'], uitleg: 'Het komt van dag, met een g. Dagelijks eindigt op -lijks: elke dag.' },
      { soort: 'hoofdletter', zin: 'In ___ krijgen kinderen op de basisschool bijna geen huiswerk.', goed: 'Finland', fout: ['finland', 'Fienland'], uitleg: 'Een land krijgt een hoofdletter. Fin-land: korte i, dus geen ie.' },
      { soort: 'tussen-n', zin: 'Mijn schoolboeken staan netjes in de ___.', goed: 'boekenkast', fout: ['boekekast', 'boekkenkast'], uitleg: 'Het meervoud van boek is boeken, alleen met -en. Dan schrijf je de n in de samenstelling ook: boekenkast.' },
      { soort: '-ig-lijk-isch', zin: 'Je kunt ook ___ naar huiswerk kijken: is het echt nuttig?', goed: 'kritisch', fout: ['krities', 'kritiesch'], uitleg: 'Woorden die eindigen op een ies-klank schrijf je met -isch: kritisch.' },
      { soort: 'koppelteken', zin: 'Op de ___ legde de juf uit hoeveel huiswerk er komt.', goed: 'informatieavond', fout: ['informatie-avond', 'informatie avond'], uitleg: 'Een koppelteken zet je alleen als je de klinkers verkeerd zou lezen, zoals bij zee-egel. Ea lees je niet als één klank, dus schrijf je informatieavond aan elkaar.' }
    ],
    // Dag 35
    [
      { soort: 'klankgroepen', zin: 'In de herfst zie je vaak ___ in de tuin.', goed: 'egels', fout: ['eggels', 'eegels'], uitleg: 'E-gels: de e staat aan het eind van een klankgroep en klinkt lang, dus één e en één g.' },
      { soort: 'verkleinwoord', zin: 'De egel rolt zich op tot een stekelig ___.', goed: 'bolletje', fout: ['boltje', 'boletje'], uitleg: 'Na een korte klank met l krijg je -etje, en dan verdubbel je de l: bol wordt bolletje.' },
      { soort: 'ei-ij', zin: 'Een egel slaapt ___ de hele winter.', goed: 'bijna', fout: ['beina', 'bijnaa'], uitleg: 'Bijna schrijf je met de lange ij, net als bij. Aan het eind staat één a.' },
      { soort: 'au-ou', zin: 'In ___ worden vaak jonge egeltjes geboren.', goed: 'augustus', fout: ['Augustus', 'ougustus'], uitleg: 'Augustus begint met au. En maanden schrijf je in het Nederlands met een kleine letter.' },
      { soort: 'tussen-n', zin: 'Zet voor egels een bakje ___ neer in plaats van melk.', goed: 'kattenvoer', fout: ['kattevoer', 'katenvoer'], uitleg: 'Het meervoud van kat is katten, alleen met -en. Dan schrijf je de n in de samenstelling ook: kattenvoer.' },
      { soort: 'hoofdletter', zin: 'Het koudst is het meestal in ___ of februari.', goed: 'januari', fout: ['Januari', 'januarie'], uitleg: 'Maanden schrijf je in het Nederlands met een kleine letter. Januari eindigt op een i, niet op ie.' },
      { soort: 'c-k-s', zin: 'Egels eten slakken, wormen en ___.', goed: 'insecten', fout: ['insekten', 'inzecten'], uitleg: 'Insect schrijf je met c-t aan het eind, net als effect. De c klinkt hier als een k.' },
      { soort: 'bijvoeglijk', zin: 'Je kunt een egel laten slapen in een ___ doos met stro.', goed: 'kartonnen', fout: ['kartonne', 'kartonen'], uitleg: 'Een doos van karton is een kartonnen doos. Er komt -en achter, en na de korte o verdubbel je de n.' }
    ],
    // Dag 36
    [
      { soort: 'klankgroepen', zin: 'De ___ van de huizen waren wit van de sneeuw.', goed: 'daken', fout: ['dakken', 'daaken'], uitleg: 'Eén dak, twee da-ken. In het meervoud klinkt de a lang en staat hij aan het eind van een klankgroep, dus één a en één k.' },
      { soort: 'ei-ij', zin: 'Er stond een ___ wind en mijn wangen werden rood.', goed: 'ijzige', fout: ['eizige', 'ijziche'], uitleg: 'IJzig komt van ijs, met de lange ij. Aan het eind schrijf je -ig, en met een e erachter: ijzige.' },
      { soort: 'au-ou', zin: 'Mijn vingers zagen ___ van de kou.', goed: 'blauw', fout: ['blouw', 'blau'], uitleg: 'Blauw schrijf je met auw, net als dauw en flauw.' },
      { soort: 'g-ch', zin: 'Met de slee gingen we van de ___ in het park naar beneden.', goed: 'berg', fout: ['berch', 'berrg'], uitleg: 'Aan het eind hoor je ch, maar maak het langer: bergen. Dan hoor je een g, dus schrijf je berg.' },
      { soort: 'meervoud', zin: 'We bouwden in de tuin twee ___ van sneeuw.', goed: 'iglo\'s', fout: ['iglos', 'igloos'], uitleg: 'Iglo eindigt op een lange o. Met alleen een s zou je iglos met een korte o lezen, dus schrijf je iglo\'s.' },
      { soort: 'hoofdletter', zin: '"___, het sneeuwt!" riep mijn zusje toen ze het gordijn opendeed.', goed: 'Hé, kijk', fout: ['hé, kijk', 'Hé, Kijk'], uitleg: 'Wat iemand zegt, begint met een hoofdletter. Alleen het eerste woord krijgt die, ook als er een komma volgt.' },
      { soort: 'leenwoord', zin: 'Op het plein stond een kraam met warme ___.', goed: 'chocolademelk', fout: ['sjokolademelk', 'chokolademelk'], uitleg: 'Chocolade komt uit het Spaans. De sj-klank aan het begin schrijf je als ch, en de k-klank als c.' },
      { soort: 'koppelteken', zin: 'Het sneeuwde zo hard dat de ___ van school werd afgelast.', goed: 'gala-avond', fout: ['galaavond', 'gala avond'], uitleg: 'Gala en avond vormen één woord. Zonder streepje zou je galaavond met aa lezen. Daarom zet je een koppelteken tussen de twee a\'s.' }
    ],
    // Dag 37
    [
      { soort: 'klankgroepen', zin: 'De boer kijkt naar het weer voordat hij zijn ___ inzaait.', goed: 'akkers', fout: ['akers', 'aakkers'], uitleg: 'Ak-kers: je hoort een korte a, dus verdubbel je de k. Met één k zou je aa-kers lezen.' },
      { soort: '-ig-lijk-isch', zin: 'Na een week regen scheen ___ de zon weer.', goed: 'eindelijk', fout: ['eindelek', 'eindlijk'], uitleg: 'Eind + e + lijk: ein-de-lijk. Je hoort luk, maar je schrijft -lijk.' },
      { soort: 'au-ou', zin: 'De lucht werd ___ en het begon te regenen.', goed: 'grauw', fout: ['grouw', 'grau'], uitleg: 'Grauw betekent grijs en somber. Je schrijft het met auw, net als blauw.' },
      { soort: 'c-k-s', zin: 'Bij zwaar onweer kan de ___ uitvallen.', goed: 'elektriciteit', fout: ['electriciteit', 'elektrisiteit'], uitleg: 'In elektrisch schrijf je een k. Voor de i klinkt de c als s: elektri-ci-teit.' },
      { soort: 'hoofdletter', zin: 'De temperatuur meet je in graden ___.', goed: 'Celsius', fout: ['celsius', 'Selsius'], uitleg: 'Celsius is de naam van de man die deze schaal bedacht. Daarom een hoofdletter, en een c die als s klinkt.' },
      { soort: 'verkleinwoord', zin: 'Op het scherm zie je een ___ van de wolken, gemaakt vanuit de ruimte.', goed: 'fotootje', fout: ['fototje', 'foto\'tje'], uitleg: 'Foto eindigt op een lange o. Om die lang te houden schrijf je in het verkleinwoord twee o\'s: fotootje.' },
      { soort: 'meervoud', zin: 'Bij strenge vorst raken de ___ van auto\'s soms leeg.', goed: 'accu\'s', fout: ['accus', 'akku\'s'], uitleg: 'Accu eindigt op een lange u. Met alleen een s zou je accus met een korte u lezen, dus schrijf je accu\'s.' },
      { soort: 'tussen-s', zin: 'Gisteren raasde de eerste ___ over het land.', goed: 'herfststorm', fout: ['herfstorm', 'herfsstorm'], uitleg: 'Herfst + storm: de st van herfst blijft staan, en storm begint met st. Zo krijg je stst: herfststorm.' }
    ],
    // Dag 38
    [
      { soort: 'klankgroepen', zin: 'De ___ van de kerk luidden toen de boot van de Sint aankwam.', goed: 'klokken', fout: ['kloken', 'klookken'], uitleg: 'Klok-ken: je hoort een korte o, dus verdubbel je de k. Met één k zou je kloo-ken lezen.' },
      { soort: 'verkleinwoord', zin: 'In mijn schoen stopte ik een ___ voor de Sint.', goed: 'briefje', fout: ['brieffje', 'brievje'], uitleg: 'Brief + je = briefje. De f blijft gewoon staan.' },
      { soort: 'verkleinwoord', zin: 'Een Piet gaf me een ___.', goed: 'chocolaatje', fout: ['chocolatje', 'chocola\'tje'], uitleg: 'Chocola eindigt op een lange a. Om die lang te houden schrijf je in het verkleinwoord twee a\'s: chocolaatje.' },
      { soort: 'g-ch', zin: 'Vroeger zetten kinderen hun schoen bij de ___.', goed: 'kachel', fout: ['kagel', 'kachell'], uitleg: 'Kachel schrijf je met ch. Dat moet je onthouden. Aan het eind staat één l.' },
      { soort: 'hoofdletter', zin: 'In de woonkamer staat al een ___ met gekleurde lichtjes.', goed: 'kerstboom', fout: ['kersboom', 'Kerstboom'], uitleg: 'Kerst + boom: je hoort de t van kerst bijna niet, maar je schrijft hem wel. Een kerstboom is een gewoon woord, dus zonder hoofdletter.' },
      { soort: 'meervoud', zin: 'De boot van de Sint lag vol met ___.', goed: 'cadeaus', fout: ['cadeau\'s', 'cadeauws'], uitleg: 'Cadeau eindigt op -eau. Die drie letters lees je toch wel als o, dus je hebt geen apostrof nodig: cadeaus, net als bureaus.' },
      { soort: '-ig-lijk-isch', zin: 'Toen het hard begon te regenen, werd het een ___ boel.', goed: 'chaotische', fout: ['chaotiese', 'gaotische'], uitleg: 'Chaos begint met ch die als een g klinkt. Woorden met een ies-klank aan het eind schrijf je met -isch: chaotisch.' },
      { soort: 'trema', zin: 'Mijn broer pakte alle pepernoten. Wat een ___!', goed: 'egoïst', fout: ['egoist', 'egoïest'], uitleg: 'Je zegt e-go-ist. Zonder puntjes lees je oi als één klank. Het trema op de i laat zien dat er een nieuwe klankgroep begint.' }
    ],
    // Dag 39
    [
      { soort: 'klankgroepen', zin: 'In november stromen de ___ over van het regenwater.', goed: 'goten', fout: ['gotten', 'gooten'], uitleg: 'Eén goot, twee go-ten. De o staat aan het eind van een klankgroep, dus schrijf je er maar één.' },
      { soort: '-ig-lijk-isch', zin: 'Met kaarsjes aan is het binnen heel ___.', goed: 'huiselijk', fout: ['huisselijk', 'huiselek'], uitleg: 'Huis + e + lijk: hui-se-lijk. Je hoort luk, maar je schrijft -lijk.' },
      { soort: 'ei-ij', zin: 'De ___ en de weilanden zijn nat van de regen.', goed: 'heide', fout: ['hijde', 'heijde'], uitleg: 'Heide schrijf je met de korte ei. Dat moet je onthouden.' },
      { soort: 'weetwoord', zin: 'In november is het al om vijf uur ___.', goed: 'avond', fout: ['avont', 'aavond'], uitleg: 'Aan het eind hoor je een t, maar maak het langer: avonden. Dan hoor je een d, dus schrijf je avond.' },
      { soort: 'hoofdletter', zin: 'Eind oktober, met ___, verkleden sommige kinderen zich als spook.', goed: 'Halloween', fout: ['halloween', 'Haloween'], uitleg: 'Halloween is de naam van een feest, dus met een hoofdletter. Het is Engels: twee l\'en en twee e\'s.' },
      { soort: 'bijvoeglijk', zin: 'Onder mijn trui draag ik een ___ shirt.', goed: 'katoenen', fout: ['katoene', 'kattoenen'], uitleg: 'Een shirt van katoen is een katoenen shirt. Woorden die zeggen waarvan iets gemaakt is, krijgen -en.' },
      { soort: 'tussen-n', zin: 'Van de koude wind kreeg ik ___.', goed: 'kippenvel', fout: ['kippevel', 'kipenvel'], uitleg: 'Het meervoud van kip is kippen, alleen met -en. Dan schrijf je de n in de samenstelling ook: kippenvel.' },
      { soort: 'trema', zin: 'De dichter wilde het gedicht met een vrolijke regel ___.', goed: 'beëindigen', fout: ['beeindigen', 'be-eindigen'], uitleg: 'Be + eindigen. Zonder puntjes lees je bee-indigen. Het trema op de e laat zien dat de ei een nieuwe klankgroep begint.' }
    ],
    // Dag 40
    [
      { soort: 'klankgroepen', zin: 'Bovenop de vulkaan zie je grote ___.', goed: 'kraters', fout: ['kratters', 'kraaters'], uitleg: 'Kra-ters: de a staat aan het eind van een klankgroep en klinkt lang, dus één a en één t.' },
      { soort: '-tie', zin: 'Bij een ___ vliegen stenen en as de lucht in.', goed: 'explosie', fout: ['explotie', 'eksplosie'], uitleg: 'Pas op: explosie schrijf je met -sie, niet met -tie. En de ks-klank aan het begin schrijf je als x.' },
      { soort: 'trema', zin: 'In ___ zijn meer dan honderd vulkanen.', goed: 'Indonesië', fout: ['Indonesie', 'indonesië'], uitleg: 'Je zegt In-do-ne-si-ë. Het trema laat zien dat de e een eigen klankgroep is. Een land krijgt een hoofdletter.' },
      { soort: 'meervoud', zin: 'De onderzoekers werkten in ___ op de helling van de vulkaan.', goed: 'duo\'s', fout: ['duos', 'duoos'], uitleg: 'Duo eindigt op een lange o. Met alleen een s zou je duos met een korte o lezen, dus schrijf je duo\'s.' },
      { soort: 'weetwoord', zin: 'Door de hete lava ontstond een grote ___ in het bos.', goed: 'brand', fout: ['brant', 'brandd'], uitleg: 'Aan het eind hoor je een t, maar maak het langer: branden. Dan hoor je een d, dus schrijf je brand.' },
      { soort: '-ig-lijk-isch', zin: 'De uitbarsting was een ___ gebeurtenis voor het dorp.', goed: 'dramatische', fout: ['dramatiese', 'dramatiesche'], uitleg: 'Woorden die eindigen op een ies-klank schrijf je met -isch: dramatisch, en met een e erachter dramatische.' },
      { soort: 'leenwoord', zin: 'Op het journaal zag ik een ___ met een vulkaanonderzoeker.', goed: 'interview', fout: ['interfjoe', 'intervieuw'], uitleg: 'Interview is een Engels woord. Je hoort fjoe aan het eind, maar je schrijft -view.' },
      { soort: 'ei-ij', zin: 'De ___ van het hotel bij de vulkaan moest alle gasten wegsturen.', goed: 'eigenaar', fout: ['ijgenaar', 'eigenaer'], uitleg: 'Eigenaar komt van eigen, met de korte ei. Aan het eind schrijf je -aar.' }
    ],
    // Dag 41
    [
      { soort: 'klankgroepen', zin: 'Mijn ___ deden pijn van het lopen naast mijn fiets.', goed: 'benen', fout: ['beenen', 'bennen'], uitleg: 'Eén been, twee be-nen. De e staat aan het eind van een klankgroep, dus schrijf je er maar één.' },
      { soort: 'verkleinwoord', zin: 'Er zat een klein ___ in mijn achterband.', goed: 'gaatje', fout: ['gatje', 'gaattje'], uitleg: 'Gat heeft een korte a, maar in het verkleinwoord wordt hij lang: gaatje. Zo zeg je het ook.' },
      { soort: 'ei-ij', zin: 'Het was ___ dat de fietsenmaker meteen tijd had.', goed: 'fijn', fout: ['fein', 'fijnn'], uitleg: 'Fijn schrijf je met de lange ij. Dat moet je onthouden.' },
      { soort: 'g-ch', zin: 'Ook mijn ___ deed het niet meer.', goed: 'achterlicht', fout: ['agterlicht', 'achterligt'], uitleg: 'Voor een t schrijf je ch, en dat gebeurt hier twee keer: ach-ter-licht.' },
      { soort: 'hoofdletter', zin: '"Dat wordt een nieuwe band," zei de fietsenmaker, "___ kost twintig euro."', goed: 'en dat', fout: ['En dat', 'en Dat'], uitleg: 'De fietsenmaker gaat verder met dezelfde zin. Na zei de fietsenmaker begint dus geen nieuwe zin, en daarom geen hoofdletter.' },
      { soort: '-ig-lijk-isch', zin: 'Met een kapotte fiets naar school lopen is ___.', goed: 'ellendig', fout: ['ellendich', 'elendig'], uitleg: 'El-len-dig: twee l\'en na de korte e. Aan het eind schrijf je -ig.' },
      { soort: '-ig-lijk-isch', zin: 'Mijn moeder heeft een ___ fiets.', goed: 'elektrische', fout: ['electrische', 'elektriese'], uitleg: 'Elektrisch schrijf je met een k. Woorden met een ies-klank aan het eind schrijf je met -isch.' },
      { soort: 'tussen-n', zin: 'Ik bracht mijn fiets naar de ___.', goed: 'fietsenmaker', fout: ['fietsemaker', 'fietsenmakker'], uitleg: 'Het meervoud van fiets is fietsen. De fietsenmaker maakt fietsen, dus schrijf je de n: fietsenmaker.' }
    ],
    // Dag 42
    [
      { soort: 'klankgroepen', zin: 'Met een ___ sloeg ik een spijker door het karton.', goed: 'hamer', fout: ['hammer', 'haamer'], uitleg: 'Ha-mer: de a staat aan het eind van een klankgroep en klinkt lang, dus één a en één m.' },
      { soort: '-ig-lijk-isch', zin: 'Mijn eerste surprise zag er ___ uit, maar deze is mooi.', goed: 'afschuwelijk', fout: ['afschuwlijk', 'afschouwelijk'], uitleg: 'Af-schu-we-lijk: je hoort een e voor -lijk, dus die schrijf je ook. Schuw schrijf je met uw.' },
      { soort: 'au-ou', zin: 'Mijn surprise was een grote vis: een ___.', goed: 'kabeljauw', fout: ['kabeljouw', 'kabbeljauw'], uitleg: 'Kabeljauw schrijf je met auw aan het eind. Dat moet je onthouden.' },
      { soort: 'c-k-s', zin: 'Ik maakte een groene ___ met een grote bek.', goed: 'krokodil', fout: ['crocodil', 'krokkodil'], uitleg: 'Krokodil schrijf je in het Nederlands met twee k\'s. Kro-ko-dil: lange o\'s, dus geen dubbele k.' },
      { soort: 'hoofdletter', zin: 'Mijn surprise was een ___ tempel van karton.', goed: 'Japanse', fout: ['japanse', 'Japaanse'], uitleg: 'Japans komt van Japan, een naam. Daarom een hoofdletter. Ja-pan-se: na de korte a één a.' },
      { soort: 'tussen-n', zin: 'Op de kop van de haan zat een rode ___.', goed: 'hanenkam', fout: ['hanekam', 'haanenkam'], uitleg: 'Het meervoud van haan is hanen, alleen met -en. Dan schrijf je de n in de samenstelling ook: hanenkam.' },
      { soort: 'verkleinwoord', zin: 'In de surprise zat een klein ___ met een slotje.', goed: 'agendaatje', fout: ['agendatje', 'agenda\'tje'], uitleg: 'Agenda eindigt op een lange a. Om die lang te houden schrijf je in het verkleinwoord twee a\'s: agendaatje.' },
      { soort: 'trema', zin: 'Ik was voor mijn surprise ___ door een filmpje.', goed: 'geïnspireerd', fout: ['geinspireerd', 'geïnspireert'], uitleg: 'Je zegt ge-in-spi-reerd. Het trema op de i laat zien dat die niet bij de e hoort. Het voltooid deelwoord eindigt hier op een d.' }
    ],
    // Dag 43
    [
      { soort: 'klankgroepen', zin: 'Nederland heeft weinig ___, dus fietsen gaat makkelijk.', goed: 'heuvels', fout: ['heuvvels', 'heufels'], uitleg: 'Heu-vels: de eu staat aan het eind van een klankgroep, dus verdubbel je de v niet. Je hoort een v, geen f.' },
      { soort: '-ig-lijk-isch', zin: 'Fietsen is ___ voor het milieu en voor je gezondheid.', goed: 'gunstig', fout: ['gunstich', 'gunstieg'], uitleg: 'Gunst + ig: aan het eind hoor je ich, maar je schrijft -ig.' },
      { soort: 'ei-ij', zin: 'Bijna iedereen in Nederland heeft een ___ fiets.', goed: 'eigen', fout: ['ijgen', 'eige'], uitleg: 'Eigen schrijf je met de korte ei, net als eigenlijk. Vergeet de n aan het eind niet.' },
      { soort: 'g-ch', zin: 'Het hoogste punt van Nederland is niet erg ___.', goed: 'hoog', fout: ['hooch', 'hoogh'], uitleg: 'Aan het eind hoor je ch, maar maak het langer: hoge. Dan hoor je een g, dus schrijf je hoog.' },
      { soort: 'hoofdletter', zin: 'Ook in ___ wordt veel gefietst, bijvoorbeeld in Kopenhagen.', goed: 'Denemarken', fout: ['denemarken', 'Deenemarken'], uitleg: 'Een land krijgt een hoofdletter. De-ne-mar-ken: de e staat aan het eind van een klankgroep, dus één e.' },
      { soort: 'meervoud', zin: 'Op zondag fietsen veel ___ samen door de duinen.', goed: 'families', fout: ['familie\'s', 'familieën'], uitleg: 'Familie eindigt op een ie zonder klemtoon. Dan komt er alleen een s achter: families. Een apostrof is niet nodig.' },
      { soort: 'koppelteken', zin: 'In ___ wordt veel minder gefietst dan bij ons.', goed: 'Groot-Brittannië', fout: ['Groot Brittannië', 'Grootbrittannië'], uitleg: 'Groot-Brittannië is één naam die uit twee delen bestaat. Daartussen zet je een koppelteken, net als bij Noord-Holland.' },
      { soort: 'tussen-s', zin: 'Zelfs leden van het ___ worden weleens op de fiets gezien.', goed: 'koningshuis', fout: ['koninghuis', 'koningsshuis'], uitleg: 'Je hoort een s tussen koning en huis: konings-huis. Die s schrijf je ook, net als bij Koningsdag.' }
    ],
    // Dag 44
    [
      { soort: 'klankgroepen', zin: 'Oma zette ___ met warme chocolademelk op tafel.', goed: 'bekers', fout: ['bekkers', 'beekers'], uitleg: 'Be-kers: de e staat aan het eind van een klankgroep en klinkt lang, dus één e en één k.' },
      { soort: 'verkleinwoord', zin: 'Opa dronk een ___ wijn bij het eten.', goed: 'glaasje', fout: ['glasje', 'glaasie'], uitleg: 'Glas heeft een korte a, maar in het verkleinwoord wordt hij lang: glaasje. Net als bij gat en gaatje.' },
      { soort: 'au-ou', zin: 'Is dit pakje voor mij of voor ___ broer?', goed: 'jouw', fout: ['jou', 'jauw'], uitleg: 'Gaat het over iets van iemand, dan schrijf je jouw, met een w: jouw broer. Jou zonder w gebruik je in zinnen als: Ik zie jou.' },
      { soort: 'g-ch', zin: 'Pas ___ hoorde ik dat opa had aangebeld.', goed: 'achteraf', fout: ['agteraf', 'achterraf'], uitleg: 'Voor een t schrijf je ch: achter. Daarna komt af: ach-ter-af.' },
      { soort: 'hoofdletter', zin: 'Ik zei tegen oma: "___ voor het mooie cadeau!"', goed: 'Dank je wel', fout: ['dank je wel', 'Dank Je wel'], uitleg: 'Wat je letterlijk zegt, begint met een hoofdletter. Alleen het eerste woord krijgt die: Dank je wel.' },
      { soort: 'leenwoord', zin: 'In het pakje zat een ___ voor mijn potloden.', goed: 'etui', fout: ['etuie', 'etwie'], uitleg: 'Etui is een Frans woord. Je hoort e-twie, maar je schrijft e-t-u-i.' },
      { soort: 'trema', zin: 'Mijn oom is naar Canada ___, maar hij belde op pakjesavond.', goed: 'geëmigreerd', fout: ['geemigreerd', 'geëmmigreerd'], uitleg: 'Ge + emigreerd. Zonder puntjes lees je gee-migreerd. Het trema op de e laat zien dat er een nieuwe klankgroep begint.' },
      { soort: 'meervoud', zin: 'Ik pakte mijn cadeau als eerste uit, en daarna de ___.', goed: 'anderen', fout: ['andere', 'anderren'], uitleg: 'Hier staat anderen alleen, zonder zelfstandig naamwoord erachter, en het gaat over mensen. Dan schrijf je anderen, net als allen.' }
    ],
    // Dag 45
    [
      { soort: 'dubbel', zin: 'Bij Sinterklaas horen ___ koekjes zoals speculaas.', goed: 'gebakken', fout: ['gebaken', 'gebbakken'], uitleg: 'Het komt van bakken. Na de korte a komen twee k\'s: ge-bak-ken.' },
      { soort: '-ig-lijk-isch', zin: 'Sint-Nicolaas werd na zijn dood ___ verklaard.', goed: 'heilig', fout: ['heilich', 'hijlig'], uitleg: 'Heilig schrijf je met de korte ei. Aan het eind hoor je ich, maar je schrijft -ig.' },
      { soort: 'g-ch', zin: 'Bij elke surprise hoort een ___ met een grapje.', goed: 'gedicht', fout: ['gedigt', 'gedichd'], uitleg: 'Voor een t schrijf je ch: gedicht. Maak het langer, gedichten, dan hoor je een t.' },
      { soort: 'au-ou', zin: 'Volgens het verhaal gaf Sint-Nicolaas drie arme meisjes zakjes met ___.', goed: 'goudstukken', fout: ['gaudstukken', 'goutstukken'], uitleg: 'Goud schrijf je met ou, en het eindigt op een d: gouden. Die d blijft staan in goudstukken.' },
      { soort: 'hoofdletter', zin: 'De ___ kerstman is eigenlijk ook op Sinterklaas gebaseerd.', goed: 'Amerikaanse', fout: ['amerikaanse', 'Amerikanse'], uitleg: 'Amerikaans komt van Amerika, een naam, dus een hoofdletter. A-me-ri-kaan-se: hier hoor je een lange a voor de n, dus twee a\'s.' },
      { soort: 'meervoud', zin: 'Lees de eerste twee ___ over Sint-Nicolaas.', goed: 'alinea\'s', fout: ['alineas', 'alineaas'], uitleg: 'Alinea eindigt op een lange a. Met alleen een s zou je alineas met een korte a lezen, dus schrijf je alinea\'s.' },
      { soort: 'trema', zin: 'Ook op de eilanden in de ___, zoals Curaçao, wordt Sinterklaas gevierd.', goed: 'Caraïben', fout: ['Caraiben', 'Caraïeben'], uitleg: 'Je zegt Ca-ra-i-ben. Zonder puntjes lees je ai als één klank. Het trema laat zien dat de i een nieuwe klankgroep begint.' },
      { soort: 'weetwoord', zin: 'Sinterklaas draagt een mijter op zijn ___.', goed: 'hoofd', fout: ['hooft', 'hoovd'], uitleg: 'Aan het eind hoor je een t, maar maak het langer: hoofden. Dan hoor je een d, dus schrijf je hoofd.' }
    ],
    // Dag 46
    [
      { soort: 'klankgroepen', zin: 'Bruine ___ slapen een groot deel van de winter.', goed: 'beren', fout: ['beeren', 'berren'], uitleg: 'Eén beer, twee be-ren. De e staat aan het eind van een klankgroep, dus schrijf je er maar één.' },
      { soort: '-ig-lijk-isch', zin: 'In het voorjaar worden de dieren wakker en zijn ze erg ___.', goed: 'hongerig', fout: ['hongerich', 'hongrig'], uitleg: 'Honger + ig: hon-ge-rig. Je hoort de e van honger, dus die schrijf je ook. Aan het eind schrijf je -ig.' },
      { soort: 'ei-ij', zin: 'Een kikker overleeft in de modder zelfs ___ nachten.', goed: 'ijskoude', fout: ['eiskoude', 'ijskoute'], uitleg: 'IJskoud komt van ijs, met de lange ij. En koud eindigt op een d: koude.' },
      { soort: 'leenwoord', zin: 'Dieren in winterslaap gebruiken heel weinig ___.', goed: 'energie', fout: ['ennergie', 'enerzjie'], uitleg: 'Energie komt uit het Grieks. Je hoort zj, maar je schrijft een g. En er staat maar één n in.' },
      { soort: 'hoofdletter', zin: 'In ___ houden bruine beren een winterslaap in grotten.', goed: 'Canada', fout: ['canada', 'Kanada'], uitleg: 'Een land krijgt een hoofdletter. Canada schrijf je in het Nederlands met een c.' },
      { soort: 'meervoud', zin: 'Vogels zoals ___ houden geen winterslaap.', goed: 'kanaries', fout: ['kanarie\'s', 'kanarieën'], uitleg: 'Kanarie eindigt op een ie zonder klemtoon. Dan komt er alleen een s achter: kanaries. Een apostrof is niet nodig.' },
      { soort: 'trema', zin: 'In de herfst eet een beer extra veel ___.', goed: 'calorieën', fout: ['calorieen', 'caloriën'], uitleg: 'Eén calorie, twee calorie-en. Het trema op de laatste e laat zien dat daar een nieuwe klankgroep begint: calorieën.' },
      { soort: 'weetwoord', zin: 'Een slaapmuis slaapt ___ zeven maanden per jaar.', goed: 'gemiddeld', fout: ['gemiddelt', 'gemidelt'], uitleg: 'Het komt van midden, met twee d\'s. Maak het langer, gemiddelde, dan hoor je dat het eindigt op een d.' }
    ],
    // Dag 47
    [
      { soort: 'klankgroepen', zin: 'We zochten het pakje overal, zelfs onder de ___ van de bank.', goed: 'kussens', fout: ['kusens', 'kussenns'], uitleg: 'Kus-sens: je hoort een korte u, dus verdubbel je de s. Met één s zou je kuu-sens lezen.' },
      { soort: '-ig-lijk-isch', zin: 'Het pakje was ___ niet echt verloren.', goed: 'gelukkig', fout: ['gelukig', 'gelukkich'], uitleg: 'Het komt van geluk. Na de korte u komen twee k\'s: ge-luk-kig. Aan het eind schrijf je -ig.' },
      { soort: 'ei-ij', zin: 'Achter de emmer en de ___ lag het pakje.', goed: 'dweil', fout: ['dwijl', 'dweijl'], uitleg: 'Dweil schrijf je met de korte ei. Dat moet je onthouden.' },
      { soort: 'weetwoord', zin: 'Het pakje lag onder het ___ in de logeerkamer.', goed: 'bed', fout: ['bet', 'bedd'], uitleg: 'Aan het eind hoor je een t, maar maak het langer: bedden. Dan hoor je een d, dus schrijf je bed.' },
      { soort: 'hoofdletter', zin: '"___ het pakje!" riep mijn zus vanaf zolder.', goed: 'Hier ligt', fout: ['hier ligt', 'Hier Ligt'], uitleg: 'Wat je zus roept, is een nieuwe zin. Alleen het eerste woord krijgt een hoofdletter.' },
      { soort: 'meervoud', zin: 'We zochten op alle ___ van het grote huis.', goed: 'etages', fout: ['etage\'s', 'etagen'], uitleg: 'Etage eindigt op een toonloze e. Dan komt er alleen een s achter, zonder apostrof: etages, net als garages.' },
      { soort: 'tussen-s', zin: 'Voor de grap kreeg mijn broertje ___: een avond geen tablet!', goed: 'gevangenisstraf', fout: ['gevangenistraf', 'gevangenissstraf'], uitleg: 'Gevangenis + straf: gevangenis eindigt op een s, en straf begint met een s. Dan schrijf je ze allebei: gevangenisstraf.' },
      { soort: 'verkleinwoord', zin: 'In het pakje zat een klein houten ___ voor in bad.', goed: 'kanootje', fout: ['kanotje', 'kano\'tje'], uitleg: 'Kano eindigt op een lange o. Om die lang te houden schrijf je in het verkleinwoord twee o\'s: kanootje.' }
    ],
    // Dag 48
    [
      { soort: 'klankgroepen', zin: 'Het plastic komt van ___ die mensen weggooien.', goed: 'flessen', fout: ['flesen', 'fleessen'], uitleg: 'Fles-sen: je hoort een korte e, dus verdubbel je de s. Met één s zou je flee-sen lezen.' },
      { soort: '-ig-lijk-isch', zin: 'Een plastic tasje kan ___ zijn voor een schildpad.', goed: 'dodelijk', fout: ['doodelijk', 'dodelek'], uitleg: 'Do-de-lijk: de o staat aan het eind van een klankgroep, dus één o. Aan het eind schrijf je -lijk.' },
      { soort: 'ei-ij', zin: 'Iedereen kan een kleine ___ leveren door minder plastic te gebruiken.', goed: 'bijdrage', fout: ['beidrage', 'bijdraage'], uitleg: 'Bijdrage is bij + drage, en bij schrijf je met de lange ij. Dra-ge: één a.' },
      { soort: 'c-k-s', zin: 'Plastic heeft een slecht ___ op het leven in zee.', goed: 'effect', fout: ['effekt', 'efect'], uitleg: 'Effect schrijf je met ff en aan het eind ct, net als insect en direct.' },
      { soort: 'bijvoeglijk', zin: 'Gebruik een fles met een ___ dop in plaats van een plastic dop.', goed: 'kurken', fout: ['kurke', 'kurrken'], uitleg: 'Een dop van kurk is een kurken dop. Woorden die zeggen waarvan iets gemaakt is, krijgen -en.' },
      { soort: 'hoofdletter', zin: 'Ook in de ___ drijft veel plastic.', goed: 'Indische Oceaan', fout: ['Indische oceaan', 'indische Oceaan'], uitleg: 'Indische Oceaan is de naam van één bepaalde oceaan. Daarom krijgen beide woorden een hoofdletter.' },
      { soort: 'tussen-s', zin: 'Ook het ___ moet minder plastic gebruiken.', goed: 'bedrijfsleven', fout: ['bedrijfleven', 'bedrijvsleven'], uitleg: 'Je hoort een s tussen bedrijf en leven: bedrijfs-leven. Die s schrijf je ook. Bedrijf eindigt op een f.' },
      { soort: 'trema', zin: 'Sommige ___ kunnen misschien plastic afbreken.', goed: 'bacteriën', fout: ['bacterieën', 'bacterien'], uitleg: 'Eén bacterie, twee bacteri-en. Het trema op de e laat zien dat die niet bij de i hoort. Er komt maar één e.' }
    ],
    // Dag 49
    [
      { soort: 'klankgroepen', zin: 'In de gymles springen we over de ___.', goed: 'bokken', fout: ['boken', 'bocken'], uitleg: 'Bok-ken: je hoort een korte o, dus verdubbel je de k. Met één k zou je boo-ken lezen.' },
      { soort: '-tie', zin: 'Mijn ___ is om later profvoetballer te worden.', goed: 'ambitie', fout: ['ambisie', 'ambietie'], uitleg: 'Aan het eind hoor je sie, maar je schrijft -tie: am-bi-tie. En je schrijft i, geen ie.' },
      { soort: 'au-ou', zin: 'Tijdens de gymles mag je geen ___ in je mond hebben.', goed: 'kauwgom', fout: ['kouwgom', 'kaugom'], uitleg: 'Kauwgom komt van kauwen, met auw. Daarna komt gom.' },
      { soort: 'hoofdletter', zin: 'Elk jaar doen we mee aan de ___ op het schoolplein.', goed: 'Koningsspelen', fout: ['koningsspelen', 'Koningspelen'], uitleg: 'De Koningsspelen zijn de naam van een bepaald sportfeest, dus met een hoofdletter. Konings + spelen: twee s\'en.' },
      { soort: 'meervoud', zin: 'Bijna iedereen vond een uur gym een goed plan; slechts ___ waren ertegen.', goed: 'enkelen', fout: ['enkele', 'enkellen'], uitleg: 'Hier staat enkelen alleen, zonder zelfstandig naamwoord erachter, en het gaat over mensen. Dan schrijf je -en, net als allen.' },
      { soort: 'leenwoord', zin: 'In de pauze speelden we ___ op het plein.', goed: 'basketbal', fout: ['basketball', 'baskedbal'], uitleg: 'Basketbal komt uit het Engels, maar in het Nederlands schrijf je bal met één l.' },
      { soort: 'koppelteken', zin: 'Een ___ turnen kwam ons een les geven.', goed: 'ex-kampioen', fout: ['exkampioen', 'ex kampioen'], uitleg: 'Na ex zet je altijd een koppelteken, net als na oud in oud-leerling: ex-kampioen.' },
      { soort: 'tussen-s', zin: 'Bij het voetballen kreeg ik de ___ om mijn arm.', goed: 'aanvoerdersband', fout: ['aanvoerderband', 'aanvoerdersbant'], uitleg: 'Je hoort een s tussen aanvoerder en band: aanvoerders-band. Band eindigt op een d, want je zegt banden.' }
    ],
    // Dag 50
    [
      { soort: 'klankgroepen', zin: 'Fleming liet de bakjes in zijn ___ staan toen hij op vakantie ging.', goed: 'kamer', fout: ['kammer', 'kaamer'], uitleg: 'Ka-mer: de a staat aan het eind van een klankgroep en klinkt lang, dus één a en één m.' },
      { soort: '-tie', zin: 'Penicilline helpt tegen een ___.', goed: 'infectie', fout: ['infektie', 'infeksie'], uitleg: 'Je hoort ksie, maar je schrijft -ctie, net als bij actie en instructie.' },
      { soort: 'ei-ij', zin: 'De schimmel had een bijzondere ___: hij doodde bacteriën.', goed: 'eigenschap', fout: ['ijgenschap', 'eigensgap'], uitleg: 'Eigenschap komt van eigen, met de korte ei. Aan het eind schrijf je -schap.' },
      { soort: 'hoofdletter', zin: 'Fleming werkte in een ___ ziekenhuis in Londen.', goed: 'Britse', fout: ['britse', 'Brittse'], uitleg: 'Brits komt van Brittannië, een naam. Daarom een hoofdletter.' },
      { soort: 'c-k-s', zin: 'Penicilline was het eerste ___.', goed: 'antibioticum', fout: ['antibiotikum', 'antiebioticum'], uitleg: 'Antibioticum komt uit het Latijn en eindigt op -cum, met een c die als k klinkt.' },
      { soort: 'tussen-n', zin: 'Fleming vond zijn ontdekking geen ___, maar puur geluk.', goed: 'heldendaad', fout: ['heldedaad', 'heldentaad'], uitleg: 'Het meervoud van held is helden, alleen met -en. Dan schrijf je de n in de samenstelling ook: heldendaad.' },
      { soort: 'verkleinwoord', zin: 'Fleming had het ___ van een bakje laten openstaan.', goed: 'dekseltje', fout: ['dekselje', 'deksseltje'], uitleg: 'Na een toonloze e met l krijg je -tje: deksel wordt dekseltje.' },
      { soort: 'tussen-s', zin: 'De ontdekking veranderde de ___ voorgoed.', goed: 'gezondheidszorg', fout: ['gezondheidzorg', 'gezondheitszorg'], uitleg: 'Je hoort een s tussen gezondheid en zorg. Die s schrijf je ook. Gezondheid eindigt op een d.' }
    ],
    // Dag 51
    [
      { soort: 'klankgroepen', zin: 'Daan wist alles over ___ en hun dammen.', goed: 'bevers', fout: ['bevvers', 'beevers'], uitleg: 'Be-vers: de e staat aan het eind van een klankgroep en klinkt lang, dus één e en één v.' },
      { soort: '-ig-lijk-isch', zin: 'Daan hielp ___ een klasgenoot met rekenen.', goed: 'geduldig', fout: ['geduldich', 'gedultig'], uitleg: 'Het komt van geduld, met een d. Aan het eind hoor je ich, maar je schrijft -ig.' },
      { soort: 'au-ou', zin: 'Aan zijn ___ zag je dat hij zich niet op zijn gemak voelde.', goed: 'houding', fout: ['hauding', 'houdding'], uitleg: 'Houding komt van houden, met ou. Er staat maar één d in.' },
      { soort: 'g-ch', zin: 'Daan was een ___ jongen die eerst nadacht voordat hij iets zei.', goed: 'bedachtzame', fout: ['bedagtzame', 'bedachtsame'], uitleg: 'Bedachtzaam komt van bedacht: voor de t schrijf je ch. Daarna komt -zaam, met een z.' },
      { soort: 'hoofdletter', zin: 'Daan bleek ook ___ te spreken, de taal van zijn oma.', goed: 'Arabisch', fout: ['arabisch', 'Arrabisch'], uitleg: 'Talen schrijf je met een hoofdletter. A-ra-bisch: de a\'s staan aan het eind van een klankgroep, dus geen dubbele r.' },
      { soort: 'leenwoord', zin: 'De ___ koos Daans tekening als winnaar van de wedstrijd.', goed: 'jury', fout: ['juurie', 'jurie'], uitleg: 'Jury is een leenwoord. Je hoort ie aan het eind, maar je schrijft een y, net als bij baby.' },
      { soort: 'trema', zin: 'In de zomer gaat Daan graag ___ met zijn vader.', goed: 'kanoën', fout: ['kanoen', 'kano-en'], uitleg: 'Je zegt ka-no-en. Zonder puntjes lees je oe als één klank. Het trema op de e laat zien dat er een nieuwe klankgroep begint.' },
      { soort: 'koppelteken', zin: 'Daan legde uit welke ___ je nodig hebt voor een scherpe foto.', goed: 'camera-instelling', fout: ['camerainstelling', 'camera instelling'], uitleg: 'Camera en instelling vormen één woord. Zonder streepje zou je ai als één klank lezen. Daarom zet je een koppelteken tussen de a en de i.' }
    ],
    // Dag 52
    [
      { soort: 'ei-ij', zin: 'Voor Sinterklaas heb ik een lange ___ gemaakt.', goed: 'verlanglijst', fout: ['verlangleist', 'verlanglijs'], uitleg: 'Lijst schrijf je met de lange ij. En maak je het langer, lijsten, dan hoor je de t ook.' },
      { soort: 'meervoud', zin: 'Op het feestje kreeg iedereen twee ___.', goed: 'lolly\'s', fout: ['lollys', 'lollies'], uitleg: 'Lolly eindigt op een y die klinkt als ie. Dan zet je een apostrof voor de s: lolly\'s, net als baby\'s.' },
      { soort: 'tussen-s', zin: 'Pizza is mijn ___.', goed: 'lievelingseten', fout: ['lievelingeten', 'lievelingsseten'], uitleg: 'Je hoort een s tussen lieveling en eten, dus schrijf je die: lievelingseten.' },
      { soort: 'g-ch', zin: 'Doe het ___ uit als je de kamer verlaat.', goed: 'licht', fout: ['ligt', 'lichd'], uitleg: 'Licht met ch is wat een lamp geeft. Ligt met g is van het werkwoord liggen.' },
      { soort: 'verkleinwoord', zin: 'Op het bankje in het park zat een klein ___ met een hondje.', goed: 'omaatje', fout: ['oma\'tje', 'omatje'], uitleg: 'Oma eindigt op een lange a. In het verkleinwoord schrijf je dan twee a\'s: omaatje, net als parapluutje.' },
      { soort: 'klankgroepen', zin: 'In de schuur staan twee lange ___ tegen de muur.', goed: 'ladders', fout: ['laders', 'laaders'], uitleg: 'Lad-ders: je hoort een korte a. Om die kort te houden, verdubbel je de d.' },
      { soort: 'koppelteken', zin: 'Mijn neefjes zijn een ___ tweeling: ze lijken niet op elkaar.', goed: 'twee-eiige', fout: ['tweeëiige', 'tweeeiige'], uitleg: 'In een samenstelling waar twee klinkers botsen, zoals twee en eiige, zet je een koppelteken, geen trema.' },
      { soort: '-tie', zin: 'Ik riep drie keer, maar er kwam geen enkele ___.', goed: 'reactie', fout: ['reaksie', 'reactsie'], uitleg: 'Aan het eind hoor je ksie, maar je schrijft -ctie: re-ac-tie, net als bij actie en selectie.' }
    ],
    // Dag 53
    [
      { soort: 'hoofdletter', zin: 'Om de vier jaar kijken we op tv naar de ___.', goed: 'Olympische Spelen', fout: ['olympische spelen', 'Olympische spelen'], uitleg: 'De Olympische Spelen is de naam van één bepaald toernooi. Daarom krijgen beide woorden een hoofdletter.' },
      { soort: 'leenwoord', zin: 'Om twaalf uur eten we onze ___ in de klas.', goed: 'lunch', fout: ['lunsj', 'lunc'], uitleg: 'Lunch komt uit het Engels. De sj-klank aan het eind schrijf je als ch.' },
      { soort: 'tussen-n', zin: 'Na het eten poets ik mijn tanden met een ___.', goed: 'tandenborstel', fout: ['tandeborstel', 'tantenborstel'], uitleg: 'Tand heeft als meervoud alleen tanden. Dan schrijf je in een samenstelling ook de n: tandenborstel.' },
      { soort: 'au-ou', zin: 'Het badwater was niet warm en niet koud, maar ___.', goed: 'lauw', fout: ['louw', 'lau'], uitleg: 'Lauw schrijf je met auw. Ezelsbruggetje: lauw rijmt op blauw, en die schrijf je allebei met au.' },
      { soort: '-ig-lijk-isch', zin: 'Die som vond ik heel ___; ik snapte er niets van.', goed: 'lastig', fout: ['lastich', 'lastug'], uitleg: 'Aan het eind hoor je ug of ich, maar je schrijft -ig. Maak het langer om te checken: lastige.' },
      { soort: 'trema', zin: 'De ___ in de wachtkamer moest lang op de dokter wachten.', goed: 'patiënt', fout: ['patient', 'patiënd'], uitleg: 'Je zegt pa-sjie-ent. Het trema op de e laat zien dat er na ie een nieuwe klankgroep begint.' },
      { soort: 'weetwoord', zin: '___ gaat het morgen sneeuwen, maar het kan ook regenen.', goed: 'Misschien', fout: ['Misschein', 'Mischien'], uitleg: 'Misschien schrijf je met dubbel s en ie aan het eind. Dit woord moet je gewoon onthouden.' },
      { soort: 'bijvoeglijk', zin: 'Mijn vader draagt een zwarte ___ jas.', goed: 'leren', fout: ['leer', 'leeren'], uitleg: 'Is iets van een stof gemaakt, zoals leer? Dan krijgt het -en: een leren jas. Le-ren: lange e aan het eind, dus één e.' }
    ],
    // Dag 54
    [
      { soort: 'ei-ij', zin: 'Mijn vader moest vanochtend lang op de ___ wachten.', goed: 'trein', fout: ['trijn', 'treijn'], uitleg: 'Trein schrijf je met de korte ei, net als plein en klein. Ei of ij hoor je niet, dus dit woord moet je onthouden.' },
      { soort: 'meervoud', zin: 'Op de shirts van de spelers staan verschillende ___.', goed: 'logo\'s', fout: ['logos', 'logoos'], uitleg: 'Logo eindigt op een lange o. Zonder apostrof zou je logos lezen met een korte o, dus schrijf je logo\'s.' },
      { soort: 'tussen-s', zin: 'Op 4 mei legden we bloemen bij het ___.', goed: 'oorlogsmonument', fout: ['oorlogmonument', 'oorlochsmonument'], uitleg: 'Je hoort een s tussen oorlog en monument, dus schrijf je die. Oorlog blijft gewoon op een g eindigen.' },
      { soort: 'g-ch', zin: 'Een ___ zoemde de hele nacht om mijn oor.', goed: 'mug', fout: ['much', 'mugg'], uitleg: 'Mug eindigt op een g. Maak het langer: muggen. Dan hoor je de g.' },
      { soort: 'verkleinwoord', zin: 'In de keuken staat een klein ___ waarop we naar het nieuws luisteren.', goed: 'radiootje', fout: ['radio\'tje', 'radiotje'], uitleg: 'Radio eindigt op een lange o. In het verkleinwoord verdubbel je die: radiootje.' },
      { soort: 'klankgroepen', zin: 'De herder telde \'s avonds al zijn ___.', goed: 'schapen', fout: ['schaapen', 'schappen'], uitleg: 'Scha-pen: de a staat aan het eind van een klankgroep en klinkt lang. Dan schrijf je er maar één.' },
      { soort: 'dubbel', zin: 'De twee lijnen lopen ___: ze raken elkaar nooit.', goed: 'parallel', fout: ['paralel', 'parrallel'], uitleg: 'Parallel heeft in het midden dubbel l en aan het eind één l. De r is enkel. Dit woord moet je onthouden.' },
      { soort: 'apostrof', zin: 'Mijn opa doet ___ altijd een dutje op de bank.', goed: '\'s middags', fout: ['smiddags', 's\'middags'], uitleg: '\'s middags is een korte vorm van "des middags". De apostrof staat voor de s, en daarna komt een spatie.' }
    ],
    // Dag 55
    [
      { soort: 'ei-ij', zin: 'Na de lange wandeling had ik ___ in mijn voeten.', goed: 'pijn', fout: ['pein', 'peijn'], uitleg: 'Pijn schrijf je met de lange ij. Ei of ij kun je niet horen, dus dit moet je onthouden.' },
      { soort: 'leenwoord', zin: 'Met deze ___ kun je de was drogen.', goed: 'machine', fout: ['masjine', 'machiene'], uitleg: 'Machine komt uit het Frans. De sj-klank schrijf je als ch, en de ie-klank als één i.' },
      { soort: 'tussen-n', zin: 'In het bos vonden we een enorme ___.', goed: 'mierenhoop', fout: ['mierehoop', 'mierenhop'], uitleg: 'Mier heeft als meervoud alleen mieren. Dan schrijf je de n ook in de samenstelling: mierenhoop.' },
      { soort: 'au-ou', zin: 'De ___ in het park liet zijn prachtige veren zien.', goed: 'pauw', fout: ['pouw', 'pau'], uitleg: 'Pauw schrijf je met auw. Au of ou moet je onthouden; denk aan pauw en blauw.' },
      { soort: '-ig-lijk-isch', zin: 'Het was een ___ verhaal; ik moest er bijna van huilen.', goed: 'verdrietig', fout: ['verdrietich', 'verdrietieg'], uitleg: 'Je hoort ug of ich, maar je schrijft -ig, met een korte i. Check: een verdrietige film.' },
      { soort: 'trema', zin: 'In de dierentuin keken we naar de ___ die op hun buik over het ijs gleden.', goed: 'pinguïns', fout: ['pinguins', 'pinquïns'], uitleg: 'Je zegt pin-gu-ins. Zonder trema zou je ui lezen, zoals in huis. Het trema laat zien: hier begint een nieuwe klankgroep.' },
      { soort: 'koppelteken', zin: 'Op de radio luisterden we naar een ___ van het concert.', goed: 'radio-uitzending', fout: ['radiouitzending', 'radioüitzending'], uitleg: 'Radio en uitzending botsen met o en u. In een samenstelling zet je dan een koppelteken.' },
      { soort: 'apostrof', zin: '___ hebben we als eerste altijd rekenen.', goed: '\'s Maandags', fout: ['\'S maandags', 'S\'maandags'], uitleg: 'Aan het begin van de zin krijgt de m de hoofdletter, niet de s: \'s Maandags.' }
    ],
    // Dag 56
    [
      { soort: 'hoofdletter', zin: 'Op ___ eten we de oliebollen op die over zijn.', goed: 'Nieuwjaarsdag', fout: ['nieuwjaarsdag', 'Nieuwjaardag'], uitleg: 'Nieuwjaarsdag is een feestdag, dus met een hoofdletter. Je hoort een s tussen nieuwjaar en dag.' },
      { soort: 'meervoud', zin: 'Op kerstavond kwamen allebei mijn ___ bij ons eten.', goed: 'oma\'s', fout: ['omas', 'omaas'], uitleg: 'Oma eindigt op een lange a. Zonder apostrof zou je omas lezen met een korte a, dus schrijf je oma\'s.' },
      { soort: 'tussen-s', zin: 'De herder bracht de schapen \'s avonds naar de ___.', goed: 'schaapskooi', fout: ['schaapkooi', 'schaapsskooi'], uitleg: 'Je hoort een s tussen schaap en kooi, dus schrijf je er één: schaapskooi.' },
      { soort: 'g-ch', zin: 'Na de val had ik een blauwe plek op mijn ___.', goed: 'rug', fout: ['ruch', 'rugh'], uitleg: 'Rug eindigt op een g. Maak het langer: ruggen. Dan hoor je de g.' },
      { soort: 'verkleinwoord', zin: 'Mijn zusje kreeg een ___ met acht toetsen voor haar verjaardag.', goed: 'pianootje', fout: ['piano\'tje', 'pianotje'], uitleg: 'Piano eindigt op een lange o. In het verkleinwoord verdubbel je die: pianootje.' },
      { soort: 'c-k-s', zin: 'De dokter schreef een ___ voor tegen de hoest.', goed: 'medicijn', fout: ['medisijn', 'medicein'], uitleg: 'In medicijn klinkt de c als een s, want er staat een i achter. En aan het eind schrijf je de lange ij.' },
      { soort: 'weetwoord', zin: 'Het is ___ tien minuten fietsen naar school.', goed: 'ongeveer', fout: ['ongever', 'ongefeer'], uitleg: 'Ongeveer schrijf je met een v en eindigt op -eer. Je hoort een lange e voor de r.' },
      { soort: '-tie', zin: 'Het was een lastige ___: we zaten vast in de lift.', goed: 'situatie', fout: ['situasie', 'situatsie'], uitleg: 'Je hoort sie of tsie, maar je schrijft -tie: situatie.' }
    ],
    // Dag 57
    [
      { soort: 'ei-ij', zin: 'Op het ___ voor het stadhuis staat een grote kerstboom.', goed: 'plein', fout: ['plijn', 'pleijn'], uitleg: 'Plein schrijf je met de korte ei. Een handig rijtje om te onthouden: trein, plein, klein.' },
      { soort: 'leenwoord', zin: 'Als ontbijt bakte papa een ___ met kaas.', goed: 'omelet', fout: ['omlet', 'ommelet'], uitleg: 'Omelet komt uit het Frans: o-me-let. De o staat aan het eind van een klankgroep, dus één m.' },
      { soort: 'tussen-n', zin: 'Na een avond buiten zat mijn arm vol ___.', goed: 'muggenbulten', fout: ['muggebulten', 'mugenbulten'], uitleg: 'Mug heeft als meervoud muggen. Dan schrijf je de n ook in de samenstelling: muggenbulten.' },
      { soort: 'au-ou', zin: 'Wortels kun je gekookt eten, maar ook ___.', goed: 'rauw', fout: ['rouw', 'rau'], uitleg: 'Rauw, dus niet gekookt, schrijf je met auw. Rouw met ou betekent verdriet als iemand is overleden.' },
      { soort: '-ig-lijk-isch', zin: 'Wees ___ met dat glas, het is heel dun.', goed: 'voorzichtig', fout: ['voorzichtich', 'voorzigtig'], uitleg: 'In het midden schrijf je ch voor de t: zicht. Aan het eind schrijf je -ig.' },
      { soort: 'trema', zin: 'Op de vloer van de Romeinse villa ligt een ___ van kleine steentjes.', goed: 'mozaïek', fout: ['mozaiek', 'mozaïk'], uitleg: 'Je zegt mo-za-iek. Zonder trema zou je ai lezen. Het trema op de i laat zien dat er een nieuwe klankgroep begint.' },
      { soort: 'dubbel', zin: 'Een ___ draait in een baan rond de aarde.', goed: 'satelliet', fout: ['sateliet', 'sattelliet'], uitleg: 'Satelliet schrijf je met één t en dubbel l: sa-tel-liet.' },
      { soort: 'bijvoeglijk', zin: 'In het paleis is een witte ___ trap.', goed: 'marmeren', fout: ['marmer', 'marmere'], uitleg: 'De trap is van marmer gemaakt. Dan krijgt het -en: een marmeren trap.' }
    ],
    // Dag 58
    [
      { soort: 'ei-ij', zin: 'De ___ in de dierentuin lag lui in de zon.', goed: 'tijger', fout: ['teiger', 'tijcher'], uitleg: 'Tijger schrijf je met de lange ij. Maak je het meervoud, tijgers, dan hoor je goed dat het een g is.' },
      { soort: 'meervoud', zin: 'Voor het klassenfeest bestelden we vijf grote ___.', goed: 'pizza\'s', fout: ['pizzas', 'pizzaas'], uitleg: 'Pizza eindigt op een a. Zonder apostrof lees je pizzas met een korte a, dus schrijf je pizza\'s.' },
      { soort: 'tussen-s', zin: 'Op het ___ stond dat je hier maar dertig mocht rijden.', goed: 'verkeersbord', fout: ['verkeerbord', 'verkeersbort'], uitleg: 'Je hoort een s tussen verkeer en bord, dus schrijf je die. Bord eindigt op een d: borden.' },
      { soort: 'g-ch', zin: 'De nieuwe deken voelt heerlijk ___ aan.', goed: 'zacht', fout: ['zagt', 'zachd'], uitleg: 'Voor een t schrijf je bijna altijd ch: zacht, licht, nacht.' },
      { soort: 'verkleinwoord', zin: 'Kijk, daar komt het ___ door de wolken!', goed: 'zonnetje', fout: ['zontje', 'zonetje'], uitleg: 'Na een korte klank met n krijg je -etje, en dan verdubbel je de n: zon wordt zonnetje.' },
      { soort: 'klankgroepen', zin: 'In Kinderdijk staan veel oude ___.', goed: 'molens', fout: ['mollens', 'moolens'], uitleg: 'Mo-lens: de o staat aan het eind van een klankgroep en klinkt lang. Dan schrijf je één o en één l.' },
      { soort: 'koppelteken', zin: 'Van de schoolmusical is een ___ gemaakt.', goed: 'video-opname', fout: ['videoopname', 'videoöpname'], uitleg: 'Video en opname botsen met o en o. In een samenstelling zet je dan een koppelteken, geen trema.' },
      { soort: 'apostrof', zin: '___ ga ik eerst ontbijten en daarna fiets ik naar school.', goed: '\'s Morgens', fout: ['\'S morgens', 'S\'morgens'], uitleg: 'Begint je zin met \'s morgens? Dan krijgt niet de s maar de m een hoofdletter: \'s Morgens.' }
    ],
    // Dag 59
    [
      { soort: 'hoofdletter', zin: 'Mijn neef woont in ___ en spreekt daar Limburgs.', goed: 'Maastricht', fout: ['maastricht', 'Maastrigt'], uitleg: 'Maastricht is de naam van een stad, dus met een hoofdletter. Voor de t schrijf je ch.' },
      { soort: 'meervoud', zin: 'In de muziekschool staan drie ___.', goed: 'piano\'s', fout: ['pianos', 'pianoos'], uitleg: 'Piano eindigt op een lange o. Met een apostrof blijft de o lang: piano\'s.' },
      { soort: 'tussen-n', zin: 'In de ___ drinken de juffen en meesters koffie.', goed: 'lerarenkamer', fout: ['lerarekamer', 'leraarenkamer'], uitleg: 'Leraar heeft als meervoud leraren. Dan schrijf je de n ook in de samenstelling: lerarenkamer.' },
      { soort: 'g-ch', zin: 'Het monster had maar één groot ___.', goed: 'oog', fout: ['ooch', 'og'], uitleg: 'Oog eindigt op een g: ogen. En je hoort een lange o aan het eind van een woord, dus schrijf je oo.' },
      { soort: 'verkleinwoord', zin: 'Op de verjaardagstaart stond een ___ van marsepein.', goed: 'zebraatje', fout: ['zebra\'tje', 'zebratje'], uitleg: 'Zebra eindigt op een lange a. In het verkleinwoord verdubbel je die: zebraatje.' },
      { soort: 'klankgroepen', zin: 'Ik gooide drie platte ___ over het water.', goed: 'stenen', fout: ['steenen', 'stennen'], uitleg: 'Ste-nen: de e staat aan het eind van een klankgroep en klinkt lang. Dan schrijf je er maar één.' },
      { soort: 'weetwoord', zin: 'Ik zat rustig te lezen, toen ___ het licht uitging.', goed: 'opeens', fout: ['op eens', 'opens'], uitleg: 'Opeens schrijf je als één woord. Je hoort een lange ee, dus schrijf je twee e\'s.' },
      { soort: 'bijvoeglijk', zin: 'Ik bewaar mijn knikkers in een ___ doosje.', goed: 'metalen', fout: ['metaal', 'mettalen'], uitleg: 'Het doosje is van metaal gemaakt. Dan krijgt het -en: metalen. Me-ta-len: lange a aan het eind, dus één a.' }
    ],
    // Dag 60
    [
      { soort: 'ei-ij', zin: 'Robin Hood schoot een ___ precies in het midden van het doel.', goed: 'pijl', fout: ['peil', 'pijll'], uitleg: 'Een pijl schiet je met een boog: lange ij. Peil met ei is iets heel anders, bijvoorbeeld de hoogte van het water.' },
      { soort: 'leenwoord', zin: 'Aan het ___ van de woonkamer hangt een lamp.', goed: 'plafond', fout: ['plafon', 'plavond'], uitleg: 'Plafond komt uit het Frans. Je hoort de d aan het eind niet, maar je schrijft hem wel.' },
      { soort: 'tussen-s', zin: 'Een witte ___ is het teken van vrede.', goed: 'vredesduif', fout: ['vrededuif', 'vreedesduif'], uitleg: 'Je hoort een s na vrede, dus schrijf je die: vredesduif. Vre-de: lange e aan het eind, dus één e.' },
      { soort: 'au-ou', zin: 'Bij de patat wil ik graag een bakje ___.', goed: 'saus', fout: ['sous', 'sauss'], uitleg: 'Saus schrijf je met au. Aan het eind komt maar één s.' },
      { soort: '-ig-lijk-isch', zin: 'Mijn oma is heel ___; ze gooit nooit eten weg.', goed: 'zuinig', fout: ['zuinich', 'zuinug'], uitleg: 'Aan het eind hoor je ug of ich, maar je schrijft -ig. Check: zuinige.' },
      { soort: 'trema', zin: 'Een walvis kan door alle ___ van de wereld zwemmen.', goed: 'zeeën', fout: ['zeeen', 'zeeëen'], uitleg: 'Zee + en = zeeën. Zonder trema zou je zeeen verkeerd lezen. Het trema laat zien dat er een nieuwe klankgroep begint.' },
      { soort: 'koppelteken', zin: 'Brazilië ligt in ___.', goed: 'Zuid-Amerika', fout: ['Zuid Amerika', 'zuid-Amerika'], uitleg: 'Bij een windrichting voor een naam zet je een koppelteken, en beide delen krijgen een hoofdletter.' },
      { soort: 'dubbel', zin: 'Een ___ is een duizendste deel van een meter.', goed: 'millimeter', fout: ['milimeter', 'millimetter'], uitleg: 'Milli betekent duizendste en schrijf je met dubbel l. Meter blijft gewoon meter.' }
    ],
    // Dag 61
    [
      { soort: 'hoofdletter', zin: 'Mijn opa en oma komen uit Polen; thuis spreken ze ___.', goed: 'Pools', fout: ['pools', 'Poolsch'], uitleg: 'Talen krijgen een hoofdletter, net als het land: Polen, Pools.' },
      { soort: 'meervoud', zin: 'In de rommelwinkel staan oude ___ uit de tijd van opa.', goed: 'radio\'s', fout: ['radios', 'radioos'], uitleg: 'Radio eindigt op een lange o. Met een apostrof blijft de o lang: radio\'s.' },
      { soort: 'tussen-n', zin: 'Op het strand vond ik een leeg ___.', goed: 'slakkenhuis', fout: ['slakkehuis', 'slakenhuis'], uitleg: 'Slak heeft als meervoud slakken. Dan schrijf je de n ook in de samenstelling: slakkenhuis.' },
      { soort: 'g-ch', zin: 'Bovenop het kasteel wapperde een grote ___.', goed: 'vlag', fout: ['vlach', 'vlagg'], uitleg: 'Vlag eindigt op een g. Maak het langer: vlaggen. Dan hoor je de g.' },
      { soort: 'verkleinwoord', zin: 'In het restaurant mochten we kiezen uit het ___ voor kinderen.', goed: 'menuutje', fout: ['menu\'tje', 'menutje'], uitleg: 'Menu eindigt op een lange u. In het verkleinwoord verdubbel je die: menuutje, net als parapluutje.' },
      { soort: 'c-k-s', zin: 'De trein vertrekt ___ om acht uur.', goed: 'precies', fout: ['presies', 'precis'], uitleg: 'Precies schrijf je met een c die als s klinkt, want er staat ie achter. Dit woord moet je onthouden.' },
      { soort: 'weetwoord', zin: 'Na school kom ik ___ naar huis.', goed: 'meteen', fout: ['met een', 'meeteen'], uitleg: 'Meteen, dus direct, schrijf je als één woord. Met een (los) betekent iets anders: met een fiets.' },
      { soort: '-tie', zin: 'Na de eerste ronde stond ik op de derde ___.', goed: 'positie', fout: ['posisie', 'positsie'], uitleg: 'Je hoort sie of tsie, maar je schrijft -tie: positie. De eerste s in het woord blijft gewoon een s.' }
    ],
    // Dag 62
    [
      { soort: 'ei-ij', zin: 'Na de ruzie had ik veel ___ van wat ik had gezegd.', goed: 'spijt', fout: ['speit', 'spijd'], uitleg: 'Spijt schrijf je met de lange ij. En je hoort een t aan het eind, dus schrijf je ook een t.' },
      { soort: 'leenwoord', zin: 'Ik had mijn zakgeld in mijn ___ gestopt.', goed: 'portemonnee', fout: ['portemonee', 'portomonnee'], uitleg: 'Portemonnee komt van het Franse porte-monnaie: iets om je geld in mee te dragen. Je schrijft porte- met een e, dubbel n en aan het eind ee.' },
      { soort: 'tussen-s', zin: 'Voor de wedstrijd zongen de spelers het ___.', goed: 'volkslied', fout: ['volklied', 'volksliet'], uitleg: 'Je hoort een s tussen volk en lied, dus schrijf je die. Lied eindigt op een d: liederen.' },
      { soort: 'au-ou', zin: 'In de ___ spelen we buiten op het schoolplein.', goed: 'pauze', fout: ['pouze', 'pause'], uitleg: 'Pauze schrijf je met au. En in het Nederlands schrijf je hier een z, niet de s van het Engelse pause.' },
      { soort: '-ig-lijk-isch', zin: 'Mijn broer is erg ___: zijn kamer ligt vol rommel.', goed: 'slordig', fout: ['slordich', 'slorduch'], uitleg: 'Aan het eind schrijf je -ig. Maak het langer om te checken: een slordige kamer.' },
      { soort: 'trema', zin: 'We liepen met z\'n ___ naar school.', goed: 'tweeën', fout: ['tweeen', 'twee-en'], uitleg: 'Twee + en = tweeën. Het trema op de laatste e laat zien dat er een nieuwe klankgroep begint.' },
      { soort: 'koppelteken', zin: 'In ___ wonen veel mensen die Limburgs spreken.', goed: 'Zuid-Limburg', fout: ['Zuid Limburg', 'zuid-Limburg'], uitleg: 'Bij een windrichting voor een naam zet je een koppelteken, en beide delen krijgen een hoofdletter.' },
      { soort: 'bijvoeglijk', zin: 'De cadeautjes zaten in ___ zakjes.', goed: 'papieren', fout: ['papier', 'pappieren'], uitleg: 'De zakjes zijn van papier gemaakt. Dan krijgt het -en: papieren zakjes.' }
    ],
    // Dag 63
    [
      { soort: 'ei-ij', zin: 'Een grijze ___ stond doodstil aan de rand van de sloot.', goed: 'reiger', fout: ['rijger', 'reicher'], uitleg: 'Reiger schrijf je met de korte ei. In het meervoud, reigers, hoor je dat er een g in zit.' },
      { soort: 'meervoud', zin: 'Ik heb al drie ___ van mijn hond gemaakt.', goed: 'video\'s', fout: ['videos', 'videoos'], uitleg: 'Video eindigt op een lange o. Met een apostrof blijft de o lang: video\'s.' },
      { soort: 'tussen-s', zin: 'De bus vertrekt vanaf het ___.', goed: 'stationsplein', fout: ['stationplein', 'stasionsplein'], uitleg: 'Je hoort een s tussen station en plein, dus schrijf je die: stationsplein.' },
      { soort: 'tussen-n', zin: 'Met de telescoop keken we naar de ___.', goed: 'sterrenhemel', fout: ['sterrehemel', 'sterenhemel'], uitleg: 'Ster heeft als meervoud sterren. Dan schrijf je de n ook in de samenstelling: sterrenhemel.' },
      { soort: 'verkleinwoord', zin: 'Ik maakte een kort ___ van mijn hond in de sneeuw.', goed: 'videootje', fout: ['video\'tje', 'videotje'], uitleg: 'Video eindigt op een lange o. In het verkleinwoord verdubbel je die: videootje.' },
      { soort: 'klankgroepen', zin: 'In de oude stad zijn de ___ smal en kronkelig.', goed: 'straten', fout: ['straaten', 'stratten'], uitleg: 'Stra-ten: de a staat aan het eind van een klankgroep en klinkt lang, dus schrijf je één a.' },
      { soort: 'weetwoord', zin: 'Of het nu regent of niet: ik ga ___ naar het feest.', goed: 'sowieso', fout: ['zowiezo', 'sowiezo'], uitleg: 'Sowieso komt uit het Duits en schrijf je met twee keer een s. Dit woord moet je onthouden.' },
      { soort: 'dubbel', zin: 'Veel ___ met je toets morgen!', goed: 'succes', fout: ['sukses', 'succses'], uitleg: 'Succes schrijf je met dubbel c, die klinkt als ks. Aan het eind komt maar één s.' }
    ],
    // Dag 64
    [
      { soort: 'hoofdletter', zin: 'Bij de bakker op de hoek kopen we vaak ___ brood.', goed: 'Turks', fout: ['turks', 'Turksch'], uitleg: 'Turks komt van Turkije, een land. Woorden die van een land komen, krijgen ook een hoofdletter.' },
      { soort: 'leenwoord', zin: 'De ___ ging open en de springer zweefde naar beneden.', goed: 'parachute', fout: ['parasjute', 'parachuut'], uitleg: 'Parachute komt uit het Frans. De sj-klank schrijf je als ch, en aan het eind schrijf je -ute.' },
      { soort: 'tussen-s', zin: 'Rond de oude stad staat nog een stuk van de ___.', goed: 'stadsmuur', fout: ['stadmuur', 'statsmuur'], uitleg: 'Je hoort een s tussen stad en muur, dus schrijf je die. Stad blijft stad, met een d.' },
      { soort: 'au-ou', zin: 'Bij het touwtrekken trokken twee teams aan een dik ___.', goed: 'touw', fout: ['tauw', 'tou'], uitleg: 'Touw schrijf je met ouw. Je hoort de w aan het eind, dus schrijf je die ook.' },
      { soort: '-ig-lijk-isch', zin: 'Wat een ___ hondje, hij is helemaal nat van de regen.', goed: 'zielig', fout: ['zielich', 'zieluch'], uitleg: 'Aan het eind hoor je ug of ich, maar je schrijft -ig. Check: een zielige hond.' },
      { soort: 'trema', zin: 'Mijn zusje is nog een beetje ___: ze gelooft alles wat je zegt.', goed: 'naïef', fout: ['naief', 'naiëf'], uitleg: 'Je zegt na-ief. Zonder trema zou je ai lezen. Daarom komt het trema op de i.' },
      { soort: 'c-k-s', zin: 'De boer reed met zijn ___ over het land.', goed: 'tractor', fout: ['traktor', 'tracktor'], uitleg: 'In tractor klinkt de c als een k, want er staat een t achter. Je schrijft geen k en ook geen ck.' },
      { soort: '-tie', zin: 'Ik had zo\'n honger dat ik nog een ___ patat nam.', goed: 'portie', fout: ['porsie', 'portsie'], uitleg: 'Je hoort sie of tsie, maar je schrijft -tie: portie.' }
    ],
    // Dag 65
    [
      { soort: 'ei-ij', zin: 'Mijn opa en oma maken deze winter een ___ naar Italië.', goed: 'reis', fout: ['rijs', 'reiz'], uitleg: 'Reis schrijf je met de korte ei. Aan het eind schrijf je een s, ook al heb je het over reizen.' },
      { soort: 'meervoud', zin: 'In de dierentuin liepen twee gestreepte ___.', goed: 'zebra\'s', fout: ['zebras', 'zebraas'], uitleg: 'Zebra eindigt op een lange a. Met een apostrof blijft de a lang: zebra\'s.' },
      { soort: 'leenwoord', zin: 'Mag ik even naar het ___?', goed: 'toilet', fout: ['twalet', 'toilett'], uitleg: 'Toilet komt uit het Frans. De wa-klank schrijf je als oi, en aan het eind komt maar één t.' },
      { soort: 'g-ch', zin: 'Die ___ kon ik niet beantwoorden, want hij was te moeilijk.', goed: 'vraag', fout: ['vraach', 'vrag'], uitleg: 'Vraag eindigt op een g: vragen. Aan het eind van een woord schrijf je een lange a als aa.' },
      { soort: 'verkleinwoord', zin: 'Mijn moeder draagt een gouden ___ om haar vinger.', goed: 'ringetje', fout: ['rinkje', 'ringgetje'], uitleg: 'Na een korte klank met ng krijg je -etje: ring wordt ringetje. Je verdubbelt hier niets.' },
      { soort: 'klankgroepen', zin: 'De trein reed door een lange, donkere ___.', goed: 'tunnel', fout: ['tunel', 'tunnell'], uitleg: 'Tun-nel: je hoort een korte u, dus verdubbel je de n. Aan het eind komt maar één l.' },
      { soort: 'koppelteken', zin: 'Eindhoven ligt in de provincie ___.', goed: 'Noord-Brabant', fout: ['Noord Brabant', 'noord-Brabant'], uitleg: 'Bij een windrichting voor een naam zet je een koppelteken, en beide delen krijgen een hoofdletter.' },
      { soort: 'apostrof', zin: 'Een uil jaagt alleen ___.', goed: '\'s nachts', fout: ['snachts', 's\'nachts'], uitleg: 'Eerst de apostrof, dan de s, dan een spatie: \'s nachts. Net als \'s ochtends.' }
    ],
    // Dag 66
    [
      { soort: 'ei-ij', zin: 'Aan de ___ van de klok zie je hoe laat het is.', goed: 'wijzers', fout: ['weizers', 'wijsers'], uitleg: 'Wijzer komt van wijzen, met de lange ij. Je hoort een z, dus schrijf je een z.' },
      { soort: 'meervoud', zin: 'Op de manege staan zes kleine ___.', goed: 'pony\'s', fout: ['ponys', 'ponies'], uitleg: 'Pony eindigt op een y die klinkt als ie. Dan zet je een apostrof voor de s: pony\'s.' },
      { soort: 'leenwoord', zin: 'Bij mijn ontbijt eet ik ___ met muesli.', goed: 'yoghurt', fout: ['joghurt', 'yogurt'], uitleg: 'Yoghurt begin je met een y en in het midden schrijf je gh. Dit woord moet je gewoon onthouden.' },
      { soort: 'tussen-n', zin: 'In New York staat de ene ___ naast de andere.', goed: 'wolkenkrabber', fout: ['wolkekrabber', 'wolkenkraber'], uitleg: 'Wolk heeft als meervoud alleen wolken. Dus schrijf je wolkenkrabber, met een n.' },
      { soort: 'verkleinwoord', zin: 'Op mijn trui staat een klein ___ van het merk.', goed: 'logootje', fout: ['logo\'tje', 'logotje'], uitleg: 'Logo eindigt op een lange o. In het verkleinwoord verdubbel je die: logootje.' },
      { soort: 'c-k-s', zin: 'Mijn moeder bakte de taart volgens het ___ van oma.', goed: 'recept', fout: ['resept', 'recep'], uitleg: 'In recept klinkt de c als een s, want er staat een e achter. Aan het eind hoor je een t, dus schrijf je die ook.' },
      { soort: 'weetwoord', zin: 'Ik heb nog nooit ___ grote sneeuwpop gezien!', goed: 'zo\'n', fout: ['zon', 'zo-n'], uitleg: 'Zo\'n is kort voor zo een. De apostrof laat zien dat er letters weg zijn. Zon zonder apostrof is de zon aan de hemel.' },
      { soort: 'bijvoeglijk', zin: 'Oma schonk thee uit een ___ theepot.', goed: 'porseleinen', fout: ['porselein', 'porseleine'], uitleg: 'De theepot is van porselein gemaakt. Dan krijgt het -en: een porseleinen theepot.' }
    ],
    // Dag 67
    [
      { soort: 'hoofdletter', zin: 'In de ___ wonen meer dan driehonderd miljoen mensen.', goed: 'Verenigde Staten', fout: ['verenigde staten', 'Verenigde staten'], uitleg: 'De Verenigde Staten is de naam van een land. Beide woorden krijgen een hoofdletter.' },
      { soort: 'leenwoord', zin: 'Met de navigatie vonden we de kortste ___.', goed: 'route', fout: ['roete', 'rout'], uitleg: 'Route komt uit het Frans. De oe-klank schrijf je als ou, en aan het eind komt een e.' },
      { soort: 'tussen-s', zin: 'Op de ___ zocht ik op waar Lissabon ligt.', goed: 'landkaart', fout: ['landskaart', 'lantkaart'], uitleg: 'Hier hoor je geen s tussen land en kaart. Dan schrijf je er ook geen: landkaart.' },
      { soort: 'au-ou', zin: 'Een hond is een ___ vriend: hij blijft altijd bij je.', goed: 'trouwe', fout: ['trauwe', 'trouwwe'], uitleg: 'Trouw schrijf je met ou. Er komt maar één w, ook als er een e achter komt: trouwe.' },
      { soort: '-ig-lijk-isch', zin: 'Voor het eten zeggen we tegen elkaar: "Eet ___!"', goed: 'smakelijk', fout: ['smakelek', 'smaakelijk'], uitleg: 'Aan het eind hoor je luk, maar je schrijft -lijk. Sma-ke: de a is lang en staat aan het eind, dus één a.' },
      { soort: 'trema', zin: 'Het is niet ___ om te denken dat je in één dag Frans leert.', goed: 'reëel', fout: ['reeel', 'reël'], uitleg: 'Je zegt re-eel. Het trema op de tweede e laat zien dat daar een nieuwe klankgroep begint.' },
      { soort: 'c-k-s', zin: 'Fietsen zonder licht in het donker is een groot ___.', goed: 'risico', fout: ['risiko', 'riesico'], uitleg: 'Risico eindigt op -co: de c klinkt als een k, want er staat een o achter. Dit woord moet je onthouden.' },
      { soort: 'dubbel', zin: 'In de zomer zitten we graag op het ___ van het café.', goed: 'terras', fout: ['teras', 'terrass'], uitleg: 'Ter-ras: je hoort een korte e, dus verdubbel je de r. Aan het eind van het woord komt maar één s.' }
    ],
    // Dag 68
    [
      { soort: 'ei-ij', zin: 'Bij de kip met saté aten we witte ___.', goed: 'rijst', fout: ['reist', 'rijs'], uitleg: 'Rijst, wat je eet, schrijf je met de lange ij. Reist met ei is van het werkwoord reizen.' },
      { soort: 'meervoud', zin: 'Voor de wintersport huurden we ___ en skischoenen.', goed: 'ski\'s', fout: ['skis', 'skies'], uitleg: 'Ski eindigt op een i die klinkt als ie. Zonder apostrof zou je skis lezen met een korte i, dus schrijf je ski\'s.' },
      { soort: 'tussen-s', zin: 'Mijn oma woont in een ___ met een klein tuintje.', goed: 'rijtjeshuis', fout: ['rijtjehuis', 'reitjeshuis'], uitleg: 'Je hoort een s na rijtje, dus schrijf je die: rijtjeshuis. Rij schrijf je met de lange ij.' },
      { soort: 'tussen-n', zin: 'Pas op voor dat ___ onder het dak!', goed: 'wespennest', fout: ['wespenest', 'wespennes'], uitleg: 'Wesp heeft als meervoud wespen. Wespen + nest: dan krijg je vanzelf twee keer een n.' },
      { soort: 'verkleinwoord', zin: 'Mijn knuffelbeer heeft een eigen ___ met sterretjes.', goed: 'pyjamaatje', fout: ['pyjama\'tje', 'pyjamatje'], uitleg: 'Pyjama eindigt op een lange a. In het verkleinwoord verdubbel je die: pyjamaatje.' },
      { soort: 'klankgroepen', zin: 'De ___ van de wedstrijd kreeg een grote beker.', goed: 'winnaar', fout: ['winaar', 'winnar'], uitleg: 'Win-naar: de i is kort, dus verdubbel je de n. Aan het eind hoor je een lange aa voor de r.' },
      { soort: 'koppelteken', zin: 'Frankrijk en België liggen in ___.', goed: 'West-Europa', fout: ['West Europa', 'west-Europa'], uitleg: 'Bij een windrichting voor een naam zet je een koppelteken, en beide delen krijgen een hoofdletter.' },
      { soort: '-tie', zin: 'Tussen twee woorden zet je een ___.', goed: 'spatie', fout: ['spasie', 'spatsie'], uitleg: 'Je hoort sie of tsie, maar je schrijft -tie: spatie.' }
    ],
    // Dag 69
    [
      { soort: 'ei-ij', zin: 'Op het ___ achter de boerderij grazen de koeien.', goed: 'weiland', fout: ['wijland', 'weilant'], uitleg: 'Wei schrijf je met de korte ei. Land eindigt op een d: landen. Samen wordt het weiland.' },
      { soort: 'meervoud', zin: 'De vraag was zo moeilijk dat maar ___ het goede antwoord wisten.', goed: 'weinigen', fout: ['weinige', 'wijnigen'], uitleg: 'Er staat geen zelfstandig naamwoord achter en je bedoelt mensen, dus schrijf je een n: weinigen.' },
      { soort: 'leenwoord', zin: 'Na het zwemmen waste ik mijn haar met ___.', goed: 'shampoo', fout: ['sjampoo', 'shampo'], uitleg: 'Shampoo komt uit het Engels. De sj-klank schrijf je als sh, en de oe-klank als oo.' },
      { soort: 'au-ou', zin: 'De ___ achter de kassa gaf me mijn wisselgeld.', goed: 'vrouw', fout: ['vrauw', 'frouw'], uitleg: 'Vrouw schrijf je met ouw. En het begint met een v, ook al klinkt die soms als een f.' },
      { soort: '-ig-lijk-isch', zin: 'De storm was ___: er waaiden bomen om.', goed: 'verschrikkelijk', fout: ['verschrikkelek', 'verschrikelijk'], uitleg: 'Schrik-ke: de i is kort, dus verdubbel je de k. Aan het eind schrijf je -lijk.' },
      { soort: 'trema', zin: 'De ___ opening van het nieuwe zwembad is op zaterdag.', goed: 'officiële', fout: ['officiele', 'offisiële'], uitleg: 'Officieel heeft geen trema, maar officiële wel: zonder trema zou je ie-le lezen. Je zegt of-fi-sjie-e-le.' },
      { soort: 'weetwoord', zin: 'Mijn broertje is ___ knuffel kwijt.', goed: 'z\'n', fout: ['zen', 'zun'], uitleg: 'Z\'n is kort voor zijn. De apostrof staat op de plek van de letters die weg zijn.' },
      { soort: 'bijvoeglijk', zin: 'De bloemen stonden in een oude ___ emmer.', goed: 'zinken', fout: ['zink', 'zinke'], uitleg: 'De emmer is van zink gemaakt. Dan krijgt het -en: een zinken emmer.' }
    ],
    // Dag 70
    [
      { soort: 'hoofdletter', zin: 'Bij het ___ kun je leren hoe je eerste hulp geeft.', goed: 'Rode Kruis', fout: ['rode kruis', 'Rode kruis'], uitleg: 'Het Rode Kruis is de naam van een organisatie. Beide woorden krijgen een hoofdletter.' },
      { soort: 'meervoud', zin: 'In de dierentuin zagen we twee ___ bamboe eten.', goed: 'panda\'s', fout: ['pandas', 'pandaas'], uitleg: 'Panda eindigt op een a. Met een apostrof blijft de a lang: panda\'s.' },
      { soort: 'tussen-s', zin: 'Op 1 januari springen veel mensen bij de ___ in de koude zee.', goed: 'nieuwjaarsduik', fout: ['nieuwjaarduik', 'niejaarsduik'], uitleg: 'Je hoort een s tussen nieuwjaar en duik, dus schrijf je die: nieuwjaarsduik.' },
      { soort: 'tussen-n', zin: 'Als het koud is, eet ik graag een kom ___.', goed: 'tomatensoep', fout: ['tomatesoep', 'tommatensoep'], uitleg: 'Tomaat heeft als meervoud tomaten. Dan schrijf je de n ook in de samenstelling: tomatensoep.' },
      { soort: 'verkleinwoord', zin: 'In de lente zagen we een ___ in de wei.', goed: 'lammetje', fout: ['lamtje', 'lametje'], uitleg: 'Na een korte klank met m, n, l of r krijg je -etje, en dan verdubbel je de medeklinker: lam wordt lammetje.' },
      { soort: 'klankgroepen', zin: 'Mijn ___ ging om zeven uur af.', goed: 'wekker', fout: ['weker', 'wekkerr'], uitleg: 'Wek-ker: je hoort een korte e, dus verdubbel je de k. Aan het eind komt maar één r.' },
      { soort: 'c-k-s', zin: 'Een blauwe vinvis zwemt door de ___.', goed: 'oceaan', fout: ['oseaan', 'ocean'], uitleg: 'In oceaan klinkt de c als een s, want er staat een e achter. Aan het eind schrijf je een lange aa.' },
      { soort: 'dubbel', zin: 'Mijn zus zit op ___ en speelt elke week een wedstrijd.', goed: 'tennis', fout: ['tenis', 'tennes'], uitleg: 'Ten-nis: je hoort een korte e, dus verdubbel je de n.' }
    ],
    // Dag 71
    [
      { soort: 'ei-ij', zin: 'Het ___ van de boot bolde op in de wind.', goed: 'zeil', fout: ['zijl', 'zeijl'], uitleg: 'Zeil schrijf je met de korte ei. Ei of ij moet je onthouden: zeil, zeilboot, zeilen.' },
      { soort: 'meervoud', zin: '___ kinderen vonden de les saai, maar de meesten vonden hem leuk.', goed: 'Sommige', fout: ['Sommigen', 'sommige'], uitleg: 'Hier staat kinderen erachter. Dan krijgt sommige geen n. Het is het begin van de zin, dus een hoofdletter.' },
      { soort: 'leenwoord', zin: 'Elke zaterdag rijd ik paard op de ___.', goed: 'manege', fout: ['manezje', 'maneege'], uitleg: 'Manege komt uit het Frans. De zj-klank schrijf je als g, net als in garage.' },
      { soort: 'au-ou', zin: 'Op de gladde stoep strooide de buurman ___.', goed: 'zout', fout: ['zaut', 'zoud'], uitleg: 'Zout schrijf je met ou. Woorden op -out schrijf je bijna altijd met ou: zout, hout, fout.' },
      { soort: '-ig-lijk-isch', zin: 'Mijn zus is altijd ___, zelfs op maandagochtend.', goed: 'vrolijk', fout: ['vrolek', 'vroolijk'], uitleg: 'Aan het eind hoor je luk, maar je schrijft -lijk. Vro-lijk: de o is lang en staat aan het eind, dus één o.' },
      { soort: 'trema', zin: 'Sporters eten vaak extra ___ voor hun spieren.', goed: 'proteïne', fout: ['proteine', 'proteïene'], uitleg: 'Je zegt pro-te-ie-ne. Zonder trema zou je ei lezen. Daarom komt het trema op de i.' },
      { soort: 'koppelteken', zin: 'In het nieuws ging het over een land in het ___.', goed: 'Midden-Oosten', fout: ['Midden Oosten', 'Midden-oosten'], uitleg: 'Het Midden-Oosten is een naam van een gebied. Je zet een koppelteken en beide delen krijgen een hoofdletter.' },
      { soort: '-tie', zin: 'De ___ van het voetbalteam wordt op vrijdag bekendgemaakt.', goed: 'selectie', fout: ['seleksie', 'selectsie'], uitleg: 'Je hoort ksie, maar je schrijft -ctie: selectie, net als reactie.' }
    ],
    // Dag 72
    [
      { soort: 'ei-ij', zin: 'Een wild ___ liep door het bos op zoek naar eikels.', goed: 'zwijn', fout: ['zwein', 'zweijn'], uitleg: 'Zwijn schrijf je met de lange ij. Schrijf nooit ei en ij tegelijk, zoals in zweijn.' },
      { soort: 'meervoud', zin: 'In de woonkamer van oma staan twee grote ___.', goed: 'sofa\'s', fout: ['sofas', 'sofaas'], uitleg: 'Sofa eindigt op een lange a. Met een apostrof blijft de a lang: sofa\'s.' },
      { soort: 'tussen-s', zin: 'Op ___ eten we oliebollen en kijken we naar het vuurwerk.', goed: 'oudejaarsavond', fout: ['oudejaaravond', 'Oudejaarsavond'], uitleg: 'Je hoort een s tussen oudejaar en avond, dus schrijf je die. Let op: oudejaarsavond krijgt geen hoofdletter.' },
      { soort: 'tussen-n', zin: 'In Frankrijk aten we warme ___ met kaas erop.', goed: 'uiensoep', fout: ['uiesoep', 'uiyensoep'], uitleg: 'Ui heeft als meervoud uien. Dan schrijf je de n ook in de samenstelling: uiensoep.' },
      { soort: '-ig-lijk-isch', zin: 'Roken is ___ voor je gezondheid.', goed: 'schadelijk', fout: ['schadelek', 'schaadelijk'], uitleg: 'Aan het eind hoor je luk, maar je schrijft -lijk. Scha-de: lange a aan het eind, dus één a.' },
      { soort: 'klankgroepen', zin: 'Op woensdag hebben we twee ___ muziek.', goed: 'lessen', fout: ['lesen', 'leessen'], uitleg: 'Les-sen: je hoort een korte e, dus verdubbel je de s.' },
      { soort: 'weetwoord', zin: 'Leuk dat je er bent! Heb je ___ je zwemspullen bij je?', goed: 'trouwens', fout: ['trauwens', 'trouwes'], uitleg: 'Trouwens komt van trouw, met ou. Het eindigt op -ens.' },
      { soort: 'bijvoeglijk', zin: 'Voor mijn verjaardag kreeg ik ___ wanten.', goed: 'wollen', fout: ['wol', 'wolle'], uitleg: 'De wanten zijn van wol gemaakt. Dan krijgt het -en, en omdat de o kort is, verdubbel je de l: wollen.' }
    ],
    // Dag 73
    [
      { soort: 'hoofdletter', zin: 'Mijn buurjongen heeft familie in Marokko; zijn moeder kookt vaak ___ eten.', goed: 'Marokkaans', fout: ['marokkaans', 'Marrokaans'], uitleg: 'Marokkaans komt van Marokko, een land, dus met een hoofdletter. Net als Marokko: één r, dubbel k.' },
      { soort: 'meervoud', zin: 'In Spanje staan veel witte ___ met een zwembad.', goed: 'villa\'s', fout: ['villas', 'villaas'], uitleg: 'Villa eindigt op een lange a. Met een apostrof blijft de a lang: villa\'s.' },
      { soort: 'leenwoord', zin: 'Na de wedstrijd kreeg de keeper een ___ op zijn pijnlijke schouder.', goed: 'massage', fout: ['massazje', 'masage'], uitleg: 'Massage komt uit het Frans. Je schrijft dubbel s, en de zj-klank aan het eind schrijf je als ge.' },
      { soort: 'au-ou', zin: 'Na het tillen van de zware doos had ik pijn in mijn ___.', goed: 'schouder', fout: ['schauder', 'schoudder'], uitleg: 'Schouder schrijf je met ou. Na de lange klank ou komt maar één d.' },
      { soort: 'g-ch', zin: 'Het weer was zo ___ dat we binnen bleven.', goed: 'slecht', fout: ['slegt', 'slechd'], uitleg: 'Voor een t schrijf je ch: slecht. Maak het langer, slechte, dan hoor je de t.' },
      { soort: 'trema', zin: 'Op de kaart zochten we waar ___ ligt.', goed: 'Oekraïne', fout: ['Oekraine', 'oekraïne'], uitleg: 'Je zegt oe-kra-ie-ne. Het trema op de i laat zien dat je geen ai leest. En het is een land, dus met een hoofdletter.' },
      { soort: 'c-k-s', zin: 'Een ___ heeft acht armen.', goed: 'octopus', fout: ['oktopus', 'octoppus'], uitleg: 'In octopus klinkt de c als een k, want er staat een t achter. Oc-to-pus: de o voor de p is lang, dus één p.' },
      { soort: 'dubbel', zin: 'Wat staat er vanavond op het ___?', goed: 'programma', fout: ['programa', 'progamma'], uitleg: 'Programma schrijf je met dubbel m aan het eind: pro-gram-ma.' }
    ],
    // Dag 74
    [
      { soort: 'ei-ij', zin: 'Een slak laat een spoor van ___ achter.', goed: 'slijm', fout: ['sleim', 'slijmm'], uitleg: 'Slijm schrijf je met de lange ij. Na een lange klank zoals ij verdubbel je de m niet.' },
      { soort: 'hoofdletter', zin: 'In Zeeland aten we verse ___ mosselen.', goed: 'Zeeuwse', fout: ['zeeuwse', 'Zeeuwsche'], uitleg: 'Zeeuwse komt van Zeeland, een provincie, dus krijgt het een hoofdletter.' },
      { soort: 'tussen-s', zin: 'Ik kocht een mooie ___ voor de verjaardag van opa.', goed: 'verjaardagskaart', fout: ['verjaardagkaart', 'verjaardachskaart'], uitleg: 'Je hoort een s tussen verjaardag en kaart, dus schrijf je die. Dag blijft dag, met een g.' },
      { soort: 'tussen-n', zin: 'In de schuur zette opa een ___, want er liepen muizen rond.', goed: 'muizenval', fout: ['muizeval', 'muisenval'], uitleg: 'Muis heeft als meervoud alleen muizen. Daarom schrijf je de n ook in de samenstelling: muizenval.' },
      { soort: 'verkleinwoord', zin: 'Doe het ___ maar open, het is hier warm.', goed: 'raampje', fout: ['raamtje', 'raampie'], uitleg: 'Na een m krijg je -pje: raam wordt raampje. Je hoort soms -pie, maar je schrijft -pje.' },
      { soort: 'c-k-s', zin: 'Twintig ___ van de kinderen komt met de fiets naar school.', goed: 'procent', fout: ['prosent', 'procend'], uitleg: 'In procent klinkt de c als een s, want er staat een e achter. Het eindigt op een t.' },
      { soort: 'koppelteken', zin: 'Mijn favoriete ___ begint om zeven uur.', goed: 'tv-programma', fout: ['tvprogramma', 'TV programma'], uitleg: 'Tv is een afkorting. Plak je er een woord aan vast, dan zet je een koppelteken: tv-programma.' },
      { soort: 'apostrof', zin: '___ schaatsen we op de vijver als het vriest.', goed: '\'s Winters', fout: ['\'S winters', 's\'Winters'], uitleg: 'Aan het begin van de zin krijgt de w de hoofdletter, niet de s: \'s Winters.' }
    ],
    // Dag 75
    [
      { soort: 'ei-ij', zin: 'De ridders verdedigden het kasteel tegen de ___.', goed: 'vijand', fout: ['veijand', 'vijant'], uitleg: 'Vijand schrijf je met de lange ij. Het meervoud is vijanden, dus eindigt het op een d.' },
      { soort: 'hoofdletter', zin: 'Met ___ zijn we op maandag vrij.', goed: 'Pinksteren', fout: ['pinksteren', 'Pingsteren'], uitleg: 'Pinksteren is een feestdag, net als Pasen en Kerstmis. Daarom krijgt het een hoofdletter.' },
      { soort: 'leenwoord', zin: 'De winnaar van de race kreeg een gouden ___.', goed: 'medaille', fout: ['medalje', 'medaije'], uitleg: 'Medaille komt uit het Frans. De aj-klank schrijf je als aille. Dit woord moet je onthouden.' },
      { soort: 'g-ch', zin: 'Opa zaagde de plank in tweeën met een scherpe ___.', goed: 'zaag', fout: ['zaach', 'zaagh'], uitleg: 'Zaag eindigt op een g. Maak het langer: zagen. Dan hoor je de g.' },
      { soort: '-ig-lijk-isch', zin: 'Na zo\'n lange dag ben je ___ moe.', goed: 'natuurlijk', fout: ['natuurlek', 'natuurlijck'], uitleg: 'Aan het eind hoor je luk, maar je schrijft -lijk. Na -lijk komt nooit ck.' },
      { soort: 'klankgroepen', zin: 'Van de kou kreeg ik droge, gebarsten ___.', goed: 'lippen', fout: ['lipen', 'liepen'], uitleg: 'Lip-pen: je hoort een korte i, dus verdubbel je de p. Liepen is van het werkwoord lopen.' },
      { soort: 'weetwoord', zin: 'Ik heb overal gezocht, maar mijn sleutel is ___ te vinden.', goed: 'nergens', fout: ['nerchens', 'nergends'], uitleg: 'Nergens schrijf je met een g en het eindigt op -ens, net als ergens.' },
      { soort: '-tie', zin: 'Dankzij de ___ is er altijd frisse lucht in het lokaal.', goed: 'ventilatie', fout: ['ventilasie', 'ventilatsie'], uitleg: 'Je hoort sie of tsie, maar je schrijft -tie: ventilatie.' }
    ],
    // Dag 76
    [
      { soort: 'hoofdletter', zin: 'Bij oma in Limburg aten we een stuk ___ vlaai.', goed: 'Limburgse', fout: ['limburgse', 'Limburgsche'], uitleg: 'Limburgse komt van Limburg, een provincie. Dan krijgt het ook een hoofdletter.' },
      { soort: 'meervoud', zin: 'In Londen en Parijs rijden de ___ onder de grond.', goed: 'metro\'s', fout: ['metros', 'metroos'], uitleg: 'Metro eindigt op een lange o. Met een apostrof blijft de o lang: metro\'s.' },
      { soort: 'leenwoord', zin: 'De ober bracht de drankjes op een groot ___.', goed: 'plateau', fout: ['plato', 'platoo'], uitleg: 'Plateau komt uit het Frans. De oo-klank aan het eind schrijf je als eau, net als in cadeau en niveau.' },
      { soort: 'au-ou', zin: 'Het hondje was ___ geweest en had een schoen kapotgebeten.', goed: 'stout', fout: ['staut', 'stoud'], uitleg: 'Stout schrijf je met ou. Maak je het langer, stoute, dan hoor je een t.' },
      { soort: 'g-ch', zin: 'Op zondag maakten we een lange ___ door de duinen.', goed: 'tocht', fout: ['togt', 'tochd'], uitleg: 'Voor een t schrijf je ch: tocht. Maak het langer, tochten, dan hoor je de t.' },
      { soort: 'trema', zin: 'Met een kompas heb je in het bos een goede ___.', goed: 'oriëntatie', fout: ['orientatie', 'oriëntasie'], uitleg: 'Je zegt o-rie-en-ta-tie. Het trema op de e laat zien dat je geen ie-en als één klank leest.' },
      { soort: 'c-k-s', zin: 'Na de voorstelling klapte het ___ heel hard.', goed: 'publiek', fout: ['publiec', 'pupliek'], uitleg: 'Publiek eindigt op -iek, met een k, net als muziek. En je schrijft een b: pu-bliek.' },
      { soort: 'bijvoeglijk', zin: 'Opa kreeg na veertig jaar werken een ___ horloge.', goed: 'zilveren', fout: ['zilver', 'zilvere'], uitleg: 'Het horloge is van zilver gemaakt. Dan krijgt het -en: een zilveren horloge.' }
    ],
    // Dag 77
    [
      { soort: 'ei-ij', zin: 'Voor het verven van de muur stond er een hoge ___ langs het huis.', goed: 'steiger', fout: ['stijger', 'steicher'], uitleg: 'Steiger schrijf je met de korte ei. In het meervoud, steigers, hoor je een g.' },
      { soort: 'meervoud', zin: 'Op de kinderboerderij lopen twee ___ met een dikke vacht.', goed: 'lama\'s', fout: ['lamas', 'lamaas'], uitleg: 'Lama eindigt op een lange a. Met een apostrof blijft de a lang: lama\'s.' },
      { soort: 'tussen-s', zin: 'De ___ voor het museum was tien euro.', goed: 'toegangsprijs', fout: ['toegangprijs', 'toegansprijs'], uitleg: 'Je hoort een s tussen toegang en prijs, dus schrijf je die: toegangsprijs.' },
      { soort: 'tussen-n', zin: 'Een ___ draait zijn bloem steeds naar de zon.', goed: 'zonnebloem', fout: ['zonnenbloem', 'zonebloem'], uitleg: 'Er is maar één zon. Daarom schrijf je hier geen tussen-n, net als bij zonnebril.' },
      { soort: '-ig-lijk-isch', zin: 'In het regenwoud is het warm en vochtig: het heeft een ___ klimaat.', goed: 'tropisch', fout: ['tropies', 'tropis'], uitleg: 'Je hoort ies, maar zulke bijvoeglijke naamwoorden eindigen op -isch: tropisch, logisch, praktisch.' },
      { soort: 'klankgroepen', zin: 'Op de ___ staan oude dozen met kerstspullen.', goed: 'zolder', fout: ['zoldder', 'zoolder'], uitleg: 'Zol-der: de o is kort en er staan al twee medeklinkers achter. Dan hoef je niets te verdubbelen.' },
      { soort: 'koppelteken', zin: 'Het ___ was op, dus ik moest een nieuwe rol halen.', goed: 'wc-papier', fout: ['wcpapier', 'WC papier'], uitleg: 'Wc is een afkorting. Plak je er een woord aan vast, dan zet je een koppelteken: wc-papier.' },
      { soort: 'dubbel', zin: 'Er kwam een groot ___ met de post.', goed: 'pakket', fout: ['paket', 'pakkett'], uitleg: 'Pak-ket: je hoort een korte a, dus verdubbel je de k. Aan het eind komt maar één t.' }
    ],
    // Dag 78
    [
      { soort: 'ei-ij', zin: 'Ik plakte de foto\'s met ___ in mijn plakboek.', goed: 'lijm', fout: ['leim', 'lijmm'], uitleg: 'Lijm schrijf je met de lange ij. Na een lange klank verdubbel je de m niet.' },
      { soort: 'hoofdletter', zin: 'Oma bekeek mijn rapport en zei: "___, wat ben ik trots op jou!"', goed: 'Nou', fout: ['nou', 'Nouw'], uitleg: 'Na de dubbele punt en het aanhalingsteken begint iemand te praten. Het eerste woord krijgt dan een hoofdletter.' },
      { soort: 'leenwoord', zin: 'Op tv zagen we een ___ over de Elfstedentocht.', goed: 'reportage', fout: ['reportazje', 'raportage'], uitleg: 'Reportage komt uit het Frans. De zj-klank aan het eind schrijf je als ge, net als in garage.' },
      { soort: 'au-ou', zin: 'Bij het timmeren moet je heel ___ meten.', goed: 'nauwkeurig', fout: ['nouwkeurig', 'nauwkeurich'], uitleg: 'Nauw schrijf je met auw, net als lauw en rauw. Aan het eind schrijf je -ig.' },
      { soort: 'g-ch', zin: 'De vrachtwagen bracht een grote ___ zand.', goed: 'vracht', fout: ['vragt', 'vrachd'], uitleg: 'Voor een t schrijf je ch, net als in vrachtwagen. Een g voor een t zie je bijna alleen bij werkwoorden zoals hij zegt.' },
      { soort: 'trema', zin: 'Tussen de planeten is geen lucht: daar is een ___.', goed: 'vacuüm', fout: ['vacuum', 'vacüum'], uitleg: 'Je zegt va-ku-um. Het trema staat op de tweede u, daar begint een nieuwe klankgroep.' },
      { soort: 'weetwoord', zin: 'Ik wil ___ een ijsje met aardbeiensmaak.', goed: 'liever', fout: ['liefer', 'lievers'], uitleg: 'Liever komt van lief, maar in liever hoor je een v en schrijf je ook een v.' },
      { soort: '-tie', zin: 'De eerste mens op de maan was een wereldwijde ___.', goed: 'sensatie', fout: ['sensasie', 'sensatsie'], uitleg: 'Je hoort sie of tsie, maar je schrijft -tie: sensatie.' }
    ],
    // Dag 79
    [
      { soort: 'hoofdletter', zin: 'Met de boot voeren we over de ___ naar Zweden.', goed: 'Oostzee', fout: ['oostzee', 'Oost-zee'], uitleg: 'De Oostzee is de naam van een zee. Het is één woord met een hoofdletter, net als de Noordzee.' },
      { soort: 'meervoud', zin: 'Mijn twee ___ wonen allebei in Groningen.', goed: 'tantes', fout: ['tante\'s', 'tantens'], uitleg: 'Tante eindigt op een e die je als uh uitspreekt. Dan plak je de s er gewoon achter, zonder apostrof: tantes.' },
      { soort: 'tussen-s', zin: 'We stonden vroeg op om de ___ te zien.', goed: 'zonsopgang', fout: ['zonopgang', 'zonnesopgang'], uitleg: 'Je hoort een s tussen zon en opgang, dus schrijf je die: zonsopgang, net als zonsondergang.' },
      { soort: 'tussen-n', zin: 'Bij oma aten we ___ met suiker en kaneel.', goed: 'rijstebrij', fout: ['rijstenbrij', 'reistebrij'], uitleg: 'Rijst heeft geen meervoud op -en. Dan schrijf je ook geen tussen-n: rijstebrij.' },
      { soort: '-ig-lijk-isch', zin: 'De tovenaar zwaaide met zijn ___ stokje.', goed: 'magische', fout: ['magiese', 'magise'], uitleg: 'Magisch eindigt op -isch. Komt er een e achter, dan blijft de ch staan: magische.' },
      { soort: 'klankgroepen', zin: 'Bij de visboer kochten we een kilo ___.', goed: 'mosselen', fout: ['moselen', 'mossellen'], uitleg: 'Mos-se-len: de o is kort, dus verdubbel je de s. De e in se klinkt als een zachte uh, dus de l blijft enkel.' },
      { soort: 'c-k-s', zin: 'Je tekening is ___; ik zou er niets aan veranderen.', goed: 'perfect', fout: ['perfekt', 'perfeckt'], uitleg: 'Perfect schrijf je met -ct aan het eind, net als direct en correct. Je hoort een k, maar je schrijft een c.' },
      { soort: 'bijvoeglijk', zin: 'De prinses droeg een ___ jurk.', goed: 'zijden', fout: ['zijde', 'zijdene'], uitleg: 'De jurk is van zijde gemaakt. Dan krijgt het een n: een zijden jurk.' }
    ],
    // Dag 80
    [
      { soort: 'ei-ij', zin: 'Teken met je liniaal een rechte ___.', goed: 'lijn', fout: ['lein', 'lijnn'], uitleg: 'Lijn schrijf je met de lange ij. Na de ij komt maar één n.' },
      { soort: 'hoofdletter', zin: 'Mijn moeder gaf me een kus en zei: "___, slaap lekker."', goed: 'Welterusten', fout: ['welterusten', 'Weltrusten'], uitleg: 'Wat iemand zegt, begint met een hoofdletter. Welterusten schrijf je als één woord.' },
      { soort: 'leenwoord', zin: 'Het ___ voor het concert stond in de mail van mijn broer.', goed: 'ticket', fout: ['tikket', 'tiket'], uitleg: 'Ticket komt uit het Engels. De k-klank in het midden schrijf je als ck.' },
      { soort: 'au-ou', zin: 'Vanavond gaan we naar een voorstelling in de ___.', goed: 'schouwburg', fout: ['schauwburg', 'schouwburch'], uitleg: 'Schouwburg schrijf je met ouw. Burg eindigt op een g, want het meervoud is burgen.' },
      { soort: 'g-ch', zin: 'Vanaf de toren hadden we een prachtig ___ over de stad.', goed: 'uitzicht', fout: ['uitzigt', 'uitzichd'], uitleg: 'Zicht schrijf je met ch voor de t, net als licht en nacht.' },
      { soort: 'trema', zin: 'Deze boomgaard heeft een grote ___ aan appels: wel twintig soorten.', goed: 'variëteit', fout: ['varieteit', 'variëtijt'], uitleg: 'Je zegt va-rie-e-teit. Het trema op de e laat zien dat er een nieuwe klankgroep begint.' },
      { soort: 'weetwoord', zin: 'Hij is zo sterk dat hij ___ de piano kan optillen.', goed: 'zelfs', fout: ['zelvs', 'selfs'], uitleg: 'Zelfs begint met een z en eindigt op -fs. Zelf + s = zelfs.' },
      { soort: 'dubbel', zin: 'Die kersttaart ziet er ___ uit!', goed: 'verrukkelijk', fout: ['verukkelijk', 'verrukelijk'], uitleg: 'Ver-ruk-ke-lijk: ver + rukken, dus twee r\'en. En de u is kort, dus ook dubbel k.' }
    ],
    // Dag 81
    [
      { soort: 'hoofdletter', zin: 'Op de derde dinsdag van september is het ___.', goed: 'Prinsjesdag', fout: ['prinsjesdag', 'Prinsesdag'], uitleg: 'Prinsjesdag is een bijzondere dag met een eigen naam, dus met een hoofdletter.' },
      { soort: 'meervoud', zin: 'In de etalage van de bakker lagen de mooiste ___.', goed: 'taartjes', fout: ['taartje\'s', 'taartjen'], uitleg: 'Na -je komt in het meervoud gewoon een s, zonder apostrof: taartjes, net als meisjes.' },
      { soort: 'tussen-s', zin: 'Spelen op het spoor is ___.', goed: 'levensgevaarlijk', fout: ['levengevaarlijk', 'leevensgevaarlijk'], uitleg: 'Je hoort een s na leven, dus schrijf je die: levensgevaarlijk. Le-vens: lange e aan het eind, dus één e.' },
      { soort: 'tussen-n', zin: 'Het meisje had haar haar in een lange ___.', goed: 'paardenstaart', fout: ['paardestaart', 'paartenstaart'], uitleg: 'Paard heeft als meervoud paarden. Dan schrijf je de n ook in de samenstelling: paardenstaart.' },
      { soort: 'verkleinwoord', zin: 'In de kerstboom hangt een glinsterend ___.', goed: 'sterretje', fout: ['stertje', 'steretje'], uitleg: 'Na een korte klank met r krijg je -etje, en dan verdubbel je de r: ster wordt sterretje.' },
      { soort: 'klankgroepen', zin: 'De ___ van ons lokaal zijn erg vies.', goed: 'ramen', fout: ['raamen', 'rammen'], uitleg: 'Ra-men: de a staat aan het eind van een klankgroep en klinkt lang. Dan schrijf je één a.' },
      { soort: 'c-k-s', zin: 'Dit ___ is in een fabriek in Duitsland gemaakt.', goed: 'product', fout: ['produkt', 'prodect'], uitleg: 'Product schrijf je met -ct aan het eind, net als perfect en direct.' },
      { soort: 'apostrof', zin: 'Wij gaan ___ vaak naar het strand.', goed: '\'s zomers', fout: ['szomers', 's\'zomers'], uitleg: 'Eerst de apostrof, dan de s en een spatie: \'s zomers. Midden in de zin schrijf je geen hoofdletter.' }
    ],
    // Dag 82
    [
      { soort: 'ei-ij', zin: 'In het ___ van de koning hangen prachtige schilderijen.', goed: 'paleis', fout: ['palijs', 'palleis'], uitleg: 'Paleis schrijf je met de korte ei. Pa-leis: de a staat aan het eind van een klankgroep, dus één l.' },
      { soort: 'hoofdletter', zin: 'Om twaalf uur riep iedereen: "___ op het nieuwe jaar!"', goed: 'Proost', fout: ['proost', 'Prost'], uitleg: 'Wat iemand zegt, begint met een hoofdletter. Proost schrijf je met een lange oo.' },
      { soort: 'leenwoord', zin: 'We gingen een ___ kamperen aan zee.', goed: 'weekend', fout: ['wiekend', 'weekent'], uitleg: 'Weekend komt uit het Engels. De ie-klank schrijf je als ee, en het eindigt op een d.' },
      { soort: 'au-ou', zin: 'Ik heb veel ___ in mijn juf: zij helpt me altijd.', goed: 'vertrouwen', fout: ['vertrauwen', 'vertrouwe'], uitleg: 'Vertrouwen komt van trouw, met ou. Het woord eindigt op -en.' },
      { soort: '-ig-lijk-isch', zin: 'De film had een ___ einde: de held ging dood.', goed: 'tragisch', fout: ['tragies', 'tragis'], uitleg: 'Je hoort ies, maar je schrijft -isch. Net als bij typisch en logisch.' },
      { soort: 'klankgroepen', zin: 'In de tuin van mijn opa bloeien rode ___.', goed: 'rozen', fout: ['roozen', 'rossen'], uitleg: 'Ro-zen: de o staat aan het eind van een klankgroep en klinkt lang, dus schrijf je één o. Je hoort een z.' },
      { soort: 'koppelteken', zin: 'Op zee dobberde een ___ tussen de golven.', goed: 'zee-eend', fout: ['zeeëend', 'zeeeend'], uitleg: 'Zee en eend botsen met e en e. In een samenstelling zet je dan een koppelteken, net als bij zee-egel.' },
      { soort: 'bijvoeglijk', zin: 'In de regen draag ik mijn ___ laarzen.', goed: 'rubberen', fout: ['rubber', 'rubbere'], uitleg: 'De laarzen zijn van rubber gemaakt. Dan krijgt het -en: rubberen laarzen.' }
    ],
    // Dag 83
    [
      { soort: 'ei-ij', zin: 'Ons team won de eerste ___: een grote beker.', goed: 'prijs', fout: ['preis', 'prijz'], uitleg: 'Prijs schrijf je met de lange ij. Aan het eind schrijf je een s, ook al zeg je prijzen.' },
      { soort: 'hoofdletter', zin: 'Ik vroeg aan mijn vader: "___ gaan we naar oma?"', goed: 'Wanneer', fout: ['wanneer', 'Wanner'], uitleg: 'Een vraag die iemand stelt, begint na het aanhalingsteken met een hoofdletter. Wanneer schrijf je met dubbel n en dubbel e.' },
      { soort: 'tussen-s', zin: 'Op ___ krijgt mijn moeder ontbijt op bed.', goed: 'Moederdag', fout: ['Moedersdag', 'moederdag'], uitleg: 'Je hoort geen s tussen moeder en dag, dus schrijf je die ook niet. Moederdag is een feestdag en krijgt een hoofdletter.' },
      { soort: 'tussen-n', zin: 'Van ___ breit oma warme sokken.', goed: 'schapenwol', fout: ['schapewol', 'schaapenwol'], uitleg: 'Schaap heeft als meervoud alleen schapen. Dan schrijf je de n ook in de samenstelling: schapenwol.' },
      { soort: 'g-ch', zin: 'Mijn overgrootmoeder vertelde vaak over de ___ en hoe moeilijk die tijd was.', goed: 'oorlog', fout: ['oorloch', 'oorlogg'], uitleg: 'Oorlog eindigt op een g. Maak het langer: oorlogen. Dan hoor je de g.' },
      { soort: 'trema', zin: 'De pianist speelde drie mooie ___.', goed: 'melodieën', fout: ['melodieen', 'melodiën'], uitleg: 'Melodie + en = melodieën. Het trema komt op de e waar de nieuwe klankgroep begint.' },
      { soort: 'weetwoord', zin: 'Ik had geen tijd om te lunchen, dus at ik ___ een appel.', goed: 'tussendoor', fout: ['tussen door', 'tusendoor'], uitleg: 'Tussendoor schrijf je als één woord. Tus-sen: korte u, dus dubbel s.' },
      { soort: 'dubbel', zin: 'Ik maakte een ___ van duizend stukjes.', goed: 'puzzel', fout: ['puzel', 'pussel'], uitleg: 'Puz-zel: je hoort een korte u, dus verdubbel je de z.' }
    ],
    // Dag 84
    [
      { soort: 'hoofdletter', zin: 'Op ___ kreeg mijn vader een zelfgemaakte mok.', goed: 'Vaderdag', fout: ['vaderdag', 'Vadersdag'], uitleg: 'Vaderdag is een feestdag, dus met een hoofdletter. Je hoort geen s tussen vader en dag.' },
      { soort: 'meervoud', zin: 'Het concert was gratis, dus ___ kwamen kijken.', goed: 'velen', fout: ['vele', 'veelen'], uitleg: 'Staat er geen zelfstandig naamwoord achter en bedoel je mensen? Dan krijgt het een n: velen. Maar: vele mensen.' },
      { soort: 'leenwoord', zin: 'Ik zocht het op een ___ op internet op.', goed: 'website', fout: ['websijt', 'wepsite'], uitleg: 'Website komt uit het Engels: web en site. De aai-klank schrijf je als i met een e aan het eind.' },
      { soort: 'au-ou', zin: 'In het papier zat nog een scherpe ___ van het dubbelvouwen.', goed: 'vouw', fout: ['vauw', 'vouwt'], uitleg: 'Vouw schrijf je met ouw, net als vouwen. Het is hier een zelfstandig naamwoord, dus er komt geen t achter.' },
      { soort: '-ig-lijk-isch', zin: 'In het ziekenhuis kreeg opa een ___ onderzoek.', goed: 'medisch', fout: ['medies', 'medis'], uitleg: 'Je hoort ies, maar je schrijft -isch. De ch spreek je hier niet uit.' },
      { soort: 'trema', zin: 'Wetenschappers hebben verschillende ___ over het verdwijnen van de dinosaurussen.', goed: 'theorieën', fout: ['theorieen', 'theoriën'], uitleg: 'Theorie + en = theorieën. Het trema komt op de e waar de nieuwe klankgroep begint.' },
      { soort: 'c-k-s', zin: 'Een ___ tasje is slecht voor het milieu.', goed: 'plastic', fout: ['plastik', 'plasstic'], uitleg: 'Plastic komt uit het Engels en eindigt op een c die als k klinkt. Je schrijft er maar één s in.' },
      { soort: '-tie', zin: 'Het Rode Kruis is een ___ die mensen in nood helpt.', goed: 'organisatie', fout: ['organisasie', 'organizatie'], uitleg: 'Je hoort sie, maar je schrijft -tie. En in het midden schrijf je een s: organisatie.' }
    ],
    // Dag 85
    [
      { soort: 'ei-ij', zin: 'Mijn oma is heel ___: ze geeft altijd goede raad.', goed: 'wijs', fout: ['weis', 'wijz'], uitleg: 'Wijs schrijf je met de lange ij. Aan het eind schrijf je een s, ook al zeg je een wijze vrouw.' },
      { soort: 'hoofdletter', zin: 'Toen de bal door het raam vloog, riep Daan: "___, dat was niet mijn bedoeling!"', goed: 'Sorry', fout: ['sorry', 'Sorrie'], uitleg: 'Wat Daan zegt, begint met een hoofdletter. Sorry komt uit het Engels en eindigt op een y.' },
      { soort: 'tussen-s', zin: 'Op ___ sturen sommige mensen elkaar een kaart met een hartje.', goed: 'Valentijnsdag', fout: ['Valentijndag', 'valentijnsdag'], uitleg: 'Je hoort een s tussen Valentijn en dag, dus schrijf je die. Het is een feestdag, dus met een hoofdletter.' },
      { soort: 'tussen-n', zin: 'Ik schreef een stukje in het ___ van mijn vriendin.', goed: 'vriendenboekje', fout: ['vriendeboekje', 'vriendenboekie'], uitleg: 'Vriend heeft als meervoud vrienden. Dan schrijf je de n ook in de samenstelling: vriendenboekje.' },
      { soort: 'g-ch', zin: 'Loop in deze ___ en dan zie je de bakker vanzelf.', goed: 'richting', fout: ['rigting', 'richtting'], uitleg: 'Voor een t schrijf je ch: rich-ting. In de eerste klankgroep hoor je één t, dus je schrijft er één.' },
      { soort: 'verkleinwoord', zin: 'Het ___ van de eend heeft een groene kop.', goed: 'mannetje', fout: ['mantje', 'manetje'], uitleg: 'Na een korte klank met n krijg je -etje, en dan verdubbel je de n: man wordt mannetje.' },
      { soort: 'koppelteken', zin: 'De ___ leerde me in één week bochten maken op de piste.', goed: 'ski-instructeur', fout: ['skiinstructeur', 'skiïnstructeur'], uitleg: 'Ski en instructeur botsen met i en i. In een samenstelling zet je dan een koppelteken, geen trema.' },
      { soort: 'apostrof', zin: 'Op de markt kopen we ___ altijd verse vis.', goed: '\'s zaterdags', fout: ['\'s Zaterdags', 'szaterdags'], uitleg: 'Zaterdag is een dag van de week en krijgt geen hoofdletter, ook niet in \'s zaterdags.' }
    ],
    // Dag 86
    [
      { soort: 'ei-ij', zin: 'Op ___ hebben we altijd gym.', goed: 'vrijdag', fout: ['vreidag', 'Vrijdag'], uitleg: 'Vrijdag schrijf je met de lange ij, net als vrij. Dagen van de week krijgen geen hoofdletter.' },
      { soort: 'hoofdletter', zin: 'Op de markt riep de visboer: "___ vis, verse vis!"', goed: 'Verse', fout: ['verse', 'Ferse'], uitleg: 'Wat de visboer roept, begint met een hoofdletter. Vers schrijf je met een v.' },
      { soort: 'leenwoord', zin: 'In de grote pauze at ik een ___ met kaas.', goed: 'sandwich', fout: ['sendwich', 'sandwitsj'], uitleg: 'Sandwich komt uit het Engels. Je schrijft een a, en de tsj-klank aan het eind schrijf je als ch.' },
      { soort: 'au-ou', zin: 'Mijn opa is de ___ van de hele familie: hij is negentig.', goed: 'oudste', fout: ['audste', 'outste'], uitleg: 'Oud schrijf je met ou, en het eindigt op een d: oude. Daarom schrijf je ook oudste.' },
      { soort: '-ig-lijk-isch', zin: 'Mijn neef kan alles repareren; hij is heel ___.', goed: 'technisch', fout: ['technies', 'tegnisch'], uitleg: 'Technisch schrijf je met ch na de t, en aan het eind -isch. De ch aan het eind hoor je niet.' },
      { soort: 'trema', zin: 'Er zitten ___ kinderen in onze klas.', goed: 'tweeëntwintig', fout: ['tweeentwintig', 'twee-en-twintig'], uitleg: 'Twee + en + twintig: het trema op de e laat zien dat er na twee een nieuwe klankgroep begint. Je schrijft het als één woord.' },
      { soort: 'weetwoord', zin: 'Mijn zusje wil ___ de rode jas, geen andere.', goed: 'per se', fout: ['perse', 'persé'], uitleg: 'Per se komt uit het Latijn en schrijf je als twee woorden, zonder accent. Het betekent: hoe dan ook.' },
      { soort: 'bijvoeglijk', zin: 'De brug rust op dikke ___ balken.', goed: 'stalen', fout: ['staal', 'staalen'], uitleg: 'De balken zijn van staal gemaakt. Dan krijgt het -en: sta-len, met één a omdat die aan het eind van de klankgroep staat.' }
    ],
    // Dag 87
    [
      { soort: 'hoofdletter', zin: 'Op vakantie op de ___ zagen we zeehonden.', goed: 'Waddeneilanden', fout: ['waddeneilanden', 'Wadden eilanden'], uitleg: 'De Waddeneilanden is een aardrijkskundige naam, dus met een hoofdletter. Het is één woord.' },
      { soort: 'meervoud', zin: 'De meeste kinderen vonden de toets makkelijk, maar ___ vonden hem moeilijk.', goed: 'sommigen', fout: ['sommige', 'sommichen'], uitleg: 'Er staat geen zelfstandig naamwoord achter en je bedoelt mensen, dus schrijf je een n: sommigen. Net als bij allen.' },
      { soort: 'tussen-s', zin: 'Volgens de ___ gaat het morgen sneeuwen.', goed: 'weersverwachting', fout: ['weerverwachting', 'weersverwagting'], uitleg: 'Je hoort een s tussen weer en verwachting, dus schrijf je die: weersverwachting.' },
      { soort: 'tussen-n', zin: 'De ___ in de voortuin zit vol rode bloemen.', goed: 'rozenstruik', fout: ['rozestruik', 'roozenstruik'], uitleg: 'Roos heeft als meervoud rozen. Dan schrijf je de n ook in de samenstelling: rozenstruik.' },
      { soort: 'g-ch', zin: 'Je ___ heeft meer dan tweehonderd botten.', goed: 'lichaam', fout: ['ligaam', 'licham'], uitleg: 'Lichaam schrijf je met ch, dat moet je onthouden. Aan het eind staat een lange aa voor de m, dus schrijf je twee a\'s.' },
      { soort: 'verkleinwoord', zin: 'Ik roerde in mijn thee met een klein ___.', goed: 'lepeltje', fout: ['lepelje', 'lepeletje'], uitleg: 'Lepel eindigt op een l na een zachte e (uh). Dan krijg je gewoon -tje: lepeltje.' },
      { soort: 'c-k-s', zin: 'Ons voetbalteam heeft een nieuwe ___: een pluizige leeuw.', goed: 'mascotte', fout: ['maskotte', 'mascote'], uitleg: 'Mascotte schrijf je met een c die als k klinkt, want er staat een o achter. Mas-cot-te: korte o, dus dubbel t.' },
      { soort: 'dubbel', zin: 'Kom ___ naar beneden, het eten is klaar!', goed: 'onmiddellijk', fout: ['onmiddelijk', 'onmidellijk'], uitleg: 'Onmiddellijk heeft dubbel d en dubbel l: on-mid-del-lijk. Dit woord moet je onthouden.' }
    ],
    // Dag 88
    [
      { soort: 'ei-ij', zin: 'Het kleine ___ zwaaide naar de trein.', goed: 'meisje', fout: ['mijsje', 'meissje'], uitleg: 'Meisje schrijf je met de korte ei. Na ei komt maar één s.' },
      { soort: 'hoofdletter', zin: 'Opa vertelde: "___ hadden we geen telefoon en geen computer."', goed: 'Vroeger', fout: ['vroeger', 'Vroecher'], uitleg: 'Wat opa vertelt, begint na het aanhalingsteken met een hoofdletter. Vroeger schrijf je met een g.' },
      { soort: 'leenwoord', zin: 'Mijn neef doet stoere trucs op zijn ___.', goed: 'skateboard', fout: ['skeetbord', 'skateboort'], uitleg: 'Skateboard komt uit het Engels: skate en board. Je schrijft het zoals in het Engels.' },
      { soort: 'g-ch', zin: 'Mijn ___ is de dochter van mijn oom.', goed: 'nicht', fout: ['nigt', 'nichd'], uitleg: 'Voor een t schrijf je bijna altijd ch. En maak je het langer, nichten, dan hoor je een t.' },
      { soort: 'verkleinwoord', zin: 'Ik at een paars ___ uit de tuin van de buren.', goed: 'pruimpje', fout: ['pruimtje', 'pruimetje'], uitleg: 'Na een m krijg je -pje: pruim wordt pruimpje, net als boom en boompje.' },
      { soort: 'klankgroepen', zin: 'Mijn moeder kocht nieuwe ___ om in te koken.', goed: 'pannen', fout: ['panen', 'paanen'], uitleg: 'Pan-nen: je hoort een korte a, dus verdubbel je de n.' },
      { soort: 'koppelteken', zin: 'Een ___ van Ajax kwam bij ons op school vertellen over zijn carrière.', goed: 'oud-voetballer', fout: ['oudvoetballer', 'oud voetballer'], uitleg: 'Oud betekent hier vroeger. Dan zet je een koppelteken, net als bij oud-leerling.' },
      { soort: '-tie', zin: 'Mijn ouders hebben een goede ___ met de buren: ze helpen elkaar vaak.', goed: 'relatie', fout: ['relasie', 'relatsie'], uitleg: 'Je hoort sie of tsie, maar je schrijft -tie: relatie.' }
    ]
  ]
};
MOCHI_SPELLING.werkwoorden.push(...MOCHI_SPELLING_DEEL2.werkwoorden);
MOCHI_SPELLING.woorden.push(...MOCHI_SPELLING_DEEL2.woorden);

# Oefenen met Kaia 🦫, Pluis 🐰, Wolkje 🐑 en Mochi 🐼

Een kleine webapp voor twee groepen van de Nederlandse basisschool, en om te
leren knutselen. Het startscherm vraagt eerst **wie** er gaat oefenen:

- **Groep 8** oefent **begrijpend lezen**, **spelling**, **taalverzorging** en
  **dictee** met Kaia de capybara. Ze introduceert de tekst of de regel, geeft
  hints, legt fouten uit, leest het dictee voor en juicht mee.
- **Groep 5** speelt **spellingspelletjes** met Pluis het konijn. Pluis
  beweegt (oren, neus, knipperen), huppelt bij een goed antwoord en krijgt voor
  elk goed woord een wortel.
- **Knutselen** is voor iedereen: stap voor stap **leren haken** met Wolkje
  het schaap.
- **Toetstraining** is een dagplan van twee weken met Mochi de panda: elke dag
  een halfuur oefenen voor alle Boom-toetsen van groep 8.

## Draaien

De app is puur HTML/CSS/JS zonder build-stap en zonder dependencies. Er hoeft
niets geïnstalleerd te worden:

```bash
npm start                      # http://localhost:3000
# of met wat je maar bij de hand hebt:
python3 -m http.server 8000    # http://localhost:8000
```

`server.js` is een statische server van 40 regels op alleen Node-standaard­modules,
zodat de app ook zo naar Railway (of iets anders met `npm start`) kan.

## Groep 5: de spelletjes met Pluis

Het kind kiest eerst een **spel**, daarna een **woordpakket**, en speelt dan een
ronde van acht woorden. Alle vier de spellen werken met alle pakketten.

| Spel | Wat het kind doet |
| --- | --- |
| 🥕 Wortelkeuze | Pluis zegt het woord; kies de wortel met het stukje dat in het gat hoort (`tr__n`: ei of ij). |
| 🧱 Woordbouwer | Pluis zegt het woord; bouw het met blokjes. Er ligt één blokje te veel (de `ij` naast de `ei`). Twee pogingen. |
| ⚡ Flitswoord | Het woord is heel even te zien en moet daarna uit het hoofd getypt worden. Eén keer extra kijken mag. |
| 🎧 Luisterwoord | Dictee: Pluis zegt het woord met een zin erbij, het kind typt het woord. |

| Woordpakket | Soort | Woorden |
| --- | --- | --- |
| ei of ij | weetwoorden | 16 |
| au of ou | weetwoorden | 16 |
| d of t aan het eind | langer maken | 16 |
| ng of nk | luisterwoorden | 16 |
| Eén of twee medeklinkers | klankgroepen | 16 |
| sch of schr | luisterwoorden | 15 |
| eeuw, ieuw of uw | regelwoorden | 12 |
| aai, ooi of oei | regelwoorden | 16 |
| ch of g voor de t | regelwoorden | 12 |
| ig of lijk | regelwoorden | 12 |
| Klein maken: je, tje of pje | regelwoorden | 12 |

Een ronde is acht woorden uit het pakket, elke keer andere. Bij "ig of lijk"
staan ook de foute schrijfwijzen `ug` en `luk` tussen de keuzes, want daar zit
de moeilijkheid.

Onder de spellen staan twee **dictees**, zoals op school: de woorden komen
door elkaar uit alle pakketten en er wordt pas aan het eind nagekeken.

| Dictee | Hoe het gaat |
| --- | --- |
| 📝 Woorddictee | Tien woorden, eerlijk verdeeld over de pakketten. Na afloop staat erbij uit welk pakket een fout woord kwam, met het advies dat pakket nog eens te oefenen. |
| ✏️ Zinnendictee | Vijf hele zinnen. Alle woorden goed én een punt is 1 punt; woorden goed maar de punt vergeten is een half punt. Een vergeten hoofdletter kost geen punten, maar Pluis zegt het er wel bij. Foute woorden worden onderstreept. |

Voor het zinnendictee worden de dicteezinnen van de woorden hergebruikt. Een
zin met een naam of een te lastig woord erin krijgt `zinDictee: false` en doet
dan niet mee.

Een woord is 1 punt, een half punt als het pas in de tweede poging (of na extra
kijken) goed gaat, en anders 0. Bij een fout legt Pluis de regel van het pakket
uit; bij d/t maakt Pluis het woord langer (hond → honden). De sterren gaan per
spel + pakket en de wortels tellen door. De voortgang van groep 5 staat los van
die van groep 8, zodat de een nooit de sterren van de ander wist.

Elk woord heeft een eigen dictee-opname ("Trein. De trein rijdt naar Utrecht.").
Die wordt in de spellen altijd afgespeeld, ook als de voorleesknop uit staat:
het gesproken woord hoort bij het spel. De voorleesknop bepaalt alleen of Pluis
ook de uitleg en de tips voorleest.

Een woord schrijf je in `groep5.js` als `'tr[ei]n'`: het stuk tussen de haken is
het lastige stukje. Let er bij een nieuw woord op dat het gat maar op één manier
een woord oplevert (`h[aai]` en `h[ooi]` samen in één pakket is dubbelzinnig).
De naam van het konijn staat bovenaan dat bestand (`konijn: 'Pluis'`).

## Groep 8: hoe het werkt voor het kind

Bovenaan het startscherm kiest het kind eerst **📖 Lezen**, **✍️ Spelling**,
**📝 Taal** (taalverzorging) of **🎧 Dictee**. Die keuze wordt onthouden. De
eerste drie vormen zijn bijna hetzelfde; spelling en taal werken precies gelijk.
Het dictee gaat anders en staat [hieronder](#groep-8-dictee).

| | Lezen | Spelling / Taal |
| --- | --- | --- |
| 1. Kiezen | een tekst | een regel |
| 2. Voorbereiden | de tekst lezen, moeilijke woorden aanklikken | de regelkaart van Kaia lezen (stappen, voorbeelden, "let op") |
| 3. Vragen | met de tekst terug te kijken in een lade | met de regel terug te kijken in een lade |
| 4. Resultaat | 0 tot 3 sterren + overzicht per vraag | idem |

Per vraag is er een hint van Kaia en na het nakijken altijd uitleg, ook als het
antwoord goed was. De beste score per oefening wordt bewaard in `localStorage`;
de sterrenteller op het startscherm telt per oefenvorm.

Extra's in de bovenbalk: lettergrootte in drie stappen en een voorleesknop.
De leesteksten, regelkaarten en hints worden voorgelezen met een opgenomen stem
(zie [Voorleesaudio](#voorleesaudio-elevenlabs)); vragen en uitleg gebruiken de
Nederlandse stem van de browser, als die er is. Bij spelling leest Kaia de
meerkeuze-antwoorden expres *niet* voor — "word" en "wordt" klinken immers
precies hetzelfde. Bij taalverzorging geldt hetzelfde: een komma meer of
minder hoor je niet.

## Wat er nu in zit

**Lezen** — zes teksten met in totaal 39 vragen:

| Tekst | Soort | Vragen |
| --- | --- | --- |
| De wolf is terug in Nederland | informatief | 7 |
| Waarom gapen aanstekelijk is | informatief | 6 |
| Moet de smartphone de klas uit? | meningtekst | 7 |
| De sleutel van de vuurtoren | verhalend | 6 |
| Hoe bijen elkaar de weg wijzen | informatief | 7 |
| De sponsorloop | verhalend | 6 |

Geoefende vaardigheden: hoofdgedachte, verwijswoorden, woordbetekenis uit de
context, signaalwoorden, feit of mening, tekstdoel, argumenten herkennen,
tussen de regels lezen, conclusies trekken, volgorde in een tekst, personages
begrijpen en de boodschap van een verhaal.

**Spelling** — dertien regels met in totaal 104 vragen:

| Regel | Soort | Vragen |
| --- | --- | --- |
| Verdubbelen of verenkelen | klanken | 8 |
| Werkwoorden in de tegenwoordige tijd | werkwoorden | 8 |
| 't Kofschip: -te of -de | werkwoorden | 8 |
| Voltooid deelwoord: -d of -t | werkwoorden | 8 |
| Woorden die je anders schrijft dan je hoort | woorden | 8 |
| Samenstellingen, trema en koppelteken | woorden | 8 |
| Verleden tijd met tt of dd | werkwoorden | 8 |
| Meervoud: -s of -'s | woorden | 8 |
| Verkleinwoorden: -je, -tje, -pje of -etje | woorden | 8 |
| Leenwoorden uit het Frans en het Engels | woorden | 8 |
| Ei of ij, au of ou | klanken | 8 |
| Het verbrande ei: deelwoord vóór een naamwoord | werkwoorden | 8 |
| Engelse werkwoorden: gemaild en geskatet | werkwoorden | 8 |

**Taalverzorging** — negen regels met in totaal 54 vragen:

| Regel | Soort | Vragen |
| --- | --- | --- |
| Hoofdletters: wanneer wel en wanneer niet | hoofdletters | 6 |
| Punt, vraagteken, uitroepteken en komma | leestekens | 6 |
| Aanhalingstekens: wie zegt wat? | leestekens | 6 |
| Woordsoorten: wat voor woord is het? | grammatica | 6 |
| Zinsdelen: persoonsvorm, onderwerp en meer | grammatica | 6 |
| Lastige woordparen: als of dan, hun of zij | woordkeuze | 6 |
| Trappen van vergelijking: groot, groter, grootst | grammatica | 6 |
| Signaalwoorden: maar, want en dus | woordkeuze | 6 |
| Spreekwoorden en uitdrukkingen | woordenschat | 6 |

Omdat de app een invulantwoord nakijkt zonder op hoofdletters en leestekens
aan het eind te letten, zijn de vragen over hoofdletters en leestekens
meerkeuze- of sorteervragen.

## Groep 8: dictee

Kaia leest voor, het kind schrijft op, en er wordt pas aan het eind nagekeken.
Het woord of de zin wordt altijd uitgesproken, ook als de voorleesknop uit
staat; "Luister nog een keer" mag zo vaak als nodig.

| Dictee | Hoe het gaat |
| --- | --- |
| 📝 Groot woorddictee | Vijftien woorden, eerlijk verdeeld over alle pakketten. Kaia zegt het woord en een zin waar het in zit ("Wordt. Mijn zusje wordt later dierenarts."); het kind typt alleen het woord. |
| ✏️ Zinnendictee | Acht hele zinnen. |
| Eén dictee per pakket | Tien woorden van één soort, om gericht te oefenen. |

De veertien pakketten, elk met twaalf of dertien woorden (dus elke keer een
ander dictee): verdubbelen en verenkelen, tegenwoordige tijd, verleden tijd,
voltooid deelwoord, -tie/-isch/-lijk/-ig, samenstellingen met trema en
koppelteken, verleden tijd met tt of dd, meervoud op -s of -'s,
verkleinwoorden, leenwoorden, ei/ij en au/ou, het deelwoord vóór een naamwoord
(de verbrande pizza), Engelse werkwoorden (geskatet, gemaild) en instinkers
(onmiddellijk, sowieso).

Nakijken:

- **Woord**: goed is 1 punt; alleen een trema of accent vergeten (`cafes`) is
  een half punt. Hoofdletters tellen niet, en een krullende apostrof van de
  tablet (`auto’s`) is gewoon goed.
- **Zin**: alle woorden goed én het leesteken aan het eind is 1 punt. Een half
  punt als alleen het leesteken niet klopt, of als er precies één woord fout
  is. Komma's tellen niet mee. Een vraag moet op een vraagteken eindigen.
  Hoofdletters kosten geen punten; Kaia zegt er na afloop wel iets over.

Na afloop staat bij elk fout woord de regel in het kort, en Kaia noemt de
spellingregels die het kind nog eens kan oefenen: een pakket verwijst met
`regel` naar de bijbehorende regel in `spelling.js`.

Een pakket toevoegen = een object aan `pakketten` in `dictee.js` plakken. Let
bij een zin op dat je hem maar op één manier kunt opschrijven: geen getallen
(acht of 8?), geen namen van mensen en geen `één` met accenten. Zo'n zin kan
met `zinDictee: false` buiten het zinnendictee blijven.

## Knutselen: leren haken met Wolkje

Het eerste plan is **Leren haken**: dertien lessen op volgorde, van de spullen
die je nodig hebt tot een ronde onderzetter.

| # | Les | Soort |
| --- | --- | --- |
| 1 | Wat heb je nodig? | Basis |
| 2 | Naald en draad vasthouden | Basis |
| 3 | De beginlus | Basis |
| 4 | Lossen | Steek |
| 5 | Project: een armbandje | Project |
| 6 | Halve vasten | Steek |
| 7 | Vasten | Steek |
| 8 | Keren: een lapje van vasten | Steek |
| 9 | Afhechten en draadjes wegwerken | Basis |
| 10 | Stokjes | Steek |
| 11 | Een haakpatroon lezen | Basis |
| 12 | In de rondte: de magische ring | Steek |
| 13 | Project: een ronde onderzetter | Project |

Daarna volgt **Leuke haakprojecten**: zes projecten die steeds iets moeilijker
worden, met onderweg één nieuwe steek (minderen).

| # | Project | Wat je oefent |
| --- | --- | --- |
| 1 | Een sjaaltje voor je knuffel | vasten, kleur wisselen, franjes |
| 2 | Een gehaakt bloemetje | magische ring, een toer sluiten, stokjes |
| 3 | Een boekenlegger met een kwastje | stokjes heen en weer, een kwastje maken |
| 4 | Nieuwe steek: minderen | 2 vasten samen haken |
| 5 | Een slinger met vlaggetjes | minderen aan twee kanten |
| 6 | Een knuffelbal met een gezichtje | meerderen, minderen, vullen, borduren |

Zo gaat een les:

- **Stap voor stap**, één stap tegelijk in grote letters, zodat je kunt
  meedoen met je handen vol wol. Bij een stap staat soms een tip of het
  **haakteken** van de steek (ovaaltje, bolletje, kruisje, T).
- Bij sommige lessen staat een **haakschema**, dat de app zelf tekent: heen en
  weer (het lapje) of in de rondte (de onderzetter).
- Bij het lapje en de onderzetter staat een **teller** voor toeren en steken.
  Die onthoudt de stand per les; bij een nieuwe toer gaan de steken terug naar 0.
- **Lukt het niet?** staat onder elke les, met de bekende beginnersproblemen.
- Na de stappen komen een paar vragen (**Weet je het nog?**), en daarna zeg
  je zelf of de les gelukt is. Er zijn geen sterren: je haakwerk is het bewijs.
  Op het startscherm staat een vinkje bij elke gelukte les en een pijltje bij
  de volgende.

De haaktermen zijn de Nederlandse: losse, halve vaste, vaste, half stokje,
stokje. De les over patronen legt uit dat Engelse patronen andere namen
gebruiken. Een nieuw plan (breien, naaien) is een object in `plannen` in
`knutselen.js`; de structuur staat bovenaan dat bestand.

## Toetstraining: twee weken met Mochi

Een dagplan van **dinsdag 20 oktober tot en met maandag 2 november 2026**
(14 dagen, ook in het weekend) voor een kind dat begin groep 8 de Boom-toetsen
maakt. Elke dag komen alle zeven toetsen aan bod, samen ongeveer 30 minuten.
De tijd is verdeeld naar de vorige uitslag: de meeste tijd gaat naar de C's,
minder naar de B's, en de A krijgt alleen een korte opwarmer.

| # | Onderdeel | Boom-toets | Vorige uitslag | Tijd | Wat het kind doet |
| --- | --- | --- | --- | --- | --- |
| 1 | ⚡ Woordrij | Technisch lezen woorden | B | 2 min | Eén minuut zo veel mogelijk woorden hardop lezen (80 woorden, van kort naar lang). Daarna tikt het kind het laatste woord aan. |
| 2 | 🗣️ Hardop lezen | Technisch lezen tekst | A | 2 min | De tekst van de dag hardop voorlezen met een stopwatch, en zeggen hoe het ging. |
| 3 | 🔍 Vragen bij de tekst | Begrijpend lezen | B | 4 min | Drie vragen over diezelfde tekst. |
| 4 | ✍️ Werkwoorden | Spelling werkwoorden | C | 6 min | Zes zinnen met het werkwoord in de goede vorm. |
| 5 | 🧮 Rekenen | Rekenen-wiskunde | C | 8 min | Acht sommen, één uit elk domein. |
| 6 | 📰 Korte teksten | Begrijpend lezen (2012) | C | 5 min | Twee korte teksten (advertentie, recept, bericht, ...) met elk twee vragen. |
| 7 | 🔤 Woorden spellen | Spelling woorden | B | 3 min | Vijf woorden: kies de goede schrijfwijze. |

Elke vraag wordt meteen nagekeken, met een uitleg die de aanpak laat zien.
Bij de werkwoorden telt een hoofdletter niet. Op het startscherm staan de 14
dagen ("Vandaag" is gemarkeerd) en een paar cijfers: hoeveel dagen af zijn,
het beste aantal woorden per minuut en het percentage goed per onderdeel. De
uitslagletters staan alleen hier en in `mochi.js`, niet in beeld.

De werkwoorden volgen een opbouw: tegenwoordige tijd, verleden tijd met
't kofschip, de dubbele d of t, het voltooid deelwoord, de bekende valkuilen
(gebeurt/gebeurd, verbrande/verbrandde), het deelwoord als bijvoeglijk
naamwoord, Engelse werkwoorden, en de laatste dagen alles door elkaar.

De rekensommen staan niet uitgeschreven: `rekensommen.js` maakt ze per dag
met een vaste toevalsgenerator. Een dag heeft dus altijd dezelfde sommen, en
het antwoord en de uitleg zijn uitgerekend in plaats van overgetypt. De acht
domeinen zijn getallen, bewerkingen, kommagetallen, breuken, procenten,
verhoudingen (schaal, recepten, snelheid), meten (lengte, inhoud, gewicht,
tijd) en meetkunde en verbanden (oppervlakte, omtrek, inhoud, gemiddelde,
een tabel lezen). Vanaf dag 6 en dag 11 worden de getallen groter. Een
antwoord mag met een komma of een punt (`2,5`, `2.5`, `€ 12,50`).

Mochi leest niets voor: bij lezen hoort het kind zelf te lezen.

## Voorleesaudio (ElevenLabs)

In `audio/` staat per leestekst, per regelkaart, per hint, per dicteewoord (van
groep 5 en groep 8) en per speluitleg en pakkettip een mp3, gemaakt met
ElevenLabs (stem `YUdpWWny7k5yb4QCeweX`, model `eleven_multilingual_v2`, Nederlands). De app
haalt `audio/manifest.json` op en speelt de opname af zodra de tekst of de
regelkaart opent of het kind op de hintknop drukt; ontbreekt een opname, dan valt ze terug op de browserstem.
De mp3's staan gewoon in git, zodat een deploy ze meeneemt.

Opnieuw opnemen na het wijzigen of toevoegen van een tekst:

```bash
echo 'ELEVENLABS_API_KEY=sk_...' > .env    # staat in .gitignore
npm run audio                              # alleen wat veranderd is
node genereer-audio.js --alles             # alles opnieuw
node genereer-audio.js lees:wolf           # één opname (lees:<id>, regel:<id>, hint:<id>:<vraagnr>,
                                           #   woord:<woord>, zin:<woord>, g5:spel:<id>, g5:pakket:<id>,
                                           #   d8:woord:<woord>, d8:zin:<woord>)
```

Alles wat de app uitspreekt heeft een eigen opname: teksten, regelkaarten,
vragen, hints, uitleg, voorbeeldantwoorden, woordkaarten, de korte reacties van
Kaia ("Helemaal goed!"), de eindschermen en alles van groep 5. Knutselen heeft geen opnames: daar
leest de browserstem voor. De browserstem
is alleen nog een vangnet voor als een opname ontbreekt. Vaste zinnen van Kaia
staan daarom in `zinnen.js` en die van Pluis in `groep5.js`: zonder getallen,
zodat ze op te nemen zijn. De score staat los onder de tekst.

```bash
node genereer-audio.js --droog             # wat moet er nog, en hoeveel tekens kost dat?
```

Is het tegoed bij ElevenLabs op, dan stopt het script met een duidelijke
melding. Wat al is opgenomen wordt na elke opname bewaard, dus opnieuw draaien
gaat verder waar het bleef. Twee keer precies dezelfde tekst wordt maar één keer
opgenomen en daarna gekopieerd.

Het script vergelijkt een vingerafdruk van tekst + stem + model met het
manifest en slaat ongewijzigde opnames over, dus herhaald draaien kost geen
tegoed. Andere stem of model: `ELEVENLABS_VOICE_ID` en `ELEVENLABS_MODEL_ID`
in `.env`. De API-sleutel heeft alleen de permissie *text-to-speech* nodig.

## Bestanden

| Bestand | Wat het doet |
| --- | --- |
| `index.html` | Alle schermen: groep kiezen, de zes van groep 8, de vier van groep 5, de twee van Knutselen en de drie van de toetstraining. |
| `styles.css` | Alle opmaak. |
| `exercises.js` | **Alle leesteksten**, hardcoded in één array. |
| `spelling.js` | **Alle spellingregels**, in dezelfde stijl. |
| `taal.js` | **Alle taalverzorgingsregels**, zelfde structuur als spelling. |
| `dictee.js` | **Het dictee van groep 8**: de dictees en alle woordpakketten met hun zinnen. |
| `groep5.js` | **Groep 5**: de vier spellen, de dictees en alle woordpakketten. |
| `knutselen.js` | **Knutselen**: de plannen en alle lessen, met hun stappen, schema's, hulp en vragen. |
| `mochi.js` | **Toetstraining**: het dagplan, de zeven onderdelen met hun tijd, en wat Mochi zegt. |
| `mochi-lezen.js` | De teksten en vragen voor hardop lezen en begrijpend lezen, per dag. |
| `mochi-spelling.js` | De werkwoordzinnen en spellingwoorden per dag, en de woorden voor de woordrij. |
| `rekensommen.js` | Maakt de rekensommen van elke dag, met antwoord en uitleg. |
| `zinnen.js` | De vaste, opneembare zinnen van Kaia: reacties na een vraag en de eindschermen. |
| `capybara.js` | Kaia als SVG, met zes stemmingen. |
| `konijn.js` | Pluis als SVG, met zeven stemmingen; het bewegen zit in `styles.css`. |
| `schaap.js` | Wolkje als SVG, met vijf stemmingen. |
| `panda.js` | Mochi als SVG, met vijf stemmingen. |
| `app.js` | Groep kiezen en alle logica van groep 8: schermen, nakijken, dictee, score, voortgang. |
| `spellen.js` | De logica van de spelletjes van groep 5. |
| `werkplaats.js` | De logica van Knutselen: lessen, haakschema's, de teller en de voortgang. |
| `toetstraining.js` | De logica van de toetstraining: dagen, woordrij, stopwatch, vragen en voortgang. |
| `server.js` | Statische server voor lokaal draaien en deployen. |
| `genereer-audio.js` | Neemt de teksten, regelkaarten, hints en dicteewoorden op met ElevenLabs, naar `audio/`. |
| `audio/` | De opnames (mp3) en `manifest.json`. |

## Later: oefeningen bewerken

`app.js` kent geen enkele oefening bij naam; het leest alleen de arrays
`OEFENINGEN` (exercises.js), `SPELLINGOEFENINGEN` (spelling.js),
`TAALOEFENINGEN` (taal.js) en het object `DICTEE8` (dictee.js). Een editor
hoeft dus alleen die datastructuren te produceren (en later bijvoorbeeld op te
halen bij de server in plaats van uit het script). Wat per oefenvorm verschilt,
staat in `app.js` bij elkaar in de constante `MODI`.

Vraagtypes die de app nu ondersteunt:

```js
{ type: 'mc',       vraag, opties: [...], goed: <index>, hint, uitleg, vaardigheid }
{ type: 'open',     vraag, voorbeeldantwoord, hint, uitleg, vaardigheid }   // kind kijkt zichzelf na
{ type: 'volgorde', vraag, items: [...], goedeVolgorde: [...indexen...], hint, uitleg, vaardigheid }
{ type: 'invul',    vraag, zin: 'Ik ___ twaalf.', cue, goed: 'word' | ['word', ...], hint, uitleg, vaardigheid }
{ type: 'sorteer',  vraag, categorieen: ['-te', '-de'], items: [...],
                    goed: [...categorie-index per item...], hint, uitleg, vaardigheid }
```

`invul` kijkt de app zélf na (hoofdletters, spaties en een punt aan het eind
maken niet uit, en een krullende apostrof is gewoon een apostrof; alleen een
trema of accent vergeten telt als half goed).
`sorteer` geeft een heel punt als alles klopt en een half punt bij meer dan de
helft goed.

Een leesoefening:

```js
{ id, titel, soort, emoji, niveau: 1|2|3, intro,
  alineas: ['...'], woorden: [{ woord, uitleg }], vragen: [...] }
```

Een spelling- of taaloefening:

```js
{ id, titel, soort, emoji, niveau: 1|2|3, intro,
  regel: { stappen: ['...'], voorbeelden: [{ woord, uitleg }], letop: '...' },
  vragen: [...] }
```

In `stappen`, `letop` en de uitleg bij een voorbeeld wordt *een stukje tussen
sterretjes* vetgedrukt.

Nieuwe tekst of regel toevoegen = een object aan de array plakken; de kaartjes,
stippen, score en voortgang passen zich vanzelf aan.

# Oefenen met Kaia 🦫 en Pluis 🐰

Een kleine webapp voor twee groepen van de Nederlandse basisschool. Het
startscherm vraagt eerst **welke groep** er gaat oefenen:

- **Groep 8** oefent **begrijpend lezen**, **spelling** en **taalverzorging**
  met Kaia de capybara. Ze introduceert de tekst of de regel, geeft hints, legt
  fouten uit en juicht mee.
- **Groep 5** speelt **spellingspelletjes** met Pluis het konijn. Pluis
  beweegt (oren, neus, knipperen), huppelt bij een goed antwoord en krijgt voor
  elk goed woord een wortel.

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
| ei of ij | weetwoorden | 12 |
| au of ou | weetwoorden | 12 |
| d of t aan het eind | langer maken | 12 |
| ng of nk | luisterwoorden | 12 |
| Eén of twee medeklinkers | klankgroepen | 12 |
| sch of schr | luisterwoorden | 11 |
| eeuw, ieuw of uw | regelwoorden | 9 |
| aai, ooi of oei | regelwoorden | 12 |

Onder de spellen staan twee **dictees**, zoals op school: de woorden komen
door elkaar uit alle pakketten en er wordt pas aan het eind nagekeken.

| Dictee | Hoe het gaat |
| --- | --- |
| 📝 Woorddictee | Tien woorden, eerlijk verdeeld over de pakketten. Na afloop staat erbij uit welk pakket een fout woord kwam, met het advies dat pakket nog eens te oefenen. |
| ✏️ Zinnendictee | Vijf hele zinnen. Alle woorden goed én een hoofdletter én een punt is 1 punt; woorden goed maar hoofdletter of punt vergeten is een half punt. Foute woorden worden onderstreept. |

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

Bovenaan het startscherm kiest het kind eerst **📖 Lezen**, **✍️ Spelling** of
**📝 Taal** (taalverzorging). Die keuze wordt onthouden. Daarna zijn de vormen
bijna hetzelfde; spelling en taal werken precies gelijk:

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

**Lezen** — vier teksten met in totaal 26 vragen:

| Tekst | Soort | Vragen |
| --- | --- | --- |
| De wolf is terug in Nederland | informatief | 7 |
| Waarom gapen aanstekelijk is | informatief | 6 |
| Moet de smartphone de klas uit? | meningtekst | 7 |
| De sleutel van de vuurtoren | verhalend | 6 |

Geoefende vaardigheden: hoofdgedachte, verwijswoorden, woordbetekenis uit de
context, signaalwoorden, feit of mening, tekstdoel, argumenten herkennen,
tussen de regels lezen, conclusies trekken en volgorde in een tekst.

**Spelling** — zes regels met in totaal 36 vragen:

| Regel | Soort | Vragen |
| --- | --- | --- |
| Verdubbelen of verenkelen | klanken | 6 |
| Werkwoorden in de tegenwoordige tijd | werkwoorden | 6 |
| 't Kofschip: -te of -de | werkwoorden | 6 |
| Voltooid deelwoord: -d of -t | werkwoorden | 6 |
| Woorden die je anders schrijft dan je hoort | woorden | 6 |
| Samenstellingen, trema en koppelteken | woorden | 6 |

**Taalverzorging** — zes regels met in totaal 36 vragen:

| Regel | Soort | Vragen |
| --- | --- | --- |
| Hoofdletters: wanneer wel en wanneer niet | hoofdletters | 6 |
| Punt, vraagteken, uitroepteken en komma | leestekens | 6 |
| Aanhalingstekens: wie zegt wat? | leestekens | 6 |
| Woordsoorten: wat voor woord is het? | grammatica | 6 |
| Zinsdelen: persoonsvorm, onderwerp en meer | grammatica | 6 |
| Lastige woordparen: als of dan, hun of zij | woordkeuze | 6 |

Omdat de app een invulantwoord nakijkt zonder op hoofdletters en leestekens
aan het eind te letten, zijn de vragen over hoofdletters en leestekens
meerkeuze- of sorteervragen.

## Voorleesaudio (ElevenLabs)

In `audio/` staat per leestekst, per regelkaart, per hint en (voor groep 5) per
dicteewoord, speluitleg en pakkettip een mp3, gemaakt met
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
                                           #   woord:<woord>, zin:<woord>, g5:spel:<id>, g5:pakket:<id>)
```

Alles wat de app uitspreekt heeft een eigen opname: teksten, regelkaarten,
vragen, hints, uitleg, voorbeeldantwoorden, woordkaarten, de korte reacties van
Kaia ("Helemaal goed!"), de eindschermen en alles van groep 5. De browserstem
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
| `index.html` | Alle schermen: groep kiezen, de vijf van groep 8 en de vier van groep 5. |
| `styles.css` | Alle opmaak. |
| `exercises.js` | **Alle leesteksten**, hardcoded in één array. |
| `spelling.js` | **Alle spellingregels**, in dezelfde stijl. |
| `taal.js` | **Alle taalverzorgingsregels**, zelfde structuur als spelling. |
| `groep5.js` | **Groep 5**: de vier spellen, de dictees en alle woordpakketten. |
| `zinnen.js` | De vaste, opneembare zinnen van Kaia: reacties na een vraag en de eindschermen. |
| `capybara.js` | Kaia als SVG, met zes stemmingen. |
| `konijn.js` | Pluis als SVG, met zeven stemmingen; het bewegen zit in `styles.css`. |
| `app.js` | Groep kiezen en alle logica van groep 8: schermen, nakijken, score, voortgang. |
| `spellen.js` | De logica van de spelletjes van groep 5. |
| `server.js` | Statische server voor lokaal draaien en deployen. |
| `genereer-audio.js` | Neemt de teksten, regelkaarten, hints en dicteewoorden op met ElevenLabs, naar `audio/`. |
| `audio/` | De opnames (mp3) en `manifest.json`. |

## Later: oefeningen bewerken

`app.js` kent geen enkele oefening bij naam; het leest alleen de arrays
`OEFENINGEN` (exercises.js), `SPELLINGOEFENINGEN` (spelling.js) en
`TAALOEFENINGEN` (taal.js). Een editor
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
maken niet uit; alleen een trema of accent vergeten telt als half goed).
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

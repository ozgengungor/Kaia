# Oefenen met Kaia 🦫

Een kleine webapp om **begrijpend lezen**, **spelling** en **taalverzorging**
te oefenen voor groep 8 van de Nederlandse basisschool. Kaia de capybara is de coach: ze introduceert de
tekst of de regel, geeft hints, legt fouten uit en juicht mee.

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

## Hoe het werkt voor het kind

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

In `audio/` staat per leestekst, per regelkaart en per hint een mp3, gemaakt met
ElevenLabs (stem "Sarah", model `eleven_multilingual_v2`, Nederlands). De app
haalt `audio/manifest.json` op en speelt de opname af zodra de tekst of de
regelkaart opent of het kind op de hintknop drukt; ontbreekt een opname, dan valt ze terug op de browserstem.
De mp3's staan gewoon in git, zodat een deploy ze meeneemt.

Opnieuw opnemen na het wijzigen of toevoegen van een tekst:

```bash
echo 'ELEVENLABS_API_KEY=sk_...' > .env    # staat in .gitignore
npm run audio                              # alleen wat veranderd is
node genereer-audio.js --alles             # alles opnieuw
node genereer-audio.js lees:wolf           # één opname (lees:<id>, regel:<id>, hint:<id>:<vraagnr>)
```

Het script vergelijkt een vingerafdruk van tekst + stem + model met het
manifest en slaat ongewijzigde opnames over, dus herhaald draaien kost geen
tegoed. Andere stem of model: `ELEVENLABS_VOICE_ID` en `ELEVENLABS_MODEL_ID`
in `.env`. De API-sleutel heeft alleen de permissie *text-to-speech* nodig.

## Bestanden

| Bestand | Wat het doet |
| --- | --- |
| `index.html` | De vijf schermen: kiezen, lezen, regelkaart, vragen, resultaat. |
| `styles.css` | Alle opmaak. |
| `exercises.js` | **Alle leesteksten**, hardcoded in één array. |
| `spelling.js` | **Alle spellingregels**, in dezelfde stijl. |
| `taal.js` | **Alle taalverzorgingsregels**, zelfde structuur als spelling. |
| `capybara.js` | Kaia als SVG, met zes stemmingen. |
| `app.js` | De logica: schermen, nakijken, score, voortgang. |
| `server.js` | Statische server voor lokaal draaien en deployen. |
| `genereer-audio.js` | Neemt de teksten, regelkaarten en hints op met ElevenLabs, naar `audio/`. |
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

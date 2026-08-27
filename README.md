# Lezen met Kaya 🦫

Een kleine webapp om **begrijpend lezen** te oefenen voor groep 8 van de
Nederlandse basisschool. Kaya de capybara is de coach: ze introduceert de tekst,
geeft hints, legt fouten uit en juicht mee.

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

1. **Kies een tekst** — kaartjes met tekstsoort, moeilijkheid en behaalde sterren.
2. **Lees** — alinea's zijn genummerd, moeilijke woorden zijn onderstreept en
   aanklikbaar voor uitleg.
3. **Beantwoord de vragen** — de tekst blijft terug te kijken via de lade
   *"Bekijk de tekst nog een keer"*. Per vraag is er een hint van Kaya en na het
   nakijken altijd uitleg, ook als het antwoord goed was.
4. **Resultaat** — 0 tot 3 sterren, plus een overzicht per vraag. De beste score
   per tekst wordt bewaard in `localStorage`.

Extra's in de bovenbalk: lettergrootte in drie stappen en een voorleesknop
(gebruikt de Nederlandse stem van de browser, als die er is).

## Wat er nu in zit

Vier oefeningen met in totaal 26 vragen:

| Tekst | Soort | Vragen |
| --- | --- | --- |
| De wolf is terug in Nederland | informatief | 7 |
| Waarom gapen aanstekelijk is | informatief | 6 |
| Moet de smartphone de klas uit? | meningtekst | 7 |
| De sleutel van de vuurtoren | verhalend | 6 |

Geoefende vaardigheden: hoofdgedachte, verwijswoorden, woordbetekenis uit de
context, signaalwoorden, feit of mening, tekstdoel, argumenten herkennen,
tussen de regels lezen, conclusies trekken en volgorde in een tekst.

## Bestanden

| Bestand | Wat het doet |
| --- | --- |
| `index.html` | De vier schermen: kiezen, lezen, vragen, resultaat. |
| `styles.css` | Alle opmaak. |
| `exercises.js` | **Alle inhoud**, hardcoded in één array. |
| `capybara.js` | Kaya als SVG, met zes stemmingen. |
| `app.js` | De logica: schermen, nakijken, score, voortgang. |
| `server.js` | Statische server voor lokaal draaien en deployen. |

## Later: oefeningen bewerken

`app.js` kent geen enkele oefening bij naam; het leest alleen de array
`OEFENINGEN` uit `exercises.js`. Een editor hoeft dus alleen die datastructuur
te produceren (en later bijvoorbeeld op te halen bij de server in plaats van uit
het script).

Vraagtypes die de app nu ondersteunt:

```js
{ type: 'mc',       vraag, opties: [...], goed: <index>, hint, uitleg, vaardigheid }
{ type: 'open',     vraag, voorbeeldantwoord, hint, uitleg, vaardigheid }   // kind kijkt zichzelf na
{ type: 'volgorde', vraag, items: [...], goedeVolgorde: [...indexen...], hint, uitleg, vaardigheid }
```

Een oefening zelf:

```js
{ id, titel, soort, emoji, niveau: 1|2|3, intro,
  alineas: ['...'], woorden: [{ woord, uitleg }], vragen: [...] }
```

Nieuwe tekst toevoegen = een object aan `OEFENINGEN` plakken; de kaartjes,
stippen, score en voortgang passen zich vanzelf aan.

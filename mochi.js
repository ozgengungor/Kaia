/*
 * Mochi — twee weken toetstraining voor de Boom-toetsen van groep 8.
 *
 * Dit bestand is het plan: welke dagen, welke onderdelen per dag, hoe lang
 * en wat Mochi zegt. De oefenstof zelf staat in:
 *   mochi-lezen.js     de teksten en vragen voor hardop en begrijpend lezen
 *   mochi-spelling.js  werkwoorden, woorden en de woordrijen
 *   rekensommen.js     de rekensommen (die worden per dag uitgerekend)
 * De logica zit in toetstraining.js.
 *
 * Elke dag doet alle zeven toetsen mee, samen zo'n 30 minuten. De tijd is
 * verdeeld naar de uitslag van de vorige toets: waar het kind een C haalde
 * (spelling werkwoorden, begrijpend lezen 2012 en rekenen) gaat de meeste
 * tijd naartoe, bij de B's wat minder en bij de A (technisch lezen tekst)
 * alleen een korte opwarmer om het vast te houden.
 *
 * Een onderdeel:
 *   id        sleutel voor de voortgang; toetstraining.js kent elk id
 *   titel     naam op de dagkaart
 *   toets     de Boom-toets waar het voor oefent
 *   uitslag   de vorige uitslag (alleen voor de ouder: staat niet in beeld)
 *   minuten   geschatte tijd
 *   uitleg    één zin op de dagkaart
 *   tip       Mochi's tip vóór de start
 */

const MOCHI = {
  coach: 'Mochi',
  begin: '2026-10-20',   // dag 1; het plan loopt 14 dagen, tot en met 2 november
  dagen: 14,

  onderdelen: [
    {
      id: 'woordrij', titel: 'Woordrij', emoji: '⚡', toets: 'Technisch lezen woorden', uitslag: 'B', minuten: 2,
      uitleg: 'Lees in één minuut zoveel woorden als je kunt, hardop.',
      tip: 'Lees hardop en zo snel als je kunt, maar wel goed. Een woord fout? Verbeter het en ga door. Je begint bij de korte woorden; ze worden steeds langer.'
    },
    {
      id: 'hardop', titel: 'Hardop lezen', emoji: '🗣️', toets: 'Technisch lezen tekst', uitslag: 'A', minuten: 2,
      uitleg: 'Lees de tekst van vandaag hardop voor, met de stopwatch aan.',
      tip: 'Lees de tekst hardop voor, alsof je hem voorleest aan de klas. Let op de punten en komma\'s: daar adem je even.'
    },
    {
      id: 'tekst', titel: 'Vragen bij de tekst', emoji: '🔍', toets: 'Begrijpend lezen', uitslag: 'B', minuten: 4,
      uitleg: 'Drie vragen over de tekst die je net hardop las.',
      tip: 'Lees de vraag goed, en zoek dan het stukje in de tekst waar het antwoord staat. Kijk naar alle antwoorden voordat je kiest.'
    },
    {
      id: 'werkwoorden', titel: 'Werkwoorden', emoji: '✍️', toets: 'Spelling werkwoorden', uitslag: 'C', minuten: 6,
      uitleg: 'Zes zinnen: schrijf het werkwoord goed.',
      tip: 'Elke keer dezelfde stappen: 1. Welke tijd is het (nu, vroeger, of met hebben/zijn)? 2. Wat is de stam? 3. Dan pas: d, t, dt, de of te?'
    },
    {
      id: 'rekenen', titel: 'Rekenen', emoji: '🧮', toets: 'Rekenen-wiskunde', uitslag: 'C', minuten: 8,
      uitleg: 'Acht sommen, uit elk deel van de rekentoets één.',
      tip: 'Schrijf tussenstappen op een kladblaadje, net als bij de echte toets. Lees aan het eind de vraag nog een keer: wat moest je ook alweer uitrekenen?'
    },
    {
      id: 'kort', titel: 'Korte teksten', emoji: '📰', toets: 'Begrijpend lezen (2012)', uitslag: 'C', minuten: 5,
      uitleg: 'Twee korte teksten met elk twee vragen.',
      tip: 'Lees eerst de vraag, en dan pas de tekst. Dan weet je waar je op moet letten. Bij een moeilijk woord: lees de zinnen eromheen.'
    },
    {
      id: 'woorden', titel: 'Woorden spellen', emoji: '🔤', toets: 'Spelling woorden', uitslag: 'B', minuten: 3,
      uitleg: 'Vijf woorden: kies hoe je het goed schrijft.',
      tip: 'Zeg het woord in je hoofd, en denk aan de regel: verdubbelen, ei of ij, een leenwoord? Lijken twee antwoorden goed, kijk dan heel precies.'
    }
  ],

  // Wat Mochi zegt. {naam} wordt Mochi, {dag} het nummer van de dag.
  welkom: [
    'Hoi! Ik ben {naam}. Elke dag een halfuurtje oefenen, en over twee weken ben je helemaal klaar voor de toetsen.',
    'Hé, daar ben je! Zullen we het plan van vandaag doen? Een beetje bamboe erbij en we gaan.',
    'Elke dag een klein stukje, dat werkt het beste. Kies je dag maar!'
  ],
  voorBegin: 'Het plan begint op dinsdag 20 oktober. Je mag alvast rondkijken!',
  naEinde: 'De twee weken zijn om. Wat heb je hard gewerkt! Je mag alle dagen nog een keer doen.',
  dagIntro: [
    'Dit is het plan voor dag {dag}. Begin maar bovenaan, dan doe je ze in een handige volgorde.',
    'Dag {dag}! Zeven korte stukjes, samen ongeveer een halfuur.',
    'Klaar voor dag {dag}? We beginnen met opwarmen: hardop lezen.'
  ],
  dagKlaar: [
    'Dag {dag} is af! Alle zeven onderdelen gedaan. Ik ben trots op je!',
    'Helemaal klaar voor vandaag. Tijd voor bamboe! Morgen gaan we verder.'
  ],
  goed: ['Goed zo!', 'Helemaal goed!', 'Ja, precies!', 'Knap gedaan!', 'Top!'],
  fout: 'Bijna! Kijk maar even mee.',
  klaar: {
    hoog: 'Wauw, bijna alles goed! Dit gaat echt de goede kant op.',
    midden: 'Netjes gedaan! Kijk nog even naar de uitleg bij wat fout ging.',
    laag: 'Dit was pittig, en juist daarom oefenen we het. Morgen weer een stapje verder!'
  }
};

if (typeof module !== 'undefined') { module.exports = { MOCHI }; }

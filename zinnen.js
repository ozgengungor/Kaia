/*
 * Vaste zinnen van Kaia (groep 8) die ook worden voorgelezen.
 *
 * Ze staan hier, en niet in app.js, omdat genereer-audio.js ze moet kunnen
 * lezen om er een opname van te maken. Er mogen daarom geen getallen of andere
 * wisselende stukjes in staan, op {n} bij `reeks` na: die wordt voor elke
 * mogelijke reeks apart opgenomen. De score zelf staat op het eindscherm
 * gewoon onder de tekst van Kaia.
 */

const VASTE_ZINNEN = {
  voorlezenAan: 'Ik lees voortaan met je mee.',
  voorbeeldIntro: 'Zo had je het ongeveer kunnen opschrijven.',

  // Wat Kaia zegt na het nakijken van een vraag.
  kop: {
    goed: ['Helemaal goed!', 'Top gedaan!', 'Precies!', 'Ja! Goed gelezen.', 'Knap hoor!'],
    reeks: ['Wauw, {n} goed op rij!', 'Je bent lekker bezig: {n} achter elkaar goed!', '{n} op rij! Doorgaan zo.'],
    fout: [
      'Bijna! Kijk maar even mee.',
      'Niet erg — hier leer je juist van.',
      'Deze was lastig. Ik leg hem uit.',
      'Nog niet goed, maar je bent op de goede weg.'
    ],
    bijnaOpen: 'Deels goed — mooi dat je eerlijk bent!',
    bijna: 'Net niet — je was er heel dichtbij!'
  },

  // Het eindscherm, per soort stof en per aantal sterren (0 tot en met 3).
  einde: {
    tekst: [
      'Deze was lastig, maar opgeven doen we niet. Zullen we de tekst nog een keer samen doorlezen?',
      'Deze tekst was pittig. Lees hem gerust nog een keer, dan gaat het vaak veel beter.',
      'Goed gedaan! Kijk hieronder nog even bij de vragen die misgingen, dan zit je er volgende keer bovenop.',
      'Wauw! Je hebt de tekst echt goed gelezen. Ik ben trots op je!'
    ],
    regel: [
      'Deze was lastig, maar opgeven doen we niet. Zullen we de regel nog een keer samen doorlezen?',
      'Deze regel was pittig. Lees hem gerust nog een keer, dan gaat het vaak veel beter.',
      'Goed gedaan! Kijk hieronder nog even bij de vragen die misgingen, dan zit je er volgende keer bovenop.',
      'Wauw! Deze regel zit echt in je hoofd. Ik ben trots op je!'
    ]
  }
};

if (typeof module !== 'undefined') { module.exports = { VASTE_ZINNEN }; }

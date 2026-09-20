#!/usr/bin/env node
/*
 * Maakt met ElevenLabs een voorgelezen versie van elke leestekst, elke
 * regelkaart (spelling en taalverzorging), elke hint en, voor groep 5, elk
 * dicteewoord met zijn zin, de speluitleg en de tips. Alles komt als mp3 in
 * audio/. De app speelt die opnames af in plaats van de browserstem (zie
 * spreek() en speelOpname() in app.js).
 *
 * Gebruik:
 *   ELEVENLABS_API_KEY=sk_... node genereer-audio.js        # of zet de sleutel in .env
 *   node genereer-audio.js --alles                          # alles opnieuw opnemen
 *   node genereer-audio.js lees:wolf hint:wolf:0 woord:trein   # alleen deze
 *
 * Per opname staat in audio/manifest.json een vingerafdruk van de tekst, de
 * stem en het model. Alleen wat veranderd is wordt opnieuw opgenomen, zodat
 * herhaald draaien geen tegoed kost.
 *
 * Instellen via omgevingsvariabelen (allemaal optioneel behalve de sleutel):
 *   ELEVENLABS_VOICE_ID   standaard YUdpWWny7k5yb4QCeweX (de stem die voor deze app gekozen is)
 *   ELEVENLABS_MODEL_ID   standaard eleven_multilingual_v2
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');

const ROOT = __dirname;
const AUDIO_MAP = path.join(ROOT, 'audio');
const MANIFEST = path.join(AUDIO_MAP, 'manifest.json');

/* ------------------------------------------------------------------ */
/*  Instellingen                                                        */
/* ------------------------------------------------------------------ */

// Een minimale .env-lezer, zodat er geen dependency nodig is.
function laadDotEnv() {
  const bestand = path.join(ROOT, '.env');
  if (!fs.existsSync(bestand)) return;
  for (const regel of fs.readFileSync(bestand, 'utf8').split('\n')) {
    const m = regel.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/i);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}
laadDotEnv();

const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || 'YUdpWWny7k5yb4QCeweX';
const MODEL_ID = process.env.ELEVENLABS_MODEL_ID || 'eleven_multilingual_v2';
const FORMAAT = 'mp3_44100_64';
const STEM_INSTELLINGEN = { stability: 0.5, similarity_boost: 0.75, style: 0.2, use_speaker_boost: true };

if (!API_KEY) {
  console.error('Geen ELEVENLABS_API_KEY gevonden. Zet hem in .env of geef hem mee als omgevingsvariabele.');
  process.exit(1);
}

/* ------------------------------------------------------------------ */
/*  Welke teksten                                                      */
/* ------------------------------------------------------------------ */

// exercises.js, spelling.js en taal.js zijn browserscripts (geen modules); we voeren ze
// uit in een leeg sandboxje en vragen de array als resultaat terug.
function laadArray(bestand, naam) {
  const bron = fs.readFileSync(path.join(ROOT, bestand), 'utf8');
  return vm.runInNewContext(`${bron};${naam}`, {}, { filename: bestand });
}

// Sterretjes zijn opmaak (vet), pijltjes lezen we als "wordt".
function spreekbaar(tekst) {
  return String(tekst).replace(/\*/g, '').replace(/\s*→\s*/g, ' wordt ').trim();
}

function opnames() {
  const lijst = [];
  const leesOefeningen = laadArray('exercises.js', 'OEFENINGEN');
  const regelOefeningen = [
    ...laadArray('spelling.js', 'SPELLINGOEFENINGEN'),
    ...laadArray('taal.js', 'TAALOEFENINGEN')
  ];
  const alleOefeningen = [...leesOefeningen, ...regelOefeningen];
  for (const oef of leesOefeningen) {
    lijst.push({
      sleutel: `lees:${oef.id}`,
      bestand: `lees-${oef.id}.mp3`,
      titel: oef.titel,
      tekst: [oef.titel, ...oef.alineas].map(spreekbaar).join('\n\n')
    });
  }
  for (const oef of regelOefeningen) {
    const regel = oef.regel || {};
    const delen = [oef.titel, ...(regel.stappen || [])];
    if (regel.voorbeelden && regel.voorbeelden.length) {
      delen.push('Zo ziet dat eruit.');
      regel.voorbeelden.forEach((v) => delen.push(`${v.woord}: ${v.uitleg}.`));
    }
    if (regel.letop) delen.push(`Let op! ${regel.letop}`);
    lijst.push({
      sleutel: `regel:${oef.id}`,
      bestand: `regel-${oef.id}.mp3`,
      titel: oef.titel,
      tekst: delen.map(spreekbaar).join('\n\n')
    });
  }
  // De hints bij de vragen, per oefening genummerd vanaf 1.
  for (const oef of alleOefeningen) {
    (oef.vragen || []).forEach((vraag, i) => {
      if (!vraag.hint) return;
      lijst.push({
        sleutel: `hint:${oef.id}:${i}`,
        bestand: `hint-${oef.id}-${i + 1}.mp3`,
        titel: `${oef.titel} — hint ${i + 1}`,
        tekst: spreekbaar(vraag.hint)
      });
    });
  }
  // Groep 5: per woord een dictee-opname ("Trein. De trein rijdt naar Utrecht."),
  // plus de uitleg van elk spel en de tip van elk woordpakket.
  const groep5 = laadArray('groep5.js', 'GROEP5');
  const gezien = new Set();
  for (const pakket of groep5.pakketten) {
    for (const item of pakket.woorden) {
      const woord = item.w.replace(/[[\]]/g, '');
      if (gezien.has(woord)) continue;
      gezien.add(woord);
      lijst.push({
        sleutel: `woord:${woord}`,
        bestand: `woord-${woord}.mp3`,
        titel: `Groep 5 — ${woord}`,
        tekst: `${woord[0].toUpperCase()}${woord.slice(1)}. ${item.zin}`
      });
    }
    lijst.push({
      sleutel: `g5:pakket:${pakket.id}`,
      bestand: `g5-pakket-${pakket.id}.mp3`,
      titel: `Groep 5 — tip ${pakket.titel}`,
      tekst: spreekbaar(pakket.tip)
    });
  }
  for (const spel of groep5.spellen) {
    lijst.push({
      sleutel: `g5:spel:${spel.id}`,
      bestand: `g5-spel-${spel.id}.mp3`,
      titel: `Groep 5 — uitleg ${spel.titel}`,
      tekst: spreekbaar(spel.uitleg)
    });
  }
  // Losse zinnen uit de app zelf. De tekst moet gelijk zijn aan die in app.js.
  lijst.push({
    sleutel: 'ui:voorlezen-aan',
    bestand: 'ui-voorlezen-aan.mp3',
    titel: 'Voorleesknop aangezet',
    tekst: 'Ik lees voortaan met je mee.'
  });
  return lijst;
}

function vingerafdruk(item) {
  return crypto.createHash('sha1').update([VOICE_ID, MODEL_ID, FORMAAT, item.tekst].join('\u0000')).digest('hex');
}

/* ------------------------------------------------------------------ */
/*  ElevenLabs                                                         */
/* ------------------------------------------------------------------ */

const slaap = (ms) => new Promise((r) => setTimeout(r, ms));

async function neemOp(item) {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}?output_format=${FORMAAT}`;
  const body = JSON.stringify({
    text: item.tekst,
    model_id: MODEL_ID,
    language_code: 'nl',
    voice_settings: STEM_INSTELLINGEN
  });
  for (let poging = 1; poging <= 3; poging++) {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'xi-api-key': API_KEY, 'Content-Type': 'application/json', Accept: 'audio/mpeg' },
      body
    });
    if (res.ok) return Buffer.from(await res.arrayBuffer());
    const fout = await res.text();
    if (res.status === 429 && poging < 3) {
      console.warn(`  even wachten (429), poging ${poging + 1}...`);
      await slaap(5000 * poging);
      continue;
    }
    throw new Error(`ElevenLabs gaf ${res.status}: ${fout.slice(0, 300)}`);
  }
}

/* ------------------------------------------------------------------ */
/*  Hoofdprogramma                                                     */
/* ------------------------------------------------------------------ */

async function main() {
  const args = process.argv.slice(2);
  const alles = args.includes('--alles');
  const gevraagd = new Set(args.filter((a) => !a.startsWith('--')));

  fs.mkdirSync(AUDIO_MAP, { recursive: true });
  const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, 'utf8')) : {};
  const bestaand = manifest.opnames || {};
  const nieuw = {};

  let opgenomen = 0;
  let tekens = 0;
  for (const item of opnames()) {
    const hash = vingerafdruk(item);
    const oud = bestaand[item.sleutel];
    const bestandsPad = path.join(AUDIO_MAP, item.bestand);
    const gekozen = gevraagd.size === 0 || gevraagd.has(item.sleutel);
    const actueel = oud && oud.hash === hash && fs.existsSync(bestandsPad);

    if (!gekozen || (actueel && !alles)) {
      if (oud && fs.existsSync(bestandsPad)) nieuw[item.sleutel] = oud;
      console.log(`${actueel ? '=' : '-'} ${item.sleutel} (${actueel ? 'ongewijzigd' : 'overgeslagen'})`);
      continue;
    }

    process.stdout.write(`+ ${item.sleutel}: ${item.tekst.length} tekens opnemen... `);
    const audio = await neemOp(item);
    fs.writeFileSync(bestandsPad, audio);
    nieuw[item.sleutel] = {
      bestand: item.bestand,
      titel: item.titel,
      hash,
      tekens: item.tekst.length,
      opgenomen: new Date().toISOString()
    };
    opgenomen++;
    tekens += item.tekst.length;
    console.log(`${(audio.length / 1024).toFixed(0)} kB`);
  }

  const uit = {
    stem: VOICE_ID,
    model: MODEL_ID,
    bijgewerkt: new Date().toISOString(),
    opnames: nieuw
  };
  fs.writeFileSync(MANIFEST, JSON.stringify(uit, null, 2) + '\n');
  console.log(`\nKlaar: ${opgenomen} opname(s) gemaakt, ${tekens} tekens gebruikt. Manifest: audio/manifest.json`);
}

main().catch((e) => {
  console.error(`\nMislukt: ${e.message}`);
  process.exit(1);
});

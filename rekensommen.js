/*
 * Mochi — rekenen en wiskunde.
 *
 * De sommen staan hier niet uitgeschreven: ze worden per dag gemaakt door
 * kleine "makers", met een vaste toevalsgenerator per dag. Dag 3 heeft dus
 * altijd dezelfde sommen, ook na herladen, en het antwoord en de uitleg
 * worden uitgerekend in plaats van overgetypt.
 *
 * Elke dag krijgt twee sommen uit elk van de acht domeinen: een gewone en
 * een moeilijkere in de stijl van de IEP-doorstroomtoets (meer stappen,
 * verhaaltjes, terugrekenen). Eerder stond hier: één som uit elk van de acht domeinen van de Boom-toets
 * rekenen-wiskunde (getallen, bewerkingen, kommagetallen, breuken,
 * procenten, verhoudingen, meten, meetkunde en verbanden). Per domein draait
 * de soort som mee met de dag, en vanaf dag 6 en dag 11 worden de getallen
 * wat groter.
 *
 * Een som:
 *   { domein, vraag, antwoord, voor?, na?, uitleg }             typ een getal
 *   { domein, vraag, opties: [..], goed, uitleg }                 meerkeuze
 *   `voor` en `na` staan voor en achter het invulvak ("€", "km").
 */

const Rekensommen = (() => {
  // Een kleine toevalsgenerator met een zaadje (mulberry32).
  function generator(zaad) {
    let a = zaad >>> 0;
    const volgende = () => {
      a = (a + 0x6d2b79f5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    return {
      getal: (van, tot) => van + Math.floor(volgende() * (tot - van + 1)),
      kies: (lijst) => lijst[Math.floor(volgende() * lijst.length)],
      schud: (lijst) => {
        const kopie = lijst.slice();
        for (let i = kopie.length - 1; i > 0; i--) {
          const j = Math.floor(volgende() * (i + 1));
          [kopie[i], kopie[j]] = [kopie[j], kopie[i]];
        }
        return kopie;
      }
    };
  }

  // Getallen op z'n Nederlands: 4.678 en 3,75.
  function nl(n, decimalen) {
    const afgerond = Math.round(n * 10000) / 10000;
    const [heel, rest] = (decimalen === undefined ? String(Math.abs(afgerond)) : Math.abs(afgerond).toFixed(decimalen)).split('.');
    const metPunten = heel.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `${afgerond < 0 ? '−' : ''}${metPunten}${rest ? `,${rest}` : ''}`;
  }
  const euro = (n) => `€ ${nl(n, Number.isInteger(n) ? undefined : 2)}`;
  const tijd = (min) => `${Math.floor(min / 60)}:${String(min % 60).padStart(2, '0')}`;

  // Schuift het goede antwoord tussen de foute en geeft de plek terug.
  function meerkeuze(r, goed, fout) {
    const opties = r.schud([goed, ...fout]);
    return { opties, goed: opties.indexOf(goed) };
  }

  // Hoe je een percentage van een getal uitrekent, met de handigste route.
  function uitlegProcent(procent, totaal, antwoord) {
    const breuk = { 25: '1/4', 50: '1/2', 75: '3/4' }[procent];
    if (breuk) return `${procent}% is ${breuk} deel. ${breuk} van ${totaal} = ${nl(antwoord)}.`;
    const tien = totaal / 10;
    if (procent % 10 === 0) return `Eerst 10%: ${totaal} : 10 = ${nl(tien)}. Je wilt ${procent}%, dus ${procent / 10} × ${nl(tien)} = ${nl(antwoord)}.`;
    return `Eerst 10%: ${totaal} : 10 = ${nl(tien)}. 5% is de helft daarvan: ${nl(tien / 2)}. ${procent === 5 ? 'Dus' : `10% + 5% = ${nl(tien)} + ${nl(tien / 2)}, dus`} ${procent}% = ${nl(antwoord)}.`;
  }

  function ggd(a, b) { return b ? ggd(b, a % b) : a; }

  /* ------------------------------------------------------------------ */
  /*  De makers, per domein                                              */
  /* ------------------------------------------------------------------ */

  const DOMEINEN = [
    {
      naam: 'Getallen',
      iep: [
        (r, n) => {
          const start = r.kies([1.5, 2.5, 0.75, 3.2, 1.25]);
          const factor = n === 3 ? r.kies([2, 3]) : 2;
          const rij = [start, start * factor, start * factor ** 2, start * factor ** 3];
          const antwoord = start * factor ** 4;
          return {
            vraag: `Hoe gaat deze rij verder? ${rij.map((g) => nl(g)).join(' – ')} – ?`,
            antwoord,
            uitleg: `Kijk wat er elke keer gebeurt: ${nl(rij[0])} × ${factor} = ${nl(rij[1])}, ${nl(rij[1])} × ${factor} = ${nl(rij[2])}. Steeds × ${factor}. Dus ${nl(rij[3])} × ${factor} = ${nl(antwoord)}.`
          };
        },
        (r) => {
          const getal = r.getal(10001, 99999) / 1000;
          const decimalen = r.kies([1, 2]);
          const antwoord = Math.round(getal * 10 ** decimalen) / 10 ** decimalen;
          const volgend = Math.floor((getal * 10 ** (decimalen + 1)) % 10);
          return {
            vraag: `Rond ${nl(getal, 3)} af op ${decimalen === 1 ? 'één cijfer' : 'twee cijfers'} achter de komma.`,
            antwoord,
            uitleg: `Kijk naar het cijfer dáárna: dat is een ${volgend}. ${volgend >= 5 ? 'Dat is 5 of meer, dus naar boven' : 'Dat is minder dan 5, dus naar beneden'}: ${nl(antwoord, decimalen)}.`
          };
        },
        (r) => {
          const miljoen = r.getal(1, 9);
          const duizend = r.kies([4, 40, 400, 15, 250, 7]);
          const een = r.kies([5, 30, 0, 18, 600]);
          const woorden = {
            4: 'vierduizend', 40: 'veertigduizend', 400: 'vierhonderdduizend', 15: 'vijftienduizend', 250: 'tweehonderdvijftigduizend', 7: 'zevenduizend',
            5: ' vijf', 30: ' dertig', 0: '', 18: ' achttien', 600: ' zeshonderd'
          };
          const telwoord = ['', 'een', 'twee', 'drie', 'vier', 'vijf', 'zes', 'zeven', 'acht', 'negen'][miljoen];
          const antwoord = miljoen * 1000000 + duizend * 1000 + een;
          return {
            vraag: `Schrijf als getal: ${telwoord} miljoen ${woorden[duizend]}${woorden[een]}.`,
            antwoord,
            uitleg: `Miljoen heeft 6 nullen: ${nl(miljoen * 1000000)}. Daar komt ${nl(duizend * 1000)}${een ? ` en ${een}` : ''} bij. Samen ${nl(antwoord)}. Lege plekken vul je met een 0.`
          };
        },
        (r) => {
          const a = r.kies([398, 402, 497, 503, 698, 789, 812]);
          const b = r.kies([49, 51, 19, 21, 99, 31]);
          const ra = Math.round(a / 100) * 100;
          const rb = Math.round(b / 10) * 10;
          const goed = ra * rb;
          const { opties, goed: plek } = meerkeuze(r, nl(goed), [nl(goed / 10), nl(goed * 10), nl(goed * 100)]);
          return {
            vraag: `Ongeveer hoeveel is ${a} × ${b}?`,
            opties,
            goed: plek,
            uitleg: `Schatten: maak er mooie ronde getallen van. ${a} is ongeveer ${ra} en ${b} is ongeveer ${rb}. ${ra} × ${rb} = ${nl(goed)}.`
          };
        }
      ],
      makers: [
        (r, n) => {
          const getal = r.getal(n === 1 ? 10000 : 100000, n === 1 ? 99999 : 999999);
          const op = n === 1 ? 100 : r.kies([1000, 10000]);
          const woord = { 100: 'honderdtallen', 1000: 'duizendtallen', 10000: 'tienduizendtallen' }[op];
          const antwoord = Math.round(getal / op) * op;
          const cijfer = Math.floor((getal % op) / (op / 10));
          return {
            vraag: `Rond ${nl(getal)} af op ${woord}.`,
            antwoord,
            uitleg: `Kijk naar het cijfer rechts van de ${woord}: dat is een ${cijfer}. ${cijfer >= 5 ? 'Dat is 5 of meer, dus je rondt naar boven af' : 'Dat is minder dan 5, dus je rondt naar beneden af'}: ${nl(antwoord)}.`
          };
        },
        (r) => {
          // Een patroon uit een situatie: er komen er steeds evenveel bij.
          const p = r.kies([
            { start: 4, stap: 2, ding: 'tafel', meer: 'tafels', wat: 'stoelen',
              zin: 'Aan 1 vierkante tafel passen 4 stoelen. Schuif je tafels in een rij tegen elkaar, dan passen er aan 2 tafels 6 stoelen en aan 3 tafels 8.' },
            { start: 6, stap: 4, ding: 'lange tafel', meer: 'lange tafels', wat: 'stoelen',
              zin: 'Aan 1 lange tafel passen 6 stoelen. Zet je ze met de korte kanten tegen elkaar, dan passen er aan 2 tafels 10 stoelen en aan 3 tafels 14.' },
            { start: 4, stap: 3, ding: 'vierkantje', meer: 'vierkantjes', wat: 'lucifers',
              zin: 'Voor 1 vierkantje van lucifers heb je 4 lucifers nodig. Leg je de vierkantjes in een rij tegen elkaar, dan heb je voor 2 vierkantjes 7 lucifers nodig en voor 3 vierkantjes 10.' }
          ]);
          const aantal = r.getal(8, 25);
          const antwoord = p.start + (aantal - 1) * p.stap;
          return {
            vraag: `${p.zin} Hoeveel ${p.wat} zijn het bij ${aantal} ${p.meer}?`,
            antwoord,
            na: p.wat,
            uitleg: `Er komen er steeds ${p.stap} bij. Bij 1 ${p.ding} zijn het er ${p.start}, en daarna komt er nog ${aantal - 1} keer ${p.stap} bij: ${p.start} + ${aantal - 1} × ${p.stap} = ${antwoord}. Alles tekenen hoeft dus niet.`
          };
        },
        (r, n) => {
          const stap = n === 1 ? 100 : 1000;
          const van = r.getal(2, 80) * stap * 10;
          const tot = van + r.getal(1, 9) * stap * 2;
          const antwoord = (van + tot) / 2;
          return {
            vraag: `Welk getal ligt precies in het midden tussen ${nl(van)} en ${nl(tot)}?`,
            antwoord,
            uitleg: `Het verschil is ${nl(tot - van)}. De helft daarvan is ${nl((tot - van) / 2)}. ${nl(van)} + ${nl((tot - van) / 2)} = ${nl(antwoord)}.`
          };
        },
        (r) => {
          const cijfers = r.schud([1, 2, 3, 4, 5, 6, 8, 9]).slice(0, 6);
          const getal = Number(cijfers.join(''));
          const plek = r.getal(0, 3);
          const cijfer = cijfers[plek];
          const waarde = cijfer * 10 ** (5 - plek);
          return {
            vraag: `Wat is de waarde van de ${cijfer} in het getal ${nl(getal)}?`,
            antwoord: waarde,
            uitleg: `De ${cijfer} staat op de plek van de ${['honderdduizendtallen', 'tienduizendtallen', 'duizendtallen', 'honderdtallen'][plek]}. Dus hij is ${nl(waarde)} waard.`
          };
        }
      ]
    },
    {
      naam: 'Bewerkingen',
      iep: [
        (r) => {
          const a = r.getal(10, 40), b = r.getal(3, 9), c = r.getal(3, 9), d = r.kies([2, 4, 5]), e = d * r.getal(3, 12);
          const antwoord = a + b * c - e / d;
          return {
            vraag: `Reken uit: ${a} + ${b} × ${c} − ${e} : ${d}`,
            antwoord,
            uitleg: `Eerst keer en delen, daarna plus en min. ${b} × ${c} = ${b * c} en ${e} : ${d} = ${e / d}. Dan ${a} + ${b * c} − ${e / d} = ${antwoord}.`
          };
        },
        (r) => {
          const aantal = r.getal(2, 4);
          const prijs = r.getal(495, 1595) / 100;
          const prijsAfgerond = Math.round(prijs * 20) / 20;
          const totaal = Math.round(aantal * prijsAfgerond * 100) / 100;
          const betaald = Math.ceil(totaal / 10) * 10 + r.kies([0, 10, 20]);
          const antwoord = Math.round((betaald - totaal) * 100) / 100;
          return {
            vraag: `Je koopt ${aantal} boeken van ${euro(prijsAfgerond)} per stuk en betaalt met ${euro(betaald)}. Hoeveel krijg je terug?`,
            antwoord,
            voor: '€',
            uitleg: `Eerst wat je moet betalen: ${aantal} × ${euro(prijsAfgerond)} = ${euro(totaal)}. Dan het wisselgeld: ${euro(betaald)} − ${euro(totaal)} = ${euro(antwoord)}.`
          };
        },
        (r) => {
          const touw = r.getal(30, 95) * 10;           // cm
          const stuk = r.kies([15, 25, 35, 45, 60, 75]);
          const antwoord = Math.floor(touw / stuk);
          return {
            vraag: `Een touw van ${nl(touw / 100)} meter wordt in stukken van ${stuk} cm geknipt. Hoeveel hele stukken krijg je?`,
            antwoord,
            na: 'stukken',
            uitleg: `Maak eerst alles cm: ${nl(touw / 100)} m = ${touw} cm. ${touw} : ${stuk} = ${antwoord} rest ${touw % stuk}. Het stukje van ${touw % stuk} cm is te kort, dus ${antwoord} hele stukken.`
          };
        },
        (r) => {
          const a = r.getal(14, 48);
          const b = r.getal(17, 36);
          return {
            vraag: `Welk getal moet op de puntjes? … × ${b} = ${nl(a * b)}`,
            antwoord: a,
            uitleg: `Het omgekeerde van keer is delen: ${nl(a * b)} : ${b} = ${a}. Controleer: ${a} × ${b} = ${nl(a * b)}.`
          };
        }
      ],
      makers: [
        (r, n) => {
          const a = r.getal(23, n === 3 ? 189 : 89);
          const b = r.getal(12, 48);
          return {
            vraag: `Reken uit: ${a} × ${b}`,
            antwoord: a * b,
            uitleg: `Splits het: ${a} × ${Math.floor(b / 10) * 10} = ${nl(a * Math.floor(b / 10) * 10)} en ${a} × ${b % 10} = ${nl(a * (b % 10))}. Samen ${nl(a * b)}.`
          };
        },
        (r, n) => {
          const deler = r.getal(12, n === 1 ? 19 : 32);
          const uitkomst = r.getal(14, 64);
          return {
            vraag: `Reken uit: ${nl(deler * uitkomst)} : ${deler}`,
            antwoord: uitkomst,
            uitleg: `Hoe vaak past ${deler} in ${nl(deler * uitkomst)}? Probeer ${deler} × ${Math.floor(uitkomst / 10) * 10} = ${nl(deler * Math.floor(uitkomst / 10) * 10)}, dan blijft er ${nl(deler * (uitkomst % 10))} over, en dat is nog ${uitkomst % 10} keer ${deler}. Samen ${uitkomst}.`
          };
        },
        (r) => {
          const per = r.kies([6, 8, 9, 12, 15]);
          const kinderen = r.getal(5, 30) * per + r.getal(1, per - 1);
          const antwoord = Math.ceil(kinderen / per);
          return {
            vraag: `Er gaan ${kinderen} kinderen op schoolreis. In één busje passen ${per} kinderen. Hoeveel busjes zijn er minstens nodig?`,
            antwoord,
            na: 'busjes',
            uitleg: `${kinderen} : ${per} = ${antwoord - 1} rest ${kinderen % per}. Die ${kinderen % per} kinderen moeten ook mee, dus je hebt één busje extra nodig: ${antwoord}.`
          };
        },
        (r) => {
          // Weten waarom: klopt de manier van rekenen van een ander kind?
          const soort = r.getal(0, 2);
          if (soort === 0) {
            const k = r.getal(6, 19);
            const goed = `Ja, want ${4 * k} = 4 × ${k}, dus 25 × ${4 * k} = 25 × 4 × ${k}`;
            const { opties, goed: plek } = meerkeuze(r, goed, ['Nee, een keersom mag je niet in stukjes knippen', `Nee, hij had 100 + ${k} moeten doen`, 'Ja, maar het werkt alleen met het getal 25']);
            return {
              vraag: `Sem rekent 25 × ${4 * k} zo uit: 25 × 4 = 100, en 100 × ${k} = ${nl(100 * k)}. Klopt zijn manier?`,
              opties, goed: plek,
              uitleg: `Sem splitst ${4 * k} in 4 × ${k}. Dat mag altijd bij keer: 25 × ${4 * k} = 25 × 4 × ${k} = 100 × ${k} = ${nl(100 * k)}. Een handige manier dus.`
            };
          }
          if (soort === 1) {
            const a = r.getal(2, 4) * 10 + r.getal(2, 9);
            const b = r.getal(2, 4) * 10 + r.getal(2, 9);
            const [at, ae, bt, be] = [a - (a % 10), a % 10, b - (b % 10), b % 10];
            const fout = at * bt + ae * be;
            const goed = `Nee, ze vergeet ${at} × ${be} en ${ae} × ${bt}`;
            const { opties, goed: plek } = meerkeuze(r, goed, ['Ja, zo splits je een keersom precies goed', `Nee, ze had ${at} + ${bt} moeten doen`, 'Nee, ze had eerst moeten afronden']);
            return {
              vraag: `Noor rekent ${a} × ${b} zo uit: ${at} × ${bt} = ${nl(at * bt)} en ${ae} × ${be} = ${ae * be}, samen ${nl(fout)}. Klopt dat?`,
              opties, goed: plek,
              uitleg: `Bij ${a} × ${b} moet élk stuk van ${a} keer élk stuk van ${b}: ${at} × ${bt}, ${at} × ${be}, ${ae} × ${bt} en ${ae} × ${be}. Samen ${nl(a * b)}, niet ${nl(fout)}.`
            };
          }
          const a = r.getal(3, 9) * 100 + r.getal(1, 9);
          const h = r.getal(1, Math.floor(a / 100) - 1);
          const d = r.getal(1, 3);
          const b = h * 100 - d;
          const goed = `Ja, hij haalde ${d} te veel weg, dus die moeten er weer bij`;
          const { opties, goed: plek } = meerkeuze(r, goed, [`Nee, hij moet die ${d} er ook nog af halen`, 'Nee, je mag bij min niet afronden', `Ja, maar alleen omdat ${a} een oneven getal is`].filter((o) => o !== goed));
          return {
            vraag: `Daan rekent ${a} − ${b} zo uit: ${a} − ${h * 100} = ${a - h * 100}, en dan ${d} erbij: ${a - b}. Klopt zijn manier?`,
            opties, goed: plek,
            uitleg: `${b} is ${d} minder dan ${h * 100}. Als je ${h * 100} aftrekt, haal je ${d} te veel weg. Daarom moet je er ${d} bij doen: ${a} − ${b} = ${a - b}.`
          };
        }
      ]
    },
    {
      naam: 'Kommagetallen',
      iep: [
        (r) => {
          const [a, b] = r.kies([[3.6, 2.5], [1.2, 0.5], [4.8, 0.25], [2.4, 1.5], [0.6, 0.4], [7.5, 0.2], [1.6, 2.5]]);
          const antwoord = Math.round(a * b * 1000) / 1000;
          return {
            vraag: `Reken uit: ${nl(a)} × ${nl(b)}`,
            antwoord,
            uitleg: `Reken eerst zonder komma's: ${nl(a * 10)} × ${nl(b * (b < 1 && b * 10 % 1 ? 100 : 10))}. Tel dan hoeveel cijfers er samen achter de komma's stonden en zet de komma terug. Zo krijg je ${nl(antwoord)}.`
          };
        },
        (r) => {
          // Weten waarom: veelgemaakte denkfouten met kommagetallen.
          const soort = r.getal(0, 2);
          if (soort === 0) {
            const klein = r.getal(1, 7);
            const groot = r.getal(klein + 1, 9);
            const langNl = nl(klein / 10 + r.getal(1, 9) / 100, 2);   // bv. 0,25
            const goed = `Nee: ${nl(groot / 10)} = ${nl(groot / 10, 2)}, en dat is meer dan ${langNl}`;
            const { opties, goed: plek } = meerkeuze(r, goed, [`Ja, want ${langNl.slice(2)} is meer dan ${groot}`, 'Ja, want een getal met meer cijfers is groter', 'Nee, ze zijn allebei even groot']);
            return {
              vraag: `Noor zegt: "${langNl} is groter dan ${nl(groot / 10)}, want ${langNl.slice(2)} is meer dan ${groot}." Klopt dat?`,
              opties, goed: plek,
              uitleg: `Vul aan tot evenveel cijfers achter de komma: ${nl(groot / 10)} = ${nl(groot / 10, 2)}. ${groot}0 honderdsten is meer dan ${langNl.slice(2)} honderdsten. Meer cijfers betekent niet groter.`
            };
          }
          if (soort === 1) {
            const getal = r.getal(12, 98) / 10;
            const goed = `Nee: ${nl(getal, 1)}0 is even groot als ${nl(getal, 1)}. Bij × 10 schuift de komma: ${nl(getal * 10)}`;
            const { opties, goed: plek } = meerkeuze(r, goed, ['Ja, bij × 10 zet je er altijd een 0 achter', `Nee, het moet ${nl(getal + 10)} zijn`, `Ja, want ${nl(getal, 1)}0 heeft een 0 meer`]);
            return {
              vraag: `Sem zegt: "Bij × 10 zet je er gewoon een 0 achter. Dus ${nl(getal, 1)} × 10 = ${nl(getal, 1)}0." Klopt dat?`,
              opties, goed: plek,
              uitleg: `Een 0 achter de komma verandert niets: ${nl(getal, 1)}0 = ${nl(getal, 1)}. Bij × 10 worden alle cijfers 10 keer zoveel waard: de komma schuift één plek naar rechts. ${nl(getal, 1)} × 10 = ${nl(getal * 10)}.`
            };
          }
          const heel = r.getal(3, 12);
          const deler = r.kies([0.5, 0.25]);
          const goed = `Nee: in ${heel} passen ${heel / deler} keer ${nl(deler)}, dus ${heel} : ${nl(deler)} = ${heel / deler}`;
          const { opties, goed: plek } = meerkeuze(r, goed, ['Ja, delen maakt een getal altijd kleiner', `Ja, want ${heel} : ${nl(deler)} = ${nl(heel * deler)}`, 'Nee, delen maakt een getal altijd groter']);
          return {
            vraag: `Lotte zegt: "Als je deelt, wordt de uitkomst altijd kleiner." Klopt dat? Denk aan ${heel} : ${nl(deler)}.`,
            opties, goed: plek,
            uitleg: `${heel} : ${nl(deler)} betekent: hoe vaak past ${nl(deler)} in ${heel}? ${deler === 0.5 ? 'Er passen 2 halven in 1' : 'Er passen 4 kwarten in 1'}, dus in ${heel} passen er ${heel / deler}. Delen door een getal kleiner dan 1 maakt de uitkomst juist groter.`
          };
        },
        (r) => {
          const kiloprijs = r.getal(80, 240) / 10;
          const gram = r.kies([250, 300, 400, 450, 600, 750]);
          const antwoord = Math.round(kiloprijs * gram / 10) / 100;
          const wat = r.kies(['kaas', 'gehakt', 'kipfilet', 'drop']);
          return {
            vraag: `${wat[0].toUpperCase()}${wat.slice(1)} kost ${euro(kiloprijs)} per kilo. Je koopt ${gram} gram. Hoeveel betaal je? Rond af op hele centen.`,
            antwoord,
            voor: '€',
            uitleg: `${gram} gram is ${nl(gram / 1000)} kilo. ${nl(gram / 1000)} × ${euro(kiloprijs)} = ${euro(antwoord)}. Handig: eerst 100 gram (${euro(kiloprijs / 10)}), dan × ${gram / 100}.`
          };
        },
        (r) => {
          const kinderen = r.kies([4, 5, 6, 8]);
          const ieder = r.getal(250, 1275) / 100;
          const per = Math.round(ieder * 4) / 4;
          const totaal = per * kinderen;
          return {
            vraag: `${kinderen} kinderen verdelen ${euro(totaal)} eerlijk. Hoeveel krijgt ieder kind?`,
            antwoord: per,
            voor: '€',
            uitleg: `${euro(totaal)} : ${kinderen}. Reken in centen als dat makkelijker is: ${Math.round(totaal * 100)} : ${kinderen} = ${Math.round(per * 100)} cent = ${euro(per)}.`
          };
        }
      ],
      makers: [
        (r) => {
          const a = r.getal(105, 1995);       // in honderdsten
          const b = r.getal(11, 99) * 10;     // één cijfer achter de komma
          return {
            vraag: `Reken uit: ${nl(a / 100, 2)} + ${nl(b / 100, 1)}`,
            antwoord: (a + b) / 100,
            uitleg: `Zet de komma's onder elkaar: ${nl(a / 100, 2)} + ${nl(b / 100, 2)}. Dan tel je gewoon op: ${nl((a + b) / 100, 2)}.`
          };
        },
        (r) => {
          const centen = r.getal(45, 395) * 5;            // stappen van 5 cent
          const aantal = r.getal(3, 9);
          const ding = r.kies(['een ijsje', 'een schrift', 'een pakje drinken', 'een kaartje voor de bus', 'een zakje snoep']);
          return {
            vraag: `${ding[0].toUpperCase()}${ding.slice(1)} kost ${euro(centen / 100)}. Hoeveel betaal je voor ${aantal} stuks?`,
            antwoord: (centen * aantal) / 100,
            voor: '€',
            uitleg: `Reken in centen: ${centen} × ${aantal} = ${centen * aantal} cent. Dat is ${euro((centen * aantal) / 100)}.`
          };
        },
        (r) => {
          const getal = r.getal(12, 980) / 10;
          const keer = r.kies([10, 100, 1000]);
          const delen = r.getal(0, 1) === 1;
          const antwoord = delen ? getal / keer : getal * keer;
          return {
            vraag: `Reken uit: ${nl(getal)} ${delen ? ':' : '×'} ${nl(keer)}`,
            antwoord,
            uitleg: `${delen ? 'Delen' : 'Keer'} door ${nl(keer)}: de komma schuift ${String(keer).length - 1} ${keer === 10 ? 'plaats' : 'plaatsen'} naar ${delen ? 'links' : 'rechts'}. Zo krijg je ${nl(antwoord)}.`
          };
        },
        (r) => {
          // Het grootste getal is juist het kortste: daar trappen kinderen in.
          const basis = r.getal(2, 8);
          const grootste = (basis + 1) / 10;
          const getallen = [grootste, basis / 10 + 0.05, basis / 10 + 0.095, (basis + 1) / 100];
          const { opties, goed } = meerkeuze(r, nl(grootste), getallen.filter((g) => g !== grootste).map((g) => nl(g)));
          return {
            vraag: 'Welk getal is het grootst?',
            opties,
            goed,
            uitleg: `Vul ze aan tot evenveel cijfers achter de komma: ${getallen.map((g) => nl(g, 3)).join(', ')}. Dan zie je dat ${nl(grootste, 3)} het grootst is. Een lang getal achter de komma is dus niet vanzelf groter.`
          };
        }
      ]
    },
    {
      naam: 'Breuken',
      iep: [
        (r) => {
          const [a, b, c, d] = r.kies([[1, 2, 1, 3], [1, 4, 2, 3], [2, 5, 1, 2], [1, 3, 1, 6], [3, 4, 1, 6], [1, 2, 2, 5]]);
          const noemer = (b * d) / ggd(b, d);
          const teller = a * (noemer / b) + c * (noemer / d);
          const g = ggd(teller, noemer);
          const goed = `${teller / g}/${noemer / g}`;
          const fout = [`${a + c}/${b + d}`, `${a + c}/${noemer}`, `${teller + 1}/${noemer}`].filter((f) => f !== goed);
          const { opties, goed: plek } = meerkeuze(r, goed, fout.slice(0, 3));
          return {
            vraag: `Reken uit: ${a}/${b} + ${c}/${d}`,
            opties,
            goed: plek,
            uitleg: `Maak de noemers gelijk: ${noemer}. ${a}/${b} = ${a * (noemer / b)}/${noemer} en ${c}/${d} = ${c * (noemer / d)}/${noemer}. Samen ${teller}/${noemer}${g > 1 ? ` = ${goed}` : ''}. Tellers en noemers gewoon optellen mag niet!`
          };
        },
        (r) => {
          const [t, nm] = r.kies([[3, 5], [2, 3], [3, 4], [5, 8], [4, 7]]);
          const stuk = r.getal(3, 7);
          const deel = t * stuk;
          const totaal = nm * stuk;
          const wie = r.kies(['meisjes', 'kinderen met een huisdier', 'kinderen die op de fiets komen']);
          return {
            vraag: `${t}/${nm} deel van een groep zijn ${wie}. Dat zijn er ${deel}. Hoeveel kinderen zitten er in de groep?`,
            antwoord: totaal,
            na: 'kinderen',
            uitleg: `${t}/${nm} deel is ${deel}, dus 1/${nm} deel is ${deel} : ${t} = ${stuk}. De hele groep is ${nm}/${nm}: ${nm} × ${stuk} = ${totaal}.`
          };
        },
        (r) => {
          const uren = r.getal(1, 4);
          const [t, nm] = r.kies([[1, 4], [3, 4], [1, 3], [2, 3], [1, 2], [1, 6], [5, 6]]);
          const antwoord = uren * 60 + (60 / nm) * t;
          return {
            vraag: `Hoeveel minuten is ${uren} ${t}/${nm} uur?`,
            antwoord,
            na: 'minuten',
            uitleg: `${uren} uur is ${uren * 60} minuten. 1/${nm} uur is 60 : ${nm} = ${60 / nm} minuten, dus ${t}/${nm} uur is ${(60 / nm) * t} minuten. Samen ${antwoord} minuten.`
          };
        },
        (r) => {
          const [t, nm] = r.kies([[3, 4], [2, 3], [4, 5], [3, 8], [5, 6]]);
          const k = r.getal(3, 6);
          const groot = `${t * k}/${nm * k}`;
          const goed = `${t}/${nm}`;
          const fout = [`${t + 1}/${nm + 1}`, `${t}/${nm + 1}`, `${Math.max(1, t - 1)}/${nm}`].filter((f, i, l) => f !== goed && l.indexOf(f) === i);
          const { opties, goed: plek } = meerkeuze(r, goed, fout);
          return {
            vraag: `Welke breuk is even groot als ${groot}?`,
            opties,
            goed: plek,
            uitleg: `Deel teller en noemer door hetzelfde getal, hier ${k}: ${t * k} : ${k} = ${t} en ${nm * k} : ${k} = ${nm}. Dus ${groot} = ${goed}.`
          };
        }
      ],
      makers: [
        (r, n) => {
          const noemer = r.kies(n === 1 ? [2, 3, 4, 5] : [3, 4, 5, 6, 8]);
          const teller = r.getal(1, noemer - 1);
          const geheel = noemer * r.getal(6, n === 1 ? 20 : 40);
          const antwoord = (geheel / noemer) * teller;
          return {
            vraag: `Hoeveel is ${teller}/${noemer} deel van ${geheel}?`,
            antwoord,
            uitleg: `Eerst 1/${noemer} deel: ${geheel} : ${noemer} = ${geheel / noemer}.${teller > 1 ? ` Dan ${teller} van die stukken: ${teller} × ${geheel / noemer} = ${antwoord}.` : ''}`
          };
        },
        (r) => {
          const sets = [
            ['2/3', '3/5', '5/8', '7/12'], ['3/4', '2/3', '5/8', '7/10'], ['4/5', '3/4', '7/10', '5/8'],
            ['5/6', '4/5', '7/9', '3/4'], ['3/8', '2/5', '1/3', '3/10']
          ];
          const breuken = r.kies(sets);
          const waarde = (b) => { const [t, nm] = b.split('/').map(Number); return t / nm; };
          const grootste = breuken.reduce((a, b) => (waarde(b) > waarde(a) ? b : a));
          const { opties, goed } = meerkeuze(r, grootste, breuken.filter((b) => b !== grootste));
          return {
            vraag: 'Welke breuk is het grootst?',
            opties,
            goed,
            uitleg: `Maak er kommagetallen van (teller : noemer): ${breuken.map((b) => `${b} ≈ ${nl(Math.round(waarde(b) * 100) / 100, 2)}`).join(', ')}. Dan zie je dat ${grootste} het grootst is.`
          };
        },
        (r) => {
          const [teller, noemer] = r.kies([[1, 4], [3, 4], [2, 5], [3, 5], [4, 5], [7, 10], [3, 20], [9, 25], [1, 8], [3, 8], [7, 20]]);
          const antwoord = teller / noemer;
          const naar = 100 % noemer === 0 ? 100 : 1000;
          return {
            vraag: `Schrijf ${teller}/${noemer} als kommagetal.`,
            antwoord,
            uitleg: `Maak de noemer ${naar}: ${teller}/${noemer} = ${teller * (naar / noemer)}/${naar}. Dat is ${nl(antwoord)}.`
          };
        },
        (r) => {
          const noemer = r.kies([8, 10, 12]);
          const a = r.getal(1, Math.floor(noemer / 3));
          const b = r.getal(1, Math.floor(noemer / 3));
          const over = noemer - a - b;
          const wat = r.kies(['pizza', 'taart', 'reep chocola']);
          const fout = [`${a + b === over ? over - 1 : a + b}/${noemer}`, `${over + 1}/${noemer}`, `${over}/${noemer * 2}`];
          const { opties, goed } = meerkeuze(r, `${over}/${noemer}`, fout);
          return {
            vraag: `Een ${wat} is in ${noemer} gelijke stukken verdeeld. Jij eet ${a}/${noemer} deel en je broer eet ${b}/${noemer} deel. Welk deel is er nog over?`,
            opties,
            goed,
            uitleg: `Samen eten jullie ${a + b}/${noemer}. Het hele ding is ${noemer}/${noemer}. ${noemer}/${noemer} − ${a + b}/${noemer} = ${over}/${noemer}.`
          };
        }
      ]
    },
    {
      naam: 'Procenten',
      iep: [
        (r) => {
          const procent = r.kies([20, 25, 40, 50, 10]);
          const oud = r.getal(3, 15) * 20;
          const nieuw = oud * (100 - procent) / 100;
          const ding = r.kies(['jas', 'skateboard', 'koptelefoon', 'tent']);
          return {
            vraag: `Na ${procent}% korting kost een ${ding} nog ${euro(nieuw)}. Wat was de prijs vóór de korting?`,
            antwoord: oud,
            voor: '€',
            uitleg: `Na ${procent}% korting betaal je nog ${100 - procent}%. Dus ${100 - procent}% is ${euro(nieuw)}. Dan is 1% ${euro(nieuw)} : ${100 - procent} = ${euro(oud / 100)}, en 100% is ${euro(oud)}. Niet ${procent}% van ${euro(nieuw)} erbij tellen!`
          };
        },
        (r) => {
          const prijs = r.getal(2, 16) * 20;
          const procent = r.kies([5, 10, 15, 20, 25]);
          const antwoord = prijs * (100 + procent) / 100;
          return {
            vraag: `Een abonnement kost ${euro(prijs)} per jaar. Volgend jaar wordt het ${procent}% duurder. Wat kost het dan?`,
            antwoord,
            voor: '€',
            uitleg: `${uitlegProcent(procent, prijs, prijs * procent / 100)} Dat komt erbij: ${euro(prijs)} + ${euro(prijs * procent / 100)} = ${euro(antwoord)}.`
          };
        },
        (r) => {
          const totaal = r.kies([40, 80, 120, 160, 200, 300]);
          const procent = r.kies([15, 35, 45, 55, 65, 85].filter((p) => (totaal * p) % 100 === 0));
          const deel = totaal * procent / 100;
          return {
            vraag: `Van de ${totaal} leerlingen komen er ${deel} op de fiets naar school. Hoeveel procent is dat?`,
            antwoord: procent,
            na: '%',
            uitleg: `1% van ${totaal} is ${nl(totaal / 100)}. ${deel} : ${nl(totaal / 100)} = ${procent}. Of: ${deel}/${totaal} en maak de noemer 100. Dus ${procent}%.`
          };
        },
        (r) => {
          // Weten waarom: procenten mag je niet zomaar optellen en aftrekken.
          const prijs = r.kies([100, 200, 50, 80, 120]);
          const p = r.kies([10, 20, 25, 50]);
          if (r.getal(0, 1) === 0) {
            const duur = prijs * (100 + p) / 100;
            const nu = duur * (100 - p) / 100;
            const goed = `Minder dan ${euro(prijs)}: de korting gaat van een hogere prijs af`;
            const { opties, goed: plek } = meerkeuze(r, goed, [`Precies ${euro(prijs)}: ${p}% erbij en ${p}% eraf heft elkaar op`, `Meer dan ${euro(prijs)}: er kwam eerst iets bij`, 'Dat kun je niet weten zonder rekenmachine']);
            return {
              vraag: `Een jas kost ${euro(prijs)}. Eerst wordt hij ${p}% duurder, en later krijg je op die nieuwe prijs ${p}% korting. Wat kost de jas dan?`,
              opties, goed: plek,
              uitleg: `${p}% erbij: ${euro(prijs)} + ${euro(prijs * p / 100)} = ${euro(duur)}. Dan ${p}% van ${euro(duur)} eraf, en dat is meer dan ${euro(prijs * p / 100)}: ${euro(duur)} − ${euro(duur * p / 100)} = ${euro(nu)}. Procenten gaan steeds over een ander bedrag, daarom mag je ze niet zomaar wegstrepen.`
            };
          }
          const q = p === 50 ? 20 : p;
          const eerst = prijs * (100 - q) / 100;
          const daarna = eerst * (100 - q) / 100;
          const goed = `Nee, minder: de tweede ${q}% gaat van een lagere prijs af`;
          const { opties, goed: plek } = meerkeuze(r, goed, [`Ja, ${q}% + ${q}% = ${2 * q}%`, `Nee, meer dan ${2 * q}%`, 'Dat hangt af van de winkel']);
          return {
            vraag: `Een spel kost ${euro(prijs)}. Je krijgt ${q}% korting, en op die nieuwe prijs nog eens ${q}% korting. Is dat samen ${2 * q}% korting?`,
            opties, goed: plek,
            uitleg: `Eerst ${q}% van ${euro(prijs)} eraf: ${euro(eerst)}. Dan ${q}% van ${euro(eerst)} eraf: ${euro(daarna)}. Samen ${euro(prijs - daarna)} korting, en dat is ${nl((prijs - daarna) / prijs * 100)}%, niet ${2 * q}%.`
          };
        }
      ],
      makers: [
        (r) => {
          const procent = r.kies([10, 20, 25, 50, 75, 5, 15, 30, 40]);
          const totaal = r.getal(2, 30) * 20;
          const antwoord = (totaal * procent) / 100;
          const wat = r.kies(['leerlingen komt op de fiets naar school', 'bezoekers van de dierentuin is kind', 'deelnemers haalt de finish binnen een uur']);
          return {
            vraag: `${procent}% van de ${totaal} ${wat}. Hoeveel zijn dat er?`,
            antwoord,
            uitleg: uitlegProcent(procent, totaal, antwoord)
          };
        },
        (r) => {
          const prijs = r.getal(2, 12) * 20;
          const procent = r.kies([10, 20, 25, 30, 50]);
          const korting = (prijs * procent) / 100;
          const ding = r.kies(['jas', 'skateboard', 'paar schoenen', 'tent', 'fiets', 'spel']);
          return {
            vraag: `Een ${ding} kost ${euro(prijs)}. Je krijgt ${procent}% korting. Hoeveel betaal je nog?`,
            antwoord: prijs - korting,
            voor: '€',
            uitleg: `Eerst de korting: ${procent}% van ${euro(prijs)} = ${euro(korting)}. Dan haal je die eraf: ${euro(prijs)} − ${euro(korting)} = ${euro(prijs - korting)}.`
          };
        },
        (r) => {
          const totaal = r.kies([20, 25, 40, 50, 200]);
          const procent = r.kies([10, 20, 30, 40, 60, 70, 80, 90].filter((p) => (totaal * p) % 100 === 0));
          const deel = (totaal * procent) / 100;
          return {
            vraag: `Bij een toets met ${totaal} vragen had Sem er ${deel} goed. Hoeveel procent is dat?`,
            antwoord: procent,
            na: '%',
            uitleg: `Procent betekent "van de honderd". ${deel} van de ${totaal} is ${deel}/${totaal}. Maak de noemer 100: ${deel * (100 / totaal)}/100 = ${procent}%.`
          };
        },
        (r) => {
          const totaal = r.getal(4, 16) * 50;
          const procent = r.kies([10, 20, 30, 40, 60]);
          const deel = (totaal * procent) / 100;
          return {
            vraag: `Op een feest zijn ${totaal} gasten. ${procent}% van hen eet vegetarisch. Hoeveel gasten eten niet vegetarisch?`,
            antwoord: totaal - deel,
            na: 'gasten',
            uitleg: `${100 - procent}% eet niet vegetarisch. 10% van ${totaal} is ${totaal / 10}, dus ${100 - procent}% is ${(100 - procent) / 10} × ${totaal / 10} = ${totaal - deel}.`
          };
        }
      ]
    },
    {
      naam: 'Verhoudingen',
      iep: [
        (r) => {
          const [snelheid, km] = r.kies([[90, 135], [80, 100], [60, 45], [120, 300], [100, 75], [40, 50], [15, 25]]);
          const minuten = km / snelheid * 60;
          return {
            vraag: `Een ${snelheid >= 60 ? 'trein' : 'fietser'} gaat ${snelheid} km per uur. Hoeveel minuten doet hij over ${km} km?`,
            antwoord: minuten,
            na: 'minuten',
            uitleg: `In 60 minuten gaat hij ${snelheid} km. Dat is ${nl(snelheid / 60)} km per minuut. ${km} : ${nl(snelheid / 60)} = ${minuten} minuten. Of met een verhoudingstabel: ${snelheid} km → 60 min, ${km} km → ${minuten} min.`
          };
        },
        (r) => {
          const water = r.kies([4, 5, 7, 9]);
          const liter = r.kies([1, 1.5, 2, 2.5, 3]);
          const delen = water + 1;
          const ml = liter * 1000;
          if (ml % delen) return { vraag: `Ranja maak je met 1 deel siroop op 4 delen water. Hoeveel ml siroop heb je nodig voor 1,5 liter ranja?`, antwoord: 300, na: 'ml', uitleg: `1 deel siroop + 4 delen water = 5 delen. 1,5 liter = 1.500 ml. Eén deel is 1.500 : 5 = 300 ml siroop.` };
          return {
            vraag: `Ranja maak je met 1 deel siroop op ${water} delen water. Hoeveel ml siroop heb je nodig voor ${nl(liter)} liter ranja?`,
            antwoord: ml / delen,
            na: 'ml',
            uitleg: `1 deel siroop + ${water} delen water = ${delen} delen samen. ${nl(liter)} liter = ${nl(ml)} ml. Eén deel is ${nl(ml)} : ${delen} = ${nl(ml / delen)} ml siroop. Let op: niet delen door ${water}!`
          };
        },
        (r) => {
          // Weten waarom: wat gebeurt er met de oppervlakte (of inhoud) bij een vergroting?
          const k = r.kies([2, 3]);
          const inhoud = r.getal(0, 2) === 2;
          const uitkomst = inhoud ? k ** 3 : k ** 2;
          const kandidaten = [k, 2 * k, k * k, k ** 3, k * k + 1].filter((x, i, l) => l.indexOf(x) === i);
          const fout = kandidaten.filter((x) => x !== uitkomst).slice(0, 3).map((x) => `${x} keer zo groot`);
          const { opties, goed: plek } = meerkeuze(r, `${uitkomst} keer zo groot`, fout);
          if (inhoud) {
            return {
              vraag: `Een doos is ${k} keer zo lang, ${k} keer zo breed én ${k} keer zo hoog als een kleinere doos. Hoeveel keer zo groot is de inhoud?`,
              opties, goed: plek,
              uitleg: `Inhoud = lengte × breedte × hoogte. Alle drie worden ${k} keer zo groot, dus de inhoud ${k} × ${k} × ${k} = ${uitkomst} keer. Probeer het met een doos van 1 bij 1 bij 1: die wordt ${k} bij ${k} bij ${k} = ${uitkomst}.`
            };
          }
          const [l, b] = r.kies([[10, 15], [4, 6], [8, 12], [5, 10]]);
          return {
            vraag: `Een foto van ${l} bij ${b} cm wordt vergroot: ${k} keer zo lang en ${k} keer zo breed. Hoeveel keer zo groot wordt de oppervlakte?`,
            opties, goed: plek,
            uitleg: `Eerst: ${l} × ${b} = ${l * b} cm². Daarna: ${l * k} × ${b * k} = ${l * b * k * k} cm². Dat is ${k} × ${k} = ${uitkomst} keer zo groot, niet ${k} keer: de lengte én de breedte worden groter.`
          };
        },
        (r) => {
          const schaal = r.kies([25000, 50000, 100000]);
          const km = r.kies([1.5, 2, 3, 4, 5, 7.5]);
          const cm = km * 100000 / schaal;
          return {
            vraag: `Op een kaart met schaal 1 : ${nl(schaal)} wil je een route tekenen die echt ${nl(km)} km lang is. Hoeveel cm wordt die lijn op de kaart?`,
            antwoord: cm,
            na: 'cm',
            uitleg: `1 cm op de kaart is ${nl(schaal)} cm = ${nl(schaal / 100000)} km echt. ${nl(km)} : ${nl(schaal / 100000)} = ${nl(cm)} cm.`
          };
        }
      ],
      makers: [
        (r) => {
          const basis = r.kies([2, 4, 5]);
          const doel = r.kies([3, 6, 8, 10].filter((d) => d !== basis));
          const per = r.kies([25, 50, 75, 100, 125]);
          const wat = r.kies(['pasta', 'bloem', 'rijst', 'kaas']);
          return {
            vraag: `In een recept voor ${basis} personen staat ${nl(basis * per)} gram ${wat}. Hoeveel gram heb je nodig voor ${doel} personen?`,
            antwoord: per * doel,
            na: 'gram',
            uitleg: `Reken eerst uit wat één persoon nodig heeft: ${nl(basis * per)} : ${basis} = ${per} gram. Voor ${doel} personen: ${doel} × ${per} = ${nl(per * doel)} gram.`
          };
        },
        (r) => {
          const schaal = r.kies([25000, 50000, 100000, 200000]);
          const cm = r.getal(2, 9);
          const km = (cm * schaal) / 100000;
          return {
            vraag: `Een kaart heeft schaal 1 : ${nl(schaal)}. Op de kaart is een fietsroute ${cm} cm lang. Hoeveel kilometer is dat echt?`,
            antwoord: km,
            na: 'km',
            uitleg: `1 cm op de kaart is ${nl(schaal)} cm echt. Dat is ${nl(schaal / 100)} m, dus ${nl(schaal / 100000)} km. ${cm} × ${nl(schaal / 100000)} = ${nl(km)} km.`
          };
        },
        (r) => {
          const opties = [[12, 30], [12, 45], [15, 20], [15, 40], [18, 20], [18, 40], [20, 15], [20, 45], [24, 30], [24, 45], [30, 40], [60, 25]];
          const [snelheid, minuten] = r.kies(opties);
          const km = (snelheid * minuten) / 60;
          return {
            vraag: `Lotte fietst met een snelheid van ${snelheid} km per uur. Hoeveel kilometer fietst ze in ${minuten} minuten?`,
            antwoord: km,
            na: 'km',
            uitleg: `Een uur is 60 minuten, en ${minuten} minuten is ${minuten / ggd(minuten, 60)}/${60 / ggd(minuten, 60)} deel van een uur. ${minuten / ggd(minuten, 60)}/${60 / ggd(minuten, 60)} van ${snelheid} km = ${nl(km)} km.`
          };
        },
        (r) => {
          const aantal = r.kies([2, 3, 4]);
          const stuk = r.getal(5, 30) * 25;          // centen
          const doel = r.kies([5, 6, 7, 9, 10].filter((d) => d !== aantal));
          const ding = r.kies(['schriften', 'pennen', 'kaarten', 'bekers']);
          return {
            vraag: `${aantal} ${ding} kosten samen ${euro((aantal * stuk) / 100)}. Wat kosten ${doel} ${ding}?`,
            antwoord: (doel * stuk) / 100,
            voor: '€',
            uitleg: `Eén kost ${euro((aantal * stuk) / 100)} : ${aantal} = ${euro(stuk / 100)}. Dan ${doel} × ${euro(stuk / 100)} = ${euro((doel * stuk) / 100)}.`
          };
        }
      ]
    },
    {
      naam: 'Meten',
      iep: [
        (r) => {
          const m2 = r.kies([0.3, 0.5, 1.2, 2, 0.75, 0.04]);
          return {
            vraag: `Hoeveel cm² is ${nl(m2)} m²?`,
            antwoord: Math.round(m2 * 10000),
            na: 'cm²',
            uitleg: `1 m² is 100 cm × 100 cm = 10.000 cm². Dus ${nl(m2)} × 10.000 = ${nl(Math.round(m2 * 10000))} cm². Niet × 100: bij oppervlakte tel je in het kwadraat.`
          };
        },
        (r) => {
          const fles = r.kies([1, 1.5, 2, 0.75]);
          const glas = r.kies([150, 200, 250]);
          const ml = fles * 1000;
          const antwoord = Math.floor(ml / glas);
          return {
            vraag: `Een fles bevat ${nl(fles)} liter. Hoeveel glazen van ${glas} ml kun je helemaal vullen?`,
            antwoord,
            na: 'glazen',
            uitleg: `${nl(fles)} liter = ${nl(ml)} ml. ${nl(ml)} : ${glas} = ${antwoord}${ml % glas ? ` rest ${ml % glas}. Met die ${ml % glas} ml vul je geen heel glas` : ''}. Dus ${antwoord} glazen.`
          };
        },
        (r) => {
          const vertrek = r.getal(19 * 4, 23 * 4) * 15;
          const duur = r.getal(10, 22) * 15 + r.kies([0, 5, 10]);
          const aankomst = (vertrek + duur) % (24 * 60);
          const klok = (m) => `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
          const goed = klok(aankomst);
          const fout = [klok((aankomst + 60) % 1440), klok((aankomst + 1440 - 60) % 1440), klok((vertrek + Math.floor(duur / 60) * 100 % 1440 + duur % 60) % 1440)]
            .filter((f, i, l) => f !== goed && l.indexOf(f) === i);
          while (fout.length < 3) fout.push(klok((aankomst + 30 * (fout.length + 1)) % 1440));
          const { opties, goed: plek } = meerkeuze(r, goed, fout.slice(0, 3));
          return {
            vraag: `Een nachtbus vertrekt om ${klok(vertrek)}. De reis duurt ${Math.floor(duur / 60)} uur en ${duur % 60} minuten. Hoe laat komt de bus aan?`,
            opties,
            goed: plek,
            uitleg: `Tel eerst de hele uren erbij, dan de minuten. Na middernacht begin je weer bij 00:00. ${klok(vertrek)} + ${Math.floor(duur / 60)} uur en ${duur % 60} minuten = ${goed}.`
          };
        },
        (r) => {
          const [km, minuten] = r.kies([[12, 150], [9, 120], [6, 90], [15, 180], [10, 150], [21, 210]]);
          const snelheid = km / (minuten / 60);
          return {
            vraag: `Een wandeling van ${km} km duurt ${Math.floor(minuten / 60)} uur${minuten % 60 ? ` en ${minuten % 60} minuten` : ''}. Wat is de gemiddelde snelheid in km per uur?`,
            antwoord: snelheid,
            na: 'km/u',
            uitleg: `${minuten % 60 ? `${Math.floor(minuten / 60)} uur en ${minuten % 60} minuten is ${nl(minuten / 60)} uur. ` : ''}Snelheid = afstand : tijd = ${km} : ${nl(minuten / 60)} = ${nl(snelheid)} km per uur.`
          };
        }
      ],
      makers: [
        (r) => {
          const soorten = [
            { van: 'km', naar: 'm', factor: 1000, getal: () => r.getal(12, 95) / 10 },
            { van: 'm', naar: 'cm', factor: 100, getal: () => r.getal(105, 980) / 100 },
            { van: 'cm', naar: 'm', factor: 0.01, getal: () => r.getal(35, 950) },
            { van: 'm', naar: 'km', factor: 0.001, getal: () => r.getal(3, 95) * 50 }
          ];
          const s = r.kies(soorten);
          const getal = s.getal();
          const antwoord = getal * s.factor;
          return {
            vraag: `Hoeveel ${s.naar} is ${nl(getal)} ${s.van}?`,
            antwoord,
            na: s.naar,
            uitleg: `1 ${s.factor > 1 ? s.van : s.naar} = ${nl(s.factor > 1 ? s.factor : 1 / s.factor)} ${s.factor > 1 ? s.naar : s.van}. Dus je ${s.factor > 1 ? 'doet keer' : 'deelt door'} ${nl(s.factor > 1 ? s.factor : 1 / s.factor)}: ${nl(antwoord)} ${s.naar}.`
          };
        },
        (r) => {
          const soorten = [
            { van: 'liter', naar: 'dl', factor: 10 }, { van: 'liter', naar: 'cl', factor: 100 },
            { van: 'liter', naar: 'ml', factor: 1000 }, { van: 'kg', naar: 'gram', factor: 1000 }
          ];
          const s = r.kies(soorten);
          const getal = r.getal(3, 48) / 4;
          return {
            vraag: `Hoeveel ${s.naar} is ${nl(getal)} ${s.van}?`,
            antwoord: getal * s.factor,
            na: s.naar,
            uitleg: `1 ${s.van} = ${nl(s.factor)} ${s.naar}. ${nl(getal)} × ${nl(s.factor)} = ${nl(getal * s.factor)} ${s.naar}.`
          };
        },
        (r) => {
          const start = r.getal(8 * 12, 16 * 12) * 5;
          const duur = r.getal(7, 34) * 5;
          return {
            vraag: `De film begint om ${tijd(start)} en is afgelopen om ${tijd(start + duur)}. Hoeveel minuten duurt de film?`,
            antwoord: duur,
            na: 'minuten',
            uitleg: `Tel in stapjes: van ${tijd(start)} naar het volgende hele uur, en dan verder tot ${tijd(start + duur)}. Samen is dat ${duur} minuten${duur >= 60 ? ` (${Math.floor(duur / 60)} uur en ${duur % 60} minuten)` : ''}.`
          };
        },
        (r) => {
          let gram = r.getal(3, 19) * 250;
          if (gram % 1000 === 0) gram += 250;
          return {
            vraag: `Een pak meel weegt ${nl(gram)} gram. Hoeveel kilo is dat?`,
            antwoord: gram / 1000,
            na: 'kg',
            uitleg: `1 kg = 1.000 gram. Dus ${nl(gram)} : 1.000 = ${nl(gram / 1000)} kg.`
          };
        }
      ]
    },
    {
      naam: 'Meetkunde en verbanden',
      iep: [
        (r) => {
          const l = r.getal(6, 10), b = r.getal(4, 7);
          const el = r.getal(2, l - 3), eb = r.getal(1, b - 2);
          const antwoord = l * b - el * eb;
          return {
            vraag: `Een kamer heeft de vorm van een L. Het is een rechthoek van ${l} bij ${b} meter, waar in één hoek een stuk van ${el} bij ${eb} meter uit is gehaald. Hoeveel m² vloer heeft de kamer?`,
            antwoord,
            na: 'm²',
            uitleg: `Reken de grote rechthoek uit en haal het stuk eraf. ${l} × ${b} = ${l * b} m². ${el} × ${eb} = ${el * eb} m². ${l * b} − ${el * eb} = ${antwoord} m².`
          };
        },
        (r) => {
          const blok = r.kies([5, 10]);
          const [l, b, h] = r.kies(blok === 5 ? [[30, 20, 10], [25, 15, 10], [40, 20, 15], [20, 20, 20]] : [[60, 40, 30], [50, 30, 20], [40, 40, 30]]);
          const antwoord = (l / blok) * (b / blok) * (h / blok);
          return {
            vraag: `Een doos is ${l} cm lang, ${b} cm breed en ${h} cm hoog. Hoeveel kubusjes van ${blok} bij ${blok} bij ${blok} cm passen er precies in?`,
            antwoord,
            na: 'kubusjes',
            uitleg: `In de lengte passen er ${l} : ${blok} = ${l / blok}, in de breedte ${b / blok} en in de hoogte ${h / blok}. ${l / blok} × ${b / blok} × ${h / blok} = ${antwoord} kubusjes.`
          };
        },
        (r) => {
          const aantal = r.kies([3, 4]);
          const gem = r.kies([6, 6.5, 7, 7.5]);
          const doel = gem + r.kies([0.2, 0.3, 0.5]);
          const nodig = Math.round((doel * (aantal + 1) - gem * aantal) * 10) / 10;
          if (nodig > 10 || nodig < 1) return { vraag: `Na 4 toetsen heeft Sem gemiddeld een 7. Welk cijfer moet hij voor de vijfde toets halen om gemiddeld een 7,2 te staan?`, antwoord: 8, uitleg: 'Na 4 toetsen heeft hij samen 4 × 7 = 28 punten. Voor gemiddeld 7,2 na 5 toetsen heb je 5 × 7,2 = 36 punten nodig. 36 − 28 = 8.' };
          return {
            vraag: `Na ${aantal} toetsen heeft Sem gemiddeld een ${nl(gem)}. Welk cijfer moet hij voor de volgende toets halen om gemiddeld een ${nl(doel)} te staan?`,
            antwoord: nodig,
            uitleg: `Na ${aantal} toetsen heeft hij samen ${aantal} × ${nl(gem)} = ${nl(aantal * gem)} punten. Voor gemiddeld ${nl(doel)} na ${aantal + 1} toetsen heb je ${aantal + 1} × ${nl(doel)} = ${nl(doel * (aantal + 1))} punten nodig. ${nl(doel * (aantal + 1))} − ${nl(aantal * gem)} = ${nl(nodig)}.`
          };
        },
        (r) => {
          // Een dienstregeling lezen en ermee rekenen.
          const haltes = r.schud(['Station', 'Markt', 'Ziekenhuis', 'Strand', 'Zwembad', 'School', 'Bibliotheek', 'Dierentuin']).slice(0, 5);
          let t = r.getal(7 * 60 + 5, 16 * 60 + 40);
          const tijden = haltes.map(() => { const nu = t; t += r.getal(7, 19); return nu; });
          const klok = (m) => `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
          const van = r.getal(0, 2);
          const tot = r.getal(van + 2, 4);
          const lijn = r.getal(2, 48);
          const antwoord = tijden[tot] - tijden[van];
          return {
            vraag: `Bus ${lijn} rijdt zo: ${haltes.map((h, i) => `${h} ${klok(tijden[i])}`).join(' – ')}. Hoeveel minuten duurt de rit van halte ${haltes[van]} naar halte ${haltes[tot]}?`,
            antwoord,
            na: 'minuten',
            uitleg: `${haltes[van]} ${klok(tijden[van])}, ${haltes[tot]} ${klok(tijden[tot])}. ${Math.floor(tijden[van] / 60) !== Math.floor(tijden[tot] / 60)
              ? `Tel via het hele uur: tot ${klok(Math.ceil(tijden[van] / 60) * 60)} is ${Math.ceil(tijden[van] / 60) * 60 - tijden[van]} minuten, daarna nog ${tijden[tot] - Math.ceil(tijden[van] / 60) * 60}. Samen ${antwoord} minuten.`
              : `Dat is ${antwoord} minuten.`} De haltes ertussen maken niet uit.`
          };
        }
      ],
      makers: [
        (r) => {
          const l = r.getal(6, 18);
          const b = r.getal(3, l - 1);
          return {
            vraag: `Een tuin is ${l} meter lang en ${b} meter breed. Hoeveel vierkante meter (m²) is de tuin?`,
            antwoord: l * b,
            na: 'm²',
            uitleg: `Oppervlakte = lengte × breedte = ${l} × ${b} = ${l * b} m².`
          };
        },
        (r) => {
          const l = r.getal(8, 30);
          const b = r.getal(4, l - 2);
          return {
            vraag: `Om een rechthoekig weiland van ${l} bij ${b} meter komt een hek. Hoeveel meter hek is er nodig?`,
            antwoord: 2 * (l + b),
            na: 'm',
            uitleg: `Het hek gaat helemaal rond: dat is de omtrek. ${l} + ${b} + ${l} + ${b} = ${2 * (l + b)} meter.`
          };
        },
        (r) => {
          const [l, b, h] = r.kies([[50, 30, 40], [40, 25, 30], [60, 30, 50], [80, 40, 50], [50, 20, 30], [100, 40, 50]]);
          const liter = (l * b * h) / 1000;
          return {
            vraag: `Een aquarium is ${l} cm lang, ${b} cm breed en ${h} cm hoog. Hoeveel liter water past erin?`,
            antwoord: liter,
            na: 'liter',
            uitleg: `Inhoud = ${l} × ${b} × ${h} = ${nl(l * b * h)} cm³. 1 liter = 1.000 cm³, dus ${nl(l * b * h)} : 1.000 = ${nl(liter)} liter.`
          };
        },
        (r) => {
          const aantal = 5;
          let scores = Array.from({ length: aantal }, () => r.getal(4, 10));
          const rest = scores.reduce((a, b) => a + b, 0) % aantal;
          if (rest) scores[0] = scores[0] - rest < 4 ? scores[0] + (aantal - rest) : scores[0] - rest;
          const som = scores.reduce((a, b) => a + b, 0);
          return {
            vraag: `Noor haalde deze cijfers: ${scores.join(', ')}. Wat is haar gemiddelde cijfer?`,
            antwoord: som / aantal,
            uitleg: `Tel alles op: ${scores.join(' + ')} = ${som}. Deel door het aantal cijfers: ${som} : ${aantal} = ${nl(som / aantal)}.`
          };
        },
        (r) => {
          const dagen = ['ma', 'di', 'wo', 'do', 'vr'];
          const temps = dagen.map(() => r.getal(2, 18));   // geen negatieve getallen: die zijn 2F
          const max = Math.max(...temps);
          const min = Math.min(...temps);
          return {
            vraag: `De temperatuur om 7 uur 's ochtends: ${dagen.map((d, i) => `${d} ${nl(temps[i])} °C`).join(', ')}. Hoeveel graden verschil is er tussen de warmste en de koudste ochtend?`,
            antwoord: max - min,
            na: 'graden',
            uitleg: `De warmste ochtend was ${nl(max)} °C, de koudste ${nl(min)} °C. ${min < 0 && max > 0 ? `Van ${nl(min)} naar 0 is ${-min} graden, en van 0 naar ${max} is ${max}. Samen ${max - min} graden.` : `Het verschil is ${max - min} graden.`}`
          };
        }
      ]
    }
  ];

  // De sommen van één dag (dagNr begint bij 0). Altijd dezelfde voor die dag.
  // Per domein eerst de gewone som, dan een moeilijkere in de stijl van de
  // IEP-doorstroomtoets. De gewone sommen hebben hun eigen generator, zodat
  // die hetzelfde blijven als voordat de IEP-sommen erbij kwamen.
  function vanDag(dagNr) {
    const r = generator(20261020 + dagNr * 7919);
    const rIep = generator(20261020 + dagNr * 7919 + 104729);
    const niveau = dagNr < 5 ? 1 : dagNr < 10 ? 2 : 3;
    const gewoon = DOMEINEN.map((domein, i) => {
      const index = (dagNr + i) % domein.makers.length;
      return { domein: domein.naam, maker: { lijst: 'makers', index }, ...domein.makers[index](r, niveau) };
    });
    const iep = DOMEINEN.map((domein, i) => {
      const index = (dagNr + i) % domein.iep.length;
      return { domein: domein.naam, iep: true, maker: { lijst: 'iep', index }, ...domein.iep[index](rIep, dagNr < 7 ? 2 : 3) };
    });
    return gewoon.flatMap((som, i) => [som, iep[i]]);
  }

  // Een getypt antwoord lezen: "3,5", "3.5", "4.678", "€ 12,50" en "−7" mogen.
  function leesGetal(tekst) {
    let t = String(tekst).trim().replace(/[€\s]/g, '').replace(/[−–]/g, '-');
    if (t.includes(',')) t = t.replace(/\./g, '').replace(',', '.');
    else if (/^-?\d{1,3}(\.\d{3})+$/.test(t)) t = t.replace(/\./g, '');
    if (!/^-?\d+(\.\d+)?$/.test(t)) return null;
    return Number(t);
  }

  function klopt(som, tekst) {
    const getal = leesGetal(tekst);
    return getal !== null && Math.abs(getal - som.antwoord) < 1e-6;
  }

  return { vanDag, leesGetal, klopt, nl, aantalDomeinen: DOMEINEN.length };
})();

if (typeof module !== 'undefined') { module.exports = { Rekensommen }; }

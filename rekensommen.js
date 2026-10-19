/*
 * Mochi — rekenen en wiskunde.
 *
 * De sommen staan hier niet uitgeschreven: ze worden per dag gemaakt door
 * kleine "makers", met een vaste toevalsgenerator per dag. Dag 3 heeft dus
 * altijd dezelfde sommen, ook na herladen, en het antwoord en de uitleg
 * worden uitgerekend in plaats van overgetypt.
 *
 * Elke dag krijgt één som uit elk van de acht domeinen van de Boom-toets
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
        (r, n) => {
          const nacht = -r.getal(3, n === 1 ? 9 : 14);
          const erbij = r.getal(6, 18);
          const antwoord = nacht + erbij;
          return {
            vraag: `Vannacht was het ${nl(nacht)} °C. Overdag wordt het ${erbij} graden warmer. Hoe warm is het overdag?`,
            antwoord,
            na: '°C',
            uitleg: `Tel vanaf ${nl(nacht)} omhoog. Na ${-nacht} graden ben je bij 0, en dan heb je nog ${erbij + nacht} over. Dus ${nl(antwoord)} °C.`
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
        (r, n) => {
          const klassen = r.getal(8, n === 1 ? 16 : 24);
          const per = r.getal(23, 31);
          return {
            vraag: `Een school heeft ${klassen} klassen met elk ${per} leerlingen. Hoeveel leerlingen zitten er op school?`,
            antwoord: klassen * per,
            na: 'leerlingen',
            uitleg: `${klassen} × ${per}: ${klassen} × ${per - (per % 10)} = ${klassen * (per - (per % 10))}, plus ${klassen} × ${per % 10} = ${klassen * (per % 10)}. Samen ${klassen * per}.`
          };
        }
      ]
    },
    {
      naam: 'Kommagetallen',
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
          const temps = dagen.map(() => r.getal(-4, 14));
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
  function vanDag(dagNr) {
    const r = generator(20261020 + dagNr * 7919);
    const niveau = dagNr < 5 ? 1 : dagNr < 10 ? 2 : 3;
    return DOMEINEN.map((domein, i) => {
      const maker = domein.makers[(dagNr + i) % domein.makers.length];
      return { domein: domein.naam, ...maker(r, niveau) };
    });
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

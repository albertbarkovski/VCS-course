// // 7. Susikurkite objektą informacijai apie knygyną saugoti. Į šį objektą sudėkite tokias savybes su reikšmėmis: pavadinimas, adresas, plotas (kv. m.), kiek turi knygų, darbo valandos, ar atidarytas. Išveskite šio knygyno objekto raktus su reikšmėmis. Tuomet išveskite visas knygyno savybes, kurių reikšmės yra ne string tipo (plotas, kiek turi knygų ir pan.).

// console.log("----- 7.");

// const knygynas = {
//   pavadinimas: "Knygynas A",
//   adresas: "Vilniaus g. 10",
//   plotas: 54,
//   knygos: 1500,
//   darboValandos: "8-17",
//   atidarytas: false,
// };

// for (const savybe in knygynas) {
//   // console.log(savybe, knygynas[savybe]);
//   if (typeof knygynas[savybe] !== "string") {
//     // console.log(savybe, knygynas[savybe]);
//   }
// }

// Object.entries(knygynas)
//   .filter((eilute) => typeof eilute[1] !== "string")
//   .forEach((eilute) => {
//     console.log(eilute[0], eilute[1]);
//   });

// // 8. Susikurkite du objektus, dviejų studentų informacijai saugoti. Abiejuose objektuose sudėkite šias savybes su reikšmėmis: vardas ir pavardė, studijų programos pavadinimas, pažymiai. Raskite abiejų studentų pažymių vidurkius. Išveskite abiejų studentų informaciją, bei pažymių vidurkius. Raskite ir išveskite, kurio studento pažymių vidurkis yra didesnis ir išveskite jo vardą su pavarde.

// console.log("----- 8.");
// const studentas1 = {
//   vardas: "Vardenis",
//   pavarde: "Pavardenis",
//   studijuPrograma: "Sena",
//   pazymiai: [5, 6, 1, 4, 8, 9],
// };

// const studentas2 = {
//   vardas: "Tomas",
//   pavarde: "Tomavicius",
//   studijuPrograma: "Nauja",
//   pazymiai: [8, 9, 7, 5, 6, 9],
// };

// console.log("Studentas 1");
// for (const savybe in studentas1) {
//   console.log(savybe, studentas1[savybe]);
// }

// const suma1 = studentas1.pazymiai.reduce((a, b) => a + b, 0);
// const vidurkis1 = suma1 / studentas1.pazymiai.length;

// console.log("\nStudentas 2");
// for (const savybe in studentas2) {
//   console.log(savybe, studentas2[savybe]);
// }

// const suma2 = studentas2.pazymiai.reduce((a, b) => a + b, 0);
// const vidurkis2 = suma2 / studentas2.pazymiai.length;

// console.log("\nVidurkis didesnis pas:");
// if (vidurkis1 > vidurkis2) {
//   console.log(studentas1.vardas, studentas1.pavarde);
// } else if (vidurkis1 < vidurkis2) {
//   console.log(studentas2.vardas, studentas2.pavarde);
// } else {
//   console.log("vidurkiai lygus");
// }

// // 9. Pagal 16-ą pavyzdį, pritaikykite skriptą prie kitos esybės, t.y. sukurkite tokį objektą, kuriame turėtumėte tam tikrų savybių, bei metodą/funkciją, kuri kažką paskaičiuotų iš objekto duomenų. Šio objekto informacijos ir atsakymų išvedimas irgi būtų panašus į duotą nurodytame pavyzdyje.

// console.log("----- 9.");
// const studentas9 = {
//   vardas: "Vardenis",
//   pavarde: "Pavardenis",
//   studijuPrograma: "Sena",
//   pazymiai: [5, 6, 1, 4, 8, 9],
//   vidurkis: function () {
//     const suma = this.pazymiai.reduce((a, b) => a + b, 0);
//     const vidurkis = suma / this.pazymiai.length;

//     return vidurkis.toFixed(2);
//   },
// };

// console.log(studentas9.vidurkis());

// // 10. Pagal 18-ą pavyzdį, pritaikykite skriptą prie kitos esybės. Išveskite visą objekto informaciją per atskirą nuo objekto console.log(), taip pat, išveskite tam tikrą pasirinktą informaciją pasinaudojant funkcija/metodu iš objekto.

// console.log("----- 10.");

// const preke = {
//   pavadinimas: "piestukas",
//   kaina: 0.99,
//   kodas: "PS1598523",
//   likutis: 1685,
//   pardavus: function () {
//     const visaSuma = this.likutis * this.kaina;
//     console.log("Pardavus visus piestukus uzdirbsime", visaSuma);
//   },
// };

// console.log(preke);
// preke.pardavus();

// // 11.Susikurkite knygų objektų masyvą. Apie kiekvieną knygą į atskirus knygų objektus sudėkite norimą informaciją (bent 3 savybes). Į masyvą įdėkite bent 3 knygas. Visas šias knygas išsiveskite. Tuomet parodykite pirmą knygą. Antros knygos kažkurią savybę.

// console.log("----- 11.");
// const knygos = [
//   { pavadinimas: "das", kaina: 15.23, autorius: "dsad" },
//   { pavadinimas: "das", kaina: 15.23, autorius: "dsad" },
//   { pavadinimas: "das", kaina: 15.23, autorius: "dsad" },
// ];

// console.log(knygos);
// console.log(knygos[0]);
// console.log(knygos[1].pavadinimas);

// // 12.Susikurkite prekių objektų masyvą ir jį užpildykite pasirinktais duomenimis. Išveskite visų prekių pavadinimus su kainomis ir dar kokiais nors atributais atskirose eilutėse.

// console.log("----- 12.");
// const prekes12 = [
//   { pavadinimas: "telefonas", kaina: 800, likutis: 10 },
//   { pavadinimas: "monitorius", kaina: 600, likutis: 30 },
// ];

// for (const preke of prekes12) {
//   console.log(preke.pavadinimas, "kainuoja", preke.kaina, "euru");
// }

// // 13.Susikurkite automobilių objektų masyvą ir užpildykite jį pasirinktais duomenimis. Išveskite kiekvieno automobilio pavadinimą, metus ir paskaičiuotą jo amžių (dabartiniai metai - gamybos metai).
// console.log("----- 13.");

// const automobiliai13 = [
//   { marke: "BMW", metai: 2000, rida: 520000 },
//   { marke: "Audi", metai: 2001, rida: 456103 },
// ];

// for (const automobilis of automobiliai13) {
//   console.log(`${automobilis.marke} jau yra ${2025 - automobilis.metai} metu senumo.`);
// }

// // 14.Susikurkite objektų masyvą įmonių duomenims saugoti ir jį užpildykite duomenimis. Išveskite kiekvienos įmonės informaciją atskirose eilutėse, gražiai suformatuotai (sakinio pavidalu ar pan.). Taip pat, ką nors paskaičiuokite iš turimų skaitinių duomenų (pvz.: vidutinis įmonės amžius, darbuotojų kiekis per visas įmones, bendras pelnas, ar pan.).

// console.log("----- 14.");
// const imonesDuomenys = [
//   { pavadinimas: "dfsafsvcx", darbuotojai: 50, pelnas: 5000, isikure: 2024 },
//   { pavadinimas: "dsav", darbuotojai: 150, pelnas: 115000, isikure: 2010 },
//   { pavadinimas: "vcbcxgfd", darbuotojai: 5, pelnas: 5200, isikure: 2020 },
// ];

// for (const imone of imonesDuomenys) {
//   console.log(`Imone pavadinimu ${imone.pavadinimas}, turinti ${imone.darbuotojai} darbuotojus ir isikurusi pries ${2025 - imone.isikure} metus, uzdirbo ${imone.pelnas} euru pelno`);
// }

// const bendrasPelnas = imonesDuomenys.reduce((a, imone) => a + imone.pelnas, 0);

// const imonesAmziuSuma = imonesDuomenys.reduce((a, imone) => a + (2025 - imone.isikure), 0);

// console.log(bendrasPelnas);
// console.log(imonesAmziuSuma / imonesDuomenys.length);

// // 15.Susikurkite objektų masyvą ligoninių duomenims saugoti ir užpildykite jį pasirinktais duomenimis. Išveskite ligoninių pavadinimus su adresais skirtingose eilutėse. Suskaičiuokite ką nors iš skaitinių jų duomenų, pvz.: bendrą lankytojų kiekį, bendrą ar vidutinį darbuotojų kiekį, ar pan.

// console.log("----- 15.");
// const ligonines = [
//   { pavadinimas: "dsad", adresas: "dasd", lankytojai: 5000, darbuotojai: 330 },
//   { pavadinimas: "yutu", adresas: "tyr", lankytojai: 15000, darbuotojai: 1130 },
//   { pavadinimas: "sad", adresas: "bvc", lankytojai: 500, darbuotojai: 20 },
// ];

// for (const ligonine of ligonines) {
//   console.log(`Ligonine pavadinimu ${ligonine.pavadinimas} randasi adresu ${ligonine.adresas}`);
// }

// const bendrasLankytojuKiekis = ligonines.reduce((a, b) => a + b.lankytojai, 0);
// const bendrasDarbuotojuKiekis = ligonines.reduce((a, b) => a + b.darbuotojai, 0);

// console.log(bendrasLankytojuKiekis);
// console.log(bendrasDarbuotojuKiekis / ligonines.length);

// // studentu pavyzdys
// console.log("----- pavyzdys");

// let studentai = [
//   { vardas: "Jonas", pazymiai: [8, 9, 6, 1, 3, 5] },
//   { vardas: "Greta", pazymiai: [4, 5, 5, 5, 6, 8] },
//   { vardas: "Tomas", pazymiai: [2, 3, 6, 5, 8, 9] },
// ];

// for (const studentas of studentai) {
//   let suma = 0;
//   for (const pazymys of studentas.pazymiai) {
//     suma += pazymys;
//   }
//   console.log(`Mokinio ${studentas.vardas} pazymiu vidurkis yra:`, (suma / studentas.pazymiai.length).toFixed(1));
// }

// const vidurkiai = studentai
//   .map((studentas) => studentas.pazymiai)
//   .map((pazymiai) => ({
//     pazymiuSuma: pazymiai.reduce((a, b) => a + b, 0),
//     pazymiuKiekis: pazymiai.length,
//   }))
//   .map((pazymiai) => pazymiai.pazymiuSuma / pazymiai.pazymiuKiekis);

// console.log(Math.max(...vidurkiai));

// // 16.Susikurkite studentų objektų masyvą, kur apie kiekvieną studentą būtų žinoma ši informacija: vardas ir pavardė, amžius, pažymiai, studijų programa, kursas. Kiekvieną studentą išveskite taip: pirmoje eilutėje visi studento duomenys išskyrus jo pažymius, antroje eilutėje jo pažymiai, trečioje jo pažymių vidurkis su prierašu 'pažymių vidurkis'. Išvedus visus studentus dėkite brūkšnį (pvz.: -----) ir išveskite bendrą visų studentų pažymių vidurkį.

// console.log("----- 16.");

// const studentai16 = [
//   { vardas: "Jonas", amzius: 20, pazymiai: [9, 4, 8, 5, 6] },
//   { vardas: "Tomas", amzius: 22, pazymiai: [9, 6, 4, 5] },
//   { vardas: "Ugne", amzius: 21, pazymiai: [6, 8, 4] },
// ];

// for (const indeksas in studentai16) {
//   // Spausdinam savybes isskyrus pazymius
//   let tekstas = "";
//   for (const savybe in studentai16[indeksas]) {
//     if (savybe !== "pazymiai") {
//       tekstas += " " + studentai16[indeksas][savybe];
//     }
//   }
//   console.log(tekstas);

//   // Spausdinam pazymius
//   console.log(studentai16[indeksas].pazymiai);

//   // Apskaiciuojame vidurki
//   const pazymiuVidurkis = studentai16[indeksas].pazymiai.reduce((a, b) => a + b, 0) / studentai16[indeksas].pazymiai.length;

//   // Patalpiname vidurki i objekta
//   studentai16[indeksas].vidurkis = pazymiuVidurkis;
//   console.log(pazymiuVidurkis);
// }
// console.log("-----");

// const bendrasVidurkis = studentai16.reduce((a, b) => a + b.vidurkis, 0) / studentai16.length;

// console.log(bendrasVidurkis.toFixed(1));

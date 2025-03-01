// let knyginas = { pavadinimas: "mickeviciaus", adresas: "vokeciu g.5", plotas: 500, kiekTuriKnygu: 10000, darboValandos: "8-20", arAtidarytas: true };

// console.log(Object.entries(knyginas));

// for (const raktas in knyginas) {
//   if (typeof knyginas[raktas] !== "string") {
//     console.log(raktas, knyginas[raktas]);
//   }
// }

// // 8. Susikurkite du objektus, dviejų studentų informacijai saugoti. Abiejuose objektuose sudėkite šias savybes su reikšmėmis: vardas ir pavardė, studijų programos pavadinimas, pažymiai. Raskite abiejų studentų pažymių vidurkius. Išveskite abiejų studentų informaciją, bei pažymių vidurkius. Raskite ir išveskite, kurio studento pažymių vidurkis yra didesnis ir išveskite jo vardą su pavarde.

// const studentas1 = {
//   vardas: "Jonas",
//   pavarde: "Jonelis",
//   studijuProgramos: "blabla",
//   pazymiai: [8, 4, 9, 7, 5, 8, 9, 10],
// };
// const studentas2 = {
//   vardas: "Povilas",
//   pavarde: "Girenas",
//   studijuProgramos: "ibc-123",
//   pazymiai: [4, 10, 9, 9, 5, 8, 7, 10],
// };
// console.log("Studentas 1");
// for (const raktas in studentas1) {
//   console.log(raktas, studentas1[raktas]);
// }
// const sum1 = studentas1.pazymiai.reduce((a, b) => a + b, 0);
// const avg1 = sum1 / studentas1.pazymiai.length;

// console.log("Studentas 2");
// for (const raktas in studentas2) {
//   console.log(raktas, studentas2[raktas]);
// }
// const sum2 = studentas2.pazymiai.reduce((a, b) => a + b, 0);
// const avg2 = sum2 / studentas2.pazymiai.length;

// console.log(`Vidurkis didsnis pas:`);
// if (avg1 > avg2) {
//   console.log(studentas1.vardas, studentas1.pavarde);
// } else if (avg1 < avg2) {
//   console.log(studentas2.vardas, studentas2.pavarde);
// } else {
//   ("Vidurkiai pas studentus vienodi");
// }

// 9. Pagal 16-ą pavyzdį, pritaikykite skriptą prie kitos esybės, t.y. sukurkite tokį objektą, kuriame turėtumėte tam tikrų savybių, bei metodą/funkciją, kuri kažką paskaičiuotų iš objekto duomenų. Šio objekto informacijos ir atsakymų išvedimas irgi būtų panašus į duotą nurodytame pavyzdyje.

// let stud = {
//   vardas: "Jonas",
//   pavarde: "Jonelis",
//   pazymiai: [7, 8, 9, 5, 8, 4, 7, 10],
//   vidurkis: function() {
//     let suma = this.pazymiai.reduce((a, b) => a + b, 0);
//     let vidurkis = suma / this.pazymiai.length;
//     return vidurkis.toFixed(2);
//   },
// };
// console.log(stud.vardas, stud.pavarde, "vidurkis yra", stud.vidurkis());

// 10.Pagal 18-ą pavyzdį, pritaikykite skriptą prie kitos esybės. Išveskite visą objekto informaciją per atskirą nuo objekto console.log(), taip pat, išveskite tam tikrą pasirinktą informaciją pasinaudojant funkcija/metodu iš objekto.

// let preke = {
//   preke: "peilis",
//   kiekis: 87,
//   kaina: 28.9,
//   savikaina: 20,
//   visaSuma: function () {
//     const vntUzdarbis = this.kaina - this.savikaina;
//     const visaSuma = vntUzdarbis * this.kiekis;
//     return visaSuma.toFixed(2);
//   },
// };
// console.log(preke.visaSuma());

// 11.Susikurkite knygų objektų masyvą. Apie kiekvieną knygą į atskirus knygų objektus sudėkite norimą informaciją (bent 3 savybes). Į masyvą įdėkite bent 3 knygas. Visas šias knygas išsiveskite. Tuomet parodykite pirmą knygą. Antros knygos kažkurią savybę.
// let knygos = [
//   {
//     pavadiniamas: "Meistras ir Margarita",
//     autorius: "Bulgakovas",
//     kaina: 40,
//   },
//   {
//     pavadiniamas: "Principai",
//     autorius: "R.Dalio",
//     kaina: 25,
//   },
//   {
//     pavadiniamas: "Karas ir Taika",
//     autorius: "Tolstoi",
//     kaina: 60,
//   },
// ];

// console.log("Visos knygos");

// for (let knyga of knygos) {
//   console.log(knyga);
// }

// console.log("Pirmas knyga");
// console.log(knygos[0]);

// console.log("Antros knygos kaina");
// console.log(knygos[1].kaina);

// 12.Susikurkite prekių objektų masyvą ir jį užpildykite pasirinktais duomenimis. Išveskite visų prekių pavadinimus su kainomis ir dar kokiais nors atributais atskirose eilutėse.

// let prekes = [
//   {
//     pavadinimas: "peilis",
//     kaina: 20,
//     svoris: 700,
//   },
//   {
//     pavadinimas: "saukstas",
//     kaina: 10,
//     svoris: 200,
//   },
//   {
//     pavadinimas: "sakute",
//     kaina: 8,
//     svoris: 300,
//   },
// ];

// console.log("visos prekes");
// for (let preke of prekes) {
//   console.log(preke.pavadinimas,'kaina:',preke.kaina);
//}

// 13.Susikurkite automobilių objektų masyvą ir užpildykite jį pasirinktais duomenimis. Išveskite kiekvieno automobilio pavadinimą, metus ir paskaičiuotą jo amžių (dabartiniai metai - gamybos metai).

// let automobiliai = [
//   {
//     marke: "audi",
//     metai: 2020,
//     amzius: function () {
//       let amzius = new Date(Date.now()).getFullYear() - this.metai;
//       return amzius;
//     },
//   },
//   {
//     marke: "bmw",
//     metai: 1998,
//     amzius: function () {
//       let amzius = new Date(Date.now()).getFullYear() - this.metai;
//       return amzius;
//     },
//   },
//   {
//     marke: "skoda",
//     metai: 2005,
//     amzius: function () {
//       let amzius = new Date(Date.now()).getFullYear() - this.metai;
//       return amzius;
//     },
//   },
// ];

// for (auto of automobiliai) {
// console.log(`${auto.marke} jau yra ${auto.amzius()} metu senumo`);
// }

// 14.Susikurkite objektų masyvą įmonių duomenims saugoti ir jį užpildykite duomenimis. Išveskite kiekvienos įmonės informaciją atskirose eilutėse, gražiai suformatuotai (sakinio pavidalu ar pan.). Taip pat, ką nors paskaičiuokite iš turimų skaitinių duomenų (pvz.: vidutinis įmonės amžius, darbuotojų kiekis per visas įmones, bendras pelnas, ar pan.).

// let imones = [
//   {
//     name: "swed",
//     ikurimoMetai: 1999,
//     veikla: "bankas",
//     apivarta: 100000000,
//   },
//   {
//     name: "sg",
//     ikurimoMetai: 2019,
//     veikla: "stilius",
//     apivarta: 50000,
//   },
//   {
//     name: "apple",
//     ikurimoMetai: 2003,
//     veikla: "tlf",
//     apivarta: 8000000000,
//   },
//   {
//     name: "logiteh",
//     ikurimoMetai: 1987,
//     veikla: "tech",
//     apivarta: 858589999928,
//   },
// ];

// for (let imone of imones) {
//   console.log(`Imone ${imone.name}, veikia nuo ${imone.ikurimoMetai}, uzsiema ${imone.veikla}, apivarta ${imone.apivarta}`);
// }

// const bendraApivarta = imones.reduce((a, b) => a + b.apivarta, 0);

// console.log("Bendras pelnas yra:", bendraApivarta);

// const avgImonesAmzius = imones.reduce((a, b) => a + (2015 - b.ikurimoMetai), 0);

// console.log("Vidutinis imoniu amzius yra:", avgImonesAmzius / imones.length);

// 15.Susikurkite objektų masyvą ligoninių duomenims saugoti ir užpildykite jį pasirinktais duomenimis. Išveskite ligoninių pavadinimus su adresais skirtingose eilutėse. Suskaičiuokite ką nors iš skaitinių jų duomenų, pvz.: bendrą lankytojų kiekį, bendrą ar vidutinį darbuotojų kiekį, ar pan.

// const ligonines = [
//   {
//     pavadinimas: "igker",
//     adresas: "dv g.9",
//     lankytojai: 4528,
//     darbuotojai: 54,
//   },
//   {
//     pavadinimas: "erg",
//     adresas: "ksdnvk g.54",
//     lankytojai: 9524,
//     darbuotojai: 87,
//   },
//   {
//     pavadinimas: "igker",
//     adresas: "lsfmf g.78",
//     lankytojai: 7854,
//     darbuotojai: 18,
//   },
// ];

// for (const ligonine of ligonines) {
//   console.log(`Ligonine ${ligonine.pavadinimas} randasi adresu ${ligonine.adresas}`);
// }

// const lankytojuKiekis = ligonines.reduce((a, b) => a + b.lankytojai, 0);

// const darbuotojusKiekis = ligonines.reduce((a, b) => a + b.darbuotojai, 0);

// console.log(`Bendras lankytoju kiekis yra ${lankytojuKiekis}`);
// console.log(`Vidutinis ligoniniu darbuotoju kiekis yra ${darbuotojusKiekis / ligonines.length}`);

// 16.Susikurkite studentų objektų masyvą, kur apie kiekvieną studentą būtų žinoma ši informacija: vardas ir pavardė, amžius, pažymiai, studijų programa, kursas. Kiekvieną studentą išveskite taip: pirmoje eilutėje visi studento duomenys išskyrus jo pažymius, antroje eilutėje jo pažymiai, trečioje jo pažymių vidurkis su prierašu 'pažymių vidurkis'. Išvedus visus studentus dėkite brūkšnį (pvz.: -----) ir išveskite bendrą visų studentų pažymių vidurkį.

// const studentaiMasyvas = [
//   {
//     vardas: "jonas",
//     pavarde: "jonelis",
//     amzius: "22",
//     pazymiai: [7, 5, 8, 4, 9, 5, 6, 7],
//     programa: "ksjd",
//     kursas: 3,
//   },
//   {
//     vardas: "povilas",
//     pavarde: "pola",
//     amzius: "20",
//     pazymiai: [9, 4, 8, 2, 5, 7, 8],
//     programa: "kerkj",
//     kursas: 1,
//   },
//   {
//     vardas: "karolis",
//     pavarde: "ksood",
//     amzius: "18",
//     pazymiai: [8, 7, 9, 6, 3, 2, 1, 5, 4],
//     programa: "dfdf",
//     kursas: 1,
//   },
//   {
//     vardas: "agne",
//     pavarde: "vilk",
//     amzius: "24",
//     pazymiai: [8, 4, 9, 5, 2, 5, 4, 1, 8, 9, 9],
//     programa: "dfk",
//     kursas: 5,
//   },
// ];

// for (let indx in studentaiMasyvas) {
//   let tekstas = "";
//   for (let savybe in studentaiMasyvas[indx]) {
//     if (savybe !== "pazymiai") {
//       tekstas += " " + studentaiMasyvas[indx][savybe];
//     }
//   }
//   // console.log(indx);

//   //tekstas be eilutes su pazymiais
//   console.log(tekstas);

//   //pazymiu eilute
//   console.log(studentaiMasyvas[indx].pazymiai);

//   //vidurkis su prierasu
//   const pazymiuAvg = studentaiMasyvas[indx].pazymiai.reduce((a, b) => a + b, 0) / studentaiMasyvas[indx].pazymiai.length;

//   //vidurkis pridedamas i objekta
//   studentaiMasyvas[indx].vidurkis = pazymiuAvg.toFixed(2);

//   console.log(`Studento ${studentaiMasyvas[indx].vardas} pazymiu vidurkis yra: ${studentaiMasyvas[indx].vidurkis}`);
//   console.log("----------------");
// }

// 17.Susikurkite parduotuvės objektą, kuriame būtų ši informacija: pavadinimas, adresas, darbuotojų kiekis, prekių objektų masyvas. Apie kiekvieną prekę parduotuvėje žinoma ši informacija: pavadinimas; kodas; kaina; savikaina; turimas kiekis. Išveskite parduotuvės bendrą informaciją, tuomet užrašą "prekės" ir atskirose eilutėse turimas prekes su kuria nors jų informacija (pvz.: pavadinimai, kainos ir turimi kiekiai). Galiausiai paskaičiuokite kiek iš viso parduotuvė turi visų prekių (sudėkite jų kiekius). Raskite ir išveskite kurios prekės turima daugiausiai, o kurios mažiausiai.

// let parduotuve = {
//   pavadinimas: "kdjf",
//   adresas: "df g.55",
//   darbuotojai: 12,
//   prekes: [
//     {
//       prekesPavadinimas: "pienas",
//       kodas: 56554,
//       kaina: 0.99,
//       savikaina: 0.45,
//       kiekis: 100,
//     },
//     {
//       prekesPavadinimas: "duona",
//       kodas: 79997,
//       kaina: 1.59,
//       savikaina: 0.88,
//       kiekis: 75,
//     },
//     {
//       prekesPavadinimas: "mesa",
//       kodas: 88558,
//       kaina: 3.99,
//       savikaina: 2,
//       kiekis: 20,
//     },
//   ],
// };

// for (const reiksme in parduotuve) {
//   let tekstas = "";

//   if (reiksme !== "prekes") {
//     tekstas += reiksme + " " + parduotuve[reiksme];
//   }
//   console.log(tekstas);
//   console.log("Prekes:");
// }
// for (preke in parduotuve.prekes) {
//   console.log(`Preke ${parduotuve.prekes[preke].prekesPavadinimas} kurios kaina yra: ${parduotuve.prekes[preke].kaina}$, likutis yra ${parduotuve.prekes[preke].kiekis}`);
// }

// const prekiuKiekis = parduotuve.prekes.reduce((a, b) => a + b.kiekis, 0);

// console.log(`Bendras prekiu kiekis yra ${prekiuKiekis}`);

// 18.Sukurkite norimą objektų masyvą su norimais duomenimis. Atlikite išvedimus ir pasirinktus skaičiavimus.

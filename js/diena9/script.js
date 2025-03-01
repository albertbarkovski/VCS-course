// 1. Sukurkite objektą studento duomenims saugoti. Į šį objektą sudėkite tokias savybes su reikšmėmis: vardas, pavardė, amžius, studijų programa, atsiskaitytų kreditų skaičius, pažymiai, amžius, ūgis, kelintame kurse mokosi, kurioje mokykloje mokosi. Šiuos duomenis galite grupuoti į vidinius objektus arba visus išrašyti atskirai. Išveskite šią informaciją per vieną console.log(). Taip pat, pamėginkite išvesti atskirose eilutėse tris skirtingas pasirinktas savybes.

// let studentas = { vardas: "Jonas", pavarde: "Jonelis", amzius: 25, studProg: "IBF", kredSK: 2, pazymiai: [5, 7, 9, 8, 10], ugis: 187, kelintasKursas: 3, mokykla: "VKG" };
// console.log(studentas);
// console.log("kreditu sk", studentas.kredSK, "amzius", studentas.amzius, "kursas", studentas.kelintasKursas);

// 2. Sukurkite objektą informacijai apie filmą saugoti. Į šį objektą sudėkite tokias savybes su reikšmėmis: pavadinimas, režisierius, biudžetas, kiek uždirbo pinigų po išleidimo, žanras, trukmė, išleidimo metai, aktorių sąrašas (masyvas su jų vardais ir pavardėmis). Išveskite šio objekto informaciją. Paskaičiuokite ir išveskite šio filmo pelną (uždarbis - biudžetas). Išveskite kiek filme dalyvavo aktorių (jų kiekis). Paskaičiuokite kiek filmui yra metų (dabartinius metus tiesiog galite įrašyti rankomis arba panaudoti new Date(Date.now()).getFullYear() funkciją).

// let filmas = { pavadinimas: "zalioji milia", rezisierius: "R. De Niro", biudzetas: 5500000, uzdarbis: 15000000, zanras: "drama", trukme: 115 + " min", metai: 1987, aktoriai: ["Jim Karny", "Kibork Ubijca", "Ciklop Udongva"] };

// console.log(filmas);
// console.log("pelnas", filmas.uzdarbis - filmas.biudzetas);
// console.log("aktoriu sk", filmas.aktoriai.length);

// console.log("filmui metu", new Date(Date.now()).getFullYear() - filmas.metai);

// 3. Sukurkite du objektus dviejų knygų informacijai saugoti. Kiekviename objekte nurodykite tokias savybes su reikšmėmis: pavadinimas, autorius, žanras, kaina, puslapių kiekis, skyrių sąrašas (masyvas su pavadinimais), išleidimo metai, ar knygą galima rasti knygynuose. Išveskite šių knygų informaciją. Išveskite kuri knyga plonesnė (turi mažiau puslapių), bei kurioje knygoje yra daugiau skyrių. Paskaičiuokite, jeigu pigesnės knygos kainą padvigintumėte, ar ji jau būtų brangesnė už kitą knygą?

// let knyga1 = { pavadinimas: "master", autorius: "tapinas", žanras: "komedija", kaina: 15, puslapiųKiekis: 150, skyriųSąrašas: ["pirmas", "antras", "trecias"], išleidimoMetai: 2020, knygąGalimaRastiKnygynuose: true };

// let knyga2 = { pavadinimas: "margarita", autorius: "bulgakov", žanras: "drama", kaina: 31, puslapiųKiekis: 350, skyriųSąrašas: ["pirmas", "antras", "trecias", "4", "5"], išleidimoMetai: 2010, knygąGalimaRastiKnygynuose: false };

// let kuriStoresne = "";
// if (knyga1.puslapiųKiekis < knyga2.puslapiųKiekis) {
//   kuriStoresne = "knyga " + knyga1.pavadinimas + " yra plonesne";
// } else {
//   kuriStoresne = "knyga " + knyga2.pavadinimas + " yra plonesne";
// }

// let pigesne = 0;
// let brangesne = 0;
// if (knyga1.kaina > knyga2.kaina) {
//   pigesne = knyga2;
//   brangesne = knyga1;
// } else {
//   pigesne = knyga1;
//   brangesne = knyga2;
// }
// let arButuBrangesne = "";
// if (pigesne.kaina * 2 < brangesne.kaina) {
//   arButuBrangesne = "pigesne knyga netaptu brangesne";
// } else {
//   arButuBrangesne = "pigesne knyga taptu brangesne";
// }

// console.log(knyga1);
// console.log(knyga2);
// console.log(kuriStoresne);
// console.log(knyga1.skyriųSąrašas.length > knyga2.skyriųSąrašas.length ? knyga1.pavadinimas + " turi daugiau skyriu" : knyga2.pavadinimas + " turi daugiau skyriu");
// console.log(arButuBrangesne);

// 4. Sukurkite tris objektus prekių duomenims saugoti. Kiekviename objekte sudėkite šias savybes su reikšmėmis: pavadinimas, kaina, savikaina, kodas, turimas kiekis sandėlyje, siuntimui dėžės matmenys (x, y, z ašys). Išveskite visų trijų prekių informaciją. Išveskite visų prekių kainas vienoje eilutėje (pirma prekė kainuoja - ..., antra prekė kainuoja - ..., ir t.t.). Raskite ir išveskite kuri prekė yra brangiausia (jos pavadinimą ir kainą arba visą rastos prekės informaciją). Raskite ir išveskite atskirose eilutėse kiekvienos prekės dėžės tūrį. Raskite ir išveskite atskirose eilutėse kiekvienos prekės pelningumą ((kaina - savikaina) * kiekis sandėlyje).

// let preke1 = { pavadinimas: "nike", kaina: 200, savikaina: 60, kodas: 1251, turimasKiekisSandelyje: 15, siuntimuiDezesMatmenys: { x: 20, y: 15, z: 10 } };
// let preke2 = { pavadinimas: "adidas", kaina: 170, savikaina: 80, kodas: 1881, turimasKiekisSandelyje: 10, siuntimuiDezesMatmenys: { x: 23, y: 13, z: 10 } };
// let preke3 = { pavadinimas: "puma", kaina: 190, savikaina: 30, kodas: 1951, turimasKiekisSandelyje: 5, siuntimuiDezesMatmenys: { x: 28, y: 18, z: 12 } };

// console.log(preke1);
// console.log(preke2);
// console.log(preke3);
// console.log(`pirma kaina ${preke1.kaina}, antra kaina ${preke2.kaina}, trecia kaina ${preke3.kaina}`);

// let prekes = [preke1, preke2, preke3];
// const brangiausias = prekes.reduce((max, preke) => (max.kaina < preke.kaina ? preke : max));

// console.log("brangiausia preke:", brangiausias.pavadinimas + ", kaina:", brangiausias.kaina);

// prekes.forEach((preke) => {
//   let turis = preke.siuntimuiDezesMatmenys.x * preke.siuntimuiDezesMatmenys.y * preke.siuntimuiDezesMatmenys.z;
//   console.log(`${preke.pavadinimas} dezes turis yra ${turis}cm3`);
// });

// prekes.forEach((preke) => {
//   let pelningumas = (preke.kaina - preke.savikaina) * preke.turimasKiekisSandelyje;
//   console.log(`Prekes ${preke.pavadinimas} pelningumas yra ${pelningumas}`);
// });

// 5. Sukurkite objektą automobilio duomenims saugoti. Į šį objektą savybes su reikšmėmis sukelkite, po to kai sukursite tuščią objektą (10-as pavyzdys). Sudėkite šias savybes su reikšmėmis: markė, modelis, rida, gamybos metai, spalva, darbinis tūris, ar daužta, ar parduodama. Išveskite visą automobilio informaciją. Paskaičiuokite ir išveskite kiek automobiliui yra metų (rankomis įrašykite dabartinius metus arba panaudokite new Date(Date.now()).getFullYear() funkciją). Paskaičiuokite ir išveskite kiek vidutiniškai per metus yra nuvažiavęs automobilis (jeigu viso nuvažiavo 300 kilometrų, o automobiliui yra 2 metai, tai per metus vidutiniškai gaunasi 150 km.).

// let automobilis = {};
// automobilis.marke = "audi";
// automobilis.modelis = "r8";
// automobilis.rida = 1500;
// automobilis.metai = 2018;
// automobilis.spalva = "juoda";
// automobilis.turis = 5;
// automobilis.arDauzta = false;
// automobilis.arParduodama = true;

// let kiekMetu = new Date(Date.now()).getFullYear() - automobilis.metai;

// console.log(automobilis);

// console.log(`Automobiliui ${automobilis.marke} ${automobilis.modelis} yra ${kiekMetu} metai`);

// kiekKmPerMetus = automobilis.rida / kiekMetu;

// console.log(`Automobiliui ${automobilis.marke} ${automobilis.modelis} per metus vidutiniskai nuvaziuoja ${Math.floor(kiekKmPerMetus)}`);

// 6. Sukurkite savo norimą objektą(-us). Kiekviename sudėkite bent 5 savybes su reikšmėmis (reikšmes galite įdėti ir atskirai). Išveskite informaciją. Pagalvokite ką dar galite su šiuo objektu atlikti (paskaičiuoti ir pan.) ir tai padarykite.

// let langas1 = { pavadinimas: "pirmas", kaina: 300, paketai: 2, kiekisSandely: 55, riemoMedziaga: "medis", ismatavimas: { x: 60, y: 120 } };
// let langas2 = { pavadinimas: "antras", kaina: 500, paketai: 3, kiekisSandely: 37, riemoMedziaga: "medis", ismatavimas: { x: 80, y: 120 } };
// let langas3 = { pavadinimas: "trecias", kaina: 200, paketai: 2, kiekisSandely: 80, riemoMedziaga: "plastikas", ismatavimas: { x: 60, y: 120 } };
// let langas4 = { pavadinimas: "ketvirtas", kaina: 1000, paketai: 4, kiekisSandely: 32, riemoMedziaga: "aliuminis", ismatavimas: { x: 100, y: 200 } };

// let langai = [langas1, langas2, langas3, langas4];

// const brangiausias = langai.reduce((max, langas) => (max.kaina < langas.kaina ? langas : max));

// console.log(`brangiausias langas yra ${brangiausias.pavadinimas} kaina:${brangiausias.kaina}`);

// langai.forEach((a) => {
//   const plotas = a.ismatavimas.x * a.ismatavimas.y;

//   console.log(`lango ${a.pavadinimas} plotas yra ${plotas}`);
// });

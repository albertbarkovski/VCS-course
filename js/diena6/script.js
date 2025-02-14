// let masyvas = ["albert", "barkovski", true, 2000, "07", 19];

// console.log(masyvas[0], masyvas[masyvas.length - 1]);
// console.log(masyvas[2], masyvas[3]);
// console.log(masyvas.length);
// console.log("-------------------------------");

// let antras = [1, 2, 3, 4, "cola", "sprite"];

// console.log(antras);
// antras[2] = "pipirai";
// antras[antras.length - 1] = 100;
// antras[0] = 69;

// console.log(antras);
// console.log("-------------------------------");

// let trecias = [];

// trecias.push("rokas", 1, 99);
// trecias[2] = 10000;

// console.log(trecias);
// console.log("-------------------------------");

// let ketvirta = [];

// let a = Math.floor(Math.random() * 90);
// let b = Math.floor(Math.random() * 90);
// let c = Math.floor(Math.random() * 90);

// ketvirta.push(a, b, c);

// console.log(ketvirta);
// console.log("-------------------------------");

// let pirmo = [8, 9, 5, 8, 5];
// let antro = [10, 9, 8, 7, 6];
// let suma1 = 0;
// let suma2 = 0;

// for (let i = 0; i < pirmo.length; i++) {
//   suma1 += pirmo[i];
//   // console.log(suma1);
// }
// console.log("pirmo", suma1 / pirmo.length);

// for (let j = 0; j < antro.length; j++) {
//   suma2 += antro[j];
//   // console.log(suma2);
// }
// console.log("antro", suma2 / antro.length);

// let studijuProgramos = ["pirma programa", "antra programa", "trecia programa", "ketvirta programa"];

// console.log(studijuProgramos);
// console.log("-------------------------------");

// let salys = ["Lietuva", "Lenkija", "Estija", "Latvija", "Suomija", "Svedija"];
// let output = "";

// for (i = 0; i < salys.length; i++) {
//   console.log("salis:", salys[i]);
// }

// let projektai = ["projekta1", "projektas2", "projektas3", "projektas4"];

// for (i = 0; i < projektai.length; i++) {
//   console.log(`${i + 1} projektas yra ${projektai[i]}`);
// }

// let skaiciai = [5, 6, 9, 6, 5, 8, 2];

// for (i = 0; i < skaiciai.length; i++) {
//   if (skaiciai[i] > 5) {
//     console.log(skaiciai[i]);
//   }
// }

// let skaiciai = [5, 6, 9, 6, 5, 8, 2, 12, 100];

// for (i = 0; i < skaiciai.length; i++) {
//   if (skaiciai[i] % 4 == 0) {
//     console.log(skaiciai[i]);
//   }
// }

// let pazymiai = [5, 6, 9, 6, 5, 8, 2];
// let suma = 0;

// for (i = 0; i < pazymiai.length; i++) {
//   suma += pazymiai[i];
// }
// let vidurkis = suma / pazymiai.length;
// console.log("suma: ", suma, "vidurkis:", vidurkis.toFixed(2));

// let pazymiai = [5, 6, 9, 6, 5, 8, 2];
// let suma = 0;

// for (i = 0; i < pazymiai.length; i++) {
//   suma += pazymiai[i];
// }

// let vidurkis = suma / pazymiai.length;

// for (j = 0; j < pazymiai.length; j++) {
//   if (pazymiai[j] > vidurkis) {
//     console.log(pazymiai[j]);
//   }
// }

// let skaiciai = [5, 8, 3, 2, 99, 3, 2, 5, 10, 166, 56];

// for (i = 0; i < skaiciai.length; i++) {
//   let kvadratas = skaiciai[i] * skaiciai[i];
//   skaiciai[i] % 2 == 0 ? console.log(skaiciai[i], kvadratas) : console.log(skaiciai[i]);
// }

// let pazymiai = [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1];

// for (i = 0; i < pazymiai.length; i++) {
//   pazymiai[i] >= 5 ? console.log(pazymiai[i], "teigiamas") : console.log(`${pazymiai[i]}, neigiamas, tuksta iki teigiamo ${5 - pazymiai[i]} balo`);
// }

// let zodziai = ["jonas", "paulius", "albertas", "darius", "agne", "grazina", "savana"];
// let kiekis = 0;

// for (i = 0; i < zodziai.length; i++) {
//   kiekis += zodziai[i].length;
//   console.log(zodziai[i], zodziai[i].length);
// }
// console.log("kiekis yra ", kiekis);

// let skaiciai = [6, 9, 3, 2, 3, 2, 5, 9, 166, 56];
// let suma = 0;
// let elementai = [];
// let vidurkis = 0;

// for (i = 0; i < skaiciai.length; i++) {
//   if (skaiciai[i] % 3 == 0) {
//     elementai.push(skaiciai[i]);
//     suma += skaiciai[i];
//   }
// }

// vidurkis += suma / elementai.length;

// console.log(`skaiciai buvo ${skaiciai}, skaiciu dalus is triju ${elementai}, o ju vidurkis ${vidurkis.toFixed(2)}`);

// 17.Susikurkite bet kokių žodžių masyvą ir užpildykite jį duomenimis. Išveskite visus žodžius su indeksais į atskiras eilutes. Pvz: 0 - medis, 1 - tvora, ...

// let zodziai = ["krabas", "kaunas", "spurga", "lopas", "lape", "liepa"];

// for (let indeksas in zodziai) {
//   console.log(indeksas, zodziai[indeksas]);
// }

// 18.Susikurkite masyvą pirkinių sąrašui saugoti ir užpildykite jį duomenimis. Išveskite kiek pirkinių yra šiame sąraše. Taip pat, išveskite kiekvieną įrašą atskiroje eilutėje, prieš kiekvieną parašant brūkšniuką ar kokį kitą skirtuką.

// let pirkiniai = ["pienas", "varske", "kiausai", "pomidoras", "bananas"];

// console.log(pirkiniai.length, "pirkiniai");

// for (let produktai of pirkiniai) {
//   console.log("-", produktai);
// }

// 19.Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą duomenimis. Raskite pažymių vidurkį. Išveskite visus šiuos pažymius ir gautą vidurkį.

// let pazymiai = [5, 10, 10, 10, 10];

// let suma = 0;

// for (let pazymis of pazymiai) {
//   suma += pazymis;
// }
// let vidurkis = suma / pazymiai.length;

// console.log(`pazymiai: ${pazymiai}, vidurkis:${vidurkis}`);

// 20.Susikurkite masyvą kelionės nuovažiuotiems kilometrams saugoti ir užpildykite jį duomenimis (pvz 120, 145, 90 ir pan., kur kiekvienas skaičius reiškia kiek km kurią dieną buvo nuvažiuota). Išveskite visus nuvažiuotus per dieną kilometrus, kurie yra didesni nei 150.

// let kilometrai = [160, 145, 900, 120, 145, 90, 100, 400];

// for (let diena of kilometrai) {
//   diena > 150 ? console.log(diena) : undefined;
// }

// let pavadinimai = ["netflix.txt", "go3.png", "lnk.json", "lrt.html", "appletv.txt", "disnay.txt"];

// for (let pavadinimas of pavadinimai) {
//   if (pavadinimas.endsWith("txt") || pavadinimas.endsWith("json")) {
//     console.log(pavadinimas);
//   }
// }

// 22.Susikurkite masyvą automobilių markėms saugoti ir užpildykite jį duomenimis. Išveskite kiekvieną automobilį atskiroje eilutėje, nurodant kiek raidžių sudaro jo pavadinimą.

// let auto = ["audi", "bmw", "jeep", "subaru", "jaguar", "land rover", "mersedes-benz"];

// for (let masina of auto) {
//   console.log(masina, masina.length);
// }

// 23.Susikurkite masyvą įvykusių klaidų kodams saugoti ir užpildykite šį masyvą duomenimis. Tuomet išveskite visas sukauptas klaidas administratoriui, taip, kad jis suprastų kas per klaidos įvyko. Pavyzdžiui, jeigu yra kodas "ui87", tai kad išvestų "Grafinės sąsajos klaida navigacijoje", arba jeigu kodas "sys12", tuomet "Trūksta operatyviosios atminties sistemoje" ir pan.

// let output = "fire";
// let klaidos = [
//   ["ui87", "Grafinės sąsajos klaida navigacijoje"],
//   ["sys12", "Trūksta operatyviosios atminties sistemoje"],
//   ["errot", "viskas labai blogai"],
//   ["fire", "pastatas dega"],
// ];

// for (let klaida in klaidos) {
//   // console.log(`${klaidos[klaida][0]} yra ${klaidos[klaida][1]}`);

//   if (output == klaidos[klaida][0]) {
//     console.log(`${klaidos[klaida][0]} yra ${klaidos[klaida][1]}`);
//   }
// }

// 24.Susikurkite masyvą sandėlio likučiams saugoti (kiekvienas atskiras narys masyve yra atskiros prekės likutis). Su kiekvienu likučiu paskaičiuokite per kiek dienų bus išpirktas, jei per dieną vidutiniškai yra nuperkami 5 vnt. Išveskite atsakymus atskirose eilutėse, nurodant kiek yra dabar ir kiek dienų užteks jo. Pavyzdžiui, jeigu yra likučiai 74, 54 ir 32, tai 74 vnt. prekės užteks maždaug 15 dienų, 54 vnt. prekės užteks maždaug 11 dienų ir t.t.

// let prekes = [
//   ["varztai", 1000, 87],
//   ["arbuzai", 15, 2],
//   ["plaktukas", 36, 5],
//   ["puodeliai", 60, 5],
// ];

// for (let preke in prekes) {
//   let isparduotaPerDiena = Math.floor(prekes[preke][1] / prekes[preke][2]);
//   console.log(`preke:${prekes[preke][0]}, likutis:${prekes[preke][1]}, bus isparduota per: ${isparduotaPerDiena}`);
// }

// 25.Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą atsitiktinai sugeneruotais pažymiais. Raskite vidurkį. Raskite kiek neigiamų pažymių studentas gavo (mažesnių nei 5). Išveskite visus teigiamus pažymius, gautą vidurkį ir neigiamų pažymių kiekį.

// let pazymiai = [];
// let kiekPazymiu = Math.floor(Math.random() * 10) + 5;
// let suma = 0;
// let kiekNeigiamu = 0;
// let teigiamiPazymiai = [];

// for (i = 0; i < kiekPazymiu; i++) {
//   let pazymis = Math.floor(Math.random() * 10) + 1;

//   pazymiai.push(pazymis);

//   suma += pazymiai[i];
//   (pazymiai[i] < 5) ? kiekNeigiamu++ : teigiamiPazymiai.push(pazymiai[i]);
// }

// let vidurkis = suma / pazymiai.length;

// console.log(`pazymiai: ${pazymiai}`);
// console.log(`vidurkis: ${vidurkis.toFixed(2)}`);
// console.log(`neigiamu: ${kiekNeigiamu}`);
// console.log(`teigiami pazymiai: ${teigiamiPazymiai}`);

// 26.Susikurkite du pažymių masyvus, kur vienas masyvas reikš vieno studento pažymius, kitas masyvas kito studento pažymius. Raskite kiekvieno studento pažymių vidurkį. Išveskite abiejų studentų pažymius, vidurkius ir nurodykite kuris studentas turi didesnį vidurkį.

// let pazymiai1 = [];
// let pazymiai2 = [];
// let kiekPazymiu = Math.floor(Math.random() * 10) + 5;
// let suma1 = 0;
// let suma2 = 0;

// for (i = 0; i < kiekPazymiu; i++) {
//   let pazymis1 = Math.floor(Math.random() * 10) + 1;
//   let pazymis2 = Math.floor(Math.random() * 10) + 1;

//   pazymiai1.push(pazymis1);
//   pazymiai2.push(pazymis2);

//   suma1 += pazymiai1[i];
//   suma2 += pazymiai2[i];
// }
// let vidurkis1 = suma1 / pazymiai1.length;
// let vidurkis2 = suma2 / pazymiai2.length;

// console.log(`pirmo studento pazymiai: ${pazymiai1} ir jo vidurkis yra ${vidurkis1.toFixed(2)}`);
// console.log(`antro studento pazymiai: ${pazymiai2} ir jo vidurkis yra ${vidurkis2.toFixed(2)}`);

// if (vidurkis1 > vidurkis2) {
//   console.log(`pirmo studento pazymiu vidurkis yra aukstesnis`);
// } else if (vidurkis1 < vidurkis2) {
//   console.log(`antro studento pazymiu vidurkis yra aukstesnis`);
// } else {
//   console.log(`studentu pazymiu vidurkiai yra vienodi`);
// }

// 27.Susikurkite masyvą norimiems žodžiams saugoti. Užpildykite šį masyvą duomenimis. Į kitą masyvą atrinkite tuos žodžius, kurie yra trumpi (sudaro mažiau nei 5 raidės). Išveskite pradinius duomenis ir atrinktus.
// let zodiai = ["Sakalas", "Kate", "Suo", "Arklys", "Karve", "Papuga", "Peleda", "Kengura", "Asilas", "Zebras", "Liutas", "Gepardas", "Dino", "Bizon"];
// let trumpi = [];

// for (i = 0; i < zodiai.length; i++) {
//   zodiai[i].length <= 5 ? trumpi.push(zodiai[i]) : undefined;
// }
// console.log(`Pradiniai zodziai: ${zodiai}`);
// console.log(`Zodziai trumpesni nei 5 raides: ${trumpi}`);

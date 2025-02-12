/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/

/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija
 Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę
  padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

// let a = Math.floor(Math.random() * 26);
// let b = Math.floor(Math.random() * 26);
// let c = Math.floor(Math.random() * 26);
// let vidurkis = (a + b + c) / 3;
// console.log(`(${a}+${b}+${c})/3=${vidurkis}`);

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/

// let tr1 = Math.floor(Math.random() * 10) + 1;
// let tr2 = Math.floor(Math.random() * 10) + 1;
// let tr3 = Math.floor(Math.random() * 10) + 1;
// if (tr1 < 3 || tr2 < 3 || tr3 < 3) {
//   console.log(`tr1=${tr1},tr2=${tr2},tr3=${tr3},
// negalima sudaryti trikampio`);
// } else {
//   console.log(`tr1=${tr1},tr2=${tr2},tr3=${tr3},
// galima sudaryti trikampi`);
// }

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/

// let a = Math.floor(Math.random() * 3);
// let b = Math.floor(Math.random() * 3);
// let c = Math.floor(Math.random() * 3);
// let d = Math.floor(Math.random() * 3);

// let nuliai = 0,
//   vienetai = 0,
//   dvejetai = 0;

// if (a === 0) nuliai++;
// if (b === 0) nuliai++;
// if (c === 0) nuliai++;
// if (d === 0) nuliai++;
// if (a === 1) vienetai++;
// if (b === 1) vienetai++;
// if (c === 1) vienetai++;
// if (d === 1) vienetai++;
// if (a === 2) dvejetai++;
// if (b === 2) dvejetai++;
// if (c === 2) dvejetai++;
// if (d === 2) dvejetai++;

// console.log(`
// skaiciai:a=${a} b=${b} c=${c} d=${d}
// nuliai:${nuliai} vienetai:${vienetai} dvejetai:${dvejetai}`);

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/
// let a = Math.floor(Math.random() * 20) - 10;
// let b = Math.floor(Math.random() * 20) - 10;
// let c = Math.floor(Math.random() * 20) - 10;

// if (a <= 0) {
//   console.log(`[${a}]`);
// } else {
//   console.log(`{${a}}`);
// }
// if (b <= 0) {
//   console.log(`[${b}]`);
// } else {
//   console.log(`{${b}}`);
// }
// if (c <= 0) {
//   console.log(`[${c}]`);
// } else {
//   console.log(`{${c}}`);
// }

/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/

// let kaina = 1;
// let kiekis = Math.floor(Math.random() * 2995) + 5;
// let kainaUz1000 = kaina * 0.97;
// let kainaUz2000 = kaina * 0.96;

// if (kiekis >= 1000 && kiekis < 2000) {
//   console.log(`
// zvakiu.vnt:${kiekis}
// kaina.vnt:${kainaUz1000}
// suma:${kiekis * kainaUz1000}`);
// } else if (kiekis >= 2000) {
//   console.log(`
//   zvakiu.vnt:${kiekis}
//   kaina.vnt:${kainaUz2000}
//   suma:${kiekis * kainaUz2000}`);
// }

/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/

let a = Math.floor(Math.random() * 101);
let b = Math.floor(Math.random() * 101);
let c = Math.floor(Math.random() * 101);
let vidurkis = (a + b + c) / 3;
let sum = 0;
let count = 0;

if (!(a < 10 || a > 90)) {
  sum += a;
  count++;
}
if (!(b < 10 || b > 90)) {
  sum += b;
  count++;
}
if (!(c < 10 || c > 90)) {
  sum += c;
  count++;
}
let nauajasVidurkis = sum / count;

console.log(`skaiciai:${a},${b},${c},
vidurkis:${Math.round(vidurkis)};naujas vidurkis:${Math.round(nauajasVidurkis)}`);

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/

// let val = Math.floor(Math.random() * 24);
// let min = Math.floor(Math.random() * 60);
// let sec = Math.floor(Math.random() * 60);
// let laikrodis = `${val}:${min}:${sec}`;

// let minisec = Math.floor(Math.random() * 301);
// let chronometras = `${laikrodis}:${minisec}`;
// console.log(laikrodis);
// console.log(chronometras);
/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

// let a = Math.floor(Math.random() * 9000) + 1000;
// let b = Math.floor(Math.random() * 9000) + 1000;
// let c = Math.floor(Math.random() * 9000) + 1000;
// let d = Math.floor(Math.random() * 9000) + 1000;
// let e = Math.floor(Math.random() * 9000) + 1000;
// let f = Math.floor(Math.random() * 9000) + 1000;

// let max1 = Math.max(a, b, c, d, e, f);
// let min1 = Math.min(a, b, c, d, e, f);

// let max2 = Math.max(a !== max1 ? a : -1, b !== max1 ? b : -1, c !== max1 ? c : -1, d !== max1 ? d : -1, e !== max1 ? e : -1, f !== max1 ? f : -1);
// let min2 = Math.min(a !== min1 ? a : 99999, b !== min1 ? b : 99999, c !== min1 ? c : 99999, d !== min1 ? d : 99999, e !== min1 ? e : 99999, f !== min1 ? f : 99999);

// let max3 = Math.max(a !== max1 && a !== max2 ? a : -1, b !== max1 && b !== max2 ? b : -1, c !== max1 && c !== max2 ? c : -1, d !== max1 && d !== max2 ? d : -1, e !== max1 && e !== max2 ? e : -1, f !== max1 && f !== max2 ? f : -1);
// let min3 = Math.min(a !== min1 && a !== min2 ? a : 99999, b !== min1 && b !== min2 ? b : 99999, c !== min1 && c !== min2 ? c : 99999, d !== min1 && d !== min2 ? d : 99999, e !== min1 && e !== min2 ? e : 99999, f !== min1 && f !== min2 ? f : 99999);

// let max4 = Math.max(a !== max1 && a !== max2 && a !== max3 ? a : -1, b !== max1 && b !== max2 && b !== max3 ? b : -1, c !== max1 && c !== max2 && c !== max3 ? c : -1, d !== max1 && d !== max2 && d !== max3 ? d : -1, e !== max1 && e !== max2 && e !== max3 ? e : -1, f !== max1 && f !== max2 && f !== max3 ? f : -1);
// let min4 = Math.min(a !== min1 && a !== min2 && a !== min3 ? a : 99999, b !== min1 && b !== min2 && b !== min3 ? b : 99999, c !== min1 && c !== min2 && c !== min3 ? c : 99999, d !== min1 && d !== min2 && d !== min3 ? d : 99999, e !== min1 && e !== min2 && e !== min3 ? e : 99999, f !== min1 && f !== min2 && f !== min3 ? f : 99999);

// let max5 = Math.max(a !== max1 && a !== max2 && a !== max3 && a !== max4 ? a : -1, b !== max1 && b !== max2 && b !== max3 && b !== max4 ? b : -1, c !== max1 && c !== max2 && c !== max3 && c !== max4 ? c : -1, d !== max1 && d !== max2 && d !== max3 && d !== max4 ? d : -1, e !== max1 && e !== max2 && e !== max3 && e !== max4 ? e : -1, f !== max1 && f !== max2 && f !== max3 && f !== max4 ? f : -1);
// let min5 = Math.min(a !== min1 && a !== min2 && a !== min3 && a !== min4 ? a : 99999, b !== min1 && b !== min2 && b !== min3 && b !== min4 ? b : 99999, c !== min1 && c !== min2 && c !== min3 && c !== min4 ? c : 99999, d !== min1 && d !== min2 && d !== min3 && d !== min4 ? d : 99999, e !== min1 && e !== min2 && e !== min3 && e !== min4 ? e : 99999, f !== min1 && f !== min2 && f !== min3 && f !== min4 ? f : 99999);

// let max6 = a + b + c + d + e + f - (max1 + max2 + max3 + max4 + max5);

// let didejantiTvarka = `${max6} ${max5} ${max4} ${max3} ${max2} ${max1}`;
// let mazejantiTvarka = `${max1} ${max2} ${max3} ${max4} ${max5} ${max6}`;

// console.log(didejantiTvarka);
// console.log(mazejantiTvarka);

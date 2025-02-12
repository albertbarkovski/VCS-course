/* 
Užduotis 1
Naudodami while loop, konsolėje parašykite nuo 10 iki 1. 
*/
// let i = 10;
// while (i > 0) {
//   console.log(i);
//   i--;
// }

/* 
Užduotis 2
Naudodami for loop, konsolėje parašykite nuo 10 iki 1.
*/

// for (i = 10; i >= 1; i--) {
//   console.log(i);
// }

// Užduotis 3
// Per mėnesį avių skaičius išauga 4 kartais. Naudodami while loop ir tris nurodytus kintamuosius, išveskite avių skaičių 12 mėnesių.

// let numAvys = 4;
// let numMenuo = 1;
// let kiekMenSpausdinti = 12;

// Štai kaip atrodys pirmos dvi eilutės:

// let numAvys = 4;
// let numMenuo = 1;
// let kiekMenSpausdinti = 12;

// while (numMenuo <= kiekMenSpausdinti) {
//   console.log(`Po ${numMenuo} mėnesio(-ių) bus ${(numAvys = numAvys * 4)} aviu`);
//   numMenuo++;
// }

// Po 1 mėnesio(-ių) bus 16 avių!
// Po 2 mėnesio(-ių) bus 64 avių!

/*
Užduotis 4
Atlikite užduotį JS 03 su for loop
*/
// let numAvys = 4;
// let numMenuo = 1;
// let kiekMenSpausdinti = 12;

// for (i = numMenuo; i <= kiekMenSpausdinti; i++) {
//   console.log(`Po ${numMenuo} mėnesio(-ių) bus ${(numAvys = numAvys * 4)} aviu`);
// }

/*
Užduotis 5
Hidroeleketrinėje yra 19 generatorių. Pirmi 4 gamina po 62 MW, likusieji 15 - po 124 MW. Inžinieriai paprašė tavęs sukurti du ciklus (loops), kurie vienas po kito įjungia visus 19 generatorių ir atspausdina generuojamų MW skaičių. Pirmiems 4 generatoriams panaudok while loop, likusiems 15 - for loop. Kiekviena spausdinama eilutė turėtų atrodyti taip (koreguojant currentGen ir totalMW):

Generatorius #1 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 124 MW!

Naudokis tokiais kintamaisiais:
let currentGen = 1;
let totalGen = 19;
let totalMW = 0;
*/
// let currentGen = 1;
// let totalGen = 19;
// let totalMW = 0;
// let pirmigamina = 62;
// let antrigamina = 124;

// while (currentGen <= 4) {
//   console.log(`Generatorius #${currentGen} įjungtas, pridėjo ${pirmigamina} MW, viso generuojama ${(totalMW += pirmigamina)} MW!`);
//   currentGen++;
// }

// for (currentGen = 5; currentGen <= 19; currentGen++) {
//   console.log(`Generatorius #${currentGen} įjungtas, pridėjo ${antrigamina} MW, viso generuojama ${(totalMW += antrigamina)} MW!`);
// }

/*
Užduotis 6
Keli pakeitimai JS 05 užduočiai. Veikia tik lyginiai generatoriai. Panaudok tik vieną for loop. Nepamiršk, kad pirmi 4 generatoriai gamina po 62 MW, o likusieji 15 - po 124 MW.

Konsolės formatas:

Generatorius #1 išjungtas.
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!

Naudojami kintamieji:
let totalGen = 19;
let totalMW = 0;
*/
// let currentGen = 1;
// let totalGen = 19;
// let totalMW = 0;
// let pirmigamina = 62;
// let antrigamina = 124;

// for (currentGen; currentGen <= totalGen; currentGen++) {
//   let gamina = 0;
//   if (currentGen <= 4) {
//     gamina = pirmigamina;
//   } else {
//     gamina = antrigamina;
//   }
//   if (currentGen % 2 == 0) {
//     console.log(`Generatorius #${currentGen} įjungtas, pridėjo ${gamina} MW, viso generuojama ${(totalMW += gamina)} MW!`);
//   } else console.log(`Generatorius #${currentGen} išjungtas`);
// }

/*
Užduotis 7
Papildyk while loop taip, kad tik lyginiai skaičiai būtų spausdinami. Tavo rezultatas turėtų būti lyginiai skaičiai nuo 10 iki 2 žemėjančia tvarka.

let num=10;
while (num > 0) {

console.log(num);

num--;
}
*/
// let num = 10;
// while (num > 0) {
//   if (num % 2 == 0) {
//     console.log(num);
//   }
//   num--;
// }

/*
Užduotis 8
Sukurk funkciją maxOf2, kuri priima du skaičius ir gražina didesnį skaičių. Nepamiršk galimybės, kad skaičiai bus lygūs. Tuo atveju gražink vieną iš skaičių.
*/

let a = Math.floor(Math.random() * 5) + 1;
let b = Math.floor(Math.random() * 5) + 1;

let maxOf2 = 0;

if (a >= b) {
  maxOf2 = a;
} else {
  maxOf2 = b;
}

console.log(a, b, maxOf2);

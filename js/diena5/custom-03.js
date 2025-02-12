/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/

// let i = 1;
// let a = 0;
// while (i <= 10) {
//   a = "labas";
//   console.log(a);
//   i++;
// }

/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/
// let i = 1;
// while (i <= 9) {
//   console.log(i);
//   i++;
// }

/* 03.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/
// let i = 10;
// while (i <= 50) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// }

/* 04.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/
// let i = 10;
// while (i <= 50) {
//   if (i % 2 == 0) {
//     if (i % 10 == 0) {
//       i++;
//       continue;
//     }
//     console.log(i);
//   }

//   i++;
// }

/* 05.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/

// let lyg = 0;
// for (i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     lyg++;
//     continue;
//   }
//   console.log(lyg);
// }

/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/

// let i = 1;
// let tarpas = "";

// while (i <= 300) {
//   tarpas += i + (i < 300 ? " " : "");
//   i++;
// }

// console.log(output);

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/

/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/

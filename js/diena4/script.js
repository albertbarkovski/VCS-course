// let menuo = 7;
// let text;

// switch (menuo) {
//   case 12:
//   case 1:
//   case 2:
//     text = "ziema";
//     break;
//   case 3:
//   case 4:
//   case 5:
//     text = "pavasaris";
//     break;
//   case 6:
//   case 7:
//   case 8:
//     text = "vasara";
//     break;
//   case 9:
//   case 10:
//   case 11:
//     text = "ruduo";
//     break;
//   default:
//     console.log("Klaida");
// }
// console.log(text);

// a = 0;
// b = 9;
// if (a < b) {
//   for (let i = a; i <= b; i++) {
//     if (i % 2 != 0 || i % 8 == 0) console.log(i);
//   }
// } else console.log("netinka");

// let skaicius = -7;
// let kiekKartu = 8;
// let ats = 0;

// for (let i = 0; i < kiekKartu; i++) {
//   ats += skaicius;
// }
// console.log(ats);

// let vardas = "Albert";
// let pavarde = "Bar";
// let gimMet = 2000;
// let sieMet = 2025;

// const kiekMet = sieMet - gimMet;

// console.log(`Aš esu ${vardas} ${pavarde}. Man yra ${kiekMet} metai(-ų)`);

// suma = 0;

// for (i = 1; i <= 100; i++) {
//   suma += i;
// }
// console.log(`8uzs: ${suma}`);

// suma = 0;

// for (i = 20; i <= 50; i++) {
//   if (i % 2 == 0) {
//     suma += i;
//   }
// }
// console.log(`9uzs: ${suma}`);

// suma = 0;

// for (i = 30; i <= 60; i++) {
//   if (i % 2 != 0) {
//     suma += i;
//   }
// }
// console.log(`10uzs: ${suma}`);

// suma = 0;

// for (i = 0; i < 1000; i++) {
//   if (i % 3 == 0 || i % 5 == 0) {
//     suma += i;
//   }
// }
// console.log(`11uzs: ${suma}`);

// for (i = 1; i < 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//     continue;
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//     continue;
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//     continue;
//   }
//   console.log(i);
// }

// let a = 5;
// let b = 7;
// let c = 12;
// console.log(a);
// console.log(b);
// for (i = 2; i < 10; i++) {
//   c = a + b;
//   a = b;
//   b = c;
//   c <= 100;
//   console.log(c);
// }
// console.log("");

// let skaicius = 1;

// while (!(skaicius % 3 == 0 && skaicius % 5 == 0)) {
//   console.log(skaicius);
//   skaicius++;
// }

// let skaicius = 1;
// let suma = 0;
// while (skaicius <= 100) {
//   if (skaicius % 2 == 0) {
//     suma += skaicius;
//   }
//   skaicius++;
// }
// console.log(suma);

// let skaicius = 1;
// let kvadratas = 0;

// while (skaicius < 5) {
//   kvadratas = skaicius * skaicius;
//   console.log(skaicius, kvadratas);
//   skaicius++;
// }

// let a = 0;
// let b = 0;

// while (a < Math.floor(Math.random() * 20 + 1)) {
//   while (b < Math.floor(Math.random() * 100)) {
//     b++;
//   }
//   a++;
//   console.log(a, b);
// }

// let a = 0;
// let b = 0;
// let suma = 0;

// while (a < Math.floor(Math.random() * 20 + 1)) {
//   while (b < Math.floor(Math.random() * 100)) {
//     b++;
//   }
//   a++;
//   suma += b;
//   console.log(`${a} - ${b}`);
// }
// console.log(`suma b:${suma} `);

// 1. Paprastas while ciklas
// Parašyk kodą, kuris išveda skaičius nuo 10 iki 30, bet praleidžia skaičius, kurie dalūs iš 4.

// let a = 10;
// while (a <= 30) {
//   if (a % 4 != 0) {
//     console.log(a);
//   }
//   a++;
// }
// 2. for ciklas su break
// Parašyk kodą, kuris išveda skaičius nuo 1 iki 50, bet sustabdo ciklą, kai pasiekiamas pirmas skaičius, kuris dalus iš 9 ir 5.

// for (i = 1; i <= 50; i++) {
//   if (i % 9 == 0 && i % 5 == 0) {
//     break;
//   }
//   console.log(i);
// }
// 3. while ciklas su continue
// Parašyk programą, kuri išveda skaičius nuo 1 iki 100, bet praleidžia visus skaičius, kurie:
// Yra dalūs iš 7, bet ne iš 5.

// let a = 1;
// while (a <= 100) {
//   if (a % 7 == 0 && a % 5 != 0) {
//     a++;
//     continue;
//   }
//   console.log(a);
//   a++;
// }

// Užduotis:
// Parašyk programą, kuri išveda skaičius nuo 1 iki 200, bet praleidžia visus skaičius, kurie:

// Yra dalūs iš 4, bet ne iš 6.
// Naudok while ciklą ir continue.

// let a = 1;
// while (a <= 200) {
//   if (a % 4 == 0 && a % 6 != 0) {
//     a++;
//     continue;
//   }
//   console.log(a);
//   a++;
// }

// 4. Kombinuotas while + for
// Sukurk programą, kuri naudoja while ciklą skaičiuoti nuo 1 iki 50, bet:
// Prie visų skaičių, kurie lyginiai, prideda žvaigždutę (*),
// Naudojant for ciklą, prie visų skaičių, kurie dalūs iš 3, prideda šauktuką (!).

// let i = 1;

// while (i <= 50) {
//   let output = i;
//   if (i % 2 == 0) {
//     output += "*";
//   }
//   for (let skaicius = i; skaicius <= i; skaicius++) {
//     if (skaicius % 3 == 0) {
//       output += " !";
//     }
//   }
//   console.log(output);
//   i++;
// }

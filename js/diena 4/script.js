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

let skaicius = 1;


while (!(skaicius % 3 == 0 && skaicius % 5 == 0;)) {
  console.log(skaicius);
  skaicius++;
}

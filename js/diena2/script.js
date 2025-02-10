// let a = 15;
// let b = 8;
// let c = 3;
// if (a == b && a < c) {
//   console.log(a);
// } else if (b == c && b < a) {
//   console.log(b);
// } else if (a == c && a < b) {
//   console.log(c);
// } else {
//   if (a < b && a < c) {
//     console.log(a);
//   } else if (b < a && b < c) {
//     console.log(b);
//   } else {
//     console.log(c);
//   }
// }

// let a = 5;
// let b = 1;
// let c = 100;

// if ((a + b + c) / 3 >= 8 && (a + b + c) / 3 <= 10) {
//   console.log(`8 - 10`);
// } else if ((a + b + c) / 3 >= 5 && (a + b + c) / 3 < 8) {
//   console.log(`5-8`);
// } else if ((a + b + c) / 3 >= 1 && (a + b + c) / 3 < 5) {
//   console.log(`<5`);
// } else {
//   `klaida`;
// }

// let a = 20;
// let b = 5;

// if (a > b || a === 0) {
//   console.log(`pirmas ${true}`);
// } else {
//   console.log(`pirmas ${false}`);
// }

// if (b > a || b === 5) {
//   console.log(`antras ${true}`);
// } else {
//   console.log(`antras ${false}`);
// }

// if (b < a && a === 20) {
//   console.log(`trecias ${true}`);
// } else {
//   console.log(`trecias ${false}`);
// }

// if (b > a && b < 100) {
//   console.log(`ketvirtas ${true}`);
// } else {
//   console.log(`ketvirtas ${false}`);
// }

const darboVal = 8;
let vienasKepaluPerValanda = 18;
let darbuotojuSkaicius = 10;
let savikaina = 3;
let kaina = 18;
let uzsakymai = 1000;
const kepaluDienai = darboVal * vienasKepaluPerValanda * darbuotojuSkaicius;
const savikainaVienaiDienai = savikaina * kepaluDienai;
const apyvartaDienai = kaina * kepaluDienai;
const pelnas = apyvartaDienai - savikainaVienaiDienai;
const trukstaKepalu = uzsakymai - kepaluDienai;

console.log(`-------------------------
Kepykla per 1d.d. iskeps ${kepaluDienai} kepalu, uzsakymas:${uzsakymai} kepalu
Kepalu savikaina vienos dienos butu: ${savikainaVienaiDienai}$
-------------------------`);

if (uzsakymai < kepaluDienai) {
  console.log(`
Vienos dienos apyvarta butu: ${apyvartaDienai}$
Vienos dienos pelnas butu: ${pelnas}$
-------------------------`);
} else {
  console.log(`
Vienos dienos apyvarta ir pelnas butu: 0$, nes truksta ${trukstaKepalu} kepalo
-------------------------`);
}

if (kepaluDienai < uzsakymai) {
  console.log(`Kepykla neispes iskepti uzsakymo, kadangi truksta ${trukstaKepalu} kepalo `);
} else {
  console.log(`Kepykla spes paruosti uzsakyma`);
}

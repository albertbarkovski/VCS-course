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

let a = 5;
let b = 1;

if (a > b || a === 0) {
  console.log(`pirmas ${a > b || a === 0}`);
}

if (b > a || b === 5) {
  console.log(`antras ${b > a || b === 5}`);
}

if (b < a && a === 20) {
  console.log(`trecias ${b < a && a === 20}`);
}

if (b > a && b < 100) {
  console.log(`ketvirtas ${b > a && b < 100}`);
}

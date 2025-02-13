/* 01.
Sukurkite masyvą su dešimt augalų pavadinimų.


*/
let augalai = ["pivonija", "roze", "tulpe", "krumas", "braske", "kriause", "azuolas", "kopustas", "morka", "obuoliai"];

console.log(augalai);
/* 02.
Atspausdinkite kiekvieną pirmo uždavinio augalą atskiroje eilutėje.
*/
for (let i = 0; i < augalai.length; i++) {
  console.log(augalai[i]);
}

/* 03.
Atspausdinkite pirmo uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/
console.log(`------------------`);
augalai.reverse();
for (let i = 0; i < augalai.length; i++) {
  console.log(augalai[i]);
}
/* 04.
Suskaičiuokite kiek pirmo uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/

let trumpesniUz5 = 0;
let ilgesniUz7 = 0;

for (let i = 0; i < augalai.length; i++) {
  if (augalai[i].length < 5) {
    trumpesniUz5++;
  }
  if (augalai[i].length > 7) {
    ilgesniUz7++;
  }
}

console.log("Trumpesni nei 5 simboliai:", trumpesniUz5);
console.log("Ilgesni nei 7 simboliai:", ilgesniUz7);

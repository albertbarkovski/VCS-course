// 1. Sukurkite funkciją, kuri paverstų eurus į dolerius.Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000. Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį doleriais.

let euro = Math.floor(Math.random() * 1000 + 1);
let dollar = 0;
let dollarPrice = 1.08;

function convertToEuro() {
  dollar = euro * dollarPrice;
  return dollar.toFixed(2);
}
console.log(`${euro} eurai atitinka ${convertToEuro()} dolerius`);

// 2. Sukurkite funkciją, kuri paverstų dolerius į eurus. Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000. Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį eurais.

const dollar = Math.floor(Math.random() * 1000 + 1);
let euro = 0;
const euroPrice = 0.93;

function convertToDollar() {
  euro = dollar * euroPrice;
  return euro.toFixed(2);
}
console.log(`${dollar} doleriai atitinka ${convertToDollar()} eurus`);

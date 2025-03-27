// 8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.

const date = new Date();

const day = date.getDate();
// console.log(day);
const month = date.getMonth() + 1;
// console.log(month);
const years = date.getFullYear();
// console.log(years);

function likoDienu() {
  console.log(`Sios dienos data yra ${day}-${month}-${years}`);
  let likoMenesiu = 12 - month;
  let likusiosMenesioDienos = 30 - day;

  let likoDienu = likoMenesiu * 30.5 + likusiosMenesioDienos - 7;
  console.log("Iki Kaledu liko", likoDienu.toFixed(0), "dienos");
}
likoDienu();

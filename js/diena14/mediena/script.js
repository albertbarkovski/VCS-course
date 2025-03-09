let calculateBtn = document.getElementById("calculate");
let lenght = document.getElementById("ilgis");
let width = document.getElementById("plotis");
let height = document.getElementById("storis");
let result = document.getElementById("results");
let kiekis = document.getElementById("kiekis");

calculateBtn.onclick = function () {
  let equal = 0;
  equal = lenght.value * width.value * height.value;
  result.innerHTML = `Klienta domina ${equal} kubiniai centimetrai medienos`;
  let arUztenka = "";
  if (kiekis < equal) {
  }
  result.innerHTML = `Klienta domina ${equal} kubiniai centimetrai medienos`;
};

// 3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body mass index), kai yra žinomas žmogaus ūgis ir svoris.

const ugisEl = document.getElementById("ugis");
const svorisEl = document.getElementById("svoris");
const bmiEl = document.getElementById("bmi");
const btnEl = document.querySelector(".btn");
let bmi = 0;

function countBmi() {
  let ugis = ugisEl.value;
  let svoris = svorisEl.value;

  bmi = (svoris / (ugis * ugis)) * 10000;

  bmiEl.innerHTML = `<span>Jusu KMI yra:${bmi.toFixed(2)}</span>`;
}

btnEl.addEventListener("click", countBmi);

//uzduotis su HTML failu

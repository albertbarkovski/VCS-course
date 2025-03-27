// 5. Parašykite programą, kuri konvertuos termometro duomenis iš Farenheito į Celsijų, ir atvirkščiai.

const celsEl = document.getElementById("cel");
const farEl = document.getElementById("far");
const answEl = document.getElementById("answer");
const btn = document.getElementById("btn");

function countdegree() {
  let celsius = celsEl.value;
  let fahrenheit = farEl.value;
  let answerVal = "";

  if (celsius) {
    fahrenheit = ((celsius * 9) / 5 + 32).toFixed(2);
    answerVal = `${celsius} C yra lygu, ${fahrenheit} F`;
  }
  if (fahrenheit) {
    celsius = (((fahrenheit - 32) * 5) / 9).toFixed(2);
    answerVal = `${fahrenheit} F yra lygu ${celsius} C`;
  }

  answEl.innerHTML = `<div>${answerVal}</div>`;
}

btn.addEventListener("click", countdegree);

// uzduotis su HTML failu

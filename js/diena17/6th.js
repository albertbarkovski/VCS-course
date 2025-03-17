const nameEl = document.getElementById("name");
const scoreEl = document.getElementById("score");
const btnEl = document.querySelector(".btn");
const resultEl = document.querySelector(".result");

function gradeCheck() {
  let name = nameEl.value.trim();
  let score = Number(scoreEl.value.trim());

  if (name && !isNaN(score)) {
    if (score <= 100 && score >= 90) {
      resultEl.innerHTML = `<span style='color:green;'>Hello ${name}, your score is ${score}</span>`;
    } else if (score <= 89 && score >= 80) {
      resultEl.innerHTML = `<span style='color:blue;'>Hello ${name}, your score is ${score}</span>`;
    } else if (score <= 79 && score >= 70) {
      resultEl.innerHTML = `<span style='color:orange;'>Hello ${name}, your score is ${score}</span>`;
    } else if (score <= 69 && score >= 60) {
      resultEl.innerHTML = `<span style='color:red;'>Hello ${name}, your score is ${score}</span>`;
    } else if (score <= 59 && score >= 0) {
      resultEl.innerHTML = `<span style='color:darkred;'>Hello ${name}, your score is ${score}</span>`;
    }
  } else {
    resultEl.innerHTML = `<span style='color:red;'>ERROR</span>`;
  }
}

btnEl.addEventListener("click", gradeCheck);

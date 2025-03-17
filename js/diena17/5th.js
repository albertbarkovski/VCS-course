const nameEl = document.getElementById("name");
const ageEl = document.getElementById("age");
const btnEl = document.querySelector(".btn");
const resultEl = document.querySelector(".result");

function ageCheck() {
  let name = nameEl.value.trim();
  let age = Number(ageEl.value.trim());

  if (name && !isNaN(age) && age > 0) {
    if (age >= 18) {
      resultEl.innerHTML = `<span style='color:green;'>Hello ${name}, you are allowed!</span>`;
    } else {
      resultEl.innerHTML = `<span style='color:red;'>Hello ${name}, you are too young!</span>`;
    }
  } else {
    resultEl.innerHTML = `<span style='color:red;'>ERROR</span>`;
  }
}

btnEl.addEventListener("click", ageCheck);

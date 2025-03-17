const nameInput = document.querySelector("#name-input");
const welcomeMsg = document.querySelector(".welcome-msg");
const btn = document.querySelector(".btn");
const surnameInput = document.querySelector("#surname-input");
const age = document.querySelector("#age-input");
const position = document.querySelector("#position-input");

function data(a, b, c, d) {
  if (a && b && c && d && c > 0) {
    welcomeMsg.innerHTML = `<strong>Vardas:</strong> ${a}<br>
<strong>Pavardė:</strong> ${b}<br>
<strong>Amzius:</strong> ${c}<br> 
<strong>Pozicija:</strong> ${d}`;
  } else {
    welcomeMsg.innerHTML =
      "<span style='color:red; font-size:25px'>Truksta info</span>";
  }
}

btn.addEventListener("click", function () {
  data(nameInput.value, surnameInput.value, age.value, position.value);
});

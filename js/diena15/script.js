let firstNumber = 0;
let secondNumber = 0;
let action = "+";
let answer = 0;

let input = document.getElementById("calc-input");
let calculationSpan = document.getElementById("calculation");

let history = [];

function onNumberClick(number) {
  if (number === 0 && input.value === "") return;
  input.value += number;
}

function onActionClick(clickedAction) {
  let inputValue = input.value.trim();

  if (inputValue === "") return;

  let lastChar = inputValue.slice(-1);

  if ("+-/x".includes(lastChar)) {
    input.value = inputValue.slice(0, -1) + clickedAction;
  } else {
    input.value += " " + clickedAction + " ";
  }
  action = clickedAction;
}

function onCountClick() {
  if (input.value === "") return;

  let splitted = input.value.split(" ");
  if (splitted.length < 3) return;

  firstNumber = parseFloat(splitted[0]);
  action = splitted[1];
  secondNumber = parseFloat(splitted[2]);

  if (isNaN(firstNumber) || isNaN(secondNumber)) return;

  calculateAnswer();
  input.value = answer;

  calculationSpan.innerHTML = `${firstNumber}${action}${secondNumber}`;

  addToHistory();
}

function calculateAnswer() {
  switch (action) {
    case "+":
      answer = firstNumber + secondNumber;
      break;
    case "-":
      answer = firstNumber - secondNumber;
      break;
    case "x":
      answer = firstNumber * secondNumber;
      break;
    case "/":
      answer = secondNumber !== 0 ? firstNumber / secondNumber : "Klaida!";
      break;
  }
}

function onCleanClick() {
  firstNumber = 0;
  secondNumber = 0;
  action = "+";
  answer = 0;
  input.value = "";
  calculationSpan.innerHTML = "";
}

function addToHistory() {
  let historyItem = {
    firstNumber,
    action,
    secondNumber,
    answer,
  };
  history.push(historyItem);

  if (history.length > 5) {
    history.shift();
  }

  updateHistoryDisplay();
}

function updateHistoryDisplay() {
  if (!historyVisible) return;
  let historyBlock = document.querySelector(".calculator .history-items");

  historyBlock.innerHTML = history.map((x) => `<p>${x}</p>`).join("");
}

document.getElementById("show-history").onclick = function () {
  let formatted = history.map((x) => `<p>${x.firstNumber}${x.action}${x.secondNumber}=${x.answer}</p>`);
  let historyBlock = document.querySelector(".calculator .history-items");
  let button = document.getElementById("show-history");

  historyBlock.innerHTML = formatted.join("");
  // historyBlock.style.display = "block";

  if (historyBlock.style.display === "none" || historyBlock.style.display === "") {
    historyBlock.style.display = "block";
    button.innerHTML = "Slėpti istoriją";
  } else {
    historyBlock.style.display = "none";
    button.innerHTML = "Rodyti istoriją";
  }
  historyBlock.innerHTML = formatted.join("");
};

// document.getElementById("dont-show-history").onclick = function () {
//   let historyBlock = document.querySelector(".calculator .history-items");
//   historyBlock.style.display = "none";
// };

document.getElementById("clean-history").onclick = function () {
  let historyBlock = document.querySelector(".calculator .history-items");
  historyBlock.innerHTML = "";
  history = [];
  document.getElementById("show-history").innerText = "Rodyti istoriją";
};

function onCommaClick() {
  let parts = input.value.split(" ");
  let lastPart = parts[parts.length - 1];

  if (!lastPart.includes(".")) {
    input.value += ".";
  }
}

function onBackClick() {
  input.value = input.value.trim().slice(0, -1);
}

const inputEl = document.querySelector("#input");
const btnEl = document.querySelectorAll(".btn");
const customTip = document.getElementById("CustomTip");
const errorEl = document.getElementById("error");
const peopleEl = document.getElementById("people");
const totalVal = document.querySelectorAll(".tipValue");
const resetEl = document.querySelector(".reset");

let billVal = 0;
let peopleVal = 1;
let tipVal = 0.1;

inputEl.addEventListener("input", validateBill);
customTip.addEventListener("input", tipCustomVal);

peopleEl.addEventListener("input", setPeopleVal);
resetEl.addEventListener("click", handleReset);

//btn Event
btnEl.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

function handleClick(e) {
  btnEl.forEach((btn) => {
    btn.classList.remove("active");

    // console.log(e.target.innerHTML);
    if (e.target.innerHTML === btn.innerHTML) {
      btn.classList.add("active");
      tipVal = parseFloat(btn.innerHTML) / 100;
      console.log(tipVal);
    }
  });

  customTip.value = "";
  calculate();
}

//validate the Bill
function validateBill() {
  if (inputEl.value.includes(",")) {
    inputEl.value = inputEl.value.replace(",", ".");
  }
  billVal = parseFloat(inputEl.value);
  calculate();
}

//custom tip
function tipCustomVal() {
  tipVal = parseFloat(customTip.value / 100);

  btnEl.forEach((btn) => {
    btn.classList.remove("active");
  });

  if (customTip.value >= 0) {
    calculate();
  }
}

//set people value
function setPeopleVal() {
  peopleVal = parseFloat(peopleEl.value) || 1;

  if (peopleVal <= 0) {
    errorEl.innerHTML = "number must be greater than zero";

    setTimeout(() => {
      errorEl.innerHTML = "";
    }, 2000);
  }
  calculate();
}

//calculate
function calculate() {
  if (peopleVal >= 1) {
    let tip = (billVal * tipVal) / peopleVal;
    let totalAmount = (billVal * (tipVal + 1)) / peopleVal;

    totalVal[0].innerHTML = "&dollar;" + tip.toFixed(2);
    totalVal[1].innerHTML = "&dollar;" + totalAmount.toFixed(2);
  }
}

//reset
function handleReset() {
  inputEl.value = "";
  validateBill();
  btnEl[1].click();
  peopleEl.value = 1;
  setPeopleVal();
}

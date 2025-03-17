const nameEl = document.getElementById("user-name");
const selectorColorEl = document.getElementById("select-color");
const btn = document.getElementById("btn");
const result = document.querySelector(".result");

function displayColorMsg() {
  const name = nameEl.value.trim();
  const color = selectorColorEl.value;

  if (name && color) {
    result.innerHTML = `<span style='color:${color}'>Hello ${name}! Your favorite color is ${color}`;
  } else {
    result.innerHTML = `<span style='color:red'>Error</span>`;
  }
}

btn.addEventListener("click", displayColorMsg);

const passwordEl = document.getElementById("password");
const btnEl = document.querySelector(".btn");
const resultEl = document.querySelector(".result");

function passwordStrengthCheck() {
  let password = passwordEl.value;
  let hasNumber = /[0-9]/.test(password);
  let hasSymbol = /[!@#$%^&*]/.test(password);

  console.log;
  if (password) {
    if (
      password.length > 10 ||
      (password.length >= 6 && hasNumber) ||
      (password.length >= 6 && hasSymbol)
    ) {
      resultEl.innerHTML = `<span style='color:green;'>Password is STRONG</span>`;
    } else if (password.length >= 6 && password.length <= 10) {
      resultEl.innerHTML = `<span style='color:orange;'>Password is MEDIUM</span>`;
    } else if (password.length >= 1 && password.length < 6) {
      resultEl.innerHTML = `<span style='color:red;'>Password is WEAK</span>`;
    }
  } else {
    resultEl.innerHTML = `<span style='color:red;'>Please enter a password!</span>`;
  }
}

btnEl.addEventListener("click", passwordStrengthCheck);

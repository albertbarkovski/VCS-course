const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const submitBtn = document.querySelector(".submit-btn");
const msg = document.querySelector(".output-msg");

function createMsg(a, b, c, d) {
  if (a && b && c && d) {
    msg.innerHTML = `<strong>Name:</strong> ${a} ${b}<br><strong>Email:</strong> ${c}<br><strong>Phone:</strong> ${d}`;
  } else {
    msg.innerHTML = "<span style='color:red'>Please fill in all fields</span>";
  }
}

submitBtn.addEventListener("click", function () {
  createMsg(firstName.value, lastName.value, email.value, phone.value);
});

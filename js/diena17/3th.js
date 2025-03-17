const userName = document.getElementById("username");
const moodSection = document.getElementById("mood");
const greetBtn = document.querySelector(".greet-btn");
const greetingMsg = document.querySelector(".greeting-msg");

function moodMsg() {
  const name = userName.value.trim();
  const mood = moodSection.value;

  if (name && mood) {
    greetingMsg.innerHTML = `Hello ${name}! You seem very ${mood} today!`;
  } else {
    greetingMfsg.innerHTML = ` <span style='color:red'>
        Please enter your name before selecting a mood!
      </span>`;
  }
}

greetBtn.addEventListener("click", moodMsg);

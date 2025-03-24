const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".details");

if (!id) {
  alert("Reikalingas ID");
}
const renderDetails = async () => {
  const res = await fetch("http://localhost:3000/posts/" + id);
  const post = await res.json();

  const template = `
  <h1>${post.title}</h1> 
  <p>${post.body}</p>`;

  container.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", () => renderDetails());

//const inputEl = document.querySelector("input");
// const btnEl = document.querySelector(".btn");

// function getWeather() {
//   const cityName = inputEl.value;

//   axios
//     .get(
//       `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=0aa8679f7f4cfb9af5b36c2935c1a05d`
//     )
//     .then((response) => console.log(response.data.main.temp));

// }

// btnEl.addEventListener("click", getWeather);

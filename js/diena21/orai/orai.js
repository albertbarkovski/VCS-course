const inputEl = document.querySelector("input");
const btnEl = document.querySelector(".btn");
const returnCon = document.querySelector(".return-container");

function getWeather() {
  const cityName = inputEl.value;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=0aa8679f7f4cfb9af5b36c2935c1a05d`
    )

    .then((response) => {
      console.log(response.data);
      const temp = response.data.main.temp;
      const wind = response.data.wind.speed;
      returnCon.innerHTML = `<div class='weathers' >
      <div>Temperatura: ${temp}</div>
      <div>Vejo greitis: ${wind}</div>
      </div>`;

      axios
        .get(
          `https://api.unsplash.com/photos/random?query=${cityName}&client_id=OK0nXA1H8-fvZLQPSp7aESD_Gjk-EfRZaKZPSIqwfzA`
        )
        .then((res) => {
          const image = res.data.urls.regular;
          document.body.style.backgroundImage = `url('${image}')`;
          document.body.style.backgroundSize = "cover";
        });
    });
}

btnEl.addEventListener("click", getWeather);

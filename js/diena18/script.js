async function gauti() {
  try {
    const atsakymas = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });

    if (!atsakymas.ok) {
      throw new Error("Įvyko klaida gaunant duomenis");
    }

    const data = await atsakymas.json();
    return data.joke ? data.joke : "Juokelis nerastas";
  } catch (error) {
    throw new Error("Tinklo klaida arba serveris nepasiekiamas");
  }
}

function gautiJuokeli() {
  gauti()
    .then((juokelis) => {
      const jokeContainer = document.querySelector(".juokeliu-container");
      jokeContainer.innerHTML += `<p>${juokelis}</p>`;
    })
    .catch((error) => {
      console.error(error);
      document.querySelector(
        ".juokeliu-container"
      ).innerHTML += `<p style="color:red;">Klaida: ${error.message}</p>`;
    });
}

document.querySelector("button").addEventListener("click", gautiJuokeli);

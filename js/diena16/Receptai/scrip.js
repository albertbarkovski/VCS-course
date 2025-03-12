const slider = document.getElementById("slider");
const sliderValue = document.querySelector(".slider-value");
const dishElements = document.querySelectorAll(".dish");
const propertiesContainer = document.querySelector(".proporties");

let selectedRecipe = null;
let portionSize = parseInt(slider.value);

// Receptų duomenys
const recipes = [
  {
    name: "Vištiena su salotom",
    ingredients: {
      vištiena: 200, // gramai
      salotos: 100, // gramai
      pomidorai: 2, // vienetai
      druska: "pagal skonį",
      pipirai: "pagal skonį",
    },
  },
  {
    name: "Tortas su mėlynėm",
    ingredients: {
      medus: 150,
      mėlynės: 100,
      kremas: 100, // ml
      lakštai: 5, // vienetai
    },
  },
  {
    name: "Makaronai su mėsa",
    ingredients: {
      makaronai: 200,
      salotos: 100,
      mėsa: 150,
      kiaušinis: 3,
      druska: "pagal skonį",
      pipirai: "pagal skonį",
    },
  },
];

// Atnaujina sliderio reikšmę
slider.addEventListener("input", function () {
  portionSize = parseInt(slider.value);
  sliderValue.textContent = portionSize;
  updatePosition();
  if (selectedRecipe) {
    updateIngredients();
  }
});

function updatePosition() {
  const sliderRect = slider.getBoundingClientRect();
  const valuePercentage = (slider.value - slider.min) / (slider.max - slider.min);
  const newLeft = valuePercentage * sliderRect.width;
  sliderValue.style.left = `${newLeft}px`;
}

// Funkcija aktyviam patiekalui pažymėti ir varnelę rodyti
dishElements.forEach((dish, index) => {
  dish.addEventListener("click", function () {
    // Pašaliname aktyvią klasę iš visų
    dishElements.forEach((d) => {
      d.classList.remove("active");
      d.querySelector(".green-tick").style.display = "none";
    });

    // Priskiriame aktyvią klasę ir rodome varnelę
    dish.classList.add("active");
    dish.querySelector(".green-tick").style.display = "block";

    selectedRecipe = recipes[index];

    // Atnaujiname ingredientus su pasirinktu porcijų skaičiumi
    updateIngredients();
  });
});

// Funkcija ingredientams atnaujinti
function updateIngredients() {
  propertiesContainer.innerHTML = ""; // Išvalome prieš pridedant naujus ingredientus

  for (const [ingredient, amount] of Object.entries(selectedRecipe.ingredients)) {
    const newAmount = typeof amount === "number" ? amount * portionSize : amount;
    const ingredientItem = document.createElement("div");
    ingredientItem.textContent = `${ingredient}: ${newAmount}`;
    propertiesContainer.appendChild(ingredientItem);
  }
}

updatePosition();

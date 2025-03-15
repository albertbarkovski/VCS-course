const receptai = [
  {
    raktas: "vistiena",
    ingredientai: [
      { pavadinimas: "Vištiena", kiekis: 150 },
      { pavadinimas: "Brokoliai", kiekis: 100 },
      { pavadinimas: "Pomidorai", kiekis: 50 },
      { pavadinimas: "Ryžiai", kiekis: 100 },
    ],
  },
  {
    raktas: "tortas",
    ingredientai: [
      { pavadinimas: "Miltai", kiekis: 250, matas: "g" },
      { pavadinimas: "Kiaušiniai", kiekis: 1, matas: "vnt" },
      { pavadinimas: "Mėlynės", kiekis: 100 },
      { pavadinimas: "Cukrus", kiekis: 2, matas: "šaukšteliai" },
    ],
  },
  {
    raktas: "makaronai",
    ingredientai: [
      { pavadinimas: "Mėsa", kiekis: 250 },
      { pavadinimas: "Makaronai", kiekis: 300 },
      { pavadinimas: "Sūris", kiekis: 200 },
    ],
  },
];

let amount = 0;
let currentRecipe = {};

document.querySelectorAll(".recipe").forEach(function (recipe) {
  recipe.addEventListener("click", function () {
    hideAll();
    this.querySelector("svg").style.display = "block";

    const recipeKey = recipe.getAttribute("data-receptas");
    const receptas = receptai.find((receptas) => receptas.raktas === recipeKey);
    currentRecipe = receptas;

    displayRecipe();
  });
});

function hideAll() {
  document.querySelectorAll(".recipe").forEach(function (recipe) {
    recipe.querySelector("svg").style.display = "none";
  });
}

function displayRecipe() {
  let recipeText = "";
  if (currentRecipe.ingredientai) {
    for (ingredient of currentRecipe.ingredientai) {
      recipeText += `${ingredient.pavadinimas}: <strong>${
        ingredient.kiekis * amount
      } ${ingredient.matas ? ingredient.matas : "g"}</strong><br>`;
    }
  }

  document.getElementById("receptas").innerHTML = recipeText;
}

rangeValue();

document.getElementById("qty").oninput = function () {
  rangeValue();
};

function rangeValue() {
  const sliderValue = document.getElementById("qty").value;
  document.getElementById("rangeValue").innerText = sliderValue;
  const position = parseInt(sliderValue) * 30 - 16;
  document.getElementById("rangeValue").style.left = position + "px";
  amount = sliderValue;
  displayRecipe();
}

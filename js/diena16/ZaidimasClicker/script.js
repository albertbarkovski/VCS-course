const scoreBlockEl = document.querySelector(".main-game .score");
const factoryEl = document.querySelectorAll(".factory");

window.addEventListener("load", function () {
  let scoreVal = 0;
  let ownedFactoriesVal = [];

  document.querySelector(".main-game .click-zone").onclick = function () {
    scoreVal += 10;
    scoreBlockEl.innerHTML = scoreVal;
  };

  factoryEl.forEach((fc) => {
    let factory = {
      title: fc.querySelector(".title").innerText,
      costs: parseInt(fc.querySelector(".price").innerText),
      isAdding: parseInt(fc.querySelector(".adds").innerText),
      count: parseInt(fc.querySelector(".count").innerText.slice(1, -1)),
      button: fc.querySelector("button"),
    };
    factory.button.onclick = function () {
      if (scoreVal >= factory.costs) {
        scoreVal -= factory.costs;
        factory.count++;
        scoreBlockEl.innerText = scoreVal;
        fc.querySelector(".count").innerText = "(" + factory.count + ")";
      }
    };
    ownedFactoriesVal.push(factory);
  });
  console.log(ownedFactoriesVal);

  setInterval(function () {
    scoreVal += ownedFactoriesVal.map((x) => x.count * x.isAdding).reduce((partial_sum, number) => partial_sum + number, 0);
    scoreBlockEl.innerText = scoreVal;
  }, 1000);
});

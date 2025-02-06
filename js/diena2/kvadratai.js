const figura = document.querySelector("#figura");
const stiliai = window.getComputedStyle(figura);
const figurosPlotis = figura.clientWidth;
const figurosAukstis = figura.clientHeight;
const kvadratoRiba = 200;

if (stiliai.borderRadius == "50%") {
  figura.style.backgroundColor = "purple";
} else {
  if (figurosAukstis === figurosPlotis) {
    if (figurosPlotis >= kvadratoRiba) {
      figura.style.backgroundColor = "Red";
    } else {
      figura.style.backgroundColor = "green";
    }
  } else {
    figura.style.backgroundColor = "yellow";
  }
}

// const figuros = document.querySelectorAll(".figura");

// const riba = 200;

// console.log(figuros);

// figuros.forEach((figura) => {
// let figurosPlotis = figura.clientWidth;
// let figurosAukstis = figura.clientHeight;

// const radius = window.getComputedStyle(figura).borderRadius;

// if (figurosPlotis === figurosAukstis && radius === "0px") {
// if (figurosPlotis >= riba) {
// console.log("didelis kvadratas");
// figura.style.backgroundColor = "red";
// } else {
// console.log("mazas kvadratas");
// figura.style.backgroundColor = "blue";
// }
// } else if (radius >= "50%") {
// figura.style.backgroundColor = "violet";
// console.log("yra apskritimas");
// } else {
// console.log("nera kvadratas ar apskritimas", radius, figura);
// }
// });

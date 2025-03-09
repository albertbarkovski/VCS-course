//pirmas div

document.getElementById("pirma-antraste").innerHTML = "Naujas pirmos antrastes tekstas";
document.getElementById("pirmas-paragrafas").innerHTML = "Naujas pirmo paragrafo tekstas";

// antras div

console.log("Antras Div");

let tekstasIsParagrafo = document.getElementById("paragrafo-tekstas").innerHTML;
console.log("Paimtas su innerHTML tekstas:", tekstasIsParagrafo);
let tekstasIsParagrafo2 = document.getElementById("paragrafo-tekstas").innerText;
console.log("Paimtas su innerText tekstas:", tekstasIsParagrafo);

console.log();

console.log("Trecias Div");

console.log("innerHTML tekstas:", document.getElementById("trecias").innerHTML);
console.log("innerText tekstas:", document.getElementById("trecias").innerText);

// septintas div

console.log("Septintas Div");

function pakeisti() {
  document.getElementById("paragrafas-7").innerHTML = "Naujas tekstas";
}

// astuntas div

function pakeisti2(elementas, turinys) {
  document.getElementById(elementas).innerHTML = turinys;
}

// devintas div

function pakeisti3(elementas, turinys) {
  document.getElementById(elementas).innerHTML = turinys;
}

function kitaSpalva(elementas, spalva) {
  document.getElementById(elementas).style.color = spalva;
}

// desimtas div

let pirmas = Math.floor(Math.random() * 10) + 1;
let antras = Math.floor(Math.random() * 10) + 1;

let suma = pirmas + antras;
let skirtumas = pirmas - antras;
let sandauga = pirmas * antras;
let dalmuo = pirmas / antras;

document.getElementById("suma").innerHTML = pirmas + " + " + antras + " = " + suma;
document.getElementById("skirtumas").innerHTML = pirmas + " - " + antras + " = " + skirtumas;
document.getElementById("sandauga").innerHTML = pirmas + " * " + antras + " = " + sandauga;
document.getElementById("dalmuo").innerHTML = pirmas + " / " + antras + " = " + dalmuo.toFixed(2);

// vienuoliktas div

let isvedimui = `
<p>${pirmas} + ${antras} = ${suma}</p>
<p>${pirmas} - ${antras} = ${skirtumas}</p>
<p>${pirmas} * ${antras} = ${sandauga}</p>
<p>${pirmas} / ${antras} = ${dalmuo.toFixed(2)}</p>`;

document.getElementById("turinys11").innerHTML = isvedimui;

// dvyliktas div

function fontSizeChange(element, value) {
  document.getElementById(element).style.fontSize = value + "px";
}

// tryliktas div

let divKeitimui = document.getElementById("div-keitimui");

let plocioSlider = document.getElementById("plocio-slider");
let aukscioSlider = document.getElementById("aukscio-slider");

plocioSlider.oninput = function () {
  divKeitimui.style.width = this.value + "px";
};

aukscioSlider.oninput = function () {
  divKeitimui.style.height = this.value + "px";
};

let spalvosPasirinkimas = document.getElementById("spalvos-pasirinkimas");

let tekstoSpalvosPasirinkimas = document.getElementById("teksto-spalvos-pasirinkimas");

spalvosPasirinkimas.oninput = function () {
  divKeitimui.style.backgroundColor = this.value;
};

tekstoSpalvosPasirinkimas.oninput = function () {
  divKeitimui.style.color = this.value;
};

let tekstasDivui = document.getElementById("textas-divui");

tekstasDivui.oninput = function () {
  divKeitimui.innerHTML = this.value;
};

// keturolikta div

function pridetiZodi(element, zodis) {
  document.getElementById(element).value += zodis + " ";
}

//penkioliktas div

let penkioliktasTekstas = document.getElementById("teksto-laukas15");

function zodziuKiekis() {
  let tekstas = penkioliktasTekstas.value.trim();
  if (!tekstas) {
    document.getElementById("ats15").innerHTML = "<p>Tekstas neivestas!</p>";
    return;
  }
  let zodziai = tekstas.trim().split(/\s+/); //regex
  document.getElementById("ats15").innerHTML = ` <p>Zodziu kiekis:
  ${zodziai.length}</p>`;
}

function ilgiausiasZodis() {
  let tekstas = penkioliktasTekstas.value.trim();
  if (!tekstas) {
    document.getElementById("ats15").innerHTML = "<p>Tekstas neivestas!</p>";
    return;
  }
  let zodziai = tekstas.trim().split(/\s+/);
  let ilgiausias = "";
  for (zodis of zodziai) {
    if (zodis.length > ilgiausias.length) {
      ilgiausias = zodis;
    }
  }
  document.getElementById("ats15").innerHTML = `<p>Ilgiausias zodis :${ilgiausias}</p>
  <p>Jo ilgis : ${ilgiausias.length}</p>`;
}
function trumpiausiasZodis() {
  let tekstas = penkioliktasTekstas.value.trim();
  if (!tekstas) {
    document.getElementById("ats15").innerHTML = "<p>Tekstas neivestas!</p>";
    return;
  }
  let zodziai = tekstas.split(/\s+/);
  let trumpiausias = zodziai[0];

  for (zodis of zodziai) {
    if (zodis.length < trumpiausias.length) {
      trumpiausias = zodis;
    }
  }
  document.getElementById("ats15").innerHTML = ` <p>Trumpiausias zodis :${trumpiausias}</p>
  <p>Jo ilgis : ${trumpiausias.length}</p>`;
}

//sesioliktas div

let pirmoSkirtukoTurinys = document.getElementById("pirmas-skirtukas");
let antroSkirtukoTurinys = document.getElementById("antras-skirtukas");

function pirmasSkirtukas() {
  pirmoSkirtukoTurinys.style.display = "block";
  antroSkirtukoTurinys.style.display = "none";
}
function antrasSkirtukas() {
  pirmoSkirtukoTurinys.style.display = "none";
  antroSkirtukoTurinys.style.display = "block";
}

//septinioliktas div

let perjungtiMygtukas = document.getElementById("perjungti-mygtukas");
let perjungtiTekstas = document.getElementById("perjungti-tekstas");

perjungtiMygtukas.onclick = function () {
  if (this.innerHTML == "Rodyti") {
    this.innerHTML = "Nerodyti";
    perjungtiTekstas.style.display = "block";
  } else {
    this.innerHTML = "Rodyti";
    perjungtiTekstas.style.display = "none";
  }
};

//astuonioliktas div

let kitasPerjungtiTekstas = document.getElementById("kitas-perjungti-tekstas");

document.getElementById("kitas-perjungti-mygtukas").onclick = function () {
  if (kitasPerjungtiTekstas.style.display === "block") {
    this.innerText = "Rodyti";
    kitasPerjungtiTekstas.style.display = "none";
  } else {
    this.innerText = "Nerodyti";
    kitasPerjungtiTekstas.style.display = "block";
  }
};

// test
// document.getElementById("testbtn").onclick = function () {
//   if (document.getElementById("testbtn").innerHTML == "Veikia") {
//     document.getElementById("testbtn").innerHTML = "Neveikia";
//     document.getElementById("testpar").style.display = "none";
//   } else {
//     document.getElementById("testbtn").innerHTML = "Veikia";
//     document.getElementById("testpar").style.display = "block";
//   }
// };

// let btn = document.getElementById("testbtn");
// let par = document.getElementById("testpar");

// btn.onclick = function () {
//   if (this.innerHTML == "Veikia") {
//     par.style.display = "none";
//     this.innerHTML = "neveikia";
//   } else {
//     par.style.display = "block";
//     this.innerHTML = "Veikia";
//   }
// };

// btn.onclick = function () {
//   if (par.style.display == "none") {
//     btn.innerHTML = "Veikia";
//     par.style.display = "block";
//   } else {
//     btn.innerHTML = "Neveikia";
//     par.style.display = "none";
//   }
// };

let paragrafas19 = document.getElementById("paragrafas-19");

let div19 = document.getElementById("devynioliktas");

paragrafas19.onclick = function () {
  this.style.display = "none";
};

//dvidesimtas div

let btn20 = document.getElementById("btn20");
let tekstoBlokas = document.querySelector(".teksto-blokas");
btn20.onclick = function () {
  for (blokas of tekstoBlokas) {
  }
};

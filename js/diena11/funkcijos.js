// 1. Sukurkite funkciją, kuri išvestų jūsų vardą ir kodėl pasirinkote programavimą. Iškvieskite šią funkciją tris kartus.

console.log("------------------");
console.log("1uzd");
console.log("------------------");

function vardasIrKodelIT() {
  console.log("Albert Barkovski");
  console.log("Pasirinkau programavima nes tai yra mano fetishas");
}

vardasIrKodelIT();
vardasIrKodelIT();
vardasIrKodelIT();

// 2. Sukurkite funkciją, kuri išvestų 5 eilučių eilėraštį. Iškvieskite šią funkciją 5 kartus.
console.log("------------------");
console.log("2uzd");
console.log("------------------");

function eilerastis() {
  console.log(`gkgfebkn fmsvkf
dmmfkm osjdvoj
kkdmvkm kkmdkmdv
lemflemlfm 
dkdmvckdmvmck kck
`);
}
eilerastis();
eilerastis();
eilerastis();
eilerastis();
eilerastis();
// 3. Sukurkite tris funkcijas, kur kiekviena išvestų skirtingus tekstus. Iškvieskite visas tris funkcijas po vieną kartą.

console.log("------------------");
console.log("3uzd");
console.log("------------------");

function pirma() {
  console.log("Savana");
}
function antra() {
  console.log("Gia");
}
function trecia() {
  console.log("Agne");
}
pirma();
antra();
trecia();
// 4. Sukurkite dvi funkcijas, kur vienoje būtų viena teksto eilutė, kitoje - kita. Sukurkite trečią funkciją, kuri iškviestų pirmas dvi funkcijas. Iškvieskite šią trečiąją funkciją už visų funkcijų ribų.

console.log("------------------");
console.log("4uzd");
console.log("------------------");

function pirma4() {
  console.log("jnkcj ndknck nkkdn kndk ndknkfnk ");
}
function antra4() {
  console.log("kdk fk fkkm");
}

function trecia4() {
  pirma4();
  antra4();
}

trecia4();

// 5. Sukurkite funkciją, kurios viduje sugeneruotumėte du atsitiktinius skaičius. Funkcijoje suskaičiuokite ir išveskite šių dviejų skaičių sumą, kartu išvedant ir patį atliekamą veiksmą (pvz 7 + 2 = 9). Iškvieskite šią funkciją keletą kartų.
console.log("------------------");
console.log("5uzd");
console.log("------------------");

function skaiciai5() {
  let pirmasSk = Math.floor(Math.random() * 100) + 1;
  let antrasSk = Math.floor(Math.random() * 100) + 1;
  let suma = pirmasSk + antrasSk;
  console.log(`${pirmasSk} + ${antrasSk} = ${suma}`);
}
skaiciai5();
skaiciai5();
skaiciai5();
skaiciai5();
skaiciai5();

// 6. Sukurkite ir iškvieskite funkciją, kurioje kintamuosiuose būtų saugoma informacija apie policininką (vardas, pavardė, amžius, alga, etatas, specializacija). Išveskite šią informaciją suformatuotai (pavyzdžiui įterpkite į sakinį, ar išveskite sąrašu ar pan.).
console.log("------------------");
console.log("6uzd");
console.log("------------------");

function policininkas() {
  let vardas = "Jonas";
  let pavarde = "Jonelis";
  let amzius = 35;
  let alga = 1100;
  let etatas = 1;
  let specializacia = "patrulis";

  console.log(`Policininkas : ${vardas} ${pavarde}, amzius: ${amzius} metai, alga: ${alga} eu, etatas: ${etatas} etatas, specializacija: ${specializacia}`);
}
policininkas();

// 7. Sukurkite funkciją, kuri išvestų 10 atsitiktinių skaičių vienoje eilutėje, skaičius atskiriant tarpu. Šią funkciją iškvieskite 5 kartus.
console.log("------------------");
console.log("7uzd");
console.log("------------------");

function skaiciai7() {
  let eilute = "";
  for (let i = 1; i < 11; i++) {
    let skaicius = Math.floor(Math.random() * 10) + 1;
    eilute += skaicius + " ";
  }

  console.log(eilute);
}
skaiciai7();
skaiciai7();
skaiciai7();
skaiciai7();
skaiciai7();

// 8. Sukurkite funkciją, kuri išvestų atsitiktinį skaičių. Už funkcijos ribų sukurkite ciklą, kurį būtų vykdomas 10 kartų. Iškvieskite sukurtą funkciją cikle. Turėtumėte pamatyti 10 atsitiktinių skaičių
console.log("------------------");
console.log("8uzd");
console.log("------------------");

function skaiciai8() {
  console.log(Math.floor(Math.random() * 100) + 1);
}

let i = 1;
while (i < 11) {
  skaiciai8();
  i++;
}

// 9. Sukurkite funkciją pasisveikinimui, šiai funkcijai per argumentus perduokite vardą, funkcijoje išveskite tekstą labas ir gautą vardą. Sukurkite kitą funkciją, kuri irgi per argumentus gautų vardą, tačiau pasakytų 'viso gero' ir patį vardą. Ne funkcijose susikurkite kintamąjį vardui saugoti ir įrašykite vardą. Iškvieskite abi funkcijas, perduodant kintamąjį joms.
console.log("------------------");
console.log("9uzd");
console.log("------------------");

function pasisveikinimas(vardas) {
  console.log(`Sveiki,`, vardas);
}
pasisveikinimas("Jonas");

function atsisveikinimas(vard, pavar) {
  console.log("Viso gero", vard, pavar);
}
let vardas = "Albert";
let pavarde = "Bark";

atsisveikinimas(vardas, pavarde);
// 10.Sukurkite funkciją, kuriai perduotumėte du skaičius. Ši funkcija turi rasti kuris skaičius yra didesnis ir išvesti gautą atsakymą, o jei skaičiai lygūs - tuomet išvesti, kad skaičiai lygūs. Iškvieskite šią funkciją keletą kartų, duodant skirtingus skaičius.
console.log("------------------");
console.log("10uzd");
console.log("------------------");

function skaiciai10(a, b) {
  if (a < b) {
    console.log(`antras skaicius yra didesnis`);
  } else if (a > b) {
    console.log(`pirmas skaicius yra didesnis`);
  } else {
    console.log(`skaiciai yra lygus`);
  }
}

skaiciai10(50, 50);

skaiciai10(10, 50);
skaiciai10(100, 50);

// 11.Sukurkite funkciją, kuri per argumentus gautų automobilių duomenis (markė, modelis, gamybos metai, darbinis tūris). Ši funkcija turėtų šiuos duomenis išvesti kaip nors gražiai formatuotai. Iškvieskite šią funkciją du kartus, perduodant skirtingus duomenis jai.
console.log("------------------");
console.log("11uzd");
console.log("------------------");

function auto11(marke, model, gamybosMetai, darbinisTuris) {
  let tekstas = `Automobilis ${marke} ${model} ${darbinisTuris}l, kuris buvo pagamintas ${gamybosMetai}`;
  console.log(tekstas);
}

auto11("bmw", "m4", 2024, 5);
auto11("audi", "r8", 2020, 7);

// 12.Sukurkite funkciją sumai skaičiuoti, ši funkcija per argumentus turėtų gauti du skaičius, bei išvesti patį veiksmą kartu su atsakymu (pvz 7 + 5 = 12). Sukurkite tokias pačias funkcijas skirtumui, sandaugai ir dalmeniui rasti. Sukurkite dar vieną funkciją, kuri sugeneruotų du atsitiktinius skaičius, bei iškviestų kitas 4 funkcijas, perduodant joms sugeneruotus skaičius. Šią bendrąją funkciją iškvieskite keletą kartų.
console.log("------------------");
console.log("12uzd");
console.log("------------------");

function skaiciavimas(a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
  console.log(`${a} - ${b} = ${a - b}`);
  console.log(`${a} * ${b} = ${a * b}`);
  console.log(`${a} / ${b} = ${a / b}`);
}
skaiciavimas(10, 2);

console.log("------------------");

function skaiciavimasSuAtsitiktiniu(a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
  console.log(`${a} - ${b} = ${a - b}`);
  console.log(`${a} * ${b} = ${a * b}`);
  console.log(`${a} / ${b} = ${a / b}`);
}
skaiciavimasSuAtsitiktiniu(Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1);

console.log("------------------");
console.log("--uzd");
console.log("------------------");

function masyvoIsvedimas(komentaras, masyvas) {
  console.log(komentaras);

  for (elementas of masyvas) {
    console.log("-" + elementas);
  }
  console.log("");
}
let skaiciai = [5, 4, 8, 5, 2];
let zodziai = ["asilas", "lopas", "kvalys", "duxas"];

masyvoIsvedimas("Skaiciai", skaiciai);
masyvoIsvedimas("Zodziai", zodziai);

// 13.Susikurkite funkciją, kuri per argumentus priimtų žodžių masyvą. Funkcijoje išveskite visus žodžius iš masyvo atskirose eilutėse, nurodant žodžio ilgį (simbolių kiekį). Už funkcijos ribų susikurkite žodžių masyvą ir užpildykite jį duomenimis. Iškvieskite sukurtą funkciją perduodant turimą masyvą.
console.log("------------------");
console.log("13uzd");
console.log("------------------");

function isvestiMasyva13(masyvas) {
  for (const elementas of masyvas) {
    console.log(typeof elementas);
    console.log(`Elementas - ${elementas} turi ${elementas.length} simboliu`);
  }
}
let zodziai13 = ["asd0", "skkskkks", "lslsll", "kskskks", "jdf"];
isvestiMasyva13(zodziai13);
// 14.Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija turėtų atspausdinti visus skaičius, šalia jų išvedant to skaičiaus kvadratą ir jį padalintą iš dviejų. Už funkcijos ribų susikurkite du skaičių masyvus ir užpildykite jį duomenimis. Iškvieskite funkciją du kartus, kiekvieną kartą perduodant skirtingą turimą masyvą.
console.log("------------------");
console.log("14uzd");
console.log("------------------");

function skaiciuMasyvai14(masyvas) {
  for (const skaicius of masyvas) {
    console.log("Skaicius yra: " + skaicius + ", jo kvadratas: " + skaicius * skaicius + " , o padalinus ji is dvieju: " + skaicius / 2);
  }
}
let skMS14 = [5, 4, 7, 9, 1, 2, 54, 6, 99, 87];
let skMS142 = [10, 32, 65, 85, 47, 52, 10, 25, 45];

skaiciuMasyvai14(skMS14);
console.log("------------------");
skaiciuMasyvai14(skMS142);

// 15.Susikurkite funkciją, kuri per argumentus priimtų pažymių masyvą, bei studento vardą su pavarde. Funkcija turėtų išvesti studento vardą ir pavardę, jo pažymius. Taip pat, suskaičiuoti vidurkį, bei jį išvesti. Už funkcijos ribų susikurkite reikiamus kintamuosius ir masyvus, arba objektus studentų pažymiams saugoti ir užpildykite juos duomenimis. Iškvieskite šią funkciją perduodant visus reikalingus duomenis.
console.log("------------------");
console.log("15uzd");
console.log("------------------");

function studPazymiai(pazymiuMasyvas, vardas, pavarde) {
  console.log(vardas, pavarde);
  for (let i = 0; i < Math.floor(Math.random() * 6) + 5; i++) {
    pazymiuMasyvas.push(Math.floor(Math.random() * 7) + 4);
  }
  console.log(pazymiuMasyvas);
}
function vidurkis15(masyvas) {
  let sum = 0;

  for (pazymiai of masyvas) {
    sum += pazymiai;
  }
  let vidurkis = sum / masyvas.length;

  console.log(`Pazymiu vidurkis yra: ${vidurkis.toFixed(2)}`);
}

let studentas1 = {
  vardas: "Jonas",
  pavarde: "Jonelis",
  pazymiai: [],
};
let studentas2 = {
  vardas: "Povilas",
  pavarde: "Pov",
  pazymiai: [],
};
studPazymiai(studentas1.pazymiai, studentas1.vardas, studentas1.pavarde);
vidurkis15(studentas1.pazymiai);

// 16.Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija turėtų rasti didžiausią skaičių iš masyvo bei išvesti gautą atsakymus. Taip pat, susikurkite funkciją, kuri per argumentus priimtų masyvą ir į jį sugeneruotų pasirinktą kiekį atsitiktinių skaičių. Susikurkite tris tuščius masyvus. Iškvieskite atsitiktinių skaičių generavimo funkciją tris kartus, kiekvieną kartą perduodant funkcijai vis kitą masyvą. Kai duomenys bus užpildyti, masyvuose esančią informaciją išsiveskite norimu būdu (per console.log arba per dar atskirą funkciją). Tuomet kvieskite didžiausio skaičiaus paieškos funkciją tris kartus, kiekvieną kartą perduodant skirtingą masyvą į ją.
console.log("------------------");
console.log("16uzd");
console.log("------------------");

// function skaiciuGeneravimas(skaiciai) {
//   for (let i = 0; i < Math.floor(Math.random() * 10) + 5; i++) {
//     skaiciai.push(Math.floor(Math.random() * 100) + 50);
//   }
//   console.log(skaiciai);
// }
function generator(kiek, max, min, masyvas) {
  for (let i = 0; i < kiek; i++) {
    masyvas.push(Math.floor(Math.random() * (max - min)) + min);
  }
  console.log(masyvas);
}

function didziausiasSkaicius16(skaiciai) {
  let max = skaiciai[0];

  for (skaitmuo of skaiciai) {
    if (skaitmuo > max) {
      max = skaitmuo;
    }
  }
  console.log(`didziausias skaicius yra : ${max}`);
}

let masyvas16 = {
  kiekSK: Math.floor(Math.random() * 15) + 5,
  maxSk: Math.floor(Math.random() * 500) + 100,
  minSk: Math.floor(Math.random() * 50) + 20,
  SkMasyvas: [],
  SkMasyvas2: [],
  SkMasyvas3: [],
};

generator(masyvas16.kiekSK, masyvas16.maxSk, masyvas16.minSk, masyvas16.SkMasyvas);
didziausiasSkaicius16(masyvas16.SkMasyvas);
console.log("------------------");

generator(masyvas16.kiekSK, masyvas16.maxSk, masyvas16.minSk, masyvas16.SkMasyvas2);
didziausiasSkaicius16(masyvas16.SkMasyvas2);
console.log("------------------");

generator(masyvas16.kiekSK, masyvas16.maxSk, masyvas16.minSk, masyvas16.SkMasyvas3);
didziausiasSkaicius16(masyvas16.SkMasyvas3);

// 17.Susikurkite funkciją, kuri grąžintų bet kokį jūsų norimą sakinį. Iškvieskite šią funkciją ir išspausdinkite gautus rezultatus.

console.log("------17");

function naujassakynis17() {
  return "cdcdscsc";
}

console.log(naujassakynis17());

// 18.Susikurkite funkciją, kuri grąžintų atsitiktinai sugeneruotą skaičių. Iškvieskite šią funkciją kelis kartus ir gautus atsakymus išveskite kokiu norite būdu.
console.log("------18");

function generator18() {
  return Math.floor(Math.random() * 100 - 5) + 5;
}
console.log(generator18());
console.log(`Random skaicius yra ${generator18()}`);
// 19.Susikurkite funkciją, kuri per argumentus priimtų studento vardą ir vidurkį. Ši funkcija turėtų sugeneruoti iš to sakinį (pvz Studentas Tomas turi vidurkį 8.7) ir tai grąžinti kaip atsakymą. Iškvieskite šią funkciją bent porą kartų, perduodant vis skirtingus duomenis. Gautus atsakymus išveskite.
console.log("------19");

function studentoVidurkis19(objektas) {
  return `Studentas ${objektas.vardas} turi vidurki ${objektas.vidurkis}`;
}

let studentas191 = { vardas: "Jonas", vidurkis: 7 };
let studentas192 = { vardas: "Povilas", vidurkis: 4 };
let studentas193 = { vardas: "Albertas", vidurkis: 9 };

console.log(studentoVidurkis19(studentas191));
console.log(studentoVidurkis19(studentas192));
console.log(studentoVidurkis19(studentas193));

// 20.Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų surasti duoto skaičiaus mažiausią daliklį (skaičių iš kurio dalinasi be liekanos). Už funkcijos ribų sukite ciklą nuo 10 iki 30 ir kiekvienoje ciklo iteracijoje iškvieskite šią funkciją, perduodant ciklo kintamąjį.
console.log("------20");
function maziausiasDaliklis(skaicius) {
  let daliklis = 3;
  let radom = false;
  while (radom === false) {
    if (skaicius % daliklis === 0) {
      radom === true;
      return daliklis;
    }
    daliklis++;
  }
}

for (i = 10; i < 30; i++) {
  console.log(i, maziausiasDaliklis(i));
}

// 21.Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų patikrinti ar šis skaičius yra pirminis (grąžina true jei pirminis, ir false jei ne pirminis). Už funkcijos ribų sukite ciklą nuo 2 iki 15, kiekvienoje ciklo iteracijoje išveskite tikrinamą skaičių ir šalia jo iškviestos funkcijos atsakymą (pvz 10 false, 11 true, ...).
console.log("------21");

function pirminiaiSk(skaicius) {
  let kiekKartuDalinasi = 1;
  for (i = 1; i < skaicius; i++) {
    if (skaiciai !== i) {
      if (skaicius % i === 0) {
        kiekKartuDalinasi++;
      }
    }
  }
  return kiekKartuDalinasi === 2;
}
for (i = 2; i <= 15; i++) {
  console.log(i, pirminiaiSk(i));
}

// 22.Susikurkite bent 3 matematines funkcijas, priimančias reikiamus argumentus (pvz suma iš dviejų skaičių, suma iš trijų skaičių, skirtumas, sandauga, dalyba) ir grąžinančias atitinkamus atsakymus. Taip pat, susikurkite funkciją, kurioje būtų sugeneruojamas reikiamas kiekis atsitiktinių skaičių ir išvedami visų skaičiavimų atsakymai su veiksmais (iškviečiant atitinkamas kitas funkcijas ir perduodant reikiamus kintamuosius) (pagal 23 pavyzdį). Iškvieskite šią pagrindinę funkciją bent kartą.
console.log("------22");

function suma(a, b) {
  return a + b;
}

function sumosIsvedimas(a, b) {
  console.log(`${a} + ${b} = ${suma(a, b)}`);
}

sumosIsvedimas(5, 5);
let sk1 = 7;
let sk2 = 1;

sumosIsvedimas(sk1, sk2);

// 23.Susikurkite funkciją kuri priimtų skaičių masyvą per argumentus. Ši funkcija turėtų rasti duotųjų skaičių sumą ir grąžinti gautą atsakymą. Už funkcijos ribų susikurkite du skaičių masyvus ir užpildykite juos duomenimis. Iškvieskite turimą funkciją du kartus, jai abu kartus perduodant skirtingą masyvą. Gautus atsakymus išveskite. Taip pat, raskite kuri suma gavosi didesnė ir išveskite atsakymą.
console.log("------23");

function masyvoSkaiciuSumas23(skaiciuMasyvas23) {
  let suma = 0;
  for (let skaicius of skaiciuMasyvas23) {
    suma += skaicius;
  }
  return suma;
}

let skaiciuMasyvas231 = [5, 4, 2, 5, 6, 4, 5, 4, 7, 4, 7, 10];
let skaiciuMasyvas232 = [1, 4, 7, 8, 9, 6, 3, 2, 5, 4, 5];

console.log("Pirmas Masyvas suma: " + masyvoSkaiciuSumas23(skaiciuMasyvas231));
console.log("Antras Masyvas suma: " + masyvoSkaiciuSumas23(skaiciuMasyvas232));

if (masyvoSkaiciuSumas23(skaiciuMasyvas231) > masyvoSkaiciuSumas23(skaiciuMasyvas232)) {
  console.log("Pirmo masyvo suma yra didesne");
} else if (masyvoSkaiciuSumas23(skaiciuMasyvas232) > masyvoSkaiciuSumas23(skaiciuMasyvas231)) {
  console.log("Antro masyvo suma yra didesne");
} else {
  console.log("Masyvu sumos yra lygios");
}

// 24.Susikurkite funkciją kuri per argumentus priimtų žodžių masyvą. Ji turėtų rasti ir grąžinti ilgiausią žodį masyve. Už funkcijos ribų susikurkite žodžių masyvą. Iškvieskite funkciją perduodant jai žodžių masyvą. Gautą atsakymą išveskite, taip pat, nurodykite šio žodžio ilgį.
console.log("------24");

function ilgiausisZodis24(masyvas24) {
  let max = masyvas24[0];
  for (let zodis of masyvas24) {
    if (zodis.length > max.length) {
      max = zodis;
    }
  }
  return max;
}
let zodziuMasyvas241 = ["asilas", "kiaule", "arklys", "bite", "kupranugaris", "kintauras"];
let ilgiausias = ilgiausisZodis24(zodziuMasyvas241);

console.log(`ilgiausis zodis : ${ilgiausias}, jo ilgis : ${ilgiausias.length}`);
// 25.Susikurkite funkciją kuri per argumentus priimtų pažymių masyvą. Ji turėtų patikrinti ar visi pažymiai teigiami: jei visi teigiami turėtų grąžintų true kaip atsakymą, o jei yra bent vienas neigiamas - false. Susikurkite du pažymių masyvus. Iškvieskite šią funkciją du kartus, abu kartus perduodant skirtingus masyvus. Gautus atsakymus paverskite į tekstą (jeigu gavote true - išveskite tekstą 'visi studento pažymiai teigiami', jei false - 'studentas turi bent vieną neigiamą pažymį'). Šiam iškonvertavimui iš true/false į tekstą galite pamėginti pasikurti atskirą funkciją, jai perduoti kitos funkcijos atsakymą.
console.log("------25");

function arTeigiami25(pazymiuMasyvas25) {
  let neigiaimi = 0;
  for (let pazymis of pazymiuMasyvas25) {
    if (pazymis <= 4) {
      neigiaimi++;
    }
  }
  if (neigiaimi < 1) {
    return true;
  } else {
    return false;
  }
}

function tekstas25(arTeigiami) {
  return arTeigiami ? "Visi teigiami" : "Yra neigiamu pazymiu";
}

let pazymiai251 = [7, 8, 9, 5, 4, 7, 8];
let pazymiai252 = [9, 8, 7, 8, 9, 8, 7];

console.log(tekstas25(arTeigiami25(pazymiai251)));
console.log(tekstas25(arTeigiami25(pazymiai252)));

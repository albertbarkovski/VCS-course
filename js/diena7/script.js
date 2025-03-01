// let maistas = ["makaronai", "trumai", "kepsneliai", "agurkas", "obuolis", "kriause"];
// console.log(maistas);

// maistas.push("kiausai");
// console.log(maistas);

// maistas.unshift("kava");
// console.log(maistas);

// maistas.splice(3, 0, "sumustiniai");
// console.log(maistas);

// maistas.pop();
// console.log(maistas);

// maistas.shift();
// console.log(maistas);

// maistas.splice(1, 2);
// console.log(maistas);

// let skaiciai = [5, 9, 8, 2, 7, 5, 6, 1, 2, 5, 44, 5, 4];

// let arYra = skaiciai.includes(444);
// console.log(arYra);

// let maistas = ["makaronai", "trumai", "kepsneliai", "agurkas", "obuolis", "kriause"];

// let eilute = maistas.join(" + ");
// console.log(eilute);

// let sakinys = "ReferenceError: maistas is notstas is notstas is not defined";
// let zodziai = sakinys.split(" ");

// console.log(zodziai.length);

// let pazymiai = [5, 8, 9, 7, 4, 8, 9, 9, 1, 10];

// let pazymiaiMazejant = pazymiai.slice().sort((a, b) => b - a);

// console.log(pazymiaiMazejant.slice(0, 3));

// let vardai1 = ["jonas", "monika", "agne", "albertas", "juras"];
// let vardai2 = ["gia", "savana", "darius", "karolina", "agne", "jonas", "jonas"];

// let visiStudentai = [...vardai1, ...vardai2];
// let unikalusVardai = [...new Set(visiStudentai)];

// console.log(visiStudentai.join(", "));

// console.log(unikalusVardai.join(", "));

// let pirmas = ["bio", "mat", "lt", "ang", "kosmo"];
// let antras = ["filo", "mat", "it", "ang", "maistas", "kunce"];

// let temos = [...pirmas, ...antras];

// console.log(temos.join(", "));

// let spalvos = ["juoda", "balta", "raudona", "geltona", "zalia", "melyna"];

// let kopija = spalvos.slice();

// spalvos = [];

// console.log("pirmas", spalvos);
// console.log("antras", kopija);

// let miestai = ["vilnius", "kaunas", "zurich", "meiringen", "koln"];

// let koln = miestai.indexOf("koln");

// console.log(koln);

// let skaiciai1 = [5, 8, 9, 7, 7, 4, 10];

// let unikalus = new Set(skaiciai1);

// console.log(skaiciai1.length);
// console.log(unikalus.size);
// console.log(skaiciai1.length == unikalus.size ? "dublikato nera" : "dublikatas yra");

// let masyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let naujasMasyvas = [];
// let chunksize = 2;

// console.log(masyvas);

// while (masyvas.length > 0) {
//   let dalisMasyvo = masyvas.slice(0, chunksize);
//   naujasMasyvas.push(dalisMasyvo);
//   masyvas.splice(0, chunksize);
// }
// console.log(naujasMasyvas);

// 12. Susikurkite string tipo kintamąjį, kuriame būtų išsaugoti skaitmenys, pvz
// “01458”. Patikrinkite ar nurodytas “skaičius” yra palindromis, t.y. toks kuris
// yra vienodas tiek skaitant iš priekio, tiek iš galo (palindromio pvz: 01310).
// Hint: su string kintamuoju galima panaudoti ir dalį masyvų metodų...

// let zodziai = "151";
// let atskirti = zodziai.split("");
// let apverstas = atskirti.slice().reverse();

// atskirti = atskirti.slice().join("");
// apverstas = apverstas.slice().join("");

// console.log(atskirti);
// console.log(apverstas);

// zodziai == apverstas ? console.log("yra palindrominis") : console.log("nera palindrominis");

// 13. Susikurkite du skaičių masyvus. Susikurkite trečią, tačiau tuščią masyvą.
// Parašykite programą kuri sudėtų pirmų dviejų masyvų skaičius į trečiąjį,
// tačiau nekartojant jau trečiame egzistuojančių reikšmių (sudėtų tik
// unikalius skaičius). Pvz jeigu turime masyvus [1, 2, 3, 4] ir [2, 3, 5, 6], tai
// trečiasis turėtų gautis [1, 2, 3, 4, 5, 6].

// let pirmas = [1, 2, 3, 4, 5, 6, 7];
// let antras = [5, 4, 6, 9, 5];
// let trecias = [];
// let neunikalus = [...pirmas, ...antras];

// trecias = new Set(neunikalus);

// console.log(trecias);

// 14. Susikurkite du bet kokius masyvus. Raskite kurie elementai egzistuoja tiek
// viename tiek kitame masyve. Pvz jeigu pirmasis yra [1, 2, 3], o antrasis yra
// [2, 3, 4], tai atsakymas [2, 3].

// let pirmas = [1, 2, 3, 4];
// let antras = [1, 3, 4, 5, 6];
// let dubliuojasi = [];

// for (let i = 0; i < pirmas.length; i++) {
//   let pirmosSK = pirmas[i];

//   for (let j = 0; j < antras.length; j++) {
//     let antroSK = antras[j];

//     if (pirmosSK == antroSK) {
//       dubliuojasi.push(pirmas[i]);
//     }
//   }
// }
// console.log(dubliuojasi);

// 15. Susikurkite skaičių masyvą, kuriame skaičiai nebūtinai eina didėjimo
// tvarka. Raskite mažiausią teigiamą skaičių kuris neegzistuoja. Pvz jeigu
// masyvas yra [7, 5, 1, 9, 3, 4], tai atsakymas yra 2.

// let skaiciai = [8, 5, 9, 4, 6, 1, 2, 3, 4, 5, 6, 7];

// for(skaitmuo of skaiciai){
//   if skai
// }

// 16. Susikurkite norimą masyvą. Apverskite šį masyvą, kad elementai eitų
// atvirkščiai. Pvz jeigu turime masyvą [1, 2, 3, 4], tai apvertus turime gauti [4,
// 3, 2, 1].

let skaiciai = [1, 2, 3, 4];

for (skaitmuo of skaiciai){
  const atvirksciai=skaiciai[skaitmuo].
}
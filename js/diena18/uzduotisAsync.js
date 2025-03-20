// 1. Sukurkite JS funkciją, kurios parametras yra callback funkcija. Jūsų funkcija turėtų vykdyti callback funkciją po 2s.

// function setTimeout3000(callback) {
//   setTimeout(callback, 3000);
// }

// setTimeout3000(() => {
//   console.log("Msg after 3 sec");
//   let a = 0;
//   a += 5;
//   console.log(a);
// });

// 2. Sukurkite JS funkciją, kuri daro HTTP Request užklausą ir grąžina pažadą su duomenimis.

// const newData = () => {
//   return new Promise((resolve, reject) => {
//     resolve("some data");
//     reject("some err");
//   });
// };

// newData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((ree) => {
//     console.log(err);
//   });

// const getToDos = (url) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("Error getting responce");
//       }
//     });
//     request.open("GET", url);
//     request.send();
//   });
// };
// getToDos("async.json")
//   .then((data) => {
//     console.log("Promise resolve", data);
//   })
//   .catch((Error) => {
//     console.log("Promise reject", Error.status);
//   });

// function getData(url) {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject({ status: request.status, klaida: request });
//       }
//     });
//     request.open("GET", url);
//     request.send();
//   });
// }

// getData("https://jsonplaceholder.typicode.com/comments").then(data).catch(err);

// function data(data) {
//   console.log(data);
// }

// function err(err) {
//   console.log(err);
// }

// fetch("https://jsonplaceholdaaer.typicode.com/comments")
//   .then((response) => {
//     return response.json();
//   })
//   .then(data)
//   .catch(err);

// function data(data) {
//   console.log(data);
// }

// function err(err) {
//   console.log(err);
// }

// 3. Sukurti funkciją(1), kuri kaip parametrus priimtų skaičių masyvą ir callback funkciją(2). Funkcija(1) turėtų iteruoti per masyvą ir siųsti kiekvieną jos narį callback funkcijai(2). Callback funkcijos esmė - patikrinti ar gautas skaičius yra lyginis ar nelyginis ir atitinkamą informaciją išvesti į konsolę. Funkcija turėtų būti iškviečiama taip (pavadinimai gali būti kitokie): pirmojiFunkcija(masyvas, callbackFunkcija)

// function pirmojiFunkcija(skaiciai, cbfunkcija) {
//   for (skaicius of skaiciai) {
//     cbfunkcija(skaicius);
//   }
// }

// function callbackFunkcija(skaicius) {
//   if (skaicius % 2 == 0) {
//     console.log(skaicius, "yra lyginis");
//   } else {
//     console.log(skaicius, "yra nelyginis");
//   }
// }

// pirmojiFunkcija([1, 2, 3, 4, 5, 6, 7, 8], callbackFunkcija);

// function pirmojiFunkcija(skaiciai, cbfunkcija) {
//   skaiciai.forEach(cbfunkcija);
// }

// function callbackFunkcija(skaicius) {
//   console.log(skaicius, skaicius % 2 === 0 ? "yra lyginis" : "yra nelyginis");
// }

// fetch("skaiciai.json")
//   .then((response) => response.json())
//   .then((data) => {
//     pirmojiFunkcija(data, callbackFunkcija);
//   })
//   .catch((err) => {
//     console.log("Erros:", err);
//   });

// 4. Sukurkite funkciją, kuri priima masyvą (kuris užpildytas "string" tipo reikšmėmis(žodžiais)) ir callback funkciją. Funkcija turėtų iteruoti per masyvą ir nusiųsti kiekvieną stringą esantį masyve callback funckijai. Callback funkcija turi grąžinti atsiųsto "string" ilgį. - susikurti funkciją patikrinkZodzioIlgi(masyvas, callbackFunkcija) - funkcijos patikrinkZodzioIlgi esmė - panaudoti foreach ir kiekvienam masyvo nariui iškviest funkciją koksIlgis(string)

// function patikrinkZodzioIlgi(masyvas, callbackFunkcija) {
//   masyvas.forEach(callbackFunkcija);
// }

// function cbfunkcija(zodis) {
//   console.log(zodis, "turi", zodis.length, "simboliu");
// }

// fetch("zodziai.json")
//   .then((responce) => responce.json())
//   .then((data) => {
//     console.log(data);
//     patikrinkZodzioIlgi(data, cbfunkcija);
//   })
//   .catch((err) => {
//     console.log("Erros:", err);
//   });

// 5. Sukurkite funkciją, kuri kaip argumentus priima masyvą, sudarytą iš objektų ir callback funkciją. Funkcija turėtų iteruoti per masyvą ir nusiųsti kiekvieną ten esantį objektą (tarkim tai automobilis, turintis šias properties: rida, markė, modelis, gamybos metai ir kaina (bet galite susikurti ir savo nuožiūra)) callback funkcijai. Callback funkcija turėtų grąžinti naują objektą, kuriame būtų tik atrinktos objekto properties, tarkim tik markė ir modelis)

function getCars(cars, cbFunc) {
  for (const car of cars) {
    cbFunc(car);
  }
}

function getModel(car) {
  console.log({ marke: car.marke, modelis: car.modelis });
}

getCars(cars, getModel);

const cars = [
  {
    rida: 150000,
    marke: "Toyota",
    modelis: "Corolla",
    gamybosMetai: 2018,
    kaina: 12000,
  },
  {
    rida: 80000,
    marke: "Volkswagen",
    modelis: "Golf",
    gamybosMetai: 2020,
    kaina: 18000,
  },
  {
    rida: 200000,
    marke: "BMW",
    modelis: "3 Series",
    gamybosMetai: 2016,
    kaina: 15000,
  },
  {
    rida: 60000,
    marke: "Mercedes-Benz",
    modelis: "C-Class",
    gamybosMetai: 2019,
    kaina: 25000,
  },
  {
    rida: 130000,
    marke: "Honda",
    modelis: "Civic",
    gamybosMetai: 2017,
    kaina: 14000,
  },
];

console.log(cars);

// function getData(callback) {
//   fetch("auto.json")
//     .then((response) => response.json())
//     .then((data) => {
//       callback(data);
//     })
//     .catch((err) => {
//       console.log("Erros:", err);
//     });
// }

// function autoProp(data, callback) {
//   data.forEach(callback);
// }

// function answer(auto) {
//   console.log("Automobilis", auto.marke, auto.modelis);
// }

// getData((data) => autoProp(data, answer));

// function getData() {
//   fetch("auto.json")
// .then((response) => response.json())
//     .then((data) => {
//       callback(data);
//     })
//     .catch((err) => {
//       console.log("Erros:", err);
//     });
// }

// function autoProp(data, callback) {
//   data.forEach(callback);
// }

// function answer(auto) {
//   console.log("Marke" + auto.marke);
// }

// autoProp(getData, answer);

// 6. Sukurkite funkciją, kuri priims parametrą isUserLogedIn (reikšmė gali būti true arba false). Jūsų funkcijos viduje, naudojantis Promise konstruktoriumi, sukursite naują promise objektą, kuris tikrins ar isUserLogedIn yra true ar false, jeigu paduotas parametras ar false, jūsų sukurtas promise turėtų reject’inti užklausą, kitu atveju - resolvinam ir grąžinam pasirinktą pranešimą. Iškvieskite tą funkciją naudojantis then ir catch, o gautą rezultatą atvaizduokite konsolėje.

// 7. Sukurkite async funkciją, kuri priimtų parametrą "age". Funkcijos viduje padarykite patikrinimą ar "age" yra paduotas ir ar jis yra skaičius - priešingu atveju iškvieskite klaidą (throw). Toliau tikrinkite ar amžius yra daugiau nei 18, jeigu taip, grąžinkite, kad “vartotojas gali laikyti vairuotojo egzaminą", priešingu atveju iškvieskite klaidą (throw) ir parašykite, kad "jūsų amžius turi būti daugiau nei 18". Iškvieskite šią funkciją naudojantis then ir catch.

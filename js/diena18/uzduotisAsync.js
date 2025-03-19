// 1. Sukurkite JS funkciją, kurios parametras yra callback funkcija. Jūsų funkcija turėtų vykdyti callback funkciją po 2s.

// function setTimeout3sec(callback) {
//   setTimeout(callback, 3000);
// }

// setTimeout3sec(() => {
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

// 3. Sukurti funkciją(1), kuri kaip parametrus priimtų skaičių masyvą ir callback funkciją(2). Funkcija(1) turėtų iteruoti per masyvą ir siųsti kiekvieną jos narį callback funkcijai(2). Callback funkcijos esmė - patikrinti ar gautas skaičius yra lyginis ar nelyginis ir atitinkamą informaciją išvesti į konsolę. Funkcija turėtų būti iškviečiama taip (pavadinimai gali būti kitokie): pirmojiFunkcija(masyvas, callbackFunkcija)

// function funk1(numbersArr,callback){
//     for (number of numbersArr)
// }

// 4. Sukurkite funkciją, kuri priima masyvą (kuris užpildytas "string" tipo reikšmėmis(žodžiais)) ir callback funkciją. Funkcija turėtų iteruoti per masyvą ir nusiųsti kiekvieną stringą esantį masyve callback funckijai. Callback funkcija turi grąžinti atsiųsto "string" ilgį. - susikurti funkciją patikrinkZodzioIlgi(masyvas, callbackFunkcija) - funkcijos patikrinkZodzioIlgi esmė - panaudoti foreach ir kiekvienam masyvo nariui iškviest funkciją koksIlgis(string)

// 5. Sukurkite funkciją, kuri kaip argumentus priima masyvą, sudarytą iš objektų ir callback funkciją. Funkcija turėtų iteruoti per masyvą ir nusiųsti kiekvieną ten esantį objektą (tarkim tai automobilis, turintis šias properties: rida, markė, modelis, gamybos metai ir kaina (bet galite susikurti ir savo nuožiūra)) callback funkcijai. Callback funkcija turėtų grąžinti naują objektą, kuriame būtų tik atrinktos objekto properties, tarkim tik markė ir modelis)

// 6. Sukurkite funkciją, kuri priims parametrą isUserLogedIn (reikšmė gali būti true arba false). Jūsų funkcijos viduje, naudojantis Promise konstruktoriumi, sukursite naują promise objektą, kuris tikrins ar isUserLogedIn yra true ar false, jeigu paduotas parametras ar false, jūsų sukurtas promise turėtų reject’inti užklausą, kitu atveju - resolvinam ir grąžinam pasirinktą pranešimą. Iškvieskite tą funkciją naudojantis then ir catch, o gautą rezultatą atvaizduokite konsolėje.

// 7. Sukurkite async funkciją, kuri priimtų parametrą "age". Funkcijos viduje padarykite patikrinimą ar "age" yra paduotas ir ar jis yra skaičius - priešingu atveju iškvieskite klaidą (throw). Toliau tikrinkite ar amžius yra daugiau nei 18, jeigu taip, grąžinkite, kad “vartotojas gali laikyti vairuotojo egzaminą", priešingu atveju iškvieskite klaidą (throw) ir parašykite, kad "jūsų amžius turi būti daugiau nei 18". Iškvieskite šią funkciją naudojantis then ir catch.

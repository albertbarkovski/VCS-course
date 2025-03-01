// 1. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių (naudojant find metodą), kuris yra lyginis. Pvz, jeigu masyvas bus [3, 7, 2, 9, 6, 4], tai atsakymas turi gautis 2, nes 3 ir 7 buvo nelyginiai.

let skaiciai1 = [3, 7, 2, 9, 6, 4];

const lyginis = skaiciai1.find((a) => a % 2 === 0);

console.log(lyginis);

// const didesnisUz7 = skaiciai1.find((a) => a > 7);

// console.log(didesnisUz7);

// 2. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Suraskite jame pirmą skaičių, kuris yra teigiamas (daugiau nei 0). Pvz, jeigu masyvas bus [-3, 0, 5, -8, 2, 7], atsakymas turi gautis 5.

let skaiciai2 = [-3, 0, 5, -8, 2, 7];

const teigiamas = skaiciai2.find((a) => a > 0);

console.log(teigiamas);

// 3. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Suraskite jame pirmą skaičių kuris yra neigiamas ir išveskite jo indeksą, o jeigu tokio skaičiaus nėra išveskite -1. Pvz, jeigu masyvas bus [8, -2, 3, 4], tai atsakymas yra 1, nes skaičius -2 yra indekse 1. O jeigu masyvas bus [7, 5, 3], tai atsakymas bus -1, nes masyve nėra neigiamo skaičiaus.

let skaiciai3 = [8, -2, 3, 4];
// skaiciai3 = [7, 5, 3];

const neigiamasSkaicius = skaiciai3.findIndex((a) => a < 0);

console.log(neigiamasSkaicius);

// 4. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra lygus arba didesnis 10 ir išveskite jo indeksą, o jeigu tokio skaičiaus nėra išveskite -1. Pvz, jeigu turite masyvą [8, 12, 5, 3, 15, 9], atsakymas bus 1.

let skaiciai4 = [8, 12, 5, 3, 15, 9];

const daugiauUz10 = skaiciai4.findIndex((a) => a >= 10);

console.log(daugiauUz10);

// 5. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris dalintųsi iš 3 ir būtų didesnis nei 10, ir jį išveskite. Pvz, jeigu masyvas yra [5, 9, 12, 7, 18, 4], atsakymas bus 12.

let skaiciai5 = [5, 9, 12, 7, 18, 4];

const rezultatas5 = skaiciai5.find((a) => a % 3 === 0 && a > 10);

console.log(rezultatas5);

// 6. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra neigiamas ir yra lyginis. Pvz, jeigu masyvas [5, 8, -3, -6, 4, 7], tai atsakymas yra -6.

let skaiciai6 = [5, 8, -3, -6, 4, 7];

const rezultatas6 = skaiciai6.find((a) => a < 0 && a % 2 === 0);

console.log(rezultatas6);

// 7. Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra teigiami (didesni nei 0). Pvz, jeigu masyvas [7, 5, 9, 8], tai atsakymas true, o jeigu masyvas [8, 9, -3, 2], tai atsakymas false.

let skaiciai7 = [7, 5, 9, 8];

const arTeigiami = skaiciai7.every((a) => a > 0);

console.log(arTeigiami ? "Teigiami" : "Ne");

// 8. Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra lyginiai. Pvz, jeigu masyvas yra [2, 4, 8, 6], tai atsakymas true, o jeigu masyvas [7, 3, 6, 8, 10], tai atsakymas false.

let skaiciai8 = [2, 4, 8, 6];

const arLyginiai = skaiciai8.every((a) => a % 2 === 0);

console.log(arLyginiai ? "Lyginiai" : "Ne");

// 9. Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve yra bent vienas skaičius, kuris yra mažesnis nei 5. Pvz, jeigu masyvas [8, 20, 5, 97, 44], tai atsakymas false, bet jeigu masyvas [20, 3, 7, 9], tai atsakymas true.

let skaiciai9 = [8, 20, 5, 97, 44];

const maziauUz5 = skaiciai9.some((a) => a < 5);

console.log(maziauUz5);

// 10. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Patikrinkite ar šiame masyve yra bent vienas teigiamas skaičius (didesnis nei 0). Pvz, jeigu masyvas [7, 2, -3, -6], tai atsakymas yra true, o jeigu masyvas yra [-8, -6, -4], tai atsakymas yra false.

let skaiciai10 = [7, 2, -3, -6];

const vienasTeigiamas = skaiciai10.some((a) => a > 0);

console.log(vienasTeigiamas);

// 11. Susikurkite žodžių masyvą. Patikrinkite ar visi šiame masyve esantys žodžiai yra sudaryti iš 3 ar daugiau raidžių. Pvz, jeigu masyvas yra [‘antis’, ‘ožka’, ‘arklys’], tai atsakymas true, o jeigu masyvas [‘abc’, ‘de’, ‘fgia’], tai atsakymas false.

let zodziai11 = ["antis", "ožka", "arklys"];

const rezultatas11 = zodziai11.every((a) => a.length >= 3);

console.log(rezultatas11);

// 12. Susikurkite žodžių masyvą. Patikrinkite ar šiame masyve yra bent vienas žodis prasidedantis raide a (turi surasti nepriklausomai tai didžioji ar mažoji raidė). Pvz, jeigu masyvas [‘bananas’, ‘agurkas’, ‘pomidoras’], tai atsakymas true, o jeigu masyvas [‘kaunas’, ‘vilnius’, ‘klaipėda’], tai atsakymas false.

let zodziai12 = ["bananas", "agurkas", "pomidoras"];

const rezultatas12 = zodziai12.some((a) => a.startsWith("a"));

console.log(rezultatas12);

// 13. Susikurkite skaičių masyvą. Patikrinkite ar visi šiame masyve esantys skaičiai yra teigiami ir ar yra bent vienas skaičius, kuris būtų lyginis. Pvz, masyvas [3, 7, 2, 9, 6, 4], grąžina true, o masyvas [4, -2, 3, 7] grąžina false.

let skaiciai13 = [3, 7, 2, 9, 6, 4];

const arVisiTeigiami = skaiciai13.every((a) => a > 0);
const arBentVienasLyg = skaiciai13.some((a) => a % 2 === 0);

console.log(arVisiTeigiami && arBentVienasLyg);

// 14. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Išfiltruokite skaičius, kurie yra teigiami. Pvz, jeigu masyvas yra [4, -3, -2, 8, 9, 5], tai išfiltruotas variantas yra [4, 8, 9, 5].

let skaiciai14 = [4, -3, -2, 8, 9, 5];

const teigiami14 = skaiciai14.filter((a) => a > 0);

console.log(teigiami14);

// 15. Susikurkite skaičių masyvą, kuriame būtų saugomi prekės reitingai (skaičiai nuo 1 iki 5). Išfiltruokite tuos įrašus, kur balų yra 1 arba 2. Pvz, jeigu masyvas [5, 1, 4, 5, 1, 3, 4, 5, 2], tai išfiltravus gausis [1, 1, 2].

let reitingai15 = [5, 1, 4, 5, 1, 3, 4, 5, 2];

// const balai15 = reitingai15.filter((a) => a === 1 || a === 2 || a === 3 || a === 5);

const balai15 = reitingai15.filter((a) => [1, 2].includes(a));

console.log(balai15);

// 16. Susikurkite skaičių masyvą, kuriame būtų ir teigiamų ir neigiamų skaičių. Išfiltruokite tik tuos skaičius, kurie yra teigiami ir yra lyginiai. Pvz, jeigu turite masyvą [5, -3, 2, 7, 8, -4, 1] tai turi gautis [2, 8].

let skaiciai16 = [5, -3, 2, 7, 8, -4, 1];

const isfiltruoti16 = skaiciai16.filter((a) => a > 0).filter((a) => a % 2 === 0);

console.log(isfiltruoti16);

// 17. Susikurkite šalių pavadinimų masyvą. Išfiltruokite tik tas šalis, kurių pavadinime yra raidė b (nesvarbu didžioji ar mažoji raidė). Pvz, jeigu turite masyvą [‘Belgija’, ‘Lietuva’, ‘Graikija’, ‘Bulgarija’], tai turi gautis [‘Belgija’, ‘Bulgarija’].

let salys17 = ["Belgija", "Lietuva", "Graikija", "Bulgarija"];

const salysSuRaideB17 = salys17.filter((a) => a.toLocaleLowerCase().includes("b"));

console.log(salysSuRaideB17);

// 18. Susikurkite skaičių masyvą. Išfiltruokite lyginius skaičius ir juos padvigubinkite. Pvz, jeigu masyvas yra [3, 7, 2, 9, 6, 4], išfiltravus gausis [2, 6, 4], o padvigubinus galutinis variantas bus [4, 12, 8].

let skaiciai18 = [3, 7, 2, 9, 6, 4];

const filtruotiIrPakeisti = skaiciai18.filter((a) => a % 2 === 0).map((a) => a * 2);

console.log(filtruotiIrPakeisti);

// 19. Susikurkite skaičių masyvą. Kiekvieną skaičių jame padidinkite per 1. Pvz, jeigu masyvas yra [7, 8, 9, 2, 3], tai turi gautis [8, 9, 10, 3, 4].

let skaiciai19 = [7, 8, 9, 2, 3];

const padidintiSkaiciai = skaiciai19.map((a) => a + 1);
console.log(padidintiSkaiciai);

// 20. Susikurkite žodžių masyvą. Kiekvieną žodį iš šio masyvo paverskite į variantą iš didžiųjų raidžių. Pvz, jeigu turite masyvą [‘bananas’, ‘baba’, ‘klėtis’], tai turi gautis [‘BANANAS’, ‘BABA’, ‘KLĖTIS’].

let zodziai20 = ["bananas", "baba", "klėtis"];

const didziosios = zodziai20.map((a) => a.toUpperCase());

console.log(didziosios);

// 21. Susikurkite skaičių masyvą. Gaukite visų skaičių sumą. Pvz, jeigu masyvas yra [2, 3, 1], tai atsakymas 6.

let skaiciai21 = [2, 3, 1, 6, 4, 9, 8, 4, 5, 10];

const suma = skaiciai21.reduce((a, b) => a + b, 0);

console.log(suma);

// 22. Susikurkite skaičių masyvą. Atrinkite tik tuos skaičius, kurie yra lyginiai ir gaukite jų sumą. Pvz, jeigu masyvas yra [1, 2, 3, 4, 5], atrinkus gausis [2, 4], o šių skaičių suma ir galutinis atsakymas yra 6.

let skaiciai22 = [1, 2, 3, 4, 5];

const suma22 = skaiciai22.filter((a) => a % 2 === 0).reduce((a, b) => a + b, 0);

console.log(suma22);

// 23. Susikurkite žodžių masyvą. Pasiimkite kiekvieno žodžio pirmą raidę, ją padarykite iš didžiosios raidės. Pvz, jeigu turite masyvą [‘šuo’, ‘katė’, ‘gyvatė’], tai turi gautis [‘Š’, ‘K’, ‘G’].

let zodziai23 = ["šuo", "katė", "gyvatė"];

let naujiZodziai23 = zodziai23.map((a) => a[0].toLocaleUpperCase());

console.log(naujiZodziai23);

// 24. Susikurkite žodžių masyvą. Raskite kiek šiame masyve yra žodžių, kurie susideda iš 5 ar daugiau raidžių. Pvz, jeigu masyvas yra [‘bananas’, ‘persikas’, ‘abc’, ‘de’], tai atrinkus žodžius gausis [‘bananas’, ‘persikas’], o tokių žodžių yra ir galutinis atsakymas skaitosi 2.

let zodziai24 = ["bananas", "persikas", "abc", "de"];

let kiekZodziuIs5 = zodziai24.filter((a) => a.length >= 5).length;

console.log(kiekZodziuIs5);

// 25. Susikurkite žodžių masyvą. Raskite kiekvieno žodžio simbolių kiekį. Pvz, jeigu masyvas yra [‘obelis’, ‘liepa’, ‘eglė’, ‘uosis’], tai turi gautis [6, 5, 4, 5].

let zodziai25 = ["obelis", "liepa", "eglė", "uosis"];

let simboliai25 = zodziai25.map((a) => a.length);

console.log(simboliai25);

// 26. Susikurkite masyvą, kur string pavidalu kiekviename elemente būtų sudėti vardai ir amžiai. Ištraukite iš tokio masyvo tik vardus. Pvz, jeigu masyvas yra [‘Tomas 34’, ‘Jonas 20’, ‘Gintarė 40’, ‘Inga 24’], tai turi gautis [‘Tomas’, ‘Jonas’, ‘Gintarė’, ‘Inga’].

let vardaiIrAmziai26 = ["Tomas 34", "Jonas 20", "Gintarė 40", "Inga 24"];

let tikVardai26 = vardaiIrAmziai26.map((a) => a.split(" ")[0]);

console.log(tikVardai26);

// 27. Susikurkite masyvą, kur string pavidalu kiekviename elemente būtų sudėti vardai ir amžiai. Ištraukite iš tokio masyvo tik amžius, juos paverskite į skaičius ir raskite bendrą sumą. Pvz, jeigu masyvas yra [‘Tomas 34’, ‘Jonas 20’, ‘Gintarė 40’, ‘Inga 24’], tai išrinkus info gausis [34, 20, 40, 24] ir suradus sumą turėsime 118.

let vardaiIrAmziai27 = ["Tomas 34", "Jonas 20", "Gintarė 40", "Inga 24"];

let amziausSuma27 = vardaiIrAmziai27
  .map((a) => a.split(" ")[1])
  .map((a) => parseInt(a))
  .reduce((a, b) => a + b, 0);

console.log(amziausSuma27);

// 28. Susikurkite masyvą prekių likučiams saugoti (tik likučių skaičiai). Išrinkite visus likučius, kurių liko mažai (mažiau nei 5 vnt.), ties kiekvienu likučiu paskaičiuokite kiek trūksta iki ribos. Pvz, jeigu turite masyvą [74, 2, 54, 3, 1, 87], išfiltravus liks [2, 3, 1], o paskaičiavus kiek kiekvieno trūksta iki 5, gausis [3, 2, 4].

let likuciai28 = [74, 2, 54, 3, 1, 87];

let rezultatas28 = likuciai28.filter((a) => a < 5).map((a) => 5 - a);

console.log(rezultatas28);

// 29. Susikurkite masyvą studento pažymiams saugoti. Suraskite kiek studentas turi gerų pažymių (8 ar daugiau). Pvz, jeigu masyvas yra [7, 8, 10, 6, 5, 9], išfiltravus gausis [8, 10, 9], o tokių pažymių jis turi 3.

let pazymiai29 = [7, 8, 10, 6, 5, 9];

let kiekTuriGeruPazymiu29 = pazymiai29.filter((a) => a >= 8).length;

console.log(kiekTuriGeruPazymiu29);

// 30. Susikurkite žodžių masyvą. Suraskite kiek iš viso šiame masyve per visus žodžius yra raidžių a (nesvarbu didžioji ar mažoji raidė). Pvz, jeigu masyvas yra [‘bananas’, ‘obelis’, ‘automobilis’], gausis kad yra 4 raidės.

let zodziai30 = ["bananas", "obelis", "automobilis"];

const aRaidziuSuma = zodziai30.map((a) => a.toLocaleLowerCase()).reduce((a, b) => a + b.split("a").length - 1, 0);

console.log(aRaidziuSuma);

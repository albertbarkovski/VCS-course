// 1. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių (naudojant find metodą), kuris yra lyginis. Pvz, jeigu masyvas bus [3, 7, 2, 9, 6, 4], tai atsakymas turi gautis 2, nes 3 ir 7 buvo nelyginiai.

// let skaiciai = [1, 3, 5, 6, 7, 8];

// skaiciai.forEach((skaicius, indeksas) => console.log(indeksas, skaicius));

// let pirmasLyginis = skaiciai.find((skaicius) => skaicius % 2 == 0);
// console.log(pirmasLyginis);

// 2. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Suraskite jame pirmą skaičių, kuris yra teigiamas (daugiau nei 0). Pvz, jeigu masyvas bus [-3, 0, 5, -8, 2, 7], atsakymas turi gautis 5.

// let skaiciai = [-3, 1, 0, 5, -8, 2, 7];

// let pirmasTeigiamas = skaiciai.find((skaicius) => skaicius > 0);
// console.log(pirmasTeigiamas);

// 3. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Suraskite jame pirmą skaičių kuris yra neigiamas ir išveskite jo indeksą, o jeigu tokio skaičiaus nėra išveskite -1. Pvz, jeigu masyvas bus [8, -2, 3, 4], tai atsakymas yra 1, nes skaičius -2 yra indekse 1. O jeigu masyvas bus [7, 5, 3], tai atsakymas bus -1, nes masyve nėra neigiamo skaičiaus.

// let skaiciai = [8, 5, 8, 5, 8, 2, 3, 4];

// const neigiamoIndexas = skaiciai.findIndex((a) => a < 0);
// console.log(neigiamoIndexas);

// 4. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra lygus arba didesnis 10 ir išveskite jo indeksą, o jeigu tokio skaičiaus nėra išveskite -1. Pvz, jeigu turite masyvą [8, 12, 5, 3, 15, 9], atsakymas bus 1.

// let skaiciai = [8, 1, 5, 3, 5, 9];

// const didesnisUzDesimt = skaiciai.findIndex((a) => a >= 10);
// console.log(didesnisUzDesimt);

// 5. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris dalintųsi iš 3 ir būtų didesnis nei 10, ir jį išveskite. Pvz, jeigu masyvas yra [5, 9, 12, 7, 18, 4], atsakymas bus 12.

// let skaiciai = [5, 9, 1, 7, 18, 4];

// const salyga = skaiciai.find((a) => a > 10 && a % 3 == 0);

// console.log(salyga);

// 6. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra neigiamas ir yra lyginis. Pvz, jeigu masyvas [5, 8, -3, -6, 4, 7], tai atsakymas yra -6.

// let skaiciai = [5, 8, -3, -6, -4, 7];

// const salyga = skaiciai.find((a) => a < 0 && a % 2 == 0);

// console.log(salyga);

// 7. Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra teigiami (didesni nei 0). Pvz, jeigu masyvas [7, 5, 9, 8], tai atsakymas true, o jeigu masyvas [8, 9, -3, 2], tai atsakymas false.

// let skaiciai = [7, 5, 9, 8];

// const salyga = skaiciai.every((a) => a > 0);
// console.log(salyga);

// 8. Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra lyginiai. Pvz, jeigu masyvas yra [2, 4, 8, 6], tai atsakymas true, o jeigu masyvas [7, 3, 6, 8, 10], tai atsakymas false.

// let skaiciai = [2, -4, 8, 6];

// const visiLyginiai = skaiciai.every((a) => a % 2 == 0);
// console.log(visiLyginiai);

//  9. Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve yra bent vienas skaičius, kuris yra mažesnis nei 5. Pvz, jeigu masyvas [8, 20, 5, 97, 44], tai atsakymas false, bet jeigu masyvas [20, 3, 7, 9], tai atsakymas true.

// let skaiciai = [8, 20, 5, 2, 97, 44];

// const salyga = skaiciai.some((a) => a < 5);
// console.log(salyga);

// 10. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Patikrinkite ar šiame masyve yra bent vienas teigiamas skaičius (didesnis nei 0). Pvz, jeigu masyvas [7, 2, -3, -6], tai atsakymas yra true, o jeigu masyvas yra [-8, -6, -4], tai atsakymas yra false.

// let skaiciai = [-3, -6, 1];

// const salyga = skaiciai.some((a) => a > 0);
// console.log(salyga);

//  11. Susikurkite žodžių masyvą. Patikrinkite ar visi šiame masyve esantys žodžiai yra sudaryti iš 3 ar daugiau raidžių. Pvz, jeigu masyvas yra ['antis', 'ožka', 'arklys'], tai atsakymas true, o jeigu masyvas ['abc', 'de', 'fgia'], tai atsakymas false.

// let zodziai = ["antis", "ozka", "arklys"];

// const salyga = zodziai.every((a) => a.length > 3);
// console.log(salyga);
//  12. Susikurkite žodžių masyvą. Patikrinkite ar šiame masyve yra bent vienas žodis prasidedantis raide a (turi surasti nepriklausomai tai didžioji ar mažoji raidė). Pvz, jeigu masyvas ['bananas', 'agurkas', 'pomidoras'], tai atsakymas true, o jeigu masyvas ['kaunas', 'vilnius', 'klaipėda'], tai atsakymas false.

// let zodziai = ["bananas", "Agurkas", "kokosas"];

// const salyga = zodziai.some((a) => a.toLowerCase().startsWith("a"));

// console.log(salyga);

//  13. Susikurkite skaičių masyvą. Patikrinkite ar visi šiame masyve esantys skaičiai yra teigiami ir ar yra bent vienas skaičius, kuris būtų lyginis. Pvz, masyvas [3, 7, 2, 9, 6, 4], grąžina true, o masyvas [4, -2, 3, 7] grąžina false.

// let skaiciai = [3, 8, 5, 9];

// const arTeigiami = skaiciai.every((a) => a > 0);
// const arVienasYraLyg = skaiciai.some((a) => a % 2 == 0);

// console.log(arTeigiami && arVienasYraLyg);

//  14. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Išfiltruokite skaičius, kurie yra teigiami. Pvz, jeigu masyvas yra [4, -3, -2, 8, 9, 5], tai išfiltruotas variantas yra [4, 8, 9, 5].

// let skaiciai = [4, -3, -2, 8, 9, 6, 5];

// const teigiami = skaiciai.filter((a) => a > 0);

// console.log(teigiami);

//  15. Susikurkite skaičių masyvą, kuriame būtų saugomi prekės reitingai (skaičiai nuo 1 iki 5). Išfiltruokite tuos įrašus, kur balų yra 1 arba 2. Pvz, jeigu masyvas [5, 1, 4, 5, 1, 3, 4, 5, 2], tai išfiltravus gausis [1, 1, 2].

// let skaiciai = [5, 1, 4, 5, 1, 3, 4, 5, 2];

// const pirmi = skaiciai.filter((a) => [1, 2].includes(a));
// console.log(pirmi);

//  16. Susikurkite skaičių masyvą, kuriame būtų ir teigiamų ir neigiamų skaičių. Išfiltruokite tik tuos skaičius, kurie yra teigiami ir yra lyginiai. Pvz, jeigu turite masyvą [5, -3, 2, 7, 8, -4, 1] tai turi gautis [2, 8].

// let skaiciai = [5, -3, 2, 7, 8, -4, 1];

// const teigiamiIrLyg = skaiciai.filter((a) => a > 0 && a % 2 === 0);

// console.log(teigiamiIrLyg);

//  17. Susikurkite šalių pavadinimų masyvą. Išfiltruokite tik tas šalis, kurių pavadinime yra raidė b (nesvarbu didžioji ar mažoji raidė). Pvz, jeigu turite masyvą ['Belgija', 'Lietuva', 'Graikija', 'Bulgarija'], tai turi gautis ['Belgija', 'Bulgarija'].

// let salys = ["Belgija", "Lietuva", "Graikija", "Bulgarija"];

// const suB = salys.filter((a) => a.toLowerCase().includes("b"));

// console.log(suB);

//  18. Susikurkite skaičių masyvą. Išfiltruokite lyginius skaičius ir juos padvigubinkite. Pvz, jeigu masyvas yra [3, 7, 2, 9, 6, 4], išfiltravus gausis [2, 6, 4], o padvigubinus galutinis variantas bus [4, 12, 8].

// let skaicius = [3, 7, 2, 9, 6, 4];

// const lyg = skaicius.filter((a) => a % 2 === 0);
// console.log(lyg);

// const dvigubi = lyg.map((a) => a * 2);
// console.log(dvigubi);

//  19. Susikurkite skaičių masyvą. Kiekvieną skaičių jame padidinkite per 1. Pvz, jeigu masyvas yra [7, 8, 9, 2, 3], tai turi gautis [8, 9, 10, 3, 4].

// let skaiciai = [7, 8, 9, 2, 3];

// const padidintas = skaiciai.map((a) => a + 1);

// console.log(padidintas);

//  20. Susikurkite žodžių masyvą. Kiekvieną žodį iš šio masyvo paverskite į variantą iš didžiųjų raidžių. Pvz, jeigu turite masyvą ['bananas', 'baba', 'klėtis'], tai turi gautis ['BANANAS', 'BABA', 'KLĖTIS'].

// let zodziai = ["bananas", "baba", "klėtis"];
// const didziosiosRaides = zodziai.map((a) => a.toUpperCase());

// console.log(didziosiosRaides);

//  21. Susikurkite skaičių masyvą. Gaukite visų skaičių sumą. Pvz, jeigu masyvas yra [2, 3, 1], tai atsakymas 6.

// let skaiciai = [2, 3, 1];

// const suma = skaiciai.reduce((a, b) => a + b,0);
// console.log(suma);

//  22. Susikurkite skaičių masyvą. Atrinkite tik tuos skaičius, kurie yra lyginiai ir gaukite jų sumą. Pvz, jeigu masyvas yra [1, 2, 3, 4, 5], atrinkus gausis [2, 4], o šių skaičių suma ir galutinis atsakymas yra 6.

// let skaiciai = [1, 2, 3, 4, 5];
// const lyg = skaiciai.filter((a) => a % 2 === 0);

// const lygSuma = lyg.reduce((a, b) => a + b,0);

// console.log(lyg);
// console.log(lygSuma);

//  23. Susikurkite žodžių masyvą. Pasiimkite kiekvieno žodžio pirmą raidę, ją padarykite iš didžiosios raidės. Pvz, jeigu turite masyvą ['šuo', 'katė', 'gyvatė'], tai turi gautis ['Š', 'K', 'G'].

// let zodziai = ["šuo", "katė", "gyvatė"];

// const uzduotis = zodziai.map((a) => a[0].toLocaleUpperCase());
// console.log(uzduotis);

//  24. Susikurkite žodžių masyvą. Raskite kiek šiame masyve yra žodžių, kurie susideda iš 5 ar daugiau raidžių. Pvz, jeigu masyvas yra ['bananas', 'persikas', 'abc', 'de'], tai atrinkus žodžius gausis ['bananas', 'persikas'], o tokių žodžių yra ir galutinis atsakymas skaitosi 2.

// let zodziai = ["bananas", "persikas", "abc", "de"];

// const uzduotis = zodziai.filter((a) => a.length >= 5);

// console.log(uzduotis.length);

//  25. Susikurkite žodžių masyvą. Raskite kiekvieno žodžio simbolių kiekį. Pvz, jeigu masyvas yra ['obelis', 'liepa', 'eglė', 'uosis'], tai turi gautis [6, 5, 4, 5].

// let zodziai = ["obelis", "liepa", "eglė", "uosis"];

// const uzduotis = zodziai.map((a) => a.length);

// console.log(uzduotis);

//  26. Susikurkite masyvą, kur string pavidalu kiekviename elemente būtų sudėti vardai ir amžiai. Ištraukite iš tokio masyvo tik vardus. Pvz, jeigu masyvas yra ['Tomas 34', 'Jonas 20', 'Gintarė 40', 'Inga 24'], tai turi gautis ['Tomas', 'Jonas', 'Gintarė', 'Inga'].

// let masyvas = ["Tomas 34", "Jonas 20", "Gintarė 40", "Inga 24"];

// const vardai = masyvas.map((a) => a.split(" ")[0]);

// console.log(vardai);

//  27. Susikurkite masyvą, kur string pavidalu kiekviename elemente būtų sudėti vardai ir amžiai. Ištraukite iš tokio masyvo tik amžius, juos paverskite į skaičius ir raskite bendrą sumą. Pvz, jeigu masyvas yra ['Tomas 34', 'Jonas 20', 'Gintarė 40', 'Inga 24'], tai išrinkus info gausis [34, 20, 40, 24] ir suradus sumą turėsime 118.

// let vardarIrAmzius = ["Tomas 34", "Jonas 20", "Gintarė 40", "Inga 24"];

// const amzius = vardarIrAmzius
//   .map((a) => a.split(" ")[1])
//   .map((a) => parseInt(a))
//   .reduce((a, b) => a + b, 0);

// console.log(amzius);

//  28. Susikurkite masyvą prekių likučiams saugoti (tik likučių skaičiai). Išrinkite visus likučius, kurių liko mažai (mažiau nei 5 vnt.), ties kiekvienu likučiu paskaičiuokite kiek trūksta iki ribos. Pvz, jeigu turite masyvą [74, 2, 54, 3, 1, 87], išfiltravus liks [2, 3, 1], o paskaičiavus kiek kiekvieno trūksta iki 5, gausis [3, 2, 4].

// let likuciai = [74, 2, 54, 3, 1, 87];

// const maziauNei5 = likuciai.filter((a) => a < 5).map((a) => 5 - a);

// console.log(maziauNei5);

//  29. Susikurkite masyvą studento pažymiams saugoti. Suraskite kiek studentas turi gerų pažymių (8 ar daugiau). Pvz, jeigu masyvas yra [7, 8, 10, 6, 5, 9], išfiltravus gausis [8, 10, 9], o tokių pažymių jis turi 3.

// let pazymiai = [7, 8, 10, 6, 5, 9];

// const geriPazymiai = pazymiai.filter((a) => a >= 8);
// console.log(geriPazymiai.length);

//  30. Susikurkite žodžių masyvą. Suraskite kiek iš viso šiame masyve per visus žodžius yra raidžių a (nesvarbu didžioji ar mažoji raidė). Pvz, jeigu masyvas yra ['bananas', 'obelis', 'automobilis'], gausis kad yra 4 raidės.

// let zodziai = ["bananas", "obelis", "automobilis"];

// const raidesA = zodziai.map((a) => a.toLocaleLowerCase()).reduce((a, b) => a + b.split("a").length - 1, 0);

// console.log(raidesA);

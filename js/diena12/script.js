// 1. Praeitame skyriuje sukurtą darbuotojo objektą pasikopijuokite į naują gamyklos (factory) funkciją, kuri galėtų sukurti daugiau tokių objektų. Pritaikykite objektą, kad duomenis prisiskirtų iš funkcijos argumentų. Už funkcijos ribų sukurkite ir sudėkite keletą tokių darbuotojų į masyvą. Tuomet mėginkite prasukti ciklą pro sukurtą darbuotojų masyvą ir išsiveskite darbuotojų duomenis, taip pat, pakvieskite skaičiavimų funkcijas ir pasižiūrėkite gaunamus rezultatus.

function darbuotojuFactory(vardas, pavarde, amzius, pareigos, pradejoDirbt) {
  return {
    vardas,
    pavarde,
    amzius,
    pareigos,
    pradejoDirbt,
    isvestiInfo: function () {
      console.log(`Darbuotojas ${this.vardas} ${this.pavarde}, kurio amzius ${this.amzius}, uzima pereigas ${this.pareigos}`);
    },
    stazas: function () {
      return console.log(`Darbo stazas jau ${2025 - this.pradejoDirbt} metai`);
    },
  };
}

const darbuotojai = [];
darbuotojai.push(darbuotojuFactory("Jonas", "Jonelis", 55, "mechanikas", 2000));
darbuotojai.push(darbuotojuFactory("Povilas", "Povilaitis", 38, "elektrikas", 2018));
darbuotojai.push(darbuotojuFactory("Petras", "Petraitis", 44, "inzinieris", 2005));

for (const darbuotojas of darbuotojai) {
  darbuotojas.isvestiInfo();
  darbuotojas.stazas();
}

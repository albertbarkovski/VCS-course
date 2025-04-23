import "./App.css";
import GreicioMatuoklis from "./components/GreicioMatuoklis";
import Slaptazodis from "./components/Slaptazodis";
import Uzvedimas from "./components/Uzvedimas";
import VardoIvedimas from "./components/VardoIvedimas";
import Zodis from "./components/Zodis";
import Zuikis from "./components/Zuikis";

function App() {
  return (
    <>
      <Zodis />
      <hr />
      <Zuikis />
      <hr />
      <GreicioMatuoklis />
      <hr />
      <VardoIvedimas />
      <hr />
      <Slaptazodis />
      <hr />
      <Uzvedimas />
    </>
  );
}

export default App;

// Komponentas Skrolinimas
// 1. Sukurkite ilgą turinį (naudokite div su overflow ir height, kad atsirastų slinkimas).
// 2. Naudokite scroll (vadinasi šiek tiek kitaip) eventą, kad kiekvieno slinkimo metu išvestų dabartinę
// slinkimo poziciją (scrollTop) į konsolę.
// 3. Pridėkite viršuje mažą „statuso“ juostą, kurioje tekstu rodoma „Slinkimo pozicija: [pozicija]“.
// 4. Jei vartotojas nuslenka daugiau nei 200px, parodykite žinutę „Jūs nuslinkote gana toli!“.

// Komponentas ElPastoTikrinimas
// 1. Sukurkite įvesties laukelį el. paštui.
// 2. Naudokite eventą, kad kai vartotojas išeina iš įvedimo laukelio, patikrintų, ar įvestas tekstas atrodo kaip el. paštas (pvz., yra @ simbolis).
// 3. Jei el. paštas neteisingas – parodykite klaidos žinutę raudonai.
// 4. Jei teisingas – parodykite žinutę „El. paštas atrodo gerai“.

// Komponentas TekstoLaukas
// 1. Sukurkite textarea elementą.
// 2. Naudokite eventą, kad skaičiuotų kiek simbolių įrašyta.
// 3. Rodomas simbolių skaičius po laukeliu.
// 4. Jei simbolių daugiau nei 100, parodykite perspėjimą: „Per daug teksto!“.

// Komponentas KeyLogger
// 1. Sukurkite input laukelį.
// 2. Naudokite eventą (susijusį su keyboard), kad kiekvienas paspaustas klavišas būtų pridedamas į sąrašą.
// 3. Rodykite visų paspaustų klavišų seką po laukeliu.
// 4. Pridėkite mygtuką, kuris išvalo seką.

// Komponentas Paveikslelis
// 1. Sukurkite paveikslėlį su <img>.
// 2. Naudokite pelytės užvedimo ant elemento eventą, kad paveikslėlio apačioje atsirastų užrašas „Nuotrauka pasirinkta“.
// 3. Naudokite pelytes išėjimo eventą, kad užrašas dingtų.
// 4. Papildomai: pakeiskite paveikslėlio rėmelį (border) kai pele užvedama.

// Komponentas Progresas
// 1. Sukurkite puslapio slinkimo turinį.
// 2. Viršuje pridėkite progresbarą (pvz., <div style={{ width: ${scrollPercent}% }}>).
// 3. Naudokite scrollinimo eventą, kad apskaičiuotų kiek procentų puslapio yra prasislinkta.
// 4. Atnaujinkite progresbaro plotį pagal scroll procentą.

// Komponentas Validacija
// 1. Sukurkite input laukelį, kur tikrinama ar įvestas skaičius tarp 1 ir 10.
// 2. Naudokite onBlur, kad patikrintų reikšmę.
// 3. Jei skaičius netinkamas – parodykite klaidą: „Skaicius turi būti tarp 1 ir 10“. Jei tinkamas – parodykite žinutę „Teisingas skaičius“.

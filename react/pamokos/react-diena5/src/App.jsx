import "./App.css";
import Skaiciuotuvas from "./components/Skaiciuotuvas";

function App() {
  return (
    <>
      <Skaiciuotuvas />
      <hr />
    </>
  );
}

export default App;

// Komponentas „SimboliuSkaicius“
// 1. Komponente sukurkite input lauką teksto įvedimui. Kiekvieno simbolio įvedimo metu (onInput) suskaičiuokite, kiek simbolių yra įvesta.
// 2. Išveskite skaičių konsolėje.

// Komponentas „CapsLockIspejimas“
// 1. Komponente sukurkite input lauką slaptažodžiui įvesti.
// 2. Naudokite onKeyPress ar onKeyDown tam, kad aptiktumėte ar paspaustas mygtukas yra didžiosiomis raidėmis (CapsLock).
// 3. Jei taip – išveskite į konsolę įspėjimą: „Įjungtas CapsLock!“.

// Komponentas „PaspaudimuSkaičiuokle“
// 1. Komponente sukurkite mygtuką.
// 2. Kiekvieną kartą paspaudus mygtuką (onClick), didinkite skaičių ir parodykite jį konsolėje.

// Komponentas „AtvirkstinisTekstas“
// 1. Komponente sukurkite input lauką tekstui.
// 2. Kiekvieno pakeitimo metu (onChange) išverskite tekstą atvirkščiai ir parodykite jį konsolėje. Pvz., įvedus abc, konsolėje rodyti cba.

// Komponentas „SlaptažodžioRodymas“
// 1. Sukurkite input lauką slaptažodžiui (type="password").
// 2. Sukurkite „Rodyti slaptažodį“ varnelę (checkbox).
// 3. Pažymėjus varnelę (onChange), pakeiskite input tipo reikšmę iš "password" į "text" ir atgal. Kiekvieną kartą rodomas slaptažodis turi būti išvedamas į konsolę.

// Komponentas „RaidžiųFiltras“
// 1. Sukurkite input lauką teksto įvedimui.
// 2. Sukurkite select arba radio pasirinkimą su reikšmėmis: „Tik raidės“, „Tik skaičiai“, „Viskas“.
// 3. Kiekvieno pakeitimo metu (onInput) filtruokite įvedamą tekstą pagal pasirinktą filtrą ir rodykite tik leistinus simbolius konsolėje.

// Komponentas „MygtukoSpalva“
// 1. Sukurkite mygtuką su pradine spalva (pvz., mėlyna).
// 2. Paspaudus mygtuką (onClick), pakeiskite jo spalvą į atsitiktinę (naudokite Math.random RGB ar HEX generavimui).
// 3. Išveskite pasirinktą spalvą konsolėje.

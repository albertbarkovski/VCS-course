// Komponentas „Zodis“
// 1. Komponente susikurkite kintamąjį „zodis“, kuris turėtų state. Prie jo kaip pradinė reikšmė priskirta tiesiog tuščios kabutės. Šį kintamąjį atvaizduokite paragrafe.
// 2. Sukurkite mygtuką, kuris ant paspaudimo iškviestų funkciją. Ši funkcija turėtų pakeisti žodžio kintamojo reikšmę į „pomidoras“.
// 3. Sukurkite dar vieną mygtuką, kuris ant paspaudimo iškviestų funkciją. Ši funkcija turėtų pakeisti žodžio kintamojo reikšmę į „agurkas“.

import { useState } from "react";

const Zodis = () => {
  const [zodis, setZodis] = useState("");

  const keiciamZodi = () => {
    setZodis("Pomidoras");
  };
  const keiciamZodi2 = () => {
    setZodis("Agurkas");
  };

  return (
    <div>
      <button onClick={keiciamZodi}>Keiciam zodi</button>
      <button onClick={keiciamZodi2}>Keiciam zodi</button>
      <p>Zodis:{zodis}</p>
    </div>
  );
};

export default Zodis;

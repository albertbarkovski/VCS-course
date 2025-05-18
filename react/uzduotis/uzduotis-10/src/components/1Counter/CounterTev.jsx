// Tėvinis komponentas „CounterTev“
// 1. Šiame komponente susikurkite counteriui sekti skirtą skaičiaus kintamąjį (kiek buvo atlikta paspaudimų). Išveskite šį kintamąjį paragrafe.
// 2. Iškvieskite komponentą „CounterMygtukai“.
// 3. Padarykite, kad gautumėte iš „CounterMygtukai“ komponento skaičiaus reikšmę, kuri reiškia per kiek turėtų būti pakeistas counterio kintamasis. Gavus reikšmę iš vaikinio komponento, atnaujinkite šio tėvinio komponento reikšmę pagal nurodytą pokytį iš vaikinio komponento.

import React, { useState } from "react";
import CounterMygtukai from "./CounterMygtukai";

const CounterTev = () => {
  const [skaicius, setSkaicius] = useState(0);

  const pagaunamReiksme = (sk) => {
    setSkaicius(skaicius + sk);
  };

  return (
    <div>
      <h2>CounterTev</h2>
      <p>{skaicius}</p>
      <CounterMygtukai atiduodamReiksme={pagaunamReiksme} />
    </div>
  );
};

export default CounterTev;

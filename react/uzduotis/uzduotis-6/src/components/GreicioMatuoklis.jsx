// Komponentas „GreicioMatuoklis“
// 1. Komponente susikurkite kintamąjį „greitis“, kuris turėtų state ir prie jo būtų priskirta pradinė reikšmė 0. Šį kintamąjį išveskite paragrafe.
// 2. Susikurkite kelis mygtukus, kurie leistų pasirinkti skirtingą greitį. Pvz, vienas mygtukas – 0 km/h, kitas – 10 km/h ir t.t.
// 3. Sukurkite vieną ar kelias funkcijas, kurios ant šių mygtukų paspaudimų pakeistų kintamojo greitis reikšmę į nurodytą prie mygtuko. Ir sujunkite šią funkciją/-jas prie mygtukų.
// 4. Susikurkite dar vieną funkciją, kuri tikrintų kintamojo greitis reikšmę ir išvestų kokį nors atsakymą, pvz jeigu greitis yra 0 – išvestų „stovite“, jei greitis daugiau nei 0 bet mažiau nei 25 – „važiuojate lėtai“, ir t.t. Iškvieskite šią funkciją dar viename paragrafe.

import { useState } from "react";

const GreicioMatuoklis = () => {
  const [greitis, naujaReiksme] = useState(0);

  const rinktis = () => {
    switch (greitis) {
      case 0:
        return "Stovite";
      case 10:
        return "begate";
      case 30:
        return "vaziuojate dviraciu";
      case 70:
        return "vaziuojate automobiliu";
    }
  };

  return (
    <div>
      <p>Greitis yra: {greitis}</p>
      <p>{rinktis()}</p>
      <button
        onClick={() => {
          naujaReiksme(0);
        }}
      >
        0kmh
      </button>
      <button
        onClick={() => {
          naujaReiksme(10);
        }}
      >
        10kmh
      </button>
      <button
        onClick={() => {
          naujaReiksme(30);
        }}
      >
        30kmh
      </button>
      <button
        onClick={() => {
          naujaReiksme(70);
        }}
      >
        70kmh
      </button>
    </div>
  );
};

export default GreicioMatuoklis;

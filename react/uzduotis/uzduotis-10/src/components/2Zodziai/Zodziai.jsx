// Aplankas „Zodziai“
// Tėvinis komponentas „ZodziuBendras“
// 1. Šiame komponente susikurkite žodžiams saugoti skirtą masyvą. Padarykite, kad vėliau jį eitų keisti (useState).
// 2. Jeigu masyve yra duomenų išspausdinkite šį masyvą nerikiuotame html sąraše (ul žymoje), kiekvieną žodį išvedant atskirame sąrašo elemente. O jeigu masyve nėra duomenų, tada išspausdinkite paragrafą su tekstu „Deja, nėra įvestos informacijos“.
// 3. Iškvieskite komponentą „ZodziuIvedimas“.
// 4. Padarykite, kad įvedus žodį komponente „ZodziuIvedimas“, šis „ZodziuBendras“ komponentas gautų įvestą informaciją ir papildytų jame turimą žodžių masyvą.
// 5. Susikurkite funkciją, kuri suranda ir išveda kuris žodis yra ilgiausias. Šią funkciją iškvieskite paragrafe. Tačiau paragrafo nerodykite jeigu nėra įvestų žodžių į masyvą.

import React from "react";
import { useState } from "react";
import ZodziuIvedimas from "./ZodziuIvedimas";

const Zodziai = () => {
  const [zodziai, setZodziai] = useState([]);

  const pagaunamZodi = (zodis) => {
    setZodziai([...zodziai, zodis]);
  };

  const ilgiausisZodis = () => {
    let ilgiausiasIlgis = 0;
    let ilgiausiZodziai = [];

    zodziai.forEach((zodis) => {
      if (zodis.length > ilgiausiasIlgis) {
        ilgiausiasIlgis = zodis.length;
        ilgiausiZodziai = [zodis];
      } else if (zodis.length === ilgiausiasIlgis) {
        ilgiausiZodziai.push(zodis);
      }
    });
    return ilgiausiZodziai;
  };
  return (
    <>
      <div>
        {zodziai.length > 0 ? (
          <ul>
            {zodziai.map((zodis, index) => (
              <li key={index}>{zodis}</li>
            ))}
          </ul>
        ) : (
          "Deja, nėra įvestos informacijos"
        )}
      </div>
      <ZodziuIvedimas perduodamZodi={pagaunamZodi} />
      {zodziai.length > 0 && (
        <div>
          <h4>Ilgiausias zodis</h4>
          <ul>
            {ilgiausisZodis().map((zodis, i) => (
              <li key={i}>{zodis}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Zodziai;

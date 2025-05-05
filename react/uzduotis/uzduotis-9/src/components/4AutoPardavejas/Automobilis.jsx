// Vaikinis komponentas „Automobilis“
// 1. Padarykite, kad šis komponentas priimtų informaciją per props arba išskaidytų gauto objekto informaciją arba prisiskirkite gautą objektą prie atskiro kintamojo.
// 2. Išveskite visą gautą objekto informaciją.

import React from "react";

const Automobilis = ({ marke, modelis, metai, rida, prasomaSuma }) => {
  return (
    <div>
      <h4>
        {marke} {modelis}
      </h4>
      <p>{metai}</p>
      <p>Rida {rida}</p>
      <p>Prasoma suma {prasomaSuma}€</p>
    </div>
  );
};

export default Automobilis;

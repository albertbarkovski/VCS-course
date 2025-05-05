// Vaikinis komponentas „Naujiena“
// 1. Padarykite, kad šis komponentas galėtų priimti naujienos informaciją. Galite daryti per props, galite skaidyti objektą, galite prisiskirti prie vidinio kintamojo ar kintamųjų.
// 2. Gautą informaciją išveskite kaip norite.
// 3. Įdėkite patikrinimą (atskiroje funkcijoje arba tiesiai komponento html dalyje), kad jeigu naujieną peržiūrėjo 1000 ar daugiau kartų, tai prie pavadinimo rašytų „HOT“, kitu atveju prie pavadinimo nieko papildomo neatsirastų.
import React from "react";

const Naujiena = ({ pavadinimas, perziurosKiekis, tekstas }) => {
  return (
    <div>
      <h4>{pavadinimas}</h4>
      <p>
        Perziuros: {perziurosKiekis}
        {perziurosKiekis > 1500 ? <strong> - HOT</strong> : ""}
      </p>
      <p>{tekstas}</p>
    </div>
  );
};

export default Naujiena;

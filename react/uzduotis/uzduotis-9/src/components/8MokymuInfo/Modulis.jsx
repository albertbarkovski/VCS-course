// Vaikinis komponentas „Modulis“
// 1. Padarykite, kad šis komponentas galėtų priimti modulio informaciją, tai atlikite pasirinktu būdu.
// 2. Visą gautą modulio informaciją išveskite norimu būdu.
import React from "react";

const Modulis = ({ pavadinimas, trukme }) => {
  return (
    <div>
      <h3>{pavadinimas}</h3>
      <p>Trukme {trukme} val</p>
    </div>
  );
};

export default Modulis;

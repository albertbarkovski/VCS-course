// Komponentas Uzvedimas
// 1. Sukurkite bet kokį teksto bloką ar mygtuką.
// 2. Naudokite eventą, kad užvedus pelę ant elemento atsirastų tekstas: „Pele užvesta!“.
// 3. Naudokite eventą, kad nutraukus pelės užvedimą, tekstas išnyktų.
// 4. Papildomai: keiskite elemento fono spalvą užvedus pelę.

import { useState } from "react";

const Uzvedimas = () => {
  const [tekstas, setTekstas] = useState("");
  const [fonas, setFonas] = useState("");

  return (
    <div>
      <button
        onMouseEnter={() => {
          setTekstas("Pele uzvesta");
          setFonas("black");
        }}
        onMouseLeave={() => {
          setTekstas("");
          setFonas("");
        }}
        style={{ backgroundColor: fonas }}
      >
        Mygtukas
      </button>
      <p>{tekstas}</p>
    </div>
  );
};

export default Uzvedimas;

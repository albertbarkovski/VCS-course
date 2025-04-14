// Komponentas VardoIvedimas
// 1. Sukurkite įvesties laukelį (<input>).
// 2. Naudokite onInput, kad į kiekvieną vartotojo įrašytą simbolį atnaujintų būsenoje saugomą vardą.
// 3. Po įvesties laukeliu rodykite tekstą: „Sveikas, [vardas]!“.
// 4. Pridėkite mygtuką, kuris paspaudus ištrina įvestą vardą (nustato būseną į tuščią stringą).

import { useState } from "react";

const VardoIvedimas = () => {
  const tekstoHandler = (e) => {
    naujasSimbolis(e.target.value);
  };

  const [simboliai, naujasSimbolis] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="vardas"
        onInput={tekstoHandler}
        value={simboliai}
      />
      <p>Labas, {simboliai}</p>
      <button
        onClick={() => {
          naujasSimbolis("");
        }}
      >
        Istrinti
      </button>
    </div>
  );
};

export default VardoIvedimas;

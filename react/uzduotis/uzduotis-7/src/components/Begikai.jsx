// Komponentas „Begikai“
// 1. Susikurkite du įvesties laukelius (input), kur vartotojas galėtų įvesti dviejų skirtingų bėgikų laiką (per kiek sekundžių įveikė 100 metrų distanciją).
// 2. Komponente susikurkite du kintamuosius su būsena (state), kur programa saugotų abiejų bėgikų nubėgtą laiką.
// 3. Vartotojui įvedant laikus į įvesties laukelius, iškart turėtų užsisaugoti informacija į kintamuosius.
// 4. Sukurkite papildomą funkciją, kuri surastų kuris bėgikas buvo greitesnis (mažesnis laikas) ir išvestų per kiek laiko buvo greitesnis. Šią funkciją iškvieskite paragrafe.

import { useState } from "react";

const Begikai = () => {
  const [pirmoLaikas, setPirmoLaika] = useState("");
  const [antroLaikas, setAntroLaika] = useState("");

  const pirmoHandler = (event) => {
    setPirmoLaika(event.target.value);
  };
  const antroHandler = (event) => {
    setAntroLaika(event.target.value);
  };

  const kasGreiciau = () => {
    if (!pirmoLaikas || !antroLaikas) return;
    if (pirmoLaikas > antroLaikas) {
      return "Antras begikas greitesnis";
    } else if (pirmoLaikas < antroLaikas) {
      return "Pirmas begikas greitesnis";
    } else {
      return "Begiku greiciai vienodi";
    }
  };

  return (
    <div>
      <h2>100m distancija</h2>
      <div>
        <label htmlFor="PirmasBegikas">Pirmo begiko laikas:</label>
        <input onInput={pirmoHandler} type="time" step={1} id="pirmasBegikas" />
      </div>
      <div>
        <label htmlFor="AntrasBegikas">Antro begiko laikas:</label>
        <input onInput={antroHandler} type="time" step={1} id="antrasBegikas" />
      </div>
      <div>
        <p>
          Begiku laikas: {pirmoLaikas} ir {antroLaikas}
        </p>
        <p>{kasGreiciau()}</p>
      </div>
    </div>
  );
};

export default Begikai;

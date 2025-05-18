// Vaikinis komponentas „KnygosIvedimas“
// 1. Šiame komponente susikurkite formą, kuri leistų suvesti knygos duomenis (pavadinimą, kainą, metus).
// 2. Suvedus knygos informaciją ir patvirtinus formą (submit), turėtų būti suformuotas naujos knygos objektas ir išsiųstas į tėvinį komponentą.
// 3. Po įvedimo ir informacijos išsiuntimo, visi įvesties laukeliai turi būti išvalyti.

import React, { useRef } from "react";

const KnygosIvedimas = ({ perdutotiData }) => {
  const pavadinimasRef = useRef();
  const kainaRef = useRef();
  const metaiRef = useRef();

  const addKnyga = (event) => {
    event.preventDefault();

    const pavadinimas = pavadinimasRef.current.value;
    const kaina = kainaRef.current.valueAsNumber;
    const metai = metaiRef.current.valueAsNumber;

    if (!pavadinimas && !kaina && !metai) return;

    perdutotiData(pavadinimas, kaina, metai);

    pavadinimasRef.current.value = "";
    kainaRef.current.value = "";
    metaiRef.current.value = "";
  };

  return (
    <div>
      <form action="suvestiKnyga" onSubmit={addKnyga}>
        <div>
          <label htmlFor="pavadinimas">Knygos Pavadinimas?</label>
          <br />
          <input type="text" id="pavadinimas" ref={pavadinimasRef} />
        </div>{" "}
        <div>
          <label htmlFor="kaina">Knygos Kaina?</label>
          <br />
          <input type="text" id="kaina" ref={kainaRef} />
        </div>{" "}
        <div>
          <label htmlFor="metai">Knygos Metai?</label>
          <br />
          <input type="text" id="metai" ref={metaiRef} />
        </div>
        <div>
          <button type="submit">Prideti</button>
        </div>
      </form>
    </div>
  );
};

export default KnygosIvedimas;

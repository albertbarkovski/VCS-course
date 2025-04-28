// Komponentas „Skaicius“
// 1. Komponente susikurkite vieną įvesties laukelį (input) ir mygtuką. Vartotojas turės įvesti į laukelį bet kokį norimą skaičių ir programa pasiims iš input reikšmę tik po mygtuko paspaudimo.
// 2. Komponente susikurkite kintamąjį su būsena (state), kuriame būtų saugoma skaičiaus reikšmė (kai ji bus paimta).
// 3. Paspaudus ant mygtuko, paimkite reikšmę iš laukelio ir įdėkite į turimą skaičiaus kintamąjį.
// 4. Išveskite šio kintamojo reikšmę paragrafe po įvesties laukeliu ir mygtuko.
// 5. Susikurkite funkciją, kuri patikrintų ar skaičius teigiamas ar neigiamas. Iškvieskite šią funkcija naujame paragrafe.
// 6. Susikurkite funkciją, kuri patikrintų ar skaičius yra lyginis. Iškvieskite šią funkciją naujame paragrafe.
// 7. Padarykite, kad po įvedimo (mygtuko paspaudimo) laukelis išsivalytų.
// 8. Padarykite, kad paragrafai, išvedantys skaičių ir su juo susijusius atsakymus nebūtų rodomi kol skaičius nėra suvestas.

import { useState } from "react";
import { useRef } from "react";

const Skaicius = () => {
  const inputRef = useRef();

  const [sk, setSk] = useState("");

  const getData = () => {
    if (isNaN(inputRef.current.valueAsNumber)) return;
    setSk(inputRef.current.valueAsNumber);

    inputRef.current.value = "";
  };

  const arTeigiamas = () => {
    return sk > 0 ? "Teigiamas" : "Neigiamas";
  };

  const arLyginis = () => {
    return sk % 2 == 0 ? "Lyginis" : "Nelyginis";
  };
  return (
    <div>
      <label htmlFor="skaicius">
        <strong>Iveskiti skaiciu</strong>
      </label>
      <br />
      <input type="number" ref={inputRef} />
      <button onClick={getData}>Press</button>
      {!isNaN(sk) && <p>Skaicius: {sk}</p>}
      {!isNaN(sk) && <p>{arTeigiamas()}</p>}
      {!isNaN(sk) && <p>{arLyginis()}</p>}
    </div>
  );
};

export default Skaicius;

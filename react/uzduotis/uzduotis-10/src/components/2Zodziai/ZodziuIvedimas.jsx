// Vaikinis komponentas „ZodziuIvedimas“
// 1. Sukurkite formą, kuri turėtų įvesties laukelį ir mygtuką. Padarykite, kad po formos patvirtinimo (submit), įvesties laukelyje turimas žodis būtų paimtas ir išsiųstas į tėvinį komponentą.
// 2. Taip pat, padarykite, kad jeigu žmogus bando patvirtinti tuščią įvesties laukelį (nieko neįvedęs), tai kad submit funkcija nieko nedaryt0hyų (galima su if (inputoRef.current.value == '‘) { return }).
// 3. Po tvarkingo informacijos išsiuntimo į tėvinį komponentą, įvesties laukelis turėtų išsivalyti.

import React, { useRef } from "react";

const ZodziuIvedimas = ({ perduodamZodi }) => {
  const naujasZodisRef = useRef();

  const addZodis = (event) => {
    event.preventDefault();
    const zodis = naujasZodisRef.current.value;

    if (zodis === "") {
      return;
    }

    perduodamZodi(zodis);

    naujasZodisRef.current.value = "";
  };
  return (
    <div>
      <form onSubmit={addZodis}>
        <label htmlFor="zodis">Iveskite zodi:</label>
        <input type="text" id="zodis" ref={naujasZodisRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ZodziuIvedimas;

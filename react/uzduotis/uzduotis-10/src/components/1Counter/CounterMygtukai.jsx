// Vaikinis komponentas „CounterMygtukai“
// 1. Šiame komponente susikurkite bent 3 mygtukus, kur kiekvienas pasakytų skirtingą counterio pokyčio modifikaciją (+1, +2, +5).
// 2. Padarykite, kad paspaudus ant atitinkamo mygtuko, būtų išsiųsta atitinkama paspaudimo reikšmę į tėvinį komponentą.

import React from "react";

const CounterMygtukai = (props) => {
  const pagautiSk = (skaicius) => {
    props.atiduodamReiksme(skaicius);
  };
  return (
    <div>
      <button onClick={() => pagautiSk(1)}>+1</button>
      <button onClick={() => pagautiSk(2)}>+2</button>
      <button onClick={() => pagautiSk(5)}>+5</button>
      <button onClick={() => pagautiSk(10)}> +10</button>
    </div>
  );
};

export default CounterMygtukai;

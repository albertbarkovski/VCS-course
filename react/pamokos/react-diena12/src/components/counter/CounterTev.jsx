import React, { useState } from "react";
import CounterMygtukai from "./CounterMygtukai";

const CounterTev = () => {
  const [skaicius, setSkaicius] = useState(0);

  const pagaunamReiksme = (sk) => {
    setSkaicius(skaicius + sk);
  };

  return (
    <div>
      <h2>CounterTev</h2>
      <p>{skaicius}</p>
      <CounterMygtukai atiduodamReiksme={pagaunamReiksme} />
    </div>
  );
};

export default CounterTev;

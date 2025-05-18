import React from "react";
import Mygtukas from "./Mygtukas";
import { useState } from "react";

const Pasirinkimai = () => {
  const [pasirinkta, setPasirenkta] = useState("");

  const pagaunamReiksme = (argumentas) => {
    setPasirenkta(argumentas);
  };

  let miestai = ["Vinius", "Kaunas", "Klaipeda"];

  return (
    <div>
      <h2>Pasirinkite miesta</h2>
      {miestai.map((miestas, i) => (
        <Mygtukas key={i} miestas={miestas} griztaReiksme={pagaunamReiksme} />
      ))}
      <p>Pasirenktas miestas: {pasirinkta}</p>
    </div>
  );
};

export default Pasirinkimai;

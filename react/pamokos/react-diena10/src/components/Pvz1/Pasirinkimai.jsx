import React from "react";
import Mygtukas from "./Mygtukas";
import { useState } from "react";

const Pasirinkimai = () => {
  let miestai = ["Vinius", "Kaunas", "Klaipeda"];
  const [pasirinkta, setPasirenkta] = useState("");
  return (
    <div>
      <h2>Pasirinkite miesta</h2>
      {miestai.map((miestas) => (
        <>
          <Mygtukas miestas={miestas} />
        </>
      ))}
      <p>Pasirenktas miestas: {pasirinkta}</p>
    </div>
  );
};

export default Pasirinkimai;

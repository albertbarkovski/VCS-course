import React from "react";
import Mygtukas from "./Mygtukas";

const Pasirinkimai = () => {
  let miestai = ["Vinius", "Kaunas", "Klaipeda"];

  return (
    <div>
      <h2>Pasirinkimai miestu</h2>
      {miestai.map((miestas) => (
        <></>
      ))}
      <Mygtukas />
    </div>
  );
};

export default Pasirinkimai;

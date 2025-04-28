import { useState } from "react";

const Pvz1 = () => {
  const [zmogus, setZmogus] = useState({
    vardas: "Jonas",
    pavarde: "Jonelis",
    amzius: 37,
  });

  const pakeistiVarda = () => {
    setZmogus({ ...zmogus, vardas: "Tomas" });
  };

  const pakeistiAmziu = () => {
    setZmogus({ ...zmogus, amzius: "pidisokas" });
  };

  return (
    <div>
      <h2>Zmogus</h2>
      <p>{zmogus.vardas}</p>
      <p>{zmogus.pavarde}</p>
      <p>{zmogus.amzius}</p>
      <button onClick={pakeistiVarda}>Keisti varda</button>
      <button onClick={pakeistiAmziu}>Keisti amziu</button>
    </div>
  );
};

export default Pvz1;

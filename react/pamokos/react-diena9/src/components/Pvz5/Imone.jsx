import Darbuotojas from "./Darbuotojas";

const Imone = () => {
  let darbuotojas = {
    vardas: "Jonas",
    pavarde: "Jonelis",
    amzius: 25,
    pareigos: "Programuotojas",
    atlyginimas: 1500,
  };
  let darbuotojas2 = {
    vardas: "Petras",
    pavarde: "Pelis",
    amzius: 35,
    pareigos: "Valytojas",
    atlyginimas: 2000,
  };
  return (
    <div>
      <h2>Imone</h2>
      <Darbuotojas darbuotojas={darbuotojas} />
      <Darbuotojas darbuotojas={darbuotojas2} />
    </div>
  );
};

export default Imone;

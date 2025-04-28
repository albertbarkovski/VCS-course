import Automobilis from "./Automobilis";

const Servisas = () => {
  let automobiliai = [
    { marke: "BMW", modelis: 335 },
    { marke: "Volvo", modelis: "XC90" },
    { marke: "Audi", modelis: "A8" },
    { marke: "Skoda", modelis: "Octavia" },
    { marke: "Opel", modelis: "Zafira" },
  ];
  return (
    <div>
      <h2>Servisas</h2>
      {automobiliai.map((masina, i) => (
        <Automobilis key={i} auto={masina} />
      ))}
    </div>
  );
};

export default Servisas;

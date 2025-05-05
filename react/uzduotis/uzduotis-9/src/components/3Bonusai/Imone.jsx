// Aplankas „Bonusai“
// Tėvinis komponentas „Imone“
// 1. Šiame komponente kelis kartus kvieskite komponentą „Darbuotojas“. Kiekvieną kartą šiam komponentui perduodant šią informaciją: darbuotojo vardas ir pavardė; suteikiamo kalėdinio bonuso dydis. Informaciją galite perduoti rašant tiesiai prie kviečiamo komponento arba susikuriant papildomų kintamųjų.

import Darbuotojas from "./Darbuotojas";

const Imone = () => {
  const darbuotojai = [
    { vardas: "Jonas", pavarde: "Jonelis", premija: 0 },
    { vardas: "Petras", pavarde: "Zig", premija: 0 },
    { vardas: "Albert", pavarde: "Bar", premija: 10 },
    { vardas: "Agne", pavarde: "White", premija: 99 },
    { vardas: "Savana", pavarde: "Black", premija: 150 },
  ];
  return (
    <>
      <div>
        {darbuotojai.map((asmuo, i) => (
          <Darbuotojas
            key={i}
            vardas={asmuo.vardas}
            pavarde={asmuo.pavarde}
            premija={asmuo.premija}
          />
        ))}
      </div>
    </>
  );
};
export default Imone;

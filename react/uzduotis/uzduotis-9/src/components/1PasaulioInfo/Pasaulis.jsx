// Aplankas „PasaulioInfo“
// Tėvinis komponentas „Pasaulis“
// 1. Iškvieskite komponentą „Salis“ kelis kartus, jam perduodant skirtingą informaciją (bandykite vieną informaciją perduoti įrašant tiesiai argumentuose/atributuose ir kitą informaciją iš kintamųjų). Komponentui „Salis“ kiekvieną kartą perduokite šalies informaciją ir kuriame žemyne ta šalis randasi.

import Salis from "./Salis";

const Pasaulis = () => {
  const salys = [
    { pavadinimas: "Lietuva", ziemynas: "Europa" },
    { pavadinimas: "USA", ziemynas: "Amerika" },
    { pavadinimas: "Switzerland", ziemynas: "Europa" },
    { pavadinimas: "Zimbabwe", ziemynas: "Afrika" },
  ];

  return (
    <div>
      <div>
        {salys.map((salis, i) => (
          <Salis
            key={i}
            pavadinimas={salis.pavadinimas}
            ziemynas={salis.ziemynas}
          />
        ))}
      </div>
      <Salis pavadinimas="Japonija" ziemynas="Azija" />
    </div>
  );
};

export default Pasaulis;

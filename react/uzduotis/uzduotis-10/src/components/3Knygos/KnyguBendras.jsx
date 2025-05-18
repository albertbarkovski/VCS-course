// Aplankas „Knygos“
// Tėvinis komponentas „KnyguBendras“
// 1. Šiame komponente susikurkite knygų masyvą, kuriame bus saugomi knygų objektai su informacija (knygos pavadinimas, kaina, metai). Padarykite, kad šį masyvą būtų galima vėliau atnaujinti (sujunkite su useState).
// 2. Iškvieskite komponentą „KnygosIvedimas“.
// 3. Padarykite, kad gavus informaciją iš „KnygosIvedimas“ komponento, naujai gauta knyga būtų įdėta į turimą knygų masyvą.
// 4. Iškvieskite komponentą „KnyguSpausdinimas“, kuriam būtų perduotas turimas knygų masyvas.
// 5. Sukurkite mygtuką, kuris išvalytų turimą knygų masyvą. Padarykite, kad jis matytųsi tik jeigu jau bus pridėtų knygų.

import React, { useState } from "react";
import KnygosIvedimas from "./KnygosIvedimas";
import KnyguSpausdinimas from "./KnyguSpausdinimas";

const KnyguBendras = () => {
  const [knyguSarasas, setKnyga] = useState([
    { pavadinimas: "knygaPav", kaina: 21, metai: 2022 },
  ]);

  const gautiData = (knyga) => {
    setKnyga([{ knyga }, ...knyguSarasas]);
  };

  const valytiSarasa = () => {
    setKnyga("");
  };

  return (
    <div>
      <KnygosIvedimas perdutotiData={gautiData} />
      <KnyguSpausdinimas perdutotiData={gautiData} />
      {knyguSarasas.length > 0 && (
        <button onClick={valytiSarasa}>Isvalyti Sarasa</button>
      )}
    </div>
  );
};

export default KnyguBendras;

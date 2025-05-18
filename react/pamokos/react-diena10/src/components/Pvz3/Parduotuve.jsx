import React, { useState } from "react";
import PridetiPreke from "./PridetiPreke";
import PrekiuSarasas from "./PrekiuSarasas";

const Parduotuve = () => {
  const testData = [
    { pavadinimas: "Knyga", kiekis: 4, kaina: 8 },
    { pavadinimas: "Zurnalas", kiekis: 12, kaina: 3 },
    { pavadinimas: "Lego", kiekis: 6, kaina: 40 },
  ];

  const [prekes, setPrekes] = useState(testData);

  const gaunamPreke = (preke) => {
    setPrekes([preke, ...prekes]);
  };

  const gaudomNupirko = (preke) => {
    const indx = prekes.findIndex((pr) => pr === preke);
    console.log(indx);
    if (preke.kiekis > 0) {
      preke.kiekis--;

      const naujasPrekesMasyvas = prekes;
      naujasPrekesMasyvas[indx] = preke;
      setPrekes([...naujasPrekesMasyvas]);
    }
  };

  return (
    <div>
      <h2>Parduotuve</h2>
      <PridetiPreke siunciamPreke={gaunamPreke} />
      <PrekiuSarasas data={prekes} nupirko={gaudomNupirko} />
    </div>
  );
};

export default Parduotuve;

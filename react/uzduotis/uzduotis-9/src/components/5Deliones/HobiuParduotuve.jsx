// Aplankas „Deliones“
// Tėvinis komponentas „HobiuParduotuve“
// 1. Šiame komponente susikurkite tris atskirus objektus, kuriuose būtų saugoma informacija apie dėliones (pavadinimas; detalių kiekis (pvz 500, 1000); plotis cm; aukštis cm).
// 2. Kvieskite komponentą „Delione“ tris kartus, kiekvieną kartą perduodant vis kito turimo dėlionės objekto informaciją.

import Delione from "./Delione";

const HobiuParduotuve = () => {
  const delionesMasyvas = [
    {
      pavadinimas: "Paryžiaus panorama",
      detaliuKiekis: 1000,
      plotis: 70,
      aukstis: 50,
    },
    {
      pavadinimas: "Žymios pasaulio vietos",
      detaliuKiekis: 500,
      plotis: 60,
      aukstis: 40,
    },
    {
      pavadinimas: "Gamta ir miškai",
      detaliuKiekis: 1500,
      plotis: 80,
      aukstis: 60,
    },
    {
      pavadinimas: "Pasaulio žemėlapis",
      detaliuKiekis: 2000,
      plotis: 90,
      aukstis: 70,
    },
    {
      pavadinimas: "Vaizdai iš kosmoso",
      detaliuKiekis: 1200,
      plotis: 75,
      aukstis: 55,
    },
    {
      pavadinimas: "Sodininkystė ir gėlės",
      detaliuKiekis: 600,
      plotis: 65,
      aukstis: 50,
    },
    {
      pavadinimas: "Istoriniai momentai",
      detaliuKiekis: 800,
      plotis: 70,
      aukstis: 50,
    },
    {
      pavadinimas: "Oceanų pasaulis",
      detaliuKiekis: 1000,
      plotis: 80,
      aukstis: 60,
    },
    {
      pavadinimas: "Miško žvėrys",
      detaliuKiekis: 500,
      plotis: 60,
      aukstis: 45,
    },
    {
      pavadinimas: "Automobiliai per amžius",
      detaliuKiekis: 1500,
      plotis: 85,
      aukstis: 65,
    },
  ];
  return (
    <div>
      {delionesMasyvas.map((delione, i) => (
        <Delione
          key={i}
          pavadinimas={delione.pavadinimas}
          detaliuKiekis={delione.detaliuKiekis}
          plotis={delione.plotis}
          aukstis={delione.aukstis}
        />
      ))}
    </div>
  );
};

export default HobiuParduotuve;

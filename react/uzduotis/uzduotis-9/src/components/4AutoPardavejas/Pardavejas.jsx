// Aplankas „AutoPardavejas“
// Tėvinis komponentas „Pardavejas“
// 1. Šiame komponente susikurkite objektą „automobilis“ su informacija (markė, modelis, metai, rida, prašoma pinigų suma, ...).
// 2. Kvieskite komponentą „Automobilis“ ir jam perduokite turimo objekto informaciją.

import Automobilis from "./Automobilis";

const Pardavejas = () => {
  const automobiliuMasyvas = [
    {
      marke: "Volkswagen",
      modelis: "Golf",
      metai: 2019,
      rida: 35000,
      prasomaSuma: 15000,
    },
    {
      marke: "Toyota",
      modelis: "Corolla",
      metai: 2018,
      rida: 42000,
      prasomaSuma: 14000,
    },
    {
      marke: "BMW",
      modelis: "320i",
      metai: 2020,
      rida: 25000,
      prasomaSuma: 25000,
    },
    {
      marke: "Audi",
      modelis: "A4",
      metai: 2017,
      rida: 60000,
      prasomaSuma: 16000,
    },
    {
      marke: "Mercedes",
      modelis: "C-Class",
      metai: 2019,
      rida: 30000,
      prasomaSuma: 28000,
    },
    {
      marke: "Ford",
      modelis: "Focus",
      metai: 2016,
      rida: 75000,
      prasomaSuma: 9500,
    },
    {
      marke: "Hyundai",
      modelis: "Elantra",
      metai: 2020,
      rida: 20000,
      prasomaSuma: 16000,
    },
    {
      marke: "Skoda",
      modelis: "Octavia",
      metai: 2018,
      rida: 40000,
      prasomaSuma: 13000,
    },
    {
      marke: "Nissan",
      modelis: "Qashqai",
      metai: 2021,
      rida: 15000,
      prasomaSuma: 27000,
    },
    {
      marke: "Honda",
      modelis: "Civic",
      metai: 2019,
      rida: 30000,
      prasomaSuma: 17000,
    },
  ];
  return (
    <div>
      {automobiliuMasyvas.map((auto, i) => (
        <Automobilis
          key={i}
          marke={auto.marke}
          modelis={auto.modelis}
          metai={auto.metai}
          rida={auto.rida}
          prasomaSuma={auto.prasomaSuma}
        />
      ))}
    </div>
  );
};

export default Pardavejas;

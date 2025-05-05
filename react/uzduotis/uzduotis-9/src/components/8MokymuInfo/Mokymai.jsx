// Aplankas „MokymuInfo“
// Tėvinis komponentas „Mokymai“
// 1. Komponente susikurti objektų masyvą. Šiame masyve kiekvienas objektas yra modulis, o apie kiekvieną modulį galima pasakyti: pavadinimas (pvz, html, css, javascript, react, ...); trukmė val.
// 2. Eikite per turimą masyvą su map funkcija. Ties kiekvienu moduliu kvieskite komponentą „Modulis“ ir jam perduokite turimo modulio informaciją.

import Modulis from "./Modulis";

const Mokymai = () => {
  const moduliai = [
    {
      pavadinimas: "HTML",
      trukme: 10,
    },
    {
      pavadinimas: "CSS",
      trukme: 12,
    },
    {
      pavadinimas: "JavaScript",
      trukme: 20,
    },
    {
      pavadinimas: "React",
      trukme: 15,
    },
    {
      pavadinimas: "Node.js",
      trukme: 18,
    },
    {
      pavadinimas: "Git",
      trukme: 8,
    },
    {
      pavadinimas: "TypeScript",
      trukme: 14,
    },
    {
      pavadinimas: "Webpack",
      trukme: 10,
    },
    {
      pavadinimas: "SQL",
      trukme: 16,
    },
    {
      pavadinimas: "GraphQL",
      trukme: 12,
    },
  ];
  return (
    <div>
      {moduliai.map((modul, i) => (
        <Modulis
          key={i}
          pavadinimas={modul.pavadinimas}
          trukme={modul.trukme}
        />
      ))}
    </div>
  );
};

export default Mokymai;

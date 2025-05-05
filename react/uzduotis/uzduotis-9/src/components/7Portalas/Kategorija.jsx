// Aplankas „Portalas“
// Tėvinis komponentas „Kategorija“
// 1. Komponente susikurkite objektų masyvą. Šiame masyve kiekvienas objektas, tai naujiena, o apie kiekvieną naujieną turi būti aprašyta: jos pavadinimas; peržiūrų kiekis; kažkiek tekstuko.

import Naujiena from "./Naujiena";

// 2. Eikite per visas turimas naujienas su map funkcija. Šioje funkcijoje kvieskite komponentą „Naujiena“, jam perduodant turimos naujienos objektą.
const Kategorija = () => {
  const naujienos = [
    {
      pavadinimas: "Nauja technologija revoliucionuoja pasaulį",
      perziurosKiekis: 1200,
      tekstas:
        "Pasaulinės technologijos lyderės pristatė naują produktą, kuris gali pakeisti viską.",
    },
    {
      pavadinimas: "Vyriausybė pristatė naujas švietimo reformas",
      perziurosKiekis: 890,
      tekstas:
        "Naujos reformos siekia pagerinti švietimo kokybę ir suteikti daugiau galimybių jaunimui.",
    },
    {
      pavadinimas: "Rinka pasiekė naujus rekordus",
      perziurosKiekis: 2500,
      tekstas:
        "Akcijų rinka šiuo metu rodo teigiamą tendenciją, pasiekdama naujus rekordus visame pasaulyje.",
    },
    {
      pavadinimas: "COVID-19 vakcinos platinimas visame pasaulyje",
      perziurosKiekis: 5000,
      tekstas:
        "Naujos vakcinos jau pasiekė milijonus žmonių, o tai padeda kovoti su pandemija.",
    },
    {
      pavadinimas: "Lietuvos futbolo rinktinė laimėjo svarbias rungtynes",
      perziurosKiekis: 3200,
      tekstas:
        "Lietuvos futbolo rinktinė triumfavo paskutinėse pasaulio čempionato atrankos rungtynėse.",
    },
  ];
  return (
    <div>
      {naujienos.map((naujiena, i) => (
        <Naujiena
          key={i}
          pavadinimas={naujiena.pavadinimas}
          perziurosKiekis={naujiena.perziurosKiekis}
          tekstas={naujiena.tekstas}
        />
      ))}
    </div>
  );
};

export default Kategorija;

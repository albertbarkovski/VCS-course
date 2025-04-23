// Komponentas „TrysKepyklos“
// 1. Komponente susikurkite vieną įvesties laukelį, kur vartotojas galės suvesti dienos užsakymų kiekį.
// 2. Taip pat, susikurkite tris laukelius trims jo turimoms kepykloms įvesti (kiek užsakymų kuri kepyklą tą dieną galėtų įgyvendinti).
// 3. Susikurkite keturis atitinkamus kintamuosius su būsenomis (state). Vienas kintamasis saugos informaciją kiek turima užsakymų, kiti trys – kiekvienos atskiros kepyklos pajėgumą.
// 4. Padarykite kad įvykus pasikeitimams įvesties laukeliuose, informacija iš jų užsisaugotų atitinkamuose kintamuosiuose.
// 5. Susikurkite funkciją, kuri įvertins ar kepyklos spės viską įgyvendinti. Bendroje sumoje tai ką pagamina visos trys kepyklos turėtų būti lygu arba daugiau užsakymams. Išveskite atitinkamą atsakymą (spėja / nespėja) ir jeigu nespėja dar išveskite kiek nespės įgyvendinti. Iškvieskite šią funkciją paragrafe.

import { useState } from "react";

const TrysKepyklos = () => {
  const [uzsakymai, setUzsakymai] = useState("");
  const [pirmas, setPirmas] = useState("");
  const [antras, setAntras] = useState("");
  const [trecias, setTrecias] = useState("");

  const uzsakymaiHandler = (e) => {
    setUzsakymai(e.target.value);
  };
  const pirmasHandler = (e) => {
    setPirmas(e.target.value);
  };
  const antrasHandler = (e) => {
    setAntras(e.target.value);
  };
  const treciasHandler = (e) => {
    setTrecias(e.target.value);
  };

  const arSpeja = () => {
    let bendraiUzsakymu =
      parseInt(pirmas) + parseInt(antras) + parseInt(trecias);
    if (!uzsakymai || !pirmas || !antras || !trecias) return;
    if (uzsakymai <= bendraiUzsakymu) {
      return (
        <div>
          <strong>Uzsakyma pagaminti spes</strong>
          <p>Liks {bendraiUzsakymu - uzsakymai} kepinius</p>
        </div>
      );
    } else {
      return (
        <div>
          <strong>Uzsakymo pagamint nespes</strong>
          <p>Truksta {uzsakymai - bendraiUzsakymu} kepiniu</p>
        </div>
      );
    }
  };

  return (
    <div>
      <strong>
        <label htmlFor="dienosUzsakymas">Kiek uzsake siandien?</label>{" "}
      </strong>
      <input onChange={uzsakymaiHandler} type="number" />
      <div>
        <label htmlFor="pirmaKepyklaUzs">Pirma Kepykla iveiks uzsakymu: </label>

        <input onChange={pirmasHandler} type="text" />
      </div>
      <div>
        <label htmlFor="antraKepyklaUzs">Antra Kepykla iveiks uzsakymu: </label>

        <input onChange={antrasHandler} type="text" />
      </div>
      <div>
        <label htmlFor="treciaKepyklaUzs">
          Trecia Kepykla iveiks uzsakymu:{" "}
        </label>

        <input onChange={treciasHandler} type="text" />
      </div>
      <p>{arSpeja()}</p>
    </div>
  );
};

export default TrysKepyklos;

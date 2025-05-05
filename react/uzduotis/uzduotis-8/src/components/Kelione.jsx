// Komponentas „Kelione“
// 1. Komponente susikurkite įvesties laukelį, kuriame vartotojas galėtų įvesti kiek iš viso dėl kelionės reikės nuvažiuoti kilometrų. Taip pat, įvesties laukelį, kuriame bus galima suvesti kiek vidutinių kuro sąnaudų turi automobilis 100-ui kilometrų (pvz 7 litrus). Ir galiausiai įvesties laukelį, kur žmogus galėtų nurodyti kuro kainą už litrą. Taip pat turėtų būti mygtukas, kuris patvirtintų įvestį.
// 2. Komponente susikurkite visus reikiamus kintamuosius informacijai saugoti (kelionės km suma; vidutinės sąnaudos; litro kaina).
// 3. Padarykite, kad paspaudus ant mygtuko visa informacija iš įvesties laukelių būtų paimta ir sudėta į atitinkamus kintamuosius.
// 4. Išveskite šią informaciją paragrafe žemiau.
// 5. Susikurkite funkciją, kuri paskaičiuotų kiek kuro bus išnaudota kelionei. Iškvieskite šią funkciją naujame paragrafe.
// 6. Susikurkite funkcija, kuri paskaičiuotų kiek iš viso turėtų kainuoti kuras. Iškvieskite šią funkciją naujame paragrafe.
// 7. Padarykite, kad po įvedimo (mygtuko paspaudimo) visi laukeliai išsivalytų.
// 8. Padarykite, kad informacijos išvedimas ir skaičiavimai būtų parodomi tik tuo atveju jeigu yra suvestos informacijos.

import { useRef, useState } from "react";

const Kelione = () => {
  const kiekKmRef = useRef();
  const vidSanaudos = useRef();
  const litroKaina = useRef();

  const [kilometrai, setKilometrai] = useState("");
  const [sanaudos, setSanaudos] = useState("");
  const [kaina, setKaina] = useState("");

  const submitHandler = () => {
    const km = kiekKmRef.current.valueAsNumber;
    const vid = vidSanaudos.current.valueAsNumber;
    const price = litroKaina.current.valueAsNumber;

    setKilometrai(km);
    setSanaudos(vid);
    setKaina(price);

    kiekKmRef.current.value = "";
    vidSanaudos.current.value = "";
    litroKaina.current.value = "";
  };

  const kiekIsnaudota = () => {
    return ((kilometrai / 100) * sanaudos).toFixed(2);
  };

  const kiekKainuosKuras = () => {
    return (kiekIsnaudota() * kaina).toFixed(2);
  };

  return (
    <div>
      <div>
        <label htmlFor="kiekKm">
          <strong>Kiek kilometru reikes nuvaziuoti?</strong>
        </label>
        <br />
        <input type="number" id="kiekKm" ref={kiekKmRef} />
      </div>
      <div>
        <label htmlFor="kuroSanaudos">
          <strong>Kokios automobilio sanaudos?</strong>
        </label>
        <br />
        <input type="number" id="kuroSanaudos" ref={vidSanaudos} />
      </div>
      <div>
        <label htmlFor="kuroKaina">
          <strong>Kokia yra kuro kaina uz litra?</strong>
        </label>
        <br />
        <input type="number" id="kuroKaina" ref={litroKaina} />
      </div>
      <div>
        <button type="submit" onClick={submitHandler}>
          Skaiciuoti
        </button>
      </div>
      {kilometrai && sanaudos && kaina && (
        <div>
          <p>
            Bendras kilometru kiekis yra: {kilometrai}, automobilio kuro sanudos
            butu: {sanaudos} l/100km, Litro kaina: {kaina} €
          </p>
          <p>Sioje kelionej bus isnauduota {kiekIsnaudota()} litru</p>
          <p>Keliones kuras kainuos {kiekKainuosKuras()} €</p>
        </div>
      )}
    </div>
  );
};

export default Kelione;

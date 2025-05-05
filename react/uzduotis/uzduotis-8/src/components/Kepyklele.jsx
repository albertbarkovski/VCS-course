// Komponentas „Kepyklele“
// 1. Komponente susikurkite keletą įvesties laukelių bendrai kepyklėlės informacijai išsaugoti. Šie laukeliai turėtų leisti įvesti šią informaciją: darbuotojų skaičius; vieno darbuotojo kepinių kiekis per valandą; darbo valandų per dieną kiekis. Susikurkite kintamuosius, kurie saugotų šią įvestą informaciją. Padarykite, kad į kintamuosius būtų įkeliama informacija po bet kokio pasikeitimo įvesties laukeliuose, atskiro mygtuko patvirtinimui daryti nereikia.
// 2. Taip pat, komponente susikurkite įvesties laukelį su mygtuku, kur būtų galima suvesti visus dienos užsakymus. Komponente susikurkite masyvą, kuriame saugotumėte visų užsakymų skaičius. Padarykite, kad paspaudus ant mygtuko, būtų paimta informacija iš šio įvesties laukelio ir ji būtų įkeliama į masyvo pabaigą. Po paspaudimo užsakymo įvesties laukelis turi būti išvalytas.
// 3. Sukurkite funkciją, kuri surastų bendrą užsakymų sumą. Iškvieskite šią funkciją parodant jos atsakymą. Taip pat, padarykite, kad jeigu nėra įvestos informacijos į masyvą, tai ši išvestis nebūtų rodoma.
// 4. Sukurkite funkciją, kuri surastų bendrą kepyklos pajėgumą (įvertinkite kiek turite darbuotojų, kiek kiekvienas gali iškepti per valandą ir kiek darbo valandų yra dienoje). Iškvieskite šią funkciją parodant jos atsakymą. Padarykite, kad atsakymas būtų išvedamas tik tuo atveju jei visa informacija yra įvesta.
// 5. Palyginkite ir išveskite ar kepykla spės įgyvendinti visus dienos užsakymus. Šį atsakymą išveskite tik jeigu turite visą tam reikalingą informaciją.

import { useState } from "react";

const Kepyklele = () => {
  const [darbSk, setDarboSk] = useState("");
  const [kepenuIVal, setKepenuIVal] = useState("");
  const [valIDiena, setValIDiena] = useState("");
  const [uzsKiekis, setUzsKiekis] = useState([]);

  const uzsKiekisHandler = () => {
    if (uzsakymas) {
      setUzsKiekis((prevUzsakymai) => [...prevUzsakymai, parseInt(uzsakymas)]);
    }

    setUzsKiekis("");
  };

  return (
    <div>
      <form>
        <div>
          <input
            type="number"
            placeholder="Darbuotoju skaičius?"
            value={darbSk}
          />
          <br />
          <input
            type="number"
            placeholder="Vieno kepenu sk/h?"
            value={kepenuIVal}
          />
          <br />
          <input type="number" placeholder="Darbo val/d" value={valIDiena} />
        </div>
      </form>
      <form>
        <div>
          <input type="number" placeholder="Uzs i diena" value={uzsKiekis} />
          <button onClick={uzsKiekisHandler}>Skaiciuoti</button>
        </div>
      </form>
    </div>
  );
};

export default Kepyklele;

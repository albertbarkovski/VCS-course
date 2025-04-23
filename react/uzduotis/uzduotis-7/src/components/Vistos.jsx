// Komponentas „Vistos“
// 1. Susikurkite įvesties laukelį į kurį būtų galima suvesti kiek bendrai tą dieną vištos padėjo kiaušinių.
// 2. Komponente susikurkite paprastą kintamąjį (be būsenos), kuriame būtų užfiksuota kiek dienos užsakymų turėtų ūkis įgyvendinti (šis skaičius nesikeičia, nes turi pastovius klientus).
// 3. Komponente susikurkite kintamąjį su būsena (state), prie kurio priskirsite reikšmę iš input.
// 4. Vartotojui įvedus reikšmę į įvesties laukelį, atnaujinkite atitinkamo kintamojo reikšmę.
// 5. Susikurkite funkciją, kuri įvertina ar ūkis įgyvendins šios dienos užsakymus (palygins užsakymų kintamąjį su išperėtų kiaušinių kiekio kintamuoju). Jeigu įgyvendinti spėja – funkcija išveda, kad viskas gerai ir parodo perteklių, o jeigu nespėja – parašo, kad nespėja ir parodo trūkumą. Iškvieskite šią funkciją paragrafe.

import { useState } from "react";

const Vistos = () => {
  const uzsakytaKiausiniu = 100;
  const [kiausiniai, setKiausiniai] = useState("");

  const kiausiniaiHandle = (e) => {
    setKiausiniai(e.target.value);
  };

  const arUztenka = () => {
    if (!kiausiniai) return;
    if (kiausiniai >= uzsakytaKiausiniu) {
      return (
        <div>
          <strong>Kiausiniu pakaks atlikti uzsakyma</strong>
          <p>Liks {kiausiniai - uzsakytaKiausiniu} kiausiniai</p>
        </div>
      );
    } else {
      return (
        <div>
          <strong>Kiausiniu bus permazai</strong>
          <p>Truksta {uzsakytaKiausiniu - kiausiniai} kiausinius</p>
        </div>
      );
    }
  };
  return (
    <div>
      <div>
        <label htmlFor="KiekKiausiniu">
          Kiek kiausiniu vistos padejo kiausiniu?
        </label>
        <input onInput={kiausiniaiHandle} type="number" id="kiekKiausiniu" />
        <p>
          <strong> {arUztenka()}</strong>
        </p>
      </div>
    </div>
  );
};

export default Vistos;

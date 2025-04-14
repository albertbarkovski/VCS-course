// Komponentas „Zuikis“
// 1. Komponente susikurkite kintamąjį arPersoko, kuris turėtų state ir prie jo būtų priskirta pradinė reikšmė false. Šį kintamąjį išveskite paragrafe, pvz „Ar zuikis peršoko griovį - ne“ (vietoj true/false išsiveda žodis taip/ne).
// 2. Susikurkite funkciją, kuri automatiškai parinktų ir pakeistų arPersoko kintamojo reikšmę, parenka atsitiktiniu būdu ir įrašo true arba false reikšmę. Susikurkite mygtuką, kuris ant paspaudimo iškviestų šią funkciją.
// 3. Sukurkite dar vieną funkciją, kuri pakeistų kintamojo arPersoko reikšmę į true, kuri tarsi be atsitiktinumo garantuotų peršokimo klausimą. Sukurkite mygtuką, kuris ant paspaudimo iškviestų šią funkciją.

import { useState } from "react";

const Zuikis = () => {
  const [arPersoko, naujaReiksme] = useState("ne");

  const arPersokoFunc = () => {
    let vertes = ["taip", "ne"];
    let index = Math.floor(Math.random() * vertes.length);
    naujaReiksme(vertes[index]);
  };

  const hardNE = () => {
    naujaReiksme("Tikrai ne");
  };
  return (
    <div>
      <p>Ar zuikis persoko griovi: {arPersoko}</p>
      <button onClick={arPersokoFunc}>Generate</button>
      <button onClick={hardNE}>NE</button>
    </div>
  );
};

export default Zuikis;

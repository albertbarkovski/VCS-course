// Komponentas „MedzioApdirbejas“
// 1. Komponente susikurkite įvesties laukelius, kur būtų galima suvesti kiek iš viso kainavo visos medžiagos, kiek iš viso valandų žmogus dirbo prie projekto, koks turėtų būti valandinis uždarbis. Sukurkite mygtuką, kuris patvirtintų įvestį.
// 2. Komponente susikurkite visus reikiamus kintamuosius informacijai saugoti.
// 3. Padarykite, kad po mygtuko paspaudimo visa ši informacija būtų išsaugota į atitinkamus kintamuosius.
// 4. Išveskite visų šių įvestų kintamųjų informaciją atskirame paragrafe.
// 5. Padarykite, kad po įvesties (po mygtuko paspaudimo) visi turimi įvesties laukeliai išsivalytų.
// 6. Padarykite, kad jeigu dar nėra įvestos informacijos, paragrafas išvedantis tą įvestą informaciją nebūtų rodomas.
// 7. Susikurkite funkciją, kuri paskaičiuotų bendras projekto išlaidas (darbuotojo valandos padaugintos iš norimo valandinio uždarbio ir atimta medžiagų kaina). Iškvieskite šią funkciją atskirame paragrafe.
// 8. Susikurkite funkciją, kuri paskaičiuotų kiek produktas turėtų kainuoti (pridėkite 30 procentų ant turimų išlaidų, pvz jeigu pagaminti kainuoja 100 eurų, tai turėtume parduoti už 130 eurų), kad medžio apdirbėjas galėtų ką nors iš to uždirbti. Iškvieskite šią funkciją paragrafe.
// 9. Padarykite, kad skaičiavimų paragrafai nebūtų rodomi tol kol vartotojas nesuvedė jokios informacijos.

import { useRef, useState } from "react";

const MedzioApdirbejas = () => {
  const sumaRef = useRef();
  const laikasRef = useRef();
  const valandinisRef = useRef();

  const [suma, setSuma] = useState("");
  const [laikas, setLaikas] = useState("");
  const [valandinis, setValandinis] = useState("");

  const btnHandler = () => {
    const sum = sumaRef.current.valueAsNumber;
    const time = laikasRef.current.valueAsNumber;
    const hrEu = valandinisRef.current.valueAsNumber;

    setSuma(sum);
    setLaikas(time);
    setValandinis(hrEu);

    sumaRef.current.value = "";
    laikasRef.current.value = "";
    valandinisRef.current.value = "";
  };

  const bendrosIslaidos = () => {
    return laikas * valandinis - suma;
  };

  const optimaliKaina = () => {
    return bendrosIslaidos() + bendrosIslaidos() * 0.3;
  };
  return (
    <div>
      <div>
        <label htmlFor="kainaSum">
          <strong>Kiek kainuoja medziagos? €</strong>
        </label>
        <br />
        <input type="number" id="kainaSum" ref={sumaRef} />
      </div>
      <div>
        <label htmlFor="uztrukoLaiko">
          <strong>Kiek darbuotojas uztruko laiko? Valandos</strong>
        </label>
        <br />
        <input type="number" id="uztrukoLaiko" ref={laikasRef} />
      </div>{" "}
      <div>
        <label htmlFor="valandinisUzdarbis">
          <strong>Koks darbuotojo valandinis uzdarbis? €</strong>
        </label>
        <br />
        <input type="number" id="valandinisUzdarbis" ref={valandinisRef} />
      </div>
      <div>
        <button type="submit" onClick={btnHandler}>
          Paskaiciuoti
        </button>
      </div>
      {suma && laikas && valandinis && (
        <div>
          <p>
            Bendra suma:{suma}€, laikas darbui atlikti: {laikas} val, meistro
            valandinis {valandinis}€{" "}
          </p>
          <p>Projekto islaidos: {bendrosIslaidos()}</p>
          <p>Darbu kaina su 30% antkainius: {optimaliKaina()}</p>
        </div>
      )}
    </div>
  );
};

export default MedzioApdirbejas;

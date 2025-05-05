// Komponentas „Prekes“
// 1. Susikurkite formą su keliais įvesties laukeliais ir mygtuku. Įvesties laukeliai leistų suvesti vienos prekės informaciją, o apie vieną prekę yra žinoma ši informacija: pavadinimas; kaina; kiekis. Po mygtuko paspaudimo forma yra patvirtinama ir informacija suvedama.
// 2. Komponente susikurkite masyvą, kur būtų saugoma visų prekių informacija (masyvas su prekių objektais).
// 3. Po formos patvirtinimo (mygtuko paspaudimo), susirinkite visą informaciją iš visų įvesties laukelių, suformuluokite naujos prekės objektą ir jį įdėkite į masyvo priekį.
// 4. Po įvesties visus įvesties laukelius išvalykite.
// 5. Susikurkite div bloką, kuriame būtų atvaizduojamos visos prekės. Kiekvieną prekę atvaizduokite jos atskirame div elemente, išvedant visą prekės informaciją. (bus div blokas visoms prekėms ir daug atskirų div kiekvienai atskirai prekei).
// 6. Padarykite, kad jeigu prekių yra išvestų šias prekes, o jeigu prekių nėra išvestų paragrafą su tekstu „kol kas nėra įvestų prekių“.
// 7. Sukurkite funkciją, kuri leistų išvalyti visus produktus iš masyvo. Įdėkite mygtuką, kuris iškviestų šią funkciją. Mygtukas turi matytis tik jeigu yra įdėtų prekių į masyvą.
// 8. Sukurkite funkciją, kuri išfiltruotų / atrinktų tik tas prekes, kurių liko mažai (mažiau nei 5 vnt.). Šią funkciją panaudokite taip, kad išsivestų atskiruose blokeliuose visos atrinktos prekės, tai galima padaryti įsivedant dar vieną atskirą masyvą ir funkcija sudėtų informaciją į šį masyvą, arba ją galima iškviesti tiesiai spausdinime).
// 9. Nerodykite šių prekių (mažų likučių) blokelio išvis jeigu pradiniame masyve nėra jokios informacijos.

import { useRef, useState } from "react";

const Prekes = () => {
  const nameRef = useRef();
  const priceRef = useRef();
  const qtyRef = useRef();

  const [prekes, setPrekes] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();

    let newName = nameRef.current.value;
    let newPrice = parseFloat(priceRef.current.value);
    let newQty = parseFloat(qtyRef.current.value);
    if (newName !== "" && !isNaN(newPrice) && !isNaN(newQty)) {
      setPrekes((prevPrekes) => [
        { vardas: newName, kaina: newPrice, kiekis: newQty },
        ...prevPrekes,
      ]);

      nameRef.current.value = "";
      priceRef.current.value = "";
      qtyRef.current.value = "";
    }
  };

  const cleanBtnHandler = () => {
    setPrekes([]);
  };

  const lowStockPrekes = prekes.filter((preke) => preke.kiekis < 5);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Pavadinimas" ref={nameRef} />
        <br />
        <input type="number" placeholder="Kaina" ref={priceRef} />
        <br />
        <input type="number" placeholder="Kiekis" ref={qtyRef} />
        <br />
        <button type="submit">Prideti</button>
      </form>
      <h3>Prekiu sarasas</h3>
      <div>
        {prekes.length > 0 ? (
          prekes.map((preke, i) => (
            <div>
              <div key={i}>
                <p>
                  <strong>{preke.vardas}</strong>
                </p>
                <p>Kaina: {preke.kaina}€</p>
                <p>Likutis: {preke.kiekis} vnt</p>
              </div>
            </div>
          ))
        ) : (
          <div>kol kas nėra įvestų prekių</div>
        )}
      </div>
      {lowStockPrekes.length > 0 &&
        lowStockPrekes.map((preke, i) => (
          <div>
            <hr />
            <h4>Prekes su mazu likuciu</h4>
            <p key={i}>
              <strong>{preke.vardas}</strong> liko {preke.kiekis} vnt
            </p>
          </div>
        ))}
      {prekes.length > 0 && <button onClick={cleanBtnHandler}>Isvalyti</button>}
    </div>
  );
};

export default Prekes;

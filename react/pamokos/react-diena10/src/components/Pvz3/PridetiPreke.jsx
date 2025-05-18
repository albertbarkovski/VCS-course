import React, { useRef } from "react";

const PridetiPreke = (props) => {
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const forma = formRef.current;

    const pavadinimas = forma["pavadinimas"].value;
    const kiekis = forma["kiekis"].valueAsNumber;
    const kaina = forma["kaina"].valueAsNumber;

    if (pavadinimas && kiekis && kaina) {
      props.siunciamPreke({ pavadinimas, kiekis, kaina });
      forma.reset();
    }
  };
  return (
    <div>
      <h2>Prideti Preke</h2>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div>
          <label htmlFor="pavadinimas">Pavadinimas</label>
          <input type="text" name="pavadinimas" id="pavadinimas" />
        </div>
        <div>
          <label htmlFor="kiekis">Kiekis</label>
          <input type="number" name="kiekis" id="kiekis" />
        </div>
        <div>
          <label htmlFor="kaina">Kaina</label>
          <input type="number" name="kaina" id="kaina" />
        </div>
        <div>
          <button type="submit">Prideti</button>
        </div>
      </form>
    </div>
  );
};

export default PridetiPreke;

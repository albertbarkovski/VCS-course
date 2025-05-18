import React from "react";

const PrekiuSarasas = (props) => {
  const data = props.data;

  const perkam = (preke) => {
    props.nupirko(preke);
  };
  return (
    <div>
      {data.map((preke, i) => (
        <div key={i}>
          <h3>{preke.pavadinimas}</h3>
          <p>Kiekis:{preke.kiekis} vnt.</p>
          <p>Kaina: {preke.kaina}&euro;</p>
          <button onClick={() => perkam(preke)}>Nupirkti</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PrekiuSarasas;

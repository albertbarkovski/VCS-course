import React from "react";
import { useState } from "react";
import { useRef } from "react";

const Komp4 = () => {
  const [auto, setAuto] = useState([]);

  const markeRef = useRef();
  const modelisRef = useRef();
  const metaiRef = useRef();

  const newCarHandler = (event) => {
    event.preventDefault();

    let naujasAuto = {
      marke: markeRef.current.value,
      modelis: modelisRef.current.value,
      metai: metaiRef.current.valueAsNumber,
    };

    setAuto([...auto, naujasAuto]);
    markeRef.current.value = "";
    modelisRef.current.value = "";
    metaiRef.current.value = "";
  };

  const naujasisAutomobilis = () => {
    return auto.reduce((naujausias, dabrtinis) => {
      return dabrtinis.metai > naujausias.metai ? dabrtinis : naujausias;
    }, auto[0]);
  };

  const naujausias = naujasisAutomobilis();
  return (
    <div>
      <h2>Automobiliai</h2>
      <form onSubmit={newCarHandler}>
        <div>
          <label htmlFor="marke">Marke:</label>
          <input type="text" ref={markeRef} id="marke" />
        </div>
        <div>
          <label htmlFor="modelis">Modelis:</label>
          <input type="text" ref={modelisRef} id="modelis" />
        </div>
        <div>
          <label htmlFor="metai">Metai:</label>
          <input type="number" ref={metaiRef} id="metai" />
        </div>
        <div>
          <button type="submit">Ivest</button>
        </div>
      </form>
      {auto.length > 0 && (
        <table border="1">
          <thead>
            <tr>
              <th>Marke</th>
              <th>Modelis</th>
              <th>Metai</th>
            </tr>
          </thead>
          <tbody>
            {auto.map((autom, index) => {
              return (
                <tr key={index}>
                  <td>{autom.marke}</td>
                  <td>{autom.modelis}</td>
                  <td>{autom.metai}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {auto.length > 0 && (
        <div>
          <p>
            Naujausias automobilis: {naujausias.marke} {naujausias.modelis}{" "}
            {naujausias.metai}
          </p>
        </div>
      )}
    </div>
  );
};

export default Komp4;

import { useState } from "react";

const Komp2 = () => {
  const [pirmasZodis, SetPirmas] = useState("");
  const [antrasZodis, SetAntras] = useState("");

  const pirmasHandle = (e) => {
    SetPirmas(e.target.value);
  };
  const antrasHandle = (e) => {
    SetAntras(e.target.value);
  };

  const ilgesnis = () => {
    if (pirmasZodis.length === 0 || antrasZodis.length === 0) return;
    if (pirmasZodis.length > antrasZodis.length) {
      return "Pirmas zodis yra ilgesnis uz antra ";
    } else if (antrasZodis.length > pirmasZodis.length) {
      return "Antras zodis yra ilgesnis uz pirma";
    } else {
      return "Zodziu ilgiai yra vienodi";
    }
  };
  return (
    <div>
      <h2>Ilgesnis zodis</h2>
      <div>
        <label htmlFor="pirmasInput">Pirmas:</label>
        <input onInput={pirmasHandle} type="text" id="pirmasInput" />
      </div>
      <div>
        <label htmlFor="antrasInput">Antras:</label>
        <input onInput={antrasHandle} type="text" id="antrasInput" />
      </div>
      <p>
        <strong>Ivesti zodziai: </strong> &nbsp;
        {pirmasZodis} ir {antrasZodis}
      </p>
      <p>
        <strong>{ilgesnis()}</strong>
      </p>
    </div>
  );
};

export default Komp2;

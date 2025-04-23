import { useState } from "react";

const Komp1 = () => {
  const [zodis, setZodis] = useState("");

  const zodzioHandle = (event) => {
    setZodis(event.target.value);
  };
  return (
    <div>
      <h2>Zodzio ilgis</h2>
      <label htmlFor="vardasInput">Zodis:</label>
      <input onInput={zodzioHandle} type="text" id="vardasInput" />
      <p>Ivestas zodis:{zodis}</p>
      <p>Simpoliu kiekis: {zodis.length}</p>
    </div>
  );
};

export default Komp1;

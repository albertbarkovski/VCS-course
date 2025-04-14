import { useState } from "react";

const Komp1 = () => {
  const [skaicius, naujasSkaicius] = useState(0);

  const didinti = () => {
    naujasSkaicius(skaicius + 4);
  };
  const mazinti = () => {
    naujasSkaicius(skaicius - 5);
  };
  return (
    <div>
      <h2>Counter</h2>
      <button onClick={didinti}> Didinti</button>
      <button onClick={mazinti}> Mazinti</button>
      <p>Dabar yra: {skaicius}</p>
    </div>
  );
};

export default Komp1;

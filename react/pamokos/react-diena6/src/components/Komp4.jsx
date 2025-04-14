import { useState } from "react";

const Komp4 = () => {
  const [skaicius, setSk] = useState(0);

  return (
    <div>
      <h2>Skaiciu keitinejimai</h2>
      <button onClick={() => setSk(skaicius + 1)}>Didinti vienu</button>
      <button onClick={() => setSk(skaicius - 1)}>Mazinti vienu</button>
      <button onClick={() => setSk(skaicius + 5)}>Didinti penkiais</button>
      <button onClick={() => setSk(skaicius - 1)}>Mazinti penkiais</button>
      <button onClick={() => setSk(0)}>Nustatyti 0</button>
      <p>dabartine reiksme:{skaicius}</p>
    </div>
  );
};

export default Komp4;

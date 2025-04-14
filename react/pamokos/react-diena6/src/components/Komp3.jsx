import { useState } from "react";

const Komp3 = () => {
  const [skaicius, setSk] = useState(0);

  const didintiVienetu = () => {
    setSk(skaicius + 1);
  };
  const mazintiVienetu = () => {
    setSk(skaicius - 1);
  };
  const didintiPenketu = () => {
    setSk(skaicius + 5);
  };
  const mazintiPenketu = () => {
    setSk(skaicius - 5);
  };
  const NustatyiNuli = () => {
    setSk(0);
  };

  return (
    <div>
      <h2>Skaiciu keitinejimai</h2>
      <button onClick={didintiVienetu}>Didinti vienu</button>
      <button onClick={mazintiVienetu}>Mazinti vienu</button>
      <button onClick={didintiPenketu}>Didinti penkiais</button>
      <button onClick={mazintiPenketu}>Mazinti penkiais</button>
      <button onClick={NustatyiNuli}>Nustatyti 0</button>
      <p>dabartine reiksme:{skaicius}</p>
    </div>
  );
};

export default Komp3;

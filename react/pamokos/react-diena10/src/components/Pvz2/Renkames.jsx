import React, { useState } from "react";
import ProgramavimoKalba from "./ProgramavimoKalba";

const Renkames = () => {
  const [kalba, setKalba] = useState("");

  const gaunamInfo = (reiksme) => {
    setKalba(reiksme);
  };

  const tikrinam = (reiksme) => {
    if (reiksme == "PHP") return "Nemirstanti kalba";
    else if (reiksme == "HTML") return "Web programavimas";
  };

  return (
    <div>
      <h2>Renkames programavimo kalbe</h2>
      <ProgramavimoKalba grazinamReiksme={gaunamInfo} />
      {kalba.length > 0 && (
        <>
          <p>Issirinkta kalba:{kalba}</p>
          <p>{tikrinam(kalba)}</p>
        </>
      )}
    </div>
  );
};

export default Renkames;

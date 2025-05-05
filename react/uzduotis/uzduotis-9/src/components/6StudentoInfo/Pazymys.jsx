// Vaikinis komponentas „Pazymys“
// 1. Padarykite, kad šis komponentas galėtų priimti props objektą arba patį pažymį.
// 2. Išveskite gautą pažymį paragrafe.
// 3. Šalia pažymio išveskite koks tai pažymys (teigiamas - jei 5 ar daugiau; ir neigiamas - jei mažiau). Galite padaryti su ternary operator / inlife if, arba per atskirą funkciją.

import React from "react";

const Pazymys = ({ pazymys }) => {
  return (
    <>
      <p>
        {pazymys} - {pazymys >= 5 ? "teigiamas" : "neigiamas"}
      </p>
    </>
  );
};

export default Pazymys;

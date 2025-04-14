// Komponentas Slaptazodis
// 1. Sukurkite slaptažodžio įvesties laukelį (type="password").
// 2. Naudokite eventą, kad kai vartotojas paspaudžia Enter klavišą, iššoktų alert, sakantis „Slaptažodis priimtas“.
// 3. Jeigu vartotojas paspaudžia bet kurį kitą klavišą – nieko nedarykite.
// 4. Pridėkite žinutę po įvedimo laukeliu, kuri rodo kiek simbolių įrašyta.

import { useState } from "react";

const Slaptazodis = () => {
  const enter = (e) => {
    if (e.keyCode === 13) {
      alert("Slaptazodis priimtas");
    }
  };
  const [simboliai, naujas] = useState(0);

  const passlength = () => {
    let inputPass = document.getElementById("input-pass").value;
    naujas(inputPass.length);
  };
  return (
    <div>
      <input
        type="password"
        id="input-pass"
        onKeyUp={enter}
        onInput={passlength}
      />
      <p>Jusu slaptazodzio ilgis: {simboliai}</p>
    </div>
  );
};

export default Slaptazodis;

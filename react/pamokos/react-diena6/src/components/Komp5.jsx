import { useState } from "react";

const Komp5 = () => {
  const [element, setEl] = useState("-");

  const pasirinktasEl = (event) => {
    setEl(event.target.innerText);
  };

  const rinktis = () => {
    switch (element) {
      case "HTML":
        return "HTML tai zymejimo kalba";
      case "react":
        return "React yra advance";
    }
  };

  return (
    <div>
      <h2>Pasirinkimas</h2>
      <p>Labiausiai patiko:</p>
      <button onClick={pasirinktasEl}>HTML</button>
      <button onClick={pasirinktasEl}>CSS</button>
      <button onClick={pasirinktasEl}>JS</button>
      <button onClick={pasirinktasEl}>React</button>
      <p>PAsirinkote:{element}</p>
      <p>{rinktis()}</p>
    </div>
  );
};

export default Komp5;

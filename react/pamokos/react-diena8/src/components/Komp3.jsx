import { useRef } from "react";
import { useState } from "react";

const Komp3 = () => {
  const [pazymiai, setPazymiai] = useState([]);

  const pazymysInputRef = useRef();

  const onPAzymiaiSubmitHandle = (event) => {
    event.preventDefault();
    let naujasPazymis = pazymysInputRef.current.valueAsNumber;
    setPazymiai([...pazymiai, naujasPazymis]);
    pazymysInputRef.current.value = "";
  };

  const onIsvalytiClickHandle = () => {
    setPazymiai([]);
  };

  const vidurkis = () => {
    return pazymiai.reduce((a, b) => a + b, 0) / pazymiai.length;
  };
  return (
    <div>
      <h2>Studento vidurkis</h2>
      <form onSubmit={onPAzymiaiSubmitHandle}>
        <label htmlFor="pazymis">Iveskite pazymi: </label>
        <input ref={pazymysInputRef} type="number" min="1" max="10" />
        <button type="submit">Ivesti</button>
      </form>
      {pazymiai.length > 0 && (
        <div>
          <h3>Ivesti pazymiai</h3>
          <p>{pazymiai.join(",  ")}</p>
        </div>
      )}
      {pazymiai.length > 0 && (
        <div>
          <h3>Pazymiu vidurkis</h3>
          <p>{vidurkis()}</p>
        </div>
      )}
      {pazymiai.length > 0 && (
        <button onClick={onIsvalytiClickHandle}>Isvalyti</button>
      )}
    </div>
  );
};

export default Komp3;

// 181p

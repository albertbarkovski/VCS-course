import { useState } from "react";

const Komp2 = () => {
  let zodziai = ["labas", "ate", "vasara", "ziema", "kamulis"];

  const [zodis, nustatytizodi] = useState("");

  const traukti = () => {
    const index = Math.floor(Math.random() * zodziai.length);
    nustatytizodi(zodziai[index]);
  };
  return (
    <div>
      <h2>Random word</h2>
      <button onClick={traukti}>Random</button>
      <p>Istrauktas zodis: {zodis}</p>
    </div>
  );
};

export default Komp2;

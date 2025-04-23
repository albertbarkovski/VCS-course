import { useRef, useState } from "react";

const Komp1 = () => {
  const [salis, setSalis] = useState("");
  const salisInputRef = useRef();
  const salisHandler = () => {
    setSalis(salisInputRef.current.value);
  };

  return (
    <div>
      <h2>Megstamiausia salis</h2>
      <div>
        <label htmlFor="salis">Iveskite sali: </label>
        <input id="salis" ref={salisInputRef} type="text" />
        <button onClick={salisHandler}>Ivesti</button>
      </div>
      <p>Jus ivedete:{salis}</p>
    </div>
  );
};

export default Komp1;

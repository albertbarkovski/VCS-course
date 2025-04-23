import { useRef, useState } from "react";

const Komp2 = () => {
  const [pirmasZodis, setPirmasZodis] = useState("");
  const [antrasZodis, setAntrasZodis] = useState("");

  const pirmasZodisRef = useRef();
  const antrasZodisRef = useRef();

  const ivestiHandler = () => {
    const zodis1 = pirmasZodisRef.current.value;
    const zodis2 = antrasZodisRef.current.value;
    // console.log({ zodis1, zodis2 });
    setPirmasZodis(zodis1);
    setAntrasZodis(zodis2);

    pirmasZodisRef.current.value = "";
    antrasZodisRef.current.value = "";
  };

  const daugiauARaidziu = () => {
    let pirmoAts = pirmasZodis
      .toLowerCase()
      .split("")
      .filter((raide) => raide === "a").length;
    let antroAts = antrasZodis
      .toLowerCase()
      .split("")
      .filter((raide) => raide === "a").length;

    if (pirmoAts > antroAts) {
      return (
        <div>
          Pirmas zodis turi daugiau A raidziu {pirmoAts}, antras {antroAts}
        </div>
      );
    } else if (antroAts > pirmoAts) {
      return (
        <div>
          Antras zodis turi daugiau A raidziu {antroAts}, pirmas {pirmoAts}
        </div>
      );
    } else {
      return <div>A raidziu skaicius yra vienodas {antroAts}</div>;
    }
  };
  return (
    <div>
      <h2>Lyginti zodzius</h2>
      <div>
        <label htmlFor="pirmasZodisID">Pirmas zodis: </label>
        <input ref={pirmasZodisRef} type="text" id="pirmasZodisID" />
      </div>
      <div>
        <label htmlFor="antrasZodisID">Antras zodis: </label>
        <input ref={antrasZodisRef} type="text" id="antrasZodisID" />
      </div>
      <div>
        <button onClick={ivestiHandler}>Ivesti</button>
      </div>
      {pirmasZodis && antrasZodis && (
        <>
          <div>
            <p>Ivesti zodziai</p>
            <p>Pirmas zodis: {pirmasZodis}</p>
            <p>Antras zodis: {antrasZodis}</p>
          </div>
          <div>{daugiauARaidziu()}</div>
        </>
      )}
    </div>
  );
};

export default Komp2;

const Komp1 = () => {
  let skaicius = 54;

  const arlyginis = () => {
    if (skaicius % 2 === 0) {
      return "lyginis";
    } else {
      return "nelyginis";
    }
  };

  return (
    <>
      <h2>Skaicia ir skaiciavimas</h2>
      <p>{skaicius}</p>
      <p>4+5</p>
      <p>{skaicius + 20}</p>
      <p>{skaicius * 4}</p>
      <p>{skaicius % 2 === 0 ? "lyginis" : "nelyginis"}</p>
      <p>
        {skaicius} yra {skaicius % 2 === 0 ? "lyginis" : "nelyginis"}
      </p>
      <p>{arlyginis()}</p>
      <p>
        {skaicius} yra {arlyginis()}
      </p>
    </>
  );
};

export default Komp1;

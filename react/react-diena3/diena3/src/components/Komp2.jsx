const Komp2 = () => {
  let sk1 = 34;
  let sk2 = 54;

  const didesnins = () => {
    if (sk1 > sk2) {
      return `${sk1} yra didesnis uz ${sk2}`;
    } else if (sk1 < sk2) {
      return `${sk2} yra didesnis uz ${sk1}`;
    } else {
      return `Skaiciai yra lygus`;
    }
  };
  const mazesnis = () => {
    if (sk1 < sk2) {
      return `${sk1} yra mazesnis uz ${sk2}`;
    } else if (sk1 > sk2) {
      return `${sk2} yra mazesnis uz ${sk1}`;
    } else {
      return `Skaiciai yra lygus`;
    }
  };
  return (
    <>
      <h2>Didesnins / mazesnins skaicius</h2>
      <p>
        Turimi skaiciai: {sk1} ir {sk2}
      </p>
      <p>{didesnins()}</p>
      <p>{mazesnis()}</p>
    </>
  );
};

export default Komp2;

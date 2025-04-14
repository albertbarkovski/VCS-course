const Tikrinimai = () => {
  const arLyginis = () => {
    const randomSK = Math.floor(Math.random() * 100) + 1;

    randomSK % 2 == 0
      ? alert(randomSK + " Lyginis")
      : alert(randomSK + " Nelyginis");
  };
  const arDidesnisNei30 = () => {
    const randomSK = Math.floor(Math.random() * 100) + 1;

    randomSK > 30
      ? alert(randomSK + " didesnis nei 30")
      : alert(randomSK + " mazesnis nei 30");
  };

  //   4. Susikurkite funkciją, kuri patikrintų ar skaičius yra pirminis. Susikurkite naują mygtuką ir funkciją iškvieskite ant šio mygtuko paspaudimo.

  const arPirminisFunc = () => {
    const randomSK = Math.floor(Math.random() * 100) + 1;

    let kiekKartuDalinasi = 0;
    let arPirminis = "";

    if (randomSK === 1) {
      arPirminis = "Nepirminis";
    } else {
      for (let i = 2; i < randomSK; i++) {
        if (randomSK % i == 0) {
          kiekKartuDalinasi++;
        }
      }
      if (kiekKartuDalinasi > 1) {
        arPirminis = "Nepirminis";
      } else {
        arPirminis = "Pirminis";
      }
    }

    return alert(randomSK + arPirminis);
  };
  return (
    <div>
      <button onClick={arLyginis}>Ar Lyginis?</button>
      <br />
      <button onClick={arDidesnisNei30}>Ar didsnis nei 30?</button>
      <br />
      <button onClick={arPirminisFunc}>Ar yra pirmynis?</button>
    </div>
  );
};

export default Tikrinimai;

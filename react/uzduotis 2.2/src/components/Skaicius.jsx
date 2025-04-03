const Skaicius = () => {
  let skaicius = 66;
  const arLyginis = (sk) => {
    if (sk % 2 === 0) return "lyginis";
    else return "nelyginis";
  };

  const arTeigiamas = (sk) => {
    if (sk > 0) {
      return "Teigiamas";
    } else if (sk < 0) {
      return "Neigiamas";
    } else {
      return "Nulis";
    }
  };

  return (
    <>
      <div>
        <p>{skaicius}</p>
        <p>{arLyginis(skaicius)}</p>
        <p>{arTeigiamas(skaicius)}</p>
      </div>
    </>
  );
};

export default Skaicius;

// 1. Jame turi būti skaičiaus kintamasis su bet kokiu jūsų norimu skaičiumi, šį skaičių išveskite komponento return dalyje.
// 2. Komponente susikurkite funkciją "arLyginis", kurioje patikrintumėte ar komponento skaičius yra lyginis ar ne, grąžintų "Taip" jeigu lyginis ir "Ne" jeigu nelyginis, iškvieskite šią funkciją.
// 3. Taip pat, komponente susikurkite funkciją "arTeigiamas", kuri patikrintų ar skaičius yra didesnis nei 0, mažesnis nei 0, ar lygus 0, grąžintų atitinkamą atsakymą, iškvieskite šią funkcija

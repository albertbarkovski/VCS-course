// Komponentas "TrysSkaiciai"
// 1. Šio komponento viduje turėtų būti sukurti trys skaičių kintamieji.
// 2. Susikurkite funkciją, kuri išvestų visus tris skaičius viename paragrafe, iškvieskite šią funkciją.
// 3. Sukurkite funkciją, kuri rastų kuris iš šių skaičių yra didžiausias ir grąžintų gautą atsakymą, šią funkciją iškvieskite.
// 4. Susikurkite funkciją, kuri rastų visų šių trijų skaičių sumą, šią funkciją iškvieskite.

const TrysSkaiciai = () => {
  let sk1 = 3;
  let sk2 = 4;
  let sk3 = 9;

  const allInOne = () => {
    return (
      <div>
        {sk1},{sk2},{sk3}
      </div>
    );
  };
  const didziausias = () => {
    let didziausiasSk = sk1;
    if (sk2 > sk1 && sk2 > sk3) {
      didziausiasSk = sk2;
    } else if (sk3 > sk1 && sk3 > sk2) {
      didziausiasSk = sk3;
    } else {
      didziausiasSk = sk1;
    }
    return didziausiasSk;
  };

  const skaiciuSuma = () => {
    const skaiciai = [];
    skaiciai.push(sk1, sk2, sk3);
    let suma = skaiciai.reduce((a, b) => a + b, 0);
    return suma;
  };

  return (
    <>
      <div>Trys skaiciai yra: {allInOne()}</div>
      <div>Didziausias is ju yra skaicius: {didziausias()}</div>
      <div>Bendra skaiciu suma yra: {skaiciuSuma()}</div>
    </>
  );
};

export default TrysSkaiciai;

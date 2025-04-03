// Komponentas "TrysSkaiciai"
// 1. Šio komponento viduje turėtų būti sukurti trys skaičių kintamieji.
// 2. Susikurkite funkciją, kuri išvestų visus tris skaičius viename paragrafe, iškvieskite šią funkciją.
// 3. Sukurkite funkciją, kuri rastų kuris iš šių skaičių yra didžiausias ir grąžintų gautą atsakymą, šią funkciją iškvieskite.
// 4. Susikurkite funkciją, kuri rastų visų šių trijų skaičių sumą, šią funkciją iškvieskite.

const TrysSkaiciai = () => {
  let sk1 = 33;
  let sk2 = 43;
  let sk3 = 4;

  const allSkinOne = (sk1, sk2, sk3) => {
    return sk1, sk2, sk3;
  };
  return <>{allSkinOne(sk1, sk2, sk3)}</>;
};

export default TrysSkaiciai;

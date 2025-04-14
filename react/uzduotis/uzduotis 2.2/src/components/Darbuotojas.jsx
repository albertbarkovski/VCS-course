// Komponentas "Darbuotojas"
// 1. Šio komponento viduje susikurkite objektą su darbuotojo informacija (vardas, profesija, atlyginimas, etatas, darbo stažas metais).
// 2. Išveskite šio objekto informaciją.
// 3. Susikurkite funkciją, kuri paskaičiuotų kiek darbuotojas iš viso yra uždirbęs (jeigu laikome, kad per visus darbo metus gaudavo vienodą pinigų sumą kiekvieną mėnesį), aiškinamės pirmiausia metus pasiversdami į mėnesius ir daugindami iš gaunamo atlyginimo, o jeigu dirba ne pilnu etatu tai prieš tai perskaičiuojam atlyginimą pagal etatą. Iškvieskite šią funkciją.
// 4. Susikurkite funkciją "ilgametisDarbuotojas", kuri patikrintų kiek jau metų stažo turi darbuotojas, jeigu jis dirba 5 ar daugiau metų, turi grąžinti "ilgametis", jeigu trumpiau - "naujokas", iškvieskite šią funkciją.
// 5. Susikurkite funkciją, kuri per argumentus priimtų patikrinimo kriterijų (atlyginimo dydis), ši funkcija turėtų palyginti darbuotojo atlyginimą su funkcijos argumento reikšme ir pasakyti ar darbuotojas uždirba lygiai/daugiau nei nurodytas argumentas ar mažiau, iškvieskite šią funkciją.

const Darbuotojas = () => {
  const darbuotojai = [
    {
      vardas: "Jonas",
      profesija: "front-end programuotojas",
      atlyginimas: 3000,
      etatas: 1,
      darboStazas: 5,
    },
  ];

  const bendraInfoApieDarbuotoja = (darbuotojoIndex) => {
    const darbuotojas = darbuotojai[darbuotojoIndex];
    let output = `Darbuotojas ${darbuotojas.vardas}, yra ${darbuotojas.profesija}, jo
    atlyginimasyra: ${darbuotojas.atlyginimas} euru, darbo etapas:
    ${darbuotojas.etatas} ir darbo stazas: ${darbuotojas.darboStazas}
    metai`;
    return output;
  };

  const bendrasUzdarbis = (darbuotojoIndex) => {
    const darbuotojas = darbuotojai[darbuotojoIndex];
    const kiekMenesiu = darbuotojas.darboStazas * 12;
    const uzdarbis = darbuotojas.atlyginimas * kiekMenesiu * darbuotojas.etatas;
    let output = `Darbuotojas ${darbuotojas.vardas} per visa laika imoneje uzdirbo ${uzdarbis}`;
    return output;
  };
  // 4. Susikurkite funkciją "ilgametisDarbuotojas", kuri patikrintų kiek jau metų stažo turi darbuotojas, jeigu jis dirba 5 ar daugiau metų, turi grąžinti "ilgametis", jeigu trumpiau - "naujokas", iškvieskite šią funkciją.

  const ilgametisDarbuotojas = (darbuotojoIndex) => {
    const darbuotojas = darbuotojai[darbuotojoIndex];
    const vardas = darbuotojas.vardas;
    const stazas = darbuotojas.darboStazas;

    let status = "";
    if (stazas >= 5) {
      status = "ilgametis";
    } else {
      status = "naujokas";
    }
    let output = `Darbuotojas ${vardas} yra ${status} imones darbuotojas`;

    return output;
  };

  // 5. Susikurkite funkciją, kuri per argumentus priimtų patikrinimo kriterijų (atlyginimo dydis), ši funkcija turėtų palyginti darbuotojo atlyginimą su funkcijos argumento reikšme ir pasakyti ar darbuotojas uždirba lygiai/daugiau nei nurodytas argumentas ar mažiau, iškvieskite šią funkciją.

  const arDaugiauNeiArgumentas = (darbuotojoIndex, x) => {
    const darbuotojas = darbuotojai[darbuotojoIndex];
    const atlygis = darbuotojas.atlyginimas;
    const vardas = darbuotojas.vardas;

    let status = "";

    if (atlygis > x) {
      status = "daugiau nei";
    } else if (atlygis < x) {
      status = "mažiau nei";
    } else {
      status = "lygiai";
    }

    let output = `Darbuotojas ${vardas} uzdirba ${status} ${x}`;
    return output;
  };

  return (
    <div>
      <div>{bendraInfoApieDarbuotoja(0)}</div>
      <div>{bendrasUzdarbis(0)}</div>
      <div>{ilgametisDarbuotojas(0)}</div>
      <div>{arDaugiauNeiArgumentas(0, 300)}</div>
    </div>
  );
};

export default Darbuotojas;

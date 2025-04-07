// Komponentas "PrekiuKrepselis"
// 1. Šiame komponente susikurkite objektų masyvą prekių krepšeliui apibūdinti. Kiekvienas objektas yra prekė, turintis informaciją apie prekę (jos id, pavadinimą, kainą, kiekį, nuolaidą).
// 2. Susikurkite funkciją, kuri priima masyvą ir jį išspausdina lentelėje, iškvieskite šią funkciją perduodant pradinius duomenis.
// 3. Susikurkite funkciją, kuri paskaičiuotų bendrą gaunamą nuolaidą (susumuoja visų prekių nuolaidas). Iškvieskite šią funkciją po lentele.
// 4. Susikurkite funkcija, kuri paskaičiuotų bendrą prekių krepšelio kainą (kainas sudedam, padauginam iš pasirinktų prekių kiekių, bet išminusuojam tų prekių nuolaidas). Iškvieskite šią funkciją.
// 5. Susikurkite funkciją, kuri per argumentus priimtų kainos ribą. Ši funkcija turėtų iš prekių atrinkti tik tas prekes kurios viršija nurodytą kainą. Norėdami pasitikrinti iškvieskite tą funkciją, kuri išveda argumentuose nurodytas prekes (2 punktas), jai per argumentus perduodant dabar aprašytos atrinkimo funkcijos rezultatą (masyvą iš atrinktų prekių).

const PrekiuKrepselis = () => {
  let prekes = [
    {
      id: 1,
      pavadinimas: "Makaronai",
      kaina: 1.59,
      kiekis: 89,
      kainaSuNuolaida: 1.29,
    },
    {
      id: 2,
      pavadinimas: "Ryziai",
      kaina: 1.89,
      kiekis: 55,
      kainaSuNuolaida: 1.49,
    },
    {
      id: 3,
      pavadinimas: "Varske",
      kaina: 1.29,
      kiekis: 127,
      kainaSuNuolaida: 0.99,
    },
    {
      id: 4,
      pavadinimas: "Sviestas",
      kaina: 2.59,
      kiekis: 98,
      kainaSuNuolaida: 2.09,
    },
  ];

  const duomenis = (prekiuSarasas) => {
    return (
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Pavadinimas</th>
            <th>Kaina</th>
            <th>Likutis</th>
            <th>Kaina su nuolaida</th>
          </tr>
        </thead>
        <tbody>
          {prekiuSarasas.map((preke) => (
            <tr key={preke.id}>
              <td>{preke.id}</td>
              <td>{preke.pavadinimas}</td>
              <td>{preke.kaina}</td>
              <td>{preke.kiekis}</td>
              <td>{preke.kainaSuNuolaida}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  // 3. Susikurkite funkciją, kuri paskaičiuotų bendrą gaunamą nuolaidą (susumuoja visų prekių nuolaidas). Iškvieskite šią funkciją po lentele.

  const nuolaidosSuma = () => {
    // let nuolaidos = [];
    // for (const preke of prekes) {
    //   const kaina = preke.kaina;
    //   const nuolaida = preke.kainaSuNuolaida;
    //   let nuolaidosVerte = kaina - nuolaida;
    //   nuolaidos.push(nuolaidosVerte);
    // }
    // return nuolaidos.reduce((a, b) => a + b);
    return prekes.reduce((suma, preke) => {
      return suma + (preke.kaina - preke.kainaSuNuolaida);
    }, 0);
  };
  // 4. Susikurkite funkcija, kuri paskaičiuotų bendrą prekių krepšelio kainą (kainas sudedam, padauginam iš pasirinktų prekių kiekių, bet išminusuojam tų prekių nuolaidas). Iškvieskite šią funkciją.

  const krepselioKaina = () => {
    return prekes.reduce((suma, preke) => {
      return suma + preke.kainaSuNuolaida * preke.kiekis;
    }, 0);
  };
  // 5. Susikurkite funkciją, kuri per argumentus priimtų kainos ribą. Ši funkcija turėtų iš prekių atrinkti tik tas prekes kurios viršija nurodytą kainą. Norėdami pasitikrinti iškvieskite tą funkciją, kuri išveda argumentuose nurodytas prekes (2 punktas), jai per argumentus perduodant dabar aprašytos atrinkimo funkcijos rezultatą (masyvą iš atrinktų prekių).

  const virsijaKaina = (riba) => {
    return prekes.filter((preke) => preke.kaina > riba);
  };

  return (
    <div>
      <div>{duomenis(prekes)}</div>
      <div>Bendra prekiu nuolaida yra {nuolaidosSuma().toFixed(2)}€</div>
      <div>Bendra krepselio kaina butu: {krepselioKaina().toFixed(2)}</div>
      <div>{duomenis(virsijaKaina(1.5))}</div>
    </div>
  );
};

export default PrekiuKrepselis;

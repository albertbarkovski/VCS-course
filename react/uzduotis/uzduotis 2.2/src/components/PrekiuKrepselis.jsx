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
      kiekis: 0,
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
    {
      id: 5,
      pavadinimas: "Suris",
      kaina: 3.99,
      kiekis: 40,
      kainaSuNuolaida: 3.49,
    },
    {
      id: 6,
      pavadinimas: "Pienas",
      kaina: 1.09,
      kiekis: 0,
      kainaSuNuolaida: 0.99,
    },
    {
      id: 7,
      pavadinimas: "Kava",
      kaina: 5.49,
      kiekis: 22,
      kainaSuNuolaida: 4.79,
    },
    {
      id: 8,
      pavadinimas: "Arbata",
      kaina: 2.49,
      kiekis: 0,
      kainaSuNuolaida: 2.29,
    },
    {
      id: 9,
      pavadinimas: "Sokoladas",
      kaina: 1.89,
      kiekis: 0,
      kainaSuNuolaida: 1.59,
    },
    {
      id: 10,
      pavadinimas: "Aliejus",
      kaina: 4.29,
      kiekis: 15,
      kainaSuNuolaida: 3.99,
    },
  ];

  const duomenis = (prekiuSarasas) => {
    return (
      <table border={1}>
        <thead>
          <tr>
            <th>Index</th>
            <th>ID</th>
            <th>Pavadinimas</th>
            <th>Kaina</th>
            <th>Likutis</th>
            <th>Kaina su nuolaida</th>
          </tr>
        </thead>
        <tbody>
          {prekiuSarasas.map((preke, Index) => (
            <tr key={preke.id}>
              <td>{Index + 1}</td>
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

  //   1. Filtravimas pagal likutį
  // Užduotis: Sukurk funkciją turimosPrekes(), kuri grąžina tik tas prekes, kurių kiekis (kiekis) yra daugiau nei 0. Atvaizduok šias prekes lentelėje.

  const turimosPrekes = () => {
    return prekes.filter((preke) => preke.kiekis > 0);
  };

  //   2. Brangiausia prekė
  // Užduotis: Sukurk funkciją brangiausiaPreke(), kuri grąžina objektą – prekę, kurios kaina be nuolaidos yra didžiausia. Atvaizduok jos pavadinimą ir kainą žemiau lentelės.

  const brangiausiaPreke = () => {
    // const surikiuotas = [...prekes].sort((a, b) => b.kaina - a.kaina);

    // const brangiausia = surikiuotas[0];

    const brangiausia = prekes.reduce((max, preke) =>
      max.kaina < preke.kaina ? preke : max
    );

    return (
      <div>
        Brangiausia preke yra {brangiausia.pavadinimas}, jos kaina yra{" "}
        {brangiausia.kaina}€
      </div>
    );
  };

  //   3. Vidutinė kaina su nuolaida
  // Užduotis: Parašyk funkciją vidutineNuolaiduKaina(), kuri suskaičiuoja prekių vidutinę kainą su nuolaida. Atvaizduok rezultatą po lentelės.

  const vidutineNuolaiduKaina = () => {
    const bendraNuolaida = prekes.reduce((suma, preke) => {
      return suma + (preke.kaina - preke.kainaSuNuolaida);
    }, 0);
    const vidutineNuoleida = bendraNuolaida / prekes.length;
    return <div>Vidutine prekiu nuolaida yra apie:{vidutineNuoleida}</div>;
  };

  // 4. Prekės paieška pagal pavadinimą
  // Užduotis: Sukurk įvesties lauką (input) ir mygtuką. Kai įvedamas pavadinimas ir paspaudžiamas mygtukas, iškviečiama funkcija ieskotiPrekes, kuri grąžina tik tas prekes, kurių pavadinimas atitinka įvestą tekstą (dalinis atitikimas). Atvaizduok rezultatus lentelėje.

  //   5. Prekių grupavimas pagal kainą
  // Užduotis: Sukurk dvi funkcijas – pigiosPrekes ir brangiosPrekes, kurios atskiria prekes į dvi grupes: < 2€ ir ≥ 2€. Atvaizduok dvi lenteles – po vieną kiekvienai grupei.
  return (
    <div>
      <div>{duomenis(prekes)}</div>
      <div>Bendra prekiu nuolaida yra {nuolaidosSuma().toFixed(2)}€</div>
      <div>Bendra krepselio kaina butu: {krepselioKaina().toFixed(2)}€</div>
      <div>{duomenis(virsijaKaina(2))}</div>
      <br />
      <div>{duomenis(turimosPrekes())}</div>
      <br />
      <div>{brangiausiaPreke()}</div>
      <br />
      <div>{vidutineNuolaiduKaina()}</div>
    </div>
  );
};

export default PrekiuKrepselis;

// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite mokymų/kursų masyvą, kuriame būtų bent 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. trukmė,
// 3. kaina

// TODO: atvaizduokite visus mokymus/kursus norimu formatu

const Komp9 = () => {
  const kursai = [
    { pavadinimas: "FullStack", trukmė: "200val", kaina: 3000 + "€" },
    { pavadinimas: "C++", trukme: "160val", kaina: 2500 + "€" },
    { pavadinimas: "C#", trukmė: "120val", kaina: 2000 + "€" },
  ];
  return (
    <div>
      {kursai.length > 0 ? (
        kursai.map((kursas) => (
          <div>
            <div>Kurso pavadinimas: {kursas.pavadinimas}</div>
            <div>Kurso trukme: {kursas.trukme}</div>
            <div>Kurso kaina: {kursas.kaina}</div>
            <br />
          </div>
        ))
      ) : (
        <p>truksta duomenu</p>
      )}
    </div>
  );
  ß;
};

export default Komp9;

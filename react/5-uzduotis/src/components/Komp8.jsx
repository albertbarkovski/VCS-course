// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite šalių masyvą, kuriame būtų 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. sostinė,
// 3. gyventojų skaičius

// TODO: atvaizduokite visas šalis norimu formatu

const Komp8 = () => {
  const salys = [
    { pavadinimas: "Lietuva", sostinė: "Vilnius", gyventojai: 3000000 },
    { pavadinimas: "Lenkija", sostinė: "Warsaw", gyventojai: 37000000 },
    { pavadinimas: "Latvija", sostinė: "Riga", gyventojai: 1800000 },
  ];

  return (
    <div>
      <div>
        {salys.map((salis) =>
          salys.length > 0 ? (
            <div>
              <h2>Salis: {salis.pavadinimas}</h2>
              <h3>Sostine:{salis.sostinė}</h3>
              <p>
                <strong>Gyventoju sk: {salis.gyventojai}</strong>
              </p>
            </div>
          ) : (
            <p>Truksta duomenu</p>
          )
        )}
      </div>
    </div>
  );
};

export default Komp8;

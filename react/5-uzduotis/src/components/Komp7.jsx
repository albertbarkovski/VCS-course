// TODO: prijunkite šį komponentą prie App.jsx

const Komp7 = () => {
  let straipsniai = [
    {
      id: 1,
      pavadinimas: "Pirmas straipsnis",
      tekstas:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      id: 2,
      pavadinimas: "Antras straipsnis",
      tekstas:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      id: 3,
      pavadinimas: "Trečias straipsnis",
      tekstas:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
  ];

  return (
    // TODO: atvaizduokite visus straipsnius,
    // visus atkartodami div'e su klase 'straipsnis',
    // įsistatykite atitinkamose jo vietose straipsnio
    // pavadinimą ir tekstą

    <div>
      <h1>Straipsniai</h1>
      <div className="straipsniu-sarasas">
        {straipsniai.length > 0 ? (
          straipsniai.map((straipsnis) => (
            <div className="straipsnis">
              <h3>{straipsnis.pavadinimas}</h3>
              <p>{straipsnis.tekstas}</p>
            </div>
          ))
        ) : (
          <p>Truksta duomenu</p>
        )}
      </div>
    </div>
  );
};

export default Komp7;

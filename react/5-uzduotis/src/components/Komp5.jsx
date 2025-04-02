// TODO: prijunkite šį komponentą prie App.jsx

const Komp5 = () => {
  let spalvos = ["raudona", "geltona", "žalia", "mėlyna", "violetinė"];

  return (
    // TODO: atvaizduokite visas spalvas
    // naudodami map funkciją, įdėdami viską
    // į rikiuotą sąrašą (ol)

    <div>
      {spalvos.length > 0 ? (
        <ol>
          {spalvos.map((spalva) => (
            <li>{spalva}</li>
          ))}
        </ol>
      ) : (
        <p>Spalvu nera</p>
      )}
    </div>
  );
};

export default Komp5;

// 1. Susikurkite funkciją, kuri per argumentus gautų medžio pavadinimą. Ši funkcija tikriną koks tai medis ir išveda kokį nors atsakymą, pvz jeigu uosis – „oho koks rimtas“, jeigu ąžuolas – „labai mielas raštas“ ar pan.
// 2. Komponente susikurkite tris mygtukus. Ant kiekvieno mygtuko paspaudimo kvieskite tą pačią tikrinimo funkciją, tačiau kiekviename mygtuko perduokite vis kitą medžio pavadinimą.

const GeriausiasMedis = () => {
  const komentarasMedziui = (medis) => {
    let komentarai = [
      "Oho koks didelis",
      "nu labai grazus",
      "nuostabiausias medis",
      "toks kietas",
    ];
    let komentarIndx = Math.floor(Math.random() * komentarai.length);
    let answer = medis + " " + komentarai[komentarIndx];
    return alert(answer);
  };

  return (
    <>
      <button onClick={() => komentarasMedziui("Uosis")}>Uosis</button>
      <button onClick={() => komentarasMedziui("Azuolas")}>Azuolas</button>
      <button onClick={() => komentarasMedziui("Klevas")}>Uosis</button>
    </>
  );
};

export default GeriausiasMedis;

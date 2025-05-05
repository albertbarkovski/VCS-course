// Vaikinis komponentas „Salis“
// 1. Padarykite, kad šis komponentas priimtų šalies ir žemyno informaciją (galite naudoti tiesiai props arba išskaidyti gautą objektą dalimis).
// 2. Išveskite visą gautą informaciją savo norimu būdu.
// 3. Susikurkite funkciją (arba išveskite tiesiai komponente), kuri patikrintų žemyną ir jeigu žemynas yra „Europa“, kad išvestų papildomą tekstą „jėga“, kitu atveju nieko nedarykite.
const Salis = ({ pavadinimas, ziemynas }) => {
  return (
    <div>
      <p>
        Salis {pavadinimas}, kuri randasi {ziemynas} zemyne
      </p>
      {ziemynas === "Europa" && <p>Jega!Europa</p>}
    </div>
  );
};

export default Salis;

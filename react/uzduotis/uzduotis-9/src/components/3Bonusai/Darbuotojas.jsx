// Vaikinis komponentas „Darbuotojas“
// 1. Šis komponentas turi priimti informaciją, galite naudoti props objektą arba jį išsiskaidyti į dalis.
// 2. Gautą informaciją išveskite komponentą.
// 3. Susikurkite funkciją, kuri patikrina bonuso dydį. Jeigu darbuotojas bonuso negavo arba jis yra lygus 0, tai išveskite „gaila “, jeigu bonusas tarp 0 ir 100 išveskite „bent ant kebabo užmetė..“, jei bonusas 100 ir daugiau „nu, jau kažkas geriau“. Iškvieskite šią funkciją paragrafe.

const Darbuotojas = ({ vardas, pavarde, premija }) => {
  const kokiaPremija = () => {
    if (premija > 100) return "Good money!!";
    else if (premija > 0) return "Bent kebabui bus";
    else return "Damn bitch";
  };

  return (
    <div>
      <h4>
        Darbuotojas {vardas} {pavarde}
      </h4>
      <p>Gavo premija {premija} €</p>
      <p>{kokiaPremija()}</p>
    </div>
  );
};

export default Darbuotojas;

// Vaikinis komponentas „Role“
// 1. Padarykite, kad šis komponentas priimtų rolės pavadinimą ir vartotojų kiekį. Galite priimti visą props objektą arba išsiskaidyti objektą į dalis.
// 2. Išveskite šią informaciją norimu būdu komponente.
// 3. Sukurkite funkciją kuri patikrintų vartotojų kiekį ir jeigu jis didelis (lygiai ar daugiau nei 20), tuomet išvestų pasirinktą tekstą, jei mažiau – kitą tekstą. Šią funkciją iškvieskite paragrafe.

const Role = ({ pavadinimas, kiekis }) => {
  return (
    <div>
      <h4>{pavadinimas}</h4>
      <p>
        Restorane dirba: <strong>{kiekis}</strong>
      </p>
      {kiekis >= 5 && <p>Darbuotoju kiekis yra daugiau nei 4 zmones</p>}
    </div>
  );
};

export default Role;

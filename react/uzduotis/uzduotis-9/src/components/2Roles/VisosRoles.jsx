// Aplankas „Roles“
// Tėvinis komponentas „VisosRoles“
// 1. Šiame komponente kelis kartus kvieskite komponentą „Role“. Kviečiant perduokite šią informaciją: rolės pavadinimas; kiekis kiek vartotojų turi šią rolę. Kiekvieną kartą informaciją perduokite tiesiai komponento kvietimo argumentuose/atributuose arba galite susikurti papildomus kintamuosius ir perduoti juos.

import Role from "./Role";

const VisosRoles = () => {
  const roles = [
    { pavadinimas: "Padavejas", kiekis: 7 },
    { pavadinimas: "Barmenas", kiekis: 2 },
    { pavadinimas: "Administratorius", kiekis: 2 },
    { pavadinimas: "Sefas", kiekis: 1 },
    { pavadinimas: "Vyrejas", kiekis: 5 },
  ];

  return (
    <div>
      <h3>Restorano darbuotojai</h3>
      <div>
        {roles.map((pozicija, i) => (
          <Role
            key={i}
            pavadinimas={pozicija.pavadinimas}
            kiekis={pozicija.kiekis}
          />
        ))}
      </div>
    </div>
  );
};

export default VisosRoles;

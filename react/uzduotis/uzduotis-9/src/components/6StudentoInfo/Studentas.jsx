// Aplankas „StudentoInfo“
// Tėvinis komponentas „Studentas“
// 1. Susikurkite kintamuosius informacijai apie studentą pasakyti (vardas; pavardė; mokykla; mokymo programa). Šią informaciją išveskite pasirinktu būdu tame pačiame „Studentas“ komponente.
// 2. Susikurkite masyvą su studento pažymiais.

import Pazymys from "./Pazymys";

// 3. Iteruokite per kiekvieną pažymį su map funkcija ir kvieskite komponentą „Pazymys“. Šiam komponentui perduokite po vieną pažymį iš pažymių masyvo.
const Studentas = () => {
  const studentai = [
    {
      vardas: "Jonas",
      pavarde: "Povilauskas",
      mokykla: "Vilniaus licėjus",
      mokymoPrograma: "Matematika",
      pazymiai: [10, 9, 5, 10, 4, 10, 7, 3],
    },
  ];

  return (
    <div>
      {studentai.map((stud, i) => (
        <div key={i}>
          <h2>
            {stud.vardas} {stud.pavarde}
          </h2>
          <p>
            {stud.mokykla} - {stud.mokymoPrograma}
          </p>
          <div>
            {stud.pazymiai.map((sk, i) => (
              <Pazymys key={i} pazymys={sk} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Studentas;

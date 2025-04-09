// Komponentas „EinaPrieLentos“
// 1. Komponente susikurkite studentų vardų masyvą.
// 2. Sukurkite funkciją, kuri iš studentų vardų masyvo parinktų bet kurį vieną studentą ir jį parodytų su alert. Susikurkite mygtuką, kurį paspaudus ši funkcija būtų iškviesta.

const EinaPrieLentos = () => {
  let studentai = ["Jonas", "Albertas", "Lukas", "Darius", "Agne"];

  const randomStud = () => {
    let randomIndx = Math.floor(Math.random() * studentai.length);
    return alert(studentai[randomIndx]);
  };

  return (
    <div>
      <button className="studentai-btn" onClick={randomStud}>
        Random studentas
      </button>
    </div>
  );
};

export default EinaPrieLentos;

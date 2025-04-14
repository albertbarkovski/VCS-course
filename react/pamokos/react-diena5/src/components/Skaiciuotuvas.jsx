// Komponentas „Skaiciuotuvas“
// 1. Komponente sukurkite du input laukus skaičiams įvesti.
// 2. Sukurkite mygtukus su ženklais +, -, *, /.
// 3. Paspaudus bet kurį mygtuką (onClick), atlikite atitinkamą aritmetinį veiksmą su įvestais skaičiais ir išveskite rezultatą konsolėje.

const Skaiciuotuvas = () => {
  const aritmetika = (veiksmas) => {
    const pirmasSk = document.getElementById("pirmas-input").event.target.value;
    return console.log(pirmasSk);
  };
  return (
    <div>
      <div>Skaiciuotuvas</div>
      <input id="pirmas-input" type="number" />
      <br />
      <input id="antras-input" type="number" />
      <br />
      <button onClick={() => aritmetika("+")}>+</button>
      <button onClick={() => aritmetika("-")}>-</button>
      <button onClick={() => aritmetika("*")}>*</button>
      <button onClick={() => aritmetika("/")}>/</button>
    </div>
  );
};

export default Skaiciuotuvas;

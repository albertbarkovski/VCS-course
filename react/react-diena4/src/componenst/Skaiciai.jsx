// Komponentas „Skaiciai“
// 1. Komponente susikurti skaičių masyvą.
// 2. Susikurkite funkciją, kuri rastų skaičių sumą ir išvestų atsakymą per alert. Susikurkite mygtuką, kuris ant paspaudimo iškviestų šią funkciją.
// 3. Susikurkite funkciją, kuri rastų didžiausią skaičių iš masyvo ir išvestų atsakymą per alert. Susikurkite mygtuką, kuris ant paspaudimo iškviestų šią funkciją.

const Skaiciai = () => {
  let skaiciai = [12, 23, 33, 499, 54, 56, 7, 8, 9];

  const skaiciuSuma = () => {
    let suma = skaiciai.reduce((a, b) => a + b);

    return alert("Suma: " + suma);
  };
  const didziausiasSk = () => {
    let didziausias = skaiciai.reduce((max, sk) => (max > sk ? max : sk));

    return alert("Didziausias: " + didziausias);
  };
  return (
    <div>
      <button onClick={skaiciuSuma}>Masyvo suma</button>
      <button onClick={didziausiasSk}>Didziausias skaicius</button>
    </div>
  );
};

export default Skaiciai;

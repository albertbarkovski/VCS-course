// TODO: prijunkite šį komponentą prie App.jsx

const Komp1 = () => {
  let vardas = "Jonas";
  let amzius = 25;

  return (
    // TODO: šiame div sukurkite h1 elementą,
    // kuriame būtų atvaizduotas vardas ir amžius
    <div>
      <h1>Komp1</h1>
      <div>
        {vardas}, amzius {amzius}
      </div>
    </div>
  );
};

export default Komp1;

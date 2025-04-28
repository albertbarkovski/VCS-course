const Darbuotojas = (props) => {
  let darb = props.darbuotojas;
  return (
    <div>
      <h3>
        {darb.vardas} {darb.pavarde}
      </h3>
      <p>Yra {darb.amzius} m.amziaus</p>
      <p>Dirba kaip {darb.pareigos}</p>
      <p>Uzdirba {darb.atlyginimas} €</p>
    </div>
  );
};

export default Darbuotojas;

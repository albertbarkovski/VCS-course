const Studentas = (props) => {
  return (
    <div>
      <h3>
        {props.studentas.vardas} {props.studentas.pavarde}
      </h3>{" "}
      <p>Yra {props.studentas.amzius} m. amziaus</p>
    </div>
  );
};

export default Studentas;

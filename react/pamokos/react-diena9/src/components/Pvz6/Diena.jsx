const Diena = (props) => {
  const arGera = () => {
    if (props.temp >= 15) {
      return "Gera diena";
    } else {
      return "Bloga diena";
    }
  };
  return (
    <div>
      <h3>Dienos temperatura:{props.temp}</h3>
      <p>{arGera()}</p>
    </div>
  );
};

export default Diena;

import Diena from "./Diena";

const Savaite = () => {
  let temperaturos = [14, 20, 17, 18, 19, 30, 25];
  return (
    <div>
      <h2>Savaite</h2>
      <div>
        {temperaturos.map((temp, i) => (
          <p key={i}>Dienos temperatura: {temp}</p>
        ))}
      </div>
      <div>
        <Diena temp={temperaturos[0]} />
        <Diena temp={temperaturos[1]} />
        <Diena temp={temperaturos[2]} />
        <Diena temp={temperaturos[3]} />
        <Diena temp={temperaturos[4]} />
        <Diena temp={temperaturos[5]} />
        <Diena temp={temperaturos[6]} />
      </div>
      <hr />
      <div>
        {temperaturos.map((temp, i) => (
          <Diena key={i} temp={temp} />
        ))}
      </div>
    </div>
  );
};

export default Savaite;

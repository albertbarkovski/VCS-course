const Sansas = () => {
  const randomSK = Math.floor(Math.random() * 10) + 1;
  const arLaimejai = () => {
    randomSK >= 5
      ? alert(randomSK + " laimejai")
      : alert(randomSK + " pralaimejai");
  };
  return (
    <div>
      <button onClick={arLaimejai}>Patikrink ar laimejai</button>
    </div>
  );
};

export default Sansas;

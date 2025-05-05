const TekstoVaik = (props) => {
  const patikrinimas = () => {
    if (
      props.tekstas &&
      props.tekstas.split("").filter((raide) => raide == "a").length > 0
    ) {
      return "Tekste yra reide A";
    } else {
      return "A raides tekste nera";
    }
  };
  return (
    <div>
      <p>Gautas tekstas:{props.tekstas}</p>
      <p>Teksto ilgis:{props?.tekstas?.length}</p>
      <p>{patikrinimas()}</p>
    </div>
  );
};

export default TekstoVaik;

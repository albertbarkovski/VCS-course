import TekstoVaik from "./TekstoVaik";

const TekstoBendras = () => {
  let vidinisTekstas = "Trecia eilute";
  return (
    <div>
      <h2>Teksto dalykai</h2>
      <TekstoVaik tekstas="Pirma eilute" />
      <TekstoVaik tekstas="Antra eilute" />
      <TekstoVaik tekstas={vidinisTekstas} />
      <TekstoVaik />
    </div>
  );
};

export default TekstoBendras;

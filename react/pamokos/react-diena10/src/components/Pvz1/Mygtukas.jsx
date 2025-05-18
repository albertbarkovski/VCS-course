import React from "react";

const Mygtukas = (props) => {
  const miestas = props.miestas;
  const paspaudusFn = (event) => {
    console.log(event.target.innerText);

    props.griztaReiksme(event.target.innerText);
  };
  return (
    <>
      <button onClick={paspaudusFn}>{miestas}</button>{" "}
    </>
  );
};

export default Mygtukas;

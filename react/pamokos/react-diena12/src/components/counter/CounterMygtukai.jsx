import React from "react";

const CounterMygtukai = (props) => {
  const pagautiSk = (skaicius) => {
    props.atiduodamReiksme(skaicius);
  };
  return (
    <div>
      <button onClick={() => pagautiSk(1)}>+1</button>
      <button onClick={() => pagautiSk(2)}>+2</button>
      <button onClick={() => pagautiSk(5)}>+5</button>
      <button onClick={() => pagautiSk(10)}> +10</button>
    </div>
  );
};

export default CounterMygtukai;

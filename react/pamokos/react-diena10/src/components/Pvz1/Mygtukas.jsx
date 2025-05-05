import React from "react";

const Mygtukas = ({ miestas }) => {
  const paspaudusFn = (event) => {
    console.log(event.target.innerText);
  };
  return (
    <>
      <button onClick={paspaudusFn}>{miestas}</button>{" "}
    </>
  );
};

export default Mygtukas;

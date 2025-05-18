import React from "react";

const ProgramavimoKalba = (props) => {
  const issiunciam = (event) => {
    props.grazinamReiksme(event.target.innerText);
  };
  return (
    <div>
      <button onClick={issiunciam}>HTML</button>
      <button onClick={issiunciam}>CSS</button>
      <button onClick={issiunciam}>JavaScript</button>
      <button onClick={issiunciam}> PHP</button>
    </div>
  );
};

export default ProgramavimoKalba;

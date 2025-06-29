import React from "react";
import { NavLink } from "react-router";

const Contacts = () => {
  return (
    <div>
      <NavLink to={"/about"} />
      about
      <NavLink /> Contacts
    </div>
  );
};

export default Contacts;

import { NavLink, Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <div
        className="meniu"
        style={{ height: "50px", background: "red", color: "white" }}
      >
        <ul>
          <li>
            <NavLink to={"/"}>Pagrindinis</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>Apie mus</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Produktai</NavLink>
          </li>
          <li>
            <NavLink to={"/contacts"}>Kontaktai</NavLink>
          </li>
          <li>
            <NavLink to={"/admin"}>Admin</NavLink>
          </li>
        </ul>
      </div>
      <br></br>
      <Outlet />
      <br></br>
      <div style={{ height: "50px", background: "red", color: "white" }}>
        footer
      </div>
    </>
  );
};

export default MainLayout;

import { NavLink, Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <>
      <div style={{ height: "50px", background: "red", color: "white" }}>
        <NavLink to={"/"}>Pagrindinis</NavLink>
      </div>
      <br></br>
      <Outlet />
    </>
  );
};

export default AdminLayout;

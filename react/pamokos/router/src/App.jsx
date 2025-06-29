import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contacts from "./pages/Contacts";

import { createBrowserRouter, RouterProvider } from "react-router";
import Klaida from "./pages/Klaida";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/product", element: <Product /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "*", element: <Klaida /> },
]);

function App() {
  return (
    <>
      <div style={{ height: "100px", background: "red", color: "white" }}>
        Header
      </div>
      <br />
      <br />
      <RouterProvider router={router} />
      <br />
      <br />
      <div style={{ height: "100px", background: "red", color: "white" }}>
        Footer
      </div>
    </>
  );
}

export default App;

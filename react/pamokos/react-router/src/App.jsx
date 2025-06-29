import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Contacts from "./pages/Contacts";

import { createBrowserRouter, NavLink, RouterProvider } from "react-router";
import Klaida from "./pages/Klaida";
import MainLayout from "./components/MainLayout";
import AdminLayout from "./components/AdminLayout";

const puslapiai = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/products", element: <Products /> },
      { path: "/product/:id", element: <Product /> },
      { path: "/contacts", element: <Contacts /> },
      { path: "*", element: <Klaida /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <Klaida /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={puslapiai} />
    </>
  );
}

export default App;

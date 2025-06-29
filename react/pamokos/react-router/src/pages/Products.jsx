import { NavLink } from "react-router";

const Products = () => {
  const prekes = [
    { id: 1, pavadinimas: "Knyga", kiekis: 4, kaina: 8 },
    { id: 2, pavadinimas: "Zurnalas", kiekis: 8, kaina: 3 },
    { id: 3, pavadinimas: "Lego", kiekis: 3, kaina: 20 },
  ];

  return (
    <div>
      <h2>Products</h2>
      <div>
        {prekes.map((preke, index) => (
          <div key={index}>
            {preke.pavadinimas}, {preke.kaina}&euro;
            <NavLink to={"/product/" + preke.id}>Placiau</NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

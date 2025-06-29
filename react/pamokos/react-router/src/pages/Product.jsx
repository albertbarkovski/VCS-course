import { NavLink, useParams } from "react-router";

const Product = () => {
  const { id } = useParams();

  const prekes = [
    { id: 1, pavadinimas: "Knyga", kiekis: 4, kaina: 8 },
    { id: 2, pavadinimas: "Zurnalas", kiekis: 8, kaina: 3 },
    { id: 3, pavadinimas: "Lego", kiekis: 3, kaina: 20 },
  ];

  const preke = prekes.find((p) => p.id === parseInt(id));

  return (
    <>
      {preke ? (
        <div>
          {preke.pavadinimas}, {preke.kaina}&euro;
          <NavLink to="/products">Atgal</NavLink>
        </div>
      ) : (
        <div>Tokio produkto nera</div>
      )}
    </>
  );
};

export default Product;

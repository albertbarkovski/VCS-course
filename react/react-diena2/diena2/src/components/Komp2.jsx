const Komp2 = () => {
  let skaiciai = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div>
      <h2>Komp2</h2>
      <p>lorem kak</p>
      <span>{skaiciai.join(",")}</span>
      <p>Pirmas: {skaiciai[0]}</p>
    </div>
  );
};

export default Komp2;

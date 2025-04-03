const ZodzioIlgis = () => {
  let zodis = "obuolis";

  const zodzioIlgis = (zodis) => {
    return zodis.length;
  };
  return (
    <div>
      <p>{zodis}</p>
      <p>
        Zodis {zodis} turi {zodzioIlgis(zodis)} simbolius
      </p>
    </div>
  );
};

export default ZodzioIlgis;

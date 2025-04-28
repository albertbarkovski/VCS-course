const Automobilis = ({ auto }) => {
  const { marke, modelis } = auto;
  return (
    <div>
      <h3>
        {marke} {modelis}
      </h3>
    </div>
  );
};

export default Automobilis;

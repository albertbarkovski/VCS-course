// TODO: prijunkite šį komponentą prie App.jsx

const Komp6 = () => {
  let temperaturos = [15, 20, 25, 30, 35, 40];

  return (
    // TODO: atvaizduokite visas temperatūras
    // naudodami map funkciją, įdėdami viską
    // į lentelę (table),
    // kurioje būtų du stulpeliai:
    // 1. eilutės numeris (1, 2, 3, ...)
    // 2. temperatūra iš masyvo

    <div>
      <div>Komp6</div>

      <table>
        {temperaturos.length > 0 ? (
          temperaturos.map((temperatura, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{temperatura}</td>
            </tr>
          ))
        ) : (
          <p>Nera duomenu</p>
        )}
      </table>
    </div>
  );
};

export default Komp6;

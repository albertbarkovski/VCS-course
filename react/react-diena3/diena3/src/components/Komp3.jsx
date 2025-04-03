const Komp3 = () => {
  let students = [
    { id: 1, name: "John", grade: 8 },
    { id: 2, name: "Mike", grade: 4 },
    { id: 3, name: "Suzee", grade: 5 },
    { id: 4, name: "Anya", grade: 7 },
  ];

  const arTeigiamas = (grade) => {
    return grade > 4 ? "Teigiamas" : "Neigiamas";
  };

  const bendrasVidurkis = () => {
    return (
      students.reduce((sum, stud) => {
        return sum + stud.grade;
      }, 0) / students.length
    );
  };

  const arStudVirsVidurkio = (studntId) => {
    let stud = students.find((stud) => stud.id === studntId);
    if (stud.grade > bendrasVidurkis()) {
      return "Taip";
    } else {
      return "Ne";
    }
  };
  return (
    <>
      <h2>Studentai</h2>
      <p>Studentu bendras vidurkis: {bendrasVidurkis()}</p>
      <table border="1">
        <tr>
          <th>ID</th>
          <th>Vardas</th>
          <th>Vidurkis</th>
          <th>Ar teigiamas</th>
          <th>Ar virs vidurkio</th>
        </tr>
        {students.map((stud) => {
          return (
            <tr key={stud.id}>
              <td>{stud.id}</td>
              <td>{stud.name}</td>
              <td>{stud.grade}</td>
              <td>{arTeigiamas(stud.grade)}</td>
              <td>{arStudVirsVidurkio(stud.id)}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Komp3;

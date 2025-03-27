// 4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,dienomis.

let amzius = 20;

function countTime() {
  let dienos = 0;
  let valandos = 0;
  let minutes = 0;
  let sekundes = 0;

  let dienuMetuose = 365;
  let valanduDienoje = 24;
  let minutesValandoje = 60;
  let suekundesMinuteje = 60;

  dienos = amzius * dienuMetuose;
  valandos = amzius * dienuMetuose * valanduDienoje;
  minutes = amzius * dienuMetuose * valanduDienoje * minutesValandoje;
  sekundes = minutes * suekundesMinuteje;

  console.log(
    `zmogaus amzius:${amzius}, tai yra ${dienos} dienos, arba ${valandos} valandos, arba ${minutes} minutes, arba ${sekundes} sekundes`
  );
}
countTime();

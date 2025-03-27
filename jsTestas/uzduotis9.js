// 9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną tekstinę eilutę. Turėtumėte gauti tokį rezultatą: Tomas,Dainius,Paulius,Jonas Tomas+Dainius+Paulius+Jonas

let vardai = ["Tomas", "Dainius", "Paulius", "Jonas"];

let suKableliu = vardai.join(",");
let suPliusu = vardai.join("+");
console.log(suKableliu);
console.log(suPliusu);

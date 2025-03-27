// 10. Parašykite kodą, kuris sugeneruos dvylikos simbolių slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė, mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.

let slaptazodis = "";
let ilgis = 12;
let simboliai = [
  ["1234567890"],
  ["abcdefghijklmnoprstuvz"],
  ["ABCDEFGHIJKLMNOPRSTUVZ"],
  ["!#€$*^"],
];

function generateSymbol() {
  let simbolis = "";
  let randomCategory = Math.floor(Math.random() * simboliai.length);
  let randomCharacter = Math.floor(
    Math.random() * simboliai[randomCategory][0].length
  );

  return (simbolis = simboliai[randomCategory][0][randomCharacter]);
}

function generatePassword() {
  for (let i = 0; i < ilgis; i++) {
    slaptazodis += generateSymbol();
  }
  console.log(slaptazodis);
}

generatePassword();

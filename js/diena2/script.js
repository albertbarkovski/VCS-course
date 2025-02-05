let a = 15;

if (a % 5 == 0) {
  console.log(`1*${a}=${a * 1}`);
  console.log(`1*${a}=${a * 1}`);
  console.log(`1*${a}=${a * 1}`);
  console.log(`1*${a}=${a * 1}`);
  console.log(`1*${a}=${a * 1}`);
} else if (a % 2 == 0) {
  console.log(`
${a}
${a * a}
${a / 2}`);
} else if (a % 7 != 0) {
  let naujas = Math.ceil(Math.random() * 10 + 1);

  console.log(`
${naujas}
${a}+${naujas}=${a + naujas}
${a}-${naujas}=${a - naujas}
${a}*${naujas}=${a * naujas}
${a}/${naujas}=${a / naujas}`);
} else {
  console.log("visa kita");
}

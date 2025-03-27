const images = [
  "fruits-img/apple.jpeg",
  "fruits-img/grape.jpeg",
  "fruits-img/mango.jpeg",
  "fruits-img/pineapple.jpeg",
  "fruits-img/strawbeerry.jpeg",
  "fruits-img/watermelon.jpeg",
];

let cards = [...images, ...images].sort(() => Math.random() - 0.5);

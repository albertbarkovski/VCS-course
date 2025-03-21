// const isPrime = (num) => {
//   for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
//     if (num % i === 0) return false;
//   }
//   return num > 1;
// };

// console.log(isPrime(10));

// const isPrime = (num) => {
//   let times = 1;
//   for (i = 2; i < num; i++) {
//     if (num % i == 0) {
//       times++;
//     }
//   }
//   times == 1 ? console.log(true) : console.log(false);
// };

// isPrime(4);

// function findElement(matrix, target) {
//     for (let row = 0; row < matrix.length; row++) {
//       for (let col = 0; col < matrix[row].length; col++) {
//         if (matrix[row][col] === target) {
//           console.log(`Elementas ${target} rastas eilutėje ${row}, stulpelyje ${col}`);
//           return { row, col }; // Grąžiname rasto elemento vietą
//         }
//       }
//     }
//     console.log(`Elementas ${target} nerastas.`);
//     return null;
//   }

//   findElement(
//     [
//       [1, 4, 7, 11],
//       [2, 5, 8, 12],
//     ],
//     7
//   );

// function maxTotalDuration(array) {
//   let include = [array[0]];

//   for (let i = 1; i < array.length; i++) {
//     if (i % 2 != 0 && i != 1) {
//       include.push(array[i]);
//     }
//   }
//   console.log(include);
// }
// maxTotalDuration([15, 15, 30, 15, 30]);

function solvePacman(board, instructions) {
  const directions = [
    [1, 0], // Žemyn
    [0, -1], // Kairėn
    [-1, 0], // Aukštyn
    [0, 1], // Dešinėn
  ];

  let pacman = { x: 0, y: 0, dir: 0, score: 0 };
  let ghost = null;

  // Rasti Pac-Mano ir vaiduoklio pradines vietas
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      if (board[y][x] === "P") {
        pacman.x = x;
        pacman.y = y;
      }
      if (board[y][x] === "G") {
        ghost = { x: x, y: y, dir: 2 }; // Vaiduoklis pradeda judėti aukštyn
      }
    }
  }

  // Judėjimo funkcija
  function move(entity) {
    let newX = entity.x + directions[entity.dir][1];
    let newY = entity.y + directions[entity.dir][0];

    // Patikriname ar ne išeina iš lentos ribų
    if (newX < 0 || newX >= board[0].length || newY < 0 || newY >= board.length)
      return false;

    // Patikriname ar neatsitrenkia į sieną
    if (board[newY][newX] === "W") return false;

    entity.x = newX;
    entity.y = newY;
    return true;
  }

  for (let instruction of instructions) {
    if (instruction === "L") {
      pacman.dir = (pacman.dir + 1) % 4; // Sukamės į kairę
    } else if (instruction === "R") {
      pacman.dir = (pacman.dir + 3) % 4; // Sukamės į dešinę
    } else if (instruction === "F") {
      if (move(pacman)) {
        // Jei atsitrenkia į vaiduoklį
        if (pacman.x === ghost.x && pacman.y === ghost.y) return 0;
        // Jei surenkamas obuolys
        if (board[pacman.y][pacman.x] === "A") {
          pacman.score++;
          board[pacman.y][pacman.x] = "."; // Pašaliname obuolį
        }
      }
    }

    // Vaiduoklio judėjimas
    if (ghost) {
      if (!move(ghost)) {
        ghost.dir = (ghost.dir + 3) % 4; // Jei negali judėti, pasisuka į dešinę
      }
      // Jei vaiduoklis pagauna Pac-Maną
      if (pacman.x === ghost.x && pacman.y === ghost.y) return 0;
    }
  }

  return pacman.x + pacman.y + pacman.score;
}

solvePacman(
  [
    ["P", "W", "."],
    [".", "A", "G"],
    [".", "W", "."],
  ],
  "FLF"
);

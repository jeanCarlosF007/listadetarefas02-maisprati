// Criação da matriz

function getRandomInt() {
  return Math.floor(Math.random() * 11);
}

const matrix = [];
for (let i = 0; i < 3; i++) {
  const element = [];
  for (let j = 0; j < 3; j++) {
    element[j] = getRandomInt();
  }
  matrix[i] = element;
}


console.log(matrix);

//Média diagonal secundária

let sum = 0;
let j = 2;

for (let i = 0; i < 3; i++) {
  sum += matrix[i][j--];
}

let averageSecondaryDiagonal = sum / 3;

console.log(`Média da diagonal secundária: ${averageSecondaryDiagonal}`);
console.log();

//Elementos da diagonal principal:

const mainDiagonal = [];

for (let i = 0; i<3; i++) {
  mainDiagonal.push(matrix[i][i]);
}

// Multiplicação da diagonal principal pela média:

const multipliedElements = [];

for (let i = 0; i<mainDiagonal.length; i++) {
  multipliedElements.push(mainDiagonal[i] * averageSecondaryDiagonal);
}

console.log(`Elementos da diagonal principal multiplicados pela média da secundária:`);
console.log(multipliedElements);

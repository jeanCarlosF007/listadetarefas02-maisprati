// Criar matriz para teste

function getRandomInt() {
  return Math.floor(Math.random() * 11);
}

const matrix = [];

for (let i = 0; i < 5; i++) {
  const element = [];
  for (let j = 0; j < 5; j++) {
    element[j] = getRandomInt();
  }
  matrix[i] = element;
}

console.log('---MATRIZ---\n');
console.log(matrix);

//Algoritmo com os cálculos das somas

let sumLineFour = 0;
let sumSecondColumn = 0;
let sumMainDiagonal = 0;
let sumAllElements = 0;

for (let i = 0; i < 5; i++) {
  sumLineFour += matrix[3][i];
  sumSecondColumn += matrix[i][1];
  sumMainDiagonal += matrix[i][i];
  for (let j = 0; j < 5; j++) {
    sumAllElements += matrix[i][j];
  }
}

console.log(`\nSoma dos elementos na 4ª Linha = ${sumLineFour}`);
console.log(`\nSoma dos elementos na 2ª Coluna = ${sumSecondColumn}`);
console.log(`\nSoma dos elementos na Diagonal Principal = ${sumMainDiagonal}`);
console.log(`\nSoma de todos os elementos da matriz = ${sumAllElements}`);

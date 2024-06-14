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

let sumLines = [];
let sumColumns = [];

for (let i = 0; i < 5; i++) {
  let lineSum = 0;
  let columnSum = 0;
  for (let j = 0; j < 5; j++) {
    lineSum += matrix[i][j];
    columnSum += matrix[j][i];
  }
  sumLines.push(lineSum);
  sumColumns.push(columnSum);
}

console.log(`
  Soma das linhas = ${sumLines}
  Soma das colunas = ${sumColumns}
  `);

// Criação da matriz

function getRandomInt() {
  return Math.floor(Math.random() * 11);
}

const matrix = [];
for (let i = 0; i < 50; i++) {
  const element = [];
  for (let j = 0; j < 50; j++) {
    element[j] = getRandomInt();
  }
  matrix[i] = element;
}

//Leitura da matriz:

console.log('Linhas da matriz:');
for (let i = 0; i<matrix.length; i++) {
  console.log(matrix[i]);
}

//Multiplicação de cada linha pelo elemento da diagonal principal:

const newMatrix = [];

for (let i =0; i<matrix.length; i++) {
  const newMatrixLine = []
  for (let j = 0; j<matrix[i].length; j++){
    let newElement = matrix[i][j] * matrix[i][i];
    newMatrixLine.push(newElement);
  }
  newMatrix.push(newMatrixLine);
}

console.log('--- NOVA MATRIZ COM OS ELEMENTOS MULTIPLICADOS ---');
console.log(newMatrix);

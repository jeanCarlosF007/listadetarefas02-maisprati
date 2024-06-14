// Criar matriz para teste

function getRandomInt() {
  return Math.floor(Math.random() * 11);
}

const matrixV = [];

for (let i = 0; i < 30; i++) {
  const element = [];
  for (let j = 0; j < 30; j++) {
    element[j] = getRandomInt();
  }
  matrixV[i] = element;
}

console.log('---MATRIZ---\n');
console.log(matrixV);

//Algoritmo desejado

const integerA = matrixV[3][5];
let countNumber = 0;
const matrixX = [];

for (let i = 0; i < 30; i++) {
  let innerElementOfX = [];
  for (let j = 0; j < 30; j++) {
    if (matrixV[i][j] === integerA) {
      countNumber++;
    } else {
      innerElementOfX.push(matrixV[i][j]);
    }
  }
  matrixX.push(innerElementOfX);
}

console.log(`Número de vezes que o número '${integerA}' aparece na matriz: ${countNumber}`);
console.log('---Matriz X com os elemetos diferentes de A:');
console.log(matrixX);

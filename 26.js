//Criação das matrizes para teste

function getRandomInt() {
  return Math.floor(Math.random() * 101);
}

const matrixA = [];
const matrixB = [];

for (let i = 0; i < 3; i++) {
  let innerMatrixA = [];
  let innerMatrixB = [];
  for (let j = 0; j < 5; j++) {
    const elementA = getRandomInt();
    const elementB = getRandomInt();
    innerMatrixA.push(elementA);
    innerMatrixB.push(elementB);
  }
  matrixA.push(innerMatrixA);
  matrixB.push(innerMatrixB);
}

//Cálculo do produto entre as matrizes (elemento por elemento)

const product = [];

for (let i = 0; i < 3; i++) {
  const innerElements = [];
  for (let j = 0; j < 5; j++) {
    const product = matrixA[i][j] * matrixB[i][j];
    innerElements.push(product);
  }
  product.push(innerElements);
}

console.log(matrixA);
console.log(matrixB);
console.log(product);


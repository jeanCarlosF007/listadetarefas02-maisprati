// Criar matriz

function getRandomNumber() {
  return Math.floor(Math.random() * 201) - 100;
}

const matrixM = [];

for (let i = 0; i < 12; i++) {
  const element = [];
  for (let j = 0; j < 13; j++) {
    element[j] = getRandomNumber();
  }
  matrixM[i] = element;
}

//Algoritmo que divide os elementos das linhas pelo maior elemento em módulo

const modifiedMatrix = [];

for (let i = 0; i < 12; i++) {
  let element = 0;
  let innerArray = []
  for (let j = 0; j < 13; j++) {
    const module = matrixM[i][j] < 0 ? -matrixM[i][j] : matrixM[i][j];
    element = module > element ? module : element;
  }
  for (let j = 0; j < 13; j++) {
    let newElement = matrixM[i][j] / element;
    innerArray.push(newElement);
  }
  modifiedMatrix.push(innerArray);
}

console.log('---MATRIZ ORIGINAL---');
console.log(matrixM);
console.log('---NOVA MATRIZ---');
console.log(modifiedMatrix);

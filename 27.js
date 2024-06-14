// Criar matriz e valor para teste

function getRandomInt() {
  return Math.floor(Math.random() * 11);
}

const matrix = [];
const valueToMultiply = Math.floor(Math.random() * 11);

for (let i = 0; i < 6; i++) {
  const element = [];
  for (let j = 0; j < 6; j++) {
    element[j] = getRandomInt();
  }
  matrix[i] = element;
}

//Realizando a operação

const vectorV = [];

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    const product = valueToMultiply * matrix[i][j];
    vectorV.push(product);
  }
}

console.log('--- VETOR RESULTANTE ---');
console.log(vectorV);
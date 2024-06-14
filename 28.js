// Criar matriz para teste

function getRandomInt() {
  return Math.floor(Math.random() * 11);
}

const matrix = [];

for (let i = 0; i < 10; i++) {
  const element = [];
  for (let j = 0; j < 10; j++) {
    element[j] = getRandomInt();
  }
  matrix[i] = element;
}

console.log('---MATRIZ UTILIZADA ---');
console.log(matrix);

//Algoritmo que devolve a soma das diagonais acima e abaixo da principal

const aboveElements = [];
const underElements = [];
for (let i = 0; i < 9; i++) {
  const upElement = matrix[i][i + 1];
  const downElement = matrix[i + 1][i];
  aboveElements.push(upElement);
  underElements.push(downElement);
}

let sumAbove = 0;
let sumUnder = 0;

for (let i = 0; i < 9; i++) {
  sumAbove += aboveElements[i];
  sumUnder += underElements[i];
}

console.log('---ELEMENTOS ACIMA DA DIAGONAL PRINCIPAL---');
console.log(aboveElements);
console.log('\n---ELEMENTOS ABAIXO DA DIAGONAL PRINCIPAL---');
console.log(underElements);

console.log('\n---SOMA DOS ELEMENTOS ACIMA DA DIAGONAL PRINCIPAL:');
console.log(sumAbove);
console.log('\n---SOMA DOS ELEMENTOS ABAIXO DA DIAGONAL PRINCIPAL:');
console.log(sumUnder);

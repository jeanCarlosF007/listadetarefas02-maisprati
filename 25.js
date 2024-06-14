// Para o teste, a matriz será criada com números de 0 a 100
const matrix = new Array(15);
function getRandomInt() {
  return Math.floor(Math.random() * 101);
}

for (let i = 0; i < 15; i++) {
  const element = new Array(20)
  for (let j = 0; j < 20; j++) {
    element[j] = getRandomInt();
  }
  matrix[i] = element;
}

//Algoritmo para a soma das colunas

const sum = [];

for (let i = 0; i < 20; i++) {
  let sumColumn = 0;
  for (let j = 0; j < 15; j++) {
    sumColumn += matrix[j][i];
  }
  sum.push(sumColumn);
}

console.log(matrix);

console.log('--- SOMA DAS COLUNAS ---');
for (let i = 0; i < 20; i++) {
  console.log(`Soma da ${i+1}ª coluna: ${sum[i]}`);
}

const prompt = require('prompt-sync')();

console.log(`---VELOCIDADE DO CARRO (MULTA) ---`);

const speed = prompt('Digite a velocidade do carro em questão (em km/h): ');

if (speed < 0 || isNaN(Number(speed))) {
  console.log("Valor inválido!");
} else if (speed > 80) {
  const diference = speed - 80;
  const fineValue = 5 * diference;
  console.log(`Você foi multado em R$ ${fineValue}!`);
}
else {
  console.log('O veículo estava dentro do limite de velocidade');
}

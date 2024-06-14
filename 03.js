const prompt = require('prompt-sync')();

const distance = prompt('Digite a distância a ser percorrida (em km): ');

if (distance < 0 || isNaN(Number(distance))) {
  console.log('Valor inválido!');
} else if (distance <= 200) {
  const tripValue = 0.5 * distance;
  console.log(`O valor da sua passagem é de: ${tripValue}`);
} else {
  const tripValue = 0.45 * distance;
  console.log(`O valor da sua passagem é de: ${tripValue}`);
}

const prompt = require('prompt-sync')();

const firstSide = Number(prompt('Digite o valor do primeiro segmento de reta: '));
const secondSide = Number(prompt('Digite o valor do segundo segmento de reta: '));
const thirdSide = Number(prompt('Digite o valor do terceiro segmento de reta: '));

if (isNaN(firstSide) || isNaN(secondSide) || isNaN(thirdSide)) {
  console.log("Valor inválido!");
} else if (firstSide < secondSide + thirdSide && secondSide < firstSide + thirdSide && thirdSide < firstSide + secondSide) {
  console.log(`É possível formar um triângulo com essas medidas!`);
} else {
  console.log('Não é possível formar um triângulo com essas medidas, pois um dos lados não é menor do que a soma dos outros dois.');
}

const prompt = require('prompt-sync')();
let entry = 0;

console.log("--- TENTE ADIVINHAR O NÚMERO GERADO (de 1 a 5) ---");
console.log("");

const randomNumber = Math.floor(Math.random() * 5 + 1);
do {
  entry = Number(prompt('Digite um número de 1 a 5: '));
  if (isNaN(entry)) {
    console.log('Valor digitado inválido! Tente novamente!\n');
    continue;
  } else if (entry < 1 || entry > 5) {
    console.log('Os números possíveis estão entre 1 e 5! Tente novamente\n');
    continue;
  } else if (entry !== randomNumber) {
    console.log('Valor incorreto! Tente novamente!\n');
    continue;
  }
  console.log(`Você acertou! O número sorteado era: ${randomNumber}`);
} while (entry !== randomNumber);

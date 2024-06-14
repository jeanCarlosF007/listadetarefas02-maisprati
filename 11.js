const prompt = require('prompt-sync')();

const firstTerm = Number(prompt('Digite o primeiro termo da PA: '));
const difference = Number(prompt('Digite a razão da PA: '));
const values = [firstTerm];

for (let i = 0; i < 9; i++) {
  let newValue = values[i] + difference;
  values.push(newValue);
}

const sum = values.reduce((ac, val) => ac + val);

console.log(`
Os dez primeiros elementos da PA são: ${values.join()};
A soma dos valores acima é: ${sum};
`);

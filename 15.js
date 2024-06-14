const prompt = require('prompt-sync')();

const values = [];

while (values.length < 10) {
  const newValue = Number(prompt(`Digite o ${values.length + 1}º número inteiro: `));
  if (isNaN(newValue) || !Number.isInteger(newValue)) {
    console.log("Valor digitado inválido!\nVocê deve digitar um inteiro!");
  } else {
    values.push(newValue);
  }
}

const pairs = values.map((val, index) => {
  return {value:val, index: index};
}).filter(el => el.value % 2 === 0);

console.log("Valores pares e suas respectivas posições: ");
for (let i = 0; i < pairs.length; i++) {
  console.log(`Valor: ${pairs[i].value} - ${pairs[i].index + 1}ª posição (índice ${pairs[i].index})`);
}

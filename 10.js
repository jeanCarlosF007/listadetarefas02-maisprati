const prompt = require('prompt-sync')();

const values = [];
let continueInputs = true;

do {
  let wantToContinue = "S";
  if (values.length > 0) {
    wantToContinue = prompt('Você deseja continuar a inserir valores? "S" = SIM e "N" = NÃO: ');
  }
  if (wantToContinue.toUpperCase() !== "S" && wantToContinue.toUpperCase() !== "N") {
    console.log('Valor digitado inválido! \n Utilize "S" ou "N"!');
    continue;
  }
  if (wantToContinue.toUpperCase() === "N") {
    continueInputs = false;
  } else {
    const newValue = Number(prompt('Digite o valor a ser inserido: '));
    if (isNaN(newValue)) {
      console.log("Valor digitado inválido!");
    } else {
      values.push(newValue);
    }
  }

} while (continueInputs);

const sum = values.reduce((ac, val) => ac + val);
const minorValue = values.reduce((min, current) => current < min ? current : min, values[0]);
const average = sum / values.length;
const pair = values.filter(el => el % 2 === 0);

console.log(`
A soma de todos os valores digitados é: ${sum};
O menor valor digitado foi: ${minorValue};
A média entre todos os valores é: ${average};
E foram inseridos ${pair.length} número(s) par(es).
`);

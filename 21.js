const prompt = require('prompt-sync')();

function idealWeightFormula(height, gender) {
  if (typeof height !== 'number' || height <= 0) {
    console.error('A entrada não é válida para a altura, tente novamente. Exemplo: "1.50"');
    return;
  }

  gender = gender.toLowerCase()

  if (gender !== 'm' && gender !== 'f') {
    console.error('A entrada não é válida para o sexo. Por favor, insira "m" para masculino e "f" para feminino.');
    return;
  }

  let idealWeight = (gender === 'm') ? 72.7 * height - 58 : 62.1 * height - 44.7;

  return idealWeight.toFixed(2);

}

let continueExecution = true;

do {
  const height = Number(prompt("Digite a altura: "));
  const gender = prompt("Digite o sexo (use 'm' para masculino e 'f' para feminino): ");

  console.log(idealWeightFormula(height, gender));

  const interromper = prompt("Deseja interromper o programa? 'S' para 'sim': ");

  if (interromper.toUpperCase() === "S") {
    console.log("Programa encerrado");
    continueExecution = false;
  }

} while (continueExecution)

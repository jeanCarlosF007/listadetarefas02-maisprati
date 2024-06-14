const prompt = require('prompt-sync')();

const malesSalary = [];
const femalesSalary = [];
let response = "N";

do {
  let gender = "";
  let salary = 0;
  response = prompt('Você deseja inserir os dados de mais um funcionário? Digite "S" para "SIM" ou "N" para "NÃO": ');

  if (response.toUpperCase() !== "S" && response.toUpperCase() !== "N") {
    console.log('Valor digitado inválido! Digite "S" ou "N"!');
    continue;
  }
  if (response.toUpperCase() === "N") {
    console.log("Inserções finalizadas");
    break;
  }

  while (response !== "N") {
    gender = prompt('Digite o gênero do(a) funcionário(a) - use "M" para masculino e "F" para feminino: ');
    if (gender.toUpperCase() !== "M" && gender.toUpperCase() !== "F") {
      console.log("Valor digitado inválido! Tente novamente: ");
      continue;
    }
    break;
  }

  while (salary === 0) {
    salary = Number(prompt("Digite o salário do(a) funcionário(a): "));
    if (isNaN(salary) || salary < 0) {
      console.log("Valor digitado inválido!");
      salary = 0;
    }
  }

  if (gender.toUpperCase() === "M") malesSalary.push(salary);
  if (gender.toUpperCase() === "F") femalesSalary.push(salary);  
} while (response !== "N");

const sumSalary = (arrayOfSalaries) => {
  let total = 0;
  for (let el of arrayOfSalaries) {
    total += el;
  }
  return total;
}

const sumMalesSalary = sumSalary(malesSalary);
const sumFemalesSalary = sumSalary(femalesSalary);

console.log("A soma dos salários dos funcionários é: ");
console.log("Homens: " + sumMalesSalary);
console.log("Mulheres: " + sumFemalesSalary);

const prompt = require("prompt-sync")();

function survey() {
  let option, salary, children, totalSalary = 0, totalChildren = 0, highestSalary = 0, salaryUpTo350 = 0, totalPeople = 0, results = [];

  do {
    salary = parseFloat(prompt("Informe o salário: "));
    children = parseInt(prompt("Informe o número de filhos: "));


    totalSalary += salary;
    totalChildren += children;


    if (salary > highestSalary)
      highestSalary = salary;


    if (salary <= 350)
      salaryUpTo350++;

    totalPeople++;
    option = parseInt(prompt("Se deseja informar os dados de outra pessoa, digite 1, caso contrário, digite qualquer outro número"));
  } while (option === 1);


  results.push(totalSalary / totalPeople);
  results.push(totalChildren / totalPeople);
  results.push(highestSalary);
  results.push((salaryUpTo350 * 100 / totalPeople).toFixed(2));

  return results;
}

let data = survey();
console.log("Média de salário da população: " + data[0].toFixed(2));
console.log("Número médio de filhos: " + data[1].toFixed(2));
console.log("Salário mais alto: R$ " + data[2].toFixed(2));
console.log("Percentual de pessoas com salário até R$ 350,00: " + data[3] + "%");
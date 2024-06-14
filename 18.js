const prompt = require('prompt-sync')();
let again = true;

let register = {};

while (again) {
  const subject = prompt('Digite o nome do funcionário: ');
  const position = prompt('Digite o cargo do funcionário: ');
  const salary = parseFloat(prompt('Digite o salário do funcionário (em reais): '));
  if (subject.length < 3) {
    console.log("O nome deve conter ao menos 3 caracteres");
    continue;
  }
  if (isNaN(salary) || salary < 0) {
    console.log('O salário deve ser um valor válido (numérico e superior a 0)');
    continue;
  }
  register = { subject, position, salary };
  again = false;
}

console.log('--- Informações do funcionário ---');
console.log(`
  Nome: ${register.subject} | Cargo: ${register.position} | Salário: ${register.salary}
  `);


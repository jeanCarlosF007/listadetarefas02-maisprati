const prompt = require('prompt-sync')();

const names = new Array(9);
const ages = new Array(9);

for (let i = 0; i < 9; i++) {
  const name = prompt(`Digite o nome da ${i + 1}ª pessoa: `);
  const age = prompt(`Digite a idade da ${i + 1}ª pessoa: `);
  names[i] = name;
  ages[i] = age;
}

const minorsIndex = ages.map((el, index) => (el < 18 ? index : -1)).filter(index => index !== -1);

console.log('--- PESSOAS MENORES DE IDADE ---');
for (let i = 0; i < minorsIndex.length; i++) {
  let index = minorsIndex[i];
  console.log(`
    Nome: ${names[index]} | Idade: ${ages[index]}
    `);
}

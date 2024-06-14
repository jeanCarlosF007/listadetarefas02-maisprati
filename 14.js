const prompt = require('prompt-sync')();

const names = [];

for (let i = 0; i < 7; i++) {
  const newName = prompt(`Digite o nome da ${i + 1}ª pessoa: `);
  names.push(newName);
}

const reverseList = [...names].reverse();

console.log(reverseList.join(", "));

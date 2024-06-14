// Criação do conjunto para exemplo:

function getRandomInt() {
  return Math.floor(Math.random() * 11);
}

const numbers = [];

for (let i = 0; i < 30; i++) {
  let newNumber = getRandomInt();
  numbers.push(newNumber);
}

console.log('--- CONJUNTO EXEMPLO ---');
console.log(numbers);

function isEven(value) {
  if (value % 2 === 0) {
    return value;
  }
}

const evens = [];
const odds = [];
let evensCount = 1;
let oddsCount = 1;

for (let i = 0; i < numbers.length; i++) {
  if (isEven(numbers[i])) {
    evens.push(numbers[i]);
  } else {
    odds.push(numbers[i]);
  }
  if (evens.length === 5) {
    console.log(`${evensCount++}ª sequência de pares: ${evens}`);
    evens.splice(0, evens.length);
  } 
  if (odds.length === 5) {
    console.log(`${oddsCount++}ª sequência de ímpares: ${odds}`);
    odds.splice(0, odds.length);
  }
}

console.log(`Pares: ${evens}`);
console.log(`Ímpares: ${odds}`);

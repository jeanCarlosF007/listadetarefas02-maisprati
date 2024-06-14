// Criação do vetor para teste

function getRandomInt() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateCard() {
  const newCard = new Set();
  while (newCard.size < 13) {
    newCard.add(getRandomInt());
  }
  return Array.from(newCard);
}

const answerKeys = generateCard();

console.log(answerKeys);

//Criação dos cartões para simulação

const betCards = [];
let person = 1;

for (let i = 0; i < 100; i++) {
  const newCard = { gambler: `Apostador nº ${person++}`, cardNumbers: generateCard() };
  betCards.push(newCard);
}

//Verificação do número de acertos

function checkResult(card) {
  let numberOfMatches = 0;
  for (let i = 0; i < answerKeys.length; i++) {
    for (let j = 0; j < card.length; j++) {
      if (answerKeys[i] === card[j]) {
        numberOfMatches += 1;
      };
    }
  }
  return numberOfMatches;
}

for (let i = 0; i < betCards.length; i++) {
  console.log(`Número de acertos do ${betCards[i].gambler}: ${checkResult(betCards[i].cardNumbers)}`);
  if (checkResult(betCards[i].cardNumbers) === 13) {
    console.log("Parabéns, tu foi o GANHADOR!")
  };
}

// Se você quiser fazer a verificação individual a partir da inserção dos números pelo jogador, pode utilizar o código abaixo:


// const prompt = require('prompt-sync')();
// let individualBet = [];

// for (let i = 0; i < 13; i++) {
//   const newNumber = Number(prompt(`Digite o ${i + 1}º número da sua aposta: `));
//   individualBet.push(newNumber);
// }

// console.log(answerKeys);

// console.log(`Quantidade de acertos: ${checkResult(individualBet)}`);
// if (checkResult(individualBet) === 13) {
//   console.log("Parabéns, tu foi o GANHADOR!")
// };


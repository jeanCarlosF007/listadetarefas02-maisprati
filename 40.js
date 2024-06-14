// Criação do vetor para teste

function getRandomInt() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateCard() {
  const newCard = new Set();
  while (newCard.size < 5) {
    newCard.add(getRandomInt());
  }
  return Array.from(newCard);
}

const answerKeys = generateCard();

console.log("--- RESULTADO ---");
console.log(answerKeys);

//Criação dos cartões para simulação

const betsMade = [];

for (let i = 0; i < 50; i++) {
  const newBet = {gambler: `Bilhete número ${i+1}`,bet: generateCard()};
  betsMade.push(newBet);
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

// Teste para ganhador
// let winTest = { gambler: `Winner ticket`, bet: answerKeys }
// betsMade.push(winTest);

for (let i = 0; i < betsMade.length; i++) {
  if (checkResult(betsMade[i].bet) === 5) {
    console.log("GANHADOR!!!");
    console.log(`Bilhete número ${i+1}`);
  }
}

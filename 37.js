function generateAnswers() {
  const answers = [];
  const possibleAnswer = ['a', 'b', 'c', 'd', 'e']
  for (let i = 0; i < 20; i++) {
    const index = Math.floor(Math.random() * possibleAnswer.length);
    answers.push(possibleAnswer[index]);
  }
  return answers;
}

const answerKeys = generateAnswers();

console.log('--- GABARITO ---');
console.log(answerKeys);

//Criação das provas para simulação

const testsAnswers = [];
let person = 1;

for (let i = 0; i < 50; i++) {
  const newCard = { student: `Aluno nº ${person++}`, answers: generateAnswers() };
  testsAnswers.push(newCard);
}

// //Verificação do número de acertos

function checkResult(test) {
  let numberOfMatches = 0;
  for (let i = 0; i < answerKeys.length; i++) {
    if (answerKeys[i] === test[i]) {
      numberOfMatches += 1;
    };
  }
  return numberOfMatches;
}

for (let i = 0; i < testsAnswers.length; i++) {
  console.log(`Número de acertos do ${testsAnswers[i].student}: ${checkResult(testsAnswers[i].answers)}`);
  if (checkResult(testsAnswers[i].answers) >= 12) {
    console.log("APROVADO")
  } else {
    console.log("REPROVADO");
  }
}

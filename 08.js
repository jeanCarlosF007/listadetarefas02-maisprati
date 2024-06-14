const prompt = require('prompt-sync')();

const hours = Number(prompt('Digite a quantidade de horas de atividade física praticadas neste mês: '));

console.log('--- VIDA SAUDÁVEL ---');

const calculatePoints = (hours) => {
  if (hours < 0 || isNaN(hours)) return `Valor inválido!`;
  if (hours <= 10) return hours * 2;
  if (hours <= 20) return hours * 5;
  return hours * 10;
}

const points = calculatePoints(hours);
if (isNaN(Number(points))) {
  console.log(points);
} else {
  console.log(`Sua quantidade de pontos este mês foi de ${points} e você ganhou R$ ${points * 0.05}`);
}

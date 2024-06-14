const prompt = require('prompt-sync')();

const rock = 'rock';
const paper = 'paper';
const scissor = 'scissor';

console.log('--- PEDRA PAPEL TESOURA ---');
console.log("Opções: A = 'Pedra' | B = 'Papel' | C = 'Tesoura ");
const playerOne = prompt('JOGADOR 1: ').toUpperCase();
const playerTwo = prompt('JOGADOR 2: ').toUpperCase();

console.log(playerOne);
console.log(playerTwo);

function verifyValidity(valuePlayerOne, valuePlayerTwo) {
  if (valuePlayerOne !== 'A' && valuePlayerOne !== 'B' && valuePlayerOne !== 'C') return false;
  if (valuePlayerTwo !== 'A' && valuePlayerTwo !== 'B' && valuePlayerTwo !== 'C') return false;
  return true;
}

if (!verifyValidity(playerOne, playerTwo)) {
  console.log('Valor de um dos jogadores inválido!');
} else if (playerOne === 'A' && playerTwo === 'C' || playerOne === 'B' && playerTwo === 'A' || playerOne === 'C' && playerTwo === 'B') {
  console.log('VENCEDOR: JOGADOR 1!');
} else {
  console.log('VENCEDOR: JOGADOR 2!');
}

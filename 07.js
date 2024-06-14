const prompt = require('prompt-sync')();

console.log('--- ALUGUEL DE CARROS ---');

const popularPrice = 90;
const luxuryPrice = 150;

console.log('Opções: Popular | Luxo');

const typeRented = prompt('Digite o tipo de carro alugado: ');
const daysOfRent = Number(prompt('Digite a quantidade de dias de aluguel: '));
const travelledDistance = Number(prompt('Digite a distância percorrida (em Km): '));

const calculateDistancePrice = (distance, type) => {
  if (type.toUpperCase() !== "POPULAR" && type.toUpperCase() !== "LUXO") return `Tipo de veículo inválido!`;
  if (distance <= 0 || isNaN(distance)) return `Valor de distância inválido!`;
  if (type.toUpperCase() === "POPULAR") {
    if (distance <= 100) {
      return distance * 0.2;
    } else if (distance > 100) {
      return distance * 0.1;
    }
  }
  if (type.toUpperCase() === "LUXO") {
    if (distance <= 200) {
      return distance * 0.3;
    } else if (distance > 200) {
      return distance * 0.25;
    }
  }
}

const calculateDays = (days, type) => {
  if (type.toUpperCase() !== "POPULAR" && type.toUpperCase() !== "LUXO") return `Tipo de veículo inválido!`;
  if (days <= 0 || isNaN(days)) return `Valor dos dias inválido!`;
  if (type.toUpperCase() === "POPULAR") {
    return days * popularPrice;
  }
  if (type.toUpperCase() === "LUXO") {
    return days * luxuryPrice;
  }
}

const distancePrice = calculateDistancePrice(travelledDistance, typeRented);
const daysPrice = calculateDays(daysOfRent, typeRented);

if (isNaN(Number(distancePrice))) {
  console.log(distancePrice);
} else if (isNaN(daysPrice)) {
  console.log(daysPrice);
} else {
  console.log(`O valor do aluguel ficou em: R$ ${distancePrice + daysPrice}`);
}

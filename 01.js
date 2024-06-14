const prompt = require('prompt-sync')();

console.log(`---REDUÇÃO DE VIDA - FUMANTE ---`);

const qty = Number(prompt('Quantos cigarros você costuma fumar por dia? '));
const months = Number(prompt('Há quanto tempo você fuma (em meses)? '));
const days = months * 30;

const totalQty = qty * days;
const lostTimeInMinutes = totalQty * 10;
const lostTimeInMonths = lostTimeInMinutes / 43200;

console.log(`Você já perdeu ${lostTimeInMonths.toFixed(2)} meses de vida.`);

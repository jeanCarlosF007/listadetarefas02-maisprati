const prompt = require('prompt-sync')();

const hoursProvided = [];
let i = 0;

function isInvalidTime(time) {
  const [hours, minutes, seconds] = time.split(":");
  if (hours < 0 || hours > 23) {
    return `Valor da hora inválido!`
  } else if (minutes < 0 || minutes > 59) {
    return `Valor dos minutos inválido!`
  } else if (seconds < 0 || seconds > 59) {
    return `Valor dos segundos inválido!`
  } else if (isNaN(Number(hours)) || isNaN(Number(minutes)) || isNaN(Number(seconds))) {
    return `Use apenas números!`
  }
}

while (i < 5) {
  let time = prompt(`Digite o horário ${i + 1} (HH:MM:SS): `);
  if (isInvalidTime(time)) {
    console.log(isInvalidTime(time));
  } else {
    hoursProvided.push(time);
    i++;
  }
}

for (let i = 0; i<hoursProvided.length; i++) {
  console.log(hoursProvided[i]);
}
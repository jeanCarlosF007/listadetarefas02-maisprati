const prompt = require('prompt-sync')();

const example = [1, 2, 3, 4, 5, 6];
let continueOperations = true;

while (continueOperations) {
  console.log('\n0 - SAIR');
  console.log('1 - MOSTRAR A SOMA');
  console.log('2 - MOSTRAR O PRODUTO');
  console.log('3 - MOSTRAR A MÉDIA');
  console.log('4 - ORDENAR');
  console.log('5 - MOSTRAR OS ELEMENTOS DO VETOR\n');

  const whatToDo = Number(prompt('Digite a opção desejada conforme a lista acima: '));
  console.log("");

  switch (whatToDo) {
    case 0: 
      continueOperations = false;
      console.log("Você saiu do programa");
      break;
    case 1:
      sumAll(example);
      break;
    case 2:
      multiplyAll(example);
      break;
    case 3:
      average(example);
      break;
    case 4:
      let option = prompt('Deseja ordená-los em ordem crescente ou decrescente? "C" para crescente e "D" para decrescente: ');
      order(example, option);
      break;
    case 5:
      console.log(example);
      break;
    default: 
      console.log("Opção inválida!");
  }
}

function sumAll (array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
    console.log("Soma dos elementos: " + total);
    return total;
}

function multiplyAll (array) {
  let total = 1;
  for (let i = 0; i < array.length; i++) {
    total *= array[i];
  }
  console.log("Produto dos elementos: " + total);
  return total;
}

function average (array) {
  let average = 0;
  let sum = sumAll(array);
  average = sum / array.length;
  console.log("Média dos elementos: " + average);
  return average;
}

function order (array, order) {
  let newArray = [];
  if (order.toUpperCase() === "C") {
    newArray = array.sort((a, b) => a - b);
    console.log(newArray);
    return newArray;
  } else if (order.toUpperCase() === "D") {
    newArray = array.sort((a, b) => b - a);
    console.log(newArray);
    return newArray;
  } else {
    console.log("Opção inválida");
    return "Opção inválida";
  }
}

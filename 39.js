function getRandomNumber() {
  return Math.floor(Math.random() * 201) - 100;
}

const vectorA = [];


for (let i = 0; i < 100; i++) {
  const newElement = getRandomNumber();
  vectorA.push(newElement);
}

const vectorB = vectorA.filter(el => el !== null && el >= 0);

console.log(vectorA);
console.log(vectorB);

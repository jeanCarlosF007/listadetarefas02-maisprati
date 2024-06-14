const vector = new Array(20);

for (let i = 0; i < 20; i++) {
  const randomNumber = Math.floor(Math.random() * 100);
  vector[i] = randomNumber;
}

console.log(vector);

console.log(vector.sort((a, b) => a - b));

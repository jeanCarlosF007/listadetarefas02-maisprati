const fibonacci = [];

for (let i = 0; i <= 14; i++) {
  if (fibonacci.length >= 3) {
    let newVal = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(newVal);
  } else if (fibonacci.length > 0) {
    fibonacci.push(1);
  } else {
    fibonacci.push(0);
  }
}

console.log(fibonacci);
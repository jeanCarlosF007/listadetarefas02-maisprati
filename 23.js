function identityMatrix() {
  let matrix = [];

  for (let i = 0; i < 7; i++) {
    matrix.push(Array(7).fill(0));
    matrix[i][i] = 1;

  }

  let result = matrix.map(row => row.join(" ")).join("\n");

  return result;
}

console.log(identityMatrix());
function negativeElementsMatrix() {
  let matrixM = [
    [0, 6, 0, 2, 2, 0, 2, 4],
    [1, -2, -3, -4, -5, 6, -7, -8],
    [0, 9, 0, 5, 2, 0, 2, 4],
    [-1, 2, 3, 4, -5, 6, 7, 8],
    [1, -2, 3, 4, -5, 6, 7, 8],
    [1, 2, -3, -4, 5, 6, -7, -8]
  ];

  let vectorC = [];

  for (let i = 0; i < matrixM.length; i++) {
    let count = 0;

    for (let j = 0; j < matrixM[i].length; j++) {
      if (matrixM[i][j] < 0) {
        count = count + 1;

      }
    }

    vectorC.push(count);
  }

  return vectorC;

}

console.log(negativeElementsMatrix());

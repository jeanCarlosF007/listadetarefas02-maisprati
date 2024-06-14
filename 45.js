const stringsArray = ["blue", "brown", "black", "blue", "orange", "white", "gray", "blue", "white", "cyan", "white", "blue", "blue", "white", "black", "pink", "orange", "orange", "blue"]

const newObj = {};

for (let i = 0; i<stringsArray.length; i++) {
  if (newObj[stringsArray[i]]) {
    newObj[stringsArray[i]]++;
  } else {
    newObj[stringsArray[i]] = 1;
  }
}

console.log(newObj);

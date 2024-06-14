const data = {name: "Camila", age: 25, favoriteColours: ["brown", "blue"], favoriteFood: ["lasagna", "gnocchi", "pizza"], mail: "camila@email.com", favoriteNumbers: [1, 5, 8] }

function returnsArrays (obj) {
  let newObj = {}
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

console.log(returnsArrays(data))

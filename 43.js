const obj1 = {name: "Esaú", age: 42, profession: "dev", address: {street: "Rua 01", number: 52}, hobbies: ["Videogame", "Reading"]};
const obj2 = {age: 35, address: {street: "Rua 02", number: 100}};

const combineObjects = (firstObject, secondObject) => {
  const newObj = {}

  for (let key in firstObject) {
    newObj[key] = firstObject[key];
  }
  for (let key in secondObject) {
    newObj[key] = secondObject[key];
  }
  return newObj;
}

console.log((combineObjects(obj1, obj2)));

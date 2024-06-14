const randomObject = {
  firstNumber: 1,
  secondNumber: 2,
  thirdNumber: 3,
  fourthNumber: 4
}

const transformObject = (obj, func) => {
  const newObj = {}
  for (let key in obj) {
    newObj[key] = func(obj[key]);
  }
  return newObj;
}

function doubleValue (value) {
  return value * 2;
}

function oddOrEven (value) {
  return value % 2 === 0 ? `${value} é par` : `${value} é ímpar`
}

console.log(transformObject(randomObject, doubleValue));
console.log(transformObject(randomObject, oddOrEven));

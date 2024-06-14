let storeA = { Baccio: 20, Pistachio: 10, Bread: 15 };
let storeB = { PeanutButter: 15, Baccio: 20, Eggs: 10 };

function combineStorage(storeA, storeB) {
  let combinedStores = {};

  for (let product in storeA) {
    combinedStores[product.toLowerCase()] = storeA[product];

  }

  for (let product in storeB) {
    let lowercaseProduct = product.toLowerCase();

    combinedStores[lowercaseProduct] = (combinedStores[lowercaseProduct] || 0) + storeB[product];

  }

  return combinedStores;

}

console.log(combineStorage(storeA, storeB));
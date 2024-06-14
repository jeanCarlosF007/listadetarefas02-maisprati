const sales = [
  { seller: 'John', value: 150 },
  { seller: 'Jane', value: 200 },
  { seller: 'John', value: 300 },
  { seller: 'Jane', value: 250 },
  { seller: 'Alice', value: 180 },
  { seller: 'Bob', value: 220 },
  { seller: 'Alice', value: 130 },
  { seller: 'Bob', value: 170 },
  { seller: 'John', value: 120 },
  { seller: 'Jane', value: 210 },
  { seller: 'Alice', value: 190 },
  { seller: 'Bob', value: 260 }
];

const salesPerWorker = (arr) => {
  const totalSales = {}
  for (let i = 0; i < arr.length; i++) {
    const seller = arr[i].seller;
    const value = arr[i].value;

    if (totalSales[seller]) {
      totalSales[seller] += value;
    } else {
      totalSales[seller] = value
    }
  }
  return totalSales;
}

console.log(salesPerWorker(sales));

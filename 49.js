let transactions = [ 
  {id: 1, value: 930, date: '06/02/2024', category: 'Investimento'},
  {id: 2, value: 340, date: '09/05/2024', category: 'Lazer'},
  {id: 3, value: 120, date: '09/05/2024', category: 'Compras'},
  {id: 4, value: 1997, date: '15/04/2024', category: 'Investimento'},
];

function showTransactionCategory(array) {
  let financialTransactions = {};

  for (const transaction of array) {
    if (financialTransactions[transaction.category]) {
      financialTransactions[transaction.category].transactions.push(transaction);
      financialTransactions[transaction.category].subtotal += transaction.value;
    } else {
      financialTransactions[transaction.category] = {
        transactions: [transaction],
        subtotal: transaction.value
      };
    }
  }

  return financialTransactions;

}

const result = showTransactionCategory(transactions);

for (const category in result) {
  console.log(`Categoria: ${category}`);
  console.log(`Subtotal: ${result[category].subtotal}`);

  for (const transaction of result[category].transactions) {
    console.log(`Valor: ${transaction.value} | Data: ${transaction.date}`);
  }

  console.log();
}
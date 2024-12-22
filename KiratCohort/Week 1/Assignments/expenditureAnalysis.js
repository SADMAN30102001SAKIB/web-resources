function calculateTotalSpentByCategory(Transactions) {
  let catTotal = [];

  Transactions.forEach(T => {
    const index = catTotal.findIndex(item => item.category === T.category);
    if (index !== -1) {
      catTotal[index].totalSpent += T.price;
    } else {
      catTotal.push({ category: T.category, totalSpent: T.price });
    }
  });

  return catTotal;
}

module.exports = calculateTotalSpentByCategory;

function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let minPrice = Number.MAX_VALUE;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
}

console.log(`${maxProfit([7, 1, 5, 3, 6, 4])} : should return 5`);
console.log(`${maxProfit([7, 6, 4, 3, 1])} : should return 0`);

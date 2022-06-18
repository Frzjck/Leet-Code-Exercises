// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

const maxProfit = (prices) => {
	let mostProfit = -Infinity;
	let bestBuyPriceSoFar = Infinity;
	for (let i = 0; i < prices.length; i++) {
		bestBuyPriceSoFar = Math.min(bestBuyPriceSoFar, prices[i]);
		mostProfit = Math.max(mostProfit, prices[i] - bestBuyPriceSoFar);
	}
	return mostProfit > 0 ? mostProfit : 0;
};

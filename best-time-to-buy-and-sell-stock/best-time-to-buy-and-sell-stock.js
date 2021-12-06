/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var price = prices[0];
    var profit = 0;
    for (var i = 1; i < prices.length; i++) {
        if (prices[i] < price) {
            price = prices[i];
        } else {
            var diff = prices[i] - price;
            if (diff > profit)
            profit = diff;
        }
    }
    return profit;
};
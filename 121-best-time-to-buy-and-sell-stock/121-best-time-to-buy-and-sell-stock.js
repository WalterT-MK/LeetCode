/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let buyin = prices[0]
    for (let i = 1; i < prices.length; i++) {
        if(prices[i] < buyin) {
            buyin = prices[i];
        } else {
            let currProfit = prices[i] - buyin;
            if(currProfit > profit) {
                profit = currProfit;
            }
        }
    }
    return profit;
};
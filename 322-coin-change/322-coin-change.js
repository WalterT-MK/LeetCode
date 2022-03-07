/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    var dp = new Array(amount+1).fill(Infinity);
    dp[0] = 0;
    for (var i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                
            }
        }
    }
    if (dp[amount] === Infinity) {
        return -1;
    } else {
        return dp[amount];
    }
};
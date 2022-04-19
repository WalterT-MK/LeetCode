/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let memo = new Array(amount + 1).fill(Infinity);
    memo[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                memo[i] = Math.min(memo[i], memo[i - coin] + 1);
            }
        }
    }
    if (memo[amount] === Infinity) {
        return -1;
    } else {
        return memo[amount];
    }
};
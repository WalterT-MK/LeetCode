/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    if (!cost) return 0;
    let ans = new Array(cost.length).fill(0);
    ans[0] = cost[0];
    if (cost.length >= 2) {
        ans[1] = cost[1];
    }
    for (let i = 2; i < cost.length; i++) {
        ans[i]  = cost[i] + Math.min(ans[i - 1], ans[i - 2]);
    }
    
    return Math.min(ans[cost.length - 1], ans[cost.length - 2]);
};
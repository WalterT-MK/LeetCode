/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    var ans = new Array(n+1).fill(0);
    for (let i = 1; i < ans.length; i++) {
        ans[i] = ans[i >> 1] + (i & 1);
    }
    return ans;
};
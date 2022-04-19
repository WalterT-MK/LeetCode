/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s.length < 1) return 0;
    let memo = [];
    let dp = (index) => {
        let count = 0;
        if (index === s.length) return 1;
        if (memo[index] != null) return memo[index];
        if (s[index] > 0) count += dp(index + 1);
        if (s[index] != 0 && s[index + 1] != null && s[index] + s[index + 1] < 27) {
            count += dp(index + 2);
        }
        memo[index] = count;
        return count;
    }
    return dp(0);
};
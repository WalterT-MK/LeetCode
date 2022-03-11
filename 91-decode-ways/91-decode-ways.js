/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s.length < 1) {
        return 0;
    }
    var memo = [];
    var helper = (index) => {
        var result = 0;
        if (index === s.length) {
            return 1;
        }
        if (memo[index] != null) {
            return memo[index];
        }
        if (s[index] > 0) {
            result += helper(index + 1);
        }
        if (s[index] != 0 && 
            s[index + 1] != null && 
            s[index]+s[index+1] < 27) {
            result += helper(index + 2);
        }
        memo[index] = result;
        return result;
    }
    return helper(0);
};
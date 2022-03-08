/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var set = new Set(wordDict);
    var dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    
    for (var end = 1; end <= s.length; end++) {
        for(var start = 0; start < end; start++) {
            var w = s.slice(start, end);
            if(dp[start] === true && set.has(w)) {
                dp[end] = true;
                break;
            } 
        }
    }
    return dp[s.length];
};
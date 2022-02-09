/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var map1 = new Map();
    var startingPoint = 0;
    var ans = 0;
    
    for (var i = 0; i < s.length; i++) {
        if (map1.has(s[i])) {
            startingPoint = Math.max(map1.get(s[i]) + 1, startingPoint);
        } 
        map1.set(s[i], i);
        ans = Math.max(i - startingPoint + 1, ans);
    }
    return ans;
};
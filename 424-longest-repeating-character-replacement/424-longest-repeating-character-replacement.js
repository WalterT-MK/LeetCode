/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    var charSet = {};
    var longestChar = 0;
    var l = 0;
    for (var r = 0; r < s.length; r++) {
        if (charSet[s[r]]) {
            charSet[s[r]] += 1;
        } else {
            charSet[s[r]] = 1;
        }
        var maxfChar = Math.max(...Object.values(charSet));
        if (r - l + 1 - maxfChar > k) {
            charSet[s[l]] -= 1;
            l += 1;
        }
        longestChar = Math.max(longestChar, r - l + 1);
    }
    return longestChar;
};
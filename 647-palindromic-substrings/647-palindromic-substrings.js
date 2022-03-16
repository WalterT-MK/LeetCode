/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        count += checkPalindromic(s,i,i);
        count += checkPalindromic(s,i,i+1);
    }
    return count;
};
function checkPalindromic(s, i, j) {
    var count = 0;
    while (i >= 0 && j < s.length && s[i] === s[j]) {
        count ++;
        i--;
        j++;
    }
    return count;
}
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    const checkPalin = (str, i, j) => {
        while (i >= 0 && j < str.length && str[i] === str[j]) {
            i--;
            j++;
        }
        return str.slice(i + 1, j);
    }
    
    
    
    var ans = '';
    var longest = '';
    for (var i = 0; i < s.length; i++) {
        var substring1 = checkPalin(s, i, i);
        var substring2 = checkPalin(s, i, i+1);
        if (substring1.length > substring2.length) {
            longest = substring1;
        } else {
            longest = substring2;
        }
        if (longest.length > ans.length) {
            ans = longest;
        }
    }
    return ans;
};
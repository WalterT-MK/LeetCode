/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var cleanS = s.replace(/[^0-9a-z]/gi,'').toLowerCase();
    var left = 0;
    var right = cleanS.length - 1;
    console.log(cleanS)
    while (left < right) {
        if (cleanS[left] != cleanS[right]) {
            return false;
        } else {
            left ++;
            right --;
        }
    }
    return true;
};
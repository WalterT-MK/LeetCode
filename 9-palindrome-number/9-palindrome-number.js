/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var stringX = x.toString();
    var left = 0;
    var right = stringX.length - 1;
    while (left < right) {
        if (stringX[left] != stringX[right]) {
            return false;
        }
        left ++;
        right --;
    }
    return true;
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    if (s.length % 2 != 0 || s.length === 1) {
        return false;
    }
    
    var arry = [];
    var dict = {
        ')' : '(',
        '}' : '{',
        ']' : '[',
    };
    for (var i = 0; i < s.length; i++) {
        var curr = s[i];
        var dele = dict[curr];
        if (dele) {
            if (dele === arry[arry.length - 1]) {
                arry.pop();
            } else {
                return false;
            }
        } else {
            arry.push(curr);
        }
    }
    return !arry.length;
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let dict = {
        ')' : '(',
        '}' : '{',
        ']' : '[',
    };
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (dict[s[i]]) {
            if (stack[stack.length - 1] !== dict[s[i]]) {
                return false;
            } else {
                stack.pop();
            }
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
};
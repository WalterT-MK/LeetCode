/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    /*
    let res = [];
    const go = (l, r, str) => {
        if (str.length === n * 2) {
            res.push(str);
        }
        if (l < n) {
            go(l + 1, r, str + '(');
        }
        if (r < l) {
            go(l, r + 1, str + ')');
        }
    }
    go(0,0,'');
    return res;
    */
    
    let res = [];
    let stack = [];
    const go = (l, r) => {
        if (l === r && l === n) {
            res.push(stack.join(''));
            return;
        }
        if (l < n) {
            stack.push('(');
            go(l + 1, r);
            stack.pop();
        }
        if (r < l) {
            stack.push(')');
            go(l, r + 1);
            stack.pop();
        }
    }
    go(0,0);
    return res;
};
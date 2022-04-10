/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    let dict = {
        ')':'(',
        ']':'[',
        '}':'{'
    }
    
    for (let i = 0; i < s.length; i++) {
        let dele = dict[s[i]];
        if (dele) {
            if(dele === arr[arr.length - 1]) {
                arr.pop();
            } else {
                return false;
            }
        } else {
            arr.push(s[i]);
        }
    }
    return arr.length === 0;
};
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let dict = {2:['a','b','c'],
               3:['d','e','f'],
               4:['g','h','i'],
               5:['j','k','l'],
               6:['m','n','o'],
               7:['p','q','r','s'],
               8:['t','u','v'],
               9:['w','x','y','z']};
    let ans = [];
    if (digits === '') return ans;
    let recursion = (remains, res) => {
        let temp;
        let letter = dict[remains[0]];
        for (let i = 0; i < letter.length; i++) {
            temp = res + letter[i];
            if (remains.length === 1) {
                ans.push(temp);
            } else {
                recursion(remains.slice(1), temp); 
            }
        }
    }
    recursion(digits, '')
    return ans;
};
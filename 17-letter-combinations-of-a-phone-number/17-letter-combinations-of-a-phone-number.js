/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let dict = {2:'abc',
               3:'def',
               4:'ghi',
               5:'jkl',
               6:'mno',
               7:'pqrs',
               8:'tuv',
               9:'wxyz'};
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
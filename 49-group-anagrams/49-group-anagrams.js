/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var obj = {};
    for (let i = 0; i < strs.length; i++) {
        var sortedStr = strs[i].split('').sort().join('');
        if (obj[sortedStr]) {
            obj[sortedStr].push(strs[i]);
        } else {
            obj[sortedStr] = [strs[i]];
        }
    }
    return Object.values(obj)
};
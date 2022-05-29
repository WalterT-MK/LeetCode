/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //let chars = new Array(26).fill(0);
    let dict = new Map();
    for (let str of strs) {
        let key = str.split('').sort().join('');
        if (!dict.has(key)) dict.set(key, []);
        dict.get(key).push(str);
    }
    let res = [];
    for (let set of [...dict]) {
        res.push(set[1]);
    }
    return res;
};
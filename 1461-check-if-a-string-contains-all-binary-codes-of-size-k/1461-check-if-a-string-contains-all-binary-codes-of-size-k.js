/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    if (s.length < k) return false;
    let binarySet = new Set();
    
    for (let i = 0; i < s.length - k + 1; i++) {
        let curr = s.slice(i, i + k);
        binarySet.add(curr);
    }
    return binarySet.size === Math.pow(2, k);
};
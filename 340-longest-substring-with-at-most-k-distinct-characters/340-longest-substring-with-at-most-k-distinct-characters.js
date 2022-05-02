/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    if (k === 0) return 0;
    let l = 0;
    let distinct = 0;
    let count = {};
    let res = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (count[s[i]]) {
            count[s[i]] += 1;
        } else {
            count[s[i]] = 1;
            distinct += 1;
        }
        if (distinct <= k && (i - l + 1) > res) res = i - l + 1; 
        while (distinct > k) {
            if (count[s[l]] !== 1) {
                count[s[l]] -= 1;
            } else {
                delete count[s[l]];
                distinct -= 1;
                
            }
            l += 1;
            if (distinct <= k && (i - l + 1) > res) res = i - l + 1; 
        }
    }
    return res;
};
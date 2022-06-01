/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    if (k === 0) return 0;
    let chars = new Map();
    let res = 0;
    let l = 0;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (chars.has(s[i])) {
            chars.set(s[i], chars.get(s[i]) + 1);
        } else {
            chars.set(s[i], 1);
            count += 1;
        }
        if (count <= k && i - l + 1 > res) res = i - l + 1;
        while (count > k) {
            chars.set(s[l], chars.get(s[l]) - 1);
            if (chars.get(s[l]) === 0) {
                chars.delete(s[l]);
                count -= 1;
            }
            l += 1;
        }
    }
    return res;
};
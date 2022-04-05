/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = obj1[s[i]]+1 || 1;
        obj2[t[i]] = obj2[t[i]]+1 || 1;
    }
    for (let i = 0; i < s.length; i++) {
        if (obj1[s[i]] != obj2[s[i]]) {
            return false
        }
    }
    return true;
};

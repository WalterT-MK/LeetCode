/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let l = 0;
    let obj = {};
    let maxfchar = 0;
    let ans = 0;
    for (let r = 0; r < s.length; r++) {
        if(obj[s[r]]) {
            obj[s[r]] += 1;
        } else {
            obj[s[r]] = 1;
        }
        maxfchar = Math.max(maxfchar, obj[s[r]]);
        if(r-l+1 - maxfchar > k) {
            
            obj[s[l]] -= 1;
            l++;
        }
        if ((r - l + 1) > ans) {
            ans = r - l + 1;
        } 
    }
    return ans;
};
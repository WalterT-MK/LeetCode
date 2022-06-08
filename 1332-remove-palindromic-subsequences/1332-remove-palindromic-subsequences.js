/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    const checkPal = (s) => {
        let l = 0; 
        let r = s.length - 1;
        while (l < r) {
            if (s[l] !== s[r]) return false;
            l += 1;
            r -= 1;
        }
        return true;
    }
    
    if (s.length === 0) return 0;
    if (checkPal(s)) return 1;
    return 2;
    
};
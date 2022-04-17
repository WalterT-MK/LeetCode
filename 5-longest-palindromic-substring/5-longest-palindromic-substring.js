/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    //double pointer start from the middle
    let ans = '';
    //if ans.length is odd number;
    for (let i = 0; i < s.length; i++) {
        let l = i;
        let r = i;
        while (l >= 0 && r <s.length) {
            if (s[l] === s[r]) {
                let temp = s.slice(l, r+1);
                if (temp.length > ans.length) {
                    ans = temp;
                }
                l--;
                r++;
            } else {
                break;
            }
        }
    }
    //if ans.length is even number;
    for (let i = 0; i < s.length - 1; i++) {
        let l = i;
        let r = i + 1;
        while (l >= 0 && r <s.length) {
            if (s[l] === s[r]) {
                let temp = s.slice(l, r+1);
                if (temp.length > ans.length) {
                    ans = temp;
                }
                l--;
                r++;
            } else {
                break;
            }
        }
    }
    return ans;
};
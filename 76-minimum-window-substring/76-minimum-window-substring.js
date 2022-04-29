/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length > s.length) return '';
    let mapt = new Map();
    let maps = new Map();
    
    for (let i = 0; i < t.length; i++) {
        // mapt.set(t[i], mapt.get(t[i]) + 1 : 1);
        if (mapt.has(t[i])) mapt.set(t[i], mapt.get(t[i]) + 1);
        else mapt.set(t[i], 1);
    }
    let match = mapt.size;
    let l = 0;
    let r = -1;
    let res = '';
    
    while (r < s.length) {
        if (match === 0) {
            let curr = s[l];
            if (mapt.has(curr)) mapt.set(curr, mapt.get(curr) + 1);
            if (mapt.get(curr) > 0) match += 1;
            let temp = s.substring(l,r + 1);
            if (res === '') {
                res = temp;
            } else {
                if (temp.length < res.length) res = temp;
            }
            
            l += 1;
        } else {
            r += 1;
            let curr = s[r];
            if (mapt.has(curr)) mapt.set(curr, mapt.get(curr) - 1);
            if (mapt.get(curr) === 0) match -= 1;
        }
    }
    
    return res;
    
};
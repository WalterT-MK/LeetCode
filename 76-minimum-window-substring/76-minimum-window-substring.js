/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let min = '',
        set = {};
    
    t.split('').forEach(char => {
        if (set[char]) set[char]++;
        else set[char] = 1;
    });
    
    let count = Object.keys(set).length;
    
    let l = 0,
        r = -1;
    
    while (r < s.length) {
        if (count === 0) {
            let curr = s[l];
            if (set[curr] !== null) set[curr]++;
            if (set[curr] > 0) count += 1;
            // if ((r - l + 1) > min.length) min = s.substring(l, r + 1);
            let temp = s.substring(l, r + 1)
            if (min === ''){
                min = temp;
            } else {
                if (temp.length < min.length) min = temp;
            }
            
            l++;
        } else {
            r++; 
            let curr = s[r];
            if (set[curr] !== null) set[curr]--;
            if (set[curr] === 0) count--;
        }
    }
    return min;
    
};
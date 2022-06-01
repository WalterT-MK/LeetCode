/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if (p.length > s.length) return [];
    let res = [];
    let charS = new Array(26).fill(0);
    let charP = new Array(26).fill(0);
    
    for (let i = 0; i < p.length; i++) {
        charS[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        charP[p[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }
    let match = 0;
    for (let i = 0; i < 26; i++) {
        if (charS[i] === charP[i]) match += 1;
    }
    if (match === 26) res.push(0);
    let l = 0;
    for (let i = p.length; i < s.length; i++) {
        let curr = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        charS[curr] += 1;
        if (charS[curr] === charP[curr]) match += 1;
        if (charS[curr] - 1 === charP[curr]) match -= 1;
        
        curr = s[l].charCodeAt(0) - 'a'.charCodeAt(0);
        charS[curr] -= 1;
        if (charS[curr] === charP[curr]) match += 1;
        if (charS[curr] + 1 === charP[curr]) match -= 1;
        
        l += 1;
        if (match === 26) res.push(l);
    }
    return res;
};
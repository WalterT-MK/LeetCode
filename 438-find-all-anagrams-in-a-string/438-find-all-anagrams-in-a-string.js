/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if (p.length > s.length) return [];
    let count1 = new Array(26).fill(0);
    let count2 = new Array(26).fill(0);
    let match = 0;
    let l = 0;
    let res = [];
    
    for (let i = 0; i < p.length; i++) {
        count1[p[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        count2[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }
    for (let i = 0; i < 26; i++) {
        if (count1[i] === count2[i]) match += 1;
    }
    if (match === 26) res.push(0);
    for (let r = p.length; r < s.length; r++) {
        let index = s[r].charCodeAt(0) - 'a'.charCodeAt(0);
        count2[index] += 1;
        if (count1[index] === count2[index]) match += 1;
        else if (count1[index] + 1 === count2[index]) match -= 1;
        
        index = s[l].charCodeAt(0) - 'a'.charCodeAt(0);
        count2[index] -= 1;
        if (count1[index] === count2[index]) match += 1;
        else if (count1[index] - 1 === count2[index]) match -= 1;
        l += 1;
        if (match === 26) res.push(l);
    }
    return res;
};
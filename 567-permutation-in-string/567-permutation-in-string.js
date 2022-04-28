/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    
    if(s1.length > s2.length) return false;
    let count1 = new Array(26).fill(0);
    let count2 = new Array(26).fill(0);
    
    for (let i = 0; i < s1.length; i++) {
        count1[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        count2[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }
    let match = 0;
    for (let i = 0; i < 26; i++) {
        if (count1[i] === count2[i]) match += 1;
    }
    let l = 0;
    for (let i = s1.length; i < s2.length; i++) {
        if (match === 26) return true;
        let index = s2[i].charCodeAt(0) - 'a'.charCodeAt(0);
        
        count2[index] += 1;
        if (count2[index] === count1[index]) match += 1;
        else if (count1[index] + 1 === count2[index]) match -= 1;
        
        index = s2[l].charCodeAt(0) - 'a'.charCodeAt(0);
        count2[index] -= 1;
        if (count2[index] === count1[index]) match += 1;
        else if (count2[index] + 1 === count1[index]) match -= 1;
        
        l += 1;
    }
    if (match === 26) return true;
    
    return false;
    
};
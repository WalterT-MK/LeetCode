/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
    
    let arr1 = new Array(26).fill(0);
    let arr2 = new Array(26).fill(0);
    
    for (let i = 0; i < s1.length; i++) {
        arr1[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        arr2[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }
    let l = 0;
    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (arr1[i] === arr2[i]) matches+=1;
    }
    for (let r = s1.length; r < s2.length; r++) {
        if (matches === 26) return true;
        
        let index = s2[r].charCodeAt(0) - 'a'.charCodeAt(0);
        
        arr2[index] += 1;
        if (arr1[index] === arr2[index]) matches += 1;
        else if (arr1[index] + 1 === arr2[index]) matches -= 1;
        
        index = s2[l].charCodeAt(0) - 'a'.charCodeAt(0);
        arr2[index] -= 1;
        if (arr1[index] === arr2[index]) matches += 1;
        else if (arr1[index] - 1 === arr2[index]) matches -= 1;
        
        l++;
    }
    if (matches === 26) return true;
    
    return false;
    
};
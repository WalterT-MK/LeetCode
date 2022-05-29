/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    //sorting method;
    //return JSON.stringify(s.split('').sort()) === JSON.stringify(t.split('').sort());
    
    // count char method

    let sArr = new Array(26).fill(0);
    let tArr = new Array(26).fill(0);
    
    for (let i = 0; i < s.length; i++) {
        sArr[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        tArr[t[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }
    
    // return JSON.stringify(sArr) === JSON.stringify(tArr); //compare by stringifying array
    
    for (let i = 0; i < 26; i++) {
        if (sArr[i] !== tArr[i]) return false;
    }
    return true;
};
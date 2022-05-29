/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    //sorting method;
    return JSON.stringify(s.split('').sort()) === JSON.stringify(t.split('').sort());
    
    // count char method

    // let sArr = new Array(26).fill(0);
    // let tArr = new Array(26).fill(0);
};
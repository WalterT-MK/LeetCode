/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var cleanS = s.replace(/[^0-9a-z]/gi,'').toLowerCase();
    let i = 0; 
    let j = cleanS.length - 1;
    
    while (i<j) {
        if (cleanS[i]!==cleanS[j]) return false;
        i+=1;
        j-=1;
    }
    return true;
};
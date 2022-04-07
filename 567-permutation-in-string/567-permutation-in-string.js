/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s2.length < s1.length) return false;
    
    let map = new Map();
    for (let i = 0; i < s1.length; i++) {
        map.set(s1[i], map.get(s1[i]) + 1 || 1);
    }
    
    let l = 0;
    let requiredLength = s1.length;
    let counter = map.size;
    for (let r = 0; r < s2.length; r++) {
        let char = s2[r];
        if(map.has(char)) map.set(char, map.get(char) - 1);
        if(map.get(char) === 0) counter--;
        
        while(counter === 0) {
            if(r-l+1 === requiredLength) return true;
            if(map.has(s2[l])) map.set(s2[l], map.get(s2[l]) + 1);
            if(map.get(s2[l]) === 1) counter++;
            l++;
        }
    }
    return false;
};
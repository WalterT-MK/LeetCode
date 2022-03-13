/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length){
        return false;
    }
    const maps = new Map();
    const mapt = new Map();
    for (var i = 0; i<s.length; i++){
        if(maps.has(s[i])) {
            maps.set(s[i], maps.get(s[i]) + 1);
        } else {
            maps.set(s[i], 1);
        }
        if(mapt.has(t[i])) {
            mapt.set(t[i], mapt.get(t[i]) + 1);
        } else {
            mapt.set(t[i], 1);
        }
    }
    for(var [key, val] of maps) {
        testVal = mapt.get(key);
        if (testVal !== val || (testVal === undefined && !mapt.has(key))) {
            return false;
        }
    }
    return true
};
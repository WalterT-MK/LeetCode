/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let startingPoint = 0;
    let length = 0;
    for (let i = 0; i < s.length; i++) {
        if(map.has(s[i])){
            startingPoint = Math.max(startingPoint, map.get(s[i]) + 1);
        }
        map.set(s[i], i);
        length = Math.max(length, i - startingPoint + 1);
    }
    return length;
};
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var ans = {};
    for (var i = 0; i < strs.length; i++) {
        var letters = strs[i].split("").sort().join("");
        if (ans[letters]) {
            ans[letters].push(strs[i]);
        } else {
            ans[letters] = [strs[i]];
        }
    }
    return Object.values(ans);
};
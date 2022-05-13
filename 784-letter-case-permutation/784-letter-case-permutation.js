/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    /*let res = [];
    let char;
    for (let i = 0; i < s.length; i++) {
        if (Number.isInteger(Number(s[i]))) continue;
        let level = [];
        if (res.length === 0) {
            char = s[i].toLowerCase();
            level.push(s.slice(0,i) + char + s.slice(i+1));
            char = s[i].toUpperCase();
            level.push(s.slice(0,i) + char + s.slice(i+1));
        } else {
            for (let curr of res) {
                if (curr[i] === curr[i].toLowerCase()) {
                    char = curr[i].toUpperCase();
                    level.push(curr.slice(0,i) + char + curr.slice(i+1));
                } else {
                    char = curr[i].toLowerCase();
                    level.push(curr.slice(0,i) + char + curr.slice(i+1));
                }
            }
        }
        res = res.concat(level);
    }
    if (res.length === 0) res = [s];
    return res;*/
    let res = [];
    let lowerS = s.toLowerCase();
    let char;
    for (let i = 0; i < lowerS.length; i++) {
        if (Number.isInteger(Number(lowerS[i]))) continue;
        let level = [];
        if (res.length === 0) {
            level.push(lowerS);
            char = lowerS[i].toUpperCase();
            level.push(lowerS.slice(0,i) + char + lowerS.slice(i+1));
        } else {
            for (let curr of res) {
                char = curr[i].toUpperCase();
                level.push(curr.slice(0,i) + char + curr.slice(i+1));
            }
        }
        res = res.concat(level);
    }
    if (res.length === 0) res = [s];
    return res;
};
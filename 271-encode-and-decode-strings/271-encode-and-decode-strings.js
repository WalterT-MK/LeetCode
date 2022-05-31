/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let res = '';
    for (let str of strs) {
        res += `${str.length}#${str}`;
    }
    return res;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    let res = [];
    let i = 0;
    let len = s.length;
    while (i < len) {
        
        let j = i;
        while (s[j] !== '#') {
            j += 1;
        }

        let len = Number(s.slice(i, j));
        res.push(s.slice(j + 1, j + 1 + len));
        i = j + 1 + len;
    }
    return res;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
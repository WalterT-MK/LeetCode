/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let arryS = [];
    let arryT = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '#') {
            arryS.pop();
        } else {
            arryS.push(s[i]);
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (t[i] === '#') {
            arryT.pop();
        } else {
            arryT.push(t[i]);
        }
    }
    return arryS.join('') === arryT.join('');
};
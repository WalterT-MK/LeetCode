/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
    let chars = s.split('');
    for (let i = 0; i < indices.length; i++) {
        let [index, source, target] = [indices[i], sources[i], targets[i]];
        if (s.slice(index).startsWith(source)) {
            helper(index, source, target);
        }
        
    }
    return chars.join('');
    
    
    function helper (start, source, target) {
        chars[start] = target;
        for (let i = 1; i < source.length; i++) {
            chars[start + i] = '';
        }
    }
};
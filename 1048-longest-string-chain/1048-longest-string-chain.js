/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    words = words.sort((a,b)=>a.length - b.length);
    let map = new Map();
    for (let word of words) {
        if (word.length === 1) {
            map.set(word,1);
            continue;
        }
        for (let i = 0; i < word.length; i++) {
            let slicedWord = word.slice(0,i) + word.slice(i+1);
            if (map.has(slicedWord)) {
                let slicedWordcount = map.get(slicedWord);
                if (!map.has(word) || map.get(word) < slicedWordcount + 1) {
                    map.set(word, slicedWordcount + 1);
                }
            }
        }
        if (!map.has(word)) map.set(word,1);
    }
    return Math.max(...map.values());
};
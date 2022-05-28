/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let width = maxWidth;
    let wordsArr = [];
    let res = [];
    for (let word of words) {
        if (word.length <= width - wordsArr.length) {
            wordsArr.push(word);
            width -= word.length;
        } else {
            formString(wordsArr);
            wordsArr = [word];
            width = maxWidth - word.length;
        }
    }
    if (wordsArr) {
        let str = wordsArr.join(' ');
        str += ' '.repeat(maxWidth - str.length);
        res.push(str);
    }
    
    return res;
    
    
    
    function formString(array) {
        let charsLen = 0;
        for (let word of array) {
            charsLen += word.length;
        }
        let spaces = maxWidth - charsLen;
        
        if (array.length === 1) {
            array[0] += ' '.repeat(spaces);
            res.push(array[0]);
            return;
        }
        
        spaces -= array.length - 1;
        
        let end = array.length - 1;
        let i = 0;
        while (spaces -- > 0) {
            let index = i % end;
            array[index] += ' ';
            i += 1;
        }
        
        res.push(array.join(' '));
    }
};
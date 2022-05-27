/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let space = [];
    let width = maxWidth;
    let res = [];
    const formString = (array) => {
        let stringLen = 0;
        for (let arr of array) {
            stringLen += arr.length;
        }
        let spaces = maxWidth - stringLen;
        if (array.length === 1) {
            array[0] += ' '.repeat(spaces);
            res.push(array[0]);
            return;
        }
        
        spaces -= array.length - 1;
        
        let end = array.length - 1;
        let i = 0;
        
        while (spaces -- > 0) {
            array[i] += ' ';
            
            i = (i + 1) % end;
        }
        res.push(array.join(' '));
    }
    
    for (let word of words) {
        if (word.length <= width - space.length) {
            space.push(word);
            width -= word.length;
        } else {
            formString(space);
            space = [word];
            width = maxWidth - word.length;
        }
    }
    
    if (space.length) {
        let string = space.join(' ');
        string += ' '.repeat(maxWidth - string.length);
        res.push(string);
    }
    return res;
    
    
};
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let queue = [];
    for (let char of s) {
        if (char !== ']') {
            queue.push(char);
            continue;
        }
        let curr = queue.pop();
        let str = '';
        while (curr !== '[') {
            str = curr + str;
            curr = queue.pop();
        }
        let num = '';
        curr = queue.pop();
        while (Number.isInteger(Number(curr))) {
            num = curr + num;
            curr = queue.pop();
        }
        if (curr) queue.push(curr);
        queue.push(str.repeat(Number(num)));
    }
    return queue.join('');
};
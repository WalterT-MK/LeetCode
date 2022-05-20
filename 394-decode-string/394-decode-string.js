/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let queue = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ']') {
            queue.push(s[i]);
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
        queue.push(curr);
        queue.push(str.repeat(Number(num)));
    }
    return queue.join('');
};
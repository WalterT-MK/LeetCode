/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let queue = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+') {
            let a = queue.pop();
            let b = queue.pop();
            queue.push(a + b);
        } else if (tokens[i] === '-') {
            let a = queue.pop();
            let b = queue.pop();
            queue.push(b - a);
        } else if (tokens[i] === '*') {
            let a = queue.pop();
            let b = queue.pop();
            queue.push(a * b);
        } else if (tokens[i] === '/') {
            let a = queue.pop();
            let b = queue.pop();
            queue.push(~~(b / a));
        } else {
            queue.push(Number(tokens[i]));
        }
    }
    return queue[0];
};
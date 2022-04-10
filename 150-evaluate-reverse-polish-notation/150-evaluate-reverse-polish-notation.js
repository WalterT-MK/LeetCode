/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    
    for (let i = 0; i < tokens.length; i++) {
        let curr = tokens[i];
        if (curr === '+') {
            let num1 = Number(stack.pop());
            let num2 = Number(stack.pop());
            stack.push(num1 + num2);
        } else if (curr === '-') {
            let num1 = Number(stack.pop());
            let num2 = Number(stack.pop());
            stack.push(num2 - num1);
        } else if (curr === '*') {
            let num1 = Number(stack.pop());
            let num2 = Number(stack.pop());
            stack.push(num1 * num2);
        } else if (curr === '/') {
            let num1 = Number(stack.pop());
            let num2 = Number(stack.pop());
            stack.push(~~(num2/num1));
        } else {
            stack.push(curr);
        }
    }
    return stack[0]
};
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    
    for (let char of s) {
        if (char !== ']') {
            stack.push(char); 
            continue;
        } 
        let string = '';
        let curr = stack.pop();
        while (curr !== '[') {
            string = curr + string;
            curr = stack.pop();
        }
        let num = '';
        curr = stack.pop();
        while (Number.isInteger(Number(curr))) {
            num = curr + num;
            curr = stack.pop();
        }
        if (curr) stack.push(curr);
        stack.push(string.repeat(Number(num)));
    }
    console.log(stack)
    return stack.join('');
};

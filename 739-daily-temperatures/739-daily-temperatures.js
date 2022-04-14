/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(t) {
    let ans = new Array(t.length).fill(0);
    let stack = [];
    for (let i = 0; i < t.length; i++) {
        while (stack.length !== 0 && t[i] > stack[stack.length - 1][0]) {
            let curr = stack.pop();
            ans[curr[1]] = i - curr[1];
        }
        stack.push([t[i], i]);
    }
    
    
    
    
    return ans;
};
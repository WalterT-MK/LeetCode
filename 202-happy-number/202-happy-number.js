/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (n === 1) return true;
    let num = n.toString();
    let cycle = new Set();
    while (!cycle.has(num)) {
        cycle.add(num);
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            sum += Math.pow(num[i], 2);
        }
        if (sum === 1) return true;
        num = sum.toString();
    }
    return false;
};
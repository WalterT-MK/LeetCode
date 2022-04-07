/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l = 0; 
    let r = numbers.length - 1;
    while (l < r) {
        let sumLR = numbers[l] + numbers[r];
        if (sumLR === target) return [l+1, r+1];
        if (sumLR > target) {
            r--;
        } else {
            l++;
        }
    }
    return []
};
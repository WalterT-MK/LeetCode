/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return n*(n+1)/2 - sum;
};
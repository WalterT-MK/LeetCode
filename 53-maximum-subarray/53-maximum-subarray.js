/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = nums[0];
    let res = nums[0]
    for (let i = 1; i < nums.length; i += 1) {
        sum += nums[i];
        if (nums[i] > sum) sum = nums[i];
        if (sum > res) res = sum;
    }
    return res;
};
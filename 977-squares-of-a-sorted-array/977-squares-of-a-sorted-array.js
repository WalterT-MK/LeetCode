/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // [-10, -3, 0, 1, 2, 5]
    let l = 0;
    let r = nums.length - 1;
    let res = [];
    while (l <= r) {
        if (Math.abs(nums[l]) > Math.abs(nums[r])) {
            res.unshift(Math.pow(nums[l], 2));
            l += 1;
        } else {
            res.unshift(Math.pow(nums[r], 2));
            r -= 1;
        }
    }
    return res;
};
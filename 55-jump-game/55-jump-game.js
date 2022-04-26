/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let target = nums.length - 1;
    let index = 0;
    let max = 0;
    while (index < nums.length) {
        max = Math.max(max, index + nums[index]);
        if (max >= target) return true;
        if (nums[index] === 0 && max <= index) return false;
        index += 1;
    }
    return false;
};
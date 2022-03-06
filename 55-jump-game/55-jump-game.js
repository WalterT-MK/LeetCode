/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var idx = 0;
    var max = 0;
    var target = nums.length - 1;
    
    while (idx < nums.length) {
        max = Math.max(max, idx + nums[idx]);
        if (max >= target) {
            return true;
        }
        if (max <= idx && nums[idx] === 0) {
            return false;
        }
        idx++;
    }
    return false;
};
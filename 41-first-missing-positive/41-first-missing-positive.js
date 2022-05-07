/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let i = 0;
    
    while (i < nums.length) {
        if (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        } else {
            i += 1;
        }

    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1){
            return i + 1;
        }
    }
    return i + 1;
};
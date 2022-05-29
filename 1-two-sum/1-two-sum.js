/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let dict = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (dict.has(nums[i])) return [i, dict.get(nums[i])];
        dict.set(target - nums[i], i);
    }
};
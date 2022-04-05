/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map1 = new Map();
    for (let i = 0; i < nums.length; i++) {
        if(map1.has(nums[i])) {
            return [i, map1.get(nums[i])]
        } else {
            map1.set(target - nums[i], i)
        }
        
    }
};
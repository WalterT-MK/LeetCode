/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (nums[nums.length - 1] < target || 
        nums[0] > target || 
        nums === []) {
        return [-1, -1];
    } 

    var left = 0;
    var right = nums.length - 1;
    while (left < right) {
        var mid = Math.floor((left+right)/2);
        if (nums[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    if (nums[left] !== target) {
        return [-1, -1];
    }
    
    var start = left;
    
    right = nums.length - 1;
    
    while (left < right) {
        var mid = Math.floor((left+right) / 2);
        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    if (nums[left] === target) {
        var end = left;
    } else {
        var end = left - 1;
    }
    
    return [start, end];
};
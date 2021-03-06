/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (nums.length === 1) return false;
    //sorting method
    /*
    nums.sort((a,b) => a - b);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) return true;
    }
    return false;
    */
    
    // math method
    return new Set(nums).size !== nums.length;
};
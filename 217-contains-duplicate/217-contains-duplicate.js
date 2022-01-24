/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var count = new Map();
    for (var i = 0; i < nums.length; i++) {
        if(count.has(nums[i])){
            return true;
        } else {
            count.set(nums[i],1);
        }
    }
    return false;
    // var set1 = new Set(nums);
    // if (set1.size != nums.length) {
    //     return true;
    // } else {
    //     return false;
    // }
};
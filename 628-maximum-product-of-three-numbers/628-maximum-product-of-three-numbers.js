/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    var max1 = -Infinity; // 1>2>3
    var max2 = -Infinity;
    var max3 = -Infinity;
    var min1 = Infinity;  //1<2
    var min2 = Infinity;
    
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > max1) {
            [max1, max2, max3] = [nums[i], max1, max2];
        } else if (nums[i] > max2) {
            [max2, max3] = [nums[i], max2];
        } else if (nums[i] > max3) {
            max3 = nums[i];
        }
        
        if (nums[i] < min1) {
            [min1, min2] = [nums[i], min1];
        } else if (nums[i] < min2) {
            min2 = nums[i];
        }
    }
    return Math.max(max1*max2*max3, max1*min1*min2);
};
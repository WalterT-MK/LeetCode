/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var preMax = nums[0];
    var preMin = nums[0];
    var ans = nums[0];
    for (var i = 1; i < nums.length; i++) {
        let currMax = Math.max(preMax*nums[i], preMin*nums[i], nums[i]);
        let currMin = Math.min(preMax*nums[i], preMin*nums[i], nums[i]);
        preMax = currMax;
        preMin = currMin;
        ans = Math.max(ans, preMax);
    }
    
    return ans;
    
    
};
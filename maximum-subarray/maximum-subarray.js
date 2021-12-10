/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var ans = nums[0];
    var sum = nums[0];
    for (var i = 1; i < nums.length; i++) {
        sum+=nums[i]
        if(sum<nums[i]){
            sum=nums[i]
        }
        if(sum > ans) {
            ans = sum;
        }
    }
    return ans;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1) {
        return nums[0];
    }
    if(nums.length === 2) {
        return Math.max(nums[0], nums[1]);
    }
    
    return Math.max(helper(nums.slice(0,-1)), helper(nums.slice(1)));
};
function helper (nums) {
    var dp = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (var i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
    }
    return dp[nums.length - 1];
}
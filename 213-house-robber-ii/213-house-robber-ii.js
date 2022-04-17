/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let helper = (arr) => {
        let dp = new Array(arr.length);
        dp[0] = arr[0];
        dp[1] = Math.max(arr[0], arr[1]);
        for (let i = 2; i < arr.length; i++) {
            dp[i] = Math.max(arr[i] + dp[i - 2], dp[i - 1]);
        }
        return dp[arr.length - 1];
    }
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    return Math.max(helper(nums.slice(0, nums.length - 1)), helper(nums.slice(1)));
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */

//with division
var productExceptSelf = function(nums) {
    var prefix = [nums[0]];
    var postfix = new Array(nums.length-1).fill(0);
    var ans = [];
    for (var i = 1; i < nums.length; i++) {
        prefix.push(nums[i]*prefix[i-1]);
    }
    for (var i = nums.length-1; i >= 0; i--) {
        if(i === nums.length - 1){
            postfix[i] = nums[nums.length-1];
        } else {
            postfix[i] = nums[i]*postfix[i+1];
        }
    }
    for (var i = 0; i < nums.length; i++) {
        if (i === 0) {
            ans.push(1*postfix[i+1]);
        } else if(i === nums.length - 1) {
            ans.push(prefix[i-1]*1);
        } else {
            ans.push(prefix[i-1]*postfix[i+1]);
        }
    }
    return ans;
};
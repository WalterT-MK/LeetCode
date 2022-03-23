/**
 * @param {number[]} nums
 * @return {number[]}
 */

//with division
var productExceptSelf = function(nums) {
    
    
    /*
     1  2  3  4
     1  1  2  6  24
    24 24 12  4  1  
    */
    var pre = [1];
    var pos = [];
    var ans = [];
    
    for (var i = 1; i <= nums.length; i++) {
        pre.push(nums[i - 1] * pre[i - 1]);
    };
    pos[nums.length] = 1;
    for (var i = nums.length - 1; i >= 0; i--) {
        pos[i] = nums[i] * pos[i + 1];
    }
    for (var i = 0; i < nums.length; i++) {
        ans.push(pre[i]*pos[i+1]);
    }
    return ans;
};
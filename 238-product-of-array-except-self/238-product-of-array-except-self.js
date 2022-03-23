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
//     var pre = [1];
//     var pos = [];
//     var ans = [];
    
//     for (var i = 1; i <= nums.length; i++) {
//         pre.push(nums[i - 1] * pre[i - 1]);
//     };
//     pos[nums.length] = 1;
//     for (var i = nums.length - 1; i >= 0; i--) {
//         pos[i] = nums[i] * pos[i + 1];
//     }
//     for (var i = 0; i < nums.length; i++) {
//         ans.push(pre[i]*pos[i+1]);
//     }
//     return ans;
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
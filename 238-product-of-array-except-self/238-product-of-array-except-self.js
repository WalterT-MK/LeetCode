/**
 * @param {number[]} nums
 * @return {number[]}
 */

//with division
var productExceptSelf = function(nums) {
    
    // 1 2 3 4
    // 1  2   6   24
    // 24 24  12  4   
    
    var arry1 = [nums[0]];
    var arry2 = new Array(nums.length - 1).fill(0);
    var ans = [];
    for (let i = 1; i < nums.length; i++) {
        arry1.push(nums[i] * arry1[i - 1]);
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) {
            arry2[i] = nums[i];
        } else {
            arry2[i] = nums[i] * arry2[i+1];
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            ans.push(1 * arry2[i+1]);
        } else if (i === nums.length - 1) {
            ans.push(arry1[i - 1])
        } else {
            ans.push(arry1[i - 1] * arry2[i + 1])
        }
    }
    return ans;
    
};
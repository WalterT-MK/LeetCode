/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let target = nums.length - 1;
    let curr = -1; 
    let next = 0;
    let ans = 0;
    
    for (let i = 0; next < target; i++) {
        if (i > curr) ans += 1, curr = next;
        next = Math.max(next, nums[i] + i);
    }
    return ans;
    
};
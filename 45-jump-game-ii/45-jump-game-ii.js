/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var len = nums.length - 1;
    var curr = -1;
    var next = 0; 
    var ans = 0;
    
    for (var i = 0; next < len; i++) {
        if (i > curr) {
            ans++;
            curr = next;
        }
        next = Math.max(next, nums[i] + i);
    }
    return ans;
    
};
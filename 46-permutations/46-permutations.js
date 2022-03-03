/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var ans = [];
    helper(nums, new Set(), ans);
    return ans;
};

function helper(nums,curr,res) {
    if(curr.size === nums.length) {
        res.push(Array.from(curr));
        return;
    }
    for (var i = 0; i < nums.length; i++) {
        if(curr.has(nums[i])) {
            continue;
        }
        curr.add(nums[i]);
        helper(nums,curr,res);
        curr.delete(nums[i]);
    }
}
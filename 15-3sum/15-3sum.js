/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return [];
    let res = [];
    nums.sort((a,b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (sum === 0){
                res.push([nums[i], nums[l], nums[r]]);
                while (nums[l] === nums[l + 1]) l += 1;
                while (nums[r] === nums[r - 1]) r -= 1;
                l += 1, r -= 1;
            } 
            else if (sum > 0) r -= 1;
            else l += 1;
        }
    }
    return res;
};
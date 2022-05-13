/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [[]];
    let prev = [];
    nums.sort((a,b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        let level = [];
        if (i === 0 || nums[i - 1] !== nums[i]) {
            for (let curr of res) {
                level.push([...curr, nums[i]]);
            }
        } else {
            for (let curr of prev) {
                level.push([...curr, nums[i]]);
            }
        }
        prev = JSON.parse(JSON.stringify(level));
        res = res.concat(level);
    }
    return res;
};
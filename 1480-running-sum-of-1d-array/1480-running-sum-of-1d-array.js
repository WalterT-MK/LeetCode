/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let res = [];
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    res.push(sum);
    for (let i = nums.length - 1; i > 0; i--) {
        sum -= nums[i];
        res.unshift(sum);
    }
    return res;
};
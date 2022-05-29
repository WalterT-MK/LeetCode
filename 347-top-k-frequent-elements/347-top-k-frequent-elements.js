/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    let arrs = [...map].sort((a, b) => b[1] - a[1]).slice(0, k);
    let res = [];
    for (let arr of arrs) {
        res.push(arr[0]);
    }
    return res;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var map1 = new Map();
    var ans = [];
    for (let num of nums) {
        map1.set(num, map1.get(num) + 1 || 1);
    }
    var sortable = [...map1].sort((a,b) => b[1] - a[1]);
    for (let i = 0; i < k; i++) {
        ans.push(sortable[i][0])
    }
    return ans;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var obj = {};
    var ans = [];
    for (let num of nums) {
        if (obj[num]) {
            obj[num] += 1;
        } else {
            obj[num] = 1;
        }
    }
    var sortable = [];
    for (let key in obj) {
        sortable.push([key, obj[key]]);
    }
    sortable.sort((a,b) => b[1] - a[1]);
    for (let i = 0; i < k; i++) {
        ans.push(sortable[i][0])
    }
    return ans;
};
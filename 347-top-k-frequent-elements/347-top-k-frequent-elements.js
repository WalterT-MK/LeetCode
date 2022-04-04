/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // var obj = {};
    // var ans = [];
    // for (let num of nums) {
    //     if (obj[num]) {
    //         obj[num] += 1;
    //     } else {
    //         obj[num] = 1;
    //     }
    // }
    // var sortable = [];
    // for (let key in obj) {
    //     sortable.push([key, obj[key]]);
    // }
    // sortable.sort((a,b) => b[1] - a[1]);
    // for (let i = 0; i < k; i++) {
    //     ans.push(sortable[i][0])
    // }
    // return ans;
    
    var ans = [];
    var map1 = new Map();
    // nums.forEach(n => map1.set(n, map1.get(n) + 1 || 1));
    for (let num of nums) {
        if (map1.has(num)) {
            map1.set(num, map1.get(num) + 1);
        } else {
            map1.set(num, 1);
        }
    }
    var sortable = [...map1.entries()].sort((a,b) => b[1] - a[1]);
    console.log(sortable)
    for (let i = 0; i < k; i++) {
        ans.push(sortable[i][0])
    }
    return ans;
    
    
};
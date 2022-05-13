/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [[]];
    for (let num of nums) {
        let subsets = [];
        for (let curr of res) {
            subsets.push([...curr, num])
        }
        res = res.concat(subsets)
    }
    return res
};
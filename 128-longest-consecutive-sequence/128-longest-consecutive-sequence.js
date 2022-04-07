/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0 || nums === null) return 0;
    const set1 = new Set(nums);
    let max = 0;
    for (let num of set1) {
        if (!set1.has(num - 1)) {
            let length = 1;
            let currnum = num;
            while(set1.has(currnum + length)) {
                length+=1;
            }
            max = Math.max(max, length);
        }
    }
    return max;
};
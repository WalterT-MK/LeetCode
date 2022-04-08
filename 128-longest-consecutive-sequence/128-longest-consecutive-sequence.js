/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let count = 0;
    let set = new Set(nums);
    let setArr = [...set.values()];
    for (let i = 0; i < setArr.length; i++) {
        if (!set.has(setArr[i] - 1)) {
            let currCount = 1;
            let currNum = setArr[i];
            while (set.has(currNum + currCount)) {
                currCount++;
            }
            if (currCount > count) {
                count = currCount;
            }
        }
    }
    return count;
};
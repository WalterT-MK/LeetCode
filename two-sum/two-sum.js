/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map1 = new Map();
    for (var i = 0; i < nums.length; i++) {
        if(map1.has(nums[i])){
            var ans=[];
            ans.push(map1.get(nums[i]));
            ans.push(i);
            return ans;
        } else {
            map1.set(target-nums[i] ,i)
        }
    }
};
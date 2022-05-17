/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    let map = new MinPriorityQueue({priority: x => x[0]});
    
    for (let i = 0; i < nums1.length; i++) {
        let num1 = nums1[i];
        let num2 = nums2[0];
        map.enqueue([num1 + num2, i, 0]);
    }
    
    let n = nums2.length;
    let res = [];
    while (k > 0 && map.isEmpty() === false) {
        let [sum, index1, index2] = map.dequeue().element;
        res.push([nums1[index1], nums2[index2]]);
        if (res.length === k) return res;
        if (index2 < n - 1) {
            map.enqueue([nums1[index1] + nums2[index2 + 1], index1, index2 + 1]);
        }
        
    }
    return res;
};
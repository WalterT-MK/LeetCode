/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    /*
    //heap out of menory
    let map = new Map();
    let res = [];
    let len;
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            let sum = nums1[i] + nums2[j];
            map.set([nums1[i], nums2[j]], sum);
        }
    }
    let arry = [...map];
    arry.sort((a,b) => a[1] - b[1]);
    console.log(arry);
    len = Math.min(arry.length, k);
    for (let i = 0; i < len ; i++) {
        res.push(arry[i][0]);
    }
    return res;
    */
    const minHeap = new MinPriorityQueue({priority: x => x[0]});
    for (let i = 0; i < nums1.length; i++) {
        let num1 = nums1[i];
        let num2 = nums2[0];
        minHeap.enqueue([num1 + num2, i, 0]);
    }
    let n = nums2.length;
    let res = [];
    while (k > 0 && minHeap.isEmpty() === false) {
        let [sum, index1, index2] = minHeap.dequeue().element;
        res.push([nums1[index1], nums2[index2]]);
        if (res.length === k) return res;
        //since both arrya is ascending order, 
        if (index2 < n - 1) {
            minHeap.enqueue([nums1[index1] + nums2[index2 + 1], index1, index2 + 1]);
        }
    }
    return res;
};
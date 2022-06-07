/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let arr = nums1.slice(0, m);
    let l = 0, r = 0;
    let i = 0;
    for (let j = 0; j < m + n; j++) {
        if (r >= n || (l < m && arr[l] <= nums2[r])) {
            nums1[j] = arr[l];
            l += 1;
        } else {
            nums1[j] = nums2[r];
            r += 1;
        }
    }
};
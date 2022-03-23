/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var l = 0;
    var r = height.length - 1;
    var max = r * Math.min(height[0], height[r]);
    while (l < r) {
        var base = r - l;
        var currMax = base * Math.min(height[l], height[r]);
        if (height[l] > height[r]) {
            r--;
        } else {
            l++;
        }
        if (currMax > max) {
            max = currMax;
        }
    }
    return max;
    
};
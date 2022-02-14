/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var i = 0;
    var j = height.length - 1;
    var ans = 0;
    
    while (i < j) {
        var area = (j - i) * Math.min(height[i], height[j]);
        if (area > ans) {
            ans = area;
        }
        if (height[i] > height[j]) {
            j--;
        } else {
            i++;
        }
    }
    return ans;
};
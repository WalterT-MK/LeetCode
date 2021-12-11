/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let result = 0;
    let i = 0;
    let j = height.length - 1;
    while (i < j) {
        let smallest = Math.min(height[i], height[j]);
        let area = (j-i) * smallest;
        
        if (area > result) {
            result = area;
        }
        
        if (height[i] < height [j]) {
            i++;
        } else {
            j--;
        }
    }
    return result;
};
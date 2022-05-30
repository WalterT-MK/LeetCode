/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0;
    let l = 0; 
    let r = height.length - 1;
    let base = height.length - 1;
    while (l < r) {
        let area = Math.min(height[l], height[r]) * base;
        if (height[l] > height[r]) r -= 1;
        else l += 1;
        
        base -= 1;
        if (area > res) res = area;
    }
    return res;
};
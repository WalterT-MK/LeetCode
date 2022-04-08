/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let l = 0,
        r = height.length - 1;
    
    let area = 0;
    let lmax = 0, 
        rmax = 0;
    while (l < r) {
        lmax = Math.max(lmax, height[l]);
        area += lmax - height[l];
        
        rmax = Math.max(rmax, height[r]);
        area+= rmax - height[r];
        
        if (height[l] > height[r]) {
            r--;
        } else {
            l++;
        }
    }
    return area;
};
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let l = 0;
    let r = height.length - 1;
    let lmax = 0;
    let rmax = 0;
    let res = 0;
    while (l<r) {
        lmax = Math.max(lmax, height[l]);
        if(height[l] < lmax) {
            res+= lmax - height[l];
        }
        
        rmax = Math.max(rmax, height[r]);
        if(height[r] < rmax) {
            res+= rmax - height[r];
        }
        
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return res;
};
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n = matrix[0].length
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] <= target && matrix[i][n - 1] >= target) {
            let l = 0,
                r = n - 1;
            while (l <= r) {
                let mid = Math.floor((l+r) / 2);
                if (matrix[i][mid] === target) {
                    return true;
                } else if (matrix[i][mid] > target) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
        }
    }
    return false;
};
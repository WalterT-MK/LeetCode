/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

    var left = 0;
    var right = matrix.length - 1
    
    /*
    matrix[sRow][sCol] ===> matrix[sRow][eCol]
    matrix[sRow][eCol] ===> matrix[eRow][eCol]
    matrix[eRow][eCol] ===> matrix[eRow][sCol]
    matrix[eRow][sCol] ===> matrix[sRow][sCol]
    */
    while (left < right) {
        for (var i = 0; i < (right - left) ; i++) {
            var top = left;
            var bott = right;
            
            var temp = matrix[top][left + i];
            
            matrix[top][left + i] = matrix[bott - i][left];
            matrix[bott - i][left] = matrix[bott][right - i];
            matrix[bott][right - i] = matrix[top + i][right];
            matrix[top + i][right] = temp;
        }
        left++;
        right--;
    }
};
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var row = new Set();
    var col = new Set();
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                row.add(i);
                col.add(j);
            }
        }
    }
    
    for (var i = 0; i < matrix.length; i++) {
        if (row.has(i)) {
            matrix[i].fill(0);
            continue;
        }
        for (var j = 0; j < matrix[0].length; j++) {
            // if (row.has(i) || col.has(j)) {
            //     matrix[i][j] = 0;
            // }
            if (col.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
    
};
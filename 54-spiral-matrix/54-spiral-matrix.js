/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
//     if (matrix.length === 0) return [];
//     if (matrix[0].length === 0) return [];
//     var output = [];
    
//     output = output.concat(matrix.shift());
    
//     for (var i = 0; i < matrix.length - 1; i++) {
//         output.push(matrix[i].pop());
//     }
    
//     var lastRow = matrix.pop();
//     if (lastRow) output = output.concat(lastRow.reverse());
    
//     for (var i = matrix.length - 1; i > -1; i--) {
//         if (matrix[i].length) output.push(matrix[i].shift());
//     }
    
//     return output.concat(spiralOrder(matrix));
    
    var ans = [];
    var sRow = 0;
    var sCol = 0;
    var eRow = matrix.length - 1;
    var eCol = matrix[0].length - 1;
    while (sRow <= eRow && sCol <= eCol) {
        for (var i = sRow; i <= eCol; i++) {
            ans.push(matrix[sRow][i]);
        }
        sRow++;
        for (var i = sRow; i <= eRow; i++) {
            ans.push(matrix[i][eCol]);
        }
        eCol--;
        if (sRow <= eRow) {
            var i = eCol;
            while (i >= sCol) {
                ans.push(matrix[eRow][i]);
                i--;
            }
            eRow--;
        }
        if (sCol <= eCol) {
            var i = eRow;
            while (i >= sRow) {
                ans.push(matrix[i][sCol]);
                i--;
            }
            sCol++;
        }
    }
    return ans;
};


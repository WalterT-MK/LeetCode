/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) return [];
    if (matrix[0].length === 0) return [];
    var output = [];
    
    output = output.concat(matrix.shift());
    
    for (var i = 0; i < matrix.length - 1; i++) {
        output.push(matrix[i].pop());
    }
    
    var lastRow = matrix.pop();
    if (lastRow) output = output.concat(lastRow.reverse());
    
    for (var i = matrix.length - 1; i > -1; i--) {
        if (matrix[i].length) output.push(matrix[i].shift());
    }
    
    return output.concat(spiralOrder(matrix));
};


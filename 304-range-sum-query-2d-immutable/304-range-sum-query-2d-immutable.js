/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.mat = matrix;
    let m = matrix.length;
    let n = matrix[0].length;
    let rowSum = new Array(m).fill().map(() => new Array(n).fill());
    
    for (let i = 0; i< m; i++) {
        let _sum = 0;
        for (let j = 0; j < n; j++) {
            _sum += matrix[i][j];
            rowSum[i][j] = _sum;
        }
    }
    this.rowSum = rowSum;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0;
    for (let i = row1; i <= row2; i++) {
        let _sum;
        if (col1 === 0) {
            _sum = this.rowSum[i][col2];
        } else {
            _sum = this.rowSum[i][col2] - this.rowSum[i][col1 - 1] 
        }
        sum += _sum;
    }
    return sum;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
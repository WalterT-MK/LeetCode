/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let orange = 0;
    let time = 0;
    let directions = [[0,1], [1,0], [-1,0], [0,-1]];
    let q = [];
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) orange += 1;
            if (grid[r][c] === 2) q.push([r,c,0]);
        }
    }
    
    while (q.length !== 0 && orange) {
        let [row, col, mins] = q.shift();
        if (grid[row][col] === 1) {
            grid[row][col] = 2;
            orange -= 1;
            time = mins;
        }
        for (let [dr,dc] of directions) {
            let [newR, newC] = [row+dr, col+dc];
            if (newR < 0 || newR >= rows || newC < 0 || newC >= cols) continue;
            if (grid[newR][newC] === 1) q.push([newR, newC, mins+1]);
        }
    }
    
    return orange ? -1 : time;
};
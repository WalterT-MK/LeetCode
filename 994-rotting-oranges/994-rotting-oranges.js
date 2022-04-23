/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let q = [];
    let directions = [[0,1], [0,-1], [1,0], [-1,0]];
    let countMin = 0;
    let countOrange = 0;
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) q.push([r,c, 0]);
            if (grid[r][c] === 1) countOrange += 1;
        }
    }
    
    while (q.length !== 0 && countOrange) {
        let [row, col, mins] = q.shift();
        
        if (grid[row][col] === 1) {
            grid[row][col] = 2;
            countMin = mins;
            countOrange -= 1;
        }
        
        for (let [dr, dc] of directions) {
            let [newR, newC] = [row + dr, col +dc];
            if (newR < 0 || newR >= rows || newC < 0 || newC >= cols) continue;
            if (grid[newR][newC] === 1) q.push([newR, newC, mins + 1]);
        }
        
    }

    return countOrange ? -1 : countMin;
    
    
    
};
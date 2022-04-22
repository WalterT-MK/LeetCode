/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let directions = [[0,1],[0,-1],[1,0],[-1,0]];
    let res = 0;
    
    const bfs = (r,c) => {
        let q = [[r,c]];
        let localRes = 0;
        while (q.length !== 0) {
            
            let [row, col] = q.shift();
            if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 0) {
                continue;
            }
            
            grid[row][col] = 0;
            localRes += 1;
            
            for (let [dr, dc] of directions) {
                q.push([row + dr, col + dc]);
            }
        }
        if (localRes > res) {
            res = localRes;
        }
    }
    
    
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                bfs(r,c);
            }
        }
    }
    return res;
};
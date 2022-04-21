/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    
    let rows = grid.length;
    let cols = grid[0].length;
    let directions = [[0,1],[0,-1], [1,0], [-1,0]];
    let count = 0;
    
    const bfs = (r,c) => {
        let q = [[r,c]];
        let localCount = 0;
        while (q.length !== 0) {
            let [row, col] = q.shift();
            if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] == '0') continue;
            grid[row][col] = '0';
            localCount += 1;
            for (let [dr, dc] of directions) {
                q.push([row + dr, col + dc]);
            }
        }
        if (localCount > count) {
            count = localCount;
        }
    }
    
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] == '1') {
                bfs(r,c);
            }
        }
    }
    return count;
    
};
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let land = '1';
    let water = '0';
    if (!grid) return 0;
    let rows = grid.length;
    let cols = grid[0].length;
    // let visit = new Set();
    let count = 0;
    let directions = [[1,0], [-1,0], [0,1], [0,-1]];
    
    const bfs = (r, c) => {
        let q = [[r,c]];
        while (q.length !== 0) {
            let [row, col] = q.shift();
            if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] == water) continue;
            grid[row][col] = water;
            for (let [dr, dc] of directions) {
                q.push([row + dr, col + dc]);
            }
        }
    }
    
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // if (grid[r][c] === '1' && visit.has(JSON.stringify([r,c])) !== true) {
            if (grid[r][c] === land) {
                bfs(r,c);
                
                count += 1;
            }
        }
    }
    return count;
};
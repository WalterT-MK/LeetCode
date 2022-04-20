/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid) return 0;
    let rows = grid.length;
    let cols = grid[0].length;
    let visit = new Set();
    let count = 0;
    let directions = [[1,0], [-1,0], [0,1], [0,-1]];
    
    const bfs = (r, c) => {
        let q = [];
        visit.add(JSON.stringify([r,c]));
        q.push([r,c]);
        while (q.length !== 0) {
            let [row, col] = q.shift();
            for (let [dr, dc] of directions) {
                let iRow = row + dr;
                let iCol = col + dc;
                if ((iRow >= 0 && iRow < rows) &&
                    (iCol >= 0 && iCol < cols) &&
                    visit.has(JSON.stringify([iRow, iCol])) !== true &&
                    grid[iRow][iCol] === '1') {
                    q.push([iRow, iCol]);
                    visit.add(JSON.stringify([iRow, iCol]));
                }
            }
        }
    }
    
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1' && visit.has(JSON.stringify([r,c])) !== true) {
                bfs(r,c);
                
                count += 1;
            }
        }
    }
    return count;
};
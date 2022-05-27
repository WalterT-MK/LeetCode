/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    let m = grid.length;
    let n = grid[0].length;
    let directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    let queue = [[0, 0, k]];
    let step = 0;
    let x, y;
    
    const visited = new Set();
    visited.add(`0-0-${k}`);
    
    while (queue[0]) {
        let level = [];
        while (queue.length !== 0) {
            let [currX, currY, obs] = queue.shift();
            if (currX === m - 1 && currY === n - 1) return step;
            for (let [dx, dy] of directions) {
                [x, y] = [currX + dx, currY + dy];
                if (x < 0 || x >= m || y < 0 || y >= n || (grid[x][y] === 1 && obs === 0)) continue;
                
                let newObs = grid[x][y] === 1 ? obs - 1 : obs;
                let key = `${x}-${y}-${newObs}`       
                if (!visited.has(key)) {
                    visited.add(key);
                    level.push([x, y, newObs]);
                }
            } 
        }
        queue = level;
        step += 1;
    }
    return -1;
};
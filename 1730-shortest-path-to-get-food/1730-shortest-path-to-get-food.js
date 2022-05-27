/**
 * @param {character[][]} grid
 * @return {number}
 */
var getFood = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let directions = [[0,1], [0,-1], [1,0], [-1,0]];
    let res = 0;
    let location = [];
    //locate your location first
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '*') location = [i, j];
        }
    }
    
    let queue = [location];
    grid[location[0]][location[1]] = 'X';
    let x, y;
    while (queue[0]) {
        let level = [];
        while (queue.length !== 0) {
            let [currX, currY] = queue.shift();
            for (let [dx, dy] of directions) {
                [x, y] = [currX + dx, currY + dy];
                if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === 'X') continue;
                if (grid[x][y] === '#') return res + 1;
                level.push([x, y]);
                grid[x][y] = 'X';
            }
        }
        queue = level;
        res += 1;
    }
    return -1;
};
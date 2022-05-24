/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var removeOnes = function(grid) {
    let row1 = grid[0];
    for (let i = 1; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (row1[0] === grid[i][0]) {
                if (grid[i][j] !== row1[j]) return false;
            } else {
                if (grid[i][j] === row1[j]) return false;
            }
        }
    }
    return true;
};
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let rows = board.length;
    let cols = board[0].length;
    let directions = [[0,1], [1,0], [0,-1], [-1, 0]];
    
    let arryT = [];
    const bfs = (r,c) => {
        let q = [[r,c]];
        while (q.length !== 0) {
            let [row, col] = q.shift();
            if (row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] === 'X') continue;
            board[row][col] = 'X';
            arryT.push([row, col]);
            for (let [dr, dc] of directions) {
                q.push([row + dr, col + dc]);
            }
        }
    }  
    for (let r = 0; r < rows; r++) {
        if (board[r][0] === 'O') {
            bfs(r,0);
        }
        if (board[r][cols - 1] ==='O') {
            bfs(r,cols - 1);
        }
    }
    
    for (let c = 0; c < cols; c++) {
        if (board[0][c] === 'O') {
            bfs(0,c);
        }
        if (board[rows - 1][c] === 'O') {
            bfs(rows - 1,c);
        }
    }
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            board[r][c] = 'X';
        }
    }
    
    for (let i = 0; i < arryT.length; i++) {
        let [r,c] = arryT[i];
        board[r][c] = 'O';
    }
    
    
};
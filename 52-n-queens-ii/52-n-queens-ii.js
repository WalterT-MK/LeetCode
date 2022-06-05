/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let res = 0;
    let board = new Array(n).fill().map(() => new Array(n).fill('.'));
    let check = (r, c) => {
        for (let i = 0; i < r; i++) {
            if (board[i][c] === 'Q') return false;
        }
        
        for (let i = r - 1, j = c - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        
        for (let i = r - 1, j = c + 1; i >= 0 && j <= n - 1; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        
        return true;
    }
    
    let backtrack = (r) => {
        if (r === n) {
            res += 1;
            return;
        }
        for (let c = 0; c < n; c++) {
            if (check(r,c)) {
                board[r][c] = 'Q';
                backtrack(r + 1);
                board[r][c] = '.';
            }
        }
    }
    backtrack(0);
    return res;
};
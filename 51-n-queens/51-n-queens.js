/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let board = new Array(n).fill().map(() => new Array(n).fill('.'));
    
    let result = [];
    
    let checkValid = (r, c) => {
        //check above column
        for (let i = 0; i < r; i++) {
            if (board[i][c] === 'Q') return false;
        }
        //check for up left
        for(let i = r - 1, j = c - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === "Q") return false;
        }
        //check for up right
        for(let i = r - 1, j = c + 1; i >= 0 && j <= n - 1; i--, j++) {
            if(board[i][j] === "Q") return false;
        }
        return true;
    }
    
    let backtrack = (r) => {
        if (r === n) {
            result.push([...board].map(row => row.join('')));
            return;
        }
        for (let c = 0; c < n; c++) {
            if (checkValid(r,c)) {
                board[r][c] = 'Q';
                backtrack(r + 1);
                board[r][c] = '.';
            }
        }        
    }
    backtrack(0);
    return result;
    
    
};
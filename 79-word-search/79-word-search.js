/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if (board.length === 0) return false;
    
    const dict = [[-1, 0], [1,0], [0,-1], [0,1]];
    
    var dp = (i,j,k) => {
        if (board[i][j] !== word[k]) return false;
        if (k === word.length - 1) return true;
        
        board[i][j] = '*';
        for (const[di, dj] of dict) {
            const x = i + di;
            const y = j + dj;
            if (x >= 0 && x < board.length && y >= 0 && y < board[0].length) {
                if (dp(x,y,k+1)) return true;
            }
        }
        board[i][j] = word[k];
        return false;
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dp(i,j,0)) return true;
        }
    }
    return false;
};


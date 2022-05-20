/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let h = board.length;
    let w = board[0].length;
    let ship = 0;
    for (let r = 0; r < h; r++) {
        for (let c = 0; c < w; c++) {
            if (board[r][c] === 'X') {
                if ((r - 1 >= 0 && board[r - 1][c] === 'X') || (c - 1 >= 0 && board[r][c - 1] === 'X')) {
                    continue;
                } else {
                    ship += 1;
                }
            }
        }
    }
    return ship;
};
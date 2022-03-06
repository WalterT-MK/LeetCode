/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var helper = function(row, cal, m, n, memo) {
    if (row > m || cal > n) {
        return 0;
    }
    if (row === m && cal === n) {
        return 1;
    }
    if (memo[row][cal] === -1) {
        var rowcount = helper(row + 1, cal, m, n, memo);
        var calcount = helper(row, cal + 1, m, n, memo);
        
        memo[row][cal] = rowcount + calcount
    }
    
    return memo[row][cal];
}

var uniquePaths = function(m, n) {
    var memo = new Array(m+1).fill(0);
    for (var i = 0; i < memo.length; i++) {
        memo[i] = new Array(n+1).fill(-1);
    }
    return helper(1,1,m,n,memo)
};

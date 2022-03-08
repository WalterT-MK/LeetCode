/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    var lis = [];
    let m = text1.length;
    let n = text2.length;
    
    for (var i = 0; i <= m; i++) {
        lis[i] = new Array(n+1).fill(0);
    }
    
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (text1.charAt(i - 1) != text2.charAt(j - 1)) {
                lis[i][j] = Math.max(lis[i - 1][j], lis[i][j - 1]);
            } else {
                lis[i][j] = lis[i-1][j-1]+1;
            }
        }
    }
    return lis[m][n];
};
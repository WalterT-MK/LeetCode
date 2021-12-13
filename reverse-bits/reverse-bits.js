/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
// var reverseBits = function(n) {
//     var ans = 0;
//     for (var i = 0; i < 32; i++) {
//         const last = n & 1;
//         const reversed = last << (31 - i);
//         ans |= reversed;
//         n >>>= 1;
//     }
//     return ans >>> 0;
// };
var reverseBits = function(n) {
    var ans = 0;
    var count = 32;
    while (count--) {
        ans *= 2;
        ans += n & 1;
        n = n >> 1;
    }
    return ans;
}
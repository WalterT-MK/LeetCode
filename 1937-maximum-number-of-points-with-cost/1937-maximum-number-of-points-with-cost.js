/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let prev = points[0];
    let curr = [];
    
    for (let i = 1; i < points.length; i++) {
        let max = 0;
        for (let j = 0; j < points[0].length; j++) {
            max = Math.max(max - 1, prev[j]);
            curr.push(points[i][j] + max);
        }
        max = 0;
        for (let j = points[0].length - 1; j >= 0; j--) {
            max = Math.max(max - 1, prev[j]);
            curr[j] = Math.max(curr[j], points[i][j] + max);
        }
        prev = curr;
        curr = [];
    }
    return Math.max(...prev);
};
/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
    let res = Infinity;
    let pointMap = new Map();
    for (let [x, y] of points) {
        if (!pointMap.has(x)) pointMap.set(x, new Set());
        pointMap.get(x).add(y);
    }
    for (let [x1, y1] of points) {
        for (let [x2, y2] of points) {
            if (x1 < x2 && y1 !== y2 && pointMap.get(x1).has(y2) && pointMap.get(x2).has(y1)) {
                res = Math.min(res, Math.abs((x1 - x2) * (y1 - y2)));
            }
        }
    }
    return res === Infinity ? 0 : res;
};
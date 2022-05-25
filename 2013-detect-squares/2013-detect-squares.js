
var DetectSquares = function() {
    this.points = {};
    
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function([x, y]) {
    if (!this.points[x]) {
        this.points[x] = {[y] : 1};
    } else {
        this.points[x][y] = (this.points[x][y] || 0) + 1;
    }
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.squareCount = function(x,y,x1,y1) {
    return (this.points[x1][y1] || 0) * 
           (this.points[x][y1] || 0) *
           (this.points[x1][y] || 0);
};

DetectSquares.prototype.count = function([x, y]) {
    let count = 0;
    for (let x1 in this.points) {
        let diff = Math.abs(x1 - x);
        if (this.points[x] && diff !== 0) {
            count += this.squareCount(x, y, x1, y + diff) + this.squareCount(x, y, x1, y - diff);
        }
    }
    return count;
};

/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */
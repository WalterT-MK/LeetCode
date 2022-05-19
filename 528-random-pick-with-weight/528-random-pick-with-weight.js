/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.arry = w;
    this.weight = [];
    this.sum = 0;
    for (let i = 0; i < this.arry.length; i++) {
        this.sum += this.arry[i];
        this.weight.push(this.sum);
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let target = Math.random() * this.sum;
    for (let i = 0; i < this.weight.length; i++) {
        if (this.weight[i] > target) {
            return i;
        }
    }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
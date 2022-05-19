/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.arry = w;
    this.weight = [];
    let sum = 0;
    for (let i = 0; i < this.arry.length; i++) {
        sum += this.arry[i];
        this.weight.push(sum);
    }
    this.total = sum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let target = Math.random() * this.total;
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
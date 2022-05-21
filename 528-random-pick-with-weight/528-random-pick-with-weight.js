/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.arry = w;
    let sum = 0;
    this.weight = [];
    for (let i of this.arry) {
        sum += i;
        this.weight.push(sum);
    }
    this.sum = sum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let target = Math.random() * this.sum;
    let l = 0; let r = this.arry.length - 1;
    while (l < r) {
        let mid = l + Math.floor((r - l) / 2);
        if (this.weight[mid] > target) r = mid;
        else l = mid + 1;
    }
    return l;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

var StockPrice = function() {
    this.array = new Map();
    this.minHeap = new MinPriorityQueue({compare: (a, b) => a.price > b.price});
    this.maxHeap = new MaxPriorityQueue({compare: (a, b) => a.price < b.price});
    this.last = 0;

};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function(timestamp, price) {
    this.array.set(timestamp, price);
    if (this.last < timestamp) this.last = timestamp;
    this.minHeap.enqueue({timestamp, price});
    this.maxHeap.enqueue({timestamp, price});
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function() {
    return this.array.get(this.last);
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
    let maxtop = this.maxHeap.front();
    
    while (this.array.get(maxtop.timestamp) !== maxtop.price) {
        this.maxHeap.dequeue();
        maxtop = this.maxHeap.front();
    }
    return maxtop.price;
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
    let mintop = this.minHeap.front();
    
    while (this.array.get(mintop.timestamp) !== mintop.price) {
        this.minHeap.dequeue();
        mintop = this.minHeap.front();
    }
    return mintop.price;
};

/** 
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */
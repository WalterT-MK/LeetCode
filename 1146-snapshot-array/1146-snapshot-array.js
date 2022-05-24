/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.map = new Map();
    this.array = []
    this.snapNum = 0;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.array[index] = val;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    let arrayCopy = [...this.array];
    this.map.set(this.snapNum, arrayCopy);
    this.snapNum += 1;
    return this.snapNum - 1;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    let arrAtSnapID = this.map.get(snap_id);
    return arrAtSnapID[index] === undefined ? null : arrAtSnapID[index]
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    
    intervals.sort((a,b) => a[0] - b[0]);
    let arry = new miniHeap();
    let res = 0;
    for (let i of intervals) {
        if (arry.size > 0 && arry.peek[1] <= i[0]) {
            arry.pop();
        }
        arry.insert(i);
        res = Math.max(res, arry.size);
        
    }
    return res;
    
};

class miniHeap {
        constructor() {
            this.heap = [];
        }
        
        insert(val) {
            this.heap.unshift(val);
            this.heap.sort((a,b) => a[1] - b[1]);
        }

        get size() {
            return this.heap.length;
        }

        get peek() {
            if (this.heap.length === 0) return null;
            return this.heap[0];
        }

        pop() {
            if (this.heap.length === 0) return null;
            this.heap.shift();
        }
    }
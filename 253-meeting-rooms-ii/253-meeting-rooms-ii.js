/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let rooms = [];
    let heapMap = new MinPriorityQueue({priority: x => x[1]});
    let size = 0;
    for (let i = 0; i < intervals.length; i++) {
        if (heapMap.size() !== 0 && intervals[i][0] >= heapMap.front().element[1]) {
            heapMap.dequeue();
        }
        heapMap.enqueue(intervals[i]);
        if (heapMap.size() > size) size = heapMap.size();
    }
    return size;
    
};
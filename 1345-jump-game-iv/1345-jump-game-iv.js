/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    if (arr.length === 1) return 0;
    let obj = new Map();
    for (let i = arr.length - 1; i >= 0; i--) {
    // for (let i = 0; i < arr.length; i++) {
        if (!obj.has(arr[i])) obj.set(arr[i], []);
        obj.get(arr[i]).push(i);
    }
    let queue = [[0, 0]];
    let visited = new Set();
    visited.add(0);
    while (queue.length) {
        let [currI, step] = queue.shift();
        
        //check i - 1;
        let prevI = currI - 1;
        if (prevI >= 0 && !visited.has(prevI)) {
            queue.push([prevI, step + 1]);
            visited.add(prevI);
        }
        
        //check i + 1;
        let nextI = currI + 1;
        if (nextI < arr.length && !visited.has(nextI)) {
            if (nextI === arr.length - 1) return step + 1;
            queue.push([nextI, step + 1]);
            visited.add(nextI);
        }

        //check arr[i] === arr[j]
        if (obj.has(arr[currI])) {
            for (let index of obj.get(arr[currI])) {
                if (!visited.has(index)) {
                    if (index === arr.length - 1) return step + 1;
                    queue.push([index, step + 1]);
                    visited.add(index);
                }
            }
            obj.delete(arr[currI]);
        }
        
        
    }
};

//-------------------------------------------

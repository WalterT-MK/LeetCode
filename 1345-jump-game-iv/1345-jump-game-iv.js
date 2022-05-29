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
        //let prevI = currI - 1;
        if (currI - 1 >= 0 && !visited.has(currI - 1)) {
            queue.push([currI - 1, step + 1]);
            visited.add(currI - 1);
        }
        
        //check i + 1;
        //let nextI = currI + 1;
        if (currI + 1 < arr.length && !visited.has(currI + 1)) {
            if (currI + 1 === arr.length - 1) return step + 1;
            queue.push([currI + 1, step + 1]);
            visited.add(currI + 1);
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

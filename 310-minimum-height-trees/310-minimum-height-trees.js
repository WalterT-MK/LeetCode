/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    let res = [];
    if (n < 2) {
        for (let i = 0; i < n; i++) {
            res.push(i);
        }
        return res;
    }
    let graph = new Map();
    let indegrees = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    for (let [e1, e2] of edges) {
        graph.get(e1).push(e2);
        graph.get(e2).push(e1);
        indegrees[e1] += 1;
        indegrees[e2] += 1;
    }
    let queue = [];
    for (let i = 0; i < n; i++) {
        if (indegrees[i] === 1) {
            queue.push(i);
        }
    }
    while (n > 2) {
        let size = queue.length;
        n -= size;
        while (size > 0) {
            let node = queue.shift();
            size -= 1;
            
            for (let neighbour of graph.get(node)) {
                indegrees[neighbour] -= 1;
                if (indegrees[neighbour] === 1) {
                    queue.push(neighbour);
                }
            }
        }    
    }
    return queue;
};
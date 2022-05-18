/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    /*let res = [];
    //edge case
    if (n < 2) {
        for (let i = 0; i < n; i++) {
            res.push(i);
        }
        return res;
    }
    //create a map that store all connection between nodes.
    let graph = new Map();
    
    //an array to represent how much connection (adjancency node) have
    //the index of array represent the value of node.
    let indegrees = new Array(n).fill(0);
    
    //create map, 'i' as key while array as adjancency value
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    
    //while creating the map, also increase the count of connection of such value
    for (let [e1, e2] of edges) {
        graph.get(e1).push(e2);
        graph.get(e2).push(e1);
        indegrees[e1] += 1;
        indegrees[e2] += 1;
    }
    //create a queue that store all leaf (lowest layer?)
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
    */
    
    let res = [];
    //edge case
    if (n < 2) {
        for (let i = 0; i < n; i++) {
            res.push(i);
        }
        return res;
    }
    let heapMap = new Map();
    let connections = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        heapMap.set(i, []);
    }
    for (let [e1,e2] of edges) {
        heapMap.get(e1).push(e2);
        heapMap.get(e2).push(e1);
        
        connections[e1] += 1;
        connections[e2] += 1;
    }
    let queue = [];
    for (let i = 0; i < n; i++) {
        if (connections[i] === 1) queue.push(i);
    }
    
    while (n > 2) {
        let size = queue.length;
        n -= size;
        while (size > 0) {
            let curr = queue.shift();
            size -= 1;
            for (let node of heapMap.get(curr)) {
                connections[node] -= 1;
                if (connections[node] === 1) queue.push(node);
            }
        }
    }
    return queue;
};
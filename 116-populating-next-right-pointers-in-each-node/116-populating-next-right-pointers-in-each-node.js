/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root === null) return root;
    let q = [root];
    while(q.length !== 0) {
        let temp = [];
        while (q.length !== 0) {
            let curr = q.shift();
            curr.next = q[0] || null;
            if (curr.left) {
                temp.push(curr.left);
                temp.push(curr.right);  
            } 
        }
        q = temp;
    }
    return root;
};
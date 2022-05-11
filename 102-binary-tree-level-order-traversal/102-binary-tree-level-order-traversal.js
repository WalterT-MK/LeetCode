/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    let q = [root];
    let res = [];
    while (q.length !== 0) {
        let level = [];
        let _res = [];
        while (q.length !== 0) {
            let curr = q.shift();
            _res.push(curr.val);
            if (curr.left) level.push(curr.left);
            if (curr.right) level.push(curr.right);
        }
        q = level;
        res.push(_res);
    }
    return res;
};
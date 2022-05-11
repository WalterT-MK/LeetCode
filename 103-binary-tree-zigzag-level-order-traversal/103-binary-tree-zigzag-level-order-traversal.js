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
var zigzagLevelOrder = function(root) {
    let q = [root];
    let res = [];
    let zigzag = true;
    while (q[0]) {
        let level = [];
        let _res = [];
        while (q.length !== 0) {
            
            let curr = q.shift();
            zigzag ? _res.push(curr.val) : _res.unshift(curr.val);
            if (curr.left) level.push(curr.left);
            if (curr.right) level.push(curr.right);
        }
        res.push(_res);
        q = level;
        
        zigzag = zigzag ? false : true;

    }
    return res;
};
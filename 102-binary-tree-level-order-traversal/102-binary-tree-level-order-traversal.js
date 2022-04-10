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
    let q = [root];
    let ans = [];
    while (q[0]) {
        let qLen = q.length;
        let level = [];
        
        for (let i = 0; i < qLen; i++) {
            let curr = q.shift();
            if (curr.left) q.push(curr.left);
            if (curr.right) q.push(curr.right);
            level.push(curr.val);
        }
        ans.push(level);
    }
    return ans;
};
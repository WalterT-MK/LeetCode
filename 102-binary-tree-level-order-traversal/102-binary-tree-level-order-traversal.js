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
    let q = [root], ans = [];
    
    while (q[0]) {
        var qLen = q.length;
        var level = [];
        for (let i = 0; i < qLen; i++) {
            let curr = q.shift();
            level.push(curr.val);
            if (curr.left) {
                q.push(curr.left);
            }
            if (curr.right) {
                q.push(curr.right);
            }
        }
        ans.push(level);
    }
    return ans;
};
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
        let temp = [];
        let level = [];
        while(q.length !== 0) {
            let curr = q.shift();
            level.push(curr.val);
            if (curr.left) temp.push(curr.left);
            if (curr.right) temp.push(curr.right);
        }
        ans.push(level);
        q = temp;
    }
    return ans;
};
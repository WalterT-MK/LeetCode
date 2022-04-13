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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (root === null) return [];
    let ans = [];
    let q = [root];
    while (q.length !== 0) {
        let qLen = q.length;
        for (let i = 0; i < qLen; i++) {
            let curr = q.shift();
            if (i === qLen - 1) ans.push(curr.val);
            if (curr.left !== null) q.push(curr.left);
            if (curr.right !== null) q.push(curr.right);
        }

    }
    return ans;
};
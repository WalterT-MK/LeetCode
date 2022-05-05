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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let obj = [];
    const dfs = (node) => {
        if (node.left) dfs(node.left);
        obj.push([node.val, Math.abs(node.val - target)]);
        if (node.right) dfs(node.right);
    }
    dfs(root);
    obj.sort((a,b) => a[1] - b[1]);
    return obj[0][0];
};
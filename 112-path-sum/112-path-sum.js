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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let ans = false;
    if (!root) return ans;
    const dfs = (node, res) => {
        res += node.val;
        if (!node.left && !node.right) {
            if (res === targetSum) ans = true;
            else return;
        }
        if (node.left) dfs(node.left, res);
        if (node.right) dfs(node.right, res);
    }
    dfs(root, 0);
    return ans;
};
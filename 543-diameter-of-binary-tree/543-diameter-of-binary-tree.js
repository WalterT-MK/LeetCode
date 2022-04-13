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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if (root === null) return 0;
    let ans = 1;
    let dfs = (root) => {
        if (root === null) return 0;
        let left = dfs(root.left);
        let right = dfs(root.right);
        ans = Math.max(ans, left + right + 1);
        return Math.max(left, right) + 1;
    }
    dfs(root);
    return ans - 1;
};
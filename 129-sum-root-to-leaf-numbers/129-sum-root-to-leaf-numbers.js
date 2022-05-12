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
var sumNumbers = function(root) {
    let res = 0;
    const dfs = (node, prev) => {
        
        prev = prev + node.val.toString();
        if (!node.left && !node.right) res += Number(prev);

        if (node.left) dfs(node.left, prev);
        if (node.right) dfs(node.right, prev);
    }
    dfs(root, '');
    return res;
};
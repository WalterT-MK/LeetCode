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
var findLeaves = function(root) {
    let res = {};
    const dfs = (node) => {
        if (node === null) return 0;
        let depth = Math.max(dfs(node.left), dfs(node.right));
        if (res[depth]) {
            res[depth].push(node.val);
        } else {
            res[depth] = [node.val];
        }
        return depth + 1;
    }
    dfs(root)
    return Object.values(res);
};
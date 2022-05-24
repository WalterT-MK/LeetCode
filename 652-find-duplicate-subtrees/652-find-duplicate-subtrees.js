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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let map = new Map();
    let res = [];
    const dfs = (node) => {
        if (!node) return 'null';
        let left = dfs(node.left);
        let right = dfs(node.right);
        let key = `${node.val}-${left}-${right}`;
        map.set(key, (map.get(key) || 0) + 1);
        if (map.get(key) === 2) res.push(node);
        return key;
    }
    dfs(root);
    return res;
};
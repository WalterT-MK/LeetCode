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
    //brute force, calculate all nodes' different with target, sort
    //time: O(nlog(n)) space: O(n)
    let obj = [];
    const dfs = (node) => {
        if (node.left) dfs(node.left);
        obj.push([node.val, Math.abs(node.val - target)]);
        if (node.right) dfs(node.right);
    }
    dfs(root);
    // obj.sort((a,b) => a[1] - b[1]);
    if (obj.length === 1 || target < obj[0][0]) return obj[0][0];
    for (let i = 1; i < obj.length; i++) {
        if (target >= obj[i - 1][0] && target <= obj[i][0]) {
            if (obj[i - 1][1] > obj[i][1]) {
                return obj[i][0]
            } else {
                return obj[i-1][0];
            }
        }
    }
    return obj[obj.length - 1][0];
};
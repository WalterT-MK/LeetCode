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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let res = [];
    if (!root) return res;
    const dfs = (node, sum, arry) => {
        sum += node.val;
        let newArry = JSON.parse(JSON.stringify(arry));
        newArry.push(node.val);
        if (!node.left && !node.right) {
            if (sum === targetSum) res.push(newArry);
            else ;
        }
        if (node.left) dfs(node.left, sum, newArry);
        if (node.right) dfs(node.right, sum, newArry);
    }
    dfs(root, 0, []);
    return res;
};
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
    /*let obj = [];
    const dfs = (node) => {
        if (node.left) dfs(node.left);
        obj.push([node.val, Math.abs(node.val - target)]);
        if (node.right) dfs(node.right);
    }
    dfs(root);
    obj.sort((a,b) => a[1] - b[1]);
    return obj[0][0]*/
    
    
    let obj = [];
    const dfs = (node) => {
        if (node.left) dfs(node.left);
        obj.push(node.val);
        if (node.right) dfs(node.right);
    }
    dfs(root);
    if (obj.length === 1 || target < obj[0]) return obj[0];
    for (let i = 1; i < obj.length; i++) {
        if (target >= obj[i - 1] && target <= obj[i]) {
            if (Math.abs(target - obj[i - 1]) > Math.abs(target - obj[i])) {
                return obj[i]
            } else {
                return obj[i-1];
            }
        }
    }
    return obj[obj.length - 1];
};
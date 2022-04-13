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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    var isEqual = (p,q) => {
        if (!p && !q) return true;
        if (!p || !q || p.val !== q.val) return false;
        return isEqual(p.left, q.left) && isEqual(p.right, q.right); 
    }
    if (!root) return !subRoot;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot) || isEqual(root, subRoot);
};
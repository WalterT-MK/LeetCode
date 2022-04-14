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
    let isSame = (p, q) => {
        if (!p && !q) return true;
        if (!p || ! q || p.val !== q.val) return false;
        return isSame(p.left, q.left) && isSame(p.right, q.right);
    }
    if (!root) return !subRoot;
    return isSame(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
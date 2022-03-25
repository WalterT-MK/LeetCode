/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return null;
    var root = new TreeNode(preorder[0]);
    var index = inorder.indexOf(preorder[0]);//3
    var leftPre = preorder.slice(1, index+1);
    var leftIn = inorder.slice(0,index);
    
    var rightPre = preorder.slice(index + 1);
    var rightIn = inorder.slice(index+1);
    root.left = buildTree(leftPre, leftIn);
    root.right = buildTree(rightPre, rightIn);
    return root;
};
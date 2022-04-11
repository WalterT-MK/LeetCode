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
    let rootVal = preorder[0];
    let root = new TreeNode(rootVal);
    let index = inorder.indexOf(rootVal);
    
    let leftPre = preorder.slice(1,index + 1);
    let leftIn = inorder.slice(0, index);
    
    let rightPre = preorder.slice(index + 1);
    let rightIn = inorder.slice(index + 1);
    root.left = buildTree(leftPre, leftIn);
    root.right = buildTree(rightPre, rightIn);
    return root;
    
};
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    // let res = [];
    // const traver = (root) => {
    //     if(!root) return;
    //     res.push(root.val);
    //     if (root.left) traver(root.left);
    //     if (root.right) traver(root.right);
    // }
    // traver(root);
    // return res;
    
    if (!root) return [];
    let q = [root];
    let res = [];
    
    while (q.length) {
        let curr = q.pop();
        res.push(curr.val);
        if (curr.right) q.push(curr.right);
        if (curr.left) q.push(curr.left);
    }
    return res;
    

};
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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    const getPath = (node, val, path = '') => {
        if (!node) return '';
        else if (node.val === val) return path;
        else return getPath(node.left, val, path + 'L') + getPath(node.right, val, path + 'R');
    }
    let startPath = getPath(root, startValue);
    let destPath = getPath(root, destValue);
    let i = 0; 
    for (; i < startPath.length && i < destPath.length && startPath[i] === destPath[i]; i++);
    let res = '';
    for (let j = i; j < startPath.length; j++) {
        res += 'U';
    }
    return res + destPath.substring(i);
};
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    let max = 0;
    const dfs = (node, level) => {
        if (level > max) max = level;
        for (let i of node.children) {
            dfs(i, level + 1);
        }
    }
    dfs(root, 1);
    return max;
};
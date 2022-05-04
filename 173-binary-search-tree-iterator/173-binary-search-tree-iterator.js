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
 */
var BSTIterator = function(root) {
    this.count = -1;
    this.q = [];
    const dfs = (root) => {
        if (root.left) dfs(root.left);
        this.q.push(root);
        if (root.right) dfs(root.right);
    }
    dfs(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.count += 1;
    let temp = this.q[this.count];
    // console.log()
    return temp.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.count !== this.q.length - 1;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
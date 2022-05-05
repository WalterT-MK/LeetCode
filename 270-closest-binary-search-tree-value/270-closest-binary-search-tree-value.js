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
var closestValue = function(root, target,min = null) {
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
    
    //brute force, store all node.val into array, look for two number, without sorting.
    /*let obj = [];
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
    return obj[obj.length - 1];*/
    
    // failed soluction
    /*const dfs = (node, prev) => {
        if ((node.val <= target && prev >= target) || (node.val >= target && prev <= target)) {
            if (Math.abs(target - node.val) > Math.abs(target - prev)) {
                return prev;
            } else {
                return node.val;
            }
        }
        if (node.val > target) {
            if (node.left) return dfs(node.left, node.val);
            else return node.val;
        }
        if (node.val < target) {
            if (node.right) return dfs(node.right, node.val);
            else return node.val;
        }
    }
    let temp = dfs(root, root.val);
    return temp;*/
    
    
    // let val, closest = root.val;
    // while (root) {
    //     val = root.val;
    //     closest = Math.abs(val - target) < Math.abs(closest - target) ? val : closest;
    //     root =  target < root.val ? root.left : root.right;
    // }
    // return closest;
        if (root===null){
        return min;
    }

    if (min === null || Math.abs(target - root.val) < Math.abs(target - min)) {
        min = root.val;
    }

    if (target < root.val){
        return closestValue(root.left, target, min);
    }
    else{
        return closestValue(root.right, target, min);
    }
};
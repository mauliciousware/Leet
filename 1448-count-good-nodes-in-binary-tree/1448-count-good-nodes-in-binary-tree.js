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
 * @return {number}
 */
var goodNodes = function(root) {
    let count = 0
    let maxSoFar = -Infinity
    function dfs(root,maxSoFar){
        if(!root) return 0
        if(root.val >= maxSoFar) count+=1
        maxSoFar = Math.max(maxSoFar, root.val)
        dfs(root.left,maxSoFar)
        dfs(root.right,maxSoFar)
    }
    dfs(root,maxSoFar)
    return count
};
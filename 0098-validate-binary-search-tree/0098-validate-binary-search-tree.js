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
 * @return {boolean}
 */
var isValidBST = function(root) {
    function dfs(root,min,max)
    {
        if(!root) return true
        if(root.val >=max || root.val<=min) return false

        let left = dfs(root.left,min,root.val)
        let right = dfs(root.right,root.val,max)

        return left && right 
    }  
    return dfs(root,-Infinity,+Infinity)
};
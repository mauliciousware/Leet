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
var rightSideView = function(root) {
    if(!root) return []
    let stack = []

    function dfs(node,level){

        if(!node) return

        if(level == stack.length) stack.push(node.val)

        dfs(node.right,level+1)
        dfs(node.left,level+1) 

    }
    dfs(root,0)
    return stack
};
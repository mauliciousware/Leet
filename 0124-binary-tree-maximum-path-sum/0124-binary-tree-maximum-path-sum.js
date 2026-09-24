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
var maxPathSum = function(root) {
    let maxi = -Infinity

    function dfs(node){
        if(!node) return 0

        let leftMax = dfs(node.left)
        let rightMax = dfs(node.right)

        if(leftMax < 0) leftMax = 0
        if(rightMax < 0) rightMax = 0

        //with split
        maxi = Math.max(maxi,leftMax+node.val+rightMax)

        //without split
        return node.val + Math.max(leftMax,rightMax)

    }
    dfs(root)
    return maxi
};
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = []
    function helper(root,level){
        if(!root)return 
        if(res.length == level){
            res.push([root.val])
        }
        else{
            res[level].push(root.val)
        }
        helper(root.left,level+1)
        helper(root.right,level+1)
    }
    helper(root,0)
    return res
};
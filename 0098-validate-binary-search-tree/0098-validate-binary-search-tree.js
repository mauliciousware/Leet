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
    let prev = null
    let flag = true
    function inOrderHelper(root){

        //baseCase
        if(!root) return
        //logic
        inOrderHelper(root.left)
        //prcess
        if(prev!= null && prev.val >= root.val){
            flag = false
        }
        prev = root
        inOrderHelper(root.right)
    }
    inOrderHelper(root)
    return flag
};
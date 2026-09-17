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
    if(!root) return []
    let queue = [root]
    let res = []
    while(queue.length){
        let size = queue.length
        let tempres = []
        for(let i=0;i<size;i++){
            let current = queue.shift()
            tempres.push(current.val)
            if(current.left) queue.push(current.left)
            if(current.right) queue.push(current.right)
        }
        res.push(tempres)
    }
    return res
};
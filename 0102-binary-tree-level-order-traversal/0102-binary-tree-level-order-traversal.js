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
     if (!root) return [];
    let res = []
    let queue=[root]
    while(queue.length){
            let level = queue.length
            let temp = []
        for(let i = 0;i<level;i++){
            let current = queue.shift()
            temp.push(current.val)
            if(current.left) queue.push(current.left)
            if(current.right) queue.push(current.right)
        }
        res.push(temp)
    }
    return res
};
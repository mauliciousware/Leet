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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    if(!root) return false

    if(root.left && root.right) {
        if((root.left.val === x && root.right.val === y) || 
           (root.left.val === y && root.right.val === x)) {
            return false;
        }
    }

    let q = [root]
    let parentQ = [null]

    while(q.length){
        let size = q.length
            let foundX = false
            let foundY = false
            let parentX = null
            let parentY = null
        for(let i=0;i<size;i++){
            let current = q.shift()
            let currentParent = parentQ.shift()

            if(current.val ==x){
                foundX = true
                parentX = currentParent
            }
            if(current.val ==y){
                foundY = true
                parentY = currentParent
            }

            if (current.left) {
                q.push(current.left);
                parentQ.push(current);
            }
            if (current.right) {
                q.push(current.right);
                parentQ.push(current);
        }
    }
            if(foundX && foundY){
            if(parentY != parentX) return true
        }

    
    }
    return false
};
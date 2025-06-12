/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let hashMap = new Map()
    for(let i=0;i<inorder.length;i++){
        hashMap.set(inorder[i],i)
    }
    // console.log(hashMap)
    // preOrder is just for root only
    let rootIndex = 0
    function build(start,end){
        if(start>end) return null
        let rootVal = preorder[rootIndex]
        rootIndex+=1
        let root = new TreeNode(rootVal)
        let inOrderIndex = hashMap.get(rootVal)
        root.left = build(start,inOrderIndex-1)
        root.right = build(inOrderIndex+1,end)
        return root
    }
    
    return build(0,inorder.length-1)
};
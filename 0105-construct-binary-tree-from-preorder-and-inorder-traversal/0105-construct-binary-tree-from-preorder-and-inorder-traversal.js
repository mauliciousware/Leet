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
        //Build a map so we can get the index in constant time
        hashMap.set(inorder[i],i)
    }
    // console.log(hashMap)
    // preOrder is just for root only
    let rootIndex = 0
    function build(start,end){
        if(start>end) return null
        //PreOrder first index is always root 
        let rootVal = preorder[rootIndex]
        //Once we have the value increment becasue next call will be root
        rootIndex+=1
        //Create a TreeNode ele with root.val in it
        let root = new TreeNode(rootVal)
        //Get the root in the inOrder so we can split it in 2 section
        let inOrderIndex = hashMap.get(rootVal)
        //left section
        root.left = build(start,inOrderIndex-1)
        //right section
        root.right = build(inOrderIndex+1,end)
        //return root
        return root
    }
    return build(0,inorder.length-1)
};
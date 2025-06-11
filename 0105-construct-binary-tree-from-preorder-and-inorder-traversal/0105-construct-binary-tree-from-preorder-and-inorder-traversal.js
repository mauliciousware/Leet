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
    //Time Complexity : O(n^2)
    //Space Complexity : O(n) // create a subArray half(ing) it but still its O(n)
    if(preorder.length==0 || inorder.length==0) return null
    let rootVal = preorder[0]
    let root = new TreeNode(rootVal);
    let rootIndex = inorder.indexOf(rootVal)

    let leftInOrder = inorder.slice(0,rootIndex)//exclusive    
    let rightInOrder = inorder.slice(rootIndex+1)
    
    // let leftPre = preorder.slice(rootIndex+1,leftInOrder.length) 
    let leftPre = preorder.slice(1, 1 + leftInOrder.length);
    let rightPre = preorder.slice(1 + leftInOrder.length);
    // let rightPre = preorder.slice(1 + leftInOrder.length)

    root.left = buildTree(leftPre,leftInOrder)
    root.right = buildTree(rightPre,rightInOrder)

    return root

};
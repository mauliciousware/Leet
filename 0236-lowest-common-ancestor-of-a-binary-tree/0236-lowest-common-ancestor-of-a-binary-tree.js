/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // base case
    if (root === null || root === p || root === q) {
        return root;
    }
    
    // Traverse left and right subtrees
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    
    // result logic
    if (left === null) {
        return right;
    } else if (right === null) {
        return left;
    } else {
        // both left and right are not null, we found our result
        return root;
    }
};
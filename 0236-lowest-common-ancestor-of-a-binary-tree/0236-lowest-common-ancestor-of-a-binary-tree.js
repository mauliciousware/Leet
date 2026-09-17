var lowestCommonAncestor = function(root, p, q) {
    // Base case: if root is null, or we found p or q, return root
    if (root === null || root === p || root === q) {
        return root;
    }
    
    // Search left and right subtrees
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    // If both left and right return non-null, we found the split point
    if (left !== null && right !== null) {
        return root;
    }
    
    // Otherwise, return whichever side is not null
    // (If both are null, this returns null, which is correct)
    return left !== null ? left : right;
};
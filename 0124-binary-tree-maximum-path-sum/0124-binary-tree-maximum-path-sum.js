var maxPathSum = function(root) {
    // Initialize result with root's value (handles negative root values)
    let maxSum = -Infinity

    // Helper function for DFS
    const dfs = (node) => {
        if (!node) {
            return 0;
        }

        // Recursively get max sum from left and right subtrees
        let leftMax = dfs(node.left);
        let rightMax = dfs(node.right);

        // If any path sum is negative, it's better to not include it (treat as 0)
        leftMax = Math.max(leftMax, 0);
        rightMax = Math.max(rightMax, 0);

        // Compute max path sum WITH split (node as the highest point)
        // Update the global maxSum
        maxSum = Math.max(maxSum, node.val + leftMax + rightMax);

        // Return max path sum WITHOUT split (only one side can be chosen for the parent)
        return node.val + Math.max(leftMax, rightMax);
    };

    dfs(root);

    return maxSum;
};
var pathSum = function(root, targetSum) {
    let res = [];
    function dfs(root, currentSum, path) {
        if (!root) return;
        let newPath = [...path, root.val];
        if (!root.left && !root.right && currentSum + root.val === targetSum) {
            res.push(newPath);
            return;
        }
        dfs(root.left, currentSum + root.val, newPath);
        dfs(root.right, currentSum + root.val, newPath);
    }
    dfs(root, 0, []);
    return res;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = val === undefined ? 0 : val
 *     this.left = left === undefined ? null : left
 *     this.right = right === undefined ? null : right
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var findLeaves = function(root) {

    const result = [];

    function dfs(node) {
        if (!node) return -1;

        const leftHeight = dfs(node.left);
        const rightHeight = dfs(node.right);

        const height = 1 + Math.max(leftHeight, rightHeight);

        if (!result[height]) {
            result[height] = [];
        }

        result[height].push(node.val);

        return height;
    }

    dfs(root);
    return result;
};

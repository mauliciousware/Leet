
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let memoiz = new Map();

    function dfs(idx) {

        // Reached the top
        if (idx >= cost.length) return 0;

        // Already calculated
        if (memoiz.has(idx)) return memoiz.get(idx);


        let left = dfs(idx + 1);
        let right = dfs(idx + 2);

        // Pay current stair + minimum future cost
        let minCost = cost[idx] + Math.min(left, right);
        // Store the actual answer
        memoiz.set(idx, minCost);

        return minCost;
    }

    return Math.min(dfs(0), dfs(1));
};

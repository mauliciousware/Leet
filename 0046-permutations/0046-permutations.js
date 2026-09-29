function permute(nums) {
    let finalRes = [];
    let used = new Map();

    function dfs(idx, res) {
        // Found one complete permutation
        if (res.length === nums.length) {
            finalRes.push([...res]);
            return;
        }

        // Reached end of candidates
        if (idx >= nums.length) return;

        // CHOOSE nums[idx]
        if (!used.has(idx)) {
            used.set(idx, true);
            res.push(nums[idx]);

            // For the next position, start checking again from index 0
            dfs(0, res);

            // Backtrack
            res.pop();
            used.delete(idx);
        }

        // NOT CHOOSE nums[idx]
        dfs(idx + 1, res);
    }

    dfs(0, []);
    return finalRes;
}

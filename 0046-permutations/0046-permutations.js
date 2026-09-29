function permute(nums) {
    let finalRes = [];

    function dfs(idx) {
        // Base case
        if (idx === nums.length) {
            finalRes.push([...nums]);
            return;
        }

        for (let i = idx; i < nums.length; i++) {
            // Choose
            [nums[idx], nums[i]] = [nums[i], nums[idx]];

            dfs(idx + 1);

            // Backtrack
            [nums[idx], nums[i]] = [nums[i], nums[idx]];
        }
    }

    dfs(0);
    return finalRes;
}



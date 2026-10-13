/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length

    // Extra two positions for base cases
    let dp = new Array(n + 2).fill(0)

    // Start from behind because we need i+1 and i+2
    for (let i = n - 1; i >= 0; i--) {

        // Take current house, skip adjacent house
        let take = nums[i] + dp[i + 2]

        // Skip current house
        let skip = dp[i + 1]

        // Maximum profit starting at index i
        dp[i] = Math.max(take, skip)
    }

    return dp[0]
};
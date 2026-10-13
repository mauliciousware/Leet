/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length == 1) return nums[0]

    let n = nums.length
    let dp = new Array(n+2).fill(0)

    // Case 1: Exclude the last house
    for(let i=n-2;i>=0;i--){
        let take = nums[i] + dp[i+2]
        let skip = dp[i+1]

        dp[i] = Math.max(take,skip)
    }

    let case1 = dp[0]

    // Reset DP array
    dp = new Array(n+2).fill(0)

    // Case 2: Exclude the first house
    for(let i=n-1;i>=1;i--){
        let take = nums[i] + dp[i+2]
        let skip = dp[i+1]

        dp[i] = Math.max(take,skip)
    }

    let case2 = dp[1]

    return Math.max(case1,case2)
};
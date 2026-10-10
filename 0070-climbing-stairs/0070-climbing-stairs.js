/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    n = n+1
    let dp = new Array(n).fill(0)
    dp[n-1] = 1
    dp[n-2] = 1
    for(let i=n-3;i>=0;i--){
        dp[i] = dp[i+1]+dp[i+2]
    }
    return dp[0]
};
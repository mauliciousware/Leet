/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let dp = Array.from({ length: coins.length + 1 }, () => Array(amount + 1).fill(0));

    for (let i = 0; i <= coins.length; i++) {
        dp[i][0] = 1;
    }

    for (let i = 1; i <= coins.length; i++) {
        for (let j = 1; j <= amount; j++) {
            if (j >= coins[i - 1]) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[coins.length][amount];
};
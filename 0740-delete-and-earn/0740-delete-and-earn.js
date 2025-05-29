/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    let map = new Array(Math.max(...nums)+1).fill(0)
    for(let i = 0; i<nums.length;i++){
        map[nums[i]] += nums[i]
    }
    let dp = []
    dp[0] = map[0]
    dp[1] = Math.max(map[0],map[1]+0)
    for(let i =2;i<=map.length-1;i++){
        dp[i] = Math.max(dp[i-1],map[i]+dp[i-2])
    }
    return dp[map.length-1]
    
};
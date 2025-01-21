/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxP = 0
    let left = 0
    let right = left+1
    while(right<prices.length){
        maxP = Math.max(maxP,prices[right]-prices[left])
        if(prices[right]<=prices[left]){
            left = right
        }
        right++
    }
    return maxP
};
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0
    let left = 1
    let right = 0

    while(left < prices.length){
        maxProfit = Math.max(maxProfit,prices[left]-prices[right])
        if(prices[left] <= prices[right]){
            right = left
        }
        left++
    }
    return maxProfit
};
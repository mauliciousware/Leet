/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let re = helper(0,amount)
    return re
    function helper(idx,amount){
        //baseCase
        if(amount ==0) return 1
        if(amount<0 || idx > coins.length-1) return 0
        //Logic
        //Choose
        let pick = helper(idx,amount-coins[idx])
        //NotChoose
        let notPick = helper(idx+1,amount)

        //return
        return pick+notPick

    }
};
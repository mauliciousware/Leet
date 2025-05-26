/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let amount = 0
    let memo = {}
    function helper(nums,idx){
        //BaseCase
        if(idx > nums.length-1) return 0
        if(memo[idx]!=undefined) return memo[idx]
        //Logic
        //Choose
        let letsRob = nums[idx]+helper(nums,idx+2)
        //NotChoose
        let notRob = helper(nums,idx+1)
        memo[idx] = Math.max(letsRob,notRob)
        return memo[idx]
    }   
    let result = helper(nums,0)
    return result
};
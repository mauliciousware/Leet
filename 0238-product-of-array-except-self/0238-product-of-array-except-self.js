/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let preFix = new Array(nums.length).fill(1)
    for(let i=1;i<nums.length;i++){
        preFix[i] = preFix[i-1]*nums[i-1]
    }
    // console.log(preFix)
    let postFix = 1
    for(let i=nums.length-1;i>=0;i--){
        preFix[i] *= postFix
        postFix *= nums[i]
    }
    return preFix
};
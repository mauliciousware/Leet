/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let maxLength = 0
    let runningSum = 0
    let hashMap = new Map()
    hashMap.set(0,-1)
    for(let i =0;i<nums.length;i++){
        runningSum += nums[i]==0?-1:1
        if(hashMap.has(runningSum)){
            maxLength = Math.max(maxLength,i-hashMap.get(runningSum))
        }
        else{
            hashMap.set(runningSum,i)
        }
        
    }
    return maxLength
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0
    let runningSum = 0
    let hashMap = new Map()
    hashMap.set(0,1) //TO handle the base case
    for(let i =0;i<=nums.length-1;i++){
        runningSum += nums[i]
        if(hashMap.has(runningSum-k)){
            count+= hashMap.get(runningSum - k)
        }
        hashMap.set(runningSum,(hashMap.get(runningSum) || 0)+1)

    }
    return count
};
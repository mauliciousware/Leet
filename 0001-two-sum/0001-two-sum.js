/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res = []

    for(let i=0;i<nums.length;i++){
        nums[i] = [nums[i],i]
    }
    nums = nums.sort((a,b)=>a[0]-b[0])

    let low = 0
    let high = nums.length-1
    while(low < high){
        if(nums[low][0]+nums[high][0] == target) res = [nums[low][1],nums[high][1]]
          
        if(nums[low][0]+nums[high][0] < target) low++
        else high--
    }
    return res
}; 
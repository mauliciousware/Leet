/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res = []
    let hashMap = new Map()

    for(let i=0;i<nums.length;i++){
        let difference = target - nums[i]
        if(hashMap.has(difference)) res = [i,hashMap.get(difference)]
        else{
            hashMap.set(nums[i],i)
        }
    }
    return res

};
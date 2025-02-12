/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashmap = new Map()
    for(let i =0;i<nums.length;i++){
        let complement = target-nums[i]
        if(hashmap.has(nums[i])){
            return [hashmap.get(nums[i])+1,i+1]
        }
        else{
            hashmap.set(complement,i)
        }
    }
};
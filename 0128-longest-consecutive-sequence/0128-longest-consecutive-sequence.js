/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    nums = new Set(nums) // these are a set now , constant look up and no       duplicate
    let longestSequence = 0
    for(num of nums){
        let currentLength = 1
        if(nums.has(num-1)){
            continue // not out starting point
        }
        else{
            while(nums.has(num+currentLength)){
                currentLength+=1
            }
            longestSequence = Math.max(longestSequence,currentLength)
        }
    }
    return longestSequence
};
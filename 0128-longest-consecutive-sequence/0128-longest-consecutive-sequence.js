/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numsSet = new Set(nums)
    let res = 0
    for(let num of numsSet){
        if(numsSet.has(num-1)) continue
        else{
            let length = 1
            while(numsSet.has(num+length)){
                length++
                
            }
            res = Math.max(res,length)
        }
    }
    return res
    
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let low = 0
    let high = nums.length-1
    let result = +Infinity
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        if(nums[low]<= nums[mid]){
            result = Math.min(result,nums[low])
            low = mid+1
        }
        else{
            result = Math.min(result,nums[mid])
            high = mid-1
        }
        
    }
    return result
};
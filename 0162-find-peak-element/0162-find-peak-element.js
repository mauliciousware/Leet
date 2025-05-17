/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let low = 0
    let high = nums.length -1
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        let leftNeighbor = mid == 0?-Infinity:nums[mid-1]
        let rightNeighbor = mid == nums.length-1?-Infinity:nums[mid+1]
        if(leftNeighbor < nums[mid] && nums[mid] > rightNeighbor){
            return mid // found peak
        }
        else if(leftNeighbor >= nums[mid]){
            high = mid-1
        }
        else{
            low = mid+1
        }
    }
    return -1
};
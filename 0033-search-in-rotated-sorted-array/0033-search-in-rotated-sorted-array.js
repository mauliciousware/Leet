/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var search = function(nums, k) {
    let l = 0
    let r = nums.length-1
    while(l<=r){
        let mid = Math.floor((l+r)/2)
        if(nums[mid]===k) return mid

        if(nums[l]<=nums[mid]){
        //left half is sorted
         if(nums[l]<=k && k<nums[mid]){
        //element exist in the left half
        r = mid-1
        }
        else{
            l = mid+1
        }
        }
        else{
            //right half is sorted
            if(nums[mid]<k && k<=nums[r]){
                l = mid+1
            }
            else{
                r = mid-1
            }
        }
        
        }
        return -1
}

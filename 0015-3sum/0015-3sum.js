/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let ans =[]
    for(let i =0;i<nums.length-1;i++){
        let left = i+1
        let right = nums.length-1
        if(nums[i]>0) break
        if(i>0 && nums[i]==nums[i-1]) continue
        //becasue we are checking i-1 which does not exist
        while(left<right){
            if(nums[i]+nums[left]+nums[right]===0){
                ans.push([nums[i],nums[left],nums[right]])
                left++
                right--
                while(left<right && nums[left]==nums[left-1])
                {
                    left++
                }
                while(left<right && nums[right]==nums[right+1]){
                    right--
                }
            }
            else if(nums[i]+nums[left]+nums[right]<0){
                left++
            }
            else{
                right--
            }
        }
    }
    return ans
};
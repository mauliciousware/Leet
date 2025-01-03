/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    // let hashMap = new Map()
    // for(let i=0;i<nums.length;i++){
    //     let complement = target-nums[i]
    //     if(hashMap.has(complement)){
    //         return[hashMap.get(complement),i]
    //     }
    //     else{
    //         hashMap.set(nums[i],i)
    //     }
    // }

    for(let i=0;i<nums.length;i++){
        nums[i]=[nums[i],i]
    }
    nums.sort((a,b)=>a[0]-b[0])
    let left = 0
    let right = nums.length-1
    while(left<=right){
        if(nums[left][0]+nums[right][0]==target){
            return [nums[left][1],nums[right][1]]
        }
        else if(nums[left][0]+nums[right][0]<target){
            left++
        }
        else if(nums[left][0]+nums[right][0]>target){
            right--
        }
    }
    return []
    // for(let i = 0;i<nums.length;i++){
    //     for(let j = i+1;i<nums.length;j++)
    //         if(nums[i]+nums[j]==target){
    //             return [i,j]
    //         }
    // }
    // return -1
};
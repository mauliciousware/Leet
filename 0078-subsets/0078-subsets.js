/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = []
    function helper(nums,idx,subSet){
        //Base 
        if(idx >= nums.length)
        {
            res.push([...subSet])
            return 
        }

        subSet.push(nums[idx])
        helper(nums,idx+1,subSet)
        subSet.pop()
        helper(nums,idx+1,subSet)
    }  
    helper(nums,0,[])
    return res
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b); //sort first
    let finalRes = []

    function dfs(nums,idx,res){
        if(idx >=nums.length){
            finalRes.push([...res])
            return
        }

        res.push(nums[idx])    
        dfs(nums,idx+1,res)
        res.pop()

        while(idx+1 < nums.length && nums[idx]===nums[idx+1]){
            idx++
        }

        dfs(nums,idx+1,res)



    }
    dfs(nums,0,[])
    return finalRes
};
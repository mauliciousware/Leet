/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = []
    function helper(candidates,target,amount,path,idx){
        if(amount == target){
            res.push(path)
            return 
        }
        if(idx >= candidates.length || amount>target){
            return 
        }
        let newArray = [...path,candidates[idx]] // Create a DEEP COPY
        helper(candidates,target,amount+candidates[idx],newArray,idx)
        helper(candidates,target,amount,path,idx+1)
        return res
    }
    helper(candidates,target,0,[],0)
    return res
};
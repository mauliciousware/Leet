/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let finalRes = []
    function dfs(candidates,idx,target,res){
        if (target < 0 || idx >= candidates.length) {
            return
        }
        if(target ==0 ){
            finalRes.push([...res])
            return
        }


        dfs(candidates,idx+1,target,[...res]) // skip
        dfs(candidates,idx,target-candidates[idx],[...res,candidates[idx]]) // choose
    }
    dfs(candidates,0,target,[])
    return finalRes
};
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let finalRes = []
    candidates = candidates.sort((a,b)=>a-b)
    function dfs(candidates,idx,target,res){
        //base case
        //1.
        if(target == 0){
          finalRes.push([...res])
          return
        } 
        if(target < 0) return
        if (idx >= candidates.length) return
        if(candidates[idx] > target) return 


        //Action
        res.push(candidates[idx])
        dfs(candidates,idx+1,target-candidates[idx],res)
        res.pop()

        let nextIdx = idx+1 
        while(nextIdx < candidates.length && candidates[idx]==candidates[nextIdx]){
            nextIdx++
        }
        dfs(candidates,nextIdx,target,res)

    } 
    dfs(candidates,0,target,[])
    return finalRes 
};
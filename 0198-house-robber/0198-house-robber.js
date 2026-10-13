/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let memoize = new Map()
    function dfs(idx){
        if(memoize.has(idx)) return memoize.get(idx)
        if(idx>=nums.length) return 0

        let take = nums[idx]+dfs(idx+2)
        let skip = dfs(idx+1)
        
        memoize.set(idx,Math.max(take,skip))
        return Math.max(take,skip)
    }
    return dfs(0)
};
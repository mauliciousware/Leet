/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length==1) return nums[0]
    let memoize = new Map()

    function dfs(idx,end){
        if(memoize.has(`${idx},${end}`)) return memoize.get(`${idx},${end}`)
        if(idx >= end){
            return 0
        }

        let take = nums[idx] + dfs(idx+2,end)
        let skip = dfs(idx+1,end)

        memoize.set(`${idx},${end}`,Math.max(take,skip))
        return Math.max(take,skip)
    }

    let case1 = dfs(0, nums.length-1)
    let case2 = dfs(1,nums.length)

    return Math.max(case1,case2)
};
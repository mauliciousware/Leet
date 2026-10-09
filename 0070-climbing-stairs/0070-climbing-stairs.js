/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let memoiz = new Map()

    function dfs(n){

        if(memoiz.has(n)) return memoiz.get(n)

        if(n==0){
            return 1
        } 
        if(n < 0) return 0

        let left = dfs(n-1)
        let right = dfs(n-2)

        memoiz.set(n,left+right)
        return left + right

    }

    return dfs(n)
};
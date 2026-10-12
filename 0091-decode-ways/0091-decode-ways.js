/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {

    let memoize = new Map()

    function dfs(idx){
        if(memoize.has(idx)) return memoize.get(idx)
        if(idx >= s.length) return 1
        if(s[idx]==="0") return 0

        let takeOne = dfs(idx+1)

        let takeTwo = 0

        if(idx+1 < s.length){
            let num = Number(s.slice(idx,idx+2))
            if(num>=10 && num<=26){
                takeTwo = dfs(idx+2)
            }
        }

        memoize.set(idx,takeOne+takeTwo)
        return takeOne + takeTwo


    }  
    return dfs(0)
};
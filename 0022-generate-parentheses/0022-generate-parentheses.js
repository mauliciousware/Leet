/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let finalRes = []

    function dfs(open,close,res){
        if(open == 0 && close == 0){
            finalRes.push(res.join(''))
            return
        }
        if(open >0){
            res.push("(")
            dfs(open-1,close,res)
            res.pop()
        }
        if(close >open){
            res.push(")")
            dfs(open,close-1,res)
            res.pop()
        }

    }  
    dfs(n,n,[])
    return finalRes
};
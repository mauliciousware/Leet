/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let finalRes = []

    function dfs(open,close,res){
        if(open == 0 && close == 0){
            finalRes.push(res)
            return
        }
        if(open >0){
            dfs(open-1,close,res + "(")
        }
        if(close >open){
            dfs(open,close-1,res + ")")
        }

    }  
    dfs(n,n,[])
    return finalRes
};
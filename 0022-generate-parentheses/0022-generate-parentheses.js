/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = []
    function backTracking(open,close,n,stack){
        if(open === close && open == n){
            res.push(stack)
            return
        }
        if(open<n){
            backTracking(open+1,close,n,stack+"(")
        }
        if(close<open){
            backTracking(open,close+1,n,stack+")")

        }
    }
    backTracking(0,0,n,"")
    return res    
};
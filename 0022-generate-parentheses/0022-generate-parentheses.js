/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let finalRes = []

    function dfs(open, close, res) {
        // base case
        if (open === 0 && close === 0) {
            finalRes.push(res.join(""))
            return
        }

        // add "(" if we still have one
        if (open > 0) {
            res.push("(")
            dfs(open - 1, close, res)
            res.pop()
        }

        // add ")" only if there are more closing brackets left
        // than opening brackets
        if (close > open) {
            res.push(")")
            dfs(open, close - 1, res)
            res.pop()
        }
    }

    dfs(n, n, [])
    return finalRes
};
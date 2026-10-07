/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) return []

    let map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    let finalRes = []

    function dfs(idx, res){

        // We used all digits
        if(idx === digits.length){
            finalRes.push(res)
            return
        }

        // Get letters for current digit
        let letters = map[digits[idx]]

        // Try every possible letter
        for(let letter of letters){
            dfs(idx + 1, res + letter)
        }
    }

    dfs(0, "")

    return finalRes
}
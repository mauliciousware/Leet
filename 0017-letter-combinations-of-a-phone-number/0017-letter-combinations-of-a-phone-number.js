/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let finalRes = []
    let keyPad = new Map()
    keyPad.set("2","abc")
    keyPad.set("3","def")
    keyPad.set("4","ghi")
    keyPad.set("5","jkl")
    keyPad.set("6","mno")
    keyPad.set("7","pqrs")
    keyPad.set("8","tuv")
    keyPad.set("9","wxyz")

    function dfs(idx,temp){
        //Base case
        if(idx == digits.length){
            finalRes.push(temp)
            return
        }

        let letters = keyPad.get(digits[idx])

        for(let letter of letters){
            dfs(idx+1,temp+letter)
        }

    }

    dfs(0,"")
    return finalRes
    
};
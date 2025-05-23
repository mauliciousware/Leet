/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let hashMap = new Map()
    let count = 0
    let hasODD = false

    for(let i =0;i<s.length;i++){
        hashMap.set(s[i],(hashMap.get(s[i])||0)+1)
    }
    for(let [key,value] of hashMap){
        if(value%2==0) count+=value
        else {
            count+=value-1
            hasODD = true
        }
    }
    if(hasODD) count+=1
    return count
};
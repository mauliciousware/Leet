/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let count = 0
    // s = s.split('')
    let hashMap = new Map()
    console.log(s)
    for(char of s){
        hashMap.set(char,(hashMap.get(char)||0)+1)
    }
    let haveOdd = false

   for (let [key, value] of hashMap){
        if(value % 2 == 0){
            count+=value
        }
        else{
            haveOdd = true
            count+=value-1
        }
    }
    if(haveOdd){
        count+=1
    }
    return count
};
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let majority = 0
    let left = 0
    let maxLength = 0
    let charArray = new Array(26).fill(0)
    for(let right=0;right<s.length;right++){
        charArray[s.charCodeAt(right)-"A".charCodeAt(0)]++
        majority = Math.max(majority,charArray[s.charCodeAt(right)-"A".charCodeAt(0)])
        while((right-left+1)-majority>k){
            //invalid
            charArray[s.charCodeAt(left)-"A".charCodeAt(0)]--
            left++
        }
        maxLength = Math.max(maxLength,(right-left)+1)

    }
    return maxLength
};
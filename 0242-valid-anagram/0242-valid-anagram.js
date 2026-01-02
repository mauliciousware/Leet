/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false
    let charArray = new Array(26).fill(0)
    for(let i=0;i<s.length;i++){
        charArray[s.charCodeAt(i)-"a".charCodeAt(0)]++
        charArray[t.charCodeAt(i)-"a".charCodeAt(0)]--
    }

    for(let i=0;i<charArray.length;i++){
        if(charArray[i]!==0) return false
    }

    return true
};
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length){
        return false
    }

     s = s.split('')
     t = t.split('')
    for(let i = 0;i<s.length;i++){
        let found = false
        for(let j=0;j<t.length;j++){
            if(s[i]===t[j]){
                t.splice(j,1)
                found = true
                break
            }
        }
        if (!found) return false
    }
    return t.length ==0
};
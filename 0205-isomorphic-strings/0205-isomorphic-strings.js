/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let hashS = new Map()
    let hashT = new Map()
    s = s.split('')
    t = t.split('')
    if(t.length != s.length) return false
    for(let i = 0;i<=s.length-1;i++){
        if(hashS.has(s[i]) || hashT.has(t[i])){
            if(hashS.get(s[i])!=t[i] || hashT.get(t[i]) != s[i]){
                return false
            }
        }
        else{
            hashS.set(s[i],t[i])
            hashT.set(t[i],s[i])
        }
    }
    return true
};
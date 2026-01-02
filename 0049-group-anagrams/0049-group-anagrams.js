/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hashMap = new Map()
    let res = []
    for(let s of strs){
        if(hashMap.has(s.split('').sort().join(''))) hashMap.get(s.split('').sort().join('')).push(s)
        else hashMap.set(s.split('').sort().join(''),[s])
    }
    //hashmap ready
    for(let [key,value] of hashMap){
        res.push(value)
    }
    return res
};
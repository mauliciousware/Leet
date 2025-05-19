/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let map1 = new Map()
    let map2 = new Map()
    //Split basically converts the string into array where there is seperation
    s = s.split(" ")
    if(s.length != pattern.length) return false //Early Exit
    for(let i=0;i<=pattern.length-1;i++){
        let char = pattern[i]
        let word = s[i]
        if(map1.has(char) || map2.has(word)){
            if(map1.get(char)!== word || map2.get(word)!==char){
                return false
            }
            else{
                continue
            }
        }
        else{
            map1.set(char,word)
            map2.set(word,char)
        }
    }
    return true
};
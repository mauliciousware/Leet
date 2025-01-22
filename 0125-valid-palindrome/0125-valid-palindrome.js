/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s= s.toLowerCase()
    function isAlpha(char){
        return((char>="a"&&char<="z") || (char>="0"&&char<="9"))
    }

    let left = 0
    let right = s.length -1
    while(left<right){
        while(left<right && !isAlpha(s[left])){
            left++
        }
        while(left<right && !isAlpha(s[right]))
        {
            right--
        }
        if(s[left]!=s[right]){
            return false
        }
        left++
        right--
    }
    return true
};
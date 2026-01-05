var isPalindrome = function(s) {
    s = s.toLowerCase()
    function isValidChar(sts){
        return (sts>="0" && sts<="9" || sts>="a" && sts<="z")
    }
    let left = 0
    let right = s.length-1

    while(left < right){
        while( left < right && !isValidChar(s[left])){
            left++
        }
        while(left < right && !isValidChar(s[right])){
            right--
        }        
    
        if(s[left]!==s[right]) return false
        left++
        right--
    }
    return true 
};
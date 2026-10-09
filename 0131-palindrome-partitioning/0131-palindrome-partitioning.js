/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let finalRes = []

    function helper(s,pivot,temp){
        if(pivot == s.length){
         finalRes.push([...temp])
            return
        }
        for(let i = pivot;i<s.length;i++){
            let subString = s.substring(pivot,i+1)
            if(isPalindrome(subString)){
                temp.push(subString)
                helper(s,i+1,temp)
                temp.pop()
            }
        }
    }
    helper(s,0,[])
    return finalRes
};

function isPalindrome(s){
    let left = 0
    let right = s.length-1
    while(left<=right){
        if(s[left]!=s[right]) return false
        left++
        right--
    }
    return true
}
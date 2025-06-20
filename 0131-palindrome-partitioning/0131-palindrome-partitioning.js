/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res = []

    function helper(s,pivot,path){
        if(pivot == s.length){
            res.push([...path])
            return
        }
        for(let i = pivot;i<s.length;i++){
            let subString = s.substring(pivot,i+1)
            if(isPalindrome(subString)){
                path.push(subString)
                helper(s,i+1,path)
                path.pop()
            }
        }
    }
    helper(s,0,[])
    return res
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
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0
    function isValid(str){
        let left = 0
        let right = str.length - 1

        while (left < right) {
            if (str[left] !== str[right]) {
                return false
            }

            left++
            right--
        }

        return true

    }
    for(let i=0;i<s.length;i++){
        for(let j=i;j<s.length;j++){
            let tempStr = s.slice(i,j+1)
            if(isValid(tempStr)){
                count++
            }
        }
    }
    return count
};
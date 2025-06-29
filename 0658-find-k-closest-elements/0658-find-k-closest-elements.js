/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    //TC : O(N)
    //SC : O(1)
    let left = 0
    let right = arr.length-1
    let ans = []
    while(((right-left)+1) > k){
        let leftDiv = Math.abs((arr[left]-x))
        let rightDiv = Math.abs((arr[right]-x))
        if(leftDiv <= rightDiv){
            right--
        }
        else{
            left++
        }
    }
    //got the window 
    // now put the ele in ans
    for(let i = left; i<= right;i++){
        ans.push(arr[i])
    }
    return ans
};
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length-1
    let maxArea1 = -Infinity
    while(left<right){
        maxArea1 = Math.max(maxArea1,Math.min(height[left],height[right])*(right-left))
        if(height[left]<=height[right]){
            left++
        }
        else{
            right--
        }
    }
    return maxArea1

};
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result =0
    let leftWall = 0
    let rightWall = 0
    let left = 0
    let right = height.length-1

    while(left<=right){
        if(height[right]>height[left]){
            //deal with leftFirst
            if(leftWall > height[left]){
                result += 1 * (leftWall - height[left])
            }
            else{
                leftWall = height[left]
            }
            left++
        }
        else{
            //deal with right
            if(rightWall > height[right]){
                result += 1 * (rightWall - height[right])
            }
            else{
                rightWall = height[right]
            }
            right--
        }
    }
    return result
};
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = []
    let low = 0
    let high = height.length-1
    while(low < high){
        let area = Math.min(height[low],height[high]) * (high-low)
        res = Math.max(res,area)
        if(height[low]<height[high]) low++
        else high--
    }
    return res
};
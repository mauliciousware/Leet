/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result =0
    let l = 0
    let r = height.length-1
    let lw = 0
    let rw = 0

    while(l<=r){
        if(height[r] > height[l]){
            if(lw > height[l]){
                result += 1 * (lw-height[l]) 
            }
            else{
                lw = height[l]
            }
            l++
        }
        else{
            if(rw > height[r]){
                result += 1 * (rw-height[r]) 
            }
            else{
                rw = height[r]
        }
        r--

    }
    }
    return result
};
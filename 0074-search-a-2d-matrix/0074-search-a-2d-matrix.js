/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let left = 0
    let right = matrix.length * matrix[0].length - 1
    //falttened the array makes it a 1d array
    // and we know its sorted -> so we can directly go to binary search
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        //convert 5.5 into a position in array 
        let row = Math.floor(mid/matrix[0].length)
        let col = mid%matrix[0].length
        if(matrix[row][col] == target){
            return true
        }
        else if(matrix[row][col] < target){
            left = mid+1
        }
        else{
            right = mid-1
        }
    }
    return false
};
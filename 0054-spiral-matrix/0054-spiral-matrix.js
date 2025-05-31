
// ## Problem 3
// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:

// Input:

// [

// [ 1, 2, 3 ],

// [ 4, 5, 6 ],

// [ 7, 8, 9 ]

// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input:

// [

// [1, 2, 3, 4],

// [5, 6, 7, 8],

// [9,10,11,12]

// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let left = 0
    let top = 0
    let right = matrix[0].length-1
    let bottom = matrix.length-1
    let res = []
    while(left<=right && top<=bottom){
        for(let j=left;j<=right;j++){
            res.push(matrix[top][j])
        }
        top++
        for(let i=top;i<=bottom;i++){
            res.push(matrix[i][right])
        }
        right--
        if(top<=bottom){
                    for(let j=right;j>=left;j--){
            res.push(matrix[bottom][j])
        }
        bottom--

        }

        if(left<=right){
                    for(let i=bottom;i>=top;i--){
            res.push(matrix[i][left])
        }
        }
        left++
    }   
    return res
} 

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))
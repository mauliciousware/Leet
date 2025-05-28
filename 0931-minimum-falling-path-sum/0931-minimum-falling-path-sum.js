/**
 * @param {number[][]} matrix
 * @return {number}
 */
// var minFallingPathSum = function(matrix) {
//     let min = Infinity
//     for(let j=0;j<matrix[0].length;j++){
//         min = Math.min(min,helper(0,j))
//     }
//     return min
//     function helper(i,j){
//         //Base
//         //for j
//         //when J goes out of bounds
//         if(j < 0 || j>=matrix[0].length) return Infinity
//         //Reached at the last row of matrix
//         if(i == matrix.length-1) return matrix[i][j] 
//         //Logic // Choose not choose
//         return matrix[i][j] + Math.min(helper(i+1,j-1),helper(i+1,j),helper(i+1,j+1))
//     }
// };
var minFallingPathSum = function(matrix){
    let n = matrix.length
    let m = matrix[0].length
    let dp= Array.from({length:matrix.length},()=> new Array(matrix[0].length).fill(0))

    for(let j = 0;j<m;j++){
        dp[n-1][j] = matrix[n-1][j]
    }
    for(let i=n-2;i>=0;i--){
        for(let j = 0;j<m;j++){
            let downleft = j-1<0?Infinity:dp[i+1][j-1]
            let down = dp[i+1][j]
            let downRight = j+1>=m?Infinity:dp[i+1][j+1]
             dp[i][j] = matrix[i][j] + Math.min(downleft, down, downRight);

        }
    }
    return Math.min(...dp[0])
}
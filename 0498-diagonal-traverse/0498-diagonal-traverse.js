/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let n = mat.length
    let m = mat[0].length
    let travelUp = true
    let res = []
    let i = 0
    let j = 0
    while(res.length < n*m){
        res.push(mat[i][j])
        if(travelUp){
            if(i==0 && j!=m-1){

            travelUp = false
            j++
        }
        else if(j==m-1){

            travelUp = false
            i++
        }
        else{
            i--
            j++
        }
            // res.push(mat[i][j])

        }
        else {
            if(j==0 && i!=n-1){

                travelUp=true
                i++
            }
            else if(i==n-1){

                travelUp = true
                j++
            }
            else{
                // res.push(mat[i][j])
                i++
                j--
            }
        }
    }
    return res
};
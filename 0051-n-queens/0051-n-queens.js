/**
 * @param {number} n
 * @return {string[][]}
 */


var solveNQueens = function(n) {
    let res = []
    let board = Array.from({ length: n }, () => Array(n).fill('.'));
    function isSafe(row,col){
        let r = row
        let c = col

    while(r >=0 && c >=0){
    //top-left

        if(board[r][c] == "Q") return false
        r--
        c--
    }
        r = row; c = col;


    while(c >=0){
    //left
        if(board[r][c] == "Q") return false
        c--
    }
        r = row; c = col;


    while(r <=n-1 && c >=0){
    //bottom left

        if(board[r][c] == "Q") return false
        r++
        c--
    }
    return true
}
    function solve(col){

                     if(col >= n){
                res.push(board.map((ele)=>ele.join('')))
                return
             }
        for(let row=0;row<n;row++){

             if(isSafe(row,col)){
             board[row][col] = "Q"
             solve(col+1)
             board[row][col] = "."
             }

        }
    }
    solve(0)
    return res
};
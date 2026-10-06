/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let res = []
    let board = Array.from({ length: n }, () => Array(n).fill(false))

    function helper(row){
        //Take Snapshot
        if(row === n){
            let list = []
            for(let i=0;i<n;i++){
                let str = ""
                for(let j=0;j<n;j++){
                    if(board[i][j]== true){
                        str+="Q"
                    }
                    else{
                        str+="."
                    }

                }
                list.push(str)
            }
            res.push(list)
            return
        }

        //BackTrack for loop recurion on col
        for(let j=0;j<n;j++){
            if(isValid(row,j)){
                board[row][j] = true
                helper(row+1)
                board[row][j] = false
            }
        }

        //is Valid Fucntion
        function isValid(row,col){
            let r = row
            let c = col
            //check up
            while(r >=0){
                if(board[r][c]==true) return false
                r--
            }

            //check up-left
            r = row
            c = col
            while(r >=0 && c >=0){
                if(board[r][c]==true) return false
                r--
                c--
            }

            //check up-right
            r = row
            c = col
            while(r >=0 && c < n){
                if(board[r][c]==true) return false
                r--
                c++
            }
        return true
        }
    }
    helper(0)
    return res  
};
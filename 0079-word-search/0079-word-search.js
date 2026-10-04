/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let ROW = board.length
    let COL = board[0].length

    let directions = [[1,0],[0,1],[-1,0],[0,-1]]

    function dfs(i,j,index){
        if(index == word.length) return true
        if(i<0 || j<0 || i>=ROW || j>=COL || board[i][j]=="#" || board[i][j]!=word[index]){
            return false
        }

        let temp = board[i][j]
        board[i][j] = "#" 

        for(let [dr,dc] of directions){
            let nr = dr+i
            let nc = dc+j
            if(dfs(nr,nc,index+1)){
            return true
            }
        }

        board[i][j] = temp
        return false
    }

    for(let r=0;r<ROW;r++){
        for(let c=0;c<COL;c++){
            if(board[r][c]==word[0])//found the starting word
            {
                if(dfs(r,c,0)) return true
            }
        }
    }
    return false

};
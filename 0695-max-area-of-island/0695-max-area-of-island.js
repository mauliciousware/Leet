/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let ROW = grid.length
    let COL = grid[0].length
    let area = 0
    let directions = [[1,0],[0,1],[-1,0],[0,-1]]
    for(let i =0;i<ROW;i++){
        for(let j=0;j<COL;j++){
            if(grid[i][j] == 1){
            area = Math.max(area,explore(i,j))
            }
        }
    }
    function explore(i,j){
        if(i < 0 || j < 0 || i >= ROW || j >= COL || grid[i][j] == 0 ) return 0
        let count = 1 
        grid[i][j] = 0 // mark visited
        for(let [dr,dc] of directions){
            let nr = dr + i
            let nc = dc + j
            count+= explore(nr,nc)
        }
        return count
    }

    return area

};
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let ROW = grid.length
    let COL = grid[0].length
    let direction = [[1,0],[0,1],[-1,0],[0,-1]]
    let maxArea = 0
    for(let i= 0;i<ROW;i++){
        for(let j= 0;j<COL;j++){
            if(grid[i][j] == 1){
                maxArea = Math.max(maxArea,explore(i,j))
            }
        }
    }
    return maxArea

    function explore(i,j){
        if(i < 0 || j< 0 || i >= ROW || j>= COL || grid[i][j] ==0 ) return 0
        let count = 1
        grid[i][j] = 0
        for(let [dr,dc] of direction){
            count+=explore(i+dr,j+dc)
        }
    return count

    }
};
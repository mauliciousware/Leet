var hasPath = function(maze, start, destination) {
    const ROW = maze.length;
    const COL = maze[0].length;
    const directions = [[1,0],[0,1],[-1,0],[0,-1]];

    const queue = [start];
    const visited = new Set();   // store as "r,c"
    visited.add(start[0] + ',' + start[1]);

    while(queue.length){
        const [r, c] = queue.shift();

        if(r === destination[0] && c === destination[1]) return true;

        for(const [dr, dc] of directions){
            let nr = r;
            let nc = c;

            // roll until hitting wall
            while(
                nr + dr >= 0 && nr + dr < ROW &&
                nc + dc >= 0 && nc + dc < COL &&
                maze[nr + dr][nc + dc] === 0
            ){
                nr += dr;
                nc += dc;
            }

            // create a unique key for the stop point
            const key = nr + ',' + nc;

            if(!visited.has(key)){
                visited.add(key);
                queue.push([nr, nc]);
            }
        }
    }

    return false;
};

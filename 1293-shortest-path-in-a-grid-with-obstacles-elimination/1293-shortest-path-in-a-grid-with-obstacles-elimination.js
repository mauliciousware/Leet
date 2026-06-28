var shortestPath = function(grid, k) {
    const rows = grid.length;
    const cols = grid[0].length;

    // shortcut: if k is big enough, just walk straight to the end
    if (k >= rows + cols - 2) {
        return rows + cols - 2;
    }

    // each entry in the queue: [row, col, steps taken, eliminations remaining]
    let queue = [[0, 0, 0, k]];

    // track visited states — same cell with different k counts as different state
    let seen = new Set();
    seen.add(`0,0,${k}`);

    const directions = [[1,0], [-1,0], [0,1], [0,-1]];

    while (queue.length > 0) {

        const [row, col, steps, remainingK] = queue.shift();

        // reached the destination
        if (row === rows - 1 && col === cols - 1) {
            return steps;
        }

        // try all 4 neighbors
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            // skip if out of bounds
            if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
                continue;
            }

            const isWall = grid[newRow][newCol] === 1;
            let newRemainingK = remainingK;

            if (isWall) {
                // no eliminations left, can't go through this wall
                if (remainingK === 0) continue;

                // use one elimination to go through the wall
                newRemainingK = remainingK - 1;
            }

            const state = `${newRow},${newCol},${newRemainingK}`;

            // only visit this state if we haven't been here with this k value before
            if (!seen.has(state)) {
                seen.add(state);
                queue.push([newRow, newCol, steps + 1, newRemainingK]);
            }
        }
    }

    // no path found
    return -1;
};
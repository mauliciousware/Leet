var lastStoneWeight = function(stones) {
    while(stones.length > 1) {
        // Sort in descending order
        stones.sort((a, b) => b - a);
        
        // Get and remove first two stones
        let x = stones.shift();
        let y = stones.shift();
        
        // If different weights, push the difference
        if(x !== y) {
            stones.push(x - y);
        }
    }
    
    return stones.length === 0 ? 0 : stones[0];
};
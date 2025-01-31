var lastStoneWeight = function(stones) {
    while(stones.length > 1) {
        let x = -1; // Index of largest
        let y = -1; // Index of second largest
        
        // Find two heaviest stones
        for(let i = 0; i < stones.length; i++) {
            if(x === -1 || stones[i] > stones[x]) {
                y = x;
                x = i;
            } else if(y === -1 || stones[i] > stones[y]) {
                y = i;
            }
        }
        
        // Calculate new weight
        let newWeight = stones[x] - stones[y];
        
        // Remove the two stones and add new weight if necessary
        if(x > y) {
            stones.splice(x, 1);
            stones.splice(y, 1);
        } else {
            stones.splice(y, 1);
            stones.splice(x, 1);
        }
        
        if(newWeight > 0) {
            stones.push(newWeight);
        }
    }
    
    return stones.length === 0 ? 0 : stones[0];
};
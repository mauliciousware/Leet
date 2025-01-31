var lastStoneWeight = function(stones) {
    while(stones.length>1){
        stones.sort((a,b)=>b-a)
        let largest = stones.shift()
        let next_largest = stones.shift()

        if(largest!=next_largest){
            stones.push(largest-next_largest)
        }
    }
    return stones.length===0?0:stones[0]
};
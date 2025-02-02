/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let minHeap = new MinPriorityQueue()
    for(let i=0;i<k;i++){
        minHeap.enqueue(nums[i])
    }
    //now minHeap has k elements where front is min of them all
    for(let i=k;i<nums.length;i++){
        if((minHeap.front().element)<nums[i]){
            minHeap.dequeue()
            minHeap.enqueue(nums[i])
        }
    }
    return minHeap.front().element
};
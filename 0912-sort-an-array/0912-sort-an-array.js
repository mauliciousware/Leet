/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let minHeap = new MinHeap()
    // Step 1: Push all numbers into the heap
    for (let num of nums) {
        minHeap.push(num);
    }

    // Step 2: Extract them back in sorted order
    const result = [];
    while (minHeap.size() > 0) {
        result.push(minHeap.pop());
    }

    return result;
};
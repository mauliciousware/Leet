var topKFrequent = function(nums, k) {
    if (k === nums.length) return nums;
    // Step 1: Count frequency of each element using a hash map
    const count = new Map();
    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }
    // Step 2: Bucket sort by frequency
    const buckets = new Array(nums.length + 1);
    // Initialize each bucket as an empty array
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }
    // Place numbers in their corresponding frequency buckets
    for (const [num, freq] of count.entries()) {
        buckets[freq].push(num);
    }
    // Step 3: Flatten the buckets from highest to lowest frequency
    const flattened = [];
    
    // Start from the highest frequency (last bucket) and go downwards
    for (let i = buckets.length - 1; i >= 0; i--) {
        // If bucket has elements, add them to the flattened list
        for (const num of buckets[i]) {
            flattened.push(num);
        }
    }
    // Step 4: Take the first k elements (most frequent)
    const top = new Array(k);
    for (let i = 0; i < k; i++) {
        top[i] = flattened[i];
    }
    
    return top;
};


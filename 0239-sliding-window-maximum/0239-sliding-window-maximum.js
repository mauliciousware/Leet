var maxSlidingWindow = function(nums, k) {

    // Deque will store indices of elements
    // Values at these indices are maintained in decreasing order
    let deque = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {

        // Compute the start index of the current sliding window
        // Current window range is [i - k + 1, i]
        let windowStart = i - k + 1;

        // Remove indices from the front that are outside the current window
        // If an index is smaller than windowStart, it no longer belongs to the window
        if (deque.length > 0 && deque[0] < windowStart) {
            deque.shift(); // popFront
        }

        // Remove indices from the back whose values are smaller than the current element
        // They cannot be the maximum as long as the current element is in the window
        while (deque.length > 0) {
            let lastIndex = deque[deque.length - 1];

            if (nums[lastIndex] <= nums[i]) {
                deque.pop(); // popBack
            } else {
                break;
            }
        }

        // Add current index to the deque
        deque.push(i);

        // Once the first window is formed (i >= k - 1),
        // the front of the deque holds the index of the maximum element
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};

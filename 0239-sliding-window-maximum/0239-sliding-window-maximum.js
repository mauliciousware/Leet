var maxSlidingWindow = function(nums, k) {
    // Deque will store indices of elements
    // Values corresponding to these indices will be in decreasing order
    let deque = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {

        // Explicitly compute the start of the window
        let windowStart = i - k + 1;
        // 1️⃣ Remove indices that are out of the current window
        // Current window range is [i - k + 1, i]
        if (deque.length > 0 && deque[0] < windowStart) {
            deque.shift();
        }

        // 2️⃣ Remove all smaller elements from the back
        // They can never be the maximum if current element is bigger
        while (deque.length > 0) {
            let lastIndex = deque[deque.length - 1];

            if (nums[lastIndex] <= nums[i]) {
                deque.pop();
            } else {
                break;
            }
        }

        // 3️⃣ Add current index to the deque
        deque.push(i);

        // 4️⃣ Once the first window is formed, record the maximum
        // Front of deque always holds index of the max element
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};

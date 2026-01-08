var maxSlidingWindow = function(nums, k) {
    let deque = []; // stores indices
    let res = [];

    for (let i = 0; i < nums.length; i++) {

        // remove indices out of the current window
        if (deque.length && deque[0] <= i - k) {
            deque.shift();
        }

        // maintain decreasing order
        while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }

        // add current index
        deque.push(i);

        // window is ready
        if (i >= k - 1) {
            res.push(nums[deque[0]]);
        }
    }

    return res;
};

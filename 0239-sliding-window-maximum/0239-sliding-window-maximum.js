var maxSlidingWindow = function(nums, k) {

    // https://codepen.io/mrmaddy7/pen/LEZZPva
    
    let deque = []; // Deque will store indices of elements
    // Values corresponding to these indices will be in decreasing order
    let result = []; // This will store result

    for (let i = 0; i < nums.length; i++) {

        // Explicitly compute the start of the window
        let windowStart = i - k + 1; // This basically tells, which part of window will i fall on 

        //Remove indices that are out of the current window
        // Current window range is [i - k + 1, i]
        if (deque.length > 0 && deque[0] < windowStart) {
            //this basically tells anything below dequeue[0](which is holding indices should be removed)
            //dequeue[0] is passed my window
            //this keep my window size intact
            //Window size controlling popFront()
            deque.shift();
        }

        //Remove all smaller elements from the back
        // They can never be the maximum if current element is bigger
        while (deque.length > 0) {
            //Keep comparing value of last index of dequeu
            let lastIndex = deque[deque.length - 1];

            if (nums[lastIndex] <= nums[i]) {
                //value of the nums at last index controls popBack()
                deque.pop();
            } else {
                break;
            }
        }

        //Add current index to the deque
        deque.push(i);

        //Once the first window is formed, record the maximum
        // Front of deque always holds index of the max element
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};

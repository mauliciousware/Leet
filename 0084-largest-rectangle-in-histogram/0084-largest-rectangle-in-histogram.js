/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const st = [];
    st.push(-1);
    const n = heights.length;
    let max = 0;
    var i;
    
    // Helper function to peek at top of stack
    const peek = () => st[st.length - 1];
    
    for(i = 0; i < n; i++){
        while(peek() != -1 && heights[i] < heights[peek()]){
            let popped = st.pop();
            let curr = heights[popped] * (i - peek() - 1);
            max = Math.max(max, curr);
        }
        st.push(i);
    }
    
    while(peek() != -1){
        let popped = st.pop();
        let curr = heights[popped] * (i - peek() - 1);
        max = Math.max(max, curr);
    }
    
    return max;
};
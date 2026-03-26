var largestRectangleArea = function(heights) {
    const st = [];
    let max = 0;
    heights = [...heights, 0]; // sentinel

    for (let i = 0; i < heights.length; i++) {
        while (st.length && heights[i] < heights[st[st.length - 1]]) {
            const poppedIdx = st.pop();
            const width = st.length === 0 ? i : i - st[st.length - 1] - 1;
            const curr = heights[poppedIdx] * width;
            max = Math.max(max, curr);
        }
        st.push(i);
    }

    return max;
};
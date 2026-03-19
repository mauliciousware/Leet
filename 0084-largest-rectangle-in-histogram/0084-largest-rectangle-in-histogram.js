/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const st = [];
    st.push(-1);
    const n = heights.length;
    let max = 0;
    var i;  // declared outside so it's accessible in final while loop
    
    for(i = 0; i < n; i++){
        while(st[st.length-1] != -1 && heights[i] < heights[st[st.length-1]]){
            let popped = st.pop();
            let curr = heights[popped] * (i - st[st.length-1] - 1);
            max = Math.max(max, curr);
        }
        st.push(i);
    }
    while(st[st.length-1] != -1){
        let popped = st.pop();
        let curr = heights[popped] * (i - st[st.length-1] - 1);
        max = Math.max(max, curr);
    }
    return max;
};
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let st = [] // store indices of height
    st.push(-1)
    let max= 0 
    let i = 0 // so outher while loop can access it
    for(i = 0;i<heights.length;i++){
        while(st[st.length-1] != -1 && heights[i]<heights[st[st.length-1]]){
            //process
            let poppedIdx = st.pop()
            let curr = heights[poppedIdx] * (i - st[st.length-1] - 1);
            max = Math.max(curr,max)
        }
        //current i is greater than stack.peek()
        st.push(i)
    }
    //stack still not empty
    while(st[st.length-1]!=-1){
            let poppedIdx = st.pop()
            let curr = heights[poppedIdx] * (i - st[st.length-1] - 1);
            max = Math.max(curr,max)
    }
    return max
};
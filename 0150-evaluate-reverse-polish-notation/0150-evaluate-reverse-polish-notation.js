/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    
    for (let s of tokens) {
        if (s === "+") stack.push(stack.pop() + stack.pop());
        else if (s === "-") {
            let val1 = stack.pop();
            let val2 = stack.pop();
            stack.push(val2 - val1);  // Order matters: val2 - val1
        } 
        else if (s === "*") stack.push(stack.pop() * stack.pop());
        else if (s === "/") {
            let val1 = stack.pop();
            let val2 = stack.pop();
            stack.push(Math.trunc(val2 / val1)); // Use Math.trunc() to handle negatives correctly
        } 
        else {
            stack.push(Number(s)); // Convert to number before pushing
        }
    }
    
    return stack.pop(); // Pop the final result
};

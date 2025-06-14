const decodeString = (s) => {
    const stack = [];

    for (let char of s) {
        if (char !== "]") {
            stack.push(char);
            continue;
        }

        // Step 1: Extract the string inside `[ ]`
        let str = "";
        while (stack.length && stack[stack.length - 1] !== "[") {
            str = stack.pop() + str;
        }
        stack.pop(); // Remove the '['

        // Step 2: Extract the repetition count (digits)
        let numStr = "";
        while (stack.length && isDigit(stack[stack.length - 1])) {
            numStr = stack.pop() + numStr; // Fixed: Added ()
        }
        const count = Number(numStr) || 0;

        // Step 3: Push the decoded string back to stack
        stack.push(str.repeat(count));
    }

    return stack.join("");
};

function isDigit(char) {
    return char >= "0" && char <= "9";
}
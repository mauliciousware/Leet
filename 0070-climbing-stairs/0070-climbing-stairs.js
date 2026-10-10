/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    n = n + 1

    let val1 = 1
    let val2 = 1
    let val3 = 0

    for (let i = n - 3; i >= 0; i--) {
        // Calculate ways from current position
        val3 = val1 + val2

        // Shift values for next iteration
        val2 = val1
        val1 = val3
    }

    return val1
};
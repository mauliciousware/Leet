
var countArrangement = function(n) {
    let count = 0
    let res = []

    function dfs(pos, num) {

        // All positions are filled
        if (pos > n) {
            count++
            return
        }

        // No more numbers to try at this position
        if (num > n) return

        // TAKE
        if (!res.includes(num) &&
            (num % pos === 0 || pos % num === 0)) {

            res.push(num)

            // Move to next position
            // Start checking numbers from 1 again
            dfs(pos + 1, 1)

            res.pop()
        }

        // NOT TAKE
        // Try next number at the same position
        dfs(pos, num + 1)
    }

    dfs(1, 1)
    return count
};

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = []
    let board = Array.from({ length: n }, () => Array(n).fill(false))

    function helper(row) {
        if (row === n) {
        //! We placed all the queens take a snapshot of board and save it
            let list = []

            for (let i = 0; i < n; i++) {
                let str = ""

                for (let j = 0; j < n; j++) {
                    if (board[i][j]) {
                        str += "Q"
                    } else {
                        str += "."
                    }
                }

                list.push(str)
            }

            result.push(list)
            return
        }

        for (let j = 0; j < n; j++) {
            if (isValid(row, j)) {
                board[row][j] = true

                helper(row + 1)

                board[row][j] = false
            }
        }
    }

    function isValid(i, j) {
        let r = i
        let c = j

        // Check vertically upward
        while (r >= 0) {
            if (board[r][c]) return false
            r--
        }

        // Check upper-left diagonal
        r = i
        c = j

        while (r >= 0 && c >= 0) {
            if (board[r][c]) return false
            r--
            c--
        }

        // Check upper-right diagonal
        r = i
        c = j

        while (r >= 0 && c < n) {
            if (board[r][c]) return false
            r--
            c++
        }

        return true
    }

    helper(0)

    return result
}
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0

    // Odd-length palindromes
    for (let i = 0; i < s.length; i++) {
        let left = i
        let right = i

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++
            left--
            right++
        }
    }

    // Even-length palindromes
    for (let i = 0; i < s.length; i++) {
        let left = i
        let right = i + 1

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++
            left--
            right++
        }
    }

    return count
};
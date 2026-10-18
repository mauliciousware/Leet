/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0
    let maxLength = 0

    // Odd-length palindromes
    for (let i = 0; i < s.length; i++) {
        let left = i
        let right = i

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            let length = right - left + 1

            // Update longest palindrome
            if (length > maxLength) {
                maxLength = length
                start = left
            }

            left--
            right++
        }
    }

    // Even-length palindromes
    for (let i = 0; i < s.length; i++) {
        let left = i
        let right = i + 1

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            let length = right - left + 1

            // Update longest palindrome
            if (length > maxLength) {
                maxLength = length
                start = left
            }

            left--
            right++
        }
    }

    return s.slice(start, start + maxLength)
};
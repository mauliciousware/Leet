/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    const queue = [[beginWord, 1]];

    while (queue.length) {
        const [word, level] = queue.shift();

        if (word === endWord) return level;

        const nextWords = getNextWords(word, wordSet);

        for (const next of nextWords) {
            queue.push([next, level + 1]);
            wordSet.delete(next); // mark visited
        }
    }

    return 0;
};

/**
 * Generates all valid one-letter transformations
 */
function getNextWords(word, wordSet) {
    const res = [];

    for (let i = 0; i < word.length; i++) {
        for (let c = 97; c <= 122; c++) {
            const ch = String.fromCharCode(c);
            if (ch === word[i]) continue;

            const newWord =
                word.slice(0, i) + ch + word.slice(i + 1);

            if (wordSet.has(newWord)) {
                res.push(newWord);
            }
        }
    }

    return res;
}

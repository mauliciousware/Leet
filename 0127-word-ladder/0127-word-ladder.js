/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    let queue = [[beginWord, 1]]; // word, transformation length

    while (queue.length) {
        const [word, level] = queue.shift();

        if (word === endWord) return level;

        for (let i = 0; i < word.length; i++) {
            for (let c = 97; c <= 122; c++) { // 'a' to 'z'
                const char = String.fromCharCode(c);
                // if (char === word[i]) continue; //dont process duplicates

                const newWord =
                    word.slice(0, i) + char + word.slice(i + 1);

                if (wordSet.has(newWord)) {
                    queue.push([newWord, level + 1]);
                    wordSet.delete(newWord); // mark visited
                }
            }
        }
    }

    return 0;
};

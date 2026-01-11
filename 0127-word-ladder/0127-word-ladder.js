/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList)
    if(!wordSet.has(endWord)) return 0 

    let queue = [[beginWord,1]]

    while(queue.length){
        let [word,level] = queue.shift()

        if(word == endWord) return level

        for(let i =0;i<word.length;i++){
            for(let j=97; j<= 122;j++){
                let char = String.fromCharCode(j)

                let before = word.slice(0,i)
                let after = word.slice(i+1)
                let newWord = before + char + after
                if(wordSet.has(newWord)){
                    queue.push([newWord,level +1])
                    wordSet.delete(newWord) // mark visited
                }
            }
        }
    }
    return 0
};
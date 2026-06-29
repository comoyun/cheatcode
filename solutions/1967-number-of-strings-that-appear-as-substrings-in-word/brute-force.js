// time: O(n * (m * k))
// space: O(1)

/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
const numOfStrings = (patterns, word) => {
    let result = 0;
    for (const pattern of patterns) 
        if (word.indexOf(pattern) > -1) result++;
    return result;
};

// time: O(n)
// space: O(n)

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
const findWordsContaining = (words, x) => {
    const result = [];

    /* NOTE: You can use str.indexOf or str.includes functions */
    const contains = str => {
        for (const char of str) if (char === x) return true;
        return false;
    };

    for (let i = 0; i < words.length; i++)
        if (contains(words[i])) result.push(i);

    return result;
};

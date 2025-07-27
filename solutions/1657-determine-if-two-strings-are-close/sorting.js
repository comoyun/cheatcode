// time: O(n)
// space: O(n)

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = (word1, word2) => {
    const countA = new Array(26).fill(0),
        countB = new Array(26).fill(0);
    for (const char of word1) countA[char.charCodeAt(0) - 97]++;
    for (const char of word2) countB[char.charCodeAt(0) - 97]++;

    for (let i = 0; i < countA.length; i++)
        if (countA[i] > 0 !== countB[i] > 0) return false;

    countA.sort((a, b) => b - a);
    countB.sort((a, b) => b - a);

    for (let i = 0; i < countA.length; i++)
        if (countA[i] !== countB[i]) return false;
    return true;
};

/*
 * @title: Hashmap
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = (word1, word2) => {
    if (word1.length !== word2.length) return false;

    const freq1 = {},
        freq2 = {},
        counts = new Array(word1.length).fill(0);

    for (const char of word1) freq1[char] = (freq1[char] || 0) + 1;
    for (const key in freq1) counts[freq1[key] - 1]++;

    for (const char of word2) {
        if (!(char in freq1)) return false;
        freq2[char] = (freq2[char] || 0) + 1;
    }
    for (const key in freq2) {
        if (!counts[freq2[key] - 1]) return false;
        counts[freq2[key] - 1]--;
    }

    return true;
};

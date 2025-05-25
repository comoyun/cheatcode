/*
 * @title: Hashmap
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {string[]} words
 * @return {number}
 */
const longestPalindrome = words => {
    let count = 0,
        mid = false;
    const pair = {};

    for (let word of words) pair[word] = (pair[word] || 0) + 1;

    for (let word in pair) {
        const rev = word[1] + word[0];
        if (word === rev) {
            const freq = pair[word];
            count += Math.floor(freq / 2) * 4;
            if (freq % 2) mid = true;
        } else if (pair[rev]) {
            const matched = Math.min(pair[word], pair[rev]);
            count += matched * 4;
            pair[word] = 0;
            pair[rev] = 0;
        }
    }

    return count + (mid ? 2 : 0);
};

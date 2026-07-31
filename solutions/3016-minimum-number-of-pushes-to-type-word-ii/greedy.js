// time: O(n)
// space: O(1)

/**
 * @param {string} word
 * @return {number}
 */
const minimumPushes = word => {
    const freq = new Array(26).fill(0);

    for (const char of word) freq[char.charCodeAt(0) - 97]++;
    freq.sort((a, b) => b - a);

    let result = 0;
    for (let i = 0; i < 26; i++) result += freq[i] * (Math.floor(i / 8) + 1);

    return result;
};


// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = s => {
    const freq = {};
    let middle = 0;
    let evenCounts = 0;

    for (const char of s) freq[char] = (freq[char] || 0) + 1;
    for (const key in freq) {
        const isOdd = freq[key] & 1;
        if (isOdd) middle = 1;
        evenCounts += isOdd ? freq[key] - 1 : freq[key];
    }

    return evenCounts + middle;
};
